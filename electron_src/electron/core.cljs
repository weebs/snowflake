(ns electron.core)

(def app            (js/require "app"))
(def browser-window (js/require "browser-window"))
(def crash-reporter (js/require "crash-reporter"))
(def midi (js/require "midi"))
(def electron (js/require "electron"))

(enable-console-print!)
;;(println (.send (.-ipcMain electron) "midi-msg" "faku"))
;;(def ipc (.-ipcMain electron))

;;(electron/ipcMain.on "midi-msg" (fn [e a] (println "faku")))

;;(println electron)
;;(println (.-ipcMain electron))



(def input (new midi.input))
(def main-window (atom nil))

(defn init-browser []
  (reset! main-window (browser-window.
                        (clj->js {:width 800
                                  :height 600})))
  ; Path is relative to the compiled js file (main.js in our case)
  (.loadURL @main-window (str "file://" js/__dirname "/public/index.html"))

  (.on (.-webContents @main-window) "did-finish-load"
       (fn []
         (println "done loading")
         (.on input "message"
              (fn [dt m]
                (println (js->clj m))
                (.send (.-webContents @main-window) "midi-msg" m)))
         (.send (.-webContents @main-window) "midi-msg" "fucking dolan")
         (.openPort input 1)
         ))

  (.on @main-window "closed" #(reset! main-window nil))
  )

(.start crash-reporter)
  (.on app "window-all-closed" #(when-not (= js/process.platform "darwin")
                                (.quit app)))


(.on app "ready" init-browser)

(println (.getPortName input 0))

