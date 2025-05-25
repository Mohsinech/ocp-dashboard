import React from "react";
import { HeaderDashboard, MoroccoMap } from "@/components/index";
import styles from "./tab.module.css";

const page = () => {
  return (
    <>
      <HeaderDashboard />
      <section className={styles.grid}>
        {/* Map */}
        <div className={styles.map}>
          <MoroccoMap />
        </div>
        {/*  */}
      </section>

      {/* Charts */}
      <div className={styles.charts}></div>
    </>
  );
};

export default page;
