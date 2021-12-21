<template>
  <div>
    <h2>await</h2>
    <button @click="doIt">测试</button>
    <button @click="doIt2">同步测试</button>
    <button @click="doIt3">同步测试3</button>
    <button @click="asTest">Promise</button>
    <button @click="testPost">testPost</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: null
      };
    },
    async created() {
      // await this.test1();
      // let list = JSON.parse(JSON.stringify(this.list));
      // console.log(list, "啊哈哈哈哈");
    },
    methods: {
      takeLongTime(n) {
        return new Promise(resolve => {
          setTimeout(() => resolve(n + 2000), n);
        });
      },
      // setTimeout(() => console.log(n+"..."), n);
      // return n + 200
      // },
      step1(n) {
        console.log(`step1 with ${n}`);
        return this.takeLongTime(n);
      },

      step2(n) {
        console.log(`step2 with ${n}`);
        return this.takeLongTime(n);
      },

      step3(n) {
        console.log(`step3 with ${n}`);
        return this.takeLongTime(n);
      },
      async doIt() {
        let time = 2000;
        const time1 = await this.step1(time);
        const time2 = await this.step2(time1);
        const time3 = await this.step3(time2);
      },
      async doIt2() {
        // await this.test1().then(res =>{
        //   console.log("Promise resolve==>"+res.data)
        // })
        let list = await this.test1();
        console.log("同步....");
        console.log(list, "resolve => ");
        console.log(this.list, "data => list");
      },
      async doIt3() {
        await this.test3()
        console.log("...............");
        console.log("同步....end");
      },
      test1() {
        return new Promise(resolve => {
          this.$axios
            .get("http://localhost:8089/test/list", {})
            .then(res => {
              this.list = res.data;
              console.log(this.list, "axios 查询返回的数据");
              resolve(res);
            })
            .catch(error => {
              console.log(error);
            });
        });
      },
      test2() {
        this.$axios
          .get("http://localhost:8089/test/list", {})
          .then(res => {
            this.list = res.data;
            console.log(this.list, "axios 查询返回的数据");
          })
          .catch(error => {
            console.log(error);
          });
      },
      async test3() {
        await this.$axios
          .get("http://localhost:8089/test/list", {})
          .then(res => {
            this.list = res.data;
            console.log(this.list, "axios 查询返回的数据");
          })
          .catch(error => {
            console.log(error);
          });
      },
      async asTest() {
        let result = await this.promiseTest();
        console.log("result....", result);
      },
      promiseTest() {
        let promise = new Promise((resolve, reject) => {
          console.log("Promise...");
          resolve("Promise 是异步编程的一种解决方案");
        });
        console.log("promise", promise);
        return promise;
      },
      testPost() {
        var data = {
          entity: {
            username: "tomcat",
            age: 15
          },
          list: [{
            username: "a",
            age: 18
          }, {
            username: "b",
            age: 25
          }]
        };
        this.$axios
          .post("http://localhost:8089/test/testPost", JSON.stringify(data), {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
          })
          .then(res => {})
          .catch(err => {
            console.log(err);
          });
      }
    }
  };
</script>