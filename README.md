
This is some of the code from the cljs quickstart tutorial, except it is exclusive to cljs on node :).

You will need the cljs.jar which can be downloaded here: https://github.com/clojure/clojurescript/releases/download/r3308/cljs.jar

Of course, you need node and rlwrap installed :).

To compile the program run this command:

```java -cp cljs.jar:src clojure.main node.clj ```


which produces the javascript code:

```node main.js```


To launch the repl run:

```rlwrap java -cp cljs.jar:src clojure.main node_repl.clj```


And I believe installing the `source-map-support` package from npm will be helpful.


More detailed readme:

https://github.com/clojure/clojurescript/wiki/Quick-Start 







