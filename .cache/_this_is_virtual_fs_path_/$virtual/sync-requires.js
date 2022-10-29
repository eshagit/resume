
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("D:\\study\\gatsby_workspace\\starter-project-gatsby-v3-mdx-blog-main\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("D:\\study\\gatsby_workspace\\starter-project-gatsby-v3-mdx-blog-main\\src\\pages\\index.js")),
  "component---src-pages-newsletter-js": preferDefault(require("D:\\study\\gatsby_workspace\\starter-project-gatsby-v3-mdx-blog-main\\src\\pages\\newsletter.js")),
  "component---src-pages-post-mdx": preferDefault(require("D:\\study\\gatsby_workspace\\starter-project-gatsby-v3-mdx-blog-main\\src\\pages\\post.mdx")),
  "component---src-pages-posts-js": preferDefault(require("D:\\study\\gatsby_workspace\\starter-project-gatsby-v3-mdx-blog-main\\src\\pages\\posts.js")),
  "component---src-pages-success-js": preferDefault(require("D:\\study\\gatsby_workspace\\starter-project-gatsby-v3-mdx-blog-main\\src\\pages\\success.js")),
  "component---src-templates-post-template-js": preferDefault(require("D:\\study\\gatsby_workspace\\starter-project-gatsby-v3-mdx-blog-main\\src\\templates\\post-template.js"))
}

