goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__207__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__207 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__208__i = 0, G__208__a = new Array(arguments.length -  0);
while (G__208__i < G__208__a.length) {G__208__a[G__208__i] = arguments[G__208__i + 0]; ++G__208__i;}
  args = new cljs.core.IndexedSeq(G__208__a,0);
} 
return G__207__delegate.call(this,args);};
G__207.cljs$lang$maxFixedArity = 0;
G__207.cljs$lang$applyTo = (function (arglist__209){
var args = cljs.core.seq(arglist__209);
return G__207__delegate(args);
});
G__207.cljs$core$IFn$_invoke$arity$variadic = G__207__delegate;
return G__207;
})()
;
});
