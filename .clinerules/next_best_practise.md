You need to make sure to follow the best practises when using nextjs. This includes the following:
use context7 mcp for docs and more context

# Next.js Best Practices

When developing applications with Next.js, it is crucial to adhere to best practices to ensure optimal performance, maintainability, and user experience. Below are the key best practices to follow:

1. Optimizing the server and client components and ensuring optimized client-server boundaries.
2. Making sure that we use proper composition patterns for client and server components optimizing the performance and user experience.
   Always make sure to store server and client components in seperate folders eg components/server and components/client.
   Use docs @https://nextjs.org/docs/app/getting-started/server-and-client-components#when-to-use-server-and-client-components.
3. Using the `next/image` component for images to ensure they are optimized and responsive.
4. Utilizing the `next/link` component for navigation to ensure client-side transitions.
5. Leveraging static generation and server-side rendering appropriately based on the use case.
6. Keeping the bundle size small by using dynamic imports for large components. Dynamic only when necessary.
7. Implementing proper caching strategies for static assets and API responses.
8. Following the file and folder structure conventions for better maintainability.
9. Using TypeScript for type safety and better developer experience.
10. Keeping the codebase clean and modular by separating concerns and using hooks where appropriate.
11. Implementing lazy loading for components and images to improve initial load time.
12. Ensuring that all components are server-rendered when possible to improve SEO and initial load performance.
13. Using the `next/metadata` for managing metadata and improving SEO.
14. Utilizing the `next/redirect` for handling redirects efficiently.
15. Keeping the application up-to-date with the latest Next.js releases and features.
