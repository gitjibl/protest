<template>
    <div>
        <button @click="toPost">测试</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {
            toPost() {
                let params = {
                    name: "jibl",
                    list: ["a", "b"]
                }
                 let users = [
                     {name:"jibl"},
                     {name:"xh"}
                 ]
                // this.$axios({
                //         method: "post",
                //         url: "http://127.0.0.1:8089/test/json",
                //         data: JSON.stringify(params),
                //         headers: {            
                //                 "Content-Type": "application/json; charset=UTF-8"
                //         },
                //     })
                //     .then(res => {

                //     })
                //     .catch(err => {
                //         console.log(err);
                //     });
                let data = {
                    name:"jibl"
                }
                // this.$axios
                //     .post("http://127.0.0.1:8089/test/json2", this.$qs.stringify(data), {
                //         headers: {
                //             "Content-Type": "application/x-www-form-urlencoded"
                //         }
                //     })
                //     .then(res => {

                //     })
                //     .catch(err => {
                //         console.log(err);
                //     });

                this.$axios({
                        method: "get",
                        url: "http://127.0.0.1:8089/test/json2",
                        params: data,
                        headers: {
                                "Content-Type": "application/json; charset=UTF-8"
                        },
                    })
                    .then(res => {

                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        }
    }
</script>