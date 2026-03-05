import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Clock, IndianRupee, Award, Users, CheckCircle, MessageCircle } from 'lucide-react';
import { trainingPrograms } from '../data/mockData';
import { Badge } from '../components/ui/badge';

export function TrainingProgramsPage() {
  const handleWhatsAppEnquiry = (programTitle: string) => {
    const url = `https://wa.me/919422769242?text=${encodeURIComponent(`Hello, I am interested in the ${programTitle}. Can you provide more information?`)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-accent overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1771365155373-b514a58b9e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwY2xpbWJpbmclMjBhZHZlbnR1cmUlMjBleHRyZW1lfGVufDF8fHx8MTc3MjM2NzEyMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Training"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Training <span className="text-white/90">Programs</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 mb-4" style={{ fontFamily: "'Tiro Devanagari Marathi', serif" }}>
              प्रशिक्षण कार्यक्रम
            </p>
            <p className="text-lg text-white/70">Master the skills. Build the confidence. Become an adventurer.</p>
          </motion.div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {trainingPrograms.map((program) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all shadow-lg"
            >
              <div className="relative h-64">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-secondary text-white border-0">{program.level}</Badge>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{program.title}</h3>
                <p className="text-primary text-sm mb-4 font-medium" style={{ fontFamily: "'Tiro Devanagari Marathi', serif" }}>
                  {program.marathiTitle}
                </p>
                <p className="text-muted-foreground mb-6">{program.description}</p>

                <div className="flex items-center gap-6 mb-6 flex-wrap">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary">
                    <IndianRupee className="w-5 h-5" />
                    <span className="text-xl font-bold">{program.price.toLocaleString()}</span>
                  </div>
                </div>

                {/* Modules */}
                <div className="mb-6">
                  <h4 className="text-foreground font-bold mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Course Modules
                  </h4>
                  <ul className="space-y-2">
                    {program.modules.map((module, index) => (
                      <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div className="mb-6">
                  <h4 className="text-foreground font-bold mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    What You'll Achieve
                  </h4>
                  <ul className="space-y-2">
                    {program.outcomes.map((outcome, index) => (
                      <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="flex-1 px-6 py-3 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-all text-center font-semibold"
                  >
                    Enroll Now
                  </Link>
                  <button
                    onClick={() => handleWhatsAppEnquiry(program.title)}
                    className="flex-1 px-6 py-3 bg-[#25D366] text-white rounded-full hover:bg-[#1fb855] transition-all text-center font-semibold flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Enquiry
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Training */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Train With <span className="text-secondary">Durgaraj Adventures</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Certified Instructors', description: 'Learn from experienced mountaineers with national and international certifications', icon: '🏆' },
              { title: 'Safety First', description: 'International standard equipment and strict safety protocols in all training', icon: '🛡️' },
              { title: 'Small Batches', description: 'Limited batch size ensures personalized attention for every participant', icon: '👥' },
              { title: 'Recognized Certification', description: 'Get certificates recognized by mountaineering associations', icon: '📜' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 border border-border text-center shadow-md"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Start Your Training <span className="text-secondary">Journey?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of adventurers who have been trained by Durgaraj Adventures. Get in touch with our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const url = `https://wa.me/919422769242?text=${encodeURIComponent('Hello, I want to know more about training programs.')}`;
                window.open(url, '_blank');
              }}
              className="px-8 py-3 bg-[#25D366] text-white rounded-full hover:bg-[#1fb855] transition-all font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Chat
            </button>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-secondary text-secondary rounded-full hover:bg-secondary/10 transition-all font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
