"use client"
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from '../bilder.module.css'
import { useState } from "react";
import Popover from "./Popover"
export default function Files({ data }: any) {
  const [isPopoverOpen, setIsPopoverOpen] = useState("")
  const [startIndex, setStartIndex]= useState(1)

  const imageClicked = (key:string, index:number) => {
    setStartIndex(index)
    setIsPopoverOpen(key);
    
  };

  const closePopoever = () => {
    setIsPopoverOpen("");
  };
    
    const [emblaRef] = useEmblaCarousel({loop: true, skipSnaps:true, startIndex:startIndex});
  return (
    <div className={styles.viewPort}>
      
      {data.files.length > 0 ?
      <div id="pictureContainer" className={styles.container}>
      {data.files.map((file:any, index:number) =>
      <div key={file.id} className={styles.image} onClick={()=>imageClicked(file.id, index)} tabIndex={0} role="button" aria-label='open picture' onKeyDown={()=>imageClicked(file.id, index)}>
        <img loading="lazy" src={`https://utfs.io/f/${file.key}`} alt={` ${file.name}`}/></div>)} </div>  :<div className={styles.nopictures}><h4>Ingen bilder ennå!</h4></div>}
     
      {isPopoverOpen && (
        <Popover onClose={closePopoever}>
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
              {data.files.map((file:any) =>
              <div key = {file.id} className={styles.embla__slide}>
                <img loading="lazy"  src={`https://utfs.io/f/${file.key}`} alt={`${file.name}`}/>
                </div>
              )}
            </div>
          </div>
        </Popover>
      )}
      </div>
       );
}