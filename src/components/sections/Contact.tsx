'use client';

import { motion } from 'framer-motion';
import { Mail as MailIcon, ArrowUpRight, MapPin, Info } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="min-h-screen flex items-center py-20 lg:py-32 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        <div className="overflow-hidden mb-12">
                            <motion.h2
                                variants={{
                                    initial: { y: "110%" },
                                    animate: { y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                                }}
                                className="text-5xl md:text-[8rem] font-black text-foreground tracking-tighter uppercase leading-[0.85] font-['Teko']"
                            >
                                {t.contact.heading} <br />
                                <span className="text-foreground/10 hover:text-[#22D3EE] transition-colors duration-700">{t.contact.subheading}</span>
                            </motion.h2>
                        </div>

                        <div className="overflow-hidden mb-20">
                            <motion.p
                                variants={{
                                    initial: { y: "110%" },
                                    animate: { y: 0, transition: { duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }
                                }}
                                className="text-base md:text-lg text-foreground/60 font-medium tracking-tight leading-relaxed max-w-sm"
                            >
                                {t.contact.description}
                            </motion.p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-8 group">
                                <div className="w-14 h-14 border border-border flex items-center justify-center text-foreground/20 group-hover:bg-[#22D3EE] group-hover:text-black group-hover:border-[#22D3EE] transition-all duration-500 rounded-lg bg-foreground/[0.02]">
                                    <Info size={24} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/40 mb-2">The Motto</h4>
                                    <span className="text-xl md:text-2xl font-black tracking-tight text-foreground font-['Teko'] uppercase">“{t.hero.tagline}”</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-8 group">
                                <div className="w-14 h-14 border border-border flex items-center justify-center text-foreground/20 group-hover:bg-[#22D3EE] group-hover:text-black group-hover:border-[#22D3EE] transition-all duration-500 rounded-lg bg-foreground/[0.02]">
                                    <MapPin size={24} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/40 mb-2">Base</h4>
                                    <span className="text-xl md:text-2xl font-black tracking-tight text-foreground font-['Teko'] uppercase">Jember, Jawa Timur</span>
                                </div>
                            </div>

                            <a href="mailto:office@syntaxweb.com" className="flex items-start gap-8 group">
                                <div className="w-14 h-14 border border-border flex items-center justify-center text-foreground/20 group-hover:bg-[#22D3EE] group-hover:text-black group-hover:border-[#22D3EE] transition-all duration-500 rounded-lg bg-foreground/[0.02]">
                                    <MailIcon size={24} />
                                </div>
                                <div className="flex-1 border-b border-transparent group-hover:border-[#22D3EE]/20 pb-2 transition-all">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/40 mb-2">{t.contact.emailLabel}</h4>
                                    <span className="text-xl md:text-2xl font-black tracking-tight text-foreground font-['Teko'] uppercase group-hover:text-[#22D3EE] transition-colors duration-500">office@syntaxweb.com</span>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className="bg-foreground/[0.02] border border-border p-10 md:p-20 relative lg:mt-0 shadow-2xl shadow-foreground/5"
                    >
                        <form className="space-y-12">
                            <div className="space-y-4 group">
                                <label className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/40 group-focus-within:text-[#22D3EE] transition-colors">{t.contact.form.nameLabel}</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-border py-5 text-foreground focus:outline-none focus:border-[#22D3EE] transition-all font-black tracking-tight text-xl md:text-3xl font-['Teko'] uppercase"
                                    placeholder={t.contact.form.namePlaceholder}
                                />
                            </div>

                            <div className="space-y-4 group">
                                <label className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/40 group-focus-within:text-[#22D3EE] transition-colors">{t.contact.form.messageLabel}</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-transparent border-b border-border py-5 text-foreground focus:outline-none focus:border-[#22D3EE] transition-all font-black tracking-tight text-xl md:text-3xl font-['Teko'] uppercase resize-none"
                                    placeholder={t.contact.form.messagePlaceholder}
                                />
                            </div>

                            <motion.button
                                whileHover={{ letterSpacing: "1.2em", gap: "2em" }}
                                className="flex items-center gap-10 text-foreground/30 hover:text-[#22D3EE] text-[10px] font-black uppercase tracking-[0.6em] pt-12 group transition-all"
                            >
                                {t.contact.form.submit} <ArrowUpRight size={18} className="group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-500" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
