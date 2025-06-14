import React, { useEffect, useRef } from "react";
import * as powerbi from "powerbi-client";

const PowerBIReport = ({ embedUrl, accessToken, reportId, tokenType = "1" }) => {
  const embedRef = useRef(null);

  useEffect(() => {
    const models = window["powerbi-client"].models || powerbi.models;
    const container = embedRef.current; // ✅ cópia local

    const config = {
      type: "report",
      tokenType: tokenType === "0" ? models.TokenType.Aad : models.TokenType.Embed,
      accessToken,
      embedUrl,
      id: reportId,
      permissions: models.Permissions.All,
      settings: {
        panes: {
          filters: { visible: true },
          pageNavigation: { visible: true },
        },
        bars: {
          statusBar: { visible: true },
        },
      },
    };

    if (container) {
      const report = powerbi.embed(container, config);

      report.on("loaded", () => {
        console.log("Power BI report loaded");
      });

      report.on("rendered", () => {
        console.log("Power BI report rendered");
      });

      report.on("error", (event) => {
        console.error("Power BI error:", event.detail);
      });

      return () => {
        report.off("loaded");
        report.off("rendered");
        report.off("error");
        powerbi.reset(container); // ✅ usa a variável local
      };
    }
  }, [embedUrl, accessToken, reportId, tokenType]); // ✅ dependências corretas

  return <div ref={embedRef} style={{ height: "100vh", width: "100%" }} />;
};

export default PowerBIReport;