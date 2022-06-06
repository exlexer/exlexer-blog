"use strict";
exports.id = 444;
exports.ids = [444];
exports.modules = {

/***/ 5108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/layout.js


function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col min-h-screen",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("header", {
                className: "bg-fuchsia-100 mb-8 py-4",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container mx-auto flex justify-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/",
                            children: "Home"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            className: "mx-auto",
                            children: "Welcome to my blog!"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                className: "container mx-auto flex-1",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime.jsx("footer", {
                className: "bg-fuchsia-100 mt-8 py-4",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container mx-auto flex justify-center",
                    children: [
                        "\xa9 ",
                        new Date().getFullYear()
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 7020:
/***/ ((module) => {

module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-5cd94c89d3acac5f.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/vQrU7ix9aUhSwM60jOBSs/_buildManifest.js","static/vQrU7ix9aUhSwM60jOBSs/_ssgManifest.js","static/vQrU7ix9aUhSwM60jOBSs/_middlewareManifest.js"],"pages":{"/":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-1f10003e17636e37.js","static/chunks/main-fc7d2f0e2098927e.js","static/chunks/pages/index-d3c205c7168c7905.js"],"/_app":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-1f10003e17636e37.js","static/chunks/main-fc7d2f0e2098927e.js","static/css/b06cf8ed4f906744.css","static/chunks/pages/_app-0f02310448daf783.js"],"/_error":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-1f10003e17636e37.js","static/chunks/main-fc7d2f0e2098927e.js","static/chunks/pages/_error-0a004b8b8498208d.js"],"/post/[slug]":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-1f10003e17636e37.js","static/chunks/main-fc7d2f0e2098927e.js","static/chunks/980-588d6e945245e8ad.js","static/chunks/pages/post/[slug]-dfa0dcdda2efdcfd.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 3978:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 9450:
/***/ ((module) => {

module.exports = {"Dg":[]};

/***/ })

};
;