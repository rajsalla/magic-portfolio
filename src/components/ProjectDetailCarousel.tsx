"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel } from "@once-ui-system/core";

const DEFAULT_SIZES = "(max-width: 960px) 100vw, 960px";
// iPad app screenshots are ~4:3; reserving this ratio keeps CLS at 0 while the
// `.project-carousel` CSS rule (object-fit: contain) shows the full image uncropped.
const DEFAULT_ASPECT_RATIO = "4 / 3";
const PRELOAD_TIMEOUT_MS = 6000;

interface ProjectCarouselProps {
  images: string[];
  priority?: boolean;
  sizes?: string;
  imageAlt?: string;
  aspectRatio?: string;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  images,
  priority = false,
  sizes = DEFAULT_SIZES,
  imageAlt,
  aspectRatio = DEFAULT_ASPECT_RATIO,
}) => {
  const isMulti = images.length > 1;
  const remainingImages = isMulti ? images.slice(1) : [];

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

  const autoplayReady =
    !isMulti || loadedCount >= remainingImages.length || timedOut;
  const markLoaded = () => setLoadedCount((count) => count + 1);
  const altBase = imageAlt ?? "Project image";

  return (
    <>
      {isMulti && !autoplayReady && (
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
          {remainingImages.map((image) => (
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

      <Carousel
        className="project-carousel"
        items={images.map((image, idx) => ({
          slide: image,
          alt: `${altBase}${imageAlt ? "" : ` ${idx + 1}`}`,
        }))}
        controls={isMulti}
        indicator={isMulti ? "line" : false}
        aspectRatio={aspectRatio}
        priority={priority}
        sizes={sizes}
        revealedByDefault
        play={
          isMulti
            ? {
                auto: autoplayReady,
                interval: 4000,
                controls: true,
                progress: false,
              }
            : undefined
        }
      />
    </>
  );
};

/** @deprecated Use ProjectCarousel */
export const ProjectDetailCarousel = ProjectCarousel;
