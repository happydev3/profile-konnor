const express = require('express');
var app = require('express')();
app.use(express.static('app'));
app.listen(process.env.PORT?process.env.PORT:3000);