import { company } from '@/utils/constants'

export default function ContactSection() {
  return (
    <>
      <div className="section-divider"></div>
      <section id="contact" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 animated-float">Связаться с нами</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Свяжитесь с нами для записи на обслуживание или получения консультации по вашему
              автомобилю
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-background p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <div className="w-6 h-1 bg-accent mr-3"></div>
                Контактная информация
              </h3>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="mt-1 mr-3 w-10 h-10 text-accent bg-accent/10 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-90 group-hover:opacity-100 transition-opacity"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-accent">Телефон:</p>
                    <a
                      href={`tel:${company.phone}`}
                      className="text-gray-700 hover:text-accent transition-colors block mt-1 text-lg"
                    >
                      {company.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="mt-1 mr-3 w-10 h-10 text-accent bg-accent/10 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-90 group-hover:opacity-100 transition-opacity"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-accent">Email:</p>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-gray-700 hover:text-accent transition-colors block mt-1 text-lg"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="mt-1 mr-3 w-10 h-10 text-accent bg-accent/10 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-90 group-hover:opacity-100 transition-opacity"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-accent">Адрес:</p>
                    <p className="text-gray-700 mt-1 text-lg">{company.address}</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="mt-1 mr-3 w-10 h-10 text-accent bg-accent/10 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-90 group-hover:opacity-100 transition-opacity"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-accent">Часы работы:</p>
                    <p className="text-gray-700 mt-1">Пн-Пт: 9:00 - 20:00</p>
                    <p className="text-gray-700">Сб: 10:00 - 18:00</p>
                    <p className="text-gray-700">Вс: Выходной</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <div className="w-6 h-1 bg-accent mr-3"></div>
                Отправить сообщение
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-accent">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-accent">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="ваш@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1 text-accent">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="+7 (XXX) XXX-XX-XX"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-accent">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Ваше сообщение..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-accent text-accent-foreground rounded-md font-medium text-center hover:bg-accent/90 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
