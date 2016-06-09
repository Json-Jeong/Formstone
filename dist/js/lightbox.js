/*! formstone v1.1.4 [lightbox.js] 2016-06-08 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./touch","./transition"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){ca=b.$body,da=a("html, body"),ea=b.window.location.hash.replace("#","")}function d(){ga&&i()}function e(a){this.on($.click,a,h);var b=this.data(W+"-gallery");!fa&&ea&&b===ea&&(fa=!0,this.trigger($.click))}function f(a){j(),this.off($.namespace)}function g(b,c){b instanceof a&&h.apply(aa,[{data:a.extend(!0,{},{$object:b},X,c||{})}])}function h(c){if(!ga){var d=c.data;ga=a.extend({},{visible:!1,gallery:{active:!1},isMobile:b.isMobile||d.mobile,isTouch:b.support.touch,isAnimating:!0,oldContentHeight:0,oldContentWidth:0,metaHeight:0,thumbnailHeight:0,captionOpen:!1,thumbnailsOpen:!1},d);var e=d.$el,f=d.$object,g=e&&e[0].href?e[0].href||"":"",h=e&&e[0].hash?e[0].hash||"":"",i=(g.toLowerCase().split(".").pop().split(/\#|\?/),e?e.data(W+"-type"):""),k="image"===i||g.match(d.fileTypes)||"data:image"===g.substr(0,10),l=U(g),n="url"===i||!k&&!l&&"http"===g.substr(0,4)&&!h,p="element"===i||!k&&!l&&!n&&"#"===h.substr(0,1),q="undefined"!=typeof f;if(p&&(g=h),!(k||l||n||p||q))return void(ga=null);if(_.killEvent(c),ga.touch=d.touch&&ga.isMobile&&ga.isTouch,ga.margin*=2,k?ga.type="image":l?ga.type="video":ga.type="element",k||l){var s=e.data(W+"-gallery");s&&(ga.gallery.active=!0,ga.gallery.id=s,ga.gallery.$items=a("a[data-lightbox-gallery= "+ga.gallery.id+"], a[rel= "+ga.gallery.id+"]"),ga.gallery.index=ga.gallery.$items.index(ga.$el),ga.gallery.total=ga.gallery.$items.length-1)}ga.thumbnails&&(k||l)&&ga.gallery.active||(ga.thumbnails=!1);var u="";ga.isMobile||(u+='<div class="'+[Z.overlay,ga.theme,ga.customClass].join(" ")+'"></div>');var v=[Z.base,Z.loading,Z.animating,ga.theme,ga.customClass];if(ga.fixed&&v.push(Z.fixed),ga.isMobile&&v.push(Z.mobile),ga.isTouch&&v.push(Z.touch),n&&v.push(Z.iframed),(p||q)&&v.push(Z.inline),ga.thumbnails&&v.push(Z.thumbnailed),u+='<div class="'+v.join(" ")+'">',u+='<button type="button" class="'+Z.close+'">'+ga.labels.close+"</button>",u+='<span class="'+Z.loading_icon+'"></span>',u+='<div class="'+Z.container+'">',ga.gallery.active&&ga.thumbnails){u+='<div class="'+[Z.thumbnails]+'">',u+='<div class="'+[Z.thumbnail_container]+'">';for(var w,x,y=0,z=ga.gallery.$items.length;z>y;y++)w=ga.gallery.$items.eq(y),x=w.data("lightbox-thumbnail"),x||(x=w.find("img").attr("src")),u+='<button class="'+[Z.thumbnail_item]+'">',u+='<img src="'+x+'" alt="">',u+="</button>";u+="</div></div>"}u+='<div class="'+Z.content+'"></div>',(k||l)&&(u+='<div class="'+Z.tools+'">',u+='<div class="'+Z.controls+'">',ga.gallery.active&&(u+='<button type="button" class="'+[Z.control,Z.control_previous].join(" ")+'">'+ga.labels.previous+"</button>",u+='<button type="button" class="'+[Z.control,Z.control_next].join(" ")+'">'+ga.labels.next+"</button>"),ga.isMobile&&ga.isTouch&&(u+='<button type="button" class="'+[Z.toggle,Z.caption_toggle].join(" ")+'">'+ga.labels.captionClosed+"</button>",ga.gallery.active&&ga.thumbnails&&(u+='<button type="button" class="'+[Z.toggle,Z.thumbnail_toggle].join(" ")+'">'+ga.labels.thumbnailsClosed+"</button>")),u+="</div>",u+='<div class="'+Z.meta+'">',u+='<div class="'+Z.meta_content+'">',ga.gallery.active&&(u+='<p class="'+Z.position+'"',ga.gallery.total<1&&(u+=' style="display: none;"'),u+=">",u+='<span class="'+Z.position_current+'">'+(ga.gallery.index+1)+"</span> ",u+=ga.labels.count,u+=' <span class="'+Z.position_total+'">'+(ga.gallery.total+1)+"</span>",u+="</p>"),u+='<div class="'+Z.caption+'">',u+=ga.formatter.call(e,d),u+="</div></div></div>",u+="</div>"),u+="</div></div>",ca.append(u),ga.$overlay=a(Y.overlay),ga.$lightbox=a(Y.base),ga.$close=a(Y.close),ga.$container=a(Y.container),ga.$content=a(Y.content),ga.$tools=a(Y.tools),ga.$meta=a(Y.meta),ga.$metaContent=a(Y.meta_content),ga.$position=a(Y.position),ga.$caption=a(Y.caption),ga.$controlBox=a(Y.controls),ga.$controls=a(Y.control),ga.$thumbnails=a(Y.thumbnails),ga.$thumbnailContainer=a(Y.thumbnail_container),ga.$thumbnailItems=a(Y.thumbnail_item),ga.isMobile?(ga.paddingVertical=ga.$close.outerHeight(),ga.paddingHorizontal=0,ga.mobilePaddingVertical=parseInt(ga.$content.css("paddingTop"),10)+parseInt(ga.$content.css("paddingBottom"),10),ga.mobilePaddingHorizontal=parseInt(ga.$content.css("paddingLeft"),10)+parseInt(ga.$content.css("paddingRight"),10)):(ga.paddingVertical=parseInt(ga.$lightbox.css("paddingTop"),10)+parseInt(ga.$lightbox.css("paddingBottom"),10),ga.paddingHorizontal=parseInt(ga.$lightbox.css("paddingLeft"),10)+parseInt(ga.$lightbox.css("paddingRight"),10),ga.mobilePaddingVertical=0,ga.mobilePaddingHorizontal=0),ga.contentHeight=ga.$lightbox.outerHeight()-ga.paddingVertical,ga.contentWidth=ga.$lightbox.outerWidth()-ga.paddingHorizontal,ga.controlHeight=ga.$controls.outerHeight(),m(),ga.gallery.active&&(ga.$lightbox.addClass(Z.has_controls),L()),ba.on($.keyDown,M),ca.on($.click,[Y.overlay,Y.close].join(", "),j),ga.gallery.active&&ga.$lightbox.on($.click,Y.control,G),ga.thumbnails&&ga.$lightbox.on($.click,Y.thumbnail_item,H),ga.isMobile&&ga.isTouch&&ga.$lightbox.on($.click,Y.caption_toggle,o).on($.click,Y.thumbnail_toggle,r),ga.$lightbox.fsTransition({property:"opacity"},function(){k?t(g):l?D(g):n?P(g):p?N(g):q&&Q(ga.$object)}).addClass(Z.open),ga.$overlay.addClass(Z.open)}}function i(a){"object"!=typeof a&&(ga.targetHeight=arguments[0],ga.targetWidth=arguments[1]),"element"===ga.type?R(ga.$content.find("> :first-child")):"image"===ga.type?z():"video"===ga.type&&E(),l()}function j(a){_.killEvent(a),ga&&(ga.$lightbox.fsTransition("destroy"),ga.$content.fsTransition("destroy"),u(),ga.$lightbox.addClass(Z.animating).fsTransition({property:"opacity"},function(a){"undefined"!=typeof ga.$inlineTarget&&ga.$inlineTarget.length&&O(),ga.$lightbox.off($.namespace),ga.$container.off($.namespace),ba.off($.keyDown),ca.off($.namespace),ga.$overlay.remove(),ga.$lightbox.remove(),ga=null,ba.trigger($.close)}),ga.$lightbox.removeClass(Z.open),ga.$overlay.removeClass(Z.open),ga.isMobile&&da.removeClass(Z.lock))}function k(){var a=n();ga.isMobile?0:ga.duration;ga.isMobile||ga.$controls.css({marginTop:(ga.contentHeight-ga.controlHeight-ga.metaHeight+ga.thumbnailHeight)/2}),ga.$lightbox.fsTransition({property:ga.contentHeight!==ga.oldContentHeight?"height":"width"},function(){ga.$content.fsTransition({property:"opacity"},function(){ga.$lightbox.removeClass(Z.animating),ga.isAnimating=!1}),ga.$lightbox.removeClass(Z.loading).addClass(Z.ready),ga.visible=!0,ba.trigger($.open),ga.gallery.active&&(F(),I(),J())}),ga.isMobile||ga.$lightbox.css({height:ga.contentHeight+ga.paddingVertical,width:ga.contentWidth+ga.paddingHorizontal,top:ga.fixed?0:a.top});var b=ga.oldContentHeight!==ga.contentHeight||ga.oldContentWidth!==ga.contentWidth;!ga.isMobile&&b||ga.$lightbox.fsTransition("resolve"),ga.oldContentHeight=ga.contentHeight,ga.oldContentWidth=ga.contentWidth,ga.isMobile&&da.addClass(Z.lock)}function l(){if(ga.visible&&!ga.isMobile){var a=n();ga.$controls.css({marginTop:(ga.contentHeight-ga.controlHeight-ga.metaHeight+ga.thumbnailHeight)/2}),ga.$lightbox.css({height:ga.contentHeight+ga.paddingVertical,width:ga.contentWidth+ga.paddingHorizontal,top:ga.fixed?0:a.top}),ga.oldContentHeight=ga.contentHeight,ga.oldContentWidth=ga.contentWidth}}function m(){var a=n();ga.$lightbox.css({top:ga.fixed?0:a.top})}function n(){if(ga.isMobile)return{left:0,top:0};var a={left:(b.windowWidth-ga.contentWidth-ga.paddingHorizontal)/2,top:ga.top<=0?(b.windowHeight-ga.contentHeight-ga.paddingVertical)/2:ga.top};return ga.fixed!==!0&&(a.top+=ba.scrollTop()),a}function o(a){if(_.killEvent(a),ga.captionOpen)p();else{s();var b=parseInt(ga.$metaContent.outerHeight(!0));b+=parseInt(ga.$meta.css("padding-top")),b+=parseInt(ga.$meta.css("padding-bottom")),ga.$meta.css({height:b}),ga.$lightbox.addClass(Z.caption_open).find(Y.caption_toggle).text(ga.labels.captionOpen),ga.captionOpen=!0}}function p(){ga.$lightbox.removeClass(Z.caption_open).find(Y.caption_toggle).text(ga.labels.captionClosed),ga.captionOpen=!1}function q(){var a=this.attr("title"),b=void 0!==a&&a?a.replace(/^\s+|\s+$/g,""):!1;return b?'<p class="caption">'+b+"</p>":""}function r(a){_.killEvent(a),ga.thumbnailsOpen?s():(p(),ga.$lightbox.addClass(Z.thumbnails_open).find(Y.thumbnail_toggle).text(ga.labels.thumbnailsOpen),ga.thumbnailsOpen=!0)}function s(){ga.$lightbox.removeClass(Z.thumbnails_open).find(Y.thumbnail_toggle).text(ga.labels.thumbnailsClosed),ga.thumbnailsOpen=!1}function t(b){ga.hasScaled=!1,ga.$imageContainer=a('<div class="'+Z.image_container+'"><img></div>'),ga.$image=ga.$imageContainer.find("img"),ga.$image.one($.load,function(){var a=T(ga.$image);ga.naturalHeight=a.naturalHeight,ga.naturalWidth=a.naturalWidth,ga.retina&&(ga.naturalHeight/=2,ga.naturalWidth/=2),ga.$content.prepend(ga.$imageContainer),""===ga.$caption.html()?(ga.$caption.hide(),ga.$lightbox.removeClass(Z.has_caption)):(ga.$caption.show(),ga.$lightbox.addClass(Z.has_caption)),z(),k(),ga.touch&&(v(),x({scale:1,deltaX:0,deltaY:0}),y(),ga.$content.fsTouch({pan:!0,scale:!0}).on($.scaleStart,w).on($.scaleEnd,y).on($.scale,x))}).error(S).attr("src",b).addClass(Z.image),(ga.$image[0].complete||4===ga.$image[0].readyState)&&ga.$image.trigger($.load)}function u(){ga.$image&&ga.$image.length&&ga.$content.fsTouch("destroy")}function v(){ga.scalePosition=ga.$imageContainer.position(),ga.scaleY=ga.scalePosition.top,ga.scaleX=ga.scalePosition.left,ga.scaleHeight=ga.$image.outerHeight(),ga.scaleWidth=ga.$image.outerWidth()}function w(a){v(),ga.$lightbox.addClass(Z.scaling)}function x(a){ga.targetContainerY=ga.scaleY+a.deltaY,ga.targetContainerX=ga.scaleX+a.deltaX,ga.targetImageHeight=ga.scaleHeight*a.scale,ga.targetImageWidth=ga.scaleWidth*a.scale,ga.targetImageHeight<ga.scaleMinHeight&&(ga.targetImageHeight=ga.scaleMinHeight),ga.targetImageHeight>ga.scaleMaxHeight&&(ga.targetImageHeight=ga.scaleMaxHeight),ga.targetImageWidth<ga.scaleMinWidth&&(ga.targetImageWidth=ga.scaleMinWidth),ga.targetImageWidth>ga.scaleMaxWidth&&(ga.targetImageWidth=ga.scaleMaxWidth),ga.hasScaled=!0,ga.isScaling=!0,ga.$imageContainer.css({top:ga.targetContainerY,left:ga.targetContainerX}),ga.$image.css({height:ga.targetImageHeight,width:ga.targetImageWidth,top:-(ga.targetImageHeight/2),left:-(ga.targetImageWidth/2)})}function y(a){v(),ga.isScaling=!1;var b=ga.$container.outerHeight()-ga.metaHeight,c=ga.$container.outerWidth();ga.scaleMinY=b-ga.scaleHeight/2,ga.scaleMinX=c-ga.scaleWidth/2,ga.scaleMaxY=ga.scaleHeight/2,ga.scaleMaxX=ga.scaleWidth/2,ga.scaleHeight<b?ga.scalePosition.top=b/2:(ga.scalePosition.top<ga.scaleMinY&&(ga.scalePosition.top=ga.scaleMinY),ga.scalePosition.top>ga.scaleMaxY&&(ga.scalePosition.top=ga.scaleMaxY)),ga.scaleWidth<c?ga.scalePosition.left=c/2:(ga.scalePosition.left<ga.scaleMinX&&(ga.scalePosition.left=ga.scaleMinX),ga.scalePosition.left>ga.scaleMaxX&&(ga.scalePosition.left=ga.scaleMaxX)),ga.$lightbox.removeClass(Z.scaling),ga.$imageContainer.css({left:ga.scalePosition.left,top:ga.scalePosition.top})}function z(){if(ga.$image){var a=0;for(ga.windowHeight=ga.viewportHeight=b.windowHeight-ga.mobilePaddingVertical-ga.paddingVertical,ga.windowWidth=ga.viewportWidth=b.windowWidth-ga.mobilePaddingHorizontal-ga.paddingHorizontal,ga.contentHeight=1/0,ga.contentWidth=1/0,ga.imageMarginTop=0,ga.imageMarginLeft=0;ga.contentHeight>ga.viewportHeight&&2>a;)ga.imageHeight=0===a?ga.naturalHeight:ga.$image.outerHeight(),ga.imageWidth=0===a?ga.naturalWidth:ga.$image.outerWidth(),ga.metaHeight=0===a?0:ga.metaHeight,ga.spacerHeight=0===a?0:ga.spacerHeight,ga.thumbnailHeight=0===a?0:ga.thumbnailHeight,0===a&&(ga.ratioHorizontal=ga.imageHeight/ga.imageWidth,ga.ratioVertical=ga.imageWidth/ga.imageHeight,ga.isWide=ga.imageWidth>ga.imageHeight),ga.imageHeight<ga.minHeight&&(ga.minHeight=ga.imageHeight),ga.imageWidth<ga.minWidth&&(ga.minWidth=ga.imageWidth),ga.isMobile?(ga.isTouch?(ga.$controlBox.css({width:b.windowWidth}),ga.spacerHeight=ga.$controls.outerHeight(!0)):(ga.$tools.css({width:b.windowWidth}),ga.spacerHeight=ga.$tools.outerHeight(!0)),ga.spacerHeight+=ga.$thumbnails.outerHeight(!0)+10,ga.contentHeight=ga.viewportHeight,ga.contentWidth=ga.viewportWidth,A(),ga.imageMarginTop=(ga.contentHeight-ga.targetImageHeight-ga.spacerHeight)/2,ga.imageMarginLeft=(ga.contentWidth-ga.targetImageWidth)/2):(0===a&&(ga.viewportHeight-=ga.margin+ga.paddingVertical,ga.viewportWidth-=ga.margin+ga.paddingHorizontal),ga.viewportHeight-=ga.metaHeight,ga.thumbnails&&(ga.viewportHeight-=ga.thumbnailHeight),A(),ga.contentHeight=ga.targetImageHeight,ga.contentWidth=ga.targetImageWidth),ga.isMobile||ga.isTouch||ga.$meta.css({width:ga.contentWidth}),ga.hasScaled||(ga.$image.css({height:ga.targetImageHeight,width:ga.targetImageWidth}),ga.touch?ga.$image.css({top:-(ga.targetImageHeight/2),left:-(ga.targetImageWidth/2)}):ga.$image.css({marginTop:ga.imageMarginTop,marginLeft:ga.imageMarginLeft})),ga.isMobile||(ga.metaHeight=ga.$meta.outerHeight(!0),ga.contentHeight+=ga.metaHeight),ga.thumbnails&&(ga.thumbnailHeight=ga.$thumbnails.outerHeight(!0),ga.contentHeight+=ga.thumbnailHeight),a++;ga.touch&&(ga.scaleMinHeight=ga.targetImageHeight,ga.scaleMinWidth=ga.targetImageWidth,ga.scaleMaxHeight=ga.naturalHeight,ga.scaleMaxWidth=ga.naturalWidth)}}function A(){var a=ga.isMobile?ga.contentHeight-ga.spacerHeight:ga.viewportHeight,b=ga.isMobile?ga.contentWidth:ga.viewportWidth;ga.isWide?(ga.targetImageWidth=b,ga.targetImageHeight=ga.targetImageWidth*ga.ratioHorizontal,ga.targetImageHeight>a&&(ga.targetImageHeight=a,ga.targetImageWidth=ga.targetImageHeight*ga.ratioVertical)):(ga.targetImageHeight=a,ga.targetImageWidth=ga.targetImageHeight*ga.ratioVertical,ga.targetImageWidth>b&&(ga.targetImageWidth=b,ga.targetImageHeight=ga.targetImageWidth*ga.ratioHorizontal)),(ga.targetImageWidth>ga.imageWidth||ga.targetImageHeight>ga.imageHeight)&&(ga.targetImageHeight=ga.imageHeight,ga.targetImageWidth=ga.imageWidth),(ga.targetImageWidth<ga.minWidth||ga.targetImageHeight<ga.minHeight)&&(ga.targetImageWidth<ga.minWidth?(ga.targetImageWidth=ga.minWidth,ga.targetImageHeight=ga.targetImageWidth*ga.ratioHorizontal):(ga.targetImageHeight=ga.minHeight,ga.targetImageWidth=ga.targetImageHeight*ga.ratioVertical))}function B(a){return"//www.youtube.com/embed/"+a[1]}function C(a){return"//player.vimeo.com/video/"+a[3]}function D(b){var c=U(b),d=b.split("?");c?(d.length>=2&&(c+="?"+d.slice(1)[0].trim()),ga.$videoWrapper=a('<div class="'+Z.video_wrapper+'"></div>'),ga.$video=a('<iframe class="'+Z.video+'" frameborder="0" seamless="seamless" allowfullscreen></iframe>'),ga.$video.attr("src",c).addClass(Z.video).prependTo(ga.$videoWrapper),ga.$content.prepend(ga.$videoWrapper),E(),k()):S()}function E(){ga.windowHeight=ga.viewportHeight=b.windowHeight-ga.mobilePaddingVertical-ga.paddingVertical,ga.windowWidth=ga.viewportWidth=b.windowWidth-ga.mobilePaddingHorizontal-ga.paddingHorizontal,ga.videoMarginTop=0,ga.videoMarginLeft=0,ga.isMobile?(ga.isTouch?(ga.$controlBox.css({width:b.windowWidth}),ga.spacerHeight=ga.$controls.outerHeight(!0)):(ga.$tools.css({width:b.windowWidth}),ga.spacerHeight=ga.$tools.outerHeight(!0)),ga.spacerHeight=ga.$thumbnails.outerHeight(!0)+10,ga.viewportHeight-=ga.spacerHeight,ga.targetVideoWidth=ga.viewportWidth,ga.targetVideoHeight=ga.targetVideoWidth*ga.videoRatio,ga.targetVideoHeight>ga.viewportHeight&&(ga.targetVideoHeight=ga.viewportHeight,ga.targetVideoWidth=ga.targetVideoHeight/ga.videoRatio),ga.videoMarginTop=(ga.viewportHeight-ga.targetVideoHeight)/2,ga.videoMarginLeft=(ga.viewportWidth-ga.targetVideoWidth)/2):(ga.viewportHeight=ga.windowHeight-ga.margin,ga.viewportWidth=ga.windowWidth-ga.margin,ga.targetVideoWidth=ga.videoWidth>ga.viewportWidth?ga.viewportWidth:ga.videoWidth,ga.targetVideoWidth<ga.minWidth&&(ga.targetVideoWidth=ga.minWidth),ga.targetVideoHeight=ga.targetVideoWidth*ga.videoRatio,ga.contentHeight=ga.targetVideoHeight,ga.contentWidth=ga.targetVideoWidth),ga.isMobile||ga.isTouch||ga.$meta.css({width:ga.contentWidth}),ga.$videoWrapper.css({height:ga.targetVideoHeight,width:ga.targetVideoWidth,marginTop:ga.videoMarginTop,marginLeft:ga.videoMarginLeft}),ga.isMobile||(ga.metaHeight=ga.$meta.outerHeight(!0),ga.contentHeight+=ga.metaHeight),ga.thumbnails&&(ga.thumbnailHeight=ga.$thumbnails.outerHeight(!0),ga.contentHeight+=ga.thumbnailHeight)}function F(b){var c="";ga.gallery.index>0&&(c=ga.gallery.$items.eq(ga.gallery.index-1).attr("href"),U(c)||a('<img src="'+c+'">')),ga.gallery.index<ga.gallery.total&&(c=ga.gallery.$items.eq(ga.gallery.index+1).attr("href"),U(c)||a('<img src="'+c+'">'))}function G(b){_.killEvent(b);var c=a(b.currentTarget);ga.isAnimating||c.hasClass(Z.control_disabled)||(ga.isAnimating=!0,u(),p(),ga.gallery.index+=c.hasClass(Z.control_next)?1:-1,ga.gallery.index>ga.gallery.total&&(ga.gallery.index=ga.infinite?0:ga.gallery.total),ga.gallery.index<0&&(ga.gallery.index=ga.infinite?ga.gallery.total:0),I(),ga.$lightbox.addClass(Z.animating),ga.$content.fsTransition({property:"opacity"},K),ga.$lightbox.addClass(Z.loading))}function H(b){_.killEvent(b);var c=a(b.currentTarget);ga.isAnimating||c.hasClass(Z.active)||(ga.isAnimating=!0,u(),p(),ga.gallery.index=ga.$thumbnailItems.index(c),I(),ga.$lightbox.addClass(Z.animating),ga.$content.fsTransition({property:"opacity"},K),ga.$lightbox.addClass(Z.loading))}function I(){if(ga.thumbnails){var a=ga.$thumbnailItems.eq(ga.gallery.index);ga.$thumbnailItems.removeClass(Z.active),a.addClass(Z.active)}}function J(){if(ga.thumbnails){var a=ga.$thumbnailItems.eq(ga.gallery.index),b=a.position().left+a.outerWidth(!1)/2-ga.$thumbnailContainer.outerWidth(!0)/2;ga.$thumbnailContainer.stop().animate({scrollLeft:b},200,"linear")}}function K(){"undefined"!=typeof ga.$imageContainer&&ga.$imageContainer.remove(),"undefined"!=typeof ga.$videoWrapper&&ga.$videoWrapper.remove(),ga.$el=ga.gallery.$items.eq(ga.gallery.index),ga.$caption.html(ga.formatter.call(ga.$el,ga)),ga.$position.find(Y.position_current).html(ga.gallery.index+1);var a=ga.$el.attr("href"),b=U(a);b?(ga.type="video",D(a)):(ga.type="image",t(a)),L()}function L(){ga.$controls.removeClass(Z.control_disabled),ga.infinite||(0===ga.gallery.index&&ga.$controls.filter(Y.control_previous).addClass(Z.control_disabled),ga.gallery.index===ga.gallery.total&&ga.$controls.filter(Y.control_next).addClass(Z.control_disabled))}function M(a){!ga.gallery.active||37!==a.keyCode&&39!==a.keyCode?27===a.keyCode&&ga.$close.trigger($.click):(_.killEvent(a),ga.$controls.filter(37===a.keyCode?Y.control_previous:Y.control_next).trigger($.click))}function N(b){ga.$inlineTarget=a(b),ga.$inlineContents=ga.$inlineTarget.children().detach(),Q(ga.$inlineContents)}function O(){ga.$inlineTarget.append(ga.$inlineContents.detach())}function P(b){b+=b.indexOf("?")>-1?"&"+ga.requestKey+"=true":"?"+ga.requestKey+"=true";var c=a('<iframe class="'+Z.iframe+'" src="'+b+'"></iframe>');Q(c)}function Q(a){ga.$content.append(a),R(a),k()}function R(a){ga.windowHeight=b.windowHeight-ga.mobilePaddingVertical-ga.paddingVertical,ga.windowWidth=b.windowWidth-ga.mobilePaddingHorizontal-ga.paddingHorizontal,ga.objectHeight=a.outerHeight(!0),ga.objectWidth=a.outerWidth(!0),ga.targetHeight=ga.targetHeight||(ga.$el?ga.$el.data(W+"-height"):null),ga.targetWidth=ga.targetWidth||(ga.$el?ga.$el.data(W+"-width"):null),ga.maxHeight=ga.windowHeight<0?ga.minHeight:ga.windowHeight,ga.isIframe=a.is("iframe"),ga.objectMarginTop=0,ga.objectMarginLeft=0,ga.isMobile||(ga.windowHeight-=ga.margin,ga.windowWidth-=ga.margin),ga.contentHeight=ga.targetHeight?ga.targetHeight:ga.isIframe||ga.isMobile?ga.windowHeight:ga.objectHeight,ga.contentWidth=ga.targetWidth?ga.targetWidth:ga.isIframe||ga.isMobile?ga.windowWidth:ga.objectWidth,(ga.isIframe||ga.isObject)&&ga.isMobile?(ga.contentHeight=ga.windowHeight,ga.contentWidth=ga.windowWidth):ga.isObject&&(ga.contentHeight=ga.contentHeight>ga.windowHeight?ga.windowHeight:ga.contentHeight,ga.contentWidth=ga.contentWidth>ga.windowWidth?ga.windowWidth:ga.contentWidth),ga.isMobile||(ga.contentHeight>ga.maxHeight&&(ga.contentHeight=ga.maxHeight),ga.contentWidth>ga.maxWidth&&(ga.contentWidth=ga.maxWidth))}function S(){var b=a('<div class="'+Z.error+'"><p>Error Loading Resource</p></div>');ga.type="element",ga.$tools.remove(),ga.$image.off($.namespace),Q(b)}function T(a){var b=a[0],c=new Image;return"undefined"!=typeof b.naturalHeight?{naturalHeight:b.naturalHeight,naturalWidth:b.naturalWidth}:"img"===b.tagName.toLowerCase()?(c.src=b.src,{naturalHeight:c.height,naturalWidth:c.width}):!1}function U(a){var b,c=ga.videoFormatter;for(var d in c)if(c.hasOwnProperty(d)&&(b=a.match(c[d].pattern),null!==b))return c[d].format.call(ga,b);return!1}var V=b.Plugin("lightbox",{widget:!0,defaults:{customClass:"",fileTypes:/\.(jpg|sjpg|jpeg|png|gif)$/i,fixed:!1,formatter:q,infinite:!1,labels:{close:"Close",count:"of",next:"Next",previous:"Previous",captionClosed:"View Caption",captionOpen:"Close Caption",thumbnailsClosed:"View Thumbnails",thumbnailsOpen:"Close Thumbnails"},margin:50,maxHeight:1e4,maxWidth:1e4,minHeight:100,minWidth:100,mobile:!1,retina:!1,requestKey:"fs-lightbox",theme:"fs-light",thumbnails:!1,top:0,touch:!0,videoFormatter:{youtube:{pattern:/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/,format:B},vimeo:{pattern:/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,format:C}},videoRatio:.5625,videoWidth:800},classes:["loading","animating","scaling","fixed","mobile","touch","inline","iframed","open","ready","overlay","close","loading_icon","container","content","image","image_container","video","video_wrapper","tools","meta","meta_content","controls","control","control_previous","control_next","control_disabled","position","position_current","position_total","toggle","caption_toggle","caption","caption_open","thumbnailed","thumbnails_open","thumbnail_toggle","thumbnails","thumbnail_container","thumbnail_item","active","has_controls","has_caption","iframe","error","active","lock"],events:{open:"open",close:"close"},methods:{_setup:c,_construct:e,_destruct:f,_resize:d,resize:i},utilities:{_initialize:g,close:j}}),W=V.namespace,X=V.defaults,Y=V.classes,Z=Y.raw,$=V.events,_=V.functions,aa=b.window,ba=b.$window,ca=null,da=null,ea=!1,fa=!1,ga=null});