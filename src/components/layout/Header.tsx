'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { company } from '@/utils/constants'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Отслеживаем скролл страницы
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    document.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 bg-white shadow-md' : 'py-4 bg-white/90'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M20 6l-9 9-4-4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span className="text-3xl font-bold text-primary">{company.name}</span>
            </Link>
          </div>

          {/* Десктопное меню */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link
              href="#services"
              className="font-medium text-foreground hover:text-primary transition-colors"
            >
              Услуги
            </Link>
            <Link
              href="#brands"
              className="font-medium text-foreground hover:text-primary transition-colors"
            >
              Бренды
            </Link>
            <Link
              href="#about"
              className="font-medium text-foreground hover:text-primary transition-colors"
            >
              О нас
            </Link>
            <Link
              href="#contact"
              className="font-medium text-foreground hover:text-primary transition-colors"
            >
              Контакты
            </Link>
          </nav>

          {/* Мобильное меню */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-foreground focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
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
                {isMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Выпадающее мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-secondary/30 mt-2">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#services"
                className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Услуги
              </Link>
              <Link
                href="#brands"
                className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Бренды
              </Link>
              <Link
                href="#about"
                className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                О нас
              </Link>
              <Link
                href="#contact"
                className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Контакты
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
