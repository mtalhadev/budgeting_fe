exports.id = 509;
exports.ids = [509];
exports.modules = {

/***/ 28397:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 35553));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 37985));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 15488));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 74951));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 73942))

/***/ }),

/***/ 74951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AmplifyForgotPasswordView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50298);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66558);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57086);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17466);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(56995);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48611);
/* harmony import */ var src_routes_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89539);
/* harmony import */ var src_routes_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87362);
/* harmony import */ var src_auth_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40529);
/* harmony import */ var src_assets_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8969);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76505);
/* harmony import */ var src_components_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29189);
/* __next_internal_client_entry_do_not_use__ default auto */ 



// @mui




// routes



// auth

// assets

// components


// ----------------------------------------------------------------------
function AmplifyForgotPasswordView() {
    const { forgotPassword } = (0,src_auth_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useAuthContext */ .E)();
    const router = (0,src_routes_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useRouter */ .tv)();
    const ForgotPasswordSchema = yup__WEBPACK_IMPORTED_MODULE_1__/* .object */ .Ry().shape({
        email: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().required("Email is required").email("Email must be a valid email address")
    });
    const defaultValues = {
        email: ""
    };
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__/* .useForm */ .cI)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__/* .yupResolver */ .X)(ForgotPasswordSchema),
        defaultValues
    });
    const { handleSubmit, formState: { isSubmitting } } = methods;
    const onSubmit = handleSubmit(async (data)=>{
        try {
            await forgotPassword?.(data.email);
            const searchParams = new URLSearchParams({
                email: data.email
            }).toString();
            const href = `${src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.auth.amplify.newPassword}?${searchParams}`;
            router.push(href);
        } catch (error) {
            console.error(error);
        }
    });
    const renderForm = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_11__["default"], {
        spacing: 3,
        alignItems: "center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_8__/* .RHFTextField */ .au, {
                name: "email",
                label: "Email address"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_12___default()), {
                fullWidth: true,
                size: "large",
                type: "submit",
                variant: "contained",
                loading: isSubmitting,
                children: "Send Request"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_13___default()), {
                component: src_routes_components__WEBPACK_IMPORTED_MODULE_4__/* .RouterLink */ .r,
                href: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.auth.amplify.login,
                color: "inherit",
                variant: "subtitle2",
                sx: {
                    alignItems: "center",
                    display: "inline-flex"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_assets_icons__WEBPACK_IMPORTED_MODULE_6__/* .PasswordIcon */ .CW, {
                sx: {
                    height: 96
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_11__["default"], {
                spacing: 1,
                sx: {
                    my: 5
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                        variant: "h3",
                        children: "Forgot your password?"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_hook_form__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
        methods: methods,
        onSubmit: onSubmit,
        children: [
            renderHead,
            renderForm
        ]
    });
}


/***/ }),

/***/ 37985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AmplifyLoginView)
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
function AmplifyLoginView() {
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
        email: "",
        password: ""
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
                children: "Sign in to Adam Levy"
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
                        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_3__/* .paths */ .H.auth.amplify.register,
                        variant: "subtitle2",
                        children: "Create an account"
                    })
                ]
            })
        ]
    });
    const renderForm = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__["default"], {
        spacing: 3,
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
                component: src_routes_components__WEBPACK_IMPORTED_MODULE_4__/* .RouterLink */ .r,
                href: src_routes_paths__WEBPACK_IMPORTED_MODULE_3__/* .paths */ .H.auth.amplify.forgotPassword,
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
            renderForm
        ]
    });
}


/***/ }),

/***/ 73942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AmplifyNewPasswordView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50298);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(66558);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(57086);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(17466);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(56995);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(48060);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3683);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48611);
/* harmony import */ var src_routes_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87362);
/* harmony import */ var src_routes_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89539);
/* harmony import */ var src_hooks_use_boolean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80935);
/* harmony import */ var src_hooks_use_countdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63993);
/* harmony import */ var src_auth_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40529);
/* harmony import */ var src_assets_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8969);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76505);
/* harmony import */ var src_components_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29189);
/* __next_internal_client_entry_do_not_use__ default auto */ 




// @mui






// routes



// hooks


// auth

// assets

// components


// ----------------------------------------------------------------------
function AmplifyNewPasswordView() {
    const { newPassword, forgotPassword } = (0,src_auth_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAuthContext */ .E)();
    const router = (0,src_routes_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useRouter */ .tv)();
    const searchParams = (0,src_routes_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useSearchParams */ .lr)();
    const email = searchParams.get("email");
    const password = (0,src_hooks_use_boolean__WEBPACK_IMPORTED_MODULE_6__/* .useBoolean */ .k)();
    const { countdown, counting, startCountdown } = (0,src_hooks_use_countdown__WEBPACK_IMPORTED_MODULE_7__/* .useCountdownSeconds */ .Q)(60);
    const VerifySchema = yup__WEBPACK_IMPORTED_MODULE_1__/* .object */ .Ry().shape({
        code: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().min(6, "Code must be at least 6 characters").required("Code is required"),
        email: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().required("Email is required").email("Email must be a valid email address"),
        password: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().min(6, "Password must be at least 6 characters").required("Password is required"),
        confirmPassword: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().required("Confirm password is required").oneOf([
            yup__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .iH("password")
        ], "Passwords must match")
    });
    const defaultValues = {
        code: "",
        email: email || "",
        password: "",
        confirmPassword: ""
    };
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_12__/* .useForm */ .cI)({
        mode: "onChange",
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_13__/* .yupResolver */ .X)(VerifySchema),
        defaultValues
    });
    const { watch, handleSubmit, formState: { isSubmitting } } = methods;
    const values = watch();
    const onSubmit = handleSubmit(async (data)=>{
        try {
            await newPassword?.(data.email, data.code, data.password);
            router.push(src_routes_paths__WEBPACK_IMPORTED_MODULE_3__/* .paths */ .H.auth.amplify.login);
        } catch (error) {
            console.error(error);
        }
    });
    const handleResendCode = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        try {
            startCountdown();
            await forgotPassword?.(values.email);
        } catch (error) {
            console.error(error);
        }
    }, [
        forgotPassword,
        startCountdown,
        values.email
    ]);
    const renderForm = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_14__["default"], {
        spacing: 3,
        alignItems: "center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_11__/* .RHFTextField */ .au, {
                name: "email",
                label: "Email",
                placeholder: "example@gmail.com",
                InputLabelProps: {
                    shrink: true
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_11__/* .RHFCode */ .Re, {
                name: "code"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_11__/* .RHFTextField */ .au, {
                name: "password",
                label: "Password",
                type: password.value ? "text" : "password",
                InputProps: {
                    endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_15___default()), {
                        position: "end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_16___default()), {
                            onClick: password.onToggle,
                            edge: "end",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                icon: password.value ? "solar:eye-bold" : "solar:eye-closed-bold"
                            })
                        })
                    })
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_11__/* .RHFTextField */ .au, {
                name: "confirmPassword",
                label: "Confirm New Password",
                type: password.value ? "text" : "password",
                InputProps: {
                    endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_15___default()), {
                        position: "end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_16___default()), {
                            onClick: password.onToggle,
                            edge: "end",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                icon: password.value ? "solar:eye-bold" : "solar:eye-closed-bold"
                            })
                        })
                    })
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_17___default()), {
                fullWidth: true,
                size: "large",
                type: "submit",
                variant: "contained",
                loading: isSubmitting,
                children: "Update Password"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_18___default()), {
                variant: "body2",
                children: [
                    `Don’t have a code? `,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_19___default()), {
                        variant: "subtitle2",
                        onClick: handleResendCode,
                        sx: {
                            cursor: "pointer",
                            ...counting && {
                                color: "text.disabled",
                                pointerEvents: "none"
                            }
                        },
                        children: [
                            "Resend code ",
                            counting && `(${countdown}s)`
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_19___default()), {
                component: src_routes_components__WEBPACK_IMPORTED_MODULE_4__/* .RouterLink */ .r,
                href: src_routes_paths__WEBPACK_IMPORTED_MODULE_3__/* .paths */ .H.auth.amplify.login,
                color: "inherit",
                variant: "subtitle2",
                sx: {
                    alignItems: "center",
                    display: "inline-flex"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_assets_icons__WEBPACK_IMPORTED_MODULE_9__/* .SentIcon */ .Jg, {
                sx: {
                    height: 96
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_14__["default"], {
                spacing: 1,
                sx: {
                    my: 5
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_18___default()), {
                        variant: "h3",
                        children: "Request sent successfully!"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_18___default()), {
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_hook_form__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
        methods: methods,
        onSubmit: onSubmit,
        children: [
            renderHead,
            renderForm
        ]
    });
}


/***/ }),

/***/ 15488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AmplifyRegisterView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50298);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(66558);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57086);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(17466);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56995);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(81932);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(48060);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3683);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var src_hooks_use_boolean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80935);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48611);
/* harmony import */ var src_routes_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89539);
/* harmony import */ var src_routes_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87362);
/* harmony import */ var src_auth_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40529);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76505);
/* harmony import */ var src_components_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29189);
/* __next_internal_client_entry_do_not_use__ default auto */ 




// @mui







// hooks

// routes



// auth

// components


// ----------------------------------------------------------------------
function AmplifyRegisterView() {
    const { register } = (0,src_auth_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useAuthContext */ .E)();
    const [errorMsg, setErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const router = (0,src_routes_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useRouter */ .tv)();
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
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_10__/* .useForm */ .cI)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_11__/* .yupResolver */ .X)(RegisterSchema),
        defaultValues
    });
    const { reset, handleSubmit, formState: { isSubmitting } } = methods;
    const onSubmit = handleSubmit(async (data)=>{
        try {
            await register?.(data.email, data.password, data.firstName, data.lastName);
            const searchParams = new URLSearchParams({
                email: data.email
            }).toString();
            const href = `${src_routes_paths__WEBPACK_IMPORTED_MODULE_4__/* .paths */ .H.auth.amplify.verify}?${searchParams}`;
            router.push(href);
        } catch (error) {
            console.error(error);
            reset();
            setErrorMsg(typeof error === "string" ? error : error.message);
        }
    });
    const renderHead = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_12__["default"], {
        spacing: 2,
        sx: {
            mb: 5,
            position: "relative"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default()), {
                variant: "h4",
                children: "Get started absolutely free"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_12__["default"], {
                direction: "row",
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default()), {
                        variant: "body2",
                        children: " Already have an account? "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_14___default()), {
                        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_4__/* .paths */ .H.auth.amplify.login,
                        component: src_routes_components__WEBPACK_IMPORTED_MODULE_6__/* .RouterLink */ .r,
                        variant: "subtitle2",
                        children: "Sign in"
                    })
                ]
            })
        ]
    });
    const renderTerms = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default()), {
        component: "div",
        sx: {
            color: "text.secondary",
            mt: 2.5,
            typography: "caption",
            textAlign: "center"
        },
        children: [
            "By signing up, I agree to ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_14___default()), {
                underline: "always",
                color: "text.primary",
                children: "Terms of Service"
            }),
            " and ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_14___default()), {
                underline: "always",
                color: "text.primary",
                children: "Privacy Policy"
            }),
            "."
        ]
    });
    const renderForm = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_12__["default"], {
        spacing: 2.5,
        children: [
            !!errorMsg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_15___default()), {
                severity: "error",
                children: errorMsg
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_12__["default"], {
                direction: {
                    xs: "column",
                    sm: "row"
                },
                spacing: 2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_9__/* .RHFTextField */ .au, {
                        name: "firstName",
                        label: "First name"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_9__/* .RHFTextField */ .au, {
                        name: "lastName",
                        label: "Last name"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_9__/* .RHFTextField */ .au, {
                name: "email",
                label: "Email address"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_9__/* .RHFTextField */ .au, {
                name: "password",
                label: "Password",
                type: password.value ? "text" : "password",
                InputProps: {
                    endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_16___default()), {
                        position: "end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_17___default()), {
                            onClick: password.onToggle,
                            edge: "end",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                icon: password.value ? "solar:eye-bold" : "solar:eye-closed-bold"
                            })
                        })
                    })
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_18___default()), {
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_hook_form__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
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

/***/ 35553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AmplifyVerifyView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50298);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(66558);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57086);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(17466);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(56995);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var src_auth_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40529);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48611);
/* harmony import */ var src_routes_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87362);
/* harmony import */ var src_routes_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89539);
/* harmony import */ var src_hooks_use_countdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63993);
/* harmony import */ var src_assets_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8969);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76505);
/* harmony import */ var src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29189);
/* __next_internal_client_entry_do_not_use__ default auto */ 




// @mui




// auth

// routes



// hooks

// assets

// components


// ----------------------------------------------------------------------
function AmplifyVerifyView() {
    const router = (0,src_routes_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useRouter */ .tv)();
    const searchParams = (0,src_routes_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useSearchParams */ .lr)();
    const email = searchParams.get("email");
    const { confirmRegister, resendCodeRegister } = (0,src_auth_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAuthContext */ .E)();
    const { countdown, counting, startCountdown } = (0,src_hooks_use_countdown__WEBPACK_IMPORTED_MODULE_7__/* .useCountdownSeconds */ .Q)(60);
    const VerifySchemaSchema = yup__WEBPACK_IMPORTED_MODULE_1__/* .object */ .Ry().shape({
        code: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().min(6, "Code must be at least 6 characters").required("Code is required"),
        email: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().required("Email is required").email("Email must be a valid email address")
    });
    const defaultValues = {
        code: "",
        email: email || ""
    };
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_11__/* .useForm */ .cI)({
        mode: "onChange",
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_12__/* .yupResolver */ .X)(VerifySchemaSchema),
        defaultValues
    });
    const { watch, handleSubmit, formState: { isSubmitting } } = methods;
    const values = watch();
    const onSubmit = handleSubmit(async (data)=>{
        try {
            await confirmRegister?.(data.email, data.code);
            router.push(src_routes_paths__WEBPACK_IMPORTED_MODULE_4__/* .paths */ .H.auth.amplify.login);
        } catch (error) {
            console.error(error);
        }
    });
    const handleResendCode = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        try {
            startCountdown();
            await resendCodeRegister?.(values.email);
        } catch (error) {
            console.error(error);
        }
    }, [
        resendCodeRegister,
        startCountdown,
        values.email
    ]);
    const renderForm = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__["default"], {
        spacing: 3,
        alignItems: "center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__/* .RHFTextField */ .au, {
                name: "email",
                label: "Email",
                placeholder: "example@gmail.com",
                InputLabelProps: {
                    shrink: true
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__/* .RHFCode */ .Re, {
                name: "code"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_14___default()), {
                fullWidth: true,
                size: "large",
                type: "submit",
                variant: "contained",
                loading: isSubmitting,
                children: "Verify"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_15___default()), {
                variant: "body2",
                children: [
                    `Don’t have a code? `,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_16___default()), {
                        variant: "subtitle2",
                        onClick: handleResendCode,
                        sx: {
                            cursor: "pointer",
                            ...counting && {
                                color: "text.disabled",
                                pointerEvents: "none"
                            }
                        },
                        children: [
                            "Resend code ",
                            counting && `(${countdown}s)`
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_16___default()), {
                component: src_routes_components__WEBPACK_IMPORTED_MODULE_5__/* .RouterLink */ .r,
                href: src_routes_paths__WEBPACK_IMPORTED_MODULE_4__/* .paths */ .H.auth.amplify.login,
                color: "inherit",
                variant: "subtitle2",
                sx: {
                    alignItems: "center",
                    display: "inline-flex"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_assets_icons__WEBPACK_IMPORTED_MODULE_8__/* .EmailInboxIcon */ .yj, {
                sx: {
                    height: 96
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__["default"], {
                spacing: 1,
                sx: {
                    my: 5
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_15___default()), {
                        variant: "h3",
                        children: "Please check your email!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_15___default()), {
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
        methods: methods,
        onSubmit: onSubmit,
        children: [
            renderHead,
            renderForm
        ]
    });
}


/***/ }),

/***/ 61034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d0: () => (/* reexport */ amplify_forgot_password_view),
  ve: () => (/* reexport */ amplify_login_view),
  DG: () => (/* reexport */ amplify_new_password_view),
  UC: () => (/* reexport */ amplify_register_view),
  UG: () => (/* reexport */ amplify_verify_view)
});

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/sections/auth/amplify/amplify-login-view.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/auth/amplify/amplify-login-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const amplify_login_view = (__default__);
;// CONCATENATED MODULE: ./src/sections/auth/amplify/amplify-verify-view.tsx

const amplify_verify_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/auth/amplify/amplify-verify-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: amplify_verify_view_esModule, $$typeof: amplify_verify_view_$$typeof } = amplify_verify_view_proxy;
const amplify_verify_view_default_ = amplify_verify_view_proxy.default;


/* harmony default export */ const amplify_verify_view = (amplify_verify_view_default_);
;// CONCATENATED MODULE: ./src/sections/auth/amplify/amplify-register-view.tsx

const amplify_register_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/auth/amplify/amplify-register-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: amplify_register_view_esModule, $$typeof: amplify_register_view_$$typeof } = amplify_register_view_proxy;
const amplify_register_view_default_ = amplify_register_view_proxy.default;


/* harmony default export */ const amplify_register_view = (amplify_register_view_default_);
;// CONCATENATED MODULE: ./src/sections/auth/amplify/amplify-new-password-view.tsx

const amplify_new_password_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/auth/amplify/amplify-new-password-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: amplify_new_password_view_esModule, $$typeof: amplify_new_password_view_$$typeof } = amplify_new_password_view_proxy;
const amplify_new_password_view_default_ = amplify_new_password_view_proxy.default;


/* harmony default export */ const amplify_new_password_view = (amplify_new_password_view_default_);
;// CONCATENATED MODULE: ./src/sections/auth/amplify/amplify-forgot-password-view.tsx

const amplify_forgot_password_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/auth/amplify/amplify-forgot-password-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: amplify_forgot_password_view_esModule, $$typeof: amplify_forgot_password_view_$$typeof } = amplify_forgot_password_view_proxy;
const amplify_forgot_password_view_default_ = amplify_forgot_password_view_proxy.default;


/* harmony default export */ const amplify_forgot_password_view = (amplify_forgot_password_view_default_);
;// CONCATENATED MODULE: ./src/sections/auth/amplify/index.ts







/***/ })

};
;