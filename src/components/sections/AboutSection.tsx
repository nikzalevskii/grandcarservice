import { company } from '@/utils/constants'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background bg-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 animated-float text-primary">О нас</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-accent to-primary/30 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-white p-6 rounded-lg shadow-lg z-10 overflow-hidden">
              <div className="mb-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  Наши преимущества
                </h3>
                <div className="w-16 h-1 bg-accent mx-auto"></div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="relative speed-effect">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-3">
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
                        className="text-accent"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <h4 className="font-bold text-primary text-base md:text-lg max-[425px]:text-sm">
                      Скорость
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base max-[425px]:text-xs">
                    Оперативно решаем задачи любой сложности
                  </p>
                </div>

                <div className="relative speed-effect">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-3">
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
                        className="text-accent"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <h4 className="font-bold text-primary text-base md:text-lg max-[425px]:text-sm">
                      Гарантия
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base max-[425px]:text-xs">
                    Гарантия на все виды работ до 2-х лет
                  </p>
                </div>

                <div className="relative speed-effect">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-3">
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
                        className="text-accent"
                      >
                        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                        <line x1="16" y1="8" x2="2" y2="22"></line>
                        <line x1="17.5" y1="15" x2="9" y2="15"></line>
                      </svg>
                    </div>
                    <h4 className="font-bold text-primary text-base md:text-lg max-[425px]:text-sm">
                      Качество
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base max-[425px]:text-xs">
                    Используем только оригинальные запчасти
                  </p>
                </div>

                <div className="relative speed-effect">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-3">
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
                        className="text-accent"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <h4 className="font-bold text-primary text-base md:text-lg max-[425px]:text-sm">
                      Опыт
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base max-[425px]:text-xs">
                    Команда сертифицированных специалистов
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-accent/5 p-4 rounded-lg border border-accent/20">
                <div className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent mr-2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h4 className="font-semibold text-primary text-base md:text-lg max-[425px]:text-sm">
                    Современное оборудование
                  </h4>
                </div>
                <p className="text-sm md:text-base max-[425px]:text-xs text-gray-600">
                  Наш сервис оснащен новейшим диагностическим оборудованием, что позволяет нам
                  проводить точную диагностику и качественный ремонт автомобилей премиум-класса.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-foreground/70 mb-6">
              Компания <span className="font-bold text-accent">{company.name}</span> — это
              современный автосервис, специализирующийся на обслуживании и ремонте автомобилей
              премиум-класса. Мы работаем с 2010 года и за это время заслужили репутацию надежного
              партнера для владельцев премиальных автомобилей.
            </p>
            <p className="text-lg text-foreground/70 mb-6">
              Наша команда состоит из высококвалифицированных специалистов, имеющих многолетний опыт
              работы с автомобилями премиум-сегмента. Мы постоянно повышаем квалификацию и следим за
              новыми технологиями в автомобильной индустрии.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-4 bg-secondary/50 rounded-lg transform transition-all hover:scale-105 hover:shadow-md">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <p className="text-foreground/70">Лет опыта работы</p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg transform transition-all hover:scale-105 hover:shadow-md">
                <div className="text-3xl font-bold text-accent mb-2">5000+</div>
                <p className="text-foreground/70">Довольных клиентов</p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg transform transition-all hover:scale-105 hover:shadow-md">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <p className="text-foreground/70">Опытных специалистов</p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg transform transition-all hover:scale-105 hover:shadow-md">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <p className="text-foreground/70">Гарантия качества</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
