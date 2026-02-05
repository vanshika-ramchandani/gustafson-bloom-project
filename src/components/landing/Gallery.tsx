import { motion } from "framer-motion";
import galleryShop from "@/assets/gallery-shop.jpg";
import galleryArranging from "@/assets/gallery-arranging.jpg";
import galleryWrapped from "@/assets/gallery-wrapped.jpg";
import galleryCenterpiece from "@/assets/gallery-centerpiece.jpg";
import birthdayBouquet from "@/assets/birthday-bouquet.jpg";
import weddingFlorals from "@/assets/wedding-florals.jpg";

const galleryImages = [
  { src: galleryArranging, alt: "Florist arranging flowers", span: "md:col-span-1 md:row-span-2" },
  { src: galleryShop, alt: "Our flower shop", span: "md:col-span-1" },
  { src: galleryWrapped, alt: "Wrapped bouquet", span: "md:col-span-1" },
  { src: galleryCenterpiece, alt: "Table centerpiece", span: "md:col-span-1 md:row-span-2" },
  { src: birthdayBouquet, alt: "Birthday bouquet", span: "md:col-span-1" },
  { src: weddingFlorals, alt: "Wedding florals", span: "md:col-span-1" },
];

const Gallery = () => {
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
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-4">
            Our Gallery
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">
            A Glimpse of <span className="italic text-gold">Beauty</span>
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative overflow-hidden rounded-xl ${image.span} group cursor-pointer`}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-300" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-background/90 rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-5 h-5 text-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;