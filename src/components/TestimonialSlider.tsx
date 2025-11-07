'use client';

import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Owner, Premium Car Wash',
    content: 'FlexFlow AI handles 70% of our calls — pure magic! Our customers love the instant responses and we\'ve freed up our staff to focus on service quality.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    role: 'Clinic Director',
    content: 'Patient scheduling has never been easier. The AI understands medical terminology and handles appointment bookings flawlessly. Game changer for our clinic!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Real Estate Agent',
    content: 'We\'ve increased lead response time by 90%. The AI qualifies leads 24/7 and our conversion rates have skyrocketed. Best investment we\'ve made!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  {
    id: 4,
    name: 'Neha Gupta',
    role: 'E-commerce Store Owner',
    content: 'The AI chatbot has reduced our customer service response time from hours to seconds. Our customer satisfaction scores are through the roof!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

export const TestimonialSlider = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollInterval = useRef<NodeJS.Timeout>();
  const [isPaused, setIsPaused] = useState(false);

  const scrollStep = () => {
    if (!scrollContainerRef.current || isPaused) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = container.scrollLeft + 1;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    if (scrollAmount >= maxScroll) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollTo({ left: scrollAmount, behavior: 'auto' });
    }
  };

  useEffect(() => {
    scrollInterval.current = setInterval(scrollStep, 20);
    return () => {
      if (scrollInterval.current) clearInterval(scrollInterval.current);
    };
  }, [isPaused]);

  return (
    <div className="py-6 md:py-8">
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto py-2 -mx-4 px-4 scrollbar-hide"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="flex-shrink-0 w-80 bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center mb-4">
              <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-blue-100 dark:border-blue-900/30 mr-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=3b82f6&color=fff`;
                  }}
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
              <div className="ml-auto flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
          </div>
        ))}
        
        {/* Duplicate items for infinite scroll effect */}
        {testimonials.map((testimonial) => (
          <div 
            key={`duplicate-${testimonial.id}`}
            className="flex-shrink-0 w-80 bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center mb-4">
              <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-blue-100 dark:border-blue-900/30 mr-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=3b82f6&color=fff`;
                  }}
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
              <div className="ml-auto flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};
