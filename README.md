# Blog Web Application

This blog web application is built using Node.js, Express.js, and EJS. The application allows users to create, view, update, and delete blog posts. Posts are stored in a JSON file (`posts.json`) and will not persist between server restarts if this file is deleted or altered.

## Features

- **Create Post**: Users can create new blog posts.
- **View Posts**: Users can view all blog posts on the home page.
- **Update Post**: Users can edit existing blog posts.
- **Delete Post**: Users can delete blog posts.

## Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

## Installation

### 1. Clone the repository:
```sh
   git clone https://github.com/Gautami20/blogger_site.git
   cd blogger_site
```
### 2.Install the dependncies:
```sh
  npm install
```
## Running the Application
**1. Start the server:**
```sh
node index.js
```
OR if nodemon is installed
```sh
nodemon index.js
```
**2. Open your browser and navigate to:**
```sh
http://localhost:3000
```
## Usage
- **Home Page:** Displays all blog posts. Each post has options to edit or delete.
- **Create New Post:** Navigate to /new to create a new blog post.
- **Edit Post:** Navigate to /edit/:id to edit an existing blog post (replace :id with the actual post ID).
- **Delete Post:** Click the "Delete" button on a post to remove it.
## Saving Posts
**Posts are saved in the posts.json file. When the server is stopped (e.g., by pressing Ctrl+C), the posts are saved to this file.**

## Example
*To create your first post, navigate to http://localhost:3000/new and fill out the form. Your post will appear on the home page.*
