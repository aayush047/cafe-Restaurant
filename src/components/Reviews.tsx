import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    initials: "SJ",
    quote: "The Kyoto Cold Brew is exceptional. This place has become my daily sanctuary for deep work and great coffee.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Thorne",
    initials: "MT",
    quote: "Finally, a coffee shop that respects the craft. The pour-over selection changes regularly and never disappoints.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    initials: "ER",
    quote: "The atmosphere alone is worth the visit. Warm, inviting, and the espresso is pulled perfectly every single time.",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent uppercase tracking-widest font-medium text-sm mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">From Our Community</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 border-none text-white backdrop-blur-sm h-full hover:bg-white/10 transition-colors duration-300">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex gap-1 mb-6 text-accent">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed text-gray-300 italic flex-grow mb-8">
                    "{review.quote}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <Avatar className="w-12 h-12 border border-accent/30">
                      <AvatarFallback className="bg-primary text-white">{review.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-serif font-medium">{review.name}</h4>
                      <p className="text-sm text-gray-400">Local Patron</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
