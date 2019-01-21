const refNode = document.getElementById("blogReadMore");
const insertNode = (nodes = []) =>
  nodes.forEach(node => refNode.insertAdjacentHTML("beforebegin", node));

const compiledTemplate = template.bind(
  null,
  document.querySelector("#blogTemplate").innerHTML
);
const values =
  Object.values ||
  function values(object) {
    if (!object) return [];
    return Object.keys(object).map(key => object[key]);
  };

if ("fetch" in window) {
  // If not modern browser, just don't show posts.

  fetch("https://api.variant.blog/")
    .then(i => i.json())
    .then(function(data) {
      if (!data.success) {
        return logError(data.error);
      }
      showPosts(data);
    })
    .catch(logError);
}

function getImage(post) {
  const img = post.virtuals.previewImage;
  if (!img || !img.imageId) {
    return "/assets/illustrations/no-image.svg";
  }
  return "https://cdn-images-1.medium.com/max/1000/" + img.imageId;
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
  return text.replace(/\{\{([A-Z]+)\}\}/g, (_, key) => obj[key] || "");
}

// Just print error, doesn't matter if they don't show as we already link to
// all posts in pure HTML.
function logError(err) {
  console.error(err);
}

// Menu animation

let prevAngle = 8;

const el = document.querySelector(".hero__inner");
const elLink = el.querySelector(".hero__menu");
const hero = document.querySelector(".hero");
const thumbsUp = document.querySelector(".thumbsUp");

const calcOffset = () =>
  hero.offsetHeight - el.offsetHeight + elLink.offsetHeight + 10;
let elOffset = calcOffset();
throttle("resize", function() {
  elOffset = calcOffset();
});

function calculateAnimationPoints(scrollOffset) {
  const rect = el.getBoundingClientRect();
  const top = el.offsetTop - rect.height;
  const x = window.innerWidth;
  const y = rect.height - scrollOffset + top;
  const angle = Math.max(0, Math.min(8, (Math.atan(y / x) * 180) / Math.PI));

  el.classList.toggle(
    "hero__inner--offTop",
    scrollOffset > thumbsUp.offsetTop + thumbsUp.offsetHeight
  );

  if (prevAngle !== angle) {
    el.style.setProperty("--rotation", `-${angle}deg`);
    el.style.setProperty("--opacity", Math.max(0.7, 1 - angle / 10));
  }
  const isBelowHeader = scrollOffset >= elOffset + 5;
  hero.classList.toggle("hero--fixed", isBelowHeader);
  el.classList.toggle("hero__inner--fixed", isBelowHeader);
  prevAngle = angle;
}

throttle(
  "scroll",
  function(_, prevScroll) {
    calculateAnimationPoints(prevScroll);
  },
  () => window.scrollY
);

function throttle(eventName, fn, valueSelector) {
  let val = 0;
  let tick = false;
  window.addEventListener(eventName, function(e) {
    if (valueSelector) {
      val = valueSelector(e);
    }
    if (!tick) {
      window.requestAnimationFrame(function() {
        fn(e, val);
        tick = false;
      });
      tick = true;
    }
  });
}
