# # # # # # # # # # # # # # # # # # 
# Basic Bash
# # # # # # # # # # # # # # # # # # 
# print all files recursively with extension .orig
find . -name "*.orig" -type f

# add -delete command at the end to delete them
find . -name "*.orig" -type f -delete