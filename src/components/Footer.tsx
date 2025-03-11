
import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">TrafficPro</h3>
            <p className="text-gray-400 mb-4">
              Strategic traffic management and qualified lead generation for businesses that want to grow.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-orange-500 transition-colors text-white p-2 rounded-full"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-orange-500 transition-colors text-white p-2 rounded-full"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-orange-500 transition-colors text-white p-2 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-orange-500 transition-colors text-white p-2 rounded-full"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Meta & Google Ads
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Lead Generation
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Landing Page Optimization
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Retargeting Strategies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">Email:</span>
                <a href="mailto:hello@trafficpro.com" className="text-orange-500 hover:text-orange-400">
                  hello@trafficpro.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">Phone:</span>
                <a href="tel:+1234567890" className="text-orange-500 hover:text-orange-400">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">WhatsApp:</span>
                <a href="https://wa.me/1234567890" className="text-orange-500 hover:text-orange-400">
                  Connect Now
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TrafficPro. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-orange-500 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
