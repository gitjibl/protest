<template>
  <div>
    <h2>export与export default命令的区别</h2>
    <button @click="export1">export</button>
    <button @click="exportD">export default</button>
  </div>
</template>
<script>
import { say,year } from "@/assets/js/export.js";
import exportd from "@/assets/js/export_default.js";
export default {
  data() {
    return {};
  },
  methods: {
    export1() {
      say("say :"+year);
    },
    exportD() {
      exportd.tell("tell...");
    }
  }
};
</script>

