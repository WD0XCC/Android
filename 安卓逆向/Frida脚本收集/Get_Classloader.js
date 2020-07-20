//  获取堆栈应该在hook函数里面执行
// 所以要先有函数地址
Java.perform(function() {
    var thread = Java.use('java.lang.Thread');
    var instance = thread.$new();

    function where(stack) {
        var at = ""
        for (var i = 0; i < stack.length; i++) {
            at += stack[i].toString() + "\n";
        }

        return at;
    }

    var ConnectionErrorMessages = Java.use("com.google.android.gms.common.internal.ConnectionErrorMessages");
    ConnectionErrorMessages.getErrorMessage.overload('android.content.Context', 'int').implementation = function(mContext, mI) {

        console.log("gms i:" + mI);

        var ret = this.getErrorMessage(mContext, mI);

        console.log("return:" + ret);

        var stack = instance.currentThread().getStackTrace();
        var full_call_stack = where(stack);

        console.log(full_call_stack);

        return ret;
    };
});

// Java.perform(function() {
//     send("======start get stack===============")
//     var Log = Java.use("android.util.Log");
//     var Throwable = Java.use("java.lang.Throwable");
//     send(Log.getStackTraceString(Throwable.$new()));
// })