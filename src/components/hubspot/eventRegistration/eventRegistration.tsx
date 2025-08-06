"use client";

import React, { useState } from "react";

import InputField from "src/components/forms/inputField/InputField";

export default function EventRegistration() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  // TODO: Get label from sanity with translations

  return (
    <form>
      <InputField
        name="email"
        label="email"
        type="email"
        required
        value={email}
        onChange={(_name, value) => setEmail(value)}
      />
      <InputField
        name="firstName"
        label="First Name"
        type="text"
        required
        value={name}
        onChange={(_name, value) => setName(value)}
      />
      <InputField
        name="lastName"
        label="Last Name"
        type="text"
        required
        value={lastName}
        onChange={(_name, value) => setLastName(value)}
      />
      <InputField
        name="phone"
        label="Phone"
        type="text"
        required
        value={phone}
        onChange={(_name, value) => setPhone(value)}
      />
    </form>
  );
}
