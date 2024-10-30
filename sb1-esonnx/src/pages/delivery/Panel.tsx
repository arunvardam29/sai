import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLocationDot, FaCircleCheck } from 'react-icons/fa6';
import { useAuth } from '../../contexts/AuthContext';

type DeliveryOrder = {
  id: string;
  customer: string;
  address: string;
  items: string[];
  total: number;
  status: 'pickup' | 'delivering' | 'delivered';
};

const mockOrders: DeliveryOrder[] = [
  {
    id: 'ORD002',
    customer: 'Jane Smith',
    address: '123 Main St, Apartment 4B',
    items: ['Puri Bhaji', 'Medu Vada'],
    total: 135,
    status: 'pickup'
  }
];

export default function DeliveryPanel() {
  const { user } = useAuth();
  const [orders, setOrders] = useState<DeliveryOrder[]>(mockOrders);

  const updateOrderStatus = (orderId: string, newStatus: DeliveryOrder['status']) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div className="pt-24 pb-12 min-h-screen bg-natural-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Delivery Dashboard</h1>
          <p className="mt-2 text-gray-600">Welcome back, {user?.name}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-6"
        >
          {orders.map(order => (
            <div
              key={order.id}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold">{order.customer}</h2>
                  <p className="text-sm text-gray-600">Order ID: {order.id}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  order.status === 'pickup' ? 'bg-yellow-100 text-yellow-800' :
                  order.status === 'delivering' ? 'bg-blue-100 text-blue-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {order.status}
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <FaLocationDot className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Delivery Address</p>
                    <p className="text-gray-600">{order.address}</p>
                  </div>
                </div>

                <div>
                  <p className="font-medium mb-2">Order Items</p>
                  <ul className="space-y-1 text-gray-600">
                    {order.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <p className="font-semibold">Total: ₹{order.total}</p>
                  {order.status !== 'delivered' && (
                    <button
                      onClick={() => updateOrderStatus(order.id, 
                        order.status === 'pickup' ? 'delivering' : 'delivered'
                      )}
                      className="flex items-center space-x-2 px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
                    >
                      <FaCircleCheck className="h-4 w-4" />
                      <span>
                        {order.status === 'pickup' ? 'Start Delivery' : 'Mark as Delivered'}
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}