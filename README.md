# Harmony static blog source code (Markdown, Hugo)

This repo is the source code for the blog at https://harmonydata.ac.uk. It does *not* include the source code for the Harmony app or library itself.

* 🪧 The Harmony app which is running at https://harmonydata.ac.uk/app is in this repo: https://github.com/harmonydata/app.
* 🪧 The Harmony Python library source code is here: https://github.com/harmonydata/harmony.
* 🪧 The Harmony R library source code is here: https://github.com/harmonydata/harmony_r.
* 🪧 The Harmony API source code is here: https://github.com/harmonydata/harmonyapi.

## How to make a new blog post

Put the md file in `content/en/blog`. For an idea on the format, please look at the other blog posts in `content/en/blog`.

Any images should go in `assets/images`.

So if your blog post has an image called `dog.jpg`, put it in `assets/images/dog.jpg` and in your Markdown you can include the image like this:

```
{{< image src="images/dog.jpg" alt="dog" title="dog" >}}
```

Each time you upload a document to the `main` branch, Github Actions/Github Pages will automatically rebuild the site. So if possible try to make only the minimum number of edits as any change triggers the rebuild process, which lasts about 3 minutes. 


## How to run the website locally on your computer

Install [Hugo](https://gohugo.io/installation/).

Install dependencies:
`npm install`

To start server: 
`npm run dev`

## Image in content:
```
{{< image src="images/image.png" alt="Lorem" title="Lorem" >}}
```
## Code highlighter
Is set in `config.yml`:

```yaml
markup:
  highlight:
    style: github-dark
    tabWidth: 2
```
All available styles can be found: [https://xyproto.github.io/splash/docs/](https://xyproto.github.io/splash/docs/).

## Buttons
```yaml
buttons:
- text: Try Harmony Now!
  url: "/app/"
.button-outline {
  style: gradient #options: gradient | outline | muted | primary | secondary
  size: large #options: small | large | leave blank for medium
```

## Gradient text
Headings and superheadings can be set to gradient text using `**text**`, example:
```yaml
- block: video
  superheading: "**Harmony**"
  heading: "Introduction to **Harmony**"

```


## Docs menu item to be added
```
[[languages.en.menu.main]]
name = "Docs"
weight = 40
url = "/documentation/"
```
