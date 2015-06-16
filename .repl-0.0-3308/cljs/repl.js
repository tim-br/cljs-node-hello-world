// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__5460_5472 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__5461_5473 = null;
var count__5462_5474 = (0);
var i__5463_5475 = (0);
while(true){
if((i__5463_5475 < count__5462_5474)){
var f_5476 = cljs.core._nth.call(null,chunk__5461_5473,i__5463_5475);
cljs.core.println.call(null,"  ",f_5476);

var G__5477 = seq__5460_5472;
var G__5478 = chunk__5461_5473;
var G__5479 = count__5462_5474;
var G__5480 = (i__5463_5475 + (1));
seq__5460_5472 = G__5477;
chunk__5461_5473 = G__5478;
count__5462_5474 = G__5479;
i__5463_5475 = G__5480;
continue;
} else {
var temp__4423__auto___5481 = cljs.core.seq.call(null,seq__5460_5472);
if(temp__4423__auto___5481){
var seq__5460_5482__$1 = temp__4423__auto___5481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5460_5482__$1)){
var c__3739__auto___5483 = cljs.core.chunk_first.call(null,seq__5460_5482__$1);
var G__5484 = cljs.core.chunk_rest.call(null,seq__5460_5482__$1);
var G__5485 = c__3739__auto___5483;
var G__5486 = cljs.core.count.call(null,c__3739__auto___5483);
var G__5487 = (0);
seq__5460_5472 = G__5484;
chunk__5461_5473 = G__5485;
count__5462_5474 = G__5486;
i__5463_5475 = G__5487;
continue;
} else {
var f_5488 = cljs.core.first.call(null,seq__5460_5482__$1);
cljs.core.println.call(null,"  ",f_5488);

var G__5489 = cljs.core.next.call(null,seq__5460_5482__$1);
var G__5490 = null;
var G__5491 = (0);
var G__5492 = (0);
seq__5460_5472 = G__5489;
chunk__5461_5473 = G__5490;
count__5462_5474 = G__5491;
i__5463_5475 = G__5492;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_5493 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3370__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3370__auto__)){
return or__3370__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_5493);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_5493)))?cljs.core.second.call(null,arglists_5493):arglists_5493));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__5464 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__5465 = null;
var count__5466 = (0);
var i__5467 = (0);
while(true){
if((i__5467 < count__5466)){
var vec__5468 = cljs.core._nth.call(null,chunk__5465,i__5467);
var name = cljs.core.nth.call(null,vec__5468,(0),null);
var map__5469 = cljs.core.nth.call(null,vec__5468,(1),null);
var map__5469__$1 = ((cljs.core.seq_QMARK_.call(null,map__5469))?cljs.core.apply.call(null,cljs.core.hash_map,map__5469):map__5469);
var doc = cljs.core.get.call(null,map__5469__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__5469__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__5494 = seq__5464;
var G__5495 = chunk__5465;
var G__5496 = count__5466;
var G__5497 = (i__5467 + (1));
seq__5464 = G__5494;
chunk__5465 = G__5495;
count__5466 = G__5496;
i__5467 = G__5497;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__5464);
if(temp__4423__auto__){
var seq__5464__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5464__$1)){
var c__3739__auto__ = cljs.core.chunk_first.call(null,seq__5464__$1);
var G__5498 = cljs.core.chunk_rest.call(null,seq__5464__$1);
var G__5499 = c__3739__auto__;
var G__5500 = cljs.core.count.call(null,c__3739__auto__);
var G__5501 = (0);
seq__5464 = G__5498;
chunk__5465 = G__5499;
count__5466 = G__5500;
i__5467 = G__5501;
continue;
} else {
var vec__5470 = cljs.core.first.call(null,seq__5464__$1);
var name = cljs.core.nth.call(null,vec__5470,(0),null);
var map__5471 = cljs.core.nth.call(null,vec__5470,(1),null);
var map__5471__$1 = ((cljs.core.seq_QMARK_.call(null,map__5471))?cljs.core.apply.call(null,cljs.core.hash_map,map__5471):map__5471);
var doc = cljs.core.get.call(null,map__5471__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__5471__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__5502 = cljs.core.next.call(null,seq__5464__$1);
var G__5503 = null;
var G__5504 = (0);
var G__5505 = (0);
seq__5464 = G__5502;
chunk__5465 = G__5503;
count__5466 = G__5504;
i__5467 = G__5505;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
