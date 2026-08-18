# Aerospace Mechanics and Controls Textbook in PreTeXt

This repo contains my aerospace mechanics and controls textbook for CubeSats, quadcopters, aircraft and other aerospace vehicles. 

PDF: This is the main.pdf file in the root directory

WEB: https://cmontalvo251.github.io/aerospace-mechanics-controls/

The Archive LaTeX version of this textbook is in the Archive/ folder with a separate readme that you can use to compile that version of the textbook. I don't recommend using that version because it is significantly outdated as this point but it is here for thoroughness as it was used to convert to the current version of PreTeXt shown here. All LaTeX directions are in that readme and left out of this readme for brevity. 

# LaTeX Pre-requisites

It is assumed that you have all latex compilers on your computer and are well versed in LaTeX before continuing on with this readme. Again LaTeX directions are in the Archive folder.

I also failed to mention that at the time of this writing I am using PreTeXt on Ubuntu 24.04. Thus the directions below are shown for that OS with terminal commands all presented on a separate line.

# First install pretext

pip3 install pretext

If this gives you an error about breaking system packages go ahead and do that

pip3 install pretext --break-system-packages

If you ever need to upgrade type

pip3 install pretext --upgrade

If you ever want to install a nightly build run 

pip3 install pretext --upgrade --pre

and then run 

pretext update

to update all of your manifest files

# Bashrc

Then open ~/.bashrc and add the following line of code

PATH+=':~/.local/bin'

this way your terminal can find pretext

# Pretext Tools

Oscar Levin has created a 'pretext-tools' in vs code so grab that from the exta tab

<!--This is how you make a comment in PreTeXt -->

# VS Code Errors

VS Code by default thinks that pretext is an XML format which it is but it's subtely different. In order to turn those errors off type

CTRL+SHIFT+P

then type

Preferences: Open User Settings (JSON)

and copy the two lines of code below

"xml.validation.enabled": false,

"xml.symbols.enabled": true

# Pretext new

It's a much better idea to run 'pretext new' to create a new project but read this whole paragraph befor hap-hazardly running that command

You can try 'pretext init' to update an existing project but better to just start from scratch.

Running 'pretext new' defaults to 'pretext new book' and creates a new project

This creates all the req*.txt and project.ptx files as well as a bunch of stuff in source

Note that this also creates its own .git folder so if you're already in an existing repo make sure you delete that folder to preserve the old git url. My recommendation is to copy the old .git to .git-backup, running 'pretext new' and then clean everything up afterwards.

# PDF

Running 'pretext build pdf' will compile your project into a pdf. 

You can also run 'pretext build print' and it will do the same thing

Note that if you want to generate the raw tex file you need to add

<target name="latex" format="latex" />

To the publication.ptx file 

# HTML

Running 'pretext build html' will build your project into an html file.

you can also run pretext build web and it will do the same thing

but you need npm first so run 'sudo apt install npm'

You may need to run 'sudo apt update' and 'sudo apt upgrade' first of course

'pretext view html' will open your newly created html or 'pretext view web'

Alternatively you can open the index.html file in the 

'output/web' folder and it will open in your default web browser

I personally just like to run google-chrome index.html from the command line.

Much of this has been automated in the textit.sh script which is also in this folder

# Deploy

In order to deploy you need to have your project.ptx file in the root dir

This means you need to edit the project.ptx file and then move it to the root dir
You'll see that there are a number of directions in the project.ptx file so it's pretty
straightforward. Note however that Dr. Levin suggests that each book have its own
repo. 

If this is your first time deploying it you can just run the command below, if not make
sure to run 'git fetch origin' to pull down the gh-pages branch

The command itself is 'pretext deploy' which will output a bunch of stuff like this

To enable GitHub Pages, visit 
    https://github.com/cmontalvo251/aerospace-mechanics-controls/settings/pages
selecting the `gh-pages` branch with the `/ (root)` folder.

First, no need to "enable". Once you run pretext deploy you'll be able see in the settings/pages tab that your book is already deployed.

Visit
    https://github.com/cmontalvo251/aerospace-mechanics-controls/actions/
to check on the status of your GitHub Pages deployment.

^This is a neat site which will show whether or not your book is deployed yet. For small projects like what I'm doing it is really quick.

Your built project will soon be available to the public at:
    https://cmontalvo251.github.io/aerospace-mechanics-controls/

When looking at the settings/pages tab you'll see that the book is indeed live
at the URL above.

# Conversion

Note that it is fairly straightforward to convert LaTeX (.tex) files to PreTeXt (.ptx) and can be done manaully is desired; however, it is also possible to download a convert tool made by David Farmer. The tool can be found on github - https://github.com/davidfarmer/SL3X. A simple git clone will pull down all the necessary files

git clone https://github.com/davidfarmer/SL3X.git just make sure to add SL3X to your gitignore files unless you want the current copy backed up on your own repo. Inside the SL3X directory is the file sl3x.py

You simply need to invoke the command

./sl3x.py inputfile.tex outputdirectory/ -t ptx

That will convert the LaTeX file in inputfile.tex and convert it to PreTeXt (.ptx) and put it in the outputdirectory

# Textit

In order to speed things up a bit and help with the flow

I have created a simple bash script called texit.sh which will compile the 
ptx files into a pdf and then copy the pdf to the root directory so it's easy to find
It will also evince the document so you can view it immediately. 
It will also compile the ptx files for the web and then view it in the browser.
It will not deploy the book as that is cloud based and I feel it is similar to git 
and should be something done by the user rather than an automated process.

Note you need pdftk so make sure to run

sudo apt install pdftk

before running this script

The script also defaults to opening the web version using google-chrome
so make sure you have google-chrome installed

# Help

If you need more help with PreTeXt be sure to check out the guide made by some other pretext users

https://pretextbook.org/doc/guide/html/guide.html