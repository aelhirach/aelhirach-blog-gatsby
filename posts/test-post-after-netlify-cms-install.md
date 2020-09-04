---
tags:
  - graphql
  - gatsby
published: true
date: 2020-01-05T13:54:07.809Z
title: How I built my portfolio with Gatsby and ReactJS
---


My personal site needs some love for a while now, the last commit on it was on Apr 3, 2016. So I need a new site and I need it fast and that’s exactly where Gatsby helps me.

What I want
Blazing fast site
Easy to publish a blog post with code highlights
Showcase specific GitHub repos
Scalable and easy to keep updated
Create a Gatsby site
You only need two commands:

npm install -g gatsby-cli
gatsby new site-name https://github.com/gatsbyjs/gatsby-starter-blog
With Gatsby you can startup a site in no time. Since it has the concept of starters you can pick from hundreds the one that matches your project, in my case it was gatsby-starter-blog.

gatsby-starter-blog
This starter has some important plugins installed, so out of the box I got:

Blog post with markdown files
Offline support
Progressive Web App ready
SEO enhancements
Responsive images
Google Analytics
Vertical rhythm typography
prismjs for code syntax highlight
What I added
Styled components
Lazy load image inside markdown files with gatsby-remark-lazy-load and lazines (this is a must for performance).
Github Repo Showcase with gatsby-source-github-api and this GraphQL Query:

``` jsx
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Child extends Component {
  render() {
    return (
        <p className="App-intro">
          I'm a childish component
        </p>
    );
  }
}

export default Child;
```

Deploy to Netlify
Netlify is one of the best (if not the best) place to deploy your Gatsby site. And is super easy to do, just follow this steps.

What I got
Fast site
Gatsby takes care of everything, cache, minification, lazy load your images, etc. I had to do some work to improve SEO, like hit areas and aria-labels in some buttons for better score:
