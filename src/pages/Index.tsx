import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const portfolioItems = [
    {
      id: 1,
      title: 'Инфографика для Wildberries',
      category: 'Электроника',
      image: 'https://cdn.poehali.dev/projects/484016c2-900c-4a64-8f0b-2d57de0b02fc/files/ced2adc8-0ec3-4e72-944c-f8c0ee9f1df2.jpg',
      description: 'Увеличение продаж на 150%'
    },
    {
      id: 2,
      title: 'Дизайн для Ozon',
      category: 'Одежда',
      image: 'https://cdn.poehali.dev/projects/484016c2-900c-4a64-8f0b-2d57de0b02fc/files/beebde50-c182-4beb-8b52-555faf1871bb.jpg',
      description: 'CTR вырос в 2 раза'
    },
    {
      id: 3,
      title: 'Креатив для Яндекс.Маркета',
      category: 'Косметика',
      image: 'https://cdn.poehali.dev/projects/484016c2-900c-4a64-8f0b-2d57de0b02fc/files/edac1f85-49b8-4691-bdce-2483f035aaaf.jpg',
      description: 'Конверсия +85%'
    }
  ];

  const services = [
    { icon: 'Palette', title: 'Дизайн инфографики', price: 'от 3 000 ₽', description: 'Продающий дизайн для карточек товаров' },
    { icon: 'TrendingUp', title: 'Аудит карточек', price: 'от 1 500 ₽', description: 'Анализ и рекомендации по улучшению' },
    { icon: 'Zap', title: 'Экспресс-дизайн', price: 'от 2 000 ₽', description: 'Готовые карточки за 24 часа' },
    { icon: 'Package', title: 'Полное оформление', price: 'от 15 000 ₽', description: 'Комплексное оформление магазина' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: '10 ошибок в инфографике для Wildberries',
      date: '15 октября 2025',
      excerpt: 'Разбираем главные промахи, которые снижают продажи ваших товаров...',
      readTime: '5 мин'
    },
    {
      id: 2,
      title: 'Как увеличить CTR карточки в 3 раза',
      date: '12 октября 2025',
      excerpt: 'Проверенные методы привлечения внимания покупателей на маркетплейсах...',
      readTime: '7 мин'
    },
    {
      id: 3,
      title: 'Тренды дизайна маркетплейсов 2025',
      date: '8 октября 2025',
      excerpt: 'Что сейчас работает лучше всего в оформлении товаров...',
      readTime: '6 мин'
    }
  ];

  const reviews = [
    { name: 'Мария К.', rating: 5, text: 'Продажи выросли на 200% после редизайна! Рекомендую!' },
    { name: 'Алексей П.', rating: 5, text: 'Профессиональный подход, быстро и качественно.' },
    { name: 'Ольга Д.', rating: 5, text: 'Лучший дизайнер для маркетплейсов, с которым я работала!' }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold gradient-text">InfoDesign Pro</h1>
            <div className="hidden md:flex gap-6">
              {['home', 'portfolio', 'services', 'blog', 'about', 'prices', 'reviews', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'services' && 'Услуги'}
                  {section === 'blog' && 'Блог'}
                  {section === 'about' && 'О нас'}
                  {section === 'prices' && 'Цены'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary">
              Заказать дизайн
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary">
              <Icon name="Sparkles" size={16} className="mr-2" />
              Топовый дизайн для маркетплейсов
            </Badge>
            <h2 className="text-5xl md:text-7xl font-heading font-black mb-6 gradient-text leading-tight">
              Продающая инфографика<br />для маркетплейсов
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Создаём карточки товаров, которые привлекают внимание и увеличивают продажи на Wildberries, Ozon и Яндекс.Маркет
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white font-semibold">
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать проект
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-heading font-bold mb-4 gradient-text">Портфолио</h3>
            <p className="text-muted-foreground text-lg">Наши лучшие работы с реальными результатами</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden hover:scale-105 transition-transform duration-300 bg-card border-border animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-secondary text-white">
                    {item.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading">{item.title}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    <Icon name="TrendingUp" size={16} className="inline mr-1" />
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-heading font-bold mb-4 gradient-text">Услуги</h3>
            <p className="text-muted-foreground text-lg">Решения под любой бюджет и задачу</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-xl transition-shadow border-border animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="font-heading text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold gradient-text">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-heading font-bold mb-4 gradient-text">Блог</h3>
            <p className="text-muted-foreground text-lg">Полезные статьи о дизайне для маркетплейсов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="hover:shadow-lg transition-shadow cursor-pointer border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{post.date}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="font-heading text-xl hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0 text-primary">
                    Читать далее <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-heading font-bold mb-4 gradient-text">О нас</h3>
          </div>
          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  Мы — команда профессиональных дизайнеров с опытом работы более 5 лет. 
                  Специализируемся на создании продающей инфографики для маркетплейсов.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                    <p className="text-muted-foreground">Проектов</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">5 лет</div>
                    <p className="text-muted-foreground">На рынке</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">98%</div>
                    <p className="text-muted-foreground">Довольных клиентов</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-heading font-bold mb-4 gradient-text">Тарифы</h3>
            <p className="text-muted-foreground text-lg">Выберите подходящий пакет услуг</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Старт', price: '5 000', features: ['3 карточки товаров', 'Базовая инфографика', '2 правки', 'Срок: 3 дня'] },
              { name: 'Бизнес', price: '15 000', features: ['10 карточек товаров', 'Премиум дизайн', '5 правок', 'Срок: 5 дней', 'Бонус: аудит'], popular: true },
              { name: 'VIP', price: '35 000', features: ['30 карточек товаров', 'Эксклюзивный дизайн', 'Безлимит правок', 'Срок: 10 дней', 'Полное сопровождение'] }
            ].map((plan, index) => (
              <Card 
                key={index}
                className={`relative ${plan.popular ? 'border-primary shadow-xl scale-105' : 'border-border'} animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="font-heading text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-muted-foreground"> ₽</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Icon name="Check" size={20} className="text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-gradient-to-r from-primary to-secondary">
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-heading font-bold mb-4 gradient-text">Отзывы</h3>
            <p className="text-muted-foreground text-lg">Что говорят наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card 
                key={index}
                className="border-border animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <CardTitle className="font-heading text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-heading font-bold mb-4 gradient-text">Контакты</h3>
            <p className="text-muted-foreground text-lg">Свяжитесь с нами любым удобным способом</p>
          </div>
          <Card className="border-border">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div>
                  <Input placeholder="Ваше имя" className="bg-background" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" className="bg-background" />
                </div>
                <div>
                  <Input placeholder="Телефон" className="bg-background" />
                </div>
                <div>
                  <Textarea placeholder="Расскажите о вашем проекте" className="bg-background min-h-32" />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-col gap-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <span>info@infodesign.pro</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <span>+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <span>Москва, ул. Дизайнерская, 1</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 InfoDesign Pro. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
