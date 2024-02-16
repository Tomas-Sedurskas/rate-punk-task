"use client";

import Image from "next/image";
import styles from "@/components/form/form.module.scss";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
});

export const Form = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await fetch(
      "https://api.jsonbin.io/v3/b/65ceb05c266cfc3fde8adcfd",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Bin-Name": "Emails",
          "X-Bin-Private": "false",
          "X-Master-Key":
            "$2a$10$M4fTqlIrjJgASBbmj83eMOmwPnbYNpjUbyeyqZa.bTNAF5mGFXFOy",
        },
        body: JSON.stringify({
          email: values.email,
        }),
      }
    );

    if (response.ok) {
      setIsSuccess(true);
    } else {
      setError("email", { type: "custom", message: "Something went wrong!" });
      throw new Error("Something went wrong!");
    }

    return response.json();
  }

  const InputMessage = () => {
    if (isSuccess) {
      return (
        <div className={styles.form__success}>
          <Image src="/success.svg" alt="success icon" width="32" height="32" />
          <p className={styles.form__success__text}>Your email is confirmed!</p>
        </div>
      );
    }

    if (errors.email) {
      return <span className={styles.form__error}>{errors.email.message}</span>;
    }

    return null;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <InputMessage />

      {isSuccess ? (
        <>
          <div className={styles.form__inputWrapper}>
            <input
              className={styles.form__input}
              placeholder="https://ratepunk.com/referral"
            />
            <button className={styles.form__copy} type="button">
              Copy
            </button>
          </div>
          <button type="button" className={styles.form__button}>
            Copy URL
          </button>
        </>
      ) : (
        <>
          <div className={styles.form__inputWrapper}>
            <Image src="/email.svg" alt="email icon" width="20" height="17" />
            <input
              className={styles.form__input}
              placeholder="Enter your email address"
              {...register("email", { required: true })}
            />
          </div>
          <button type="submit" className={styles.form__button}>
            Get referal link
          </button>
        </>
      )}
    </form>
  );
};
