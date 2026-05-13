export const customers = [
  { name: 'Rahul Sharma', city: 'Hyderabad', breed: 'Labrador', product: 'Training', order: 6500, freq: 3, seg: 'High', repeat: 'Yes' },
  { name: 'Sneha Reddy', city: 'Hyderabad', breed: 'Shih Tzu', product: 'Treats', order: 1800, freq: 1, seg: 'Low', repeat: 'No' },
  { name: 'Arjun Mehta', city: 'Bangalore', breed: 'Beagle', product: 'Grooming', order: 3200, freq: 2, seg: 'Medium', repeat: 'No' },
  { name: 'Priya Nair', city: 'Chennai', breed: 'Golden Retriever', product: 'Training', order: 7200, freq: 4, seg: 'High', repeat: 'Yes' },
  { name: 'Karan Verma', city: 'Mumbai', breed: 'Pug', product: 'Treats', order: 1500, freq: 1, seg: 'Low', repeat: 'No' },
  { name: 'Ananya Das', city: 'Hyderabad', breed: 'Indie', product: 'Treats', order: 2800, freq: 3, seg: 'Medium', repeat: 'Yes' },
  { name: 'Rohit Gupta', city: 'Delhi', breed: 'German Shepherd', product: 'Training', order: 5400, freq: 2, seg: 'High', repeat: 'No' },
  { name: 'Meera Iyer', city: 'Chennai', breed: 'Indie', product: 'Grooming', order: 2100, freq: 2, seg: 'Medium', repeat: 'No' },
  { name: 'Vikram Singh', city: 'Bangalore', breed: 'Husky', product: 'Training', order: 8000, freq: 5, seg: 'High', repeat: 'Yes' },
  { name: 'Neha Kapoor', city: 'Mumbai', breed: 'Poodle', product: 'Treats', order: 2300, freq: 2, seg: 'Medium', repeat: 'No' },
  { name: 'Amit Joshi', city: 'Delhi', breed: 'Indie', product: 'Treats', order: 1200, freq: 1, seg: 'Low', repeat: 'No' },
  { name: 'Pooja Shah', city: 'Hyderabad', breed: 'Beagle', product: 'Grooming', order: 4600, freq: 3, seg: 'Medium', repeat: 'Yes' },
  { name: 'Siddharth Jain', city: 'Bangalore', breed: 'Labrador', product: 'Training', order: 5100, freq: 2, seg: 'High', repeat: 'No' },
  { name: 'Kavya Menon', city: 'Chennai', breed: 'Shih Tzu', product: 'Treats', order: 1900, freq: 1, seg: 'Low', repeat: 'No' },
  { name: 'Harsh Patel', city: 'Mumbai', breed: 'Golden Retriever', product: 'Training', order: 6700, freq: 4, seg: 'High', repeat: 'Yes' },
];

export const kpis = [
  { label: 'Total Revenue', value: '₹60,300', note: 'across 15 customers', icon: 'IndianRupee' },
  { label: 'Avg Order Value', value: '₹4,020', note: 'Training avg ₹6,483', icon: 'BarChart3' },
  { label: 'Repeat Customers', value: '6 / 15', note: 'purchase freq > 2', icon: 'RotateCw' },
  { label: 'Top 20% Share', value: '36.3%', note: '₹21,900 from 3 clients', icon: 'Star' },
];

export const cities = [
  { name: 'Bangalore', revenue: 16300, percent: 27.0, avgOrder: 5433, repeats: 1, color: '#1a3c6e' },
  { name: 'Hyderabad', revenue: 15700, percent: 26.0, avgOrder: 3925, repeats: 3, color: '#1a5f7e' },
  { name: 'Chennai', revenue: 11200, percent: 18.6, avgOrder: 3733, repeats: 1, color: '#1a7a5c' },
  { name: 'Mumbai', revenue: 10500, percent: 17.4, avgOrder: 3500, repeats: 1, color: '#7a5c1a' },
  { name: 'Delhi', revenue: 6600, percent: 10.9, avgOrder: 3300, repeats: 0, color: '#888' },
];

export const products = [
  { name: 'Training', revenue: 38900, percent: 64.5, orders: 6, avgOrder: 6483, color: '#1a3c6e' },
  { name: 'Treats', revenue: 11500, percent: 19.1, orders: 6, avgOrder: 1917, color: '#c27a17' },
  { name: 'Grooming', revenue: 9900, percent: 16.4, orders: 3, avgOrder: 3300, color: '#1a8a5c' },
];
