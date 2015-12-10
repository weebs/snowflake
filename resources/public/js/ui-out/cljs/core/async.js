// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args148238 = [];
var len__17945__auto___148244 = arguments.length;
var i__17946__auto___148245 = (0);
while(true){
if((i__17946__auto___148245 < len__17945__auto___148244)){
args148238.push((arguments[i__17946__auto___148245]));

var G__148246 = (i__17946__auto___148245 + (1));
i__17946__auto___148245 = G__148246;
continue;
} else {
}
break;
}

var G__148240 = args148238.length;
switch (G__148240) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args148238.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async148241 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async148241 = (function (f,blockable,meta148242){
this.f = f;
this.blockable = blockable;
this.meta148242 = meta148242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async148241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_148243,meta148242__$1){
var self__ = this;
var _148243__$1 = this;
return (new cljs.core.async.t_cljs$core$async148241(self__.f,self__.blockable,meta148242__$1));
});

cljs.core.async.t_cljs$core$async148241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_148243){
var self__ = this;
var _148243__$1 = this;
return self__.meta148242;
});

cljs.core.async.t_cljs$core$async148241.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async148241.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async148241.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async148241.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async148241.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta148242","meta148242",-687628145,null)], null);
});

cljs.core.async.t_cljs$core$async148241.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async148241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async148241";

cljs.core.async.t_cljs$core$async148241.cljs$lang$ctorPrWriter = (function (this__17485__auto__,writer__17486__auto__,opt__17487__auto__){
return cljs.core._write.call(null,writer__17486__auto__,"cljs.core.async/t_cljs$core$async148241");
});

cljs.core.async.__GT_t_cljs$core$async148241 = (function cljs$core$async$__GT_t_cljs$core$async148241(f__$1,blockable__$1,meta148242){
return (new cljs.core.async.t_cljs$core$async148241(f__$1,blockable__$1,meta148242));
});

}

return (new cljs.core.async.t_cljs$core$async148241(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args148250 = [];
var len__17945__auto___148253 = arguments.length;
var i__17946__auto___148254 = (0);
while(true){
if((i__17946__auto___148254 < len__17945__auto___148253)){
args148250.push((arguments[i__17946__auto___148254]));

var G__148255 = (i__17946__auto___148254 + (1));
i__17946__auto___148254 = G__148255;
continue;
} else {
}
break;
}

var G__148252 = args148250.length;
switch (G__148252) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args148250.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args148257 = [];
var len__17945__auto___148260 = arguments.length;
var i__17946__auto___148261 = (0);
while(true){
if((i__17946__auto___148261 < len__17945__auto___148260)){
args148257.push((arguments[i__17946__auto___148261]));

var G__148262 = (i__17946__auto___148261 + (1));
i__17946__auto___148261 = G__148262;
continue;
} else {
}
break;
}

var G__148259 = args148257.length;
switch (G__148259) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args148257.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args148264 = [];
var len__17945__auto___148267 = arguments.length;
var i__17946__auto___148268 = (0);
while(true){
if((i__17946__auto___148268 < len__17945__auto___148267)){
args148264.push((arguments[i__17946__auto___148268]));

var G__148269 = (i__17946__auto___148268 + (1));
i__17946__auto___148268 = G__148269;
continue;
} else {
}
break;
}

var G__148266 = args148264.length;
switch (G__148266) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args148264.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_148271 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_148271);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_148271,ret){
return (function (){
return fn1.call(null,val_148271);
});})(val_148271,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args148272 = [];
var len__17945__auto___148275 = arguments.length;
var i__17946__auto___148276 = (0);
while(true){
if((i__17946__auto___148276 < len__17945__auto___148275)){
args148272.push((arguments[i__17946__auto___148276]));

var G__148277 = (i__17946__auto___148276 + (1));
i__17946__auto___148276 = G__148277;
continue;
} else {
}
break;
}

var G__148274 = args148272.length;
switch (G__148274) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args148272.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17790__auto___148279 = n;
var x_148280 = (0);
while(true){
if((x_148280 < n__17790__auto___148279)){
(a[x_148280] = (0));

var G__148281 = (x_148280 + (1));
x_148280 = G__148281;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__148282 = (i + (1));
i = G__148282;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async148286 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async148286 = (function (alt_flag,flag,meta148287){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta148287 = meta148287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async148286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_148288,meta148287__$1){
var self__ = this;
var _148288__$1 = this;
return (new cljs.core.async.t_cljs$core$async148286(self__.alt_flag,self__.flag,meta148287__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async148286.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_148288){
var self__ = this;
var _148288__$1 = this;
return self__.meta148287;
});})(flag))
;

cljs.core.async.t_cljs$core$async148286.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async148286.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async148286.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async148286.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async148286.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta148287","meta148287",-467745225,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async148286.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async148286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async148286";

cljs.core.async.t_cljs$core$async148286.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17485__auto__,writer__17486__auto__,opt__17487__auto__){
return cljs.core._write.call(null,writer__17486__auto__,"cljs.core.async/t_cljs$core$async148286");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async148286 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async148286(alt_flag__$1,flag__$1,meta148287){
return (new cljs.core.async.t_cljs$core$async148286(alt_flag__$1,flag__$1,meta148287));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async148286(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async148292 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async148292 = (function (alt_handler,flag,cb,meta148293){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta148293 = meta148293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async148292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_148294,meta148293__$1){
var self__ = this;
var _148294__$1 = this;
return (new cljs.core.async.t_cljs$core$async148292(self__.alt_handler,self__.flag,self__.cb,meta148293__$1));
});

cljs.core.async.t_cljs$core$async148292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_148294){
var self__ = this;
var _148294__$1 = this;
return self__.meta148293;
});

cljs.core.async.t_cljs$core$async148292.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async148292.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async148292.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async148292.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async148292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta148293","meta148293",1990814051,null)], null);
});

cljs.core.async.t_cljs$core$async148292.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async148292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async148292";

cljs.core.async.t_cljs$core$async148292.cljs$lang$ctorPrWriter = (function (this__17485__auto__,writer__17486__auto__,opt__17487__auto__){
return cljs.core._write.call(null,writer__17486__auto__,"cljs.core.async/t_cljs$core$async148292");
});

cljs.core.async.__GT_t_cljs$core$async148292 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async148292(alt_handler__$1,flag__$1,cb__$1,meta148293){
return (new cljs.core.async.t_cljs$core$async148292(alt_handler__$1,flag__$1,cb__$1,meta148293));
});

}

return (new cljs.core.async.t_cljs$core$async148292(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__148295_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__148295_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__148296_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__148296_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16887__auto__ = wport;
if(cljs.core.truth_(or__16887__auto__)){
return or__16887__auto__;
} else {
return port;
}
})()], null));
} else {
var G__148297 = (i + (1));
i = G__148297;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16887__auto__ = ret;
if(cljs.core.truth_(or__16887__auto__)){
return or__16887__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16875__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16875__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16875__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17952__auto__ = [];
var len__17945__auto___148303 = arguments.length;
var i__17946__auto___148304 = (0);
while(true){
if((i__17946__auto___148304 < len__17945__auto___148303)){
args__17952__auto__.push((arguments[i__17946__auto___148304]));

var G__148305 = (i__17946__auto___148304 + (1));
i__17946__auto___148304 = G__148305;
continue;
} else {
}
break;
}

var argseq__17953__auto__ = ((((1) < args__17952__auto__.length))?(new cljs.core.IndexedSeq(args__17952__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17953__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__148300){
var map__148301 = p__148300;
var map__148301__$1 = ((((!((map__148301 == null)))?((((map__148301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__148301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__148301):map__148301);
var opts = map__148301__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq148298){
var G__148299 = cljs.core.first.call(null,seq148298);
var seq148298__$1 = cljs.core.next.call(null,seq148298);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__148299,seq148298__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args148306 = [];
var len__17945__auto___148356 = arguments.length;
var i__17946__auto___148357 = (0);
while(true){
if((i__17946__auto___148357 < len__17945__auto___148356)){
args148306.push((arguments[i__17946__auto___148357]));

var G__148358 = (i__17946__auto___148357 + (1));
i__17946__auto___148357 = G__148358;
continue;
} else {
}
break;
}

var G__148308 = args148306.length;
switch (G__148308) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args148306.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19054__auto___148360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto___148360){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto___148360){
return (function (state_148332){
var state_val_148333 = (state_148332[(1)]);
if((state_val_148333 === (7))){
var inst_148328 = (state_148332[(2)]);
var state_148332__$1 = state_148332;
var statearr_148334_148361 = state_148332__$1;
(statearr_148334_148361[(2)] = inst_148328);

(statearr_148334_148361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148333 === (1))){
var state_148332__$1 = state_148332;
var statearr_148335_148362 = state_148332__$1;
(statearr_148335_148362[(2)] = null);

(statearr_148335_148362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148333 === (4))){
var inst_148311 = (state_148332[(7)]);
var inst_148311__$1 = (state_148332[(2)]);
var inst_148312 = (inst_148311__$1 == null);
var state_148332__$1 = (function (){var statearr_148336 = state_148332;
(statearr_148336[(7)] = inst_148311__$1);

return statearr_148336;
})();
if(cljs.core.truth_(inst_148312)){
var statearr_148337_148363 = state_148332__$1;
(statearr_148337_148363[(1)] = (5));

} else {
var statearr_148338_148364 = state_148332__$1;
(statearr_148338_148364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148333 === (13))){
var state_148332__$1 = state_148332;
var statearr_148339_148365 = state_148332__$1;
(statearr_148339_148365[(2)] = null);

(statearr_148339_148365[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148333 === (6))){
var inst_148311 = (state_148332[(7)]);
var state_148332__$1 = state_148332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_148332__$1,(11),to,inst_148311);
} else {
if((state_val_148333 === (3))){
var inst_148330 = (state_148332[(2)]);
var state_148332__$1 = state_148332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_148332__$1,inst_148330);
} else {
if((state_val_148333 === (12))){
var state_148332__$1 = state_148332;
var statearr_148340_148366 = state_148332__$1;
(statearr_148340_148366[(2)] = null);

(statearr_148340_148366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148333 === (2))){
var state_148332__$1 = state_148332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_148332__$1,(4),from);
} else {
if((state_val_148333 === (11))){
var inst_148321 = (state_148332[(2)]);
var state_148332__$1 = state_148332;
if(cljs.core.truth_(inst_148321)){
var statearr_148341_148367 = state_148332__$1;
(statearr_148341_148367[(1)] = (12));

} else {
var statearr_148342_148368 = state_148332__$1;
(statearr_148342_148368[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148333 === (9))){
var state_148332__$1 = state_148332;
var statearr_148343_148369 = state_148332__$1;
(statearr_148343_148369[(2)] = null);

(statearr_148343_148369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148333 === (5))){
var state_148332__$1 = state_148332;
if(cljs.core.truth_(close_QMARK_)){
var statearr_148344_148370 = state_148332__$1;
(statearr_148344_148370[(1)] = (8));

} else {
var statearr_148345_148371 = state_148332__$1;
(statearr_148345_148371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148333 === (14))){
var inst_148326 = (state_148332[(2)]);
var state_148332__$1 = state_148332;
var statearr_148346_148372 = state_148332__$1;
(statearr_148346_148372[(2)] = inst_148326);

(statearr_148346_148372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148333 === (10))){
var inst_148318 = (state_148332[(2)]);
var state_148332__$1 = state_148332;
var statearr_148347_148373 = state_148332__$1;
(statearr_148347_148373[(2)] = inst_148318);

(statearr_148347_148373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148333 === (8))){
var inst_148315 = cljs.core.async.close_BANG_.call(null,to);
var state_148332__$1 = state_148332;
var statearr_148348_148374 = state_148332__$1;
(statearr_148348_148374[(2)] = inst_148315);

(statearr_148348_148374[(1)] = (10));


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
});})(c__19054__auto___148360))
;
return ((function (switch__18942__auto__,c__19054__auto___148360){
return (function() {
var cljs$core$async$state_machine__18943__auto__ = null;
var cljs$core$async$state_machine__18943__auto____0 = (function (){
var statearr_148352 = [null,null,null,null,null,null,null,null];
(statearr_148352[(0)] = cljs$core$async$state_machine__18943__auto__);

(statearr_148352[(1)] = (1));

return statearr_148352;
});
var cljs$core$async$state_machine__18943__auto____1 = (function (state_148332){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_148332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e148353){if((e148353 instanceof Object)){
var ex__18946__auto__ = e148353;
var statearr_148354_148375 = state_148332;
(statearr_148354_148375[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_148332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e148353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__148376 = state_148332;
state_148332 = G__148376;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
cljs$core$async$state_machine__18943__auto__ = function(state_148332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18943__auto____1.call(this,state_148332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18943__auto____0;
cljs$core$async$state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18943__auto____1;
return cljs$core$async$state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto___148360))
})();
var state__19056__auto__ = (function (){var statearr_148355 = f__19055__auto__.call(null);
(statearr_148355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto___148360);

return statearr_148355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto___148360))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__148560){
var vec__148561 = p__148560;
var v = cljs.core.nth.call(null,vec__148561,(0),null);
var p = cljs.core.nth.call(null,vec__148561,(1),null);
var job = vec__148561;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19054__auto___148743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto___148743,res,vec__148561,v,p,job,jobs,results){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto___148743,res,vec__148561,v,p,job,jobs,results){
return (function (state_148566){
var state_val_148567 = (state_148566[(1)]);
if((state_val_148567 === (1))){
var state_148566__$1 = state_148566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_148566__$1,(2),res,v);
} else {
if((state_val_148567 === (2))){
var inst_148563 = (state_148566[(2)]);
var inst_148564 = cljs.core.async.close_BANG_.call(null,res);
var state_148566__$1 = (function (){var statearr_148568 = state_148566;
(statearr_148568[(7)] = inst_148563);

return statearr_148568;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_148566__$1,inst_148564);
} else {
return null;
}
}
});})(c__19054__auto___148743,res,vec__148561,v,p,job,jobs,results))
;
return ((function (switch__18942__auto__,c__19054__auto___148743,res,vec__148561,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____0 = (function (){
var statearr_148572 = [null,null,null,null,null,null,null,null];
(statearr_148572[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__);

(statearr_148572[(1)] = (1));

return statearr_148572;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____1 = (function (state_148566){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_148566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e148573){if((e148573 instanceof Object)){
var ex__18946__auto__ = e148573;
var statearr_148574_148744 = state_148566;
(statearr_148574_148744[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_148566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e148573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__148745 = state_148566;
state_148566 = G__148745;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__ = function(state_148566){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____1.call(this,state_148566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto___148743,res,vec__148561,v,p,job,jobs,results))
})();
var state__19056__auto__ = (function (){var statearr_148575 = f__19055__auto__.call(null);
(statearr_148575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto___148743);

return statearr_148575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto___148743,res,vec__148561,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__148576){
var vec__148577 = p__148576;
var v = cljs.core.nth.call(null,vec__148577,(0),null);
var p = cljs.core.nth.call(null,vec__148577,(1),null);
var job = vec__148577;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17790__auto___148746 = n;
var __148747 = (0);
while(true){
if((__148747 < n__17790__auto___148746)){
var G__148578_148748 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__148578_148748) {
case "compute":
var c__19054__auto___148750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__148747,c__19054__auto___148750,G__148578_148748,n__17790__auto___148746,jobs,results,process,async){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (__148747,c__19054__auto___148750,G__148578_148748,n__17790__auto___148746,jobs,results,process,async){
return (function (state_148591){
var state_val_148592 = (state_148591[(1)]);
if((state_val_148592 === (1))){
var state_148591__$1 = state_148591;
var statearr_148593_148751 = state_148591__$1;
(statearr_148593_148751[(2)] = null);

(statearr_148593_148751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148592 === (2))){
var state_148591__$1 = state_148591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_148591__$1,(4),jobs);
} else {
if((state_val_148592 === (3))){
var inst_148589 = (state_148591[(2)]);
var state_148591__$1 = state_148591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_148591__$1,inst_148589);
} else {
if((state_val_148592 === (4))){
var inst_148581 = (state_148591[(2)]);
var inst_148582 = process.call(null,inst_148581);
var state_148591__$1 = state_148591;
if(cljs.core.truth_(inst_148582)){
var statearr_148594_148752 = state_148591__$1;
(statearr_148594_148752[(1)] = (5));

} else {
var statearr_148595_148753 = state_148591__$1;
(statearr_148595_148753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148592 === (5))){
var state_148591__$1 = state_148591;
var statearr_148596_148754 = state_148591__$1;
(statearr_148596_148754[(2)] = null);

(statearr_148596_148754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148592 === (6))){
var state_148591__$1 = state_148591;
var statearr_148597_148755 = state_148591__$1;
(statearr_148597_148755[(2)] = null);

(statearr_148597_148755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148592 === (7))){
var inst_148587 = (state_148591[(2)]);
var state_148591__$1 = state_148591;
var statearr_148598_148756 = state_148591__$1;
(statearr_148598_148756[(2)] = inst_148587);

(statearr_148598_148756[(1)] = (3));


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
});})(__148747,c__19054__auto___148750,G__148578_148748,n__17790__auto___148746,jobs,results,process,async))
;
return ((function (__148747,switch__18942__auto__,c__19054__auto___148750,G__148578_148748,n__17790__auto___148746,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____0 = (function (){
var statearr_148602 = [null,null,null,null,null,null,null];
(statearr_148602[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__);

(statearr_148602[(1)] = (1));

return statearr_148602;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____1 = (function (state_148591){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_148591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e148603){if((e148603 instanceof Object)){
var ex__18946__auto__ = e148603;
var statearr_148604_148757 = state_148591;
(statearr_148604_148757[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_148591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e148603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__148758 = state_148591;
state_148591 = G__148758;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__ = function(state_148591){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____1.call(this,state_148591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__;
})()
;})(__148747,switch__18942__auto__,c__19054__auto___148750,G__148578_148748,n__17790__auto___148746,jobs,results,process,async))
})();
var state__19056__auto__ = (function (){var statearr_148605 = f__19055__auto__.call(null);
(statearr_148605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto___148750);

return statearr_148605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(__148747,c__19054__auto___148750,G__148578_148748,n__17790__auto___148746,jobs,results,process,async))
);


break;
case "async":
var c__19054__auto___148759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__148747,c__19054__auto___148759,G__148578_148748,n__17790__auto___148746,jobs,results,process,async){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (__148747,c__19054__auto___148759,G__148578_148748,n__17790__auto___148746,jobs,results,process,async){
return (function (state_148618){
var state_val_148619 = (state_148618[(1)]);
if((state_val_148619 === (1))){
var state_148618__$1 = state_148618;
var statearr_148620_148760 = state_148618__$1;
(statearr_148620_148760[(2)] = null);

(statearr_148620_148760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148619 === (2))){
var state_148618__$1 = state_148618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_148618__$1,(4),jobs);
} else {
if((state_val_148619 === (3))){
var inst_148616 = (state_148618[(2)]);
var state_148618__$1 = state_148618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_148618__$1,inst_148616);
} else {
if((state_val_148619 === (4))){
var inst_148608 = (state_148618[(2)]);
var inst_148609 = async.call(null,inst_148608);
var state_148618__$1 = state_148618;
if(cljs.core.truth_(inst_148609)){
var statearr_148621_148761 = state_148618__$1;
(statearr_148621_148761[(1)] = (5));

} else {
var statearr_148622_148762 = state_148618__$1;
(statearr_148622_148762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148619 === (5))){
var state_148618__$1 = state_148618;
var statearr_148623_148763 = state_148618__$1;
(statearr_148623_148763[(2)] = null);

(statearr_148623_148763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148619 === (6))){
var state_148618__$1 = state_148618;
var statearr_148624_148764 = state_148618__$1;
(statearr_148624_148764[(2)] = null);

(statearr_148624_148764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148619 === (7))){
var inst_148614 = (state_148618[(2)]);
var state_148618__$1 = state_148618;
var statearr_148625_148765 = state_148618__$1;
(statearr_148625_148765[(2)] = inst_148614);

(statearr_148625_148765[(1)] = (3));


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
});})(__148747,c__19054__auto___148759,G__148578_148748,n__17790__auto___148746,jobs,results,process,async))
;
return ((function (__148747,switch__18942__auto__,c__19054__auto___148759,G__148578_148748,n__17790__auto___148746,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____0 = (function (){
var statearr_148629 = [null,null,null,null,null,null,null];
(statearr_148629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__);

(statearr_148629[(1)] = (1));

return statearr_148629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____1 = (function (state_148618){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_148618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e148630){if((e148630 instanceof Object)){
var ex__18946__auto__ = e148630;
var statearr_148631_148766 = state_148618;
(statearr_148631_148766[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_148618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e148630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__148767 = state_148618;
state_148618 = G__148767;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__ = function(state_148618){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____1.call(this,state_148618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__;
})()
;})(__148747,switch__18942__auto__,c__19054__auto___148759,G__148578_148748,n__17790__auto___148746,jobs,results,process,async))
})();
var state__19056__auto__ = (function (){var statearr_148632 = f__19055__auto__.call(null);
(statearr_148632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto___148759);

return statearr_148632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(__148747,c__19054__auto___148759,G__148578_148748,n__17790__auto___148746,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__148768 = (__148747 + (1));
__148747 = G__148768;
continue;
} else {
}
break;
}

var c__19054__auto___148769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto___148769,jobs,results,process,async){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto___148769,jobs,results,process,async){
return (function (state_148654){
var state_val_148655 = (state_148654[(1)]);
if((state_val_148655 === (1))){
var state_148654__$1 = state_148654;
var statearr_148656_148770 = state_148654__$1;
(statearr_148656_148770[(2)] = null);

(statearr_148656_148770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148655 === (2))){
var state_148654__$1 = state_148654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_148654__$1,(4),from);
} else {
if((state_val_148655 === (3))){
var inst_148652 = (state_148654[(2)]);
var state_148654__$1 = state_148654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_148654__$1,inst_148652);
} else {
if((state_val_148655 === (4))){
var inst_148635 = (state_148654[(7)]);
var inst_148635__$1 = (state_148654[(2)]);
var inst_148636 = (inst_148635__$1 == null);
var state_148654__$1 = (function (){var statearr_148657 = state_148654;
(statearr_148657[(7)] = inst_148635__$1);

return statearr_148657;
})();
if(cljs.core.truth_(inst_148636)){
var statearr_148658_148771 = state_148654__$1;
(statearr_148658_148771[(1)] = (5));

} else {
var statearr_148659_148772 = state_148654__$1;
(statearr_148659_148772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148655 === (5))){
var inst_148638 = cljs.core.async.close_BANG_.call(null,jobs);
var state_148654__$1 = state_148654;
var statearr_148660_148773 = state_148654__$1;
(statearr_148660_148773[(2)] = inst_148638);

(statearr_148660_148773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148655 === (6))){
var inst_148640 = (state_148654[(8)]);
var inst_148635 = (state_148654[(7)]);
var inst_148640__$1 = cljs.core.async.chan.call(null,(1));
var inst_148641 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_148642 = [inst_148635,inst_148640__$1];
var inst_148643 = (new cljs.core.PersistentVector(null,2,(5),inst_148641,inst_148642,null));
var state_148654__$1 = (function (){var statearr_148661 = state_148654;
(statearr_148661[(8)] = inst_148640__$1);

return statearr_148661;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_148654__$1,(8),jobs,inst_148643);
} else {
if((state_val_148655 === (7))){
var inst_148650 = (state_148654[(2)]);
var state_148654__$1 = state_148654;
var statearr_148662_148774 = state_148654__$1;
(statearr_148662_148774[(2)] = inst_148650);

(statearr_148662_148774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148655 === (8))){
var inst_148640 = (state_148654[(8)]);
var inst_148645 = (state_148654[(2)]);
var state_148654__$1 = (function (){var statearr_148663 = state_148654;
(statearr_148663[(9)] = inst_148645);

return statearr_148663;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_148654__$1,(9),results,inst_148640);
} else {
if((state_val_148655 === (9))){
var inst_148647 = (state_148654[(2)]);
var state_148654__$1 = (function (){var statearr_148664 = state_148654;
(statearr_148664[(10)] = inst_148647);

return statearr_148664;
})();
var statearr_148665_148775 = state_148654__$1;
(statearr_148665_148775[(2)] = null);

(statearr_148665_148775[(1)] = (2));


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
});})(c__19054__auto___148769,jobs,results,process,async))
;
return ((function (switch__18942__auto__,c__19054__auto___148769,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____0 = (function (){
var statearr_148669 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_148669[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__);

(statearr_148669[(1)] = (1));

return statearr_148669;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____1 = (function (state_148654){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_148654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e148670){if((e148670 instanceof Object)){
var ex__18946__auto__ = e148670;
var statearr_148671_148776 = state_148654;
(statearr_148671_148776[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_148654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e148670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__148777 = state_148654;
state_148654 = G__148777;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__ = function(state_148654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____1.call(this,state_148654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto___148769,jobs,results,process,async))
})();
var state__19056__auto__ = (function (){var statearr_148672 = f__19055__auto__.call(null);
(statearr_148672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto___148769);

return statearr_148672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto___148769,jobs,results,process,async))
);


var c__19054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto__,jobs,results,process,async){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto__,jobs,results,process,async){
return (function (state_148710){
var state_val_148711 = (state_148710[(1)]);
if((state_val_148711 === (7))){
var inst_148706 = (state_148710[(2)]);
var state_148710__$1 = state_148710;
var statearr_148712_148778 = state_148710__$1;
(statearr_148712_148778[(2)] = inst_148706);

(statearr_148712_148778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148711 === (20))){
var state_148710__$1 = state_148710;
var statearr_148713_148779 = state_148710__$1;
(statearr_148713_148779[(2)] = null);

(statearr_148713_148779[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148711 === (1))){
var state_148710__$1 = state_148710;
var statearr_148714_148780 = state_148710__$1;
(statearr_148714_148780[(2)] = null);

(statearr_148714_148780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148711 === (4))){
var inst_148675 = (state_148710[(7)]);
var inst_148675__$1 = (state_148710[(2)]);
var inst_148676 = (inst_148675__$1 == null);
var state_148710__$1 = (function (){var statearr_148715 = state_148710;
(statearr_148715[(7)] = inst_148675__$1);

return statearr_148715;
})();
if(cljs.core.truth_(inst_148676)){
var statearr_148716_148781 = state_148710__$1;
(statearr_148716_148781[(1)] = (5));

} else {
var statearr_148717_148782 = state_148710__$1;
(statearr_148717_148782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148711 === (15))){
var inst_148688 = (state_148710[(8)]);
var state_148710__$1 = state_148710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_148710__$1,(18),to,inst_148688);
} else {
if((state_val_148711 === (21))){
var inst_148701 = (state_148710[(2)]);
var state_148710__$1 = state_148710;
var statearr_148718_148783 = state_148710__$1;
(statearr_148718_148783[(2)] = inst_148701);

(statearr_148718_148783[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148711 === (13))){
var inst_148703 = (state_148710[(2)]);
var state_148710__$1 = (function (){var statearr_148719 = state_148710;
(statearr_148719[(9)] = inst_148703);

return statearr_148719;
})();
var statearr_148720_148784 = state_148710__$1;
(statearr_148720_148784[(2)] = null);

(statearr_148720_148784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148711 === (6))){
var inst_148675 = (state_148710[(7)]);
var state_148710__$1 = state_148710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_148710__$1,(11),inst_148675);
} else {
if((state_val_148711 === (17))){
var inst_148696 = (state_148710[(2)]);
var state_148710__$1 = state_148710;
if(cljs.core.truth_(inst_148696)){
var statearr_148721_148785 = state_148710__$1;
(statearr_148721_148785[(1)] = (19));

} else {
var statearr_148722_148786 = state_148710__$1;
(statearr_148722_148786[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148711 === (3))){
var inst_148708 = (state_148710[(2)]);
var state_148710__$1 = state_148710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_148710__$1,inst_148708);
} else {
if((state_val_148711 === (12))){
var inst_148685 = (state_148710[(10)]);
var state_148710__$1 = state_148710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_148710__$1,(14),inst_148685);
} else {
if((state_val_148711 === (2))){
var state_148710__$1 = state_148710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_148710__$1,(4),results);
} else {
if((state_val_148711 === (19))){
var state_148710__$1 = state_148710;
var statearr_148723_148787 = state_148710__$1;
(statearr_148723_148787[(2)] = null);

(statearr_148723_148787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148711 === (11))){
var inst_148685 = (state_148710[(2)]);
var state_148710__$1 = (function (){var statearr_148724 = state_148710;
(statearr_148724[(10)] = inst_148685);

return statearr_148724;
})();
var statearr_148725_148788 = state_148710__$1;
(statearr_148725_148788[(2)] = null);

(statearr_148725_148788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148711 === (9))){
var state_148710__$1 = state_148710;
var statearr_148726_148789 = state_148710__$1;
(statearr_148726_148789[(2)] = null);

(statearr_148726_148789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148711 === (5))){
var state_148710__$1 = state_148710;
if(cljs.core.truth_(close_QMARK_)){
var statearr_148727_148790 = state_148710__$1;
(statearr_148727_148790[(1)] = (8));

} else {
var statearr_148728_148791 = state_148710__$1;
(statearr_148728_148791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148711 === (14))){
var inst_148688 = (state_148710[(8)]);
var inst_148690 = (state_148710[(11)]);
var inst_148688__$1 = (state_148710[(2)]);
var inst_148689 = (inst_148688__$1 == null);
var inst_148690__$1 = cljs.core.not.call(null,inst_148689);
var state_148710__$1 = (function (){var statearr_148729 = state_148710;
(statearr_148729[(8)] = inst_148688__$1);

(statearr_148729[(11)] = inst_148690__$1);

return statearr_148729;
})();
if(inst_148690__$1){
var statearr_148730_148792 = state_148710__$1;
(statearr_148730_148792[(1)] = (15));

} else {
var statearr_148731_148793 = state_148710__$1;
(statearr_148731_148793[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148711 === (16))){
var inst_148690 = (state_148710[(11)]);
var state_148710__$1 = state_148710;
var statearr_148732_148794 = state_148710__$1;
(statearr_148732_148794[(2)] = inst_148690);

(statearr_148732_148794[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148711 === (10))){
var inst_148682 = (state_148710[(2)]);
var state_148710__$1 = state_148710;
var statearr_148733_148795 = state_148710__$1;
(statearr_148733_148795[(2)] = inst_148682);

(statearr_148733_148795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148711 === (18))){
var inst_148693 = (state_148710[(2)]);
var state_148710__$1 = state_148710;
var statearr_148734_148796 = state_148710__$1;
(statearr_148734_148796[(2)] = inst_148693);

(statearr_148734_148796[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148711 === (8))){
var inst_148679 = cljs.core.async.close_BANG_.call(null,to);
var state_148710__$1 = state_148710;
var statearr_148735_148797 = state_148710__$1;
(statearr_148735_148797[(2)] = inst_148679);

(statearr_148735_148797[(1)] = (10));


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
});})(c__19054__auto__,jobs,results,process,async))
;
return ((function (switch__18942__auto__,c__19054__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____0 = (function (){
var statearr_148739 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_148739[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__);

(statearr_148739[(1)] = (1));

return statearr_148739;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____1 = (function (state_148710){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_148710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e148740){if((e148740 instanceof Object)){
var ex__18946__auto__ = e148740;
var statearr_148741_148798 = state_148710;
(statearr_148741_148798[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_148710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e148740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__148799 = state_148710;
state_148710 = G__148799;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__ = function(state_148710){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____1.call(this,state_148710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18943__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto__,jobs,results,process,async))
})();
var state__19056__auto__ = (function (){var statearr_148742 = f__19055__auto__.call(null);
(statearr_148742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto__);

return statearr_148742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto__,jobs,results,process,async))
);

return c__19054__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args148800 = [];
var len__17945__auto___148803 = arguments.length;
var i__17946__auto___148804 = (0);
while(true){
if((i__17946__auto___148804 < len__17945__auto___148803)){
args148800.push((arguments[i__17946__auto___148804]));

var G__148805 = (i__17946__auto___148804 + (1));
i__17946__auto___148804 = G__148805;
continue;
} else {
}
break;
}

var G__148802 = args148800.length;
switch (G__148802) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args148800.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args148807 = [];
var len__17945__auto___148810 = arguments.length;
var i__17946__auto___148811 = (0);
while(true){
if((i__17946__auto___148811 < len__17945__auto___148810)){
args148807.push((arguments[i__17946__auto___148811]));

var G__148812 = (i__17946__auto___148811 + (1));
i__17946__auto___148811 = G__148812;
continue;
} else {
}
break;
}

var G__148809 = args148807.length;
switch (G__148809) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args148807.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args148814 = [];
var len__17945__auto___148867 = arguments.length;
var i__17946__auto___148868 = (0);
while(true){
if((i__17946__auto___148868 < len__17945__auto___148867)){
args148814.push((arguments[i__17946__auto___148868]));

var G__148869 = (i__17946__auto___148868 + (1));
i__17946__auto___148868 = G__148869;
continue;
} else {
}
break;
}

var G__148816 = args148814.length;
switch (G__148816) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args148814.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19054__auto___148871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto___148871,tc,fc){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto___148871,tc,fc){
return (function (state_148842){
var state_val_148843 = (state_148842[(1)]);
if((state_val_148843 === (7))){
var inst_148838 = (state_148842[(2)]);
var state_148842__$1 = state_148842;
var statearr_148844_148872 = state_148842__$1;
(statearr_148844_148872[(2)] = inst_148838);

(statearr_148844_148872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148843 === (1))){
var state_148842__$1 = state_148842;
var statearr_148845_148873 = state_148842__$1;
(statearr_148845_148873[(2)] = null);

(statearr_148845_148873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148843 === (4))){
var inst_148819 = (state_148842[(7)]);
var inst_148819__$1 = (state_148842[(2)]);
var inst_148820 = (inst_148819__$1 == null);
var state_148842__$1 = (function (){var statearr_148846 = state_148842;
(statearr_148846[(7)] = inst_148819__$1);

return statearr_148846;
})();
if(cljs.core.truth_(inst_148820)){
var statearr_148847_148874 = state_148842__$1;
(statearr_148847_148874[(1)] = (5));

} else {
var statearr_148848_148875 = state_148842__$1;
(statearr_148848_148875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148843 === (13))){
var state_148842__$1 = state_148842;
var statearr_148849_148876 = state_148842__$1;
(statearr_148849_148876[(2)] = null);

(statearr_148849_148876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148843 === (6))){
var inst_148819 = (state_148842[(7)]);
var inst_148825 = p.call(null,inst_148819);
var state_148842__$1 = state_148842;
if(cljs.core.truth_(inst_148825)){
var statearr_148850_148877 = state_148842__$1;
(statearr_148850_148877[(1)] = (9));

} else {
var statearr_148851_148878 = state_148842__$1;
(statearr_148851_148878[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148843 === (3))){
var inst_148840 = (state_148842[(2)]);
var state_148842__$1 = state_148842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_148842__$1,inst_148840);
} else {
if((state_val_148843 === (12))){
var state_148842__$1 = state_148842;
var statearr_148852_148879 = state_148842__$1;
(statearr_148852_148879[(2)] = null);

(statearr_148852_148879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148843 === (2))){
var state_148842__$1 = state_148842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_148842__$1,(4),ch);
} else {
if((state_val_148843 === (11))){
var inst_148819 = (state_148842[(7)]);
var inst_148829 = (state_148842[(2)]);
var state_148842__$1 = state_148842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_148842__$1,(8),inst_148829,inst_148819);
} else {
if((state_val_148843 === (9))){
var state_148842__$1 = state_148842;
var statearr_148853_148880 = state_148842__$1;
(statearr_148853_148880[(2)] = tc);

(statearr_148853_148880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148843 === (5))){
var inst_148822 = cljs.core.async.close_BANG_.call(null,tc);
var inst_148823 = cljs.core.async.close_BANG_.call(null,fc);
var state_148842__$1 = (function (){var statearr_148854 = state_148842;
(statearr_148854[(8)] = inst_148822);

return statearr_148854;
})();
var statearr_148855_148881 = state_148842__$1;
(statearr_148855_148881[(2)] = inst_148823);

(statearr_148855_148881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148843 === (14))){
var inst_148836 = (state_148842[(2)]);
var state_148842__$1 = state_148842;
var statearr_148856_148882 = state_148842__$1;
(statearr_148856_148882[(2)] = inst_148836);

(statearr_148856_148882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148843 === (10))){
var state_148842__$1 = state_148842;
var statearr_148857_148883 = state_148842__$1;
(statearr_148857_148883[(2)] = fc);

(statearr_148857_148883[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148843 === (8))){
var inst_148831 = (state_148842[(2)]);
var state_148842__$1 = state_148842;
if(cljs.core.truth_(inst_148831)){
var statearr_148858_148884 = state_148842__$1;
(statearr_148858_148884[(1)] = (12));

} else {
var statearr_148859_148885 = state_148842__$1;
(statearr_148859_148885[(1)] = (13));

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
});})(c__19054__auto___148871,tc,fc))
;
return ((function (switch__18942__auto__,c__19054__auto___148871,tc,fc){
return (function() {
var cljs$core$async$state_machine__18943__auto__ = null;
var cljs$core$async$state_machine__18943__auto____0 = (function (){
var statearr_148863 = [null,null,null,null,null,null,null,null,null];
(statearr_148863[(0)] = cljs$core$async$state_machine__18943__auto__);

(statearr_148863[(1)] = (1));

return statearr_148863;
});
var cljs$core$async$state_machine__18943__auto____1 = (function (state_148842){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_148842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e148864){if((e148864 instanceof Object)){
var ex__18946__auto__ = e148864;
var statearr_148865_148886 = state_148842;
(statearr_148865_148886[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_148842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e148864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__148887 = state_148842;
state_148842 = G__148887;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
cljs$core$async$state_machine__18943__auto__ = function(state_148842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18943__auto____1.call(this,state_148842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18943__auto____0;
cljs$core$async$state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18943__auto____1;
return cljs$core$async$state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto___148871,tc,fc))
})();
var state__19056__auto__ = (function (){var statearr_148866 = f__19055__auto__.call(null);
(statearr_148866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto___148871);

return statearr_148866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto___148871,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto__){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto__){
return (function (state_148951){
var state_val_148952 = (state_148951[(1)]);
if((state_val_148952 === (7))){
var inst_148947 = (state_148951[(2)]);
var state_148951__$1 = state_148951;
var statearr_148953_148974 = state_148951__$1;
(statearr_148953_148974[(2)] = inst_148947);

(statearr_148953_148974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148952 === (1))){
var inst_148931 = init;
var state_148951__$1 = (function (){var statearr_148954 = state_148951;
(statearr_148954[(7)] = inst_148931);

return statearr_148954;
})();
var statearr_148955_148975 = state_148951__$1;
(statearr_148955_148975[(2)] = null);

(statearr_148955_148975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148952 === (4))){
var inst_148934 = (state_148951[(8)]);
var inst_148934__$1 = (state_148951[(2)]);
var inst_148935 = (inst_148934__$1 == null);
var state_148951__$1 = (function (){var statearr_148956 = state_148951;
(statearr_148956[(8)] = inst_148934__$1);

return statearr_148956;
})();
if(cljs.core.truth_(inst_148935)){
var statearr_148957_148976 = state_148951__$1;
(statearr_148957_148976[(1)] = (5));

} else {
var statearr_148958_148977 = state_148951__$1;
(statearr_148958_148977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148952 === (6))){
var inst_148938 = (state_148951[(9)]);
var inst_148931 = (state_148951[(7)]);
var inst_148934 = (state_148951[(8)]);
var inst_148938__$1 = f.call(null,inst_148931,inst_148934);
var inst_148939 = cljs.core.reduced_QMARK_.call(null,inst_148938__$1);
var state_148951__$1 = (function (){var statearr_148959 = state_148951;
(statearr_148959[(9)] = inst_148938__$1);

return statearr_148959;
})();
if(inst_148939){
var statearr_148960_148978 = state_148951__$1;
(statearr_148960_148978[(1)] = (8));

} else {
var statearr_148961_148979 = state_148951__$1;
(statearr_148961_148979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148952 === (3))){
var inst_148949 = (state_148951[(2)]);
var state_148951__$1 = state_148951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_148951__$1,inst_148949);
} else {
if((state_val_148952 === (2))){
var state_148951__$1 = state_148951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_148951__$1,(4),ch);
} else {
if((state_val_148952 === (9))){
var inst_148938 = (state_148951[(9)]);
var inst_148931 = inst_148938;
var state_148951__$1 = (function (){var statearr_148962 = state_148951;
(statearr_148962[(7)] = inst_148931);

return statearr_148962;
})();
var statearr_148963_148980 = state_148951__$1;
(statearr_148963_148980[(2)] = null);

(statearr_148963_148980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148952 === (5))){
var inst_148931 = (state_148951[(7)]);
var state_148951__$1 = state_148951;
var statearr_148964_148981 = state_148951__$1;
(statearr_148964_148981[(2)] = inst_148931);

(statearr_148964_148981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148952 === (10))){
var inst_148945 = (state_148951[(2)]);
var state_148951__$1 = state_148951;
var statearr_148965_148982 = state_148951__$1;
(statearr_148965_148982[(2)] = inst_148945);

(statearr_148965_148982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148952 === (8))){
var inst_148938 = (state_148951[(9)]);
var inst_148941 = cljs.core.deref.call(null,inst_148938);
var state_148951__$1 = state_148951;
var statearr_148966_148983 = state_148951__$1;
(statearr_148966_148983[(2)] = inst_148941);

(statearr_148966_148983[(1)] = (10));


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
});})(c__19054__auto__))
;
return ((function (switch__18942__auto__,c__19054__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18943__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18943__auto____0 = (function (){
var statearr_148970 = [null,null,null,null,null,null,null,null,null,null];
(statearr_148970[(0)] = cljs$core$async$reduce_$_state_machine__18943__auto__);

(statearr_148970[(1)] = (1));

return statearr_148970;
});
var cljs$core$async$reduce_$_state_machine__18943__auto____1 = (function (state_148951){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_148951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e148971){if((e148971 instanceof Object)){
var ex__18946__auto__ = e148971;
var statearr_148972_148984 = state_148951;
(statearr_148972_148984[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_148951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e148971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__148985 = state_148951;
state_148951 = G__148985;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18943__auto__ = function(state_148951){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18943__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18943__auto____1.call(this,state_148951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18943__auto____0;
cljs$core$async$reduce_$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18943__auto____1;
return cljs$core$async$reduce_$_state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto__))
})();
var state__19056__auto__ = (function (){var statearr_148973 = f__19055__auto__.call(null);
(statearr_148973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto__);

return statearr_148973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto__))
);

return c__19054__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args148986 = [];
var len__17945__auto___149038 = arguments.length;
var i__17946__auto___149039 = (0);
while(true){
if((i__17946__auto___149039 < len__17945__auto___149038)){
args148986.push((arguments[i__17946__auto___149039]));

var G__149040 = (i__17946__auto___149039 + (1));
i__17946__auto___149039 = G__149040;
continue;
} else {
}
break;
}

var G__148988 = args148986.length;
switch (G__148988) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args148986.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto__){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto__){
return (function (state_149013){
var state_val_149014 = (state_149013[(1)]);
if((state_val_149014 === (7))){
var inst_148995 = (state_149013[(2)]);
var state_149013__$1 = state_149013;
var statearr_149015_149042 = state_149013__$1;
(statearr_149015_149042[(2)] = inst_148995);

(statearr_149015_149042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149014 === (1))){
var inst_148989 = cljs.core.seq.call(null,coll);
var inst_148990 = inst_148989;
var state_149013__$1 = (function (){var statearr_149016 = state_149013;
(statearr_149016[(7)] = inst_148990);

return statearr_149016;
})();
var statearr_149017_149043 = state_149013__$1;
(statearr_149017_149043[(2)] = null);

(statearr_149017_149043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149014 === (4))){
var inst_148990 = (state_149013[(7)]);
var inst_148993 = cljs.core.first.call(null,inst_148990);
var state_149013__$1 = state_149013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_149013__$1,(7),ch,inst_148993);
} else {
if((state_val_149014 === (13))){
var inst_149007 = (state_149013[(2)]);
var state_149013__$1 = state_149013;
var statearr_149018_149044 = state_149013__$1;
(statearr_149018_149044[(2)] = inst_149007);

(statearr_149018_149044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149014 === (6))){
var inst_148998 = (state_149013[(2)]);
var state_149013__$1 = state_149013;
if(cljs.core.truth_(inst_148998)){
var statearr_149019_149045 = state_149013__$1;
(statearr_149019_149045[(1)] = (8));

} else {
var statearr_149020_149046 = state_149013__$1;
(statearr_149020_149046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149014 === (3))){
var inst_149011 = (state_149013[(2)]);
var state_149013__$1 = state_149013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_149013__$1,inst_149011);
} else {
if((state_val_149014 === (12))){
var state_149013__$1 = state_149013;
var statearr_149021_149047 = state_149013__$1;
(statearr_149021_149047[(2)] = null);

(statearr_149021_149047[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149014 === (2))){
var inst_148990 = (state_149013[(7)]);
var state_149013__$1 = state_149013;
if(cljs.core.truth_(inst_148990)){
var statearr_149022_149048 = state_149013__$1;
(statearr_149022_149048[(1)] = (4));

} else {
var statearr_149023_149049 = state_149013__$1;
(statearr_149023_149049[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149014 === (11))){
var inst_149004 = cljs.core.async.close_BANG_.call(null,ch);
var state_149013__$1 = state_149013;
var statearr_149024_149050 = state_149013__$1;
(statearr_149024_149050[(2)] = inst_149004);

(statearr_149024_149050[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149014 === (9))){
var state_149013__$1 = state_149013;
if(cljs.core.truth_(close_QMARK_)){
var statearr_149025_149051 = state_149013__$1;
(statearr_149025_149051[(1)] = (11));

} else {
var statearr_149026_149052 = state_149013__$1;
(statearr_149026_149052[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149014 === (5))){
var inst_148990 = (state_149013[(7)]);
var state_149013__$1 = state_149013;
var statearr_149027_149053 = state_149013__$1;
(statearr_149027_149053[(2)] = inst_148990);

(statearr_149027_149053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149014 === (10))){
var inst_149009 = (state_149013[(2)]);
var state_149013__$1 = state_149013;
var statearr_149028_149054 = state_149013__$1;
(statearr_149028_149054[(2)] = inst_149009);

(statearr_149028_149054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149014 === (8))){
var inst_148990 = (state_149013[(7)]);
var inst_149000 = cljs.core.next.call(null,inst_148990);
var inst_148990__$1 = inst_149000;
var state_149013__$1 = (function (){var statearr_149029 = state_149013;
(statearr_149029[(7)] = inst_148990__$1);

return statearr_149029;
})();
var statearr_149030_149055 = state_149013__$1;
(statearr_149030_149055[(2)] = null);

(statearr_149030_149055[(1)] = (2));


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
});})(c__19054__auto__))
;
return ((function (switch__18942__auto__,c__19054__auto__){
return (function() {
var cljs$core$async$state_machine__18943__auto__ = null;
var cljs$core$async$state_machine__18943__auto____0 = (function (){
var statearr_149034 = [null,null,null,null,null,null,null,null];
(statearr_149034[(0)] = cljs$core$async$state_machine__18943__auto__);

(statearr_149034[(1)] = (1));

return statearr_149034;
});
var cljs$core$async$state_machine__18943__auto____1 = (function (state_149013){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_149013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e149035){if((e149035 instanceof Object)){
var ex__18946__auto__ = e149035;
var statearr_149036_149056 = state_149013;
(statearr_149036_149056[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_149013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e149035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__149057 = state_149013;
state_149013 = G__149057;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
cljs$core$async$state_machine__18943__auto__ = function(state_149013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18943__auto____1.call(this,state_149013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18943__auto____0;
cljs$core$async$state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18943__auto____1;
return cljs$core$async$state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto__))
})();
var state__19056__auto__ = (function (){var statearr_149037 = f__19055__auto__.call(null);
(statearr_149037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto__);

return statearr_149037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto__))
);

return c__19054__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17542__auto__ = (((_ == null))?null:_);
var m__17543__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17542__auto__)]);
if(!((m__17543__auto__ == null))){
return m__17543__auto__.call(null,_);
} else {
var m__17543__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17543__auto____$1 == null))){
return m__17543__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17542__auto__ = (((m == null))?null:m);
var m__17543__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17542__auto__)]);
if(!((m__17543__auto__ == null))){
return m__17543__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17543__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17543__auto____$1 == null))){
return m__17543__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17542__auto__ = (((m == null))?null:m);
var m__17543__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17542__auto__)]);
if(!((m__17543__auto__ == null))){
return m__17543__auto__.call(null,m,ch);
} else {
var m__17543__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17543__auto____$1 == null))){
return m__17543__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17542__auto__ = (((m == null))?null:m);
var m__17543__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17542__auto__)]);
if(!((m__17543__auto__ == null))){
return m__17543__auto__.call(null,m);
} else {
var m__17543__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17543__auto____$1 == null))){
return m__17543__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async149279 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async149279 = (function (mult,ch,cs,meta149280){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta149280 = meta149280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async149279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_149281,meta149280__$1){
var self__ = this;
var _149281__$1 = this;
return (new cljs.core.async.t_cljs$core$async149279(self__.mult,self__.ch,self__.cs,meta149280__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async149279.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_149281){
var self__ = this;
var _149281__$1 = this;
return self__.meta149280;
});})(cs))
;

cljs.core.async.t_cljs$core$async149279.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async149279.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async149279.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async149279.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async149279.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async149279.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async149279.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta149280","meta149280",-1124867356,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async149279.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async149279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async149279";

cljs.core.async.t_cljs$core$async149279.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17485__auto__,writer__17486__auto__,opt__17487__auto__){
return cljs.core._write.call(null,writer__17486__auto__,"cljs.core.async/t_cljs$core$async149279");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async149279 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async149279(mult__$1,ch__$1,cs__$1,meta149280){
return (new cljs.core.async.t_cljs$core$async149279(mult__$1,ch__$1,cs__$1,meta149280));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async149279(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19054__auto___149500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto___149500,cs,m,dchan,dctr,done){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto___149500,cs,m,dchan,dctr,done){
return (function (state_149412){
var state_val_149413 = (state_149412[(1)]);
if((state_val_149413 === (7))){
var inst_149408 = (state_149412[(2)]);
var state_149412__$1 = state_149412;
var statearr_149414_149501 = state_149412__$1;
(statearr_149414_149501[(2)] = inst_149408);

(statearr_149414_149501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (20))){
var inst_149313 = (state_149412[(7)]);
var inst_149323 = cljs.core.first.call(null,inst_149313);
var inst_149324 = cljs.core.nth.call(null,inst_149323,(0),null);
var inst_149325 = cljs.core.nth.call(null,inst_149323,(1),null);
var state_149412__$1 = (function (){var statearr_149415 = state_149412;
(statearr_149415[(8)] = inst_149324);

return statearr_149415;
})();
if(cljs.core.truth_(inst_149325)){
var statearr_149416_149502 = state_149412__$1;
(statearr_149416_149502[(1)] = (22));

} else {
var statearr_149417_149503 = state_149412__$1;
(statearr_149417_149503[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (27))){
var inst_149360 = (state_149412[(9)]);
var inst_149284 = (state_149412[(10)]);
var inst_149355 = (state_149412[(11)]);
var inst_149353 = (state_149412[(12)]);
var inst_149360__$1 = cljs.core._nth.call(null,inst_149353,inst_149355);
var inst_149361 = cljs.core.async.put_BANG_.call(null,inst_149360__$1,inst_149284,done);
var state_149412__$1 = (function (){var statearr_149418 = state_149412;
(statearr_149418[(9)] = inst_149360__$1);

return statearr_149418;
})();
if(cljs.core.truth_(inst_149361)){
var statearr_149419_149504 = state_149412__$1;
(statearr_149419_149504[(1)] = (30));

} else {
var statearr_149420_149505 = state_149412__$1;
(statearr_149420_149505[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (1))){
var state_149412__$1 = state_149412;
var statearr_149421_149506 = state_149412__$1;
(statearr_149421_149506[(2)] = null);

(statearr_149421_149506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (24))){
var inst_149313 = (state_149412[(7)]);
var inst_149330 = (state_149412[(2)]);
var inst_149331 = cljs.core.next.call(null,inst_149313);
var inst_149293 = inst_149331;
var inst_149294 = null;
var inst_149295 = (0);
var inst_149296 = (0);
var state_149412__$1 = (function (){var statearr_149422 = state_149412;
(statearr_149422[(13)] = inst_149295);

(statearr_149422[(14)] = inst_149330);

(statearr_149422[(15)] = inst_149293);

(statearr_149422[(16)] = inst_149296);

(statearr_149422[(17)] = inst_149294);

return statearr_149422;
})();
var statearr_149423_149507 = state_149412__$1;
(statearr_149423_149507[(2)] = null);

(statearr_149423_149507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (39))){
var state_149412__$1 = state_149412;
var statearr_149427_149508 = state_149412__$1;
(statearr_149427_149508[(2)] = null);

(statearr_149427_149508[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (4))){
var inst_149284 = (state_149412[(10)]);
var inst_149284__$1 = (state_149412[(2)]);
var inst_149285 = (inst_149284__$1 == null);
var state_149412__$1 = (function (){var statearr_149428 = state_149412;
(statearr_149428[(10)] = inst_149284__$1);

return statearr_149428;
})();
if(cljs.core.truth_(inst_149285)){
var statearr_149429_149509 = state_149412__$1;
(statearr_149429_149509[(1)] = (5));

} else {
var statearr_149430_149510 = state_149412__$1;
(statearr_149430_149510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (15))){
var inst_149295 = (state_149412[(13)]);
var inst_149293 = (state_149412[(15)]);
var inst_149296 = (state_149412[(16)]);
var inst_149294 = (state_149412[(17)]);
var inst_149309 = (state_149412[(2)]);
var inst_149310 = (inst_149296 + (1));
var tmp149424 = inst_149295;
var tmp149425 = inst_149293;
var tmp149426 = inst_149294;
var inst_149293__$1 = tmp149425;
var inst_149294__$1 = tmp149426;
var inst_149295__$1 = tmp149424;
var inst_149296__$1 = inst_149310;
var state_149412__$1 = (function (){var statearr_149431 = state_149412;
(statearr_149431[(13)] = inst_149295__$1);

(statearr_149431[(18)] = inst_149309);

(statearr_149431[(15)] = inst_149293__$1);

(statearr_149431[(16)] = inst_149296__$1);

(statearr_149431[(17)] = inst_149294__$1);

return statearr_149431;
})();
var statearr_149432_149511 = state_149412__$1;
(statearr_149432_149511[(2)] = null);

(statearr_149432_149511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (21))){
var inst_149334 = (state_149412[(2)]);
var state_149412__$1 = state_149412;
var statearr_149436_149512 = state_149412__$1;
(statearr_149436_149512[(2)] = inst_149334);

(statearr_149436_149512[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (31))){
var inst_149360 = (state_149412[(9)]);
var inst_149364 = done.call(null,null);
var inst_149365 = cljs.core.async.untap_STAR_.call(null,m,inst_149360);
var state_149412__$1 = (function (){var statearr_149437 = state_149412;
(statearr_149437[(19)] = inst_149364);

return statearr_149437;
})();
var statearr_149438_149513 = state_149412__$1;
(statearr_149438_149513[(2)] = inst_149365);

(statearr_149438_149513[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (32))){
var inst_149352 = (state_149412[(20)]);
var inst_149354 = (state_149412[(21)]);
var inst_149355 = (state_149412[(11)]);
var inst_149353 = (state_149412[(12)]);
var inst_149367 = (state_149412[(2)]);
var inst_149368 = (inst_149355 + (1));
var tmp149433 = inst_149352;
var tmp149434 = inst_149354;
var tmp149435 = inst_149353;
var inst_149352__$1 = tmp149433;
var inst_149353__$1 = tmp149435;
var inst_149354__$1 = tmp149434;
var inst_149355__$1 = inst_149368;
var state_149412__$1 = (function (){var statearr_149439 = state_149412;
(statearr_149439[(22)] = inst_149367);

(statearr_149439[(20)] = inst_149352__$1);

(statearr_149439[(21)] = inst_149354__$1);

(statearr_149439[(11)] = inst_149355__$1);

(statearr_149439[(12)] = inst_149353__$1);

return statearr_149439;
})();
var statearr_149440_149514 = state_149412__$1;
(statearr_149440_149514[(2)] = null);

(statearr_149440_149514[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (40))){
var inst_149380 = (state_149412[(23)]);
var inst_149384 = done.call(null,null);
var inst_149385 = cljs.core.async.untap_STAR_.call(null,m,inst_149380);
var state_149412__$1 = (function (){var statearr_149441 = state_149412;
(statearr_149441[(24)] = inst_149384);

return statearr_149441;
})();
var statearr_149442_149515 = state_149412__$1;
(statearr_149442_149515[(2)] = inst_149385);

(statearr_149442_149515[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (33))){
var inst_149371 = (state_149412[(25)]);
var inst_149373 = cljs.core.chunked_seq_QMARK_.call(null,inst_149371);
var state_149412__$1 = state_149412;
if(inst_149373){
var statearr_149443_149516 = state_149412__$1;
(statearr_149443_149516[(1)] = (36));

} else {
var statearr_149444_149517 = state_149412__$1;
(statearr_149444_149517[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (13))){
var inst_149303 = (state_149412[(26)]);
var inst_149306 = cljs.core.async.close_BANG_.call(null,inst_149303);
var state_149412__$1 = state_149412;
var statearr_149445_149518 = state_149412__$1;
(statearr_149445_149518[(2)] = inst_149306);

(statearr_149445_149518[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (22))){
var inst_149324 = (state_149412[(8)]);
var inst_149327 = cljs.core.async.close_BANG_.call(null,inst_149324);
var state_149412__$1 = state_149412;
var statearr_149446_149519 = state_149412__$1;
(statearr_149446_149519[(2)] = inst_149327);

(statearr_149446_149519[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (36))){
var inst_149371 = (state_149412[(25)]);
var inst_149375 = cljs.core.chunk_first.call(null,inst_149371);
var inst_149376 = cljs.core.chunk_rest.call(null,inst_149371);
var inst_149377 = cljs.core.count.call(null,inst_149375);
var inst_149352 = inst_149376;
var inst_149353 = inst_149375;
var inst_149354 = inst_149377;
var inst_149355 = (0);
var state_149412__$1 = (function (){var statearr_149447 = state_149412;
(statearr_149447[(20)] = inst_149352);

(statearr_149447[(21)] = inst_149354);

(statearr_149447[(11)] = inst_149355);

(statearr_149447[(12)] = inst_149353);

return statearr_149447;
})();
var statearr_149448_149520 = state_149412__$1;
(statearr_149448_149520[(2)] = null);

(statearr_149448_149520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (41))){
var inst_149371 = (state_149412[(25)]);
var inst_149387 = (state_149412[(2)]);
var inst_149388 = cljs.core.next.call(null,inst_149371);
var inst_149352 = inst_149388;
var inst_149353 = null;
var inst_149354 = (0);
var inst_149355 = (0);
var state_149412__$1 = (function (){var statearr_149449 = state_149412;
(statearr_149449[(27)] = inst_149387);

(statearr_149449[(20)] = inst_149352);

(statearr_149449[(21)] = inst_149354);

(statearr_149449[(11)] = inst_149355);

(statearr_149449[(12)] = inst_149353);

return statearr_149449;
})();
var statearr_149450_149521 = state_149412__$1;
(statearr_149450_149521[(2)] = null);

(statearr_149450_149521[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (43))){
var state_149412__$1 = state_149412;
var statearr_149451_149522 = state_149412__$1;
(statearr_149451_149522[(2)] = null);

(statearr_149451_149522[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (29))){
var inst_149396 = (state_149412[(2)]);
var state_149412__$1 = state_149412;
var statearr_149452_149523 = state_149412__$1;
(statearr_149452_149523[(2)] = inst_149396);

(statearr_149452_149523[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (44))){
var inst_149405 = (state_149412[(2)]);
var state_149412__$1 = (function (){var statearr_149453 = state_149412;
(statearr_149453[(28)] = inst_149405);

return statearr_149453;
})();
var statearr_149454_149524 = state_149412__$1;
(statearr_149454_149524[(2)] = null);

(statearr_149454_149524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (6))){
var inst_149344 = (state_149412[(29)]);
var inst_149343 = cljs.core.deref.call(null,cs);
var inst_149344__$1 = cljs.core.keys.call(null,inst_149343);
var inst_149345 = cljs.core.count.call(null,inst_149344__$1);
var inst_149346 = cljs.core.reset_BANG_.call(null,dctr,inst_149345);
var inst_149351 = cljs.core.seq.call(null,inst_149344__$1);
var inst_149352 = inst_149351;
var inst_149353 = null;
var inst_149354 = (0);
var inst_149355 = (0);
var state_149412__$1 = (function (){var statearr_149455 = state_149412;
(statearr_149455[(20)] = inst_149352);

(statearr_149455[(21)] = inst_149354);

(statearr_149455[(11)] = inst_149355);

(statearr_149455[(12)] = inst_149353);

(statearr_149455[(30)] = inst_149346);

(statearr_149455[(29)] = inst_149344__$1);

return statearr_149455;
})();
var statearr_149456_149525 = state_149412__$1;
(statearr_149456_149525[(2)] = null);

(statearr_149456_149525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (28))){
var inst_149352 = (state_149412[(20)]);
var inst_149371 = (state_149412[(25)]);
var inst_149371__$1 = cljs.core.seq.call(null,inst_149352);
var state_149412__$1 = (function (){var statearr_149457 = state_149412;
(statearr_149457[(25)] = inst_149371__$1);

return statearr_149457;
})();
if(inst_149371__$1){
var statearr_149458_149526 = state_149412__$1;
(statearr_149458_149526[(1)] = (33));

} else {
var statearr_149459_149527 = state_149412__$1;
(statearr_149459_149527[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (25))){
var inst_149354 = (state_149412[(21)]);
var inst_149355 = (state_149412[(11)]);
var inst_149357 = (inst_149355 < inst_149354);
var inst_149358 = inst_149357;
var state_149412__$1 = state_149412;
if(cljs.core.truth_(inst_149358)){
var statearr_149460_149528 = state_149412__$1;
(statearr_149460_149528[(1)] = (27));

} else {
var statearr_149461_149529 = state_149412__$1;
(statearr_149461_149529[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (34))){
var state_149412__$1 = state_149412;
var statearr_149462_149530 = state_149412__$1;
(statearr_149462_149530[(2)] = null);

(statearr_149462_149530[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (17))){
var state_149412__$1 = state_149412;
var statearr_149463_149531 = state_149412__$1;
(statearr_149463_149531[(2)] = null);

(statearr_149463_149531[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (3))){
var inst_149410 = (state_149412[(2)]);
var state_149412__$1 = state_149412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_149412__$1,inst_149410);
} else {
if((state_val_149413 === (12))){
var inst_149339 = (state_149412[(2)]);
var state_149412__$1 = state_149412;
var statearr_149464_149532 = state_149412__$1;
(statearr_149464_149532[(2)] = inst_149339);

(statearr_149464_149532[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (2))){
var state_149412__$1 = state_149412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_149412__$1,(4),ch);
} else {
if((state_val_149413 === (23))){
var state_149412__$1 = state_149412;
var statearr_149465_149533 = state_149412__$1;
(statearr_149465_149533[(2)] = null);

(statearr_149465_149533[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (35))){
var inst_149394 = (state_149412[(2)]);
var state_149412__$1 = state_149412;
var statearr_149466_149534 = state_149412__$1;
(statearr_149466_149534[(2)] = inst_149394);

(statearr_149466_149534[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (19))){
var inst_149313 = (state_149412[(7)]);
var inst_149317 = cljs.core.chunk_first.call(null,inst_149313);
var inst_149318 = cljs.core.chunk_rest.call(null,inst_149313);
var inst_149319 = cljs.core.count.call(null,inst_149317);
var inst_149293 = inst_149318;
var inst_149294 = inst_149317;
var inst_149295 = inst_149319;
var inst_149296 = (0);
var state_149412__$1 = (function (){var statearr_149467 = state_149412;
(statearr_149467[(13)] = inst_149295);

(statearr_149467[(15)] = inst_149293);

(statearr_149467[(16)] = inst_149296);

(statearr_149467[(17)] = inst_149294);

return statearr_149467;
})();
var statearr_149468_149535 = state_149412__$1;
(statearr_149468_149535[(2)] = null);

(statearr_149468_149535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (11))){
var inst_149293 = (state_149412[(15)]);
var inst_149313 = (state_149412[(7)]);
var inst_149313__$1 = cljs.core.seq.call(null,inst_149293);
var state_149412__$1 = (function (){var statearr_149469 = state_149412;
(statearr_149469[(7)] = inst_149313__$1);

return statearr_149469;
})();
if(inst_149313__$1){
var statearr_149470_149536 = state_149412__$1;
(statearr_149470_149536[(1)] = (16));

} else {
var statearr_149471_149537 = state_149412__$1;
(statearr_149471_149537[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (9))){
var inst_149341 = (state_149412[(2)]);
var state_149412__$1 = state_149412;
var statearr_149472_149538 = state_149412__$1;
(statearr_149472_149538[(2)] = inst_149341);

(statearr_149472_149538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (5))){
var inst_149291 = cljs.core.deref.call(null,cs);
var inst_149292 = cljs.core.seq.call(null,inst_149291);
var inst_149293 = inst_149292;
var inst_149294 = null;
var inst_149295 = (0);
var inst_149296 = (0);
var state_149412__$1 = (function (){var statearr_149473 = state_149412;
(statearr_149473[(13)] = inst_149295);

(statearr_149473[(15)] = inst_149293);

(statearr_149473[(16)] = inst_149296);

(statearr_149473[(17)] = inst_149294);

return statearr_149473;
})();
var statearr_149474_149539 = state_149412__$1;
(statearr_149474_149539[(2)] = null);

(statearr_149474_149539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (14))){
var state_149412__$1 = state_149412;
var statearr_149475_149540 = state_149412__$1;
(statearr_149475_149540[(2)] = null);

(statearr_149475_149540[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (45))){
var inst_149402 = (state_149412[(2)]);
var state_149412__$1 = state_149412;
var statearr_149476_149541 = state_149412__$1;
(statearr_149476_149541[(2)] = inst_149402);

(statearr_149476_149541[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (26))){
var inst_149344 = (state_149412[(29)]);
var inst_149398 = (state_149412[(2)]);
var inst_149399 = cljs.core.seq.call(null,inst_149344);
var state_149412__$1 = (function (){var statearr_149477 = state_149412;
(statearr_149477[(31)] = inst_149398);

return statearr_149477;
})();
if(inst_149399){
var statearr_149478_149542 = state_149412__$1;
(statearr_149478_149542[(1)] = (42));

} else {
var statearr_149479_149543 = state_149412__$1;
(statearr_149479_149543[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (16))){
var inst_149313 = (state_149412[(7)]);
var inst_149315 = cljs.core.chunked_seq_QMARK_.call(null,inst_149313);
var state_149412__$1 = state_149412;
if(inst_149315){
var statearr_149480_149544 = state_149412__$1;
(statearr_149480_149544[(1)] = (19));

} else {
var statearr_149481_149545 = state_149412__$1;
(statearr_149481_149545[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (38))){
var inst_149391 = (state_149412[(2)]);
var state_149412__$1 = state_149412;
var statearr_149482_149546 = state_149412__$1;
(statearr_149482_149546[(2)] = inst_149391);

(statearr_149482_149546[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (30))){
var state_149412__$1 = state_149412;
var statearr_149483_149547 = state_149412__$1;
(statearr_149483_149547[(2)] = null);

(statearr_149483_149547[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (10))){
var inst_149296 = (state_149412[(16)]);
var inst_149294 = (state_149412[(17)]);
var inst_149302 = cljs.core._nth.call(null,inst_149294,inst_149296);
var inst_149303 = cljs.core.nth.call(null,inst_149302,(0),null);
var inst_149304 = cljs.core.nth.call(null,inst_149302,(1),null);
var state_149412__$1 = (function (){var statearr_149484 = state_149412;
(statearr_149484[(26)] = inst_149303);

return statearr_149484;
})();
if(cljs.core.truth_(inst_149304)){
var statearr_149485_149548 = state_149412__$1;
(statearr_149485_149548[(1)] = (13));

} else {
var statearr_149486_149549 = state_149412__$1;
(statearr_149486_149549[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (18))){
var inst_149337 = (state_149412[(2)]);
var state_149412__$1 = state_149412;
var statearr_149487_149550 = state_149412__$1;
(statearr_149487_149550[(2)] = inst_149337);

(statearr_149487_149550[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (42))){
var state_149412__$1 = state_149412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_149412__$1,(45),dchan);
} else {
if((state_val_149413 === (37))){
var inst_149380 = (state_149412[(23)]);
var inst_149284 = (state_149412[(10)]);
var inst_149371 = (state_149412[(25)]);
var inst_149380__$1 = cljs.core.first.call(null,inst_149371);
var inst_149381 = cljs.core.async.put_BANG_.call(null,inst_149380__$1,inst_149284,done);
var state_149412__$1 = (function (){var statearr_149488 = state_149412;
(statearr_149488[(23)] = inst_149380__$1);

return statearr_149488;
})();
if(cljs.core.truth_(inst_149381)){
var statearr_149489_149551 = state_149412__$1;
(statearr_149489_149551[(1)] = (39));

} else {
var statearr_149490_149552 = state_149412__$1;
(statearr_149490_149552[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149413 === (8))){
var inst_149295 = (state_149412[(13)]);
var inst_149296 = (state_149412[(16)]);
var inst_149298 = (inst_149296 < inst_149295);
var inst_149299 = inst_149298;
var state_149412__$1 = state_149412;
if(cljs.core.truth_(inst_149299)){
var statearr_149491_149553 = state_149412__$1;
(statearr_149491_149553[(1)] = (10));

} else {
var statearr_149492_149554 = state_149412__$1;
(statearr_149492_149554[(1)] = (11));

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
});})(c__19054__auto___149500,cs,m,dchan,dctr,done))
;
return ((function (switch__18942__auto__,c__19054__auto___149500,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18943__auto__ = null;
var cljs$core$async$mult_$_state_machine__18943__auto____0 = (function (){
var statearr_149496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_149496[(0)] = cljs$core$async$mult_$_state_machine__18943__auto__);

(statearr_149496[(1)] = (1));

return statearr_149496;
});
var cljs$core$async$mult_$_state_machine__18943__auto____1 = (function (state_149412){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_149412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e149497){if((e149497 instanceof Object)){
var ex__18946__auto__ = e149497;
var statearr_149498_149555 = state_149412;
(statearr_149498_149555[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_149412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e149497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__149556 = state_149412;
state_149412 = G__149556;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18943__auto__ = function(state_149412){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18943__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18943__auto____1.call(this,state_149412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18943__auto____0;
cljs$core$async$mult_$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18943__auto____1;
return cljs$core$async$mult_$_state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto___149500,cs,m,dchan,dctr,done))
})();
var state__19056__auto__ = (function (){var statearr_149499 = f__19055__auto__.call(null);
(statearr_149499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto___149500);

return statearr_149499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto___149500,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args149557 = [];
var len__17945__auto___149560 = arguments.length;
var i__17946__auto___149561 = (0);
while(true){
if((i__17946__auto___149561 < len__17945__auto___149560)){
args149557.push((arguments[i__17946__auto___149561]));

var G__149562 = (i__17946__auto___149561 + (1));
i__17946__auto___149561 = G__149562;
continue;
} else {
}
break;
}

var G__149559 = args149557.length;
switch (G__149559) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args149557.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17542__auto__ = (((m == null))?null:m);
var m__17543__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17542__auto__)]);
if(!((m__17543__auto__ == null))){
return m__17543__auto__.call(null,m,ch);
} else {
var m__17543__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17543__auto____$1 == null))){
return m__17543__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17542__auto__ = (((m == null))?null:m);
var m__17543__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17542__auto__)]);
if(!((m__17543__auto__ == null))){
return m__17543__auto__.call(null,m,ch);
} else {
var m__17543__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17543__auto____$1 == null))){
return m__17543__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17542__auto__ = (((m == null))?null:m);
var m__17543__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17542__auto__)]);
if(!((m__17543__auto__ == null))){
return m__17543__auto__.call(null,m);
} else {
var m__17543__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17543__auto____$1 == null))){
return m__17543__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17542__auto__ = (((m == null))?null:m);
var m__17543__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17542__auto__)]);
if(!((m__17543__auto__ == null))){
return m__17543__auto__.call(null,m,state_map);
} else {
var m__17543__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17543__auto____$1 == null))){
return m__17543__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17542__auto__ = (((m == null))?null:m);
var m__17543__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17542__auto__)]);
if(!((m__17543__auto__ == null))){
return m__17543__auto__.call(null,m,mode);
} else {
var m__17543__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17543__auto____$1 == null))){
return m__17543__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17952__auto__ = [];
var len__17945__auto___149574 = arguments.length;
var i__17946__auto___149575 = (0);
while(true){
if((i__17946__auto___149575 < len__17945__auto___149574)){
args__17952__auto__.push((arguments[i__17946__auto___149575]));

var G__149576 = (i__17946__auto___149575 + (1));
i__17946__auto___149575 = G__149576;
continue;
} else {
}
break;
}

var argseq__17953__auto__ = ((((3) < args__17952__auto__.length))?(new cljs.core.IndexedSeq(args__17952__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17953__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__149568){
var map__149569 = p__149568;
var map__149569__$1 = ((((!((map__149569 == null)))?((((map__149569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__149569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__149569):map__149569);
var opts = map__149569__$1;
var statearr_149571_149577 = state;
(statearr_149571_149577[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__149569,map__149569__$1,opts){
return (function (val){
var statearr_149572_149578 = state;
(statearr_149572_149578[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__149569,map__149569__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_149573_149579 = state;
(statearr_149573_149579[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq149564){
var G__149565 = cljs.core.first.call(null,seq149564);
var seq149564__$1 = cljs.core.next.call(null,seq149564);
var G__149566 = cljs.core.first.call(null,seq149564__$1);
var seq149564__$2 = cljs.core.next.call(null,seq149564__$1);
var G__149567 = cljs.core.first.call(null,seq149564__$2);
var seq149564__$3 = cljs.core.next.call(null,seq149564__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__149565,G__149566,G__149567,seq149564__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async149743 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async149743 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta149744){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta149744 = meta149744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async149743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_149745,meta149744__$1){
var self__ = this;
var _149745__$1 = this;
return (new cljs.core.async.t_cljs$core$async149743(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta149744__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async149743.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_149745){
var self__ = this;
var _149745__$1 = this;
return self__.meta149744;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async149743.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async149743.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async149743.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async149743.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async149743.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async149743.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async149743.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async149743.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async149743.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta149744","meta149744",506922289,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async149743.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async149743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async149743";

cljs.core.async.t_cljs$core$async149743.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17485__auto__,writer__17486__auto__,opt__17487__auto__){
return cljs.core._write.call(null,writer__17486__auto__,"cljs.core.async/t_cljs$core$async149743");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async149743 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async149743(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta149744){
return (new cljs.core.async.t_cljs$core$async149743(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta149744));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async149743(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19054__auto___149906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto___149906,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto___149906,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_149843){
var state_val_149844 = (state_149843[(1)]);
if((state_val_149844 === (7))){
var inst_149761 = (state_149843[(2)]);
var state_149843__$1 = state_149843;
var statearr_149845_149907 = state_149843__$1;
(statearr_149845_149907[(2)] = inst_149761);

(statearr_149845_149907[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (20))){
var inst_149773 = (state_149843[(7)]);
var state_149843__$1 = state_149843;
var statearr_149846_149908 = state_149843__$1;
(statearr_149846_149908[(2)] = inst_149773);

(statearr_149846_149908[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (27))){
var state_149843__$1 = state_149843;
var statearr_149847_149909 = state_149843__$1;
(statearr_149847_149909[(2)] = null);

(statearr_149847_149909[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (1))){
var inst_149749 = (state_149843[(8)]);
var inst_149749__$1 = calc_state.call(null);
var inst_149751 = (inst_149749__$1 == null);
var inst_149752 = cljs.core.not.call(null,inst_149751);
var state_149843__$1 = (function (){var statearr_149848 = state_149843;
(statearr_149848[(8)] = inst_149749__$1);

return statearr_149848;
})();
if(inst_149752){
var statearr_149849_149910 = state_149843__$1;
(statearr_149849_149910[(1)] = (2));

} else {
var statearr_149850_149911 = state_149843__$1;
(statearr_149850_149911[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (24))){
var inst_149796 = (state_149843[(9)]);
var inst_149817 = (state_149843[(10)]);
var inst_149803 = (state_149843[(11)]);
var inst_149817__$1 = inst_149796.call(null,inst_149803);
var state_149843__$1 = (function (){var statearr_149851 = state_149843;
(statearr_149851[(10)] = inst_149817__$1);

return statearr_149851;
})();
if(cljs.core.truth_(inst_149817__$1)){
var statearr_149852_149912 = state_149843__$1;
(statearr_149852_149912[(1)] = (29));

} else {
var statearr_149853_149913 = state_149843__$1;
(statearr_149853_149913[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (4))){
var inst_149764 = (state_149843[(2)]);
var state_149843__$1 = state_149843;
if(cljs.core.truth_(inst_149764)){
var statearr_149854_149914 = state_149843__$1;
(statearr_149854_149914[(1)] = (8));

} else {
var statearr_149855_149915 = state_149843__$1;
(statearr_149855_149915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (15))){
var inst_149790 = (state_149843[(2)]);
var state_149843__$1 = state_149843;
if(cljs.core.truth_(inst_149790)){
var statearr_149856_149916 = state_149843__$1;
(statearr_149856_149916[(1)] = (19));

} else {
var statearr_149857_149917 = state_149843__$1;
(statearr_149857_149917[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (21))){
var inst_149795 = (state_149843[(12)]);
var inst_149795__$1 = (state_149843[(2)]);
var inst_149796 = cljs.core.get.call(null,inst_149795__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_149797 = cljs.core.get.call(null,inst_149795__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_149798 = cljs.core.get.call(null,inst_149795__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_149843__$1 = (function (){var statearr_149858 = state_149843;
(statearr_149858[(13)] = inst_149797);

(statearr_149858[(12)] = inst_149795__$1);

(statearr_149858[(9)] = inst_149796);

return statearr_149858;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_149843__$1,(22),inst_149798);
} else {
if((state_val_149844 === (31))){
var inst_149825 = (state_149843[(2)]);
var state_149843__$1 = state_149843;
if(cljs.core.truth_(inst_149825)){
var statearr_149859_149918 = state_149843__$1;
(statearr_149859_149918[(1)] = (32));

} else {
var statearr_149860_149919 = state_149843__$1;
(statearr_149860_149919[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (32))){
var inst_149802 = (state_149843[(14)]);
var state_149843__$1 = state_149843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_149843__$1,(35),out,inst_149802);
} else {
if((state_val_149844 === (33))){
var inst_149795 = (state_149843[(12)]);
var inst_149773 = inst_149795;
var state_149843__$1 = (function (){var statearr_149861 = state_149843;
(statearr_149861[(7)] = inst_149773);

return statearr_149861;
})();
var statearr_149862_149920 = state_149843__$1;
(statearr_149862_149920[(2)] = null);

(statearr_149862_149920[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (13))){
var inst_149773 = (state_149843[(7)]);
var inst_149780 = inst_149773.cljs$lang$protocol_mask$partition0$;
var inst_149781 = (inst_149780 & (64));
var inst_149782 = inst_149773.cljs$core$ISeq$;
var inst_149783 = (inst_149781) || (inst_149782);
var state_149843__$1 = state_149843;
if(cljs.core.truth_(inst_149783)){
var statearr_149863_149921 = state_149843__$1;
(statearr_149863_149921[(1)] = (16));

} else {
var statearr_149864_149922 = state_149843__$1;
(statearr_149864_149922[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (22))){
var inst_149802 = (state_149843[(14)]);
var inst_149803 = (state_149843[(11)]);
var inst_149801 = (state_149843[(2)]);
var inst_149802__$1 = cljs.core.nth.call(null,inst_149801,(0),null);
var inst_149803__$1 = cljs.core.nth.call(null,inst_149801,(1),null);
var inst_149804 = (inst_149802__$1 == null);
var inst_149805 = cljs.core._EQ_.call(null,inst_149803__$1,change);
var inst_149806 = (inst_149804) || (inst_149805);
var state_149843__$1 = (function (){var statearr_149865 = state_149843;
(statearr_149865[(14)] = inst_149802__$1);

(statearr_149865[(11)] = inst_149803__$1);

return statearr_149865;
})();
if(cljs.core.truth_(inst_149806)){
var statearr_149866_149923 = state_149843__$1;
(statearr_149866_149923[(1)] = (23));

} else {
var statearr_149867_149924 = state_149843__$1;
(statearr_149867_149924[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (36))){
var inst_149795 = (state_149843[(12)]);
var inst_149773 = inst_149795;
var state_149843__$1 = (function (){var statearr_149868 = state_149843;
(statearr_149868[(7)] = inst_149773);

return statearr_149868;
})();
var statearr_149869_149925 = state_149843__$1;
(statearr_149869_149925[(2)] = null);

(statearr_149869_149925[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (29))){
var inst_149817 = (state_149843[(10)]);
var state_149843__$1 = state_149843;
var statearr_149870_149926 = state_149843__$1;
(statearr_149870_149926[(2)] = inst_149817);

(statearr_149870_149926[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (6))){
var state_149843__$1 = state_149843;
var statearr_149871_149927 = state_149843__$1;
(statearr_149871_149927[(2)] = false);

(statearr_149871_149927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (28))){
var inst_149813 = (state_149843[(2)]);
var inst_149814 = calc_state.call(null);
var inst_149773 = inst_149814;
var state_149843__$1 = (function (){var statearr_149872 = state_149843;
(statearr_149872[(7)] = inst_149773);

(statearr_149872[(15)] = inst_149813);

return statearr_149872;
})();
var statearr_149873_149928 = state_149843__$1;
(statearr_149873_149928[(2)] = null);

(statearr_149873_149928[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (25))){
var inst_149839 = (state_149843[(2)]);
var state_149843__$1 = state_149843;
var statearr_149874_149929 = state_149843__$1;
(statearr_149874_149929[(2)] = inst_149839);

(statearr_149874_149929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (34))){
var inst_149837 = (state_149843[(2)]);
var state_149843__$1 = state_149843;
var statearr_149875_149930 = state_149843__$1;
(statearr_149875_149930[(2)] = inst_149837);

(statearr_149875_149930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (17))){
var state_149843__$1 = state_149843;
var statearr_149876_149931 = state_149843__$1;
(statearr_149876_149931[(2)] = false);

(statearr_149876_149931[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (3))){
var state_149843__$1 = state_149843;
var statearr_149877_149932 = state_149843__$1;
(statearr_149877_149932[(2)] = false);

(statearr_149877_149932[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (12))){
var inst_149841 = (state_149843[(2)]);
var state_149843__$1 = state_149843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_149843__$1,inst_149841);
} else {
if((state_val_149844 === (2))){
var inst_149749 = (state_149843[(8)]);
var inst_149754 = inst_149749.cljs$lang$protocol_mask$partition0$;
var inst_149755 = (inst_149754 & (64));
var inst_149756 = inst_149749.cljs$core$ISeq$;
var inst_149757 = (inst_149755) || (inst_149756);
var state_149843__$1 = state_149843;
if(cljs.core.truth_(inst_149757)){
var statearr_149878_149933 = state_149843__$1;
(statearr_149878_149933[(1)] = (5));

} else {
var statearr_149879_149934 = state_149843__$1;
(statearr_149879_149934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (23))){
var inst_149802 = (state_149843[(14)]);
var inst_149808 = (inst_149802 == null);
var state_149843__$1 = state_149843;
if(cljs.core.truth_(inst_149808)){
var statearr_149880_149935 = state_149843__$1;
(statearr_149880_149935[(1)] = (26));

} else {
var statearr_149881_149936 = state_149843__$1;
(statearr_149881_149936[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (35))){
var inst_149828 = (state_149843[(2)]);
var state_149843__$1 = state_149843;
if(cljs.core.truth_(inst_149828)){
var statearr_149882_149937 = state_149843__$1;
(statearr_149882_149937[(1)] = (36));

} else {
var statearr_149883_149938 = state_149843__$1;
(statearr_149883_149938[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (19))){
var inst_149773 = (state_149843[(7)]);
var inst_149792 = cljs.core.apply.call(null,cljs.core.hash_map,inst_149773);
var state_149843__$1 = state_149843;
var statearr_149884_149939 = state_149843__$1;
(statearr_149884_149939[(2)] = inst_149792);

(statearr_149884_149939[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (11))){
var inst_149773 = (state_149843[(7)]);
var inst_149777 = (inst_149773 == null);
var inst_149778 = cljs.core.not.call(null,inst_149777);
var state_149843__$1 = state_149843;
if(inst_149778){
var statearr_149885_149940 = state_149843__$1;
(statearr_149885_149940[(1)] = (13));

} else {
var statearr_149886_149941 = state_149843__$1;
(statearr_149886_149941[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (9))){
var inst_149749 = (state_149843[(8)]);
var state_149843__$1 = state_149843;
var statearr_149887_149942 = state_149843__$1;
(statearr_149887_149942[(2)] = inst_149749);

(statearr_149887_149942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (5))){
var state_149843__$1 = state_149843;
var statearr_149888_149943 = state_149843__$1;
(statearr_149888_149943[(2)] = true);

(statearr_149888_149943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (14))){
var state_149843__$1 = state_149843;
var statearr_149889_149944 = state_149843__$1;
(statearr_149889_149944[(2)] = false);

(statearr_149889_149944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (26))){
var inst_149803 = (state_149843[(11)]);
var inst_149810 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_149803);
var state_149843__$1 = state_149843;
var statearr_149890_149945 = state_149843__$1;
(statearr_149890_149945[(2)] = inst_149810);

(statearr_149890_149945[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (16))){
var state_149843__$1 = state_149843;
var statearr_149891_149946 = state_149843__$1;
(statearr_149891_149946[(2)] = true);

(statearr_149891_149946[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (38))){
var inst_149833 = (state_149843[(2)]);
var state_149843__$1 = state_149843;
var statearr_149892_149947 = state_149843__$1;
(statearr_149892_149947[(2)] = inst_149833);

(statearr_149892_149947[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (30))){
var inst_149797 = (state_149843[(13)]);
var inst_149796 = (state_149843[(9)]);
var inst_149803 = (state_149843[(11)]);
var inst_149820 = cljs.core.empty_QMARK_.call(null,inst_149796);
var inst_149821 = inst_149797.call(null,inst_149803);
var inst_149822 = cljs.core.not.call(null,inst_149821);
var inst_149823 = (inst_149820) && (inst_149822);
var state_149843__$1 = state_149843;
var statearr_149893_149948 = state_149843__$1;
(statearr_149893_149948[(2)] = inst_149823);

(statearr_149893_149948[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (10))){
var inst_149749 = (state_149843[(8)]);
var inst_149769 = (state_149843[(2)]);
var inst_149770 = cljs.core.get.call(null,inst_149769,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_149771 = cljs.core.get.call(null,inst_149769,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_149772 = cljs.core.get.call(null,inst_149769,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_149773 = inst_149749;
var state_149843__$1 = (function (){var statearr_149894 = state_149843;
(statearr_149894[(16)] = inst_149771);

(statearr_149894[(17)] = inst_149772);

(statearr_149894[(7)] = inst_149773);

(statearr_149894[(18)] = inst_149770);

return statearr_149894;
})();
var statearr_149895_149949 = state_149843__$1;
(statearr_149895_149949[(2)] = null);

(statearr_149895_149949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (18))){
var inst_149787 = (state_149843[(2)]);
var state_149843__$1 = state_149843;
var statearr_149896_149950 = state_149843__$1;
(statearr_149896_149950[(2)] = inst_149787);

(statearr_149896_149950[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (37))){
var state_149843__$1 = state_149843;
var statearr_149897_149951 = state_149843__$1;
(statearr_149897_149951[(2)] = null);

(statearr_149897_149951[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149844 === (8))){
var inst_149749 = (state_149843[(8)]);
var inst_149766 = cljs.core.apply.call(null,cljs.core.hash_map,inst_149749);
var state_149843__$1 = state_149843;
var statearr_149898_149952 = state_149843__$1;
(statearr_149898_149952[(2)] = inst_149766);

(statearr_149898_149952[(1)] = (10));


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
});})(c__19054__auto___149906,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18942__auto__,c__19054__auto___149906,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18943__auto__ = null;
var cljs$core$async$mix_$_state_machine__18943__auto____0 = (function (){
var statearr_149902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_149902[(0)] = cljs$core$async$mix_$_state_machine__18943__auto__);

(statearr_149902[(1)] = (1));

return statearr_149902;
});
var cljs$core$async$mix_$_state_machine__18943__auto____1 = (function (state_149843){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_149843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e149903){if((e149903 instanceof Object)){
var ex__18946__auto__ = e149903;
var statearr_149904_149953 = state_149843;
(statearr_149904_149953[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_149843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e149903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__149954 = state_149843;
state_149843 = G__149954;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18943__auto__ = function(state_149843){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18943__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18943__auto____1.call(this,state_149843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18943__auto____0;
cljs$core$async$mix_$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18943__auto____1;
return cljs$core$async$mix_$_state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto___149906,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19056__auto__ = (function (){var statearr_149905 = f__19055__auto__.call(null);
(statearr_149905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto___149906);

return statearr_149905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto___149906,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17542__auto__ = (((p == null))?null:p);
var m__17543__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17542__auto__)]);
if(!((m__17543__auto__ == null))){
return m__17543__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17543__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17543__auto____$1 == null))){
return m__17543__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17542__auto__ = (((p == null))?null:p);
var m__17543__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17542__auto__)]);
if(!((m__17543__auto__ == null))){
return m__17543__auto__.call(null,p,v,ch);
} else {
var m__17543__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17543__auto____$1 == null))){
return m__17543__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args149955 = [];
var len__17945__auto___149958 = arguments.length;
var i__17946__auto___149959 = (0);
while(true){
if((i__17946__auto___149959 < len__17945__auto___149958)){
args149955.push((arguments[i__17946__auto___149959]));

var G__149960 = (i__17946__auto___149959 + (1));
i__17946__auto___149959 = G__149960;
continue;
} else {
}
break;
}

var G__149957 = args149955.length;
switch (G__149957) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args149955.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17542__auto__ = (((p == null))?null:p);
var m__17543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17542__auto__)]);
if(!((m__17543__auto__ == null))){
return m__17543__auto__.call(null,p);
} else {
var m__17543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17543__auto____$1 == null))){
return m__17543__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17542__auto__ = (((p == null))?null:p);
var m__17543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17542__auto__)]);
if(!((m__17543__auto__ == null))){
return m__17543__auto__.call(null,p,v);
} else {
var m__17543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17543__auto____$1 == null))){
return m__17543__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args149963 = [];
var len__17945__auto___150088 = arguments.length;
var i__17946__auto___150089 = (0);
while(true){
if((i__17946__auto___150089 < len__17945__auto___150088)){
args149963.push((arguments[i__17946__auto___150089]));

var G__150090 = (i__17946__auto___150089 + (1));
i__17946__auto___150089 = G__150090;
continue;
} else {
}
break;
}

var G__149965 = args149963.length;
switch (G__149965) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args149963.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16887__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16887__auto__)){
return or__16887__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16887__auto__,mults){
return (function (p1__149962_SHARP_){
if(cljs.core.truth_(p1__149962_SHARP_.call(null,topic))){
return p1__149962_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__149962_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16887__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async149966 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async149966 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta149967){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta149967 = meta149967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async149966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_149968,meta149967__$1){
var self__ = this;
var _149968__$1 = this;
return (new cljs.core.async.t_cljs$core$async149966(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta149967__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async149966.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_149968){
var self__ = this;
var _149968__$1 = this;
return self__.meta149967;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async149966.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async149966.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async149966.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async149966.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async149966.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async149966.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async149966.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async149966.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta149967","meta149967",-445171935,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async149966.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async149966.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async149966";

cljs.core.async.t_cljs$core$async149966.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17485__auto__,writer__17486__auto__,opt__17487__auto__){
return cljs.core._write.call(null,writer__17486__auto__,"cljs.core.async/t_cljs$core$async149966");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async149966 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async149966(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta149967){
return (new cljs.core.async.t_cljs$core$async149966(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta149967));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async149966(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19054__auto___150092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto___150092,mults,ensure_mult,p){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto___150092,mults,ensure_mult,p){
return (function (state_150040){
var state_val_150041 = (state_150040[(1)]);
if((state_val_150041 === (7))){
var inst_150036 = (state_150040[(2)]);
var state_150040__$1 = state_150040;
var statearr_150042_150093 = state_150040__$1;
(statearr_150042_150093[(2)] = inst_150036);

(statearr_150042_150093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150041 === (20))){
var state_150040__$1 = state_150040;
var statearr_150043_150094 = state_150040__$1;
(statearr_150043_150094[(2)] = null);

(statearr_150043_150094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150041 === (1))){
var state_150040__$1 = state_150040;
var statearr_150044_150095 = state_150040__$1;
(statearr_150044_150095[(2)] = null);

(statearr_150044_150095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150041 === (24))){
var inst_150019 = (state_150040[(7)]);
var inst_150028 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_150019);
var state_150040__$1 = state_150040;
var statearr_150045_150096 = state_150040__$1;
(statearr_150045_150096[(2)] = inst_150028);

(statearr_150045_150096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150041 === (4))){
var inst_149971 = (state_150040[(8)]);
var inst_149971__$1 = (state_150040[(2)]);
var inst_149972 = (inst_149971__$1 == null);
var state_150040__$1 = (function (){var statearr_150046 = state_150040;
(statearr_150046[(8)] = inst_149971__$1);

return statearr_150046;
})();
if(cljs.core.truth_(inst_149972)){
var statearr_150047_150097 = state_150040__$1;
(statearr_150047_150097[(1)] = (5));

} else {
var statearr_150048_150098 = state_150040__$1;
(statearr_150048_150098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150041 === (15))){
var inst_150013 = (state_150040[(2)]);
var state_150040__$1 = state_150040;
var statearr_150049_150099 = state_150040__$1;
(statearr_150049_150099[(2)] = inst_150013);

(statearr_150049_150099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150041 === (21))){
var inst_150033 = (state_150040[(2)]);
var state_150040__$1 = (function (){var statearr_150050 = state_150040;
(statearr_150050[(9)] = inst_150033);

return statearr_150050;
})();
var statearr_150051_150100 = state_150040__$1;
(statearr_150051_150100[(2)] = null);

(statearr_150051_150100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150041 === (13))){
var inst_149995 = (state_150040[(10)]);
var inst_149997 = cljs.core.chunked_seq_QMARK_.call(null,inst_149995);
var state_150040__$1 = state_150040;
if(inst_149997){
var statearr_150052_150101 = state_150040__$1;
(statearr_150052_150101[(1)] = (16));

} else {
var statearr_150053_150102 = state_150040__$1;
(statearr_150053_150102[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150041 === (22))){
var inst_150025 = (state_150040[(2)]);
var state_150040__$1 = state_150040;
if(cljs.core.truth_(inst_150025)){
var statearr_150054_150103 = state_150040__$1;
(statearr_150054_150103[(1)] = (23));

} else {
var statearr_150055_150104 = state_150040__$1;
(statearr_150055_150104[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150041 === (6))){
var inst_150019 = (state_150040[(7)]);
var inst_150021 = (state_150040[(11)]);
var inst_149971 = (state_150040[(8)]);
var inst_150019__$1 = topic_fn.call(null,inst_149971);
var inst_150020 = cljs.core.deref.call(null,mults);
var inst_150021__$1 = cljs.core.get.call(null,inst_150020,inst_150019__$1);
var state_150040__$1 = (function (){var statearr_150056 = state_150040;
(statearr_150056[(7)] = inst_150019__$1);

(statearr_150056[(11)] = inst_150021__$1);

return statearr_150056;
})();
if(cljs.core.truth_(inst_150021__$1)){
var statearr_150057_150105 = state_150040__$1;
(statearr_150057_150105[(1)] = (19));

} else {
var statearr_150058_150106 = state_150040__$1;
(statearr_150058_150106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150041 === (25))){
var inst_150030 = (state_150040[(2)]);
var state_150040__$1 = state_150040;
var statearr_150059_150107 = state_150040__$1;
(statearr_150059_150107[(2)] = inst_150030);

(statearr_150059_150107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150041 === (17))){
var inst_149995 = (state_150040[(10)]);
var inst_150004 = cljs.core.first.call(null,inst_149995);
var inst_150005 = cljs.core.async.muxch_STAR_.call(null,inst_150004);
var inst_150006 = cljs.core.async.close_BANG_.call(null,inst_150005);
var inst_150007 = cljs.core.next.call(null,inst_149995);
var inst_149981 = inst_150007;
var inst_149982 = null;
var inst_149983 = (0);
var inst_149984 = (0);
var state_150040__$1 = (function (){var statearr_150060 = state_150040;
(statearr_150060[(12)] = inst_149983);

(statearr_150060[(13)] = inst_149984);

(statearr_150060[(14)] = inst_150006);

(statearr_150060[(15)] = inst_149982);

(statearr_150060[(16)] = inst_149981);

return statearr_150060;
})();
var statearr_150061_150108 = state_150040__$1;
(statearr_150061_150108[(2)] = null);

(statearr_150061_150108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150041 === (3))){
var inst_150038 = (state_150040[(2)]);
var state_150040__$1 = state_150040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150040__$1,inst_150038);
} else {
if((state_val_150041 === (12))){
var inst_150015 = (state_150040[(2)]);
var state_150040__$1 = state_150040;
var statearr_150062_150109 = state_150040__$1;
(statearr_150062_150109[(2)] = inst_150015);

(statearr_150062_150109[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150041 === (2))){
var state_150040__$1 = state_150040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150040__$1,(4),ch);
} else {
if((state_val_150041 === (23))){
var state_150040__$1 = state_150040;
var statearr_150063_150110 = state_150040__$1;
(statearr_150063_150110[(2)] = null);

(statearr_150063_150110[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150041 === (19))){
var inst_150021 = (state_150040[(11)]);
var inst_149971 = (state_150040[(8)]);
var inst_150023 = cljs.core.async.muxch_STAR_.call(null,inst_150021);
var state_150040__$1 = state_150040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_150040__$1,(22),inst_150023,inst_149971);
} else {
if((state_val_150041 === (11))){
var inst_149995 = (state_150040[(10)]);
var inst_149981 = (state_150040[(16)]);
var inst_149995__$1 = cljs.core.seq.call(null,inst_149981);
var state_150040__$1 = (function (){var statearr_150064 = state_150040;
(statearr_150064[(10)] = inst_149995__$1);

return statearr_150064;
})();
if(inst_149995__$1){
var statearr_150065_150111 = state_150040__$1;
(statearr_150065_150111[(1)] = (13));

} else {
var statearr_150066_150112 = state_150040__$1;
(statearr_150066_150112[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150041 === (9))){
var inst_150017 = (state_150040[(2)]);
var state_150040__$1 = state_150040;
var statearr_150067_150113 = state_150040__$1;
(statearr_150067_150113[(2)] = inst_150017);

(statearr_150067_150113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150041 === (5))){
var inst_149978 = cljs.core.deref.call(null,mults);
var inst_149979 = cljs.core.vals.call(null,inst_149978);
var inst_149980 = cljs.core.seq.call(null,inst_149979);
var inst_149981 = inst_149980;
var inst_149982 = null;
var inst_149983 = (0);
var inst_149984 = (0);
var state_150040__$1 = (function (){var statearr_150068 = state_150040;
(statearr_150068[(12)] = inst_149983);

(statearr_150068[(13)] = inst_149984);

(statearr_150068[(15)] = inst_149982);

(statearr_150068[(16)] = inst_149981);

return statearr_150068;
})();
var statearr_150069_150114 = state_150040__$1;
(statearr_150069_150114[(2)] = null);

(statearr_150069_150114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150041 === (14))){
var state_150040__$1 = state_150040;
var statearr_150073_150115 = state_150040__$1;
(statearr_150073_150115[(2)] = null);

(statearr_150073_150115[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150041 === (16))){
var inst_149995 = (state_150040[(10)]);
var inst_149999 = cljs.core.chunk_first.call(null,inst_149995);
var inst_150000 = cljs.core.chunk_rest.call(null,inst_149995);
var inst_150001 = cljs.core.count.call(null,inst_149999);
var inst_149981 = inst_150000;
var inst_149982 = inst_149999;
var inst_149983 = inst_150001;
var inst_149984 = (0);
var state_150040__$1 = (function (){var statearr_150074 = state_150040;
(statearr_150074[(12)] = inst_149983);

(statearr_150074[(13)] = inst_149984);

(statearr_150074[(15)] = inst_149982);

(statearr_150074[(16)] = inst_149981);

return statearr_150074;
})();
var statearr_150075_150116 = state_150040__$1;
(statearr_150075_150116[(2)] = null);

(statearr_150075_150116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150041 === (10))){
var inst_149983 = (state_150040[(12)]);
var inst_149984 = (state_150040[(13)]);
var inst_149982 = (state_150040[(15)]);
var inst_149981 = (state_150040[(16)]);
var inst_149989 = cljs.core._nth.call(null,inst_149982,inst_149984);
var inst_149990 = cljs.core.async.muxch_STAR_.call(null,inst_149989);
var inst_149991 = cljs.core.async.close_BANG_.call(null,inst_149990);
var inst_149992 = (inst_149984 + (1));
var tmp150070 = inst_149983;
var tmp150071 = inst_149982;
var tmp150072 = inst_149981;
var inst_149981__$1 = tmp150072;
var inst_149982__$1 = tmp150071;
var inst_149983__$1 = tmp150070;
var inst_149984__$1 = inst_149992;
var state_150040__$1 = (function (){var statearr_150076 = state_150040;
(statearr_150076[(12)] = inst_149983__$1);

(statearr_150076[(13)] = inst_149984__$1);

(statearr_150076[(17)] = inst_149991);

(statearr_150076[(15)] = inst_149982__$1);

(statearr_150076[(16)] = inst_149981__$1);

return statearr_150076;
})();
var statearr_150077_150117 = state_150040__$1;
(statearr_150077_150117[(2)] = null);

(statearr_150077_150117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150041 === (18))){
var inst_150010 = (state_150040[(2)]);
var state_150040__$1 = state_150040;
var statearr_150078_150118 = state_150040__$1;
(statearr_150078_150118[(2)] = inst_150010);

(statearr_150078_150118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150041 === (8))){
var inst_149983 = (state_150040[(12)]);
var inst_149984 = (state_150040[(13)]);
var inst_149986 = (inst_149984 < inst_149983);
var inst_149987 = inst_149986;
var state_150040__$1 = state_150040;
if(cljs.core.truth_(inst_149987)){
var statearr_150079_150119 = state_150040__$1;
(statearr_150079_150119[(1)] = (10));

} else {
var statearr_150080_150120 = state_150040__$1;
(statearr_150080_150120[(1)] = (11));

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
});})(c__19054__auto___150092,mults,ensure_mult,p))
;
return ((function (switch__18942__auto__,c__19054__auto___150092,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18943__auto__ = null;
var cljs$core$async$state_machine__18943__auto____0 = (function (){
var statearr_150084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_150084[(0)] = cljs$core$async$state_machine__18943__auto__);

(statearr_150084[(1)] = (1));

return statearr_150084;
});
var cljs$core$async$state_machine__18943__auto____1 = (function (state_150040){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_150040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e150085){if((e150085 instanceof Object)){
var ex__18946__auto__ = e150085;
var statearr_150086_150121 = state_150040;
(statearr_150086_150121[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150122 = state_150040;
state_150040 = G__150122;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
cljs$core$async$state_machine__18943__auto__ = function(state_150040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18943__auto____1.call(this,state_150040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18943__auto____0;
cljs$core$async$state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18943__auto____1;
return cljs$core$async$state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto___150092,mults,ensure_mult,p))
})();
var state__19056__auto__ = (function (){var statearr_150087 = f__19055__auto__.call(null);
(statearr_150087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto___150092);

return statearr_150087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto___150092,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args150123 = [];
var len__17945__auto___150126 = arguments.length;
var i__17946__auto___150127 = (0);
while(true){
if((i__17946__auto___150127 < len__17945__auto___150126)){
args150123.push((arguments[i__17946__auto___150127]));

var G__150128 = (i__17946__auto___150127 + (1));
i__17946__auto___150127 = G__150128;
continue;
} else {
}
break;
}

var G__150125 = args150123.length;
switch (G__150125) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args150123.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args150130 = [];
var len__17945__auto___150133 = arguments.length;
var i__17946__auto___150134 = (0);
while(true){
if((i__17946__auto___150134 < len__17945__auto___150133)){
args150130.push((arguments[i__17946__auto___150134]));

var G__150135 = (i__17946__auto___150134 + (1));
i__17946__auto___150134 = G__150135;
continue;
} else {
}
break;
}

var G__150132 = args150130.length;
switch (G__150132) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args150130.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args150137 = [];
var len__17945__auto___150208 = arguments.length;
var i__17946__auto___150209 = (0);
while(true){
if((i__17946__auto___150209 < len__17945__auto___150208)){
args150137.push((arguments[i__17946__auto___150209]));

var G__150210 = (i__17946__auto___150209 + (1));
i__17946__auto___150209 = G__150210;
continue;
} else {
}
break;
}

var G__150139 = args150137.length;
switch (G__150139) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args150137.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19054__auto___150212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto___150212,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto___150212,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_150178){
var state_val_150179 = (state_150178[(1)]);
if((state_val_150179 === (7))){
var state_150178__$1 = state_150178;
var statearr_150180_150213 = state_150178__$1;
(statearr_150180_150213[(2)] = null);

(statearr_150180_150213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150179 === (1))){
var state_150178__$1 = state_150178;
var statearr_150181_150214 = state_150178__$1;
(statearr_150181_150214[(2)] = null);

(statearr_150181_150214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150179 === (4))){
var inst_150142 = (state_150178[(7)]);
var inst_150144 = (inst_150142 < cnt);
var state_150178__$1 = state_150178;
if(cljs.core.truth_(inst_150144)){
var statearr_150182_150215 = state_150178__$1;
(statearr_150182_150215[(1)] = (6));

} else {
var statearr_150183_150216 = state_150178__$1;
(statearr_150183_150216[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150179 === (15))){
var inst_150174 = (state_150178[(2)]);
var state_150178__$1 = state_150178;
var statearr_150184_150217 = state_150178__$1;
(statearr_150184_150217[(2)] = inst_150174);

(statearr_150184_150217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150179 === (13))){
var inst_150167 = cljs.core.async.close_BANG_.call(null,out);
var state_150178__$1 = state_150178;
var statearr_150185_150218 = state_150178__$1;
(statearr_150185_150218[(2)] = inst_150167);

(statearr_150185_150218[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150179 === (6))){
var state_150178__$1 = state_150178;
var statearr_150186_150219 = state_150178__$1;
(statearr_150186_150219[(2)] = null);

(statearr_150186_150219[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150179 === (3))){
var inst_150176 = (state_150178[(2)]);
var state_150178__$1 = state_150178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150178__$1,inst_150176);
} else {
if((state_val_150179 === (12))){
var inst_150164 = (state_150178[(8)]);
var inst_150164__$1 = (state_150178[(2)]);
var inst_150165 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_150164__$1);
var state_150178__$1 = (function (){var statearr_150187 = state_150178;
(statearr_150187[(8)] = inst_150164__$1);

return statearr_150187;
})();
if(cljs.core.truth_(inst_150165)){
var statearr_150188_150220 = state_150178__$1;
(statearr_150188_150220[(1)] = (13));

} else {
var statearr_150189_150221 = state_150178__$1;
(statearr_150189_150221[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150179 === (2))){
var inst_150141 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_150142 = (0);
var state_150178__$1 = (function (){var statearr_150190 = state_150178;
(statearr_150190[(9)] = inst_150141);

(statearr_150190[(7)] = inst_150142);

return statearr_150190;
})();
var statearr_150191_150222 = state_150178__$1;
(statearr_150191_150222[(2)] = null);

(statearr_150191_150222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150179 === (11))){
var inst_150142 = (state_150178[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_150178,(10),Object,null,(9));
var inst_150151 = chs__$1.call(null,inst_150142);
var inst_150152 = done.call(null,inst_150142);
var inst_150153 = cljs.core.async.take_BANG_.call(null,inst_150151,inst_150152);
var state_150178__$1 = state_150178;
var statearr_150192_150223 = state_150178__$1;
(statearr_150192_150223[(2)] = inst_150153);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150178__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150179 === (9))){
var inst_150142 = (state_150178[(7)]);
var inst_150155 = (state_150178[(2)]);
var inst_150156 = (inst_150142 + (1));
var inst_150142__$1 = inst_150156;
var state_150178__$1 = (function (){var statearr_150193 = state_150178;
(statearr_150193[(7)] = inst_150142__$1);

(statearr_150193[(10)] = inst_150155);

return statearr_150193;
})();
var statearr_150194_150224 = state_150178__$1;
(statearr_150194_150224[(2)] = null);

(statearr_150194_150224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150179 === (5))){
var inst_150162 = (state_150178[(2)]);
var state_150178__$1 = (function (){var statearr_150195 = state_150178;
(statearr_150195[(11)] = inst_150162);

return statearr_150195;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150178__$1,(12),dchan);
} else {
if((state_val_150179 === (14))){
var inst_150164 = (state_150178[(8)]);
var inst_150169 = cljs.core.apply.call(null,f,inst_150164);
var state_150178__$1 = state_150178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_150178__$1,(16),out,inst_150169);
} else {
if((state_val_150179 === (16))){
var inst_150171 = (state_150178[(2)]);
var state_150178__$1 = (function (){var statearr_150196 = state_150178;
(statearr_150196[(12)] = inst_150171);

return statearr_150196;
})();
var statearr_150197_150225 = state_150178__$1;
(statearr_150197_150225[(2)] = null);

(statearr_150197_150225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150179 === (10))){
var inst_150146 = (state_150178[(2)]);
var inst_150147 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_150178__$1 = (function (){var statearr_150198 = state_150178;
(statearr_150198[(13)] = inst_150146);

return statearr_150198;
})();
var statearr_150199_150226 = state_150178__$1;
(statearr_150199_150226[(2)] = inst_150147);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150178__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150179 === (8))){
var inst_150160 = (state_150178[(2)]);
var state_150178__$1 = state_150178;
var statearr_150200_150227 = state_150178__$1;
(statearr_150200_150227[(2)] = inst_150160);

(statearr_150200_150227[(1)] = (5));


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
});})(c__19054__auto___150212,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18942__auto__,c__19054__auto___150212,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18943__auto__ = null;
var cljs$core$async$state_machine__18943__auto____0 = (function (){
var statearr_150204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_150204[(0)] = cljs$core$async$state_machine__18943__auto__);

(statearr_150204[(1)] = (1));

return statearr_150204;
});
var cljs$core$async$state_machine__18943__auto____1 = (function (state_150178){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_150178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e150205){if((e150205 instanceof Object)){
var ex__18946__auto__ = e150205;
var statearr_150206_150228 = state_150178;
(statearr_150206_150228[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150229 = state_150178;
state_150178 = G__150229;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
cljs$core$async$state_machine__18943__auto__ = function(state_150178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18943__auto____1.call(this,state_150178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18943__auto____0;
cljs$core$async$state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18943__auto____1;
return cljs$core$async$state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto___150212,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19056__auto__ = (function (){var statearr_150207 = f__19055__auto__.call(null);
(statearr_150207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto___150212);

return statearr_150207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto___150212,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args150231 = [];
var len__17945__auto___150287 = arguments.length;
var i__17946__auto___150288 = (0);
while(true){
if((i__17946__auto___150288 < len__17945__auto___150287)){
args150231.push((arguments[i__17946__auto___150288]));

var G__150289 = (i__17946__auto___150288 + (1));
i__17946__auto___150288 = G__150289;
continue;
} else {
}
break;
}

var G__150233 = args150231.length;
switch (G__150233) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args150231.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19054__auto___150291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto___150291,out){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto___150291,out){
return (function (state_150263){
var state_val_150264 = (state_150263[(1)]);
if((state_val_150264 === (7))){
var inst_150243 = (state_150263[(7)]);
var inst_150242 = (state_150263[(8)]);
var inst_150242__$1 = (state_150263[(2)]);
var inst_150243__$1 = cljs.core.nth.call(null,inst_150242__$1,(0),null);
var inst_150244 = cljs.core.nth.call(null,inst_150242__$1,(1),null);
var inst_150245 = (inst_150243__$1 == null);
var state_150263__$1 = (function (){var statearr_150265 = state_150263;
(statearr_150265[(7)] = inst_150243__$1);

(statearr_150265[(9)] = inst_150244);

(statearr_150265[(8)] = inst_150242__$1);

return statearr_150265;
})();
if(cljs.core.truth_(inst_150245)){
var statearr_150266_150292 = state_150263__$1;
(statearr_150266_150292[(1)] = (8));

} else {
var statearr_150267_150293 = state_150263__$1;
(statearr_150267_150293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150264 === (1))){
var inst_150234 = cljs.core.vec.call(null,chs);
var inst_150235 = inst_150234;
var state_150263__$1 = (function (){var statearr_150268 = state_150263;
(statearr_150268[(10)] = inst_150235);

return statearr_150268;
})();
var statearr_150269_150294 = state_150263__$1;
(statearr_150269_150294[(2)] = null);

(statearr_150269_150294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150264 === (4))){
var inst_150235 = (state_150263[(10)]);
var state_150263__$1 = state_150263;
return cljs.core.async.ioc_alts_BANG_.call(null,state_150263__$1,(7),inst_150235);
} else {
if((state_val_150264 === (6))){
var inst_150259 = (state_150263[(2)]);
var state_150263__$1 = state_150263;
var statearr_150270_150295 = state_150263__$1;
(statearr_150270_150295[(2)] = inst_150259);

(statearr_150270_150295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150264 === (3))){
var inst_150261 = (state_150263[(2)]);
var state_150263__$1 = state_150263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150263__$1,inst_150261);
} else {
if((state_val_150264 === (2))){
var inst_150235 = (state_150263[(10)]);
var inst_150237 = cljs.core.count.call(null,inst_150235);
var inst_150238 = (inst_150237 > (0));
var state_150263__$1 = state_150263;
if(cljs.core.truth_(inst_150238)){
var statearr_150272_150296 = state_150263__$1;
(statearr_150272_150296[(1)] = (4));

} else {
var statearr_150273_150297 = state_150263__$1;
(statearr_150273_150297[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150264 === (11))){
var inst_150235 = (state_150263[(10)]);
var inst_150252 = (state_150263[(2)]);
var tmp150271 = inst_150235;
var inst_150235__$1 = tmp150271;
var state_150263__$1 = (function (){var statearr_150274 = state_150263;
(statearr_150274[(10)] = inst_150235__$1);

(statearr_150274[(11)] = inst_150252);

return statearr_150274;
})();
var statearr_150275_150298 = state_150263__$1;
(statearr_150275_150298[(2)] = null);

(statearr_150275_150298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150264 === (9))){
var inst_150243 = (state_150263[(7)]);
var state_150263__$1 = state_150263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_150263__$1,(11),out,inst_150243);
} else {
if((state_val_150264 === (5))){
var inst_150257 = cljs.core.async.close_BANG_.call(null,out);
var state_150263__$1 = state_150263;
var statearr_150276_150299 = state_150263__$1;
(statearr_150276_150299[(2)] = inst_150257);

(statearr_150276_150299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150264 === (10))){
var inst_150255 = (state_150263[(2)]);
var state_150263__$1 = state_150263;
var statearr_150277_150300 = state_150263__$1;
(statearr_150277_150300[(2)] = inst_150255);

(statearr_150277_150300[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150264 === (8))){
var inst_150235 = (state_150263[(10)]);
var inst_150243 = (state_150263[(7)]);
var inst_150244 = (state_150263[(9)]);
var inst_150242 = (state_150263[(8)]);
var inst_150247 = (function (){var cs = inst_150235;
var vec__150240 = inst_150242;
var v = inst_150243;
var c = inst_150244;
return ((function (cs,vec__150240,v,c,inst_150235,inst_150243,inst_150244,inst_150242,state_val_150264,c__19054__auto___150291,out){
return (function (p1__150230_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__150230_SHARP_);
});
;})(cs,vec__150240,v,c,inst_150235,inst_150243,inst_150244,inst_150242,state_val_150264,c__19054__auto___150291,out))
})();
var inst_150248 = cljs.core.filterv.call(null,inst_150247,inst_150235);
var inst_150235__$1 = inst_150248;
var state_150263__$1 = (function (){var statearr_150278 = state_150263;
(statearr_150278[(10)] = inst_150235__$1);

return statearr_150278;
})();
var statearr_150279_150301 = state_150263__$1;
(statearr_150279_150301[(2)] = null);

(statearr_150279_150301[(1)] = (2));


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
});})(c__19054__auto___150291,out))
;
return ((function (switch__18942__auto__,c__19054__auto___150291,out){
return (function() {
var cljs$core$async$state_machine__18943__auto__ = null;
var cljs$core$async$state_machine__18943__auto____0 = (function (){
var statearr_150283 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_150283[(0)] = cljs$core$async$state_machine__18943__auto__);

(statearr_150283[(1)] = (1));

return statearr_150283;
});
var cljs$core$async$state_machine__18943__auto____1 = (function (state_150263){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_150263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e150284){if((e150284 instanceof Object)){
var ex__18946__auto__ = e150284;
var statearr_150285_150302 = state_150263;
(statearr_150285_150302[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150303 = state_150263;
state_150263 = G__150303;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
cljs$core$async$state_machine__18943__auto__ = function(state_150263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18943__auto____1.call(this,state_150263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18943__auto____0;
cljs$core$async$state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18943__auto____1;
return cljs$core$async$state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto___150291,out))
})();
var state__19056__auto__ = (function (){var statearr_150286 = f__19055__auto__.call(null);
(statearr_150286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto___150291);

return statearr_150286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto___150291,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args150304 = [];
var len__17945__auto___150353 = arguments.length;
var i__17946__auto___150354 = (0);
while(true){
if((i__17946__auto___150354 < len__17945__auto___150353)){
args150304.push((arguments[i__17946__auto___150354]));

var G__150355 = (i__17946__auto___150354 + (1));
i__17946__auto___150354 = G__150355;
continue;
} else {
}
break;
}

var G__150306 = args150304.length;
switch (G__150306) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args150304.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19054__auto___150357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto___150357,out){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto___150357,out){
return (function (state_150330){
var state_val_150331 = (state_150330[(1)]);
if((state_val_150331 === (7))){
var inst_150312 = (state_150330[(7)]);
var inst_150312__$1 = (state_150330[(2)]);
var inst_150313 = (inst_150312__$1 == null);
var inst_150314 = cljs.core.not.call(null,inst_150313);
var state_150330__$1 = (function (){var statearr_150332 = state_150330;
(statearr_150332[(7)] = inst_150312__$1);

return statearr_150332;
})();
if(inst_150314){
var statearr_150333_150358 = state_150330__$1;
(statearr_150333_150358[(1)] = (8));

} else {
var statearr_150334_150359 = state_150330__$1;
(statearr_150334_150359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150331 === (1))){
var inst_150307 = (0);
var state_150330__$1 = (function (){var statearr_150335 = state_150330;
(statearr_150335[(8)] = inst_150307);

return statearr_150335;
})();
var statearr_150336_150360 = state_150330__$1;
(statearr_150336_150360[(2)] = null);

(statearr_150336_150360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150331 === (4))){
var state_150330__$1 = state_150330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150330__$1,(7),ch);
} else {
if((state_val_150331 === (6))){
var inst_150325 = (state_150330[(2)]);
var state_150330__$1 = state_150330;
var statearr_150337_150361 = state_150330__$1;
(statearr_150337_150361[(2)] = inst_150325);

(statearr_150337_150361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150331 === (3))){
var inst_150327 = (state_150330[(2)]);
var inst_150328 = cljs.core.async.close_BANG_.call(null,out);
var state_150330__$1 = (function (){var statearr_150338 = state_150330;
(statearr_150338[(9)] = inst_150327);

return statearr_150338;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150330__$1,inst_150328);
} else {
if((state_val_150331 === (2))){
var inst_150307 = (state_150330[(8)]);
var inst_150309 = (inst_150307 < n);
var state_150330__$1 = state_150330;
if(cljs.core.truth_(inst_150309)){
var statearr_150339_150362 = state_150330__$1;
(statearr_150339_150362[(1)] = (4));

} else {
var statearr_150340_150363 = state_150330__$1;
(statearr_150340_150363[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150331 === (11))){
var inst_150307 = (state_150330[(8)]);
var inst_150317 = (state_150330[(2)]);
var inst_150318 = (inst_150307 + (1));
var inst_150307__$1 = inst_150318;
var state_150330__$1 = (function (){var statearr_150341 = state_150330;
(statearr_150341[(8)] = inst_150307__$1);

(statearr_150341[(10)] = inst_150317);

return statearr_150341;
})();
var statearr_150342_150364 = state_150330__$1;
(statearr_150342_150364[(2)] = null);

(statearr_150342_150364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150331 === (9))){
var state_150330__$1 = state_150330;
var statearr_150343_150365 = state_150330__$1;
(statearr_150343_150365[(2)] = null);

(statearr_150343_150365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150331 === (5))){
var state_150330__$1 = state_150330;
var statearr_150344_150366 = state_150330__$1;
(statearr_150344_150366[(2)] = null);

(statearr_150344_150366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150331 === (10))){
var inst_150322 = (state_150330[(2)]);
var state_150330__$1 = state_150330;
var statearr_150345_150367 = state_150330__$1;
(statearr_150345_150367[(2)] = inst_150322);

(statearr_150345_150367[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150331 === (8))){
var inst_150312 = (state_150330[(7)]);
var state_150330__$1 = state_150330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_150330__$1,(11),out,inst_150312);
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
});})(c__19054__auto___150357,out))
;
return ((function (switch__18942__auto__,c__19054__auto___150357,out){
return (function() {
var cljs$core$async$state_machine__18943__auto__ = null;
var cljs$core$async$state_machine__18943__auto____0 = (function (){
var statearr_150349 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_150349[(0)] = cljs$core$async$state_machine__18943__auto__);

(statearr_150349[(1)] = (1));

return statearr_150349;
});
var cljs$core$async$state_machine__18943__auto____1 = (function (state_150330){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_150330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e150350){if((e150350 instanceof Object)){
var ex__18946__auto__ = e150350;
var statearr_150351_150368 = state_150330;
(statearr_150351_150368[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150369 = state_150330;
state_150330 = G__150369;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
cljs$core$async$state_machine__18943__auto__ = function(state_150330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18943__auto____1.call(this,state_150330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18943__auto____0;
cljs$core$async$state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18943__auto____1;
return cljs$core$async$state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto___150357,out))
})();
var state__19056__auto__ = (function (){var statearr_150352 = f__19055__auto__.call(null);
(statearr_150352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto___150357);

return statearr_150352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto___150357,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async150377 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async150377 = (function (map_LT_,f,ch,meta150378){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta150378 = meta150378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async150377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_150379,meta150378__$1){
var self__ = this;
var _150379__$1 = this;
return (new cljs.core.async.t_cljs$core$async150377(self__.map_LT_,self__.f,self__.ch,meta150378__$1));
});

cljs.core.async.t_cljs$core$async150377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_150379){
var self__ = this;
var _150379__$1 = this;
return self__.meta150378;
});

cljs.core.async.t_cljs$core$async150377.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async150377.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async150377.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async150377.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async150377.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async150380 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async150380 = (function (map_LT_,f,ch,meta150378,_,fn1,meta150381){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta150378 = meta150378;
this._ = _;
this.fn1 = fn1;
this.meta150381 = meta150381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async150380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_150382,meta150381__$1){
var self__ = this;
var _150382__$1 = this;
return (new cljs.core.async.t_cljs$core$async150380(self__.map_LT_,self__.f,self__.ch,self__.meta150378,self__._,self__.fn1,meta150381__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async150380.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_150382){
var self__ = this;
var _150382__$1 = this;
return self__.meta150381;
});})(___$1))
;

cljs.core.async.t_cljs$core$async150380.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async150380.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async150380.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async150380.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__150370_SHARP_){
return f1.call(null,(((p1__150370_SHARP_ == null))?null:self__.f.call(null,p1__150370_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async150380.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta150378","meta150378",-977493423,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async150377","cljs.core.async/t_cljs$core$async150377",91851386,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta150381","meta150381",-1713819140,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async150380.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async150380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async150380";

cljs.core.async.t_cljs$core$async150380.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17485__auto__,writer__17486__auto__,opt__17487__auto__){
return cljs.core._write.call(null,writer__17486__auto__,"cljs.core.async/t_cljs$core$async150380");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async150380 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async150380(map_LT___$1,f__$1,ch__$1,meta150378__$1,___$2,fn1__$1,meta150381){
return (new cljs.core.async.t_cljs$core$async150380(map_LT___$1,f__$1,ch__$1,meta150378__$1,___$2,fn1__$1,meta150381));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async150380(self__.map_LT_,self__.f,self__.ch,self__.meta150378,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16875__auto__ = ret;
if(cljs.core.truth_(and__16875__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16875__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async150377.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async150377.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async150377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta150378","meta150378",-977493423,null)], null);
});

cljs.core.async.t_cljs$core$async150377.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async150377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async150377";

cljs.core.async.t_cljs$core$async150377.cljs$lang$ctorPrWriter = (function (this__17485__auto__,writer__17486__auto__,opt__17487__auto__){
return cljs.core._write.call(null,writer__17486__auto__,"cljs.core.async/t_cljs$core$async150377");
});

cljs.core.async.__GT_t_cljs$core$async150377 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async150377(map_LT___$1,f__$1,ch__$1,meta150378){
return (new cljs.core.async.t_cljs$core$async150377(map_LT___$1,f__$1,ch__$1,meta150378));
});

}

return (new cljs.core.async.t_cljs$core$async150377(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async150386 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async150386 = (function (map_GT_,f,ch,meta150387){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta150387 = meta150387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async150386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_150388,meta150387__$1){
var self__ = this;
var _150388__$1 = this;
return (new cljs.core.async.t_cljs$core$async150386(self__.map_GT_,self__.f,self__.ch,meta150387__$1));
});

cljs.core.async.t_cljs$core$async150386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_150388){
var self__ = this;
var _150388__$1 = this;
return self__.meta150387;
});

cljs.core.async.t_cljs$core$async150386.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async150386.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async150386.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async150386.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async150386.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async150386.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async150386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta150387","meta150387",1439193992,null)], null);
});

cljs.core.async.t_cljs$core$async150386.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async150386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async150386";

cljs.core.async.t_cljs$core$async150386.cljs$lang$ctorPrWriter = (function (this__17485__auto__,writer__17486__auto__,opt__17487__auto__){
return cljs.core._write.call(null,writer__17486__auto__,"cljs.core.async/t_cljs$core$async150386");
});

cljs.core.async.__GT_t_cljs$core$async150386 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async150386(map_GT___$1,f__$1,ch__$1,meta150387){
return (new cljs.core.async.t_cljs$core$async150386(map_GT___$1,f__$1,ch__$1,meta150387));
});

}

return (new cljs.core.async.t_cljs$core$async150386(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async150392 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async150392 = (function (filter_GT_,p,ch,meta150393){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta150393 = meta150393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async150392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_150394,meta150393__$1){
var self__ = this;
var _150394__$1 = this;
return (new cljs.core.async.t_cljs$core$async150392(self__.filter_GT_,self__.p,self__.ch,meta150393__$1));
});

cljs.core.async.t_cljs$core$async150392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_150394){
var self__ = this;
var _150394__$1 = this;
return self__.meta150393;
});

cljs.core.async.t_cljs$core$async150392.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async150392.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async150392.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async150392.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async150392.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async150392.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async150392.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async150392.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta150393","meta150393",1003060685,null)], null);
});

cljs.core.async.t_cljs$core$async150392.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async150392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async150392";

cljs.core.async.t_cljs$core$async150392.cljs$lang$ctorPrWriter = (function (this__17485__auto__,writer__17486__auto__,opt__17487__auto__){
return cljs.core._write.call(null,writer__17486__auto__,"cljs.core.async/t_cljs$core$async150392");
});

cljs.core.async.__GT_t_cljs$core$async150392 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async150392(filter_GT___$1,p__$1,ch__$1,meta150393){
return (new cljs.core.async.t_cljs$core$async150392(filter_GT___$1,p__$1,ch__$1,meta150393));
});

}

return (new cljs.core.async.t_cljs$core$async150392(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args150395 = [];
var len__17945__auto___150439 = arguments.length;
var i__17946__auto___150440 = (0);
while(true){
if((i__17946__auto___150440 < len__17945__auto___150439)){
args150395.push((arguments[i__17946__auto___150440]));

var G__150441 = (i__17946__auto___150440 + (1));
i__17946__auto___150440 = G__150441;
continue;
} else {
}
break;
}

var G__150397 = args150395.length;
switch (G__150397) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args150395.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19054__auto___150443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto___150443,out){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto___150443,out){
return (function (state_150418){
var state_val_150419 = (state_150418[(1)]);
if((state_val_150419 === (7))){
var inst_150414 = (state_150418[(2)]);
var state_150418__$1 = state_150418;
var statearr_150420_150444 = state_150418__$1;
(statearr_150420_150444[(2)] = inst_150414);

(statearr_150420_150444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150419 === (1))){
var state_150418__$1 = state_150418;
var statearr_150421_150445 = state_150418__$1;
(statearr_150421_150445[(2)] = null);

(statearr_150421_150445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150419 === (4))){
var inst_150400 = (state_150418[(7)]);
var inst_150400__$1 = (state_150418[(2)]);
var inst_150401 = (inst_150400__$1 == null);
var state_150418__$1 = (function (){var statearr_150422 = state_150418;
(statearr_150422[(7)] = inst_150400__$1);

return statearr_150422;
})();
if(cljs.core.truth_(inst_150401)){
var statearr_150423_150446 = state_150418__$1;
(statearr_150423_150446[(1)] = (5));

} else {
var statearr_150424_150447 = state_150418__$1;
(statearr_150424_150447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150419 === (6))){
var inst_150400 = (state_150418[(7)]);
var inst_150405 = p.call(null,inst_150400);
var state_150418__$1 = state_150418;
if(cljs.core.truth_(inst_150405)){
var statearr_150425_150448 = state_150418__$1;
(statearr_150425_150448[(1)] = (8));

} else {
var statearr_150426_150449 = state_150418__$1;
(statearr_150426_150449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150419 === (3))){
var inst_150416 = (state_150418[(2)]);
var state_150418__$1 = state_150418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150418__$1,inst_150416);
} else {
if((state_val_150419 === (2))){
var state_150418__$1 = state_150418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150418__$1,(4),ch);
} else {
if((state_val_150419 === (11))){
var inst_150408 = (state_150418[(2)]);
var state_150418__$1 = state_150418;
var statearr_150427_150450 = state_150418__$1;
(statearr_150427_150450[(2)] = inst_150408);

(statearr_150427_150450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150419 === (9))){
var state_150418__$1 = state_150418;
var statearr_150428_150451 = state_150418__$1;
(statearr_150428_150451[(2)] = null);

(statearr_150428_150451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150419 === (5))){
var inst_150403 = cljs.core.async.close_BANG_.call(null,out);
var state_150418__$1 = state_150418;
var statearr_150429_150452 = state_150418__$1;
(statearr_150429_150452[(2)] = inst_150403);

(statearr_150429_150452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150419 === (10))){
var inst_150411 = (state_150418[(2)]);
var state_150418__$1 = (function (){var statearr_150430 = state_150418;
(statearr_150430[(8)] = inst_150411);

return statearr_150430;
})();
var statearr_150431_150453 = state_150418__$1;
(statearr_150431_150453[(2)] = null);

(statearr_150431_150453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150419 === (8))){
var inst_150400 = (state_150418[(7)]);
var state_150418__$1 = state_150418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_150418__$1,(11),out,inst_150400);
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
});})(c__19054__auto___150443,out))
;
return ((function (switch__18942__auto__,c__19054__auto___150443,out){
return (function() {
var cljs$core$async$state_machine__18943__auto__ = null;
var cljs$core$async$state_machine__18943__auto____0 = (function (){
var statearr_150435 = [null,null,null,null,null,null,null,null,null];
(statearr_150435[(0)] = cljs$core$async$state_machine__18943__auto__);

(statearr_150435[(1)] = (1));

return statearr_150435;
});
var cljs$core$async$state_machine__18943__auto____1 = (function (state_150418){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_150418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e150436){if((e150436 instanceof Object)){
var ex__18946__auto__ = e150436;
var statearr_150437_150454 = state_150418;
(statearr_150437_150454[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150455 = state_150418;
state_150418 = G__150455;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
cljs$core$async$state_machine__18943__auto__ = function(state_150418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18943__auto____1.call(this,state_150418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18943__auto____0;
cljs$core$async$state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18943__auto____1;
return cljs$core$async$state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto___150443,out))
})();
var state__19056__auto__ = (function (){var statearr_150438 = f__19055__auto__.call(null);
(statearr_150438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto___150443);

return statearr_150438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto___150443,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args150456 = [];
var len__17945__auto___150459 = arguments.length;
var i__17946__auto___150460 = (0);
while(true){
if((i__17946__auto___150460 < len__17945__auto___150459)){
args150456.push((arguments[i__17946__auto___150460]));

var G__150461 = (i__17946__auto___150460 + (1));
i__17946__auto___150460 = G__150461;
continue;
} else {
}
break;
}

var G__150458 = args150456.length;
switch (G__150458) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args150456.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto__){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto__){
return (function (state_150628){
var state_val_150629 = (state_150628[(1)]);
if((state_val_150629 === (7))){
var inst_150624 = (state_150628[(2)]);
var state_150628__$1 = state_150628;
var statearr_150630_150671 = state_150628__$1;
(statearr_150630_150671[(2)] = inst_150624);

(statearr_150630_150671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150629 === (20))){
var inst_150594 = (state_150628[(7)]);
var inst_150605 = (state_150628[(2)]);
var inst_150606 = cljs.core.next.call(null,inst_150594);
var inst_150580 = inst_150606;
var inst_150581 = null;
var inst_150582 = (0);
var inst_150583 = (0);
var state_150628__$1 = (function (){var statearr_150631 = state_150628;
(statearr_150631[(8)] = inst_150580);

(statearr_150631[(9)] = inst_150582);

(statearr_150631[(10)] = inst_150581);

(statearr_150631[(11)] = inst_150583);

(statearr_150631[(12)] = inst_150605);

return statearr_150631;
})();
var statearr_150632_150672 = state_150628__$1;
(statearr_150632_150672[(2)] = null);

(statearr_150632_150672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150629 === (1))){
var state_150628__$1 = state_150628;
var statearr_150633_150673 = state_150628__$1;
(statearr_150633_150673[(2)] = null);

(statearr_150633_150673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150629 === (4))){
var inst_150569 = (state_150628[(13)]);
var inst_150569__$1 = (state_150628[(2)]);
var inst_150570 = (inst_150569__$1 == null);
var state_150628__$1 = (function (){var statearr_150634 = state_150628;
(statearr_150634[(13)] = inst_150569__$1);

return statearr_150634;
})();
if(cljs.core.truth_(inst_150570)){
var statearr_150635_150674 = state_150628__$1;
(statearr_150635_150674[(1)] = (5));

} else {
var statearr_150636_150675 = state_150628__$1;
(statearr_150636_150675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150629 === (15))){
var state_150628__$1 = state_150628;
var statearr_150640_150676 = state_150628__$1;
(statearr_150640_150676[(2)] = null);

(statearr_150640_150676[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150629 === (21))){
var state_150628__$1 = state_150628;
var statearr_150641_150677 = state_150628__$1;
(statearr_150641_150677[(2)] = null);

(statearr_150641_150677[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150629 === (13))){
var inst_150580 = (state_150628[(8)]);
var inst_150582 = (state_150628[(9)]);
var inst_150581 = (state_150628[(10)]);
var inst_150583 = (state_150628[(11)]);
var inst_150590 = (state_150628[(2)]);
var inst_150591 = (inst_150583 + (1));
var tmp150637 = inst_150580;
var tmp150638 = inst_150582;
var tmp150639 = inst_150581;
var inst_150580__$1 = tmp150637;
var inst_150581__$1 = tmp150639;
var inst_150582__$1 = tmp150638;
var inst_150583__$1 = inst_150591;
var state_150628__$1 = (function (){var statearr_150642 = state_150628;
(statearr_150642[(8)] = inst_150580__$1);

(statearr_150642[(9)] = inst_150582__$1);

(statearr_150642[(10)] = inst_150581__$1);

(statearr_150642[(11)] = inst_150583__$1);

(statearr_150642[(14)] = inst_150590);

return statearr_150642;
})();
var statearr_150643_150678 = state_150628__$1;
(statearr_150643_150678[(2)] = null);

(statearr_150643_150678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150629 === (22))){
var state_150628__$1 = state_150628;
var statearr_150644_150679 = state_150628__$1;
(statearr_150644_150679[(2)] = null);

(statearr_150644_150679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150629 === (6))){
var inst_150569 = (state_150628[(13)]);
var inst_150578 = f.call(null,inst_150569);
var inst_150579 = cljs.core.seq.call(null,inst_150578);
var inst_150580 = inst_150579;
var inst_150581 = null;
var inst_150582 = (0);
var inst_150583 = (0);
var state_150628__$1 = (function (){var statearr_150645 = state_150628;
(statearr_150645[(8)] = inst_150580);

(statearr_150645[(9)] = inst_150582);

(statearr_150645[(10)] = inst_150581);

(statearr_150645[(11)] = inst_150583);

return statearr_150645;
})();
var statearr_150646_150680 = state_150628__$1;
(statearr_150646_150680[(2)] = null);

(statearr_150646_150680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150629 === (17))){
var inst_150594 = (state_150628[(7)]);
var inst_150598 = cljs.core.chunk_first.call(null,inst_150594);
var inst_150599 = cljs.core.chunk_rest.call(null,inst_150594);
var inst_150600 = cljs.core.count.call(null,inst_150598);
var inst_150580 = inst_150599;
var inst_150581 = inst_150598;
var inst_150582 = inst_150600;
var inst_150583 = (0);
var state_150628__$1 = (function (){var statearr_150647 = state_150628;
(statearr_150647[(8)] = inst_150580);

(statearr_150647[(9)] = inst_150582);

(statearr_150647[(10)] = inst_150581);

(statearr_150647[(11)] = inst_150583);

return statearr_150647;
})();
var statearr_150648_150681 = state_150628__$1;
(statearr_150648_150681[(2)] = null);

(statearr_150648_150681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150629 === (3))){
var inst_150626 = (state_150628[(2)]);
var state_150628__$1 = state_150628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150628__$1,inst_150626);
} else {
if((state_val_150629 === (12))){
var inst_150614 = (state_150628[(2)]);
var state_150628__$1 = state_150628;
var statearr_150649_150682 = state_150628__$1;
(statearr_150649_150682[(2)] = inst_150614);

(statearr_150649_150682[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150629 === (2))){
var state_150628__$1 = state_150628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150628__$1,(4),in$);
} else {
if((state_val_150629 === (23))){
var inst_150622 = (state_150628[(2)]);
var state_150628__$1 = state_150628;
var statearr_150650_150683 = state_150628__$1;
(statearr_150650_150683[(2)] = inst_150622);

(statearr_150650_150683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150629 === (19))){
var inst_150609 = (state_150628[(2)]);
var state_150628__$1 = state_150628;
var statearr_150651_150684 = state_150628__$1;
(statearr_150651_150684[(2)] = inst_150609);

(statearr_150651_150684[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150629 === (11))){
var inst_150580 = (state_150628[(8)]);
var inst_150594 = (state_150628[(7)]);
var inst_150594__$1 = cljs.core.seq.call(null,inst_150580);
var state_150628__$1 = (function (){var statearr_150652 = state_150628;
(statearr_150652[(7)] = inst_150594__$1);

return statearr_150652;
})();
if(inst_150594__$1){
var statearr_150653_150685 = state_150628__$1;
(statearr_150653_150685[(1)] = (14));

} else {
var statearr_150654_150686 = state_150628__$1;
(statearr_150654_150686[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150629 === (9))){
var inst_150616 = (state_150628[(2)]);
var inst_150617 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_150628__$1 = (function (){var statearr_150655 = state_150628;
(statearr_150655[(15)] = inst_150616);

return statearr_150655;
})();
if(cljs.core.truth_(inst_150617)){
var statearr_150656_150687 = state_150628__$1;
(statearr_150656_150687[(1)] = (21));

} else {
var statearr_150657_150688 = state_150628__$1;
(statearr_150657_150688[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150629 === (5))){
var inst_150572 = cljs.core.async.close_BANG_.call(null,out);
var state_150628__$1 = state_150628;
var statearr_150658_150689 = state_150628__$1;
(statearr_150658_150689[(2)] = inst_150572);

(statearr_150658_150689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150629 === (14))){
var inst_150594 = (state_150628[(7)]);
var inst_150596 = cljs.core.chunked_seq_QMARK_.call(null,inst_150594);
var state_150628__$1 = state_150628;
if(inst_150596){
var statearr_150659_150690 = state_150628__$1;
(statearr_150659_150690[(1)] = (17));

} else {
var statearr_150660_150691 = state_150628__$1;
(statearr_150660_150691[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150629 === (16))){
var inst_150612 = (state_150628[(2)]);
var state_150628__$1 = state_150628;
var statearr_150661_150692 = state_150628__$1;
(statearr_150661_150692[(2)] = inst_150612);

(statearr_150661_150692[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150629 === (10))){
var inst_150581 = (state_150628[(10)]);
var inst_150583 = (state_150628[(11)]);
var inst_150588 = cljs.core._nth.call(null,inst_150581,inst_150583);
var state_150628__$1 = state_150628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_150628__$1,(13),out,inst_150588);
} else {
if((state_val_150629 === (18))){
var inst_150594 = (state_150628[(7)]);
var inst_150603 = cljs.core.first.call(null,inst_150594);
var state_150628__$1 = state_150628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_150628__$1,(20),out,inst_150603);
} else {
if((state_val_150629 === (8))){
var inst_150582 = (state_150628[(9)]);
var inst_150583 = (state_150628[(11)]);
var inst_150585 = (inst_150583 < inst_150582);
var inst_150586 = inst_150585;
var state_150628__$1 = state_150628;
if(cljs.core.truth_(inst_150586)){
var statearr_150662_150693 = state_150628__$1;
(statearr_150662_150693[(1)] = (10));

} else {
var statearr_150663_150694 = state_150628__$1;
(statearr_150663_150694[(1)] = (11));

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
});})(c__19054__auto__))
;
return ((function (switch__18942__auto__,c__19054__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18943__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18943__auto____0 = (function (){
var statearr_150667 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_150667[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18943__auto__);

(statearr_150667[(1)] = (1));

return statearr_150667;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18943__auto____1 = (function (state_150628){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_150628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e150668){if((e150668 instanceof Object)){
var ex__18946__auto__ = e150668;
var statearr_150669_150695 = state_150628;
(statearr_150669_150695[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150696 = state_150628;
state_150628 = G__150696;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18943__auto__ = function(state_150628){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18943__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18943__auto____1.call(this,state_150628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18943__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18943__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto__))
})();
var state__19056__auto__ = (function (){var statearr_150670 = f__19055__auto__.call(null);
(statearr_150670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto__);

return statearr_150670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto__))
);

return c__19054__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args150697 = [];
var len__17945__auto___150700 = arguments.length;
var i__17946__auto___150701 = (0);
while(true){
if((i__17946__auto___150701 < len__17945__auto___150700)){
args150697.push((arguments[i__17946__auto___150701]));

var G__150702 = (i__17946__auto___150701 + (1));
i__17946__auto___150701 = G__150702;
continue;
} else {
}
break;
}

var G__150699 = args150697.length;
switch (G__150699) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args150697.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args150704 = [];
var len__17945__auto___150707 = arguments.length;
var i__17946__auto___150708 = (0);
while(true){
if((i__17946__auto___150708 < len__17945__auto___150707)){
args150704.push((arguments[i__17946__auto___150708]));

var G__150709 = (i__17946__auto___150708 + (1));
i__17946__auto___150708 = G__150709;
continue;
} else {
}
break;
}

var G__150706 = args150704.length;
switch (G__150706) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args150704.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args150711 = [];
var len__17945__auto___150762 = arguments.length;
var i__17946__auto___150763 = (0);
while(true){
if((i__17946__auto___150763 < len__17945__auto___150762)){
args150711.push((arguments[i__17946__auto___150763]));

var G__150764 = (i__17946__auto___150763 + (1));
i__17946__auto___150763 = G__150764;
continue;
} else {
}
break;
}

var G__150713 = args150711.length;
switch (G__150713) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args150711.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19054__auto___150766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto___150766,out){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto___150766,out){
return (function (state_150737){
var state_val_150738 = (state_150737[(1)]);
if((state_val_150738 === (7))){
var inst_150732 = (state_150737[(2)]);
var state_150737__$1 = state_150737;
var statearr_150739_150767 = state_150737__$1;
(statearr_150739_150767[(2)] = inst_150732);

(statearr_150739_150767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150738 === (1))){
var inst_150714 = null;
var state_150737__$1 = (function (){var statearr_150740 = state_150737;
(statearr_150740[(7)] = inst_150714);

return statearr_150740;
})();
var statearr_150741_150768 = state_150737__$1;
(statearr_150741_150768[(2)] = null);

(statearr_150741_150768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150738 === (4))){
var inst_150717 = (state_150737[(8)]);
var inst_150717__$1 = (state_150737[(2)]);
var inst_150718 = (inst_150717__$1 == null);
var inst_150719 = cljs.core.not.call(null,inst_150718);
var state_150737__$1 = (function (){var statearr_150742 = state_150737;
(statearr_150742[(8)] = inst_150717__$1);

return statearr_150742;
})();
if(inst_150719){
var statearr_150743_150769 = state_150737__$1;
(statearr_150743_150769[(1)] = (5));

} else {
var statearr_150744_150770 = state_150737__$1;
(statearr_150744_150770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150738 === (6))){
var state_150737__$1 = state_150737;
var statearr_150745_150771 = state_150737__$1;
(statearr_150745_150771[(2)] = null);

(statearr_150745_150771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150738 === (3))){
var inst_150734 = (state_150737[(2)]);
var inst_150735 = cljs.core.async.close_BANG_.call(null,out);
var state_150737__$1 = (function (){var statearr_150746 = state_150737;
(statearr_150746[(9)] = inst_150734);

return statearr_150746;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150737__$1,inst_150735);
} else {
if((state_val_150738 === (2))){
var state_150737__$1 = state_150737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150737__$1,(4),ch);
} else {
if((state_val_150738 === (11))){
var inst_150717 = (state_150737[(8)]);
var inst_150726 = (state_150737[(2)]);
var inst_150714 = inst_150717;
var state_150737__$1 = (function (){var statearr_150747 = state_150737;
(statearr_150747[(7)] = inst_150714);

(statearr_150747[(10)] = inst_150726);

return statearr_150747;
})();
var statearr_150748_150772 = state_150737__$1;
(statearr_150748_150772[(2)] = null);

(statearr_150748_150772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150738 === (9))){
var inst_150717 = (state_150737[(8)]);
var state_150737__$1 = state_150737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_150737__$1,(11),out,inst_150717);
} else {
if((state_val_150738 === (5))){
var inst_150714 = (state_150737[(7)]);
var inst_150717 = (state_150737[(8)]);
var inst_150721 = cljs.core._EQ_.call(null,inst_150717,inst_150714);
var state_150737__$1 = state_150737;
if(inst_150721){
var statearr_150750_150773 = state_150737__$1;
(statearr_150750_150773[(1)] = (8));

} else {
var statearr_150751_150774 = state_150737__$1;
(statearr_150751_150774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150738 === (10))){
var inst_150729 = (state_150737[(2)]);
var state_150737__$1 = state_150737;
var statearr_150752_150775 = state_150737__$1;
(statearr_150752_150775[(2)] = inst_150729);

(statearr_150752_150775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150738 === (8))){
var inst_150714 = (state_150737[(7)]);
var tmp150749 = inst_150714;
var inst_150714__$1 = tmp150749;
var state_150737__$1 = (function (){var statearr_150753 = state_150737;
(statearr_150753[(7)] = inst_150714__$1);

return statearr_150753;
})();
var statearr_150754_150776 = state_150737__$1;
(statearr_150754_150776[(2)] = null);

(statearr_150754_150776[(1)] = (2));


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
});})(c__19054__auto___150766,out))
;
return ((function (switch__18942__auto__,c__19054__auto___150766,out){
return (function() {
var cljs$core$async$state_machine__18943__auto__ = null;
var cljs$core$async$state_machine__18943__auto____0 = (function (){
var statearr_150758 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_150758[(0)] = cljs$core$async$state_machine__18943__auto__);

(statearr_150758[(1)] = (1));

return statearr_150758;
});
var cljs$core$async$state_machine__18943__auto____1 = (function (state_150737){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_150737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e150759){if((e150759 instanceof Object)){
var ex__18946__auto__ = e150759;
var statearr_150760_150777 = state_150737;
(statearr_150760_150777[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150778 = state_150737;
state_150737 = G__150778;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
cljs$core$async$state_machine__18943__auto__ = function(state_150737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18943__auto____1.call(this,state_150737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18943__auto____0;
cljs$core$async$state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18943__auto____1;
return cljs$core$async$state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto___150766,out))
})();
var state__19056__auto__ = (function (){var statearr_150761 = f__19055__auto__.call(null);
(statearr_150761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto___150766);

return statearr_150761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto___150766,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args150779 = [];
var len__17945__auto___150849 = arguments.length;
var i__17946__auto___150850 = (0);
while(true){
if((i__17946__auto___150850 < len__17945__auto___150849)){
args150779.push((arguments[i__17946__auto___150850]));

var G__150851 = (i__17946__auto___150850 + (1));
i__17946__auto___150850 = G__150851;
continue;
} else {
}
break;
}

var G__150781 = args150779.length;
switch (G__150781) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args150779.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19054__auto___150853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto___150853,out){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto___150853,out){
return (function (state_150819){
var state_val_150820 = (state_150819[(1)]);
if((state_val_150820 === (7))){
var inst_150815 = (state_150819[(2)]);
var state_150819__$1 = state_150819;
var statearr_150821_150854 = state_150819__$1;
(statearr_150821_150854[(2)] = inst_150815);

(statearr_150821_150854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150820 === (1))){
var inst_150782 = (new Array(n));
var inst_150783 = inst_150782;
var inst_150784 = (0);
var state_150819__$1 = (function (){var statearr_150822 = state_150819;
(statearr_150822[(7)] = inst_150783);

(statearr_150822[(8)] = inst_150784);

return statearr_150822;
})();
var statearr_150823_150855 = state_150819__$1;
(statearr_150823_150855[(2)] = null);

(statearr_150823_150855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150820 === (4))){
var inst_150787 = (state_150819[(9)]);
var inst_150787__$1 = (state_150819[(2)]);
var inst_150788 = (inst_150787__$1 == null);
var inst_150789 = cljs.core.not.call(null,inst_150788);
var state_150819__$1 = (function (){var statearr_150824 = state_150819;
(statearr_150824[(9)] = inst_150787__$1);

return statearr_150824;
})();
if(inst_150789){
var statearr_150825_150856 = state_150819__$1;
(statearr_150825_150856[(1)] = (5));

} else {
var statearr_150826_150857 = state_150819__$1;
(statearr_150826_150857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150820 === (15))){
var inst_150809 = (state_150819[(2)]);
var state_150819__$1 = state_150819;
var statearr_150827_150858 = state_150819__$1;
(statearr_150827_150858[(2)] = inst_150809);

(statearr_150827_150858[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150820 === (13))){
var state_150819__$1 = state_150819;
var statearr_150828_150859 = state_150819__$1;
(statearr_150828_150859[(2)] = null);

(statearr_150828_150859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150820 === (6))){
var inst_150784 = (state_150819[(8)]);
var inst_150805 = (inst_150784 > (0));
var state_150819__$1 = state_150819;
if(cljs.core.truth_(inst_150805)){
var statearr_150829_150860 = state_150819__$1;
(statearr_150829_150860[(1)] = (12));

} else {
var statearr_150830_150861 = state_150819__$1;
(statearr_150830_150861[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150820 === (3))){
var inst_150817 = (state_150819[(2)]);
var state_150819__$1 = state_150819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150819__$1,inst_150817);
} else {
if((state_val_150820 === (12))){
var inst_150783 = (state_150819[(7)]);
var inst_150807 = cljs.core.vec.call(null,inst_150783);
var state_150819__$1 = state_150819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_150819__$1,(15),out,inst_150807);
} else {
if((state_val_150820 === (2))){
var state_150819__$1 = state_150819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150819__$1,(4),ch);
} else {
if((state_val_150820 === (11))){
var inst_150799 = (state_150819[(2)]);
var inst_150800 = (new Array(n));
var inst_150783 = inst_150800;
var inst_150784 = (0);
var state_150819__$1 = (function (){var statearr_150831 = state_150819;
(statearr_150831[(7)] = inst_150783);

(statearr_150831[(8)] = inst_150784);

(statearr_150831[(10)] = inst_150799);

return statearr_150831;
})();
var statearr_150832_150862 = state_150819__$1;
(statearr_150832_150862[(2)] = null);

(statearr_150832_150862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150820 === (9))){
var inst_150783 = (state_150819[(7)]);
var inst_150797 = cljs.core.vec.call(null,inst_150783);
var state_150819__$1 = state_150819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_150819__$1,(11),out,inst_150797);
} else {
if((state_val_150820 === (5))){
var inst_150792 = (state_150819[(11)]);
var inst_150783 = (state_150819[(7)]);
var inst_150784 = (state_150819[(8)]);
var inst_150787 = (state_150819[(9)]);
var inst_150791 = (inst_150783[inst_150784] = inst_150787);
var inst_150792__$1 = (inst_150784 + (1));
var inst_150793 = (inst_150792__$1 < n);
var state_150819__$1 = (function (){var statearr_150833 = state_150819;
(statearr_150833[(11)] = inst_150792__$1);

(statearr_150833[(12)] = inst_150791);

return statearr_150833;
})();
if(cljs.core.truth_(inst_150793)){
var statearr_150834_150863 = state_150819__$1;
(statearr_150834_150863[(1)] = (8));

} else {
var statearr_150835_150864 = state_150819__$1;
(statearr_150835_150864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150820 === (14))){
var inst_150812 = (state_150819[(2)]);
var inst_150813 = cljs.core.async.close_BANG_.call(null,out);
var state_150819__$1 = (function (){var statearr_150837 = state_150819;
(statearr_150837[(13)] = inst_150812);

return statearr_150837;
})();
var statearr_150838_150865 = state_150819__$1;
(statearr_150838_150865[(2)] = inst_150813);

(statearr_150838_150865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150820 === (10))){
var inst_150803 = (state_150819[(2)]);
var state_150819__$1 = state_150819;
var statearr_150839_150866 = state_150819__$1;
(statearr_150839_150866[(2)] = inst_150803);

(statearr_150839_150866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150820 === (8))){
var inst_150792 = (state_150819[(11)]);
var inst_150783 = (state_150819[(7)]);
var tmp150836 = inst_150783;
var inst_150783__$1 = tmp150836;
var inst_150784 = inst_150792;
var state_150819__$1 = (function (){var statearr_150840 = state_150819;
(statearr_150840[(7)] = inst_150783__$1);

(statearr_150840[(8)] = inst_150784);

return statearr_150840;
})();
var statearr_150841_150867 = state_150819__$1;
(statearr_150841_150867[(2)] = null);

(statearr_150841_150867[(1)] = (2));


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
});})(c__19054__auto___150853,out))
;
return ((function (switch__18942__auto__,c__19054__auto___150853,out){
return (function() {
var cljs$core$async$state_machine__18943__auto__ = null;
var cljs$core$async$state_machine__18943__auto____0 = (function (){
var statearr_150845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_150845[(0)] = cljs$core$async$state_machine__18943__auto__);

(statearr_150845[(1)] = (1));

return statearr_150845;
});
var cljs$core$async$state_machine__18943__auto____1 = (function (state_150819){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_150819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e150846){if((e150846 instanceof Object)){
var ex__18946__auto__ = e150846;
var statearr_150847_150868 = state_150819;
(statearr_150847_150868[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150869 = state_150819;
state_150819 = G__150869;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
cljs$core$async$state_machine__18943__auto__ = function(state_150819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18943__auto____1.call(this,state_150819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18943__auto____0;
cljs$core$async$state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18943__auto____1;
return cljs$core$async$state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto___150853,out))
})();
var state__19056__auto__ = (function (){var statearr_150848 = f__19055__auto__.call(null);
(statearr_150848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto___150853);

return statearr_150848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto___150853,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args150870 = [];
var len__17945__auto___150944 = arguments.length;
var i__17946__auto___150945 = (0);
while(true){
if((i__17946__auto___150945 < len__17945__auto___150944)){
args150870.push((arguments[i__17946__auto___150945]));

var G__150946 = (i__17946__auto___150945 + (1));
i__17946__auto___150945 = G__150946;
continue;
} else {
}
break;
}

var G__150872 = args150870.length;
switch (G__150872) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args150870.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19054__auto___150948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19054__auto___150948,out){
return (function (){
var f__19055__auto__ = (function (){var switch__18942__auto__ = ((function (c__19054__auto___150948,out){
return (function (state_150914){
var state_val_150915 = (state_150914[(1)]);
if((state_val_150915 === (7))){
var inst_150910 = (state_150914[(2)]);
var state_150914__$1 = state_150914;
var statearr_150916_150949 = state_150914__$1;
(statearr_150916_150949[(2)] = inst_150910);

(statearr_150916_150949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150915 === (1))){
var inst_150873 = [];
var inst_150874 = inst_150873;
var inst_150875 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_150914__$1 = (function (){var statearr_150917 = state_150914;
(statearr_150917[(7)] = inst_150875);

(statearr_150917[(8)] = inst_150874);

return statearr_150917;
})();
var statearr_150918_150950 = state_150914__$1;
(statearr_150918_150950[(2)] = null);

(statearr_150918_150950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150915 === (4))){
var inst_150878 = (state_150914[(9)]);
var inst_150878__$1 = (state_150914[(2)]);
var inst_150879 = (inst_150878__$1 == null);
var inst_150880 = cljs.core.not.call(null,inst_150879);
var state_150914__$1 = (function (){var statearr_150919 = state_150914;
(statearr_150919[(9)] = inst_150878__$1);

return statearr_150919;
})();
if(inst_150880){
var statearr_150920_150951 = state_150914__$1;
(statearr_150920_150951[(1)] = (5));

} else {
var statearr_150921_150952 = state_150914__$1;
(statearr_150921_150952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150915 === (15))){
var inst_150904 = (state_150914[(2)]);
var state_150914__$1 = state_150914;
var statearr_150922_150953 = state_150914__$1;
(statearr_150922_150953[(2)] = inst_150904);

(statearr_150922_150953[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150915 === (13))){
var state_150914__$1 = state_150914;
var statearr_150923_150954 = state_150914__$1;
(statearr_150923_150954[(2)] = null);

(statearr_150923_150954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150915 === (6))){
var inst_150874 = (state_150914[(8)]);
var inst_150899 = inst_150874.length;
var inst_150900 = (inst_150899 > (0));
var state_150914__$1 = state_150914;
if(cljs.core.truth_(inst_150900)){
var statearr_150924_150955 = state_150914__$1;
(statearr_150924_150955[(1)] = (12));

} else {
var statearr_150925_150956 = state_150914__$1;
(statearr_150925_150956[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150915 === (3))){
var inst_150912 = (state_150914[(2)]);
var state_150914__$1 = state_150914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150914__$1,inst_150912);
} else {
if((state_val_150915 === (12))){
var inst_150874 = (state_150914[(8)]);
var inst_150902 = cljs.core.vec.call(null,inst_150874);
var state_150914__$1 = state_150914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_150914__$1,(15),out,inst_150902);
} else {
if((state_val_150915 === (2))){
var state_150914__$1 = state_150914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150914__$1,(4),ch);
} else {
if((state_val_150915 === (11))){
var inst_150878 = (state_150914[(9)]);
var inst_150882 = (state_150914[(10)]);
var inst_150892 = (state_150914[(2)]);
var inst_150893 = [];
var inst_150894 = inst_150893.push(inst_150878);
var inst_150874 = inst_150893;
var inst_150875 = inst_150882;
var state_150914__$1 = (function (){var statearr_150926 = state_150914;
(statearr_150926[(7)] = inst_150875);

(statearr_150926[(11)] = inst_150892);

(statearr_150926[(12)] = inst_150894);

(statearr_150926[(8)] = inst_150874);

return statearr_150926;
})();
var statearr_150927_150957 = state_150914__$1;
(statearr_150927_150957[(2)] = null);

(statearr_150927_150957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150915 === (9))){
var inst_150874 = (state_150914[(8)]);
var inst_150890 = cljs.core.vec.call(null,inst_150874);
var state_150914__$1 = state_150914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_150914__$1,(11),out,inst_150890);
} else {
if((state_val_150915 === (5))){
var inst_150875 = (state_150914[(7)]);
var inst_150878 = (state_150914[(9)]);
var inst_150882 = (state_150914[(10)]);
var inst_150882__$1 = f.call(null,inst_150878);
var inst_150883 = cljs.core._EQ_.call(null,inst_150882__$1,inst_150875);
var inst_150884 = cljs.core.keyword_identical_QMARK_.call(null,inst_150875,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_150885 = (inst_150883) || (inst_150884);
var state_150914__$1 = (function (){var statearr_150928 = state_150914;
(statearr_150928[(10)] = inst_150882__$1);

return statearr_150928;
})();
if(cljs.core.truth_(inst_150885)){
var statearr_150929_150958 = state_150914__$1;
(statearr_150929_150958[(1)] = (8));

} else {
var statearr_150930_150959 = state_150914__$1;
(statearr_150930_150959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150915 === (14))){
var inst_150907 = (state_150914[(2)]);
var inst_150908 = cljs.core.async.close_BANG_.call(null,out);
var state_150914__$1 = (function (){var statearr_150932 = state_150914;
(statearr_150932[(13)] = inst_150907);

return statearr_150932;
})();
var statearr_150933_150960 = state_150914__$1;
(statearr_150933_150960[(2)] = inst_150908);

(statearr_150933_150960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150915 === (10))){
var inst_150897 = (state_150914[(2)]);
var state_150914__$1 = state_150914;
var statearr_150934_150961 = state_150914__$1;
(statearr_150934_150961[(2)] = inst_150897);

(statearr_150934_150961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150915 === (8))){
var inst_150878 = (state_150914[(9)]);
var inst_150882 = (state_150914[(10)]);
var inst_150874 = (state_150914[(8)]);
var inst_150887 = inst_150874.push(inst_150878);
var tmp150931 = inst_150874;
var inst_150874__$1 = tmp150931;
var inst_150875 = inst_150882;
var state_150914__$1 = (function (){var statearr_150935 = state_150914;
(statearr_150935[(7)] = inst_150875);

(statearr_150935[(14)] = inst_150887);

(statearr_150935[(8)] = inst_150874__$1);

return statearr_150935;
})();
var statearr_150936_150962 = state_150914__$1;
(statearr_150936_150962[(2)] = null);

(statearr_150936_150962[(1)] = (2));


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
});})(c__19054__auto___150948,out))
;
return ((function (switch__18942__auto__,c__19054__auto___150948,out){
return (function() {
var cljs$core$async$state_machine__18943__auto__ = null;
var cljs$core$async$state_machine__18943__auto____0 = (function (){
var statearr_150940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_150940[(0)] = cljs$core$async$state_machine__18943__auto__);

(statearr_150940[(1)] = (1));

return statearr_150940;
});
var cljs$core$async$state_machine__18943__auto____1 = (function (state_150914){
while(true){
var ret_value__18944__auto__ = (function (){try{while(true){
var result__18945__auto__ = switch__18942__auto__.call(null,state_150914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18945__auto__;
}
break;
}
}catch (e150941){if((e150941 instanceof Object)){
var ex__18946__auto__ = e150941;
var statearr_150942_150963 = state_150914;
(statearr_150942_150963[(5)] = ex__18946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150964 = state_150914;
state_150914 = G__150964;
continue;
} else {
return ret_value__18944__auto__;
}
break;
}
});
cljs$core$async$state_machine__18943__auto__ = function(state_150914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18943__auto____1.call(this,state_150914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18943__auto____0;
cljs$core$async$state_machine__18943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18943__auto____1;
return cljs$core$async$state_machine__18943__auto__;
})()
;})(switch__18942__auto__,c__19054__auto___150948,out))
})();
var state__19056__auto__ = (function (){var statearr_150943 = f__19055__auto__.call(null);
(statearr_150943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19054__auto___150948);

return statearr_150943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19056__auto__);
});})(c__19054__auto___150948,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map