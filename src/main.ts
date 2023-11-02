import { createApp } from 'vue'
import 'primeicons/primeicons.css'
import './style.css'
import 'primevue/resources/themes/soho-light/theme.css'
import '/node_modules/primeflex/primeflex.css'
import PrimeVue from 'primevue/config';
import Button from "primevue/button"
import Toolbar from "primevue/toolbar"
import ScrollPanel from "primevue/scrollpanel"
import DataView from "primevue/dataview"
import RadioButton from "primevue/radiobutton";
import Skeleton from "primevue/skeleton";
import InputText from "primevue/inputtext";
import Sidebar from "primevue/sidebar";
import App from './App.vue'
import router from "./router";
import store from "./store";
const app = createApp(App)
app.use(PrimeVue);
app.use(router);
app.use(store)
app.component('Button', Button);
app.component('Toolbar', Toolbar);
app.component('ScrollPanel', ScrollPanel);
app.component('DataView', DataView);
app.component('RadioButton', RadioButton);
app.component('Skeleton', Skeleton);
app.component('InputText', InputText);
app.component('Sidebar', Sidebar)
app.mount('#app')

