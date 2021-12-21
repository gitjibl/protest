<template>
    <div>
        <h1>slot 使用</h1>
        <a href="https://blog.csdn.net/weixin_41646716/article/details/80450873" target="_blank">https://blog.csdn.net/weixin_41646716/article/details/80450873</a>
        <SlotP>
            <h3>slot 匿名插槽插入其他组件</h3>
            <SlotC/>
        </SlotP>
    </div>
</template>
<script>
    import SlotP from '@/components/SlotP'
    import SlotC from '@/components/SlotC'
    export default {
        data() {
            return {}
        },
        // mounted(){
        //     let arr1 = [
        //         {
        //             name:"1",
        //             age:1,
        //             addr:"xx"
        //         },{
        //             name:"2",
        //             age:2
        //         },
        //     ]
        //     let arr2 = [
        //         {
        //             name:"2",
        //             age:1,
        //             addr:"xx"
        //         },{
        //             name:"3",
        //             age:3
        //         },{
        //             name:"2",
        //             age:2
        //         }
        //     ]
        //     console.log([...arr1,...arr2])
        // },
        components: {
            SlotP,
            SlotC
        }
    }
</script>