// Container: Restricts content width and adds padding
export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-8">
      {children}
    </main>
  )
} 