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

export function copy(text) {
  //e.preventDefault();

  // Use the the click version of this function should user hit enter.
  /*var key = e.which || e.keyCode;
  if (key === 13)  {
    e.target.click();
    return
  }*/

  if (window.clipboardData && window.clipboardData.setData) {
    // IE specific code path to prevent textarea being shown while dialog is visible.
    var copied = window.clipboardData.setData("Text", text);
    window.prompt("Link copied to clipboard", text);
    return copied;
  } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
      var copiedItem = document.execCommand("copy");  // Security exception may be thrown by some browsers.
      window.prompt("Link copied to clipboard", text);
      return copiedItem;
    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex);
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
}