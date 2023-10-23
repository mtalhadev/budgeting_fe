"use strict";
exports.id = 5772;
exports.ids = [5772];
exports.modules = {

/***/ 85772:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ useSpring)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs
var is_motion_value = __webpack_require__(55583);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/index.mjs
var es_value = __webpack_require__(86550);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var MotionConfigContext = __webpack_require__(95248);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-constant.mjs
var use_constant = __webpack_require__(34349);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-motion-value.mjs





/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * @param initial - The initial state.
 *
 * @public
 */
function useMotionValue(initial) {
    const value = (0,use_constant/* useConstant */.h)(() => (0,es_value/* motionValue */.B)(initial));
    /**
     * If this motion value is being used in static mode, like on
     * the Framer canvas, force components to rerender when the motion
     * value is updated.
     */
    const { isStatic } = (0,react_.useContext)(MotionConfigContext/* MotionConfigContext */._);
    if (isStatic) {
        const [, setLatest] = (0,react_.useState)(initial);
        (0,react_.useEffect)(() => value.on("change", setLatest), []);
    }
    return value;
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var use_isomorphic_effect = __webpack_require__(60381);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/animation/animators/js/index.mjs + 14 modules
var js = __webpack_require__(20024);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/time-conversion.mjs
var time_conversion = __webpack_require__(33178);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/frameloop/frame.mjs + 2 modules
var frameloop_frame = __webpack_require__(89195);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-spring.mjs









/**
 * Creates a `MotionValue` that, when `set`, will use a spring animation to animate to its new state.
 *
 * It can either work as a stand-alone `MotionValue` by initialising it with a value, or as a subscriber
 * to another `MotionValue`.
 *
 * @remarks
 *
 * ```jsx
 * const x = useSpring(0, { stiffness: 300 })
 * const y = useSpring(x, { damping: 10 })
 * ```
 *
 * @param inputValue - `MotionValue` or number. If provided a `MotionValue`, when the input `MotionValue` changes, the created `MotionValue` will spring towards that value.
 * @param springConfig - Configuration options for the spring.
 * @returns `MotionValue`
 *
 * @public
 */
function useSpring(source, config = {}) {
    const { isStatic } = (0,react_.useContext)(MotionConfigContext/* MotionConfigContext */._);
    const activeSpringAnimation = (0,react_.useRef)(null);
    const value = useMotionValue((0,is_motion_value/* isMotionValue */.i)(source) ? source.get() : source);
    const stopAnimation = () => {
        if (activeSpringAnimation.current) {
            activeSpringAnimation.current.stop();
        }
    };
    (0,react_.useInsertionEffect)(() => {
        return value.attach((v, set) => {
            /**
             * A more hollistic approach to this might be to use isStatic to fix VisualElement animations
             * at that level, but this will work for now
             */
            if (isStatic)
                return set(v);
            stopAnimation();
            activeSpringAnimation.current = (0,js/* animateValue */.y)({
                keyframes: [value.get(), v],
                velocity: value.getVelocity(),
                type: "spring",
                restDelta: 0.001,
                restSpeed: 0.01,
                ...config,
                onUpdate: set,
            });
            /**
             * If we're between frames, resync the animation to the frameloop.
             */
            if (!frameloop_frame.frameData.isProcessing) {
                const delta = performance.now() - frameloop_frame.frameData.timestamp;
                if (delta < 30) {
                    activeSpringAnimation.current.time =
                        (0,time_conversion/* millisecondsToSeconds */.X)(delta);
                }
            }
            return value.get();
        }, stopAnimation);
    }, [JSON.stringify(config)]);
    (0,use_isomorphic_effect/* useIsomorphicLayoutEffect */.L)(() => {
        if ((0,is_motion_value/* isMotionValue */.i)(source)) {
            return source.on("change", (v) => value.set(parseFloat(v)));
        }
    }, [value]);
    return value;
}




/***/ })

};
;