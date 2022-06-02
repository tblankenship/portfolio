![tailwind-nextjs-banner](/public/static/photos/trolltunga.JPG)

# My Portfolio/Blog

A simple portfolio site, built in [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) - using this great [blogging starter template](https://github.com/timlrx/tailwind-nextjs-starter-blog).

#### Features (Mentioned in the parent repo but wanted to highlight.)

- Easy styling customization with [Tailwind 3.0](https://tailwindcss.com/blog/tailwindcss-v3) and primary color attribute
- Near perfect lighthouse score - [Lighthouse report](https://www.webpagetest.org/result/210111_DiC1_08f3670c3430bf4a9b76fc3b927716c5/)
- Lightweight, 45kB first load JS, uses Preact in production build
- Mobile-friendly view
- Light and dark theme
- Self-hosted font with [Fontsource](https://fontsource.org/)
- Supports [plausible](https://plausible.io/), [simple analytics](https://simpleanalytics.com/) and google analytics
- [MDX - write JSX in markdown documents!](https://mdxjs.com/)
- Server-side syntax highlighting with line numbers and line highlighting via [rehype-prism-plus](https://github.com/timlrx/rehype-prism-plus)
- Math display supported via [KaTeX](https://katex.org/)
- Citation and bibliography support via [rehype-citation](https://github.com/timlrx/rehype-citation)
- Automatic image optimization via [next/image](https://nextjs.org/docs/basic-features/image-optimization)
- Flexible data retrieval with [mdx-bundler](https://github.com/kentcdodds/mdx-bundler)
- Support for tags - each unique tag will be its own page
- Support for multiple authors
- Blog templates
- TOC component
- Support for nested routing of blog posts
- Newsletter component with support for mailchimp, buttondown, convertkit, klaviyo, revue, and emailoctopus
- Supports [giscus](https://github.com/laymonage/giscus), [utterances](https://github.com/utterance/utterances) or disqus
- Projects page
- Preconfigured security headers
- SEO friendly with RSS feed, sitemaps and more!

### Current Todo list

- [ ] Add icons
- [ ] Add analytics
- [ ] Remove boilerplate content
- [ ] New pop-out modal component for images
- [ ] Add color themes
- [ ] Redo layouts
- [ ] Reviews/reading notes pages

## Installation

```bash
npm install
```

## Development

First, run the development server:

```bash
npm start
```

or

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Extend / Customize

`data/logo.svg` - replace with your own logo.

`components/MDXComponents.js` - pass your own JSX code or React component by specifying it over here. You can then call them directly in the `.mdx` or `.md` file. By default, a custom link and image component is passed.

### Frontmatter

Frontmatter follows [Hugo's standards](https://gohugo.io/content-management/front-matter/).

Currently 7 fields are supported.

```
title (required)
date (required)
tags (required, can be empty array)
lastmod (optional)
draft (optional)
summary (optional)
images (optional, if none provided defaults to socialBanner in siteMetadata config)
authors (optional list which should correspond to the file names in `data/authors`. Uses `default` if none is specified)
layout (optional list which should correspond to the file names in `data/layouts`)
canonicalUrl (optional, canonical url for the post for SEO)
```

Here's an example of a post's frontmatter:

```
---
title: 'Introducing Tailwind Nexjs Starter Blog'
date: '2021-01-12'
lastmod: '2021-01-18'
tags: ['next-js', 'tailwind', 'guide']
draft: false
summary: 'Looking for a performant, out of the box template, with all the best in web technology to support your blogging needs? Checkout the Tailwind Nextjs Starter Blog template.'
images: ['/static/images/canada/mountains.jpg', '/static/images/canada/toronto.jpg']
authors: ['default', 'sparrowhawk']
layout: PostLayout
canonicalUrl: https://tailwind-nextjs-starter-blog.vercel.app/blog/introducing-tailwind-nextjs-starter-blog
---
```

### Compose

Run `node ./scripts/compose.js` to bootstrap a new post.

Follow the interactive prompt to generate a post with pre-filled front matter.

## Deploy

**Vercel**  
The easiest way to deploy the template is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Credit

Like the blog? [Support the parent repo that made this blog possible](https://github.com/timlrx/tailwind-nextjs-starter-blog) by by giving a star on GitHub, and giving a shoutout on Twitter or becoming a project [sponsor](https://github.com/sponsors/timlrx).
