import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './styles/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faVuejs, faAws, faNodeJs, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faVuejs, faAws, faNodeJs, faGithub, faLinkedin, faEnvelope, faHouse)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
