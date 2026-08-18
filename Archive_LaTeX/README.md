# LaTeX

This has the archival version of the LaTeX version of the instrumentation textbook. Note that it is outdated as of the date shown in the main.pdf file. Please use the PreTeXt versions for the most up to date version. Note that this archive version is here simply to shown continuity between one version and the next. 

One final comment, the archive folder called Figures/ has been moved to the PreTeXt parent folder called assets. This is to not bloat the repo with duplicate images. If you need to compile the archival version you must copy the assests folder to this dir and rename it to 'Folder'. Then you can proceed with the directions below.

The directions that follow assume you are running Ubuntu or similar linux and understand the command line.

# Directions to compile

If you want to compile the raw text files here's how to do that on Linux

If you have the space I strongly recommend you just run

$ sudo apt-get install texlive-full

No matter what you need biber and evince

$ sudo apt-get install biber

$ sudo apt-get install evince

If you don't have the space to install texlive-full you can do

$ sudo apt-get install texlive

which installs just the basic packages. If you want other packages you need to manually 
install said packages. Here's an example on installing enumitem.sty

First download the .sty
then run the following commands

$ cd /usr/local/share/texmf/

$ sudo mkdir tex

$ cd tex

$ sudo mkdir latex

$ cd latex

$ sudo mkdir enumitem

$ cd enumitem

$ sudo mv /path/to/download/enumitem.sty ./

$ sudo mktexlsr

That will manually install enumitem. Repeat as new package errors come up.

In this folder you will find tex2pdf which I created to make compiling texfiles a bit easier. Use that to compile the main tex files. 

./tex2pdf main.tex

if you need to use biber you will run 

./tex2pdf main.tex usebiber