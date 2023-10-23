"use strict";
exports.id = 2774;
exports.ids = [2774,5612];
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

/***/ 61338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* reexport */ countries)
});

;// CONCATENATED MODULE: ./src/assets/data/countries.ts
const countries = [
    {
        code: "",
        label: "",
        phone: ""
    },
    {
        code: "AD",
        label: "Andorra",
        phone: "376"
    },
    {
        code: "AE",
        label: "United Arab Emirates",
        phone: "971"
    },
    {
        code: "AF",
        label: "Afghanistan",
        phone: "93"
    },
    {
        code: "AG",
        label: "Antigua and Barbuda",
        phone: "1-268"
    },
    {
        code: "AI",
        label: "Anguilla",
        phone: "1-264"
    },
    {
        code: "AL",
        label: "Albania",
        phone: "355"
    },
    {
        code: "AM",
        label: "Armenia",
        phone: "374"
    },
    {
        code: "AO",
        label: "Angola",
        phone: "244"
    },
    {
        code: "AQ",
        label: "Antarctica",
        phone: "672"
    },
    {
        code: "AR",
        label: "Argentina",
        phone: "54"
    },
    {
        code: "AS",
        label: "American Samoa",
        phone: "1-684"
    },
    {
        code: "AT",
        label: "Austria",
        phone: "43"
    },
    {
        code: "AU",
        label: "Australia",
        phone: "61",
        suggested: true
    },
    {
        code: "AW",
        label: "Aruba",
        phone: "297"
    },
    {
        code: "AX",
        label: "Alland Islands",
        phone: "358"
    },
    {
        code: "AZ",
        label: "Azerbaijan",
        phone: "994"
    },
    {
        code: "BA",
        label: "Bosnia and Herzegovina",
        phone: "387"
    },
    {
        code: "BB",
        label: "Barbados",
        phone: "1-246"
    },
    {
        code: "BD",
        label: "Bangladesh",
        phone: "880"
    },
    {
        code: "BE",
        label: "Belgium",
        phone: "32"
    },
    {
        code: "BF",
        label: "Burkina Faso",
        phone: "226"
    },
    {
        code: "BG",
        label: "Bulgaria",
        phone: "359"
    },
    {
        code: "BH",
        label: "Bahrain",
        phone: "973"
    },
    {
        code: "BI",
        label: "Burundi",
        phone: "257"
    },
    {
        code: "BJ",
        label: "Benin",
        phone: "229"
    },
    {
        code: "BL",
        label: "Saint Barthelemy",
        phone: "590"
    },
    {
        code: "BM",
        label: "Bermuda",
        phone: "1-441"
    },
    {
        code: "BN",
        label: "Brunei Darussalam",
        phone: "673"
    },
    {
        code: "BO",
        label: "Bolivia",
        phone: "591"
    },
    {
        code: "BR",
        label: "Brazil",
        phone: "55"
    },
    {
        code: "BS",
        label: "Bahamas",
        phone: "1-242"
    },
    {
        code: "BT",
        label: "Bhutan",
        phone: "975"
    },
    {
        code: "BV",
        label: "Bouvet Island",
        phone: "47"
    },
    {
        code: "BW",
        label: "Botswana",
        phone: "267"
    },
    {
        code: "BY",
        label: "Belarus",
        phone: "375"
    },
    {
        code: "BZ",
        label: "Belize",
        phone: "501"
    },
    {
        code: "CA",
        label: "Canada",
        phone: "1",
        suggested: true
    },
    {
        code: "CC",
        label: "Cocos (Keeling) Islands",
        phone: "61"
    },
    {
        code: "CD",
        label: "Congo, Democratic Republic of the",
        phone: "243"
    },
    {
        code: "CF",
        label: "Central African Republic",
        phone: "236"
    },
    {
        code: "CG",
        label: "Congo, Republic of the",
        phone: "242"
    },
    {
        code: "CH",
        label: "Switzerland",
        phone: "41"
    },
    {
        code: "CI",
        label: "Cote d'Ivoire",
        phone: "225"
    },
    {
        code: "CK",
        label: "Cook Islands",
        phone: "682"
    },
    {
        code: "CL",
        label: "Chile",
        phone: "56"
    },
    {
        code: "CM",
        label: "Cameroon",
        phone: "237"
    },
    {
        code: "CN",
        label: "China",
        phone: "86"
    },
    {
        code: "CO",
        label: "Colombia",
        phone: "57"
    },
    {
        code: "CR",
        label: "Costa Rica",
        phone: "506"
    },
    {
        code: "CU",
        label: "Cuba",
        phone: "53"
    },
    {
        code: "CV",
        label: "Cape Verde",
        phone: "238"
    },
    {
        code: "CW",
        label: "Curacao",
        phone: "599"
    },
    {
        code: "CX",
        label: "Christmas Island",
        phone: "61"
    },
    {
        code: "CY",
        label: "Cyprus",
        phone: "357"
    },
    {
        code: "CZ",
        label: "Czech Republic",
        phone: "420"
    },
    {
        code: "DE",
        label: "Germany",
        phone: "49",
        suggested: true
    },
    {
        code: "DJ",
        label: "Djibouti",
        phone: "253"
    },
    {
        code: "DK",
        label: "Denmark",
        phone: "45"
    },
    {
        code: "DM",
        label: "Dominica",
        phone: "1-767"
    },
    {
        code: "DO",
        label: "Dominican Republic",
        phone: "1-809"
    },
    {
        code: "DZ",
        label: "Algeria",
        phone: "213"
    },
    {
        code: "EC",
        label: "Ecuador",
        phone: "593"
    },
    {
        code: "EE",
        label: "Estonia",
        phone: "372"
    },
    {
        code: "EG",
        label: "Egypt",
        phone: "20"
    },
    {
        code: "EH",
        label: "Western Sahara",
        phone: "212"
    },
    {
        code: "ER",
        label: "Eritrea",
        phone: "291"
    },
    {
        code: "ES",
        label: "Spain",
        phone: "34"
    },
    {
        code: "ET",
        label: "Ethiopia",
        phone: "251"
    },
    {
        code: "FI",
        label: "Finland",
        phone: "358"
    },
    {
        code: "FJ",
        label: "Fiji",
        phone: "679"
    },
    {
        code: "FK",
        label: "Falkland Islands (Malvinas)",
        phone: "500"
    },
    {
        code: "FM",
        label: "Micronesia, Federated States of",
        phone: "691"
    },
    {
        code: "FO",
        label: "Faroe Islands",
        phone: "298"
    },
    {
        code: "FR",
        label: "France",
        phone: "33",
        suggested: true
    },
    {
        code: "GA",
        label: "Gabon",
        phone: "241"
    },
    {
        code: "GB",
        label: "United Kingdom",
        phone: "44"
    },
    {
        code: "GD",
        label: "Grenada",
        phone: "1-473"
    },
    {
        code: "GE",
        label: "Georgia",
        phone: "995"
    },
    {
        code: "GF",
        label: "French Guiana",
        phone: "594"
    },
    {
        code: "GG",
        label: "Guernsey",
        phone: "44"
    },
    {
        code: "GH",
        label: "Ghana",
        phone: "233"
    },
    {
        code: "GI",
        label: "Gibraltar",
        phone: "350"
    },
    {
        code: "GL",
        label: "Greenland",
        phone: "299"
    },
    {
        code: "GM",
        label: "Gambia",
        phone: "220"
    },
    {
        code: "GN",
        label: "Guinea",
        phone: "224"
    },
    {
        code: "GP",
        label: "Guadeloupe",
        phone: "590"
    },
    {
        code: "GQ",
        label: "Equatorial Guinea",
        phone: "240"
    },
    {
        code: "GR",
        label: "Greece",
        phone: "30"
    },
    {
        code: "GS",
        label: "South Georgia and the South Sandwich Islands",
        phone: "500"
    },
    {
        code: "GT",
        label: "Guatemala",
        phone: "502"
    },
    {
        code: "GU",
        label: "Guam",
        phone: "1-671"
    },
    {
        code: "GW",
        label: "Guinea-Bissau",
        phone: "245"
    },
    {
        code: "GY",
        label: "Guyana",
        phone: "592"
    },
    {
        code: "HK",
        label: "Hong Kong",
        phone: "852"
    },
    {
        code: "HM",
        label: "Heard Island and McDonald Islands",
        phone: "672"
    },
    {
        code: "HN",
        label: "Honduras",
        phone: "504"
    },
    {
        code: "HR",
        label: "Croatia",
        phone: "385"
    },
    {
        code: "HT",
        label: "Haiti",
        phone: "509"
    },
    {
        code: "HU",
        label: "Hungary",
        phone: "36"
    },
    {
        code: "ID",
        label: "Indonesia",
        phone: "62"
    },
    {
        code: "IE",
        label: "Ireland",
        phone: "353"
    },
    {
        code: "IL",
        label: "Israel",
        phone: "972"
    },
    {
        code: "IM",
        label: "Isle of Man",
        phone: "44"
    },
    {
        code: "IN",
        label: "India",
        phone: "91"
    },
    {
        code: "IO",
        label: "British Indian Ocean Territory",
        phone: "246"
    },
    {
        code: "IQ",
        label: "Iraq",
        phone: "964"
    },
    {
        code: "IR",
        label: "Iran, Islamic Republic of",
        phone: "98"
    },
    {
        code: "IS",
        label: "Iceland",
        phone: "354"
    },
    {
        code: "IT",
        label: "Italy",
        phone: "39"
    },
    {
        code: "JE",
        label: "Jersey",
        phone: "44"
    },
    {
        code: "JM",
        label: "Jamaica",
        phone: "1-876"
    },
    {
        code: "JO",
        label: "Jordan",
        phone: "962"
    },
    {
        code: "JP",
        label: "Japan",
        phone: "81",
        suggested: true
    },
    {
        code: "KE",
        label: "Kenya",
        phone: "254"
    },
    {
        code: "KG",
        label: "Kyrgyzstan",
        phone: "996"
    },
    {
        code: "KH",
        label: "Cambodia",
        phone: "855"
    },
    {
        code: "KI",
        label: "Kiribati",
        phone: "686"
    },
    {
        code: "KM",
        label: "Comoros",
        phone: "269"
    },
    {
        code: "KN",
        label: "Saint Kitts and Nevis",
        phone: "1-869"
    },
    {
        code: "KP",
        label: "Korea, Democratic People's Republic of",
        phone: "850"
    },
    {
        code: "KR",
        label: "Korea, Republic of",
        phone: "82"
    },
    {
        code: "KW",
        label: "Kuwait",
        phone: "965"
    },
    {
        code: "KY",
        label: "Cayman Islands",
        phone: "1-345"
    },
    {
        code: "KZ",
        label: "Kazakhstan",
        phone: "7"
    },
    {
        code: "LA",
        label: "Lao People's Democratic Republic",
        phone: "856"
    },
    {
        code: "LB",
        label: "Lebanon",
        phone: "961"
    },
    {
        code: "LC",
        label: "Saint Lucia",
        phone: "1-758"
    },
    {
        code: "LI",
        label: "Liechtenstein",
        phone: "423"
    },
    {
        code: "LK",
        label: "Sri Lanka",
        phone: "94"
    },
    {
        code: "LR",
        label: "Liberia",
        phone: "231"
    },
    {
        code: "LS",
        label: "Lesotho",
        phone: "266"
    },
    {
        code: "LT",
        label: "Lithuania",
        phone: "370"
    },
    {
        code: "LU",
        label: "Luxembourg",
        phone: "352"
    },
    {
        code: "LV",
        label: "Latvia",
        phone: "371"
    },
    {
        code: "LY",
        label: "Libya",
        phone: "218"
    },
    {
        code: "MA",
        label: "Morocco",
        phone: "212"
    },
    {
        code: "MC",
        label: "Monaco",
        phone: "377"
    },
    {
        code: "MD",
        label: "Moldova, Republic of",
        phone: "373"
    },
    {
        code: "ME",
        label: "Montenegro",
        phone: "382"
    },
    {
        code: "MF",
        label: "Saint Martin (French part)",
        phone: "590"
    },
    {
        code: "MG",
        label: "Madagascar",
        phone: "261"
    },
    {
        code: "MH",
        label: "Marshall Islands",
        phone: "692"
    },
    {
        code: "MK",
        label: "Macedonia, the Former Yugoslav Republic of",
        phone: "389"
    },
    {
        code: "ML",
        label: "Mali",
        phone: "223"
    },
    {
        code: "MM",
        label: "Myanmar",
        phone: "95"
    },
    {
        code: "MN",
        label: "Mongolia",
        phone: "976"
    },
    {
        code: "MO",
        label: "Macao",
        phone: "853"
    },
    {
        code: "MP",
        label: "Northern Mariana Islands",
        phone: "1-670"
    },
    {
        code: "MQ",
        label: "Martinique",
        phone: "596"
    },
    {
        code: "MR",
        label: "Mauritania",
        phone: "222"
    },
    {
        code: "MS",
        label: "Montserrat",
        phone: "1-664"
    },
    {
        code: "MT",
        label: "Malta",
        phone: "356"
    },
    {
        code: "MU",
        label: "Mauritius",
        phone: "230"
    },
    {
        code: "MV",
        label: "Maldives",
        phone: "960"
    },
    {
        code: "MW",
        label: "Malawi",
        phone: "265"
    },
    {
        code: "MX",
        label: "Mexico",
        phone: "52"
    },
    {
        code: "MY",
        label: "Malaysia",
        phone: "60"
    },
    {
        code: "MZ",
        label: "Mozambique",
        phone: "258"
    },
    {
        code: "NA",
        label: "Namibia",
        phone: "264"
    },
    {
        code: "NC",
        label: "New Caledonia",
        phone: "687"
    },
    {
        code: "NE",
        label: "Niger",
        phone: "227"
    },
    {
        code: "NF",
        label: "Norfolk Island",
        phone: "672"
    },
    {
        code: "NG",
        label: "Nigeria",
        phone: "234"
    },
    {
        code: "NI",
        label: "Nicaragua",
        phone: "505"
    },
    {
        code: "NL",
        label: "Netherlands",
        phone: "31"
    },
    {
        code: "NO",
        label: "Norway",
        phone: "47"
    },
    {
        code: "NP",
        label: "Nepal",
        phone: "977"
    },
    {
        code: "NR",
        label: "Nauru",
        phone: "674"
    },
    {
        code: "NU",
        label: "Niue",
        phone: "683"
    },
    {
        code: "NZ",
        label: "New Zealand",
        phone: "64"
    },
    {
        code: "OM",
        label: "Oman",
        phone: "968"
    },
    {
        code: "PA",
        label: "Panama",
        phone: "507"
    },
    {
        code: "PE",
        label: "Peru",
        phone: "51"
    },
    {
        code: "PF",
        label: "French Polynesia",
        phone: "689"
    },
    {
        code: "PG",
        label: "Papua New Guinea",
        phone: "675"
    },
    {
        code: "PH",
        label: "Philippines",
        phone: "63"
    },
    {
        code: "PK",
        label: "Pakistan",
        phone: "92"
    },
    {
        code: "PL",
        label: "Poland",
        phone: "48"
    },
    {
        code: "PM",
        label: "Saint Pierre and Miquelon",
        phone: "508"
    },
    {
        code: "PN",
        label: "Pitcairn",
        phone: "870"
    },
    {
        code: "PR",
        label: "Puerto Rico",
        phone: "1"
    },
    {
        code: "PS",
        label: "Palestine, State of",
        phone: "970"
    },
    {
        code: "PT",
        label: "Portugal",
        phone: "351"
    },
    {
        code: "PW",
        label: "Palau",
        phone: "680"
    },
    {
        code: "PY",
        label: "Paraguay",
        phone: "595"
    },
    {
        code: "QA",
        label: "Qatar",
        phone: "974"
    },
    {
        code: "RE",
        label: "Reunion",
        phone: "262"
    },
    {
        code: "RO",
        label: "Romania",
        phone: "40"
    },
    {
        code: "RS",
        label: "Serbia",
        phone: "381"
    },
    {
        code: "RU",
        label: "Russian Federation",
        phone: "7"
    },
    {
        code: "RW",
        label: "Rwanda",
        phone: "250"
    },
    {
        code: "SA",
        label: "Saudi Arabia",
        phone: "966"
    },
    {
        code: "SB",
        label: "Solomon Islands",
        phone: "677"
    },
    {
        code: "SC",
        label: "Seychelles",
        phone: "248"
    },
    {
        code: "SD",
        label: "Sudan",
        phone: "249"
    },
    {
        code: "SE",
        label: "Sweden",
        phone: "46"
    },
    {
        code: "SG",
        label: "Singapore",
        phone: "65"
    },
    {
        code: "SH",
        label: "Saint Helena",
        phone: "290"
    },
    {
        code: "SI",
        label: "Slovenia",
        phone: "386"
    },
    {
        code: "SJ",
        label: "Svalbard and Jan Mayen",
        phone: "47"
    },
    {
        code: "SK",
        label: "Slovakia",
        phone: "421"
    },
    {
        code: "SL",
        label: "Sierra Leone",
        phone: "232"
    },
    {
        code: "SM",
        label: "San Marino",
        phone: "378"
    },
    {
        code: "SN",
        label: "Senegal",
        phone: "221"
    },
    {
        code: "SO",
        label: "Somalia",
        phone: "252"
    },
    {
        code: "SR",
        label: "Suriname",
        phone: "597"
    },
    {
        code: "SS",
        label: "South Sudan",
        phone: "211"
    },
    {
        code: "ST",
        label: "Sao Tome and Principe",
        phone: "239"
    },
    {
        code: "SV",
        label: "El Salvador",
        phone: "503"
    },
    {
        code: "SX",
        label: "Sint Maarten (Dutch part)",
        phone: "1-721"
    },
    {
        code: "SY",
        label: "Syrian Arab Republic",
        phone: "963"
    },
    {
        code: "SZ",
        label: "Swaziland",
        phone: "268"
    },
    {
        code: "TC",
        label: "Turks and Caicos Islands",
        phone: "1-649"
    },
    {
        code: "TD",
        label: "Chad",
        phone: "235"
    },
    {
        code: "TF",
        label: "French Southern Territories",
        phone: "262"
    },
    {
        code: "TG",
        label: "Togo",
        phone: "228"
    },
    {
        code: "TH",
        label: "Thailand",
        phone: "66"
    },
    {
        code: "TJ",
        label: "Tajikistan",
        phone: "992"
    },
    {
        code: "TK",
        label: "Tokelau",
        phone: "690"
    },
    {
        code: "TL",
        label: "Timor-Leste",
        phone: "670"
    },
    {
        code: "TM",
        label: "Turkmenistan",
        phone: "993"
    },
    {
        code: "TN",
        label: "Tunisia",
        phone: "216"
    },
    {
        code: "TO",
        label: "Tonga",
        phone: "676"
    },
    {
        code: "TR",
        label: "Turkey",
        phone: "90"
    },
    {
        code: "TT",
        label: "Trinidad and Tobago",
        phone: "1-868"
    },
    {
        code: "TV",
        label: "Tuvalu",
        phone: "688"
    },
    {
        code: "TW",
        label: "Taiwan, Province of China",
        phone: "886"
    },
    {
        code: "TZ",
        label: "United Republic of Tanzania",
        phone: "255"
    },
    {
        code: "UA",
        label: "Ukraine",
        phone: "380"
    },
    {
        code: "UG",
        label: "Uganda",
        phone: "256"
    },
    {
        code: "US",
        label: "United States",
        phone: "1",
        suggested: true
    },
    {
        code: "UY",
        label: "Uruguay",
        phone: "598"
    },
    {
        code: "UZ",
        label: "Uzbekistan",
        phone: "998"
    },
    {
        code: "VA",
        label: "Holy See (Vatican City State)",
        phone: "379"
    },
    {
        code: "VC",
        label: "Saint Vincent and the Grenadines",
        phone: "1-784"
    },
    {
        code: "VE",
        label: "Venezuela",
        phone: "58"
    },
    {
        code: "VG",
        label: "British Virgin Islands",
        phone: "1-284"
    },
    {
        code: "VI",
        label: "US Virgin Islands",
        phone: "1-340"
    },
    {
        code: "VN",
        label: "Vietnam",
        phone: "84"
    },
    {
        code: "VU",
        label: "Vanuatu",
        phone: "678"
    },
    {
        code: "WF",
        label: "Wallis and Futuna",
        phone: "681"
    },
    {
        code: "WS",
        label: "Samoa",
        phone: "685"
    },
    {
        code: "XK",
        label: "Kosovo",
        phone: "383"
    },
    {
        code: "YE",
        label: "Yemen",
        phone: "967"
    },
    {
        code: "YT",
        label: "Mayotte",
        phone: "262"
    },
    {
        code: "ZA",
        label: "South Africa",
        phone: "27"
    },
    {
        code: "ZM",
        label: "Zambia",
        phone: "260"
    },
    {
        code: "ZW",
        label: "Zimbabwe",
        phone: "263"
    }
];

;// CONCATENATED MODULE: ./src/assets/data/index.ts



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


/***/ })

};
;