// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16887__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16887__auto__){
return or__16887__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16887__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16887__auto__)){
return or__16887__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__151055_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__151055_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__151060 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__151061 = null;
var count__151062 = (0);
var i__151063 = (0);
while(true){
if((i__151063 < count__151062)){
var n = cljs.core._nth.call(null,chunk__151061,i__151063);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__151064 = seq__151060;
var G__151065 = chunk__151061;
var G__151066 = count__151062;
var G__151067 = (i__151063 + (1));
seq__151060 = G__151064;
chunk__151061 = G__151065;
count__151062 = G__151066;
i__151063 = G__151067;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__151060);
if(temp__4425__auto__){
var seq__151060__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__151060__$1)){
var c__17690__auto__ = cljs.core.chunk_first.call(null,seq__151060__$1);
var G__151068 = cljs.core.chunk_rest.call(null,seq__151060__$1);
var G__151069 = c__17690__auto__;
var G__151070 = cljs.core.count.call(null,c__17690__auto__);
var G__151071 = (0);
seq__151060 = G__151068;
chunk__151061 = G__151069;
count__151062 = G__151070;
i__151063 = G__151071;
continue;
} else {
var n = cljs.core.first.call(null,seq__151060__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__151072 = cljs.core.next.call(null,seq__151060__$1);
var G__151073 = null;
var G__151074 = (0);
var G__151075 = (0);
seq__151060 = G__151072;
chunk__151061 = G__151073;
count__151062 = G__151074;
i__151063 = G__151075;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__151114_151121 = cljs.core.seq.call(null,deps);
var chunk__151115_151122 = null;
var count__151116_151123 = (0);
var i__151117_151124 = (0);
while(true){
if((i__151117_151124 < count__151116_151123)){
var dep_151125 = cljs.core._nth.call(null,chunk__151115_151122,i__151117_151124);
topo_sort_helper_STAR_.call(null,dep_151125,(depth + (1)),state);

var G__151126 = seq__151114_151121;
var G__151127 = chunk__151115_151122;
var G__151128 = count__151116_151123;
var G__151129 = (i__151117_151124 + (1));
seq__151114_151121 = G__151126;
chunk__151115_151122 = G__151127;
count__151116_151123 = G__151128;
i__151117_151124 = G__151129;
continue;
} else {
var temp__4425__auto___151130 = cljs.core.seq.call(null,seq__151114_151121);
if(temp__4425__auto___151130){
var seq__151114_151131__$1 = temp__4425__auto___151130;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__151114_151131__$1)){
var c__17690__auto___151132 = cljs.core.chunk_first.call(null,seq__151114_151131__$1);
var G__151133 = cljs.core.chunk_rest.call(null,seq__151114_151131__$1);
var G__151134 = c__17690__auto___151132;
var G__151135 = cljs.core.count.call(null,c__17690__auto___151132);
var G__151136 = (0);
seq__151114_151121 = G__151133;
chunk__151115_151122 = G__151134;
count__151116_151123 = G__151135;
i__151117_151124 = G__151136;
continue;
} else {
var dep_151137 = cljs.core.first.call(null,seq__151114_151131__$1);
topo_sort_helper_STAR_.call(null,dep_151137,(depth + (1)),state);

var G__151138 = cljs.core.next.call(null,seq__151114_151131__$1);
var G__151139 = null;
var G__151140 = (0);
var G__151141 = (0);
seq__151114_151121 = G__151138;
chunk__151115_151122 = G__151139;
count__151116_151123 = G__151140;
i__151117_151124 = G__151141;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__151118){
var vec__151120 = p__151118;
var x = cljs.core.nth.call(null,vec__151120,(0),null);
var xs = cljs.core.nthnext.call(null,vec__151120,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__151120,x,xs,get_deps__$1){
return (function (p1__151076_SHARP_){
return clojure.set.difference.call(null,p1__151076_SHARP_,x);
});})(vec__151120,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__151154 = cljs.core.seq.call(null,provides);
var chunk__151155 = null;
var count__151156 = (0);
var i__151157 = (0);
while(true){
if((i__151157 < count__151156)){
var prov = cljs.core._nth.call(null,chunk__151155,i__151157);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__151158_151166 = cljs.core.seq.call(null,requires);
var chunk__151159_151167 = null;
var count__151160_151168 = (0);
var i__151161_151169 = (0);
while(true){
if((i__151161_151169 < count__151160_151168)){
var req_151170 = cljs.core._nth.call(null,chunk__151159_151167,i__151161_151169);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_151170,prov);

var G__151171 = seq__151158_151166;
var G__151172 = chunk__151159_151167;
var G__151173 = count__151160_151168;
var G__151174 = (i__151161_151169 + (1));
seq__151158_151166 = G__151171;
chunk__151159_151167 = G__151172;
count__151160_151168 = G__151173;
i__151161_151169 = G__151174;
continue;
} else {
var temp__4425__auto___151175 = cljs.core.seq.call(null,seq__151158_151166);
if(temp__4425__auto___151175){
var seq__151158_151176__$1 = temp__4425__auto___151175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__151158_151176__$1)){
var c__17690__auto___151177 = cljs.core.chunk_first.call(null,seq__151158_151176__$1);
var G__151178 = cljs.core.chunk_rest.call(null,seq__151158_151176__$1);
var G__151179 = c__17690__auto___151177;
var G__151180 = cljs.core.count.call(null,c__17690__auto___151177);
var G__151181 = (0);
seq__151158_151166 = G__151178;
chunk__151159_151167 = G__151179;
count__151160_151168 = G__151180;
i__151161_151169 = G__151181;
continue;
} else {
var req_151182 = cljs.core.first.call(null,seq__151158_151176__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_151182,prov);

var G__151183 = cljs.core.next.call(null,seq__151158_151176__$1);
var G__151184 = null;
var G__151185 = (0);
var G__151186 = (0);
seq__151158_151166 = G__151183;
chunk__151159_151167 = G__151184;
count__151160_151168 = G__151185;
i__151161_151169 = G__151186;
continue;
}
} else {
}
}
break;
}

var G__151187 = seq__151154;
var G__151188 = chunk__151155;
var G__151189 = count__151156;
var G__151190 = (i__151157 + (1));
seq__151154 = G__151187;
chunk__151155 = G__151188;
count__151156 = G__151189;
i__151157 = G__151190;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__151154);
if(temp__4425__auto__){
var seq__151154__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__151154__$1)){
var c__17690__auto__ = cljs.core.chunk_first.call(null,seq__151154__$1);
var G__151191 = cljs.core.chunk_rest.call(null,seq__151154__$1);
var G__151192 = c__17690__auto__;
var G__151193 = cljs.core.count.call(null,c__17690__auto__);
var G__151194 = (0);
seq__151154 = G__151191;
chunk__151155 = G__151192;
count__151156 = G__151193;
i__151157 = G__151194;
continue;
} else {
var prov = cljs.core.first.call(null,seq__151154__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__151162_151195 = cljs.core.seq.call(null,requires);
var chunk__151163_151196 = null;
var count__151164_151197 = (0);
var i__151165_151198 = (0);
while(true){
if((i__151165_151198 < count__151164_151197)){
var req_151199 = cljs.core._nth.call(null,chunk__151163_151196,i__151165_151198);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_151199,prov);

var G__151200 = seq__151162_151195;
var G__151201 = chunk__151163_151196;
var G__151202 = count__151164_151197;
var G__151203 = (i__151165_151198 + (1));
seq__151162_151195 = G__151200;
chunk__151163_151196 = G__151201;
count__151164_151197 = G__151202;
i__151165_151198 = G__151203;
continue;
} else {
var temp__4425__auto___151204__$1 = cljs.core.seq.call(null,seq__151162_151195);
if(temp__4425__auto___151204__$1){
var seq__151162_151205__$1 = temp__4425__auto___151204__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__151162_151205__$1)){
var c__17690__auto___151206 = cljs.core.chunk_first.call(null,seq__151162_151205__$1);
var G__151207 = cljs.core.chunk_rest.call(null,seq__151162_151205__$1);
var G__151208 = c__17690__auto___151206;
var G__151209 = cljs.core.count.call(null,c__17690__auto___151206);
var G__151210 = (0);
seq__151162_151195 = G__151207;
chunk__151163_151196 = G__151208;
count__151164_151197 = G__151209;
i__151165_151198 = G__151210;
continue;
} else {
var req_151211 = cljs.core.first.call(null,seq__151162_151205__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_151211,prov);

var G__151212 = cljs.core.next.call(null,seq__151162_151205__$1);
var G__151213 = null;
var G__151214 = (0);
var G__151215 = (0);
seq__151162_151195 = G__151212;
chunk__151163_151196 = G__151213;
count__151164_151197 = G__151214;
i__151165_151198 = G__151215;
continue;
}
} else {
}
}
break;
}

var G__151216 = cljs.core.next.call(null,seq__151154__$1);
var G__151217 = null;
var G__151218 = (0);
var G__151219 = (0);
seq__151154 = G__151216;
chunk__151155 = G__151217;
count__151156 = G__151218;
i__151157 = G__151219;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__151224_151228 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__151225_151229 = null;
var count__151226_151230 = (0);
var i__151227_151231 = (0);
while(true){
if((i__151227_151231 < count__151226_151230)){
var ns_151232 = cljs.core._nth.call(null,chunk__151225_151229,i__151227_151231);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_151232);

var G__151233 = seq__151224_151228;
var G__151234 = chunk__151225_151229;
var G__151235 = count__151226_151230;
var G__151236 = (i__151227_151231 + (1));
seq__151224_151228 = G__151233;
chunk__151225_151229 = G__151234;
count__151226_151230 = G__151235;
i__151227_151231 = G__151236;
continue;
} else {
var temp__4425__auto___151237 = cljs.core.seq.call(null,seq__151224_151228);
if(temp__4425__auto___151237){
var seq__151224_151238__$1 = temp__4425__auto___151237;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__151224_151238__$1)){
var c__17690__auto___151239 = cljs.core.chunk_first.call(null,seq__151224_151238__$1);
var G__151240 = cljs.core.chunk_rest.call(null,seq__151224_151238__$1);
var G__151241 = c__17690__auto___151239;
var G__151242 = cljs.core.count.call(null,c__17690__auto___151239);
var G__151243 = (0);
seq__151224_151228 = G__151240;
chunk__151225_151229 = G__151241;
count__151226_151230 = G__151242;
i__151227_151231 = G__151243;
continue;
} else {
var ns_151244 = cljs.core.first.call(null,seq__151224_151238__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_151244);

var G__151245 = cljs.core.next.call(null,seq__151224_151238__$1);
var G__151246 = null;
var G__151247 = (0);
var G__151248 = (0);
seq__151224_151228 = G__151245;
chunk__151225_151229 = G__151246;
count__151226_151230 = G__151247;
i__151227_151231 = G__151248;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16887__auto__ = goog.require__;
if(cljs.core.truth_(or__16887__auto__)){
return or__16887__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__151249__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__151249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__151250__i = 0, G__151250__a = new Array(arguments.length -  0);
while (G__151250__i < G__151250__a.length) {G__151250__a[G__151250__i] = arguments[G__151250__i + 0]; ++G__151250__i;}
  args = new cljs.core.IndexedSeq(G__151250__a,0);
} 
return G__151249__delegate.call(this,args);};
G__151249.cljs$lang$maxFixedArity = 0;
G__151249.cljs$lang$applyTo = (function (arglist__151251){
var args = cljs.core.seq(arglist__151251);
return G__151249__delegate(args);
});
G__151249.cljs$core$IFn$_invoke$arity$variadic = G__151249__delegate;
return G__151249;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__151253 = cljs.core._EQ_;
var expr__151254 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__151253.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__151254))){
var path_parts = ((function (pred__151253,expr__151254){
return (function (p1__151252_SHARP_){
return clojure.string.split.call(null,p1__151252_SHARP_,/[\/\\]/);
});})(pred__151253,expr__151254))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__151253,expr__151254){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e151256){if((e151256 instanceof Error)){
var e = e151256;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e151256;

}
}})());
});
;})(path_parts,sep,root,pred__151253,expr__151254))
} else {
if(cljs.core.truth_(pred__151253.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__151254))){
return ((function (pred__151253,expr__151254){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__151253,expr__151254){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__151253,expr__151254))
);

return deferred.addErrback(((function (deferred,pred__151253,expr__151254){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__151253,expr__151254))
);
});
;})(pred__151253,expr__151254))
} else {
return ((function (pred__151253,expr__151254){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__151253,expr__151254))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__151257,callback){
var map__151260 = p__151257;
var map__151260__$1 = ((((!((map__151260 == null)))?((((map__151260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151260):map__151260);
var file_msg = map__151260__$1;
var request_url = cljs.core.get.call(null,map__151260__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__151260,map__151260__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__151260,map__151260__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto__){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto__){
return (function (state_151284){
var state_val_151285 = (state_151284[(1)]);
if((state_val_151285 === (7))){
var inst_151280 = (state_151284[(2)]);
var state_151284__$1 = state_151284;
var statearr_151286_151306 = state_151284__$1;
(statearr_151286_151306[(2)] = inst_151280);

(statearr_151286_151306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151285 === (1))){
var state_151284__$1 = state_151284;
var statearr_151287_151307 = state_151284__$1;
(statearr_151287_151307[(2)] = null);

(statearr_151287_151307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151285 === (4))){
var inst_151264 = (state_151284[(7)]);
var inst_151264__$1 = (state_151284[(2)]);
var state_151284__$1 = (function (){var statearr_151288 = state_151284;
(statearr_151288[(7)] = inst_151264__$1);

return statearr_151288;
})();
if(cljs.core.truth_(inst_151264__$1)){
var statearr_151289_151308 = state_151284__$1;
(statearr_151289_151308[(1)] = (5));

} else {
var statearr_151290_151309 = state_151284__$1;
(statearr_151290_151309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151285 === (6))){
var state_151284__$1 = state_151284;
var statearr_151291_151310 = state_151284__$1;
(statearr_151291_151310[(2)] = null);

(statearr_151291_151310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151285 === (3))){
var inst_151282 = (state_151284[(2)]);
var state_151284__$1 = state_151284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151284__$1,inst_151282);
} else {
if((state_val_151285 === (2))){
var state_151284__$1 = state_151284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151284__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_151285 === (11))){
var inst_151276 = (state_151284[(2)]);
var state_151284__$1 = (function (){var statearr_151292 = state_151284;
(statearr_151292[(8)] = inst_151276);

return statearr_151292;
})();
var statearr_151293_151311 = state_151284__$1;
(statearr_151293_151311[(2)] = null);

(statearr_151293_151311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151285 === (9))){
var inst_151270 = (state_151284[(9)]);
var inst_151268 = (state_151284[(10)]);
var inst_151272 = inst_151270.call(null,inst_151268);
var state_151284__$1 = state_151284;
var statearr_151294_151312 = state_151284__$1;
(statearr_151294_151312[(2)] = inst_151272);

(statearr_151294_151312[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151285 === (5))){
var inst_151264 = (state_151284[(7)]);
var inst_151266 = figwheel.client.file_reloading.blocking_load.call(null,inst_151264);
var state_151284__$1 = state_151284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151284__$1,(8),inst_151266);
} else {
if((state_val_151285 === (10))){
var inst_151268 = (state_151284[(10)]);
var inst_151274 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_151268);
var state_151284__$1 = state_151284;
var statearr_151295_151313 = state_151284__$1;
(statearr_151295_151313[(2)] = inst_151274);

(statearr_151295_151313[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151285 === (8))){
var inst_151270 = (state_151284[(9)]);
var inst_151264 = (state_151284[(7)]);
var inst_151268 = (state_151284[(2)]);
var inst_151269 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_151270__$1 = cljs.core.get.call(null,inst_151269,inst_151264);
var state_151284__$1 = (function (){var statearr_151296 = state_151284;
(statearr_151296[(9)] = inst_151270__$1);

(statearr_151296[(10)] = inst_151268);

return statearr_151296;
})();
if(cljs.core.truth_(inst_151270__$1)){
var statearr_151297_151314 = state_151284__$1;
(statearr_151297_151314[(1)] = (9));

} else {
var statearr_151298_151315 = state_151284__$1;
(statearr_151298_151315[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19054__auto__))
;
return ((function (switch__18942__auto__,c__19054__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18943__auto__ = null;
var figwheel$client$file_reloading$state_machine__18943__auto____0 = (function (){
var statearr_151302 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_151302[(0)] = figwheel$client$file_reloading$state_machine__18943__auto__);

(statearr_151302[(1)] = (1));

return statearr_151302;
});
var figwheel$client$file_reloading$state_machine__18943__auto____1 = (function (state_151284){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_151284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e151303){if((e151303 instanceof Object)){
var ex__18946__auto__ = e151303;
var statearr_151304_151316 = state_151284;
(statearr_151304_151316[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e151303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151317 = state_151284;
state_151284 = G__151317;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18943__auto__ = function(state_151284){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18943__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18943__auto____1.call(this,state_151284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18943__auto____0;
figwheel$client$file_reloading$state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18943__auto____1;
return figwheel$client$file_reloading$state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto__))
})();
var state__19056__auto__ = (function (){var statearr_151305 = f__19055__auto__.call(null);
(statearr_151305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto__);

return statearr_151305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto__))
);

return c__19054__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__151318,callback){
var map__151321 = p__151318;
var map__151321__$1 = ((((!((map__151321 == null)))?((((map__151321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151321):map__151321);
var file_msg = map__151321__$1;
var namespace = cljs.core.get.call(null,map__151321__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__151321,map__151321__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__151321,map__151321__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__151323){
var map__151326 = p__151323;
var map__151326__$1 = ((((!((map__151326 == null)))?((((map__151326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151326):map__151326);
var file_msg = map__151326__$1;
var namespace = cljs.core.get.call(null,map__151326__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16875__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16875__auto__){
var or__16887__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16887__auto__)){
return or__16887__auto__;
} else {
var or__16887__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16887__auto____$1)){
return or__16887__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16875__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__151328,callback){
var map__151331 = p__151328;
var map__151331__$1 = ((((!((map__151331 == null)))?((((map__151331.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151331.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151331):map__151331);
var file_msg = map__151331__$1;
var request_url = cljs.core.get.call(null,map__151331__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__151331__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19054__auto___151419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto___151419,out){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto___151419,out){
return (function (state_151401){
var state_val_151402 = (state_151401[(1)]);
if((state_val_151402 === (1))){
var inst_151379 = cljs.core.nth.call(null,files,(0),null);
var inst_151380 = cljs.core.nthnext.call(null,files,(1));
var inst_151381 = files;
var state_151401__$1 = (function (){var statearr_151403 = state_151401;
(statearr_151403[(7)] = inst_151379);

(statearr_151403[(8)] = inst_151381);

(statearr_151403[(9)] = inst_151380);

return statearr_151403;
})();
var statearr_151404_151420 = state_151401__$1;
(statearr_151404_151420[(2)] = null);

(statearr_151404_151420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151402 === (2))){
var inst_151381 = (state_151401[(8)]);
var inst_151384 = (state_151401[(10)]);
var inst_151384__$1 = cljs.core.nth.call(null,inst_151381,(0),null);
var inst_151385 = cljs.core.nthnext.call(null,inst_151381,(1));
var inst_151386 = (inst_151384__$1 == null);
var inst_151387 = cljs.core.not.call(null,inst_151386);
var state_151401__$1 = (function (){var statearr_151405 = state_151401;
(statearr_151405[(10)] = inst_151384__$1);

(statearr_151405[(11)] = inst_151385);

return statearr_151405;
})();
if(inst_151387){
var statearr_151406_151421 = state_151401__$1;
(statearr_151406_151421[(1)] = (4));

} else {
var statearr_151407_151422 = state_151401__$1;
(statearr_151407_151422[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151402 === (3))){
var inst_151399 = (state_151401[(2)]);
var state_151401__$1 = state_151401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151401__$1,inst_151399);
} else {
if((state_val_151402 === (4))){
var inst_151384 = (state_151401[(10)]);
var inst_151389 = figwheel.client.file_reloading.reload_js_file.call(null,inst_151384);
var state_151401__$1 = state_151401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151401__$1,(7),inst_151389);
} else {
if((state_val_151402 === (5))){
var inst_151395 = cljs.core.async.close_BANG_.call(null,out);
var state_151401__$1 = state_151401;
var statearr_151408_151423 = state_151401__$1;
(statearr_151408_151423[(2)] = inst_151395);

(statearr_151408_151423[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151402 === (6))){
var inst_151397 = (state_151401[(2)]);
var state_151401__$1 = state_151401;
var statearr_151409_151424 = state_151401__$1;
(statearr_151409_151424[(2)] = inst_151397);

(statearr_151409_151424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151402 === (7))){
var inst_151385 = (state_151401[(11)]);
var inst_151391 = (state_151401[(2)]);
var inst_151392 = cljs.core.async.put_BANG_.call(null,out,inst_151391);
var inst_151381 = inst_151385;
var state_151401__$1 = (function (){var statearr_151410 = state_151401;
(statearr_151410[(12)] = inst_151392);

(statearr_151410[(8)] = inst_151381);

return statearr_151410;
})();
var statearr_151411_151425 = state_151401__$1;
(statearr_151411_151425[(2)] = null);

(statearr_151411_151425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19054__auto___151419,out))
;
return ((function (switch__18942__auto__,c__19054__auto___151419,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18943__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18943__auto____0 = (function (){
var statearr_151415 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_151415[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18943__auto__);

(statearr_151415[(1)] = (1));

return statearr_151415;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18943__auto____1 = (function (state_151401){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_151401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e151416){if((e151416 instanceof Object)){
var ex__18946__auto__ = e151416;
var statearr_151417_151426 = state_151401;
(statearr_151417_151426[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e151416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151427 = state_151401;
state_151401 = G__151427;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18943__auto__ = function(state_151401){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18943__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18943__auto____1.call(this,state_151401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18943__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18943__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto___151419,out))
})();
var state__19056__auto__ = (function (){var statearr_151418 = f__19055__auto__.call(null);
(statearr_151418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto___151419);

return statearr_151418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto___151419,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__151428,opts){
var map__151432 = p__151428;
var map__151432__$1 = ((((!((map__151432 == null)))?((((map__151432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151432):map__151432);
var eval_body__$1 = cljs.core.get.call(null,map__151432__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__151432__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16875__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16875__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16875__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e151434){var e = e151434;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__151435_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__151435_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__151440){
var vec__151441 = p__151440;
var k = cljs.core.nth.call(null,vec__151441,(0),null);
var v = cljs.core.nth.call(null,vec__151441,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__151442){
var vec__151443 = p__151442;
var k = cljs.core.nth.call(null,vec__151443,(0),null);
var v = cljs.core.nth.call(null,vec__151443,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__151447,p__151448){
var map__151695 = p__151447;
var map__151695__$1 = ((((!((map__151695 == null)))?((((map__151695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151695):map__151695);
var opts = map__151695__$1;
var before_jsload = cljs.core.get.call(null,map__151695__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__151695__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__151695__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__151696 = p__151448;
var map__151696__$1 = ((((!((map__151696 == null)))?((((map__151696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151696):map__151696);
var msg = map__151696__$1;
var files = cljs.core.get.call(null,map__151696__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__151696__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__151696__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto__,map__151695,map__151695__$1,opts,before_jsload,on_jsload,reload_dependents,map__151696,map__151696__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto__,map__151695,map__151695__$1,opts,before_jsload,on_jsload,reload_dependents,map__151696,map__151696__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_151849){
var state_val_151850 = (state_151849[(1)]);
if((state_val_151850 === (7))){
var inst_151710 = (state_151849[(7)]);
var inst_151711 = (state_151849[(8)]);
var inst_151712 = (state_151849[(9)]);
var inst_151713 = (state_151849[(10)]);
var inst_151718 = cljs.core._nth.call(null,inst_151711,inst_151713);
var inst_151719 = figwheel.client.file_reloading.eval_body.call(null,inst_151718,opts);
var inst_151720 = (inst_151713 + (1));
var tmp151851 = inst_151710;
var tmp151852 = inst_151711;
var tmp151853 = inst_151712;
var inst_151710__$1 = tmp151851;
var inst_151711__$1 = tmp151852;
var inst_151712__$1 = tmp151853;
var inst_151713__$1 = inst_151720;
var state_151849__$1 = (function (){var statearr_151854 = state_151849;
(statearr_151854[(7)] = inst_151710__$1);

(statearr_151854[(8)] = inst_151711__$1);

(statearr_151854[(11)] = inst_151719);

(statearr_151854[(9)] = inst_151712__$1);

(statearr_151854[(10)] = inst_151713__$1);

return statearr_151854;
})();
var statearr_151855_151941 = state_151849__$1;
(statearr_151855_151941[(2)] = null);

(statearr_151855_151941[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (20))){
var inst_151753 = (state_151849[(12)]);
var inst_151761 = figwheel.client.file_reloading.sort_files.call(null,inst_151753);
var state_151849__$1 = state_151849;
var statearr_151856_151942 = state_151849__$1;
(statearr_151856_151942[(2)] = inst_151761);

(statearr_151856_151942[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (27))){
var state_151849__$1 = state_151849;
var statearr_151857_151943 = state_151849__$1;
(statearr_151857_151943[(2)] = null);

(statearr_151857_151943[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (1))){
var inst_151702 = (state_151849[(13)]);
var inst_151699 = before_jsload.call(null,files);
var inst_151700 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_151701 = (function (){return ((function (inst_151702,inst_151699,inst_151700,state_val_151850,c__19054__auto__,map__151695,map__151695__$1,opts,before_jsload,on_jsload,reload_dependents,map__151696,map__151696__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__151444_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__151444_SHARP_);
});
;})(inst_151702,inst_151699,inst_151700,state_val_151850,c__19054__auto__,map__151695,map__151695__$1,opts,before_jsload,on_jsload,reload_dependents,map__151696,map__151696__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_151702__$1 = cljs.core.filter.call(null,inst_151701,files);
var inst_151703 = cljs.core.not_empty.call(null,inst_151702__$1);
var state_151849__$1 = (function (){var statearr_151858 = state_151849;
(statearr_151858[(14)] = inst_151700);

(statearr_151858[(13)] = inst_151702__$1);

(statearr_151858[(15)] = inst_151699);

return statearr_151858;
})();
if(cljs.core.truth_(inst_151703)){
var statearr_151859_151944 = state_151849__$1;
(statearr_151859_151944[(1)] = (2));

} else {
var statearr_151860_151945 = state_151849__$1;
(statearr_151860_151945[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (24))){
var state_151849__$1 = state_151849;
var statearr_151861_151946 = state_151849__$1;
(statearr_151861_151946[(2)] = null);

(statearr_151861_151946[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (39))){
var inst_151803 = (state_151849[(16)]);
var state_151849__$1 = state_151849;
var statearr_151862_151947 = state_151849__$1;
(statearr_151862_151947[(2)] = inst_151803);

(statearr_151862_151947[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (46))){
var inst_151844 = (state_151849[(2)]);
var state_151849__$1 = state_151849;
var statearr_151863_151948 = state_151849__$1;
(statearr_151863_151948[(2)] = inst_151844);

(statearr_151863_151948[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (4))){
var inst_151747 = (state_151849[(2)]);
var inst_151748 = cljs.core.List.EMPTY;
var inst_151749 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_151748);
var inst_151750 = (function (){return ((function (inst_151747,inst_151748,inst_151749,state_val_151850,c__19054__auto__,map__151695,map__151695__$1,opts,before_jsload,on_jsload,reload_dependents,map__151696,map__151696__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__151445_SHARP_){
var and__16875__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__151445_SHARP_);
if(cljs.core.truth_(and__16875__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__151445_SHARP_));
} else {
return and__16875__auto__;
}
});
;})(inst_151747,inst_151748,inst_151749,state_val_151850,c__19054__auto__,map__151695,map__151695__$1,opts,before_jsload,on_jsload,reload_dependents,map__151696,map__151696__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_151751 = cljs.core.filter.call(null,inst_151750,files);
var inst_151752 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_151753 = cljs.core.concat.call(null,inst_151751,inst_151752);
var state_151849__$1 = (function (){var statearr_151864 = state_151849;
(statearr_151864[(17)] = inst_151749);

(statearr_151864[(18)] = inst_151747);

(statearr_151864[(12)] = inst_151753);

return statearr_151864;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_151865_151949 = state_151849__$1;
(statearr_151865_151949[(1)] = (16));

} else {
var statearr_151866_151950 = state_151849__$1;
(statearr_151866_151950[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (15))){
var inst_151737 = (state_151849[(2)]);
var state_151849__$1 = state_151849;
var statearr_151867_151951 = state_151849__$1;
(statearr_151867_151951[(2)] = inst_151737);

(statearr_151867_151951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (21))){
var inst_151763 = (state_151849[(19)]);
var inst_151763__$1 = (state_151849[(2)]);
var inst_151764 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_151763__$1);
var state_151849__$1 = (function (){var statearr_151868 = state_151849;
(statearr_151868[(19)] = inst_151763__$1);

return statearr_151868;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151849__$1,(22),inst_151764);
} else {
if((state_val_151850 === (31))){
var inst_151847 = (state_151849[(2)]);
var state_151849__$1 = state_151849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151849__$1,inst_151847);
} else {
if((state_val_151850 === (32))){
var inst_151803 = (state_151849[(16)]);
var inst_151808 = inst_151803.cljs$lang$protocol_mask$partition0$;
var inst_151809 = (inst_151808 & (64));
var inst_151810 = inst_151803.cljs$core$ISeq$;
var inst_151811 = (inst_151809) || (inst_151810);
var state_151849__$1 = state_151849;
if(cljs.core.truth_(inst_151811)){
var statearr_151869_151952 = state_151849__$1;
(statearr_151869_151952[(1)] = (35));

} else {
var statearr_151870_151953 = state_151849__$1;
(statearr_151870_151953[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (40))){
var inst_151824 = (state_151849[(20)]);
var inst_151823 = (state_151849[(2)]);
var inst_151824__$1 = cljs.core.get.call(null,inst_151823,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_151825 = cljs.core.get.call(null,inst_151823,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_151826 = cljs.core.not_empty.call(null,inst_151824__$1);
var state_151849__$1 = (function (){var statearr_151871 = state_151849;
(statearr_151871[(21)] = inst_151825);

(statearr_151871[(20)] = inst_151824__$1);

return statearr_151871;
})();
if(cljs.core.truth_(inst_151826)){
var statearr_151872_151954 = state_151849__$1;
(statearr_151872_151954[(1)] = (41));

} else {
var statearr_151873_151955 = state_151849__$1;
(statearr_151873_151955[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (33))){
var state_151849__$1 = state_151849;
var statearr_151874_151956 = state_151849__$1;
(statearr_151874_151956[(2)] = false);

(statearr_151874_151956[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (13))){
var inst_151723 = (state_151849[(22)]);
var inst_151727 = cljs.core.chunk_first.call(null,inst_151723);
var inst_151728 = cljs.core.chunk_rest.call(null,inst_151723);
var inst_151729 = cljs.core.count.call(null,inst_151727);
var inst_151710 = inst_151728;
var inst_151711 = inst_151727;
var inst_151712 = inst_151729;
var inst_151713 = (0);
var state_151849__$1 = (function (){var statearr_151875 = state_151849;
(statearr_151875[(7)] = inst_151710);

(statearr_151875[(8)] = inst_151711);

(statearr_151875[(9)] = inst_151712);

(statearr_151875[(10)] = inst_151713);

return statearr_151875;
})();
var statearr_151876_151957 = state_151849__$1;
(statearr_151876_151957[(2)] = null);

(statearr_151876_151957[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (22))){
var inst_151771 = (state_151849[(23)]);
var inst_151763 = (state_151849[(19)]);
var inst_151767 = (state_151849[(24)]);
var inst_151766 = (state_151849[(25)]);
var inst_151766__$1 = (state_151849[(2)]);
var inst_151767__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_151766__$1);
var inst_151768 = (function (){var all_files = inst_151763;
var res_SINGLEQUOTE_ = inst_151766__$1;
var res = inst_151767__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_151771,inst_151763,inst_151767,inst_151766,inst_151766__$1,inst_151767__$1,state_val_151850,c__19054__auto__,map__151695,map__151695__$1,opts,before_jsload,on_jsload,reload_dependents,map__151696,map__151696__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__151446_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__151446_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_151771,inst_151763,inst_151767,inst_151766,inst_151766__$1,inst_151767__$1,state_val_151850,c__19054__auto__,map__151695,map__151695__$1,opts,before_jsload,on_jsload,reload_dependents,map__151696,map__151696__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_151769 = cljs.core.filter.call(null,inst_151768,inst_151766__$1);
var inst_151770 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_151771__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_151770);
var inst_151772 = cljs.core.not_empty.call(null,inst_151771__$1);
var state_151849__$1 = (function (){var statearr_151877 = state_151849;
(statearr_151877[(23)] = inst_151771__$1);

(statearr_151877[(24)] = inst_151767__$1);

(statearr_151877[(25)] = inst_151766__$1);

(statearr_151877[(26)] = inst_151769);

return statearr_151877;
})();
if(cljs.core.truth_(inst_151772)){
var statearr_151878_151958 = state_151849__$1;
(statearr_151878_151958[(1)] = (23));

} else {
var statearr_151879_151959 = state_151849__$1;
(statearr_151879_151959[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (36))){
var state_151849__$1 = state_151849;
var statearr_151880_151960 = state_151849__$1;
(statearr_151880_151960[(2)] = false);

(statearr_151880_151960[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (41))){
var inst_151824 = (state_151849[(20)]);
var inst_151828 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_151829 = cljs.core.map.call(null,inst_151828,inst_151824);
var inst_151830 = cljs.core.pr_str.call(null,inst_151829);
var inst_151831 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_151830)].join('');
var inst_151832 = figwheel.client.utils.log.call(null,inst_151831);
var state_151849__$1 = state_151849;
var statearr_151881_151961 = state_151849__$1;
(statearr_151881_151961[(2)] = inst_151832);

(statearr_151881_151961[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (43))){
var inst_151825 = (state_151849[(21)]);
var inst_151835 = (state_151849[(2)]);
var inst_151836 = cljs.core.not_empty.call(null,inst_151825);
var state_151849__$1 = (function (){var statearr_151882 = state_151849;
(statearr_151882[(27)] = inst_151835);

return statearr_151882;
})();
if(cljs.core.truth_(inst_151836)){
var statearr_151883_151962 = state_151849__$1;
(statearr_151883_151962[(1)] = (44));

} else {
var statearr_151884_151963 = state_151849__$1;
(statearr_151884_151963[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (29))){
var inst_151771 = (state_151849[(23)]);
var inst_151763 = (state_151849[(19)]);
var inst_151767 = (state_151849[(24)]);
var inst_151766 = (state_151849[(25)]);
var inst_151769 = (state_151849[(26)]);
var inst_151803 = (state_151849[(16)]);
var inst_151799 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_151802 = (function (){var all_files = inst_151763;
var res_SINGLEQUOTE_ = inst_151766;
var res = inst_151767;
var files_not_loaded = inst_151769;
var dependencies_that_loaded = inst_151771;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_151771,inst_151763,inst_151767,inst_151766,inst_151769,inst_151803,inst_151799,state_val_151850,c__19054__auto__,map__151695,map__151695__$1,opts,before_jsload,on_jsload,reload_dependents,map__151696,map__151696__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__151801){
var map__151885 = p__151801;
var map__151885__$1 = ((((!((map__151885 == null)))?((((map__151885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151885):map__151885);
var namespace = cljs.core.get.call(null,map__151885__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_151771,inst_151763,inst_151767,inst_151766,inst_151769,inst_151803,inst_151799,state_val_151850,c__19054__auto__,map__151695,map__151695__$1,opts,before_jsload,on_jsload,reload_dependents,map__151696,map__151696__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_151803__$1 = cljs.core.group_by.call(null,inst_151802,inst_151769);
var inst_151805 = (inst_151803__$1 == null);
var inst_151806 = cljs.core.not.call(null,inst_151805);
var state_151849__$1 = (function (){var statearr_151887 = state_151849;
(statearr_151887[(28)] = inst_151799);

(statearr_151887[(16)] = inst_151803__$1);

return statearr_151887;
})();
if(inst_151806){
var statearr_151888_151964 = state_151849__$1;
(statearr_151888_151964[(1)] = (32));

} else {
var statearr_151889_151965 = state_151849__$1;
(statearr_151889_151965[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (44))){
var inst_151825 = (state_151849[(21)]);
var inst_151838 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_151825);
var inst_151839 = cljs.core.pr_str.call(null,inst_151838);
var inst_151840 = [cljs.core.str("not required: "),cljs.core.str(inst_151839)].join('');
var inst_151841 = figwheel.client.utils.log.call(null,inst_151840);
var state_151849__$1 = state_151849;
var statearr_151890_151966 = state_151849__$1;
(statearr_151890_151966[(2)] = inst_151841);

(statearr_151890_151966[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (6))){
var inst_151744 = (state_151849[(2)]);
var state_151849__$1 = state_151849;
var statearr_151891_151967 = state_151849__$1;
(statearr_151891_151967[(2)] = inst_151744);

(statearr_151891_151967[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (28))){
var inst_151769 = (state_151849[(26)]);
var inst_151796 = (state_151849[(2)]);
var inst_151797 = cljs.core.not_empty.call(null,inst_151769);
var state_151849__$1 = (function (){var statearr_151892 = state_151849;
(statearr_151892[(29)] = inst_151796);

return statearr_151892;
})();
if(cljs.core.truth_(inst_151797)){
var statearr_151893_151968 = state_151849__$1;
(statearr_151893_151968[(1)] = (29));

} else {
var statearr_151894_151969 = state_151849__$1;
(statearr_151894_151969[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (25))){
var inst_151767 = (state_151849[(24)]);
var inst_151783 = (state_151849[(2)]);
var inst_151784 = cljs.core.not_empty.call(null,inst_151767);
var state_151849__$1 = (function (){var statearr_151895 = state_151849;
(statearr_151895[(30)] = inst_151783);

return statearr_151895;
})();
if(cljs.core.truth_(inst_151784)){
var statearr_151896_151970 = state_151849__$1;
(statearr_151896_151970[(1)] = (26));

} else {
var statearr_151897_151971 = state_151849__$1;
(statearr_151897_151971[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (34))){
var inst_151818 = (state_151849[(2)]);
var state_151849__$1 = state_151849;
if(cljs.core.truth_(inst_151818)){
var statearr_151898_151972 = state_151849__$1;
(statearr_151898_151972[(1)] = (38));

} else {
var statearr_151899_151973 = state_151849__$1;
(statearr_151899_151973[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (17))){
var state_151849__$1 = state_151849;
var statearr_151900_151974 = state_151849__$1;
(statearr_151900_151974[(2)] = recompile_dependents);

(statearr_151900_151974[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (3))){
var state_151849__$1 = state_151849;
var statearr_151901_151975 = state_151849__$1;
(statearr_151901_151975[(2)] = null);

(statearr_151901_151975[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (12))){
var inst_151740 = (state_151849[(2)]);
var state_151849__$1 = state_151849;
var statearr_151902_151976 = state_151849__$1;
(statearr_151902_151976[(2)] = inst_151740);

(statearr_151902_151976[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (2))){
var inst_151702 = (state_151849[(13)]);
var inst_151709 = cljs.core.seq.call(null,inst_151702);
var inst_151710 = inst_151709;
var inst_151711 = null;
var inst_151712 = (0);
var inst_151713 = (0);
var state_151849__$1 = (function (){var statearr_151903 = state_151849;
(statearr_151903[(7)] = inst_151710);

(statearr_151903[(8)] = inst_151711);

(statearr_151903[(9)] = inst_151712);

(statearr_151903[(10)] = inst_151713);

return statearr_151903;
})();
var statearr_151904_151977 = state_151849__$1;
(statearr_151904_151977[(2)] = null);

(statearr_151904_151977[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (23))){
var inst_151771 = (state_151849[(23)]);
var inst_151763 = (state_151849[(19)]);
var inst_151767 = (state_151849[(24)]);
var inst_151766 = (state_151849[(25)]);
var inst_151769 = (state_151849[(26)]);
var inst_151774 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_151776 = (function (){var all_files = inst_151763;
var res_SINGLEQUOTE_ = inst_151766;
var res = inst_151767;
var files_not_loaded = inst_151769;
var dependencies_that_loaded = inst_151771;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_151771,inst_151763,inst_151767,inst_151766,inst_151769,inst_151774,state_val_151850,c__19054__auto__,map__151695,map__151695__$1,opts,before_jsload,on_jsload,reload_dependents,map__151696,map__151696__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__151775){
var map__151905 = p__151775;
var map__151905__$1 = ((((!((map__151905 == null)))?((((map__151905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151905):map__151905);
var request_url = cljs.core.get.call(null,map__151905__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_151771,inst_151763,inst_151767,inst_151766,inst_151769,inst_151774,state_val_151850,c__19054__auto__,map__151695,map__151695__$1,opts,before_jsload,on_jsload,reload_dependents,map__151696,map__151696__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_151777 = cljs.core.reverse.call(null,inst_151771);
var inst_151778 = cljs.core.map.call(null,inst_151776,inst_151777);
var inst_151779 = cljs.core.pr_str.call(null,inst_151778);
var inst_151780 = figwheel.client.utils.log.call(null,inst_151779);
var state_151849__$1 = (function (){var statearr_151907 = state_151849;
(statearr_151907[(31)] = inst_151774);

return statearr_151907;
})();
var statearr_151908_151978 = state_151849__$1;
(statearr_151908_151978[(2)] = inst_151780);

(statearr_151908_151978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (35))){
var state_151849__$1 = state_151849;
var statearr_151909_151979 = state_151849__$1;
(statearr_151909_151979[(2)] = true);

(statearr_151909_151979[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (19))){
var inst_151753 = (state_151849[(12)]);
var inst_151759 = figwheel.client.file_reloading.expand_files.call(null,inst_151753);
var state_151849__$1 = state_151849;
var statearr_151910_151980 = state_151849__$1;
(statearr_151910_151980[(2)] = inst_151759);

(statearr_151910_151980[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (11))){
var state_151849__$1 = state_151849;
var statearr_151911_151981 = state_151849__$1;
(statearr_151911_151981[(2)] = null);

(statearr_151911_151981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (9))){
var inst_151742 = (state_151849[(2)]);
var state_151849__$1 = state_151849;
var statearr_151912_151982 = state_151849__$1;
(statearr_151912_151982[(2)] = inst_151742);

(statearr_151912_151982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (5))){
var inst_151712 = (state_151849[(9)]);
var inst_151713 = (state_151849[(10)]);
var inst_151715 = (inst_151713 < inst_151712);
var inst_151716 = inst_151715;
var state_151849__$1 = state_151849;
if(cljs.core.truth_(inst_151716)){
var statearr_151913_151983 = state_151849__$1;
(statearr_151913_151983[(1)] = (7));

} else {
var statearr_151914_151984 = state_151849__$1;
(statearr_151914_151984[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (14))){
var inst_151723 = (state_151849[(22)]);
var inst_151732 = cljs.core.first.call(null,inst_151723);
var inst_151733 = figwheel.client.file_reloading.eval_body.call(null,inst_151732,opts);
var inst_151734 = cljs.core.next.call(null,inst_151723);
var inst_151710 = inst_151734;
var inst_151711 = null;
var inst_151712 = (0);
var inst_151713 = (0);
var state_151849__$1 = (function (){var statearr_151915 = state_151849;
(statearr_151915[(7)] = inst_151710);

(statearr_151915[(8)] = inst_151711);

(statearr_151915[(9)] = inst_151712);

(statearr_151915[(32)] = inst_151733);

(statearr_151915[(10)] = inst_151713);

return statearr_151915;
})();
var statearr_151916_151985 = state_151849__$1;
(statearr_151916_151985[(2)] = null);

(statearr_151916_151985[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (45))){
var state_151849__$1 = state_151849;
var statearr_151917_151986 = state_151849__$1;
(statearr_151917_151986[(2)] = null);

(statearr_151917_151986[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (26))){
var inst_151771 = (state_151849[(23)]);
var inst_151763 = (state_151849[(19)]);
var inst_151767 = (state_151849[(24)]);
var inst_151766 = (state_151849[(25)]);
var inst_151769 = (state_151849[(26)]);
var inst_151786 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_151788 = (function (){var all_files = inst_151763;
var res_SINGLEQUOTE_ = inst_151766;
var res = inst_151767;
var files_not_loaded = inst_151769;
var dependencies_that_loaded = inst_151771;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_151771,inst_151763,inst_151767,inst_151766,inst_151769,inst_151786,state_val_151850,c__19054__auto__,map__151695,map__151695__$1,opts,before_jsload,on_jsload,reload_dependents,map__151696,map__151696__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__151787){
var map__151918 = p__151787;
var map__151918__$1 = ((((!((map__151918 == null)))?((((map__151918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151918):map__151918);
var namespace = cljs.core.get.call(null,map__151918__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__151918__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_151771,inst_151763,inst_151767,inst_151766,inst_151769,inst_151786,state_val_151850,c__19054__auto__,map__151695,map__151695__$1,opts,before_jsload,on_jsload,reload_dependents,map__151696,map__151696__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_151789 = cljs.core.map.call(null,inst_151788,inst_151767);
var inst_151790 = cljs.core.pr_str.call(null,inst_151789);
var inst_151791 = figwheel.client.utils.log.call(null,inst_151790);
var inst_151792 = (function (){var all_files = inst_151763;
var res_SINGLEQUOTE_ = inst_151766;
var res = inst_151767;
var files_not_loaded = inst_151769;
var dependencies_that_loaded = inst_151771;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_151771,inst_151763,inst_151767,inst_151766,inst_151769,inst_151786,inst_151788,inst_151789,inst_151790,inst_151791,state_val_151850,c__19054__auto__,map__151695,map__151695__$1,opts,before_jsload,on_jsload,reload_dependents,map__151696,map__151696__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_151771,inst_151763,inst_151767,inst_151766,inst_151769,inst_151786,inst_151788,inst_151789,inst_151790,inst_151791,state_val_151850,c__19054__auto__,map__151695,map__151695__$1,opts,before_jsload,on_jsload,reload_dependents,map__151696,map__151696__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_151793 = setTimeout(inst_151792,(10));
var state_151849__$1 = (function (){var statearr_151920 = state_151849;
(statearr_151920[(33)] = inst_151791);

(statearr_151920[(34)] = inst_151786);

return statearr_151920;
})();
var statearr_151921_151987 = state_151849__$1;
(statearr_151921_151987[(2)] = inst_151793);

(statearr_151921_151987[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (16))){
var state_151849__$1 = state_151849;
var statearr_151922_151988 = state_151849__$1;
(statearr_151922_151988[(2)] = reload_dependents);

(statearr_151922_151988[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (38))){
var inst_151803 = (state_151849[(16)]);
var inst_151820 = cljs.core.apply.call(null,cljs.core.hash_map,inst_151803);
var state_151849__$1 = state_151849;
var statearr_151923_151989 = state_151849__$1;
(statearr_151923_151989[(2)] = inst_151820);

(statearr_151923_151989[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (30))){
var state_151849__$1 = state_151849;
var statearr_151924_151990 = state_151849__$1;
(statearr_151924_151990[(2)] = null);

(statearr_151924_151990[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (10))){
var inst_151723 = (state_151849[(22)]);
var inst_151725 = cljs.core.chunked_seq_QMARK_.call(null,inst_151723);
var state_151849__$1 = state_151849;
if(inst_151725){
var statearr_151925_151991 = state_151849__$1;
(statearr_151925_151991[(1)] = (13));

} else {
var statearr_151926_151992 = state_151849__$1;
(statearr_151926_151992[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (18))){
var inst_151757 = (state_151849[(2)]);
var state_151849__$1 = state_151849;
if(cljs.core.truth_(inst_151757)){
var statearr_151927_151993 = state_151849__$1;
(statearr_151927_151993[(1)] = (19));

} else {
var statearr_151928_151994 = state_151849__$1;
(statearr_151928_151994[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (42))){
var state_151849__$1 = state_151849;
var statearr_151929_151995 = state_151849__$1;
(statearr_151929_151995[(2)] = null);

(statearr_151929_151995[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (37))){
var inst_151815 = (state_151849[(2)]);
var state_151849__$1 = state_151849;
var statearr_151930_151996 = state_151849__$1;
(statearr_151930_151996[(2)] = inst_151815);

(statearr_151930_151996[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151850 === (8))){
var inst_151723 = (state_151849[(22)]);
var inst_151710 = (state_151849[(7)]);
var inst_151723__$1 = cljs.core.seq.call(null,inst_151710);
var state_151849__$1 = (function (){var statearr_151931 = state_151849;
(statearr_151931[(22)] = inst_151723__$1);

return statearr_151931;
})();
if(inst_151723__$1){
var statearr_151932_151997 = state_151849__$1;
(statearr_151932_151997[(1)] = (10));

} else {
var statearr_151933_151998 = state_151849__$1;
(statearr_151933_151998[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19054__auto__,map__151695,map__151695__$1,opts,before_jsload,on_jsload,reload_dependents,map__151696,map__151696__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18942__auto__,c__19054__auto__,map__151695,map__151695__$1,opts,before_jsload,on_jsload,reload_dependents,map__151696,map__151696__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18943__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18943__auto____0 = (function (){
var statearr_151937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_151937[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18943__auto__);

(statearr_151937[(1)] = (1));

return statearr_151937;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18943__auto____1 = (function (state_151849){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_151849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e151938){if((e151938 instanceof Object)){
var ex__18946__auto__ = e151938;
var statearr_151939_151999 = state_151849;
(statearr_151939_151999[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e151938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__152000 = state_151849;
state_151849 = G__152000;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18943__auto__ = function(state_151849){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18943__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18943__auto____1.call(this,state_151849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18943__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18943__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto__,map__151695,map__151695__$1,opts,before_jsload,on_jsload,reload_dependents,map__151696,map__151696__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19056__auto__ = (function (){var statearr_151940 = f__19055__auto__.call(null);
(statearr_151940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto__);

return statearr_151940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto__,map__151695,map__151695__$1,opts,before_jsload,on_jsload,reload_dependents,map__151696,map__151696__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19054__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__152003,link){
var map__152006 = p__152003;
var map__152006__$1 = ((((!((map__152006 == null)))?((((map__152006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152006):map__152006);
var file = cljs.core.get.call(null,map__152006__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__152006,map__152006__$1,file){
return (function (p1__152001_SHARP_,p2__152002_SHARP_){
if(cljs.core._EQ_.call(null,p1__152001_SHARP_,p2__152002_SHARP_)){
return p1__152001_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__152006,map__152006__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__152012){
var map__152013 = p__152012;
var map__152013__$1 = ((((!((map__152013 == null)))?((((map__152013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152013):map__152013);
var match_length = cljs.core.get.call(null,map__152013__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__152013__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__152008_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__152008_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args152015 = [];
var len__17945__auto___152018 = arguments.length;
var i__17946__auto___152019 = (0);
while(true){
if((i__17946__auto___152019 < len__17945__auto___152018)){
args152015.push((arguments[i__17946__auto___152019]));

var G__152020 = (i__17946__auto___152019 + (1));
i__17946__auto___152019 = G__152020;
continue;
} else {
}
break;
}

var G__152017 = args152015.length;
switch (G__152017) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args152015.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__152022_SHARP_,p2__152023_SHARP_){
return cljs.core.assoc.call(null,p1__152022_SHARP_,cljs.core.get.call(null,p2__152023_SHARP_,key),p2__152023_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__152024){
var map__152027 = p__152024;
var map__152027__$1 = ((((!((map__152027 == null)))?((((map__152027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152027):map__152027);
var f_data = map__152027__$1;
var file = cljs.core.get.call(null,map__152027__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__152029,files_msg){
var map__152036 = p__152029;
var map__152036__$1 = ((((!((map__152036 == null)))?((((map__152036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152036):map__152036);
var opts = map__152036__$1;
var on_cssload = cljs.core.get.call(null,map__152036__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__152038_152042 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__152039_152043 = null;
var count__152040_152044 = (0);
var i__152041_152045 = (0);
while(true){
if((i__152041_152045 < count__152040_152044)){
var f_152046 = cljs.core._nth.call(null,chunk__152039_152043,i__152041_152045);
figwheel.client.file_reloading.reload_css_file.call(null,f_152046);

var G__152047 = seq__152038_152042;
var G__152048 = chunk__152039_152043;
var G__152049 = count__152040_152044;
var G__152050 = (i__152041_152045 + (1));
seq__152038_152042 = G__152047;
chunk__152039_152043 = G__152048;
count__152040_152044 = G__152049;
i__152041_152045 = G__152050;
continue;
} else {
var temp__4425__auto___152051 = cljs.core.seq.call(null,seq__152038_152042);
if(temp__4425__auto___152051){
var seq__152038_152052__$1 = temp__4425__auto___152051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__152038_152052__$1)){
var c__17690__auto___152053 = cljs.core.chunk_first.call(null,seq__152038_152052__$1);
var G__152054 = cljs.core.chunk_rest.call(null,seq__152038_152052__$1);
var G__152055 = c__17690__auto___152053;
var G__152056 = cljs.core.count.call(null,c__17690__auto___152053);
var G__152057 = (0);
seq__152038_152042 = G__152054;
chunk__152039_152043 = G__152055;
count__152040_152044 = G__152056;
i__152041_152045 = G__152057;
continue;
} else {
var f_152058 = cljs.core.first.call(null,seq__152038_152052__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_152058);

var G__152059 = cljs.core.next.call(null,seq__152038_152052__$1);
var G__152060 = null;
var G__152061 = (0);
var G__152062 = (0);
seq__152038_152042 = G__152059;
chunk__152039_152043 = G__152060;
count__152040_152044 = G__152061;
i__152041_152045 = G__152062;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__152036,map__152036__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__152036,map__152036__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map