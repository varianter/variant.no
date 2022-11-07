import { fireworkAnimation } from 'src/newyearParty/animation/fireworkAnimation';

const FireWork = (props: { color?: string }) => {
  return (
    <svg
      onClick={() => fireworkAnimation(Math.random() * 16, Math.random() * 600)}
      id="firework"
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="38"
      viewBox="0 0 23 38"
      fill="none"
    >
      <line
        x1="2.69852"
        y1="1.68929"
        x2="19.6985"
        y2="36.6893"
        stroke="#F5A4C4"
        stroke-width="6"
      />
    </svg>
  );
};

export default FireWork;
