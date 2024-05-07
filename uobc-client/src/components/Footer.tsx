import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-red-900 text-white py-4">
            <div className="flex items-center justify-between w-full mx-auto px-5">
                {/* ... other content ... */}
                <div className="flex items-center">
                    {/* Discord Button */}
                    <a href="https://discord.gg/yourlink" className="flex items-center justify-center h-10 w-10 rounded-full bg-white text-red-900 mr-4" target="_blank" rel="noopener noreferrer">
                        <Image src="/discord.svg" alt="Discord" width={24} height={24} /> {/* Updated with Image component */}
                    </a>
                    {/* Instagram Button */}
                    <a href="https://instagram.com/uottawaboxingclub" className="flex items-center justify-center h-10 w-10 rounded-full bg-white text-red-900" target="_blank" rel="noopener noreferrer">
                        <Image src="/instagram.svg" alt="Instagram" width={24} height={24} /> {/* Updated with Image component */}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
