import { defineConfig } from 'vitepress'
import { SocialLinks } from './module/nav/SocialLinks'


// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'en-US',
    ignoreDeadLinks: true,
    title: "Yii Framework",
    titleTemplate: 'Yii3',
    description: "Various Yii 3.0 related documentation",
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    lastUpdated: true,
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo: '/brand/yii_logo.svg',
        search: {
            provider: 'local'
        },        
        socialLinks: SocialLinks(),
        nav: [
            { text: 'API', link: '/yiisoft' },
            { text: 'Guide', link: '/guide' },
            { text: 'Internals', link: '/compares' },
            { text: 'Community', link: '/community' },
            {
                text: 'Versions',
                items: [
                    { text: 'Yii1', link: 'https://www.yiiframework.com/doc/guide/1.1/ru/index' },
                    { text: 'Yii2', link: 'https://www.yiiframework.com/doc/guide/2.0/ru' },
                    { text: 'Yii3', link: '/guide' }
                ]
            },
            { text: 'Site', link: 'https://www.yiiframework.com'}
        ],
        sidebar: [
            {
                text: 'Introduction',
                items: [
                    { text: 'About Yii', link: '/intro/what-is-yii' },
                    { text: 'Upgrading from Version 2.0', link: '/intro/upgrade-from-v2' },
                ]
            },          
            {
                text: 'Getting started',
                collapsed: true,
                items: [
                    { text: 'What do you need to know', link: '/start/prerequisites' },
                    { text: 'Creating a project', link: '/start/creating-project' },
                    { text: 'Running applications', link: '/start/workflow' },
                    { text: 'Saying hello', link: '/start/hello' },
                    { text: 'Working with forms', link: '/start/forms' },
                    { text: 'Working with databases', link: '/start/databases' },
                    { text: 'Generating code with Gii', link: '/start/gii' },
                    { text: 'Looking ahead', link: '/start/looking-ahead' }
                ]
            },
            {
                text: 'Application structure',
                collapsed: true,
                items: [
                    { text: 'Application structure overview', link: '/structure/overview' },
                    { text: 'Entry scripts', link: '/structure/entry-script' },
                    { text: 'Application', link: '/structure/application' },
                    { text: 'Service components', link: '/structure/service' },
                    { text: 'Actions', link: '/structure/action' },
                    { text: 'Domain', link: '/structure/domain' },
                    { text: 'Middleware', link: '/structure/middleware' },
                    { text: 'Packages', link: '/structure/package' }
                ]
            },
            {
                text: 'Key concepts',
                collapsed: true,
                items: [
                    { text: 'Class autoloading', link: '/concept/autoloading' },
                    { text: 'Dependency injection container', link: '/concept/di-container' },
                    { text: 'Configuration', link: '/concept/configuration' },
                    { text: 'Aliases', link: '/concept/aliases' },
                    { text: 'Events', link: '/concept/events' }
                ]
            },
            {
                text: 'Handling requests',
                collapsed: true,
                items: [
                    { text: 'Routing and URL generation', link: '/runtime/routing' },
                    { text: 'Request', link: '/runtime/request' },
                    { text: 'Response', link: '/runtime/response' },
                    { text: 'Sessions', link: '/runtime/sessions' },
                    { text: 'Cookies', link: '/runtime/cookies' },
                    { text: 'Handling errors', link: '/runtime/handling-errors' },
                    { text: 'Logging', link: '/runtime/logging' }
                ]
            },
            {
                text: 'Views',
                collapsed: true,
                items: [
                    { text: 'Views', link: '/views/view' },
                    { text: 'Widgets', link: '/views/widget' },
                    { text: 'Assets', link: '/views/asset' },
                    { text: 'Working with client scripts', link: '/views/client-scripts' },
                    { text: 'Theming', link: '/views/theming' },
                    { text: 'Template engines', link: '/views/template-engines' }
                ]
            },
            {
                text: 'Working with databases',
                collapsed: true,
                items: [
                    { text: 'Database access objects', link: '/db-dao' },
                    { text: 'Query builder', link: '/db-query-builder' },
                    { text: 'Active record', link: '/db-active-record' },
                    { text: 'Migrations', link: '/databases/db-migrations' }
                ]
            },
            {
                text: 'Getting data from users',
                collapsed: true,
                items: [
                    { text: 'Creating forms', link: '/input/forms' },
                    { text: 'Validating input', link: '/input/validator' },
                    { text: 'Uploading files', link: '/input/file-upload' },
                    { text: 'Collecting tabular input', link: '/input/tabular-input' }
                ]
            },
            {
                text: 'Displaying data',
                collapsed: true,
                items: [
                    { text: 'Data formatting', link: '/output/formatting' },
                    { text: 'Pagination', link: '/output/pagination' },
                    { text: 'Sorting', link: '/output/sorting' },
                    { text: 'Data providers', link: '/output/data-providers' },
                    { text: 'Data widgets', link: '/output/data-widgets' }
                ]
            },
            {
                text: 'Security',
                collapsed: true,
                items: [
                    { text: 'Security overview', link: '/security/overview' },
                    { text: 'Authentication', link: '/security/authentication' },
                    { text: 'Authorization', link: '/security/authorization' },
                    { text: 'Working with passwords', link: '/security/passwords' },
                    { text: 'Cryptography', link: '/security/cryptography' },
                    { text: 'Best practices', link: '/security/best-practices' }
                ]
            },
            {
                text: 'Caching',
                collapsed: true,
                items: [
                    { text: 'Caching overview', link: '/caching/overview' },
                    { text: 'Data caching', link: '/caching/data' },
                    { text: 'Fragment caching', link: '/caching/fragment' },
                    { text: 'Page caching', link: '/caching/page' },
                    { text: 'HTTP caching', link: '/caching/http' }
                ]
            },
            {
                text: 'REST APIs',
                collapsed: true,
                items: [
                    { text: 'Quick start', link: '/rest/quick-start' },
                    { text: 'Resources', link: '/rest/resources' },
                    { text: 'Controllers', link: '/rest/controllers' },
                    { text: 'Routing', link: '/rest/routing' },
                    { text: 'Authentication', link: '/rest/authentication' },
                    { text: 'Rate limiting', link: '/rest/rate-limiting' },
                    { text: 'Versioning', link: '/rest/versioning' },
                    { text: 'Error handling', link: '/rest/error-handling' }
                ]
            },
            {
                text: 'Development tools',
                collapsed: true,
                items: [
                    { text: 'Debug toolbar and debugger', link: '/tools/debugger' },
                    { text: 'Generating code using Gii', link: '/tools/gii' },
                    { text: 'Generating API documentation', link: '/tools/generating-api' }
                ]
            },
            {
                text: 'Testing',
                collapsed: true,
                items: [
                    { text: 'Testing overview', link: '/testing/overview' },
                    { text: 'Testing environment setup', link: '/testing/environment-setup' },
                    { text: 'Unit tests', link: '/testing/unit' },
                    { text: 'Functional tests', link: '/testing/functional' },
                    { text: 'Acceptance tests', link: '/testing/acceptance' },
                    { text: 'Fixtures', link: '/testing/fixtures' }
                ]
            },
            {
                text: 'Special topics',
                collapsed: true,
                items: [
                    { text: 'Building application from scratch', link: '/tutorial/start-from-scratch' },
                    { text: 'Console applications', link: '/tutorial/console-applications' },
                    { text: 'Docker', link: '/tutorial/docker' },
                    { text: 'Internationalization', link: '/tutorial/i18n' },
                    { text: 'Mailing', link: '/tutorial/mailing' },
                    { text: 'Performance tuning', link: '/tutorial/performance-tuning' },
                    { text: 'Using Yii with event loop', link: '/tutorial/using-with-event-loop' },
                    { text: 'Using Yii with RoadRunner', link: '/tutorial/using-yii-with-roadrunner' },
                    { text: 'Using Yii with Swoole', link: '/tutorial/using-yii-with-swoole' }
                ]
            },
            {
                text: 'Widgets',
                collapsed: true,
                items: [
                    { text: 'GridView', link: '/widgets/yii-grid-gridview' },
                    { text: 'ListView', link: '/widgets/yii-widgets-listview' },
                    { text: 'DetailView', link: '/widgets/yii-widgets-detailview' },
                    { text: 'ActiveForm', link: '/widgets/guide-input-forms' },
                    { text: 'Menu', link: '/widgets/yii-widgets-menu' },
                    { text: 'LinkPager', link: '/widgets/yii-widgets-linkpager' },
                    { text: 'LinkSorter', link: '/widgets/yii-widgets-linksorter' },
                    { text: 'Bootstrap widgets', link: '/widgets/yii2-bootstrap' }
                ]
            },
            {
                text: 'Helpers',
                collapsed: true,
                items: [

                ]
            },
            {
                text: 'Extras',
                collapsed: true,
                items: [
                    { text: 'Glossary', link: '/glossary' }
                ]
            },

        ],
        footer: {
            message: 'Released under the <a href="/LICENSE">BSD 3-Clause</a>.',
            copyright: 'Copyright © 2008 - 2024 &middot; <a href="https://github.com/yiisoft" target="_blank">Yii Software</a>'
        }
    }
})