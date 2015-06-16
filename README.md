
This is some of the code from the cljs quickstart tutorial, except it is exclusive to cljs on node :).

You will need the cljs.jar which can be downloaded here:

 https://github.com/clojure/clojurescript/releases/download/r3308/cljs.jar

Of course, you need `node` and `rlwrap` installed :).

To compile the program run this command:

```java -cp cljs.jar:src clojure.main node.clj ```


which produces the javascript code in this file:

```node main.js```


To launch the repl run:

```rlwrap java -cp cljs.jar:src clojure.main node_repl.clj```

Once in the repl, we can load the core source file:

```(require '[hello-world.core :as H])```

And now we can call the functions from that namespace:


```> (H/-main)

> (H/fun)```


I believe installing the `source-map-support` package from `npm` will be helpful, I'm not sure at this point what it does, but it was included in the cljs quickstart tutorial.


More detailed readme:

https://github.com/clojure/clojurescript/wiki/Quick-Start 







