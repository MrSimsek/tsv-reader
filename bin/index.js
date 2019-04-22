#!/usr/bin/env node

const _ = require("lodash");
const tsvReader = require('../lib/tsvReader');

const arguments = process.argv.splice(2);
const tsvFilename = _.head(arguments);

tsvReader.read(tsvFilename);