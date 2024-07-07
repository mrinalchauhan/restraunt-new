import React, { useState, useEffect } from 'react';
import app from '../../config/firebaseConfig';
import { getFirestore, collection, doc, getDoc, getDocs, deleteDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const firestore = getFirestore(app);
const auth = getAuth(app);

const Admin = () => {
    const [code, setCode] = useState('');
    const [customerDetails, setCustomerDetails] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    // Check if the user is already logged in on page load
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        });

        // Clean up the listener
        return () => unsubscribe();
    }, []);

    // Function to handle user login
    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                toast.success('Login successful');
                setLoggedIn(true);
            })
            .catch((error) => {
                toast.error('Invalid credentials');
            });
    };

    // Function to handle user logout
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                toast.success('Logout successful');
                setLoggedIn(false);
            })
            .catch((error) => {
                console.error('Logout error:', error);
            });
    };
    // Function to verify customer code
    const verifyCode = () => {
        if (!code) {
            console.error('Code is empty');
            return;
        }

        const customerRef = doc(collection(firestore, 'customers'), code);

        getDoc(customerRef)
            .then((doc) => {
                if (doc.exists()) {
                    setCustomerDetails(doc.data());
                } else {
                    setCustomerDetails(null);
                    console.log('Code not found');
                }
            })
            .catch((error) => {
                console.error('Error verifying code:', error);
            });
    };

    // Function to close the shop and clear all documents
    const closeShop = () => {
        const confirmClose = window.confirm("Are you sure you want to close the shop? This action will delete all customer documents!");

        if (confirmClose) {
            const customerCollectionRef = collection(firestore, 'customers');
            getDocs(customerCollectionRef)
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        deleteDoc(doc.ref)
                            .then(() => {
                                console.log("Document successfully deleted!");
                            })
                            .catch((error) => {
                                console.error("Error removing document: ", error);
                            });
                    });
                })
                .catch((error) => {
                    console.error("Error getting documents: ", error);
                });

            toast.info('Shop closed and all customer documents cleared');
        }
    };

    return (
        <div style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/lovekhati-982c6.appspot.com/o/wooden-board-looking-out-tables-restaurant%20(1).jpg?alt=media&token=82560df9-3383-46af-bd00-ae9dab19fad0')", filter: 'brightness(0.7) contrast(1.2)', backgroundSize: 'cover' }} className="flex justify-center items-center h-screen">
            <ToastContainer />
            {loggedIn ? (
                <div className="max-w-md w-full p-8 rounded-lg shadow-2xl shadow-slate-750 bg-opacity-50 bg-black" style={{ transform: 'rotateX(2deg) rotateY(2deg)' }}>
                    <h2 className="text-center text-2xl font-semibold text-white mb-4">Verify Code</h2>
                    <input
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Enter Code"
                        className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-2 text-black"
                    />
                    <button onClick={verifyCode} className="w-full bg-red-500 text-white py-2 rounded-md mt-4 hover:bg-opacity-90">Verify</button>
                    {customerDetails && (
                        <div className="mt-8">
                            <h3 className="text-center text-xl font-semibold text-white mb-4">Name: {customerDetails.name}</h3>
                            <h3 className="text-center text-xl font-semibold text-white mb-4">Offer: {customerDetails.offer}% Off</h3>
                            <h3 className="text-center text-xl font-semibold text-white mb-4">Number of Guests: {customerDetails.guests}</h3>
                        </div>
                    )}
                    <button onClick={handleLogout} className="w-full bg-red-500 text-white py-2 rounded-md mt-4 hover:bg-opacity-90">Logout Admin</button>
                    <button onClick={closeShop} className="w-full bg-red-500 text-white py-2 rounded-md mt-4 hover:bg-opacity-90">Close Shop</button>
                </div>
            ) : (
                <div className="max-w-md w-full p-8 rounded-lg shadow-2xl shadow-slate-750 bg-opacity-50 bg-black" style={{ transform: 'rotateX(2deg) rotateY(2deg)' }}>
                    <h2 className="text-center text-2xl font-semibold text-white mb-4">Admin Login</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-2 text-black"
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-2 text-black"
                        />
                        <button type="submit" className="w-full bg-red-500 text-white py-2 rounded-md mt-4 hover:bg-opacity-90">Login</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Admin;