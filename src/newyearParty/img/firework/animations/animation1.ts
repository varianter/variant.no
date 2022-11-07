import anime from 'animejs';

export const animation1 = (id: string) => {
  const path = anime.path('#' + id + 'path');
  var tl = anime.timeline({
    loop: true,
  });

  tl.add({
    targets: '#firework',

    translateX: path('x'),
    translateY: path('y'),
    rotate: path('angle'),
    easing: 'linear',
  });
  tl.add({
    targets: '#firework',
    width: 0,
    height: 0,
    duration: 200,
  });
  tl.add({
    targets: '#blob',
    width: 300,
    height: 333,
    easing: 'linear',
    duration: 200,
  });
  tl.add({
    targets: '#blob',
    width: 300,
    height: 333,
    easing: 'linear',
    duration: 500,
  });
  tl.add({
    targets: '#blob',
    opacity: 0,
    translateY: 10,
    duration: 1000,
  });

  return tl;
};
