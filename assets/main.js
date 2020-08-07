const refNode = document.getElementById('blogReadMore');
const insertNode = (nodes = []) =>
  nodes.forEach(node => refNode.insertAdjacentHTML('beforebegin', node));

const compiledTemplate = template.bind(
  null,
  document.querySelector('#blogTemplate').innerHTML
);
const values =
  Object.values ||
  function values(object) {
    if (!object) return [];
    return Object.keys(object).map(key => object[key]);
  };

if ('fetch' in window) {
  // If not modern browser, just don't show posts.

  fetch('https://api.variant.blog/')
    .then(i => i.json())
    .then(function(data) {
      if (!data.success) {
        return logError(data.error);
      }
      showPosts(data.posts);
    })
    .catch(logError);
}

function getImage(post) {
  const img = post.virtuals.previewImage;
  if (!img || !img.imageId) {
    return '/assets/illustrations/no-image.svg';
  }
  return 'https://cdn-images-1.medium.com/max/1000/' + img.imageId;
}

function toTemplateObject(post) {
  return {
    IMAGE: getImage(post),
    TITLE: post.title,
    URL: `https://medium.com/variant-as/${post.uniqueSlug}`,
    DESCRIPTION: post.previewContent.subtitle
  };
}

function showPosts(posts = []) {
  insertNode(
    values(posts)
      .map(toTemplateObject)
      .map(compiledTemplate)
  );
}

function template(text, obj) {
  return text.replace(/\{\{([A-Z]+)\}\}/g, (_, key) => obj[key] || '');
}

// Just print error, doesn't matter if they don't show as we already link to
// all posts in pure HTML.
function logError(err) {
  console.error(err);
}

// Menu animation
const el = document.querySelector('.hero__inner');
const elLink = el.querySelector('.hero__menu');
const hero = document.querySelector('.hero');
const thumbsUp = document.querySelector('.thumbsUp');

/* To nye variabler. */
let triggerPoint = el.offsetTop;
let optimaltriggerPoint = true;

function calculateAnimationPoints(scrollOffset) {
  // NB: Har endret litt på CSS filen for å få en mer sømløs overgang, som feks gjøre at hero__menu får en animasjon også.
  if (scrollOffset >= triggerPoint) {
    // Avbryte hvis headeren allerede er fixed - slippe litt unødvendig utførelse av kode.
    if (
      hero.classList.contains('hero--fixed') &&
      el.classList.contains('hero__inner--fixed')
    ) {
      return;
    }

    hero.classList.add('hero--fixed');
    el.classList.add('hero__inner--fixed');

    // Setter rotation og opacity til sluttverdiene sine hvis man er forbi triggerPoint, ettersom hvis noen scroller jækla fort kan det hende at scroll-eventen ikke rekker å sette riktig verdi.
    el.style.setProperty('--rotation', '0deg');
    el.style.setProperty('--opacity', '1');
  } else {
    const rect = el.getBoundingClientRect();
    const top = el.offsetTop - rect.height;
    const x = window.innerWidth;
    const y = rect.height - scrollOffset + top;
    const angle = Math.max(0, Math.min(8, (Math.atan(y / x) * 180) / Math.PI));

    el.style.setProperty('--rotation', `-${angle}deg`);
    el.style.setProperty('--opacity', Math.max(0.7, 1 - angle / 10));

    // Man kan bruke toggle, men å bruke kun add() og remove() på classList går helt fint (jeg synes det er en lettere løsning).
    // Hentet fra MDN om classList.remove(): "If the string is not in the list, no error is thrown, and nothing happens."
    hero.classList.remove('hero--fixed');
    el.classList.remove('hero__inner--fixed');

    // Hvis brukeren har scrollet forbi triggerPoint, og deretter resizer nettleseren sin vil ikke el.offsetTop gi noe brukbart av verdi (se i resize eventListener hva triggerPoint blir midlertidig).
    // Så hvis ikke optimaltriggerPoint er satt, blir det gjort her for å oppdatere triggerPoint til beste verdi.
    if (!optimaltriggerPoint) {
      triggerPoint = el.offsetTop;
      optimaltriggerPoint = true;
    }
  }
}

/***
 *
 * Debouncing for scrolling og resizing, liker disse :3 - Credit til Chris Ferdinandi.
 *
 ***/

// Setup a timer
let scrollTimeout;

// Listen for resize events
window.addEventListener(
  'scroll',
  function(event) {
    // If there's a timer, cancel it
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }

    // Setup the new requestAnimationFrame()
    scrollTimeout = window.requestAnimationFrame(function() {
      calculateAnimationPoints(window.scrollY);
    });
  },
  false
);

// Setup a timer
let resizeTimeout;

// Listen for resize events
window.addEventListener(
  'resize',
  function(event) {
    // If timer is null, reset it to 66ms and run your functions.
    // Otherwise, wait until timer is cleared
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;

        // Hvis navbaren er fixed når nettleseren resizes, betyr det at man er forbi toppen av siden hvor den beste triggerPoint verdien kan bli satt.
        // Dermed blir en midlertidig triggerPoint-verdi utregnet og optimaltriggerPoint blir false, slik at den kan settes senere hvis trengs.
        if (hero.classList.contains('hero--fixed')) {
          triggerPoint = hero.offsetHeight - el.scrollHeight;
          optimaltriggerPoint = false;
        } else {
          triggerPoint = el.offsetTop;
        }
      }, 66);
    }
  },
  false
);
