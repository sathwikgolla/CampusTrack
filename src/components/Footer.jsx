import { Link } from 'react-router-dom';
import { GraduationCap, Mail } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-secondary dark:bg-background-dark text-white border-t border-gray-700 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo size="default" showText={false} />
              <span className="text-xl font-semibold font-display">
                <span className="text-white">Campus</span>
                <span className="text-accent">Tracker</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Your comprehensive solution for finding and connecting with faculty members across campus.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/departments" className="text-gray-400 hover:text-white transition-colors">
                  Departments
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-400 hover:text-white transition-colors">
                  Search Faculty
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@campustrack.edu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Credits */}
        <div className="border-t border-gray-700 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} CampusTracker. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Built with</span>
              <span className="text-red-500">❤️</span>
              <span>using React + Vite + Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
