"use client";

import { useState, useEffect } from "react";
import { Dialog, Carousel, IconButton, Row } from "@once-ui-system/core";

interface ImageLightboxProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (images.length === 0) return null;

  const carouselItems = images.map((image, idx) => ({
    slide: image,
    alt: `Image ${idx + 1}`,
  }));

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title=""
      description=""
      style={{
        maxWidth: "90vw",
        maxHeight: "90vh",
        background: "var(--neutral-alpha-weak)",
      }}
    >
      <Row fillWidth horizontal="end" paddingBottom="m">
        <IconButton
          icon="close"
          size="m"
          variant="ghost"
          onClick={onClose}
          tooltip="Close (Esc)"
        />
      </Row>
      <Carousel
        items={carouselItems}
        controls={images.length > 1}
        indicator={images.length > 1 ? "line" : false}
        aspectRatio="16 / 9"
        fill
        sizes="90vw"
      />
    </Dialog>
  );
};
