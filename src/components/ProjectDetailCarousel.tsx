"use client";

import { Carousel } from "@once-ui-system/core";

interface ProjectDetailCarouselProps {
  images: string[];
  priority?: boolean;
}

export const ProjectDetailCarousel: React.FC<ProjectDetailCarouselProps> = ({
  images,
  priority = false,
}) => {
  if (images.length === 0) return null;

  const carouselItems = images.map((image, idx) => ({
    slide: image,
    alt: `Project image ${idx + 1}`,
  }));

  return (
    <Carousel
      items={carouselItems}
      controls={images.length > 1}
      indicator={images.length > 1 ? "line" : false}
      aspectRatio="original"
      priority={priority}
      sizes="(max-width: 960px) 100vw, 960px"
      play={
        images.length > 1
          ? {
              auto: true,
              interval: 4000,
              controls: true,
              progress: false,
            }
          : undefined
      }
    />
  );
};
