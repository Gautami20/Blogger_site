import express from "express";
import fs from 'fs' ;

const app= express();
const port=3000;
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))

let posts = [];

try {
    if (fs.existsSync('posts.json')) {
        const data = fs.readFileSync('posts.json', 'utf-8');
        if (data) {
            posts = JSON.parse(data);
        }
    }
} catch (error) {
    console.error('Error reading posts.json:', error);
}

app.get('/',(req,res)=>{
    res.render("index.ejs", { posts: posts });
})
app.get('/about', (req, res) => {
    res.render("about.ejs");
})
app.get('/update/:id', (req, res) => {
    const postId= req.params.id;
    // The find() method returns the value of the first element that passes a test.
    const post = posts.find(p=> p.id === postId);
    res.render("update.ejs", {post: post});
})
app.post('/update/:id', (req, res) => {
    const postId= req.params.id;
    // A function to execute for each element in the array.The index of the first element in the array that passes the test.Otherwise, -1.
    const postIndex = posts.findIndex(p=> p.id === postId);
    posts[postIndex]={id:postId, title: req.body.title, content: req.body.content};
    res.redirect("/");
})
app.get('/newBlog', (req, res) => {
    res.render("newBlog.ejs");
})
app.post('/newBlog', (req, res) => {
    const post = {
        id: Date.now().toString(),
        title: req.body.title,
        content: req.body.content
    };
    posts.push(post);
    res.redirect('/');
});

app.post('/delete/:id',(req,res)=>{
    const postId = req.params.id;
    posts = posts.filter(p=> p.id !== postId);
    res.redirect('/')
})


process.on('SIGINT', () => {
    fs.writeFileSync('posts.json', JSON.stringify(posts));
});

app.listen(port ,()=>{
    console.log(`Listening to port ${port}`)
} )