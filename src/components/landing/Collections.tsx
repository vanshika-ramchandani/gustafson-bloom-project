import { motion } from "framer-motion";
import birthdayBouquet from "@/assets/birthday-bouquet.jpg";
import romanticRoses from "@/assets/romantic-roses.jpg";
import weddingFlorals from "@/assets/wedding-florals.jpg";
import sympathyFlowers from "@/assets/sympathy-flowers.jpg";

const collections = [
  {
    title: "Birthday Bouquets",
    description: "Celebrate another year with joyful, vibrant arrangements",
    image: birthdayBouquet,
    accent: "bg-peach/20",
  },
  {
    title: "Romantic Roses",
    description: "Express your deepest feelings with timeless elegance",
    image: romanticRoses,
    accent: "bg-primary/20",
  },
  {
    title: "Wedding Florals",
    description: "Make your special day bloom with enchanting beauty",
    image: weddingFlorals,
    accent: "bg-sage/20",
  },
  {
    title: "Sympathy & Care",
    description: "Gentle gestures of comfort during difficult times",
    image: sympathyFlowers,
    accent: "bg-accent",
  },
];

const Collections = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-4">
            Our Collections
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Blooms for Every <span className="italic text-primary">Moment</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections, each designed to perfectly 
            capture the sentiment of life's special occasions.
          </p>
        </motion.div>

        {/* Collection Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <h3 className="font-heading text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                    {collection.title}
                  </h3>
                  <p className="font-body text-sm text-primary-foreground/80">
                    {collection.description}
                  </p>
                  
                  {/* Hover Arrow */}
                  <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                    <span className="text-sm font-medium uppercase tracking-wide">
                      Explore
                    </span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>

                {/* Decorative accent */}
                <div className={`absolute top-4 right-4 w-12 h-12 ${collection.accent} rounded-full blur-xl opacity-60`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;