
(function(){var g=true,h=null,i=false,j=(new Date).getTime();var k=this,aa=function(a,b,c){a=a.split(".");c=c||k;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)if(!a.length&&b!==undefined)c[d]=b;else c=c[d]?c[d]:c[d]={}},ba=function(a){return a.call.apply(a.bind,arguments)},ca=function(a,b){var c=b||k;if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(c,e)}}else return function(){return a.apply(c,
arguments)}},l=function(){l=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ba:ca;return l.apply(h,arguments)};var m=function(a){a=parseFloat(a);return isNaN(a)||a>1||a<0?0:a},p=function(a){if(a=="true")return g;return i},da=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,t=function(a){if(!a)return"pagead2.googlesyndication.com";return(a=a.match(da))?a[0]:"pagead2.googlesyndication.com"};var ea=function(){return t("")};var fa=/&/g,ha=/</g,ia=/>/g,ja=/\"/g,u={"\u0000":"\\0","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\x0B",'"':'\\"',"\\":"\\\\"},v={"'":"\\'"},y=function(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};var z,A,B,C,E=function(){return k.navigator?k.navigator.userAgent:h};C=B=A=z=i;var F;if(F=E()){var ka=k.navigator;z=F.indexOf("Opera")==0;A=!z&&F.indexOf("MSIE")!=-1;B=!z&&F.indexOf("WebKit")!=-1;C=!z&&!B&&ka.product=="Gecko"}var G=A,la=C,ma=B,H;
a:{var I="",J;if(z&&k.opera){var K=k.opera.version;I=typeof K=="function"?K():K}else{if(la)J=/rv\:([^\);]+)(\)|;)/;else if(G)J=/MSIE\s+([^\);]+)(\)|;)/;else if(ma)J=/WebKit\/(\S+)/;if(J){var na=J.exec(E());I=na?na[1]:""}}if(G){var L,oa=k.document;L=oa?oa.documentMode:undefined;if(L>parseFloat(I)){H=String(L);break a}}H=I}
var pa=H,qa={},ra=function(){if(!qa["9"]){for(var a=0,b=String(pa).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),c=String("9").replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=Math.max(b.length,c.length),e=0;a==0&&e<d;e++){var f=b[e]||"",ta=c[e]||"",s=RegExp("(\\d*)(\\D*)","g"),n=RegExp("(\\d*)(\\D*)","g");do{var o=s.exec(f)||["","",""],q=n.exec(ta)||["","",""];if(o[0].length==0&&q[0].length==0)break;a=y(o[1].length==0?0:parseInt(o[1],10),q[1].length==0?0:parseInt(q[1],10))||y(o[2].length==0,q[2].length==
0)||y(o[2],q[2])}while(a==0)}qa["9"]=a>=0}};!G||ra();G&&ra();var sa=document,N=window;t("");var O=function(a){return!!a&&typeof a=="function"&&!!a.call},ua=function(a){if(!(arguments.length<2))for(var b=1,c=arguments.length;b<c;++b)a.push(arguments[b])};function P(a){return typeof encodeURIComponent=="function"?encodeURIComponent(a):escape(a)}function va(a,b){if(a.attachEvent)a.attachEvent("onload",b);else a.addEventListener&&a.addEventListener("load",b,i)}
function wa(a,b){if(!(Math.random()<1.0E-4)){var c=Math.random();if(c<b)return a[Math.floor(c/b*a.length)]}return""};var xa=m("0"),ya=m("0"),za=m("0"),Aa=m("0.02");var Ba=p("false"),Ca=p("false"),Da=p("false");aa("google_protectAndRun",function(a,b,c){a=l(b,k,a);b=window.onerror;window.onerror=a;try{c()}catch(d){c=d.toString();var e="";if(d.fileName)e=d.fileName;var f=-1;if(d.lineNumber)f=d.lineNumber;if(!a(c,e,f))throw d;}window.onerror=b},void 0);
aa("google_handleError",function(a,b,c,d){if(Math.random()<0.01){a=["http://",ea(),"/pagead/gen_204","?id=jserror","&jscb=",Ba?1:0,"&jscd=",Ca?1:0,"&context=",P(a),"&msg=",P(b),"&file=",P(c),"&line=",P(d.toString()),"&url=",P(sa.URL.substring(0,512)),"&ref=",P(sa.referrer.substring(0,512))];a.push(["&client=",P(N.google_ad_client),"&format=",P(N.google_ad_format),"&slotname=",P(N.google_ad_slot),"&output=",P(N.google_ad_output),"&ad_type=",P(N.google_ad_type)].join(""));a=a.join("");N.google_image_requests||
(N.google_image_requests=[]);b=new Image;b.src=a;N.google_image_requests.push(b)}return!Da},void 0);var Ea=function(a){try{var b=a.google_test;a.google_test=!b;if(a.google_test===!b){a.google_test=b;return g}}catch(c){}return i},Q=h,Fa=function(){if(!Q){for(var a=window;a!=a.parent&&Ea(a.parent);)a=a.parent;Q=a}return Q};var R,S=function(a){this.d=[];this.b=a||window;this.a=0;this.c=h},Ga=function(a,b){this.j=a;this.o=b};S.prototype.i=function(a,b){if(this.a==0&&this.d.length==0&&(!b||b==window)){this.a=2;this.h(new Ga(a,window))}else this.f(a,b)};S.prototype.f=function(a,b){this.d.push(new Ga(a,b||this.b));T(this)};S.prototype.k=function(a){this.a=1;if(a)this.c=this.b.setTimeout(l(this.g,this),a)};S.prototype.g=function(){if(this.a==1){if(this.c!=h){this.b.clearTimeout(this.c);this.c=h}this.a=0}T(this)};
S.prototype.m=function(){return g};S.prototype.nq=S.prototype.i;S.prototype.nqa=S.prototype.f;S.prototype.al=S.prototype.k;S.prototype.rl=S.prototype.g;S.prototype.sz=S.prototype.m;var T=function(a){a.b.setTimeout(l(a.n,a),0)};S.prototype.n=function(){if(this.a==0&&this.d.length){var a=this.d.shift();this.a=2;a.o.setTimeout(l(this.h,this,a),0);T(this)}};S.prototype.h=function(a){this.a=0;a.j()};
var Ia=function(a){try{return a.sz()}catch(b){return i}},Ja=function(a){return!!a&&(typeof a=="object"||typeof a=="function")&&Ia(a)&&O(a.nq)&&O(a.nqa)&&O(a.al)&&O(a.rl)},Ka=function(){if(R&&Ia(R))return R;var a=Fa(),b=a.google_jobrunner;if(Ja(b))return R=b;return a.google_jobrunner=R=new S(a)},La=function(a,b){Ka().nq(a,b)},Ma=function(a,b){Ka().nqa(a,b)};var Na,Oa;Oa=Na=i;var U=E();if(U)if(U.indexOf("Firefox")!=-1)Na=g;else if(U.indexOf("Camino")==-1)if(!(U.indexOf("iPhone")!=-1||U.indexOf("iPod")!=-1))if(U.indexOf("iPad")==-1)if(U.indexOf("Android")==-1)if(U.indexOf("Chrome")!=-1)Oa=g;var Pa=Na,Qa=Oa;var Ra=function(a,b,c){var d=["<iframe"],e;for(e in a)a.hasOwnProperty(e)&&ua(d,e+"="+a[e]);d.push('style="left:0;position:absolute;top:0;"');d.push("></iframe>");b="border:none;height:"+c+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+b+"px";return['<ins style="display:inline-table;',b,'"><ins id="',a.id+"_anchor",'" style="display:block;',b,'">',d.join(" "),"</ins></ins>"].join("")};var Sa=function(){},Ua=function(a,b,c){switch(typeof b){case "string":Ta(a,b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==h){c.push("null");break}if(b instanceof Array){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++){c.push(e);Ua(a,b[f],c);e=","}c.push("]");break}c.push("{");d="";for(e in b)if(b.hasOwnProperty(e)){f=b[e];if(typeof f!="function"){c.push(d);Ta(a,e,c);c.push(":");Ua(a,
f,c);d=","}}c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},Va={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\u000b"},Wa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Ta=function(a,b,c){c.push('"');c.push(b.replace(Wa,function(d){if(d in Va)return Va[d];var e=d.charCodeAt(0),f="\\u";if(e<16)f+="000";else if(e<256)f+="00";else if(e<4096)f+="0";return Va[d]=f+e.toString(16)}));
c.push('"')};var V=["google_ad_block","google_ad_channel","google_ad_client","google_ad_format","google_ad_height","google_ad_host","google_ad_host_channel","google_ad_host_tier_id","google_ad_output","google_ad_override","google_ad_region","google_ad_section","google_ad_slot","google_ad_type","google_ad_width","google_adtest","google_allow_expandable_ads","google_alternate_ad_url","google_alternate_color","google_analytics_domain_name","google_analytics_uacct","google_bid","google_city","google_color_bg","google_color_border",
"google_color_line","google_color_link","google_color_text","google_color_url","google_container_id","google_contents","google_country","google_cpm","google_ctr_threshold","google_cust_age","google_cust_ch","google_cust_gender","google_cust_id","google_cust_interests","google_cust_job","google_cust_l","google_cust_lh","google_cust_u_url","google_disable_video_autoplay","google_ed","google_eids","google_enable_osd","google_encoding","google_font_face","google_font_size","google_frame_id","google_gl",
"google_hints","google_image_size","google_kw","google_kw_type","google_language","google_max_num_ads","google_max_radlink_len","google_num_radlinks","google_num_radlinks_per_unit","google_num_slots_to_rotate","google_only_ads_with_video","google_only_pyv_ads","google_only_userchoice_ads","google_override_format","google_page_url","google_referrer_url","google_region","google_reuse_colors","google_rl_dest_url","google_rl_filtering","google_rl_mode","google_rt","google_safe","google_skip","google_tag_info",
"google_targeting","google_ui_features","google_ui_version","google_video_doc_id","google_video_product_type","google_with_pyv_ads"];var Xa=function(a){this.b=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},log:[],img:Math.random()<0.1?[]:h});this.e=a.google_iframe_oncopy;a.setTimeout(l(this.l,this),3E4)},Ya;var W="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){i+='.call';setTimeout(h,0)}else if(h.match){i+='.nav';w.location.replace(h)}s.log&&s.log.push(i)}";
if(/[&<>\"]/.test(W)){if(W.indexOf("&")!=-1)W=W.replace(fa,"&amp;");if(W.indexOf("<")!=-1)W=W.replace(ha,"&lt;");if(W.indexOf(">")!=-1)W=W.replace(ia,"&gt;");if(W.indexOf('"')!=-1)W=W.replace(ja,"&quot;")}Ya=W;Xa.prototype.set=function(a,b){this.e.handlers[a]=b};
Xa.prototype.l=function(){if(this.e.img){var a=this.e.log,b=this.b.document;if(a.length){b=["http://",ea(),"/pagead/gen_204?id=iframecopy&log=",P(a.join("-")),"&url=",P(b.URL.substring(0,512)),"&ref=",P(b.referrer.substring(0,512))].join("");a.length=0;a=new Image;this.e.img.push(a);a.src=b}}};var Za=function(){var a="script";return["<",a,' src="http://',t(""),'/pagead/js/r20101117/r20110208/show_ads_impl.js"></',a,">"].join("")},$a=function(a,b,c,d){return function(){var e=i;d&&Ka().al(3E4);try{var f;try{f=!!a.document.getElementById(b).contentWindow.document}catch(ta){f=i}if(f){var s=a.document.getElementById(b).contentWindow,
n=s.document;if(!(n.body&&n.body.firstChild)){n.open();s.google_async_iframe_close=g;n.write(c)}}else{var o=a.document.getElementById(b).contentWindow,q;f=c;f=String(f);if(f.quote)q=f.quote();else{s=['"'];for(n=0;n<f.length;n++){var M=f.charAt(n),Ha=M.charCodeAt(0),ob=s,pb=n+1,ga;if(!(ga=u[M])){var D;if(Ha>31&&Ha<127)D=M;else{var r=M;if(r in v)D=v[r];else if(r in u)D=v[r]=u[r];else{var w=r,x=r.charCodeAt(0);if(x>31&&x<127)w=r;else{if(x<256){w="\\x";if(x<16||x>256)w+="0"}else{w="\\u";if(x<4096)w+=
"0"}w+=x.toString(16).toUpperCase()}D=v[r]=w}}ga=D}ob[pb]=ga}s.push('"');q=s.join("")}o.location.replace("javascript:"+q)}e=g}catch(wb){o=Fa().google_jobrunner;Ja(o)&&o.rl()}e&&(new Xa(a)).set(b,$a(a,b,c,i))}},ab=function(){return xa&&ya/xa||typeof window.google_hash_ratio=="number"&&window.google_hash_ratio||h};window.google_loader_used=g;(function(a){if(!("google_onload_fired"in a)){a.google_onload_fired=i;va(a,function(){a.google_onload_fired=g})}})(window);if(!window.google_loader_experiment)window.google_loader_experiment=za?wa(["async0","block0"],za)||"none":wa(["async1_ffch","async1_all","block1"],Aa)||"none";
var bb,cb=function(){var a=navigator.userAgent;if(!a.match(/Opera/))if(a.match(/Firefox/))return"ff";else if(a.match(/Chrome/))return"ch";else if(a.match(/MSIE 8/))return"ie8";else if(a.match(/MSIE 7/))return a.match(/Trident/)?"iec":"ie7";return"xx"}(),db=window.google_loader_experiment;
if(bb=window.google_enable_async===g||db=="async0"||db=="async1_all"||db=="async1_ffch"&&/ff|ch/.test(cb))bb=window.google_enable_async===i?i:(G&&/MSIE 8/.test(navigator.userAgent)||Qa||Pa&&!!window.document.body)&&!window.google_container_id&&(!window.google_ad_output||window.google_ad_output=="html");
if(bb){var eb=window;if(eb.google_unique_id)++eb.google_unique_id;else eb.google_unique_id=1;for(var X=window,_script$$inline_212="script",Y,Z={allowtransparency:'"true"',frameborder:'"0"',height:'"'+X.google_ad_height+'"',hspace:'"0"',marginwidth:'"0"',marginheight:'"0"',onload:'"'+Ya+'"',scrolling:'"no"',vspace:'"0"',width:'"'+X.google_ad_width+'"'},fb=X.document,$=Z.id,gb=0;!$||X.document.getElementById($);)$="aswift_"+gb++;Z.id=$;Z.name=$;fb.write(Ra(Z,X.google_ad_width,X.google_ad_height));Y=
$;var hb;if(X.google_page_url)X.google_page_url=String(X.google_page_url);for(var ib=[],jb=0,kb=V.length;jb<kb;jb++){var lb=V[jb];if(X[lb]!=h){var mb;try{var nb=[];Ua(new Sa,X[lb],nb);mb=nb.join("")}catch(qb){}mb&&ua(ib,lb,"=",mb,";")}}hb=ib.join("");for(var rb=0,sb=V.length;rb<sb;rb++)X[V[rb]]=h;var tb=(new Date).getTime(),ub=ab(),vb=window.google_loader_experiment,xb=["<!doctype html><html><body><",_script$$inline_212,">",hb,"google_show_ads_impl=true;google_unique_id=",X.google_unique_id,';google_async_iframe_id="',
Y,'";google_start_time=',j,";",ub?"google_hash_ratio="+ub+";":"",vb?'google_loader_experiment="'+vb+'";':"","google_bpp=",tb>j?tb-j:1,";</",_script$$inline_212,">",Za(),"</body></html>"].join("");(X.document.getElementById(Y)?La:Ma)($a(X,Y,xb,g))}else{window.google_start_time=j;window.google_hash_ratio=ab();document.write(Za())};})();
