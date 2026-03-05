import { motion } from 'motion/react';
import { Mountain, Award, Heart, Shield, Target } from 'lucide-react';
import { teamMembers } from '../data/mockData';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary to-accent overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1712186870004-d8653d9a0af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBjb25zZXJ2YXRpb24lMjBTYWh5YWRyaSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzIzNjcxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Sahyadri Mountains"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              About <span className="text-white/90">Durgaraj</span>
            </h1>
            <p className="text-2xl text-white/80 mb-4" style={{ fontFamily: "'Tiro Devanagari Marathi', serif" }}>
              घेतला आनंद वाटला आनंद यापरि आनंद तो कोणता ?
            </p>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Pioneer Mountaineering Institute Since 1999
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our <span className="text-secondary">Story</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Durgaraj is one of the <strong className="text-foreground">pioneer mountaineering institutes</strong> based in Nashik, Maharashtra.
              </p>
              <p className="text-xl text-primary italic" style={{ fontFamily: "'Tiro Devanagari Marathi', serif" }}>
                "घेतला आनंद वाटला आनंद यापरि आनंद तो कोणता ?"
              </p>
              <p>
                With this motto in <strong className="text-foreground">1999</strong>, the mountaineer couple <strong className="text-foreground">Keshav and Jyoti Ugale</strong> laid the foundation of Durgaraj. It is amongst few well known organizations in India. Today the asset of Durgaraj is a family of more than <strong className="text-foreground">19,000 mountaineers and nature lovers</strong> across the country.
              </p>
              <p>
                Our organization has been working in this field since <strong className="text-foreground">1999</strong> and has a reputation as an experienced organization having successfully organized more than <strong className="text-foreground">1,800 camps & treks</strong>.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1712186870004-d8653d9a0af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBjb25zZXJ2YXRpb24lMjBTYWh5YWRyaSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzIzNjcxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Our Story"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Durgaraj */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Choose <span className="text-secondary">Durgaraj</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Legally Registered', text: 'Durgaraj is a legally registered organization fulfilling Government terms and conditions' },
              { icon: Award, title: 'Trained Volunteers', text: 'Consists of trained volunteers who have completed adventure courses through Government registered institutions' },
              { icon: Mountain, title: 'Internationally Trained', text: 'Has internationally trained Instructors in the adventure field' },
              { icon: Target, title: '25+ Years Experience', text: 'Working in this field since 1999 with proven track record' },
              { icon: Heart, title: '1,800+ Camps & Treks', text: 'Successfully organized more than 1,800 camps & treks with excellent reputation' },
              { icon: Shield, title: 'Well Equipped', text: 'Institute is well equipped with approved Adventure equipment and trained manpower for Sahyadri and Himalayas' },
              { icon: Heart, title: 'Economic & Social', text: 'Perfect blend of economic and social sectors, leading role in nature conservation and environmental preservation' },
              { icon: Target, title: 'Human Values', text: 'Committed to cultivation of human values through adventure and nature' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-border"
              >
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Meet Our <span className="text-secondary">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experienced professionals dedicated to your safety and adventure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all group text-center shadow-md"
            >
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-3xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                {member.name[0]}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
              <p className="text-secondary text-sm mb-3 font-semibold">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements / Stats */}
      <section className="bg-gradient-to-r from-primary to-accent py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '19,000+', label: 'Happy Adventurers' },
              { number: '1,800+', label: 'Successful Camps & Treks' },
              { number: '25+', label: 'Years Experience' },
              { number: '100%', label: 'Safety Record' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl p-8 md:p-12 border border-border shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our Environmental <span className="text-secondary">Commitment</span>
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p>We believe in leaving no trace and preserving the natural beauty of the Sahyadri mountains.</p>
                <ul className="space-y-2 ml-4">
                  <li>• Zero plastic policy on all trips</li>
                  <li>• Regular mountain cleanup drives</li>
                  <li>• Supporting local communities</li>
                  <li>• Wildlife conservation awareness</li>
                  <li>• Sustainable tourism practices</li>
                </ul>
              </div>
            </div>
            <div>
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Safety <span className="text-secondary">Standards</span>
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p>Your safety is our top priority. We maintain the highest standards in adventure tourism.</p>
                <ul className="space-y-2 ml-4">
                  <li>• Certified wilderness first responders</li>
                  <li>• International standard equipment</li>
                  <li>• Comprehensive insurance coverage</li>
                  <li>• Regular safety training</li>
                  <li>• Emergency response protocols</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
