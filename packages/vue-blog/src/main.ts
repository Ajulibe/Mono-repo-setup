import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.scss'
import { ApolloClients } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'

const apolloClient = new ApolloClient({
  uri: process.env.VUE_APP_GRAPHCMS_ENDPOINT,
  cache: new InMemoryCache(),
})

const app = createApp({
  setup() {
    provide(ApolloClients, {
      default: apolloClient,
    })
  },

  render: () => h(App),
})

app.use(router)
app.use(store)
app.mount('#app')
