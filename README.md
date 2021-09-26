# Hello world Express.Js
In this Lab we will create a hello world Express application where we utalize the usage of EJS view template engine. The objectives of this lesson are:
1. Understanding how to use EJS with express
2. Practicing GET and POST requests
3. Understanding the difference between static and dynamic pages

## What is EJS?

EJS (along with all the other competing template engines) allows you to generate full-blown HTML pages which certainly enables a "proper front-end".

EJS is a tool for generating web pages that can include dynamic data and can share templated pieces with other web pages (such as common headers/footers). It is not a front-end framework. While EJS can be used by client-side Javascript to generate HTML on the client-side, it is more typically used by your back-end to generate web pages in response to some URL request. EJS is not a client-side framework like Angular or React and does not dictate what client-side framework you do or don't use (if any). It is mostly covers a separate solution space.

Now looking at your app.js, u will find our first Node.js application that we wrote together, it's time to update this to an Express.js application!

## Installing necessary packages

Looking at our package.json we will see that there's some packages already included here all we have to do is to run ```npm install``` in order to install the listed packages

the packages that we will use are as follows:
Express.JS, EJS, and nodemon

Until now we are familiar with what Express and EJS do. 
As for the Nodemon packge: Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.

## Initializing our Express app

Let's start with clearing our ```app.js``` and writing these lines of code.
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

>insert home page pjs code

Now in our App.js lets render the EJS file we created for the index page.

```
app.
get("/",(req,res,next) => {
     res.render("index",{
         participants:participants
     })
 })
```
Let’s test this out!

Now visiting localhost:3000, you should be Abe to see this:

>insert image for home page picture

Okay so far so good, next we need to create another page which includes a form that will allow users to add new memes,
Lets start with creating the ejs file for the page

>insert ejs code for form
 
And in our app.js we will add the methods that will handle the requests and create an empty array to hold the memes data for us so every time a user fills the form we will be pushing to this array
```
const memes= []

app.get("/add-memes-form",(req,res,next) => {
     res.render("participantform”);
 })


app.post(“/memes” ,(req,res,next) => {
     const newMemeData = req.body;
    memes.push(newMemeData);
     res.redirect(“/“);
 })
```
Next step we will have to change our index.ejs to use our memes variable to show it in the home page.

>insert updated ejs code for index.ejs

EJS allows to write js code in order for our page to be dynamic and changes depending our specific variables.