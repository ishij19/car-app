export default function handler(req, res) {
  const mockData = {
    data: [
      {
        variant_code: 'Verna-MPi-EX-2025',
        model: 'Verna',
        created_at: '2025-03-13T08:23:17.028072Z',
        images: ['/images/verna.jpeg'],
        carPricingHistory: [{ price: 14000 }],
      },
      {
        variant_code: 'Creta-SX-2024',
        model: 'Creta',
        created_at: '2025-03-12T10:15:30.048072Z',
        images: ['/images/verna.jpeg'],
        carPricingHistory: [{ price: 18000 }],
      },
      {
        variant_code: 'i20-Sportz-2023',
        model: 'i20',
        created_at: '2025-03-11T09:45:20.128072Z',
        images: ['/images/i20.jpeg'],
        carPricingHistory: [{ price: 12000 }],
      },
      {
        variant_code: 'Venue-IMT-2022',
        model: 'Venue',
        created_at: '2025-03-10T12:33:10.228072Z',
        images: ['/images/venue.jpeg'],
        carPricingHistory: [{ price: 16000 }],
      },
      {
        variant_code: 'Tucson-AWD-2025',
        model: 'Tucson',
        created_at: '2025-03-09T14:27:50.328072Z',
        images: ['/images/tucson.jpeg'],
        carPricingHistory: [{ price: 25000 }],
      },
      {
        variant_code: 'Sonata-GLS-2024',
        model: 'Sonata',
        created_at: '2025-03-08T15:12:45.428072Z',
        images: ['/images/sonata.jpeg'],
        carPricingHistory: [{ price: 22000 }],
      },
      {
        variant_code: 'Elantra-SE-2023',
        model: 'Elantra',
        created_at: '2025-03-07T16:58:30.528072Z',
        images: ['/images/elantra.jpeg'],
        carPricingHistory: [{ price: 20000 }],
      },
      {
        variant_code: 'Accent-LX-2022',
        model: 'Accent',
        created_at: '2025-03-06T18:45:20.628072Z',
        images: ['/images/accent.jpeg'],
        carPricingHistory: [{ price: 13000 }],
      },
      {
        variant_code: 'Palisade-SEL-2025',
        model: 'Palisade',
        created_at: '2025-03-05T20:37:10.728072Z',
        images: ['/images/palisade.jpeg'],
        carPricingHistory: [{ price: 35000 }],
      },
      {
        variant_code: 'Kona-Electric-2024',
        model: 'Kona Electric',
        created_at: '2025-03-04T22:25:40.828072Z',
        images: ['/images/konaelectric.jpeg'],
        carPricingHistory: [{ price: 28000 }],
      },
    ],
  };
  res.status(200).json(mockData);
}