import { createApp, provide, h } from 'vue'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
import { DefaultApolloClient } from '@vue/apollo-composable'
import App from './App.vue'
import './assets/tailwind.css'

const defaultClient = new ApolloClient({ 
    uri: 'http://localhost:3001/api',
    cache: new InMemoryCache(),
    connectToDevTools: true,
})

const query = gql`
query {
  getContacts {
    name
    tel
  }
}
`;

defaultClient.query({
    query
}).then((res) => console.log(res));

createApp(
    {
        setup() {
            provide(DefaultApolloClient, defaultClient)
        },
        render:() => h(App),
    }
).mount('#app')
