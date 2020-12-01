# va convertir tout les fichiers .jpg dans le dossier
# EN ÉCRASANT LES ORIGINAUX
sips -Z 5120 *.(JPG|jpg)
sips -Z 2560 *.(JPG|jpg)
sips -Z 1280 *.(JPG|jpg)
...

for i in *.(jpg|JPG);
  sips -Z 5120 *.(JPG|jpg)
done

# Pour resize en se basant sur le pourcentage original des fichiers, quelque chose comme ça:
for i in *.(jpg|JPG);
  do 
  echo "${i}" 
  height=`sips --getProperty pixelHeight ${i} | sed -E "s/.*pixelHeight: ([0-9]+)/\1/g" | tail -1`
  width=`sips --getProperty pixelWidth ${i} | sed -E "s/.*pixelWidth: ([0-9]+)/\1/g" | tail -1`
  echo $width
  echo $height
  sips -Z $(( width*75/100 )) $i
  # if [[ $height -gt 500 || $width -gt 500 ]]; then
  #   growlnotify -m "large file needs reducing"
  # fi
done

