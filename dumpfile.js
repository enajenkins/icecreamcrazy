  "devDependencies": {
    "autoprefixer": "^6.3.6",
    "backbone": "^1.3.3",
    "browser-sync": "^2.12.8",
    "browserify": "^11.2.0",
    "eslint": "^2.10.2",
    "eslint-config-standard": "^5.3.1",
    "eslint-plugin-promise": "^1.3.0",
    "eslint-plugin-standard": "^1.3.2",
    "font-awesome": "^4.6.3",
    "imagemin-cli": "^3.0.0",
    "jquery": "^3.1.0",
    "livereload": "^0.5.0",
    "node-sass": "^3.7.0",
    "npm-run-all": "^2.1.1",
    "onchange": "^2.4.0",
    "postcss-cli": "^2.5.2",
    "semver": "^5.3.0",
    "uglify-js": "^2.6.2",
    "underscore": "^1.8.3",
    "watchify": "^3.7.0"
  }







    "lint": "eslint app/scripts/main.js",
    "uglify": "uglifyjs --compress --mangle -- app/scripts/main.js -o public/js/main.js",
    "clean": "rm -r dist/*",



    "js": "echo \"JS tasks\"",
    "prejs": "npm run lint",
    "postjs": "npm run watch:js",
    "watch:js": "watchify app/scripts/*.js -o public/js/main.js -dv",



    "css": "node-sass --output-style nested --indent-type space --indent-width 2 -o public/css/ app/styles/sass/*.scss",
    "precss": "echo \"Tasks to run before css is compiled\" ",
    "postcss": "postcss -u autoprefixer -r public/css/* && npm run watch:css",
    "watch:css": "node-sass -w app/styles/sass/*.scss",



    "start": "node index.js",
    "start:dev": "node index.js 4000",
    "stop": "\"Running stop scripts\"",
    "restart": "\"Running restart scripts\"",
    "watch": "npm run watch:js && npm run watch:css",
    "build": "npm run css && npm run js",
    "dev": "npm run build && npm run watch && npm run start"



    "copy:images": "cp -R app/assets/img/ public/assets/img/",
    "copy:fonts": "cp -R app/assets/fonts/ public/assets/fonts/",
    "copy:video": "cp -R app/assets/video/ public/assets/video/",
    "copy": "npm run copy:images && npm run copy:fonts && npm run copy:video",
