"use client";

import React, { useState } from "react";

import Button from "src/components/buttons/Button";
import CheckboxColor from "src/components/forms/checkboxColor/checkboxColor";
import InputFieldColor from "src/components/forms/inputFieldColor/inputFieldColor";
import Text from "src/components/text/Text";
import { EventRegistrationSection } from "studio/lib/interfaces/pages";

import style from "./eventRegistration.module.css";

interface EventRegistrationProps {
  section: EventRegistrationSection;
}

export default function EventRegistration({ section }: EventRegistrationProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formStatus, setFormStatus] = useState<{
    type: "error" | "success" | null;
    message: string | null;
  }>({ type: null, message: null });

  const { recordID } = section;

  function toggleTerms() {
    setHasAcceptedTerms((prev) => !prev);
  }

  function resetForm() {
    setEmail("");
    setName("");
    setLastName("");
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
        message: "Please enter your email address",
      });
      setIsLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setFormStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      setIsLoading(false);
      return;
    }

    if (!name) {
      setFormStatus({ type: "error", message: "Please enter your first name" });
      setIsLoading(false);
      return;
    }

    if (!lastName) {
      setFormStatus({ type: "error", message: "Please enter your last name" });
      setIsLoading(false);
      return;
    }

    if (!hasAcceptedTerms) {
      setFormStatus({
        type: "error",
        message: "Du må godta vilkårene for å registrere deg",
      });
      setIsLoading(false);
      return;
    }
    try {
      const response = await fetch("/api/hubSpot/eventRegistration/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstname: name,
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
        message:
          "Noe gikk galt under registreringen. Vennligst prøv igjen senere.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      {isSubmitted ? (
        <div className={style.registrationSuccess}>
          <Text type="labelLarge">Takk for din påmelding!</Text>
          <Button onClick={registerAgain}>Meld på en annen bruker</Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={style.eventRegistration}>
          <div className={style.eventRegistration__wrapper}>
            <InputFieldColor
              name="firstName"
              label="Fornavn"
              type="text"
              required
              value={name}
              onChange={(_name, value) => setName(value)}
            />
            <InputFieldColor
              name="lastName"
              label="Etternavn"
              type="text"
              required
              value={lastName}
              onChange={(_name, value) => setLastName(value)}
            />
          </div>
          <InputFieldColor
            name="company"
            label="Bedrift"
            type="text"
            value={company}
            onChange={(_name, value) => setCompany(value)}
          />
          <div className={style.eventRegistration__wrapper}>
            <InputFieldColor
              name="email"
              label="Email"
              type="email"
              required
              value={email}
              onChange={(_name, value) => setEmail(value)}
            />
            <InputFieldColor
              name="phone"
              label="Telefon"
              type="tel"
              value={phone}
              onChange={(_name, value) => setPhone(value)}
            />
          </div>
          <CheckboxColor
            name="terms"
            label="Jeg godtar vilkårene for registrering"
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
            {isLoading ? "Submitting..." : "Meld interesse"}
          </button>
        </form>
      )}
    </div>
  );
}
