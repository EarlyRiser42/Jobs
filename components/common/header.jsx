import Navigation from './navigation.jsx';
import NavigationIcon from './navigationIcon.jsx';
import { Logo } from './Icons.jsx'
import {useEffect, useState} from 'react';

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const [navAnimation, setAnimation] = useState('animate-navIn');
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled)
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrolled])
    const handleClick = () => {
        if (!navOpen) {
            setAnimation('animate-navIn');
            setNavOpen(true);
        } else {
            setAnimation('animate-navOut');
            setTimeout(() => {
                setNavOpen(false);
            }, 300);
        }
    };

    return (
        <header
            className={`fixed inset-0 z-[200] py-3 flex items-center justify-between w-screen
    lg:justify-between border-b border-transparent ${
                scrolled ? 'h-12 sm:h-16 bg-opacity-20 backdrop-blur-sm' : 'h-16 sm:h-20 bg-opacity-40 bg-white'
            }`}
        >
            <div className="flex-1 h-1/20 w-7/12 flex items-center ml-4 lg:w-64">
                <Logo/>
            </div>
            <Navigation
                navOpen={navOpen}
                navAnimation={navAnimation}
            />
            <div className="flex-1 flex justify-end items-center w-1/6 z-50 mr-4">
                <button className="block lg:hidden bg-transparent" onClick={() => handleClick()}>
                    <NavigationIcon navOpen={navOpen} />
                </button>
            </div>
        </header>
    );
}
