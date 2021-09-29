<template>
  <Header />
</template>

<script>
import Header from './components/Header.vue'
// import { ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import getContacts from './graphql/allContacts.query.gql'

export default {
  name: 'App',
  components: {
    Header
  },
  setup() {
    // const message = ref('Hello, Vassily!!!');
    const {loading, data: {t} = {}} = useQuery(getContacts);
    if (loading) {
      console.log('Loading...');
    } else {
      console.log(t);
      return {t};
    }
    
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
  /* margin-top: 60px; */
}
</style>
