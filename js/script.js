!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=79)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,e(41))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(31),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,n){return o.call(r(t),n)}},function(t,n,e){var r=e(2);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,e){var r=e(5),o=e(16),i=e(26);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(0),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?o(r[t]):r[t]&&r[t][n]}},function(t,n,e){var r=e(27),o=e(7);t.exports=function(t){return r(o(t))}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(8),o=e(29);t.exports=o?function(t){return"symbol"==typeof t}:function(t){var n=r("Symbol");return"function"==typeof n&&Object(t)instanceof n}},function(t,n,e){var r=e(0),o=e(13),i=e(3),c=e(32),u=e(30),a=e(29),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)&&(u||"string"==typeof f[t])||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n,e){var r=e(47),o=e(14);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.16.0",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(0),o=e(15),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(0);t.exports=function(t,n){try{Object.defineProperty(r,t,{value:n,configurable:!0,writable:!0})}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(5),o=e(33),i=e(4),c=e(28),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports={}},function(t,n,e){var r=e(19),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){"use strict";var r,o,i=e(22),c=e(56),u=e(57),a=e(13),f=e(58),s=e(37).get,l=e(62),p=e(63),v=RegExp.prototype.exec,d=a("native-string-replace",String.prototype.replace),g=v,y=(r=/a/,o=/b*/g,v.call(r,"a"),v.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),h=u.UNSUPPORTED_Y||u.BROKEN_CARET,x=void 0!==/()??/.exec("")[1];(y||x||h||l||p)&&(g=function(t){var n,e,r,o,u,a,l,p=this,m=s(p),b=i(t),S=m.raw;if(S)return S.lastIndex=p.lastIndex,n=g.call(S,b),p.lastIndex=S.lastIndex,n;var O=m.groups,w=h&&p.sticky,E=c.call(p),L=p.source,j=0,T=b;if(w&&(-1===(E=E.replace("y","")).indexOf("g")&&(E+="g"),T=b.slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==b.charAt(p.lastIndex-1))&&(L="(?: "+L+")",T=" "+T,j++),e=new RegExp("^(?:"+L+")",E)),x&&(e=new RegExp("^"+L+"$(?!\\s)",E)),y&&(r=p.lastIndex),o=v.call(w?e:p,T),w?o?(o.input=o.input.slice(j),o[0]=o[0].slice(j),o.index=p.lastIndex,p.lastIndex+=o[0].length):p.lastIndex=0:y&&o&&(p.lastIndex=p.global?o.index+o[0].length:r),x&&o&&o.length>1&&d.call(o[0],e,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)})),o&&O)for(o.groups=a=f(null),u=0;u<O.length;u++)a[(l=O[u])[0]]=o[l[1]];return o}),t.exports=g},function(t,n,e){var r=e(11);t.exports=function(t){if(r(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},function(t,n,e){"use strict";var r=e(24),o=e(21);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,n,e){var r=e(0),o=e(25).f,i=e(6),c=e(35),u=e(15),a=e(49),f=e(55);t.exports=function(t,n){var e,s,l,p,v,d=t.target,g=t.global,y=t.stat;if(e=g?r:y?r[d]||u(d,{}):(r[d]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(g?s:d+(y?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,s,p,t)}}},function(t,n,e){var r=e(5),o=e(42),i=e(26),c=e(9),u=e(28),a=e(3),f=e(33),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(1),o=e(10),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(43),o=e(11);t.exports=function(t){var n=r(t,"string");return o(n)?n:String(n)}},function(t,n,e){var r=e(30);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r=e(44),o=e(1);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},function(t,n,e){var r=e(7);t.exports=function(t){return Object(r(t))}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(5),o=e(1),i=e(34);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(0),o=e(2),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,e){var r=e(0),o=e(6),i=e(3),c=e(15),u=e(36),a=e(37),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,e,u){var a,f=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,v=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),(a=s(e)).source||(a.source=l.join("string"==typeof n?n:""))),t!==r?(f?!v&&t[n]&&(p=!0):delete t[n],p?t[n]=e:o(t,n,e)):p?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,n,e){var r=e(14),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r,o,i,c=e(48),u=e(0),a=e(2),f=e(6),s=e(3),l=e(14),p=e(38),v=e(17),d=u.WeakMap;if(c||l.state){var g=l.state||(l.state=new d),y=g.get,h=g.has,x=g.set;r=function(t,n){if(h.call(g,t))throw new TypeError("Object already initialized");return n.facade=t,x.call(g,t,n),n},o=function(t){return y.call(g,t)||{}},i=function(t){return h.call(g,t)}}else{var m=p("state");v[m]=!0,r=function(t,n){if(s(t,m))throw new TypeError("Object already initialized");return n.facade=t,f(t,m,n),n},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(13),o=e(32),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r=e(3),o=e(9),i=e(52).indexOf,c=e(17);t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)!r(c,e)&&r(u,e)&&f.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){"use strict";var r=e(70).forEach,o=e(76)("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(2),o=e(11),i=e(46),c=e(12)("toPrimitive");t.exports=function(t,n){if(!r(t)||o(t))return t;var e,u=t[c];if(void 0!==u){if(void 0===n&&(n="default"),e=u.call(t,n),!r(e)||o(e))return e;throw TypeError("Can't convert object to primitive value")}return void 0===n&&(n="number"),i(t,n)}},function(t,n,e){var r,o,i=e(0),c=e(45),u=i.process,a=i.Deno,f=u&&u.versions||a&&a.version,s=f&&f.v8;s?o=(r=s.split("."))[0]<4?1:r[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){var r=e(8);t.exports=r("navigator","userAgent")||""},function(t,n,e){var r=e(2);t.exports=function(t,n){var e,o;if("string"===n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if("string"!==n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=!1},function(t,n,e){var r=e(0),o=e(36),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(3),o=e(50),i=e(25),c=e(16);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||u(t,s,a(n,s))}}},function(t,n,e){var r=e(8),o=e(51),i=e(54),c=e(4);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(39),o=e(20).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(9),o=e(18),i=e(53),c=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(19),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(1),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){"use strict";var r=e(4);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){var r=e(1),o=function(t,n){return RegExp(t,n)};n.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,n,e){var r,o=e(4),i=e(59),c=e(20),u=e(17),a=e(61),f=e(34),s=e(38),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},d=function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n},g=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}g=document.domain&&r?d(r):function(){var t,n=f("iframe");if(n.style)return n.style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F}()||d(r);for(var t=c.length;t--;)delete g.prototype[c[t]];return g()};u[l]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(p.prototype=o(t),e=new p,p.prototype=null,e[l]=t):e=g(),void 0===n?e:i(e,n)}},function(t,n,e){var r=e(5),o=e(16),i=e(4),c=e(60);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=c(n),u=r.length,a=0;u>a;)o.f(t,e=r[a++],n[e]);return t}},function(t,n,e){var r=e(39),o=e(20);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(8);t.exports=r("document","documentElement")},function(t,n,e){var r=e(1);t.exports=r((function(){var t=RegExp(".","string".charAt(0));return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},function(t,n,e){var r=e(1);t.exports=r((function(){var t=RegExp("(?<a>b)","string".charAt(5));return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},function(t,n,e){"use strict";var r=e(65),o=e(4),i=e(18),c=e(22),u=e(7),a=e(66),f=e(68);r("match",(function(t,n,e){return[function(n){var e=u(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](c(e))},function(t){var r=o(this),u=c(t),s=e(n,r,u);if(s.done)return s.value;if(!r.global)return f(r,u);var l=r.unicode;r.lastIndex=0;for(var p,v=[],d=0;null!==(p=f(r,u));){var g=c(p[0]);v[d]=g,""===g&&(r.lastIndex=a(u,i(r.lastIndex),l)),d++}return 0===d?null:v}]}))},function(t,n,e){"use strict";e(23);var r=e(35),o=e(21),i=e(1),c=e(12),u=e(6),a=c("species"),f=RegExp.prototype;t.exports=function(t,n,e,s){var l=c(t),p=!i((function(){var n={};return n[l]=function(){return 7},7!=""[t](n)})),v=p&&!i((function(){var n=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[a]=function(){return e},e.flags="",e[l]=/./[l]),e.exec=function(){return n=!0,null},e[l](""),!n}));if(!p||!v||e){var d=/./[l],g=n(l,""[t],(function(t,n,e,r,i){var c=n.exec;return c===o||c===f.exec?p&&!i?{done:!0,value:d.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}));r(String.prototype,t,g[0]),r(f,l,g[1])}s&&u(f[l],"sham",!0)}},function(t,n,e){"use strict";var r=e(67).charAt;t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},function(t,n,e){var r=e(19),o=e(22),i=e(7),c=function(t){return function(n,e){var c,u,a=o(i(n)),f=r(e),s=a.length;return f<0||f>=s?t?"":void 0:(c=a.charCodeAt(f))<55296||c>56319||f+1===s||(u=a.charCodeAt(f+1))<56320||u>57343?t?a.charAt(f):c:t?a.slice(f,f+2):u-56320+(c-55296<<10)+65536}};t.exports={codeAt:c(!1),charAt:c(!0)}},function(t,n,e){var r=e(10),o=e(21);t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,e){"use strict";var r=e(24),o=e(40);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,e){var r=e(71),o=e(27),i=e(31),c=e(18),u=e(73),a=[].push,f=function(t){var n=1==t,e=2==t,f=3==t,s=4==t,l=6==t,p=7==t,v=5==t||l;return function(d,g,y,h){for(var x,m,b=i(d),S=o(b),O=r(g,y,3),w=c(S.length),E=0,L=h||u,j=n?L(d,w):e||p?L(d,0):void 0;w>E;E++)if((v||E in S)&&(m=O(x=S[E],E,b),t))if(n)j[E]=m;else if(m)switch(t){case 3:return!0;case 5:return x;case 6:return E;case 2:a.call(j,x)}else switch(t){case 4:return!1;case 7:a.call(j,x)}return l?-1:f||s?s:j}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},function(t,n,e){var r=e(72);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(74);t.exports=function(t,n){return new(r(t))(0===n?0:n)}},function(t,n,e){var r=e(2),o=e(75),i=e(12)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),void 0===n?Array:n}},function(t,n,e){var r=e(10);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){"use strict";var r=e(1);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){var r=e(0),o=e(78),i=e(40),c=e(6);for(var u in o){var a=r[u],f=a&&a.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,e){"use strict";e.r(n);var r=function(){var t=document.querySelector(".hamburger"),n=document.querySelector(".header__menu-body");t&&t.addEventListener("click",(function(){document.body.classList.toggle("lock"),t.classList.toggle("hamburger--active"),n.classList.toggle("header__menu-body--active")}))},o=(e(23),e(64),e(69),e(77),function(){var t={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return t.Android()||t.BlackBerry()||t.iOS()||t.Opera()||t.Windows()}};document.querySelector("body");if(t.any()){document.body.classList.add("touch");var n=document.querySelectorAll(".arrow");if(n.length>0)for(var e=function(t){var e=n[t],r=e.previousSibling,o=e.nextElementSibling,i=n[t];r.classList.add("parent"),e.addEventListener("click",(function(){o.classList.toggle("open"),i.classList.toggle("active")}))},r=0;r<n.length;r++)e(r)}else document.body.classList.add("pc");var o=document.querySelectorAll(".menu__link[data-goto]"),i=document.querySelector(".hamburger"),c=document.querySelector(".header__menu-body");if(o.length>0){var u=function(t){var n=t.target;if(n.dataset.goto&&document.querySelector(n.dataset.goto)){var e=document.querySelector(n.dataset.goto).getBoundingClientRect().top+pageYOffset-document.querySelector("header").offsetHeight;i.classList.contains("hamburger--active")&&(document.body.classList.remove("lock"),i.classList.remove("hamburger--active"),c.classList.remove("header__menu-body--active")),window.scrollTo({top:e,behavior:"smooth"}),t.preventDefault()}};o.forEach((function(t){t.addEventListener("click",u)}))}});window.addEventListener("DOMContentLoaded",(function(){r(),o()}))}]);
//# sourceMappingURL=script.js.map