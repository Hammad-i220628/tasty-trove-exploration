import { useState } from "react";
import { Menu, X, ShoppingCart, Home, UtensilsCrossed, Users, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home", icon: Home, color: "hover:text-blue-500" },
    { href: "/menu", label: "Menu", icon: UtensilsCrossed, color: "hover:text-green-500" },
    { href: "/about", label: "About", icon: Users, color: "hover:text-purple-500" },
    { href: "/contact", label: "Contact", icon: PhoneCall, color: "hover:text-pink-500" },
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="font-poppins font-bold text-2xl text-primary">Food Delight</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "font-inter text-gray-700 flex items-center gap-2 transition-colors",
                  item.color
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            ))}
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:text-orange-500 transition-colors"
            >
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
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "block px-3 py-2 text-gray-700 font-inter flex items-center gap-2",
                  item.color
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;