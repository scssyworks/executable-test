#!/usr/bin/env node

const fs = require('fs-extra');
const currDir = process.cwd();

fs.copySync(`${__dirname}/someFolder`, `${currDir}/someFolder`);