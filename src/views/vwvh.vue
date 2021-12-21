<template>
    <div>
        <p>flex 布局 vw vh 自适应</p>
        <a href="https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html" target="_blank">https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html</a>
        <div class="div-row">
            <div class="di">
                <div class="div1">
                    div1
                </div>
                <div class="div2">
                    div2
                </div>
                <div class="div3">
                    div3
                </div>
                <div class="div4">
                    div4
                </div>
            </div>
            <div class="di">
                <div class="div1">
                    div11
                </div>
                <div class="div2">
                    div22
                </div>
                <div class="div3">
                    div33
                </div>
                <div class="div4">
                    div44
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>
<style scoped>
    .div-row {
        display: flex;
        flex-direction: row;
        justify-content:center 
    }

    .di {
        display: flex;
        flex-direction: column
    }

    .div1 {
        background-color: rgb(153, 214, 161);
        width: 10vw;
        /* height: 2vh; */
    }

    .div2 {
        width: 10vw;
        background-color: rgb(150, 157, 219);
    }

    .div3 {
        width: 10vw;
        background-color: rgb(213, 150, 219);
    }

    .div4 {
        width: 10vw;
        background-color: rgb(219, 150, 150);
    }
</style>