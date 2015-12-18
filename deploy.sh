#!/bin/bash

REPOSITORY=internal
VERSION=0.2.2

npm install
webpack
mkdir -p target
zip -r9 target/react-components.jar assets node_modules/css-loader styles
mvn deploy:deploy-file -Durl=http://maven.codemettle.com/content/repositories/${REPOSITORY}/ -DrepositoryId=${REPOSITORY} -Dfile=target/react-components.jar -DgroupId=org.webjars -DartifactId=react-components -Dversion=${VERSION} -Dpackaging=jar
