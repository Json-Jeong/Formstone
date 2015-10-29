/*! formstone v0.8.24 [asap.js] 2015-10-29 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(c){!r&&b.support.history&&(p=b.$body,r=a.extend(t,c),r.render===a.noop&&(r.render=j),r.transitionOut===a.noop&&(r.transitionOut=function(){return a.Deferred().resolve()}),history.state?(B=history.state.id,A=history.state.url):(A=window.location.href,n(B,A)),u.on(x.popState,g),e())}function e(){p&&!p.hasClass(y.base)&&p.on(x.click,t.selector,f).addClass(y.base)}function f(a){var b=a.currentTarget;a.which>1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||window.location.protocol!==b.protocol||window.location.host!==b.host||"_blank"===b.target||(!b.hash||b.href.replace(b.hash,"")!==window.location.href.replace(location.hash,"")&&b.href!==window.location.href+"#")&&(w.killEvent(a),a.stopImmediatePropagation(),b.href!==A&&h(b.href,!0))}function g(a){q&&q.abort();var b=a.originalEvent.state;B=b.id,b.url!==A&&h(b.url,!1)}function h(b,c){q&&q.abort(),u.trigger(x.requested,[!1]),r.transitionOutDeferred=r.transitionOut.apply(v,[!1]);var d=o(b),e=d.params,f=d.hash,g=d.clean,h="User error",j=null,k=a.Deferred();e[r.requestKey]=!0,q=a.ajax({url:g,data:e,dataType:"json",cache:r.cache,xhr:function(){var a=new v.XMLHttpRequest;return a.addEventListener("progress",function(a){if(a.lengthComputable){var b=a.loaded/a.total;u.trigger(x.progress,[b])}},!1),a},success:function(c){j="string"===a.type(c)?a.parseJSON(c):c,c.location&&(b=c.location,d=o(b),f=d.hash),k.resolve()},error:function(a,b,c){h=c,k.reject()}}),a.when(k,r.transitionOutDeferred).done(function(){i(d,j,c)}).fail(function(){u.trigger(x.failed,[h])})}function i(b,d,e){u.trigger(x.loaded,[d]),a.fsAnalytics!==c&&a.fsAnalytics("pageview"),r.render.call(this,d,b.hash),A=b.url,e&&(B++,m(B,A)),u.trigger(x.rendered,[d]);var f=!1;if(""!==b.hash){var g=a(b.hash);g.length&&(f=g.offset().top)}f!==!1&&u.scrollTop(f)}function j(b){if("undefined"!==a.type(b)){var c;for(var d in b)b.hasOwnProperty(d)&&(c=a(d),c.length&&c.html(b[d]))}}function k(a){r&&b.support.history?a&&h(a,!0):window.location.href=a}function l(a){var b=history.state;A=a,n(b.id,a)}function m(a,b){history.pushState({id:a,url:b},z+a,b)}function n(a,b){history.replaceState({id:a,url:b},z+a,b)}function o(a){var b=a.indexOf("?"),c=a.indexOf("#"),d={},e="",f=a;return c>-1&&(e=a.slice(c),f=a.slice(0,c)),b>-1&&(d=w.parseQueryString(a.slice(b+1,c>-1?c:a.length)),f=a.slice(0,b)),{hash:e,params:d,url:a,clean:f}}var p,q,r,s=b.Plugin("asap",{utilities:{_initialize:d,load:k,replace:l},events:{failed:"failed",loaded:"loaded",popState:"popstate",progress:"progress",requested:"requested",rendered:"rendered"}}),t={cache:!0,selector:"a",render:a.noop,requestKey:"fs-asap",transitionOut:a.noop},u=b.$window,v=u[0],w=s.functions,x=s.events,y=s.classes.raw,z="asap-",A="",B=1}(jQuery,Formstone);