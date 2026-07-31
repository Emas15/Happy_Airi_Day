"use client";

import { motion } from "framer-motion";
import { A11y, EffectCoverflow, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { photos } from "@/constants/love-story";
import { fadeUp } from "@/utils/motion";
import { PhotoArt } from "./PhotoArt";
import { SectionShell } from "./SectionShell";

export function MemoryAlbumSection() {
  return (
    <SectionShell
      id="album"
      eyebrow="Swipe through the soft parts"
      title="Memory album"
      description="Photos, dates, and captions move like a tiny gallery of favorite days."
    >
      <motion.div className="album-wrap" variants={fadeUp}>
        <Swiper
          modules={[EffectCoverflow, Keyboard, Pagination, A11y]}
          effect="coverflow"
          grabCursor
          centeredSlides
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          slidesPerView={1.08}
          spaceBetween={18}
          coverflowEffect={{
            rotate: 12,
            stretch: 0,
            depth: 120,
            modifier: 1.15,
            slideShadows: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1.6, spaceBetween: 22 },
            900: { slidesPerView: 2.35, spaceBetween: 28 },
          }}
          className="memory-swiper"
        >
          {photos.map((photo) => (
            <SwiperSlide key={photo.id}>
              <article className="memory-card">
                <PhotoArt photo={photo} className="aspect-[4/5]" />
                <div className="memory-card-copy">
                  <span>{photo.date}</span>
                  <h3>{photo.title}</h3>
                  <p>{photo.description}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </SectionShell>
  );
}
