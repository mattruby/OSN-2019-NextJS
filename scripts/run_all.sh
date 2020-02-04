#!/bin/bash
#
# compiles all style sheets as needed.
#

projects=("00-demoServer"
    "02-singlePage"
"03-00-next"
"04-00-loadData"
"04-01-loadData"
"04-02-loadData-slug"
"04-03-loadData-slug-ssr"
"05-01-slowitdown"
"05-02-slowitdown-app"
"05-03-slowitdown-fix"
"05-04-slowitdown-fix-adv"
"06-01-analytics")


# clean folders
echo 'run all projects'

for project in "${projects[@]}"; do
    echo 'running bs ' ${project}
    (cd ${project}/ && yarn bs) &
done

wait
echo 'All running'