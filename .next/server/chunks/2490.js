"use strict";
exports.id = 2490;
exports.ids = [2490,5689];
exports.modules = {

/***/ 48710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
    if (args.length < required) {
        throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
    }
}


/***/ }),

/***/ 44818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
        return NaN;
    }
    var number = Number(dirtyNumber);
    if (isNaN(number)) {
        return number;
    }
    return number < 0 ? Math.ceil(number) : Math.floor(number);
}


/***/ }),

/***/ 51495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44818);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78844);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48710);



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */ function addDays(dirtyDate, dirtyAmount) {
    (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(2, arguments);
    var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDate);
    var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(dirtyAmount);
    if (isNaN(amount)) {
        return new Date(NaN);
    }
    if (!amount) {
        // If 0 days, no-op to avoid changing times in the hour before end of DST
        return date;
    }
    date.setDate(date.getDate() + amount);
    return date;
}


/***/ }),

/***/ 72058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ addMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44818);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78844);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48710);



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */ function addMonths(dirtyDate, dirtyAmount) {
    (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(2, arguments);
    var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDate);
    var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(dirtyAmount);
    if (isNaN(amount)) {
        return new Date(NaN);
    }
    if (!amount) {
        // If 0 months, no-op to avoid changing times in the hour before end of DST
        return date;
    }
    var dayOfMonth = date.getDate();
    // The JS Date object supports date math by accepting out-of-bounds values for
    // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
    // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
    // want except that dates will wrap around the end of a month, meaning that
    // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
    // we'll default to the end of the desired month by adding 1 to the desired
    // month and using a date of 0 to back up one day to the end of the desired
    // month.
    var endOfDesiredMonth = new Date(date.getTime());
    endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
    var daysInMonth = endOfDesiredMonth.getDate();
    if (dayOfMonth >= daysInMonth) {
        // If we're already at the end of the month, then this is the correct date
        // and we're done.
        return endOfDesiredMonth;
    } else {
        // Otherwise, we now know that setting the original day-of-month value won't
        // cause an overflow, so set the desired day-of-month. Note that we can't
        // just set the date of `endOfDesiredMonth` because that object may have had
        // its time changed in the unusual case where where a DST transition was on
        // the last day of the month and its local time was in the hour skipped or
        // repeated next to a DST transition.  So we use `date` instead which is
        // guaranteed to still have the original time.
        date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
        return date;
    }
}


/***/ }),

/***/ 95689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ sub)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(70335);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/subDays/index.js
var subDays = __webpack_require__(51301);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/toInteger/index.js
var toInteger = __webpack_require__(44818);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/addMonths/index.js
var addMonths = __webpack_require__(72058);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/requiredArgs/index.js
var requiredArgs = __webpack_require__(48710);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/subMonths/index.js



/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * const result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */ function subMonths(dirtyDate, dirtyAmount) {
    (0,requiredArgs/* default */.Z)(2, arguments);
    var amount = (0,toInteger/* default */.Z)(dirtyAmount);
    return (0,addMonths/* default */.Z)(dirtyDate, -amount);
}

;// CONCATENATED MODULE: ./node_modules/date-fns/esm/sub/index.js





/**
 * @name sub
 * @category Common Helpers
 * @summary Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @description
 * Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be subtracted
 *
 * | Key     | Description                        |
 * |---------|------------------------------------|
 * | years   | Amount of years to be subtracted   |
 * | months  | Amount of months to be subtracted  |
 * | weeks   | Amount of weeks to be subtracted   |
 * | days    | Amount of days to be subtracted    |
 * | hours   | Amount of hours to be subtracted   |
 * | minutes | Amount of minutes to be subtracted |
 * | seconds | Amount of seconds to be subtracted |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract the following duration from 15 June 2017 15:29:20
 * const result = sub(new Date(2017, 5, 15, 15, 29, 20), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> Mon Sep 1 2014 10:19:50
 */ function sub(date, duration) {
    (0,requiredArgs/* default */.Z)(2, arguments);
    if (!duration || (0,esm_typeof/* default */.Z)(duration) !== "object") return new Date(NaN);
    var years = duration.years ? (0,toInteger/* default */.Z)(duration.years) : 0;
    var months = duration.months ? (0,toInteger/* default */.Z)(duration.months) : 0;
    var weeks = duration.weeks ? (0,toInteger/* default */.Z)(duration.weeks) : 0;
    var days = duration.days ? (0,toInteger/* default */.Z)(duration.days) : 0;
    var hours = duration.hours ? (0,toInteger/* default */.Z)(duration.hours) : 0;
    var minutes = duration.minutes ? (0,toInteger/* default */.Z)(duration.minutes) : 0;
    var seconds = duration.seconds ? (0,toInteger/* default */.Z)(duration.seconds) : 0;
    // Subtract years and months
    var dateWithoutMonths = subMonths(date, months + years * 12);
    // Subtract weeks and days
    var dateWithoutDays = (0,subDays/* default */.Z)(dateWithoutMonths, days + weeks * 7);
    // Subtract hours, minutes and seconds
    var minutestoSub = minutes + hours * 60;
    var secondstoSub = seconds + minutestoSub * 60;
    var mstoSub = secondstoSub * 1000;
    var finalDate = new Date(dateWithoutDays.getTime() - mstoSub);
    return finalDate;
}


/***/ }),

/***/ 51301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ subDays)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51495);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48710);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44818);



/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */ function subDays(dirtyDate, dirtyAmount) {
    (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(2, arguments);
    var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyAmount);
    return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(dirtyDate, -amount);
}


/***/ }),

/***/ 78844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70335);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48710);


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */ function toDate(argument) {
    (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(1, arguments);
    var argStr = Object.prototype.toString.call(argument);
    // Clone the date
    if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(argument) === "object" && argStr === "[object Date]") {
        // Prevent the date to lose the milliseconds when passed to new Date() in IE10
        return new Date(argument.getTime());
    } else if (typeof argument === "number" || argStr === "[object Number]") {
        return new Date(argument);
    } else {
        if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
            // eslint-disable-next-line no-console
            console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
            // eslint-disable-next-line no-console
            console.warn(new Error().stack);
        }
        return new Date(NaN);
    }
}


/***/ }),

/***/ 62490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ot: () => (/* binding */ _invoices)
});

// UNUSED EXPORTS: INVOICE_SERVICE_OPTIONS, INVOICE_STATUS_OPTIONS

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(70335);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/addDays/index.js
var addDays = __webpack_require__(51495);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/addMonths/index.js
var addMonths = __webpack_require__(72058);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/toDate/index.js
var toDate = __webpack_require__(78844);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/requiredArgs/index.js
var requiredArgs = __webpack_require__(48710);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/toInteger/index.js
var toInteger = __webpack_require__(44818);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/add/index.js






/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */ function add(dirtyDate, duration) {
    (0,requiredArgs/* default */.Z)(2, arguments);
    if (!duration || (0,esm_typeof/* default */.Z)(duration) !== "object") return new Date(NaN);
    var years = duration.years ? (0,toInteger/* default */.Z)(duration.years) : 0;
    var months = duration.months ? (0,toInteger/* default */.Z)(duration.months) : 0;
    var weeks = duration.weeks ? (0,toInteger/* default */.Z)(duration.weeks) : 0;
    var days = duration.days ? (0,toInteger/* default */.Z)(duration.days) : 0;
    var hours = duration.hours ? (0,toInteger/* default */.Z)(duration.hours) : 0;
    var minutes = duration.minutes ? (0,toInteger/* default */.Z)(duration.minutes) : 0;
    var seconds = duration.seconds ? (0,toInteger/* default */.Z)(duration.seconds) : 0;
    // Add years and months
    var date = (0,toDate/* default */.Z)(dirtyDate);
    var dateWithMonths = months || years ? (0,addMonths/* default */.Z)(date, months + years * 12) : date;
    // Add weeks and days
    var dateWithDays = days || weeks ? (0,addDays/* default */.Z)(dateWithMonths, days + weeks * 7) : dateWithMonths;
    // Add days, hours, minutes and seconds
    var minutesToAdd = minutes + hours * 60;
    var secondsToAdd = seconds + minutesToAdd * 60;
    var msToAdd = secondsToAdd * 1000;
    var finalDate = new Date(dateWithDays.getTime() + msToAdd);
    return finalDate;
}

// EXTERNAL MODULE: ./node_modules/date-fns/esm/subDays/index.js
var subDays = __webpack_require__(51301);
// EXTERNAL MODULE: ./src/_mock/_mock.ts
var _mock = __webpack_require__(28672);
;// CONCATENATED MODULE: ./src/_mock/_others.ts

// ----------------------------------------------------------------------
const _carouselsMembers = [
    ...Array(6)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        name: _mock/* _mock */.Q.fullName(index),
        role: _mock/* _mock */.Q.role(index),
        avatarUrl: _mock/* _mock */.Q.image.portrait(index)
    }));
// ----------------------------------------------------------------------
const _faqs = [
    ...Array(8)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        value: `panel${index + 1}`,
        heading: `Questions ${index + 1}`,
        detail: _mock/* _mock */.Q.description(index)
    }));
// ----------------------------------------------------------------------
const _addressBooks = [
    ...Array(24)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        primary: index === 0,
        name: _mock/* _mock */.Q.fullName(index),
        email: _mock/* _mock */.Q.email(index + 1),
        fullAddress: _mock/* _mock */.Q.fullAddress(index),
        phoneNumber: _mock/* _mock */.Q.phoneNumber(index),
        company: _mock/* _mock */.Q.companyName(index + 1),
        addressType: index === 0 ? "Home" : "Office"
    }));
// ----------------------------------------------------------------------
const _contacts = [
    ...Array(20)
].map((_, index)=>{
    const status = index % 2 && "online" || index % 3 && "offline" || index % 4 && "alway" || "busy";
    return {
        id: _mock/* _mock */.Q.id(index),
        status,
        role: _mock/* _mock */.Q.role(index),
        email: _mock/* _mock */.Q.email(index),
        name: _mock/* _mock */.Q.fullName(index),
        phoneNumber: _mock/* _mock */.Q.phoneNumber(index),
        lastActivity: _mock/* _mock */.Q.time(index),
        avatarUrl: _mock/* _mock */.Q.image.avatar(index),
        address: _mock/* _mock */.Q.fullAddress(index)
    };
});
// ----------------------------------------------------------------------
const _notifications = [
    ...Array(9)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        avatarUrl: [
            _mock/* _mock */.Q.image.avatar(1),
            _mock/* _mock */.Q.image.avatar(2),
            _mock/* _mock */.Q.image.avatar(3),
            _mock/* _mock */.Q.image.avatar(4),
            _mock/* _mock */.Q.image.avatar(5),
            null,
            null,
            null,
            null,
            null
        ][index],
        type: [
            "friend",
            "project",
            "file",
            "tags",
            "payment",
            "order",
            "chat",
            "mail",
            "delivery"
        ][index],
        category: [
            "Communication",
            "Project UI",
            "File Manager",
            "File Manager",
            "File Manager",
            "Order",
            "Order",
            "Communication",
            "Communication"
        ][index],
        isUnRead: _mock/* _mock */.Q.boolean(index),
        createdAt: _mock/* _mock */.Q.time(index),
        title: index === 0 && `<p><strong>Deja Brady</strong> sent you a friend request</p>` || index === 1 && `<p><strong>Jayvon Hull</strong> mentioned you in <strong><a href='#'>Minimal UI</a></strong></p>` || index === 2 && `<p><strong>Lainey Davidson</strong> added file to <strong><a href='#'>File Manager</a></strong></p>` || index === 3 && `<p><strong>Angelique Morse</strong> added new tags to <strong><a href='#'>File Manager<a/></strong></p>` || index === 4 && `<p><strong>Giana Brandt</strong> request a payment of <strong>$200</strong></p>` || index === 5 && `<p>Your order is placed waiting for shipping</p>` || index === 6 && `<p>Delivery processing your order is being shipped</p>` || index === 7 && `<p>You have new message 5 unread messages</p>` || index === 8 && `<p>You have new mail` || ""
    }));
// ----------------------------------------------------------------------
const _mapContact = [
    {
        latlng: [
            33,
            65
        ],
        address: _mock/* _mock */.Q.fullAddress(1),
        phoneNumber: _mock/* _mock */.Q.phoneNumber(1)
    },
    {
        latlng: [
            -12.5,
            18.5
        ],
        address: _mock/* _mock */.Q.fullAddress(2),
        phoneNumber: _mock/* _mock */.Q.phoneNumber(2)
    }
];
// ----------------------------------------------------------------------
const _socials = [
    {
        value: "facebook",
        name: "FaceBook",
        icon: "eva:facebook-fill",
        color: "#1877F2",
        path: "https://www.facebook.com/caitlyn.kerluke"
    },
    {
        value: "instagram",
        name: "Instagram",
        icon: "ant-design:instagram-filled",
        color: "#E02D69",
        path: "https://www.instagram.com/caitlyn.kerluke"
    },
    {
        value: "linkedin",
        name: "Linkedin",
        icon: "eva:linkedin-fill",
        color: "#007EBB",
        path: "https://www.linkedin.com/caitlyn.kerluke"
    },
    {
        value: "twitter",
        name: "Twitter",
        icon: "eva:twitter-fill",
        color: "#00AAEC",
        path: "https://www.twitter.com/caitlyn.kerluke"
    }
];
// ----------------------------------------------------------------------
const _homePlans = [
    ...Array(3)
].map((_, index)=>({
        license: [
            "Standard",
            "Standard Plus",
            "Extended"
        ][index],
        commons: [
            "One end products",
            "12 months updates",
            "6 months of support"
        ],
        options: [
            "JavaScript version",
            "TypeScript version",
            "Design Resources",
            "Commercial applications"
        ],
        icons: [
            "/assets/icons/platforms/ic_figma.svg",
            "/assets/icons/platforms/ic_js.svg",
            "/assets/icons/platforms/ic_ts.svg"
        ]
    }));
// ----------------------------------------------------------------------
const _pricingPlans = [
    {
        subscription: "basic",
        price: 0,
        caption: "Forever",
        lists: [
            "3 Prototypes",
            "3 Boards",
            "Up To 5 Team Members"
        ],
        labelAction: "Current Plan"
    },
    {
        subscription: "starter",
        price: 4.99,
        caption: "Saving $24 a year",
        lists: [
            "3 Prototypes",
            "3 Boards",
            "Up To 5 Team Members",
            "Advanced Security",
            "Issue Escalation"
        ],
        labelAction: "Choose Starter"
    },
    {
        subscription: "premium",
        price: 9.99,
        caption: "Saving $124 a year",
        lists: [
            "3 Prototypes",
            "3 Boards",
            "Up To 5 Team Members",
            "Advanced Security",
            "Issue Escalation",
            "Issue Development license",
            "Permissions & workflows"
        ],
        labelAction: "Choose Premium"
    }
];
// ----------------------------------------------------------------------
const _testimonials = [
    {
        name: _mock/* _mock */.Q.fullName(1),
        postedDate: _mock/* _mock */.Q.time(1),
        ratingNumber: _mock/* _mock */.Q.number.rating(1),
        avatarUrl: _mock/* _mock */.Q.image.avatar(1),
        content: `Excellent Work! Thanks a lot!`
    },
    {
        name: _mock/* _mock */.Q.fullName(2),
        postedDate: _mock/* _mock */.Q.time(2),
        ratingNumber: _mock/* _mock */.Q.number.rating(2),
        avatarUrl: _mock/* _mock */.Q.image.avatar(2),
        content: `It's a very good dashboard and we are really liking the product . We've done some things, like migrate to TS and implementing a react useContext api, to fit our job methodology but the product is one of the best in terms of design and application architecture. The team did a really good job.`
    },
    {
        name: _mock/* _mock */.Q.fullName(3),
        postedDate: _mock/* _mock */.Q.time(3),
        ratingNumber: _mock/* _mock */.Q.number.rating(3),
        avatarUrl: _mock/* _mock */.Q.image.avatar(3),
        content: `Customer support is realy fast and helpful the desgin of this theme is looks amazing also the code is very clean and readble realy good job !`
    },
    {
        name: _mock/* _mock */.Q.fullName(4),
        postedDate: _mock/* _mock */.Q.time(4),
        ratingNumber: _mock/* _mock */.Q.number.rating(4),
        avatarUrl: _mock/* _mock */.Q.image.avatar(4),
        content: `Amazing, really good code quality and gives you a lot of examples for implementations.`
    },
    {
        name: _mock/* _mock */.Q.fullName(5),
        postedDate: _mock/* _mock */.Q.time(5),
        ratingNumber: _mock/* _mock */.Q.number.rating(5),
        avatarUrl: _mock/* _mock */.Q.image.avatar(5),
        content: `Got a few questions after purchasing the product. The owner responded very fast and very helpfull. Overall the code is excellent and works very good. 5/5 stars!`
    },
    {
        name: _mock/* _mock */.Q.fullName(6),
        postedDate: _mock/* _mock */.Q.time(6),
        ratingNumber: _mock/* _mock */.Q.number.rating(6),
        avatarUrl: _mock/* _mock */.Q.image.avatar(6),
        content: `CEO of Codealy.io here. We’ve built a developer assessment platform that makes sense - tasks are based on git repositories and run in virtual machines. We automate the pain points - storing candidates code, running it and sharing test results with the whole team, remotely. Bought this template as we need to provide an awesome dashboard for our early customers. I am super happy with purchase. The code is just as good as the design. Thanks!`
    }
];

;// CONCATENATED MODULE: ./src/_mock/_invoice.ts


//


// ----------------------------------------------------------------------
const INVOICE_STATUS_OPTIONS = [
    {
        value: "paid",
        label: "Paid"
    },
    {
        value: "pending",
        label: "Pending"
    },
    {
        value: "overdue",
        label: "Overdue"
    },
    {
        value: "draft",
        label: "Draft"
    }
];
const INVOICE_SERVICE_OPTIONS = [
    ...Array(8)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        name: _mock/* _mock */.Q.role(index),
        price: _mock/* _mock */.Q.number.price(index)
    }));
const ITEMS = [
    ...Array(3)
].map((__, index)=>{
    const total = INVOICE_SERVICE_OPTIONS[index].price * _mock/* _mock */.Q.number.nativeS(index);
    return {
        id: _mock/* _mock */.Q.id(index),
        total,
        title: _mock/* _mock */.Q.productName(index),
        description: _mock/* _mock */.Q.sentence(index),
        price: INVOICE_SERVICE_OPTIONS[index].price,
        service: INVOICE_SERVICE_OPTIONS[index].name,
        quantity: _mock/* _mock */.Q.number.nativeS(index)
    };
});
const _invoices = [
    ...Array(20)
].map((_, index)=>{
    const taxes = _mock/* _mock */.Q.number.price(index + 1);
    const discount = _mock/* _mock */.Q.number.price(index + 2);
    const shipping = _mock/* _mock */.Q.number.price(index + 3);
    const subTotal = ITEMS.reduce((accumulator, item)=>accumulator + item.price * item.quantity, 0);
    const totalAmount = subTotal - shipping - discount + taxes;
    const status = index % 2 && "paid" || index % 3 && "pending" || index % 4 && "overdue" || "draft";
    return {
        id: _mock/* _mock */.Q.id(index),
        taxes,
        status,
        discount,
        shipping,
        subTotal,
        totalAmount,
        items: ITEMS,
        invoiceNumber: `INV-199${index}`,
        invoiceFrom: _addressBooks[index],
        invoiceTo: _addressBooks[index + 1],
        sent: _mock/* _mock */.Q.number.nativeS(index),
        createDate: (0,subDays/* default */.Z)(new Date(), index),
        dueDate: add(new Date(), {
            days: index + 15,
            hours: index
        })
    };
});


/***/ }),

/***/ 28672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ _mock)
/* harmony export */ });
/* harmony import */ var date_fns_sub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95689);
/* harmony import */ var src_config_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9090);
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65935);

// config

//

// ----------------------------------------------------------------------
const _mock = {
    id: (index)=>_assets__WEBPACK_IMPORTED_MODULE_1__/* ._id */ .ZV[index],
    time: (index)=>(0,date_fns_sub__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(new Date(), {
            days: index,
            hours: index
        }),
    boolean: (index)=>_assets__WEBPACK_IMPORTED_MODULE_1__/* ._booleans */ .si[index],
    role: (index)=>_assets__WEBPACK_IMPORTED_MODULE_1__/* ._roles */ .YX[index],
    // Text
    taskNames: (index)=>_assets__WEBPACK_IMPORTED_MODULE_1__/* ._taskNames */ .he[index],
    postTitle: (index)=>_assets__WEBPACK_IMPORTED_MODULE_1__/* ._postTitles */ .zu[index],
    jobTitle: (index)=>_assets__WEBPACK_IMPORTED_MODULE_1__/* ._jobTitles */ .dr[index],
    tourName: (index)=>_assets__WEBPACK_IMPORTED_MODULE_1__/* ._tourNames */ .PG[index],
    productName: (index)=>_assets__WEBPACK_IMPORTED_MODULE_1__/* ._productNames */ .GO[index],
    sentence: (index)=>_assets__WEBPACK_IMPORTED_MODULE_1__/* ._sentences */ .Op[index],
    description: (index)=>_assets__WEBPACK_IMPORTED_MODULE_1__/* ._descriptions */ .ji[index],
    // Contact
    email: (index)=>_assets__WEBPACK_IMPORTED_MODULE_1__/* ._emails */ .wC[index],
    phoneNumber: (index)=>_assets__WEBPACK_IMPORTED_MODULE_1__/* ._phoneNumbers */ .DI[index],
    fullAddress: (index)=>_assets__WEBPACK_IMPORTED_MODULE_1__/* ._fullAddress */ .D7[index],
    // Name
    firstName: (index)=>_assets__WEBPACK_IMPORTED_MODULE_1__/* ._firstNames */ .yw[index],
    lastName: (index)=>_assets__WEBPACK_IMPORTED_MODULE_1__/* ._lastNames */ .d3[index],
    fullName: (index)=>_assets__WEBPACK_IMPORTED_MODULE_1__/* ._fullNames */ .f9[index],
    companyName: (index)=>_assets__WEBPACK_IMPORTED_MODULE_1__/* ._companyNames */ .Vh[index],
    // Number
    number: {
        percent: (index)=>_assets__WEBPACK_IMPORTED_MODULE_1__/* ._percents */ .$8[index],
        rating: (index)=>_assets__WEBPACK_IMPORTED_MODULE_1__/* ._ratings */ .CS[index],
        age: (index)=>_assets__WEBPACK_IMPORTED_MODULE_1__/* ._ages */ .Jy[index],
        price: (index)=>_assets__WEBPACK_IMPORTED_MODULE_1__/* ._prices */ .Ig[index],
        nativeS: (index)=>_assets__WEBPACK_IMPORTED_MODULE_1__/* ._nativeS */ ._v[index],
        nativeM: (index)=>_assets__WEBPACK_IMPORTED_MODULE_1__/* ._nativeM */ .ih[index],
        nativeL: (index)=>_assets__WEBPACK_IMPORTED_MODULE_1__/* ._nativeL */ .$b[index]
    },
    // Image
    image: {
        cover: (index)=>`${src_config_global__WEBPACK_IMPORTED_MODULE_0__/* .ASSETS_API */ .pY}/assets/images/cover/cover_${index + 1}.jpg`,
        avatar: (index)=>`${src_config_global__WEBPACK_IMPORTED_MODULE_0__/* .ASSETS_API */ .pY}/assets/images/avatar/avatar_${index + 1}.jpg`,
        travel: (index)=>`${src_config_global__WEBPACK_IMPORTED_MODULE_0__/* .ASSETS_API */ .pY}/assets/images/travel/travel_${index + 1}.jpg`,
        company: (index)=>`${src_config_global__WEBPACK_IMPORTED_MODULE_0__/* .ASSETS_API */ .pY}/assets/images/company/company_${index + 1}.png`,
        product: (index)=>`${src_config_global__WEBPACK_IMPORTED_MODULE_0__/* .ASSETS_API */ .pY}/assets/images/m_product/product_${index + 1}.jpg`,
        portrait: (index)=>`${src_config_global__WEBPACK_IMPORTED_MODULE_0__/* .ASSETS_API */ .pY}/assets/images/portrait/portrait_${index + 1}.jpg`
    }
};


/***/ }),

/***/ 65935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $8: () => (/* binding */ _percents),
/* harmony export */   $b: () => (/* binding */ _nativeL),
/* harmony export */   CS: () => (/* binding */ _ratings),
/* harmony export */   D7: () => (/* binding */ _fullAddress),
/* harmony export */   DI: () => (/* binding */ _phoneNumbers),
/* harmony export */   GO: () => (/* binding */ _productNames),
/* harmony export */   Ig: () => (/* binding */ _prices),
/* harmony export */   Jy: () => (/* binding */ _ages),
/* harmony export */   Op: () => (/* binding */ _sentences),
/* harmony export */   PG: () => (/* binding */ _tourNames),
/* harmony export */   Qw: () => (/* binding */ _tags),
/* harmony export */   Vh: () => (/* binding */ _companyNames),
/* harmony export */   YX: () => (/* binding */ _roles),
/* harmony export */   ZV: () => (/* binding */ _id),
/* harmony export */   _v: () => (/* binding */ _nativeS),
/* harmony export */   d3: () => (/* binding */ _lastNames),
/* harmony export */   dr: () => (/* binding */ _jobTitles),
/* harmony export */   f9: () => (/* binding */ _fullNames),
/* harmony export */   he: () => (/* binding */ _taskNames),
/* harmony export */   ih: () => (/* binding */ _nativeM),
/* harmony export */   ji: () => (/* binding */ _descriptions),
/* harmony export */   si: () => (/* binding */ _booleans),
/* harmony export */   wC: () => (/* binding */ _emails),
/* harmony export */   yw: () => (/* binding */ _firstNames),
/* harmony export */   zu: () => (/* binding */ _postTitles)
/* harmony export */ });
// ----------------------------------------------------------------------
const _id = [
    ...Array(40)
].map((_, index)=>`e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`);
const _fullAddress = [
    "19034 Verna Unions Apt. 164 - Honolulu, RI / 87535",
    "1147 Rohan Drive Suite 819 - Burlington, VT / 82021",
    "18605 Thompson Circle Apt. 086 - Idaho Falls, WV / 50337",
    "110 Lamar Station Apt. 730 - Hagerstown, OK / 49808",
    "36901 Elmer Spurs Apt. 762 - Miramar, DE / 92836",
    "2089 Runolfsson Harbors Suite 886 - Chapel Hill, TX / 32827",
    "279 Karolann Ports Apt. 774 - Prescott Valley, WV / 53905",
    "96607 Claire Square Suite 591 - St. Louis Park, HI / 40802",
    "9388 Auer Station Suite 573 - Honolulu, AK / 98024",
    "47665 Adaline Squares Suite 510 - Blacksburg, NE / 53515",
    "989 Vernice Flats Apt. 183 - Billings, NV / 04147",
    "91020 Wehner Locks Apt. 673 - Albany, WY / 68763",
    "585 Candelario Pass Suite 090 - Columbus, LA / 25376",
    "80988 Renner Crest Apt. 000 - Fargo, VA / 24266",
    "28307 Shayne Pike Suite 523 - North Las Vegas, AZ / 28550",
    "205 Farrell Highway Suite 333 - Rock Hill, OK / 63421",
    "253 Kara Motorway Suite 821 - Manchester, SD / 09331",
    "13663 Kiara Oval Suite 606 - Missoula, AR / 44478",
    "8110 Claire Port Apt. 703 - Anchorage, TN / 01753",
    "4642 Demetris Lane Suite 407 - Edmond, AZ / 60888",
    "74794 Asha Flat Suite 890 - Lancaster, OR / 13466",
    "8135 Keeling Pines Apt. 326 - Alexandria, MA / 89442",
    "441 Gibson Shores Suite 247 - Pasco, NM / 60678",
    "4373 Emelia Valley Suite 596 - Columbia, NM / 42586"
];
// ----------------------------------------------------------------------
const _booleans = [
    true,
    true,
    true,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
    true
];
// ----------------------------------------------------------------------
const _emails = [
    "nannie_abernathy70@yahoo.com",
    "ashlynn_ohara62@gmail.com",
    "milo.farrell@hotmail.com",
    "violet.ratke86@yahoo.com",
    "letha_lubowitz24@yahoo.com",
    "aditya_greenfelder31@gmail.com",
    "lenna_bergnaum27@hotmail.com",
    "luella.ryan33@gmail.com",
    "joana.simonis84@gmail.com",
    "marjolaine_white94@gmail.com",
    "vergie_block82@hotmail.com",
    "vito.hudson@hotmail.com",
    "tyrel_greenholt@gmail.com",
    "dwight.block85@yahoo.com",
    "mireya13@hotmail.com",
    "dasia_jenkins@hotmail.com",
    "benny89@yahoo.com",
    "dawn.goyette@gmail.com",
    "zella_hickle4@yahoo.com",
    "avery43@hotmail.com",
    "olen_legros@gmail.com",
    "jimmie.gerhold73@hotmail.com",
    "genevieve.powlowski@hotmail.com",
    "louie.kuphal39@gmail.com"
];
// ----------------------------------------------------------------------
const _fullNames = [
    "Jayvion Simon",
    "Lucian Obrien",
    "Deja Brady",
    "Harrison Stein",
    "Reece Chung",
    "Lainey Davidson",
    "Cristopher Cardenas",
    "Melanie Noble",
    "Chase Day",
    "Shawn Manning",
    "Soren Durham",
    "Cortez Herring",
    "Brycen Jimenez",
    "Giana Brandt",
    "Aspen Schmitt",
    "Colten Aguilar",
    "Angelique Morse",
    "Selina Boyer",
    "Lawson Bass",
    "Ariana Lang",
    "Amiah Pruitt",
    "Harold Mcgrath",
    "Esperanza Mcintyre",
    "Mireya Conner"
];
const _firstNames = [
    "Mossie",
    "David",
    "Ebba",
    "Chester",
    "Eula",
    "Jaren",
    "Boyd",
    "Brady",
    "Aida",
    "Anastasia",
    "Gregoria",
    "Julianne",
    "Ila",
    "Elyssa",
    "Lucio",
    "Lewis",
    "Jacinthe",
    "Molly",
    "Brown",
    "Fritz",
    "Keon",
    "Ella",
    "Ken",
    "Whitney"
];
const _lastNames = [
    "Carroll",
    "Simonis",
    "Yost",
    "Hand",
    "Emmerich",
    "Wilderman",
    "Howell",
    "Sporer",
    "Boehm",
    "Morar",
    "Koch",
    "Reynolds",
    "Padberg",
    "Watsica",
    "Upton",
    "Yundt",
    "Pfeffer",
    "Parker",
    "Zulauf",
    "Treutel",
    "McDermott",
    "McDermott",
    "Cruickshank",
    "Parisian"
];
// ----------------------------------------------------------------------
const _prices = [
    83.74,
    97.14,
    68.71,
    85.21,
    52.17,
    25.18,
    43.84,
    60.98,
    98.42,
    53.37,
    72.75,
    56.61,
    64.55,
    77.32,
    60.62,
    79.81,
    93.68,
    47.44,
    76.24,
    92.87,
    72.91,
    20.54,
    94.25,
    37.51
];
const _ratings = [
    4.2,
    3.7,
    4.5,
    3.5,
    0.5,
    3.0,
    2.5,
    2.8,
    4.9,
    3.6,
    2.5,
    1.7,
    3.9,
    2.8,
    4.1,
    4.5,
    2.2,
    3.2,
    0.6,
    1.3,
    3.8,
    3.8,
    3.8,
    2.0
];
const _ages = [
    30,
    26,
    59,
    47,
    29,
    46,
    18,
    56,
    39,
    19,
    45,
    18,
    46,
    56,
    38,
    41,
    44,
    48,
    32,
    45,
    42,
    60,
    33,
    57
];
const _percents = [
    10.1,
    13.6,
    28.2,
    42.1,
    37.2,
    18.5,
    40.1,
    94.8,
    91.4,
    53.0,
    25.4,
    62.9,
    86.6,
    62.4,
    35.4,
    17.6,
    52.0,
    6.8,
    95.3,
    26.6,
    69.9,
    92.1,
    46.2,
    85.6
];
const _nativeS = [
    11,
    10,
    7,
    10,
    12,
    5,
    10,
    1,
    8,
    8,
    10,
    11,
    12,
    8,
    4,
    11,
    8,
    9,
    4,
    9,
    2,
    6,
    3,
    7
];
const _nativeM = [
    497,
    763,
    684,
    451,
    433,
    463,
    951,
    194,
    425,
    435,
    807,
    521,
    538,
    839,
    394,
    269,
    453,
    821,
    364,
    849,
    804,
    776,
    263,
    239
];
const _nativeL = [
    9911,
    1947,
    9124,
    6984,
    8488,
    2034,
    3364,
    8401,
    8996,
    5271,
    8478,
    1139,
    8061,
    3035,
    6733,
    3952,
    2405,
    3127,
    6843,
    4672,
    6995,
    6053,
    5192,
    9686
];
// ----------------------------------------------------------------------
const _phoneNumbers = [
    "365-374-4961",
    "904-966-2836",
    "399-757-9909",
    "692-767-2903",
    "990-588-5716",
    "955-439-2578",
    "226-924-4058",
    "552-917-1454",
    "285-840-9338",
    "306-269-2446",
    "883-373-6253",
    "476-509-8866",
    "201-465-1954",
    "538-295-9408",
    "531-492-6028",
    "981-699-7588",
    "500-268-4826",
    "205-952-3828",
    "222-255-5190",
    "408-439-8033",
    "272-940-8266",
    "812-685-8057",
    "353-801-5212",
    "606-285-8928"
];
// ----------------------------------------------------------------------
const _roles = [
    "HR Manager",
    "Data Analyst",
    "Legal Counsel",
    "UX/UI Designer",
    "Project Manager",
    "Account Manager",
    "Registered Nurse",
    "Business Analyst",
    "Creative Director",
    "Financial Planner",
    "Event Coordinator",
    "Marketing Director",
    "Software Developer",
    "Research Scientist",
    "Content Strategist",
    "Operations Manager",
    "Sales Representative",
    "Supply Chain Analyst",
    "Operations Coordinator",
    "Customer Service Associate",
    "Quality Assurance Specialist",
    "CEO",
    "CFO",
    "CTO"
];
// ----------------------------------------------------------------------
const _postTitles = [
    "10 Essential Tips for Healthy Living",
    "The Ultimate Guide to Productivity Hacks",
    "Exploring the Hidden Gems of [Destination]",
    "How to Master the Art of Public Speaking",
    "The Future of Artificial Intelligence: Trends and Insights",
    "Delicious Recipes for a Vegan Diet",
    "A Beginner's Guide to Investing in Stocks",
    "The Impact of Social Media on Society",
    "10 Must-Visit Destinations for Adventure Travelers",
    "The Benefits of Mindfulness Meditation",
    "The Importance of Mental Health Awareness",
    "Building a Strong Personal Brand: Tips and Strategies",
    "10 Effective Strategies for Digital Marketing Success",
    "Unveiling the Secrets of Successful Entrepreneurs",
    "The Rise of Remote Work and its Impact on the Workforce",
    "The Art of Landscape Photography: Techniques and Inspiration",
    "Understanding Blockchain Technology and its Potential Applications",
    "How to Create Engaging Content for Social Media",
    "The Role of Artificial Intelligence in Healthcare",
    "10 Home Organization Hacks for a Clutter-Free Space",
    "Exploring the History and Culture of [City/Region]",
    "The Power of Positive Thinking: Transform Your Mindset",
    "The Influence of Music on Mood and Emotions",
    "Travel Photography Tips: Capturing Memories Around the World"
];
// ----------------------------------------------------------------------
const _productNames = [
    "Nike Air Force 1 NDESTRUKT",
    "Foundations Matte Flip Flop",
    "Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear",
    "Arizona Soft Footbed Sandal",
    "Boston Soft Footbed Sandal",
    "Zoom Freak 2",
    "Gazelle Vintage low-top sneakers",
    "Jordan Delta",
    "Air Jordan XXXV PF",
    "Rod Laver low-top sneakers",
    "Kyrie 7 EP Sisterhood",
    "Pharrell Williams Human Race NMD sneakers",
    "Nike Blazer Low 77 Vintage",
    "ASMC Winter Boot Cold.Rdy",
    "ZX 8000 Lego sneakers",
    "Ultraboost 21 sneakers",
    "2750 Cotu Classic Sneaker",
    "ZX 9000 A-ZX Series sneakers",
    "Madrid Big Buckle Sandal",
    "Chuck 70 Hi Sneaker",
    "Relaxed Adjustable Strap Slingback Sandal",
    "Superturf Adventure X Atmos",
    "Chuck Taylor All Star Lift Sneaker",
    "Run Star Hike Platform Sneaker"
];
// ----------------------------------------------------------------------
const _tourNames = [
    "Adventure Seekers Expedition",
    "Historic Heritage Tour",
    "Culinary Delights Exploration",
    "Nature's Wonders Escapade",
    "Cultural Immersion Journey",
    "Wildlife Safari Expedition",
    "Urban Explorer's City Tour",
    "Coastal Paradise Getaway",
    "Wine Tasting Experience",
    "Spiritual Retreat Tour",
    "Outdoor Adventure Trek",
    "Photography Expedition",
    "Music and Arts Discovery Tour",
    "Wellness and Yoga Retreat",
    "Hidden Gems Discovery Tour",
    "Volcano and Geothermal Exploration",
    "Foodie's Gastronomic Tour",
    "Hiking and Camping Adventure",
    "Architecture and Design Tour",
    "Coastal Cruise and Island Hopping",
    "Scenic Train Ride Experience",
    "Historical Landmarks Expedition",
    "Surfing and Beach Adventure",
    "Nightlife and Entertainment Tour"
];
// ----------------------------------------------------------------------
const _jobTitles = [
    "Software Engineer",
    "Marketing Manager",
    "Financial Analyst",
    "Graphic Designer",
    "Sales Representative",
    "Project Manager",
    "Data Scientist",
    "Human Resources Coordinator",
    "Accountant",
    "Customer Service Representative",
    "Nurse",
    "Product Manager",
    "Operations Manager",
    "Social Media Specialist",
    "Business Development Executive",
    "Content Writer",
    "Web Developer",
    "Electrical Engineer",
    "Research Scientist",
    "Legal Assistant",
    "Chef",
    "Financial Planner",
    "Architect",
    "Event Planner"
];
// ----------------------------------------------------------------------
const _companyNames = [
    "Lueilwitz and Sons",
    "Gleichner, Mueller and Tromp",
    "Nikolaus - Leuschke",
    "Hegmann, Kreiger and Bayer",
    "Grimes Inc",
    "Durgan - Murazik",
    "Altenwerth, Medhurst and Roberts",
    "Raynor Group",
    "Mraz, Donnelly and Collins",
    "Padberg - Bailey",
    "Heidenreich, Stokes and Parker",
    "Pagac and Sons",
    "Rempel, Hand and Herzog",
    "Dare - Treutel",
    "Kihn, Marquardt and Crist",
    "Nolan - Kunde",
    "Wuckert Inc",
    "Dibbert Inc",
    "Goyette and Sons",
    "Feest Group",
    "Bosco and Sons",
    "Bartell - Kovacek",
    "Schimmel - Raynor",
    "Tremblay LLC"
];
// ----------------------------------------------------------------------
const _tags = [
    "Technology",
    "Marketing",
    "Design",
    "Photography",
    "Art",
    "Fashion",
    "Food",
    "Travel",
    "Fitness",
    "Nature",
    "Business",
    "Music",
    "Health",
    "Books",
    "Sports",
    "Film",
    "Education",
    "Motivation",
    "Gaming",
    "Pets",
    "Cooking",
    "Finance",
    "Selfcare",
    "Writing"
];
// ----------------------------------------------------------------------
const _taskNames = [
    "Complete Project Proposal",
    "Conduct Market Research",
    "Design User Interface Mockups",
    "Develop Backend API",
    "Implement Authentication System",
    "Write Test Cases",
    "Perform Database Optimization",
    "Create Content Marketing Plan",
    "Update Website Copy",
    "Conduct A/B Testing",
    "Create Social Media Graphics",
    "Optimize Website Performance",
    "Review Competitor Websites",
    "Implement Payment Gateway Integration",
    "Conduct User Acceptance Testing",
    "Prepare Monthly Sales Report",
    "Enhance SEO Strategy",
    "Conduct Customer Satisfaction Survey",
    "Design Email Newsletter Template",
    "Monitor Server Logs for Errors",
    "Create Training Materials",
    "Plan and Execute Marketing Campaign",
    "Develop Mobile Application",
    "Coordinate Project Meetings"
];
// ----------------------------------------------------------------------
const _sentences = [
    "The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.",
    "She eagerly opened the gift, her eyes sparkling with excitement.",
    "The old oak tree stood tall and majestic, its branches swaying gently in the breeze.",
    "The aroma of freshly brewed coffee filled the air, awakening my senses.",
    "The children giggled with joy as they ran through the sprinklers on a hot summer day.",
    "He carefully crafted a beautiful sculpture out of clay, his hands skillfully shaping the intricate details.",
    "The concert was a mesmerizing experience, with the music filling the venue and the crowd cheering in delight.",
    "The waves crashed against the shore, creating a soothing symphony of sound.",
    "The scent of blooming flowers wafted through the garden, creating a fragrant paradise.",
    "She gazed up at the night sky, marveling at the twinkling stars that dotted the darkness.",
    "The professor delivered a captivating lecture, engaging the students with thought-provoking ideas.",
    "The hiker trekked through the dense forest, guided by the soft glow of sunlight filtering through the trees.",
    "The delicate butterfly gracefully fluttered from flower to flower, sipping nectar with its slender proboscis.",
    "The aroma of freshly baked cookies filled the kitchen, tempting everyone with its irresistible scent.",
    "The majestic waterfall cascaded down the rocks, creating a breathtaking display of nature's power.",
    "The actor delivered a powerful performance, moving the audience to tears with his emotional portrayal.",
    "The book transported me to a magical world, where imagination knew no bounds.",
    "The scent of rain filled the air as dark clouds gathered overhead, promising a refreshing downpour.",
    "The chef skillfully plated the dish, turning simple ingredients into a work of culinary art.",
    "The newborn baby let out a tiny cry, announcing its arrival to the world.",
    "The athlete sprinted across the finish line, arms raised in victory as the crowd erupted in applause.",
    "The ancient ruins stood as a testament to a civilization long gone, their grandeur still awe-inspiring.",
    "The artist dipped the brush into vibrant paint, bringing the canvas to life with bold strokes and vivid colors.",
    "The laughter of children echoed through the playground, filling the atmosphere with pure joy."
];
// ----------------------------------------------------------------------
const _descriptions = [
    `Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.`,
    `Atque eaque ducimus minima distinctio velit. Laborum et veniam officiis. Delectus ex saepe hic id laboriosam officia. Odit nostrum qui illum saepe debitis ullam. Laudantium beatae modi fugit ut. Dolores consequatur beatae nihil voluptates rem maiores.`,
    `Rerum eius velit dolores. Explicabo ad nemo quibusdam. Voluptatem eum suscipit et ipsum et consequatur aperiam quia. Rerum nulla sequi recusandae illum velit quia quas. Et error laborum maiores cupiditate occaecati.`,
    `Et non omnis qui. Qui sunt deserunt dolorem aut velit cumque adipisci aut enim. Nihil quis quisquam nesciunt dicta nobis ab aperiam dolorem repellat. Voluptates non blanditiis. Error et tenetur iste soluta cupiditate ratione perspiciatis et. Quibusdam aliquid nam sunt et quisquam non esse.`,
    `Nihil ea sunt facilis praesentium atque. Ab animi alias sequi molestias aut velit ea. Sed possimus eos. Et est aliquid est voluptatem.`,
    `Non rerum modi. Accusamus voluptatem odit nihil in. Quidem et iusto numquam veniam culpa aperiam odio aut enim. Quae vel dolores. Pariatur est culpa veritatis aut dolorem.`,
    `Est enim et sit non impedit aperiam cumque animi. Aut eius impedit saepe blanditiis. Totam molestias magnam minima fugiat.`,
    `Unde a inventore et. Sed esse ut. Atque ducimus quibusdam fuga quas id qui fuga.`,
    `Eaque natus adipisci soluta nostrum dolorem. Nesciunt ipsum molestias ut aliquid natus ut omnis qui fugiat. Dolor et rem. Ut neque voluptatem blanditiis quasi ullam deleniti.`,
    `Nam et error exercitationem qui voluptate optio. Officia omnis qui accusantium ipsam qui. Quia sequi nulla perspiciatis optio vero omnis maxime omnis ipsum. Perspiciatis consequuntur asperiores veniam dolores.`,
    `Perspiciatis nulla ut ut ut voluptates totam consectetur eligendi qui. Optio ut cum. Dolorum sapiente qui laborum. Impedit temporibus totam delectus nihil. Voluptatem corrupti rem.`,
    `Distinctio omnis similique omnis eos. Repellat cumque rerum nisi. Reiciendis soluta non ut veniam temporibus. Accusantium et dolorem voluptas harum. Nemo eius voluptate dicta et hic nemo. Dolorem assumenda et beatae molestias sit quo mollitia quis consequatur.`,
    `Sed ut mollitia tempore ipsam et illum doloribus ut. Occaecati ratione veritatis explicabo. Omnis nam omnis sunt placeat tempore accusantium placeat distinctio velit.`,
    `Eum illo dicta et perspiciatis ut blanditiis eos sequi. Ea veritatis aut et voluptas aut. Laborum eos quia tempore a culpa.`,
    `Aut quos quae dolores repudiandae similique perferendis perferendis earum laudantium. Facere placeat natus nobis. Eius vitae ullam dolorem.`,
    `Vero dolorem et voluptatem fugit tempore a quam iure. Fuga consequatur corrupti sunt asperiores vitae. Libero totam repellendus animi debitis illum et sunt officia.`,
    `Cupiditate illum officiis id molestiae. Numquam non molestiae aliquid et natus sed hic. Alias quia explicabo sed corrupti sint. Natus in et odio qui unde facilis quia. Est sit eius laboriosam aliquid non aperiam quia quo corporis.`,
    `Et a ab. Optio aspernatur minus tempora amet vitae consectetur inventore cumque. Sed et omnis. Aspernatur a magnam.`,
    `Ipsum omnis et. Quia ea et autem tempore consequuntur veniam dolorem officiis. Ipsa dicta et ut quidem quia doloremque. Sequi vitae doloremque temporibus. Deserunt incidunt id aperiam itaque natus. Earum sit eaque quas incidunt nihil.`,
    `Quae consequatur reiciendis. Consequatur non optio. Eaque id placeat. Commodi quo officia aut repudiandae reiciendis tempore voluptatem et. Ut accusamus qui itaque maxime aliquam. Fugit ut animi molestiae porro maiores.`,
    `Modi hic asperiores ab cumque quam est aut. Voluptas atque quos molestias. Ut excepturi distinctio ipsam aspernatur sit.`,
    `Sunt totam facilis. Quam commodi voluptatem veniam. Tempora deleniti itaque fugit nihil voluptas.`,
    `Ipsam aliquam velit nobis repellendus officiis aut deserunt id et. Nihil sunt aut dolores aut. Dolores est ipsa quia et laborum quidem laborum accusamus id. Facilis odit quod hic laudantium saepe omnis nisi in sint. Sed cupiditate possimus id.`,
    `Magnam non eveniet optio optio ut aliquid atque. Velit libero aspernatur quis laborum consequatur laudantium. Tempora facere optio fugit accusantium ut. Omnis aspernatur reprehenderit autem esse ut ut enim voluptatibus.`
];


/***/ }),

/***/ 9090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  pY: () => (/* binding */ ASSETS_API),
  E0: () => (/* binding */ HOST_API)
});

// UNUSED EXPORTS: AMPLIFY_API, AUTH0_API, FIREBASE_API, MAPBOX_API, PATH_AFTER_LOGIN

// EXTERNAL MODULE: ./src/utils/change-case.ts
var change_case = __webpack_require__(86481);
// EXTERNAL MODULE: ./src/_mock/assets.ts
var assets = __webpack_require__(65935);
;// CONCATENATED MODULE: ./src/routes/paths.ts
// utils


// ----------------------------------------------------------------------
const MOCK_ID = assets/* _id */.ZV[1];
const MOCK_TITLE = assets/* _postTitles */.zu[2];
const ROOTS = {
    AUTH: "/auth",
    AUTH_DEMO: "/auth-demo",
    DASHBOARD: "/dashboard"
};
// ----------------------------------------------------------------------
const paths = {
    comingSoon: "/coming-soon",
    maintenance: "/maintenance",
    pricing: "/pricing",
    payment: "/payment",
    about: "/about-us",
    contact: "/contact-us",
    faqs: "/faqs",
    expenseCategoryMaster: "/expense-category-master",
    budgeting: "/budgeting",
    // annualExpenseTrends: '/annual-expense-trends',
    page403: "/error/403",
    page404: "/error/404",
    page500: "/error/500",
    components: "/components",
    docs: "https://docs.minimals.cc",
    changelog: "https://docs.minimals.cc/changelog",
    zoneUI: "https://mui.com/store/items/zone-landing-page/",
    minimalUI: "https://mui.com/store/items/minimal-dashboard/",
    freeUI: "https://mui.com/store/items/minimal-dashboard-free/",
    figma: "https://www.figma.com/file/kAYnYYdib0aQPNKZpgJT6J/%5BPreview%5D-Minimal-Web.v5.0.0?type=design&node-id=0%3A1&t=Al4jScQq97Aly0Mn-1",
    product: {
        root: `/product`,
        checkout: `/product/checkout`,
        details: (id)=>`/product/${id}`,
        demo: {
            details: `/product/${MOCK_ID}`
        }
    },
    post: {
        root: `/post`,
        details: (title)=>`/post/${(0,change_case/* paramCase */.o)(title)}`,
        demo: {
            details: `/post/${(0,change_case/* paramCase */.o)(MOCK_TITLE)}`
        }
    },
    // AUTH
    auth: {
        amplify: {
            login: `${ROOTS.AUTH}/amplify/login`,
            verify: `${ROOTS.AUTH}/amplify/verify`,
            register: `${ROOTS.AUTH}/amplify/register`,
            newPassword: `${ROOTS.AUTH}/amplify/new-password`,
            forgotPassword: `${ROOTS.AUTH}/amplify/forgot-password`
        },
        jwt: {
            login: `${ROOTS.AUTH}/jwt/login`,
            register: `${ROOTS.AUTH}/jwt/register`
        },
        firebase: {
            login: `${ROOTS.AUTH}/firebase/login`,
            verify: `${ROOTS.AUTH}/firebase/verify`,
            register: `${ROOTS.AUTH}/firebase/register`,
            forgotPassword: `${ROOTS.AUTH}/firebase/forgot-password`
        },
        auth0: {
            login: `${ROOTS.AUTH}/auth0/login`
        }
    },
    authDemo: {
        classic: {
            login: `${ROOTS.AUTH_DEMO}/classic/login`,
            register: `${ROOTS.AUTH_DEMO}/classic/register`,
            forgotPassword: `${ROOTS.AUTH_DEMO}/classic/forgot-password`,
            newPassword: `${ROOTS.AUTH_DEMO}/classic/new-password`,
            verify: `${ROOTS.AUTH_DEMO}/classic/verify`
        },
        modern: {
            login: `${ROOTS.AUTH_DEMO}/modern/login`,
            register: `${ROOTS.AUTH_DEMO}/modern/register`,
            forgotPassword: `${ROOTS.AUTH_DEMO}/modern/forgot-password`,
            newPassword: `${ROOTS.AUTH_DEMO}/modern/new-password`,
            verify: `${ROOTS.AUTH_DEMO}/modern/verify`
        }
    },
    // DASHBOARD
    dashboard: {
        root: ROOTS.DASHBOARD,
        mail: `${ROOTS.DASHBOARD}/mail`,
        chat: `${ROOTS.DASHBOARD}/chat`,
        blank: `${ROOTS.DASHBOARD}/blank`,
        kanban: `${ROOTS.DASHBOARD}/kanban`,
        calendar: `${ROOTS.DASHBOARD}/calendar`,
        fileManager: `${ROOTS.DASHBOARD}/file-manager`,
        permission: `${ROOTS.DASHBOARD}/permission`,
        general: {
            app: `${ROOTS.DASHBOARD}/app`,
            ecommerce: `${ROOTS.DASHBOARD}/ecommerce`,
            analytics: `${ROOTS.DASHBOARD}/analytics`,
            banking: `${ROOTS.DASHBOARD}/banking`,
            booking: `${ROOTS.DASHBOARD}/booking`,
            file: `${ROOTS.DASHBOARD}/file`
        },
        user: {
            root: `${ROOTS.DASHBOARD}/user`,
            new: `${ROOTS.DASHBOARD}/user/new`,
            list: `${ROOTS.DASHBOARD}/user/list`,
            cards: `${ROOTS.DASHBOARD}/user/cards`,
            profile: `${ROOTS.DASHBOARD}/user/profile`,
            account: `${ROOTS.DASHBOARD}/user/account`,
            edit: (id)=>`${ROOTS.DASHBOARD}/user/${id}/edit`,
            demo: {
                edit: `${ROOTS.DASHBOARD}/user/${MOCK_ID}/edit`
            }
        },
        product: {
            root: `${ROOTS.DASHBOARD}/product`,
            new: `${ROOTS.DASHBOARD}/product/new`,
            details: (id)=>`${ROOTS.DASHBOARD}/product/${id}`,
            edit: (id)=>`${ROOTS.DASHBOARD}/product/${id}/edit`,
            demo: {
                details: `${ROOTS.DASHBOARD}/product/${MOCK_ID}`,
                edit: `${ROOTS.DASHBOARD}/product/${MOCK_ID}/edit`
            }
        },
        invoice: {
            root: `${ROOTS.DASHBOARD}/invoice`,
            new: `${ROOTS.DASHBOARD}/invoice/new`,
            details: (id)=>`${ROOTS.DASHBOARD}/invoice/${id}`,
            edit: (id)=>`${ROOTS.DASHBOARD}/invoice/${id}/edit`,
            demo: {
                details: `${ROOTS.DASHBOARD}/invoice/${MOCK_ID}`,
                edit: `${ROOTS.DASHBOARD}/invoice/${MOCK_ID}/edit`
            }
        },
        post: {
            root: `${ROOTS.DASHBOARD}/post`,
            new: `${ROOTS.DASHBOARD}/post/new`,
            details: (title)=>`${ROOTS.DASHBOARD}/post/${(0,change_case/* paramCase */.o)(title)}`,
            edit: (title)=>`${ROOTS.DASHBOARD}/post/${(0,change_case/* paramCase */.o)(title)}/edit`,
            demo: {
                details: `${ROOTS.DASHBOARD}/post/${(0,change_case/* paramCase */.o)(MOCK_TITLE)}`,
                edit: `${ROOTS.DASHBOARD}/post/${(0,change_case/* paramCase */.o)(MOCK_TITLE)}/edit`
            }
        },
        order: {
            root: `${ROOTS.DASHBOARD}/order`,
            details: (id)=>`${ROOTS.DASHBOARD}/order/${id}`,
            demo: {
                details: `${ROOTS.DASHBOARD}/order/${MOCK_ID}`
            }
        },
        job: {
            root: `${ROOTS.DASHBOARD}/job`,
            new: `${ROOTS.DASHBOARD}/job/new`,
            details: (id)=>`${ROOTS.DASHBOARD}/job/${id}`,
            edit: (id)=>`${ROOTS.DASHBOARD}/job/${id}/edit`,
            demo: {
                details: `${ROOTS.DASHBOARD}/job/${MOCK_ID}`,
                edit: `${ROOTS.DASHBOARD}/job/${MOCK_ID}/edit`
            }
        },
        tour: {
            root: `${ROOTS.DASHBOARD}/tour`,
            new: `${ROOTS.DASHBOARD}/tour/new`,
            details: (id)=>`${ROOTS.DASHBOARD}/tour/${id}`,
            edit: (id)=>`${ROOTS.DASHBOARD}/tour/${id}/edit`,
            demo: {
                details: `${ROOTS.DASHBOARD}/tour/${MOCK_ID}`,
                edit: `${ROOTS.DASHBOARD}/tour/${MOCK_ID}/edit`
            }
        }
    }
};

;// CONCATENATED MODULE: ./src/config-global.ts
// routes

// API
// ----------------------------------------------------------------------
const HOST_API = "https://api-dev-minimal-v510.vercel.app";
const ASSETS_API = "https://api-dev-minimal-v510.vercel.app";
const FIREBASE_API = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};
const AMPLIFY_API = {
    userPoolId: "",
    userPoolWebClientId: "",
    region: ""
};
const AUTH0_API = {
    clientId: "",
    domain: "",
    callbackUrl: ""
};
const MAPBOX_API = (/* unused pure expression or super */ null && (""));
// ROOT PATH AFTER LOGIN SUCCESSFUL
const PATH_AFTER_LOGIN = paths.dashboard.root; // as '/dashboard'


/***/ }),

/***/ 86481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ paramCase)
/* harmony export */ });
/* unused harmony export snakeCase */
function paramCase(str) {
    return str.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}
function snakeCase(str) {
    return str.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");
}


/***/ }),

/***/ 70335:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}


/***/ })

};
;