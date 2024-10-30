import { FaLeaf } from 'react-icons/fa6';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <FaLeaf className="h-8 w-8 text-green-600" />
      <span className="text-xl font-bold text-gray-900">
        Organic<span className="text-green-600">Potlam</span>
      </span>
    </div>
  );
}