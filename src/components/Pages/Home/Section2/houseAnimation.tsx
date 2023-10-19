import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from "../../../Icons/Icon"; 

export default function HouseAnimation() {
    const [showHouseOutline, setShowHouseOutline] = useState(false);
    const [showSmallHouse, setShowSmallHouse] = useState(false);

    // Function to check if the element is in viewport
    const isInViewport = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };
    // Handle scroll event
    const handleScroll = () => {
        // Get the HouseAnimation component element
        const houseAnimation = document.getElementById("houseAnimation");

        // Check if the HouseAnimation component is in the viewport
        if (houseAnimation && isInViewport(houseAnimation)) {
            setShowHouseOutline(true);
            window.removeEventListener('scroll', handleScroll);
        }
    };

    // Add scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="houseAnimation">
            <AnimatePresence>
                {showHouseOutline && (
                    <Icon
                        name="houseOutline"
                        className="w-80 h-40"
                        onExitComplete={() => {
                            setShowHouseOutline(false);
                            setTimeout(() => {
                                setShowSmallHouse(true);
                            }, 500); // 500ms delay
                        }}
                    />
                )}
            </AnimatePresence>
            {showSmallHouse && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Icon name="smallHouse" className="w-80 h-40" />
                </motion.div>
            )}
        </div>
    );
}
