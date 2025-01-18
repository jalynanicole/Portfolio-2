If you want to make changes to your already deployed vercel website, all you have to do is update your github repository. When doing so please please please make sure you are in the right working directory (this is the folder with all your files - to double check if you are in the right spot - you should be able to do "npm install" without any errors!!!). From here just make sure the remote to your github repo is setup by doing:
```bash
git remote add origin https://github.com/** THIS IS WHERE YOUR GITHUB USERNAME GOES **/Architectural-Student-Portfolio-1.git
```
You can also find that link in your own github repo when you hit the nice and visible bright green "<> Code" button. If this code above gives an error, do git init then retype it.
After such just push your changes as so:
```bash
git add .
git commit -m "I made changes yes whahoo :)"
git push -u origin main
```
After this is all done just check your website to see if the changes you made were reflected there. THEY SHOULD BE!

Oh no, I get an error when doing "git push -u origin main". Well not to worry, first MAKE SURE YOU ARE IN THE RIGHT WORKING DIRECTORY, and then just force push your changes like so:
```bash
git push origin main --force
```
Just a heads up tho, this will completely replace your current directory in github with what ever was just located in your working directory (the github website stuff go bye bye and the VScode changes made take over). SO, first make sure your website is what you want it to be by viewing it locally by doing "npm run dev".

Oh no I get an error but I don't want to force push because I'm scared and am in love with my work. If this is the case run this code:
```bash
git branch backup-main
git push origin backup-main
```
And after this do
```bash
git checkout main
```
and follow the steps noted above. 

All my stuff got deleted thanks Jugs! This won't happen... if it does please don't be afraid to message John for further help (you can also message me I guess)!