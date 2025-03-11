
import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-orange-500/10 top-0 -right-1/4" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-orange-500/5 -bottom-1/4 -left-1/4" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-600 font-medium text-sm mb-2 opacity-0 animate-fade-in">
              Strategic Traffic Management
            </div>
            
            <h1 className="heading-1 opacity-0 animate-fade-in-delay">
              Turn <span className="text-orange-500">Clicks</span> into <span className="text-orange-500">Sales</span> with High-Quality Leads!
            </h1>
            
            <p className="subheading max-w-2xl opacity-0 animate-fade-in-delay-2">
              I help businesses grow through strategic traffic management and lead generation that converts visitors into customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 opacity-0 animate-fade-in-delay-2">
              <a href="#contact" className="button-primary">
                Get a Free Strategy Call
              </a>
              <a href="#services" className="button-secondary">
                Explore Services
              </a>
            </div>
            
            <div className="pt-6 opacity-0 animate-fade-in-delay-2">
              <p className="text-sm text-muted-foreground">Trusted by innovative companies</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4">
                <div className="h-8 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                  <div className="bg-gray-400/20 h-8 w-24 rounded"></div>
                </div>
                <div className="h-8 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                  <div className="bg-gray-400/20 h-8 w-28 rounded"></div>
                </div>
                <div className="h-8 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                  <div className="bg-gray-400/20 h-8 w-20 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-muted-foreground">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
