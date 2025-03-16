export default function handler(req, res) {
  const { id } = req.query;
  const mockData = {
    variant_code: id,
    model: 'Verna',
    images: ['/images/download.jpeg'],
    engine_type: '1.5 l MPi Petrol',
    transmission: 'Automatic',
    fuel_efficiency: '18 km/l',
    dimensions: {
      length: '4.5 m',
      width: '1.7 m',
      height: '1.5 m',
    },
    carPricingHistory: [{ price: 14000 }],
    carFeatures: [
      {
        feature_id: 94,
        name: 'Projector headlamps',
        value: 'Yes',
        category: 'Exterior - Lighting',
      },
      // Add more features as needed
    ],
  };
  res.status(200).json(mockData);
}