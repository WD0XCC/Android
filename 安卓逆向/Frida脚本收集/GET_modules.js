Java.perform(function() {
    send("Hook Starting.......");
    var modules = Process.enumerateModules()
    for (var i = 0; i < modules.length; i++) {
        var module = modules[i];
        var module_name = modules[i].name;
        send("模块" + i + ":" + module_name);
    }
})