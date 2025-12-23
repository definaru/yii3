import DefaultTheme from 'vitepress/theme-without-fonts'
import Copyright from './components/Copyright.vue'
import './components/css/style.css'

export default {
    extends: DefaultTheme,
    enhanceApp(ctx) {
        ctx.app.component('Copyright', Copyright);
    }
}