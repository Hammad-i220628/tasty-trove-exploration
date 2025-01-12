import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface FeaturedDishProps {
  name: string;
  price: string;
  image: string;
  description: string;
}

const FeaturedDish = ({ name, price, image, description }: FeaturedDishProps) => {
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-poppins font-semibold text-lg mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-3 font-inter">{description}</p>
        <div className="flex justify-between items-center">
          <span className="font-poppins font-semibold text-primary">{price}</span>
          <Button onClick={handleAddToCart} size="sm">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDish;