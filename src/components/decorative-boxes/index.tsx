import { AllColorNames, allColors } from '@variant/profile/lib/colors';
import style from './style.module.css';
type BoxProperties = {
  color: keyof AllColorNames | HexColorAsString;
  position: `${VerticalPosition}-${HorizontalPosition}` | NumericPosition;
  text?: string | undefined;
};

type NumericPosition = {
  horizontalPosition: number;
  verticalPosition: number;
};
type BoxSize = 'small' | 'medium' | 'large' | number;
type VerticalPosition = 'top' | 'topish' | 'middle' | 'bottomish' | 'bottom';
type HorizontalPosition = 'left' | 'leftish' | 'middle' | 'rightish' | 'right';
type HexColorAsString = `#${string}`;

export interface DecorativeBoxesProps
  extends React.ComponentPropsWithoutRef<any> {
  children: JSX.Element;
  boxSize?: BoxSize;
  box1Properties: BoxProperties;
  box2Properties: BoxProperties;
}

function DecorativeBoxes({
  children,
  boxSize = 'medium',
  box1Properties,
  box2Properties,
}: DecorativeBoxesProps) {
  const box1HorizontalDistance = calculateDistanceToSide(
    getNumericalBoxSize(boxSize),
    box1Properties.position,
    'left',
  );
  const box1VerticalDistance = calculateDistanceToSide(
    getNumericalBoxSize(boxSize),
    box1Properties.position,
    'top',
  );
  const box2HorizontalDistance = calculateDistanceToSide(
    getNumericalBoxSize(boxSize),
    box2Properties.position,
    'left',
  );
  const box2VerticalDistance = calculateDistanceToSide(
    getNumericalBoxSize(boxSize),
    box2Properties.position,
    'top',
  );

  return (
    <div className={style['main-container']}>
      <div
        className={style['decorative-box']}
        style={{
          width: getNumericalBoxSize(boxSize) + '%',
          backgroundColor: getColor(box1Properties.color),
          left: box1HorizontalDistance + '%',
          top: box1VerticalDistance + '%',
          transform: `translate(
            -${box1HorizontalDistance}%,
            -${box1VerticalDistance}%
            )`,
        }}
      >
        {box1Properties.text ? box1Properties.text : ''}
      </div>
      <div
        className={style['decorative-box']}
        style={{
          width: getNumericalBoxSize(boxSize) + '%',
          backgroundColor: getColor(box2Properties.color),
          left: box2HorizontalDistance + '%',
          top: box2VerticalDistance + '%',
          transform: `translate(
            -${box2HorizontalDistance}%,
            -${box2VerticalDistance}%
            )`,
        }}
      >
        {box2Properties.text ?? ''}
      </div>
      <div className={style['child-container']}>{children}</div>
    </div>
  );
}

export default DecorativeBoxes;

function calculateDistanceToSide(
  boxSize: number,
  position: BoxProperties['position'],
  distanceToCalculate: 'top' | 'left',
): number {
  if (typeof position === 'string') {
    const positionAsString =
      distanceToCalculate === 'top'
        ? position.split('-')[0]
        : position.split('-')[1];
    switch (positionAsString) {
      case 'left':
      case 'top':
        return 0;
      case 'leftish':
      case 'topish':
        return 25;
      case 'middle':
        return 50;
      case 'rightish':
      case 'bottomish':
        return 75;
      case 'right':
      case 'bottom':
        return 100;
    }
  } else if (
    // object with exact numerical position has been used
    'verticalPosition' in position &&
    'horizontalPosition' in position
  ) {
    if (distanceToCalculate === 'top') {
      return ((100 - boxSize) * position['verticalPosition']) / 100;
    } else if (distanceToCalculate === 'left') {
      return ((100 - boxSize) * position['horizontalPosition']) / 100;
    }
  }
  // Fallback + keeps typescript happy
  return 0;
}

// defines box sizes. 'medium' is the standard size.
function getNumericalBoxSize(boxSize: BoxSize): number {
  switch (boxSize) {
    case 'small':
      return 40;
    case 'medium':
      return 50;
    case 'large':
      return 60;
    default:
      return boxSize;
  }
}

function getColor(color: keyof AllColorNames | HexColorAsString): string {
  if (isHexColor(color)) {
    return color;
  } else if (color in allColors) {
    return allColors[color];
  }
  return '#000';
}

function isHexColor(color: string): color is HexColorAsString {
  return /(^#[a-f\d]{6}$)/.test(color.toLowerCase());
}
