var plugins = [{
      name: 'gatsby-plugin-image',
      plugin: require('D:/study/gatsby_workspace/starter-project-gatsby-v3-mdx-blog-main/node_modules/gatsby-plugin-image/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-styled-components',
      plugin: require('D:/study/gatsby_workspace/starter-project-gatsby-v3-mdx-blog-main/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"topLevelImportPaths":[],"pure":false},
    },{
      name: 'gatsby-theme-material-ui-top-layout',
      plugin: require('D:/study/gatsby_workspace/starter-project-gatsby-v3-mdx-blog-main/node_modules/gatsby-theme-material-ui-top-layout/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-material-ui',
      plugin: require('D:/study/gatsby_workspace/starter-project-gatsby-v3-mdx-blog-main/node_modules/gatsby-plugin-material-ui/gatsby-ssr'),
      options: {"plugins":[],"pathToEmotionCacheProps":""},
    },{
      name: 'gatsby-plugin-webfonts',
      plugin: require('D:/study/gatsby_workspace/starter-project-gatsby-v3-mdx-blog-main/node_modules/gatsby-plugin-webfonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":{"google":[{"family":"Roboto","variants":["300","400","500"]}]}},
    },{
      name: 'gatsby-plugin-mdx',
      plugin: require('D:/study/gatsby_workspace/starter-project-gatsby-v3-mdx-blog-main/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images"}],"extensions":[".mdx"],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"D:\\study\\gatsby_workspace\\starter-project-gatsby-v3-mdx-blog-main"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    try {
      const result = plugin.plugin[api](args, plugin.options)
      if (result && argTransform) {
        args = argTransform({ args, result })
      }
      return result
    } catch (e) {
      if (plugin.name !== `default-site-plugin`) {
        // default-site-plugin is user code and will print proper stack trace,
        // so no point in annotating error message pointing out which plugin is root of the problem
        e.message += ` (from plugin: ${plugin.name})`
      }

      throw e
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
