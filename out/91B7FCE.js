goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__157__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__157 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__158__i = 0, G__158__a = new Array(arguments.length -  0);
while (G__158__i < G__158__a.length) {G__158__a[G__158__i] = arguments[G__158__i + 0]; ++G__158__i;}
  args = new cljs.core.IndexedSeq(G__158__a,0);
} 
return G__157__delegate.call(this,args);};
G__157.cljs$lang$maxFixedArity = 0;
G__157.cljs$lang$applyTo = (function (arglist__159){
var args = cljs.core.seq(arglist__159);
return G__157__delegate(args);
});
G__157.cljs$core$IFn$_invoke$arity$variadic = G__157__delegate;
return G__157;
})()
;
});
