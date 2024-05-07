'use client'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from 'next/image';

const ShuffleHero = () => {
    return (
        <>
            {/* Navbar section */}
            <nav className="bg-red-900 text-white py-4">
                <div className="flex items-center justify-between w-full mx-auto px-5">
                    <div className="flex items-center">
                        <Image src="https://placehold.co/400" alt="uOBC Logo" width={40} height={40} className="rounded-full" />
                    </div>
                </div>
            </nav>
            {/* Main section */}
            <section className="w-4/5 px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-auto">
                <div>
                    <span className="block mb-4 text-xs md:text-sm text-red-900 font-medium">
                        The Toughest Club on Campus
                    </span>
                    <h3 className="text-4xl md:text-6xl font-semibold">
                        University of Ottawa Boxing Club
                    </h3>
                    <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
                        Welcome to the uOBC! Located in the Montpetit Martial Arts room, our club is the perfect place for
                        students of all skill levels to come together and explore the exciting world of boxing.
                    </p>
                    <button className="bg-red-900 border-2 text-white border-transparent font-medium py-2 px-4 rounded transition-all hover:bg-transparent hover:text-red-900 hover:border-red-900  active:scale-95">
                        Find a class
                    </button>
                </div>
                <div>
                    <ShuffleGrid />
                </div>
            </section>
        </>
    );
};





const ShuffleGrid = () => {

    const shuffleArray = (array: any) => {
        // Clone the array to avoid mutating the original array
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const squareData = [
        {
            id: 123,
            src: "https://placehold.co/400"
        },
        {
            id: 234,
            src: "https://placehold.co/400"
        },
        {
            id: 345,
            src: "https://placehold.co/400"
        },
        {
            id: 456,
            src: "https://placehold.co/400"
        },
        {
            id: 567,
            src: "https://placehold.co/400"
        },
        {
            id: 678,
            src: "https://placehold.co/400"
        },
        {
            id: 789,
            src: "https://placehold.co/400"
        },
        {
            id: 890,
            src: "https://placehold.co/400"
        },
        {
            id: 901,
            src: "https://placehold.co/400"
        },
        {
            id: 1012,
            src: "https://placehold.co/400"
        },
        {
            id: 1123,
            src: "https://placehold.co/400"
        },
        {
            id: 1234,
            src: "https://placehold.co/400"
        },
        {
            id: 1345,
            src: "https://placehold.co/400"
        },
        {
            id: 1456,
            src: "https://placehold.co/400"
        },
        {
            id: 1567,
            src: "https://placehold.co/400"
        },
        {
            id: 1678,
            src: "https://placehold.co/400"
        },
    ];

    const [shuffledSquares, setShuffledSquares] = useState(() => shuffleArray(squareData));


    useEffect(() => {
        const interval = setInterval(() => {
            
            const currentScroll = window.scrollY;

            setShuffledSquares(shuffleArray(squareData));

            requestAnimationFrame(() => {
                window.scrollTo(0, currentScroll);
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
            {shuffledSquares.map((sq) => (
                <motion.div
                    key={sq.id} // Use the 'id' as the key for each element
                    layout
                    transition={{ duration: 1.5, type: "spring" }}
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url(${sq.src})`,
                        backgroundSize: "cover",
                    }}
                ></motion.div>
            ))}
        </div>
    );
};

export default ShuffleHero;