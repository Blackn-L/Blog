module.exports = {
    title: "Blackn's Blog",
    description: 'Just playing around',
    themeConfig: {
        repo: 'https://github.com/Blackn-L/Blackn-L.github.io',
        repoLabel: 'GitHub',
        base: '/Blackn-L.github.io/',
        displayAllHeaders: true,
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        sidebarDepth: 2,
        nav: [
            { text: '首页', link: '/' },
            { text: '文章', link: '/blog/' },
            { text: '资源', link: '/resources/' },
        ],
        sidebar: {
            '/blog/': [
                {
                    title: 'Vue',
                    path: '/blog/vue/',
                    children: ['/blog/vue/20210708'],
                    initialOpenGroupIndex: -1 // 可选的, 默认值是 0
                }
                ,
                {
                    title: 'React',
                    path: '/blog/react/',
                    children: [],
                    initialOpenGroupIndex: -1 // 可选的, 默认值是 0
                },
                {
                    title: 'Other',
                    path: '/blog/other/',
                    children: [],
                    initialOpenGroupIndex: -1 // 可选的, 默认值是 0
                }
            ],
            '/resources/': [
                {
                    title: '资源',   // 必要的
                    path: '/resources/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                },
            ]
        }
    }
}