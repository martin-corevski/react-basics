# React basics

React 16 basic setup with react router, Webpack 4 and additional standard linter installed with babel-eslint parser.
- **Comp1** as an example of component with 'ref' and PropTypes usage examples.
- **Comp2** as an example of component with route parameters.
- **Comp3** as an example of component making use of higher order components.
- **MultipleComps4** and **Comp4** are an example of creating a list of components.
- **ErrorBoundary** and **ErrorComp** present a way of error generation and handling.
- The **Counter** component explains the usage of conditional rendering.

---
## Packages installed

  - In-depth explanation in the [wiki]

---
## Install dependencies

```
cd path-to-your-project
npm install
```

### Additional install

```
npm i -g ntl
```

- By running **ntl** you can choose which script to run. For example **start**, **build**, **build:prod** and **watch** will be some of the choices. All of these scripts are in the `package.json` file in the scripts object.
- Command to start **ntl** and choose an option
```
ntl
```

### Without ntl

If you don't want to use ntl you can use the `npm run` command with the chosen script, examples:
- For development bundle
```
npm run build
```
- For production ready bundle
```
npm run build:prod
```
- For development server
```
npm run start
```
- For Webpack watch
```
npm run watch
```

---

# Resources used

## Official docs

- [react]

## YouTube

- [LearnCode.academy]

## Medium

- [react-fundamentals]

---
License
---

MIT

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


[wiki]: <https://github.com/martin-corevski/react-basics/wiki/DIY-repository-setup>
[react]: <https://reactjs.org/docs/hello-world.html>
[LearnCode.academy]: <https://www.youtube.com/watch?v=MhkGQAoc7bc&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b>
[react-fundamentals]: <https://medium.freecodecamp.org/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2>
