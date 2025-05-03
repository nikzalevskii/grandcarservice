import { services } from '@/utils/constants'

export default function ServicesSection() {
  return (
    <>
      <div className="section-divider"></div>
      <section id="services" className="py-20 bg-secondary bg-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 animated-float">Наши услуги</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Мы предлагаем полный спектр услуг по обслуживанию и ремонту премиальных автомобилей
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-sm service-card">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
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
                  className="text-accent opacity-90 hover:opacity-100 transition-opacity"
                >
                  <path d="M5 11a2 2 0 0 1 4 0v2a2 2 0 0 1-4 0v-2z"></path>
                  <path d="M15 11a2 2 0 0 1 4 0v2a2 2 0 0 1-4 0v-2z"></path>
                  <path d="M9 11h6"></path>
                  <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Диагностика</h3>
              <div className="w-16 h-1 bg-accent/50 mx-auto mb-4"></div>
              <p className="text-foreground/70 text-center">
                Комплексная диагностика всех систем автомобиля с использованием оригинального
                оборудования
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-sm service-card">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
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
                  className="text-accent opacity-90 hover:opacity-100 transition-opacity"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Техническое обслуживание</h3>
              <div className="w-16 h-1 bg-accent/50 mx-auto mb-4"></div>
              <p className="text-foreground/70 text-center">
                Регулярное техобслуживание по регламенту производителя с использованием оригинальных
                запчастей
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-sm service-card">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
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
                  className="text-accent opacity-90 hover:opacity-100 transition-opacity"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Ремонт</h3>
              <div className="w-16 h-1 bg-accent/50 mx-auto mb-4"></div>
              <p className="text-foreground/70 text-center">
                Высокоточный ремонт любой сложности с гарантией качества и использованием
                современного оборудования
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider reverse-divider"></div>
    </>
  )
}
