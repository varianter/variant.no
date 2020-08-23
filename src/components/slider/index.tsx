import ReactSlider from "react-slider";
import style from "./slider.module.css";

type SliderProps = {
  initial: number;
  to: number;
  from: number;
  onChange(value: number): void;
};

export default function Slider({ initial, to, from, onChange }: SliderProps) {
  return (
    <div>
      <ReactSlider
        className={style.container}
        thumbClassName={style.slider__handler}
        trackClassName={style.slider}
        renderThumb={(props, state) => (
          <div {...props}>
            <div className={style.year}>{state.valueNow}</div>
          </div>
        )}
        onChange={(e) => onChange(e as number)}
        defaultValue={initial}
        min={from}
        max={to}
      />
    </div>
  );
}
