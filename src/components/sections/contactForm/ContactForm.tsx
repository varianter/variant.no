"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Text from "src/components/text/Text";
import { ContactFormSection } from "studio/lib/interfaces/pages";
import styles from "./contactForm.module.css";
import InputField from "src/components/forms/inputField/InputField";
import Button from "src/components/buttons/Button";
import InputTextArea from "src/components/forms/inputTextArea/InputTextArea";
import Checkbox from "src/components/forms/checkbox/Checkbox";
import { ContactData } from "src/app/api/contactForm/route";

interface SubmitStatus {
  message?: string;
  success?: boolean;
  loading: boolean;
}

interface ContactFormProps {
  data: ContactFormSection;
}

const ContactForm: React.FC<ContactFormProps> = ({ data }) => {
  const [formData, setFormData] = useState<ContactData>({
    name: "",
    email: "",
    company: "",
    country: "",
    message: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState<Partial<ContactData>>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const handleChange = (
    name: keyof ContactData | "privacyPolicy",
    value: string | boolean,
  ) => {
    if (name === "privacyPolicy" && typeof value === "boolean") {
      setIsChecked(value);
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value as string,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactData> = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message) newErrors.message = "Message is required";

    setErrorMessage(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitStatus({ loading: true });

      try {
        const response = await fetch("/api/contactForm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.success) {
          setSubmitStatus({
            message: "Thank you for messaging us!",
            loading: false,
            success: true,
          });
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitStatus({
          message:
            "Form was not sent due to a technical error. Please try again.",
          loading: false,
          success: false,
        });
      }
    }
  };

  return (
    <article className={styles.article}>
      <div className={styles.maxWrapper}>
        <Text type="h2">{data.basicTitle}</Text>
        <form
          aria-label="Contact"
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <div className={styles.inputWrapper}>
            <InputField
              label="Your name"
              name="name"
              value={formData.name}
              onChange={(name, value) =>
                handleChange(name as keyof ContactData, value)
              }
              error={errorMessage.name}
              required
            />
            <InputField
              label="Email address"
              name="email"
              type="email"
              value={formData.email}
              onChange={(name, value) =>
                handleChange(name as keyof ContactData, value)
              }
              error={errorMessage.email}
              required
            />
          </div>
          <div className={styles.inputWrapper}>
            <InputField
              label="Company"
              name="company"
              value={formData.company}
              onChange={(name, value) =>
                handleChange(name as keyof ContactData, value)
              }
            />
            <InputField
              label="Country"
              name="country"
              value={formData.country}
              onChange={(name, value) =>
                handleChange(name as keyof ContactData, value)
              }
            />
          </div>
          <InputTextArea
            label="Message"
            name="message"
            value={formData.message}
            onChange={(name, value) =>
              handleChange(name as keyof ContactData, value)
            }
            error={errorMessage.message}
            required
          />
          <Checkbox
            label={data.checkboxLabel}
            name="privacyPolicy"
            value={isChecked}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange("privacyPolicy", e.target.checked)
            }
          />
          {submitStatus?.message && (
            <span>
              <Text
                type="small"
                className={submitStatus.success ? styles.success : styles.error}
                aria-live="assertive"
              >
                {submitStatus.message}
              </Text>
            </span>
          )}
          <Button type="secondary" size="small" loading={submitStatus?.loading}>
            {submitStatus?.loading ? "Sending" : "Send"}
          </Button>
        </form>
      </div>
    </article>
  );
};

export default ContactForm;
