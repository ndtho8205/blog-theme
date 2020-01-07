# blog-theme

## Demo

[View demo](https://blog-theme.netlify.com)

![Screenshot](./images/screenshot.png)

## Configurations

```toml
baseURL = "https://example.org/"
title = "Example Site"
languageCode = "en-us"
theme = "blog-theme"

disqusShortname = ""
googleAnalytics = ""

paginate = 5
enableEmoji = true

// pygmentsCodeFences = true

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
