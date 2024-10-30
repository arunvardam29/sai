import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLeaf, FaBowlRice, FaMugHot, FaIceCream } from 'react-icons/fa6';

const categories = [
  {
    id: 1,
    name: 'Breakfast',
    icon: FaBowlRice,
    href: '/menu?category=breakfast',
    color: 'bg-green-100 text-green-700',
  },
  {
    id: 2,
    name: 'Lunch',
    icon: FaLeaf,
    href: '/menu?category=lunch',
    color: 'bg-yellow-100 text-yellow-700',
  },
  {
    id: 3,
    name: 'Beverages',
    icon: FaMugHot,
    href: '/menu?category=beverages',
    color: 'bg-orange-100 text-orange-700',
  },
  {
    id: 4,
    name: 'Desserts',
    icon: FaIceCream,
    href: '/menu?category=desserts',
    color: 'bg-red-100 text-red-700',
  },
];

export default function CategorySection() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Browse Categories</h2>
          <p className="mt-2 text-sm text-gray-600">Explore our wide range of organic delicacies</p>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.href}
              className="group relative flex flex-col items-center p-6 rounded-lg transition-all duration-200 hover:shadow-lg"
            >
              <div className={`p-4 rounded-full ${category.color}`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-sm font-medium text-gray-900 group-hover:text-green-600">
                {category.name}
              </h3>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}