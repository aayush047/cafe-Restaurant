import { Coffee, MapPin, Phone, Mail, Clock, ChevronRight, Globe, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const phone = "919301317731";
  const message = encodeURIComponent("Hello! I'd like to know more about The Roasted Bean cafe.");
  const waUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <footer id="contact" className="bg-[#1A110A] text-gray-400">

      {/* Top CTA Banner */}
      <div className="border-b border-gray-800 py-10 bg-[#4a3319]/30">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-1">Come Visit Us Today</h2>
            <p className="text-gray-400">Fresh brews, warm ambience, and a seat waiting for you.</p>
          </div>
          <div className="flex gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-footer-whatsapp"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <a
              href="tel:09301317731"
              data-testid="link-footer-call"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#c8903a] text-[#c8903a] font-semibold text-sm hover:bg-[#c8903a] hover:text-white transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-white">
                <Coffee className="w-7 h-7 text-[#c8903a]" />
                <span className="font-serif text-xl font-bold tracking-wider">The Roasted Bean</span>
              </div>
              <p className="leading-relaxed text-sm">
                A premium artisan café where every cup tells a story — hand-selected single-origin beans, crafted with care, served in a space designed for connection and quiet contemplation.
              </p>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-600 mb-3">Follow Us</p>
                <div className="flex gap-3">
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#c8903a] hover:bg-white/5 rounded-full w-9 h-9 border border-gray-800 hover:border-[#c8903a]/40 transition-all">
                    <Globe className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#c8903a] hover:bg-white/5 rounded-full w-9 h-9 border border-gray-800 hover:border-[#c8903a]/40 transition-all">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#c8903a] hover:bg-white/5 rounded-full w-9 h-9 border border-gray-800 hover:border-[#c8903a]/40 transition-all">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="font-serif text-lg text-white mb-6 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#c8903a]" />
                Opening Hours
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-center border-b border-gray-800 pb-3">
                  <span className="text-gray-500">Monday</span>
                  <span className="text-white font-medium">7:00 AM – 9:00 PM</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-800 pb-3">
                  <span className="text-gray-500">Tuesday</span>
                  <span className="text-white font-medium">7:00 AM – 9:00 PM</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-800 pb-3">
                  <span className="text-gray-500">Wed – Thu</span>
                  <span className="text-white font-medium">7:00 AM – 9:00 PM</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-800 pb-3">
                  <span className="text-gray-500">Friday</span>
                  <span className="text-white font-medium">7:00 AM – 10:00 PM</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-800 pb-3">
                  <span className="text-gray-500">Saturday</span>
                  <span className="text-white font-medium">8:00 AM – 10:00 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-500">Sunday</span>
                  <span className="text-[#c8903a] font-medium">9:00 AM – 8:00 PM</span>
                </li>
              </ul>
              <div className="mt-4 inline-flex items-center gap-2 bg-green-900/30 text-green-400 text-xs px-3 py-1.5 rounded-full border border-green-800/40">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Open Now — Closes 12 AM
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-serif text-lg text-white mb-6 flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c8903a]" />
                Contact Us
              </h3>
              <ul className="space-y-5 text-sm">
                <li className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 text-[#c8903a] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium mb-0.5">Our Location</p>
                    <p className="leading-relaxed">
                      Agrasen Nagar, 56<br />
                      opp. Harsh Vilas<br />
                      Mandsaur, M.P. 458001
                    </p>
                    <a
                      href="https://maps.google.com/?q=Agrasen+Nagar+56+Mandsaur+Madhya+Pradesh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#c8903a] hover:text-white transition-colors mt-2 text-xs"
                    >
                      Get Directions <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Phone className="w-5 h-5 text-[#c8903a] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium mb-0.5">Phone</p>
                    <a href="tel:09301317731" className="hover:text-white transition-colors">
                      093013 17731
                    </a>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Mail className="w-5 h-5 text-[#c8903a] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium mb-0.5">Email</p>
                    <a href="mailto:hello@theroastedbean.in" className="hover:text-white transition-colors">
                      hello@theroastedbean.in
                    </a>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#c8903a] shrink-0 mt-0.5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <div>
                    <p className="text-white font-medium mb-0.5">WhatsApp</p>
                    <a href={waUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      093013 17731
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#c8903a]" />
                Find Us
              </h3>
              <div className="h-52 rounded-xl overflow-hidden bg-gray-800 relative group border border-gray-700">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=75.05%2C24.05%2C75.09%2C24.09&layer=mapnik&marker=24.07%2C75.07"
                  className="w-full h-full border-0 filter grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                  title="Location Map"
                />
                <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-xl" />
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-center">
                <div className="bg-white/5 rounded-lg py-2 px-3 border border-gray-800">
                  <p className="text-[#c8903a] font-semibold">4.8 ★</p>
                  <p>467 Reviews</p>
                </div>
                <div className="bg-white/5 rounded-lg py-2 px-3 border border-gray-800">
                  <p className="text-[#c8903a] font-semibold">1.3 km</p>
                  <p>From City Center</p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <p>&copy; {new Date().getFullYear()} The Roasted Bean. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Sitemap</a>
            </div>
            <p>Made with love in Mandsaur, M.P.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
