import { useState } from "react";

import styles from "./ContactForm.module.css";

import Notification from "../Notification/Notification";

export default () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      message: "Pending...",
      status: "pending",
      title: "Pending...",
    });

    const formData = new FormData(event.target);

    const email = formData.get("email");
    const message = formData.get("message");
    const name = formData.get("name");

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify({ email, message, name }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (response.ok) {
        setStatus({
          message: "Success!",
          status: "success",
          title: "Success!",
        });
      } else {
        setStatus({ message: "Error!", status: "error", title: "Error!" });
      }
    } catch (error) {
      console.error(error);

      setStatus({ message: "Error!", status: "error", title: "Error!" });
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setStatus(null);
    }
  };

  return (
    <section className={styles.contact}>
      <h1>Ho can I help you?</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              name="email"
              required
              type="email"
              defaultValue="e@t.c"
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input id="name" name="name" required type="text" />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required rows={5} />
        </div>
        <div className={styles.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
      {status ? (
        <Notification
          message={status.message}
          status={status.status}
          title={status.title}
        />
      ) : null}
    </section>
  );
};
