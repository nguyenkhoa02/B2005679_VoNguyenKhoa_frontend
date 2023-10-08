import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

// /* import the fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core'
//
// /* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//
// /* import specific icons */
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
//
// /* add icons to the library */
// library.add(faUserSecret)

import router from "./router";

const app = createApp(App);
app.use(router);
// app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');
