import Styles from "./colors.module.css";

export const ColorBox = ({ name, color }: { name: string; color: string }) => (
  <div className={Styles.colorBox}>
    <div>
      <p>
        <b>Name:</b> {name}
      </p>
      <p>
        <b>Variable:</b> {color}
      </p>
    </div>
    <div
      className={Styles.color}
      style={{
        backgroundColor: `var(${color})`,
        background: `var(${color})`,
      }}
    />
  </div>
);
