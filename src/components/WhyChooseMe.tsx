
import React, { useEffect, useRef } from 'react';

const benefits = [
  {
    title: 'Data-Driven Approach',
    description: 'Every decision is backed by comprehensive data analysis to ensure the best possible outcomes for your campaigns.'
  },
  {
    title: 'Customized Strategies',
    description: 'No cookie-cutter solutions. Each strategy is tailored to your specific business goals, target audience, and industry.'
  },
  {
    title: 'Proven Track Record',
    description: 'Consistent results across various industries with documented success in increasing conversions and lowering ad costs.'
  },
  {
    title: 'Transparent Reporting',
    description: 'Clear, detailed reports that show exactly how your campaigns are performing and the value you're receiving.'
  }
];

const metrics = [
  { label: 'Average ROI Increase', value: '284%' },
  { label: 'Lead Quality Improvement', value: '68%' },
  { label: 'Ad Cost Reduction', value: '37%' }
];

const WhyChooseMe = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const benefitRefs = useRef<(HTMLDivElement | null)[]>([]);
  const metricRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    benefitRefs.current.forEach((benefit) => {
      if (benefit) observer.observe(benefit);
    });

    metricRefs.current.forEach((metric) => {
      if (metric) observer.observe(metric);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="why-choose-me" 
      className="section-padding bg-gradient-to-b from-gray-50 to-white"
      ref={sectionRef}
    >
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-content">
          <h2 className="heading-2 mb-4">
            Why Choose <span className="text-orange-500">Me</span>?
          </h2>
          <p className="text-muted-foreground">
            My results-driven approach has helped businesses across various industries achieve significant growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                ref={(el) => (benefitRefs.current[index] = el)}
                className="flex gap-4 reveal-content"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-500 font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:border-l lg:pl-16 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {metrics.map((metric, index) => (
                <div 
                  key={index}
                  ref={(el) => (metricRefs.current[index] = el)}
                  className="glass-card p-6 rounded-xl text-center reveal-content"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl font-bold text-orange-500 mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>

            <div 
              className="glass-card p-8 rounded-xl reveal-content"
              ref={(el) => (metricRefs.current[3] = el)}
              style={{ transitionDelay: '300ms' }}
            >
              <h3 className="font-semibold text-xl mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>More Leads, Less Cost</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Higher ROI on Ad Spend</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Exclusive Growth Strategies</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Continuous Optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
