'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import dynamic from 'next/dynamic';
import SplitText from '@/components/animations/SplitText';
import TrueFocus from '@/components/animations/TrueFocus';

const TeamScene = dynamic(() => import('@/components/ui/TeamScene'), { ssr: false });

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="min-h-screen flex items-center py-20 lg:py-32 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        <div className="mb-4">
                            <TrueFocus
                                sentence="INNOVATION"
                                blurAmount={3}
                                borderColor="#22D3EE"
                                glowColor="rgba(34, 211, 238, 0.4)"
                                className="!justify-start"
                            />
                        </div>

                        <div className="overflow-hidden mb-8 lg:mb-12">
                            <h2 className="text-5xl md:text-8xl font-black text-foreground tracking-tighter uppercase font-['Teko'] leading-[0.85]">
                                <SplitText text={t.about.heading} className="text-foreground" />
                                <SplitText text={t.about.subheading} className="text-foreground/10" />
                            </h2>
                        </div>

                        <div className="overflow-hidden mb-12">
                            <motion.p
                                variants={{
                                    initial: { y: "110%" },
                                    animate: { y: 0, transition: { duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }
                                }}
                                className="text-base md:text-lg text-foreground/60 font-medium tracking-tight leading-relaxed max-w-xl"
                            >
                                {t.about.description}
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-border">
                            <div className="group">
                                <h4 className="text-foreground font-black uppercase tracking-[0.4em] text-[10px] mb-3 group-hover:text-[#22D3EE] transition-colors">{t.about.intelligent.title}</h4>
                                <p className="text-foreground/60 text-sm font-medium">{t.about.intelligent.desc}</p>
                            </div>
                            <div className="group">
                                <h4 className="text-foreground font-black uppercase tracking-[0.4em] text-[10px] mb-3 group-hover:text-[#22D3EE] transition-colors">{t.about.evolution.title}</h4>
                                <p className="text-foreground/60 text-sm font-medium">{t.about.evolution.desc}</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] flex items-center justify-center overflow-visible group"
                    >
                        {/* 3D Team Scene Integration */}
                        <div className="w-full h-full absolute inset-0 z-0">
                            <TeamScene />
                        </div>

                        {/* Visual Decorative Accent */}
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />

                        <div className="absolute top-0 right-0 p-8 z-10 pointer-events-none opacity-20 hidden md:block">
                            <span className="text-[10px] font-black text-white uppercase tracking-[0.5em] font-['Teko'] group-hover:text-[#22D3EE] transition-colors">TEAM_CORE_V4</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
