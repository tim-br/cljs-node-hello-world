goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__983__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__983 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__984__i = 0, G__984__a = new Array(arguments.length -  0);
while (G__984__i < G__984__a.length) {G__984__a[G__984__i] = arguments[G__984__i + 0]; ++G__984__i;}
  args = new cljs.core.IndexedSeq(G__984__a,0);
} 
return G__983__delegate.call(this,args);};
G__983.cljs$lang$maxFixedArity = 0;
G__983.cljs$lang$applyTo = (function (arglist__985){
var args = cljs.core.seq(arglist__985);
return G__983__delegate(args);
});
G__983.cljs$core$IFn$_invoke$arity$variadic = G__983__delegate;
return G__983;
})()
;
});
