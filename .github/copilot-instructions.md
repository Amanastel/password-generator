# Password Generator Project - Copilot Instructions

This is a Next.js project built with TypeScript and Tailwind CSS for generating random passwords.

## Project Guidelines

- Use React functional components with TypeScript
- Use React hooks (useState) for state management
- Apply Tailwind CSS for styling with clean, modern UI design
- Follow Next.js App Router patterns
- Keep components modular and reusable
- Generate passwords containing only uppercase and lowercase letters (A-Z, a-z)
- Ensure all code is client-side only, no server-side logic needed
- Use proper TypeScript types for all functions and variables
- Follow React best practices for component structure and naming

## Component Structure

- Main page component in `src/app/page.tsx`
- Password generator logic as a separate reusable component
- Clean separation of concerns between UI and logic
- Responsive design using Tailwind CSS classes

## Password Generation Requirements

- Accept user input for password length (minimum 1, maximum 50)
- Generate random passwords using only A-Z and a-z characters
- Display generated password in a readable format
- Provide copy-to-clipboard functionality for user convenience
