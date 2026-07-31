"use client";

import { motion } from "framer-motion";
import { A11y, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { scrapbookPages } from "@/constants/love-story";
import { fadeUp } from "@/utils/motion";
import { SectionShell } from "./SectionShell";

export function ScrapbookSection() {
  return (
    <SectionShell
      id="scrapbook"
      eyebrow="Taped edges and tiny sparks"
      title="Digital scrapbook"
      description="A handcrafted collage for all the little pieces that become a love story."
    >
      <motion.div className="scrapbook-wrap" variants={fadeUp}>
        <Swiper
          modules={[Keyboard, Pagination, A11y]}
          slidesPerView={1}
          spaceBetween={24}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          className="scrapbook-swiper"
        >
          {scrapbookPages.map((page) => (
            <SwiperSlide key={page.id}>
              <article className="scrapbook-page">
                <div className="scrapbook-page-header">
                  <span>{page.title}</span>
                  <p>{page.caption}</p>
                </div>
                <div className="scrapbook-canvas">
                  {page.items.map((item, index) => {
                    const background = item.gradient
                      ? `linear-gradient(135deg, ${item.gradient.from}, ${item.gradient.via}, ${item.gradient.to})`
                      : undefined;

                    return (
                      <div
                        key={`${page.id}-${index}`}
                        className={`scrapbook-item scrapbook-${item.kind}`}
                        style={{
                          left: `${item.x}%`,
                          top: `${item.y}%`,
                          rotate: `${item.rotation}deg`,
                          background,
                        }}
                      >
                        <span className="tape tape-top" aria-hidden="true" />

                        {/* 👇 Photo হলে Image দেখাবে, অন্যথায় শুধু Text */}
                        {item.kind === "photo" && item.src ? (
                          <div className="scrapbook-photo-wrapper flex flex-col items-center gap-1 p-1">
                            <img
                              src={item.src}
                              alt={item.text || "Scrapbook memory"}
                              className="w-full h-auto max-h-32 object-cover rounded shadow-sm"
                            />
                            {item.text && (
                              <span className="text-xs font-medium">
                                {item.text}
                              </span>
                            )}
                          </div>
                        ) : (
                          <span>{item.text}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </SectionShell>
  );
}
