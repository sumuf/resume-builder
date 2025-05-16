import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <FileText className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">ResumeForge</span>
        </Link>
        <nav className="flex space-x-4">
          <Link 
            to="/builder" 
            className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            Create Resume
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;