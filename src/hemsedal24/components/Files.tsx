"use client"
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from '../bilder.module.css'

export default function Files({ data }: any) {
    const [emblaRef] = useEmblaCarousel({loop: true, skipSnaps:true});
    const numFiles = data.files.length;
    console.log(data)
  return (
      <div className={styles.embla} ref={emblaRef}>
        <div style={{'--num-files':numFiles} as React.CSSProperties}className={styles.embla__container}>
            {data.files.map((file:any) => 
            <div key = {file.id} className={styles.embla__slide}>
                
                <img style={{maxWidth:"100%"}}src={`https://utfs.io/f/${file.key}`} alt={`image of ${file.name}`}/>
                </div>
            )}
      </div>
            </div>
  );
}