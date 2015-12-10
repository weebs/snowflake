// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17952__auto__ = [];
var len__17945__auto___152264 = arguments.length;
var i__17946__auto___152265 = (0);
while(true){
if((i__17946__auto___152265 < len__17945__auto___152264)){
args__17952__auto__.push((arguments[i__17946__auto___152265]));

var G__152266 = (i__17946__auto___152265 + (1));
i__17946__auto___152265 = G__152266;
continue;
} else {
}
break;
}

var argseq__17953__auto__ = ((((2) < args__17952__auto__.length))?(new cljs.core.IndexedSeq(args__17952__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17953__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__152256_152267 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__152257_152268 = null;
var count__152258_152269 = (0);
var i__152259_152270 = (0);
while(true){
if((i__152259_152270 < count__152258_152269)){
var k_152271 = cljs.core._nth.call(null,chunk__152257_152268,i__152259_152270);
e.setAttribute(cljs.core.name.call(null,k_152271),cljs.core.get.call(null,attrs,k_152271));

var G__152272 = seq__152256_152267;
var G__152273 = chunk__152257_152268;
var G__152274 = count__152258_152269;
var G__152275 = (i__152259_152270 + (1));
seq__152256_152267 = G__152272;
chunk__152257_152268 = G__152273;
count__152258_152269 = G__152274;
i__152259_152270 = G__152275;
continue;
} else {
var temp__4425__auto___152276 = cljs.core.seq.call(null,seq__152256_152267);
if(temp__4425__auto___152276){
var seq__152256_152277__$1 = temp__4425__auto___152276;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__152256_152277__$1)){
var c__17690__auto___152278 = cljs.core.chunk_first.call(null,seq__152256_152277__$1);
var G__152279 = cljs.core.chunk_rest.call(null,seq__152256_152277__$1);
var G__152280 = c__17690__auto___152278;
var G__152281 = cljs.core.count.call(null,c__17690__auto___152278);
var G__152282 = (0);
seq__152256_152267 = G__152279;
chunk__152257_152268 = G__152280;
count__152258_152269 = G__152281;
i__152259_152270 = G__152282;
continue;
} else {
var k_152283 = cljs.core.first.call(null,seq__152256_152277__$1);
e.setAttribute(cljs.core.name.call(null,k_152283),cljs.core.get.call(null,attrs,k_152283));

var G__152284 = cljs.core.next.call(null,seq__152256_152277__$1);
var G__152285 = null;
var G__152286 = (0);
var G__152287 = (0);
seq__152256_152267 = G__152284;
chunk__152257_152268 = G__152285;
count__152258_152269 = G__152286;
i__152259_152270 = G__152287;
continue;
}
} else {
}
}
break;
}

var seq__152260_152288 = cljs.core.seq.call(null,children);
var chunk__152261_152289 = null;
var count__152262_152290 = (0);
var i__152263_152291 = (0);
while(true){
if((i__152263_152291 < count__152262_152290)){
var ch_152292 = cljs.core._nth.call(null,chunk__152261_152289,i__152263_152291);
e.appendChild(ch_152292);

var G__152293 = seq__152260_152288;
var G__152294 = chunk__152261_152289;
var G__152295 = count__152262_152290;
var G__152296 = (i__152263_152291 + (1));
seq__152260_152288 = G__152293;
chunk__152261_152289 = G__152294;
count__152262_152290 = G__152295;
i__152263_152291 = G__152296;
continue;
} else {
var temp__4425__auto___152297 = cljs.core.seq.call(null,seq__152260_152288);
if(temp__4425__auto___152297){
var seq__152260_152298__$1 = temp__4425__auto___152297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__152260_152298__$1)){
var c__17690__auto___152299 = cljs.core.chunk_first.call(null,seq__152260_152298__$1);
var G__152300 = cljs.core.chunk_rest.call(null,seq__152260_152298__$1);
var G__152301 = c__17690__auto___152299;
var G__152302 = cljs.core.count.call(null,c__17690__auto___152299);
var G__152303 = (0);
seq__152260_152288 = G__152300;
chunk__152261_152289 = G__152301;
count__152262_152290 = G__152302;
i__152263_152291 = G__152303;
continue;
} else {
var ch_152304 = cljs.core.first.call(null,seq__152260_152298__$1);
e.appendChild(ch_152304);

var G__152305 = cljs.core.next.call(null,seq__152260_152298__$1);
var G__152306 = null;
var G__152307 = (0);
var G__152308 = (0);
seq__152260_152288 = G__152305;
chunk__152261_152289 = G__152306;
count__152262_152290 = G__152307;
i__152263_152291 = G__152308;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq152253){
var G__152254 = cljs.core.first.call(null,seq152253);
var seq152253__$1 = cljs.core.next.call(null,seq152253);
var G__152255 = cljs.core.first.call(null,seq152253__$1);
var seq152253__$2 = cljs.core.next.call(null,seq152253__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__152254,G__152255,seq152253__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17800__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17801__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17802__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17803__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17804__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17800__auto__,prefer_table__17801__auto__,method_cache__17802__auto__,cached_hierarchy__17803__auto__,hierarchy__17804__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17800__auto__,prefer_table__17801__auto__,method_cache__17802__auto__,cached_hierarchy__17803__auto__,hierarchy__17804__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17804__auto__,method_table__17800__auto__,prefer_table__17801__auto__,method_cache__17802__auto__,cached_hierarchy__17803__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_152309 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_152309.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_152309.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_152309.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_152309);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__152310,st_map){
var map__152315 = p__152310;
var map__152315__$1 = ((((!((map__152315 == null)))?((((map__152315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152315):map__152315);
var container_el = cljs.core.get.call(null,map__152315__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__152315,map__152315__$1,container_el){
return (function (p__152317){
var vec__152318 = p__152317;
var k = cljs.core.nth.call(null,vec__152318,(0),null);
var v = cljs.core.nth.call(null,vec__152318,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__152315,map__152315__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__152319,dom_str){
var map__152322 = p__152319;
var map__152322__$1 = ((((!((map__152322 == null)))?((((map__152322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152322):map__152322);
var c = map__152322__$1;
var content_area_el = cljs.core.get.call(null,map__152322__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__152324){
var map__152327 = p__152324;
var map__152327__$1 = ((((!((map__152327 == null)))?((((map__152327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152327):map__152327);
var content_area_el = cljs.core.get.call(null,map__152327__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto__){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto__){
return (function (state_152370){
var state_val_152371 = (state_152370[(1)]);
if((state_val_152371 === (1))){
var inst_152355 = (state_152370[(7)]);
var inst_152355__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_152356 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_152357 = ["10px","10px","100%","68px","1.0"];
var inst_152358 = cljs.core.PersistentHashMap.fromArrays(inst_152356,inst_152357);
var inst_152359 = cljs.core.merge.call(null,inst_152358,style);
var inst_152360 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_152355__$1,inst_152359);
var inst_152361 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_152355__$1,msg);
var inst_152362 = cljs.core.async.timeout.call(null,(300));
var state_152370__$1 = (function (){var statearr_152372 = state_152370;
(statearr_152372[(8)] = inst_152361);

(statearr_152372[(9)] = inst_152360);

(statearr_152372[(7)] = inst_152355__$1);

return statearr_152372;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152370__$1,(2),inst_152362);
} else {
if((state_val_152371 === (2))){
var inst_152355 = (state_152370[(7)]);
var inst_152364 = (state_152370[(2)]);
var inst_152365 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_152366 = ["auto"];
var inst_152367 = cljs.core.PersistentHashMap.fromArrays(inst_152365,inst_152366);
var inst_152368 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_152355,inst_152367);
var state_152370__$1 = (function (){var statearr_152373 = state_152370;
(statearr_152373[(10)] = inst_152364);

return statearr_152373;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152370__$1,inst_152368);
} else {
return null;
}
}
});})(c__19054__auto__))
;
return ((function (switch__18942__auto__,c__19054__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__18943__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__18943__auto____0 = (function (){
var statearr_152377 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_152377[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__18943__auto__);

(statearr_152377[(1)] = (1));

return statearr_152377;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__18943__auto____1 = (function (state_152370){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_152370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e152378){if((e152378 instanceof Object)){
var ex__18946__auto__ = e152378;
var statearr_152379_152381 = state_152370;
(statearr_152379_152381[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e152378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__152382 = state_152370;
state_152370 = G__152382;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__18943__auto__ = function(state_152370){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18943__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18943__auto____1.call(this,state_152370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__18943__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__18943__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto__))
})();
var state__19056__auto__ = (function (){var statearr_152380 = f__19055__auto__.call(null);
(statearr_152380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto__);

return statearr_152380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto__))
);

return c__19054__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__152384 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__152384,(0),null);
var ln = cljs.core.nth.call(null,vec__152384,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__152387 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__152387,(0),null);
var file_line = cljs.core.nth.call(null,vec__152387,(1),null);
var file_column = cljs.core.nth.call(null,vec__152387,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__152387,file_name,file_line,file_column){
return (function (p1__152385_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__152385_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__152387,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16887__auto__ = file_line;
if(cljs.core.truth_(or__16887__auto__)){
return or__16887__auto__;
} else {
var and__16875__auto__ = cause;
if(cljs.core.truth_(and__16875__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16875__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__152390 = figwheel.client.heads_up.ensure_container.call(null);
var map__152390__$1 = ((((!((map__152390 == null)))?((((map__152390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152390):map__152390);
var content_area_el = cljs.core.get.call(null,map__152390__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto__){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto__){
return (function (state_152438){
var state_val_152439 = (state_152438[(1)]);
if((state_val_152439 === (1))){
var inst_152421 = (state_152438[(7)]);
var inst_152421__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_152422 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_152423 = ["0.0"];
var inst_152424 = cljs.core.PersistentHashMap.fromArrays(inst_152422,inst_152423);
var inst_152425 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_152421__$1,inst_152424);
var inst_152426 = cljs.core.async.timeout.call(null,(300));
var state_152438__$1 = (function (){var statearr_152440 = state_152438;
(statearr_152440[(7)] = inst_152421__$1);

(statearr_152440[(8)] = inst_152425);

return statearr_152440;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152438__$1,(2),inst_152426);
} else {
if((state_val_152439 === (2))){
var inst_152421 = (state_152438[(7)]);
var inst_152428 = (state_152438[(2)]);
var inst_152429 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_152430 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_152431 = cljs.core.PersistentHashMap.fromArrays(inst_152429,inst_152430);
var inst_152432 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_152421,inst_152431);
var inst_152433 = cljs.core.async.timeout.call(null,(200));
var state_152438__$1 = (function (){var statearr_152441 = state_152438;
(statearr_152441[(9)] = inst_152432);

(statearr_152441[(10)] = inst_152428);

return statearr_152441;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152438__$1,(3),inst_152433);
} else {
if((state_val_152439 === (3))){
var inst_152421 = (state_152438[(7)]);
var inst_152435 = (state_152438[(2)]);
var inst_152436 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_152421,"");
var state_152438__$1 = (function (){var statearr_152442 = state_152438;
(statearr_152442[(11)] = inst_152435);

return statearr_152442;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152438__$1,inst_152436);
} else {
return null;
}
}
}
});})(c__19054__auto__))
;
return ((function (switch__18942__auto__,c__19054__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__18943__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__18943__auto____0 = (function (){
var statearr_152446 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_152446[(0)] = figwheel$client$heads_up$clear_$_state_machine__18943__auto__);

(statearr_152446[(1)] = (1));

return statearr_152446;
});
var figwheel$client$heads_up$clear_$_state_machine__18943__auto____1 = (function (state_152438){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_152438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e152447){if((e152447 instanceof Object)){
var ex__18946__auto__ = e152447;
var statearr_152448_152450 = state_152438;
(statearr_152448_152450[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e152447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__152451 = state_152438;
state_152438 = G__152451;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__18943__auto__ = function(state_152438){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__18943__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__18943__auto____1.call(this,state_152438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__18943__auto____0;
figwheel$client$heads_up$clear_$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__18943__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto__))
})();
var state__19056__auto__ = (function (){var statearr_152449 = f__19055__auto__.call(null);
(statearr_152449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto__);

return statearr_152449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto__))
);

return c__19054__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto__){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto__){
return (function (state_152483){
var state_val_152484 = (state_152483[(1)]);
if((state_val_152484 === (1))){
var inst_152473 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_152483__$1 = state_152483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152483__$1,(2),inst_152473);
} else {
if((state_val_152484 === (2))){
var inst_152475 = (state_152483[(2)]);
var inst_152476 = cljs.core.async.timeout.call(null,(400));
var state_152483__$1 = (function (){var statearr_152485 = state_152483;
(statearr_152485[(7)] = inst_152475);

return statearr_152485;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152483__$1,(3),inst_152476);
} else {
if((state_val_152484 === (3))){
var inst_152478 = (state_152483[(2)]);
var inst_152479 = figwheel.client.heads_up.clear.call(null);
var state_152483__$1 = (function (){var statearr_152486 = state_152483;
(statearr_152486[(8)] = inst_152478);

return statearr_152486;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152483__$1,(4),inst_152479);
} else {
if((state_val_152484 === (4))){
var inst_152481 = (state_152483[(2)]);
var state_152483__$1 = state_152483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152483__$1,inst_152481);
} else {
return null;
}
}
}
}
});})(c__19054__auto__))
;
return ((function (switch__18942__auto__,c__19054__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__18943__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__18943__auto____0 = (function (){
var statearr_152490 = [null,null,null,null,null,null,null,null,null];
(statearr_152490[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__18943__auto__);

(statearr_152490[(1)] = (1));

return statearr_152490;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__18943__auto____1 = (function (state_152483){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_152483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e152491){if((e152491 instanceof Object)){
var ex__18946__auto__ = e152491;
var statearr_152492_152494 = state_152483;
(statearr_152492_152494[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e152491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__152495 = state_152483;
state_152483 = G__152495;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__18943__auto__ = function(state_152483){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18943__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18943__auto____1.call(this,state_152483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__18943__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__18943__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto__))
})();
var state__19056__auto__ = (function (){var statearr_152493 = f__19055__auto__.call(null);
(statearr_152493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto__);

return statearr_152493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto__))
);

return c__19054__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map