# Sankitty

Sankitty is a Next.js and Sanity-powered project designed to accelerate the development process from prototype to production. With minimal configuration and boilerplate, Sankitty allows developers to quickly get started on building user interfaces while maintaining full control over both UI and content.

## Key Features

- **Rapid UI Development:** Built with Next.js and Sanity, Sankitty provides a streamlined environment for creating and managing dynamic, content-driven websites. The integration minimizes the setup time, letting developers focus on building out the UI faster.
- **CMS-Driven Content Management:** Pages are dynamically constructed using content blocks defined in Sanity. This CMS-like approach enables content creators to manage all aspects of the site, from page content to menus and SEO, without touching the codebase.
- **Storybook Integration:** Sankitty includes Storybook for isolated component development and testing. This allows for the visual verification of UI components, ensuring design consistency and usability across the application.
- **Scoped Styling with CSS Modules:** CSS Modules are used for local scoping of styles, preventing naming conflicts and making it easier to maintain and scale the styling of components.
- **Universal Content Control:** Manage everything from a single location in Sanity—menus, SEO settings, logos, pages, blogs, and posts—offering a unified content management experience.
- **Custom Theming and Typography:** Global styles such as colors are managed in global.css, while typography is primarily controlled within Text.tsx, ensuring a consistent design language throughout the application.

## Getting Started

To get started with Sankitty, follow these steps:

1. **Clone the Repository**:

   ```
   git clone https://github.com/your-username/sankitty.git
   ```

2. **Install Dependencies**:

   ```
   cd sankitty
   npm install
   ```

3. **Set Up Environment Variables:**
   Ensure that the following environment variables are configured in your .env.local file:

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=<Your Sanity Project ID>
   NEXT_PUBLIC_SANITY_DATASET=<Your Sanity Dataset>
   NEXT_PUBLIC_SANITY_API_VERSION=<Your Sanity API Version>
   SANITY_API_TOKEN_DEV=<Your Sanity API Developer Token>
   SANITY_API_TOKEN_PROD=<Your Sanity API Viewer Token>

   ```

4. **Configure Sanity:**
   You will need access to a Sanity project. Set up a new project or gain access to an existing one. Ensure you have the necessary API tokens and credentials.

5. **Start the Development Server**:

   ```
   npm run dev
   ```

6. **View the Application**:
   Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the application.

## Scripts

- `npm run dev`: Start the Next.js development server.
- `npm run build`: Build the Next.js application for production.
- `npm run start`: Start the Next.js application in production mode.
- `npm run lint`: Lint the project using ESLint.

## Project Structure

Sankitty follows a component-based architecture with a focus on modularity and reusability. Below is an overview of the main directories:

- **src/app:** Contains the main application routes and layout components, organizing the site’s pages and their respective content.
- **src/api:** API routes are handled here, including form submissions and any other backend processes.
- **src/blog:** Blog-specific components and pages, including blog post layouts and previews.
- **src/components:** Houses reusable UI components, such as buttons, forms, navigation elements, and content sections. These components are the building blocks for pages.
- **src/lib:** Utility functions, data-fetching logic, and other shared code that supports the application’s functionality.
- **src/schemas:** Sanity content models (schemas) defining the structure of the content stored in the CMS.
- **src/stories:** Contains Storybook stories for the UI components, used for visual testing and component documentation.

## Custom Desk Structure

This project includes a customized Sanity Studio desk structure to enhance content management, focusing especially on Navigation Management and Social Media Profiles.

## Managing Content

## Site Settings

The `Site Settings` menu allows you to configure global settings for your site, including brand assets, tracking codes, and default SEO settings.

### Social Media Profiles

- **Adding Social Media Links**: Editors can manage social media links under the `Social Media Profiles` menu. This allows visitors to connect with the website on various social platforms.
- **Supported Platforms**: The 9 supported platforms include Facebook, Instagram, and LinkedIn, but more can be added to `SoMePlatforms` if needed.

### Navigation Management

- **Setting the Landing Page**: The `Navigation Manager` allows editors to set the landing page for the site, which is crucial for determining the primary page visitors see upon arrival.
- **Adding Menu Items**: Within the `Navigation Manager`, editors can add items to various pre-defined menus:
  - **Main Menu**: Add links and a single Call to Action (if needed) to the main menu, which appears at the top of the website. This helps visitors navigate to important sections.
  - **Footer Menu**: Add items to the footer menu, which consists of different sections. Each section can contain either social media links, custom links, text, or images (e.g., logos).
  - **Sidebar Menu**: Add links to the sidebar menu, which will appear on smaller screens to aid mobile navigation.

### Pages

- **Creating Pages**: Content editors can create and manage pages under the `Pages` menu in the Sanity Studio.
- **Page Details**: Each page can be customized with structured content that includes text, images, and other multimedia elements.

#### Page Builder

The pageBuilder schema allows content editors to create pages by combining various predefined sections such as hero, article, testimonials, features, callToAction, grid, and callout.

## Development Workflow

To maintain consistency and efficiency, follow these steps when working on the project:

1. Branching Strategy: Follow your team’s branching convention, such as feature/ or fix/ branches, to keep the git history clean and organized.
2. Adding New UI with Content:

- Define the Sanity schema for new content types.
- Implement the corresponding interface and payload structure in src/lib/payloads.
- Fetch the necessary data and create the UI component.
- Document and test the UI component in Storybook, using mock data for isolated development.

Troubleshooting

- Sanity Preview: While the Sanity preview functionality is not fully optimized, it currently meets the essential requirements.

Testing and Deployment

- Storybook Accessibility Testing: Storybook is set up with accessibility (a11y) testing tools, but you’ll need to add tests to each story manually.
- CI/CD Pipeline: A CI/CD pipeline is not yet configured. Setting up a pipeline would enhance the development process by automating tests, builds, and deployments.

## Dependencies

- [Next.js](https://nextjs.org/): React framework for building server-rendered and statically-generated web applications.
- [Sanity](https://www.sanity.io/): Headless CMS for structured content with a real-time API.
- [next-sanity](https://github.com/leighhalliday/next-sanity): Next.js integration for Sanity with image optimization and preview support.
- [styled-components](https://styled-components.com/): CSS-in-JS library for styling React components.

## Development Dependencies

- [@types/react](https://www.npmjs.com/package/@types/react), [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): TypeScript type definitions for React.
- [eslint](https://eslint.org/): JavaScript linter.
- [typescript](https://www.typescriptlang.org/): Typed superset of JavaScript.

## Documentation and Resources

- Next.js Documentation - Learn more about the Next.js framework.
- Sanity Documentation - Explore Sanity’s powerful CMS features.
- Storybook Documentation - Get started with component-driven development.
- Sanity Slack Community - Join the community for support and collaboration.

## License and Credits

© Sankitty. Created by Christina Roise.
