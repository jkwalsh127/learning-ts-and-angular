
// style.bundle.js shown in the cli bundles is only 10.5kb, because styls are initially so sparse
// npm install bootstrap --save
// this downloads and saves bootstrap into the node modules, while the --save flag adds bootstrap as a dependency in the package.json
// ^x.x.x (major.minor.patch)
// the carrat means we can use the most recent major version, the one at the beginning of the string
// next, import the styles into styles.css by adding:
// "@import "~bootstrap/dist.css.bootstrap.css""
// Then, in compomonents where you want to use bootstrap elements/styling, do so as normal in the template
// You will see the size of the style.bundle.js grow