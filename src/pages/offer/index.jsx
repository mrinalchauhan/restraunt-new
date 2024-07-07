import React, { useState, useEffect } from 'react';
import app from '../../config/firebaseConfig'; 
import { getFirestore, collection, doc, setDoc, getDoc } from "firebase/firestore";

const firestore = getFirestore(app);

const GenerateCode = () => {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState('');
    const [generatedCode, setGeneratedCode] = useState('');
    const [offer, setOffer] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [lastGenerationTime, setLastGenerationTime] = useState(localStorage.getItem('lastGenerationTime') || null);
    const [generationCount, setGenerationCount] = useState(parseInt(localStorage.getItem('generationCount')) || 0);

    useEffect(() => {
        // Update generation count in local storage when it changes
        localStorage.setItem('generationCount', generationCount);
    }, [generationCount]);

    useEffect(() => {
        // Check if the user has already generated a code
        const fetchGeneratedCode = async () => {
            const docRef = doc(firestore, 'customers', generatedCode);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                setOffer(data.offer);
                setSubmitted(true);
            }
        };

        if (generatedCode && !submitted) {
            fetchGeneratedCode();
        }
    }, [generatedCode, submitted]);

    const generateCode = () => {
        if (lastGenerationTime && Date.now() - parseInt(lastGenerationTime) < 3600000) {
            // User has generated a code within the last hour
            alert('You can generate a code only once in 1 hour.');
            return;
        }

        if (generationCount >= 3) {
            // User has exceeded the daily generation limit
            alert('You can generate a maximum of 3 codes in a day.');
            return;
        }

        const code = generateRandomCode(5);
        const generatedOffer = generateOffer();

        // Store customer details and generated code in Firestore
        setDoc(doc(collection(firestore, 'customers'), code), {
            name,
            guests,
            offer: generatedOffer
        })
            .then(() => {
                setGeneratedCode(code);
                setOffer(generatedOffer);
                setSubmitted(true); // Set submitted to true after successful generation
                localStorage.setItem('lastGenerationTime', Date.now());
                setGenerationCount(prevCount => prevCount + 1);
            })
            .catch(error => {
                console.error('Error generating code:', error);
            });
    };

    const generateRandomCode = (length) => {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return result;
    };

    const generateOffer = () => {
        // Probability distribution for discounts
        const probabilities = [
            { discount: 2, probability: 0.5 },
            { discount: 5, probability: 0.1 },
            { discount: 10, probability: 0.03 },
            { discount: 25, probability: 0.02 },
            { discount: 50, probability: 0.01 },
            { discount: 100, probability: 0.005 }
        ];

        // Calculate total probability
        const totalProbability = probabilities.reduce((total, item) => total + item.probability, 0);

        // Generate a random number between 0 and totalProbability
        let random = Math.random() * totalProbability;

        // Iterate through the probabilities to find the matching discount
        for (const item of probabilities) {
            if (random < item.probability) {
                return item.discount;
            }
            random -= item.probability;
        }

        // Default to 1% discount if no matching discount found
        return 1;
    };

    return (
        <div style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/lovekhati-982c6.appspot.com/o/food-advertisement-illustration%20(1).jpg?alt=media&token=51254ffb-7fdb-414b-b13a-ba14a74be08f')", filter: 'brightness(0.7) contrast(1.2)', backgroundSize: 'cover' }}>
            <div className="flex justify-center items-center h-screen ">
                {submitted ? (
                    <div className="max-w-md w-full p-8 rounded-lg shadow-2xl shadow-slate-750 bg-opacity-50 bg-black" style={{ transform: 'rotateX(2deg) rotateY(2deg)' }}>
                        <h2 className="text-center text-2xl font-semibold text-red-500">Offer Details</h2>
                        <div className="mt-4">
                            <h3 className="text-center text-xl font-semibold text-white mb-4">Your Code: {generatedCode}</h3>
                            <h3 className="text-center text-xl font-semibold text-white mb-4">Offer: {offer}% Off</h3>
                            <h3 className="text-center text-xl font-semibold text-white mb-4">Show your code at the reception</h3>
                        </div>
                    </div>
                ) : (
                    <div className="max-w-md w-full p-8 rounded-lg shadow-2xl shadow-slate-750 bg-opacity-50 bg-black" style={{ transform: 'rotateX(2deg) rotateY(2deg)' }}>
                        <h2 className="text-center text-2xl font-semibold text-white mb-4">Enter Your Details</h2>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-2" />
                        <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} placeholder="Number of Guests" className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-2" />
                        <button onClick={generateCode} className="w-full bg-red-500 text-white py-2 rounded-md mt-4 hover:bg-opacity-90">Claim Offer</button>
                    </div>
                )}
            </div>
        </div>
    );
};


export default GenerateCode;