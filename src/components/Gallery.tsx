import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&q=80",
    alt: "Gepflegter Rasen mit Blumenbeeten",
  },
  {
    src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80",
    alt: "Professioneller Heckenschnitt",
  },
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    alt: "Blühender Garten im Sommer",
  },
  {
    src: "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=600&q=80",
    alt: "Moderne Terrassengestaltung",
  },
  {
    src: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&q=80",
    alt: "Natürliche Gartenanlage",
  },
  {
    src: "https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?w=600&q=80",
    alt: "Gepflegte Wege und Beete",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galerie" className="relative py-20 pb-32 bg-section-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
            Einblicke
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Unsere Arbeiten
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Überzeugen Sie sich selbst von der Qualität unserer Arbeit. 
            Hier sehen Sie eine Auswahl unserer Projekte.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-soft focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium">{image.alt}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          {selectedImage && (
            <img
              src={selectedImage.replace("w=600", "w=1200")}
              alt="Vergrößerte Ansicht"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Wave Divider Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="hsl(0, 0%, 100%)"
            d="M0,48L80,53.3C160,59,320,69,480,74.7C640,80,800,80,960,69.3C1120,59,1280,37,1360,26.7L1440,16L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Gallery;
