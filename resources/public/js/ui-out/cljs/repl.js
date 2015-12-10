// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__152079_152093 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__152080_152094 = null;
var count__152081_152095 = (0);
var i__152082_152096 = (0);
while(true){
if((i__152082_152096 < count__152081_152095)){
var f_152097 = cljs.core._nth.call(null,chunk__152080_152094,i__152082_152096);
cljs.core.println.call(null,"  ",f_152097);

var G__152098 = seq__152079_152093;
var G__152099 = chunk__152080_152094;
var G__152100 = count__152081_152095;
var G__152101 = (i__152082_152096 + (1));
seq__152079_152093 = G__152098;
chunk__152080_152094 = G__152099;
count__152081_152095 = G__152100;
i__152082_152096 = G__152101;
continue;
} else {
var temp__4425__auto___152102 = cljs.core.seq.call(null,seq__152079_152093);
if(temp__4425__auto___152102){
var seq__152079_152103__$1 = temp__4425__auto___152102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__152079_152103__$1)){
var c__17690__auto___152104 = cljs.core.chunk_first.call(null,seq__152079_152103__$1);
var G__152105 = cljs.core.chunk_rest.call(null,seq__152079_152103__$1);
var G__152106 = c__17690__auto___152104;
var G__152107 = cljs.core.count.call(null,c__17690__auto___152104);
var G__152108 = (0);
seq__152079_152093 = G__152105;
chunk__152080_152094 = G__152106;
count__152081_152095 = G__152107;
i__152082_152096 = G__152108;
continue;
} else {
var f_152109 = cljs.core.first.call(null,seq__152079_152103__$1);
cljs.core.println.call(null,"  ",f_152109);

var G__152110 = cljs.core.next.call(null,seq__152079_152103__$1);
var G__152111 = null;
var G__152112 = (0);
var G__152113 = (0);
seq__152079_152093 = G__152110;
chunk__152080_152094 = G__152111;
count__152081_152095 = G__152112;
i__152082_152096 = G__152113;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_152114 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16887__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16887__auto__)){
return or__16887__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_152114);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_152114)))?cljs.core.second.call(null,arglists_152114):arglists_152114));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__152083 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__152084 = null;
var count__152085 = (0);
var i__152086 = (0);
while(true){
if((i__152086 < count__152085)){
var vec__152087 = cljs.core._nth.call(null,chunk__152084,i__152086);
var name = cljs.core.nth.call(null,vec__152087,(0),null);
var map__152088 = cljs.core.nth.call(null,vec__152087,(1),null);
var map__152088__$1 = ((((!((map__152088 == null)))?((((map__152088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152088):map__152088);
var doc = cljs.core.get.call(null,map__152088__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__152088__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__152115 = seq__152083;
var G__152116 = chunk__152084;
var G__152117 = count__152085;
var G__152118 = (i__152086 + (1));
seq__152083 = G__152115;
chunk__152084 = G__152116;
count__152085 = G__152117;
i__152086 = G__152118;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__152083);
if(temp__4425__auto__){
var seq__152083__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__152083__$1)){
var c__17690__auto__ = cljs.core.chunk_first.call(null,seq__152083__$1);
var G__152119 = cljs.core.chunk_rest.call(null,seq__152083__$1);
var G__152120 = c__17690__auto__;
var G__152121 = cljs.core.count.call(null,c__17690__auto__);
var G__152122 = (0);
seq__152083 = G__152119;
chunk__152084 = G__152120;
count__152085 = G__152121;
i__152086 = G__152122;
continue;
} else {
var vec__152090 = cljs.core.first.call(null,seq__152083__$1);
var name = cljs.core.nth.call(null,vec__152090,(0),null);
var map__152091 = cljs.core.nth.call(null,vec__152090,(1),null);
var map__152091__$1 = ((((!((map__152091 == null)))?((((map__152091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152091):map__152091);
var doc = cljs.core.get.call(null,map__152091__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__152091__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__152123 = cljs.core.next.call(null,seq__152083__$1);
var G__152124 = null;
var G__152125 = (0);
var G__152126 = (0);
seq__152083 = G__152123;
chunk__152084 = G__152124;
count__152085 = G__152125;
i__152086 = G__152126;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map