"use strict";
exports.id = 3993;
exports.ids = [3993];
exports.modules = {

/***/ 63993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ useCountdownSeconds),
/* harmony export */   Z: () => (/* binding */ useCountdownDate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ useCountdownDate,useCountdownSeconds auto */ 
function useCountdownDate(date) {
    const [countdown, setCountdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const interval = setInterval(()=>setNewTime(), 1000);
        return ()=>clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const setNewTime = ()=>{
        const startTime = date;
        const endTime = new Date();
        const distanceToNow = startTime.valueOf() - endTime.valueOf();
        const getDays = Math.floor(distanceToNow / (1000 * 60 * 60 * 24));
        const getHours = `0${Math.floor(distanceToNow % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))}`.slice(-2);
        const getMinutes = `0${Math.floor(distanceToNow % (1000 * 60 * 60) / (1000 * 60))}`.slice(-2);
        const getSeconds = `0${Math.floor(distanceToNow % (1000 * 60) / 1000)}`.slice(-2);
        setCountdown({
            days: getDays.toString() || "000",
            hours: getHours || "000",
            minutes: getMinutes || "000",
            seconds: getSeconds || "000"
        });
    };
    return {
        days: countdown.days,
        hours: countdown.hours,
        minutes: countdown.minutes,
        seconds: countdown.seconds
    };
}
function useCountdownSeconds(initCountdown) {
    const [countdown, setCountdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initCountdown);
    const startCountdown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        let remainingSeconds = countdown;
        const intervalId = setInterval(()=>{
            remainingSeconds -= 1;
            if (remainingSeconds === 0) {
                clearInterval(intervalId);
                setCountdown(initCountdown);
            } else {
                setCountdown(remainingSeconds);
            }
        }, 1000);
    }, [
        initCountdown,
        countdown
    ]);
    const counting = initCountdown > countdown;
    return {
        counting,
        countdown,
        setCountdown,
        startCountdown
    };
}


/***/ })

};
;