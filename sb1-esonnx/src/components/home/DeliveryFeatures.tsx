import { motion } from 'framer-motion';
import { FaLeaf, FaTruck, FaClock, FaShieldHeart } from 'react-icons/fa6';

const features = [
  {
    name: 'Organic & Fresh',
    description: 'All ingredients sourced from certified organic farms',
    icon: FaLeaf,
  },
  {
    name: 'Fast Delivery',
    description: 'Quick delivery within 30 minutes',
    icon: FaTruck,
  },
  {
    name: '24/7 Service',
    description: 'Order anytime, we are always open',
    icon: FaClock,
  },
  {
    name: 'Safe & Hygienic',
    description: 'Prepared with utmost care and hygiene',
    icon: FaShieldHeart,
  },
];

export default function DeliveryFeatures() {
  return (
    <div className="bg-natural-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for a healthy meal
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4"
          >
            {features.map((feature) => (
              <motion.div 
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-600">
                  <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}