import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const orderHistory = [
    {
      orderNumber: '123456',
      orderDate: '2024-01-14',
      status: 'ordered',
      statusColor: 'blue',
      items: [
        { name: 'Running Shoes', price: 50 },
        { name: 'Casual Shoes', price: 40 },
      ],
      total: 90,
    },
    {
        orderNumber: '123456',
        orderDate: '2024-01-14',
        status: 'Shipped',
        statusColor: 'green',
        items: [
          { name: 'Running Shoes', price: 50 },
          { name: 'Casual Shoes', price: 40 },
        ],
        total: 90,
      },
      {
        orderNumber: '123456',
        orderDate: '2024-01-14',
        status: 'recieved',
        statusColor: 'black',
        items: [
          { name: 'Running Shoes', price: 50 },
          { name: 'Casual Shoes', price: 40 },
        ],
        total: 90,
      },
    
  ];
const OrderHistory = () => {
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
    <><Navbar/>
    <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-md">
    <h2 className="text-3xl font-bold mb-6 text-gray-800">Order History</h2>

    {orderHistory.map((order, index) => (
      <div key={index} className="mb-8 border-b pb-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-700">Order Information</h3>
        <p className="text-sm text-gray-600">Order Number: {order.orderNumber}</p>
        <p className="text-sm text-gray-600">Date: {order.orderDate}</p>
        <p className="text-sm text-gray-600 mt-2">
          Order Status: <span className={`font-semibold text-${order.statusColor}-600`}>{order.status}</span>
        </p>

        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Items</h3>
          <ul className="list-disc">
            {order.items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-sm text-gray-600">{item.name} - ${item.price}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Total</h3>
          <p className="text-2xl font-bold text-indigo-700">${order.total}</p>
        </div>
      </div>
    ))}

    {orderHistory.length === 0 && (
      <p className="text-gray-600">No order history available.</p>
    )}
  </div>
  <Footer/>
  </>
  );
};

export default OrderHistory;