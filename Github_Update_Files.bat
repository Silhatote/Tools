@ECHO OFF
git add --all
cls
git commit --amend --no-edit
cls
git push -f origin master
pause