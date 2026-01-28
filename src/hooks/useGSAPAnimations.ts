import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';

export const useProductCardAnimation = (ref: RefObject<HTMLElement | null>) => {
    useEffect(() => {
        if (!ref.current) return;

        gsap.fromTo(
            ref.current,
            {
                opacity: 0,
                y: 20,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'power3.out',
            }
        );
    }, [ref]);
};

export const useCartItemAnimation = (ref: RefObject<HTMLElement | null>) => {
    useEffect(() => {
        if (!ref.current) return;

        gsap.fromTo(
            ref.current,
            {
                opacity: 0,
                x: -20,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.4,
                ease: 'power2.out',
            }
        );
    }, [ref]);
};

export const useFadeInAnimation = (ref: RefObject<HTMLElement | null>, delay = 0) => {
    useEffect(() => {
        if (!ref.current) return;

        gsap.fromTo(
            ref.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 0.6,
                delay,
                ease: 'power2.out',
            }
        );
    }, [ref, delay]);
};
