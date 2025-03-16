import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function CarDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [car, setCar] = useState(null);

  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login'); // Redirect to Login Page if not logged in
      return;
    }

    // Fetch car details
    const fetchCar = async () => {
      const response = await axios.get(`/api/cars/${id}`);
      setCar(response.data);
    };
    if (id) fetchCar();
  }, [id, router]);

  if (!car) return <div>Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">{car.model}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src={car.images[0]}
            alt={car.model}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Details</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Price: ${car.carPricingHistory[0].price}</p>
            <Tabs defaultValue="specifications" className="mt-6">
              <TabsList>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="dimensions">Dimensions</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
              </TabsList>
              <TabsContent value="specifications">
                <p>Engine: {car.engine_type}</p>
                <p>Transmission: {car.transmission}</p>
                <p>Fuel Efficiency: {car.fuel_efficiency}</p>
              </TabsContent>
              <TabsContent value="dimensions">
                <p>Length: {car.dimensions.length}</p>
                <p>Width: {car.dimensions.width}</p>
                <p>Height: {car.dimensions.height}</p>
              </TabsContent>
              <TabsContent value="features">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {car.carFeatures.map((feature) => (
                    <div key={feature.feature_id} className="border p-4 rounded-lg">
                      <p className="font-semibold">{feature.name}</p>
                      <p>{feature.value}</p>
                      <p className="text-sm text-gray-500">{feature.category}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}