[![Yii2](https://img.shields.io/badge/Powered_by-Yii_Framework-green.svg?style=for-the-badge&logo=yii)](https://www.yiiframework.com/)

# Yii3 framework documentation

Документация по VitePress: https://vitepress.dev

### Ссылка на предпродакшен

[yii3.netlify.app](https://yii3.netlify.app)


### Технологии в разработке

- TypeScript [[Документация](https://www.typescriptlang.org/docs/)]
- VitePress [[Документация](https://vitepress.dev/guide/getting-started)]
- Vite [[Документация](https://vite.dev/guide/)]
- Vue.js [[Документация](https://vuejs.org/guide/introduction.html)]


### Инструкции запуска

В главной директории проекта запустить команду:
```bash
npm install
```

Убедится, что в проекте появилась папка `node_modules`

Режим разработчика:
```bash
npm run docs:dev
```
или
```bash
vitepress dev docs
```
Если всё сделано правильно, локально по ссылке http://localhost:5173/ вы сможете открыть документацию Yii3 на английском языке

---

### Сборка и публикация

Убедитесь, что frontend и backend собрались правильно.
Для этого остановите dev процесс в консоли, и снова запустите:
```bash
npm run docs:dev
```

Если всё применилось, можно приступать к сборке:
```bash
npm run docs:build
```
В папке `\docs\.vitepress`
Должна появится папка `dist` - всё её внутреннее содержимое нужно загрузить на сервер или виртуальный хостиг. Это статика, поэтому особых настроект веб-сервера не понадобится. Проект готов к использованию.

---

### Настройки

`\docs\.vitepress\module\nav\SocialLinks.ts` - файл с кнопками социальных сетей, тут можно менять порядок и ссылки

`\docs\.vitepress\config.mts` - Основной модуль, конфигурация сайта, здесь можно так же настроить SEO-оптимизацию, меню, сайдбар, шапку сайта и футер.

`\docs\.vitepress\theme` - тема сайта. Компоненты, цвета, шрифты, стили, кастомные лэйауты, всё что влияет на внешний вид сайта и страниц.

Внутри файлов есть ссылки на документацию, в том числе и на русском языке.

---

Приятного пользования 😇🙏✨

Разработчик: [Раймонд Турчин](https://github.com/definaru)