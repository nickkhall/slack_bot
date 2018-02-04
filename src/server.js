#!/usr/local/bin/node

import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.listen(3000);

console.log(`Express server running on port ${port}`);
