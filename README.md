irrelevant [![NPM version](https://badge.fury.io/js/irrelevant.png)](http://badge.fury.io/js/irrelevant)  
==========

Encrypts strings with books.

## What?

Like the *Person of Interest*'s machine does, but for folks without an in-house personal library.

Any lowercase-ASCII string can be converted to a numbers sequence, such as: 
`4 4 1 5 3 3 4 4 5 5 2 6 2 1 1 6 1 2`.

Assuming that the recipient has the knowledge of which book (text) has been used, he can decode the message: the first character of the messages is the `1`st character of the `4`th word of the `4`th paragraph, and so on.

There's no guarantee that multiple calls will provide the same encrypted message (and they won't).


## Installation

[![NPM](https://nodei.co/npm/irrelevant.png?compact=true)](https://nodei.co/npm/irrelevant/)


## Usage

See `tests/`.


## Why?

Just for fun.


## License (MIT)

Copyright (c) 2013 Simone Lusenti <simone@plasticpanda.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

