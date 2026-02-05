import { motion } from "framer-motion";
import { Flower2, Scissors, Truck, MessageSquareHeart } from "lucide-react";

const features = [
  {
    icon: Flower2,
    title: "Fresh Daily Flowers",
    description: "Handpicked blooms delivered fresh every morning from local growers",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Scissors,
    title: "Handcrafted Arrangements",
    description: "Each bouquet is artfully designed by our expert florists with care",
    color: "text-sage",
    bg: "bg-sage/10",
  },
  {
    icon: Truck,
    title: "Same-Day Delivery",
    description: "Order by 2pm for beautiful same-day delivery across the city",
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    icon: MessageSquareHeart,
    title: "Personalized Notes",
    description: "Add a heartfelt handwritten message to make your gift extra special",
    color: "text-peach",
    bg: "bg-peach/20",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sage font-body text-sm uppercase tracking-[0.2em] mb-4">
            Why Choose Us
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">
            The Gustafson <span className="italic text-sage">Promise</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 h-full border border-border/50 hover:border-primary/20">
                {/* Icon */}
                <div className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;