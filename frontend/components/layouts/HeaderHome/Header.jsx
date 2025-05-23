import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeaderHome = () => {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <Link href="/" className={styles.logo}>
        <img
          src="/assets/images/ocp.png"
          width={36}
          height={36}
          alt="OPC Group "
        />
      </Link>
      {/* CTA Button */}
      <div className={styles.cta}>
        <Button variant="secondary" className={`${styles.cta_btn} bg-white`}>
          <Link href="/login">Login</Link>
        </Button>
        <Button
          variant="outline"
          className={`${styles.cta_btn} border-[#171717] bg-transparent text-[#171717]`}
        >
          <Link href="/signup">Register</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default HeaderHome;
