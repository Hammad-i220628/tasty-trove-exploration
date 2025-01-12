import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Chef Michael Roberts",
    role: "Executive Chef",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&q=80",
    bio: "With over 15 years of culinary experience, Chef Michael brings his passion for innovative cuisine to every dish."
  },
  {
    name: "Sarah Chen",
    role: "Pastry Chef",
    image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=300&q=80",
    bio: "Specializing in French pastries, Sarah creates stunning desserts that are both visually appealing and delicious."
  },
  {
    name: "James Wilson",
    role: "Sous Chef",
    image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=300&q=80",
    bio: "James brings creativity and precision to every dish, ensuring consistent quality in our kitchen."
  }
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-16">
            <h1 className="text-4xl font-poppins font-bold text-center mb-8">Our Story</h1>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, Food Delight began with a simple mission: to serve exceptional food that brings people together. Our journey started in a small kitchen with big dreams, and today we're proud to be one of the most beloved restaurants in the city.
              </p>
              <p className="text-lg text-gray-600">
                We believe in using only the freshest ingredients, supporting local farmers, and creating dishes that combine traditional flavors with modern techniques. Every meal we serve is a reflection of our commitment to culinary excellence.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-poppins font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <Card key={member.name} className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;