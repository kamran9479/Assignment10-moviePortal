import React, { useState } from 'react';
import { Moon, Sun } from "lucide-react";

export const Darkmood = () => {
    const [mood, setMood] = useState(false)
    const [theme, setTheme] = useState('light')


    const toggleTheme = () => {
        if (mood) {
            setMood(false)
            document.querySelector("body").setAttribute("data-theme", "dark")
            setTheme('light')
        } else {
            setMood(true)
            document.querySelector("body").setAttribute("data-theme", "light")
            setTheme('dark')
        };
    };

    return (
        <div className='mx-2 '>
            <button onClick={() => toggleTheme()}
                className="h-10 w-10 flex items-center justify-center p-2 rounded-full lg:h-12 lg:w-12 bg-gray-200 dark:bg-gray-800 transition-all"
            >
                {theme === "light" ? <Moon className='text-yellow-600' size={28} /> : <Sun className='text-red-400' size={28} />}
            </button>
        </div>
    );
};

