<template>
<<<<<<< HEAD
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  {{ message }}
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
=======
  <Header />
  
</template>

<script>
import Header from './components/Header.vue'
// import { ref } from 'vue'
>>>>>>> 5978388136afe9808d86dea201d4a7a14c5f1dd9
import { useQuery } from '@vue/apollo-composable'
import getContacts from './graphql/allContacts.query.gql'

export default {
  name: 'App',
  components: {
<<<<<<< HEAD
    HelloWorld
  },
  setup() {
    const message = ref('Hello, Vassily!!!');
    const {result} = useQuery(getContacts);
    console.log(result.value);
    return {message};
=======
    Header
  },
  setup() {
    // const message = ref('Hello, Vassily!!!');
    const {result} = useQuery(getContacts);
    console.log(result.value);
    return result.value;
>>>>>>> 5978388136afe9808d86dea201d4a7a14c5f1dd9
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
<<<<<<< HEAD
  margin-top: 60px;
=======
  /* margin-top: 60px; */
>>>>>>> 5978388136afe9808d86dea201d4a7a14c5f1dd9
}
</style>
