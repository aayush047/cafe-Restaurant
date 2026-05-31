import { motion } from "framer-motion";
import aboutImg from "../assets/about.png";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-2xl relative z-10">
              <img
                src={aboutImg}
                alt="Barista pouring perfect latte art"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-secondary/50 rounded-2xl z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-accent uppercase tracking-widest font-medium text-sm mb-4">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">
              A devotion to the perfect pour.
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                The Roasted Bean was born from a simple belief: coffee is not just a morning routine, it is a craft. We source our single-origin beans directly from small, sustainable farms across the globe, roasting them in small batches to preserve their unique character.
              </p>
              <p>
                Every detail of our space is designed for comfort and connection. The warm amber lighting, the aged wood, the scent of freshly ground beans — it is a sanctuary for those who take their coffee seriously.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-10">
              <div>
                <h4 className="font-serif text-2xl text-primary mb-2">100%</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Organic Beans</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-primary mb-2">Artisan</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Hand-crafted</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
