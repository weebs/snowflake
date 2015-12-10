// Compiled by ClojureScript 1.7.170 {}
goog.provide('electron.core');
goog.require('cljs.core');
electron.core.app = require("app");
electron.core.browser_window = require("browser-window");
electron.core.crash_reporter = require("crash-reporter");
electron.core.midi = require("midi");
electron.core.electron = require("electron");
cljs.core.enable_console_print_BANG_.call(null);
electron.core.input = (new electron.core.midi.input());
electron.core.main_window = cljs.core.atom.call(null,null);
electron.core.init_browser = (function electron$core$init_browser(){
cljs.core.reset_BANG_.call(null,electron.core.main_window,(new electron.core.browser_window(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(600)], null)))));

cljs.core.deref.call(null,electron.core.main_window).loadURL([cljs.core.str("file://"),cljs.core.str(__dirname),cljs.core.str("/public/index.html")].join(''));

cljs.core.deref.call(null,electron.core.main_window).webContents.on("did-finish-load",(function (){
cljs.core.println.call(null,"done loading");

electron.core.input.on("message",(function (dt,m){
cljs.core.println.call(null,[cljs.core.str(m)].join(''));

return cljs.core.deref.call(null,electron.core.main_window).webContents.send("midi-msg",m);
}));

cljs.core.deref.call(null,electron.core.main_window).webContents.send("midi-msg","fucking dolan");

return electron.core.input.openPort((1));
}));

return cljs.core.deref.call(null,electron.core.main_window).on("closed",(function (){
return cljs.core.reset_BANG_.call(null,electron.core.main_window,null);
}));
});
electron.core.crash_reporter.start();
electron.core.app.on("window-all-closed",(function (){
if(cljs.core._EQ_.call(null,process.platform,"darwin")){
return null;
} else {
return electron.core.app.quit();
}
}));
electron.core.app.on("ready",electron.core.init_browser);
cljs.core.println.call(null,electron.core.input.getPortName((0)));
