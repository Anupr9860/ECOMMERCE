"use client"
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import PurchaseButton from './Purchasebutton';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function ProductByCat(props) {
    let [products, setproducts] = useState([]);
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${props.slug}
      `).then(a => a.json()).then(b => setproducts(b.products))
    }, [props.slug])
    console.log(products)
    console.log(props.slug)

    return (
        <div>
            <div className="container mx-auto">
                <h2 className='text-2xl font-bold py-3 uppercase'>category of {props.slug} </h2>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {products.map(a => (
                        <SwiperSlide key={a.id}>
                            <img src={a.thumbnail} alt="" />
                            <p>{a.title}</p>
                            <PurchaseButton product={a} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}


export default ProductByCat



