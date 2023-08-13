#!/bin/bash

cd ..
#ng build --output-path for_publish
ng build --configuration production --base-href "./ford_fusion_2008" --progress --output-path ./forPublish --verbose
cd shell
