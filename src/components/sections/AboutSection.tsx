import { company } from '@/utils/constants'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background bg-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 animated-float">О нас</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-accent to-primary/30 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src="/images/workshop.jpg"
              alt="Наша мастерская"
              className="rounded-lg shadow-md w-full h-auto relative transform transition-all group-hover:scale-[1.01] z-10"
            />
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
