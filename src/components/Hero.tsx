import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import heroBg from "../assets/hero.png";

export function Hero() {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Coffee shop interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-accent uppercase tracking-[0.2em] font-medium text-sm md:text-base mb-4 block">
            Premium Artisan Coffee
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
            Crafted with <br className="hidden md:block" /> Intention
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl mb-10 font-light">
            Step into a place that takes coffee as seriously as a fine restaurant takes food. Unhurried, intentional, and deeply satisfying.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-lg bg-accent hover:bg-accent/90 text-primary-foreground border-none"
              onClick={scrollToMenu}
            >
              View Our Menu
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
