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

const SignupForm = () => {
  return (
    <div className={styles.wrapper}>
      {/* Form */}
      <form className={styles.form}>
        {/* Name */}
        <div className={styles.flex_col}>
          <h2>
            Nom complet <span className="text-red-600">*</span>
          </h2>
          <Input type="text" placeholder="John doe" required />
        </div>
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
        {/* University */}
        <div className={styles.flex_col}>
          <h2>
            Votre université <span className="text-red-600">*</span>
          </h2>
          <Input type="text" placeholder="E.g: Fst Casablanca" required />
        </div>
        {/* Sélecteur */}
        <div className={styles.flex_col}>
          <h2>
            Profession <span className="text-red-600">*</span>
          </h2>
          <Select required className="w-full">
            <SelectTrigger className={`${styles.font} w-full`}>
              <SelectValue placeholder="Vous êtes ?" />
            </SelectTrigger>
            <SelectContent className={styles.montreal}>
              <SelectGroup>
                <SelectLabel>Profession</SelectLabel>
                <SelectItem className={styles.montreal} value="prof">
                  Professeur
                </SelectItem>
                <SelectItem className={styles.montreal} value="chercheur">
                  Chercheur
                </SelectItem>
                <SelectItem className={styles.montreal} value="etudiant">
                  Étudiant(e)
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Zone de texte */}
        <div className={styles.flex_col}>
          <h2>
            Votre message <span className="text-red-600">*</span>
          </h2>
        </div>
        <Textarea placeholder="Quel est votre cas d'utilisation ?" required />
        <input className={styles.submit} type="submit" value="Envoyer" />
      </form>
      {/* Already have an account */}
      <div className={styles.acc}>
        <h1>
          Vous avez déjà un compte ?
          <Link href="/login">Connectez-vous maintenant</Link>
        </h1>
      </div>
    </div>
  );
};

export default SignupForm;
