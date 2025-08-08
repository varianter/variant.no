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
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Submitting..." : submitButtonText}
      </button>
    </form>
  );
}
