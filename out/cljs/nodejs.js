// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__199__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__199 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__200__i = 0, G__200__a = new Array(arguments.length -  0);
while (G__200__i < G__200__a.length) {G__200__a[G__200__i] = arguments[G__200__i + 0]; ++G__200__i;}
  args = new cljs.core.IndexedSeq(G__200__a,0);
} 
return G__199__delegate.call(this,args);};
G__199.cljs$lang$maxFixedArity = 0;
G__199.cljs$lang$applyTo = (function (arglist__201){
var args = cljs.core.seq(arglist__201);
return G__199__delegate(args);
});
G__199.cljs$core$IFn$_invoke$arity$variadic = G__199__delegate;
return G__199;
})()
;
});

//# sourceMappingURL=nodejs.js.map