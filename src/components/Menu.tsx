import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

import espressoImg from "../assets/menu-espresso.png";
import cappuccinoImg from "../assets/menu-cappuccino.png";
import pouroverImg from "../assets/menu-pourover.png";
import coldbrewImg from "../assets/menu-coldbrew.png";
import mochaImg from "../assets/menu-mocha.png";
import croissantImg from "../assets/menu-croissant.png";
import avocadoImg from "../assets/menu-avocado.png";
import cakeImg from "../assets/menu-cake.png";

const menuItems = [
  {
    id: 1,
    name: "Perfect Espresso",
    description: "Rich, dark espresso with a thick golden crema.",
    price: "$3.50",
    category: "Hot Coffee",
    image: espressoImg,
  },
  {
    id: 2,
    name: "Classic Cappuccino",
    description: "Espresso with equal parts steamed milk and foam.",
    price: "$4.50",
    category: "Hot Coffee",
    image: cappuccinoImg,
  },
  {
    id: 3,
    name: "Artisan Pour Over",
    description: "Single-origin beans brewed slowly in a Chemex.",
    price: "$5.00",
    category: "Hot Coffee",
    image: pouroverImg,
  },
  {
    id: 4,
    name: "Kyoto Cold Brew",
    description: "Slow-steeped for 24 hours, incredibly smooth.",
    price: "$4.75",
    category: "Cold Beverages",
    image: coldbrewImg,
  },
  {
    id: 5,
    name: "Iced Dark Mocha",
    description: "Espresso, dark chocolate, and milk over ice.",
    price: "$5.50",
    category: "Cold Beverages",
    image: mochaImg,
  },
  {
    id: 6,
    name: "Butter Croissant",
    description: "Flaky, golden brown, baked fresh daily.",
    price: "$4.00",
    category: "Snacks & Bites",
    image: croissantImg,
  },
  {
    id: 7,
    name: "Avocado Toast",
    description: "Gourmet avocado with microgreens on rustic sourdough.",
    price: "$9.00",
    category: "Snacks & Bites",
    image: avocadoImg,
  },
  {
    id: 8,
    name: "Cinnamon Coffee Cake",
    description: "Warm slice of cake with a rich crumble topping.",
    price: "$4.50",
    category: "Snacks & Bites",
    image: cakeImg,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Menu() {
  return (
    <section id="menu" className="py-24 bg-[#FAF7F2]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent uppercase tracking-widest font-medium text-sm mb-4 block">Tasting Notes</span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Our Menu</h2>
          <p className="text-muted-foreground text-lg">
            Carefully curated selections designed to highlight the unique profiles of our roasts.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group cursor-pointer perspective-1000"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-3 relative flex flex-col h-full border border-border/50">
                <div className="aspect-square overflow-hidden relative">
                  <Badge className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm text-primary hover:bg-background/90 border-none">
                    {item.category}
                  </Badge>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl text-primary font-medium">{item.name}</h3>
                    <span className="font-sans text-accent font-semibold">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2 flex-grow">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
