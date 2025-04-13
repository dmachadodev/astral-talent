(()=>{"use strict";var e={56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var l=e[s],d=o.base?l[0]+o.base:l[0],c=i[d]||0,u="".concat(d," ").concat(c);i[d]=c+1;var p=n(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=r(f,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var l=o(e,r),d=0;d<i.length;d++){var c=n(i[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=l}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},216:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var o=n(72),r=n.n(o),i=n(825),a=n.n(i),s=n(659),l=n.n(s),d=n(56),c=n.n(d),u=n(540),p=n.n(u),f=n(113),h=n.n(f),m=n(523),v={};v.styleTagTransform=h(),v.setAttributes=c(),v.insert=l().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),r()(m.A,v);const y=m.A&&m.A.locals?m.A.locals:void 0},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);o&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},387:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function s(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.ResultHandler=void 0;const r=n(623);t.ResultHandler=class{constructor(e="resultContainer"){this.resultContainerId=e}showResult(e){return o(this,void 0,void 0,(function*(){const t=yield this.getResult(e),n=this.getResultContainer();n.classList.add("show"),n.innerHTML=this.createResultHTML(t)}))}getResult(e){return o(this,void 0,void 0,(function*(){const t=[],n=e=>new Promise(((t,n)=>{const o=new FileReader;o.readAsDataURL(e),o.onload=()=>t(o.result),o.onerror=e=>n(e)}));for(const o of e)if(o){const e=yield n(o),r=e.indexOf(","),i=-1!==r?e.substring(r+1):e;t.push(i)}else t.push("");const o={documents:t};console.log("payload: ",o);const i=yield fetch(r.UIConstants.AI_RESULTS_URL,{method:"POST",headers:{"Content-Type":"application/json",Authorization:r.UIConstants.AUTHORIZATION},body:JSON.stringify(o)});if(!i.ok)throw new Error("Error en el envío de los ficheros");const a=yield i.text();return console.log("Respuesta del servidor:",a),a}))}getResultContainer(){const e=document.getElementById(this.resultContainerId);if(!e)throw new Error(`Container with id "${this.resultContainerId}" not found.`);return e}createResultHTML(e){return`\n        <div class="form-row">\n          <div>\n            ${e.replace("```html","").replace("```","")}\n          </div>\n        </div>\n      `}}},396:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function s(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.UIHandler=void 0;const r=n(860),i=n(814),a=n(387);t.UIHandler=class{constructor(e,t){this.presentationHandler=new i.PresentationHandler(e),this.formHandler=new r.FormHandler(t),this.resultHandler=new a.ResultHandler,this.initialize()}initialize(){const e=this.formHandler.getHtmlElementById("createButton"),t=document.getElementById("loaderPopup");if(!e||!t)throw new Error("Html element not found.");e.addEventListener("click",(()=>o(this,void 0,void 0,(function*(){if(this.showLoader(t,e),this.formHandler.validateForm()){const e=this.formHandler.getFiles();yield this.resultHandler.showResult(e)}this.hideLoader(t,e)}))))}showLoader(e,t){console.log("Enter in showLoader"),console.log("loaderPopup: ",e),e.style.display="flex",t.disabled=!0,t.style.cursor="not-allowed"}hideLoader(e,t){e.style.display="none",t.disabled=!1,t.style.cursor="pointer"}}},523:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(601),r=n.n(o),i=n(314),a=n.n(i)()(r());a.push([e.id,"",""]);const s=a},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},601:e=>{e.exports=function(e){return e[1]}},623:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UIConstants=void 0;class n{}t.UIConstants=n,n.PRESENTATION_ID="presentation",n.FORM_ID="fileUpload",n.PRESENTATION_HTML='<p>Vamos a crear tu mapa de talentos y un plan de acción basado en el trabajo que has hecho en <a href="https://www.thisisfruto.com/talentopropio" target="_blank">Talento Propio</a>.</p>\n  <p>Para ello necesitas subir los 3 documentos de cada bloque que has realizado durante el curso en formato pdf.</p>\n  <p>Finalmente pulsa el botón y obtendrás el resultado 🥹</p>',n.FORM_HTML='<div class="form-container">\n    <div class="form-row">\n      <div class="form-group">\n        <label for="quePiensan">¿Qué piensan los demás de ti?</label>\n        <input type="file" id="quePiensan" name="quePiensan" accept="application/pdf" />\n        <label for="quePiensanAstros">¿Qué piensan los astros de ti?</label>\n        <input type="file" id="quePiensanAstros" name="quePiensanAstros" accept="application/pdf" />\n        <label for="quePiensoYo">¿Qué pienso yo de mí?</label>\n        <input type="file" id="quePiensan" name="quePiensoYo" accept="application/pdf" />\n        <div class="form-row">\n          <button type="button" id="createButton" class="btn-primary">Crear</button>\n        </div>\n        <div id="loaderPopup" class="loader-popup">\n          <div class="loader-content">\n              <div class="spinner"></div>\n              <p>Creando, espera por favor...</p>\n          </div>\n      </div>\n      </div>\n    </div>\n  </div>',n.AI_RESULTS_URL="https://dkvozjzcvgmd4ppsmc22cmnj7a0nirqo.lambda-url.eu-west-1.on.aws",n.AUTHORIZATION="Aa5UPfDmVXbBRfsaqpJDyWzEKYbc31LylT4Hke1AzBxZ3UhtVWUPaBTRmB7q8Xgo"},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},814:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PresentationHandler=void 0;const o=n(623);t.PresentationHandler=class{constructor(e){this.presentation=document.createElement("div"),this.initialize(e)}initialize(e){this.buildPresentation(),this.addElementToContainer(e,this.presentation)}buildPresentation(){this.presentation.id=o.UIConstants.PRESENTATION_ID,this.presentation.innerHTML=o.UIConstants.PRESENTATION_HTML}addElementToContainer(e,t){const n=document.getElementById(e);if(!n)throw new Error(`Container with id "${e}" not found.`);n.appendChild(t)}}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},860:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FormHandler=void 0;const o=n(623);t.FormHandler=class{constructor(e){this.form=document.createElement("form"),this.initialize(e)}initialize(e){this.buildForm(),this.addFormToContainer(e)}buildForm(){this.form.id=o.UIConstants.FORM_ID,this.form.innerHTML=o.UIConstants.FORM_HTML}addFormToContainer(e){const t=document.getElementById(e);if(!t)throw new Error(`Container with id "${e}" not found.`);t.appendChild(this.form)}getFiles(){const e=new FormData(this.form),t=[];return e.forEach((e=>t.push(e))),t}getHtmlElementById(e){return this.form.querySelector(`#${e}`)}validateForm(){const e=this.form.querySelectorAll("input");let t=this.areThereNotEmptyFields(e);return t||alert("Por favor, completa todos los campos antes de enviar."),t}areThereNotEmptyFields(e){let t=!0;return e.forEach((e=>{""===e.value.trim()?(e.classList.add("error"),t=!1):e.classList.remove("error")})),t}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{const e=n(396);n(216);const t=document.getElementById("app");t&&(t.innerHTML='\n  <div id="presentationContainer"></div>\n  <div id="formContainer"></div>\n  <div id="resultContainer" class="hidden"></div>\n  <div id="errorConatiner" class="hidden"></div>\n  ');try{new e.UIHandler("presentationContainer","formContainer")}catch(e){const t=document.getElementById("presentationContainer");null==t||t.classList.add("hidden");const n=document.createElement("div");n.innerHTML=e.message;const o=document.getElementById("errorConatiner");null==o||o.classList.add("show"),null==o||o.appendChild(n)}})()})();