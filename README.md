# 🔐 Password Generator

A modern, secure password generator built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- **🎯 Customizable Length**: Generate passwords from 1 to 100 characters
- **🔤 Character Type Options**: 
  - ✅ Alphabets (A-Z, a-z) - default enabled
  - 🔢 Numbers (0-9) - optional
  - 🔣 Symbols (!@#$%^&*) - optional
- **📋 One-Click Copy**: Copy generated passwords to clipboard with visual feedback
- **🎨 Dark Theme**: Easy-to-read dark interface
- **⚡ Real-time Generation**: Instant password creation with loading states
- **📱 Responsive Design**: Works perfectly on all devices

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed on your machine
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd password-generator
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) - State management

## 📁 Project Structure

```
password-generator/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # App layout and metadata
│   │   └── page.tsx         # Home page
│   └── components/
│       └── PasswordGenerator.tsx  # Main password generator component
├── .github/
│   └── copilot-instructions.md    # Development guidelines
└── .vscode/
    └── tasks.json          # VS Code tasks
```

## 🎮 How to Use

1. **Set Password Length**: Enter desired length (1-100 characters)
2. **Choose Character Types**: 
   - Check/uncheck boxes for alphabets, numbers, and symbols
   - At least one type must be selected (defaults to alphabets)
3. **Generate**: Click "Generate Password" button
4. **Copy**: Click the copy icon to copy password to clipboard
5. **Visual Feedback**: Green checkmark confirms successful copying

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
