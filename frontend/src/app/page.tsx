'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8000/')
      .then(res => res.json())
      .then(data => {
        setMessage(data.message)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error:', err)
        setMessage('Failed to connect to backend')
        setLoading(false)
      })
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Personal Finance Dashboard</h1>
      {loading ? (
        <p>Connecting to backend...</p>
      ) : (
        <p className="text-xl">{message}</p>
      )}
    </main>
  )
}