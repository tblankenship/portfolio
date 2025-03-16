"use client"

import dynamic from "next/dynamic"

const StarBackground = dynamic(() => import("@/components/StarBackground"), {
  ssr: false,
})

export default function ClientStarBackground() {
  return <StarBackground />
}
