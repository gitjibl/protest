<template>

</template>
<script>
    console.log(person)
    console.log(fun)
    var person = 'jack'
    console.log(person);

    function fun() {
        console.log(person);
        var person = 'tom'
        console.log(person);
    }
    fun()
    console.log(person);
    export default {
        data() {
            return {}
        },
        created() {
            // console.log(person)
            // console.log(this.fun())
            // var person = 'jack'
            // console.log(person);
            // this.fun()
            // console.log(person);
        },
        methods: {
            fun() {
                console.log(person);
                var person = 'tom'
                console.log(person);
            }
        }
    }
</script>