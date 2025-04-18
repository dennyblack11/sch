import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">
              EduManage
            </span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
            <a href="#features" className="text-gray-600 hover:text-blue-600">
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-blue-600"
            >
              Testimonials
            </a>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-blue-600">
              Pricing
            </Link>
            <Link to="/ourterms" className="text-gray-600 hover:text-blue-600">
              Terms
            </Link>
          </nav>
          <Link to={"/register"}>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
