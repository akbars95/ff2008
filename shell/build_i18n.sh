#!/bin/bash

cd ..
#ng build --output-path for_publish
ng build --localize
ng serve --port 4300 ./dist/ford-fusion/
cd shell
