// Container: Restricts content width and adds padding
import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <main className={cn("container mx-auto max-w-4xl px-4 py-8", className)}>
      {children}
    </main>
  )
} 