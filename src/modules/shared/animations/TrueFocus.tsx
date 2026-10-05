'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TrueFocusProps {
  sentence?: string;
  separator?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  className?: string;
}

interface FocusRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default function TrueFocus({
  sentence = 'True Focus',
  separator = ' ',
  manualMode = false,
  blurAmount = 5,
  borderColor = '#22D3EE',
  glowColor = 'rgba(34, 211, 238, 0.6)',
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
  className = '',
}: TrueFocusProps) {
  const words = sentence.split(separator);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState<FocusRect>({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(
        () => {
          setCurrentIndex(prev => (prev + 1) % words.length);
        },
        (animationDuration + pauseBetweenAnimations) * 1000
      );

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index: number) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex!);
    }
  };

  return (
    <div
      className={`relative flex gap-4 justify-center items-center flex-wrap ${className}`}
      ref={containerRef}
      style={{ outline: 'none', userSelect: 'none' }}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={el => {
              wordRefs.current[index] = el;
            }}
            className="relative text-3xl md:text-5xl font-black cursor-pointer uppercase font-['Teko']"
            style={
              {
                filter: isActive ? `blur(0px)` : `blur(${blurAmount}px)`,
                transition: `filter ${animationDuration}s ease`,
                outline: 'none',
                userSelect: 'none'
              } as React.CSSProperties
            }
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="absolute top-0 left-0 pointer-events-none box-border border-0"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0
        }}
        transition={{
          duration: animationDuration,
          ease: "easeInOut"
        }}
      >
        <span
          className="absolute w-4 h-4 border-[2px] rounded-[2px] top-[-8px] left-[-8px] border-r-0 border-b-0"
          style={{
            borderColor: borderColor,
            filter: `drop-shadow(0 0 4px ${glowColor})`
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[2px] rounded-[2px] top-[-8px] right-[-8px] border-l-0 border-b-0"
          style={{
            borderColor: borderColor,
            filter: `drop-shadow(0 0 4px ${glowColor})`
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[2px] rounded-[2px] bottom-[-8px] left-[-8px] border-r-0 border-t-0"
          style={{
            borderColor: borderColor,
            filter: `drop-shadow(0 0 4px ${glowColor})`
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[2px] rounded-[2px] bottom-[-8px] right-[-8px] border-l-0 border-t-0"
          style={{
            borderColor: borderColor,
            filter: `drop-shadow(0 0 4px ${glowColor})`
          }}
        ></span>
      </motion.div>
    </div>
  );
}
