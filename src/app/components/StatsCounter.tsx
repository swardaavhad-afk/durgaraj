import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Users, Mountain, Calendar, Shield } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

function StatItem({ icon, value, suffix, label }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="flex justify-center mb-4">
        <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm">
          {icon}
        </div>
      </div>
      <div className="text-4xl md:text-5xl font-bold text-accent mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/80 text-lg">{label}</div>
    </motion.div>
  );
}

export function StatsCounter() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      value: 19000,
      suffix: '+',
      label: 'Happy Adventurers'
    },
    {
      icon: <Mountain className="w-8 h-8 text-secondary" />,
      value: 1800,
      suffix: '+',
      label: 'Camps & Treks'
    },
    {
      icon: <Calendar className="w-8 h-8 text-secondary" />,
      value: 25,
      suffix: '+',
      label: 'Years Experience'
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      value: 45,
      suffix: '+',
      label: 'Trained Volunteers'
    }
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}