# Download whole website
# Create and cd into a new folder than run the command
# based on https://www.linuxjournal.com/content/downloading-entire-web-site-wget
mkdir old && cd old
wget -E -H -k -K -p --recursive --domains paradis2019.org http://www.paradis2019.org
