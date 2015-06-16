(ns hello-world.core
  (:require [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)

(defn -main [& args]
  (println "Hello world!"))

(defn fun []
  (println "yo"))

(set! *main-cli-fn* -main)

