npm install react-html5video --save
npm start

*Ошибка ESLint: TypeError: this.libOptions.parse is not a function
Добавляем в dependencies:
    "eslint": "8.22.0"
Удаляем node_modules
Удаляем package-lock.json
npm install