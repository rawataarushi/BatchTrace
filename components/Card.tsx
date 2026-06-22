'use client';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  action?: {
    label: string;
    onClick?: () => void;
  };
}

export default function Card({ title, description, image, action }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
      {image && (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {action && (
          <button
            onClick={action.onClick}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition font-semibold"
          >
            {action.label}
          </button>
        )}
      </div>
    </div>
  );
}
