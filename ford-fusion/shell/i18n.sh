#!/bin/bash

#https://learn.microsoft.com/en-us/openspecs/office_standards/ms-oe376/6c085406-a698-4e12-9d4d-c3b0ee3dbc4a


#https://angular.io/cli/extract-i18n
cd ..
ng extract-i18n ford-fusion --progress=true --output-path src/locale --format=xlf --out-file locale.ru-MD.xlf
cp -v ../src/locale/locale.ru-MD.xlf ../src/locale/locale.ro-MD.xlf
#ng extract-i18n ford-fusion --progress=true --output-path src/locale --format=xlf2
#ng extract-i18n ford-fusion --progress=true --output-path src/locale --format=xmb
#ng extract-i18n ford-fusion --progress=true --output-path src/locale --format=json --out-file locale.json
#ng extract-i18n ford-fusion --progress=true --output-path src/locale --format=arb
cd shell
