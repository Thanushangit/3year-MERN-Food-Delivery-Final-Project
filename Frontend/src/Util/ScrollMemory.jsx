import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollMemory = () => {
    const location = useLocation();
    const key = `scroll-position-${location.pathname}`;

    useEffect(() => {
        // Restore scroll position when page loads
        const savedScroll = sessionStorage.getItem(key);
        if (savedScroll) {
            window.scrollTo(0, parseInt(savedScroll));
        }

        // Save scroll position when leaving the page
        const saveScroll = () => {
            sessionStorage.setItem(key, window.scrollY);
        };

        window.addEventListener("beforeunload", saveScroll);
        return () => {
            saveScroll();
            window.removeEventListener("beforeunload", saveScroll);
        };
    }, [location]);

    return null; // This component does not render anything
};

export default ScrollMemory;
