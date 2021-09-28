<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  {{ message }}
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import getContacts from './graphql/allContacts.query.gql'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const message = ref('Hello, Vassily!!!');
    const {result} = useQuery(getContacts);
    console.log(result.value);
    return {message};
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
