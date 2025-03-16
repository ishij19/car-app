export default function handler(req, res) {
  const mockData = {
    data: [
      {
        variant_code: 'Verna-MPi-EX-2025',
        model: 'Verna',
        created_at: '2025-03-13T08:23:17.028072Z',
        images: ['/images/download.jpeg'], // Add image paths
        carPricingHistory: [{ price: 14000 }],
      },
      // Add more car objects as needed
    ],
  };
  res.status(200).json(mockData);
}