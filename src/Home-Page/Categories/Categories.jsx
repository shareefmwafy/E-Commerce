import React, { useEffect, useState } from 'react';
import './Categories.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

async function getCategories() {
  const response = await fetch(`https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10`);
  const data = await response.json();
  return data.categories; // Assuming the API returns an array of category objects
}

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      },
      slidesPerView: 5,
      spaceBetween: 5,
      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        500:{
          slidesPerView: 3,
          spaceBetween: 30
        },
        800: {
          slidesPerView: 5,
          spaceBetween: 20
        },
        1200:{
          slidesPerView: 5,
          spaceBetween: 0
        }

      },
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 30,
        slideShadows: true,
      },
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, [categories]);
  console.log()
  return (
    <>
    <div className="container">
    <p className='cat'>Categories</p>
    
    <div className="swiper">
     
        <div className="swiper-wrapper">
          {categories.map((category) => (
            <div className="swiper-slide" key={category._id}>
              <img src={category.image.secure_url} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

      
    </div>
    </div>
    </>
  );
}

export default Categories;
