import { motion } from 'framer-motion';
import { useCart } from '../../contexts/CartContext';

const featuredItems = [
  {
    id: 1,
    name: 'Masala Dosa',
    description: 'Crispy rice crepe filled with spiced potato mixture',
    price: 80,
    image: '/images/masala-dosa.jpg',
  },
  {
    id: 2,
    name: 'Idli Sambar',
    description: 'Steamed rice cakes served with lentil soup and chutney',
    price: 60,
    image: '/images/idli.jpg',
  },
  {
    id: 3,
    name: 'Puri Bhaji',
    description: 'Deep-fried bread served with spiced potato curry',
    price: 70,
    image: '/images/puri.jpg',
  },
  {
    id: 4,
    name: 'Medu Vada',
    description: 'Crispy lentil doughnuts served with sambar and chutney',
    price: 65,
    image: '/images/vada.jpg',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function FeaturedItems() {
  const { addToCart } = useCart();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Items
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Start your day with our delicious South Indian breakfast specialties
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {featuredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={item}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="aspect-h-3 aspect-w-4 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg font-medium text-gray-900">₹{item.price}</p>
                  <button
                    onClick={() => addToCart(item)}
                    className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}