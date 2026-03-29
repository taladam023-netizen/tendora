"use client";

import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import React, { useState, useId, useRef } from "react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PHOTOS = [
  {
    id: "photo-1",
    src: "/cat-colors.jpg",
    alt: "AirTag Cat Collar - All Colors",
    rotation: -15,
    x: -90,
    y: 10,
    zIndex: 10,
  },
  {
    id: "photo-2",
    src: "/cat-blue.jpg",
    alt: "Blue AirTag Cat Collar",
    rotation: -3,
    x: -10,
    y: -15,
    zIndex: 20,
  },
  {
    id: "photo-3",
    src: "/cat-black.jpg",
    alt: "Black AirTag Cat Collar",
    rotation: 12,
    x: 75,
    y: 5,
    zIndex: 30,
  },
  {
    id: "photo-4",
    src: "/cat-orange.jpg",
    alt: "Orange AirTag Cat Collar",
  },
  {
    id: "photo-5",
    src: "/cat-red.jpg",
    alt: "Red AirTag Cat Collar",
  },
  {
    id: "photo-6",
    src: "/cat-pink.jpg",
    alt: "Pink AirTag Cat Collar",
  },
  {
    id: "photo-7",
    src: "/cat-yellow.jpg",
    alt: "Yellow AirTag Cat Collar",
  },
  {
    id: "photo-8",
    src: "/cat-buckle.jpg",
    alt: "Safety Breakaway Buckle",
  },
];

const transition = {
  type: "spring",
  stiffness: 160,
  damping: 18,
  mass: 1,
} as const;

export function ExpandableGallery() {
  const [isExpanded, setIsExpanded] = useState(false);
  const layoutGroupId = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  useOutsideClick(containerRef, () => {
    if (isExpanded) setIsExpanded(false);
  });

  return (
    <section className="relative w-full px-4 md:px-8 flex flex-col items-center justify-start min-h-[600px] overflow-hidden py-16">
      <div className="absolute inset-0 z-0 overflow-hidden"
        style={{
          maskImage: "linear-gradient(180deg, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage: "linear-gradient(180deg, transparent, black 20%, black 80%, transparent)",
        }}
      >
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-25">
          <source src="/section-bg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 text-center mb-4">
        <h2 className="text-3xl md:text-4xl font-black mb-2">
          Happy Customers <span className="text-gradient">Share Their Photos</span>
        </h2>
        <p className="text-gray-400 text-sm">Tap the photos to view the full gallery</p>
      </div>

      <LayoutGroup id={layoutGroupId}>
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-full h-10 flex items-center px-4 mb-2">
            <AnimatePresence>
              {isExpanded && (
                <motion.button
                  key="back-button"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  onClick={() => setIsExpanded(false)}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-all group"
                >
                  <div className="p-2 rounded-full bg-brand-card border border-brand-border group-hover:bg-brand-orange/20 transition-colors">
                    <ArrowLeft size={18} />
                  </div>
                  <span className="font-medium text-sm">Back</span>
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            ref={containerRef}
            layout
            className={cn(
              "relative w-full",
              isExpanded
                ? "grid grid-cols-2 lg:grid-cols-3 gap-4 px-2"
                : "flex flex-col items-center justify-start pt-4"
            )}
            transition={transition}
          >
            <div
              className={cn(
                "relative",
                isExpanded
                  ? "contents"
                  : "h-[340px] w-full flex items-center justify-center mb-8"
              )}
            >
              {PHOTOS.map((photo, index) => {
                const isPrimary = index < 3;
                if (!isPrimary && !isExpanded) return null;

                return (
                  <motion.div
                    key={`card-${photo.id}`}
                    layoutId={`card-container-${photo.id}`}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: !isExpanded ? photo.rotation || 0 : 0,
                      x: !isExpanded ? photo.x || 0 : 0,
                      y: !isExpanded ? photo.y || 0 : 0,
                      zIndex: !isExpanded ? photo.zIndex || index : 10,
                    }}
                    transition={transition}
                    whileHover={
                      !isExpanded
                        ? {
                            scale: 1.05,
                            y: (photo.y || 0) - 15,
                            rotate: (photo.rotation || 0) * 0.8,
                            zIndex: 50,
                            transition: { type: "spring", stiffness: 400, damping: 25 },
                          }
                        : { scale: 1.02 }
                    }
                    className={cn(
                      "cursor-pointer overflow-hidden border-4 border-brand-border shadow-xl",
                      isExpanded
                        ? "relative aspect-square rounded-2xl"
                        : "absolute w-36 h-36 md:w-48 md:h-48 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                    )}
                    onClick={() => !isExpanded && setIsExpanded(true)}
                  >
                    <motion.div
                      layoutId={`image-inner-${photo.id}`}
                      layout="position"
                      className="w-full h-full relative"
                      transition={transition}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover select-none pointer-events-none"
                        sizes={isExpanded ? "(max-width: 1024px) 50vw, 33vw" : "200px"}
                        priority={isPrimary}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            <AnimatePresence>
              {!isExpanded && (
                <motion.div
                  key="stack-content"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center max-w-xl space-y-5"
                >
                  <p className="text-gray-400 text-base leading-relaxed">
                    Thousands of customers already love it.
                    <br />
                    <span className="text-white font-semibold">Join them before stock runs out.</span>
                  </p>
                  <Button
                    onClick={() => setIsExpanded(true)}
                    className="rounded-full px-6 py-5 font-bold group gap-2"
                  >
                    View All Photos
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </LayoutGroup>
    </section>
  );
}

export default ExpandableGallery;
