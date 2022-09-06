import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes'
import './index.css'

const app = createApp(App)

app.use(routes)
app.mount('#app')
// createApp(App).mount('#app')
