"Use client";
import React from 'react'

function Footer() {
  return (
   <footer className='bg-gray-800 text-white py-4'>
    <div className="container mx-auto">
     <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">Products</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
                    </ul>
                </div>

           
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>Tinkune, Kathmandu</li>
                        <li>Phone: 9767583851, 01-1234567</li>
                        <li>Email: info@example.com</li>
                    </ul>
                </div>

               
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                        <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
                        <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                    </div>
                </div>
            </div>

            
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                <p>&copy; 2023 Your E-commerce Store. All rights reserved.</p>
            </div>
        </div>
    </div>
   </footer>
  )
}

export default Footer
