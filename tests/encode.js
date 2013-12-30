/*jshint node:true, indent:2, laxcomma:true, eqnull:true */

'use strict';

var irrelevant = require('../')
	, fs = require('fs')
	;

var book = fs.readFileSync('book.txt', { encoding: 'utf8' });

console.log(irrelevant.encode('Prisco', book));
