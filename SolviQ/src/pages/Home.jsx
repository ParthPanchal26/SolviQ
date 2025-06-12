import React from 'react';
import './HomeContent.css';
import { Link } from 'react-router-dom';
import heroImg from "../pages/images/hero.png";
import heroImgback from "../pages/images/hero-shape-purple.png";
import { courses } from '../pages'; 

export const HomeContent = () => {
  return (
    <section className='hero-section'>
      <div className='hero-container'>
        <div className='hero-left'>
          <h1 className='hero-heading'>
            Grab Your <br /> Own Online Learning <br /> Opportunity
          </h1>
          <div className='hero-search'>
            <span className='hero-search-note'>
             
            </span>
          </div>
        </div>

        <div className='hero-right'>
          <img style={{ marginLeft: '150px' }} src={heroImgback} alt='Background' className='hero-bg-img' />
          <img style={{ marginLeft: '150px' }} src={heroImg} alt='Hero' className='hero-img' />
        </div>
      </div>

      <div className='w-4/5 m-auto mt-12'>
        <div className='heading mb-16'>
          <h1 className='text-3xl font-semibold text-black'>
            Find The Right <br />
            Online Course For You
          </h1>
          <span className='text-sm mt-2 block'>
         
          </span>
        </div>

        <div className='grid grid-cols-3 gap-8 md:grid-cols-1'>
          {courses.map((item, index) => (
            <div key={index} className='box rounded-lg shadow-shadow1 bg-white'>
              <div className='images rounded-t-lg relative overflow-hidden h-40 w-full'>
                <img
                  src={item.cover}
                  alt={item.title}
                  className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300'
                />
              </div>
              <div className='text p-3'>
                <h3 className='text-black my-4 font-medium h-10'>{item.title}</h3>
                <div className='user flex items-center'>
              
                </div>
              </div>
              <div className='flex items-center justify-between border-t border-gray-200 p-3'>
                <span className='text-sm text-primary'>{item.price}</span>
                <Link
                  to="/courses"
                  className='text-white bg-blue-600 hover:bg-blue-700 text-sm px-4 py-1.5 rounded-md transition duration-300'
                 
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
