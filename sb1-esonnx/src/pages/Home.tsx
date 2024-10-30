import { motion } from 'framer-motion';
import Banner from '../components/home/Banner';
import FeaturedItems from '../components/home/FeaturedItems';
import CategorySection from '../components/home/CategorySection';
import DeliveryFeatures from '../components/home/DeliveryFeatures';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-16"
    >
      <Banner />
      <CategorySection />
      <FeaturedItems />
      <DeliveryFeatures />
    </motion.div>
  );
}