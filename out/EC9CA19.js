goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__140__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__140 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__141__i = 0, G__141__a = new Array(arguments.length -  0);
while (G__141__i < G__141__a.length) {G__141__a[G__141__i] = arguments[G__141__i + 0]; ++G__141__i;}
  args = new cljs.core.IndexedSeq(G__141__a,0);
} 
return G__140__delegate.call(this,args);};
G__140.cljs$lang$maxFixedArity = 0;
G__140.cljs$lang$applyTo = (function (arglist__142){
var args = cljs.core.seq(arglist__142);
return G__140__delegate(args);
});
G__140.cljs$core$IFn$_invoke$arity$variadic = G__140__delegate;
return G__140;
})()
;
});
