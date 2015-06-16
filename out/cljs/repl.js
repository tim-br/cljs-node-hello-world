// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
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
var seq__1874_1886 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1875_1887 = null;
var count__1876_1888 = (0);
var i__1877_1889 = (0);
while(true){
if((i__1877_1889 < count__1876_1888)){
var f_1890 = cljs.core._nth.call(null,chunk__1875_1887,i__1877_1889);
cljs.core.println.call(null,"  ",f_1890);

var G__1891 = seq__1874_1886;
var G__1892 = chunk__1875_1887;
var G__1893 = count__1876_1888;
var G__1894 = (i__1877_1889 + (1));
seq__1874_1886 = G__1891;
chunk__1875_1887 = G__1892;
count__1876_1888 = G__1893;
i__1877_1889 = G__1894;
continue;
} else {
var temp__4423__auto___1895 = cljs.core.seq.call(null,seq__1874_1886);
if(temp__4423__auto___1895){
var seq__1874_1896__$1 = temp__4423__auto___1895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1874_1896__$1)){
var c__3739__auto___1897 = cljs.core.chunk_first.call(null,seq__1874_1896__$1);
var G__1898 = cljs.core.chunk_rest.call(null,seq__1874_1896__$1);
var G__1899 = c__3739__auto___1897;
var G__1900 = cljs.core.count.call(null,c__3739__auto___1897);
var G__1901 = (0);
seq__1874_1886 = G__1898;
chunk__1875_1887 = G__1899;
count__1876_1888 = G__1900;
i__1877_1889 = G__1901;
continue;
} else {
var f_1902 = cljs.core.first.call(null,seq__1874_1896__$1);
cljs.core.println.call(null,"  ",f_1902);

var G__1903 = cljs.core.next.call(null,seq__1874_1896__$1);
var G__1904 = null;
var G__1905 = (0);
var G__1906 = (0);
seq__1874_1886 = G__1903;
chunk__1875_1887 = G__1904;
count__1876_1888 = G__1905;
i__1877_1889 = G__1906;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1907 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3370__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3370__auto__)){
return or__3370__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1907);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1907)))?cljs.core.second.call(null,arglists_1907):arglists_1907));
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
var seq__1878 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1879 = null;
var count__1880 = (0);
var i__1881 = (0);
while(true){
if((i__1881 < count__1880)){
var vec__1882 = cljs.core._nth.call(null,chunk__1879,i__1881);
var name = cljs.core.nth.call(null,vec__1882,(0),null);
var map__1883 = cljs.core.nth.call(null,vec__1882,(1),null);
var map__1883__$1 = ((cljs.core.seq_QMARK_.call(null,map__1883))?cljs.core.apply.call(null,cljs.core.hash_map,map__1883):map__1883);
var doc = cljs.core.get.call(null,map__1883__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__1883__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__1908 = seq__1878;
var G__1909 = chunk__1879;
var G__1910 = count__1880;
var G__1911 = (i__1881 + (1));
seq__1878 = G__1908;
chunk__1879 = G__1909;
count__1880 = G__1910;
i__1881 = G__1911;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__1878);
if(temp__4423__auto__){
var seq__1878__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1878__$1)){
var c__3739__auto__ = cljs.core.chunk_first.call(null,seq__1878__$1);
var G__1912 = cljs.core.chunk_rest.call(null,seq__1878__$1);
var G__1913 = c__3739__auto__;
var G__1914 = cljs.core.count.call(null,c__3739__auto__);
var G__1915 = (0);
seq__1878 = G__1912;
chunk__1879 = G__1913;
count__1880 = G__1914;
i__1881 = G__1915;
continue;
} else {
var vec__1884 = cljs.core.first.call(null,seq__1878__$1);
var name = cljs.core.nth.call(null,vec__1884,(0),null);
var map__1885 = cljs.core.nth.call(null,vec__1884,(1),null);
var map__1885__$1 = ((cljs.core.seq_QMARK_.call(null,map__1885))?cljs.core.apply.call(null,cljs.core.hash_map,map__1885):map__1885);
var doc = cljs.core.get.call(null,map__1885__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__1885__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__1916 = cljs.core.next.call(null,seq__1878__$1);
var G__1917 = null;
var G__1918 = (0);
var G__1919 = (0);
seq__1878 = G__1916;
chunk__1879 = G__1917;
count__1880 = G__1918;
i__1881 = G__1919;
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

//# sourceMappingURL=repl.js.map