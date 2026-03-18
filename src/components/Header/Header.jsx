import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if scrolled more than 10px
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        // If isScrolled is true, it adds the 'scrolled' class
        <motion.header className={isScrolled ? 'scrolled' : ''}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}>
            <div className="header-container">
                <div className="gm">GM</div>
                <div className="header-right-side">

                    <a href="#home">
                        <p>Home</p>
                    </a>

                    <a href="#projects">
                        <p>Projects</p>
                    </a>

                    <a href="#skills">
                        <p>Skills</p>
                    </a>

                    <a href="#contact">
                        <p>Contact</p>
                    </a>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;