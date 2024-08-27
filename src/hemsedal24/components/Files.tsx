"use client"
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from '../bilder.module.css'
import { useState } from "react";
import Popover from "./Popover"

export default function Files({ data }: any) {
  const [isPopoverOpen, setIsPopoverOpen] = useState("")

  const imageClicked = (key:string) => {
    setIsPopoverOpen(key);
  };

  const closePopoever = () => {
    setIsPopoverOpen("");
  };
    
    const [emblaRef] = useEmblaCarousel({loop: true, skipSnaps:true});
    const numFiles = data.files.length;
    console.log(data)
  return (
    <div className={styles.viewPort}>
      <div id="pictureContainer" className={styles.container}>
      {data.files.map((file:any) =>
      <div key={file.id} className={styles.image} onClick={()=>imageClicked(file.id)}>
        <img src={`https://utfs.io/f/${file.key}`} alt={`image of ${file.name}`}/></div>)}
      </div>
      {isPopoverOpen && (
        <Popover onClose={closePopoever}>
          <h2>New Content</h2>
          <p>This is the content of the popover.</p>
        </Popover>
      )}
      </div>
       );

      
      {/* <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
            {data.files.map((file:any) => 
            <div key = {file.id} className={styles.embla__slide}>
                <img style={{maxWidth:"100%"}}src={`https://utfs.io/f/${file.key}`} alt={`image of ${file.name}`}/>
                </div>
            )}
      </div>
            </div> */}
}