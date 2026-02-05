import { motion } from "framer-motion";
import galleryShop from "@/assets/gallery-shop.jpg";

const About = () => {
  return (
    <section className="py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={galleryShop}
                alt="Our flower shop interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-sage/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-4">
              Our Story
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Crafted with{" "}
              <span className="italic text-sage">Passion</span> & Care
            </h2>
            <div className="space-y-4 text-muted-foreground font-body text-lg leading-relaxed">
              <p>
                Welcome to Gustafson Floral, where every petal tells a story. For over two decades, 
                our family has been dedicated to bringing the beauty of nature into your most 
                precious moments.
              </p>
              <p>
                We believe flowers are more than just arrangements — they're expressions of love, 
                gratitude, and celebration. Each bouquet is handcrafted with the freshest seasonal 
                blooms, carefully selected at dawn from local growers who share our passion for quality.
              </p>
              <p>
                From intimate gatherings to grand celebrations, we pour our hearts into every 
                creation, ensuring that when you gift a Gustafson bouquet, you're sharing something 
                truly special.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-heading text-2xl italic text-foreground">
                The Gustafson Family
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Third generation florists
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;