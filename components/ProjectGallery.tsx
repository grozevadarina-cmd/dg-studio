"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { ProjectGalleryBlock } from "@/types/project";
import { ProjectLightbox } from "@/components/ProjectLightbox";
import styles from "@/app/[locale]/projects/projects.module.css";

type Labels = { close: string; previous: string; next: string };

export function ProjectGallery({ blocks, labels }: { blocks: ProjectGalleryBlock[]; labels: Labels }) {
  const images = useMemo(() => blocks.flatMap((block) => block.images), [blocks]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className={styles.gallery}>
        {blocks.map((block, blockIndex) => {
          const startIndex = blocks.slice(0, blockIndex).reduce((total, item) => total + item.images.length, 0);
          return (
            <div className={`${styles.galleryBlock} ${styles[`gallery_${block.layout}`]}`} key={`${block.layout}-${blockIndex}`}>
              {block.images.map((image, imageIndex) => (
                <button className={styles.galleryImageButton} type="button" onClick={() => setActiveIndex(startIndex + imageIndex)} key={`${image.src}-${imageIndex}`}>
                  <Image className={styles.galleryImage} src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(min-width: 1024px) 70vw, 100vw" />
                </button>
              ))}
            </div>
          );
        })}
      </div>
      {activeIndex !== null && <ProjectLightbox images={images} activeIndex={activeIndex} onChange={setActiveIndex} onClose={() => setActiveIndex(null)} labels={labels} />}
    </>
  );
}
