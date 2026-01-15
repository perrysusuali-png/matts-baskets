'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getImageUrl } from '../lib/images';

const teamMembers = [
  {
    name: 'Kwame Mensah',
    role: 'Founder & Master Weaver',
    description: 'With 20+ years of weaving experience, Kwame leads the team with vision and skill.',
    image: 'basket4.jpg'
  },
  {
    name: 'Akosua Boateng',
    role: 'Operations Manager',
    description: 'Akosua ensures every basket meets our high standards and coordinates global shipments.',
    image: '/Akosua Boateng.jpeg'
  },
  {
    name: 'Yaw Owusu',
    role: 'Lead Designer',
    description: 'Yaw brings creativity and innovation to our basket designs, blending tradition with modern style.',
    image: '/Yaw owusu.jpeg'
  }
];

export default function About() {
  return (
    <>
      <Navbar activePage="about" />

      <section
        className="bg-cover bg-center bg-no-repeat h-[90vh] relative flex justify-center items-center"
        style={{ backgroundImage: "linear-gradient(rgba(46, 125, 50, 0.3), rgba(46, 125, 50, 0.3)), url('/logo_matts_basket.jpg')" }}
      >
        <div className="bg-primary bg-opacity-55 p-8 text-center text-white rounded-lg backdrop-blur-sm animate-fade-in-up">
          <h2 className="text-2xl mb-4 animate-text-fade-in">We Weave Culture Into Every Basket</h2>
          <p className="animate-text-fade-in">Rirosa Global Ltd is proudly Ghanaian, sharing authentic African craftsmanship with the world.</p>
        </div>
      </section>

      <div className="py-12 px-10 md:px-40 leading-relaxed">
        <h2 className="text-center text-primary mb-6">Our Story</h2>
        <p className="text-gray-700">
          Matts Baskets began with a simple dream — to showcase the beauty and skill of African artisans to a global audience.
          Our baskets are 100% handwoven in Ghana using eco-friendly materials, blending traditional artistry with modern design.
        </p>

        <div className="flex flex-col md:flex-row gap-8 flex-wrap my-8">
          <div className="flex-1 min-w-0 bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
            <h3 className="text-primary mb-2">🌿 Our Mission</h3>
            <p className="text-gray-700">
              To empower local weavers and promote sustainable craftsmanship that tells Africa story — one basket at a time.
            </p>
          </div>
          <div className="flex-1 min-w-0 bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
            <h3 className="text-primary mb-2">🌍 Our Vision</h3>
            <p className="text-gray-700">
              To become a leading name in authentic African home decor and lifestyle products worldwide.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-primary mb-4">Our Core Values</h3>
          <ul className="list-none mt-4">
            <li className="py-2 font-medium text-secondary">✨ Authentic Craftsmanship</li>
            <li className="py-2 font-medium text-secondary">💪 Empowering Local Communities</li>
            <li className="py-2 font-medium text-secondary">🌱 Sustainability</li>
            <li className="py-2 font-medium text-secondary">💖 Integrity & Fair Trade</li>
          </ul>
        </div>
      </div>

      <section className="py-12 px-8 md:px-32 text-center">
        <h3 className="text-primary mb-8">Our Team Members</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center transition duration-200 hover:-translate-y-2">
              <img
                src={member.image.startsWith('/') ? member.image : getImageUrl(member.image)}
                alt={member.name}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-primary"
              />
              <h3 className="text-primary mb-2 text-xl">{member.name}</h3>
              <div className="text-secondary font-semibold text-lg mb-2">{member.role}</div>
              <p className="text-gray-700 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="py-12 px-10 md:px-40 leading-relaxed">
        <h2 className="text-center text-primary mb-6">Contact Information</h2>
        <div className="text-center mt-8">
          <h3 className="text-primary mb-4">Get In Touch</h3>
          <p className="text-lg mb-4">
            <strong>Email:</strong> info@mattsbaskets.com
          </p>
          <p className="text-lg mb-4">
            <strong>Social Media:</strong>
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <a href="https://facebook.com/mattsbaskets" target="_blank" rel="noopener noreferrer" className="text-primary no-underline font-medium hover:text-secondary">
              Facebook: @mattsbaskets
            </a>
            <a href="https://instagram.com/mattsbaskets" target="_blank" rel="noopener noreferrer" className="text-primary no-underline font-medium hover:text-secondary">
              Instagram: @mattsbaskets
            </a>
            <a href="https://twitter.com/mattsbaskets" target="_blank" rel="noopener noreferrer" className="text-primary no-underline font-medium hover:text-secondary">
              Twitter: @mattsbaskets
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}