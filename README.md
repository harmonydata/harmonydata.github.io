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


## Docs menu atem to be added
```
[[languages.en.menu.main]]
name = "Docs"
weight = 40
url = "/documentation/"
```
