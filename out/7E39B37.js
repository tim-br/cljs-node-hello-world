goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__160__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__160 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__161__i = 0, G__161__a = new Array(arguments.length -  0);
while (G__161__i < G__161__a.length) {G__161__a[G__161__i] = arguments[G__161__i + 0]; ++G__161__i;}
  args = new cljs.core.IndexedSeq(G__161__a,0);
} 
return G__160__delegate.call(this,args);};
G__160.cljs$lang$maxFixedArity = 0;
G__160.cljs$lang$applyTo = (function (arglist__162){
var args = cljs.core.seq(arglist__162);
return G__160__delegate(args);
});
G__160.cljs$core$IFn$_invoke$arity$variadic = G__160__delegate;
return G__160;
})()
;
});
