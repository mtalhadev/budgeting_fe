exports.id = 6931;
exports.ids = [6931];
exports.modules = {

/***/ 86335:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 37034));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 12319));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 61990));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 84525));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 99717))

/***/ }),

/***/ 99717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClassicForgotPasswordView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50298);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66558);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57086);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17466);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56995);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48611);
/* harmony import */ var src_routes_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87362);
/* harmony import */ var src_assets_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8969);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76505);
/* harmony import */ var src_components_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29189);
/* __next_internal_client_entry_do_not_use__ default auto */ 



// @mui




// routes


// assets

// components


// ----------------------------------------------------------------------
function ClassicForgotPasswordView() {
    const ForgotPasswordSchema = yup__WEBPACK_IMPORTED_MODULE_1__/* .object */ .Ry().shape({
        email: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().required("Email is required").email("Email must be a valid email address")
    });
    const defaultValues = {
        email: ""
    };
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__/* .useForm */ .cI)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__/* .yupResolver */ .X)(ForgotPasswordSchema),
        defaultValues
    });
    const { handleSubmit, formState: { isSubmitting } } = methods;
    const onSubmit = handleSubmit(async (data)=>{
        try {
            await new Promise((resolve)=>setTimeout(resolve, 500));
            console.info("DATA", data);
        } catch (error) {
            console.error(error);
        }
    });
    const renderForm = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
        spacing: 3,
        alignItems: "center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_6__/* .RHFTextField */ .au, {
                name: "email",
                label: "Email address"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                fullWidth: true,
                size: "large",
                type: "submit",
                variant: "contained",
                loading: isSubmitting,
                children: "Send Request"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_11___default()), {
                component: src_routes_components__WEBPACK_IMPORTED_MODULE_3__/* .RouterLink */ .r,
                href: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.authDemo.classic.login,
                color: "inherit",
                variant: "subtitle2",
                sx: {
                    alignItems: "center",
                    display: "inline-flex"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        icon: "eva:arrow-ios-back-fill",
                        width: 16
                    }),
                    "Return to sign in"
                ]
            })
        ]
    });
    const renderHead = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_assets_icons__WEBPACK_IMPORTED_MODULE_4__/* .PasswordIcon */ .CW, {
                sx: {
                    height: 96
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
                spacing: 1,
                sx: {
                    my: 5
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                        variant: "h3",
                        children: "Forgot your password?"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                        variant: "body2",
                        sx: {
                            color: "text.secondary"
                        },
                        children: "Please enter the email address associated with your account and We will email you a link to reset your password."
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_hook_form__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
        methods: methods,
        onSubmit: onSubmit,
        children: [
            renderHead,
            renderForm
        ]
    });
}


/***/ }),

/***/ 37034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClassicLoginView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50298);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66558);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57086);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(17466);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56995);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(48060);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3683);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48611);
/* harmony import */ var src_routes_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87362);
/* harmony import */ var src_hooks_use_boolean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80935);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76505);
/* harmony import */ var src_components_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29189);
/* __next_internal_client_entry_do_not_use__ default auto */ 



// @mui






// routes


// hooks

// components


// ----------------------------------------------------------------------
function ClassicLoginView() {
    const password = (0,src_hooks_use_boolean__WEBPACK_IMPORTED_MODULE_4__/* .useBoolean */ .k)();
    const LoginSchema = yup__WEBPACK_IMPORTED_MODULE_1__/* .object */ .Ry().shape({
        email: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().required("Email is required").email("Email must be a valid email address"),
        password: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().required("Password is required")
    });
    const defaultValues = {
        email: "",
        password: ""
    };
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__/* .useForm */ .cI)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__/* .yupResolver */ .X)(LoginSchema),
        defaultValues
    });
    const { handleSubmit, formState: { isSubmitting } } = methods;
    const onSubmit = handleSubmit(async (data)=>{
        try {
            await new Promise((resolve)=>setTimeout(resolve, 500));
            console.info("DATA", data);
        } catch (error) {
            console.error(error);
        }
    });
    const renderHead = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
        spacing: 2,
        sx: {
            mb: 5
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
                variant: "h4",
                children: "Sign in to Adam Levy"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
                direction: "row",
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
                        variant: "body2",
                        children: "New user?"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_11___default()), {
                        component: src_routes_components__WEBPACK_IMPORTED_MODULE_3__/* .RouterLink */ .r,
                        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.authDemo.classic.register,
                        variant: "subtitle2",
                        children: "Create an account"
                    })
                ]
            })
        ]
    });
    const renderForm = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
        spacing: 2.5,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_6__/* .RHFTextField */ .au, {
                name: "email",
                label: "Email address"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_6__/* .RHFTextField */ .au, {
                name: "password",
                label: "Password",
                type: password.value ? "text" : "password",
                InputProps: {
                    endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_12___default()), {
                        position: "end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13___default()), {
                            onClick: password.onToggle,
                            edge: "end",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                icon: password.value ? "solar:eye-bold" : "solar:eye-closed-bold"
                            })
                        })
                    })
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_11___default()), {
                component: src_routes_components__WEBPACK_IMPORTED_MODULE_3__/* .RouterLink */ .r,
                href: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.authDemo.classic.forgotPassword,
                variant: "body2",
                color: "inherit",
                underline: "always",
                sx: {
                    alignSelf: "flex-end"
                },
                children: "Forgot password?"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_14___default()), {
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_hook_form__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
        methods: methods,
        onSubmit: onSubmit,
        children: [
            renderHead,
            renderForm
        ]
    });
}


/***/ }),

/***/ 84525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClassicNewPasswordView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50298);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66558);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57086);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17466);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56995);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(48060);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3683);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48611);
/* harmony import */ var src_hooks_use_boolean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80935);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76505);
/* harmony import */ var src_routes_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87362);
/* harmony import */ var src_components_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29189);
/* harmony import */ var src_assets_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8969);
/* __next_internal_client_entry_do_not_use__ default auto */ 



// @mui






// routes

// hooks

// components



// assets

// ----------------------------------------------------------------------
function ClassicNewPasswordView() {
    const password = (0,src_hooks_use_boolean__WEBPACK_IMPORTED_MODULE_3__/* .useBoolean */ .k)();
    const NewPasswordSchema = yup__WEBPACK_IMPORTED_MODULE_1__/* .object */ .Ry().shape({
        code: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().min(6, "Code must be at least 6 characters").required("Code is required"),
        email: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().required("Email is required").email("Email must be a valid email address"),
        password: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().min(6, "Password must be at least 6 characters").required("Password is required"),
        confirmPassword: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().required("Confirm password is required").oneOf([
            yup__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .iH("password")
        ], "Passwords must match")
    });
    const defaultValues = {
        code: "",
        email: "",
        password: "",
        confirmPassword: ""
    };
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__/* .useForm */ .cI)({
        mode: "onChange",
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__/* .yupResolver */ .X)(NewPasswordSchema),
        defaultValues
    });
    const { handleSubmit, formState: { isSubmitting } } = methods;
    const onSubmit = handleSubmit(async (data)=>{
        try {
            await new Promise((resolve)=>setTimeout(resolve, 500));
            console.info("DATA", data);
        } catch (error) {
            console.error(error);
        }
    });
    const renderForm = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_10__["default"], {
        spacing: 3,
        alignItems: "center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_6__/* .RHFTextField */ .au, {
                name: "email",
                label: "Email",
                placeholder: "example@gmail.com",
                InputLabelProps: {
                    shrink: true
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_6__/* .RHFCode */ .Re, {
                name: "code"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_6__/* .RHFTextField */ .au, {
                name: "password",
                label: "Password",
                type: password.value ? "text" : "password",
                InputProps: {
                    endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_11___default()), {
                        position: "end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12___default()), {
                            onClick: password.onToggle,
                            edge: "end",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                icon: password.value ? "solar:eye-bold" : "solar:eye-closed-bold"
                            })
                        })
                    })
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_6__/* .RHFTextField */ .au, {
                name: "confirmPassword",
                label: "Confirm New Password",
                type: password.value ? "text" : "password",
                InputProps: {
                    endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_11___default()), {
                        position: "end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12___default()), {
                            onClick: password.onToggle,
                            edge: "end",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                icon: password.value ? "solar:eye-bold" : "solar:eye-closed-bold"
                            })
                        })
                    })
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_13___default()), {
                fullWidth: true,
                size: "large",
                type: "submit",
                variant: "contained",
                loading: isSubmitting,
                children: "Update Password"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                variant: "body2",
                children: [
                    `Don’t have a code? `,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_15___default()), {
                        variant: "subtitle2",
                        sx: {
                            cursor: "pointer"
                        },
                        children: "Resend code"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_15___default()), {
                component: src_routes_components__WEBPACK_IMPORTED_MODULE_5__/* .RouterLink */ .r,
                href: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.authDemo.classic.login,
                color: "inherit",
                variant: "subtitle2",
                sx: {
                    alignItems: "center",
                    display: "inline-flex"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        icon: "eva:arrow-ios-back-fill",
                        width: 16
                    }),
                    "Return to sign in"
                ]
            })
        ]
    });
    const renderHead = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_assets_icons__WEBPACK_IMPORTED_MODULE_7__/* .SentIcon */ .Jg, {
                sx: {
                    height: 96
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_10__["default"], {
                spacing: 1,
                sx: {
                    my: 5
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                        variant: "h3",
                        children: "Request sent successfully!"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                        variant: "body2",
                        sx: {
                            color: "text.secondary"
                        },
                        children: [
                            "We've sent a 6-digit confirmation email to your email.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "Please enter the code in below box to verify your email."
                        ]
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_hook_form__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
        methods: methods,
        onSubmit: onSubmit,
        children: [
            renderHead,
            renderForm
        ]
    });
}


/***/ }),

/***/ 61990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClassicRegisterView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50298);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66558);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57086);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(17466);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56995);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(48060);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3683);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_hooks_use_boolean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80935);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48611);
/* harmony import */ var src_routes_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87362);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76505);
/* harmony import */ var src_components_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29189);
/* __next_internal_client_entry_do_not_use__ default auto */ 



// @mui






// hooks

// routes


// components


// ----------------------------------------------------------------------
function ClassicRegisterView() {
    const password = (0,src_hooks_use_boolean__WEBPACK_IMPORTED_MODULE_2__/* .useBoolean */ .k)();
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
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__/* .useForm */ .cI)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__/* .yupResolver */ .X)(RegisterSchema),
        defaultValues
    });
    const { handleSubmit, formState: { isSubmitting } } = methods;
    const onSubmit = handleSubmit(async (data)=>{
        try {
            await new Promise((resolve)=>setTimeout(resolve, 500));
            console.info("DATA", data);
        } catch (error) {
            console.error(error);
        }
    });
    const renderHead = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
        spacing: 2,
        sx: {
            mb: 5,
            position: "relative"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
                variant: "h4",
                children: "Get started absolutely free"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
                direction: "row",
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
                        variant: "body2",
                        children: " Already have an account? "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_11___default()), {
                        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_3__/* .paths */ .H.authDemo.classic.login,
                        component: src_routes_components__WEBPACK_IMPORTED_MODULE_4__/* .RouterLink */ .r,
                        variant: "subtitle2",
                        children: "Sign in"
                    })
                ]
            })
        ]
    });
    const renderTerms = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
        component: "div",
        sx: {
            color: "text.secondary",
            mt: 2.5,
            typography: "caption",
            textAlign: "center"
        },
        children: [
            "By signing up, I agree to ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_11___default()), {
                underline: "always",
                color: "text.primary",
                children: "Terms of Service"
            }),
            " and ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_11___default()), {
                underline: "always",
                color: "text.primary",
                children: "Privacy Policy"
            }),
            "."
        ]
    });
    const renderForm = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
        spacing: 2.5,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
                direction: {
                    xs: "column",
                    sm: "row"
                },
                spacing: 2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_6__/* .RHFTextField */ .au, {
                        name: "firstName",
                        label: "First name"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_6__/* .RHFTextField */ .au, {
                        name: "lastName",
                        label: "Last name"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_6__/* .RHFTextField */ .au, {
                name: "email",
                label: "Email address"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_6__/* .RHFTextField */ .au, {
                name: "password",
                label: "Password",
                type: password.value ? "text" : "password",
                InputProps: {
                    endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_12___default()), {
                        position: "end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13___default()), {
                            onClick: password.onToggle,
                            edge: "end",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                icon: password.value ? "solar:eye-bold" : "solar:eye-closed-bold"
                            })
                        })
                    })
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_14___default()), {
                fullWidth: true,
                color: "inherit",
                size: "large",
                type: "submit",
                variant: "contained",
                loading: isSubmitting,
                children: "Create account"
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_hook_form__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
        methods: methods,
        onSubmit: onSubmit,
        children: [
            renderHead,
            renderForm,
            renderTerms
        ]
    });
}


/***/ }),

/***/ 12319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClassicVerifyView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50298);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66558);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57086);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17466);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56995);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48611);
/* harmony import */ var src_assets_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8969);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76505);
/* harmony import */ var src_routes_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87362);
/* harmony import */ var src_components_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29189);
/* __next_internal_client_entry_do_not_use__ default auto */ 



// @mui




// routes

// assets

// components



// ----------------------------------------------------------------------
function ClassicVerifyView() {
    const VerifySchema = yup__WEBPACK_IMPORTED_MODULE_1__/* .object */ .Ry().shape({
        code: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().min(6, "Code must be at least 6 characters").required("Code is required"),
        email: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().required("Email is required").email("Email must be a valid email address")
    });
    const defaultValues = {
        code: "",
        email: ""
    };
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__/* .useForm */ .cI)({
        mode: "onChange",
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__/* .yupResolver */ .X)(VerifySchema),
        defaultValues
    });
    const { handleSubmit, formState: { isSubmitting } } = methods;
    const onSubmit = handleSubmit(async (data)=>{
        try {
            await new Promise((resolve)=>setTimeout(resolve, 500));
            console.info("DATA", data);
        } catch (error) {
            console.error(error);
        }
    });
    const renderForm = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
        spacing: 3,
        alignItems: "center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_6__/* .RHFTextField */ .au, {
                name: "email",
                label: "Email",
                placeholder: "example@gmail.com",
                InputLabelProps: {
                    shrink: true
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_6__/* .RHFCode */ .Re, {
                name: "code"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                fullWidth: true,
                size: "large",
                type: "submit",
                variant: "contained",
                loading: isSubmitting,
                children: "Verify"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                variant: "body2",
                children: [
                    `Don’t have a code? `,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_12___default()), {
                        variant: "subtitle2",
                        sx: {
                            cursor: "pointer"
                        },
                        children: "Resend code"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_12___default()), {
                component: src_routes_components__WEBPACK_IMPORTED_MODULE_5__/* .RouterLink */ .r,
                href: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.authDemo.classic.login,
                color: "inherit",
                variant: "subtitle2",
                sx: {
                    alignItems: "center",
                    display: "inline-flex"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        icon: "eva:arrow-ios-back-fill",
                        width: 16
                    }),
                    "Return to sign in"
                ]
            })
        ]
    });
    const renderHead = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_assets_icons__WEBPACK_IMPORTED_MODULE_3__/* .EmailInboxIcon */ .yj, {
                sx: {
                    height: 96
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
                spacing: 1,
                sx: {
                    my: 5
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                        variant: "h3",
                        children: "Please check your email!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                        variant: "body2",
                        sx: {
                            color: "text.secondary"
                        },
                        children: "We have emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify your email."
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_hook_form__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
        methods: methods,
        onSubmit: onSubmit,
        children: [
            renderHead,
            renderForm
        ]
    });
}


/***/ }),

/***/ 13329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Xe: () => (/* reexport */ classic_forgot_password_view),
  b3: () => (/* reexport */ classic_login_view),
  Cb: () => (/* reexport */ classic_new_password_view),
  wd: () => (/* reexport */ classic_register_view),
  ZE: () => (/* reexport */ classic_verify_view)
});

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/sections/auth-demo/classic/classic-login-view.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/auth-demo/classic/classic-login-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const classic_login_view = (__default__);
;// CONCATENATED MODULE: ./src/sections/auth-demo/classic/classic-verify-view.tsx

const classic_verify_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/auth-demo/classic/classic-verify-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: classic_verify_view_esModule, $$typeof: classic_verify_view_$$typeof } = classic_verify_view_proxy;
const classic_verify_view_default_ = classic_verify_view_proxy.default;


/* harmony default export */ const classic_verify_view = (classic_verify_view_default_);
;// CONCATENATED MODULE: ./src/sections/auth-demo/classic/classic-register-view.tsx

const classic_register_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/auth-demo/classic/classic-register-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: classic_register_view_esModule, $$typeof: classic_register_view_$$typeof } = classic_register_view_proxy;
const classic_register_view_default_ = classic_register_view_proxy.default;


/* harmony default export */ const classic_register_view = (classic_register_view_default_);
;// CONCATENATED MODULE: ./src/sections/auth-demo/classic/classic-new-password-view.tsx

const classic_new_password_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/auth-demo/classic/classic-new-password-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: classic_new_password_view_esModule, $$typeof: classic_new_password_view_$$typeof } = classic_new_password_view_proxy;
const classic_new_password_view_default_ = classic_new_password_view_proxy.default;


/* harmony default export */ const classic_new_password_view = (classic_new_password_view_default_);
;// CONCATENATED MODULE: ./src/sections/auth-demo/classic/classic-forgot-password-view.tsx

const classic_forgot_password_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/auth-demo/classic/classic-forgot-password-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: classic_forgot_password_view_esModule, $$typeof: classic_forgot_password_view_$$typeof } = classic_forgot_password_view_proxy;
const classic_forgot_password_view_default_ = classic_forgot_password_view_proxy.default;


/* harmony default export */ const classic_forgot_password_view = (classic_forgot_password_view_default_);
;// CONCATENATED MODULE: ./src/sections/auth-demo/classic/index.ts







/***/ })

};
;