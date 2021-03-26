#!/bin/bash

#defaults
extension="ts"
tsType=": FC"
#Red error
ERROR="\x1B[31mERROR\x1B[0m"
inFolder='\t\t \xE1\xB4\xB8'

function askcmd() {
  while read -r -n 1 answer; do
    if [[ $answer = [YyNn] ]]; then
      [[ $answer = [Yy] ]] && retval=true
      [[ $answer = [Nn] ]] && retval=false
      break
    fi
  done
  echo $retval
}

function enterComponentName() {
  successFlag=false
  while [ "$successFlag" == false ]; do
    read -p "Enter component name: " name
    if [ -z "$name" ]; then
      echo -e "$ERROR: Missed component name!" >&2
    elif [ -e $name ]; then
      echo -e "$ERROR: '$name' component already exists! Choose another name" >&2
    else
      successFlag=true
    fi
  done
  echo $name
}

#CLI
read -e -p "Enter path to your component folder: " path
componentName=$(enterComponentName)
echo -n "Do you want to create a test file (Y/N)? "
testFlag=$(askcmd)
echo ''

#First letter to upper case
componentName="$(tr a-z A-Z <<< ${componentName:0:1})${componentName:1}"

#fill templates with variables above
ComponentTemplate=$"import React, { FC } from 'react';\n\nimport {} from './$componentName.styles';\nimport { ${componentName}Props } from './$componentName.types';\n\nconst
${componentName}${tsType}<${componentName}Props> = () => {\n\treturn <div />;\n};\n\nexport default $componentName;"

indexTemplate=$"import $componentName from './$componentName';\n\nexport default $componentName;"

testTemplate=$"import React from 'react';\nimport ReactDOM from 'react-dom'\nimport $componentName from './$componentName'
\n\nit('renders without crashes', () => {\n  const div = document.createElement('div');
\n  ReactDOM.render(<$componentName />, div);\n  ReactDOM.unmountComponentAtNode(div);\n});"

typeTemplate=$"export type ${componentName}Props = {};\n"

stylesTemplate=$"import styled from 'styled-components';"

if [ ! -z "$path" ]; then
  cd $path
fi

echo "Create component $componentName"
mkdir $componentName
cd $componentName
echo "Created files in $path/$componentName:"
echo -e $indexTemplate >> index.$extension
echo -e ${inFolder}index.$extension
echo -e $ComponentTemplate >> $componentName.${extension}x
echo -e ${inFolder}$componentName.${extension}x
echo -e $stylesTemplate >> $componentName.styles.ts
echo -e ${inFolder}$componentName.styles.ts
echo -e $typeTemplate >> $componentName.types.ts
echo -e ${inFolder}$componentName.test.ts

if [ "$testFlag" = true ]; then
  echo -e $testTemplate >> $componentName.test.ts
  echo -e ${inFolder}$componentName.test.ts
fi

echo -e "\x1B[32mDone\x1B[0m"
