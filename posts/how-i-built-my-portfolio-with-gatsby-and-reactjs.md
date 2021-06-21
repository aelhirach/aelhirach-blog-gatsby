---
tags:
  - graphql
  - gatsby
published: true
date: 2021-01-05T13:54:07.809Z
title: How I built my portfolio with Gatsby and ReactJS
---


First of all welcome to my personal blog and to my first Blog Post. In this article I'am going to explain how I created this portfolio and why I decided to do it.



##Why did I need to create my own blog

For some time now, I've been thinking about creating a blog where I can share my ideas and also share tips and tricks about several subjects, from technical tutorials to productivity and anything that will cross my mind.

At the beginnig, I was somewhat hesitant about whether using online publishing platform as : medium or many other  alternatives, or starting with my own blog that I have to create from scratch. But then I got convinced that I should do that by myself since I'am already a Mobile Developer, I need to be creative and show off my technical skills and share that code with recruiters. 



##Choosing the tech stack : Gatsby & React JS

When I decided to create my blog by myself, I had already been familiar with React Native as Mobile Technologie and intrested in ReactJS for the web side. This is why I started to look at lightweight ways using this technologies to make my website responsive, scalable and easy to keep updated and that’s exactly where Gatsby helps me.

Gatsby allows you to build websites powered by the JAMStack architecture that uses JavaScript, APIs and Markup without requiring the use of a database or server-side programming language. Since it has the concept of starters you can pick from hundreds the one that matches your project, in my case it was [gatsby-starter-blog](https://www.gatsbyjs.com/starters/alxshelepenok/gatsby-starter-lumen/).

To do so, you only need two commands:

``` jsx
npm install -g gatsby-cli
gatsby new site-name https://www.gatsbyjs.com/starters/alxshelepenok/gatsby-starter-lumen/
```


* gatsby-starter-lumen

This gatsby starter blog has some important plugins installed :

1. Blog post with markdown files
2. Offline support
3. Progressive Web App ready
4. SEO enhancements
5. Responsive images
6. Google Analytics
7. Beautiful typography inspired by matejlatin/Gutenberg
8. Pagination support





#Deploy to Netlify
Netlify is one of the best places to deploy your Gatsby site. And it is super easy to do, follow this
[steps](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-netlify/).


#Conclusion
Gatsby takes care of everything, cache, minification, lazy load your images, etc. I had to do some work to improve SEO, like hit areas and aria-labels in some buttons for better score. I'm very happy with the results of my site. I'll do my best to keep it updated. Please go and fork it, use it and build your own: https://github.com/aelhirach/aelhirach-blog-gatsby.

