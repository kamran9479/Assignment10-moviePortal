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
        <div>
            <button onClick={() => toggleTheme()}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all"
            >
                {theme === "light" ? <Moon className='text-yellow-600' size={32} /> : <Sun className='text-red-400' size={32} />}
            </button>
        </div>
    );
};

