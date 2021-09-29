<template>
    <div class="flex">
        <div class="text-red-500 mr-3">Мои контакты</div>
        <div class="text-grey-500 mr-3">РОРС</div>
        <div class="text-grey-500">Заметки</div>
        <div class="text-grey-500"></div>
    </div>
</template>
<script>
// import {result} from '../App.vue';
import { watchEffect } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import getContacts from '../graphql/allContacts.query.gql'

export default {
  name: 'Header',
  props: {
    msg: String
  },
  setup() {
    const { result } = useQuery(getContacts);
    watchEffect(() => {
      console.log(result.value)
    })
  }
}
</script>