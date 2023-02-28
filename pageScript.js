var link = document.createElement("link");

link.setAttribute("rel", "stylesheet");
link.setAttribute("type", "text/css");
link.setAttribute("href", "/css/widget.css");

document.getElementsByTagName("head")[0].appendChild(link);

setTimeout(function () {
  function AdaBundleGoogleTranslateElementInit(lang) {
    lang = lang || "fr";
    new window.google.translate.TranslateElement(
      { pageLanguage: "en" },
      "adabundle-translate-element"
    );
  }

  AdaBundleGoogleTranslateElementInit();
}, 9000);

var script = document.createElement("script");

script.setAttribute("type", "text/javascript");
script.setAttribute("src", "/js/translate.js");
script.setAttribute("crossorigin", "anonymous");
// Get embed-id from the initial embed script and add it to script tags
script.setAttribute(
  "embed-id",
  document.currentScript.getAttribute("embed-id")
);

document.getElementsByTagName("head")[0].appendChild(script);

var script = document.createElement("script");

script.setAttribute("type", "text/javascript");
script.setAttribute("src", "/js/dist/widget.js");
script.setAttribute("crossorigin", "anonymous");
// Get embed-id from the initial embed script and add it to script tags
script.setAttribute(
  "embed-id",
  document.currentScript.getAttribute("embed-id")
);

document.getElementsByTagName("head")[0].appendChild(script);
