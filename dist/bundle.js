!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Marker=e():t.Marker=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){"use strict";var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();n(1).toString();var o=function(){function t(e){var n=e.api;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=n,this.button=null,this.tag="SPAN",this.CSS="marker",this.iconClasses={base:this.api.styles.inlineToolButton,active:this.api.styles.inlineToolButtonActive}}return r(t,[{key:"render",value:function(){return this.button=document.createElement("button"),this.button.classList.add(this.iconClasses.base),this.button.innerHTML=this.toolboxIcon,this.button}},{key:"surround",value:function(t){if(t){var e=this.api.selection.findParentTag(this.tag,this.CSS);e?this.unwrap(e):this.wrap(t)}}},{key:"wrap",value:function(t){var e=document.createElement(this.tag);e.classList.add(this.CSS),e.appendChild(t.extractContents()),t.insertNode(e),this.api.selection.expandToTag(e)}},{key:"unwrap",value:function(t){var e=window.getSelection().getRangeAt(0);this.api.selection.expandToTag(t);var n=window.getSelection(),r=n.getRangeAt(0),o=r.toString(),i=e.toString(),a=e.compareBoundaryPoints(Range.START_TO_START,r)>=0&&r.compareBoundaryPoints(Range.END_TO_END,e);if(0===i.localeCompare(o)){var s=r.extractContents();t.parentNode.removeChild(t),r.insertNode(s)}else if(a){var c=o.slice(0,e.startOffset),u=o.slice(e.endOffset);if(t.parentNode.removeChild(t),""!==u){var f=document.createElement(this.tag);f.classList.add(this.CSS),f.textContent=u,r.insertNode(f)}var l=document.createElement(this.tag);if(l.textContent=i,r.insertNode(l),""!==c){var p=document.createElement(this.tag);p.classList.add(this.CSS),p.textContent=c,r.insertNode(p)}}n.removeAllRanges()}},{key:"checkState",value:function(){var t=this.api.selection.findParentTag(this.tag,this.CSS);this.button.classList.toggle(this.iconClasses.active,!!t)}},{key:"toolboxIcon",get:function(){return'<svg width="14" height="14"><path d="M2.886 6.879c.187.254.316.574.388.958.071.374.106.847.106 1.422 0 .42.01.729.028.924.018.182.051.315.097.398.041.075.084.117.128.134.067.027.197.056.38.084a.758.758 0 0 1 .51.298c.13.167.195.382.195.638 0 .615-.393.938-1.105.938a2.35 2.35 0 0 1-1.12-.263 1.885 1.885 0 0 1-.775-.754 2.266 2.266 0 0 1-.277-1.101c-.013-.651-.026-1.173-.039-1.567-.013-.384-.031-.633-.054-.736-.06-.263-.144-.456-.251-.58a1.995 1.995 0 0 0-.459-.377 2.036 2.036 0 0 1-.471-.373C.052 6.788 0 6.592 0 6.34c0-.371.151-.66.448-.85.299-.186.51-.343.63-.467a.97.97 0 0 0 .236-.45c.05-.2.08-.42.088-.66.009-.25.021-.853.039-1.808.013-.632.217-1.145.61-1.53C2.445.193 2.97 0 3.613 0c.712 0 1.105.318 1.105.925 0 .265-.063.482-.192.645a.758.758 0 0 1-.512.29c-.226.032-.378.077-.451.128-.057.04-.103.134-.127.292-.028.188-.047.564-.056 1.123a9.774 9.774 0 0 1-.102 1.384 2.379 2.379 0 0 1-.366.967c-.145.213-.34.407-.582.585.227.164.412.344.556.54zm7.212-.888a2.11 2.11 0 0 1-.39-.626c-.1-.241-.17-.524-.21-.848-.04-.318-.06-.69-.06-1.116 0-.404-.008-.712-.025-.923-.015-.197-.046-.336-.085-.412a.253.253 0 0 0-.133-.128 1.655 1.655 0 0 0-.384-.077.773.773 0 0 1-.503-.288c-.135-.164-.2-.382-.2-.648C8.107.319 8.495 0 9.198 0c.424 0 .8.086 1.127.26.328.175.588.425.776.748.188.323.284.69.289 1.097.025 1.396.056 2.19.085 2.313.063.259.153.451.266.577.122.136.27.257.446.362.203.122.357.246.462.373.12.144.175.349.175.61 0 .375-.15.663-.443.843-.29.178-.497.333-.621.46a.983.983 0 0 0-.243.45c-.05.194-.081.495-.092.9-.01.416-.022.936-.035 1.562-.014.632-.22 1.147-.617 1.535-.398.389-.926.583-1.575.583-.334 0-.6-.077-.793-.236-.2-.165-.299-.404-.299-.702 0-.163.03-.314.09-.453a.835.835 0 0 1 .252-.336.73.73 0 0 1 .363-.147 1.74 1.74 0 0 0 .391-.086.248.248 0 0 0 .131-.138 1.29 1.29 0 0 0 .082-.417c.015-.204.022-.504.022-.901.01-.6.044-1.07.106-1.415a2.31 2.31 0 0 1 .367-.925 2.47 2.47 0 0 1 .585-.577 2.644 2.644 0 0 1-.398-.35z"/></svg>'}}],[{key:"isInline",get:function(){return!0}}]),t}();t.exports=o},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".marker {\n  background: rgba(251,241,241,0.78);\n  color: #C44545;\n  padding: 4px 6px;\n  border-radius: 2px;\n  margin: 0 2px;\n  font-family: Menlo, Monaco, Consolas, Courier New, monospace;\n  font-size: 0.9em;\n}\n\n.marker .marker {\n  font-size: 1em;\n  padding: 0;\n  margin: 0;\n}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r={},o=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),a=null,s=0,c=[],u=n(5);function f(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(b(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],e));r[o.id]={id:o.id,refs:1,parts:s}}}}function l(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function p(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function h(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),v(e,t.attrs),p(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var c=s++;n=a||(a=h(e)),r=g.bind(null,n,c,!1),o=g.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),p(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=l(t,e);return f(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var a=n[i];(s=r[a.id]).refs--,o.push(s)}t&&f(l(t,e),e);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete r[s.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function g(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}])});