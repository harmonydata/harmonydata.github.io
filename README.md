# How to make a new blog post

Put the md file in `content/en/blog`. For an idea on the format, please look at the other blog posts in `content/en/blog`.

Any images should go in `assets/images`.

So if your blog post has an image called `dog.jpg`, put it in `assets/images/dog.jpg` and in your Markdown you can include the image like this:

```
{{< image src="images/dog.jpg" alt="dog" title="dog" >}}
```

Each time you upload a document to the `main` branch, Github Actions/Github Pages will automatically rebuild the site. So if possible try to make only the minimum number of edits as any change triggers the rebuild process, which lasts about 3 minutes. 


# How to run the website locally on your computer

Install Hugo, Node.js and NPM.

Then in the command line, run:

```
hugo serve
```
