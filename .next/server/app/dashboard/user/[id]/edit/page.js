"use strict";
(() => {
var exports = {};
exports.id = 4930;
exports.ids = [4930];
exports.modules = {

/***/ 18038:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 98704:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 97897:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 56786:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 41844:
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 96624:
/***/ ((module) => {

module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 75281:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 57085:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 20199:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 39569:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 17160:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context");

/***/ }),

/***/ 30893:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 12336:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url");

/***/ }),

/***/ 17887:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 98735:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 60120:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url");

/***/ }),

/***/ 68231:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 53750:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 70982:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href");

/***/ }),

/***/ 79618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 78423:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 76224:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 19757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport safe */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_1__.GlobalError),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_2__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

    

    const tree = {
        children: [
        '',
        {
        children: [
        'dashboard',
        {
        children: [
        'user',
        {
        children: [
        '[id]',
        {
        children: [
        'edit',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 13702)), "/Users/xperia/Workspace/budgeting_fe-main/src/app/dashboard/user/[id]/edit/page.tsx"],
          
        }]
      },
        {
          
          
        }
      ]
      },
        {
          
          
        }
      ]
      },
        {
          
          
        }
      ]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 23909)), "/Users/xperia/Workspace/budgeting_fe-main/src/app/dashboard/layout.tsx"],
'loading': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 51404)), "/Users/xperia/Workspace/budgeting_fe-main/src/app/dashboard/loading.tsx"],
          
        }
      ]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 30838)), "/Users/xperia/Workspace/budgeting_fe-main/src/app/layout.tsx"],
'loading': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 88924)), "/Users/xperia/Workspace/budgeting_fe-main/src/app/loading.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 18275)), "/Users/xperia/Workspace/budgeting_fe-main/src/app/not-found.tsx"],
          
        }
      ]
      }.children;
    const pages = ["/Users/xperia/Workspace/budgeting_fe-main/src/app/dashboard/user/[id]/edit/page.tsx"];

    

    const originalPathname = "/dashboard/user/[id]/edit/page"
    const __next_app__ = {
      require: __webpack_require__,
      // all modules are in the entry chunk, so we never actually need to load chunks in webpack
      loadChunk: () => Promise.resolve()
    }

    

    // Create and export the route module that will be consumed.
    const options = {"definition":{"kind":"APP_PAGE","page":"/dashboard/user/[id]/edit/page","pathname":"/dashboard/user/[id]/edit","bundlePath":"app/dashboard/user/[id]/edit/page","filename":"","appPaths":[]}}
    const routeModule = new (next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default())({
      ...options,
      userland: {
        loaderTree: tree,
      },
    })
  

/***/ }),

/***/ 13702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ UserEditPage),
  generateStaticParams: () => (/* binding */ generateStaticParams),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/assets/data/index.ts + 1 modules
var data = __webpack_require__(61338);
// EXTERNAL MODULE: ./src/_mock/_mock.ts
var _mock = __webpack_require__(28672);
;// CONCATENATED MODULE: ./src/_mock/_user.ts
// assets

//

// ----------------------------------------------------------------------
const USER_STATUS_OPTIONS = [
    {
        value: "active",
        label: "Active"
    },
    {
        value: "pending",
        label: "Pending"
    },
    {
        value: "banned",
        label: "Banned"
    },
    {
        value: "rejected",
        label: "Rejected"
    }
];
const _userAbout = {
    id: _mock/* _mock */.Q.id(1),
    role: _mock/* _mock */.Q.role(1),
    email: _mock/* _mock */.Q.email(1),
    country: data/* countries */.h[1].label,
    school: _mock/* _mock */.Q.companyName(2),
    company: _mock/* _mock */.Q.companyName(1),
    coverUrl: _mock/* _mock */.Q.image.cover(3),
    totalFollowers: _mock/* _mock */.Q.number.nativeL(1),
    totalFollowing: _mock/* _mock */.Q.number.nativeL(2),
    quote: "Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer..",
    socialLinks: {
        facebook: `https://www.facebook.com/caitlyn.kerluke`,
        instagram: `https://www.instagram.com/caitlyn.kerluke`,
        linkedin: `https://www.linkedin.com/in/caitlyn.kerluke`,
        twitter: `https://www.twitter.com/caitlyn.kerluke`
    }
};
const _userFollowers = [
    ...Array(18)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        name: _mock/* _mock */.Q.fullName(index),
        country: data/* countries */.h[index + 1].label,
        avatarUrl: _mock/* _mock */.Q.image.avatar(index)
    }));
const _userFriends = [
    ...Array(18)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        role: _mock/* _mock */.Q.role(index),
        name: _mock/* _mock */.Q.fullName(index),
        avatarUrl: _mock/* _mock */.Q.image.avatar(index)
    }));
const _userGallery = [
    ...Array(12)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        postedAt: _mock/* _mock */.Q.time(index),
        title: _mock/* _mock */.Q.postTitle(index),
        imageUrl: _mock/* _mock */.Q.image.cover(index)
    }));
const _userFeeds = [
    ...Array(3)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        createdAt: _mock/* _mock */.Q.time(index),
        media: _mock/* _mock */.Q.image.travel(index + 1),
        message: _mock/* _mock */.Q.sentence(index),
        personLikes: [
            ...Array(20)
        ].map((__, personIndex)=>({
                name: _mock/* _mock */.Q.fullName(personIndex),
                avatarUrl: _mock/* _mock */.Q.image.avatar(personIndex + 2)
            })),
        comments: index === 2 && [] || [
            {
                id: _mock/* _mock */.Q.id(7),
                author: {
                    id: _mock/* _mock */.Q.id(8),
                    avatarUrl: _mock/* _mock */.Q.image.avatar(index + 5),
                    name: _mock/* _mock */.Q.fullName(index + 5)
                },
                createdAt: _mock/* _mock */.Q.time(2),
                message: "Praesent venenatis metus at"
            },
            {
                id: _mock/* _mock */.Q.id(9),
                author: {
                    id: _mock/* _mock */.Q.id(10),
                    avatarUrl: _mock/* _mock */.Q.image.avatar(index + 6),
                    name: _mock/* _mock */.Q.fullName(index + 6)
                },
                createdAt: _mock/* _mock */.Q.time(3),
                message: "Etiam rhoncus. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed lectus."
            }
        ]
    }));
const _userCards = [
    ...Array(21)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        role: _mock/* _mock */.Q.role(index),
        name: _mock/* _mock */.Q.fullName(index),
        coverUrl: _mock/* _mock */.Q.image.cover(index),
        avatarUrl: _mock/* _mock */.Q.image.avatar(index),
        totalFollowers: _mock/* _mock */.Q.number.nativeL(index),
        totalPosts: _mock/* _mock */.Q.number.nativeL(index + 2),
        totalFollowing: _mock/* _mock */.Q.number.nativeL(index + 1)
    }));
const _userPayment = [
    ...Array(3)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        cardNumber: [
            "**** **** **** 1234",
            "**** **** **** 5678",
            "**** **** **** 7878"
        ][index],
        cardType: [
            "mastercard",
            "visa",
            "visa"
        ][index],
        primary: index === 1
    }));
const _userAddressBook = [
    ...Array(4)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        primary: index === 0,
        name: _mock/* _mock */.Q.fullName(index),
        phoneNumber: _mock/* _mock */.Q.phoneNumber(index),
        fullAddress: _mock/* _mock */.Q.fullAddress(index),
        addressType: index === 0 && "Home" || "Office"
    }));
const _userInvoices = [
    ...Array(10)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        invoiceNumber: `INV-199${index}`,
        createdAt: _mock/* _mock */.Q.time(index),
        price: _mock/* _mock */.Q.number.price(index)
    }));
const _userPlans = [
    {
        subscription: "basic",
        price: 0,
        primary: false
    },
    {
        subscription: "starter",
        price: 4.99,
        primary: true
    },
    {
        subscription: "premium",
        price: 9.99,
        primary: false
    }
];
const _userList = [
    ...Array(20)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        zipCode: "85807",
        state: "Virginia",
        city: "Rancho Cordova",
        role: _mock/* _mock */.Q.role(index),
        email: _mock/* _mock */.Q.email(index),
        address: "908 Jack Locks",
        name: _mock/* _mock */.Q.fullName(index),
        isVerified: _mock/* _mock */.Q.boolean(index),
        company: _mock/* _mock */.Q.companyName(index),
        country: data/* countries */.h[index + 1].label,
        avatarUrl: _mock/* _mock */.Q.image.avatar(index),
        phoneNumber: _mock/* _mock */.Q.phoneNumber(index),
        status: index % 2 && "pending" || index % 3 && "banned" || index % 4 && "rejected" || "active"
    }));

// EXTERNAL MODULE: ./src/sections/user/view/index.ts + 5 modules
var view = __webpack_require__(94965);
;// CONCATENATED MODULE: ./src/app/dashboard/user/[id]/edit/page.tsx
// _mock


// sections

// ----------------------------------------------------------------------
const metadata = {
    title: "Dashboard: User Edit"
};
function UserEditPage({ params }) {
    const { id } = params;
    return /*#__PURE__*/ jsx_runtime_.jsx(view/* UserEditView */.cw, {
        id: id
    });
}
async function generateStaticParams() {
    return _userList.map((user)=>({
            id: user.id
        }));
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8071,6566,8111,1276,7782,6017,2870,9177,413,4724,449,8079,6267,569,4622,8897,298,2865,5915,6856,2153,9198,9882,5689,9428,9215,640,9189,3138,2774], () => (__webpack_exec__(19757)));
module.exports = __webpack_exports__;

})();