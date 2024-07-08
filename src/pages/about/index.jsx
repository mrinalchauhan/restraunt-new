import React from 'react';
import useSmoothScroll from '../../hooks/general/useSmoothScroll';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ComboCard from '../../components/cards/combo'

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
                src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/client-project%2Flove-kathi%2Fimg4.png?alt=media&token=13b8ead9-56c0-4ab1-a3b3-4b33ecee442e"
                alt="Love kathi"
                className="absolute inset-0 top-0 right-0 object-cover opacity-50 w-full h-auto md:h-42 lg:h-37 xl:h-34"
            />

            {/* Our Story Section */}
            <div className=" relative pt-20 md:col-span-2 py-8 ">
                <h2 className="text-5xl font-bold pt-10 text-center px-5 text-yellow-600 mb-4">Our Story</h2>
                <p className="text-xl text-center px-5">Welcome to Love Khati, established in 2020 with a passion for serving the best food near ITER College. Our mission is to offer delicious and affordable meals that satisfy both your taste buds and your budget. At Love Khati, we take pride in our inviting atmosphere, friendly service, and a menu filled with culinary delights that will make every visit memorable. Whether you're a student, a local resident, or just passing by, we invite you to join us for an exceptional dining experience that won’t break the bank. Come and taste the love at Love Khati!</p>
            </div>

            <div className="hidden md:block">
                <div className="flex flex-col items-center  relative z-10">
                    <h1 className="text-4xl font-bold text-white text-center py-20 mb-8">Our <span className='text-red-600'>Special Dishes !!!</span></h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-15 gap-28">
                        <ComboCard img="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/client-project%2Flove-kathi%2Fcomboimg1.jpeg?alt=media&token=28f43edf-2ec1-43d2-a3f3-4a9b78652f9b" pricing="780" title="JUMBO PACK offers Chicken Biryani(3 plates)+Chicken Butter Masala(1 plate)+Chilly Chicken(1 plate)+Sprite/Thumbs-Up" />
                        <ComboCard img="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/client-project%2Flove-kathi%2Fcomboimg2.jpeg?alt=media&token=56c54a9e-8159-4ffe-843b-4d35974556e5" pricing="750" title="JUMBO PACK offers Veg biryani(3 plates)+Panner Butter Masala(1 plate)+Chilly Panner (1 plate)+Sprite/Thumbs-Up" />
                        <ComboCard img="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/client-project%2Flove-kathi%2Ffood3.jpeg?alt=media&token=841da6f1-09f4-46f3-904d-48301c7f5da3" pricing="130/150" title="Veg Biryani/Chicken Biryani" />
                        <ComboCard img="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/client-project%2Flove-kathi%2Ffood4.jpeg?alt=media&token=d71e2f12-b176-40e2-8f09-4ca71e3615d8" pricing="100" title="Special Delicious Veg Thali" />
                        <ComboCard img="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/client-project%2Flove-kathi%2Ffood5.jpeg?alt=media&token=f3ed4c24-1107-4608-b4ee-7afb688cdbad" pricing="120-Rs 180" title="Savor the authentic flavors of Chinese cuisine." />
                        <ComboCard img="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/client-project%2Flove-kathi%2Ffood6.jpeg?alt=media&token=dd74f419-5a0e-4014-82e6-c1e8353c4f0d" pricing="140" title="Delicious Chicken Thali " />
                    </div>
                </div>
            </div>


            {/*for mobile view */}
            <div className="md:hidden">
                <div className="relative bg-cover bg-center bg-gray-900" >

                    <div className="relative inset-0  bg-gray-900 bg-opacity-80 pb-5  ">
                        <h1 className="text-4xl font-bold text-white text-center py-20 mb-8">Our <span className='text-red-600'>Special Dishes !!</span></h1>
                        <Slider {...settings}>
                        <ComboCard img="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/client-project%2Flove-kathi%2Fcomboimg1.jpeg?alt=media&token=28f43edf-2ec1-43d2-a3f3-4a9b78652f9b" pricing="780" title="JUMBO PACK offers Chicken Biryani(3 plates)+Chicken Butter Masala(1 plate)+Chilly Chicken(1 plate)+Sprite/Thumbs-Up" />
                        <ComboCard img="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/client-project%2Flove-kathi%2Fcomboimg2.jpeg?alt=media&token=56c54a9e-8159-4ffe-843b-4d35974556e5" pricing="750" title="JUMBO PACK offers Veg biryani(3 plates)+Panner Butter Masala(1 plate)+Chilly Panner (1 plate)+Sprite/Thumbs-Up" />
                        <ComboCard img="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/client-project%2Flove-kathi%2Ffood3.jpeg?alt=media&token=841da6f1-09f4-46f3-904d-48301c7f5da3" pricing="130/150" title="Veg Biryani/Chicken Biryani. Delight of meeting the never-ending demand of satisfied customers" />
                        <ComboCard img="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/client-project%2Flove-kathi%2Ffood4.jpeg?alt=media&token=d71e2f12-b176-40e2-8f09-4ca71e3615d8" pricing="100" title="Special Delicious Veg Thali" />
                        <ComboCard img="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/client-project%2Flove-kathi%2Ffood5.jpeg?alt=media&token=f3ed4c24-1107-4608-b4ee-7afb688cdbad" pricing="120-Rs 180" title="Savor the authentic flavors of Chinese cuisine." />
                        <ComboCard img="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/client-project%2Flove-kathi%2Ffood6.jpeg?alt=media&token=dd74f419-5a0e-4014-82e6-c1e8353c4f0d" pricing="140" title="Delicious Chicken Thali " />
                        </Slider>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;
