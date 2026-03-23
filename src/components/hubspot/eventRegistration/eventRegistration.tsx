"use client";

import Link from "next/link";
import React, { useState } from "react";

import CheckboxColor from "src/components/forms/checkboxColor/checkboxColor";
import InputFieldColor from "src/components/forms/inputFieldColor/inputFieldColor";
import Text from "src/components/text/Text";
import { useTranslation } from "src/utils/hooks/useTranslation";
import { IHubSpotRegistrationResponse } from "studio/lib/interfaces/hubSpot";
import { EventRegistrationSection } from "studio/lib/interfaces/pages";

import style from "./eventRegistration.module.css";
import Closed from "./status/closed";
import RegistrationComplete from "./status/registrationComplete";

interface EventRegistrationProps {
  section: EventRegistrationSection;
  language?: "en" | "no";
}

type Statuses =
  | "emailRequired"
  | "emailValid"
  | "nameRequired"
  | "phoneValid"
  | "companyRequired"
  | "generalError";

export default function EventRegistration({
  section,
  language,
}: EventRegistrationProps) {
  const lang = language || "no";
  const { t } = useTranslation(lang);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [hasAcceptedInterests, setHasAcceptedInterests] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formStatus, setFormStatus] = useState<
    {
      type: Statuses;
      message: string;
    }[]
  >([]);

  const { recordID, submitButtonText, date, interests, companyRequired } =
    section;

  const today = new Date();
  const oneDay = 24 * 60 * 60 * 1000;
  const eventDate = date ? new Date(date) : null;
  const isActive = eventDate
    ? new Date(eventDate.getTime() + oneDay) > today
    : false;
  const generalError = formStatus.find(
    (status) => status.type === "generalError",
  );
  const interestsString: string = interests.join(";");

  function toggleInterests() {
    setHasAcceptedInterests((prev) => !prev);
  }

  function resetForm() {
    setEmail("");
    setName("");
    setPhone("");
    setCompany("");
  }

  function registerAgain() {
    resetForm();
    setIsSubmitted(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus([]);

    const newErrors: { type: Statuses; message: string }[] = [];

    // Check all form fields
    if (!email) {
      newErrors.push({
        type: "emailRequired",
        message: t("eventRegistration.errors.emailRequired"),
      });
    }

    if (email && !/\S+@\S+\.\S+/.test(email)) {
      newErrors.push({
        type: "emailValid",
        message: t("eventRegistration.errors.emailInvalid"),
      });
    }

    if (!name) {
      newErrors.push({
        type: "nameRequired",
        message: t("eventRegistration.errors.nameRequired"),
      });
    }

    if (phone && !/^\+?[0-9\s]+$/.test(phone)) {
      newErrors.push({
        type: "phoneValid",
        message: t("eventRegistration.errors.phoneInvalid"),
      });
    }

    if (companyRequired && !company) {
      newErrors.push({
        type: "companyRequired",
        message: t("eventRegistration.errors.companyRequired"),
      });
    }

    if (newErrors.length > 0) {
      setFormStatus(newErrors);
      setIsLoading(false);
      return;
    }

    try {
      const nameParts = name.split(" ");
      const lastName = nameParts[nameParts.length - 1];
      const firstName = nameParts.slice(0, -1).join(" ");

      const response = await fetch("/api/hubSpot/eventRegistration/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstname: firstName,
          lastname: lastName,
          phone,
          company,
          recordID,
          ...(hasAcceptedInterests && { interests: interestsString }),
        }),
      });

      const data: IHubSpotRegistrationResponse = await response.json();
      const error = data.data.errors ? data.data.errors[0] : null;
      if (error) {
        setFormStatus([
          {
            type: "generalError",
            message: error.message,
          },
        ]);
        setIsLoading(false);
        return;
      }
      setIsSubmitted(true);
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isActive ? (
        <div>
          {isSubmitted ? (
            <RegistrationComplete
              name={name}
              onClick={registerAgain}
              language={language}
            />
          ) : (
            <form onSubmit={handleSubmit} className={style.eventRegistration}>
              <InputFieldColor
                name="firstName"
                label={t("eventRegistration.name")}
                type="text"
                required
                value={name}
                onChange={(_name, value) => setName(value)}
                error={
                  formStatus.find((status) => status.type === "nameRequired")
                    ?.message
                }
              />
              <InputFieldColor
                name="company"
                label={t("eventRegistration.company")}
                type="text"
                required={companyRequired}
                value={company}
                onChange={(_name, value) => setCompany(value)}
                error={
                  formStatus.find((status) => status.type === "companyRequired")
                    ?.message
                }
              />
              <div className={style.eventRegistration__wrapper}>
                <InputFieldColor
                  name="email"
                  label={t("eventRegistration.email")}
                  type="email"
                  required
                  value={email}
                  onChange={(_name, value) => setEmail(value)}
                  error={
                    formStatus.find(
                      (status) =>
                        status.type === "emailRequired" ||
                        status.type === "emailValid",
                    )?.message
                  }
                />
                <InputFieldColor
                  name="phone"
                  label={t("eventRegistration.phone")}
                  type="tel"
                  value={phone}
                  onChange={(_name, value) => setPhone(value)}
                  error={
                    formStatus.find((status) => status.type === "phoneValid")
                      ?.message
                  }
                />
              </div>

              <CheckboxColor
                name="interests"
                label={t("eventRegistration.interests")}
                value={hasAcceptedInterests}
                onChange={toggleInterests}
              />
              <div className={style.terms}>
                <Text type="lead">
                  {t("eventRegistration.terms.gerneral")}{" "}
                  <Link href={t("eventRegistration.terms.link.url")}>
                    {" "}
                    {t("eventRegistration.terms.link.text")}
                  </Link>{" "}
                  {t("eventRegistration.terms.forEvent")}
                </Text>
              </div>
              {generalError && (
                <span className={style.eventRegistration__error}>
                  <Text type="normal">{generalError.message}</Text>
                </span>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className={style.eventRegistration__submit}
              >
                {isLoading
                  ? t("eventRegistration.submitting")
                  : submitButtonText || t("eventRegistration.submit")}
              </button>
            </form>
          )}
        </div>
      ) : (
        <Closed language={language} />
      )}
    </>
  );
}
