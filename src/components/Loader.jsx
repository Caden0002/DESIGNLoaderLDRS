import React, { useEffect, useState } from 'react';
import { tailChase } from 'ldrs'; // Import the tailChase loader component
tailChase.register(); // Register the tailChase loader

function Loader(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        // Clear the timeout when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    // Text to be displayed below the tailChase loader
    const loadingText = "Text to be displayed";

    return (
        <div
            className="fixed bg-white h-screen top-0 left-0 w-full flex flex-col justify-center items-center z-10 transition-opacity"
            style={{
                opacity: loading ? 1 : 0,
                transition: 'opacity 2s ease-in-out',
                pointerEvents: loading ? 'auto' : 'none'
            }}
        >
            {loading ? (
                // Use the tailChase loader component conditionally based on the loading state
                <>
                    <l-tail-Chase size="80" speed="2.5" color="#000000"></l-tail-Chase>
                    {/* <div className="mt-12 mx-24 text-center leading-5">{loadingText}</div> */}
                </>
            ) : null}
        </div>
    );
}

export default Loader;
