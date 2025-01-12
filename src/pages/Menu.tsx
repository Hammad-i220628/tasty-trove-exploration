import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const menuCategories = [
  {
    category: "Appetizers",
    items: [
      { name: "Crispy Calamari", price: "$12.99", description: "Lightly battered calamari served with marinara sauce" },
      { name: "Bruschetta", price: "$9.99", description: "Toasted bread topped with tomatoes, garlic, and fresh basil" },
      { name: "Spring Rolls", price: "$8.99", description: "Vegetable spring rolls with sweet chili sauce" },
    ]
  },
  {
    category: "Main Course",
    items: [
      { name: "Grilled Salmon", price: "$24.99", description: "Fresh salmon with lemon butter sauce and seasonal vegetables" },
      { name: "Beef Tenderloin", price: "$29.99", description: "8oz tenderloin with garlic mashed potatoes" },
      { name: "Vegetable Curry", price: "$18.99", description: "Mixed vegetables in aromatic curry sauce with basmati rice" },
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Tiramisu", price: "$8.99", description: "Classic Italian dessert with coffee-soaked ladyfingers" },
      { name: "Chocolate Lava Cake", price: "$9.99", description: "Warm chocolate cake with molten center" },
      { name: "Crème Brûlée", price: "$7.99", description: "Classic French vanilla custard with caramelized sugar" },
    ]
  }
];

const Menu = () => {
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
                    <Card key={item.name}>
                      <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                          <span>{item.name}</span>
                          <span className="text-primary">{item.price}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <Button className="w-full">
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