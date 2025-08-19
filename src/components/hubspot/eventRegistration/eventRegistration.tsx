"use client";

import React, { useState } from "react";

import CheckboxColor from "src/components/forms/checkboxColor/checkboxColor";
import InputFieldColor from "src/components/forms/inputFieldColor/inputFieldColor";
import { useTranslation } from "src/utils/hooks/useTranslation";
import { EventRegistrationSection } from "studio/lib/interfaces/pages";

import style from "./eventRegistration.module.css";
import Closed from "./status/closed";
import RegistrationComplete from "./status/registrationComplete";

interface EventRegistrationProps {
  section: EventRegistrationSection;
  language?: "en" | "no";
}

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
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(true);

  const [formStatus, setFormStatus] = useState<{
    type: "error" | "success" | null;
    message: string | null;
  }>({ type: null, message: null });

  const { recordID, date } = section;

  const today = new Date();
  const eventDate = date ? new Date(date) : null;
  const isActive = eventDate ? eventDate.getDate() >= today.getDate() : false;

  function toggleTerms() {
    setHasAcceptedTerms((prev) => !prev);
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
    setFormStatus({ type: null, message: null });

    // Check all form fields
    if (!email) {
      setFormStatus({
        type: "error",
        message: t("eventRegistration.emailRequired"),
      });
      setIsLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setFormStatus({
        type: "error",
        message: t("eventRegistration.emailInvalid"),
      });
      setIsLoading(false);
      return;
    }

    if (!name) {
      setFormStatus({
        type: "error",
        message: t("eventRegistration.nameRequired"),
      });
      setIsLoading(false);
      return;
    }

    if (!hasAcceptedTerms) {
      setFormStatus({
        type: "error",
        message: t("eventRegistration.termsRequired"),
      });
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
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      setIsSubmitted(true);
    } catch (error) {
      console.error("Registration error:", error);
      setFormStatus({
        type: "error",
        message: t("eventRegistration.registrationFailed"),
      });
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
              />
              <InputFieldColor
                name="company"
                label={t("eventRegistration.company")}
                type="text"
                value={company}
                onChange={(_name, value) => setCompany(value)}
              />
              <div className={style.eventRegistration__wrapper}>
                <InputFieldColor
                  name="email"
                  label={t("eventRegistration.email")}
                  type="email"
                  required
                  value={email}
                  onChange={(_name, value) => setEmail(value)}
                />
                <InputFieldColor
                  name="phone"
                  label={t("eventRegistration.phone")}
                  type="tel"
                  value={phone}
                  onChange={(_name, value) => setPhone(value)}
                />
              </div>
              <CheckboxColor
                name="terms"
                label={t("eventRegistration.terms")}
                value={hasAcceptedTerms}
                onChange={toggleTerms}
                required
              />
              {formStatus.message && (
                <div
                  className={`form-message ${formStatus.type === "error" ? "error" : "success"}`}
                >
                  {formStatus.message}
                </div>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className={style.eventRegistration__submit}
              >
                {isLoading
                  ? t("eventRegistration.submitting")
                  : "Meld interesse"}
              </button>
            </form>
          )}
        </div>
      ) : (
        <Closed />
      )}
    </>
  );
}
