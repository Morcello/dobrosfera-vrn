function include(scriptUrl){document.write('<script src="'+ scriptUrl+'"></script>');}
function isIE(){var myNav=navigator.userAgent.toLowerCase();return(myNav.indexOf('msie')!=-1)?parseInt(myNav.split('msie')[1]):false;};include('js/jquery.cookie.js');include('js/jquery.easing.1.3.js');;(function($){var o=$('html');if(o.hasClass('desktop')){include('js/tmstickup.js');$(document).ready(function(){$('#stuck_container').TMStickUp({})});}})(jQuery);function isIE(){var myNav=navigator.userAgent.toLowerCase(),msie=(myNav.indexOf('msie')!=-1)?parseInt(myNav.split('msie')[1]):false;if(!msie){return(myNav.indexOf('trident')!=-1)?11:((myNav.indexOf('edge')!=-1)?12:false);}
return msie;};;(function($){var ieVersion=isIE();if(ieVersion===12){$('html').addClass('ie-edge');}
if(ieVersion===11){$('html').addClass('ie-11');}
if(ieVersion&&ieVersion<11){$('html').addClass('lt-ie11');$(document).ready(function(){PointerEventsPolyfill.initialize({});});}
if(ieVersion&&ieVersion<10){$('html').addClass('lt-ie10');}})(jQuery);;(function($){var o=$('html');if(o.hasClass('desktop')){include('js/jquery.ui.totop.js');$(document).ready(function(){$().UItoTop({easingType:'easeOutQuart',containerClass:'toTop fa fa-angle-up'});});}})(jQuery);;(function($){var o=$('[data-equal-group]');if(o.length>0){include('js/jquery.equalheights.js');}})(jQuery);;(function($){var currentYear=(new Date).getFullYear();$(document).ready(function(){$("#copyright-year").text((new Date).getFullYear());});})(jQuery);;(function($){function include(url){document.write('<script src="js/'+ url+'"></script>');return false;}
include('superfish.js');jQuery(function(){})})(jQuery);;(function($){var o=$('.responsive-tabs');if(o.length>0){include('js/jquery.responsive.tabs.js');$(document).ready(function(){o.easyResponsiveTabs();});}})(jQuery);;(function($){include('js/jquery.rd-navbar.js');})(jQuery);;(function($){if(isIE()&&isIE()<11){include('js/pointer-events.js');$('html').addClass('lt-ie11');$(document).ready(function(){PointerEventsPolyfill.initialize({});});}})(jQuery);;(function($){var o=$('.table1');if(o.length>0){include('js/stacktable.js');$(document).ready(function(){o.stacktable();});}})(jQuery);;(function($){var o=$('#camera');if(o.length>0){if(!(isIE()&&(isIE()>9))){include('js/jquery.mobile.customized.min.js');}
include('js/camera.js');$(document).ready(function(){o.camera({autoAdvance:true,height:'27.41463414634146%',minHeight:'350px',pagination:false,thumbnails:false,playPause:false,hover:false,loader:'none',navigation:true,navigationHover:true,mobileNavHover:false,fx:'simpleFade'})});}})(jQuery);;(function($){var o=document.getElementById("google-map");if(o){include('http://maps.google.com/maps/api/js?sensor=false');include('js/jquery.rd-google-map.js');$(document).ready(function(){var o=$('#google-map');if(o.length>0){o.googleMap({styles:[{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"visibility":"off"}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"water","stylers":[{"color":"#abbaa4"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#3f518c"}]},{"featureType":"road.highway","stylers":[{"color":"#ad9b8d"}]}]});}});}})
(jQuery);;(function($){var o=$('.owl-carousel'),o2=$('.owl-carousel-2');if(o.length>0){include('js/owl.carousel.min.js');$(document).ready(function(){o.owlCarousel({autoplay:true,margin:30,smartSpeed:450,animateIn:'fadeIn',animateOut:'fadeOut',mouseDrag:false,loop:true,dots:false,dotsEach:1,nav:true,navClass:['owl-prev fa  fa-angle-double-left','owl-next fa  fa-angle-double-right'],responsive:{0:{items:1},768:{items:1},980:{items:1}}});});}
if(o2.length>0){include('js/owl.carousel.min.js');$(document).ready(function(){o2.owlCarousel({margin:30,smartSpeed:450,loop:true,dots:false,dotsEach:1,nav:true,navClass:['owl-prev fa  fa-angle-double-left','owl-next fa  fa-angle-double-right'],responsive:{0:{items:1},768:{items:2},992:{items:3}}});});}})(jQuery);;(function($){var o=$('html');if((navigator.userAgent.toLowerCase().indexOf('msie')==-1)||(isIE()&&isIE()>9)){if(o.hasClass('desktop')){include('js/wow.js');$(document).ready(function(){new WOW().init();});}}})(jQuery);$(function(){var viewportmeta=document.querySelector&&document.querySelector('meta[name="viewport"]'),ua=navigator.userAgent,gestureStart=function(){viewportmeta.content="width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";},scaleFix=function(){if(viewportmeta&&/iPhone|iPad/.test(ua)&&!/Opera Mini/.test(ua)){viewportmeta.content="width=device-width, minimum-scale=1.0, maximum-scale=1.0";document.addEventListener("gesturestart",gestureStart,false);}};scaleFix();if(window.orientation!=undefined){var regM=/ipod|ipad|iphone/gi,result=ua.match(regM);if(!result){$('.sf-menus li').each(function(){if($(">ul",this)[0]){$(">a",this).toggle(function(){return false;},function(){window.location.href=$(this).attr("href");});}})}}});var ua=navigator.userAgent.toLocaleLowerCase(),regV=/ipod|ipad|iphone/gi,result=ua.match(regV),userScale="";if(!result){userScale=",user-scalable=0"}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+ userScale+'">');;(function($){var o=$('.search-form');if(o.length>0){include('js/TMSearch.js');}})(jQuery);;(function($){var o=$('.form-label');if(o.length){include('js/mailform/jquery.rd-input-label.js');$(document).ready(function(){o.RDInputLabel();});}})(jQuery);;(function($){var o=$('.rd-mailform');if(o.length>0){include('js/mailform/jquery.form.min.js');include('js/mailform/jquery.rd-mailform.min.js');$(document).ready(function(){var o=$('.rd-mailform');if(o.length){o.rdMailForm({validator:{'constraints':{'@LettersOnly':{message:'Please use letters only!'},'@NumbersOnly':{message:'Please use numbers only!'},'@NotEmpty':{message:'Field should not be empty!'},'@Email':{message:'Enter valid e-mail address!'},'@Phone':{message:'Enter valid phone number!'},'@Date':{message:'Use MM/DD/YYYY format!'},'@SelectRequired':{message:'Please choose an option!'}}}},{'MF000':'Sent','MF001':'Recipients are not set!','MF002':'Form will not work locally!','MF003':'Please, define email field in your form!','MF004':'Please, define type of your form!','MF254':'Something went wrong with PHPMailer!','MF255':'There was an error submitting the form!'});}});}})(jQuery);;(function($){var o=$('.thumb');if(o.length>0){include('js/jquery.touch-touch.js');$(document).ready(function(){o.touchTouch();});}})(jQuery);$(document).ready(function(){$(".cross").mouseenter(function(){$(this).addClass('cross-active');var test=$(this);setTimeout(function(){test.removeClass('cross-active')},1300);});});;(function($){var o=$(".isotope");if(o.length){include('js/isotope.pkgd.min.js');$(document).ready(function(){o.each(function(){var _this=this,iso=new Isotope(_this,{itemSelector:'[class*="col-"], .isotope-item',layoutMode:_this.getAttribute('data-layout')?_this.getAttribute('data-layout'):'masonry'});$(window).on("resize",function(){iso.layout();});$(window).load(function(){iso.layout();setTimeout(function(){_this.className+=" isotope--loaded";iso.layout();},600);});});$(".isotope-filters-trigger").on("click",function(){$(this).parents(".isotope-filters").toggleClass("active");});$("[data-isotope-filter]").on("click",function(){$('[data-isotope-filter][data-isotope-group="'+ this.getAttribute("data-isotope-group")+'"]').removeClass("active");$(this).addClass("active");$(this).parents(".isotope-filters").removeClass("active");$('.isotope[data-isotope-group="'+ this.getAttribute("data-isotope-group")+'"]').isotope({filter:this.getAttribute("data-isotope-filter")=='*'?'*':'[data-filter="'+ this.getAttribute("data-isotope-filter")+'"]'});})});}})(jQuery);;(function($,undefined){var o=$(".swiper-slider");if(o.length){include('js/jquery.swiper.min.js');function getSwiperHeight(object,attr){var val=object.attr("data-"+ attr),dim;if(!val){return undefined;}
dim=val.match(/(px)|(%)|(vh)$/i);if(dim.length){switch(dim[0]){case"px":return parseFloat(val);case"vh":return $(window).height()*(parseFloat(val)/ 100);
case"%":return object.width()*(parseFloat(val)/ 100);
}}else{return undefined;}}
function toggleSwiperInnerVideos(swiper){var videos;$.grep(swiper.slides,function(element,index){var $slide=$(element),video;if(index===swiper.activeIndex){videos=$slide.find("video");if(videos.length){videos.get(0).play();}}else{$slide.find("video").each(function(){this.pause();});}});}
function toggleSwiperCaptionAnimation(swiper){if(isIE()&&isIE()<10){return;}
var prevSlide=$(swiper.container),nextSlide=$(swiper.slides[swiper.activeIndex]);prevSlide.find("[data-caption-animate]").each(function(){var $this=$(this);$this.removeClass("animated").removeClass($this.attr("data-caption-animate")).addClass("not-animated");});nextSlide.find("[data-caption-animate]").each(function(){var $this=$(this),delay=$this.attr("data-caption-delay");setTimeout(function(){$this.removeClass("not-animated").addClass($this.attr("data-caption-animate")).addClass("animated");},delay?parseInt(delay):0);});}
$(document).ready(function(){o.each(function(){var s=$(this);var pag=s.find(".swiper-pagination"),next=s.find(".swiper-button-next"),prev=s.find(".swiper-button-prev"),bar=s.find(".swiper-scrollbar"),h=getSwiperHeight(o,"height"),mh=getSwiperHeight(o,"min-height");s.find(".swiper-slide").each(function(){var $this=$(this),url;if(url=$this.attr("data-slide-bg")){$this.css({"background-image":"url("+ url+")","background-size":"cover"})}}).end().find("[data-caption-animate]").addClass("not-animated").end().swiper({autoplay:s.attr('data-autoplay')?s.attr('data-autoplay')==="false"?undefined:s.attr('data-autoplay'):5000,direction:s.attr('data-direction')?s.attr('data-direction'):"horizontal",effect:s.attr('data-slide-effect')?s.attr('data-slide-effect'):"slide",speed:s.attr('data-slide-speed')?s.attr('data-slide-speed'):600,keyboardControl:s.attr('data-keyboard')==="true",mousewheelControl:s.attr('data-mousewheel')==="true",mousewheelReleaseOnEdges:s.attr('data-mousewheel-release')==="true",nextButton:next.length?next.get(0):null,prevButton:prev.length?prev.get(0):null,pagination:pag.length?pag.get(0):null,paginationClickable:pag.length?pag.attr("data-clickable")!=="false":false,paginationBulletRender:pag.length?pag.attr("data-index-bullet")==="true"?function(index,className){return'<span class="'+ className+'">'+(index+ 1)+'</span>';}:null:null,scrollbar:bar.length?bar.get(0):null,scrollbarDraggable:bar.length?bar.attr("data-draggable")!=="false":true,scrollbarHide:bar.length?bar.attr("data-draggable")==="false":false,loop:s.attr('data-loop')!=="false",onTransitionStart:function(swiper){toggleSwiperInnerVideos(swiper);},onTransitionEnd:function(swiper){toggleSwiperCaptionAnimation(swiper);},onInit:function(swiper){toggleSwiperInnerVideos(swiper);toggleSwiperCaptionAnimation(swiper);var o=$(swiper.container).find('.rd-parallax');if(o.length&&window.RDParallax){o.RDParallax({layerDirection:($('html').hasClass("smoothscroll")||$('html').hasClass("smoothscroll-all"))&&!isIE()?"normal":"inverse"});}}});$(window).on("resize",function(){var mh=getSwiperHeight(s,"min-height"),h=getSwiperHeight(s,"height");if(h){s.css("height",mh?mh>h?mh:h:h);}}).load(function(){s.find("video").each(function(){if(!$(this).parents(".swiper-slide-active").length){this.pause();}});}).trigger("resize");});});}})(jQuery);;(function($){var o=$('.accordion');if(o.length>0){include('js/jquery.ui.accordion.min.js');$(document).ready(function(){o.accordion({active:0,header:'.accordion_header',heightStyle:'content',collapsible:true});});}})(jQuery);;(function($){var o=$('.rd-parallax');if(o.length>0){include('js/jquery.rd-parallax.js');$(document).ready(function(){o.each(function(){$(this).RDParallax({direction:($('html').hasClass("smoothscroll")||$('html').hasClass("smoothscroll-all"))&&!isIE()?"normal":"inverse"});});});}})(jQuery);