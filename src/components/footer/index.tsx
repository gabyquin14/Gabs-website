import React, { FC } from "react";
import "./footer.css";
import { useTranslation } from "react-i18next";

export const Footer: FC = () => {
  const { t } = useTranslation("global");
  return (
    <div className="footer-container">
      <h1>{t("Developed with love Gabriela Quintanilla")}</h1>
    </div>
  );
};
export default Footer;
