'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { BsSun } from "react-icons/bs";
import { IoMoonSharp } from "react-icons/io5";


const ToggleButton = () => {
    const { resolvedTheme, setTheme } = useTheme()

    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) {
        return null
    }

    return (
        <button
            aria-label='Toggle Dark Mode'
            type='button'
            className='flex items-center justify-center p-2 transition-colors rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700'
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
            {resolvedTheme === 'dark' ? (
                <BsSun className='w-5 h-5 text-orange-300' />
            ) : (
                <IoMoonSharp className='w-5 h-5 text-slate-800' />
            )}
        </button>
    )
}

export default ToggleButton