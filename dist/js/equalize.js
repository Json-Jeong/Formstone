/*! Formstone v0.0.1 [equalize.js] 2015-01-07 | MIT License | formstone.it */

!function(a,b){"use strict";function c(){q=o.width(),m.iterate.call(p,g)}function d(){p=a(k.element)}function e(b){b.maxWidth=1/0===b.maxWidth?"100000px":b.maxWidth,b.mq="(min-width:"+b.minWidth+") and (max-width:"+b.maxWidth+")",b.mqGuid=l.base+"__"+n++,a.mediaquery("bind",b.mqGuid,b.mq,{enter:function(){i.call(b.$el,b)},leave:function(){h.call(b.$el,b)}}),g(b),d()}function f(){d()}function g(a){if(a.enabled){var b=a.target?a.$el.find(a.target):a.$el.children(),c="height"===a.property?"outerHeight":"outerWidth",d=0,e=0;b.css(a.property,"");for(var f=0;f<b.length;f++)e=b.eq(f)[c](),e>d&&(d=e);b.css(a.property,d)}}function h(a){if(a.enabled){a.enabled=!1;{var b=a.target?a.$el.find(a.target):a.$el.children();"height"===a.property?"outerHeight":"outerWidth"}b.css(a.property,"")}}function i(a){a.enabled||(a.enabled=!0,g(a))}var j=b.Plugin("equalize",{widget:!0,defaults:{maxWidth:1/0,minWidth:"0px",property:"height",target:null},methods:{_construct:e,_destruct:f,_resize:c}}),k=j.classes,l=k.raw,m=j.functions,n=0,o=b.$window,p=[],q=0}(jQuery,Formstone);