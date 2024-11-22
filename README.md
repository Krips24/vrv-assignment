# Role Management System - Next.js Project

This is a **Next.js** application for managing user roles and permissions, allowing admins to create, modify, and view roles and their respective permissions in a clean and user-friendly interface.

## Project Overview

The application includes role management functionality, where administrators can:

- **View existing roles** in a table.
- **Add new roles** with customizable permissions.
- **Edit existing roles** and update their permissions.

Each role can be assigned multiple permissions, such as "Read," "Write," and "Delete," which are displayed with checkboxes for easy management.

## Features

- **Role Creation**: Easily create new roles with a name and permissions.
- **Role Editing**: Modify existing roles and their permissions.
- **Permissions Management**: Assign and toggle permissions for roles dynamically.
- **Responsive UI**: The application is fully responsive, ensuring a smooth experience on both desktop and mobile.

## Getting Started

Follow these steps to set up the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Krips24/vrv-assignment
   cd role-management-app

   ```

2. **Install dependencies**:
   After cloning the repository, navigate into the project directory and install the necessary dependencies using your preferred package manager:

   - For **npm**:

     ```bash
     npm install
     ```

   - For **Yarn**:

     ```bash
     yarn install
     ```

   - For **pnpm**:

     ```bash
     pnpm install
     ```

   - For **Bun**:
     ```bash
     bun install
     ```

3. **Run the development server**:
   After the dependencies have been installed, start the development server to run the app locally:

   - For **npm**:

     ```bash
     npm run dev
     ```

   - For **Yarn**:

     ```bash
     yarn dev
     ```

   - For **pnpm**:

     ```bash
     pnpm dev
     ```

   - For **Bun**:
     ```bash
     bun dev
     ```

   This will start the development server, and your application will be accessible at [http://localhost:3000](http://localhost:3000).

4. **Open the application in the browser**:
   Once the development server is running, open your preferred web browser and navigate to [http://localhost:3000](http://localhost:3000) to see the role management system in action.

5. **Start editing**:
   You can start editing the project by modifying files in the `app/` directory. The page will auto-refresh as you make changes. The main page is located at `app/page.tsx`, where you can modify the user interface and logic related to roles and permissions.

6. **Customize Styles**:
   The project uses **Tailwind CSS** for styling. You can adjust styles in the `styles/` directory, or modify the existing Tailwind configuration if needed.

7. **Configure Environment Variables**:
   If your app requires any environment variables (for example, for API keys or database configurations), make sure to create a `.env.local` file in the root of your project and define the necessary variables. For example:
