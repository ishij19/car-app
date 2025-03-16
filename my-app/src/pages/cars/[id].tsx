import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function CarDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [car, setCar] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    const fetchCar = async () => {
      const response = await axios.get(`/api/cars/${id}`);
      setCar(response.data);
    };
    if (id) fetchCar();
  }, [id, router]);

  if (!car) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      <div className="header">
        <button onClick={() => router.push('/')} className="button">
          Back
        </button>
        <h1>{car.model}</h1>
      </div>
      <div className="car-details-container">
        <img src={car.images[0]} alt={car.model} className="car-image-large" />
        <div className="car-info">
          <h2>Details</h2>
          <p>Price: ${car.carPricingHistory[0].price}</p>
          <div className="tabs">
            <div className="tab">
              <h3>Specifications</h3>
              <p>Engine: {car.engine_type}</p>
              <p>Transmission: {car.transmission}</p>
              <p>Fuel Efficiency: {car.fuel_efficiency}</p>
            </div>
            <div className="tab">
              <h3>Dimensions</h3>
              <p>Length: {car.dimensions.length}</p>
              <p>Width: {car.dimensions.width}</p>
              <p>Height: {car.dimensions.height}</p>
            </div>
            <div className="tab">
              <h3>Features</h3>
              <div className="features-grid">
                {car.carFeatures.map((feature) => (
                  <div key={feature.feature_id} className="feature">
                    <p className="feature-name">{feature.name}</p>
                    <p className="feature-value">{feature.value}</p>
                    <p className="feature-category">{feature.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}