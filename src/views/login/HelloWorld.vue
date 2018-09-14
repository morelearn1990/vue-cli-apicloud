<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click="jumpBack">Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to login"
    };
  },
  created() {
    let _this = this;
    let page = "login";
    window.jnyd.getBack = function(aaa) {
      console.log("page", page);
      console.log(aaa);
    };
  },
  methods: {
    jumpBack() {
      let aaa = JSON.stringify(["aa", "bb", "cc", { a: "aaaa" }]);
      api.execScript({
        name: "root",
        script: "jnyd.getBack(" + aaa + ")"
      });
      api.closeWin();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
