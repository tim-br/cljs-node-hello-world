goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1925__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1925 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1926__i = 0, G__1926__a = new Array(arguments.length -  0);
while (G__1926__i < G__1926__a.length) {G__1926__a[G__1926__i] = arguments[G__1926__i + 0]; ++G__1926__i;}
  args = new cljs.core.IndexedSeq(G__1926__a,0);
} 
return G__1925__delegate.call(this,args);};
G__1925.cljs$lang$maxFixedArity = 0;
G__1925.cljs$lang$applyTo = (function (arglist__1927){
var args = cljs.core.seq(arglist__1927);
return G__1925__delegate(args);
});
G__1925.cljs$core$IFn$_invoke$arity$variadic = G__1925__delegate;
return G__1925;
})()
;
});
