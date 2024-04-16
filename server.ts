const express = require("express");
const fs = require("fs")
const path = require("path")
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.listen(PORT, () => {
    console.log(`Server now listening on ${PORT}.`);
  });