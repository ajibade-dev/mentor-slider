import React from 'react';
import '../index.css';
import background from "../images/bg-pattern.svg"
import pattern from "../images/pattern-circles.svg"
import check from "../images/icon-check.svg"

const Slider = () => {
  return (
    <div className='h-screen bg-main-bg'>
    <div className='font-manrope text-center pt-16 py-7 pb-[300px] bg-empty-slider-bar rounded-bl-[200px] '  style={{
        backgroundImage: `url(${pattern})`,
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundPositionY: 'top'
       
      }}>
        <h1 className='md:text-3xl text-2xl text-text-cta-bg font-bold mb-[10px]'>Simple, traffic based pricing</h1>
        <p className='text-text text-sm'>Sign up for our 30-day trial, no credit card required</p>
    </div>
    <div className='max-w-xl md:mx-auto mx-10'>
    <div className='bg-white -mt-[200px] rounded-xl'>
        {/* top part of card */}
        <div className='p-10'>
            <div className='flex justify-between items-center mb-7'>
                <div className='text-text uppercase font-bold font-manrope tracking-widest'>
                    <p><span id='pageview'>100k </span>PageViews</p>
                </div>
                <div className='flex items-center font-manrope'>
                    <p className='text-text-cta-bg font-bold text-4xl'>$ <span id='cost'>16</span>.00</p>
                    <p className='text-text font-semibold ml-1'>/ month</p>
                </div>
            </div>

            {/* slider */}
            <div className='range'>
                <input type="range" id='price-slider' className='w-full no-appearance h-2 bg-gradient-to-r from-green-200 from-50% via-gray-200 via-30% to-gray-200 to-90% rounded-md slider-thumb cursor-pointer' min="0" max="4" />
            </div>
            <div className='flex text-center mt-[40px] font-manrope justify-center gap-4 items-center'>
                <p className=' px-2 inline-block py-0'>Monthly billing</p>
                <label className='switch'>
                    <input type="checkbox" name='billing' id='billing' />
                    <span className='toggle-slider'></span>
                </label>
                <p>Yearly Billing</p>
                <p className='text-discount-text bg-discount-background text-xs rounded-md'>25% discount</p>
            </div>
        </div>

        {/* Bottom part of card */}
        <hr />
        <div className='p-10'>
            <ul>
                <li><img src={check} alt="" />Unlimited Websites</li>
                <li><img src={check} alt="" />100% data ownership</li>
                <li><img src={check} alt="" />Email reports</li>
            </ul>
            <a href="#">Start my trial</a>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Slider