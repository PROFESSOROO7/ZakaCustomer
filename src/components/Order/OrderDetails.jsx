// src/components/OrderSummary.js
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
const orderDetails = {
    orderNumber: '123456',
    orderDate: '2024-01-14',
    status: 'Shipped', // Add your order status here
    statusColor: 'green', // Add the corresponding color here
    items: [
      { name: 'Running Shoes', price: 50 },
      { name: 'Casual Shoes', price: 40 },
      // Add more items as needed
    ],
    total: 90,
  };
const OrderDetails = () => {
    React.useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 800,
          easing: "ease-in-sine",
          delay: 100,
        });
        AOS.refresh();
      }, []);
   
  return (
   
    <> 
     <Navbar/>  
     <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Order Summary</h2>

      {/* Display order details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Order Information</h3>
          <p className="text-sm text-gray-600">Order Number: {orderDetails.orderNumber}</p>
          <p className="text-sm text-gray-600">Date: {orderDetails.orderDate}</p>
          <p className="text-sm text-gray-600 mt-2">
            Order Status: <span className={`font-semibold text-${orderDetails.statusColor}-600`}>{orderDetails.status}</span>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Items</h3>
          <ul className="list-disc">
            {orderDetails.items.map((item, index) => (
              <li key={index} className="text-sm text-gray-600">{item.name} - ${item.price}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Total</h3>
        <p className="text-2xl font-bold text-indigo-700">${orderDetails.total}</p>
      </div>
    </div>

    <Footer/>

    </>

  );
};

export default OrderDetails;