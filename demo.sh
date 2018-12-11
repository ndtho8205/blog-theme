#!/bin/bash

echo -e "\033[0;32mRunning demo...\033[0m"

cd exampleSite && hugo server --themesDir ../.. --theme blog-theme
