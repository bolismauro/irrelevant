/*jshint node:true, indent:2, laxcomma:true, eqnull:true */

'use strict';

require('sugar');
var Q = require('Q')
  , fs = require('q-io/fs')
  ;

var W = 'prisco';

Q.longStackSupport = true;
Q.spawn(function *() {
  var contents = yield fs.read('book/book.txt')
    , pars = contents.split(/\n\n/g)
    , avgwords = pars.map(function (p) { return p.split(/\s+/g).length; }).average()
    , enc = []
    ;
  
  contents = contents.toLowerCase();
  
  enc = W.split('').map(function (c) {
    var found = false
      , found_index = -1
      , par_index = 0
      , par_start_index = 0
      , word_index = -1
      ;
    
    while (!found) {
      word_index = -1;
      par_index = Number.random(0, pars.length - 1);
      par_start_index = Number.random(0, pars[par_index].length - 1);
      
      pars[par_index].words(function (word, word_index_) {
        if (word_index !== -1) { return; }
        
        if (word.indexOf(c) !== -1) {
          word_index = word_index_;
          found_index = word.indexOf(c);
        }
      });
      
      if (found_index !== -1) {
        found = true;
        return [par_index + 1, word_index + 1, found_index + 1];
      }
    }
  });
  
  enc = enc.map(function (row) { return row.join(','); }).join(',');
  
  console.log('-> book has ' + pars.length + ' paragraphs with an average of ' + avgwords + ' words each.');
  console.log('-> first paragraph begins with ' + pars[0].trim().substr(0, 20) + '...');
  console.log('-> encoding word', W);
  console.log('-> encoded word', enc);
});


