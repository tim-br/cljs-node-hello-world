
This is some of the code from the cljs quickstart tutorial, except it is exclusive to cljs on node :).

To compile the program run this command:

```java -cp cljs.jar:src clojure.main node.clj
```

which produces the javascript code:

```node main.js```


To launch the repl run:

```rlwrap java -cp cljs.jar:src clojure.main node_repl.clj```

Of course, you need node and rlwrap installed :).

And I believe installing the `source-map-support` package from npm will be helpful.


More detailed readme:

https://github.com/clojure/clojurescript/wiki/Quick-Start 







