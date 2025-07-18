"use client";
import React, { useState } from 'react';

const PurchaseButton = ({ product }) => {
  const [showPanel, setShowPanel] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const openPanel = () => setShowPanel(true);
  const closePanel = () => {
    setShowPanel(false);
    setQuantity(1);
  };

  return (
    <>
      <button
        className="bg-blue-800 p-3 py-1 rounded-sm text-white mt-2"
        onClick={openPanel}
      >
        Purchase
      </button>

      {showPanel && (
        <div className="fixed inset-0 z-50 flex">

          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closePanel}
          ></div>

          
          <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-50 p-6 overflow-y-auto animate-slide-in-right shadow-lg">
         
            <button
              className="absolute top-4 right-4 text-3xl text-gray-700 hover:text-black"
              onClick={closePanel}
              aria-label="Close purchase panel"
            >
              &times;
            </button>

       
            <div className="max-w-2xl mx-auto pt-12">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-48 w-full object-cover rounded"
              />
              <h3 className="text-2xl font-bold mt-4">{product.title}</h3>
              <p className="mt-2 text-gray-700">{product.description}</p>
              <p className="mt-2 font-semibold text-purple-800 text-lg">
                Price: ${product.price}
              </p>

      
              <p className="text-2xl font-semibold mt-6">Quantity</p>
              <form className="flex items-center gap-2 my-4" onSubmit={(e) => e.preventDefault()}>
                <button
                  type="button"
                  className="px-3 py-1 bg-gray-200 rounded text-xl"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                  className="w-16 text-center border rounded"
                />
                <button
                  type="button"
                  className="px-3 py-1 bg-gray-200 rounded text-xl"
                  onClick={() => setQuantity(q => q + 1)}
                >
                  +
                </button>
              </form>

              <button
                className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                onClick={() => alert('Order Confirmed!')}
              >
                Confirm Purchase
              </button>
            </div>
          </div>

        
          <style jsx global>{`
            @keyframes slide-in-right {
              from {
                transform: translateX(100%);
              }
              to {
                transform: translateX(0);
              }
            }
            .animate-slide-in-right {
              animation: slide-in-right 0.3s ease-out;
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default PurchaseButton;
