import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The wedding bouquet Gustafson created was beyond my dreams. Every detail was perfect, and the flowers lasted throughout our entire celebration. I couldn't have asked for anything more beautiful.",
    author: "Sarah & Michael",
    occasion: "Wedding Couple",
  },
  {
    quote: "I've been ordering from Gustafson for years now. Whether it's a birthday, anniversary, or just because — their arrangements never fail to bring joy. The quality and care in every bouquet is remarkable.",
    author: "Jennifer L.",
    occasion: "Loyal Customer",
  },
  {
    quote: "During a difficult time, the sympathy arrangement from Gustafson brought so much comfort. The flowers were elegant and the personal touch meant everything to our family.",
    author: "The Thompson Family",
    occasion: "Memorial Service",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30">
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
            Kind Words
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">
            What Our <span className="italic text-primary">Customers</span> Say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full border border-border/50">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-primary/30" />
                </div>

                {/* Quote Text */}
                <p className="font-body text-muted-foreground leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-6">
                  <p className="font-heading text-lg text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="font-body text-sm text-primary">
                    {testimonial.occasion}
                  </p>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;