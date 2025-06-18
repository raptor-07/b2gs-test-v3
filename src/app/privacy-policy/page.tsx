import React from "react";
import fs from "fs/promises";
import path from "path";
import { marked } from "marked";
import styles from "./styles.module.css";

async function getPrivacyPolicy() {
  const filePath = path.join(process.cwd(), "src/features/privacy/policies/privacy-policy.md");
  const content = await fs.readFile(filePath, "utf8");
  const htmlContent = marked(content);
  return htmlContent;
}

export default async function PrivacyPolicyPage() {
  const policyHtml = await getPrivacyPolicy();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <article className={styles.policy}>
        <div dangerouslySetInnerHTML={{ __html: policyHtml }} />
      </article>
    </div>
  );
}
