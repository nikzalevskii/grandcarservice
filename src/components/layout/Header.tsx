export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-secondary">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">
            Grand<span className="text-accent">CarService</span>
          </span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="text-foreground hover:text-accent transition-colors">
            Услуги
          </a>
          <a href="#brands" className="text-foreground hover:text-accent transition-colors">
            Бренды
          </a>
          <a href="#about" className="text-foreground hover:text-accent transition-colors">
            О нас
          </a>
          <a href="#contact" className="text-foreground hover:text-accent transition-colors">
            Контакты
          </a>
        </nav>
        <div className="md:hidden">
          <button className="p-2">
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
              className="opacity-90 hover:opacity-100 transition-opacity"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
