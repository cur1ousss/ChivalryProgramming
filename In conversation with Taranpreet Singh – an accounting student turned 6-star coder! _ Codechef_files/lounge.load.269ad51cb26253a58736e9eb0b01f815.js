!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/embed/styles/lounge.c46a5b3df6acec9d5cde6bf8b61aaf6e.css",RTL_STYLES:"https://c.disquscdn.com/next/embed/styles/lounge_rtl.1f052d554873848f09d8ee3c946a3da1.css","lounge/main":"https://c.disquscdn.com/next/embed/lounge.bundle.10adfde1a6e883b828255fddc56fa508.js","discovery/main":"https://c.disquscdn.com/next/embed/discovery.bundle.bc533dcea52452269ce07a14855280a0.js","remote/config":"https://disqus.com/next/config.js","common/vendor_extensions/highlight":"https://c.disquscdn.com/next/embed/highlight.6fbf348532f299e045c254c49c4dbedf.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/embed",paths:["lounge/main","discovery/main","remote/config","common/vendor_extensions/highlight"].reduce(function(a,c){return a[c]=b[c].slice(0,-3),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("lounge",b)})},c.src="https://c.disquscdn.com/next/embed/common.bundle.57d935b03ca64a8fc2ae95b8d550f132.js",a.body.appendChild(c)}();