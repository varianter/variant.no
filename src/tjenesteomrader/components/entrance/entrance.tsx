import { useEffect, useState } from 'react';
import style from './entrance.module.css';

const Entrance = (props: {
  blobPath: string;
  ServiceName: string;
  serviceText: string;
  buttonColor: string;
  buttonBgColor: string;
}) => {
  return (
    <div className={style.serviceArea}>
      <div className={style.serviceArea__top}>
        <img src={props.blobPath} alt="Digital tjeneste blob" />
        <h3>{props.ServiceName}</h3>
      </div>
      <div className={style.serviceArea__bottom}>
        <p>
          Risus, nulla dolor consequat ut ultrices. Egestas eget vitae, tellus
          volutpat nisi, volutpat diam tincidunt viverra.
        </p>
        <form action="/digitalTjeneste">
          <button
            style={{
              backgroundColor: props.buttonBgColor,
              color: props.buttonColor,
            }}
          >
            Les mer om {props.ServiceName}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Entrance;
