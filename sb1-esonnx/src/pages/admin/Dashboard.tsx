import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTruck, FaClipboardList } from 'react-icons/fa6';

type Order = {
  id: string;
  customer: string;
  items: string[];
  total: number;
  status: 'pending' | 'assigned' | 'delivered';
  assignedTo?: string;
};

type DeliveryPerson = {
  id: string;
  name: string;
  status: 'available' | 'busy';
  activeOrders: number;
};

const mockOrders: Order[] = [
  {
    id: 'ORD001',
    customer: 'John Doe',
    items: ['Masala Dosa', 'Idli Sambar'],
    total: 140,
    status: 'pending'
  },
  {
    id: 'ORD002',
    customer: 'Jane Smith',
    items: ['Puri Bhaji', 'Medu Vada'],
    total: 135,
    status: 'assigned',
    assignedTo: 'DEL002'
  }
];

const deliveryPersons: DeliveryPerson[] = [
  { id: 'DEL001', name: 'Raj Kumar', status: 'available', activeOrders: 0 },
  { id: 'DEL002', name: 'Suresh Kumar', status: 'busy', activeOrders: 1 }
];

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [deliveryStaff, setDeliveryStaff] = useState<DeliveryPerson[]>(deliveryPersons);

  const assignOrder = (orderId: string, deliveryPersonId: string) => {
    setOrders(orders.map(order => 
      order.id === orderId 
        ? { ...order, status: 'assigned', assignedTo: deliveryPersonId }
        : order
    ));

    setDeliveryStaff(staff => staff.map(person =>
      person.id === deliveryPersonId
        ? { ...person, status: 'busy', activeOrders: person.activeOrders + 1 }
        : person
    ));
  };

  return (
    <div className="pt-24 pb-12 min-h-screen bg-natural-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-gray-600">Manage orders and delivery assignments</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center mb-4">
              <FaClipboardList className="h-6 w-6 text-green-600 mr-2" />
              <h2 className="text-xl font-semibold">Orders</h2>
            </div>
            <div className="space-y-4">
              {orders.map(order => (
                <div key={order.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{order.customer}</h3>
                      <p className="text-sm text-gray-600">Order ID: {order.id}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      order.status === 'assigned' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  <ul className="text-sm text-gray-600 mb-2">
                    {order.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">₹{order.total}</p>
                    {order.status === 'pending' && (
                      <select
                        onChange={(e) => assignOrder(order.id, e.target.value)}
                        className="text-sm border rounded-lg p-1"
                        defaultValue=""
                      >
                        <option value="" disabled>Assign to...</option>
                        {deliveryStaff
                          .filter(person => person.status === 'available')
                          .map(person => (
                            <option key={person.id} value={person.id}>
                              {person.name}
                            </option>
                          ))}
                      </select>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center mb-4">
              <FaTruck className="h-6 w-6 text-green-600 mr-2" />
              <h2 className="text-xl font-semibold">Delivery Staff</h2>
            </div>
            <div className="space-y-4">
              {deliveryStaff.map(person => (
                <div key={person.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{person.name}</h3>
                      <p className="text-sm text-gray-600">ID: {person.id}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      person.status === 'available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {person.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Active Orders: {person.activeOrders}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}