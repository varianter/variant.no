import anime from 'animejs';

export const fireworkAnimation = (x: number, y: number) => {
  anime({
    targets: '#firework',
    translateX: x,
    translateY: y,
    easing: 'linear',
    loop: true,
  });
};

export function firework(): void {
  throw new Error('Function not implemented.');
}
