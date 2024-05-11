import React from 'react';
import useSmoothScroll from '../../hooks/general/useSmoothScroll';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ComboCard from '../../components/cards/combo'
import Image1 from '../../img/img17.png';
import image2 from '../../img/img11.png';

const About = () => {
    useSmoothScroll();

    const settings = {
        dots: true,
        infinite: true,
        speed: 550,
        autoplay: true,
        slidesToShow: 1, // Show 1 image at once
        slidesToScroll: 1,
        centerMode: true, // Center the active slide
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 768, // Mobile breakpoint
                settings: {
                    slidesToShow: 1, // Show 1 image at once on mobile
                },
            },
        ],
    };
    return (
        <div className="relative bg-gray-900 py-8 text-white">
            {/* Background Image */}
            <img
                src={Image1}
                alt="Love kathi"
                className="absolute inset-0 top-0 right-0 object-cover opacity-50 w-full h-auto md:h-42 lg:h-37 xl:h-34"
            />

            {/* Our Story Section */}
            <div className=" relative pt-20 md:col-span-2 py-8 ">
                <h2 className="text-5xl font-bold pt-10 text-center px-5 text-yellow-600 mb-4">Our Story</h2>
                <p className="text-xl text-center px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tinciduntorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tiorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunncidun id.</p>
            </div>

            <div className="hidden md:block">
                <div className="flex flex-col items-center  relative z-10">
                    <h1 className="text-4xl font-bold text-white text-center py-20 mb-8">Special <span className='text-red-600'>Offers !!!</span></h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-15 gap-28">
                        <ComboCard img={image2} pricing="Name" title="Description about the person" />
                        <ComboCard img={image2} pricing="Name" title="Description about the person" />
                        <ComboCard img={image2} pricing="Name" title="Description about the person" />
                        <ComboCard img={image2} pricing="Name" title="Description about the person" />
                        <ComboCard img={image2} pricing="Name" title="Description about the person" />
                        <ComboCard img={image2} pricing="Name" title="Description about the person" />
                    </div>
                </div>
            </div>


            {/*for mobile view */}
            <div className="md:hidden">
                <div className="relative bg-cover bg-center bg-gray-900" >

                    <div className="relative inset-0  bg-gray-900 bg-opacity-80 pb-5  ">
                        <h1 className="text-4xl font-bold text-white text-center py-20 mb-8">Special  <span className='text-red-600'>Offers !!</span></h1>
                        <Slider {...settings}>
                            <ComboCard img={image2} pricing="Name" title="Description about the person" />
                            <ComboCard img={image2} pricing="Name" title="Description about the person" />
                            <ComboCard img={image2} pricing="Name" title="Description about the person" />
                            <ComboCard img={image2} pricing="Name" title="Description about the person" />
                            <ComboCard img={image2} pricing="Name" title="Description about the person" />
                            <ComboCard img={image2} pricing="Name" title="Description about the person" />
                        </Slider>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;
