# Download whole website
# Create and cd into a new folder than run the command
# based on https://www.linuxjournal.com/content/downloading-entire-web-site-wget
mkdir old && cd old

wget -E -H -k -K -p --recursive --domains noltonlake.com http://www.noltonlake.com

# # # # # # # # # # # # # # # # # # 
# Basic Bash
# # # # # # # # # # # # # # # # # # 
# print all files recursively with particular extension
find . -name "*.orig" -type f

# add -delete command at the end to delete them
find . -name "*.orig" -type f -delete
