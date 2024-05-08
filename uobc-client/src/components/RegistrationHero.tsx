'use client'
import { motion } from "framer-motion";
import ClassRegistrationForm from "./ClassRegistration";

const RegistrationHero = () => {
    return (
        <>
            {/* Main section */}
            <section className="w-4/5 mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div id="registration-section">
                    <ClassRegistrationForm />
                </div>
                <div className="space-y-4">
                    <h3 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
                        Dive Into Boxing
                    </h3>
                    <ul className="text-lg text-slate-700 list-disc pl-5 space-y-2">
                        <li>
                            <strong>Accessible to everyone:</strong> Our classes welcome all skill levels, from beginners to seasoned boxers.
                        </li>
                        <li>
                            <strong>Affordable:</strong> Join any class for just $2. It&apos;s fitness that won&apos;t break the bank.
                        </li>
                        <li>
                            <strong>Equipment supplied:</strong> Gloves and gear are provided. Just show up ready to train!
                        </li>
                        <li>
                            <strong>Full-body workout:</strong> Prepare for a session that&apos;ll boost your stamina, strength, and speed.
                        </li>
                        <li>
                            <strong>Experienced Coaches:</strong> Learn from the best with our team of professional and experienced coaches.
                        </li>
                    </ul>
                    {/* Horizontal break line */}
                    <hr className="border-t-2 border-red-900 mx-auto w-2/3"/>
                </div>
            </section>
        </>
    );
};

export default RegistrationHero;
