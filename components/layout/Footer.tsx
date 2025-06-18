// Footer: Simple site footer using shadcn/ui Card for styling

export default function Footer() {
  return (
    <footer className="w-full mt-auto border-t bg-muted/10 flex items-center justify-center ">
      {/* <Card className="container mx-auto py-4 px-4 flex items-center justify-between"> */}
      <div className="flex items-center justify-between w-md py-4" id="footer-text">
        <span className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Business Law Textbook</span>
        <span className="text-xs text-muted-foreground">Built with Next.js &amp; shadcn/ui</span>
      </div>
      {/* </Card> */}
    </footer>
  )
} 