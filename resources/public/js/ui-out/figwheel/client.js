// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__152498 = cljs.core._EQ_;
var expr__152499 = (function (){var or__16887__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16887__auto__)){
return or__16887__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__152498.call(null,"true",expr__152499))){
return true;
} else {
if(cljs.core.truth_(pred__152498.call(null,"false",expr__152499))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__152499)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__152501__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__152501 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__152502__i = 0, G__152502__a = new Array(arguments.length -  0);
while (G__152502__i < G__152502__a.length) {G__152502__a[G__152502__i] = arguments[G__152502__i + 0]; ++G__152502__i;}
  args = new cljs.core.IndexedSeq(G__152502__a,0);
} 
return G__152501__delegate.call(this,args);};
G__152501.cljs$lang$maxFixedArity = 0;
G__152501.cljs$lang$applyTo = (function (arglist__152503){
var args = cljs.core.seq(arglist__152503);
return G__152501__delegate(args);
});
G__152501.cljs$core$IFn$_invoke$arity$variadic = G__152501__delegate;
return G__152501;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__152504){
var map__152507 = p__152504;
var map__152507__$1 = ((((!((map__152507 == null)))?((((map__152507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152507):map__152507);
var message = cljs.core.get.call(null,map__152507__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__152507__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16887__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16887__auto__)){
return or__16887__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16875__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16875__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16875__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19054__auto___152669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto___152669,ch){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto___152669,ch){
return (function (state_152638){
var state_val_152639 = (state_152638[(1)]);
if((state_val_152639 === (7))){
var inst_152634 = (state_152638[(2)]);
var state_152638__$1 = state_152638;
var statearr_152640_152670 = state_152638__$1;
(statearr_152640_152670[(2)] = inst_152634);

(statearr_152640_152670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152639 === (1))){
var state_152638__$1 = state_152638;
var statearr_152641_152671 = state_152638__$1;
(statearr_152641_152671[(2)] = null);

(statearr_152641_152671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152639 === (4))){
var inst_152591 = (state_152638[(7)]);
var inst_152591__$1 = (state_152638[(2)]);
var state_152638__$1 = (function (){var statearr_152642 = state_152638;
(statearr_152642[(7)] = inst_152591__$1);

return statearr_152642;
})();
if(cljs.core.truth_(inst_152591__$1)){
var statearr_152643_152672 = state_152638__$1;
(statearr_152643_152672[(1)] = (5));

} else {
var statearr_152644_152673 = state_152638__$1;
(statearr_152644_152673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152639 === (15))){
var inst_152598 = (state_152638[(8)]);
var inst_152613 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_152598);
var inst_152614 = cljs.core.first.call(null,inst_152613);
var inst_152615 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_152614);
var inst_152616 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_152615)].join('');
var inst_152617 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_152616);
var state_152638__$1 = state_152638;
var statearr_152645_152674 = state_152638__$1;
(statearr_152645_152674[(2)] = inst_152617);

(statearr_152645_152674[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152639 === (13))){
var inst_152622 = (state_152638[(2)]);
var state_152638__$1 = state_152638;
var statearr_152646_152675 = state_152638__$1;
(statearr_152646_152675[(2)] = inst_152622);

(statearr_152646_152675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152639 === (6))){
var state_152638__$1 = state_152638;
var statearr_152647_152676 = state_152638__$1;
(statearr_152647_152676[(2)] = null);

(statearr_152647_152676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152639 === (17))){
var inst_152620 = (state_152638[(2)]);
var state_152638__$1 = state_152638;
var statearr_152648_152677 = state_152638__$1;
(statearr_152648_152677[(2)] = inst_152620);

(statearr_152648_152677[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152639 === (3))){
var inst_152636 = (state_152638[(2)]);
var state_152638__$1 = state_152638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152638__$1,inst_152636);
} else {
if((state_val_152639 === (12))){
var inst_152597 = (state_152638[(9)]);
var inst_152611 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_152597,opts);
var state_152638__$1 = state_152638;
if(cljs.core.truth_(inst_152611)){
var statearr_152649_152678 = state_152638__$1;
(statearr_152649_152678[(1)] = (15));

} else {
var statearr_152650_152679 = state_152638__$1;
(statearr_152650_152679[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152639 === (2))){
var state_152638__$1 = state_152638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152638__$1,(4),ch);
} else {
if((state_val_152639 === (11))){
var inst_152598 = (state_152638[(8)]);
var inst_152603 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_152604 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_152598);
var inst_152605 = cljs.core.async.timeout.call(null,(1000));
var inst_152606 = [inst_152604,inst_152605];
var inst_152607 = (new cljs.core.PersistentVector(null,2,(5),inst_152603,inst_152606,null));
var state_152638__$1 = state_152638;
return cljs.core.async.ioc_alts_BANG_.call(null,state_152638__$1,(14),inst_152607);
} else {
if((state_val_152639 === (9))){
var inst_152598 = (state_152638[(8)]);
var inst_152624 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_152625 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_152598);
var inst_152626 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_152625);
var inst_152627 = [cljs.core.str("Not loading: "),cljs.core.str(inst_152626)].join('');
var inst_152628 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_152627);
var state_152638__$1 = (function (){var statearr_152651 = state_152638;
(statearr_152651[(10)] = inst_152624);

return statearr_152651;
})();
var statearr_152652_152680 = state_152638__$1;
(statearr_152652_152680[(2)] = inst_152628);

(statearr_152652_152680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152639 === (5))){
var inst_152591 = (state_152638[(7)]);
var inst_152593 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_152594 = (new cljs.core.PersistentArrayMap(null,2,inst_152593,null));
var inst_152595 = (new cljs.core.PersistentHashSet(null,inst_152594,null));
var inst_152596 = figwheel.client.focus_msgs.call(null,inst_152595,inst_152591);
var inst_152597 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_152596);
var inst_152598 = cljs.core.first.call(null,inst_152596);
var inst_152599 = figwheel.client.autoload_QMARK_.call(null);
var state_152638__$1 = (function (){var statearr_152653 = state_152638;
(statearr_152653[(9)] = inst_152597);

(statearr_152653[(8)] = inst_152598);

return statearr_152653;
})();
if(cljs.core.truth_(inst_152599)){
var statearr_152654_152681 = state_152638__$1;
(statearr_152654_152681[(1)] = (8));

} else {
var statearr_152655_152682 = state_152638__$1;
(statearr_152655_152682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152639 === (14))){
var inst_152609 = (state_152638[(2)]);
var state_152638__$1 = state_152638;
var statearr_152656_152683 = state_152638__$1;
(statearr_152656_152683[(2)] = inst_152609);

(statearr_152656_152683[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152639 === (16))){
var state_152638__$1 = state_152638;
var statearr_152657_152684 = state_152638__$1;
(statearr_152657_152684[(2)] = null);

(statearr_152657_152684[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152639 === (10))){
var inst_152630 = (state_152638[(2)]);
var state_152638__$1 = (function (){var statearr_152658 = state_152638;
(statearr_152658[(11)] = inst_152630);

return statearr_152658;
})();
var statearr_152659_152685 = state_152638__$1;
(statearr_152659_152685[(2)] = null);

(statearr_152659_152685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152639 === (8))){
var inst_152597 = (state_152638[(9)]);
var inst_152601 = figwheel.client.reload_file_state_QMARK_.call(null,inst_152597,opts);
var state_152638__$1 = state_152638;
if(cljs.core.truth_(inst_152601)){
var statearr_152660_152686 = state_152638__$1;
(statearr_152660_152686[(1)] = (11));

} else {
var statearr_152661_152687 = state_152638__$1;
(statearr_152661_152687[(1)] = (12));

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
});})(c__19054__auto___152669,ch))
;
return ((function (switch__18942__auto__,c__19054__auto___152669,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18943__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18943__auto____0 = (function (){
var statearr_152665 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_152665[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18943__auto__);

(statearr_152665[(1)] = (1));

return statearr_152665;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18943__auto____1 = (function (state_152638){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_152638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e152666){if((e152666 instanceof Object)){
var ex__18946__auto__ = e152666;
var statearr_152667_152688 = state_152638;
(statearr_152667_152688[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e152666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__152689 = state_152638;
state_152638 = G__152689;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18943__auto__ = function(state_152638){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18943__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18943__auto____1.call(this,state_152638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18943__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18943__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto___152669,ch))
})();
var state__19056__auto__ = (function (){var statearr_152668 = f__19055__auto__.call(null);
(statearr_152668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto___152669);

return statearr_152668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto___152669,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__152690_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__152690_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_152697 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_152697){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_152695 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_152696 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_152695,_STAR_print_newline_STAR_152696,base_path_152697){
return (function() { 
var G__152698__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__152698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__152699__i = 0, G__152699__a = new Array(arguments.length -  0);
while (G__152699__i < G__152699__a.length) {G__152699__a[G__152699__i] = arguments[G__152699__i + 0]; ++G__152699__i;}
  args = new cljs.core.IndexedSeq(G__152699__a,0);
} 
return G__152698__delegate.call(this,args);};
G__152698.cljs$lang$maxFixedArity = 0;
G__152698.cljs$lang$applyTo = (function (arglist__152700){
var args = cljs.core.seq(arglist__152700);
return G__152698__delegate(args);
});
G__152698.cljs$core$IFn$_invoke$arity$variadic = G__152698__delegate;
return G__152698;
})()
;})(_STAR_print_fn_STAR_152695,_STAR_print_newline_STAR_152696,base_path_152697))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_152696;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_152695;
}}catch (e152694){if((e152694 instanceof Error)){
var e = e152694;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_152697], null));
} else {
var e = e152694;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_152697))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__152701){
var map__152708 = p__152701;
var map__152708__$1 = ((((!((map__152708 == null)))?((((map__152708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152708):map__152708);
var opts = map__152708__$1;
var build_id = cljs.core.get.call(null,map__152708__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__152708,map__152708__$1,opts,build_id){
return (function (p__152710){
var vec__152711 = p__152710;
var map__152712 = cljs.core.nth.call(null,vec__152711,(0),null);
var map__152712__$1 = ((((!((map__152712 == null)))?((((map__152712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152712):map__152712);
var msg = map__152712__$1;
var msg_name = cljs.core.get.call(null,map__152712__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__152711,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__152711,map__152712,map__152712__$1,msg,msg_name,_,map__152708,map__152708__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__152711,map__152712,map__152712__$1,msg,msg_name,_,map__152708,map__152708__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__152708,map__152708__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__152718){
var vec__152719 = p__152718;
var map__152720 = cljs.core.nth.call(null,vec__152719,(0),null);
var map__152720__$1 = ((((!((map__152720 == null)))?((((map__152720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152720):map__152720);
var msg = map__152720__$1;
var msg_name = cljs.core.get.call(null,map__152720__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__152719,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__152722){
var map__152732 = p__152722;
var map__152732__$1 = ((((!((map__152732 == null)))?((((map__152732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152732):map__152732);
var on_compile_warning = cljs.core.get.call(null,map__152732__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__152732__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__152732,map__152732__$1,on_compile_warning,on_compile_fail){
return (function (p__152734){
var vec__152735 = p__152734;
var map__152736 = cljs.core.nth.call(null,vec__152735,(0),null);
var map__152736__$1 = ((((!((map__152736 == null)))?((((map__152736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152736):map__152736);
var msg = map__152736__$1;
var msg_name = cljs.core.get.call(null,map__152736__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__152735,(1));
var pred__152738 = cljs.core._EQ_;
var expr__152739 = msg_name;
if(cljs.core.truth_(pred__152738.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__152739))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__152738.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__152739))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__152732,map__152732__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto__,msg_hist,msg_names,msg){
return (function (state_152955){
var state_val_152956 = (state_152955[(1)]);
if((state_val_152956 === (7))){
var inst_152879 = (state_152955[(2)]);
var state_152955__$1 = state_152955;
if(cljs.core.truth_(inst_152879)){
var statearr_152957_153003 = state_152955__$1;
(statearr_152957_153003[(1)] = (8));

} else {
var statearr_152958_153004 = state_152955__$1;
(statearr_152958_153004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (20))){
var inst_152949 = (state_152955[(2)]);
var state_152955__$1 = state_152955;
var statearr_152959_153005 = state_152955__$1;
(statearr_152959_153005[(2)] = inst_152949);

(statearr_152959_153005[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (27))){
var inst_152945 = (state_152955[(2)]);
var state_152955__$1 = state_152955;
var statearr_152960_153006 = state_152955__$1;
(statearr_152960_153006[(2)] = inst_152945);

(statearr_152960_153006[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (1))){
var inst_152872 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_152955__$1 = state_152955;
if(cljs.core.truth_(inst_152872)){
var statearr_152961_153007 = state_152955__$1;
(statearr_152961_153007[(1)] = (2));

} else {
var statearr_152962_153008 = state_152955__$1;
(statearr_152962_153008[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (24))){
var inst_152947 = (state_152955[(2)]);
var state_152955__$1 = state_152955;
var statearr_152963_153009 = state_152955__$1;
(statearr_152963_153009[(2)] = inst_152947);

(statearr_152963_153009[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (4))){
var inst_152953 = (state_152955[(2)]);
var state_152955__$1 = state_152955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152955__$1,inst_152953);
} else {
if((state_val_152956 === (15))){
var inst_152951 = (state_152955[(2)]);
var state_152955__$1 = state_152955;
var statearr_152964_153010 = state_152955__$1;
(statearr_152964_153010[(2)] = inst_152951);

(statearr_152964_153010[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (21))){
var inst_152910 = (state_152955[(2)]);
var state_152955__$1 = state_152955;
var statearr_152965_153011 = state_152955__$1;
(statearr_152965_153011[(2)] = inst_152910);

(statearr_152965_153011[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (31))){
var inst_152934 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_152955__$1 = state_152955;
if(cljs.core.truth_(inst_152934)){
var statearr_152966_153012 = state_152955__$1;
(statearr_152966_153012[(1)] = (34));

} else {
var statearr_152967_153013 = state_152955__$1;
(statearr_152967_153013[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (32))){
var inst_152943 = (state_152955[(2)]);
var state_152955__$1 = state_152955;
var statearr_152968_153014 = state_152955__$1;
(statearr_152968_153014[(2)] = inst_152943);

(statearr_152968_153014[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (33))){
var inst_152932 = (state_152955[(2)]);
var state_152955__$1 = state_152955;
var statearr_152969_153015 = state_152955__$1;
(statearr_152969_153015[(2)] = inst_152932);

(statearr_152969_153015[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (13))){
var inst_152893 = figwheel.client.heads_up.clear.call(null);
var state_152955__$1 = state_152955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152955__$1,(16),inst_152893);
} else {
if((state_val_152956 === (22))){
var inst_152914 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_152915 = figwheel.client.heads_up.append_message.call(null,inst_152914);
var state_152955__$1 = state_152955;
var statearr_152970_153016 = state_152955__$1;
(statearr_152970_153016[(2)] = inst_152915);

(statearr_152970_153016[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (36))){
var inst_152941 = (state_152955[(2)]);
var state_152955__$1 = state_152955;
var statearr_152971_153017 = state_152955__$1;
(statearr_152971_153017[(2)] = inst_152941);

(statearr_152971_153017[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (29))){
var inst_152925 = (state_152955[(2)]);
var state_152955__$1 = state_152955;
var statearr_152972_153018 = state_152955__$1;
(statearr_152972_153018[(2)] = inst_152925);

(statearr_152972_153018[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (6))){
var inst_152874 = (state_152955[(7)]);
var state_152955__$1 = state_152955;
var statearr_152973_153019 = state_152955__$1;
(statearr_152973_153019[(2)] = inst_152874);

(statearr_152973_153019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (28))){
var inst_152921 = (state_152955[(2)]);
var inst_152922 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_152923 = figwheel.client.heads_up.display_warning.call(null,inst_152922);
var state_152955__$1 = (function (){var statearr_152974 = state_152955;
(statearr_152974[(8)] = inst_152921);

return statearr_152974;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152955__$1,(29),inst_152923);
} else {
if((state_val_152956 === (25))){
var inst_152919 = figwheel.client.heads_up.clear.call(null);
var state_152955__$1 = state_152955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152955__$1,(28),inst_152919);
} else {
if((state_val_152956 === (34))){
var inst_152936 = figwheel.client.heads_up.flash_loaded.call(null);
var state_152955__$1 = state_152955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152955__$1,(37),inst_152936);
} else {
if((state_val_152956 === (17))){
var inst_152901 = (state_152955[(2)]);
var state_152955__$1 = state_152955;
var statearr_152975_153020 = state_152955__$1;
(statearr_152975_153020[(2)] = inst_152901);

(statearr_152975_153020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (3))){
var inst_152891 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_152955__$1 = state_152955;
if(cljs.core.truth_(inst_152891)){
var statearr_152976_153021 = state_152955__$1;
(statearr_152976_153021[(1)] = (13));

} else {
var statearr_152977_153022 = state_152955__$1;
(statearr_152977_153022[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (12))){
var inst_152887 = (state_152955[(2)]);
var state_152955__$1 = state_152955;
var statearr_152978_153023 = state_152955__$1;
(statearr_152978_153023[(2)] = inst_152887);

(statearr_152978_153023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (2))){
var inst_152874 = (state_152955[(7)]);
var inst_152874__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_152955__$1 = (function (){var statearr_152979 = state_152955;
(statearr_152979[(7)] = inst_152874__$1);

return statearr_152979;
})();
if(cljs.core.truth_(inst_152874__$1)){
var statearr_152980_153024 = state_152955__$1;
(statearr_152980_153024[(1)] = (5));

} else {
var statearr_152981_153025 = state_152955__$1;
(statearr_152981_153025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (23))){
var inst_152917 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_152955__$1 = state_152955;
if(cljs.core.truth_(inst_152917)){
var statearr_152982_153026 = state_152955__$1;
(statearr_152982_153026[(1)] = (25));

} else {
var statearr_152983_153027 = state_152955__$1;
(statearr_152983_153027[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (35))){
var state_152955__$1 = state_152955;
var statearr_152984_153028 = state_152955__$1;
(statearr_152984_153028[(2)] = null);

(statearr_152984_153028[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (19))){
var inst_152912 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_152955__$1 = state_152955;
if(cljs.core.truth_(inst_152912)){
var statearr_152985_153029 = state_152955__$1;
(statearr_152985_153029[(1)] = (22));

} else {
var statearr_152986_153030 = state_152955__$1;
(statearr_152986_153030[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (11))){
var inst_152883 = (state_152955[(2)]);
var state_152955__$1 = state_152955;
var statearr_152987_153031 = state_152955__$1;
(statearr_152987_153031[(2)] = inst_152883);

(statearr_152987_153031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (9))){
var inst_152885 = figwheel.client.heads_up.clear.call(null);
var state_152955__$1 = state_152955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152955__$1,(12),inst_152885);
} else {
if((state_val_152956 === (5))){
var inst_152876 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_152955__$1 = state_152955;
var statearr_152988_153032 = state_152955__$1;
(statearr_152988_153032[(2)] = inst_152876);

(statearr_152988_153032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (14))){
var inst_152903 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_152955__$1 = state_152955;
if(cljs.core.truth_(inst_152903)){
var statearr_152989_153033 = state_152955__$1;
(statearr_152989_153033[(1)] = (18));

} else {
var statearr_152990_153034 = state_152955__$1;
(statearr_152990_153034[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (26))){
var inst_152927 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_152955__$1 = state_152955;
if(cljs.core.truth_(inst_152927)){
var statearr_152991_153035 = state_152955__$1;
(statearr_152991_153035[(1)] = (30));

} else {
var statearr_152992_153036 = state_152955__$1;
(statearr_152992_153036[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (16))){
var inst_152895 = (state_152955[(2)]);
var inst_152896 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_152897 = figwheel.client.format_messages.call(null,inst_152896);
var inst_152898 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_152899 = figwheel.client.heads_up.display_error.call(null,inst_152897,inst_152898);
var state_152955__$1 = (function (){var statearr_152993 = state_152955;
(statearr_152993[(9)] = inst_152895);

return statearr_152993;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152955__$1,(17),inst_152899);
} else {
if((state_val_152956 === (30))){
var inst_152929 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_152930 = figwheel.client.heads_up.display_warning.call(null,inst_152929);
var state_152955__$1 = state_152955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152955__$1,(33),inst_152930);
} else {
if((state_val_152956 === (10))){
var inst_152889 = (state_152955[(2)]);
var state_152955__$1 = state_152955;
var statearr_152994_153037 = state_152955__$1;
(statearr_152994_153037[(2)] = inst_152889);

(statearr_152994_153037[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (18))){
var inst_152905 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_152906 = figwheel.client.format_messages.call(null,inst_152905);
var inst_152907 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_152908 = figwheel.client.heads_up.display_error.call(null,inst_152906,inst_152907);
var state_152955__$1 = state_152955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152955__$1,(21),inst_152908);
} else {
if((state_val_152956 === (37))){
var inst_152938 = (state_152955[(2)]);
var state_152955__$1 = state_152955;
var statearr_152995_153038 = state_152955__$1;
(statearr_152995_153038[(2)] = inst_152938);

(statearr_152995_153038[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152956 === (8))){
var inst_152881 = figwheel.client.heads_up.flash_loaded.call(null);
var state_152955__$1 = state_152955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152955__$1,(11),inst_152881);
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
});})(c__19054__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18942__auto__,c__19054__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18943__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18943__auto____0 = (function (){
var statearr_152999 = [null,null,null,null,null,null,null,null,null,null];
(statearr_152999[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18943__auto__);

(statearr_152999[(1)] = (1));

return statearr_152999;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18943__auto____1 = (function (state_152955){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_152955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e153000){if((e153000 instanceof Object)){
var ex__18946__auto__ = e153000;
var statearr_153001_153039 = state_152955;
(statearr_153001_153039[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e153000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__153040 = state_152955;
state_152955 = G__153040;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18943__auto__ = function(state_152955){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18943__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18943__auto____1.call(this,state_152955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18943__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18943__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto__,msg_hist,msg_names,msg))
})();
var state__19056__auto__ = (function (){var statearr_153002 = f__19055__auto__.call(null);
(statearr_153002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto__);

return statearr_153002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto__,msg_hist,msg_names,msg))
);

return c__19054__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19054__auto___153103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto___153103,ch){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto___153103,ch){
return (function (state_153086){
var state_val_153087 = (state_153086[(1)]);
if((state_val_153087 === (1))){
var state_153086__$1 = state_153086;
var statearr_153088_153104 = state_153086__$1;
(statearr_153088_153104[(2)] = null);

(statearr_153088_153104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153087 === (2))){
var state_153086__$1 = state_153086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_153086__$1,(4),ch);
} else {
if((state_val_153087 === (3))){
var inst_153084 = (state_153086[(2)]);
var state_153086__$1 = state_153086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_153086__$1,inst_153084);
} else {
if((state_val_153087 === (4))){
var inst_153074 = (state_153086[(7)]);
var inst_153074__$1 = (state_153086[(2)]);
var state_153086__$1 = (function (){var statearr_153089 = state_153086;
(statearr_153089[(7)] = inst_153074__$1);

return statearr_153089;
})();
if(cljs.core.truth_(inst_153074__$1)){
var statearr_153090_153105 = state_153086__$1;
(statearr_153090_153105[(1)] = (5));

} else {
var statearr_153091_153106 = state_153086__$1;
(statearr_153091_153106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153087 === (5))){
var inst_153074 = (state_153086[(7)]);
var inst_153076 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_153074);
var state_153086__$1 = state_153086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_153086__$1,(8),inst_153076);
} else {
if((state_val_153087 === (6))){
var state_153086__$1 = state_153086;
var statearr_153092_153107 = state_153086__$1;
(statearr_153092_153107[(2)] = null);

(statearr_153092_153107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153087 === (7))){
var inst_153082 = (state_153086[(2)]);
var state_153086__$1 = state_153086;
var statearr_153093_153108 = state_153086__$1;
(statearr_153093_153108[(2)] = inst_153082);

(statearr_153093_153108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153087 === (8))){
var inst_153078 = (state_153086[(2)]);
var state_153086__$1 = (function (){var statearr_153094 = state_153086;
(statearr_153094[(8)] = inst_153078);

return statearr_153094;
})();
var statearr_153095_153109 = state_153086__$1;
(statearr_153095_153109[(2)] = null);

(statearr_153095_153109[(1)] = (2));


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
});})(c__19054__auto___153103,ch))
;
return ((function (switch__18942__auto__,c__19054__auto___153103,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18943__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18943__auto____0 = (function (){
var statearr_153099 = [null,null,null,null,null,null,null,null,null];
(statearr_153099[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18943__auto__);

(statearr_153099[(1)] = (1));

return statearr_153099;
});
var figwheel$client$heads_up_plugin_$_state_machine__18943__auto____1 = (function (state_153086){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_153086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e153100){if((e153100 instanceof Object)){
var ex__18946__auto__ = e153100;
var statearr_153101_153110 = state_153086;
(statearr_153101_153110[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e153100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__153111 = state_153086;
state_153086 = G__153111;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18943__auto__ = function(state_153086){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18943__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18943__auto____1.call(this,state_153086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18943__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18943__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto___153103,ch))
})();
var state__19056__auto__ = (function (){var statearr_153102 = f__19055__auto__.call(null);
(statearr_153102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto___153103);

return statearr_153102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto___153103,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto__){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto__){
return (function (state_153132){
var state_val_153133 = (state_153132[(1)]);
if((state_val_153133 === (1))){
var inst_153127 = cljs.core.async.timeout.call(null,(3000));
var state_153132__$1 = state_153132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_153132__$1,(2),inst_153127);
} else {
if((state_val_153133 === (2))){
var inst_153129 = (state_153132[(2)]);
var inst_153130 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_153132__$1 = (function (){var statearr_153134 = state_153132;
(statearr_153134[(7)] = inst_153129);

return statearr_153134;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_153132__$1,inst_153130);
} else {
return null;
}
}
});})(c__19054__auto__))
;
return ((function (switch__18942__auto__,c__19054__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18943__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18943__auto____0 = (function (){
var statearr_153138 = [null,null,null,null,null,null,null,null];
(statearr_153138[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18943__auto__);

(statearr_153138[(1)] = (1));

return statearr_153138;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18943__auto____1 = (function (state_153132){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_153132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e153139){if((e153139 instanceof Object)){
var ex__18946__auto__ = e153139;
var statearr_153140_153142 = state_153132;
(statearr_153140_153142[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e153139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__153143 = state_153132;
state_153132 = G__153143;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18943__auto__ = function(state_153132){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18943__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18943__auto____1.call(this,state_153132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18943__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18943__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto__))
})();
var state__19056__auto__ = (function (){var statearr_153141 = f__19055__auto__.call(null);
(statearr_153141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto__);

return statearr_153141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto__))
);

return c__19054__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__153144){
var map__153151 = p__153144;
var map__153151__$1 = ((((!((map__153151 == null)))?((((map__153151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__153151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__153151):map__153151);
var ed = map__153151__$1;
var formatted_exception = cljs.core.get.call(null,map__153151__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__153151__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__153151__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__153153_153157 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__153154_153158 = null;
var count__153155_153159 = (0);
var i__153156_153160 = (0);
while(true){
if((i__153156_153160 < count__153155_153159)){
var msg_153161 = cljs.core._nth.call(null,chunk__153154_153158,i__153156_153160);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_153161);

var G__153162 = seq__153153_153157;
var G__153163 = chunk__153154_153158;
var G__153164 = count__153155_153159;
var G__153165 = (i__153156_153160 + (1));
seq__153153_153157 = G__153162;
chunk__153154_153158 = G__153163;
count__153155_153159 = G__153164;
i__153156_153160 = G__153165;
continue;
} else {
var temp__4425__auto___153166 = cljs.core.seq.call(null,seq__153153_153157);
if(temp__4425__auto___153166){
var seq__153153_153167__$1 = temp__4425__auto___153166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__153153_153167__$1)){
var c__17690__auto___153168 = cljs.core.chunk_first.call(null,seq__153153_153167__$1);
var G__153169 = cljs.core.chunk_rest.call(null,seq__153153_153167__$1);
var G__153170 = c__17690__auto___153168;
var G__153171 = cljs.core.count.call(null,c__17690__auto___153168);
var G__153172 = (0);
seq__153153_153157 = G__153169;
chunk__153154_153158 = G__153170;
count__153155_153159 = G__153171;
i__153156_153160 = G__153172;
continue;
} else {
var msg_153173 = cljs.core.first.call(null,seq__153153_153167__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_153173);

var G__153174 = cljs.core.next.call(null,seq__153153_153167__$1);
var G__153175 = null;
var G__153176 = (0);
var G__153177 = (0);
seq__153153_153157 = G__153174;
chunk__153154_153158 = G__153175;
count__153155_153159 = G__153176;
i__153156_153160 = G__153177;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__153178){
var map__153181 = p__153178;
var map__153181__$1 = ((((!((map__153181 == null)))?((((map__153181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__153181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__153181):map__153181);
var w = map__153181__$1;
var message = cljs.core.get.call(null,map__153181__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16875__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16875__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16875__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__153189 = cljs.core.seq.call(null,plugins);
var chunk__153190 = null;
var count__153191 = (0);
var i__153192 = (0);
while(true){
if((i__153192 < count__153191)){
var vec__153193 = cljs.core._nth.call(null,chunk__153190,i__153192);
var k = cljs.core.nth.call(null,vec__153193,(0),null);
var plugin = cljs.core.nth.call(null,vec__153193,(1),null);
if(cljs.core.truth_(plugin)){
var pl_153195 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__153189,chunk__153190,count__153191,i__153192,pl_153195,vec__153193,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_153195.call(null,msg_hist);
});})(seq__153189,chunk__153190,count__153191,i__153192,pl_153195,vec__153193,k,plugin))
);
} else {
}

var G__153196 = seq__153189;
var G__153197 = chunk__153190;
var G__153198 = count__153191;
var G__153199 = (i__153192 + (1));
seq__153189 = G__153196;
chunk__153190 = G__153197;
count__153191 = G__153198;
i__153192 = G__153199;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__153189);
if(temp__4425__auto__){
var seq__153189__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__153189__$1)){
var c__17690__auto__ = cljs.core.chunk_first.call(null,seq__153189__$1);
var G__153200 = cljs.core.chunk_rest.call(null,seq__153189__$1);
var G__153201 = c__17690__auto__;
var G__153202 = cljs.core.count.call(null,c__17690__auto__);
var G__153203 = (0);
seq__153189 = G__153200;
chunk__153190 = G__153201;
count__153191 = G__153202;
i__153192 = G__153203;
continue;
} else {
var vec__153194 = cljs.core.first.call(null,seq__153189__$1);
var k = cljs.core.nth.call(null,vec__153194,(0),null);
var plugin = cljs.core.nth.call(null,vec__153194,(1),null);
if(cljs.core.truth_(plugin)){
var pl_153204 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__153189,chunk__153190,count__153191,i__153192,pl_153204,vec__153194,k,plugin,seq__153189__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_153204.call(null,msg_hist);
});})(seq__153189,chunk__153190,count__153191,i__153192,pl_153204,vec__153194,k,plugin,seq__153189__$1,temp__4425__auto__))
);
} else {
}

var G__153205 = cljs.core.next.call(null,seq__153189__$1);
var G__153206 = null;
var G__153207 = (0);
var G__153208 = (0);
seq__153189 = G__153205;
chunk__153190 = G__153206;
count__153191 = G__153207;
i__153192 = G__153208;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args153209 = [];
var len__17945__auto___153212 = arguments.length;
var i__17946__auto___153213 = (0);
while(true){
if((i__17946__auto___153213 < len__17945__auto___153212)){
args153209.push((arguments[i__17946__auto___153213]));

var G__153214 = (i__17946__auto___153213 + (1));
i__17946__auto___153213 = G__153214;
continue;
} else {
}
break;
}

var G__153211 = args153209.length;
switch (G__153211) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args153209.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17952__auto__ = [];
var len__17945__auto___153220 = arguments.length;
var i__17946__auto___153221 = (0);
while(true){
if((i__17946__auto___153221 < len__17945__auto___153220)){
args__17952__auto__.push((arguments[i__17946__auto___153221]));

var G__153222 = (i__17946__auto___153221 + (1));
i__17946__auto___153221 = G__153222;
continue;
} else {
}
break;
}

var argseq__17953__auto__ = ((((0) < args__17952__auto__.length))?(new cljs.core.IndexedSeq(args__17952__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17953__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__153217){
var map__153218 = p__153217;
var map__153218__$1 = ((((!((map__153218 == null)))?((((map__153218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__153218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__153218):map__153218);
var opts = map__153218__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq153216){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq153216));
});

//# sourceMappingURL=client.js.map