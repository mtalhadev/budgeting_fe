"use strict";
exports.id = 5612;
exports.ids = [5612];
exports.modules = {

/***/ 45612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a1: () => (/* reexport */ AuthGuard),
  Ak: () => (/* reexport */ GuestGuard),
  jx: () => (/* reexport */ RoleBasedGuard)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/routes/paths.ts
var paths = __webpack_require__(48611);
// EXTERNAL MODULE: ./src/routes/hooks/index.ts + 4 modules
var hooks = __webpack_require__(89539);
// EXTERNAL MODULE: ./src/auth/hooks/index.ts + 1 modules
var auth_hooks = __webpack_require__(40529);
;// CONCATENATED MODULE: ./src/auth/guard/auth-guard.tsx


// routes


//

// ----------------------------------------------------------------------
const loginPaths = {
    jwt: paths/* paths */.H.auth.jwt.login,
    auth0: paths/* paths */.H.auth.auth0.login,
    amplify: paths/* paths */.H.auth.amplify.login,
    firebase: paths/* paths */.H.auth.firebase.login
};
function AuthGuard({ children }) {
    const router = (0,hooks/* useRouter */.tv)();
    const { authenticated, method } = (0,auth_hooks/* useAuthContext */.E)();
    const [checked, setChecked] = (0,react_.useState)(false);
    const check = (0,react_.useCallback)(()=>{
        if (!authenticated) {
            const searchParams = new URLSearchParams({
                returnTo: window.location.pathname
            }).toString();
            const loginPath = loginPaths[method];
            const href = `${loginPath}?${searchParams}`;
            router.replace(href);
        } else {
            setChecked(true);
        }
    }, [
        authenticated,
        method,
        router
    ]);
    (0,react_.useEffect)(()=>{
        check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (!checked) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    });
}

;// CONCATENATED MODULE: ./src/auth/guard/guest-guard.tsx


// routes


//

function GuestGuard({ children }) {
    const router = (0,hooks/* useRouter */.tv)();
    const searchParams = (0,hooks/* useSearchParams */.lr)();
    const returnTo = searchParams.get("returnTo") || paths/* paths */.H.dashboard.root;
    const { authenticated } = (0,auth_hooks/* useAuthContext */.E)();
    const check = (0,react_.useCallback)(()=>{
        if (authenticated) {
            router.replace(returnTo);
        }
    }, [
        authenticated,
        returnTo,
        router
    ]);
    (0,react_.useEffect)(()=>{
        check();
    }, [
        check
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs + 19 modules
var motion_minimal = __webpack_require__(51730);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Container/index.js
var Container = __webpack_require__(39966);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./src/hooks/use-mocked-user.ts
var use_mocked_user = __webpack_require__(63820);
// EXTERNAL MODULE: ./src/assets/illustrations/index.ts + 15 modules
var illustrations = __webpack_require__(90310);
// EXTERNAL MODULE: ./src/components/animate/index.ts + 15 modules
var animate = __webpack_require__(22140);
;// CONCATENATED MODULE: ./src/auth/guard/role-based-guard.tsx




// hooks

// assets

// components

function RoleBasedGuard({ hasContent, roles, children, sx }) {
    // Logic here to get current user role
    const { user } = (0,use_mocked_user/* useMockedUser */.I)();
    // const currentRole = 'user';
    const currentRole = user?.role; // admin;
    if (typeof roles !== "undefined" && !roles.includes(currentRole)) {
        return hasContent ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
            component: animate/* MotionContainer */.NM,
            sx: {
                textAlign: "center",
                ...sx
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(motion_minimal.m.div, {
                    variants: (0,animate/* varBounce */.Wp)().in,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h3",
                        sx: {
                            mb: 2
                        },
                        children: "Permission Denied"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(motion_minimal.m.div, {
                    variants: (0,animate/* varBounce */.Wp)().in,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            color: "text.secondary"
                        },
                        children: "You do not have permission to access this page"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(motion_minimal.m.div, {
                    variants: (0,animate/* varBounce */.Wp)().in,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(illustrations/* ForbiddenIllustration */.E, {
                        sx: {
                            height: 260,
                            my: {
                                xs: 5,
                                sm: 10
                            }
                        }
                    })
                })
            ]
        }) : null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            " ",
            children,
            " "
        ]
    });
}

;// CONCATENATED MODULE: ./src/auth/guard/index.ts





/***/ })

};
;