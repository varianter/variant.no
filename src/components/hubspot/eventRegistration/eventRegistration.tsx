"use client";

import React, { useState } from "react";

import CheckboxColor from "src/components/forms/checkboxColor/checkboxColor";
import InputFieldColor from "src/components/forms/inputFieldColor/inputFieldColor";
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

  const [formStatus, setFormStatus] = useState<{
    type: "error" | "success" | null;
    message: string | null;
  }>({ type: null, message: null });

  const {
    recordID,
    basicTitle,
    emailLabel,
    firstNameLabel,
    lastNameLabel,
    phoneLabel,
    companyLabel,
    termsAndConditionsLabel,
    submitButtonText,
    successMessage,
    errorMessage,
  } = section;

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

    if (!phone) {
      setFormStatus({
        type: "error",
        message: "Please enter your phone number",
      });
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

      setFormStatus({
        type: "success",
        message: successMessage,
      });

      resetForm();
    } catch (error) {
      console.error("Registration error:", error);
      setFormStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={style.eventRegistration}>
      <h2>{basicTitle}</h2>
      <div className={style.eventRegistration__wrapper}>
        <InputFieldColor
          name="firstName"
          label={firstNameLabel}
          type="text"
          required
          value={name}
          onChange={(_name, value) => setName(value)}
        />
        <InputFieldColor
          name="lastName"
          label={lastNameLabel}
          type="text"
          required
          value={lastName}
          onChange={(_name, value) => setLastName(value)}
        />
      </div>
      <InputFieldColor
        name="company"
        label={companyLabel}
        type="text"
        value={company}
        onChange={(_name, value) => setCompany(value)}
      />
      <div className={style.eventRegistration__wrapper}>
        <InputFieldColor
          name="email"
          label={emailLabel}
          type="email"
          required
          value={email}
          onChange={(_name, value) => setEmail(value)}
        />
        <InputFieldColor
          name="phone"
          label={phoneLabel}
          type="text"
          value={phone}
          onChange={(_name, value) => setPhone(value)}
        />
      </div>
      <CheckboxColor
        name="terms"
        label={termsAndConditionsLabel}
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
        {isLoading ? "Submitting..." : submitButtonText}
      </button>
    </form>
  );
}
