"use client";

import React, { useState } from "react";

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

  const { basicTitle, emailLabel, firstNameLabel, lastNameLabel, phoneLabel } =
    section;

  return (
    <form>
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
    </form>
  );
}
