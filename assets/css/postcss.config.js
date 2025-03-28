const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './src/**/*.html',
        './src/**/*.js',
        // 添加其他包含HTML或JS的路径
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
    plugins: [
        require('autoprefixer'),
        purgecss,
        // 其他PostCSS插件
    ]
};