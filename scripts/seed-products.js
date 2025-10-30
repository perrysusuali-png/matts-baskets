const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const products = [
  {
    name: 'Large Woven Basket',
    description: 'Beautifully crafted large woven basket made from natural materials. Perfect for storage or as a decorative piece.',
    price: 50,
    image: 'basket6.jpg'
  },
  {
    name: 'Medium Storage Basket',
    description: 'Medium-sized storage basket ideal for organizing household items.',
    price: 35,
    image: 'basket7.jpg'
  },
  {
    name: 'Small Decorative Basket',
    description: 'Small decorative basket perfect for displaying small items or as a gift.',
    price: 25,
    image: 'basket8.jpg'
  },
  {
    name: 'Round Market Basket',
    description: 'Traditional round market basket with sturdy construction.',
    price: 40,
    image: 'basket9.jpg'
  },
  {
    name: 'Tall Laundry Basket',
    description: 'Tall laundry basket designed for efficient laundry organization.',
    price: 60,
    image: 'basket10.jpg'
  },
  {
    name: 'Square Picnic Basket',
    description: 'Square picnic basket perfect for outdoor activities and gatherings.',
    price: 45,
    image: 'basket11.jpg'
  },
  {
    name: 'Oval Fruit Basket',
    description: 'Oval fruit basket ideal for displaying fresh fruits in the kitchen.',
    price: 30,
    image: 'basket12.jpg'
  },
  {
    name: 'Rectangular Bread Basket',
    description: 'Rectangular bread basket perfect for serving bread and pastries.',
    price: 20,
    image: 'basket13.jpg'
  },
  {
    name: 'Hexagonal Gift Basket',
    description: 'Unique hexagonal gift basket with elegant design.',
    price: 55,
    image: 'basket14.jpg'
  },
  {
    name: 'Circular Serving Basket',
    description: 'Circular serving basket perfect for entertaining guests.',
    price: 38,
    image: 'basket15.jpg'
  },
  {
    name: 'Deep Utility Basket',
    description: 'Deep utility basket for heavy-duty storage needs.',
    price: 42,
    image: 'basket16.jpg'
  },
  {
    name: 'Shallow Display Basket',
    description: 'Shallow display basket ideal for showcasing decorative items.',
    price: 28,
    image: 'basket17.jpg'
  },
  {
    name: 'Wicker Storage Basket',
    description: 'Traditional wicker storage basket with authentic craftsmanship.',
    price: 48,
    image: 'basket18.jpg'
  },
  {
    name: 'Bamboo Style Basket',
    description: 'Bamboo-style basket combining modern design with natural materials.',
    price: 52,
    image: 'basket19.jpg'
  },
  {
    name: 'Traditional African Basket',
    description: 'Authentic traditional African basket showcasing cultural heritage.',
    price: 65,
    image: 'basket20.jpg'
  },
  {
    name: 'Modern Design Basket',
    description: 'Contemporary design basket blending tradition with modern aesthetics.',
    price: 58,
    image: 'basket24.jpg'
  },
  {
    name: 'Compact Travel Basket',
    description: 'Compact travel basket perfect for on-the-go storage.',
    price: 32,
    image: 'basket25.jpg'
  },
  {
    name: 'Elegant Dining Basket',
    description: 'Elegant dining basket for sophisticated table settings.',
    price: 70,
    image: 'basket26.jpg'
  },
  {
    name: 'Rustic Farm Basket',
    description: 'Rustic farm basket evoking countryside charm and durability.',
    price: 45,
    image: 'basket28.jpg'
  },
  {
    name: 'Artisan Craft Basket',
    description: 'Artisan craft basket showcasing exceptional craftsmanship.',
    price: 75,
    image: 'basket30.jpg'
  },
  {
    name: 'Versatile Kitchen Basket',
    description: 'Versatile kitchen basket for various culinary needs.',
    price: 40,
    image: 'basket31.jpg'
  },
  {
    name: 'Decorative Wall Basket',
    description: 'Decorative wall basket perfect for wall-mounted displays.',
    price: 35,
    image: 'basket32.jpg'
  },
  {
    name: 'Portable Shopping Basket',
    description: 'Portable shopping basket for convenient market trips.',
    price: 25,
    image: 'basket33.jpg'
  },
  {
    name: 'Luxury Gift Basket',
    description: 'Luxury gift basket for special occasions and gifts.',
    price: 80,
    image: 'basket34.jpg'
  },
  {
    name: 'Eco-Friendly Basket',
    description: 'Eco-friendly basket made from sustainable materials.',
    price: 38,
    image: 'basket35.jpg'
  },
  {
    name: 'Handmade Special Basket',
    description: 'Special handmade basket with unique design and quality.',
    price: 90,
    image: 'basket36.jpg'
  }
];

async function seedProducts() {
  try {
    console.log('Seeding products...');

    const { data, error } = await supabase
      .from('products')
      .insert(products)
      .select();

    if (error) {
      console.error('Error seeding products:', error);
      return;
    }

    console.log('Successfully seeded products:', data);
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

seedProducts();