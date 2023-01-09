import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "../Button";

import styles from "./ContactForm.module.scss";

export function ContactForm() {
  const [state, handleSubmit] = useForm("moqzajbn");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="Name">Name</label>
        <input id="Name" type="text" name="Name" placeholder="Ben Nalette" />
        <ValidationError prefix="Name" field="Name" errors={state.errors} />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="ben@naletteconsulting.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Type a message here"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <Button
        secondary
        label="Submit"
        type="submit"
        disabled={state.submitting}
      />
    </form>
  );
}
