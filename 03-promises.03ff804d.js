var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequire7bc7;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequire7bc7=n);var i=n("iQIUW");const r={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),btnSubmit:document.querySelector("button")};let l=1,a=0;r.form.addEventListener("submit",(function(e){e.preventDefault(),a=+r.delay.value;setTimeout((()=>{const e=setInterval((()=>{if(l===+r.amount.value+1)return void clearInterval(e);const t=(o=l,n=a,new Promise(((e,t)=>{Math.random()>.3?e({position:o,delay:n}):t({position:o,delay:n})})));var o,n;l++,a+=+r.step.value,t.then((e=>(i.Notify.success(`✅ Fulfilled promise ${e.position} in ${e.delay}ms`),e))).catch((e=>{i.Notify.failure(`❌ Rejected promise ${e.position} in ${e.delay}ms`)}))}),+r.step.value);l=1}))})),i.Notify.init({position:"right-top",width:"360px",fontSize:"16px"});
//# sourceMappingURL=03-promises.03ff804d.js.map
