import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Maximize2, Sparkles } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Dynamically import ALL images placed in src/assets/gallery/
const imageModules = import.meta.glob<{ default: string }>(
  "../assets/gallery/*.{jpeg,jpg,png,webp,JPEG,JPG,PNG,WEBP}",
  { eager: true }
);

export const userGalleryPhotos = Object.entries(imageModules).map(
  ([path, module], index) => ({
    id: `photo-${index + 1}`,
    img: module.default,
  })
);

const title = "Photo Gallery | ARZAQ EXPRESS INDUSTRIAL Est. | Saudi Arabia";
const description = "Official Photo Gallery of ARZAQ EXPRESS INDUSTRIAL Est.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [activeItem, setActiveItem] = useState<typeof userGalleryPhotos[0] | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#F36F21] selection:text-white">
      <Nav />

      <main className="pt-24 pb-16">
        {/* Header Hero Banner */}
        <section className="bg-gradient-to-b from-[#F36F21]/10 via-amber-500/5 to-slate-50 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <div className="mx-auto max-w-[1280px]">
            <Badge className="bg-[#F36F21] text-white font-bold text-xs uppercase tracking-wider mb-3 gap-1.5 py-1 px-3 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Official Media & Fleet Gallery ({userGalleryPhotos.length} Photos)</span>
            </Badge>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              <span className="text-[#F36F21]">ARZAQ</span>{" "}
              <span className="text-black">EXPRESS</span> Gallery
            </h1>
          </div>
        </section>

        {/* Pure Photo Grid — ALL PHOTOS FROM SRC/ASSETS/GALLERY */}
        <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {userGalleryPhotos.map((item, i) => (
              <Reveal key={item.id} delay={(i % 6) * 0.05}>
                <Card
                  onClick={() => setActiveItem(item)}
                  className="group relative aspect-[4/3] w-full overflow-hidden border-slate-200/90 bg-white cursor-pointer hover:shadow-xl hover:border-[#F36F21]/50 transition-all duration-300 rounded-2xl flex items-center justify-center p-3 shadow-sm hover:scale-[1.02]"
                >
                  <img
                    src={item.img}
                    alt="Arzaq Express Site Photo"
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 rounded-full bg-slate-900/80 p-2.5 text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Pure Image Lightbox Preview Modal */}
        <Dialog open={activeItem !== null} onOpenChange={(open) => !open && setActiveItem(null)}>
          {activeItem && (
            <DialogContent className="max-w-[94vw] sm:max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-slate-200 text-slate-900 p-3 sm:p-5 rounded-2xl shadow-2xl">
              <DialogHeader className="hidden">
                <DialogTitle>Arzaq Express Photo Preview</DialogTitle>
              </DialogHeader>

              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-50 p-2 sm:p-4 border border-slate-200 flex items-center justify-center">
                <img
                  src={activeItem.img}
                  alt="Arzaq Express Site Photo Preview"
                  className="h-full w-full object-contain"
                />
              </div>
            </DialogContent>
          )}
        </Dialog>
      </main>

      <Footer />
    </div>
  );
}
