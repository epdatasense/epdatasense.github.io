@echo off
cd ..
for %%i in (*.*) do del "%%i" /q
for /d %%i in (*.*) do if not "%%i"==".git" if not "%%i"=="_code" rd /S /Q "%%i"
cd _code
harp compile site ..\
