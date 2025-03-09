import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-0 h-[100px] flex items-center bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row h-full">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <HeartIcon className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">HandsOn</span>
          </Link>
          <nav className="flex gap-4 md:gap-6">
            <Link
              href="/about"
              className="text-xs md:text-sm hover:underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-xs md:text-sm hover:underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="text-xs md:text-sm hover:underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs md:text-sm hover:underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </nav>
        </div>
        <div className="text-center text-xs md:text-sm text-muted-foreground">
          © {new Date().getFullYear()} HandsOn. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

