import React from "react";
import { HeaderDashboard, MoroccoMap } from "@/components/index";
import styles from "./tab.module.css";
import { Component } from "./components/chartOne/ChartOne";

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
      <div className={styles.charts}>
        <h1>* Browse analytics</h1>

        {/* First charts */}
        <div className={styles.first_chart}>
          <h1>First Chart</h1>
          <Component />
        </div>
      </div>
    </>
  );
};

export default page;
