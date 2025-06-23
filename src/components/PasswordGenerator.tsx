'use client';

import React, { useState } from 'react';

const PasswordGenerator: React.FC = () => {
  const [passwordLength, setPasswordLength] = useState<number>(12);
  const [generatedPassword, setGeneratedPassword] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [includeAlphabets, setIncludeAlphabets] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const generatePassword = (): void => {
    setIsGenerating(true);
    
    // Build character pool based on selected options
    let characterPool = '';
    
    if (includeAlphabets) {
      characterPool += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    }
    
    if (includeNumbers) {
      characterPool += '0123456789';
    }
    
    if (includeSymbols) {
      characterPool += '!@#$%^&*';
    }
    
    // If no options selected, default to alphabets only
    if (characterPool === '') {
      characterPool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    }
    
    let password = '';
    
    // Generate random password
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      password += characterPool[randomIndex];
    }
    
    // Simulate a brief loading state for better UX
    setTimeout(() => {
      setGeneratedPassword(password);
      setIsGenerating(false);
    }, 200);
  };

  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0 && value <= 100) {
      setPasswordLength(value);
    }
  };

  const copyToClipboard = async (): Promise<void> => {
    if (generatedPassword) {
      try {
        await navigator.clipboard.writeText(generatedPassword);
        setCopied(true);
        // Reset copied state after 2 seconds
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy password:', err);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-white text-center mb-8">
        Password Generator
      </h2>
      
      {/* Password Length Input */}
      <div className="mb-6">
        <label 
          htmlFor="passwordLength" 
          className="block text-sm font-medium text-gray-200 mb-2"
        >
          Password Length
        </label>
        <input
          type="number"
          id="passwordLength"
          min="1"
          max="100"
          value={passwordLength}
          onChange={handleLengthChange}
          className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white placeholder-gray-400"
          placeholder="Enter password length"
        />
        <p className="text-xs text-gray-400 mt-1">
          Choose a length between 1 and 100 characters
        </p>
      </div>

      {/* Character Type Options */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-200 mb-3">
          Include Character Types
        </label>
        
        {/* Alphabets Checkbox */}
        <div className="flex items-center mb-3">
          <input
            type="checkbox"
            id="includeAlphabets"
            checked={includeAlphabets}
            onChange={(e) => setIncludeAlphabets(e.target.checked)}
            className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
          />
          <label htmlFor="includeAlphabets" className="ml-2 text-sm text-gray-200">
            Include Alphabets (A-Z, a-z)
          </label>
        </div>

        {/* Numbers Checkbox */}
        <div className="flex items-center mb-3">
          <input
            type="checkbox"
            id="includeNumbers"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
          />
          <label htmlFor="includeNumbers" className="ml-2 text-sm text-gray-200">
            Include Numbers (0-9)
          </label>
        </div>

        {/* Symbols Checkbox */}
        <div className="flex items-center mb-3">
          <input
            type="checkbox"
            id="includeSymbols"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
            className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
          />
          <label htmlFor="includeSymbols" className="ml-2 text-sm text-gray-200">
            Include Symbols (!@#$%^&*)
          </label>
        </div>
        
        <p className="text-xs text-gray-400 mt-2">
          Select at least one character type (defaults to alphabets if none selected)
        </p>
      </div>

      {/* Generate Button */}
      <button
        onClick={generatePassword}
        disabled={isGenerating || passwordLength < 1 || passwordLength > 100}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-md transition duration-200 ease-in-out transform hover:scale-105 active:scale-95"
      >
        {isGenerating ? 'Generating...' : 'Generate Password'}
      </button>

      {/* Generated Password Display */}
      {generatedPassword && (
        <div className="mt-8">
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Generated Password
          </label>
          <div className="relative">
            <input
              type="text"
              value={generatedPassword}
              readOnly
              className="w-full px-3 py-2 pr-10 border border-gray-600 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent font-mono text-white"
            />
            <button
              onClick={copyToClipboard}
              className={`absolute inset-y-0 right-0 px-3 py-2 focus:outline-none transition-colors duration-200 ${
                copied 
                  ? 'text-green-400 hover:text-green-300' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
              title={copied ? 'Copied!' : 'Copy to clipboard'}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            {copied 
              ? '✅ Password copied to clipboard!' 
              : 'Click the copy icon to copy the password to your clipboard'
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
