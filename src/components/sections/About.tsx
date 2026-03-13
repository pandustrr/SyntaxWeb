'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="min-h-screen flex items-center py-32 bg-transparent relative overflow-hidden snap-start">
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-8xl font-black text-[#F2F2F2] mb-12 tracking-tighter uppercase leading-[0.85]">
                            Structural <br />
                            <span className="text-[#B6B09F]">Philosophy</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-500 mb-12 font-medium tracking-tight leading-relaxed max-w-xl">
                            We believe in the integrity of digital structures. Beyond mere aesthetics, we architect
                            systems that prioritize performance, scalability, and technical longevity.
                            Our mission is to build the foundations of the next internet generation.
                        </p>

                        <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
                            <div>
                                <h4 className="text-[#F2F2F2] font-black uppercase tracking-[0.4em] text-[10px] mb-4">Integrity</h4>
                                <p className="text-gray-600 text-sm font-medium">Clean code as a non-negotiable standard.</p>
                            </div>
                            <div>
                                <h4 className="text-[#F2F2F2] font-black uppercase tracking-[0.4em] text-[10px] mb-4">Precision</h4>
                                <p className="text-gray-600 text-sm font-medium">Every interaction calculated for impact.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="relative aspect-square border border-[#B6B09F]/20 flex items-center justify-center p-12 overflow-hidden"
                    >
                        {/* Minimalist Graphic Element */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,#B6B09F05_25%,transparent_25%,transparent_50%,#B6B09F05_50%,#B6B09F05_75%,transparent_75%,transparent)] bg-[size:10px_10px]" />
                        </div>
                        <svg viewBox="0 0 400 400" className="w-full h-full stroke-[#B6B09F] stroke-[0.5] fill-transparent opacity-40">
                            <rect x="50" y="50" width="300" height="300" />
                            <rect x="100" y="100" width="200" height="200" />
                            <line x1="0" y1="0" x2="400" y2="400" />
                            <line x1="400" y1="0" x2="0" y2="400" />
                        </svg>
                        <div className="absolute bottom-12 left-12">
                            <span className="text-[10px] font-black text-[#B6B09F] uppercase tracking-[0.5em]">blueprint_v01</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
