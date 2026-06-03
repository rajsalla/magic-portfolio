"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel, Skeleton } from "@once-ui-system/core";

const DEFAULT_SIZES = "(max-width: 960px) 100vw, 960px";
const PRELOAD_TIMEOUT_MS = 6000;

interface ProjectCarouselProps {
  images: string[];
  priority?: boolean;
  sizes?: string;
  imageAlt?: string;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  images,
  priority = false,
  sizes = DEFAULT_SIZES,
  imageAlt,
}) => {
  const isMulti = images.length > 1;
  const [loadedCount, setLoadedCount] = useState(0);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    if (!isMulti) return;
    setLoadedCount(0);
    setTimedOut(false);
    const timer = setTimeout(() => setTimedOut(true), PRELOAD_TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, [isMulti]);

  if (images.length === 0) return null;

  const ready = !isMulti || loadedCount >= images.length || timedOut;
  const markLoaded = () => setLoadedCount((count) => count + 1);
  const altBase = imageAlt ?? "Project image";

  return (
    <>
      {isMulti && !ready && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            width: 0,
            height: 0,
            overflow: "hidden",
            opacity: 0,
            pointerEvents: "none",
          }}
        >
          {images.map((image) => (
            <Image
              key={image}
              src={image}
              alt=""
              width={960}
              height={540}
              sizes={sizes}
              onLoad={markLoaded}
              onError={markLoaded}
            />
          ))}
        </div>
      )}

      {ready ? (
        <Carousel
          items={images.map((image, idx) => ({
            slide: image,
            alt: `${altBase}${imageAlt ? "" : ` ${idx + 1}`}`,
          }))}
          controls={isMulti}
          indicator={isMulti ? "line" : false}
          aspectRatio="original"
          priority={priority}
          sizes={sizes}
          revealedByDefault
          play={
            isMulti
              ? {
                  auto: true,
                  interval: 4000,
                  controls: true,
                  progress: false,
                }
              : undefined
          }
        />
      ) : (
        <Skeleton
          shape="block"
          radius="l"
          fillWidth
          style={{ aspectRatio: "16 / 9", minHeight: "12rem" }}
        />
      )}
    </>
  );
};

/** @deprecated Use ProjectCarousel */
export const ProjectDetailCarousel = ProjectCarousel;
