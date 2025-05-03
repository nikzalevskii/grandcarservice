import { brands } from '@/utils/constants'

export default function BrandsSection() {
  return (
    <section id="brands" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 animated-float text-primary">
            Марки автомобилей, с которыми мы работаем
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Мы специализируемся на обслуживании и ремонте автомобилей премиального сегмента
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 blur-xl opacity-30 rounded-3xl"></div>
          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-white shadow-sm rounded-lg transform transition-all hover:scale-105 hover:shadow-xl"
              >
                <img src={brand.logo} alt={brand.name} className="h-28 object-contain brand-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
