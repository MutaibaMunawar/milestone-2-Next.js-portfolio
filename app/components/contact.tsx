'use client'
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e:any) => {
    e.preventDefault();
    alert('Message Sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact" className="bg-black text-white py-12 px-4 lg:px-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
        <p className="text-lg mb-8">Feel free to reach out to me. I am happy to help</p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="p-3 bg-gray-800 text-white border border-gray-600 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="p-3 bg-gray-800 text-white border border-gray-600 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="p-3 bg-gray-800 text-white border border-gray-600 rounded-md"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-8">
          <p className="text-lg">Or contact me directly</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="mailto:mutaibamunawar@gmail.com" className="text-orange-500 hover:underline">Email</a>
            <span className="text-white">|</span>
            <a href="tel:+923110776644" className="text-orange-500 hover:underline">Phone</a>
          </div>
        </div>
      </div>
    </div>
  );
}
