var translation={infoWindowMap:"İçerik Yükleniyor"};function CustomMap(t,e){t=t||{};var o={settings:{center:new google.maps.LatLng(39.08719,35.177914),zoom:7,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.HORIZONTAL_BAR,position:google.maps.ControlPosition.BOTTOM_CENTER},panControl:!isMobile,panControlOptions:{position:google.maps.ControlPosition.TOP_RIGHT},zoomControl:!0,zoomControlOptions:{style:google.maps.ZoomControlStyle.SMALL,position:google.maps.ControlPosition.TOP_RIGHT},styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#a1cbff"},{visibility:"on"}]}]},iconSrc:{normal:googleMapPinPath+"map-pin.png",selected:googleMapPinPath+"map-pin.png",myCurrentPosition:googleMapPinPath+"location.png",clustering:googleMapPinPath+"map-pin.png"}};this.ID=t.ID||"",this.opt=utils.extend(o,t.options||{}),this.callback=e,this.init()}!function(){var t,g=null;function e(e){return function(t){this[e]=t}}function o(t){return function(){return this[t]}}function a(t,e,o){this.extend(a,google.maps.OverlayView),this.c=t,this.a=[],this.f=[],this.ca=[53,56,66,78,90],this.j=[],this.A=!1,this.g=(o=o||{}).gridSize||60,this.l=o.minimumClusterSize||2,this.J=o.maxZoom||g,this.j=o.styles||[],this.X=o.imagePath||this.Q,this.W=o.imageExtension||this.P,this.O=!0,null!=o.zoomOnClick&&(this.O=o.zoomOnClick),this.r=!1,null!=o.averageCenter&&(this.r=o.averageCenter);var n=this;if(!n.j.length)for(var i,r=0;i=n.ca[r];r++)n.j.push({url:n.X+(r+1)+"."+n.W,height:i,width:i});this.setMap(t),this.K=this.c.getZoom();var s=this;google.maps.event.addListener(this.c,"zoom_changed",function(){var t=s.c.getZoom();s.K!=t&&(s.K=t,s.m())}),google.maps.event.addListener(this.c,"idle",function(){s.i()}),e&&e.length&&this.C(e,!1)}function i(t,e){e.s=!1,e.draggable&&google.maps.event.addListener(e,"dragend",function(){e.s=!1,t.L()}),t.a.push(e)}function r(t,e){var o=-1;if(t.a.indexOf)o=t.a.indexOf(e);else for(var n,i=0;n=t.a[i];i++)if(n==e){o=i;break}return-1!=o&&(e.setMap(g),t.a.splice(o,1),!0)}function n(t){if(t.A)for(var e,o=t.v(new google.maps.LatLngBounds(t.c.getBounds().getSouthWest(),t.c.getBounds().getNorthEast())),n=0;e=t.a[n];n++)if(!e.s&&o.contains(e.getPosition())){for(var i=t,r=4e4,s=g,a=0,l=void 0;l=i.f[a];a++){var c,p,u,h=l.getCenter();h&&(c=e.getPosition(),(h=h&&c?(p=(c.lat()-h.lat())*Math.PI/180,u=(c.lng()-h.lng())*Math.PI/180,h=Math.sin(p/2)*Math.sin(p/2)+Math.cos(h.lat()*Math.PI/180)*Math.cos(c.lat()*Math.PI/180)*Math.sin(u/2)*Math.sin(u/2),12742*Math.atan2(Math.sqrt(h),Math.sqrt(1-h))):0)<r)&&(r=h,s=l)}s&&s.F.contains(e.getPosition())?s.q(e):((l=new d(i)).q(e),i.f.push(l))}}function d(t){this.k=t,this.c=t.getMap(),this.g=t.w(),this.l=t.l,this.r=t.r,this.d=g,this.a=[],this.F=g,this.n=new l(this,t.z(),t.w())}function s(t){t.F=t.k.v(new google.maps.LatLngBounds(t.d,t.d))}function l(t,e,o){t.k.extend(l,google.maps.OverlayView),this.j=e,this.fa=o||0,this.u=t,this.d=g,this.c=t.getMap(),this.B=this.b=g,this.t=!1,this.setMap(this.c)}function c(t,e){e=t.getProjection().fromLatLngToDivPixel(e);return e.x-=parseInt(t.p/2,10),e.y-=parseInt(t.h/2,10),e}function p(t){t.b&&(t.b.style.display="none"),t.t=!1}function u(t,e){var o=[];return o.push("background-image:url("+t.da+");"),o.push("background-position:"+(t.D||"0 0")+";"),"object"==typeof t.e?("number"==typeof t.e[0]&&0<t.e[0]&&t.e[0]<t.h?o.push("height:"+(t.h-t.e[0])+"px; padding-top:"+t.e[0]+"px;"):o.push("height:"+t.h+"px; line-height:"+t.h+"px;"),"number"==typeof t.e[1]&&0<t.e[1]&&t.e[1]<t.p?o.push("width:"+(t.p-t.e[1])+"px; padding-left:"+t.e[1]+"px;"):o.push("width:"+t.p+"px; text-align:center;")):o.push("height:"+t.h+"px; line-height:"+t.h+"px; width:"+t.p+"px; text-align:center;"),o.push("cursor:pointer; top:"+e.y+"px; left:"+e.x+"px; color:"+(t.M||"black")+"; position:absolute; font-size:"+(t.N||11)+"px; font-family:Arial,sans-serif; font-weight:bold"),o.join("")}(t=a.prototype).Q="http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m",t.P="png",t.extend=function(t,e){return function(t){for(var e in t.prototype)this.prototype[e]=t.prototype[e];return this}.apply(t,[e])},t.onAdd=function(){this.A||(this.A=!0,n(this))},t.draw=function(){},t.S=function(){for(var t,e=this.o(),o=new google.maps.LatLngBounds,n=0;t=e[n];n++)o.extend(t.getPosition());this.c.fitBounds(o)},t.z=o("j"),t.o=o("a"),t.V=function(){return this.a.length},t.ba=e("J"),t.I=o("J"),t.G=function(t,e){for(var o=0,t=t.length,n=t;0!==n;)n=parseInt(n/10,10),o++;return{text:t,index:o=Math.min(o,e)}},t.$=e("G"),t.H=o("G"),t.C=function(t,e){for(var o,n=0;o=t[n];n++)i(this,o);e||this.i()},t.q=function(t,e){i(this,t),e||this.i()},t.Y=function(t,e){t=r(this,t);return!(e||!t||(this.m(),this.i(),0))},t.Z=function(t,e){for(var o,n=!1,i=0;o=t[i];i++)o=r(this,o),n=n||o;if(!e&&n)return this.m(),this.i(),!0},t.U=function(){return this.f.length},t.getMap=o("c"),t.setMap=e("c"),t.w=o("g"),t.aa=e("g"),t.v=function(t){var e=this.getProjection(),o=new google.maps.LatLng(t.getNorthEast().lat(),t.getNorthEast().lng()),n=new google.maps.LatLng(t.getSouthWest().lat(),t.getSouthWest().lng());return(o=e.fromLatLngToDivPixel(o)).x+=this.g,o.y-=this.g,(n=e.fromLatLngToDivPixel(n)).x-=this.g,n.y+=this.g,o=e.fromDivPixelToLatLng(o),e=e.fromDivPixelToLatLng(n),t.extend(o),t.extend(e),t},t.R=function(){this.m(!0),this.a=[]},t.m=function(t){for(var e,o=0;e=this.f[o];o++)e.remove();for(o=0;e=this.a[o];o++)e.s=!1,t&&e.setMap(g);this.f=[]},t.L=function(){var o=this.f.slice();this.f.length=0,this.m(),this.i(),window.setTimeout(function(){for(var t,e=0;t=o[e];e++)t.remove()},0)},t.i=function(){n(this)},(t=d.prototype).q=function(t){var e,o;t:if(this.a.indexOf)e=-1!=this.a.indexOf(t);else{e=0;for(;o=this.a[e];e++)if(o==t){e=!0;break t}e=!1}if(e)return!1;if(this.d?this.r&&(o=this.a.length+1,e=(this.d.lat()*(o-1)+t.getPosition().lat())/o,o=(this.d.lng()*(o-1)+t.getPosition().lng())/o,this.d=new google.maps.LatLng(e,o),s(this)):(this.d=t.getPosition(),s(this)),t.s=!0,this.a.push(t),(e=this.a.length)<this.l&&t.getMap()!=this.c&&t.setMap(this.c),e==this.l)for(o=0;o<e;o++)this.a[o].setMap(g);if(e>=this.l&&t.setMap(g),t=this.c.getZoom(),(e=this.k.I())&&e<t)for(t=0;e=this.a[t];t++)e.setMap(this.c);else this.a.length<this.l?p(this.n):(e=this.k.H()(this.a,this.k.z().length),this.n.setCenter(this.d),(t=this.n).B=e,t.ga=e.text,t.ea=e.index,t.b&&(t.b.innerHTML=e.text),e=Math.max(0,t.B.index-1),e=Math.min(t.j.length-1,e),e=t.j[e],t.da=e.url,t.h=e.height,t.p=e.width,t.M=e.textColor,t.e=e.anchor,t.N=e.textSize,t.D=e.backgroundPosition,this.n.show());return!0},t.getBounds=function(){for(var t,e=new google.maps.LatLngBounds(this.d,this.d),o=this.o(),n=0;t=o[n];n++)e.extend(t.getPosition());return e},t.remove=function(){this.n.remove(),this.a.length=0,delete this.a},t.T=function(){return this.a.length},t.o=o("a"),t.getCenter=o("d"),t.getMap=o("c"),(t=l.prototype).onAdd=function(){this.b=document.createElement("DIV"),this.t&&(this.b.style.cssText=u(this,c(this,this.d)),this.b.innerHTML=this.B.text),this.getPanes().overlayMouseTarget.appendChild(this.b);var e=this;google.maps.event.addDomListener(this.b,"click",function(){var t=e.u.k;google.maps.event.trigger(t,"clusterclick",e.u),t.O&&e.c.fitBounds(e.u.getBounds())})},t.draw=function(){var t;this.t&&(t=c(this,this.d),this.b.style.top=t.y+"px",this.b.style.left=t.x+"px")},t.show=function(){this.b&&(this.b.style.cssText=u(this,c(this,this.d)),this.b.style.display=""),this.t=!0},t.remove=function(){this.setMap(g)},t.onRemove=function(){this.b&&this.b.parentNode&&(p(this),this.b.parentNode.removeChild(this.b),this.b=g)},t.setCenter=e("d"),(window.MarkerClusterer=a).prototype.addMarker=a.prototype.q,a.prototype.addMarkers=a.prototype.C,a.prototype.clearMarkers=a.prototype.R,a.prototype.fitMapToMarkers=a.prototype.S,a.prototype.getCalculator=a.prototype.H,a.prototype.getGridSize=a.prototype.w,a.prototype.getExtendedBounds=a.prototype.v,a.prototype.getMarkers=a.prototype.o,a.prototype.getMaxZoom=a.prototype.I,a.prototype.getStyles=a.prototype.z,a.prototype.getTotalClusters=a.prototype.U,a.prototype.getTotalMarkers=a.prototype.V,a.prototype.redraw=a.prototype.i,a.prototype.removeMarker=a.prototype.Y,a.prototype.removeMarkers=a.prototype.Z,a.prototype.resetViewport=a.prototype.m,a.prototype.repaint=a.prototype.L,a.prototype.setCalculator=a.prototype.$,a.prototype.setGridSize=a.prototype.aa,a.prototype.setMaxZoom=a.prototype.ba,d.prototype.getSize=d.prototype.T,d.prototype.getMarkers=d.prototype.o}();var storesAvaiblableDelivery={el:{btn:".pay-click-collect .fake-dropdown",closeBtn:".map-view-close-btn",wrapper:".modal-dialog",itemBtn:".srv-item .srv-map button",title:".srv-name",mapContent:".map-view-content",mapContentSel:".map-view-content .btn-selection"},cls:{activeted:"map-view-activeted"},map:null,loaded:!(CustomMap.prototype={constructor:CustomMap,map:null,infowindow:null,googleMarkerClusterer:null,currentLocation:null,markersArr:[],speed:100,zoomout:null,zoomin:null,currentMarker:null,bound:null,dispatcher:function(t){"undefined"!=typeof stage&&stage.dispatchEvent("CustomEvent","EVENTS_ON_MAP",t)},setMarkers:function(t){var e=this,o=!1;e.bound=new google.maps.LatLngBounds,e.deleteMarkers();for(var n=0;n<t.length;++n){var i,r=t[n],s=r.coor||"";""!=s&&-1!=s.indexOf(".")&&null!=s?(i=(s=s.split("|"))[0],s=s[1],i=new google.maps.LatLng(i,s),r.coor=i,e.addMarker(r),e.bound.extend(i),o=!0):e.markersArr.push(null)}e.googleMarkerClusterer.addMarkers(e.markersArr),o&&(google.maps.event.trigger(e.map,"resize"),setTimeout(function(){e.map.fitBounds(e.bound),setTimeout(function(){18<e.map.getZoom()&&e.map.setZoom(18)},2e3)},10))},addMarker:function(t){var e=this,o=new google.maps.Marker({position:t.coor,map:e.map,icon:e.opt.iconSrc[t.type||"normal"],draggable:!1,shadow:null,animation:google.maps.Animation.DROP,order:t.order||0,title:t.title||"",dsc:t.desc||"",htm:t.htm}),n=t.infoWindowAvailable||"true";e.markersArr.push(o),google.maps.event.addListener(o,"click",function(){var t=this;null!=e.currentMarker&&e.currentMarker.setIcon(e.opt.iconSrc.normal),t.setIcon(e.opt.iconSrc.selected),e.currentMarker=t,e.dispatcher({type:"markerClicked",data:{order:t.order,htm:t.htm}}),e.infowindow.close(),e.moveToPointZoom(this.position,14,{x:0,y:0},function(){utils.responsiveControl()||"true"!=n||(e.infowindow.setContent(t.dsc),e.infowindow.open(e.map,t)),e.dispatcher({type:"markerClickedInfoWındow",data:{order:t.order,dsc:t.dsc}})})})},deleteMarkers:function(){var t=this;if(0<t.markersArr.length){for(i in t.markersArr)null!=t.markersArr[i]&&t.markersArr[i].setMap(null);t.markersArr.length=0,t.googleMarkerClusterer.clearMarkers()}t.markersArr.length=0,t.markersArr=[]},focusedMarkers:function(t){t=this.markersArr[t]||"";""!=t&&google.maps.event.trigger(t,"click")},clearInt:function(){null!=this.zoomout&&clearInterval(this.zoomout),null!=this.zoomin&&clearInterval(this.zoomin)},moveToPointZoom:function(o,n,i,r){var s=this,a=s.map.getZoom(),l="";s.clearInt(),s.zoomout=setInterval(function(){var t,e;""!=(l=s.map.getBounds())&&void 0!==l.contains&&(l.contains(o)?(s.clearInt(),i&&(t=s.map.getProjection().fromLatLngToPoint(o),e=new google.maps.Point(("number"==typeof i.x?i.x:0)/Math.pow(2,n)||0,("number"==typeof i.y?i.y:0)/Math.pow(2,n)||0),o=s.map.getProjection().fromPointToLatLng(new google.maps.Point(t.x-e.x,t.y+e.y))),s.map.panTo(o),a=s.map.getZoom(),s.zoomin=setInterval(function(){a<n?(s.map.setZoom(a),a++):(s.clearInt(),void 0!==r&&r())},s.speed)):(s.map.setZoom(a),a--))},s.speed)},setCurrentLocation:function(){var e=this;null!=e.currentLocation?e.dispatcher({type:"locationShare",data:JSON.stringify(e.currentLocation)}):navigator.geolocation.getCurrentPosition(function(t){t.coords?(e.currentLocation={lat:t.coords.latitude,long:t.coords.longitude},utils.sessionStorage({type:"set",key:"myCurrentPosition",value:JSON.stringify(e.currentLocation)}),e.dispatcher({type:"locationShare",data:JSON.stringify(e.currentLocation)})):e.currentLocation=null})},getCurrentLocation:function(){var t=utils.sessionStorage({type:"get",key:"myCurrentPosition"})||"";""!==t&&(this.currentLocation=JSON.parse(t))},setMapSettings:function(){var t=this;t.map=new google.maps.Map(document.getElementById(t.ID),t.opt.settings),t.infowindow=new google.maps.InfoWindow({maxWidth:350,content:translation.infoWindowMap||"İçerik Yükleniyor"}),t.googleMarkerClusterer=new MarkerClusterer(t.map,[],{maxZoom:12,styles:[{textColor:"white",url:t.opt.iconSrc.clustering,height:59,width:49,anchor:[0,0]}]}),t.map.addListener("click",function(){t.dispatcher({type:"mapClicked"})})},init:function(){this.setMapSettings(),this.getCurrentLocation()}}),currentLocation:null,setCurrentLocation:function(){var e=this;null==e.currentLocation&&navigator.geolocation.getCurrentPosition(function(t){t.coords?(e.currentLocation={lat:t.coords.latitude,long:t.coords.longitude},utils.sessionStorage({type:"set",key:"myCurrentPosition",value:JSON.stringify(e.currentLocation)})):e.currentLocation=null})},getCurrentLocation:function(){var t=utils.sessionStorage({type:"get",key:"myCurrentPosition"})||"";""!==t&&(this.currentLocation=JSON.parse(t))},addEvent:function(){var r=this,s=$(r.el.wrapper);$(r.el.closeBtn).on("click",function(){s.removeClass(r.cls.activeted)}),$(r.el.btn).on("click",function(){r.initPlugins()}),$(r.el.itemBtn).on("click",function(t){t.preventDefault();var e,o,n,i=$(this).parents("[data-coor]"),t=i.attr("data-coor")||"";""!==t&&(o=i.find(r.el.title).text()||"",e=i[0].outerHTML||"",o=[{order:0,title:o,coor:t,infoWindowAvailable:"true"}],null!=r.currentLocation&&(t=r.currentLocation.lat||"",n=r.currentLocation.long||"",""!=t)&&""!=n&&o.push({order:-1,title:"my location",coor:t+"|"+n,infoWindowAvailable:"true",type:"myCurrentPosition"}),r.map.setMarkers(o),$(r.el.mapContent).html(e),s.addClass(r.cls.activeted),$(r.el.mapContentSel).on("click",function(){s.removeClass(r.cls.activeted),i.find(".btn-selection").trigger("click")}))})},initPlugins:function(){this.loaded||(this.loaded=!0,this.setCurrentLocation(),this.map=new CustomMap({ID:"Map"}))},init:function(){this.getCurrentLocation(),this.addEvent()}},stores={el:{wrp:".page-services",item:".srv-list .srv-item",btn:".srv-list .srv-item .srv-link",title:".srv-name",closeBtn:".map-view-close-btn",list:".map-view-content .srv-item",targetSlider:".map-view-content .swiper-wrapper"},cls:{activeted:"map-view-activeted",selected:"selected"},map:null,loaded:!1,currentLocation:null,setCurrentLocation:function(){var e=this;null==e.currentLocation&&navigator.geolocation.getCurrentPosition(function(t){t.coords?(e.currentLocation={lat:t.coords.latitude,long:t.coords.longitude},utils.sessionStorage({type:"set",key:"myCurrentPosition",value:JSON.stringify(e.currentLocation)})):e.currentLocation=null})},getCurrentLocation:function(){var t=utils.sessionStorage({type:"get",key:"myCurrentPosition"})||"";""!==t&&(this.currentLocation=JSON.parse(t))},setMarkers:function(){var t,i=this,e=document.querySelectorAll(i.el.list),r=[];utils.forEach(e,function(t,e){e.setAttribute("data-order",t);var o,n=e.getAttribute("data-coor")||"";""!=n?(o=e.innerHTML||"",r.push({order:t,title:e.querySelector(i.el.title).innerHTML||"",coor:n,desc:'<div class="tooltip-content">'+o+"</div>",htm:o,infoWindowAvailable:"true"})):r.push(null)}),null!=i.currentLocation&&(e=i.currentLocation.lat||"",t=i.currentLocation.long||"",""!=e)&&""!=t&&r.push({order:-1,title:"my location",coor:e+"|"+t,infoWindowAvailable:"true",type:"myCurrentPosition"}),i.map.setMarkers(r)},addEvent:function(){var o=this,n=document.querySelector(o.el.wrp),t=document.querySelectorAll(o.el.btn),e=document.querySelectorAll(o.el.closeBtn);utils.forEach(t,function(t,e){e.onclick=function(){var t=$(this);t.parents(".srv-item").addClass(o.cls.selected).siblings().removeClass(o.cls.selected),n.classList.add(o.cls.activeted),utils.responsiveControl()?(o.updateSwiper(),setTimeout(function(){o.focusedSwiper(t.parents(".srv-item").attr("data-order")||0)},50)):stores.focusedMarker(t.parents(".srv-item").attr("data-order")||0)}}),utils.forEach(e,function(t,e){e.onclick=function(){n.classList.remove(o.cls.activeted)}}),document.addEventListener("click",function(t){var e,t=t.target;t.classList.contains("srv-link")&&(t.closest(".map-view-content")||t.closest(".tooltip-content"))&&(e=t.getAttribute("data-href"),t=t.getAttribute("data-target"),e)&&(t?window.open(e,t):window.location.href=e)})},focusedSwiper:function(t){var e=$(".map-view-container .swiper-container");0<e.length&&e.get(0).focused(t)},updateSwiper:function(){var t=$(".map-view-container .swiper-container");0<t.length&&t.get(0).update()},focusedMarker:function(t){null!=this.map&&this.map.focusedMarkers(t)},setHtml:function(){var t=$(this.el.item).map(function(t){return'<li data-order="'+t+'" class="swiper-slide">'+$(this).get(0).outerHTML+"</li>"}).get().join(" ");$(this.el.targetSlider).html(t)},responseAjxRequest:function(){this.setHtml(),this.setMarkers()},initPlugins:function(){var t=this;t.loaded||(t.loaded=!0,t.setCurrentLocation(),t.map=new CustomMap({ID:"Map"}),t.responseAjxRequest(),t.addEvent())},init:function(){0<$(this.el.wrp).length&&(this.getCurrentLocation(),this.initPlugins(),$(".srv-item-selected .srv-link").trigger("click"))}};function ON_EVENTS_ON_MAP(t){var e=t.type||"",t=t.data||{};"markerClicked"===e&&console.log(t)}function ON_SERVICE_LIST_MAP(t){var e=$(t.ID||""),o=t.type||"";0<e.parents(".map-view-container").length&&"slideChangeTransitionEnd"===o&&stores.focusedMarker((t.swiper||{}).activeIndex||0)}stage.addEventListener("CustomEvent",[{type:"EVENTS_ON_MAP",handler:"ON_EVENTS_ON_MAP"}]),stage.addEventListener("CustomEvent",[{type:"SWIPER_ACTIVE_ELEMENT",handler:"ON_SERVICE_LIST_MAP"}]);