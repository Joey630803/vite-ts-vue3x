import { createApp } from 'vue'

import './styles/element/index.scss'
import ElementPlus from 'element-plus'

import router from './router'

import { store, key } from './store'

import App from './App.vue'

// rem布局-start
const setFontSize= () => {
  const htmlDom = document.getElementsByTagName('html')[0];
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  let size = htmlWidth / 10
  htmlDom.style.fontSize = `${htmlWidth / size}px`
  // 1rem = 10px
};
window.onresize = setFontSize;
setFontSize()
// rem布局-end

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(store,key);
// app.mount("#app");

router.isReady().then(() => app.mount('#app'))

