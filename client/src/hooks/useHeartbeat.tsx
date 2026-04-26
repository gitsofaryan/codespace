import { useEffect } from "react"
import axios from "axios"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

function useHeartbeat() {
    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                await axios.get(`${BACKEND_URL}/status`)
                console.log("Heartbeat sent to backend")
            } catch (error) {
                console.error("Heartbeat failed", error)
            }
        }, 15000) // 15 seconds

        return () => clearInterval(interval)
    }, [])
}

export default useHeartbeat
