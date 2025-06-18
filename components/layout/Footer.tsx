// Footer: Simple site footer using shadcn/ui Card for styling

export default function Footer() {
  return (
    <footer className="w-full mt-auto border-t bg-background/80">
      {/* <Card className="container mx-auto py-4 px-4 flex items-center justify-between"> */}
      <span className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Business Law Textbook</span>
      <span className="text-xs text-muted-foreground">Built with Next.js &amp; shadcn/ui</span>
      {/* </Card> */}
    </footer>
  )
} 