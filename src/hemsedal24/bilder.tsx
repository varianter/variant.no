import {UploadDropzone, UploadButton} from "../../src/utils/uploadthing";
import styles from './bilder.module.css'
import React, { useEffect, useState } from 'react'
import Files from './components/Files'
import "@uploadthing/react/styles.css";

  


  export default function Bilder() {

    const fetchFiles = async () => {
        const response = await fetch('/api/files')
        const data = await response.json();
        console.log(data);
        setFilesData(data);
    };

    const [filesData, setFilesData] = useState(null);
    useEffect(()=> {
        
        fetchFiles();
    },[]);
    return (
      <main>
        {filesData && (
            <div>
                <Files data = {filesData}/>
            </div>
        )}
        <div className={styles.uploadDropZone}>
        <UploadButton className={styles.customButton}
        /**
         * @see https://docs.uploadthing.com/api-reference/react#uploadbutton
         */
        endpoint="videoAndImage"
        onClientUploadComplete={(res:any) => {
            fetchFiles()
          }}
       
      />
{/*         <UploadDropzone
          endpoint="videoAndImage"
          onClientUploadComplete={(res:any) => {
            fetchFiles()
          }}
          onUploadBegin={() => {
            console.log("upload begin");
          }}
        /> */}
        </div>
      </main>

    );
  }