import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import styles from "./form.module.css";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className={styles.wrapper}>
      {/* Form */}
      <form className={styles.form}>
        {/* Email */}
        <div className={styles.flex_col}>
          <h2>
            Votre email <span className="text-red-600">*</span>
          </h2>
          <Input type="email" placeholder="johndoe@gmail.com" required />
        </div>
        {/* Password */}
        <div className={styles.flex_col}>
          <h2>
            Mot de pass <span className="text-red-600">*</span>
          </h2>
          <Input type="password" placeholder="*****" required />
        </div>
        {/* SUbmit */}
        <input className={styles.submit} type="submit" value="Envoyer" />
      </form>
      {/* Pas encore de compte ? */}
      <div className={styles.acc}>
        <h1>
          Pas encore de compte ?{" "}
          <Link href="/signup" className={styles.link}>
            inscrivez-vous maintenant
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default LoginForm;
