// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1207__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1207 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1208__i = 0, G__1208__a = new Array(arguments.length -  0);
while (G__1208__i < G__1208__a.length) {G__1208__a[G__1208__i] = arguments[G__1208__i + 0]; ++G__1208__i;}
  args = new cljs.core.IndexedSeq(G__1208__a,0);
} 
return G__1207__delegate.call(this,args);};
G__1207.cljs$lang$maxFixedArity = 0;
G__1207.cljs$lang$applyTo = (function (arglist__1209){
var args = cljs.core.seq(arglist__1209);
return G__1207__delegate(args);
});
G__1207.cljs$core$IFn$_invoke$arity$variadic = G__1207__delegate;
return G__1207;
})()
;
});

//# sourceMappingURL=nodejs.js.map