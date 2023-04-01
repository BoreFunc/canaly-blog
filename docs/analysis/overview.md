# Overview

CAJ files are proprietary file formats, so the only way to parse them is to reverse engineer them. (Well you can guess if you're lucky, but that's not the case here.)
The lucky thing is that with the help of modern technologies, we can do this a lot easier than before.

## What is CAJ?
CAJ, or Chinese Academic Journal, is widely used to store articles, books, and other documents. 
First, a clarification: CAJ is not a file format, but a set of file formats, the most common of which is CAJ.

## How to reverse engineer CAJ?
1. Reverse engineer the file format itself. 
2. Analyze the `libreaderex`, a proprietary library used to parse CAJ files.
Most information about CAJ is based on the analysis of `libreaderex`.
In these posts, you'll see how we do this. 