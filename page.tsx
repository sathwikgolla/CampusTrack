"use client"

import { AuthTabs } from "@/components/auth-tabs"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Moon, Sun, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AuthPage() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <Image
                src="/campus-tracker-logo.png"
                alt="CampusTracker"
                width={40}
                height={40}
                className="object-contain"
              />
              <div>
                <span className="font-bold text-lg text-foreground">CampusTracker</span>
                <p className="text-xs text-muted-foreground">Faculty Locator</p>
              </div>
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 text-balance text-foreground">
              Welcome to CampusTracker
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl text-pretty leading-relaxed">
              Find faculty members, view schedules, and track availability in real-time
            </p>
          </div>
          <AuthTabs />
        </div>
      </main>
    </div>
  )
}
