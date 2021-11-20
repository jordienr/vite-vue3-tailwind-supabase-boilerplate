import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import router from './router/'
import { globalComponents } from './components/global'




const app = createApp(App)

// Add plugins
app.use(router)

// Register global components
globalComponents.forEach(component => { 
    app.component(component.name, component)
})

app.mount('#app')
