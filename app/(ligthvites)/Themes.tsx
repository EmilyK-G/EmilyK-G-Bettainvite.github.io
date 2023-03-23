"use client"

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const myThemes = [
    { name: 'Default' },
    { name: 'Fall', },
    { name: 'Delicate'},
    { name: 'Lavender'},
    { name: 'CherryBlossom'},
    { name: 'Suits'}
    ]

const Themes = (props: any) => {
    
    const [mounted, setMounted] = useState<boolean>(false)
    const { theme, setTheme } = useTheme()

    useEffect(()=>{
      setTheme(props.defaultTheme);
      console.log(props.defaultTheme)
    }, [])
    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])
    
    if (!mounted) return null

    return (
        <div className="p-8 flex justify-between items-center font-bold text-xl bg-th-background-secondary text-th-primary-dark" onClick={e=>{e.stopPropagation(); e.preventDefault()}}>
          <div>
            <label htmlFor="theme-select" className="sr-only mr-2">
              Choose theme:
            </label>
            <select
              name="theme"
              id="theme-select"
              className="bg-white text-gray-800 border-gray-800 border py-1 px-3"
              onChange={(e) => setTheme(e.currentTarget.value)}
              onClick={e=>{e.stopPropagation(); e.preventDefault()}}
              value={theme}
            >
              <option value="">Select Theme</option>
              {myThemes.map((t) => (
                <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      );
}

export default Themes