curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

\. "$HOME/.nvm/nvm.sh"

nvm install 24

node -v # Should print "v24.13.1".

npm -v # Should print "11.8.0".

sudo snap install code --classic

VS Code Extensions:

Code Spell Checker Color Highlight Color Picker Container Tools
Continue-open-source ES7+ React/Redux/React-Native snippets ESLint Figma for VS
Code Github Copilot Chat JavaScript (ES6) code snippets npm Intellisense Path
Intellisense Prettier - Code formatter Tailwind CSS IntelliSense

npx create-next-app@latest

npm install next@latest react@latest react-dom@latest eslint-config-next@latest

npx next upgrade

npm install --save-dev --save-exact prettier
