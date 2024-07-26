'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from '../firebase/firebase'

const AppRouter = () => {
    const router = useRouter()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        if (isMounted) {
            auth.onAuthStateChanged(user => {
                if (user) {
                    router.push('/chat')
                } else {
                    router.push('/login')
                }
            })
        }
    }, [isMounted, router])

    if (!isMounted) {
        return <p>Loading...</p>
    }

    return null
}

export default AppRouter
