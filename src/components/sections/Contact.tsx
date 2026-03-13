'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    return (
        <section id="contact" className="min-h-screen flex items-center py-32 bg-transparent relative overflow-hidden snap-start">
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-[8rem] font-black text-[#F2F2F2] mb-12 tracking-tighter uppercase leading-[0.85]">
                            Let's <br />
                            <span className="text-[#B6B09F]">Construct</span>
                        </h2>
                        <p className="text-lg text-gray-500 mb-16 font-medium tracking-tight leading-relaxed max-w-md">
                            Ready to elevate your digital presence? We are available for specialized partnerships
                            starting MMXXIV.
                        </p>

                        <div className="space-y-8">
                            <a href="mailto:office@syntaxweb.com" className="group flex items-center gap-6 text-[#F2F2F2] hover:text-[#B6B09F] transition-colors duration-500">
                                <div className="w-16 h-16 border border-white/5 flex items-center justify-center group-hover:border-[#B6B09F]/30 transition-colors">
                                    <Mail size={24} className="stroke-[1]" />
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600 mb-2">Electronic Mail</h4>
                                    <span className="text-xl font-black tracking-tight">office@syntaxweb.com</span>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-[#000000] border border-white/5 p-12 md:p-16 relative"
                    >
                        <div className="absolute top-0 right-0 p-8">
                            <span className="text-[10px] font-black text-[#B6B09F]/20 uppercase tracking-[0.5em]">form_08</span>
                        </div>

                        <form className="space-y-12">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">Name / Enterprise</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-white/5 py-4 text-[#F2F2F2] focus:outline-none focus:border-[#B6B09F] transition-colors font-black tracking-tight text-xl"
                                    placeholder="e.g. Acme Corp"
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">Inquiry Details</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-transparent border-b border-white/5 py-4 text-[#F2F2F2] focus:outline-none focus:border-[#B6B09F] transition-colors font-black tracking-tight text-xl resize-none"
                                    placeholder="Describe your vision"
                                />
                            </div>

                            <motion.button
                                whileHover={{ letterSpacing: "1em", gap: "2em" }}
                                className="flex items-center gap-6 text-[#B6B09F] text-[10px] font-black uppercase tracking-[0.5em] pt-8 group"
                            >
                                Assemble Project <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
