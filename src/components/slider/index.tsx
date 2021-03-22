import style from './slider.module.css';
import dynamic from 'next/dynamic';
import { and } from 'src/utils/css';

type SliderProps = {
  initial: number;
  to: number;
  from: number;
  onChange(value: number): void;
  value: number;
  label: string;
};

const ReactSlider = dynamic(() => import('react-slider'), {
  ssr: false,
  loading: () => (
    <div className={style.container}>
      <div className={and(style.slider, style.temp__slider)}>
        <div className={and(style.slider__handler, style.temp__handler)}></div>
      </div>
    </div>
  ),
});
export default function Slider({
  initial,
  to,
  from,
  onChange,
  value,
  label,
}: SliderProps) {
  return (
    <div>
      <ReactSlider
        className={style.container}
        thumbClassName={style.slider__handler}
        trackClassName={style.slider}
        ariaLabel={label}
        renderThumb={(props, state) => (
          <div {...props}>
            <div className={style.year}>{state.valueNow}</div>
          </div>
        )}
        onChange={(e) => onChange(e as number)}
        value={value}
        defaultValue={initial}
        min={from}
        max={to}
      />
    </div>
  );
}
