import React, { useEffect, useRef, useState } from 'react';

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number; 
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties['textAlign'];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text = '',
  className = '',
  delay = 80, // ms de retardo entre letras
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  // Separamos por palabras y luego en letras
  const words = text.split(' ').map((w) => w.split(''));
  const letters = words.flat();

  // Para controlar si el componente está en el viewport
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  // Cantidad de letras visibles (comienza en 0)
  const [visibleLetters, setVisibleLetters] = useState(0);

  // IntersectionObserver para saber si el <p> está en la vista
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  // Cuando entramos en vista, disparamos los timeouts
  // para mostrar cada letra poco a poco
  useEffect(() => {
    if (inView) {
      letters.forEach((_, i) => {
        setTimeout(() => {
          setVisibleLetters((prev) => {
            const newCount = Math.max(prev, i + 1);
            // Si es la última letra, lanzamos callback
            if (newCount === letters.length && onLetterAnimationComplete) {
              onLetterAnimationComplete();
            }
            return newCount;
          });
        }, i * delay);
      });
    }
  }, [inView, letters, delay, onLetterAnimationComplete]);

  return (
    <p
      ref={ref}
      className={className}
      style={{
        textAlign,
        display: 'inline-block',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
      }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.map((letter, letterIndex) => {
            // índice global de la letra en el array letters
            const index = words
              .slice(0, wordIndex)
              .reduce((acc, w) => acc + w.length, 0) + letterIndex;

            // Determinamos si la letra ya debe verse
            const isVisible = index < visibleLetters;

            return (
              <span
                key={index}
                style={{
                  display: 'inline-block',
                  willChange: 'transform, opacity',
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                  transform: isVisible
                    ? 'translateY(0px)'
                    : 'translateY(40px)',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                {letter}
              </span>
            );
          })}
          {/* Espacio entre palabras */}
          <span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>
        </span>
      ))}
    </p>
  );
};

export default SplitText;
