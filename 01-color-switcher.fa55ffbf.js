!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){t.setAttribute("disabled",""),e.removeAttribute("disabled"),a=setInterval((function(){document.body.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)))}),1e3)})),e.addEventListener("click",(function(){clearInterval(a),t.removeAttribute("disabled"),e.setAttribute("disabled","")})),e.setAttribute("disabled","");var a=null}();
//# sourceMappingURL=01-color-switcher.fa55ffbf.js.map