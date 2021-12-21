<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="test1">Object.assign</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {}
    };
  },
  methods: {
    test1() {
      let arr1 = [
        {
          name: "a",
          age: 10
        },
        {
          name: "b",
          age: 11
        },
        {
          name: "c",
          age: 12
        }
      ];
      let arr2 = [
        {
          name: "a1",
          age: 10
        },
        {
          name: "b1",
          age: 11
        },
        {
          name: "c1",
          age: 12
        }
      ];
      let a = {
        name: "jon",
        age: 15
      };
      let b = {
        name: "kom",
        phone: "15948623659"
      };
      console.log("es6...", [...arr1, ...arr2]);
      console.log("es6...", [a, b]);
      console.log("Object.assign 数组拷贝", Object.assign(arr1, arr2));
      console.log("concat", arr1.concat(arr2));
      console.log("Object.assign 对象合并", Object.assign(a, b));
      this.form = {
        id: 10,
        adress: "大好多"
      };
      Object.assign(this.$data.form, this.$options.data().form);
      console.log("=========", this.$data.form, this.$options.data().form);
      // Object.assign(this.$data, this.$options.data());
      // this.$data.form = this.$options.data().form
      console.log("this.form", this.form);
      var item1 = { name: "tom" };
      var item2 = { age: 25 };
      console.log("{...item1 ,...item2 }",{...item1 ,...item2 })
    }
  }
};
</script>

