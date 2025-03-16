"use client"

import { useEffect, useState } from "react"

export default function StarBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[#050505] overflow-hidden">
      {[...Array(300)].map((_, i) => (
        <Star key={i} />
      ))}
    </div>
  )
}

function Star() {
  const [time, setTime] = useState(Math.random() * 2 * Math.PI)
  const { top, left, opacity, size } = useState(() => ({
    top: `${5 + Math.random() * 90}%`,
    left: `${5 + Math.random() * 90}%`,
    opacity: Math.random() * 0.3 + 0.3,
    size: Math.random() < 0.3 ? 2 : 1,
  }))[0]

  useEffect(() => {
    const animate = () => {
      setTime((t) => t + 0.01)
      requestAnimationFrame(animate)
    }
    const animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div
      className="absolute bg-white rounded-full"
      style={{
        top,
        left,
        opacity,
        width: size,
        height: size,
        transform: `translate(
          ${Math.sin(time) * 5}px, 
          ${Math.cos(time) * 5}px
        )`,
      }}
    />
  )
}
