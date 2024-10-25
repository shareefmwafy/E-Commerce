import React, { useEffect, useState } from 'react';
import './Categories.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { Link } from 'react-router-dom';

async function getCategories() {
  const response = await fetch('https://dummyjson.com/products?limit=200&skip=90');
  const data = await response.json();
  // console.log(data.products);
  return data.products; // Assuming the API returns an array of category objects
  
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
          slidesPerView: 5,
          spaceBetween: 20
        },
        500: {
          slidesPerView: 5,
          spaceBetween: 30
        },
        800: {
          slidesPerView: 7,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 9,
          spaceBetween: 20
        },
        1600: {
          slidesPerView: 9,
          spaceBetween: 20
        }

      },
      // effect: 'coverflow',
      // coverflowEffect: {
      //   rotate: 0,
      //   slideShadows: true,
      // },
    });

    return () => {
      swiper.destroy(true, true);
      console.log( categories)
    };
  }, [categories]);

  return (
    <>
      <div className="container">
        
      <p className='cat'>Categories</p>
        <div className="swiper">          
          <div className="swiper-wrapper">
            {categories.map((category) => (
              <Link to={`/category/${category.id}`} key={category.id} className="swiper-slide">
                <div >
                  <img src={category.thumbnail} alt={category.title} />
                </div>
              </Link>
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
