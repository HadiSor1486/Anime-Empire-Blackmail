"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Redirect to the HTML file
    window.location.href = "/arabic-quiz.html"
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto shadow-lg">
            📚
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Arabic by Rolla</h1>
          <p className="text-gray-400">Loading quiz platform...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto shadow-lg animate-pulse">
          📚
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Arabic by Rolla</h1>
        <p className="text-gray-400">Redirecting to quiz platform...</p>
      </div>
    </div>
  )
}
