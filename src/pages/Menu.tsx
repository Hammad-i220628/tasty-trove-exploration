import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const menuCategories = [
  {
    category: "Appetizers",
    items: [
      { 
        name: "Crispy Calamari", 
        price: "$12.99", 
        description: "Lightly battered calamari served with marinara sauce",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&h=400"
      },
      { 
        name: "Bruschetta", 
        price: "$9.99", 
        description: "Toasted bread topped with tomatoes, garlic, and fresh basil",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=500&h=400"
      },
      { 
        name: "Spring Rolls", 
        price: "$8.99", 
        description: "Vegetable spring rolls with sweet chili sauce",
        image: "https://images.unsplash.com/photo-1606467516753-58be04f839d4?w=500&h=400"
      },
    ]
  },
  {
    category: "Main Course",
    items: [
      { 
        name: "Grilled Salmon", 
        price: "$24.99", 
        description: "Fresh salmon with lemon butter sauce and seasonal vegetables",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=400"
      },
      { 
        name: "Beef Tenderloin", 
        price: "$29.99", 
        description: "8oz tenderloin with garlic mashed potatoes",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?w=500&h=400"
      },
      { 
        name: "Vegetable Curry", 
        price: "$18.99", 
        description: "Mixed vegetables in aromatic curry sauce with basmati rice",
        image: "https://images.unsplash.com/photo-1604579905647-9e5e3e276fbd?w=500&h=400"
      },
    ]
  },
  {
    category: "Desserts",
    items: [
      { 
        name: "Tiramisu", 
        price: "$8.99", 
        description: "Classic Italian dessert with coffee-soaked ladyfingers",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=400"
      },
      { 
        name: "Chocolate Lava Cake", 
        price: "$9.99", 
        description: "Warm chocolate cake with molten center",
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&h=400"
      },
      { 
        name: "Crème Brûlée", 
        price: "$7.99", 
        description: "Classic French vanilla custard with caramelized sugar",
        image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=500&h=400"
      },
    ]
  }
];

const Menu = () => {
  const { toast } = useToast();

  const handleAddToCart = (itemName: string) => {
    toast({
      title: "Added to cart",
      description: `${itemName} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-poppins font-bold text-center mb-12">Our Menu</h1>
          
          <div className="space-y-12">
            {menuCategories.map((category) => (
              <section key={category.category}>
                <h2 className="text-2xl font-poppins font-semibold mb-6 text-primary">
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item) => (
                    <Card key={item.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                          <span>{item.name}</span>
                          <span className="text-primary">{item.price}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <Button 
                          className="w-full" 
                          onClick={() => handleAddToCart(item.name)}
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;