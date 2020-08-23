import React from 'react';
import style from './radio.module.css';

type RadioProps<T> = {
  id: string;
  changed(data: T): void;
  isSelected: boolean;
  label: string;
  name: string;
  value: T;
};
export default function RadioButton<T>(props: RadioProps<T>) {
  return (
    <div className={style.container}>
      <input
        className={style.input}
        id={props.id}
        onChange={() => props.changed(props.value)}
        value={String(props.value)}
        type="radio"
        name={props.name}
        checked={props.isSelected}
      />
      <label className={style.label} htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
}
