Java.perform(function() {
    send("Hook Starting.......");
    var modules = Process.enumerateModules()
    for (var i = 0; i < modules.length; i++) {
        var module = modules[i];
        var module_name = modules[i].name;
        send("模块" + i + ":" + module_name)
        var exports = module.enumerateExports();
        for (var j = 0; j < exports.length; j++) {
            var exports_name = exports[j].name
            send("导出函数名：" + exports_name);
        }
    }
})