<template>
    <div>
        <el-button type="success" @click="clickBtn">layer-demo</el-button>
        <el-button type="success" @click="closeBtn">closeBtn</el-button>
    </div>
</template>

<script>
    import formComp from '@/components/FormDemo.vue';
    export default {
        data() {
            return {
                clientWidth: '',
                clientHeight: '',
                index: ""
            }
        },
        mounted() {
            this.clientHeight = `${document.documentElement.clientHeight}`;
            this.clientWidth = `${document.documentElement.clientWidth}`;
            let that = this;
            window.onresize = function temp() {
                that.clientWidth = `${document.documentElement.clientWidth}`;
                that.clientHeight = `${document.documentElement.clientHeight}`;
            };
        },
        methods: {
            clickBtn() {
                // this.$layer.iframe({
                //     type: 1,
                //     content: {
                //         content: formComp,
                //         parent: this,
                //         // data: {
                //         //     iframeData: this.iframeData
                //         // }
                //     },
                //     area: ["50%", "80%"],
                //     offset: "auto",
                //     shade: true, //是否显示遮罩
                //     shadeClose: false, //点击遮罩是否关闭
                //     maxmin: true, //开启最大化最小化
                //     resize: true, //是否允许拉伸，默认是不允许
                //     cancel: () => {
                //         //关闭弹窗事件
                //         //   alert("关闭iframe");
                //     }
                // });
                this.index = this.$layer.iframe({
                    content: {
                        content: formComp,
                        parent: this,
                        // data: { iframeData: this.iframeData }
                    },
                    area: [this.clientWidth * 0.5 + "px", this.clientHeight * 0.7 + "px"],
                    // area: ['900px', '600px'],
                    offset: "auto",
                    title: '这是一个标题',
                    maxmin: true,
                    shade: false,
                    resize: false, //是否允许拉伸，默认是不允许
                    shadeClose: false,
                    cancel: () => { //关闭弹窗事件
                        // alert('关闭iframe');
                    }
                });
            },
            closeBtn(){
                this.$layer.close(this.index)
            }
        }
    }
</script>

