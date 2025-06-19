import React from "react";

export default function BackgroundFade({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[url('/backgrounds/mountain_orange_background.png')] bg-cover bg-center bg-no-repeat min-h-screen w-full">
      {children}
    </div>
  )
} 