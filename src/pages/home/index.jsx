import React from 'react';
import useSmoothScroll from '../../hooks/general/useSmoothScroll';

import HomeHeroSection from '../../section/home/hero';
import SpecialCombosSection from '../../section/home/combo';
import GallerySection from '../../section/home/gallary';
import TestimonialSection from '../../section/home/testimonial';

const Home = () => {
    useSmoothScroll();

    return (
        <main className="bg-gray-900 min-h-screen">
            <HomeHeroSection />
            <SpecialCombosSection />
            <GallerySection />
            <TestimonialSection />
        </main>
    )
}

export default Home
