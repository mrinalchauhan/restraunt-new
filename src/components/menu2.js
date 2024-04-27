
import React, { useState } from 'react';
import image1 from '../img/img11.png';
import image2 from '../img/img9.png';
import image3 from '../img/img9.png';
import image4 from '../img/img11.png';
 //import image5 from '../img/img9.png';
 import image6 from '../img/img9.png';
 import image7 from '../img/img15.png';
 import image8 from '../img/img11.png';
 import image9 from '../img/img11.png';
 import image10 from '../img/img11.png';
 import image11 from '../img/img9.png';
 import image12 from '../img/img15.png';
 import image13 from '../img/img9.png';
 import image14 from '../img/img11.png';
 import image15 from '../img/img15.png';
 import image16 from '../img/img11.png';
 import image17 from '../img/img9.png';
 import image18 from '../img/img15.png';
 import image19 from '../img/img11.png';
 import image20 from '../img/img11.png';
 import image21 from '../img/img11.png';
 import image22 from '../img/img21.jpg';

//import backgroundImage from '../img/img1.jpg';
const Menuu = () => {

const [searchQuery, setSearchQuery] = useState('');


  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const scrollToElement = (element) => {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const searchAndScroll = () => {
    let matchFound = false;
    const dishElements = document.querySelectorAll('.dish-name'); // Adjust selector to target dish names

    dishElements.forEach(element => {
      const dishName = element.innerText.toLowerCase();
      const index = dishName.indexOf(searchQuery.toLowerCase());

      if (index !== -1) {
        element.style.color = 'black'; // Highlight matching dish name
        scrollToElement(element);
        matchFound = true;
        return; // Stop searching after finding the first match
      }
    });

    if (!matchFound) {
      alert('No matching dish found.');
    }
  };
  
   // style={{backgroundImage: `url(${backgroundImage})`}}
    
    return (                 
        <div className="bg-cover relative pt-0 bg-center bg-gray-900 py-20" >
      

      <div>
       <img 
  src={image22} 
  alt="Background Image 22" 
  className="w-full h-full md:h-auto lg:h-auto xl:h-auto sm:h-screen" 
  style={{ top: 0 }}
/>

      <div className="flex bottom-1 justify-center">
        <input 
          type="text" 
          placeholder="Search for our dishes" 
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="w-3/4 px-4 py-2 border border-gray-500 rounded-full bg-white text-black text-bold text-center focus:outline-none focus:shadow-outline"
        />
        <button 
          onClick={searchAndScroll}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full focus:outline-none hover:bg-blue-600"
        >
          Search
        </button>
      </div>

</div>



             <h1 className="text-6xl font-bold text-white text-center text-4xl py-20 mb-8">Menu! <span className='text-red-600'></span></h1>
           
            <div className="flex flex-col px-6 lg:px-28 items-center">
              
                <div className=''>
                    <div className='grid grid-rows text-center items-center'>
                        <h2 className='text-5xl font-bold text-center py-6  text-red-600'>VEG STARTER</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10 px-15 gap-14">
                        <img src={image1} alt="Background Image 1" className="absolute bottom-50 left-0 opacity-10" style={{maxWidth: '100%', maxHeight: '100%'}} />
                            {/* Combo 1 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 140</p>
                                <p className="text-lg text-white font-semibold text-center">Veg Manchurian</p>
                            </div>
                            {/* Combo 2 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                                <p className="text-lg text-white font-semibold text-center">Paneer Manchurian</p>
                            </div>
                            {/* Combo 3 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                                <p className="text-lg text-white font-semibold text-center">Paneer 65</p>
                            </div>
                            {/* Combo 4 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                                <p className="text-lg text-white font-semibold text-center">Paneer Chatpata</p>
                            </div>
                            {/* Combo 5 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 140</p>
                                <p className="text-lg text-white font-semibold text-center">Paneer Pakoda</p>
                            </div>
        
                            {/* Combo 6 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                                <p className="text-lg text-white font-semibold text-center">Chilly Paneer</p>
                            </div>
                            {/* Combo 7 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                                <p className="text-lg text-white font-semibold text-center">Garlic Paneer</p>
                            </div>
                            {/* Combo 8 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                                <p className="text-lg text-white font-semibold text-center">Mushroom Manchurian</p>
                            </div>
                            {/* Combo 9 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                                <p className="text-lg text-white font-semibold text-center">Mushroom 65</p>
                            </div>
                            {/* Combo 10 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 130</p>
                                <p className="text-lg text-white font-semibold text-center">Mushroom Pakoda</p>
                            </div>
                            {/* Combo 11 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                                <p className="text-lg text-white font-semibold text-center">Mushroom Chilly</p>
                                <img src={image21} alt="Background Image 1" className="absolute  right-0   opacity-10" style={{maxWidth: '50%', maxHeight: '100%'}} />
                            </div>
                            
                            {/* Combo 12 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 120</p>
                                <p className="text-lg text-white font-semibold text-center">Mushroom Salt n Pepper</p>
                               
                            </div>
                            {/* Combo 13 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 120</p>
                                <p className="text-lg text-white font-semibold text-center">Honey Chilly Potato</p>
                            </div>
                            {/* Combo 14 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 140</p>
                                <p className="text-lg text-white font-semibold text-center">Gobi Manchurian</p>
                            </div>
                            {/* Combo 15 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 140</p>
                                <p className="text-lg text-white font-semibold text-center">Chilly Gobi</p>
                            </div>
                            {/* Combo 16 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                                <p className="text-lg text-white font-semibold text-center">Crispy Chilly Babycorn</p>
                            </div>
                            {/* Combo 17 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                                <p className="text-lg text-white font-semibold text-center">Babycorn Manchurian</p>
                            </div>
                            {/* Combo 18 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 120</p>
                                <p className="text-lg text-white font-semibold text-center">American Corn Salt n Pepper</p>
                            </div>
                            {/* Combo 19 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 100</p>
                                <p className="text-lg text-white font-semibold text-center">Corn Chat</p>
                            </div>
                        </div>
                    </div>

                    
            <div className="flex flex-col items-center">
                
                <div>
                    <div className='grid grid-rows  gap-5'>
                    <img src={image13} alt="Background Image 1" className="absolute bottom-50    opacity-10" style={{maxWidth: '100%', maxHeight: '100%'}} />
                        <h2 className='text-5xl font-bold text-center py-6  text-red-600'>SOUP (Veg / Non-Veg)</h2>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  py-10 gap-20">
                            {/* Soup 1 */}
                           
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-9">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 70</p>
                                <p className="text-lg text-white font-semibold text-center">Tomato Soup</p>
                            </div>
                            {/* Soup 2 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 70</p>
                                <p className="text-lg text-white font-semibold text-center">Sweet Corn Soup</p>
                            </div>
                            {/* Soup 3 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 70</p>
                                <p className="text-lg text-white font-semibold text-center">Veg Garlic Soup</p>
                            </div>
                            {/* Soup 4 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 70</p>
                                <p className="text-lg text-white font-semibold text-center">Veg Manchow Soup</p>
                            </div>
                            {/* Soup 5 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 70</p>
                                <p className="text-lg text-white font-semibold text-center">Veg Hot & Sour Soup</p>
                            </div>
                            {/* Soup 6 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 80</p>
                                <p className="text-lg text-white font-semibold text-center">Chicken Soup</p>
                            </div>
                            {/* Soup 7 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 80</p>
                                <p className="text-lg text-white font-semibold text-center">Chicken Manchow Soup</p>
                            </div>
                            {/* Soup 8 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 80</p>
                                <p className="text-lg text-white font-semibold text-center">Chicken Garlic Soup</p>
                            </div>
                            {/* Soup 9 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 80</p>
                                <p className="text-lg text-white font-semibold text-center">Chicken Hot & Sour Soup</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col items-center">
                
                    {/* INDIAN MAIN COURSE (VEG) */}
                    <div className='grid grid-rows   gap-5'>
                        
                        <img src={image12} alt="Background Image 1" className="absolute bottom-50    opacity-15" style={{maxWidth: '100%', maxHeight: '100%'}} />
                        <h2 className='text-5xl font-bold text-center  py-6 text-red-600'>INDIAN MAIN COURSE (VEG)</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  py-10 gap-20">
                            {/* Veg Hyderabadi */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                                <p className="text-lg text-white font-semibold text-center">Veg Hyderabadi</p>
                            </div>
                            {/* Mix Veg */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                                <p className="text-lg text-white font-semibold text-center">Mix Veg</p>
                            </div>
                            {/* Kadhai Veg */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                                <p className="text-lg text-white font-semibold text-center">Kadhai Veg</p>
                            </div>
                            {/* Veg Punchmela */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 160</p>
                                <p className="text-lg text-white font-semibold text-center">Veg Punchmela</p>
                            </div>
                            {/* Veg Kolapuri */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                                <p className="text-lg text-white font-semibold text-center">Veg Kolapuri</p>
                            </div>
                            {/* Veg Jalfrazi */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                                <p className="text-lg text-white font-semibold text-center">Veg Jalfrazi</p>
                            </div>
                            {/* Veg Korma */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 160</p>
                                <p className="text-lg text-white font-semibold text-center">Veg Korma</p>
                            </div>
                            {/* Veg Malai Kofta */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 160</p>
                                <p className="text-lg text-white font-semibold text-center">Veg Malai Kofta</p>
                            </div>
                            {/* Veg Kofta */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                                <p className="text-lg text-white font-semibold text-center">Veg Kofta</p>
                            </div>
                            {/* Gobi Matar Kadhai */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 140</p>
                                <p className="text-lg text-white font-semibold text-center">Gobi Matar Kadhai</p>
                            </div>
                            {/* Aloo Gobi Masala */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 140</p>
                                <p className="text-lg text-white font-semibold text-center">Aloo Gobi Masala</p>
                            </div>
                            {/* Aloo Achari */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 120</p>
                                <p className="text-lg text-white font-semibold text-center">Aloo Achari</p>
                            </div>
                        </div>
                    </div>
                    {/* PANEER */}
                    <div className='grid grid-rows  gap-5'>
                        <h2 className='text-5xl font-bold text-center py-6 text-red-600'>PANEER</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-15  gap-20">
                            {/* Paneer Butter Masala */}
                            <img src={image3} alt="Background Image 1" className="absolute opacity-20" style={{maxWidth: '100%', maxHeight: '100%'}} />
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 180</p>
                                <p className="text-lg text-white font-semibold text-center">Paneer Butter Masala</p>
                            </div>
                            {/* Paneer Kadhai */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 170</p>
                                <p className="text-lg text-white font-semibold text-center">Paneer Kadhai</p>
                            </div>
                            {/* Paneer Do Pyaza */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 170</p>
                                <p className="text-lg text-white font-semibold text-center">Paneer Do Pyaza</p>
                            </div>
                            {/* Matar Paneer */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 170</p>
                                <p className="text-lg text-white font-semibold text-center">Matar Paneer</p>
                            </div>
                            {/* Paneer Bharta */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 180</p>
                                <p className="text-lg text-white font-semibold text-center">Paneer Bharta</p>
                            </div>
                            {/* Sahi Paneer */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 180</p>
                                <p className="text-lg text-white font-semibold text-center">Sahi Paneer</p>
                            </div>
                            {/* Paneer Achari */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 170</p>
                                <p className="text-lg text-white font-semibold text-center">Paneer Achari</p>
                            </div>
                            {/* Paneer Hyderabadi */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 170</p>
                                <p className="text-lg text-white font-semibold text-center">Paneer Hyderabadi</p>
                            </div>
                            {/* Paneer Methi Chaman */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 180</p>
                                <p className="text-lg text-white font-semibold text-center">Paneer Methi Chaman</p>
                            </div>
                            {/* Paneer Lababdar */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 170</p>
                                <p className="text-lg text-white font-semibold text-center">Paneer Lababdar</p>
                            </div>
                            {/* Methi Paneer */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 180</p>
                                <p className="text-lg text-white font-semibold text-center">Methi Paneer</p>
                            </div>
                            {/* Paneer Masala */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 170</p>
                                <p className="text-lg text-white font-semibold text-center">Paneer Masala</p>
                            </div>
                        </div>
                    </div>
                    {/* MUSHROOM */}
                    <div className='grid grid-rows  gap-5'>
                        <h2 className='text-5xl font-bold text-center py-6 text-red-600'>MUSHROOM</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-15 gap-20">
                            {/* Mushroom Masala */}
                            <img src={image4} alt="Background Image 1" className="absolute bottom-50 right-0   opacity-10" style={{maxWidth: '100%', maxHeight: '100%'}} />
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 170</p>
                                <p className="text-lg text-white font-semibold text-center">Mushroom Masala</p>
                            </div>
                            {/* Mushroom Kadhai */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 170</p>
                                <p className="text-lg text-white font-semibold text-center">Mushroom Kadhai</p>
                            </div>
                            {/* Mushroom Do Pyaza */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 170</p>
                                <p className="text-lg text-white font-semibold text-center">Mushroom Do Pyaza</p>
                            </div>
                            {/* Mushroom Butter Masala */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 180</p>
                                <p className="text-lg text-white font-semibold text-center">Mushroom Butter Masala</p>
                            </div>
                            {/* Mashroom Hyderabadi */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 170</p>
                                <p className="text-lg text-white font-semibold text-center">Mashroom Hyderabadi</p>
                            </div>
                        </div>
                    </div>
                    {/* INDIAN FRESH GARDEN FRY */}
                    <div className='grid grid-rows gap-5'>
                    {/* <img src={image5} alt="Background Image 1" className="absolute bottom-50 right-0   opacity-10" style={{maxWidth: '100%', maxHeight: '100%'}} /> */}
                        <h2 className='text-5xl font-bold text-center py-6 text-red-600'>INDIAN FRESH GARDEN FRY</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-15 gap-20">
                            {/* Bhindi Aloo Fry */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 80</p>
                                <p className="text-lg text-white font-semibold text-center">Bhindi Aloo Fry</p>
                            </div>
                            {/* Baigan Aloo Fry */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 80</p>
                                <p className="text-lg text-white font-semibold text-center">Baigan Aloo Fry</p>
                            </div>
                            {/* Parwal Aloo Fry */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 80</p>
                                <p className="text-lg text-white font-semibold text-center">Parwal Aloo Fry</p>
                            </div>
                            {/* Gobi Aloo Fry */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 80</p>
                                <p className="text-lg text-white font-semibold text-center">Gobi Aloo Fry</p>
                            </div>
                        </div>
                    </div>
                    {/* Salad / Raita / Papad */}
                    <div className='grid grid-rows gap-5'>
                        <h2 className='text-5xl font-bold text-center py-6 text-red-600'>Salad / Raita / Papad</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-15  gap-20">
                            {/* Green Salad */}
                            <img src={image6} alt="Background Image 1" className="absolute    opacity-10" style={{maxWidth: 'auto', maxHeight: 'auto'}} />
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 60</p>
                                <p className="text-lg text-white font-semibold text-center">Green Salad</p>
                            </div>
                            {/* Cucumber Salad */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 50</p>
                                <p className="text-lg text-white font-semibold text-center">Cucumber Salad</p>
                            </div>
                            {/* Mix Raita */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 69</p>
                                <p className="text-lg text-white font-semibold text-center">Mix Raita</p>
                            </div>
                            {/* Boondi Raita */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 69</p>
                                <p className="text-lg text-white font-semibold text-center">Boondi Raita</p>
                            </div>
                            {/* Fried Papad */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 35</p>
                                <p className="text-lg text-white font-semibold text-center">Fried Papad</p>
                            </div>
                            {/* Roasted Papad */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 30</p>
                                <p className="text-lg text-white font-semibold text-center">Roasted Papad</p>
                            </div>
                            {/* Masala Papad */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 45</p>
                                <p className="text-lg text-white font-semibold text-center">Masala Papad</p>
                            </div>
                        </div>
                    </div>
                    {/* CHINESE RICE */}
                    <div className='grid grid-rows [x-8 gap-5'>
                        <h2 className='text-5xl font-bold text-center py-6 text-red-600'>CHINESE RICE</h2>
                        <img src={image7} alt="Background Image 1" className="absolute    opacity-10" style={{maxWidth: 'auto', Height: '100%'}} />
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-15  gap-20">
                            {/* Veg Fried Rice */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 120</p>
                                <p className="text-lg text-white font-semibold text-center">Veg Fried Rice</p>
                            </div>
                            {/* Mix Fried Rice(Veg) */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 140</p>
                                <p className="text-lg text-white font-semibold text-center">Mix Fried Rice(Veg)</p>
                            </div>
                            {/* Egg Fried Rice */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 130</p>
                                <p className="text-lg text-white font-semibold text-center">Egg Fried Rice</p>
                            </div>
                            {/* Chicken Fried Rice */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                                <p className="text-lg text-white font-semibold text-center">Chicken Fried Rice</p>
                            </div>
                            {/* Prawn Fried Rice */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 200</p>
                                <p className="text-lg text-white font-semibold text-center">Prawn Fried Rice</p>
                            </div>
                        </div>
                    </div>
                    {/* ROTI / PARATHA */}
                    <div className='grid grid-rows gap-5'>
                        <h2 className='text-5xl font-bold text-center py-6 text-red-600'>ROTI / PARATHA</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-15  gap-20">
                            {/* Tawa Roti */}
                            <img src={image8} alt="Background Image 1" className="absolute bottom-50 right-0   opacity-10" style={{maxWidth: '100%', maxHeight: '100%'}} />
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 10</p>
                                <p className="text-lg text-white font-semibold text-center">Tawa Roti</p>
                            </div>
                            {/* Butter Roti */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 12</p>
                                <p className="text-lg text-white font-semibold text-center">Butter Roti</p>
                            </div>
                            {/* Plain Paratha */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 25</p>
                                <p className="text-lg text-white font-semibold text-center">Plain Paratha</p>
                            </div>
                            {/* Lachha Paratha */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 30</p>
                                <p className="text-lg text-white font-semibold text-center">Lachha Paratha</p>
                            </div>
                            {/* Aloo Paratha */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 60</p>
                                <p className="text-lg text-white font-semibold text-center">Aloo Paratha</p>
                            </div>
                        </div>
                    </div>
                    {/* ROLL */}
                    <div className='grid grid-rows gap-5'>
                        <h2 className='text-5xl font-bold text-center py-6 text-red-600'>ROLL</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-15  gap-20">
                            {/* Paneer Roll */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 65</p>
                                <p className="text-lg text-white font-semibold text-center">Paneer Roll</p>
                            </div>
                            {/* Mushroom Roll */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 65</p>
                                <p className="text-lg text-white font-semibold text-center">Mushroom Roll</p>
                            </div>
                            {/* Mix Veg Roll */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 65</p>
                                <p className="text-lg text-white font-semibold text-center">Mix Veg Roll</p>
                            </div>
                            {/* Single Egg Chicken Roll */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 70</p>
                                <p className="text-lg text-white font-semibold text-center">Single Egg Chicken Roll</p>
                            </div>
                            {/* Double Egg Chicken Roll */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 80</p>
                                <p className="text-lg text-white font-semibold text-center">Double Egg Chicken Roll</p>
                            </div>
                            {/* Veg Spring Roll */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 80</p>
                                <p className="text-lg text-white font-semibold text-center">Veg Spring Roll</p>
                            </div>
                            {/* Chicken Spring Roll */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                                <p className="text-lg text-red-600 font-semibold text-center">Rs 100</p>
                                <p className="text-lg text-white font-semibold text-center">Chicken Spring Roll</p>
                            </div>
                        </div>
                    </div>
                </div>
               



               {/* NON-VEG STARTER */}
               <div className='grid grid-rows gap-5'>
                    <h2 className='text-5xl font-bold text-center py-6 text-red-600'>NON-VEG STARTER</h2>
                    <img src={image9} alt="Background Image 1" className="absolute  left-0   opacity-10" style={{maxWidth: '50%', maxHeight: '100%'}} />
                    <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5 py-15 gap-20">
                        {/* Chilly chicken(Bone) */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                            <p className="text-lg text-white font-semibold text-center">Chilly chicken (Bone)</p>
                        </div>
                        {/* Chilly chicken(Bone less) */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 160</p>
                            <p className="text-lg text-white font-semibold text-center">Chilly chicken (Boneless)</p>
                        </div>
                        {/* Chicken Manchurian */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                            <p className="text-lg text-white font-semibold text-center">Chicken Manchurian</p>
                        </div>
                        {/* Garlic chicken */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                            <p className="text-lg text-white font-semibold text-center">Garlic chicken</p>
                        </div>
                        {/* Chicken 65 */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                            <p className="text-lg text-white font-semibold text-center">Chicken 65</p>
                        </div>
                        {/* Chicken pakoda */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                            <p className="text-lg text-white font-semibold text-center">Chicken pakoda</p>
                        </div>
                        {/* Bali chicken */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 180</p>
                            <p className="text-lg text-white font-semibold text-center">Bali chicken</p>
                        </div>
                        {/* Chicken lollypop */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 170</p>
                            <p className="text-lg text-white font-semibold text-center">Chicken lollypop</p>
                        </div>
                        {/* Chicken Salt-N-Pepper */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                            <p className="text-lg text-white font-semibold text-center">Chicken Salt-N-Pepper</p>
                        </div>
                        {/* Crispy Chicken */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 160</p>
                            <p className="text-lg text-white font-semibold text-center">Crispy Chicken</p>
                        </div>
                        {/* Dragan chicken */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 160</p>
                            <p className="text-lg text-white font-semibold text-center">Dragan chicken</p>
                        </div>
                        {/* Pepper Chicken */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                            <p className="text-lg text-white font-semibold text-center">Pepper Chicken</p>
                        </div>
                        {/* Prawn 65 */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 250</p>
                            <p className="text-lg text-white font-semibold text-center">Prawn 65</p>
                        </div>
                        {/* Prawn Manchurian */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 250</p>
                            <p className="text-lg text-white font-semibold text-center">Prawn Manchurian</p>
                        </div>
                        {/* Chilly Prawn */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 250</p>
                            <p className="text-lg text-white font-semibold text-center">Chilly Prawn</p>
                        </div>
                        {/* Garlic Prawn */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 250</p>
                            <p className="text-lg text-white font-semibold text-center">Garlic Prawn</p>
                        </div>
                        {/* Bali Prawn */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 250</p>
                            <p className="text-lg text-white font-semibold text-center">Bali Prawn</p>
                        </div>
                        {/* Egg Pakoda */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 120</p>
                            <p className="text-lg text-white font-semibold text-center">Egg Pakoda</p>
                        </div>
                        {/* Egg Chilly */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 130</p>
                            <p className="text-lg text-white font-semibold text-center">Egg Chilly</p>
                        </div>
                    </div>
                   
                </div>
                {/* CHICKEN */}
                <div className='grid grid-rows gap-5'>
                    <h2 className='text-5xl font-bold text-center py-6 text-red-600'>CHICKEN</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-15 gap-20">
                        {/* Chicken curry */}
                        <img src={image10} alt="Background Image 1" className="absolute bottom-50 right-0   opacity-10" style={{maxWidth: 'auto', maxHeight: 'auto'}} />
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 180</p>
                            <p className="text-lg text-white font-semibold text-center">Chicken curry</p>
                        </div>
                        {/* Chicken kassa */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 180</p>
                            <p className="text-lg text-white font-semibold text-center">Chicken kassa</p>
                        </div>
                        {/* Chicken Do pyaza */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 180</p>
                            <p className="text-lg text-white font-semibold text-center">Chicken Do pyaza</p>
                        </div>
                        {/* Chicken Bharta */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 190</p>
                            <p className="text-lg text-white font-semibold text-center">Chicken Bharta</p>
                        </div>
                        {/* Chicken Moghlai */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 190</p>
                            <p className="text-lg text-white font-semibold text-center">Chicken Moghlai</p>
                        </div>
                        {/* Chicken Butter Masala */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 190</p>
                            <p className="text-lg text-white font-semibold text-center">Chicken Butter Masala</p>
                        </div>
                        {/* Kadhai chicken */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 180</p>
                            <p className="text-lg text-white font-semibold text-center">Kadhai chicken</p>
                        </div>
                        {/* Chicken Hyderabadi */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 180</p>
                            <p className="text-lg text-white font-semibold text-center">Chicken Hyderabadi</p>
                        </div>
                        {/* Chicken Banjara */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 180</p>
                            <p className="text-lg text-white font-semibold text-center">Chicken Banjara</p>
                        </div>
                        {/* Chicken Handi Korma */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 190</p>
                            <p className="text-lg text-white font-semibold text-center">Chicken Handi Korma</p>
                        </div>
                        {/* Chicken Patiala */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 190</p>
                            <p className="text-lg text-white font-semibold text-center">Chicken Patiala</p>
                        </div>
                        {/* Chicken Lababdar */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 190</p>
                            <p className="text-lg text-white font-semibold text-center">Chicken Lababdar</p>
                        </div>
                        {/* Chicken Korma */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 190</p>
                            <p className="text-lg text-white font-semibold text-center">Chicken Korma</p>
                        </div>
                    </div>
                </div>
                {/* PRAWN */}
                <div className='grid grid-rows gap-5'>
                    <h2 className='text-5xl font-bold text-center py-6 text-red-600'>PRAWN</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-15  gap-20">
                        {/* Prawn curry */}
                        <img src={image11} alt="Background Image 1" className="absolute bottom-50 right-0   opacity-10" style={{maxWidth: '100%', maxHeight: '100%'}} />
                        
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 290</p>
                            <p className="text-lg text-white font-semibold text-center">Prawn curry</p>
                        </div>
                        {/* Prawn Masala */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 290</p>
                            <p className="text-lg text-white font-semibold text-center">Prawn Masala</p>
                        </div>
                        {/* Prawn Butter Masala */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 300</p>
                            <p className="text-lg text-white font-semibold text-center">Prawn Butter Masala</p>
                        </div>
                        {/* Prawn Kalimirch Masala */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 290</p>
                            <p className="text-lg text-white font-semibold text-center">Prawn Kalimirch Masala</p>
                        </div>
                        {/* Prawn Malai Curry */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 300</p>
                            <p className="text-lg text-white font-semibold text-center">Prawn Malai Curry</p>
                        </div>
                    </div>
                </div>
                {/* EGG */}
                <div className='grid grid-rows gap-5'>
                    <h2 className='text-5xl font-bold text-center py-6 text-red-600'>EGG</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-15  gap-20">
                        {/* Egg Masala */}
                        <img src={image12} alt="Background Image 1" className="absolute bottom-50    opacity-10" style={{maxWidth: '100%', maxHeight: '100%'}} />
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 100</p>
                            <p className="text-lg text-white font-semibold text-center">Egg Masala</p>
                        </div>
                        {/* Egg curry */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 100</p>
                            <p className="text-lg text-white font-semibold text-center">Egg curry</p>
                        </div>
                        {/* Egg Do pyaza */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 100</p>
                            <p className="text-lg text-white font-semibold text-center">Egg Do pyaza</p>
                        </div>
                        {/* Egg Omlette */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 80</p>
                            <p className="text-lg text-white font-semibold text-center">Egg Omlette</p>
                        </div>
                        {/* Egg Bhurji */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 80</p>
                            <p className="text-lg text-white font-semibold text-center">Egg Bhurji</p>
                        </div>
                        {/* Egg Bhurj Curry */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 90</p>
                            <p className="text-lg text-white font-semibold text-center">Egg Bhurj Curry</p>
                        </div>
                    </div>
                </div>
                {/* FISH */}
                <div className='grid grid-rows gap-5'>
                    <h2 className='text-5xl font-bold text-center py-6 text-red-600'>FISH</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-15  gap-20">
                        {/* Fish Masala */}
                        <img src={image13} alt="Background Image 1" className="absolute bottom-50 right-0   opacity-10" style={{maxWidth: '100%', maxHeight: '100%'}} />
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 120</p>
                            <p className="text-lg text-white font-semibold text-center">Fish Masala</p>
                        </div>
                        {/* Fish Tawa Fry */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 100</p>
                            <p className="text-lg text-white font-semibold text-center">Fish Tawa Fry</p>
                        </div>
                        {/* Fish Mustard */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 120</p>
                            <p className="text-lg text-white font-semibold text-center">Fish Mustard</p>
                        </div>
                        {/* Fish Curry(H.S) */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 120</p>
                            <p className="text-lg text-white font-semibold text-center">Fish Curry(H.S)</p>
                        </div>
                        {/* Fish Kalia */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 130</p>
                            <p className="text-lg text-white font-semibold text-center">Fish Kalia</p>
                        </div>
                        {/* Dahi Fish */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 130</p>
                            <p className="text-lg text-white font-semibold text-center">Dahi Fish</p>
                        </div>
                    </div>
                </div>
                {/* INDIAN RICE */}
                <div className='grid grid-rows gap-5'>
                    <h2 className='text-5xl font-bold text-center py-6 text-red-600'>INDIAN RICE</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-15  gap-20">
                        {/* Steam Rice */}
                        <img src={image14} alt="Background Image 1" className="absolute bottom-50 right-0   opacity-10" style={{maxWidth: '100%', maxHeight: '100%'}} />
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 50</p>
                            <p className="text-lg text-white font-semibold text-center">Steam Rice</p>
                        </div>
                        {/* Jeera Rice */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 80</p>
                            <p className="text-lg text-white font-semibold text-center">Jeera Rice</p>
                        </div>
                        {/* Curd Rice */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 100</p>
                            <p className="text-lg text-white font-semibold text-center">Curd Rice</p>
                        </div>
                        {/* Lemon Rice */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 100</p>
                            <p className="text-lg text-white font-semibold text-center">Lemon Rice</p>
                        </div>
                        {/* Butter Rice */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 90</p>
                            <p className="text-lg text-white font-semibold text-center">Butter Rice</p>
                        </div>
                        {/* Ghee Rice */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 100</p>
                            <p className="text-lg text-white font-semibold text-center">Ghee Rice</p>
                        </div>
                        {/* Tamato Rice */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 110</p>
                            <p className="text-lg text-white font-semibold text-center">Tamato Rice</p>
                        </div>
                        {/* Veg Pulao with Raita */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 110</p>
                            <p className="text-lg text-white font-semibold text-center">Veg Pulao with Raita</p>
                        </div>
                        {/* Dal Khichdi */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 110</p>
                            <p className="text-lg text-white font-semibold text-center">Dal Khichdi</p>
                        </div>
                    </div>
                </div>
                {/* BIRIYANI */}
                <div className='grid grid-rows gap-5'>
                    <h2 className='text-5xl font-bold text-center py-6 text-red-600'>BIRIYANI</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-15  gap-20">
                        {/* Veg Biriyani */}
                        <img src={image15} alt="Background Image 1" className="absolute   opacity-10" style={{maxWidth: '100%', maxHeight: '100%'}} />
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 130</p>
                            <p className="text-lg text-white font-semibold text-center">Veg Biriyani</p>
                        </div>
                        {/* Paneer Biryani */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 130</p>
                            <p className="text-lg text-white font-semibold text-center">Paneer Biryani</p>
                        </div>
                        {/* Mushroom Biryani */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 130</p>
                            <p className="text-lg text-white font-semibold text-center">Mushroom Biryani</p>
                        </div>
                        {/* Egg Biriyani */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 130</p>
                            <p className="text-lg text-white font-semibold text-center">Egg Biriyani</p>
                        </div>
                        {/* Chicken Biriyani */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                            <p className="text-lg text-white font-semibold text-center">Chicken Biriyani</p>
                        </div>
                        {/* Prawn Biryani */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 200</p>
                            <p className="text-lg text-white font-semibold text-center">Prawn Biryani</p>
                        </div>
                    </div>
                </div>
                {/* INDIAN DAL */}
                <div className='grid grid-rows gap-5'>
                    <h2 className='text-5xl font-bold text-center py-6 text-red-600'>INDIAN DAL</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-15  gap-20">
                        {/* Egg Dal Tadka */}
                        <img src={image16} alt="Background Image 1" className="absolute bottom-50 left-0   opacity-10" style={{maxWidth: '100%', maxHeight: '100%'}} />
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 130</p>
                            <p className="text-lg text-white font-semibold text-center">Egg Dal Tadka</p>
                        </div>
                        {/* Plain Dal */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 70</p>
                            <p className="text-lg text-white font-semibold text-center">Plain Dal</p>
                        </div>
                        {/* Dal Fry */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 90</p>
                            <p className="text-lg text-white font-semibold text-center">Dal Fry</p>
                        </div>
                        {/* Black Dal Tadka */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 120</p>
                            <p className="text-lg text-white font-semibold text-center">Black Dal Tadka</p>
                        </div>
                        {/* Dal Makhani */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 120</p>
                            <p className="text-lg text-white font-semibold text-center">Dal Makhani</p>
                        </div>
                        {/* Yellow Dal Tadka */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 90</p>
                            <p className="text-lg text-white font-semibold text-center">Yellow Dal Tadka</p>
                        </div>
                    </div>
                </div>
                {/* NOODLES */}
                <div className='grid grid-rows gap-5'>
                    <h2 className='text-5xl font-bold text-center py-6 text-red-600'>NOODLES</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-15  gap-20">
                        {/* Veg noodles */}
                        <img src={image17} alt="Background Image 1" className="absolute    opacity-10" style={{maxWidth: '100%', maxHeight: '100%'}} />
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 120</p>
                            <p className="text-lg text-white font-semibold text-center">Veg noodles</p>
                        </div>
                        {/* Mix Noodles(Veg) */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 140</p>
                            <p className="text-lg text-white font-semibold text-center">Mix Noodles(Veg)</p>
                        </div>
                        {/* Egg Noodles */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 130</p>
                            <p className="text-lg text-white font-semibold text-center">Egg Noodles</p>
                        </div>
                        {/* Chicken Noodles */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                            <p className="text-lg text-white font-semibold text-center">Chicken Noodles</p>
                        </div>
                        {/* Prawn Noodles */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 190</p>
                            <p className="text-lg text-white font-semibold text-center">Prawn Noodles</p>
                        </div>
                        {/* Mix Noodles(Non-Veg) */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 170</p>
                            <p className="text-lg text-white font-semibold text-center">Mix Noodles(Non-Veg)</p>
                        </div>
                        {/* Singapure Noodles(Veg) */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 140</p>
                            <p className="text-lg text-white font-semibold text-center">Singapure Noodles(Veg)</p>
                        </div>
                        {/* Singapure Noodles(Non-Veg) */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 170</p>
                            <p className="text-lg text-white font-semibold text-center">Singapure Noodles(Non-Veg)</p>
                        </div>
                        {/* Schezwan Noodles(Veg) */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 140</p>
                            <p className="text-lg text-white font-semibold text-center">Schezwan Noodles(Veg)</p>
                        </div>
                        {/* Schezwan Noodles(Non-Veg) */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 180</p>
                            <p className="text-lg text-white font-semibold text-center">Schezwan Noodles(Non-Veg)</p>
                        </div>
                    </div>
                </div>
                {/* THALI */}
                <div className='grid grid-rows gap-5'>
                    <h2 className='text-5xl font-bold text-center py-6 text-red-600'>THALI</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-15  gap-20">
                        {/* Veg Thali */}
                        <img src={image18} alt="Background Image 1" className="absolute  opacity-10" style={{maxWidth: '100%', maxHeight: '100%'}} />
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 100</p>
                            <p className="text-lg text-white font-semibold text-center">Veg Thali</p>
                        </div>
                        {/* Paneer Thali */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 110</p>
                            <p className="text-lg text-white font-semibold text-center">Paneer Thali</p>
                        </div>
                        {/* Mushroom Thali */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 110</p>
                            <p className="text-lg text-white font-semibold text-center">Mushroom Thali</p>
                        </div>
                        {/* Egg Thali */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 110</p>
                            <p className="text-lg text-white font-semibold text-center">Egg Thali</p>
                        </div>
                        {/* Fish Thali */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 120</p>
                            <p className="text-lg text-white font-semibold text-center">Fish Thali</p>
                        </div>
                        {/* Chicken Thali */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 140</p>
                            <p className="text-lg text-white font-semibold text-center">Chicken Thali</p>
                        </div>
                        {/* Prawn Thali */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 200</p>
                            <p className="text-lg text-white font-semibold text-center">Prawn Thali</p>
                        </div>
                    </div>
                </div>
                {/* JOMBO PACK */}
                <div className='grid grid-rows gap-5'>
                    <h2 className='text-5xl font-bold text-center py-6 text-red-600'>JOMBO PACK</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-15  gap-20">
                        {/* Chicken biryani (3 Plates) */}
                        <img src={image19} alt="Background Image 1" className="absolute bottom-50 right-0   opacity-10" style={{maxWidth: '100%', maxHeight: '100%'}} />
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 780</p>
                            <p className="text-lg text-white font-semibold text-center">Chicken biryani (3 Plates)</p>
                        </div>
                        {/* chicken butter masala (1 Plate) */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 190</p>
                            <p className="text-lg text-white font-semibold text-center">chicken butter masala (1 Plate)</p>
                        </div>
                        {/* Chilly chicken (1 Plates) */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                            <p className="text-lg text-white font-semibold text-center">Chilly chicken (1 Plates)</p>
                        </div>
                        {/* Sprite/Thums up(750ml) */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 40</p>
                            <p className="text-lg text-white font-semibold text-center">Sprite / Thums up(750ml)</p>
                        </div>
                        {/* Veg biryani (3 Plates) */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 750</p>
                            <p className="text-lg text-white font-semibold text-center">Veg biryani (3 Plates)</p>
                        </div>
                        {/* Paneer butter masala (1 Plates) */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 190</p>
                            <p className="text-lg text-white font-semibold text-center">Paneer butter masala (1 Plates)</p>
                        </div>
                        {/* chilly paneer (1 Plates) */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 150</p>
                            <p className="text-lg text-white font-semibold text-center">Chilly paneer (1 Plates)</p>
                        </div>
                        {/* Sprite/Thums up(750ml) */}
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
                            <p className="text-lg text-red-600 font-semibold text-center">Rs 40</p>
                            <p className="text-lg text-white font-semibold text-center">Sprite / Thums up(750ml)</p>
                        </div>
                    </div>
                    </div>





                </div>
            </div>
        </div>
    );
};

export default Menuu;

