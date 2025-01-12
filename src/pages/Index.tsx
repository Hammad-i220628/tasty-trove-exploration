import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedDish from "@/components/FeaturedDish";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const featuredDishes = [
  {
    name: "Classic Burger",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80",
    description: "Juicy beef patty with fresh vegetables and our special sauce"
  },
  {
    name: "Margherita Pizza",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500&q=80",
    description: "Fresh mozzarella, tomatoes, and basil on our homemade crust"
  },
  {
    name: "Caesar Salad",
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&q=80",
    description: "Crisp romaine lettuce, parmesan cheese, and homemade croutons"
  },
  {
    name: "Pasta Carbonara",
    price: "$16.99",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&q=80",
    description: "Creamy sauce with pancetta and fresh parmesan"
  }
];

// Bubble component for dynamic background
const Bubble = ({ className }: { className?: string }) => (
  <div 
    className={`absolute rounded-full mix-blend-multiply filter blur-xl animate-float opacity-70 ${className}`}
  />
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Dynamic Bubbles */}
      <Bubble className="bg-[#FEC6A1] w-72 h-72 top-20 -left-20" />
      <Bubble className="bg-[#E5DEFF] w-96 h-96 top-40 -right-20" />
      <Bubble className="bg-[#FFDEE2] w-80 h-80 bottom-20 left-40" />
      <Bubble className="bg-[#D3E4FD] w-64 h-64 bottom-40 right-20" />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-16 bg-gradient-to-b from-white to-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Delicious Food,
                <br />
                Delivered to You
              </h1>
              <p className="font-inter text-gray-600 text-lg mb-8">
                Experience the best food delivery service in town. Fresh, fast, and always delicious.
              </p>
              <Button 
                size="lg" 
                className="font-semibold hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
              >
                Order Now
              </Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-lg filter blur-xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80"
                  alt="Delicious Food"
                  className="rounded-lg shadow-xl relative z-10 hover:transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-poppins font-bold text-3xl md:text-4xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
          >
            Featured Dishes
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <FeaturedDish {...dish} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;