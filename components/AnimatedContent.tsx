"use client"

import React from "react"

export function AnimatedContent({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="container mx-auto px-4 py-12 max-w-2xl relative z-10 animate-fadeIn"
      style={{
        animation: "fadeIn 0.8s ease-in-out",
      }}
    >
      {children}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
