<template>
    <div>
        <p>promise</p>
        <button @click="promise">promise</button>
        <button @click="testCallBack">callback</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            async promise() {
                this.runAsync().then((result) => {
                    console.log("正在返回！")
                    console.log("result", result)
                })
                // let data = await this.runAsync();
                // console.log("正在返回！")
                // console.log(data)
            },
           async runAsync() {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        console.log("执行完成！")
                        resolve("这是返回的数据")
                    }, 2000)
                    console.log("执行中...")
                })
            },
            callback(name,callback) {
                console.log(name,"-----------");
                callback("result");
            },
            testCallBack() {
                this.callback("ok",data => {
                    console.log(data)
                })
            }
        }
    }
</script>