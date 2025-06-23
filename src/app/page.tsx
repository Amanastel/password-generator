import PasswordGenerator from '@/components/PasswordGenerator';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Secure Password Generator
          </h1>
          <p className="text-lg text-gray-600">
            Generate strong, random passwords with uppercase and lowercase letters
          </p>
        </div>
        
        <PasswordGenerator />
        
        <footer className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Built with Next.js, React, and Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}
