import anime from 'animejs';

export const animation1 = () => {
  const path = anime.path('#path path');
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
};

export const animation2 = () => {
  const path = anime.path('#path1 path');
  var tl = anime.timeline({
    loop: true,
  });

  tl.add({
    targets: '#firework1',

    translateX: path('x'),
    translateY: path('y'),
    rotate: path('angle'),
    easing: 'linear',
    duration: 2000,
  });
  tl.add({
    targets: '#firework1',
    width: 0,
    height: 0,
    duration: 200,
  });
  tl.add({
    targets: '#blob1',
    width: 300,
    height: 333,
    easing: 'linear',
    duration: 200,
  });
  tl.add({
    targets: '#blob1',
    width: 300,
    height: 333,
    easing: 'linear',
    duration: 500,
  });
  tl.add({
    targets: '#blob1',
    opacity: 0,
    translateY: 10,
    duration: 1000,
  });
};
