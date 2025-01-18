## PLEASE PLEASE MAKE SURE YOU ARE IN THE RIGHT WORKING DIRECTORY WHEN DOING ANYTHING IN THE TERMINAL FOR VSCODE!!!

This can be easily tested by doing:
```bash
ls
```
If, after running this command, you only see 1 or 2 files, you are NOT in your current working directory
If this is the case, please do: (NOTE: I am not refering to the package.lock.json file below)
```bash
cd <the-name-of-the-folder-you-saw-when-doing-ls>
```
After doing so, when you do ls, you should see reflected all the files/folders that you can see on the left side of your window.
Another check that you are in the right place is doing:
```bash
npm install
```
If this raises an error, you are NOT in your current working directory.

If you have any more questions about this please don't be afraid to ask. We are here to help!