
import React, { useEffect, useRef } from 'react';
import { BarChart4, Target, Monitor, RefreshCw, Search } from 'lucide-react';

const services = [
  {
    title: 'Meta Ads & Google Ads Management',
    description: 'Strategic campaign management across major platforms to maximize your ROI and reach your ideal customers.',
    icon: <BarChart4 className="w-10 h-10 text-orange-500" />
  },
  {
    title: 'Lead Generation Strategies',
    description: 'Custom lead generation funnels designed to attract and convert high-quality prospects into customers.',
    icon: <Target className="w-10 h-10 text-orange-500" />
  },
  {
    title: 'Landing Page Optimization',
    description: 'Data-driven optimization to create high-converting landing pages that turn visitors into leads.',
    icon: <Monitor className="w-10 h-10 text-orange-500" />
  },
  {
    title: 'Retargeting & Conversion Strategies',
    description: 'Advanced retargeting campaigns that re-engage visitors and guide them through your conversion funnel.',
    icon: <RefreshCw className="w-10 h-10 text-orange-500" />
  },
  {
    title: 'Performance Analysis & Optimization',
    description: 'Comprehensive analytics and reporting to continuously improve campaign performance and ROI.',
    icon: <Search className="w-10 h-10 text-orange-500" />
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="services" className="section-padding bg-white" ref={sectionRef}>
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-content">
          <h2 className="heading-2 mb-4">
            Grow Your Business with <span className="text-orange-500">Expert</span> Traffic Management
          </h2>
          <p className="text-muted-foreground">
            Comprehensive solutions designed to drive qualified leads and increase your conversion rates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="glass-card p-8 rounded-xl flex flex-col transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] reveal-content"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
