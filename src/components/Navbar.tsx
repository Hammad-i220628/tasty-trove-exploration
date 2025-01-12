import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="font-poppins font-bold text-2xl text-primary">Food Delight</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="font-inter text-gray-700 hover:text-primary">Home</a>
            <a href="/menu" className="font-inter text-gray-700 hover:text-primary">Menu</a>
            <a href="/about" className="font-inter text-gray-700 hover:text-primary">About</a>
            <a href="/contact" className="font-inter text-gray-700 hover:text-primary">Contact</a>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 text-gray-700 hover:text-primary font-inter">Home</a>
            <a href="/menu" className="block px-3 py-2 text-gray-700 hover:text-primary font-inter">Menu</a>
            <a href="/about" className="block px-3 py-2 text-gray-700 hover:text-primary font-inter">About</a>
            <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary font-inter">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;