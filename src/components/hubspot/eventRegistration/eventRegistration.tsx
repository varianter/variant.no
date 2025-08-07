"use client";

import React, { useState } from "react";

import Checkbox from "src/components/forms/checkbox/Checkbox";
import InputField from "src/components/forms/inputField/InputField";
import { EventRegistrationSection } from "studio/lib/interfaces/pages";

interface EventRegistrationProps {
  section: EventRegistrationSection;
}

export default function EventRegistration({ section }: EventRegistrationProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const {
    recordID,
    basicTitle,
    emailLabel,
    firstNameLabel,
    lastNameLabel,
    phoneLabel,
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
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({});

    try {
      if (!hasAcceptedTerms) {
        setSubmitStatus({
          success: false,
          message: "Du må godta vilkårene for å registrere deg",
        });
        throw new Error("You must accept the terms to register");
      }
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
          recordID,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitStatus({
        success: true,
        message: successMessage,
      });

      resetForm();
    } catch (error) {
      console.error("Registration error:", error);
      setSubmitStatus({
        success: false,
        message: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{basicTitle}</h2>
      <InputField
        name="email"
        label={emailLabel}
        type="email"
        required
        value={email}
        onChange={(_name, value) => setEmail(value)}
      />
      <InputField
        name="firstName"
        label={firstNameLabel}
        type="text"
        required
        value={name}
        onChange={(_name, value) => setName(value)}
      />
      <InputField
        name="lastName"
        label={lastNameLabel}
        type="text"
        required
        value={lastName}
        onChange={(_name, value) => setLastName(value)}
      />
      <InputField
        name="phone"
        label={phoneLabel}
        type="text"
        required
        value={phone}
        onChange={(_name, value) => setPhone(value)}
      />
      <Checkbox
        name="terms"
        label={"Jeg godtar at min personlige informasjon blir lagret i HubSpot"}
        value={hasAcceptedTerms}
        onChange={toggleTerms}
        required
      />
      {submitStatus.message && <div>{submitStatus.message}</div>}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Submitting..." : submitButtonText}
      </button>
    </form>
  );
}
