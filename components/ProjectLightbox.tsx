"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { ProjectImage } from "@/types/project";
import styles from "@/app/[locale]/projects/projects.module.css";

type Props = {
  images: ProjectImage[];
  activeIndex: number;
  onChange: (index: number) => void;
  onClose: () => void;
  labels: { close: string; previous: string; next: string };
};

export function ProjectLightbox({ images, activeIndex, onChange, onClose, labels }: Props) {
  const touchStart = useRef<number | null>(null);
  const previous = () => onChange((activeIndex - 1 + images.length) % images.length);
  const next = () => onChange((activeIndex + 1) % images.length);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  const image = images[activeIndex];
  return (
    <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={image.alt} onClick={onClose} onTouchStart={(event) => { touchStart.current = event.changedTouches[0].clientX; }} onTouchEnd={(event) => { if (touchStart.current === null) return; const delta = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(delta) > 45) { if (delta > 0) previous(); else next(); } touchStart.current = null; }}>
      <button className={styles.lightboxClose} type="button" onClick={onClose} aria-label={labels.close}>×</button>
      <button className={`${styles.lightboxArrow} ${styles.lightboxPrevious}`} type="button" onClick={(event) => { event.stopPropagation(); previous(); }} aria-label={labels.previous}>‹</button>
      <div className={styles.lightboxImageFrame} onClick={(event) => event.stopPropagation()}>
        <Image className={styles.lightboxImage} src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="100vw" priority />
      </div>
      <button className={`${styles.lightboxArrow} ${styles.lightboxNext}`} type="button" onClick={(event) => { event.stopPropagation(); next(); }} aria-label={labels.next}>›</button>
    </div>
  );
}
