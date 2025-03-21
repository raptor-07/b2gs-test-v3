import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { Resource } from "./types";

function getGoogleAnalyticsScript(googlePageId: string) {
  return `
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${googlePageId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${googlePageId}');
    </script>
  `;
}

export default async function markdownToHtml(resource: Resource): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)  // Add GitHub Flavored Markdown support
    .use(remarkRehype, {
      allowDangerousHtml: true,  // Preserve HTML in markdown
      footnoteLabel: 'Footnotes',
      passThrough: ['html'],
    })
    .use(rehypeRaw)  // Parse the preserved HTML
    .use(rehypeSlug)
    .use(rehypeStringify, { 
      allowDangerousHtml: true,  // Keep HTML in output
      closeSelfClosing: true,    // Properly handle self-closing tags
      closeEmptyElements: true   // Properly handle empty elements
    })
    .process(resource.content);

  let htmlContent = result.toString();

  // If googlePageId is present, inject the analytics script
  if (resource.googlePageId) {
    const analyticsScript = getGoogleAnalyticsScript(resource.googlePageId);
    htmlContent = analyticsScript + htmlContent;
  }

  return htmlContent;
}
