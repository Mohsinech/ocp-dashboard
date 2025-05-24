"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_moroccoLow from "@amcharts/amcharts5-geodata/moroccoLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import styles from "./box.module.css";

const regionDetails = {
  "Casablanca-Settat": "Casablanca-Settat is a major economic hub in Morocco.",
  "Rabat-Salé-Kénitra": "The capital region of Morocco.",
  "Marrakech-Safi": "A famous tourist region.",
};

const MoroccoMap = () => {
  const chartRef = useRef(null);
  const [selectedRegion, setSelectedRegion] = useState("Click a region");

  useLayoutEffect(() => {
    const root = am5.Root.new("chartdiv");
    chartRef.current = root;

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "none",
        panY: "none",
        wheelX: "none",
        wheelY: "none",
        projection: am5map.geoMercator(),
      })
    );

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_moroccoLow,
        exclude: ["AQ"],
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      interactive: true,
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x2b6eeb),
    });

    polygonSeries.mapPolygons.template.events.on("click", function (ev) {
      const regionName = ev.target.dataItem.dataContext.name;
      setSelectedRegion(regionName);
    });

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div id="chartdiv" style={{ width: "60%", height: "550px" }} />
      <div className={styles.detailsBox}>
        <h2>{selectedRegion}</h2>
        <p>
          {regionDetails[selectedRegion] ||
            "No details available for this region."}
        </p>
      </div>
    </div>
  );
};

export default MoroccoMap;
