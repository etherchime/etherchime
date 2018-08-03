export function hasClass(target, className) {
  return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}

export function mod(n, m) {
  return ((n % m) + m) % m;
}

export function onEnter(e, foo) {
  // Use the the click version of this function should user hit enter.
  var key = e.which || e.keyCode;
  if (key === 13) {
    foo();
    return;
  }
}

export function toggleStoryFilters(e) {
  e.preventDefault();

  var asideToggle = document.getElementById("asideToggle");

  var nav = document.getElementById("navRoot");
  nav.classList.toggle("is-four-fifths");

  var asideIcon = asideToggle.getElementsByTagName("i")[0];
    asideIcon.classList.toggle("fa-expand");
    asideIcon.classList.toggle("fa-compress");

  var asideRootTouch = document.getElementById("asideRootTouch");
    asideRootTouch.classList.toggle("is-hidden");

  var asideRootDesktop = document.getElementById("asideRootDesktop");
    asideRootDesktop.classList.toggle("is-hidden");

  var appContainer = document.getElementById("appContainer");
  appContainer.classList.toggle("is-four-fifths-desktop");
}

export function showStoryFilters(e) {
  var asideToggle = document.getElementById("asideToggle");

  var nav = document.getElementById("navRoot");
  nav.classList.add("is-four-fifths");

  var asideIcon = asideToggle.getElementsByTagName("i")[0];
    asideIcon.classList.remove("fa-expand");
    asideIcon.classList.add("fa-compress");

  var asideRootTouch = document.getElementById("asideRootTouch");
    asideRootTouch.classList.remove("is-hidden");

  var asideRootDesktop = document.getElementById("asideRootDesktop");
    asideRootDesktop.classList.remove("is-hidden");

  var appContainer = document.getElementById("appContainer");
  appContainer.classList.add("is-four-fifths-desktop");
}

export function hideStoryFilters(e) {
  var asideToggle = document.getElementById("asideToggle");

  var nav = document.getElementById("navRoot");
  nav.classList.remove("is-four-fifths");

  var asideIcon = asideToggle.getElementsByTagName("i")[0];
    asideIcon.classList.add("fa-expand");
    asideIcon.classList.remove("fa-compress");

  var asideRootTouch = document.getElementById("asideRootTouch");
    asideRootTouch.classList.add("is-hidden");

  var asideRootDesktop = document.getElementById("asideRootDesktop");
    asideRootDesktop.classList.add("is-hidden");

  var appContainer = document.getElementById("appContainer");
  appContainer.classList.remove("is-four-fifths-desktop");
}

export function toggleMenu(e) {
  e.preventDefault();

  var navMenu = document.getElementById("navMenu");

  var isShowingMenu = hasClass(navMenu, "is-active");
  if (isShowingMenu) {
    hideMenu(e);
    hideStoryFilters(e);
  } else {
    showMenu(e);
  }
}

export function showMenu(e) {
  // Get the target from the "data-target" attribute
  const target = e.target.dataset.target;
  const $target = document.getElementById(target);

  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  e.target.classList.add('is-active');

  if (!$target) return;

  $target.classList.add('is-active');
}

export function hideMenu(e) {
  // Get the target from the "data-target" attribute
  const target = e.target.dataset.target;
  const $target = document.getElementById(target);

  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  e.target.classList.remove('is-active');

  if (!$target) return;

  $target.classList.remove('is-active');
}