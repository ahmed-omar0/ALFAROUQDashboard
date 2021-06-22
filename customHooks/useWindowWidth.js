import { useEffect, useState } from 'react'

export default function useWindowWidth() {
    const [ width ,  setWidth ] = useState();
    useEffect(() => {
        setWidth(window.innerWidth)
        const handleWidth = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleWidth)
    },[])
    return width;
}
