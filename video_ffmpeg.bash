# Va créer une nouvelle version de chaque .mov dans le dossier
# En laissant les originaux intacts
for i in *.(mov|MOV);          
  do name=`echo "${i}"`
  cleanedName=$(echo "$i" | cut -f 1 -d '.')
  echo ${cleanedName}
  ffmpeg -i $name ${cleanedName}Trimmed.mov
done

# Pour une test run, voir quels fichiers vont se faire process
for i in *.(mov|MOV);          
  do name=`echo "${i}"`
  echo $name
done
