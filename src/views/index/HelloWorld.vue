<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click="jump">Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to index"
    };
  },
  created() {
    let _this = this;
    let page = "index";
    window.jnyd.getBack = function(aaa) {
      console.log("page", page);
      console.log(aaa);
    };
  },
  methods: {
    jump() {
      api.openWin({
        name: "login",
        url: "./login.html",
        pageParam: {
          aa: "index to login"
        }
      });
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
