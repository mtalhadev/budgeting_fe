exports.id = 3796;
exports.ids = [3796];
exports.modules = {

/***/ 6469:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 61227));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 64249))

/***/ }),

/***/ 61227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JwtLoginView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50298);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(66558);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57086);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(17466);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56995);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(81932);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(48060);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3683);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48611);
/* harmony import */ var src_routes_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87362);
/* harmony import */ var src_routes_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89539);
/* harmony import */ var src_config_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45060);
/* harmony import */ var src_hooks_use_boolean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80935);
/* harmony import */ var src_auth_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40529);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76505);
/* harmony import */ var src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29189);
/* __next_internal_client_entry_do_not_use__ default auto */ 




// @mui







// routes



// config

// hooks

// auth

// components


// ----------------------------------------------------------------------
function JwtLoginView() {
    const { login } = (0,src_auth_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAuthContext */ .E)();
    const router = (0,src_routes_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useRouter */ .tv)();
    const [errorMsg, setErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const searchParams = (0,src_routes_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useSearchParams */ .lr)();
    const returnTo = searchParams.get("returnTo");
    const password = (0,src_hooks_use_boolean__WEBPACK_IMPORTED_MODULE_7__/* .useBoolean */ .k)();
    const LoginSchema = yup__WEBPACK_IMPORTED_MODULE_1__/* .object */ .Ry().shape({
        email: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().required("Email is required").email("Email must be a valid email address"),
        password: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().required("Password is required")
    });
    const defaultValues = {
        email: "demo@minimals.cc",
        password: "demo1234"
    };
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_11__/* .useForm */ .cI)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_12__/* .yupResolver */ .X)(LoginSchema),
        defaultValues
    });
    const { reset, handleSubmit, formState: { isSubmitting } } = methods;
    const onSubmit = handleSubmit(async (data)=>{
        try {
            await login?.(data.email, data.password);
            router.push(returnTo || src_config_global__WEBPACK_IMPORTED_MODULE_6__/* .PATH_AFTER_LOGIN */ .wd);
        } catch (error) {
            console.error(error);
            reset();
            setErrorMsg(typeof error === "string" ? error : error.message);
        }
    });
    const renderHead = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__["default"], {
        spacing: 2,
        sx: {
            mb: 5
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                variant: "h4",
                children: "Sign in to Adam Levy - Personal Finance"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__["default"], {
                direction: "row",
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                        variant: "body2",
                        children: "New user?"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_15___default()), {
                        component: src_routes_components__WEBPACK_IMPORTED_MODULE_4__/* .RouterLink */ .r,
                        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_3__/* .paths */ .H.auth.jwt.register,
                        variant: "subtitle2",
                        children: "Create an account"
                    })
                ]
            })
        ]
    });
    const renderForm = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__["default"], {
        spacing: 2.5,
        children: [
            !!errorMsg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_16___default()), {
                severity: "error",
                children: errorMsg
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__/* .RHFTextField */ .au, {
                name: "email",
                label: "Email address"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__/* .RHFTextField */ .au, {
                name: "password",
                label: "Password",
                type: password.value ? "text" : "password",
                InputProps: {
                    endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_17___default()), {
                        position: "end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18___default()), {
                            onClick: password.onToggle,
                            edge: "end",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                icon: password.value ? "solar:eye-bold" : "solar:eye-closed-bold"
                            })
                        })
                    })
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_15___default()), {
                variant: "body2",
                color: "inherit",
                underline: "always",
                sx: {
                    alignSelf: "flex-end"
                },
                children: "Forgot password?"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_19___default()), {
                fullWidth: true,
                color: "inherit",
                size: "large",
                type: "submit",
                variant: "contained",
                loading: isSubmitting,
                children: "Login"
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
        methods: methods,
        onSubmit: onSubmit,
        children: [
            renderHead,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_16___default()), {
                severity: "info",
                sx: {
                    mb: 3
                },
                children: [
                    "Use email : ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                        children: "demo@adamlevy.ca"
                    }),
                    " / password :",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                        children: " demo1234"
                    })
                ]
            }),
            renderForm
        ]
    });
}


/***/ }),

/***/ 64249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JwtRegisterView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50298);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(66558);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57086);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(17466);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56995);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(81932);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(48060);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3683);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var src_hooks_use_boolean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80935);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48611);
/* harmony import */ var src_routes_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87362);
/* harmony import */ var src_routes_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89539);
/* harmony import */ var src_config_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45060);
/* harmony import */ var src_auth_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40529);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76505);
/* harmony import */ var src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29189);
/* __next_internal_client_entry_do_not_use__ default auto */ 




// @mui







// hooks

// routes



// config

// auth

// components


// ----------------------------------------------------------------------
function JwtRegisterView() {
    const { register } = (0,src_auth_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAuthContext */ .E)();
    const router = (0,src_routes_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useRouter */ .tv)();
    const [errorMsg, setErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const searchParams = (0,src_routes_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useSearchParams */ .lr)();
    const returnTo = searchParams.get("returnTo");
    const password = (0,src_hooks_use_boolean__WEBPACK_IMPORTED_MODULE_3__/* .useBoolean */ .k)();
    const RegisterSchema = yup__WEBPACK_IMPORTED_MODULE_1__/* .object */ .Ry().shape({
        firstName: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().required("First name required"),
        lastName: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().required("Last name required"),
        email: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().required("Email is required").email("Email must be a valid email address"),
        password: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().required("Password is required")
    });
    const defaultValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    };
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_11__/* .useForm */ .cI)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_12__/* .yupResolver */ .X)(RegisterSchema),
        defaultValues
    });
    const { reset, handleSubmit, formState: { isSubmitting } } = methods;
    const onSubmit = handleSubmit(async (data)=>{
        try {
            await register?.(data.email, data.password, data.firstName, data.lastName);
            router.push(returnTo || src_config_global__WEBPACK_IMPORTED_MODULE_7__/* .PATH_AFTER_LOGIN */ .wd);
        } catch (error) {
            console.error(error);
            reset();
            setErrorMsg(typeof error === "string" ? error : error.message);
        }
    });
    const renderHead = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__["default"], {
        spacing: 2,
        sx: {
            mb: 5,
            position: "relative"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                variant: "h4",
                children: "Get started absolutely free"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__["default"], {
                direction: "row",
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                        variant: "body2",
                        children: " Already have an account? "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_15___default()), {
                        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_4__/* .paths */ .H.auth.jwt.login,
                        component: src_routes_components__WEBPACK_IMPORTED_MODULE_5__/* .RouterLink */ .r,
                        variant: "subtitle2",
                        children: "Sign in"
                    })
                ]
            })
        ]
    });
    const renderTerms = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
        component: "div",
        sx: {
            color: "text.secondary",
            mt: 2.5,
            typography: "caption",
            textAlign: "center"
        },
        children: [
            "By signing up, I agree to ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_15___default()), {
                underline: "always",
                color: "text.primary",
                children: "Terms of Service"
            }),
            " and ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_15___default()), {
                underline: "always",
                color: "text.primary",
                children: "Privacy Policy"
            }),
            "."
        ]
    });
    const renderForm = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
        methods: methods,
        onSubmit: onSubmit,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__["default"], {
            spacing: 2.5,
            children: [
                !!errorMsg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_16___default()), {
                    severity: "error",
                    children: errorMsg
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__["default"], {
                    direction: {
                        xs: "column",
                        sm: "row"
                    },
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__/* .RHFTextField */ .au, {
                            name: "firstName",
                            label: "First name"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__/* .RHFTextField */ .au, {
                            name: "lastName",
                            label: "Last name"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__/* .RHFTextField */ .au, {
                    name: "email",
                    label: "Email address"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__/* .RHFTextField */ .au, {
                    name: "password",
                    label: "Password",
                    type: password.value ? "text" : "password",
                    InputProps: {
                        endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_17___default()), {
                            position: "end",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18___default()), {
                                onClick: password.onToggle,
                                edge: "end",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    icon: password.value ? "solar:eye-bold" : "solar:eye-closed-bold"
                                })
                            })
                        })
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_19___default()), {
                    fullWidth: true,
                    color: "inherit",
                    size: "large",
                    type: "submit",
                    variant: "contained",
                    loading: isSubmitting,
                    children: "Create account"
                })
            ]
        })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            renderHead,
            renderForm,
            renderTerms
        ]
    });
}


/***/ }),

/***/ 84918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* reexport */ jwt_login_view),
  $: () => (/* reexport */ jwt_register_view)
});

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/sections/auth/jwt/jwt-login-view.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/auth/jwt/jwt-login-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const jwt_login_view = (__default__);
;// CONCATENATED MODULE: ./src/sections/auth/jwt/jwt-register-view.tsx

const jwt_register_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/auth/jwt/jwt-register-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: jwt_register_view_esModule, $$typeof: jwt_register_view_$$typeof } = jwt_register_view_proxy;
const jwt_register_view_default_ = jwt_register_view_proxy.default;


/* harmony default export */ const jwt_register_view = (jwt_register_view_default_);
;// CONCATENATED MODULE: ./src/sections/auth/jwt/index.ts




/***/ })

};
;