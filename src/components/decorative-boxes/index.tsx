import style from './style.module.css';
type BoxProperties = {
  color: `--color-${DefaultColors}${ColorModifiers}` | HexColorAsString;
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
type DefaultColors = 'primary' | `secondary${1 | 2 | 3 | 4}`;
type ColorModifiers = '' | `__${'tint' | 'shade'}${1 | 2 | 3 | 4}`;
type HexColorAsString = `#${string}`;

export interface DecorativeBoxesProps
  extends React.ComponentPropsWithoutRef<any> {
  children: JSX.Element;
  boxSize?: BoxSize;
  box1Properties: BoxProperties;
  box2Properties: BoxProperties;
}

const DecorativeBoxes: React.FC<DecorativeBoxesProps> = ({
  children,
  boxSize = 'medium',
  box1Properties,
  box2Properties,
}) => {
  return (
    <div className={style['main-container']}>
      <div
        className={style['decorative-box']}
        style={{
          width: getNumericalBoxSize(boxSize) + '%',
          backgroundColor: `var(${box1Properties.color})`,
          left:
            calculateDistanceToSide(
              getNumericalBoxSize(boxSize),
              box1Properties.position,
              'left',
            ) + '%',
          top:
            calculateDistanceToSide(
              getNumericalBoxSize(boxSize),
              box1Properties.position,
              'top',
            ) + '%',
        }}
      >
        {box1Properties.text ? box1Properties.text : ''}
      </div>
      <div
        className={style['decorative-box']}
        style={{
          width: getNumericalBoxSize(boxSize) + '%',
          backgroundColor: `var(${box2Properties.color})`,
          left:
            calculateDistanceToSide(
              getNumericalBoxSize(boxSize),
              box2Properties.position,
              'left',
            ) + '%',
          top:
            calculateDistanceToSide(
              getNumericalBoxSize(boxSize),
              box2Properties.position,
              'top',
            ) + '%',
        }}
      >
        {box2Properties.text ? box2Properties.text : ''}
      </div>
      <div className={style['child-container']}>{children}</div>
    </div>
  );
};

export default DecorativeBoxes;

function calculateDistanceToSide(
  boxSize: number,
  position: `${VerticalPosition}-${HorizontalPosition}` | NumericPosition,
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
        return (100 - boxSize) * 0.25;
      case 'middle':
        return (100 - boxSize) * 0.5;
      case 'rightish':
      case 'bottomish':
        return (100 - boxSize) * 0.75;
      case 'right':
      case 'bottom':
        return 100 - boxSize;
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
      return 50;
    case 'medium':
      return 60;
    case 'large':
      return 70;
    default:
      return boxSize;
  }
}
