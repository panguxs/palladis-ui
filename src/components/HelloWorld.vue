<template>
  <div class="hello">
    <a-button type="primary">Primary</a-button>
    <p />
    <a>test</a>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button, message } from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
Vue.use(Button)
Vue.prototype.$message = message
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created() {
    this.$message.info('hello')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
