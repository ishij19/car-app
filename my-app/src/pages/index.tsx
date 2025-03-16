import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function HomePage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

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
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Car List</h1>
        <button onClick={handleLogout} className="button">
          Logout
        </button>
      </div>
      <div className="car-grid">
        {cars.map((car) => (
          <div
            key={car.variant_code}
            className="card"
            onClick={() => router.push(`/cars/${car.variant_code}`)}
          >
            <img src={car.images[0]} alt={car.model} className="car-image" />
            <div className="car-details">
              <h2>{car.model}</h2>
              <p>Year: {new Date(car.created_at).getFullYear()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}