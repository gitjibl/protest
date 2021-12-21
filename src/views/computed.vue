<template>
    <div>
        <p>计算属性</p>
        <p>computed 为啥不能改变计算属性的值? 使用computed set</p>
        <p>这里的this.fullname = "改变！"并不是把"改变！"赋值给fullname的意思, 而是传参给里面的set函数。</p>
        <p>{{fullname}}</p>
        <button @click="changeFullname">改变</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:"this is default name"
        }
    },
    computed:{
        fullname:{
            get:function(){
                return this.name;
            },
            set:function(val){
                this.name = val;
            }
        }
    },
    methods:{
        changeFullname(){
            // this.name = "haha"
            this.fullname = "改变！"
        }
    }
}
</script>

