import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Card from '@/components/Card';

export default function HomePage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('/api/cars');
        setCars(response.data.data);
      } catch (error) {
        console.error('Failed to fetch cars', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Car List</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <Card
            key={car.variant_code}
            onClick={() => router.push(`/cars/${car.variant_code}`)}
            className="cursor-pointer"
          >
            <img
              src={car.images[0]} // Use the first image as the main image
              alt={car.model}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{car.model}</h2>
              <p>Year: {new Date(car.created_at).getFullYear()}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}