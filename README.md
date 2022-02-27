# lilypads-toggle-sidebar
![javascript](https://img.shields.io/badge/javascript-ES6-brightgreen) ![grid](https://img.shields.io/badge/grid-1.0-brightgreen) ![css3](https://img.shields.io/badge/css-3.0-brightgreen) ![html5](https://img.shields.io/badge/html-5.0-brightgreen) ![svg](https://img.shields.io/badge/svg-1.1-brightgreen)


A light-weight reusable Js+Css toggle sidebar. 

<img src="./image/lilypads-toggle-sidebar.gif" width="300">

Everything is encapsulated in the following 3 namespaces. No name polusion will be introduced into your project. 
1. `lilypads-toggle-sidebar`
2. `lilypads-toggle-sidebar-container`
3. `lilypads-toggle-sidebar-main`

## Usage
Download and unzip the release `v1.0.zip` package, the following 3 files are required.
```
.
├── css
│   └── lilypads-toggle-sidebar.css
├── index.html
└── js
    └── lilypads-toggle-sidebar.js
```

You can work directly on `index.html` file, or craft your own page base on it.

To include the `lilypads-toggle-sidebar.js` into your own Javascript file, add these two lines,
```js
import { lilypadsToggleSidebar } from './js/lilypads-toggle-sidebar.js';
lilypadsToggleSidebar.init();
```

To import the `lilypads-toggle-sidebar.css`, 
```css
@import url('./css/lilypads-toggle-sidebar.css');
```

Happy coding!
