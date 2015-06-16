goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32__i = 0, G__32__a = new Array(arguments.length -  0);
while (G__32__i < G__32__a.length) {G__32__a[G__32__i] = arguments[G__32__i + 0]; ++G__32__i;}
  args = new cljs.core.IndexedSeq(G__32__a,0);
} 
return G__31__delegate.call(this,args);};
G__31.cljs$lang$maxFixedArity = 0;
G__31.cljs$lang$applyTo = (function (arglist__33){
var args = cljs.core.seq(arglist__33);
return G__31__delegate(args);
});
G__31.cljs$core$IFn$_invoke$arity$variadic = G__31__delegate;
return G__31;
})()
;
});
