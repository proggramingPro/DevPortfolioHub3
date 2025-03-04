import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <a className="text-xl font-bold">Portfolio</a>
          </Link>
          <div className="flex items-center gap-4">
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            <ThemeToggle />
            <Button asChild>
              <a href="/resume.pdf" download>Resume</a>
            </Button>
          </div>
        </nav>
      </header>
      <main className="pt-16">
        {children}
      </main>
      <footer className="border-t py-6 mt-24">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
