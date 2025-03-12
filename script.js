document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
      .then((response) => response.text())
      .then((data) => (document.getElementById("header").innerHTML = data));
  
    fetch("footer.html")
      .then((response) => response.text())
      .then((data) => (document.getElementById("footer").innerHTML = data));
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    // Get the current URL, removing any fragment
    var documentUrl = document.location.href.replace(/#.*$/, "");
  
    // Iterate through all links
    var linkEls = document.getElementsByTagName("A");
    for (var linkIndex = 0; linkIndex < linkEls.length; linkIndex++) {
      var linkEl = linkEls[linkIndex];
  
      // Ignore links that don't begin with #
      if (!linkEl.getAttribute("href").match(/^#/)) {
        continue;
      }
  
      // Convert to an absolute URL
      linkEl.setAttribute("href", documentUrl + linkEl.getAttribute("href"));
    }
  });