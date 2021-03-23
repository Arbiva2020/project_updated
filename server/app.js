//the server definitions:
const express = require("express");
const cors = require("cors");
const itemsRoutes = require("./routes/items"); //for routing
const productsRoutes = require("./routes/products"); //for routing
const blogsRoutes = require("./routes/blogs"); //for routing
const usersRoutes = require("./routes/users"); //for routing
const app = express(); //for running the server
const path = require("path");
//in order to run the server we use express:
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3001;

//calling all paths:
app.use("/items", itemsRoutes);

app.use("/products/search", productsRoutes);

app.use("/blogs", blogsRoutes);
app.use("/users", blogsRoutes);

//the server we listen to:
app.listen(PORT, () => console.log("server is runing..."));
