import { company } from '@/utils/constants'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden section-gradient"
    >
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"
        style={{ backgroundPosition: '30% center' }}
      >
        <div className="absolute inset-0 hero-gradient-overlay"></div>
      </div>

      <div className="container relative mx-auto px-4 z-10 py-20">
        <div className="max-w-2xl mx-auto md:mx-0 glass-effect p-6 md:p-12 rounded-xl">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animated-float break-words">
            {company.name}
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-white/90 mb-8 fade-in">
            Премиальный автосервис для вашего автомобиля. Профессиональное обслуживание и ремонт
            автомобилей премиум-класса.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="btn bg-white/20 hover:bg-accent/90 text-white/95 px-5 sm:px-8 py-2 sm:py-4 rounded-lg font-semibold text-center hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Наши услуги
            </a>
            <a
              href="#contact"
              className="btn bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-5 sm:px-8 py-2 sm:py-4 rounded-lg font-semibold text-center border border-white/30 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}
