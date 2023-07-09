import React, { useRef, useState } from 'react';
import '../index.css';
import background from "../images/bg-pattern.svg"
import pattern from "../images/pattern-circles.svg"
import check from "../images/icon-check.svg"


const pricingDeets = {
    1:{
        pageviews: "10K",
        monthly: 8,
        yearly: 72,
    },

    2:{
        pageviews: "50K",
        monthly: 12,
        yearly: 108,
    },

    3:{
        pageviews: "100K",
        monthly: 16,
        yearly: 144,
    },

    4:{
        pageviews: "500K",
        monthly: 24,
        yearly: 216,
    },

    5:{
        pageviews: "1M",
        monthly: 36,
        yearly: 324,
    },
}


const Slider = () => {

    const [pageviews, setPageViews] = useState(3);

    const [isMonthly, setIsMonthly] = useState(true);

    function handlePageviewInput(e) {
        setPageViews(e.target.value)
    }

    // {`${pricingDeets[pageviews][isMonthly ? "monthly" : "yearly"]}`}

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
        <div className='md:p-10 p-5'>
            <div className='flex justify-between items-center mb-7'>
                <div className='text-text uppercase font-bold font-manrope md:tracking-widest tracking-normal text-sm md:text-base'>
                    <p><span id='pageview'>{pricingDeets[pageviews].pageviews}</span> PageViews</p>
                </div>
                <div className='flex items-center font-manrope ml-1 md:ml-0'>
                    <p className='text-text-cta-bg font-bold md:text-4xl text-normal'> <span id='cost'>${pricingDeets[pageviews][isMonthly ? "monthly" : "yearly"]}</span>.00</p>
                    <p className='text-text md:font-semibold md:ml-1 ml-0 font-extralight text-sm md:text-base'>/{isMonthly ? "month" : "year"}</p>
                </div>
            </div>

            {/* slider */}
            <div className='range'>
                <input type="range" name='pageviews' id='pageviews' className='w-full no-appearance h-2 bg-gradient-to-r from-green-200 from-50% via-gray-200 via-30% to-gray-200 to-90% rounded-md slider-thumb cursor-pointer' min="1" max="5" step="1"
                value={pageviews}
                onInput={(e) => setPageViews(e.target.value)}
                aria-label={`${pricingDeets[pageviews].pageviews}pageviews`}
                />
            </div>
            <div className='flex text-center mt-[40px] font-manrope justify-center md:gap-4 gap-1 items-center '>
                <p className=' px-2 inline-block py-0 text-sm md:text-base'>Monthly billing</p>
                <label className='switch'>
                    <input type="checkbox" name='billing' id='billing' onChange={(e) => setIsMonthly(!isMonthly )} />
                    <span className='toggle-slider'></span>
                </label>
                <p className='text-sm md:text-base'>Yearly Billing</p>
                <p className='text-discount-text bg-discount-background text-xs rounded-md'>25% discount</p>
            </div>
        </div>

        {/* Bottom part of card */}
        <hr />
        <div className='flex md:flex-row flex-col p-10 justify-between items-center gap-4 md:gap-0'>
            <ul className=''>
                <li className='flex gap-4 items-center'><img src={check} alt="" className='w-4 h-4' />Unlimited Websites</li>
                <li className='flex gap-4 items-center'><img src={check} alt=""  className='w-4 h-4'/>100% data ownership</li>
                <li className='flex gap-4 items-center'><img src={check} alt="" className='w-4 h-4'/>Email reports</li>
            </ul>
            <a href="#" className='text-cta-text bg-text-cta-bg rounded-full px-8 py-2 mt-10 md:mt-0'>Start my trial</a>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Slider