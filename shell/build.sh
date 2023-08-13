#!/bin/bash

cd ..
#ng build --output-path for_publish
echo '----------------remove docs folder'
rm -rfv ./docs
echo '------------------finish'
ng build --configuration production --base-href "./ford_fusion_2008" --progress --output-path ./docs --verbose
#ng build --configuration production --progress --output-path ./docs --verbose
cd shell
