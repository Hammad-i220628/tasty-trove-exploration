import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedDish from "@/components/FeaturedDish";
import { Button } from "@/components/ui/button";

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

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-b from-secondary to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6">
                Delicious Food,
                <br />
                Delivered to You
              </h1>
              <p className="font-inter text-gray-600 text-lg mb-8">
                Experience the best food delivery service in town. Fresh, fast, and always delicious.
              </p>
              <Button size="lg" className="font-semibold">
                Order Now
              </Button>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80"
                alt="Delicious Food"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-center mb-12">
            Featured Dishes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDishes.map((dish) => (
              <FeaturedDish key={dish.name} {...dish} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;