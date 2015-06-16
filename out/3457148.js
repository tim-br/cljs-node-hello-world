goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__194__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__194 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__195__i = 0, G__195__a = new Array(arguments.length -  0);
while (G__195__i < G__195__a.length) {G__195__a[G__195__i] = arguments[G__195__i + 0]; ++G__195__i;}
  args = new cljs.core.IndexedSeq(G__195__a,0);
} 
return G__194__delegate.call(this,args);};
G__194.cljs$lang$maxFixedArity = 0;
G__194.cljs$lang$applyTo = (function (arglist__196){
var args = cljs.core.seq(arglist__196);
return G__194__delegate(args);
});
G__194.cljs$core$IFn$_invoke$arity$variadic = G__194__delegate;
return G__194;
})()
;
});
