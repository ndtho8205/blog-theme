# blog-theme

[![Netlify Status](https://api.netlify.com/api/v1/badges/15afd7b2-191f-4265-93ba-d03ae022ffb7/deploy-status)](https://app.netlify.com/sites/ndtho8205-blog-theme/deploys)

![Screenshot](./images/screenshot.png)

[View demo](https://ndtho8205-blog-theme.netlify.com)

## Configurations

```toml
baseURL = "https://example.org/"
title = "Example Site"
languageCode = "en-us"
theme = "blog-theme"

paginate = 5
disqusShortname = ""
googleAnalytics = ""
enableEmoji = true

[author]
  name = "Author"
  avatar = "/images/avatar.jpeg"
  github = "https://github.com/username"
  gitlab = ""
  linkedin = ""

[params]
  favicon = ""
  logo = ""

[menu]
  [[menu.main]]
    identifier = "about"
    name = "About"
    url = "/about/"
    weight = 30

[taxonomies]
  category = "categories"
  series = "series"
  tag = "tags"

```

## Acknowledgments

- [Tachyons](http://tachyons.io/)

  The [Tachyons CSS Library](http://tachyons.io/) is used to build this theme. The library is truly powerful to create responsive interfaces without having to spend too much time writing custom CSS. It absolutely made developing the theme more interesting.
