// Compiled by ClojureScript 1.7.170 {}
goog.provide('ui.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
ui.core.join_lines = cljs.core.partial.call(null,clojure.string.join,"\n");
cljs.core.enable_console_print_BANG_.call(null);
if(typeof ui.core.state !== 'undefined'){
} else {
ui.core.state = reagent.core.atom.call(null,(0));
}
ui.core.shell_result = reagent.core.atom.call(null,"");
if(typeof ui.core.command !== 'undefined'){
} else {
ui.core.command = reagent.core.atom.call(null,"");
}
if(typeof ui.core.proc !== 'undefined'){
} else {
ui.core.proc = require("child_process");
}
ui.core.electron = require("electron");
ui.core.ipc = ui.core.electron.ipcRenderer;
ui.core.append_to_out = (function ui$core$append_to_out(out){
return cljs.core.swap_BANG_.call(null,ui.core.shell_result,cljs.core.str,out);
});
ui.core.ipc.on("midi-msg",(function (e,a){
return ui.core.append_to_out.call(null,[cljs.core.str(a),cljs.core.str("2\n")].join(''));
}));
ui.core.run_process = (function ui$core$run_process(){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,ui.core.command))){
return null;
} else {
cljs.core.println.call(null,"Running command",cljs.core.deref.call(null,ui.core.command));

var vec__148139_148140 = clojure.string.split.call(null,cljs.core.deref.call(null,ui.core.command),/\s/);
var cmd_148141 = cljs.core.nth.call(null,vec__148139_148140,(0),null);
var args_148142 = cljs.core.nthnext.call(null,vec__148139_148140,(1));
var js_args_148143 = cljs.core.clj__GT_js.call(null,(function (){var or__16887__auto__ = args_148142;
if(cljs.core.truth_(or__16887__auto__)){
return or__16887__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var p_148144 = ui.core.proc.spawn(cmd_148141,js_args_148143);
p_148144.on("error",cljs.core.comp.call(null,ui.core.append_to_out,((function (vec__148139_148140,cmd_148141,args_148142,js_args_148143,p_148144){
return (function (p1__148137_SHARP_){
return [cljs.core.str(p1__148137_SHARP_),cljs.core.str("\n")].join('');
});})(vec__148139_148140,cmd_148141,args_148142,js_args_148143,p_148144))
));

p_148144.stderr.on("data",ui.core.append_to_out);

p_148144.stdout.on("data",ui.core.append_to_out);

return cljs.core.reset_BANG_.call(null,ui.core.command,"");
}
});
ui.core.root_component = (function ui$core$root_component(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.logos","div.logos",726232202),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.electron","img.electron",-1068009912),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/electron-logo.png"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.cljs","img.cljs",-1683680663),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/cljs-logo.svg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.reagent","img.reagent",-1983077352),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/reagent-logo.png"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),"Versions:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str("Node     "),cljs.core.str(process.version)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str("Electron "),cljs.core.str(cljs.core.js__GT_clj.call(null,process.versions).call(null,"electron"))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str("Chromium "),cljs.core.str(cljs.core.js__GT_clj.call(null,process.versions).call(null,"chrome"))].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,ui.core.state,cljs.core.inc);

alert("faku");

return ui.core.ipc.send("dolan","faku");
})], null),[cljs.core.str("Clicked "),cljs.core.str(cljs.core.deref.call(null,ui.core.state)),cljs.core.str(" times")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

return ui.core.run_process.call(null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#command","input#command",1519081039),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_.call(null,ui.core.command,e.target.value);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,ui.core.command),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"type in shell command"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),ui.core.join_lines.call(null,cljs.core.take.call(null,(100),cljs.core.reverse.call(null,clojure.string.split_lines.call(null,cljs.core.deref.call(null,ui.core.shell_result)))))], null)], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.core.root_component], null),document.body);

//# sourceMappingURL=core.js.map