# Hello World Express.Js
In this lab we will create a "Hello World" Express application where we utalize the usage of EJS view template engine. The objectives of this lesson are:
1. Understanding how to use EJS with Express
2. Practicing GET and POST requests
3. Understanding the difference between static and dynamic pages

## What is EJS?

EJS (along with all the other competing template engines) allows you to generate full-blown HTML pages which certainly enables a "proper front-end".

EJS is a tool for generating web pages that can include dynamic data and can share templated pieces with other web pages (such as common headers/footers). It is not a frontend framework. While EJS can be used by client-side Javascript to generate HTML on the client-side, it is more typically used by your backend to generate web pages in response to some URL request. EJS is not a client-side framework like Angular or React and does not dictate what client-side framework you do or don't use (if any). It is mostly covers a separate solution space.

## Installing necessary packages

Looking at our package.json we will see that there's some packages already included here all we have to do is to run ```npm install``` in order to install the listed packages

the packages that we will use are as follows:
Express.JS, EJS, and nodemon

Until now we are familiar with what Express and EJS do. 
As for the Nodemon packge: Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.

## Initializing our Express app

Let's start with writing these lines of code.
```
const express = require("express");

const bodyParser = require("body-parser");
const app = express()
```
Here we are importing our Express package, then we call it and assign it to our app variable for later use.

Then we use the body-parser package which is already included with nodejs, It is responsible for parsing the incoming request bodies in a middleware before you handle it.

Now we have to configure our app on which view engine and body parser it should use.

```
app.use(bodyParser.urlencoded({ extended:false }))
app.set("view engine","ejs")
app.set("views", "views")
```
First two lines are self explanatory we are chosing the default bodyparser and view engine.

As for the 3rd line ```app.set("view","views")```

This will set your apps view folder to something like:
>/Users/adil/Project/myApp/views

When you actually go to use the `view`, the view name becomes the file path, minus the root directory and the file extension. For example, if you had the following file structure:

```
/views/
/views/index.ejs
/views/news/
/views/news/index.ejs
/views/news/article1.ejs
/views/news/article2.ejs
```

You would render the views as follows:
```
res.render('index', {});  
res.render('news/index', {});  
res.render('news/article1', {});  
res.render('news/article2', {});
```
Then adding this line to listen for incoming requests at port 3000
```
app.listen(3000);
```

## Creating our pages

After we got our app setup and included all the tools we will need, its time to write the requests that our app should handle and assign which pages it should render
Let’s start with creating our EJS pages that we will render which each request.

Make sure to create a new directory in the root file and call it “views”.

Inside the views directory we will start with the index.ejs page where we will render our memes.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Meme Store</title>
        <!-- Bootstrap icons-->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
    </head>
    <body>
        <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!">Meme Store</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="/add-meme">Add Meme</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Header-->
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Meme Store</h1>
                </div>
            </div>
        </header>
        <!-- Section-->
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <!-- This will be you Meme template that you will use to dynamically render all Memes -->
                    <div class="col mb-5">
                        <div class="card h-100">
                            <!-- Meme image-->
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <!-- Meme details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Meme name-->
                                    <h5 class="fw-bolder">Fancy Meme</h5>
                                    <!-- Meme price-->
                                    $40.00
                                </div>
                            </div>
                            <!-- Meme actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Buy Meme</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Footer-->
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
        </footer>
    </body>
</html>
```

Now in our App.js lets render the EJS file we created for the index page.

```js
app.get("/",(req,res,next) => {
     res.render("index",{
         participants:participants
     })
 })
```
Let’s test this out!

Now visiting localhost:3000, you should be able to see this:

![homepage](/assets/homepage.png)

## Practice Time

### Requirments
1. Create a GET request that returns an EJS page that includes the form
2. Create the form needed to add new Meme
3. Handle POST request when the form is submited
4. Show the current memes that you have on the homepage

#### Part 0: GET `/add-memes`

- First you will need to create a new EJS file in the views folder and name it `add-memes.ejs`
for now we can have it empty
- Then in `app.js` create a GET request which listens to `/add-memes` end point and it should respond with the EJS file you created

#### Part 1: Creating the form

Okay so far so good, we now have another page to for our form, not its time to build it

- The form should have 3 fields, name,price and image link for the Meme.
- After the user submits the form a POST request should be sent to `/memes`


#### Part 2: POST `/memes`

Now it's time to handle the POST request we will recive from the form

- Using the request body push a new Meme to our `memes` array
- Redirect the user to our homepage `/`


#### Part 3: Dynamic rendering

We have all our Memes saved in the `memes` variable its time to send it with our index page
- Read about [adding variables to EJS templates](https://ncoughlin.com/posts/express-ejs-render-page-dynamic-content/#adding-variables-to-ej) 
- Using the example in the reading pass the `memes` variable to the template we have
- Iterate over the `memes` array and for each meme use the HTML template you have to insert the data

### Submission
1. Run `npm install` on the terminal to install the packages required to run submission tests.
2. Run `npm test` to verify your code before submission.