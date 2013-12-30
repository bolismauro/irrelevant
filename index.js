/*jshint node:true, indent:2, laxcomma:true, eqnull:true */

'use strict';

require('sugar');

var _chunckArray = function _chunkArray(array, chunkSize) {
  return [].concat.apply([],
    array.map(function(elem,i) {
      return i%chunkSize ? [] : [array.slice(i,i+chunkSize)];
    })
  );
}

module.exports.encode = function _encode(message_, book, return_array) {
  var pars = book.toLowerCase().split(/\n\n/g)
    , W = message_.remove(/[^a-z]/ig).toLowerCase().split('')
    , enc = []
    ;
    
  enc = W.map(function (c) {
    var found = false
      , found_index = -1
      , par_index = 0
      , word_index = -1
      ;
    
    while (!found) {
      word_index = -1;
      par_index = Number.random(0, pars.length - 1);
      
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
  
  
  // console.log('-> book has ' + pars.length + ' paragraphs.');
  // console.log('-> first paragraph begins with ' + pars[0].trim().substr(0, 20) + '...');
  // console.log('-> encoding word', W);
  // console.log('-> encoded word', enc);
  
  if (return_array) {
    return enc;
    
  } else {
    enc = enc.map(function (row) { return row.join(' '); }).join(' ');
    return enc;
  }
}


module.exports.decode = function _decode(cipher, book) {
  var pars = book.toLowerCase().split(/\n\n/g)
    , W = _chunckArray(cipher.replace(/\s+/g, '').split(''), 3)
    , message
    ;

  
  message = W.map(function (c) {
    var par
      , word
      ;

    try {
    
      par =  pars[c[0]-2];
      word  = par.words()[c[1]-1];      
      return word.charAt(c[2]-1);
    
    } catch (e) {
      // console.log('Error while decrypting', c)
      return '';
    }

  }).join('');

  return message;
}
