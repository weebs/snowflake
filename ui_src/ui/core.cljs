(ns ui.core
  (:require [reagent.core :as reagent :refer [atom]]
            [clojure.string :as string :refer [split-lines]]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

;; Init Stuff
;; ==================================================
(enable-console-print!)
(defonce stuff-setup (atom false))

(defonce proc (js/require "child_process"))
(def electron (js/require "electron"))
(def ipc (.-ipcRenderer electron))

(defonce midi-msgs (atom '()))
(def midi-events (atom []))
;; ==================================================

(defn p-linear->xy [n]
  {:x (-> n
          (- 36)
          (mod 8)
          (* 70))
   :y (-> n
          (- 36)
          (quot 8)
          (* 70))
   })

(defn setup []
  (q/frame-rate 30)
  {:counter 0})

(defn update-state
  [state]
  (-> (second (first @midi-msgs))
      (p-linear->xy)))

(defn draw [state]
  (when (not (empty? @midi-msgs))
    (let [x (first @midi-msgs)]
     (swap! midi-msgs empty)
     (swap! midi-msgs conj x)))
  (let [px (:x state)
        py (:y state)]
    (q/background 240)
    (q/fill 50 80 240)
    (q/ellipse px py 100 100)))

(defn process-midi [e msg]
  (swap! midi-msgs conj msg))

(defn root-component []
  [:div
   [:canvas#quil-div]
   [:table
    [:tr
     [:td
      [:ul
       [:li "Midi Messages"]
       (for [msg (take 10 @midi-msgs)]
         [:li (str msg)])]]]]])

(when (not @stuff-setup)
  (reset! stuff-setup true)
  (do
    (js/alert "Setting up")
    (set! (.-innerHTML (.-body js/document))
          "
<table>
  <tr>
    <td><canvas id='quil-div'></canvas></td>
    <td><div id='reagent'></div></td>
  </tr>
</table>
"))
  (.on ipc "midi-msg"
       process-midi
       ;; (fn [e arg]
       ;;   (swap! midi-msgs conj (js->clj arg)))
       )
  
  (js/alert "Im in ur stuffs, done setting up"))

(reagent/render
  [root-component]
  (.getElementById js/document "reagent"))

(q/defsketch hello-qjs
  :host "quil-div"
  :size [500 500]
  :setup setup
  :update update-state
  :draw draw
  :middleware [m/fun-mode])

