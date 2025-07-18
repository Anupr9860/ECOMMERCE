"use client";
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function Page() {
  const { cid } = useParams();
  const [products, setProducts] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const openOffcanvas = (product) => {
    setSelectedProduct(product);
    setShowOffcanvas(true);
  };

  const closeOffcanvas = () => {
    setShowOffcanvas(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const category = cid.replace(/-/g, ' ');
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then(a => a.json())
      .then(b => setProducts(b.products));
  }, [cid, mounted]);

  if (!mounted) return null;

  return (
    <div className='container mx-auto'>
      <h2 className='text-2xl font-semibold py-2 uppercase text-gray-800'>{cid} Category</h2>
      <div className="grid grid-cols-3 gap-3 justify-between">
        {products === null ? (
          <div>Loading...</div>
        ) : (
          products.map(a => (
            <div className='bg-white shadow-md p-2 flex flex-col items-center' key={a.id}>
              <img src={a.thumbnail} alt="" />
              <p className='text-3xl text-center'>{a.title}</p>
              <p className='text-gold-800 text-2xl text-center'>$ {a.price}</p>
              <button
                className='bg-blue-800 p-3 py-1 rounded-sm text-white mt-2'
                onClick={() => openOffcanvas(a)}
              >
                Purchase
              </button>
              {showOffcanvas && selectedProduct && (
                <div className="fixed inset-0 z-50 flex">

                  <div
                    className="fixed inset-0 "
                    onClick={closeOffcanvas}
                  ></div>

                  <div className="fixed inset-0 bg-white h-full w-[400px] shadow-lg p-6 animate-slide-in-right z-50 overflow-auto">
                    <button
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                      onClick={closeOffcanvas}
                    >
                      &times;
                    </button>
                    <img src={selectedProduct.thumbnail} alt={selectedProduct.title} className=" h-48 object-cover rounded" />
                    <h3 className="text-xl font-bold mt-4">{selectedProduct.title}</h3>
                    <p className="mt-2 text-gray-700">{selectedProduct.description}</p>
                    <p className="mt-2 font-semibold text-gold-800">Price: ${selectedProduct.price}</p>
                    <p className='text-2xl semibold'>Quantity</p>

                    <form className="flex items-center gap-2 my-4" onSubmit={e => e.preventDefault()}>
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
                        onChange={e => setQuantity(Math.max(1, Number(e.target.value)))}
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
                      onClick={() => alert('Thank you for your purchase!')}
                    >
                      Confirm Purchase
                    </button>
                  </div>
                  <style jsx global>{`
      @keyframes slide-in-right {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
      }
      .animate-slide-in-right {
        animation: slide-in-right 0.3s cubic-bezier(0.4,0,0.2,1);
      }
    `}</style>
                </div>
              )}
            </div>

          ))
        )}
      </div>
    </div>
  );
}

export default Page;