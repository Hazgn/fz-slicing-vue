import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes'
import './assets/css/index.css'
const app = createApp(App)

app.use(routes)
app.mount('#app')
// createApp(App).mount('#app')
