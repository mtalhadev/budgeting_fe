exports.id = 9428;
exports.ids = [9428];
exports.modules = {

/***/ 53950:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23))

/***/ }),

/***/ 21758:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 35447))

/***/ }),

/***/ 49688:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 39798));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1018));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 20559));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 76449));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 91465));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 73682));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 49864));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 26188));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 83781));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 24172));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 98118));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 56848));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 23124));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 18334));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 23468));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9989))

/***/ }),

/***/ 92561:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 50781));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 58166));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 47290))

/***/ }),

/***/ 3961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ CALENDAR_COLOR_OPTIONS)
/* harmony export */ });
/* harmony import */ var src_theme_palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3857);

// ----------------------------------------------------------------------
const palette = (0,src_theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .palette */ .D)("light");
const CALENDAR_COLOR_OPTIONS = [
    palette.primary.main,
    palette.secondary.main,
    palette.info.main,
    palette.info.darker,
    palette.success.main,
    palette.warning.main,
    palette.error.main,
    palette.error.darker
];


/***/ }),

/***/ 43685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ _mock)
/* harmony export */ });
/* harmony import */ var date_fns_sub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93523);
/* harmony import */ var src_config_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45060);
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28158);

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

/***/ 50109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gu: () => (/* binding */ PRODUCT_CATEGORY_OPTIONS),
/* harmony export */   JD: () => (/* binding */ PRODUCT_CHECKOUT_STEPS),
/* harmony export */   J_: () => (/* binding */ PRODUCT_COLOR_OPTIONS),
/* harmony export */   SG: () => (/* binding */ PRODUCT_PUBLISH_OPTIONS),
/* harmony export */   XH: () => (/* binding */ PRODUCT_GENDER_OPTIONS),
/* harmony export */   Zq: () => (/* binding */ PRODUCT_CATEGORY_GROUP_OPTIONS),
/* harmony export */   dB: () => (/* binding */ PRODUCT_COLOR_NAME_OPTIONS),
/* harmony export */   fI: () => (/* binding */ PRODUCT_SIZE_OPTIONS),
/* harmony export */   iO: () => (/* binding */ PRODUCT_RATING_OPTIONS),
/* harmony export */   m2: () => (/* binding */ PRODUCT_STOCK_OPTIONS),
/* harmony export */   rs: () => (/* binding */ PRODUCT_SORT_OPTIONS)
/* harmony export */ });
// ----------------------------------------------------------------------
const PRODUCT_GENDER_OPTIONS = [
    {
        label: "Men",
        value: "Men"
    },
    {
        label: "Women",
        value: "Women"
    },
    {
        label: "Kids",
        value: "Kids"
    }
];
const PRODUCT_CATEGORY_OPTIONS = [
    "Shose",
    "Apparel",
    "Accessories"
];
const PRODUCT_RATING_OPTIONS = [
    "up4Star",
    "up3Star",
    "up2Star",
    "up1Star"
];
const PRODUCT_COLOR_OPTIONS = [
    "#00AB55",
    "#000000",
    "#FFFFFF",
    "#FFC0CB",
    "#FF4842",
    "#1890FF",
    "#94D82D",
    "#FFC107"
];
const PRODUCT_COLOR_NAME_OPTIONS = [
    {
        value: "red",
        label: "Red"
    },
    {
        value: "blue",
        label: "Blue"
    },
    {
        value: "cyan",
        label: "Cyan"
    },
    {
        value: "green",
        label: "Green"
    },
    {
        value: "yellow",
        label: "Yellow"
    },
    {
        value: "violet",
        label: "Violet"
    },
    {
        value: "black",
        label: "Black"
    },
    {
        value: "white",
        label: "White"
    }
];
const PRODUCT_SIZE_OPTIONS = [
    {
        value: "7",
        label: "7"
    },
    {
        value: "8",
        label: "8"
    },
    {
        value: "8.5",
        label: "8.5"
    },
    {
        value: "9",
        label: "9"
    },
    {
        value: "9.5",
        label: "9.5"
    },
    {
        value: "10",
        label: "10"
    },
    {
        value: "10.5",
        label: "10.5"
    },
    {
        value: "11",
        label: "11"
    },
    {
        value: "11.5",
        label: "11.5"
    },
    {
        value: "12",
        label: "12"
    },
    {
        value: "13",
        label: "13"
    }
];
const PRODUCT_STOCK_OPTIONS = [
    {
        value: "in stock",
        label: "In stock"
    },
    {
        value: "low stock",
        label: "Low stock"
    },
    {
        value: "out of stock",
        label: "Out of stock"
    }
];
const PRODUCT_PUBLISH_OPTIONS = [
    {
        value: "published",
        label: "Published"
    },
    {
        value: "draft",
        label: "Draft"
    }
];
const PRODUCT_SORT_OPTIONS = [
    {
        value: "featured",
        label: "Featured"
    },
    {
        value: "newest",
        label: "Newest"
    },
    {
        value: "priceDesc",
        label: "Price: High - Low"
    },
    {
        value: "priceAsc",
        label: "Price: Low - High"
    }
];
const PRODUCT_CATEGORY_GROUP_OPTIONS = [
    {
        group: "Clothing",
        classify: [
            "Shirts",
            "T-shirts",
            "Jeans",
            "Leather",
            "Accessories"
        ]
    },
    {
        group: "Tailored",
        classify: [
            "Suits",
            "Blazers",
            "Trousers",
            "Waistcoats",
            "Apparel"
        ]
    },
    {
        group: "Accessories",
        classify: [
            "Shoes",
            "Backpacks and bags",
            "Bracelets",
            "Face masks"
        ]
    }
];
const PRODUCT_CHECKOUT_STEPS = [
    "Cart",
    "Billing & address",
    "Payment"
];


/***/ }),

/***/ 28158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 99011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fE: () => (/* reexport */ FILE_TYPE_OPTIONS),
  PI: () => (/* reexport */ INVOICE_SERVICE_OPTIONS),
  Dp: () => (/* reexport */ INVOICE_STATUS_OPTIONS),
  jK: () => (/* reexport */ JOB_BENEFIT_OPTIONS),
  Ux: () => (/* reexport */ JOB_DETAILS_TABS),
  yC: () => (/* reexport */ JOB_EMPLOYMENT_TYPE_OPTIONS),
  J$: () => (/* reexport */ JOB_EXPERIENCE_OPTIONS),
  D5: () => (/* reexport */ JOB_PUBLISH_OPTIONS),
  w_: () => (/* reexport */ JOB_SKILL_OPTIONS),
  vf: () => (/* reexport */ JOB_SORT_OPTIONS),
  Gn: () => (/* reexport */ JOB_WORKING_SCHEDULE_OPTIONS),
  s8: () => (/* reexport */ ORDER_STATUS_OPTIONS),
  TZ: () => (/* reexport */ POST_PUBLISH_OPTIONS),
  k: () => (/* reexport */ POST_SORT_OPTIONS),
  Zq: () => (/* reexport */ _product/* PRODUCT_CATEGORY_GROUP_OPTIONS */.Zq),
  Gu: () => (/* reexport */ _product/* PRODUCT_CATEGORY_OPTIONS */.Gu),
  dB: () => (/* reexport */ _product/* PRODUCT_COLOR_NAME_OPTIONS */.dB),
  J_: () => (/* reexport */ _product/* PRODUCT_COLOR_OPTIONS */.J_),
  XH: () => (/* reexport */ _product/* PRODUCT_GENDER_OPTIONS */.XH),
  SG: () => (/* reexport */ _product/* PRODUCT_PUBLISH_OPTIONS */.SG),
  iO: () => (/* reexport */ _product/* PRODUCT_RATING_OPTIONS */.iO),
  fI: () => (/* reexport */ _product/* PRODUCT_SIZE_OPTIONS */.fI),
  rs: () => (/* reexport */ _product/* PRODUCT_SORT_OPTIONS */.rs),
  m2: () => (/* reexport */ _product/* PRODUCT_STOCK_OPTIONS */.m2),
  bY: () => (/* reexport */ TOUR_DETAILS_TABS),
  ie: () => (/* reexport */ TOUR_PUBLISH_OPTIONS),
  Aj: () => (/* reexport */ TOUR_SERVICE_OPTIONS),
  f3: () => (/* reexport */ TOUR_SORT_OPTIONS),
  e$: () => (/* reexport */ USER_STATUS_OPTIONS),
  PX: () => (/* reexport */ _addressBooks),
  w7: () => (/* reexport */ _allFiles),
  ZP: () => (/* reexport */ _analyticOrderTimeline),
  L4: () => (/* reexport */ _analyticPosts),
  mt: () => (/* reexport */ _analyticTasks),
  $O: () => (/* reexport */ _analyticTraffic),
  Id: () => (/* reexport */ _appAuthors),
  $M: () => (/* reexport */ _appFeatured),
  bt: () => (/* reexport */ _appInstalled),
  fY: () => (/* reexport */ _appInvoices),
  Wc: () => (/* reexport */ _appRelated),
  Gz: () => (/* reexport */ _bankingContacts),
  x6: () => (/* reexport */ _bankingCreditCard),
  DX: () => (/* reexport */ _bankingRecentTransitions),
  ut: () => (/* reexport */ _bookingNew),
  tT: () => (/* reexport */ _bookingReview),
  VY: () => (/* reexport */ _bookings),
  JJ: () => (/* reexport */ _bookingsOverview),
  Zd: () => (/* reexport */ _carouselsMembers),
  Ck: () => (/* reexport */ _contacts),
  IF: () => (/* reexport */ _ecommerceBestSalesman),
  WD: () => (/* reexport */ _ecommerceLatestProducts),
  jX: () => (/* reexport */ _ecommerceNewProducts),
  ww: () => (/* reexport */ _ecommerceSalesOverview),
  c_: () => (/* reexport */ _faqs),
  Ve: () => (/* reexport */ _files),
  vg: () => (/* reexport */ _folders),
  Ot: () => (/* reexport */ _invoices),
  nb: () => (/* reexport */ _jobs),
  o2: () => (/* reexport */ _mapContact),
  QJ: () => (/* reexport */ _mock/* _mock */.Q),
  ID: () => (/* reexport */ _notifications),
  _Q: () => (/* reexport */ _orders),
  Xp: () => (/* reexport */ _pricingPlans),
  YX: () => (/* reexport */ assets/* _roles */.YX),
  _I: () => (/* reexport */ _socials),
  Qw: () => (/* reexport */ assets/* _tags */.Qw),
  H6: () => (/* reexport */ _testimonials),
  $r: () => (/* reexport */ _tourGuides),
  as: () => (/* reexport */ _tours),
  oE: () => (/* reexport */ _userAbout),
  n: () => (/* reexport */ _userAddressBook),
  oe: () => (/* reexport */ _userCards),
  c8: () => (/* reexport */ _userFeeds),
  gY: () => (/* reexport */ _userFollowers),
  fw: () => (/* reexport */ _userFriends),
  BU: () => (/* reexport */ _userGallery),
  aH: () => (/* reexport */ _userInvoices),
  Xz: () => (/* reexport */ _userList),
  Po: () => (/* reexport */ _userPayment),
  Sc: () => (/* reexport */ _userPlans)
});

// UNUSED EXPORTS: CALENDAR_COLOR_OPTIONS, PRODUCT_CHECKOUT_STEPS, TRAVEL_IMAGES, _ages, _booleans, _companyNames, _descriptions, _emails, _firstNames, _fullAddress, _fullNames, _homePlans, _id, _jobTitles, _lastNames, _nativeL, _nativeM, _nativeS, _percents, _phoneNumbers, _postTitles, _prices, _productNames, _ratings, _sentences, _taskNames, _tourNames

// EXTERNAL MODULE: ./src/_mock/assets.ts
var assets = __webpack_require__(28158);
// EXTERNAL MODULE: ./src/_mock/_mock.ts
var _mock = __webpack_require__(43685);
// EXTERNAL MODULE: ./src/assets/data/index.ts + 1 modules
var data = __webpack_require__(38670);
;// CONCATENATED MODULE: ./src/_mock/_job.ts
// assets

//

// ----------------------------------------------------------------------
const JOB_DETAILS_TABS = [
    {
        value: "content",
        label: "Job Content"
    },
    {
        value: "candidates",
        label: "Candidates"
    }
];
const JOB_SKILL_OPTIONS = [
    "UI",
    "UX",
    "Html",
    "JavaScript",
    "TypeScript",
    "Communication",
    "Problem Solving",
    "Leadership",
    "Time Management",
    "Adaptability",
    "Collaboration",
    "Creativity",
    "Critical Thinking",
    "Technical Skills",
    "Customer Service",
    "Project Management",
    "Problem Diagnosis"
];
const JOB_WORKING_SCHEDULE_OPTIONS = [
    "Monday to Friday",
    "Weekend availability",
    "Day shift"
];
const JOB_EMPLOYMENT_TYPE_OPTIONS = [
    {
        value: "Full-time",
        label: "Full-time"
    },
    {
        value: "Part-time",
        label: "Part-time"
    },
    {
        value: "On Demand",
        label: "On Demand"
    },
    {
        value: "Negotiable",
        label: "Negotiable"
    }
];
const JOB_EXPERIENCE_OPTIONS = [
    {
        value: "No experience",
        label: "No experience"
    },
    {
        value: "1 year exp",
        label: "1 year exp"
    },
    {
        value: "2 year exp",
        label: "2 year exp"
    },
    {
        value: "> 3 year exp",
        label: "> 3 year exp"
    }
];
const JOB_BENEFIT_OPTIONS = [
    {
        value: "Free parking",
        label: "Free parking"
    },
    {
        value: "Bonus commission",
        label: "Bonus commission"
    },
    {
        value: "Travel",
        label: "Travel"
    },
    {
        value: "Device support",
        label: "Device support"
    },
    {
        value: "Health care",
        label: "Health care"
    },
    {
        value: "Training",
        label: "Training"
    },
    {
        value: "Health Insurance",
        label: "Health Insurance"
    },
    {
        value: "Retirement Plans",
        label: "Retirement Plans"
    },
    {
        value: "Paid Time Off",
        label: "Paid Time Off"
    },
    {
        value: "Flexible Work Schedule",
        label: "Flexible Work Schedule"
    }
];
const JOB_PUBLISH_OPTIONS = [
    {
        value: "published",
        label: "Published"
    },
    {
        value: "draft",
        label: "Draft"
    }
];
const JOB_SORT_OPTIONS = [
    {
        value: "latest",
        label: "Latest"
    },
    {
        value: "popular",
        label: "Popular"
    },
    {
        value: "oldest",
        label: "Oldest"
    }
];
const CANDIDATES = [
    ...Array(12)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        role: _mock/* _mock */.Q.role(index),
        name: _mock/* _mock */.Q.fullName(index),
        avatarUrl: _mock/* _mock */.Q.image.avatar(index)
    }));
const CONTENT = `
<h6>Job Description</h6>
<br/>

<p>Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>

<br/>
<br/>

<h6>Key Responsibilities</h6>
<br/>
<ul>
  <li>Working with agency for design drawing detail, quotation and local production.</li>
  <li>Produce window displays, signs, interior displays, floor plans and special promotions displays.</li>
  <li>Change displays to promote new product launches and reflect festive or seasonal themes.</li>
  <li>Planning and executing the open/renovation/ closing store procedure.</li>
  <li>Follow‐up store maintenance procedure and keep updating SKU In &amp; Out.</li>
  <li>Monitor costs and work within budget.</li>
  <li>Liaise with suppliers and source elements.</li>
</ul>

<br/>
<br/>

<h6>Why You'll Love Working Here</h6>
<br/>
<ul>
  <li>Working with agency for design drawing detail, quotation and local production.</li>
  <li>Produce window displays, signs, interior displays, floor plans and special promotions displays.</li>
  <li>Change displays to promote new product launches and reflect festive or seasonal themes.</li>
  <li>Planning and executing the open/renovation/ closing store procedure.</li>
  <li>Follow‐up store maintenance procedure and keep updating SKU In &amp; Out.</li>
  <li>Monitor costs and work within budget.</li>
  <li>Liaise with suppliers and source elements.</li>
</ul>
`;
const _jobs = [
    ...Array(12)
].map((_, index)=>{
    const publish = index % 3 ? "published" : "draft";
    const salary = {
        type: index % 5 && "Custom" || "Hourly",
        price: _mock/* _mock */.Q.number.price(index),
        negotiable: _mock/* _mock */.Q.boolean(index)
    };
    const benefits = JOB_BENEFIT_OPTIONS.slice(0, 3).map((option)=>option.label);
    const experience = JOB_EXPERIENCE_OPTIONS.map((option)=>option.label)[index] || JOB_EXPERIENCE_OPTIONS[1].label;
    const employmentTypes = index % 2 && [
        "Part-time"
    ] || index % 3 && [
        "On Demand"
    ] || index % 4 && [
        "Negotiable"
    ] || [
        "Full-time"
    ];
    const company = {
        name: _mock/* _mock */.Q.companyName(index),
        logo: _mock/* _mock */.Q.image.company(index),
        phoneNumber: _mock/* _mock */.Q.phoneNumber(index),
        fullAddress: _mock/* _mock */.Q.fullAddress(index)
    };
    const locations = data/* countries */.h.slice(1, index + 2).map((option)=>option.label);
    return {
        id: _mock/* _mock */.Q.id(index),
        salary,
        publish,
        company,
        benefits,
        locations,
        experience,
        employmentTypes,
        content: CONTENT,
        candidates: CANDIDATES,
        role: _mock/* _mock */.Q.role(index),
        title: _mock/* _mock */.Q.jobTitle(index),
        createdAt: _mock/* _mock */.Q.time(index),
        expiredDate: _mock/* _mock */.Q.time(index),
        skills: JOB_SKILL_OPTIONS.slice(0, 3),
        totalViews: _mock/* _mock */.Q.number.nativeL(index),
        workingSchedule: JOB_WORKING_SCHEDULE_OPTIONS.slice(0, 2)
    };
});

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

;// CONCATENATED MODULE: ./src/_mock/_tour.ts
// assets

//


// ----------------------------------------------------------------------
const TOUR_DETAILS_TABS = [
    {
        value: "content",
        label: "Tour Content"
    },
    {
        value: "bookers",
        label: "Booker"
    }
];
const TOUR_SORT_OPTIONS = [
    {
        value: "latest",
        label: "Latest"
    },
    {
        value: "popular",
        label: "Popular"
    },
    {
        value: "oldest",
        label: "Oldest"
    }
];
const TOUR_PUBLISH_OPTIONS = [
    {
        value: "published",
        label: "Published"
    },
    {
        value: "draft",
        label: "Draft"
    }
];
const TOUR_SERVICE_OPTIONS = [
    {
        value: "Audio guide",
        label: "Audio guide"
    },
    {
        value: "Food and drinks",
        label: "Food and drinks"
    },
    {
        value: "Lunch",
        label: "Lunch"
    },
    {
        value: "Private tour",
        label: "Private tour"
    },
    {
        value: "Special activities",
        label: "Special activities"
    },
    {
        value: "Entrance fees",
        label: "Entrance fees"
    },
    {
        value: "Gratuities",
        label: "Gratuities"
    },
    {
        value: "Pick-up and drop off",
        label: "Pick-up and drop off"
    },
    {
        value: "Professional guide",
        label: "Professional guide"
    },
    {
        value: "Transport by air-conditioned",
        label: "Transport by air-conditioned"
    }
];
const _tour_CONTENT = `
<h6>Description</h6>
<br/>
<p>Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>

<br/>
<br/>
<br/>

<h6>Highlights</h6>
<br/>
<ul>
    <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
    <li>Vulputate placerat amet pulvinar lorem nisl.</li>
    <li>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
    <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>
</ul>

<br/>
<br/>
<br/>

<h6>Program</h6>
<br/>
<p><strong>Day 1</strong></p>
<br/>
<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
<br/>
<p><strong>Day 2</strong></p>
<br/>
<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
<br/>
<p><strong>Day 3</strong></p>
<br/>
<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

<br/>
<br/>
<br/>
`;
const BOOKER = [
    ...Array(12)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        guests: index + 10,
        name: _mock/* _mock */.Q.fullName(index),
        avatarUrl: _mock/* _mock */.Q.image.avatar(index)
    }));
const _tourGuides = [
    ...Array(12)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        name: _mock/* _mock */.Q.fullName(index),
        avatarUrl: _mock/* _mock */.Q.image.avatar(index),
        phoneNumber: _mock/* _mock */.Q.phoneNumber(index)
    }));
const TRAVEL_IMAGES = [
    ...Array(16)
].map((_, index)=>_mock/* _mock */.Q.image.travel(index));
const _tours = [
    ...Array(12)
].map((_, index)=>{
    const available = {
        startDate: _mock/* _mock */.Q.time(index + 1),
        endDate: _mock/* _mock */.Q.time(index)
    };
    const publish = index % 3 ? "published" : "draft";
    const destination = data/* countries */.h.map((option)=>option.label)[index];
    const services = index % 2 && [
        "Audio guide",
        "Food and drinks"
    ] || index % 3 && [
        "Lunch",
        "Private tour"
    ] || index % 4 && [
        "Special activities",
        "Entrance fees"
    ] || [
        "Gratuities",
        "Pick-up and drop off",
        "Professional guide",
        "Transport by air-conditioned"
    ];
    const tourGuides = index === 0 && _tourGuides.slice(0, 1) || index === 1 && _tourGuides.slice(1, 3) || index === 2 && _tourGuides.slice(2, 5) || index === 3 && _tourGuides.slice(4, 6) || _tourGuides.slice(6, 9);
    const images = TRAVEL_IMAGES.slice(index, index + 5);
    return {
        id: _mock/* _mock */.Q.id(index),
        images,
        publish,
        services,
        available,
        tourGuides,
        destination,
        bookers: BOOKER,
        content: _tour_CONTENT,
        tags: assets/* _tags */.Qw.slice(0, 5),
        name: _mock/* _mock */.Q.tourName(index),
        createdAt: _mock/* _mock */.Q.time(index),
        durations: "4 days 3 nights",
        price: _mock/* _mock */.Q.number.price(index),
        priceSale: _mock/* _mock */.Q.number.price(index),
        totalViews: _mock/* _mock */.Q.number.nativeL(index),
        ratingNumber: _mock/* _mock */.Q.number.rating(index)
    };
});

;// CONCATENATED MODULE: ./src/_mock/_blog.ts
const POST_PUBLISH_OPTIONS = [
    {
        value: "published",
        label: "Published"
    },
    {
        value: "draft",
        label: "Draft"
    }
];
const POST_SORT_OPTIONS = [
    {
        value: "latest",
        label: "Latest"
    },
    {
        value: "popular",
        label: "Popular"
    },
    {
        value: "oldest",
        label: "Oldest"
    }
];

;// CONCATENATED MODULE: ./src/_mock/_files.ts


// ----------------------------------------------------------------------
const GB = 1000000000 * 24;
const FOLDERS = [
    "Docs",
    "Projects",
    "Work",
    "Training",
    "Sport",
    "Foods"
];
const FILES = [
    "cover-2.jpg",
    "design-suriname-2015.mp3",
    "expertise-2015-conakry-sao-tome-and-principe-gender.mp4",
    "money-popup-crack.pdf",
    "cover-4.jpg",
    "cover-6.jpg",
    "large-news.txt",
    "nauru-6015-small-fighter-left-gender.psd",
    "tv-xs.doc",
    "gustavia-entertainment-productivity.docx",
    "vintage-bahrain-saipan.xls",
    "indonesia-quito-nancy-grace-left-glad.xlsx",
    "legislation-grain.zip",
    "large-energy-dry-philippines.rar",
    "footer-243-ecuador.iso",
    "kyrgyzstan-04795009-picabo-street-guide-style.ai",
    "india-data-large-gk-chesterton-mother.esp",
    "footer-barbados-celine-dion.ppt",
    "socio-respectively-366996.pptx",
    "socio-ahead-531437-sweden-popup.wav",
    "trinidad-samuel-morse-bring.m4v",
    "cover-12.jpg",
    "cover-18.jpg",
    "xl-david-blaine-component-tanzania-books.pdf"
];
const URLS = [
    _mock/* _mock */.Q.image.cover(1),
    "https://www.cloud.com/s/c218bo6kjuqyv66/design_suriname_2015.mp3",
    "https://www.cloud.com/s/c218bo6kjuqyv66/expertise_2015_conakry_sao-tome-and-principe_gender.mp4",
    "https://www.cloud.com/s/c218bo6kjuqyv66/money-popup-crack.pdf",
    _mock/* _mock */.Q.image.cover(3),
    _mock/* _mock */.Q.image.cover(5),
    "https://www.cloud.com/s/c218bo6kjuqyv66/large_news.txt",
    "https://www.cloud.com/s/c218bo6kjuqyv66/nauru-6015-small-fighter-left-gender.psd",
    "https://www.cloud.com/s/c218bo6kjuqyv66/tv-xs.doc",
    "https://www.cloud.com/s/c218bo6kjuqyv66/gustavia-entertainment-productivity.docx",
    "https://www.cloud.com/s/c218bo6kjuqyv66/vintage_bahrain_saipan.xls",
    "https://www.cloud.com/s/c218bo6kjuqyv66/indonesia-quito-nancy-grace-left-glad.xlsx",
    "https://www.cloud.com/s/c218bo6kjuqyv66/legislation-grain.zip",
    "https://www.cloud.com/s/c218bo6kjuqyv66/large_energy_dry_philippines.rar",
    "https://www.cloud.com/s/c218bo6kjuqyv66/footer-243-ecuador.iso",
    "https://www.cloud.com/s/c218bo6kjuqyv66/kyrgyzstan-04795009-picabo-street-guide-style.ai",
    "https://www.cloud.com/s/c218bo6kjuqyv66/india-data-large-gk-chesterton-mother.esp",
    "https://www.cloud.com/s/c218bo6kjuqyv66/footer-barbados-celine-dion.ppt",
    "https://www.cloud.com/s/c218bo6kjuqyv66/socio_respectively_366996.pptx",
    "https://www.cloud.com/s/c218bo6kjuqyv66/socio_ahead_531437_sweden_popup.wav",
    "https://www.cloud.com/s/c218bo6kjuqyv66/trinidad_samuel-morse_bring.m4v",
    _mock/* _mock */.Q.image.cover(11),
    _mock/* _mock */.Q.image.cover(17),
    "https://www.cloud.com/s/c218bo6kjuqyv66/xl_david-blaine_component_tanzania_books.pdf"
];
const SHARED_PERSONS = [
    ...Array(20)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        name: _mock/* _mock */.Q.fullName(index),
        email: _mock/* _mock */.Q.email(index),
        avatarUrl: _mock/* _mock */.Q.image.avatar(index),
        permission: index % 2 ? "view" : "edit"
    }));
const FILE_TYPE_OPTIONS = [
    "folder",
    "txt",
    "zip",
    "audio",
    "image",
    "video",
    "word",
    "excel",
    "powerpoint",
    "pdf",
    "photoshop",
    "illustrator"
];
// ----------------------------------------------------------------------
const shared = (index)=>index === 0 && SHARED_PERSONS.slice(0, 5) || index === 1 && SHARED_PERSONS.slice(5, 9) || index === 2 && SHARED_PERSONS.slice(9, 11) || index === 3 && SHARED_PERSONS.slice(11, 12) || [];
const _folders = FOLDERS.map((name, index)=>({
        id: `${_mock/* _mock */.Q.id(index)}_folder`,
        name,
        type: "folder",
        url: URLS[index],
        shared: shared(index),
        tags: assets/* _tags */.Qw.slice(0, 5),
        size: GB / ((index + 1) * 10),
        totalFiles: (index + 1) * 100,
        createdAt: _mock/* _mock */.Q.time(index),
        modifiedAt: _mock/* _mock */.Q.time(index),
        isFavorited: _mock/* _mock */.Q.boolean(index + 1)
    }));
const _files = FILES.map((name, index)=>({
        id: `${_mock/* _mock */.Q.id(index)}_file`,
        name,
        url: URLS[index],
        shared: shared(index),
        tags: assets/* _tags */.Qw.slice(0, 5),
        size: GB / ((index + 1) * 500),
        createdAt: _mock/* _mock */.Q.time(index),
        modifiedAt: _mock/* _mock */.Q.time(index),
        type: `${name.split(".").pop()}`,
        isFavorited: _mock/* _mock */.Q.boolean(index + 1)
    }));
const _allFiles = [
    ..._folders,
    ..._files
];

;// CONCATENATED MODULE: ./src/_mock/_order.ts

// ----------------------------------------------------------------------
const ORDER_STATUS_OPTIONS = [
    {
        value: "pending",
        label: "Pending"
    },
    {
        value: "completed",
        label: "Completed"
    },
    {
        value: "cancelled",
        label: "Cancelled"
    },
    {
        value: "refunded",
        label: "Refunded"
    }
];
const ITEMS = [
    ...Array(3)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        sku: `16H9UR${index}`,
        quantity: index + 1,
        name: _mock/* _mock */.Q.productName(index),
        coverUrl: _mock/* _mock */.Q.image.product(index),
        price: _mock/* _mock */.Q.number.price(index)
    }));
const _orders = [
    ...Array(20)
].map((_, index)=>{
    const shipping = 10;
    const discount = 10;
    const taxes = 10;
    const items = index % 2 && ITEMS.slice(0, 1) || index % 3 && ITEMS.slice(1, 3) || ITEMS;
    const totalQuantity = items.reduce((accumulator, item)=>accumulator + item.quantity, 0);
    const subTotal = items.reduce((accumulator, item)=>accumulator + item.price * item.quantity, 0);
    const totalAmount = subTotal - shipping - discount + taxes;
    const customer = {
        id: _mock/* _mock */.Q.id(index),
        name: _mock/* _mock */.Q.fullName(index),
        email: _mock/* _mock */.Q.email(index),
        avatarUrl: _mock/* _mock */.Q.image.avatar(index),
        ipAddress: "192.158.1.38"
    };
    const delivery = {
        shipBy: "DHL",
        speedy: "Standard",
        trackingNumber: "SPX037739199373"
    };
    const history = {
        orderTime: _mock/* _mock */.Q.time(1),
        paymentTime: _mock/* _mock */.Q.time(2),
        deliveryTime: _mock/* _mock */.Q.time(3),
        completionTime: _mock/* _mock */.Q.time(4),
        timeline: [
            {
                title: "Delivery successful",
                time: _mock/* _mock */.Q.time(1)
            },
            {
                title: "Transporting to [2]",
                time: _mock/* _mock */.Q.time(2)
            },
            {
                title: "Transporting to [1]",
                time: _mock/* _mock */.Q.time(3)
            },
            {
                title: "The shipping unit has picked up the goods",
                time: _mock/* _mock */.Q.time(4)
            },
            {
                title: "Order has been created",
                time: _mock/* _mock */.Q.time(5)
            }
        ]
    };
    return {
        id: _mock/* _mock */.Q.id(index),
        orderNumber: `#601${index}`,
        createdAt: _mock/* _mock */.Q.time(index),
        taxes,
        items,
        history,
        subTotal,
        shipping,
        discount,
        customer,
        delivery,
        totalAmount,
        totalQuantity,
        shippingAddress: {
            fullAddress: "19034 Verna Unions Apt. 164 - Honolulu, RI / 87535",
            phoneNumber: "365-374-4961"
        },
        payment: {
            cardType: "mastercard",
            cardNumber: "**** **** **** 5678"
        },
        status: index % 2 && "completed" || index % 3 && "pending" || index % 4 && "cancelled" || "refunded"
    };
});

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

// EXTERNAL MODULE: ./node_modules/date-fns/esm/add/index.js
var add = __webpack_require__(6226);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/subDays/index.js
var subDays = __webpack_require__(82642);
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
const _invoice_ITEMS = [
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
    const subTotal = _invoice_ITEMS.reduce((accumulator, item)=>accumulator + item.price * item.quantity, 0);
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
        items: _invoice_ITEMS,
        invoiceNumber: `INV-199${index}`,
        invoiceFrom: _addressBooks[index],
        invoiceTo: _addressBooks[index + 1],
        sent: _mock/* _mock */.Q.number.nativeS(index),
        createDate: (0,subDays/* default */.Z)(new Date(), index),
        dueDate: (0,add/* default */.Z)(new Date(), {
            days: index + 15,
            hours: index
        })
    };
});

// EXTERNAL MODULE: ./src/_mock/_product.ts
var _product = __webpack_require__(50109);
;// CONCATENATED MODULE: ./src/_mock/_overview.ts

// APP
// ----------------------------------------------------------------------
const _appRelated = [
    "Chrome",
    "Drive",
    "Dropbox",
    "Evernote",
    "Github"
].map((name, index)=>{
    const system = [
        2,
        4
    ].includes(index) ? "Windows" : "Mac";
    const price = [
        2,
        4
    ].includes(index) ? _mock/* _mock */.Q.number.price(index) : 0;
    const shortcut = name === "Chrome" && "/assets/icons/app/ic_chrome.svg" || name === "Drive" && "/assets/icons/app/ic_drive.svg" || name === "Dropbox" && "/assets/icons/app/ic_dropbox.svg" || name === "Evernote" && "/assets/icons/app/ic_evernote.svg" || "/assets/icons/app/ic_github.svg";
    return {
        id: _mock/* _mock */.Q.id(index),
        name,
        price,
        system,
        shortcut,
        ratingNumber: _mock/* _mock */.Q.number.rating(index),
        totalReviews: _mock/* _mock */.Q.number.nativeL(index)
    };
});
const _appInstalled = [
    "Germany",
    "England",
    "France",
    "Korean",
    "USA"
].map((name, index)=>({
        id: _mock/* _mock */.Q.id(index),
        name,
        android: _mock/* _mock */.Q.number.nativeL(index),
        windows: _mock/* _mock */.Q.number.nativeL(index + 1),
        apple: _mock/* _mock */.Q.number.nativeL(index + 2),
        flag: [
            "flagpack:de",
            "flagpack:gb-nir",
            "flagpack:fr",
            "flagpack:kr",
            "flagpack:us"
        ][index]
    }));
const _appAuthors = [
    ...Array(3)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        name: _mock/* _mock */.Q.fullName(index),
        avatarUrl: _mock/* _mock */.Q.image.avatar(index),
        totalFavorites: _mock/* _mock */.Q.number.nativeL(index)
    }));
const _appInvoices = [
    ...Array(5)
].map((_, index)=>{
    const category = [
        "Android",
        "Mac",
        "Windows",
        "Android",
        "Mac"
    ][index];
    const status = [
        "paid",
        "out of date",
        "progress",
        "paid",
        "paid"
    ][index];
    return {
        id: _mock/* _mock */.Q.id(index),
        invoiceNumber: `INV-199${index}`,
        price: _mock/* _mock */.Q.number.price(index),
        category,
        status
    };
});
const _appFeatured = [
    ...Array(3)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        title: _mock/* _mock */.Q.postTitle(index),
        description: _mock/* _mock */.Q.sentence(index),
        coverUrl: _mock/* _mock */.Q.image.cover(index)
    }));
// ANALYTIC
// ----------------------------------------------------------------------
const _analyticTasks = [
    ...Array(5)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        name: _mock/* _mock */.Q.taskNames(index)
    }));
const _analyticPosts = [
    ...Array(5)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        postedAt: _mock/* _mock */.Q.time(index),
        title: _mock/* _mock */.Q.postTitle(index),
        coverUrl: _mock/* _mock */.Q.image.cover(index),
        description: _mock/* _mock */.Q.sentence(index)
    }));
const _analyticOrderTimeline = [
    ...Array(5)
].map((_, index)=>{
    const title = [
        "1983, orders, $4220",
        "12 Invoices have been paid",
        "Order #37745 from September",
        "New order placed #XF-2356",
        "New order placed #XF-2346"
    ][index];
    return {
        id: _mock/* _mock */.Q.id(index),
        title,
        type: `order${index + 1}`,
        time: _mock/* _mock */.Q.time(index)
    };
});
const _analyticTraffic = [
    {
        value: "facebook",
        label: "FaceBook",
        total: _mock/* _mock */.Q.number.nativeL(1),
        icon: "eva:facebook-fill"
    },
    {
        value: "google",
        label: "Google",
        total: _mock/* _mock */.Q.number.nativeL(2),
        icon: "eva:google-fill"
    },
    {
        value: "linkedin",
        label: "Linkedin",
        total: _mock/* _mock */.Q.number.nativeL(3),
        icon: "eva:linkedin-fill"
    },
    {
        value: "twitter",
        label: "Twitter",
        total: _mock/* _mock */.Q.number.nativeL(4),
        icon: "eva:twitter-fill"
    }
];
// ECOMMERCE
// ----------------------------------------------------------------------
const _ecommerceSalesOverview = [
    "Total Profit",
    "Total Income",
    "Total Expenses"
].map((label, index)=>({
        label,
        totalAmount: _mock/* _mock */.Q.number.price(index) * 100,
        value: _mock/* _mock */.Q.number.percent(index)
    }));
const _ecommerceBestSalesman = [
    ...Array(5)
].map((_, index)=>{
    const category = [
        "CAP",
        "Branded Shoes",
        "Headphone",
        "Cell Phone",
        "Earings"
    ][index];
    const flag = [
        "flagpack:de",
        "flagpack:gb-nir",
        "flagpack:fr",
        "flagpack:kr",
        "flagpack:us"
    ][index];
    return {
        id: _mock/* _mock */.Q.id(index),
        flag,
        category,
        rank: `Top ${index + 1}`,
        email: _mock/* _mock */.Q.email(index),
        name: _mock/* _mock */.Q.fullName(index),
        totalAmount: _mock/* _mock */.Q.number.price(index),
        avatarUrl: _mock/* _mock */.Q.image.avatar(index + 8)
    };
});
const _ecommerceLatestProducts = [
    ...Array(5)
].map((_, index)=>{
    const colors = index === 0 && [
        "#2EC4B6",
        "#E71D36",
        "#FF9F1C",
        "#011627"
    ] || index === 1 && [
        "#92140C",
        "#FFCF99"
    ] || index === 2 && [
        "#0CECDD",
        "#FFF338",
        "#FF67E7",
        "#C400FF",
        "#52006A",
        "#046582"
    ] || index === 3 && [
        "#845EC2",
        "#E4007C",
        "#2A1A5E"
    ] || [
        "#090088"
    ];
    return {
        id: _mock/* _mock */.Q.id(index),
        colors,
        name: _mock/* _mock */.Q.productName(index),
        price: _mock/* _mock */.Q.number.price(index),
        coverUrl: _mock/* _mock */.Q.image.product(index),
        priceSale: [
            1,
            3
        ].includes(index) ? _mock/* _mock */.Q.number.price(index) : 0
    };
});
const _ecommerceNewProducts = [
    ...Array(5)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        name: _mock/* _mock */.Q.productName(index),
        coverUrl: _mock/* _mock */.Q.image.product(index)
    }));
// BANKING
// ----------------------------------------------------------------------
const _bankingContacts = [
    ...Array(12)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        name: _mock/* _mock */.Q.fullName(index),
        email: _mock/* _mock */.Q.email(index),
        avatarUrl: _mock/* _mock */.Q.image.avatar(index)
    }));
const _bankingCreditCard = [
    {
        id: _mock/* _mock */.Q.id(2),
        balance: 23432.03,
        cardType: "mastercard",
        cardHolder: _mock/* _mock */.Q.fullName(2),
        cardNumber: "**** **** **** 3640",
        cardValid: "11/22"
    },
    {
        id: _mock/* _mock */.Q.id(3),
        balance: 18000.23,
        cardType: "visa",
        cardHolder: _mock/* _mock */.Q.fullName(3),
        cardNumber: "**** **** **** 8864",
        cardValid: "11/25"
    },
    {
        id: _mock/* _mock */.Q.id(4),
        balance: 2000.89,
        cardType: "mastercard",
        cardHolder: _mock/* _mock */.Q.fullName(4),
        cardNumber: "**** **** **** 7755",
        cardValid: "11/22"
    }
];
const _bankingRecentTransitions = [
    {
        id: _mock/* _mock */.Q.id(2),
        name: _mock/* _mock */.Q.fullName(2),
        avatarUrl: _mock/* _mock */.Q.image.avatar(2),
        type: "Income",
        message: "Receive money from",
        category: "Annette Black",
        date: _mock/* _mock */.Q.time(2),
        status: "progress",
        amount: _mock/* _mock */.Q.number.price(2)
    },
    {
        id: _mock/* _mock */.Q.id(3),
        name: _mock/* _mock */.Q.fullName(3),
        avatarUrl: _mock/* _mock */.Q.image.avatar(3),
        type: "Expenses",
        message: "Payment for",
        category: "Courtney Henry",
        date: _mock/* _mock */.Q.time(3),
        status: "completed",
        amount: _mock/* _mock */.Q.number.price(3)
    },
    {
        id: _mock/* _mock */.Q.id(4),
        name: _mock/* _mock */.Q.fullName(4),
        avatarUrl: _mock/* _mock */.Q.image.avatar(4),
        type: "Receive",
        message: "Payment for",
        category: "Theresa Webb",
        date: _mock/* _mock */.Q.time(4),
        status: "failed",
        amount: _mock/* _mock */.Q.number.price(4)
    },
    {
        id: _mock/* _mock */.Q.id(5),
        name: null,
        avatarUrl: null,
        type: "Expenses",
        message: "Payment for",
        category: "Beauty & Health",
        date: _mock/* _mock */.Q.time(5),
        status: "completed",
        amount: _mock/* _mock */.Q.number.price(5)
    },
    {
        id: _mock/* _mock */.Q.id(6),
        name: null,
        avatarUrl: null,
        type: "Expenses",
        message: "Payment for",
        category: "Books",
        date: _mock/* _mock */.Q.time(6),
        status: "progress",
        amount: _mock/* _mock */.Q.number.price(6)
    }
];
// BOOKING
// ----------------------------------------------------------------------
const _bookings = [
    ...Array(5)
].map((_, index)=>{
    const status = [
        "Paid",
        "Paid",
        "Pending",
        "Cancelled",
        "Paid"
    ][index];
    const customer = {
        avatarUrl: _mock/* _mock */.Q.image.avatar(index),
        name: _mock/* _mock */.Q.fullName(index),
        phoneNumber: _mock/* _mock */.Q.phoneNumber(index)
    };
    const destination = [
        ...Array(5)
    ].map((__, _index)=>({
            name: _mock/* _mock */.Q.tourName(_index + 1),
            coverUrl: _mock/* _mock */.Q.image.travel(_index + 1)
        }))[index];
    return {
        id: _mock/* _mock */.Q.id(index),
        destination,
        status,
        customer,
        checkIn: _mock/* _mock */.Q.time(index),
        checkOut: _mock/* _mock */.Q.time(index)
    };
});
const _bookingsOverview = [
    ...Array(3)
].map((_, index)=>({
        status: [
            "Pending",
            "Canceled",
            "Sold"
        ][index],
        quantity: _mock/* _mock */.Q.number.percent(index) * 1000,
        value: _mock/* _mock */.Q.number.percent(index)
    }));
const _bookingReview = [
    ...Array(5)
].map((_, index)=>({
        id: _mock/* _mock */.Q.id(index),
        name: _mock/* _mock */.Q.fullName(index),
        postedAt: _mock/* _mock */.Q.time(index),
        rating: _mock/* _mock */.Q.number.rating(index),
        avatarUrl: _mock/* _mock */.Q.image.avatar(index),
        description: _mock/* _mock */.Q.description(index),
        tags: [
            "Great Sevice",
            "Recommended",
            "Best Price"
        ]
    }));
const _bookingNew = [
    ...Array(5)
].map((_, index)=>({
        guests: "3-5",
        id: _mock/* _mock */.Q.id(index),
        bookedAt: _mock/* _mock */.Q.time(index),
        duration: "3 days 2 nights",
        isHot: _mock/* _mock */.Q.boolean(index),
        name: _mock/* _mock */.Q.fullName(index),
        price: _mock/* _mock */.Q.number.price(index),
        avatarUrl: _mock/* _mock */.Q.image.avatar(index),
        coverUrl: _mock/* _mock */.Q.image.travel(index)
    }));

// EXTERNAL MODULE: ./src/_mock/_calendar.ts
var _calendar = __webpack_require__(3961);
;// CONCATENATED MODULE: ./src/_mock/index.ts


// ----------------------------------------------------------------------













/***/ }),

/***/ 35447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_loading_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86480);
/* __next_internal_client_entry_do_not_use__ default auto */ 
// components

// ----------------------------------------------------------------------
function Loading() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_loading_screen__WEBPACK_IMPORTED_MODULE_1__/* .SplashScreen */ .c, {});
}


/***/ }),

/***/ 38670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 90310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  oG: () => (/* reexport */ avatar_shape),
  s: () => (/* reexport */ booking_illustration),
  EY: () => (/* reexport */ check_in_illustration),
  Qb: () => (/* reexport */ check_out_illustration),
  dD: () => (/* reexport */ coming_soon_illustration),
  E: () => (/* reexport */ forbidden_illustration),
  Bt: () => (/* reexport */ maintenance_illustration),
  bq: () => (/* reexport */ motivation_illustration),
  mn: () => (/* reexport */ order_complete_illustration),
  CE: () => (/* reexport */ page_not_found_illustration),
  XI: () => (/* reexport */ seo_illustration),
  N0: () => (/* reexport */ sever_error_illustration),
  $n: () => (/* reexport */ upgrade_storage_illustration),
  A2: () => (/* reexport */ upload_illustration)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
;// CONCATENATED MODULE: ./src/assets/illustrations/avatar-shape.tsx


// @mui

// ----------------------------------------------------------------------
function AvatarShape({ sx, ...other }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        component: "svg",
        width: 144,
        height: 62,
        fill: "none",
        viewBox: "0 0 144 62",
        xmlns: "http://www.w3.org/2000/svg",
        sx: {
            color: "background.paper",
            ...sx
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "m111.34 23.88c-10.62-10.46-18.5-23.88-38.74-23.88h-1.2c-20.24 0-28.12 13.42-38.74 23.88-7.72 9.64-19.44 11.74-32.66 12.12v26h144v-26c-13.22-.38-24.94-2.48-32.66-12.12z",
            fill: "currentColor",
            fillRule: "evenodd"
        })
    });
}
/* harmony default export */ const avatar_shape = (/*#__PURE__*/(0,react_.memo)(AvatarShape));

// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
;// CONCATENATED MODULE: ./src/assets/illustrations/background-shape.tsx


// @mui

// ----------------------------------------------------------------------
function BackgroundShape() {
    const theme = (0,styles.useTheme)();
    const PRIMARY_MAIN = theme.palette.primary.main;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                    id: "BG",
                    x1: "19.496%",
                    x2: "77.479%",
                    y1: "71.822%",
                    y2: "16.69%",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            offset: "0%",
                            stopColor: PRIMARY_MAIN
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            offset: "100%",
                            stopColor: PRIMARY_MAIN,
                            stopOpacity: "0"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#BG)",
                fillRule: "nonzero",
                d: "M0 198.78c0 41.458 14.945 79.236 39.539 107.786 28.214 32.765 69.128 53.365 114.734 53.434a148.44 148.44 0 0056.495-11.036c9.051-3.699 19.182-3.274 27.948 1.107a75.779 75.779 0 0033.957 8.01c5.023 0 9.942-.494 14.7-1.433 13.58-2.67 25.94-8.99 36.09-17.94 6.378-5.627 14.547-8.456 22.897-8.446h.142c27.589 0 53.215-8.732 74.492-23.696 19.021-13.36 34.554-31.696 44.904-53.224C474.92 234.58 480 213.388 480 190.958c0-76.93-59.774-139.305-133.498-139.305-7.516 0-14.88.663-22.063 1.899C305.418 21.42 271.355 0 232.499 0a103.651 103.651 0 00-45.88 10.661c-13.24 6.487-25.011 15.705-34.64 26.939-32.698.544-62.931 11.69-87.676 30.291C25.351 97.155 0 144.882 0 198.781z",
                opacity: "0.2"
            })
        ]
    });
}
/* harmony default export */ const background_shape = (/*#__PURE__*/(0,react_.memo)(BackgroundShape));

;// CONCATENATED MODULE: ./src/assets/illustrations/seo-illustration.tsx


// @mui


//

// ----------------------------------------------------------------------
function SeoIllustration({ ...other }) {
    const theme = (0,styles.useTheme)();
    const PRIMARY_LIGHT = theme.palette.primary.light;
    const PRIMARY_DARK = theme.palette.primary.dark;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        component: "svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 480 360",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(background_shape, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARK,
                fillRule: "evenodd",
                d: "M109.224 97.41l.812 1.827-.02.009-.061.027-.248.112c-.219.1-.544.25-.968.449l-.849-1.811c.43-.202.762-.355.988-.457l.256-.117.066-.03.024-.01zm-6.771 3.278c.997-.507 1.901-.958 2.7-1.35l.882 1.795c-.791.388-1.687.835-2.675 1.337l-.907-1.782zm-5.356 2.808c.93-.502 1.82-.975 2.665-1.418l.929 1.771c-.838.439-1.72.909-2.644 1.407l-.95-1.76zm-5.274 2.927c.901-.513 1.779-1.007 2.63-1.479l.97 1.749c-.844.468-1.715.958-2.609 1.468l-.99-1.738zm-5.232 3.065c.887-.533 1.758-1.05 2.612-1.55l1.01 1.725c-.847.497-1.712 1.01-2.591 1.539l-1.03-1.714zm-5.117 3.16c.861-.546 1.713-1.079 2.555-1.599l1.05 1.702c-.834.516-1.68 1.044-2.534 1.586l-1.071-1.689zm-5.065 3.301a242.86 242.86 0 012.515-1.661l1.092 1.675a236.91 236.91 0 00-2.494 1.648l-1.113-1.662zm-4.978 3.431c.83-.589 1.66-1.168 2.484-1.736l1.134 1.646c-.817.564-1.638 1.137-2.461 1.721l-1.157-1.631zm-4.873 3.56a197.5 197.5 0 012.427-1.8l1.18 1.615c-.8.585-1.602 1.179-2.404 1.782l-1.203-1.597zm-4.771 3.71c.787-.632 1.576-1.256 2.366-1.87l1.228 1.579c-.782.608-1.563 1.225-2.342 1.85l-1.252-1.559zm-4.651 3.867c.765-.659 1.534-1.31 2.307-1.952l1.279 1.538c-.764.635-1.525 1.278-2.281 1.929l-1.305-1.515zm-4.51 4.035c.739-.688 1.485-1.368 2.236-2.04l1.333 1.491c-.742.664-1.478 1.335-2.208 2.013l-1.362-1.464zm-4.347 4.215a136.43 136.43 0 012.151-2.132l1.392 1.437c-.715.692-1.422 1.392-2.12 2.1l-1.423-1.405zm-4.157 4.411c.674-.751 1.359-1.495 2.053-2.231l1.455 1.371c-.683.725-1.356 1.457-2.019 2.196l-1.489-1.336zm-3.929 4.623c.633-.788 1.279-1.568 1.936-2.341l1.524 1.295a105.43 105.43 0 00-1.9 2.298l-1.56-1.252zm-3.657 4.848a94.278 94.278 0 011.793-2.455l1.596 1.205c-.6.794-1.185 1.595-1.754 2.403l-1.635-1.153zm-3.328 5.084a83.294 83.294 0 011.617-2.57l1.673 1.097a80.437 80.437 0 00-1.578 2.507l-1.712-1.034zm-2.94 5.341c.45-.907.922-1.806 1.414-2.698l1.752.965a69.62 69.62 0 00-1.375 2.623l-1.791-.89zm-2.465 5.583c.366-.948.755-1.889 1.168-2.823l1.83.808c-.4.906-.778 1.817-1.132 2.735l-1.866-.72zm-1.903 5.808c.265-.984.558-1.962.876-2.932l1.9.624a54.83 54.83 0 00-.845 2.828l-1.93-.52zm-1.253 5.993c.15-1.012.331-2.018.54-3.017l1.958.41a50.126 50.126 0 00-.52 2.901l-1.978-.294zm-.467 4.577c.028-.513.065-1.024.109-1.535l1.992.174c-.042.489-.077.98-.104 1.472-.028.496-.04.986-.037 1.469l-2 .014c-.003-.526.01-1.057.04-1.594zm.822 7.749a22.495 22.495 0 01-.643-3.074l1.982-.272c.131.959.328 1.892.585 2.801l-1.924.545zm2.498 5.699a23.889 23.889 0 01-1.444-2.77l1.83-.805c.382.867.824 1.713 1.324 2.538l-1.71 1.037zm3.777 4.87a30.2 30.2 0 01-2.019-2.327l1.578-1.23a28.113 28.113 0 001.885 2.173l-1.444 1.384zm4.602 4.048a41.441 41.441 0 01-2.349-1.902l1.316-1.506c.706.617 1.452 1.22 2.235 1.809l-1.202 1.599zm5.09 3.361a56.872 56.872 0 01-2.58-1.598l1.1-1.671a54.91 54.91 0 002.488 1.542l-1.008 1.727zm5.371 2.823a75.691 75.691 0 01-2.716-1.355l.929-1.771c.857.449 1.74.889 2.645 1.319l-.858 1.807zm5.542 2.408c-.95-.379-1.882-.766-2.794-1.162l.795-1.834c.894.387 1.807.767 2.74 1.138l-.741 1.858zm294.857-2.594c.244.101.598.253 1.048.457l-.828 1.821a31.67 31.67 0 00-1.241-.534l-.061-.025-.014-.005-.003-.001.357-.934.356-.934h.001l.002.001.006.002.021.008.075.03c.065.025.159.063.281.114zm-289.206 4.68c-.96-.329-1.906-.664-2.837-1.007l.692-1.877c.915.337 1.846.668 2.793.992l-.648 1.892zm293.015-2.865c.807.425 1.708.923 2.682 1.497l-1.016 1.723a62.506 62.506 0 00-2.598-1.45l.932-1.77zm-287.286 4.698c-.965-.289-1.918-.583-2.859-.884l.609-1.905c.928.296 1.87.587 2.824.873l-.574 1.916zm292.565-1.59a69.641 69.641 0 012.522 1.724l-1.165 1.626a66.44 66.44 0 00-2.449-1.674l1.092-1.676zM69.05 221.541c-.967-.256-1.924-.517-2.87-.783l.54-1.926c.938.264 1.885.522 2.842.776l-.512 1.933zm5.833 1.464c-.977-.233-1.945-.469-2.905-.709l.486-1.94c.952.238 1.912.472 2.881.703l-.462 1.946zm5.867 1.326c-.988-.213-1.97-.429-2.944-.649l.44-1.951c.968.219 1.943.434 2.925.645l-.42 1.955zm280.057-2.439a67.422 67.422 0 012.356 1.94l-1.306 1.515a65.709 65.709 0 00-2.286-1.883l1.236-1.572zM86.623 225.54a333.57 333.57 0 01-2.954-.595l.403-1.959c.973.201 1.952.398 2.937.591l-.386 1.963zm5.88 1.112c-.985-.179-1.967-.361-2.944-.546l.371-1.965c.973.184 1.95.365 2.931.543l-.357 1.968zm5.904 1.035c-.983-.167-1.963-.335-2.94-.506l.345-1.97c.973.17 1.95.338 2.93.504l-.335 1.972zm267.031-1.801a64.195 64.195 0 012.181 2.162l-1.442 1.386a63.013 63.013 0 00-2.113-2.095l1.374-1.453zm-261.112 2.771c-.989-.157-1.976-.316-2.959-.477l.323-1.974c.981.161 1.964.319 2.95.476l-.314 1.975zm5.919.916c-.99-.149-1.978-.3-2.965-.453l.306-1.976c.984.152 1.969.302 2.957.451l-.298 1.978zm5.92.873c-.987-.143-1.975-.287-2.961-.432l.292-1.979c.984.145 1.969.289 2.955.431l-.286 1.98zm5.929.84a781.94 781.94 0 01-2.965-.417l.281-1.98 2.96.417-.276 1.98zm5.927.818c-.987-.135-1.976-.27-2.965-.407l.273-1.981c.988.136 1.976.272 2.962.406l-.27 1.982zm241.664-1.8a62.33 62.33 0 011.957 2.359l-1.571 1.238a58.92 58.92 0 00-1.893-2.282l1.507-1.315zm-235.74 2.603l-2.957-.4.269-1.982 2.956.4-.268 1.982zm5.935.801l-2.964-.4.267-1.982 2.965.4-.268 1.982zm5.928.805l-2.977-.406.269-1.982 2.98.407-.272 1.981zm5.915.821l-2.962-.414.275-1.981c.993.138 1.982.276 2.966.415l-.279 1.98zm5.896.848c-.971-.143-1.948-.285-2.93-.426l.284-1.98c.985.142 1.964.284 2.937.427l-.291 1.979zm5.922.895c-.972-.151-1.952-.302-2.94-.451l.299-1.977c.99.149 1.973.3 2.949.452l-.308 1.976zm209.938-1.957a59.573 59.573 0 011.709 2.551l-1.69 1.069a56.139 56.139 0 00-1.651-2.463l1.632-1.157zm-204.034 2.911c-.974-.163-1.958-.325-2.952-.486l.319-1.974c.998.161 1.986.324 2.965.488l-.332 1.972zm5.881 1.035a369.37 369.37 0 00-2.965-.534l.346-1.97c1.006.177 2 .356 2.982.537l-.363 1.967zm5.85 1.143c-.972-.201-1.959-.399-2.961-.595l.383-1.963c1.009.197 2.004.397 2.984.6l-.406 1.958zm5.81 1.291c-.958-.228-1.935-.453-2.932-.674l.433-1.953c1.006.223 1.995.451 2.964.682l-.465 1.945zm5.75 1.497a126.97 126.97 0 00-2.901-.788l.502-1.936c1.006.261 1.988.527 2.947.8l-.548 1.924zm184.026-2.689c.494.881.972 1.787 1.431 2.718l-1.794.884a54.93 54.93 0 00-1.381-2.623l1.744-.979zm-178.387 4.477a83.817 83.817 0 00-2.858-.956l.602-1.907c1.007.317 1.983.643 2.926.978l-.67 1.885zm5.402 2.214a50.388 50.388 0 00-2.665-1.174l.755-1.852a52.08 52.08 0 012.773 1.222l-.863 1.804zm175.7-1.183c.397.928.775 1.88 1.132 2.854l-1.878.687a55.769 55.769 0 00-1.093-2.754l1.839-.787zm-171.918 3.282a27.52 27.52 0 00-1.18-.728l1.008-1.727c.438.255.86.515 1.266.781.386.252.788.506 1.206.763l-1.045 1.705a54.43 54.43 0 01-1.255-.794zm6.674 3.795a88.769 88.769 0 01-2.71-1.43l.964-1.752c.839.462 1.723.928 2.65 1.398l-.904 1.784zm167.354-1.314c.295.964.57 1.949.822 2.955l-1.94.486a56.86 56.86 0 00-.794-2.854l1.912-.587zm-161.766 3.964c-.978-.436-1.926-.872-2.842-1.305l.856-1.808c.902.427 1.836.856 2.801 1.287l-.815 1.826zm5.624 2.389c-.977-.396-1.932-.792-2.864-1.188l.781-1.841c.922.391 1.867.783 2.834 1.175l-.751 1.854zm5.702 2.219c-.979-.366-1.942-.734-2.887-1.101l.726-1.864c.936.364 1.891.728 2.863 1.092l-.702 1.873zm151.931-2.627c.195.988.367 1.994.517 3.019l-1.979.289a60 60 0 00-.5-2.921l1.962-.387zm-146.173 4.709a282.93 282.93 0 01-2.913-1.035l.68-1.881c.95.343 1.915.686 2.893 1.028l-.66 1.888zm5.793 1.961c-.989-.325-1.966-.651-2.932-.977l.642-1.895c.959.325 1.931.649 2.913.971l-.623 1.901zm5.808 1.851a366.91 366.91 0 01-2.928-.92l.607-1.905c.961.306 1.932.611 2.912.915l-.591 1.91zm135.458-2.462c.049.509.093 1.023.131 1.542a15.1 15.1 0 01.032 1.682l-1.998-.075c.017-.471.008-.958-.029-1.461a59 59 0 00-.127-1.495l1.991-.193zm-129.616 4.222a452.59 452.59 0 01-2.926-.869l.577-1.915c.963.29 1.934.578 2.911.864l-.562 1.92zm5.875 1.674c-.982-.272-1.957-.546-2.927-.823l.548-1.923c.965.275 1.936.548 2.913.819l-.534 1.927zm5.902 1.593a521.99 521.99 0 01-2.943-.783l.521-1.931c.972.262 1.949.522 2.93.779l-.508 1.935zm117.481-1.038a12.02 12.02 0 01-1.365 2.996l-1.691-1.069a9.965 9.965 0 001.139-2.499l1.917.572zm-111.556 2.55c-.993-.246-1.982-.495-2.968-.747l.495-1.938c.981.251 1.966.499 2.955.744l-.482 1.941zm5.937 1.432c-.995-.233-1.987-.469-2.977-.708l.469-1.944c.985.238 1.973.472 2.964.704l-.456 1.948zm5.954 1.352a461.96 461.96 0 01-2.98-.667l.443-1.95c.987.224 1.976.445 2.967.663l-.43 1.954zm5.976 1.272a440.55 440.55 0 01-2.989-.626l.416-1.956c.992.211 1.984.419 2.976.623l-.403 1.959zm90.244-1.087a17.352 17.352 0 01-2.54 1.996l-1.091-1.676a15.272 15.272 0 002.247-1.764l1.384 1.444zm-84.25 2.277c-1-.191-2.001-.386-3.002-.585l.39-1.962c.996.198 1.992.392 2.987.582l-.375 1.965zm6.003 1.101c-.999-.175-1.999-.355-3.001-.539l.361-1.967c.997.183 1.993.362 2.987.537l-.347 1.969zm72.9.168c-.911.427-1.878.819-2.897 1.178l-.663-1.887a29.338 29.338 0 002.71-1.102l.85 1.811zm-66.872.844c-1-.16-2.003-.324-3.007-.493l.33-1.972c1 .168 1.997.331 2.992.49l-.315 1.975zm6.051.913a350.993 350.993 0 01-3.025-.444l.299-1.977c1.006.152 2.009.299 3.007.441l-.281 1.98zm54.962.332c-.979.263-1.996.501-3.05.716l-.4-1.96a50.079 50.079 0 002.932-.688l.518 1.932zm-48.896.472a292.674 292.674 0 01-3.049-.39l.263-1.982c1.015.135 2.025.264 3.03.387l-.244 1.985zm6.076.684a273.234 273.234 0 01-3.058-.328l.224-1.987c1.019.115 2.031.223 3.037.325l-.203 1.99zm36.729.101c-.989.152-2.005.287-3.047.406l-.226-1.988a74.52 74.52 0 002.968-.395l.305 1.977zm-30.642.446a247.153 247.153 0 01-3.048-.255l.18-1.992c1.015.091 2.023.176 3.023.253l-.155 1.994zm6.099.39a193.964 193.964 0 01-3.036-.173l.128-1.995c1.012.064 2.015.122 3.007.171l-.099 1.997zm18.393-.133c-.991.079-2.002.144-3.032.196l-.101-1.997a107.33 107.33 0 002.975-.193l.158 1.994zm-12.279.337a175.75 175.75 0 01-3.028-.075l.067-1.999c1.01.034 2.008.059 2.993.075l-.032 1.999zm6.131-.023c-.993.025-2.002.039-3.025.043l-.007-2c1.009-.004 2.003-.018 2.981-.043l.051 2z",
                clipRule: "evenodd",
                opacity: "0.24"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M47.943 122.571L96.231 273.55a11.4 11.4 0 0011.786 7.805l63.326-5.36 148.013-12.644a11.316 11.316 0 009.904-7.823c.456-1.421.627-2.918.503-4.405a12.314 12.314 0 00-.729-3.122l-11.838-31.221-21.412-57.238-16.599-44.23a11.37 11.37 0 00-10.641-7.362H58.741a11.345 11.345 0 00-11.344 11.343c.016 1.114.2 2.219.546 3.278z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M47.943 122.571L96.231 273.55a11.4 11.4 0 0011.786 7.805l63.326-5.36 148.013-12.644a11.316 11.316 0 009.904-7.823c.456-1.421.627-2.918.503-4.405a12.314 12.314 0 00-.729-3.122l-11.838-31.221-21.412-57.238-16.599-44.23a11.37 11.37 0 00-10.641-7.362H58.741a11.345 11.345 0 00-11.344 11.343c.016 1.114.2 2.219.546 3.278z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#paint0_linear_1_51)",
                d: "M170.575 276.06l-62.558 5.295a11.4 11.4 0 01-11.785-7.805L47.942 122.571a11.028 11.028 0 01-.546-3.278A11.34 11.34 0 0158.74 107.95h57.453l54.382 168.11z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#F4F6F8",
                d: "M227.879 191.221c2.613-.162 4.368-2.749 3.553-5.237l-8.483-25.895a4.002 4.002 0 00-3.993-2.75l-61.621 2.961c-2.666.128-4.461 2.782-3.588 5.304l9.248 26.717a3.999 3.999 0 004.028 2.683l60.856-3.783z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#DFE3E8",
                d: "M244.879 239.221c2.613-.162 4.368-2.749 3.553-5.237l-8.483-25.895a4.002 4.002 0 00-3.993-2.75l-61.621 2.961c-2.666.128-4.461 2.782-3.588 5.304l9.248 26.717a3.999 3.999 0 004.028 2.683l60.856-3.783z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                filter: "url(#filter0_f_1_51)",
                opacity: "0.4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#919EAB",
                    d: "M253.012 134.539l15.948 52.893a4.007 4.007 0 003.903 2.94l39.559-1.142a2 2 0 001.816-2.7l-20.001-53.4a2 2 0 00-1.755-1.295l-35.906-2.109a3.612 3.612 0 00-3.059 1.461 3.614 3.614 0 00-.505 3.352z"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M330.082 174.424l-16.495-46.701a4.03 4.03 0 00-3.512-2.732l-69.518-4.111a3.676 3.676 0 00-3.061 1.481 3.663 3.663 0 00-.53 3.358l15.949 52.92a4.057 4.057 0 003.902 2.966l70.091-2.108a3.663 3.663 0 002.898-1.716 3.667 3.667 0 00.276-3.357z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARK,
                d: "M295.375 166.976c.478 1.237.718 1.856 1.229 2.206.511.351 1.174.351 2.501.351h.32c2.648 0 3.972 0 4.568-.87.596-.869.118-2.104-.837-4.574l-6.427-16.612c-.479-1.238-.719-1.856-1.23-2.207-.511-.35-1.174-.35-2.501-.35h-.32c-2.648 0-3.972 0-4.568.87-.596.869-.118 2.104.837 4.573l6.428 16.613z"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                opacity: "0.48",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "url(#paint1_linear_1_51)",
                        d: "M306.33 166.969c.478 1.241.717 1.861 1.228 2.212.512.351 1.176.351 2.505.351h.314c2.649 0 3.973 0 4.569-.869.596-.87.118-2.105-.839-4.574l-1.586-4.099c-.479-1.237-.718-1.855-1.229-2.205-.511-.351-1.175-.351-2.501-.351h-.305c-2.644 0-3.966 0-4.562.868-.596.868-.121 2.102.829 4.569l1.577 4.098z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "url(#paint2_linear_1_51)",
                        d: "M284.397 166.971c.478 1.24.717 1.86 1.228 2.211.512.351 1.176.351 2.505.351h.315c2.648 0 3.973 0 4.568-.87.596-.87.118-2.105-.838-4.575l-2.705-6.986c-.479-1.237-.718-1.855-1.229-2.205-.511-.35-1.175-.35-2.501-.35h-.303c-2.645 0-3.967 0-4.563.868-.596.868-.12 2.102.831 4.57l2.692 6.986z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "url(#paint3_linear_1_51)",
                        d: "M273.442 166.976c.479 1.237.718 1.856 1.229 2.206.511.351 1.175.351 2.502.351h.32c2.648 0 3.972 0 4.568-.87.596-.869.118-2.104-.838-4.574l-9.445-24.417c-.479-1.238-.718-1.856-1.229-2.207-.511-.35-1.175-.35-2.502-.35h-.32c-2.648 0-3.972 0-4.568.869-.596.87-.118 2.104.837 4.574l9.446 24.418z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "url(#paint4_linear_1_51)",
                        d: "M262.463 166.974c.479 1.239.718 1.858 1.229 2.208.511.351 1.175.351 2.502.351h.322c2.647 0 3.97 0 4.566-.869.596-.869.119-2.104-.835-4.573l-12.935-33.472c-.479-1.238-.718-1.857-1.229-2.207-.511-.351-1.175-.351-2.502-.351h-.322c-2.647 0-3.97 0-4.566.869-.596.869-.119 2.104.835 4.573l12.935 33.471z"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                fill: "#fff",
                fillRule: "evenodd",
                clipRule: "evenodd",
                opacity: "0.4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M78.02 155.171a15.22 15.22 0 11.312 1.015l-.156-.495-.157-.52zm15.194-4.189l-3.59-11.525a12.641 12.641 0 013.121-.547 12.102 12.102 0 0111.994 8.456c.312 1.014.496 2.062.546 3.122a13.006 13.006 0 01-.286 3.148 11.815 11.815 0 01-2.914 5.516 11.914 11.914 0 01-11.525 3.59 13.21 13.21 0 01-2.94-1.067 12.76 12.76 0 01-2.602-1.821 12.257 12.257 0 01-3.33-5.203l11.526-3.669zM111.296 251.773a15.298 15.298 0 0129.321-8.429v.494c0 .156 0 .338.182.494a15.272 15.272 0 01-28.619 10.407c-.078-.247-.149-.495-.221-.742a28.499 28.499 0 00-.221-.741 16.041 16.041 0 01-.171-.595 10.734 10.734 0 00-.271-.888zm11.187-14.7l3.746 11.474.079-.026 3.746 11.5a11.965 11.965 0 006.921-6.01 11.83 11.83 0 001.04-2.966c.23-1.024.317-2.075.26-3.122a12.07 12.07 0 00-9.548-11.188 12.42 12.42 0 00-6.244.338zM100.21 187.509a15.272 15.272 0 00-4.473 10.799v1.066a15.272 15.272 0 1030.544 0v-1.066a15.271 15.271 0 00-26.071-10.799zm10.591 11.293V186.73c2.112.016 4.183.581 6.01 1.639a11.366 11.366 0 012.602 1.925 12.027 12.027 0 01-.005 17.068 12.022 12.022 0 01-5.433 3.096 11.575 11.575 0 01-6.244 0 12.202 12.202 0 01-2.914-1.171l5.984-10.485z"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#paint5_linear_1_51)",
                d: "M151.154 76h-41.55l12.645 7.727L151.154 76z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#paint6_linear_1_51)",
                d: "M151.154 76l-26.668 12.332 4.501 15.715L151.154 76z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#paint7_linear_1_51)",
                d: "M117.435 95.279l7.051-6.947L151.154 76 117.435 95.28z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARK,
                d: "M117.435 95.279l7.051-6.947L151.154 76l-28.905 7.727-4.814 11.552z"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("filter", {
                        id: "filter0_f_1_51",
                        width: "101.56",
                        height: "100.65",
                        x: "232.807",
                        y: "109.722",
                        colorInterpolationFilters: "sRGB",
                        filterUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feBlend", {
                                in: "SourceGraphic",
                                in2: "BackgroundImageFix",
                                result: "shape"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feGaussianBlur", {
                                result: "effect1_foregroundBlur_1_51",
                                stdDeviation: "10"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint0_linear_1_51",
                        x1: "47.397",
                        x2: "47.397",
                        y1: "107.95",
                        y2: "281.395",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: PRIMARY_LIGHT
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: PRIMARY_DARK
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint1_linear_1_51",
                        x1: "248.43",
                        x2: "248.43",
                        y1: "128.061",
                        y2: "169.533",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: PRIMARY_LIGHT
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: PRIMARY_DARK
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint2_linear_1_51",
                        x1: "248.43",
                        x2: "248.43",
                        y1: "128.061",
                        y2: "169.533",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: PRIMARY_LIGHT
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: PRIMARY_DARK
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint3_linear_1_51",
                        x1: "248.43",
                        x2: "248.43",
                        y1: "128.061",
                        y2: "169.533",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: PRIMARY_LIGHT
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: PRIMARY_DARK
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint4_linear_1_51",
                        x1: "248.43",
                        x2: "248.43",
                        y1: "128.061",
                        y2: "169.533",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: PRIMARY_LIGHT
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: PRIMARY_DARK
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint5_linear_1_51",
                        x1: "109.604",
                        x2: "109.604",
                        y1: "76",
                        y2: "104.047",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: PRIMARY_LIGHT
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: PRIMARY_DARK
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint6_linear_1_51",
                        x1: "109.604",
                        x2: "109.604",
                        y1: "76",
                        y2: "104.047",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: PRIMARY_LIGHT
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: PRIMARY_DARK
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint7_linear_1_51",
                        x1: "109.604",
                        x2: "109.604",
                        y1: "76",
                        y2: "104.047",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: PRIMARY_LIGHT
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: PRIMARY_DARK
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("image", {
                href: "/assets/illustrations/characters/character_3.png",
                height: "300",
                x: "312",
                y: "30"
            })
        ]
    });
}
/* harmony default export */ const seo_illustration = (/*#__PURE__*/(0,react_.memo)(SeoIllustration));

;// CONCATENATED MODULE: ./src/assets/illustrations/upload-illustration.tsx


// @mui


//

// ----------------------------------------------------------------------
function UploadIllustration({ ...other }) {
    const theme = (0,styles.useTheme)();
    const PRIMARY_MAIN = theme.palette.primary.main;
    const PRIMARY_DARK = theme.palette.primary.dark;
    const PRIMARY_DARKER = theme.palette.primary.darker;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        component: "svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 480 360",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(background_shape, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                    id: "linearGradient-2",
                    x1: "30.113%",
                    x2: "30.113%",
                    y1: "0%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            offset: "0%",
                            stopOpacity: "0"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            offset: "100%"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FF4842",
                fillRule: "nonzero",
                d: "M293.006 206.192c-2.248 2.672-4.676 2.628-6.123 2.251l.054-1.384s5.979-2.733 5.827-2.159c-.057.215.057.733.242 1.292zM309.393 209.217c-3.818 2.206-6.058-.38-6.578-1.112.32-.84.801-2.204.703-2.592-.144-.577 5.827 2.155 5.827 2.155l.048 1.549zM305.303 187.204s3.632-2.093 4.425-1.151c.792.942-4.425 1.151-4.425 1.151zM307.497 188.355s-.598.299.721.681c1.318.383-.721-.681-.721-.681zM285.532 182.599c-.123.036 3.022 2.123 5.862.395-.012 0-5.154-.61-5.862-.395zM291.239 186.591s-.861 1.692-2.625 1.943c-1.764.251 2.625-1.943 2.625-1.943zM302.785 190.262s4.138 6.578 3.346 8.129c-.793 1.552-3.346-8.129-3.346-8.129zM294.62 216.416c0 .368 0 .712-.036.996-.107 1.33-3.381.828-3.381.828-2.99.416-4.066-1.019-4.422-2.392a5.444 5.444 0 01-.164-1.363 5.606 5.606 0 01.054-.819v-.272a1.998 1.998 0 011.859.379c1.331 1.08 3.095.252 3.095.252s1.294.107 1.793.538c.281.242.745-.341 1.098-.897.021.359.054 1.007.074 1.701.024.356.03.714.03 1.049z",
                opacity: "0.05"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FF4842",
                fillRule: "nonzero",
                d: "M289.37 216.339s-.897.879-2.589-.479a5.444 5.444 0 01-.164-1.363c.864.658 2.466 1.842 2.753 1.842zM294.62 216.416a.67.67 0 01-.519.132.672.672 0 01-.452-.287c.348-.266.669-.566.956-.897.009.359.015.717.015 1.052zM301.637 217.032c0 .371 0 .715.033.996.108 1.333 3.382.828 3.382.828 2.989.419 4.066-1.017 4.421-2.392a5.728 5.728 0 00.111-2.182v-.272a2.024 2.024 0 00-1.862.379c-1.331 1.08-3.092.251-3.092.251s-1.294.111-1.794.542c-.281.242-.744-.341-1.094-.897a61.426 61.426 0 00-.078 1.701c-.024.35-.03.708-.027 1.046z",
                opacity: "0.05"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FF4842",
                fillRule: "nonzero",
                d: "M306.887 216.949s.897.879 2.587-.479c.112-.444.169-.901.167-1.36-.867.655-2.47 1.839-2.754 1.839zM301.637 217.032a.67.67 0 00.969-.155 6.35 6.35 0 01-.957-.897c-.009.356-.014.714-.012 1.052zM319.614 106.269c.063-.138.123-.275.18-.41.057-.134.077-.209.11-.317-.11.237-.206.48-.29.727z",
                opacity: "0.05"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARKER,
                fillRule: "nonzero",
                d: "M157.592 279.461a4.114 4.114 0 01-.917-3.131l13.196-107.979 1.094-8.97a4.142 4.142 0 014.078-3.635l38.654-.257a4.135 4.135 0 004.108-4.249l-.015-.409a4.14 4.14 0 014.135-4.279h40.619a4.134 4.134 0 014.098 4.682 4.137 4.137 0 003.995 4.682l39.01.996a4.13 4.13 0 013.97 4.831l-19.502 113.909-.368 2.152a4.042 4.042 0 01-.598 1.543l-135.557.114z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FFF",
                fillRule: "nonzero",
                d: "M251.256817 123.296578L274.098317 123.296578 274.098317 200.823078 251.256817 200.823078z",
                transform: "rotate(34.64 262.678 162.06)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FFC107",
                fillRule: "nonzero",
                d: "M270.624591 129.857671L286.750291 129.857671 286.750291 145.983371 270.624591 145.983371z",
                transform: "rotate(34.804 278.687 137.92)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FFC107",
                fillRule: "nonzero",
                d: "M260.275579 145.813111L276.423079 145.813111 276.423079 161.960611 260.275579 161.960611z",
                opacity: "0.5",
                transform: "rotate(34.64 268.35 153.887)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FFC107",
                fillRule: "nonzero",
                d: "M249.191579 161.852111L265.339079 161.852111 265.339079 177.999611 249.191579 177.999611z",
                opacity: "0.3",
                transform: "rotate(34.64 257.265 169.926)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FFF",
                fillRule: "nonzero",
                d: "M237.472537 121.334214L260.314037 121.334214 260.314037 198.567714 237.472537 198.567714z",
                transform: "rotate(16.29 248.893 159.951)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FF4842",
                fillRule: "nonzero",
                d: "M249.053192 123.761554L265.200692 123.761554 265.200692 139.909054 249.053192 139.909054z",
                transform: "rotate(16.29 257.127 131.835)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FF4842",
                fillRule: "nonzero",
                d: "M243.584192 142.473554L259.731692 142.473554 259.731692 158.621053 243.584192 158.621053z",
                opacity: "0.5",
                transform: "rotate(16.29 251.658 150.547)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FF4842",
                fillRule: "nonzero",
                d: "M238.116192 161.182554L254.263692 161.182554 254.263692 177.330054 238.116192 177.330054z",
                opacity: "0.3",
                transform: "rotate(16.29 246.19 169.256)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FFF",
                fillRule: "nonzero",
                d: "M230.099192 121.641542L252.940692 121.641542 252.940692 198.875042 230.099192 198.875042z",
                transform: "rotate(4.6 241.52 160.258)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#1890FF",
                fillRule: "nonzero",
                d: "M235.800489 122.985499L251.947989 122.985499 251.947989 139.132999 235.800489 139.132999z",
                transform: "rotate(4.6 243.874 131.06)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#1890FF",
                fillRule: "nonzero",
                d: "M234.234488 142.413498L250.381988 142.413498 250.381988 158.560998 234.234488 158.560998z",
                opacity: "0.5",
                transform: "rotate(4.6 242.308 150.487)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#1890FF",
                fillRule: "nonzero",
                d: "M232.672488 161.846499L248.819988 161.846499 248.819988 177.993999 232.672488 177.993999z",
                opacity: "0.3",
                transform: "rotate(4.6 240.746 169.92)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FFF",
                fillRule: "nonzero",
                d: "M224.736657 123.384871L247.578157 123.384871 247.578157 200.618371 224.736657 200.618371z",
                transform: "rotate(-2.61 236.157 162.002)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                d: "M226.751283 124.659968L242.898783 124.659968 242.898783 140.807468 226.751283 140.807468z",
                transform: "rotate(-2.61 234.825 132.734)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                d: "M228.305601 143.479224L244.473301 143.479224 244.473301 159.646924 228.305601 159.646924z",
                opacity: "0.5",
                transform: "rotate(-2.862 236.39 151.563)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                d: "M228.525282 163.608968L244.672782 163.608968 244.672782 179.756468 228.525282 179.756468z",
                opacity: "0.3",
                transform: "rotate(-2.61 236.599 171.683)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#F4F6F8",
                fillRule: "nonzero",
                d: "M232.679 225.726l-20.294 7.851-29.661 11.466c-1.121-2.093-2.771-4.921-4.813-8.297-7.026-11.642-18.65-29.75-29.001-45.665-11.66-17.938-21.696-33.075-21.696-33.075l7.265-2.093 59.346-17.23 38.854 87.043z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#000",
                fillRule: "nonzero",
                d: "M232.679 225.726l-20.294 7.851a152.535 152.535 0 01-34.484 3.169c-7.026-11.642-18.65-29.75-29-45.665l-14.42-35.18 59.343-17.218 38.855 87.043z",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                d: "M247.777 220.841s-31.526 18.65-78.596 14.432l-37.525-91.486 17.984-3.091 62.168-10.677 35.279 89.043.69 1.779z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FF4842",
                fillRule: "nonzero",
                d: "M247.075 219.074c-7.424.365-16.013.329-24.654-.702-9.351-1.101-18.757-3.367-26.82-7.523-6.742-3.471-12.506-7.247-17.532-11.776-13.074-11.759-21.164-28.579-28.429-58.365l62.168-10.677 35.267 89.043z",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FFF",
                fillRule: "nonzero",
                d: "M270.203 213.959s-23.239 4.55-46.894 1.749c-9.351-1.1-18.757-3.367-26.82-7.522-6.742-3.471-12.503-7.247-17.532-11.777-16.181-14.557-24.725-36.866-33.536-81.918 0 0 38.633 9.325 76.836-11.101-.012.015 12.865 80.373 47.946 110.569z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                d: "M165.405 131.03s31.416-1.776 40.187-8.548l1.331 4.276s-20.758 9.157-41.518 9.268v-4.996zM165.405 152.137s30.417-1.665 53.399-12.766l.777 1.776s-18.237 10.647-54.176 13.433v-2.443zM167.853 160.362s30.418-1.665 53.397-12.766l.777 1.776s-18.237 10.643-54.174 13.433v-2.443zM170.299 168.599s30.417-1.666 53.399-12.766l.774 1.775s-18.237 10.647-54.173 13.433v-2.442zM172.748 176.835s30.417-1.665 53.396-12.766l.777 1.776s-18.237 10.647-54.173 13.433v-2.443zM175.193 185.075s30.417-1.665 53.399-12.766l.774 1.776s-18.237 10.643-54.173 13.433v-2.443z",
                opacity: "0.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                d: "M389.069 287.344s-12.641-.762-11.152 8.097c0 0-.299 1.563 1.124 2.275 0 0 .021-.658 1.295-.434.454.077.916.099 1.375.066a2.832 2.832 0 001.677-.694c.468-.409 3.555-1.468 4.936-7.274 0 0 1.023-1.267.981-1.593l-2.132.897s.73 1.54.156 2.816c0 0-.069-2.759-.479-2.691-.083 0-1.109.533-1.109.533s1.253 2.69.299 4.628c0 0 .359-3.304-.699-4.434l-1.495.876s1.465 2.768.472 5.029c0 0 .254-3.465-.789-4.817l-1.361 1.062s1.379 2.729.539 4.604c0 0-.111-4.036-.835-4.341 0 0-1.195 1.049-1.369 1.494 0 0 .942 1.98.356 3.026 0 0-.359-2.691-.652-2.691 0 0-1.196 1.794-1.309 2.99 0 0 .051-1.818 1.022-3.172a3.593 3.593 0 00-1.818.942s.186-1.262 2.111-1.37c0 0 .981-1.351 1.241-1.435 0 0-1.914-.158-3.074.356 0 0 1.023-1.196 3.427-.649l1.342-1.094s-2.52-.347-3.588.036c0 0 1.229-1.052 3.95-.299l1.462-.873s-2.147-.463-3.426-.299c0 0 1.348-.729 3.856.06l1.044-.47s-1.573-.299-2.033-.358c-.461-.06-.488-.174-.488-.174a5.426 5.426 0 012.957.329s2.222-.813 2.186-.954z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                cx: "380.363",
                cy: "298.487",
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                opacity: "0.1",
                rx: "8.945",
                ry: "1.513"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                d: "M394.956 258.102s-7.125-.43-6.279 4.565a1.218 1.218 0 00.631 1.283s.015-.371.733-.245c.255.042.515.054.774.036.349-.023.681-.159.945-.389.264-.23 2.003-.828 2.783-4.102 0 0 .577-.714.553-.897l-1.196.511s.41.87.087 1.591c0 0-.039-1.558-.269-1.522-.048 0-.625.299-.625.299s.706 1.495.173 2.61c0 0 .204-1.862-.394-2.502l-.846.496s.825 1.561.266 2.834c0 0 .143-1.955-.446-2.714l-.765.598s.774 1.539.299 2.595c0 0-.063-2.275-.469-2.446a4.75 4.75 0 00-.775.834s.532 1.118.204 1.707c0 0-.204-1.515-.368-1.521 0 0-.67 1.001-.739 1.689a3.671 3.671 0 01.577-1.794 2.007 2.007 0 00-1.025.532s.104-.711 1.196-.771c0 0 .553-.763.699-.81 0 0-1.079-.09-1.734.2 0 0 .577-.67 1.932-.365l.759-.619s-1.423-.194-2.024.021c0 0 .694-.598 2.227-.161l.826-.494a7.445 7.445 0 00-1.935-.164s.763-.413 2.174.033l.598-.263s-.897-.177-1.148-.203c-.252-.027-.275-.099-.275-.099a3.078 3.078 0 011.668.185s1.232-.46 1.208-.538z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                cx: "390.052",
                cy: "264.383",
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                opacity: "0.1",
                rx: "5.044",
                ry: "1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                d: "M352.896 262.437s-8.604-.52-7.588 5.51a1.47 1.47 0 00.763 1.549s0-.449.897-.299c.309.052.623.067.935.045a1.923 1.923 0 001.142-.473c.318-.279 2.419-.998 3.361-4.951 0 0 .697-.861.667-1.085l-1.468.622s.496 1.046.104 1.916c0 0-.048-1.877-.326-1.835-.056 0-.753.364-.753.364s.852 1.824.209 3.152c0 0 .245-2.249-.475-3.02l-1.023.598s.996 1.886.32 3.423c0 0 .174-2.359-.535-3.289l-.927.724s.939 1.857.365 3.133c0 0-.072-2.747-.565-2.954 0 0-.81.715-.933 1.008 0 0 .64 1.348.242 2.06 0 0-.245-1.83-.445-1.839 0 0-.804 1.214-.897 2.042.04-.768.28-1.512.697-2.159a2.427 2.427 0 00-1.235.643s.125-.858 1.435-.933c0 0 .667-.92.846-.974 0 0-1.303-.111-2.093.239 0 0 .694-.807 2.329-.44l.915-.747s-1.713-.233-2.442.024c0 0 .837-.715 2.69-.191l.996-.598s-1.462-.314-2.335-.201c0 0 .921-.496 2.625.042l.711-.32s-1.07-.209-1.384-.242c-.314-.033-.329-.119-.329-.119a3.69 3.69 0 012.012.221s1.519-.553 1.492-.646z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                cx: "346.97",
                cy: "270.022",
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                opacity: "0.1",
                rx: "6.09",
                ry: "1.028"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                width: "51.026",
                height: "91.312",
                x: "303.926",
                y: "69.211",
                fill: "#FFF",
                fillRule: "nonzero",
                rx: "4.737",
                transform: "rotate(-71.99 329.44 114.867)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "303.613",
                cy: "103.507",
                r: "9.376",
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                opacity: "0.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                d: "M344.582495 86.4883769L347.150665 86.4883769 347.150665 127.336977 344.582495 127.336977z",
                opacity: "0.2",
                transform: "rotate(-71.99 345.867 106.913)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                d: "M333.028401 99.6373982L335.596571 99.6373982 335.596571 120.445898 333.028401 120.445898z",
                opacity: "0.2",
                transform: "rotate(-71.99 334.312 110.042)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                d: "M337.109071 101.431004L339.677241 101.431004 339.677241 135.086304 337.109071 135.086304z",
                opacity: "0.2",
                transform: "rotate(-71.99 338.393 118.259)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                d: "M338.505494 105.174377L341.073664 105.174377 341.073664 146.022978 338.505494 146.022978z",
                opacity: "0.2",
                transform: "rotate(-71.99 339.79 125.599)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                d: "M348.060839 134.648161L353.026769 134.648161 353.026769 145.952261 348.060839 145.952261z",
                opacity: "0.5",
                transform: "rotate(-71.99 350.544 140.3)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                width: "50.3",
                height: "78.305",
                x: "291.549",
                y: "174.486",
                fill: "#FFF",
                fillRule: "nonzero",
                rx: "4",
                transform: "rotate(-57.265 316.7 213.638)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#DFE3E8",
                fillRule: "nonzero",
                d: "M278.038439 203.88874L292.269539 203.88874 292.269539 207.23723 278.038439 207.23723z",
                transform: "rotate(-57.57 285.154 205.563)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#DFE3E8",
                fillRule: "nonzero",
                d: "M283.007935 199.201889L314.262535 199.201889 314.262535 202.272339 283.007935 202.272339z",
                transform: "rotate(-57.57 298.635 200.737)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#DFE3E8",
                fillRule: "nonzero",
                d: "M288.543935 202.715889L319.798535 202.715889 319.798535 205.786339 288.543935 205.786339z",
                transform: "rotate(-57.57 304.171 204.251)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#DFE3E8",
                fillRule: "nonzero",
                d: "M294.078936 206.235889L325.333536 206.235889 325.333536 209.306339 294.078936 209.306339z",
                transform: "rotate(-57.57 309.706 207.771)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#DFE3E8",
                fillRule: "nonzero",
                d: "M299.879919 211.40702L331.090719 211.40702 331.090719 214.47316 299.879919 214.47316z",
                transform: "rotate(-57.265 315.485 212.94)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#F4F6F8",
                fillRule: "nonzero",
                d: "M305.149936 213.268889L336.404536 213.268889 336.404536 216.339339 305.149936 216.339339z",
                transform: "rotate(-57.57 320.777 214.804)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#F4F6F8",
                fillRule: "nonzero",
                d: "M310.685935 216.782889L341.940535 216.782889 341.940535 219.853339 310.685935 219.853339z",
                transform: "rotate(-57.57 326.313 218.318)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#DFE3E8",
                fillRule: "nonzero",
                d: "M341.417983 210.406958L349.511163 210.406958 349.511163 218.500138 341.417983 218.500138z",
                transform: "rotate(-57.57 345.465 214.454)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                d: "M269.277 168.76l-45.767.493a3.127 3.127 0 00-3.094 3.125v3.782a3.127 3.127 0 01-3.05 3.124l-33.024.792a3.124 3.124 0 01-3.095-2.308l-1.551-5.701a3.124 3.124 0 00-3.053-2.308l-44.113.475a3.125 3.125 0 00-3.05 3.648l17.747 104.449a3.129 3.129 0 003.071 2.604l139.363.598a3.129 3.129 0 003.082-3.714l-20.366-106.521a3.125 3.125 0 00-3.1-2.538z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARK,
                fillRule: "nonzero",
                d: "M269.277 168.76l-45.767.493a3.127 3.127 0 00-3.094 3.125v3.782a3.127 3.127 0 01-3.05 3.124l-33.024.792a3.124 3.124 0 01-3.095-2.308l-1.551-5.701a3.124 3.124 0 00-3.053-2.308l-44.113.475a3.125 3.125 0 00-3.05 3.648l17.747 104.449a3.129 3.129 0 003.071 2.604l139.363.598a3.129 3.129 0 003.082-3.714l-20.366-106.521a3.125 3.125 0 00-3.1-2.538z",
                opacity: "0.243"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#linearGradient-2)",
                fillRule: "nonzero",
                d: "M269.277 168.76l-45.767.493a3.127 3.127 0 00-3.094 3.125v3.782a3.127 3.127 0 01-3.05 3.124l-33.024.792a3.124 3.124 0 01-3.095-2.308l-1.551-5.701a3.124 3.124 0 00-3.053-2.308l-44.113.475a3.125 3.125 0 00-3.05 3.648l17.747 104.449a3.129 3.129 0 003.071 2.604l139.363.598a3.129 3.129 0 003.082-3.714l-20.366-106.521a3.125 3.125 0 00-3.1-2.538z",
                opacity: "0.32"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                cx: "119.593",
                cy: "258.664",
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                opacity: "0.1",
                rx: "4.846",
                ry: "1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                cx: "101.03",
                cy: "260.545",
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                opacity: "0.1",
                rx: "4.846",
                ry: "1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                cx: "108.459",
                cy: "265.905",
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                opacity: "0.1",
                rx: "3.444",
                ry: "1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                cx: "89.193",
                cy: "265.433",
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                opacity: "0.1",
                rx: "3.444",
                ry: "1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                d: "M100.925 260.398s6.796-22.279-1.064-31.204c-5.881-6.676-12.557-5.877-15.547-5.052a5.528 5.528 0 00-3.564 2.963c-1.046 2.254-.858 5.913 6.521 10.186 12.35 7.151 13.119 16.96 13.119 16.96l.535 6.147z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                stroke: PRIMARY_DARKER,
                strokeLinecap: "round",
                strokeWidth: "0.5",
                d: "M85.382 227.302s20.031 6.278 15.546 33.096M97.083 229.547s-2.76 1.86-1.88 4.655M87.39 231.203s1.687-1.716 3.741-.768M95.31 239.832s2.963-1.495 3.728.379M102.638 242.962s-2.224-.176-2.263.897"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                d: "M101.2 260.575s-7.961-16.193-10.147-15.846c-1.037.17-1.516 1.196-1.734 2.218a6.516 6.516 0 00.434 3.941c1.13 2.601 4.165 7.519 11.447 9.687z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                stroke: PRIMARY_DARKER,
                strokeLinecap: "round",
                strokeWidth: "0.5",
                d: "M91.113 247.808s8.353 12.115 9.968 12.647"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                stroke: PRIMARY_DARKER,
                strokeLinecap: "round",
                strokeWidth: "0.5",
                d: "M90.344 249.701L92.293 249.701"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                stroke: PRIMARY_DARKER,
                strokeLinecap: "round",
                strokeWidth: "0.5",
                d: "M92.68 254.132L95.738 254.263"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                stroke: PRIMARY_DARKER,
                strokeLinecap: "round",
                strokeWidth: "0.5",
                d: "M94.542 250.586L94.21 252.179"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                stroke: PRIMARY_DARKER,
                strokeLinecap: "round",
                strokeWidth: "0.5",
                d: "M97.792 255.432L97.732 256.879"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                d: "M100.964 260.575s7.959-16.193 10.144-15.846c1.041.17 1.519 1.196 1.734 2.218a6.514 6.514 0 01-.433 3.941c-1.13 2.601-4.168 7.519-11.445 9.687z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                stroke: PRIMARY_DARKER,
                strokeLinecap: "round",
                strokeWidth: "0.5",
                d: "M111.051 247.808s-8.371 12.115-9.97 12.647"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                stroke: PRIMARY_DARKER,
                strokeLinecap: "round",
                strokeWidth: "0.5",
                d: "M111.82 249.701L109.871 249.701"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                stroke: PRIMARY_DARKER,
                strokeLinecap: "round",
                strokeWidth: "0.5",
                d: "M109.485 254.132L106.426 254.263"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                stroke: PRIMARY_DARKER,
                strokeLinecap: "round",
                strokeWidth: "0.5",
                d: "M107.622 250.586L107.954 252.179"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                stroke: PRIMARY_DARKER,
                strokeLinecap: "round",
                strokeWidth: "0.5",
                d: "M104.372 255.432L104.432 256.879"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                d: "M87.295 264.357a1.375 1.375 0 01-.452-.685.599.599 0 01.317-.697c.3-.11.598.09.837.299.24.21.512.431.81.38a1.237 1.237 0 01-.382-1.16.47.47 0 01.105-.236c.161-.174.454-.099.648.039.598.43.787 1.264.79 2.018.03-.277.03-.555 0-.831a.853.853 0 01.334-.727.938.938 0 01.476-.114.988.988 0 01.774.222.767.767 0 01-.03.947c-.229.257-.5.474-.801.64a1.805 1.805 0 00-.571.547.399.399 0 00-.042.096h-1.74a4.826 4.826 0 01-1.073-.738zM117.626 257.833a1.355 1.355 0 01-.452-.682.599.599 0 01.314-.696c.299-.111.598.089.837.299.239.209.509.436.817.391a1.236 1.236 0 01-.386-1.157.472.472 0 01.107-.236c.162-.173.455-.099.649.036.613.433.787 1.268.79 2.021a4.008 4.008 0 000-.834.852.852 0 01.299-.736.955.955 0 01.475-.11.998.998 0 01.774.218.768.768 0 01-.033.951 2.996 2.996 0 01-.798.64 1.767 1.767 0 00-.571.544.499.499 0 00-.042.098h-1.701a4.78 4.78 0 01-1.079-.747zM107.518 264.357a1.406 1.406 0 01-.455-.685.6.6 0 01.317-.697c.299-.11.598.09.837.299.239.21.505.437.816.395a1.247 1.247 0 01-.385-1.16.472.472 0 01.107-.236c.162-.174.455-.099.649.039.613.43.783 1.264.789 2.018.03-.277.03-.555 0-.832a.855.855 0 01.314-.735.93.93 0 01.476-.114.988.988 0 01.774.222.764.764 0 01-.033.947 3.028 3.028 0 01-.798.64 1.798 1.798 0 00-.571.547.411.411 0 00-.042.096h-1.734c-.385-.2-.742-.45-1.061-.744z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "84.467",
                cy: "87.003",
                r: "6.467",
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "395.425",
                cy: "138.681",
                r: "6.467",
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "279.178",
                cy: "66.467",
                r: "6.467",
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "97.4",
                cy: "122.68",
                r: "10.838",
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARK,
                fillRule: "nonzero",
                d: "M206.029 209.911c-7.975 0-14.44 6.465-14.44 14.44s6.465 14.44 14.44 14.44 14.44-6.465 14.44-14.44-6.465-14.44-14.44-14.44z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                fillRule: "nonzero",
                d: "M206.029 211.59c7.047 0 12.761 5.714 12.761 12.761 0 7.048-5.714 12.761-12.761 12.761-7.048 0-12.761-5.713-12.761-12.761.006-7.045 5.716-12.754 12.761-12.761",
                opacity: "0.72"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARK,
                fillRule: "nonzero",
                d: "M200.058 225.406l-.699-.681a.721.721 0 010-1.065l6.127-5.984a.753.753 0 01.546-.231c.206 0 .404.083.545.231l6.127 5.978a.733.733 0 010 1.065l-.699.682a.768.768 0 01-1.091 0l-3.622-3.727v8.843a.725.725 0 01-.219.523.76.76 0 01-.534.217h-1.009a.75.75 0 01-.759-.74v-8.832l-3.622 3.726a.768.768 0 01-1.091-.005z"
            })
        ]
    });
}
/* harmony default export */ const upload_illustration = (/*#__PURE__*/(0,react_.memo)(UploadIllustration));

;// CONCATENATED MODULE: ./src/assets/illustrations/booking-illustration.tsx


// @mui


// ----------------------------------------------------------------------
function BookingIllustration({ ...other }) {
    const theme = (0,styles.useTheme)();
    const PRIMARY_LIGHTER = theme.palette.primary.lighter;
    const PRIMARY_LIGHT = theme.palette.primary.light;
    const PRIMARY_MAIN = theme.palette.primary.main;
    const PRIMARY_DARK = theme.palette.primary.dark;
    const PRIMARY_DARKER = theme.palette.primary.darker;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        component: "svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 200 200",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FFFFFF",
                d: "M141.968 167.139H48.764a11.932 11.932 0 01-11.921-11.921V45.758a11.935 11.935 0 0111.921-11.922h86.712l18.414 14.677v106.705a11.937 11.937 0 01-11.922 11.921z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#C4CDD5",
                d: "M122.521 69.096h-62.5a1.986 1.986 0 110-3.97h62.5a1.984 1.984 0 110 3.97zM130.711 75.796h-70.69a1.985 1.985 0 010-3.97h70.69a1.98 1.98 0 011.404.581 1.992 1.992 0 01.581 1.404 1.98 1.98 0 01-1.226 1.834c-.24.1-.499.151-.759.151z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                d: "M122.521 99.123h-62.5a1.986 1.986 0 110-3.97h62.5a1.984 1.984 0 110 3.97zM130.711 105.823h-70.69a1.98 1.98 0 01-1.834-1.226 1.986 1.986 0 011.835-2.745h70.689a1.995 1.995 0 011.404.582 1.988 1.988 0 010 2.807 1.99 1.99 0 01-1.404.582z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#DFE3E8",
                d: "M122.522 129.149h-62.5a1.986 1.986 0 110-3.97h62.5a1.985 1.985 0 010 3.97zM130.711 135.85h-70.69a1.985 1.985 0 110-3.971h70.69c.526 0 1.031.209 1.403.582a1.981 1.981 0 010 2.807 1.986 1.986 0 01-1.403.582zM153.531 48.986h-14.424a3.973 3.973 0 01-3.971-3.971V34.361a.246.246 0 01.14-.223.25.25 0 01.262.029l18.147 14.376a.25.25 0 01.081.276.249.249 0 01-.235.166z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#919EAB",
                fillOpacity: "0.24",
                d: "M63.977 43.25A28.25 28.25 0 1135.727 15a28.26 28.26 0 0128.25 28.25z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_LIGHTER,
                d: "M62.975 43.249A27.249 27.249 0 1135.726 16a27.258 27.258 0 0127.25 27.249z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("mask", {
                id: "mask0",
                width: "55",
                height: "55",
                x: "8",
                y: "16",
                maskUnits: "userSpaceOnUse",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#fff",
                    d: "M62.975 43.249A27.249 27.249 0 1135.726 16a27.258 27.258 0 0127.25 27.249z"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                mask: "url(#mask0)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#FBCDBE",
                        d: "M36.143 29.428a9.6 9.6 0 019.6 9.6v1.057a2.058 2.058 0 011.714 2.029v2.4a2.058 2.058 0 01-1.767 2.037 9.606 9.606 0 01-5.433 7.668v3.152h.686c6.817 0 12.343 5.526 12.343 12.343v1.543H19v-1.543c0-6.817 5.526-12.343 12.343-12.343h.686V54.22a9.607 9.607 0 01-5.434-7.668 2.058 2.058 0 01-1.766-2.037v-2.4c0-1.02.74-1.866 1.714-2.029v-1.057a9.6 9.6 0 019.6-9.6z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_DARK,
                        d: "M27.743 58.63c0 2.792 3.799 5.054 8.486 5.054 4.686 0 8.485-2.262 8.485-5.053a3.08 3.08 0 00-.078-.689c5.013 1.57 8.65 6.25 8.65 11.78v1.535H19v-1.534c0-5.598 3.727-10.326 8.834-11.837-.06.243-.091.492-.091.745z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_LIGHT,
                        d: "M27.743 58.63c0 2.792 3.799 5.054 8.486 5.054 4.686 0 8.485-2.262 8.485-5.053a3.08 3.08 0 00-.078-.689c5.013 1.57 8.65 6.25 8.65 11.78v1.535H19v-1.534c0-5.598 3.727-10.326 8.834-11.837-.06.243-.091.492-.091.745z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_DARK,
                        d: "M31.857 48.904c.242 1.65 2.068 2.981 4.285 2.981 2.224 0 4.054-1.34 4.286-3.13.018-.069-.038-.298-.372-.298H32.23c-.307 0-.395.212-.373.447z",
                        opacity: "0.24"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_DARK,
                        fillRule: "evenodd",
                        d: "M34.085 45.542c0 .758.922 1.372 2.058 1.372 1.136 0 2.057-.614 2.057-1.372",
                        clipRule: "evenodd",
                        opacity: "0.24"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_DARK,
                        d: "M31.685 43.485a1.029 1.029 0 100-2.057 1.029 1.029 0 000 2.057zM40.6 43.485a1.029 1.029 0 100-2.057 1.029 1.029 0 000 2.057zM29.223 40.255c.67-.944 2.51-1.474 4.095-1.084a.343.343 0 00.164-.666c-1.84-.452-3.971.161-4.819 1.353a.343.343 0 10.56.397zM43.063 40.255c-.67-.944-2.51-1.474-4.096-1.084a.343.343 0 11-.163-.666c1.84-.452 3.97.161 4.818 1.353a.343.343 0 11-.559.397z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_MAIN,
                        d: "M36.143 26.857c6.438 0 11.657 5.219 11.657 11.657v5.272c.15 1.68.29 2.858.421 3.532.236 1.218.976.816.976 2.548 0 1.732-.742 2.314-.745 3.855-.003 1.54 2.64 2.765 2.64 4.72 0 1.956-1.213 11.183-13.307 11.183-2.584 0-4.784-.735-6.602-2.205.117 1.113.228 2.392.331 3.838h-8.057c.16-4.075-1.248-6.354-1.248-10.895 0-4.541 2.337-11.146 2.277-12.762l.01-.359c-.007-.165-.01-.331-.01-.498v-8.229c0-.68.058-1.348.17-1.997l.001-.06.007.013c.967-5.463 5.738-9.613 11.479-9.613zm.086 5.486h-.172a9.343 9.343 0 00-9.343 9.342v3.943a9.343 9.343 0 009.343 9.343h.172a9.343 9.343 0 009.343-9.343v-3.943a9.343 9.343 0 00-9.343-9.342z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_DARK,
                        fillRule: "evenodd",
                        d: "M36.143 28.742c5.87 0 10.628 4.72 10.628 10.543 0 .671-.063 1.328-.184 1.964-.272-5.533-4.844-9.935-10.444-9.935-5.6 0-10.172 4.402-10.445 9.935a10.5 10.5 0 01-.184-1.964c0-5.822 4.759-10.543 10.629-10.543z",
                        clipRule: "evenodd"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_DARK,
                        fillRule: "evenodd",
                        d: "M47.399 59.17c.024.054.047.11.067.167.776 2.132-1.384 4.876-4.826 6.128-3.44 1.253-6.86.54-7.636-1.592a2.559 2.559 0 01-.056-.173c1.405.97 4.181 1.016 7.04-.025 2.855-1.04 4.95-2.854 5.408-4.497l.003-.009zm-1.99-2.631l.029.131c.293 1.662-2.27 3.503-5.723 4.112s-6.49-.245-6.784-1.907a1.44 1.44 0 01-.017-.133c1.112.854 3.685 1.15 6.555.644 2.865-.505 5.179-1.66 5.935-2.841l.004-.006zm.334-13.482V47a9.343 9.343 0 01-9.343 9.342h-.515A9.343 9.343 0 0126.543 47v-3.943c0-.634.063-1.253.183-1.852-.008.16-.012.32-.012.48v3.943a9.343 9.343 0 009.343 9.343h.171a9.343 9.343 0 009.343-9.343v-3.943c0-.16-.004-.32-.012-.48a9.38 9.38 0 01.184 1.852z",
                        clipRule: "evenodd",
                        opacity: "0.9"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#919EAB",
                fillOpacity: "0.24",
                d: "M195.516 99.234a28.263 28.263 0 01-19.503 26.869c-.17.054-.339.108-.511.159a27.815 27.815 0 01-6.4 1.161 28.16 28.16 0 01-11.436-1.613 28.257 28.257 0 01-18.407-22.832 28.253 28.253 0 1156.257-3.744z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_LIGHTER,
                d: "M194.514 99.233a27.256 27.256 0 01-18.812 25.917c-.164.052-.327.104-.493.153a26.765 26.765 0 01-6.173 1.12 27.206 27.206 0 01-22.99-10.083 27.258 27.258 0 01-3.745-28.04 27.255 27.255 0 0123.152-16.255 27.254 27.254 0 0129.061 27.188z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("mask", {
                id: "mask1",
                width: "55",
                height: "56",
                x: "140",
                y: "71",
                maskUnits: "userSpaceOnUse",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#fff",
                    d: "M194.514 99.233a27.256 27.256 0 01-18.812 25.917c-.164.052-.327.104-.493.153a26.765 26.765 0 01-6.173 1.12 27.206 27.206 0 01-22.99-10.083 27.258 27.258 0 01-3.745-28.04 27.255 27.255 0 0123.152-16.255 27.254 27.254 0 0129.061 27.188z"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                mask: "url(#mask1)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#FBCDBE",
                        d: "M166.886 85.428c5.301 0 9.6 4.298 9.6 9.6v1.057a2.057 2.057 0 011.714 2.029v2.4a2.058 2.058 0 01-1.767 2.037 9.606 9.606 0 01-5.433 7.668v3.152h.686c6.816 0 12.342 5.526 12.342 12.343v1.543h-34.285v-1.543c0-6.817 5.526-12.343 12.343-12.343h.685v-3.152a9.606 9.606 0 01-5.433-7.668 2.058 2.058 0 01-1.767-2.037v-2.4c0-1.02.742-1.866 1.715-2.029v-1.057a9.6 9.6 0 019.6-9.6z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_LIGHTER,
                        d: "M171.686 113.38c6.816 0 12.342 5.526 12.342 12.343v1.534h-34.285v-1.534c0-6.817 5.526-12.343 12.343-12.343h.204c-.022.169-.033.34-.033.514 0 2.367 2.072 4.286 4.629 4.286 2.556 0 4.628-1.919 4.628-4.286 0-.174-.011-.345-.033-.514h.205z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_MAIN,
                        fillRule: "evenodd",
                        d: "M160.714 120.143c0 2.607.336 5.043.919 7.114h-11.891v-1.534c0-6.632 5.231-12.043 11.792-12.331-.522 1.99-.82 4.294-.82 6.751zm23.314 5.58v1.534h-11.719c.583-2.071.919-4.507.919-7.114 0-2.453-.298-4.754-.818-6.742 6.479.375 11.618 5.748 11.618 12.322z",
                        clipRule: "evenodd"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_LIGHTER,
                        fillRule: "evenodd",
                        d: "M175.285 123.143l1.638-1.229a.686.686 0 01.833.007l1.129.879-3.6.343z",
                        clipRule: "evenodd"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_DARKER,
                        fillRule: "evenodd",
                        d: "M161.571 113.2c-.686 3.314-.4 8 .857 14.057h-2.743l-2.4-6.172 1.029-1.542-1.029-1.029 3.257-5.143a3.682 3.682 0 011.029-.171zM172.2 113.2c.685 3.314.4 8-.858 14.057h2.743l2.4-6.172-1.028-1.542 1.028-1.029-3.257-5.143a3.669 3.669 0 00-1.028-.171z",
                        clipRule: "evenodd"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_LIGHT,
                        fillRule: "evenodd",
                        d: "M171 112.092c1.161.788 1.885 1.906 1.885 3.146 0 1.268-.759 2.409-1.968 3.2l-1.018-.802-.785.056.171-.54-.013-.01c1.046-.539 1.728-1.422 1.728-2.421v-2.629zm-6.501 5.05l-.014.01.172.54-.785-.056-1.019.802c-1.186-.776-1.939-1.889-1.967-3.129l-.001-.071c0-1.24.725-2.358 1.886-3.146v2.629c0 .999.682 1.882 1.728 2.421z",
                        clipRule: "evenodd"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_DARKER,
                        fillRule: "evenodd",
                        d: "M164.485 104.8a2.4 2.4 0 004.8 0M164.828 101.542c0 .758.921 1.372 2.057 1.372s2.057-.614 2.057-1.372",
                        clipRule: "evenodd",
                        opacity: "0.24"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_DARKER,
                        fillRule: "evenodd",
                        d: "M160.055 99.409c.317.651 1.03 1.105 1.858 1.105.826 0 1.536-.451 1.855-1.098.094-.193-.04-.35-.176-.234-.42.362-1.017.587-1.679.587-.641 0-1.221-.211-1.639-.553-.152-.125-.311.002-.219.193zM169.998 99.409c.317.651 1.029 1.105 1.858 1.105.826 0 1.536-.451 1.854-1.098.095-.193-.04-.35-.175-.234-.42.362-1.017.587-1.679.587-.641 0-1.221-.211-1.639-.553-.153-.125-.311.002-.219.193z",
                        clipRule: "evenodd"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_DARKER,
                        d: "M159.965 96.255c.671-.944 2.511-1.474 4.096-1.084a.343.343 0 00.164-.666c-1.841-.452-3.972.161-4.819 1.353a.343.343 0 00.559.397zM173.806 96.255c-.671-.944-2.511-1.474-4.096-1.084a.343.343 0 01-.164-.666c1.841-.452 3.972.161 4.819 1.353a.343.343 0 11-.559.397z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_DARKER,
                        d: "M166.971 107.687c-1.95.064-2.82 1.008-3.475.049-.491-.72-.286-1.93.174-2.61.653-.969 1.54-.501 2.532-.611.269-.03.54-.106.769-.23.229.124.5.2.769.23.992.11 1.878-.358 2.532.611.46.68.665 1.89.174 2.61-.655.959-1.525-.114-3.475-.049zm9.466-11.63c-.58 2.412-.846 4.874-1.267 7.315a53.543 53.543 0 01-.285 1.522c-.022.106-.043.501-.146.551-.314.151-.953-.655-1.124-.837-.429-.457-.854-.918-1.377-1.276a7.342 7.342 0 00-3.579-1.255c-.538-.043-1.266.032-1.774.341-.507-.309-1.235-.384-1.773-.341a7.342 7.342 0 00-3.579 1.255c-.523.358-.948.819-1.377 1.276-.171.182-.81.988-1.124.837-.103-.05-.124-.445-.146-.551a53.543 53.543 0 01-.285-1.522c-.421-2.441-.687-4.903-1.267-7.315-.169 0-.317 3.214-.336 3.513-.077 1.216-.166 2.405-.052 3.623.197 2.099.403 4.732 1.984 6.336 1.428 1.449 3.502 1.752 5.291 2.666.231.118.536.263.866.382.347.268 1.035.451 1.828.451.832 0 1.548-.201 1.877-.491a7.76 7.76 0 00.758-.342c1.788-.915 3.863-1.217 5.291-2.666 1.581-1.604 1.787-4.237 1.984-6.336.114-1.218.025-2.407-.052-3.623-.019-.3-.167-3.513-.336-3.513z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_DARK,
                        fillRule: "evenodd",
                        d: "M166.885 89.028c5.586 0 10.115 2.533 10.115 5.657 0 .442-.091.873-.263 1.286-1.041-2.505-5.057-4.371-9.852-4.371s-8.811 1.866-9.852 4.371a3.342 3.342 0 01-.262-1.286c0-3.124 4.528-5.657 10.114-5.657z",
                        clipRule: "evenodd"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_DARKER,
                        d: "M167.228 79.771c5.117 0 14.043 7.569 14.057 15.656.008 4.367-1.649 7.035-4.971 8.001 1.048-9.58-5.417-11.757-9.434-14.088-4.021 2.33-10.475 4.507-9.423 14.088-3.322-.857-4.979-3.524-4.972-8.001.014-8.088 8.927-15.656 14.058-15.656.114 0 .228.005.341.015a3.94 3.94 0 01.344-.015z"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#919EAB",
                fillOpacity: "0.24",
                d: "M5 156.457a28.162 28.162 0 008.98 20.659 28.239 28.239 0 0010.523 6.21 28.359 28.359 0 0018.088-.201l.32-.115a28.255 28.255 0 0016.203-37.926 28.251 28.251 0 00-38.905-13.686A28.248 28.248 0 005 156.457z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_LIGHTER,
                d: "M6 156.456a27.163 27.163 0 008.663 19.927 27.204 27.204 0 0011.043 6.262 27.357 27.357 0 0016.553-.466l.31-.111a27.253 27.253 0 006.316-47.931A27.253 27.253 0 006 156.456z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("mask", {
                id: "mask2",
                width: "55",
                height: "55",
                x: "6",
                y: "129",
                maskUnits: "userSpaceOnUse",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#fff",
                    d: "M6 156.456a27.163 27.163 0 008.663 19.927 27.204 27.204 0 0011.043 6.262 27.357 27.357 0 0016.553-.466l.31-.111a27.253 27.253 0 006.316-47.931A27.253 27.253 0 006 156.456z"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                mask: "url(#mask2)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#FBCDBE",
                        d: "M33.629 143.171a9.6 9.6 0 019.6 9.6v1.057a2.059 2.059 0 011.714 2.029v2.4a2.057 2.057 0 01-1.767 2.037 9.607 9.607 0 01-5.433 7.668v3.152h.686c6.816 0 12.343 5.526 12.343 12.343V185H16.486v-1.543c0-6.817 5.526-12.343 12.343-12.343h.685v-3.152a9.608 9.608 0 01-5.433-7.668 2.057 2.057 0 01-1.767-2.037v-2.4c0-1.019.742-1.865 1.715-2.029v-1.057a9.6 9.6 0 019.6-9.6z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_LIGHT,
                        d: "M25.229 172.374c0 2.791 3.799 5.054 8.485 5.054 4.687 0 8.486-2.263 8.486-5.054a3.08 3.08 0 00-.078-.689c5.013 1.57 8.65 6.251 8.65 11.781V185H16.486v-1.534c0-5.598 3.726-10.325 8.834-11.837-.06.243-.091.492-.091.745z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_DARKER,
                        d: "M30.392 162.565a3.257 3.257 0 006.475-.015c.014-.132-.133-.35-.317-.35h-5.821c-.185 0-.356.202-.337.365z",
                        opacity: "0.24"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_DARKER,
                        fillRule: "evenodd",
                        d: "M31.571 159.286c0 .757.921 1.371 2.057 1.371 1.137 0 2.058-.614 2.058-1.371",
                        clipRule: "evenodd",
                        opacity: "0.24"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_DARKER,
                        d: "M29.172 157.229a1.029 1.029 0 10-.001-2.058 1.029 1.029 0 000 2.058zM38.086 157.229a1.029 1.029 0 10-.001-2.058 1.029 1.029 0 000 2.058zM26.708 153.999c.671-.945 2.511-1.474 4.096-1.085a.343.343 0 10.164-.666c-1.84-.452-3.971.161-4.819 1.353a.343.343 0 00.56.398zM40.549 153.999c-.671-.945-2.511-1.474-4.096-1.085a.343.343 0 11-.163-.666c1.84-.452 3.97.161 4.818 1.353a.343.343 0 01-.559.398z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("mask", {
                        id: "mask3",
                        width: "46",
                        height: "48",
                        x: "11",
                        y: "137",
                        maskUnits: "userSpaceOnUse",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fill: "#fff",
                            d: "M56.257 137v48h-5.486v-1.543c0-6.817-5.526-12.343-12.342-12.343h-.686v-3.152a9.606 9.606 0 005.45-7.842 2.058 2.058 0 001.75-2.034v-2.229a2.059 2.059 0 00-1.714-2.029v-1.057a9.566 9.566 0 00-.796-3.831c-1.701-2.854-16.122-2.717-17.597-.028a9.567 9.567 0 00-.807 3.859v1.057a2.059 2.059 0 00-1.715 2.029v2.229c0 1.031.76 1.886 1.75 2.034a9.606 9.606 0 005.45 7.842v3.152h-.685c-6.749 0-12.233 5.416-12.342 12.139l-.001.204V185H11v-48h45.257z"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                        mask: "url(#mask3)",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: PRIMARY_DARKER,
                                fillRule: "evenodd",
                                d: "M32.117 137.343h3.194a6.857 6.857 0 016.699 5.389l1.561 7.125H23.857l1.562-7.125a6.857 6.857 0 016.698-5.389z",
                                clipRule: "evenodd"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: PRIMARY_DARKER,
                                d: "M33.629 161.857c11.55 0 20.914-4.413 20.914-9.857 0-5.444-9.364-9.857-20.914-9.857-11.551 0-20.915 4.413-20.915 9.857 0 5.444 9.364 9.857 20.915 9.857z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: PRIMARY_DARK,
                                d: "M33.629 155.343c5.87 0 10.628-1.919 10.628-4.286 0-2.367-4.758-4.286-10.628-4.286S23 148.69 23 151.057c0 2.367 4.759 4.286 10.629 4.286z"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_DARKER,
                        d: "M32.208 156.286c0 1.663-1.414 3.012-3.771 3.012h-.471c-2.357 0-3.3-1.35-3.3-3.012 0-1.664.22-3.013 3.52-3.013h.502c3.3 0 3.52 1.349 3.52 3.013zM42.763 156.286c0 1.663-1.414 3.012-3.771 3.012h-.472c-2.356 0-3.3-1.35-3.3-3.012 0-1.664.22-3.013 3.52-3.013h.503c3.299 0 3.52 1.349 3.52 3.013z",
                        opacity: "0.7"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_DARKER,
                        d: "M28.689 152.771c3.711 0 4.022 1.737 4.022 3.515 0 2.069-1.757 3.514-4.274 3.514h-.471c-2.381 0-3.802-1.314-3.802-3.514 0-1.778.31-3.515 4.022-3.515h.503zm0 1.004h-.503c-2.957 0-3.016 1.064-3.017 2.427v.084c0 1.145.485 2.51 2.797 2.51h.471c1.925 0 3.268-1.032 3.268-2.51v-.126-.123c-.01-1.283-.18-2.262-3.016-2.262zM39.243 152.771c3.711 0 4.022 1.737 4.022 3.515 0 2.069-1.757 3.514-4.274 3.514h-.471c-2.38 0-3.802-1.314-3.802-3.514 0-1.778.31-3.515 4.022-3.515h.503zm0 1.004h-.503c-2.957 0-3.016 1.064-3.017 2.427v.084c0 1.145.486 2.51 2.797 2.51h.471c1.925 0 3.269-1.032 3.269-2.51v-.126-.123c-.011-1.283-.181-2.262-3.017-2.262z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: PRIMARY_DARKER,
                        d: "M23.16 153.776c.117-.118 1.404-1.005 5.026-1.005 3.037 0 3.68.323 4.652.81l.072.036c.067.024.413.144.818.158.368-.017.684-.119.776-.152 1.11-.552 2.198-.852 4.739-.852 3.622 0 4.908.887 5.026 1.005.278 0 .503.224.503.502v.502a.502.502 0 01-.503.502s-1.005 0-1.005.502-.503-.727-.503-1.004v-.489c-.613-.24-1.71-.515-3.518-.515-2.014 0-3.018.193-3.878.556l.01.024-.428.173.427.172-.377.931-.466-.188a2.235 2.235 0 00-.256-.079c-.347-.087-.704-.114-1.02-.048a1.368 1.368 0 00-.321.11l-.45.225-.45-.898.45-.225h.001l-.43-.174.014-.034c-.743-.354-1.427-.545-3.883-.545-1.808 0-2.905.275-3.518.515v.489c0 .277-.503 1.506-.503 1.004s-1.005-.502-1.005-.502a.503.503 0 01-.503-.502v-.502c0-.278.225-.502.503-.502z"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const booking_illustration = (/*#__PURE__*/(0,react_.memo)(BookingIllustration));

;// CONCATENATED MODULE: ./src/assets/illustrations/check-in-illustration.tsx


// @mui


// ----------------------------------------------------------------------
function CheckInIllustration({ ...other }) {
    const theme = (0,styles.useTheme)();
    const PRIMARY_LIGHTER = theme.palette.primary.lighter;
    const PRIMARY_LIGHT = theme.palette.primary.light;
    const PRIMARY_MAIN = theme.palette.primary.main;
    const PRIMARY_DARK = theme.palette.primary.dark;
    const PRIMARY_DARKER = theme.palette.primary.darker;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        component: "svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 200 200",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#a)",
                d: "M134.926 133.612c-1.2-3.2-5.8-4.1-8.1-1.6-1.3-7.8 5-32.3-8.9-32-72.8-.5-48.2-8-52.4 77.7-.1 4.8 4.1 9 8.9 8.9h43.5c14 .4 7.6-24.5 8.9-32.4 2.9 3.2 8.7.8 8.5-3.5-.1-1 .4-16.5-.4-17.1zm-2.5 18.3h-5.6v-17.4h5.6v17.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#b)",
                d: "M74.426 190.212c.1 5.9-9.2 5.9-9.1 0-.1-5.9 9.2-5.9 9.1 0zm46.4-4.5c-5.9-.1-5.9 9.2 0 9.1 5.9.1 5.9-9.2 0-9.1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARK,
                d: "M73.126 99.513h2.5v87.499h-2.5v-87.5zm7.1 87.399h2.5v-87.4h-2.5v87.4zm7 0h2.5v-87.4h-2.5v87.4zm7.1 0h2.5v-87.4h-2.5v87.4zm7 0h2.5v-87.4h-2.5v87.4zm7.1 0h2.5v-87.4h-2.5v87.4zm7-87.4v87.5h2.5v-87.5h-2.5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                d: "M140.026 60.912l-1.8 6.7c-3.3-.9-7.3-.7-10.6.3.2-3.2 0-6.3-.6-9.4l-17.3-7.5c-2 14.2 1.4 21.6 7.4 32.8l-10.3 4.8c-1.7 4.1-4.1 4-7.1-.2-6.3 8.4-15.3-6.8-24.7-.3l-1.5-6.6-6.2.2c-5-10.2-13-36.6-1.2-43.9 0 0 0 .1.1.1 3-2 6.6-3.4 10.1-4.4l8.5 10.6c5.6-11.1 7.4-14.8 21.6-12.8l28.6 16.6c4.4 2.3 6.7 8 5 13z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_LIGHTER,
                fillRule: "evenodd",
                d: "M107.626 52.712h.1v2.3h-.1v12.4c0 1-.9 1.9-1.9 1.9-1.7-.5-9.1 1.4-8.9-1.9v-18.1c0-1 .9-1.9 1.9-1.9.3 0 7.7-.1 7.7.1 1.9.6 1.1 3.8 1.2 5.2zm-4 .1c0 2.2-3.3 2.2-3.3 0 0-2.1 3.3-2.1 3.3 0z",
                clipRule: "evenodd"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARKER,
                d: "M130.826 91.813l-12.9 56.5c1.3 1.2 6.9 11.4 6.9 13.2-1.8 5.8-12.9 0-15.9-3.3-1.6-6.9 6-48.8 5.5-56.6-3.9-.3-10.4.4-14.1.8-6.6.2-15.7-1.3-22.4-.8l-.2 1.3 5.4 45.2h-.2c.3.2.7.5 1.1.8 0 1.9 1.5 7.7.3 9.4-3.4 3.7-9.2 5.9-13.5 5.7-1.7-.1-2.9-2-2.2-3.6.1-.1 6.1-12 6.3-11.5h-.4l-13-57.1c-1-4.3 1.5-9 5.7-10.4 0 .1.1.2.1.3l6.2-.2 1.5 6.6c.4-.2.7-.3 1.1-.5.9-.3 1.8-.6 2.7-.8 7.4-2.8 14.8 9.4 20.9 1.5 3 4.2 5.4 4.3 7.1.2l7.6-3.5c.6-1 1.5-1.9 2.4-2.5.2.5.5 1 .8 1.3 4.6-.3 8.2-1.4 12.5 2.3.9 1.7 1.1 3.8.7 5.7zm-58.1-68.2c0-.8.1-1.5.2-2.2-1-.9-.2-5.2 1.3-3.3.5-.9 1.1-1.6 1.9-2.3 2.8 6.1 11.8 2.8 16.5 2.1 1.5 2.3 2 5.4 1.4 8.1 9.6-28.2-30.8-27.7-21.1-.4-.1-.6-.2-1.3-.2-2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FBCDBE",
                d: "M84.826 43.913l-8.5-10.6c-.1 0-.2.1-.3.1l-.2-2.3c-2.4-2.4-3.6-6.3-2.8-9.7-1-.9-.2-5.2 1.3-3.3.5-.9 1.1-1.6 1.9-2.3 2.8 6.1 11.8 2.8 16.5 2.1 2.9 4.3 1.8 10.9-2.2 14l.2 1.7c-.2-.1-5.9 10.3-5.9 10.3zm42.8 23.9v-.7c-.2 3.4-1 6.8-2.2 10.1-1.4.3-7.5-.3-8.4 1.1-1.5 1.4-.2 5.3 1.5 5.9 4.5-1.6 7.7-1.2 11.7 1.9l7.2-18.6c-3.2-.8-6.8-.6-9.8.3zm-20.2-9.8c-3.8-2.8-20.3 9.5-25.7 10.2-2.6 3.7-1.8 7.4 1 11.2 5.4-2.3 11.6-6.5 17.8-11.4l5.8-1.5c3.9-.9 4.7-6.7 1.1-8.5z"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "a",
                        x1: "64.751",
                        x2: "64.751",
                        y1: "99.643",
                        y2: "186.617",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: PRIMARY_LIGHT
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: PRIMARY_DARK
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "b",
                        x1: "95.286",
                        x2: "95.286",
                        y1: "280.421",
                        y2: "185.693",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: PRIMARY_LIGHT
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: PRIMARY_DARK
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const check_in_illustration = (/*#__PURE__*/(0,react_.memo)(CheckInIllustration));

;// CONCATENATED MODULE: ./src/assets/illustrations/check-out-illustration.tsx


// @mui


// ----------------------------------------------------------------------
function CheckoutIllustration({ ...other }) {
    const theme = (0,styles.useTheme)();
    const PRIMARY_LIGHT = theme.palette.primary.light;
    const PRIMARY_MAIN = theme.palette.primary.main;
    const PRIMARY_DARK = theme.palette.primary.dark;
    const PRIMARY_DARKER = theme.palette.primary.darker;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        component: "svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 200 200",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#a)",
                d: "M85.6 134.7c-3.7-5.5-33-10.5-35.3-12 0 0-5.4-2-7.8 3.4-2.4 5.4-16.6 49.8-16.6 49.8s27.8 14.9 36 16.5c3.3.4 6.9-1.1 9.7-2.9l15.8-47.2c-.1 0 2.1-5.2-1.8-7.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARKER,
                d: "M85.6 134.7c2.6 4.5-17.3 52.2-17.2 55.4v.1c2.5 4-4.6 6.9-5.6 2.3-.3 0-.6 0-.9-.1.2-.1.5-.2.8-.4-.1-1.8 1.2-3.2 2.9-3.3 1.6-4.7 17-51 17.3-51.6 0 0-.5-3.5-1.8-5.7 1.8.7 3.4 1.7 4.5 3.3zm2.4-29.4c-.3.5-17.4-7.9-14.5.4l-8 21.2c1 .3 2 .6 3 .8 1.7-5.2 6.9-20.9 7.4-22.2.5-1.5 6 .8 8.1 1.4 1.6.4 1.1 2 1.1 2l-7.4 21.4c1 .3 1.8.5 2.5.7l6.7-21.2c4.2-4.2 1.1-4.5 1.1-4.5zm-61.9 70.5c-4 0-4 6.2 0 6.2s4-6.2 0-6.2zm30.1 13c-4 0-4 6.2 0 6.2s4-6.2 0-6.2zm116.3 5.4v.2h-19.1v-7.7c6.1.3 19.4-2.3 19.1 7.5zm-65-11.4l-9.8-6.3-4.1 6.5 16.1 10.3c2.3-3.5 1.4-8.3-2.2-10.5zm56.3-2.1L156.7 94l-13.2-24.5-22.5 3.9c.8 15.9-1.6 50.8-3.2 66.8l-16.1 29.9 7.7 5.5 21.9-28.5 8.7-28.3 13.6 62.5 10.2-.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_LIGHT,
                d: "M138 57.5s4.6-5.5-.5-10.6c0 0-6.5-10.5-8.4-12.4 0 0 0 .2-10.9.6l-.2.2c12.8 2.3 18 22.9 12 38.7l14-3.5-6-13z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                d: "M161.4 93.8c2.4 8.2 3.9 14.1 3.9 14.1s-2.9.2-7.4.9L156.7 94c-4.4-7.8-15.8-28.3-18.8-36.4 0 0 4.7-5.5-.4-10.6 0 0-6.4-10.5-8.4-12.4 2.1-.3 4.4 1.5 6.8 4.1v-.2c10.1 13.8 23.7 37.9 33.3 51.8l-7.8 3.5zm-38.6-57c-6.8-4.5-16.7 2.2-15 10.2L80.7 92.9l8.8 3.6 23.8-31.3c.9 12.1-9.7 32.4-16.2 36.9-4.6 4.4 2 12.3 5.5 13.7v.1s7.7 3.6 17 3.5c.4-5.3 1.9-21.2 1.5-26.2 11.8-18.9 18.1-42.4 1.7-56.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARKER,
                d: "M109.6 29.8c2.1-.4 11.1 1.4 13.3 1.8 1.1.1 2.1-.7 2-1.8 12.4.5 8.6-.2 9.2-10.7h3.1c.2-4.6-3.1-8.2-7-10.2-7.7-8.4-22.8-2-22.5 9.3.5 1.6-1.5 12 1.9 11.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FBCDBE",
                d: "M154.9 181.2l6.2-.4-.2 5.8h-6v-5.4zM99 177.3l5.2 3.3 4.6-5.5-5.8-4.1-4 6.3zM80.7 92.9l.9-1.6-5.2 6.4c-10 9.6 11.4 15.2 7.6 2.1l3.8-4-7.1-2.9zm95.5 4.9c-1-2.3-6.9-7.5-8.4-9.7l1.4 2.2-6.9 3.1 4 3.9c-3.5 9.4 12.5 10.2 9.9.5zm-52.9-80.6l-.7 2h-.7c0 3.9 1.9 7.5 3.1 10.3 5-.6 8.7-5.2 8.4-10.3h-10l-.1-2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                    id: "a",
                    x1: "25.9",
                    x2: "25.9",
                    y1: "122.338",
                    y2: "192.465",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            stopColor: PRIMARY_LIGHT
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            offset: "1",
                            stopColor: PRIMARY_DARK
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const check_out_illustration = (/*#__PURE__*/(0,react_.memo)(CheckoutIllustration));

;// CONCATENATED MODULE: ./src/assets/illustrations/forbidden-illustration.tsx


// @mui


//

// ----------------------------------------------------------------------
function ForbiddenIllustration({ ...other }) {
    const theme = (0,styles.useTheme)();
    const PRIMARY_LIGHT = theme.palette.primary.light;
    const PRIMARY_MAIN = theme.palette.primary.main;
    const PRIMARY_DARK = theme.palette.primary.dark;
    const PRIMARY_DARKER = theme.palette.primary.darker;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        component: "svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 480 360",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(background_shape, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("image", {
                href: "/assets/illustrations/characters/character_4.png",
                height: "300",
                x: "220",
                y: "30"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                d: "M425.545 119.2c0-5-4.6-9-9.6-8.2-2-3.7-6-6-10.2-5.9 4.3-21.4-30-21.4-25.7 0-8.7-.8-15.1 9.4-10.4 16.8 2.1 3.5 5.9 5.6 10 5.5h38.7v-.1c4.1-.4 7.2-3.9 7.2-8.1zm-321.3 81.8c.1-4.2-4.1-7.8-8.2-7-1.7-3.2-5.1-5.1-8.8-5 3.8-18.4-25.8-18.4-22 0-7.4-.7-12.9 8.1-8.9 14.4 1.8 3 5.1 4.8 8.6 4.7h33.2v-.1c3.4-.4 6.1-3.4 6.1-7z",
                opacity: "0.08"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FFAB00",
                d: "M111.045 142.2c58.7-1 58.6-88.3 0-89.2-58.6 1-58.6 88.3 0 89.2z",
                opacity: "0.12"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FFD666",
                d: "M111.045 121c30.8-.5 30.8-46.3 0-46.8-30.8.5-30.8 46.3 0 46.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FBCDBE",
                d: "M278.045 250.1c-4.6-6.5-14 5.1-18.1 7.2-.6-2.1 1.5-41.3-1.4-41.8-2.8-3-8.1-.7-8 3.3.2-4 .5-11.3-5.6-10.2-4.8.6-3.8 6.9-3.8 10.2.1-6.1-9.5-6.1-9.4 0v5.6c.2-4.2-5.7-6.4-8.3-3-2.6-.2-.4 41.8-1.1 43.3-.2 10 8.7 19 18.8 18.7 6.1.4 12.6-1.2 16.8-5.9l19.7-21c1.7-1.6 1.8-4.5.4-6.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#000",
                fillOpacity: "0.24",
                fillRule: "evenodd",
                d: "M248.745 212.3v32.8h1.9v-31.9c.1-2.9-2.8-5.2-5.6-4.6 2 0 3.7 1.7 3.7 3.7zm-9.4 5.6v27.2h1.9v-26.3c.1-2.8-2.8-5.2-5.5-4.6 1.9 0 3.6 1.8 3.6 3.7zm-9.4 27.2v-21.6c.1-2-1.7-3.7-3.7-3.8 2.8-.6 5.6 1.8 5.5 4.6V245h-1.8v.1z",
                clipRule: "evenodd"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARKER,
                d: "M244.945 189.8c-67.6 1.3-77 97-11 111.4 81 11.8 92.7-107.3 11-111.4zm-48.5 56.2c-1-40.4 49.8-63.8 79.9-36.9l-68.3 68.3c-7.5-8.7-11.6-19.9-11.6-31.4zm48.5 48.5c-11.5 0-22.7-4.1-31.4-11.6l68.3-68.3c27 30.1 3.5 80.9-36.9 79.9z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#paint0_linear_1_129)",
                d: "M169.245 261h-11.3v-66.6c0-4.5-1.5-5.6-5.6-5.6-5.3.3-13.8-1.4-17.1 4l-55 68.3c-2.7 3.3-1.8 8.8-2 12.8 0 4.1 1.5 5.6 5.6 5.6h54.7v21.7c-.9 7.9 9.1 5.2 13.7 5.6 4.1 0 5.6-1.5 5.6-5.6v-21.7h11.4c4.4 0 5.6-1.5 5.6-5.6-.3-4.8 2-13.8-5.6-12.9zm-30.8 0h-36l36-44.4V261zm263.9 12.1c1.9 44.8-78.7 46-78 1.2h19.3c-.8 15.3 18.3 21.4 30.1 15.5 12.7-6 12.3-29.1-1-34-5.6-2.8-16.6-2-23.1-2.1v-15.1c6.3-.2 17.6.9 22.7-2.3 11.6-5.5 11.9-25.4.9-31.4-10.8-5.9-29 .1-28.2 14.5h-19.4c-.5-28.1 35.4-38.5 57-28.2 23.4 9 24.1 45.5-.2 54.6 12.3 3.9 20.1 14.6 19.9 27.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                    id: "paint0_linear_1_129",
                    x1: "78.245",
                    x2: "78.245",
                    y1: "187.309",
                    y2: "307.306",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            stopColor: PRIMARY_LIGHT
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            offset: "1",
                            stopColor: PRIMARY_DARK
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const forbidden_illustration = (/*#__PURE__*/(0,react_.memo)(ForbiddenIllustration));

;// CONCATENATED MODULE: ./src/assets/illustrations/motivation-illustration.tsx


// @mui


//

// ----------------------------------------------------------------------
function MotivationIllustration({ ...other }) {
    const theme = (0,styles.useTheme)();
    const PRIMARY_LIGHTER = theme.palette.primary.lighter;
    const PRIMARY_DARK = theme.palette.primary.dark;
    const PRIMARY_DARKER = theme.palette.primary.darker;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        component: "svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 480 360",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(background_shape, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("image", {
                href: "/assets/illustrations/characters/character_2.png",
                height: "300",
                x: "322",
                y: "30"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#paint0_linear_1_43)",
                d: "M216.3 138v108.3c0 2.2-1.8 4-4 4H195c-2.2 0-4-1.8-4-4V138c0-2.2 1.8-4 4-4h17.3c2.2 0 4 1.8 4 4zm-55-68H144c-2.2 0-4 1.8-4 4v176.3c0 2.2 1.8 4 4 4h17.3c2.2 0 4-1.8 4-4V74c0-2.2-1.8-4-4-4zm102 93H246c-2.2 0-4 1.8-4 4v75.7c0 2.2 1.8 4 4 4h17.3c2.2 0 4-1.8 4-4V167c0-2.2-1.8-4-4-4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARKER,
                d: "M359.2 253.4c-1.1 3.1-2.3 6.3-3.7 9.7-5.1.1-10.1.3-15.2.4-3.3.1-6.9.2-9.6 2.1-5.2 3.6-.7 6.1-1.3 9.6-.7 4.2-4.9 5.1-9 5.1-14.1.1-27.7 4.6-41.5 7.3s-28.9 3.5-41.2-3.4c-.8-.5-1.7-1-2-2-.6-1.6.9-3.2 2.3-4.2 3.2-2.2 6.7-3.7 10.5-4.5 2.2-.5 4.5-.8 6.5-2 1.9-1.2 3.3-3.7 2.3-5.8-32.1 2-64.1 4.8-96 8.4-41.1 4.8-81.8 12.9-123 15.9h-.4c-2.9-2.9-5.5-6-7.9-9.3.2-.2.4-.5.6-.7 2-2.2 5-3.2 7.8-4.1 15.9-4.9 32.4-7.4 48.8-9.9 81.6-12.3 164.2-21.1 246.8-15.3 8.4.6 16.8 1.5 25.2 2.7z",
                opacity: "0.24"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#DFE3E8",
                d: "M81.7 204.2l74 11v60.7h8.5v3.6h-19.5v-2.3h8.7v-50.3l-70-13.5v49h9.7v1.7H73.6V262h8.2v-57.8h-.1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#C4CDD5",
                d: "M80.6 204.2l74 11v60.7h8.5v3.6h-19.5v-2.3h8.7v-50.3l-70-13.5v49H92v1.7H72.4V262h8.2v-57.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                    id: "paint0_linear_1_43",
                    x1: "140",
                    x2: "276.5",
                    y1: "98",
                    y2: "312.5",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            stopColor: PRIMARY_LIGHTER
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            offset: "1",
                            stopColor: PRIMARY_DARK
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const motivation_illustration = (/*#__PURE__*/(0,react_.memo)(MotivationIllustration));

;// CONCATENATED MODULE: ./src/assets/illustrations/sever-error-illustration.tsx


// @mui


//

// ----------------------------------------------------------------------
function SeverErrorIllustration({ ...other }) {
    const theme = (0,styles.useTheme)();
    const PRIMARY_LIGHTER = theme.palette.primary.lighter;
    const PRIMARY_LIGHT = theme.palette.primary.light;
    const PRIMARY_MAIN = theme.palette.primary.main;
    const PRIMARY_DARK = theme.palette.primary.dark;
    const PRIMARY_DARKER = theme.palette.primary.darker;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        component: "svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 480 360",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(background_shape, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("image", {
                href: "/assets/illustrations/characters/character_8.png",
                height: "300",
                x: "340",
                y: "30"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                d: "M292.4 266.4h-7.3v-.6h6.7v-59.6h-25.7V118h-23.6v-.6h24.2v88.2h25.7v60.8zM146 164.5h-.6v-21.1h16.5v-19h.6v19.7H146v20.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                d: "M242.5 112.3c0 3.2-1.3 6.3-3.5 8.5-2.3 2.3-5.3 3.5-8.5 3.5h-82.9c-4.4.1-8.5-2.2-10.7-5.9-2.2-3.8-2.2-8.5 0-12.3 2.2-3.8 6.3-6.1 10.7-5.9h2.8c-2-7.2-.6-14.9 3.9-20.8s11.6-9.4 19-9.4h7c8.9 0 17 4.9 21.1 12.8 2-1 4.2-1.6 6.5-1.6h1.8c3.8 0 7.4 1.5 10.1 4.2 2.7 2.7 4.2 6.3 4.2 10.1v.7c0 1.3-.2 2.7-.6 3.9h6.9c6.8.2 12.2 5.6 12.2 12.2z",
                opacity: "0.08"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M275.4 228.3v14c0 .8-.4 1.5-1.1 1.8-.3.2-.7.3-1.1.3-1.2 0-2.2-1-2.2-2.1v-14c0-4.7-3.5-8.6-8.1-9.1-.4 0-.7-.1-1.1-.1-5.1 0-9.2 4.1-9.2 9.2v14c0 .8-.4 1.5-1.1 1.8-.3.2-.7.3-1.1.3-1.2 0-2.2-1-2.2-2.2v-14c0-7.5 6.1-13.5 13.5-13.5.4 0 .7 0 1.1.1 7.2.6 12.6 6.4 12.6 13.5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#DFE3E8",
                d: "M275.4 228.3v14c.3.5.2 1.2-.3 1.6-.5.4-1.1.4-1.6 0s-.6-1.1-.3-1.6v-14c0-5.1-4.1-9.2-9.2-9.2-.4 0-.7 0-1.1.1-.4 0-.7-.1-1.1-.1-5.1 0-9.2 4.1-9.2 9.2v14c.3.5.2 1.2-.3 1.6-.5.4-1.1.4-1.6 0s-.6-1-.3-1.6v-14c-.4-4.7 1.9-9.2 5.9-11.7s9.1-2.5 13.1 0c4.1 2.4 6.4 7 6 11.7z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARKER,
                d: "M277.8 242.2h-33.2c-4 0-7.3 3.3-7.3 7.3v33.2c0 4 3.3 7.3 7.3 7.3h33.2c4 0 7.3-3.3 7.3-7.3v-33.2c0-4-3.3-7.3-7.3-7.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARK,
                d: "M277.8 242.2h-24.9c-4 0-7.3 3.3-7.3 7.3v33.2c0 4 3.3 7.3 7.3 7.3h24.9c4 0 7.3-3.3 7.3-7.3v-33.2c0-4-3.3-7.3-7.3-7.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#paint0_linear_1_140)",
                d: "M278 145h-22c-4.4 0-8 3.6-8 8v22.8c0 4.4 3.6 8 8 8h22c4.4 0 8-3.6 8-8V153c0-4.4-3.6-8-8-8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                d: "M126 129.7h-22.4c-1.7 0-3 1.3-3 3v32.8c0 1.7 1.3 3 3 3H126c1.7 0 3-1.3 3-3v-32.8c0-1.7-1.4-3-3-3z",
                opacity: "0.08"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M119.1 135.9H96.6c-1.7 0-3 1.3-3 3v32.8c0 1.7 1.3 3 3 3H119c1.7 0 3-1.3 3-3v-32.8c.1-1.6-1.3-3-2.9-3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                d: "M119.1 135.9H96.6c-1.7 0-3 1.3-3 3v32.8c0 1.7 1.3 3 3 3H119c1.7 0 3-1.3 3-3v-32.8c.1-1.6-1.3-3-2.9-3z",
                opacity: "0.48"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                d: "M80 243.5c.2 2 .9 3.9 2 5.5 4.4 7.8 9.4 15.5 16.2 21.3 10.1 8.5 23.2 12.2 36 15.7-1.1-.6-2.5-6.4-3-7.7-1-2.5-1.9-5.1-2.8-7.6-1.5-4-4.6-7.2-7.7-10.2-6.9-6.7-15.3-11.6-24.5-14.4-5.3-1.7-10.8-2.6-16.2-2.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARKER,
                d: "M129.8 247.8c-1-7.3-2.1-14.6-5-21.4-2.9-6.7-8-12.9-14.9-15.4l-.6 31.2c-.1 6-.2 12.1 1.5 17.9 3 10.1 13.5 21.9 23.6 25.3 1.5-4.8-1-12.2-1.7-17.2l-2.9-20.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARK,
                d: "M237.2 164H140c-4.7 0-8.4 3.8-8.4 8.4v19.1c0 4.7 3.8 8.4 8.4 8.4h97.1c4.7 0 8.4-3.8 8.4-8.4v-19.1c.1-4.6-3.7-8.4-8.3-8.4zm0 44H140c-4.7 0-8.4 3.8-8.4 8.4v19.1c0 4.7 3.8 8.4 8.4 8.4h97.1c4.7 0 8.4-3.8 8.4-8.4v-19.1c.1-4.6-3.7-8.4-8.3-8.4zm0 44.2H140c-4.7 0-8.4 3.8-8.4 8.4v19.1c0 4.7 3.8 8.4 8.4 8.4h97.1c4.7 0 8.4-3.8 8.4-8.4v-19.1c.1-4.6-3.7-8.4-8.3-8.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#paint1_linear_1_140)",
                d: "M237.6 164h-91.2c-4.7 0-8.4 3.8-8.4 8.4v19.1c0 4.7 3.8 8.4 8.4 8.4h91.1c4.7 0 8.4-3.8 8.4-8.4v-19.1c.1-4.6-3.7-8.4-8.3-8.4zm8.4 53.6v16.8c0 2.5-1 5-2.9 6.8-1.9 1.8-4.4 2.8-7.1 2.8h-88c-2.7 0-5.2-1-7.1-2.8-1.9-1.8-2.9-4.2-2.9-6.8v-16.8c0-5.3 4.5-9.6 10-9.6h88c2.7 0 5.2 1 7.1 2.8 1.8 1.8 2.9 4.2 2.9 6.8zm-8.4 34.4h-91.2c-4.7 0-8.4 3.8-8.4 8.4v19.1c0 4.7 3.8 8.4 8.4 8.4h91.1c4.7 0 8.4-3.8 8.4-8.4v-19.1c.1-4.6-3.7-8.4-8.3-8.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_LIGHTER,
                d: "M161.6 182c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4zm12 0c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4zm8 4c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zM162 226c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4zm12 0c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4zm8 4c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm52-6h-30c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h30c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1zm-72 46c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4zm12 0c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4zm8 4c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm52-6h-30c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h30c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARKER,
                d: "M264.4 267.7c.5-1.8-.8-3.7-1.2-5.5-.1-.3-.1-.7 0-1 .2-1.5 1.5-2.6 3-2.6s2.8 1.1 3 2.6c.1.3 0 .7 0 1-.3 1.8-1.6 3.8-1.1 5.6l.4 1.3c.5 1.5-.7 3.1-2.3 3.1-1.6 0-2.7-1.5-2.3-3l.5-1.5zM258 158.8l9.2-4.8 8.8 4.8s-1.6 11.8-8.6 15.2c0 0-8.6-3.3-9.4-15.2z"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint0_linear_1_140",
                        x1: "277.574",
                        x2: "255.652",
                        y1: "143.24",
                        y2: "187.057",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: PRIMARY_MAIN
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: PRIMARY_DARK
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint1_linear_1_140",
                        x1: "138",
                        x2: "138",
                        y1: "164",
                        y2: "287.9",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: PRIMARY_LIGHT
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: PRIMARY_DARK
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const sever_error_illustration = (/*#__PURE__*/(0,react_.memo)(SeverErrorIllustration));

;// CONCATENATED MODULE: ./src/assets/illustrations/coming-soon-illustration.tsx


// @mui


//

// ----------------------------------------------------------------------
function ComingSoonIllustration({ ...other }) {
    const theme = (0,styles.useTheme)();
    const PRIMARY_LIGHT = theme.palette.primary.light;
    const PRIMARY_MAIN = theme.palette.primary.main;
    const PRIMARY_DARK = theme.palette.primary.dark;
    const PRIMARY_DARKER = theme.palette.primary.darker;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        component: "svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 480 360",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(background_shape, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("image", {
                href: "/assets/illustrations/characters/character_1.png",
                height: "300",
                x: "320",
                y: "30"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#paint0_linear_1_79)",
                d: "M290.378 112.9v127.8c0 .8-.2 1.6-.5 2.4-.3.8-.8 1.4-1.3 2-.6.6-1.3 1-2 1.3-.8.3-1.6.5-2.4.5h-166.7c-.8 0-1.7-.1-2.4-.5s-1.4-.8-2-1.4c-.6-.6-1-1.4-1.2-2.1-.2-.8-.3-1.6-.2-2.5V112.6c-.4-3.1 2.3-5.9 5.8-5.9h166.7c.8 0 1.6.2 2.4.5.8.3 1.4.8 2 1.3.6.6 1 1.3 1.4 2 .2.7.4 1.6.4 2.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARKER,
                d: "M210.879 284.9c62.5 0 113.2-4.4 113.2-9.8s-50.7-9.8-113.2-9.8-113.2 4.4-113.2 9.8 50.7 9.8 113.2 9.8z",
                opacity: "0.24"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARK,
                d: "M58.778 79.4l14.6-6 80.2 7.5v7.6l-94.8.3v-9.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                d: "M85.279 71h-14.4v199.5h14.4V71z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M182.079 239.7h-5.1c-.6 0-1 .4-1 1V289c0 .6.4 1 1 1h5.2c.6 0 1-.4 1-1v-48.3c-.1-.5-.5-1-1.1-1zM130.978 239.7h-5.2c-.6 0-1 .4-1 1v46.7c0 .6.4 1 1 1h5.2c.6 0 1-.4 1-1v-46.6c0-.6-.4-1.1-1-1.1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#C4CDD5",
                d: "M175.779 266h7.2v-24.7h-7.4l.2 24.7zm-50.9 0h7.2v-24.7h-7.4l.2 24.7z",
                opacity: "0.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_LIGHT,
                d: "M277.778 126h-56.9c-1.7 0-3 1.3-3 3v83.9c0 1.7 1.3 3 3 3h56.9c1.7 0 3-1.3 3-3V129c0-1.7-1.4-3-3-3zm-70.1 0c1.7 0 3 1.3 3 3v83.9c0 1.7-1.3 3-3 3h-56.9c-1.7 0-3-1.3-3-3v-.3c0-1.7 1.3-3 3-3h29.5c1.7 0 3-1.3 3-3V129c0-1.7 1.3-3 3-3h21.4z",
                opacity: "0.24"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARKER,
                d: "M182.079 119.7h-56.9c-1.7 0-3 1.3-3 3V205c0 1.7 1.3 3 3 3h56.9c1.7 0 3-1.3 3-3v-82.3c0-1.6-1.4-3-3-3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M149.979 88.4h1v25c9.1-.1 20 1.1 32.3 5 .5.2.8.7.6 1.3-.2.5-.7.8-1.3.6-17.2-5.6-31.8-5.6-42.1-4.2-5.1.7-9.2 1.7-12 2.6-1.4.4-2.4.8-3.2 1.1-.4.1-.6.2-.8.3-.1 0-.2.1-.2.1-.5.2-1.1 0-1.3-.5-.2-.5 0-1.1.5-1.3l.5 1-.4-.9h.1c.1 0 .1-.1.2-.1.2-.1.5-.2.9-.4.8-.3 1.9-.7 3.3-1.1 2.9-.9 7-2 12.3-2.7 2.9-.4 6.1-.7 9.7-.8v-25h-.1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARK,
                d: "M165.378 125.4h-37c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6h37c.9 0 1.6-.7 1.6-1.6-.1-.9-.8-1.6-1.6-1.6zm-17.2 5.6h-20.5c-.5 0-.9.4-.9.9s.4.9.9.9h20.5c.5 0 .9-.4.9-.9s-.4-.9-.9-.9zm9.3 4.4h-20.5c-.5 0-.9.4-.9.9s.4.9.9.9h20.5c.5 0 .9-.4.9-.9s-.4-.9-.9-.9zm-3.9-4.4h-1.5c-.5 0-.9.4-.9.9s.4.9.9.9h1.5c.5 0 .9-.4.9-.9s-.4-.9-.9-.9zm4.7 0h-1.5c-.5 0-.9.4-.9.9s.4.9.9.9h1.5c.5 0 .9-.4.9-.9s-.4-.9-.9-.9zm-26.7 4.4h-1.5c-.5 0-.9.4-.9.9s.4.9.9.9h1.5c.5 0 .9-.4.9-.9s-.4-.9-.9-.9zm31.5-4.4h-1.5c-.5 0-.9.4-.9.9s.4.9.9.9h1.5c.5 0 .9-.4.9-.9-.1-.5-.5-.9-.9-.9z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARKER,
                d: "M178.379 224c0-1.1-.9-2-2-2h-55.5c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h55.5c1.1 0 2-.9 2-2v-5z",
                opacity: "0.48"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                d: "M188.179 244h-70v18.2h70V244z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M118.479 243.3c-1.1 0-2 .9-2 2v15.8c0 1.1.9 2 2 2l69.7-.1c1.1 0 2-.9 2-2l-.4-15.6c0-1.1-.9-2-2-2l-69.3-.1zm-.1 4.5c0-1.1.9-2 2-2h5.2c1.7 0 2.6 1.9 1.6 3.2l-8.4 11.2c0 .1-.1.1-.2.1s-.2-.1-.2-.2v-12.3zm17.4-1.2c.4-.5 1-.8 1.6-.8h2.2c1.6 0 2.6 1.9 1.6 3.2l-7.8 10.5c-.4.5-1 .8-1.6.8h-2.2c-1.6 0-2.6-1.9-1.6-3.2l7.8-10.5zm13.9 0c.4-.5 1-.8 1.6-.8h2.2c1.6 0 2.6 1.9 1.6 3.2l-7.8 10.5c-.4.5-1 .8-1.6.8h-2.1c-1.6 0-2.6-1.9-1.6-3.2l7.7-10.5zm14.1 0c.4-.5 1-.8 1.6-.8h2.2c1.7 0 2.6 1.9 1.6 3.2l-7.9 10.5c-.4.5-1 .8-1.6.8h-2.1c-1.6 0-2.6-1.9-1.6-3.2l7.8-10.5zm13.9 0c.4-.5 1-.8 1.6-.8h2.2c1.6 0 2.6 1.9 1.6 3.2l-7.8 10.5c-.4.5-1 .8-1.6.8h-2.1c-1.6 0-2.6-1.9-1.6-3.2l7.7-10.5zm9.9 11.7c0 1.1-.9 2-2 2-1.6 0-2.6-1.9-1.6-3.2 1.1-1.6 3.6-.7 3.6 1.2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARKER,
                d: "M73.579 276.7c-.1 1.2-.6 2.4-1.2 3.4-.7 1-1.6 1.9-2.6 2.5-2.3-.7-4.6-1.4-6.9-2.3-1.2-.4-2.3-.9-3.5-1.4-6.5-2.7-12.6-6.2-18.4-10.3-.4-1.1-.7-2.2-.9-3.4-.2-1.1 0-2.3.4-3.4.5-1.1 1.2-2 2.2-2.6 1-.5 1.9-1 2.8-1.6 1.9-1.6 2-4.6 1-6.9-1-2.3-2.8-4.2-4.1-6.3-1.3-2.1-2.2-4.8-1.1-7.1.7-1.4 2-2.5 2.9-3.9 1.6-2.6 1.1-6 .5-9l-2.4-12.3c-.5-2.7-.9-5.8 1.1-7.7 2.7-2.5 7.1-.5 9.7 2 3.2 2.9 5.5 6.5 6.7 10.6 2.5 8.9-1.9 18.9 1.6 27.5 2.3 5.8 7.8 9.7 10.5 15.3 2.6 5.4 2.5 11.3 1.7 16.9z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARK,
                d: "M85.278 250.7c-1.1 2.3-1.9 5.1-.6 7.2.7.8 1.4 1.7 2.2 2.4 2.9 3.5 1.4 8.8-.9 12.8-.7 1-1.1 2.1-1.3 3.3-.1 1.9 1.3 3.5 2.4 5 1.1 1.5 2 3.4 1.2 5-8.7-1-17.2-3.1-25.4-6-1.2-.4-2.3-.9-3.5-1.4-.2-2.6.6-5.4 1.7-7.9 1.2-2.7 3-5.5 3.4-8.5.4-2.7-.1-5.3.8-8 .8-2.7 2.2-5.1 4.1-7.2 1.9-2 4.2-3.6 6.9-4.6 1.5-.5 3.2-.9 4.3-2 .8-.8 1.4-1.8 1.8-2.9 2-4.4 4.1-8.9 6.1-13.4.9-2 2.2-4.3 4.4-4.7 1.7-.3 3.4.9 4.3 2.4.8 1.6 1 3.4.8 5.1-1 8.9-8.8 15.4-12.7 23.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                    id: "paint0_linear_1_79",
                    x1: "296.527",
                    x2: "105.126",
                    y1: "186.371",
                    y2: "167.19",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            stopColor: PRIMARY_MAIN
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            offset: "1",
                            stopColor: PRIMARY_DARK
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const coming_soon_illustration = (/*#__PURE__*/(0,react_.memo)(ComingSoonIllustration));

;// CONCATENATED MODULE: ./src/assets/illustrations/maintenance-illustration.tsx


// @mui


//

// ----------------------------------------------------------------------
function MaintenanceIllustration({ ...other }) {
    const theme = (0,styles.useTheme)();
    const PRIMARY_LIGHT = theme.palette.primary.light;
    const PRIMARY_MAIN = theme.palette.primary.main;
    const PRIMARY_DARK = theme.palette.primary.dark;
    const PRIMARY_DARKER = theme.palette.primary.darker;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        component: "svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 480 360",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(background_shape, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                d: "M297.46 99.296l-185.934-5.29c-6.35-.18-11.526 4.158-11.526 9.693v159.882c0 5.534 5.176 9.742 11.526 9.4l185.934-10.028c5.28-.284 9.54-4.576 9.54-9.585v-144.73c0-5.012-4.26-9.194-9.54-9.342z",
                opacity: "0.12"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M297.476 93.405l-180.3-5.278c-6.157-.18-11.176 4.15-11.176 9.67v159.496c0 5.521 5.019 9.718 11.176 9.377l180.3-10.003c5.12-.284 9.251-4.565 9.251-9.563v-144.38c0-5-4.131-9.172-9.251-9.32z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                fill: "#919EAB",
                opacity: "0.16",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M205.131 203.668a44.088 44.088 0 01-20.975-4.875 42.576 42.576 0 01-16.793-15.549 40.54 40.54 0 01-5.98-21.153c0-23.36 19.874-41.848 43.748-41.227 23.283.606 41.804 19.248 41.804 41.569 0 22.322-18.521 40.816-41.804 41.235zM266.304 235.213a4.461 4.461 0 01-4.271 4.417l-106.87 4.074c-2.652.107-4.808-1.842-4.808-4.341v-16.97c0-2.499 2.156-4.579 4.808-4.644l106.87-2.64a4.142 4.142 0 013.018 1.168 4.128 4.128 0 011.253 2.98v15.956z"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#C4CDD5",
                d: "M186.797 136.682a1.812 1.812 0 01-.525 1.378l-1.858 1.858 16.887 16.893a2.174 2.174 0 01-3.074 3.074l-16.886-16.892-1.859 1.859a1.803 1.803 0 01-2.685-.157l-7.916-9.615a1.8 1.8 0 01.14-2.392l5.091-5.093a1.8 1.8 0 012.392-.14l9.612 7.917c.404.32.651.797.681 1.31zM209.727 165.24l5.441 5.443a2.174 2.174 0 01-3.074 3.075l-5.441-5.443a2.175 2.175 0 013.074-3.075z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#F4F6F8",
                d: "M209.727 165.24l5.441 5.443a2.176 2.176 0 010 3.075l-8.515-8.518a2.172 2.172 0 013.074 0z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#paint0_linear_1_160)",
                d: "M238.581 194.781l-2.399 2.399c-3.425 3.431-9.046 3.315-12.32-.318l-16.564-18.475a2.176 2.176 0 01.081-2.989l9.309-9.313a2.174 2.174 0 012.978-.091l18.552 16.422.004.004c3.646 3.243 3.812 8.907.359 12.361z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#paint1_linear_1_160)",
                d: "M240.711 138.762c-.332-1.582-2.287-2.165-3.429-1.021l-7.117 7.12a3.31 3.31 0 01-4.681 0l-3.813-3.815a3.308 3.308 0 010-4.68l7.117-7.122c1.143-1.142.561-3.098-1.02-3.43-5.355-1.126-11.157.392-15.316 4.552-5.296 5.299-6.308 13.259-3.037 19.573l-40.33 33.142a5.766 5.766 0 00-.516 8.61l6.289 6.291a5.761 5.761 0 008.607-.516l33.13-40.345c6.312 3.272 14.268 2.26 19.566-3.038 4.159-4.16 5.675-9.964 4.55-15.321zm-61.338 50.587a2.174 2.174 0 110-4.349 2.174 2.174 0 010 4.349z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#919EAB",
                d: "M186.797 136.682a1.812 1.812 0 01-.525 1.378l-1.858 1.858 16.887 16.893a2.174 2.174 0 010 3.074l-29.734-29.744 2.545-2.546a1.8 1.8 0 012.391-.14l9.613 7.917c.404.32.651.797.681 1.31z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARKER,
                d: "M238.581 194.781l-1.199 1.199-25.289-25.298 4.595-4.597a2.173 2.173 0 012.977-.091l18.553 16.422.004.004c3.645 3.243 3.812 8.907.359 12.361z",
                opacity: "0.24"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARKER,
                d: "M236.161 154.083c-5.298 5.298-13.254 6.31-19.566 3.038l-33.13 40.345a5.761 5.761 0 01-8.607.516l-3.145-3.145 6.122-6.125a2.174 2.174 0 103.075-3.076l42.668-42.682 1.907 1.907a3.308 3.308 0 004.68 0l7.117-7.12c1.142-1.144 3.097-.561 3.429 1.021 1.125 5.357-.392 11.161-4.55 15.321z",
                opacity: "0.24"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#paint2_linear_1_160)",
                d: "M249.706 290.362v3.306c0 .847-.436 1.546-1.011 1.622l-51.671 4.676a3.72 3.72 0 01-1.448-.087l-36.003-6.775c-.382-.1-.664-.6-.664-1.177v-3.494l38.198-4.727 4.917-2.324 4.889.703 2.887-.552 6.599 1.917 33.307 6.912z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#paint3_linear_1_160)",
                d: "M249.707 290.362v3.307c0 .846-.436 1.545-1.012 1.621l-51.668 4.676a3.684 3.684 0 01-1.148-.024v-17.813l6.148-.749 4.889.703 2.886-.552 6.598 1.917 33.307 6.914z",
                opacity: "0.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#paint4_linear_1_160)",
                d: "M209.803 281.53l-50.89 6.74 36.707 6.904c.445.115.909.142 1.366.08l52.72-4.892-39.903-8.832z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#paint5_linear_1_160)",
                d: "M228.459 287.623c0 2.42-7.627 4.302-18.157 4.79-2.657.121-5.499.156-8.447.088-14.491-.333-26.135-3.025-26.135-6.005a.81.81 0 01.02-.214h-.02l.06-.143a.834.834 0 01.054-.139l3.342-8.724 4.037-10.526 5.652-14.753 4.325-11.293 5.381-14.042c.673-1.758 1.922-2.851 3.269-2.851.183-.001.364.019.542.059 1.138.248 2.153 1.272 2.737 2.795l5.427 14.14 4.337 11.441 5.715 15.05 4.106 10.813.065.006 3.42 8.787c.147.239.27.479.27.721z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M224.769 278.12c-3.299 1.101-8.572 1.894-14.893 2.188-2.545.12-5.237.159-8.037.107-9.736-.184-18.178-1.434-22.67-3.137l4.039-10.527c4.728 1.062 11.316 1.778 18.644 1.888 2.368.036 4.676.006 6.874-.083 4.623-.183 8.7-.626 11.913-1.255l4.071 10.812.059.007zM214.93 252.246c-2.519.272-5.287.457-8.225.54-1.573.046-3.194.063-4.849.046a112.824 112.824 0 01-12.991-.835l4.326-11.293c2.707.214 5.623.336 8.665.353 1.071.006 2.129-.001 3.172-.022 1.907-.036 3.751-.112 5.519-.23l4.383 11.441z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#paint6_linear_1_160)",
                d: "M210.302 292.411c-2.657.122-5.499.157-8.447.089-14.491-.334-26.135-3.025-26.135-6.005a.81.81 0 01.02-.214h-.02l.06-.143a.834.834 0 01.054-.139l3.342-8.724 4.037-10.526 5.652-14.752 4.325-11.293 5.381-14.042c.673-1.758 1.922-2.851 3.269-2.851.183-.001.364.019.542.059.574 3.574 1.558 9.812 2.646 17.165.546 3.702 1.118 7.687 1.677 11.753a776.568 776.568 0 012.016 15.767c.485 4.188.899 8.185 1.192 11.754.429 5.167.604 9.441.389 12.102z",
                opacity: "0.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FF5630",
                d: "M118.108 103.182a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FFAB00",
                d: "M126.108 103.182a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#36B37E",
                d: "M134.108 103.182a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint0_linear_1_160",
                        x1: "166.881",
                        x2: "166.881",
                        y1: "125.454",
                        y2: "199.671",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: PRIMARY_LIGHT
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: PRIMARY_DARK
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint1_linear_1_160",
                        x1: "166.881",
                        x2: "166.881",
                        y1: "125.454",
                        y2: "199.671",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: PRIMARY_LIGHT
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: PRIMARY_DARK
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint2_linear_1_160",
                        x1: "158.912",
                        x2: "249.709",
                        y1: "290.69",
                        y2: "290.69",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#FFC444"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: "#F36F56"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint3_linear_1_160",
                        x1: "226.725",
                        x2: "225.966",
                        y1: "290.498",
                        y2: "292.586",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#FFC444"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "0.59",
                                stopColor: "#F8924F"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: "#F36F56"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint4_linear_1_160",
                        x1: "210.87",
                        x2: "210.566",
                        y1: "288.399",
                        y2: "289.237",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#FFC444"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "0.59",
                                stopColor: "#F8924F"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: "#F36F56"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint5_linear_1_160",
                        x1: "202.974",
                        x2: "199.672",
                        y1: "204.073",
                        y2: "311.415",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#FFC444"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: "#F36F56"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint6_linear_1_160",
                        x1: "175.72",
                        x2: "210.394",
                        y1: "258.172",
                        y2: "258.172",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#FFC444"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: "#F36F56"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("image", {
                href: "/assets/illustrations/characters/character_5.png",
                height: "300",
                x: "245",
                y: "30"
            })
        ]
    });
}
/* harmony default export */ const maintenance_illustration = (/*#__PURE__*/(0,react_.memo)(MaintenanceIllustration));

;// CONCATENATED MODULE: ./src/assets/illustrations/page-not-found-illustration.tsx


// @mui


//

// ----------------------------------------------------------------------
function PageNotFoundIllustration({ ...other }) {
    const theme = (0,styles.useTheme)();
    const PRIMARY_LIGHT = theme.palette.primary.light;
    const PRIMARY_MAIN = theme.palette.primary.main;
    const PRIMARY_DARK = theme.palette.primary.dark;
    const PRIMARY_DARKER = theme.palette.primary.darker;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        component: "svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 480 360",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(background_shape, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("image", {
                href: "/assets/illustrations/characters/character_6.png",
                height: "300",
                x: "205",
                y: "30"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FFAB00",
                d: "M111.1 141.2c58.7-1 58.6-88.3 0-89.2-58.6 1-58.6 88.3 0 89.2z",
                opacity: "0.12"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FFD666",
                d: "M111.1 120c30.8-.5 30.8-46.3 0-46.8-30.8.5-30.8 46.3 0 46.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARKER,
                d: "M244.9 182.5c82.3 1.4 82.2 123.8 0 125.2-82.3-1.5-82.3-123.8 0-125.2zm0 23.1c-51.8.9-51.8 77.9 0 78.8 51.8-.9 51.7-77.9 0-78.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#paint0_linear_1_119)",
                d: "M175 265.6c1-8.7-12.1-4.8-17-5.6v-66.6c0-4.5-1.5-5.6-5.6-5.6-5.3.3-13.8-1.4-17.1 4l-55 68.3c-2.7 3.3-1.8 8.8-2 12.8 0 4.1 1.5 5.6 5.6 5.6h54.7v21.7c-.9 7.9 9.1 5.2 13.7 5.6 4.1 0 5.6-1.5 5.6-5.6v-21.7c13.8-1.1 18.1 4.5 17.1-12.9zm-72.5-5.6l36-44.4V260h-36zm309.1 5.6c1-8.7-12.2-4.8-17.1-5.6v-66.6c0-4.5-1.5-5.6-5.6-5.6-5.3.3-13.7-1.4-17.1 4l-55 68.3c-2.7 3.3-1.9 8.8-2 12.8 0 4.1 1.5 5.6 5.6 5.6h54.7v21.7c-.9 7.9 9.1 5.2 13.7 5.6 4.1 0 5.6-1.5 5.6-5.6v-21.7c14.1-1.1 18.2 4.5 17.2-12.9zm-72.4-5.6l36-44.4V260h-36z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                d: "M425.6 118.2c0-5-4.6-9-9.6-8.2-2-3.7-6-6-10.2-5.9 4.3-21.4-30-21.4-25.7 0-8.7-.8-15.1 9.4-10.4 16.8 2.1 3.5 5.9 5.6 10 5.5h38.7v-.1c4.1-.4 7.2-3.9 7.2-8.1zM104.3 200c.1-4.2-4.1-7.8-8.2-7-1.7-3.2-5.1-5.1-8.8-5 3.8-18.4-25.8-18.4-22 0-7.4-.7-12.9 8.1-8.9 14.4 1.8 3 5.1 4.8 8.6 4.7h33.2v-.1c3.4-.4 6.1-3.4 6.1-7z",
                opacity: "0.08"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                    id: "paint0_linear_1_119",
                    x1: "78.3",
                    x2: "78.3",
                    y1: "187.77",
                    y2: "305.935",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            stopColor: PRIMARY_LIGHT
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            offset: "1",
                            stopColor: PRIMARY_DARK
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const page_not_found_illustration = (/*#__PURE__*/(0,react_.memo)(PageNotFoundIllustration));

;// CONCATENATED MODULE: ./src/assets/illustrations/order-complete-illustration.tsx


// @mui


//

// ----------------------------------------------------------------------
function OrderCompleteIllustration({ ...other }) {
    const theme = (0,styles.useTheme)();
    const PRIMARY_LIGHT = theme.palette.primary.light;
    const PRIMARY_MAIN = theme.palette.primary.main;
    const PRIMARY_DARK = theme.palette.primary.dark;
    const PRIMARY_DARKER = theme.palette.primary.darker;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        component: "svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 480 360",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(background_shape, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("image", {
                href: "/assets/illustrations/characters/character_10.png",
                height: "300",
                x: "300",
                y: "30"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#DFE3E8",
                d: "M253.579 162.701a5.06 5.06 0 01-4.861-3.646l-15.033-53.327a16.19 16.19 0 00-15.276-12.007h-78.471a16.174 16.174 0 00-15.325 11.995l-14.985 53.29a5.06 5.06 0 01-6.164 3.266 5.055 5.055 0 01-3.558-6l14.985-53.291a26.31 26.31 0 0125.047-19.347h78.471a26.327 26.327 0 0124.998 19.36l14.985 53.29a5.054 5.054 0 01-3.5 6.222 4.786 4.786 0 01-1.313.195z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#paint0_linear_1_68)",
                d: "M244.501 272.368H113.846a10.329 10.329 0 01-10.245-9.017l-12.153-95.716H266.85l-12.153 95.716a10.3 10.3 0 01-10.196 9.017z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#paint1_linear_1_68)",
                d: "M268.151 155.117H90.196c-5.631 0-10.196 4.565-10.196 10.196v.887c0 5.632 4.565 10.197 10.196 10.197h177.955c5.631 0 10.196-4.565 10.196-10.197v-.887c0-5.631-4.565-10.196-10.196-10.196z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARKER,
                d: "M128.66 184.017h-.012a7.874 7.874 0 00-7.875 7.875v58.431a7.875 7.875 0 007.875 7.875h.012a7.875 7.875 0 007.875-7.875v-58.431a7.875 7.875 0 00-7.875-7.875zM162.335 184.017h-.012a7.875 7.875 0 00-7.875 7.875v58.431a7.875 7.875 0 007.875 7.875h.012a7.876 7.876 0 007.876-7.875v-58.431a7.875 7.875 0 00-7.876-7.875zM196.023 184.017h-.012a7.875 7.875 0 00-7.875 7.875v58.431a7.875 7.875 0 007.875 7.875h.012a7.876 7.876 0 007.876-7.875v-58.431a7.875 7.875 0 00-7.876-7.875zM229.699 184.017h-.012a7.875 7.875 0 00-7.875 7.875v58.431a7.875 7.875 0 007.875 7.875h.012a7.875 7.875 0 007.875-7.875v-58.431a7.875 7.875 0 00-7.875-7.875z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#paint2_linear_1_68)",
                d: "M202.793 80h-47.239a8.762 8.762 0 00-8.762 8.762v.012a8.762 8.762 0 008.762 8.763h47.239a8.762 8.762 0 008.762-8.763v-.012A8.762 8.762 0 00202.793 80z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M254.289 279.577c23.907 0 43.288-19.381 43.288-43.288 0-23.908-19.381-43.289-43.288-43.289C230.381 193 211 212.381 211 236.289c0 23.907 19.381 43.288 43.289 43.288z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#paint3_linear_1_68)",
                d: "M243.999 256.002l-15.183-16.746a3.15 3.15 0 01.214-4.444l4.219-3.833a3.146 3.146 0 014.444.214l9.144 10.065 25.184-23.417a3.149 3.149 0 014.444.16l3.876 4.176a3.146 3.146 0 01.843 2.255 3.148 3.148 0 01-1.004 2.189l-31.758 29.531a3.119 3.119 0 01-4.423-.15z"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint0_linear_1_68",
                        x1: "267",
                        x2: "80.541",
                        y1: "272",
                        y2: "247.455",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: PRIMARY_MAIN
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: PRIMARY_DARK
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint1_linear_1_68",
                        x1: "80",
                        x2: "80",
                        y1: "155.117",
                        y2: "176.397",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: PRIMARY_LIGHT
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: PRIMARY_DARK
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint2_linear_1_68",
                        x1: "146.792",
                        x2: "146.792",
                        y1: "80",
                        y2: "97.537",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: PRIMARY_LIGHT
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: PRIMARY_DARK
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint3_linear_1_68",
                        x1: "228",
                        x2: "228",
                        y1: "217",
                        y2: "257",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: PRIMARY_LIGHT
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: PRIMARY_DARK
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const order_complete_illustration = (/*#__PURE__*/(0,react_.memo)(OrderCompleteIllustration));

;// CONCATENATED MODULE: ./src/assets/illustrations/upgrade-storage-illustration.tsx


// @mui


//

// ----------------------------------------------------------------------
function UpgradeStorageIllustration({ ...other }) {
    const theme = (0,styles.useTheme)();
    const PRIMARY_LIGHTER = theme.palette.primary.lighter;
    const PRIMARY_MAIN = theme.palette.primary.main;
    const PRIMARY_DARK = theme.palette.primary.dark;
    const PRIMARY_DARKER = theme.palette.primary.darker;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        component: "svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 480 360",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(background_shape, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("image", {
                href: "/assets/illustrations/characters/character_2.png",
                height: "300",
                x: "322",
                y: "30"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                d: "M70.6 79.545c0-2.7.7-5.4 2-7.8 1.3-2.4 3.1-4.4 5.4-5.9 2.3-1.5 4.9-2.4 7.6-2.7 2.7-.3 5.4.1 8 1.1 1.8-3.8 4.8-6.8 8.499-8.8 3.7-2 7.9-2.8 12-2.3s8 2.3 11.1 5.1c3.1 2.8 5.3 6.5 6.2 10.6 4.5.3 8.7 2.3 11.7 5.7 3 3.3 4.6 7.7 4.5 12.2-.1 4.5-2 8.7-5.2 11.9-3.2 3.1-7.5 4.9-12 4.9h-55.5c-2.9 0-5.7-1-7.9-2.8-2.2-1.8-3.7-4.4-4.2-7.2s0-5.7 1.4-8.3c1.4-2.7 3.7-4.7 6.4-5.7zm195.699 136c0-1.7.4-3.3 1.2-4.8.8-1.5 1.9-2.7 3.3-3.7 1.4-.9 3-1.5 4.7-1.7 1.7-.2 3.4.1 4.9.7 1.1-2.3 3-4.2 5.2-5.5 2.2-1.3 4.9-1.7 7.4-1.4 2.6.3 5 1.4 6.9 3.1 1.9 1.7 3.2 4 3.8 6.5 2.8.2 5.4 1.4 7.2 3.5 1.9 2.1 2.9 4.8 2.8 7.5-.1 2.8-1.3 5.4-3.3 7.3-2 1.9-4.7 3-7.5 3h-34c-1.8 0-3.5-.6-4.8-1.8-1.4-1.1-2.3-2.7-2.6-4.4-.3-1.7 0-3.5.8-5.1 1-1.3 2.4-2.5 4-3.2zm-184.2-30.4c0-2.9.7-5.7 2.1-8.2 1.4-2.5 3.3-4.7 5.7-6.2 2.4-1.6 5.1-2.6 7.9-2.9 2.8-.3 5.7.1 8.3 1.2 1.9-3.9 5-7.2 8.9-9.3 3.8-2.1 8.2-3 12.6-2.4 4.4.5 8.4 2.4 11.7 5.3 3.2 2.9 5.5 6.8 6.5 11.1 4.8.2 9.4 2.2 12.7 5.7 3.3 3.5 5.1 8.2 4.9 13-.2 4.8-2.2 9.4-5.7 12.7-3.5 3.3-8.2 5.1-13 4.9h-58c-3 0-5.9-1.1-8.2-3-2.3-1.9-3.9-4.6-4.4-7.6-.5-3 0-6 1.4-8.6 1.4-2.6 3.8-4.6 6.6-5.7zm180.4-84.4c0-2 .5-3.9 1.5-5.6.9-1.7 2.3-3.2 3.9-4.3 1.6-1.1 3.5-1.8 5.5-2 2-.2 3.9.1 5.8.8 1.3-2.7 3.5-4.9 6.1-6.4 2.7-1.4 5.7-2 8.7-1.7 3 .4 5.8 1.6 8.1 3.7 2.3 2 3.8 4.7 4.5 7.6 3.3.1 6.5 1.5 8.8 4 2.3 2.4 3.5 5.7 3.4 9-.1 3.3-1.5 6.5-4 8.8-2.4 2.3-5.7 3.5-9 3.4h-40.1c-2.1 0-4.1-.7-5.7-2.1-1.6-1.3-2.7-3.2-3.1-5.2-.4-2.1 0-4.2 1-6 1-1.9 2.7-3.3 4.6-4z",
                opacity: "0.08"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARKER,
                d: "M185.3 306.145c74.7 0 135.3-3.5 135.3-7.9s-60.6-7.9-135.3-7.9c-74.7 0-135.3 3.5-135.3 7.9s60.5 7.9 135.3 7.9z",
                opacity: "0.24"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#paint0_linear_1_99)",
                d: "M138.6 75.745h12.8c8 0 15.8 2.3 22.5 6.7 6.9 4.5 12.3 10.9 15.4 18.5 7.6.5 14.8 3.3 20.6 8.2 5.8 4.9 9.9 11.5 11.6 18.8 5.1 1.5 9.5 4.7 12.5 9.2 2.9 4.5 4.1 9.8 3.4 15.1-.7 5.3-3.4 10.1-7.4 13.6s-9.2 5.4-14.5 5.4h-125c-4.7.1-9.3-.8-13.6-2.5-4.3-1.7-8.3-4.3-11.6-7.6-3.3-3.3-6-7.2-7.8-11.5-1.8-4.3-2.7-8.9-2.7-13.6 0-4.7.9-9.3 2.7-13.6 1.8-4.3 4.4-8.2 7.8-11.5 3.3-3.3 7.3-5.9 11.6-7.6 4.3-1.7 9-2.6 13.6-2.5h10.2c3.1-7.4 8.4-13.8 15.1-18.2 6.8-4.5 14.7-6.9 22.8-6.9z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#paint1_linear_1_99)",
                d: "M124.2 171.245h16.4v16.5c0 1.8-.7 3.6-2 4.9-.6.6-1.2 1-1.9 1.3v10.6c0 1-.4 1.9-1.1 2.6-.6.6-1.5 1-2.3 1.1h.8v4.2c0 4.3 1.7 8.5 4.8 11.6 3.1 3.1 7.2 4.8 11.6 4.8h36.6v3.5h-36.6c-5.3 0-10.3-2.1-14.1-5.8-3.7-3.7-5.8-8.8-5.8-14.1v-4.3h.8c-.9-.1-1.7-.4-2.3-1.1-.7-.7-1.1-1.6-1.1-2.6v-10.6c-.7-.3-1.3-.8-1.9-1.3-1.3-1.3-2-3-2-4.9v-16.4h.1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_LIGHTER,
                fillRule: "evenodd",
                d: "M216.1 130.245l1.6.4c4.5 1.3 8.3 4.1 10.9 8 2.5 3.9 3.6 8.6 2.9 13.2-.6 4.6-2.9 8.8-6.4 11.9-3.5 3.1-8 4.7-12.7 4.7H103.3c-8.4 0-16.5-3.4-22.6-9.3-6-5.9-9.5-13.9-9.7-22.4-.2-8.4 2.9-16.6 8.6-22.7 5.8-6.2 13.7-9.9 22.2-10.4h1.5c2.9 0 5.9.4 8.7 1.2l.2.1 2.5.7.9-2.4c2.7-7 7.4-13.1 13.5-17.4 6.1-4.4 13.3-6.9 20.8-7.2 7.3.3 14.3 2.6 20.3 6.8 6 4.2 10.7 9.9 13.5 16.7l.7 1.6 1.7.1c6.9.4 13.6 3.1 18.9 7.6 5.3 4.5 9.1 10.5 10.7 17.3l.4 1.5zm-78.7 24.4v-27.7h-8.8l22.8-25.6 22.8 25.6h-8.8v27.7h-28z",
                clipRule: "evenodd"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_LIGHTER,
                d: "M297.8 112.745c.2-.3.3-.6.3-1 0-.5-.2-.9-.5-1.2-.3-.3-.8-.5-1.2-.5-.3 0-.7.1-1 .3-.3.2-.5.5-.6.8-.1.3-.2.7-.1 1 .1.3.2.6.5.9.2.2.5.4.9.5.3.1.7 0 1-.1l.7-.7zm-195.2 90.5c.3-.4.4-.9.4-1.5a2.732 2.732 0 00-2.7-2.7c-.5 0-1 .2-1.5.4-.4.3-.8.7-1 1.2-.2.5-.3 1-.2 1.5.1.5.4 1 .7 1.3.4.4.8.6 1.4.7.5.1 1 .1 1.5-.1.7 0 1.1-.4 1.4-.8zm201.9-91.5c0 .3-.1.7-.3 1-.2.3-.5.5-.8.6-.3.1-.7.2-1 .1-.3-.1-.6-.2-.9-.5-.2-.2-.4-.5-.5-.9-.1-.3 0-.7.1-1 .1-.3.3-.6.6-.8.3-.2.6-.3 1-.3.5 0 .9.2 1.2.5.4.4.6.8.6 1.3zm-166.1 71.9c0 1.2-1 2.2-2.2 2.2-1.2 0-2.2-1-2.2-2.2 0-1.2 1-2.2 2.2-2.2 1.2.1 2.2 1 2.2 2.2z",
                opacity: "0.48"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_LIGHTER,
                d: "M291.6 111.745c0 .3-.1.7-.3 1-.2.3-.5.5-.8.6-.3.1-.7.2-1 .1-.3-.1-.6-.2-.9-.5-.2-.2-.4-.5-.5-.9-.1-.3 0-.7.1-1 .1-.3.4-.6.6-.8.3-.2.6-.3 1-.3.5 0 .9.2 1.2.5.5.4.6.8.6 1.3zm-198.5 90c0 .5-.2 1-.4 1.5-.3.4-.7.8-1.2 1-.5.2-1 .3-1.5.1-.5-.1-1-.4-1.4-.7-.4-.3-.6-.8-.7-1.3-.1-.5 0-1 .2-1.5s.5-.9 1-1.2c.4-.3.9-.4 1.5-.4.7 0 1.4.3 1.9.8.3.4.6 1 .6 1.7zm39.5-18.1c0 1.2-1 2.2-2.2 2.2-1.2 0-2.2-1-2.2-2.2 0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2z",
                opacity: "0.12"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                d: "M256.3 144.745h-60c-5 0-9.1 4.1-9.1 9.1v135.3c0 5 4.1 9.1 9.1 9.1h60c5 0 9.1-4.1 9.1-9.1v-135.3c0-5-4.1-9.1-9.1-9.1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARK,
                d: "M256.3 298.245h16.3c5 0 9.1-4.1 9.1-9.1v-135.3c0-5-4.1-9.1-9.1-9.1h-16.3c5 0 9.1 4.1 9.1 9.1v135.3c0 5-4.1 9.1-9.1 9.1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M262.4 289.145v-135.3c0-3.3-2.7-6.1-6.1-6.1h-57.2c-3.3 0-6.1 2.7-6.1 6.1v135.3c0 3.3 2.7 6.1 6.1 6.1h57.2c3.3 0 6.1-2.8 6.1-6.1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_MAIN,
                fillRule: "evenodd",
                d: "M202.5 165.545h50.4c1.2 0 2.4-.5 3.3-1.4.9-.9 1.4-2.1 1.4-3.3 0-1.3-.5-2.5-1.4-3.3-.9-.9-2.1-1.4-3.3-1.4h-50.4c-1.2 0-2.4.5-3.3 1.4-.9.9-1.4 2.1-1.4 3.3 0 1.2.5 2.4 1.4 3.3.9.9 2 1.4 3.3 1.4zm-.8-3.7h34.6c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7 0-.1 0-.3-.1-.4-.1-.1-.1-.2-.2-.3-.1-.1-.2-.2-.3-.2-.1-.1-.3-.1-.4-.1h-34.6c-.3 0-.5.1-.7.3-.2.2-.3.5-.3.7 0 .1 0 .3.1.4.1.1.1.2.2.3.1.1.2.2.3.2.2.1.3.1.4.1zm.8 18.9h50.4c1.2 0 2.4-.5 3.3-1.4.9-.9 1.4-2.1 1.4-3.3 0-1.2-.5-2.4-1.4-3.3-.9-.9-2.1-1.4-3.3-1.4h-50.4c-1.2 0-2.4.5-3.3 1.4-.9.9-1.4 2.1-1.4 3.3 0 1.3.5 2.4 1.4 3.3.8.9 2 1.4 3.3 1.4zm-.8-3.7h34.6c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7 0-.3-.1-.5-.3-.7-.2-.2-.5-.3-.7-.3h-34.6c-.3 0-.5.1-.7.3-.2.2-.3.5-.3.7 0 .3.1.5.3.7.2.2.5.3.7.3zm.8 18.9h50.4c1.2 0 2.4-.5 3.3-1.4.9-.9 1.4-2.1 1.4-3.3 0-1.3-.5-2.5-1.4-3.3-.9-.9-2.1-1.4-3.3-1.4h-50.4c-1.3 0-2.4.5-3.3 1.4-.9.9-1.4 2.1-1.4 3.3 0 1.2.5 2.4 1.4 3.3.9.8 2 1.3 3.3 1.4zm-.8-3.7h34.6c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7 0-.1 0-.3-.1-.4-.1-.1-.1-.2-.2-.3-.1-.1-.2-.2-.3-.2-.1 0-.3-.1-.4-.1h-34.6c-.3 0-.5.1-.7.3-.2.2-.3.5-.3.7 0 .1 0 .3.1.4.1.1.1.2.2.3.1.1.2.2.3.2.2 0 .3.1.4.1zm.8 9.4h50.4c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7h-50.4c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7zm-.8 5.7h34.6c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7 0-.3-.1-.5-.3-.7-.2-.2-.5-.3-.7-.3h-34.6c-.3 0-.5.1-.7.3-.2.2-.3.5-.3.7 0 .2.1.5.3.7.2.2.5.3.7.3zm51.2 18.9h-50.4c-1.2 0-2.4-.5-3.3-1.4-.9-.9-1.4-2.1-1.4-3.3 0-1.3.5-2.4 1.4-3.3.9-.9 2.1-1.4 3.3-1.4h50.4c1.3 0 2.5.5 3.3 1.4.9.9 1.4 2.1 1.4 3.3 0 1.2-.5 2.4-1.4 3.3-.8.9-2 1.4-3.3 1.4zm-16.6-3.7h-34.6c-.1 0-.3 0-.4-.1-.1-.1-.2-.1-.3-.2-.1-.1-.2-.2-.2-.3-.1-.1-.1-.3-.1-.4 0-.1 0-.3.1-.4.1-.1.1-.2.2-.3.1-.1.2-.2.3-.2.1-.1.3-.1.4-.1h34.6c.1 0 .3 0 .4.1.1.1.2.1.3.2.1.1.2.2.2.3.1.1.1.3.1.4 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3zm-33.8 18.9h50.4c1.3 0 2.5-.5 3.3-1.4.9-.9 1.4-2.1 1.4-3.3 0-1.2-.5-2.4-1.4-3.3-.9-.9-2.1-1.4-3.3-1.4h-50.4c-1.2 0-2.4.5-3.3 1.4-.9.9-1.4 2.1-1.4 3.3 0 1.2.5 2.4 1.4 3.3.8.8 2 1.3 3.3 1.4zm-.8-3.7h34.6c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7 0-.3-.1-.5-.3-.7-.2-.2-.5-.3-.7-.3h-34.6c-.1 0-.3 0-.4.1-.1.1-.2.1-.3.2-.1.1-.2.2-.2.3-.1.1-.1.3-.1.4 0 .3.1.5.3.7.2.2.5.3.7.3zm51.2 18.8h-50.4c-1.2 0-2.4-.5-3.3-1.4-.9-.9-1.4-2.1-1.4-3.3 0-1.3.5-2.4 1.4-3.3.9-.9 2.1-1.4 3.3-1.4h50.4c1.3 0 2.5.5 3.3 1.4.9.9 1.4 2.1 1.4 3.3 0 1.2-.5 2.4-1.4 3.3-.8.9-2 1.4-3.3 1.4zm-16.6-3.7h-34.6c-.3 0-.5-.1-.7-.3-.2-.2-.3-.5-.3-.7 0-.3.1-.5.3-.7.2-.2.5-.3.7-.3h34.6c.1 0 .3 0 .4.1.1.1.2.1.3.2.1.1.2.2.2.3.1.1.1.3.1.4 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3zm-33.8 9.5h50.4c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7h-50.4c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7zm-.8 5.7h34.6c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7 0-.3-.1-.5-.3-.7-.2-.2-.5-.3-.7-.3h-34.6c-.3 0-.5.1-.7.3-.2.2-.3.5-.3.7 0 .1 0 .3.1.4.1.1.1.2.2.3.1.1.2.2.3.2.1 0 .3.1.4.1zm51.2 18.9h-50.4c-1.2 0-2.4-.5-3.3-1.4-.9-.9-1.4-2.1-1.4-3.3 0-1.3.5-2.4 1.4-3.3.9-.9 2.1-1.4 3.3-1.4h50.4c1.3 0 2.5.5 3.3 1.4.9.9 1.4 2.1 1.4 3.3 0 1.3-.5 2.4-1.4 3.3-.8.9-2 1.4-3.3 1.4zm-16.6-3.7h-34.6c-.3 0-.5-.1-.7-.3-.2-.2-.3-.5-.3-.7 0-.3.1-.5.3-.7.2-.2.5-.3.7-.3h34.6c.1 0 .3 0 .4.1.1.1.2.1.3.2.1.1.2.2.2.3.1.1.1.3.1.4 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3z",
                clipRule: "evenodd",
                opacity: "0.24"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FFAB00",
                d: "M248.8 161.845c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1-.1.6.4 1 1 1zm0 15.2c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1-.1.5.4 1 1 1zm0 15.2c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1-.1.5.4 1 1 1zm-4.6 15.1c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1 0 .6.4 1 1 1zm0 15.2c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1s.4 1 1 1zm0 15.2c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1s.4 1 1 1zm0 15.1c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1 0 .6.4 1 1 1zm4.6 15.2c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1-.1.5.4 1 1 1zm0 15.2c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1-.1.5.4 1 1 1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARK,
                d: "M253.3 161.845c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1 0 .6.4 1 1 1zm0 15.2c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1s.4 1 1 1zm0 15.2c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1s.4 1 1 1zm-4.5 15.1c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1-.1.6.4 1 1 1zm0 15.2c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1-.1.5.4 1 1 1zm4.5 15.2c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1s.4 1 1 1zm0 15.1c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1 0 .6.4 1 1 1zm0 15.2c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1s.4 1 1 1zm0 15.2c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1s.4 1 1 1zm-9.1-121.4c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1 0 .6.4 1 1 1zm0 15.2c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1s.4 1 1 1zm0 15.2c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1s.4 1 1 1zm9.1 15.1c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1 0 .6.4 1 1 1zm0 15.2c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1s.4 1 1 1zm-4.5 15.2c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1-.1.5.4 1 1 1zm0 15.1c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1-.1.6.4 1 1 1zm-4.6 15.2c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1s.4 1 1 1zm0 15.2c.6 0 1-.5 1-1 0-.6-.5-1-1-1-.6 0-1 .5-1 1s.4 1 1 1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: PRIMARY_DARKER,
                d: "M170.6 243.645l-4.5 5.6c-.4.5-.9.9-1.5 1.2-.6.3-1.2.4-1.8.4h-40.2c-1.1 0-2.1.4-2.8 1.1-.8.7-1.3 1.7-1.4 2.7l-3.6 42.9c-.1.5 0 1 .2 1.5s.4.9.7 1.3c.3.4.7.7 1.2.9.5.2 1 .3 1.5.3h78.9c1.1 0 2.1-.4 2.8-1.1.8-.7 1.3-1.7 1.4-2.7l4.3-51.6c.1-.5 0-1-.2-1.5s-.4-.9-.7-1.3c-.3-.4-.7-.7-1.2-.9-.5-.2-1-.3-1.4-.3h-28.5c-.6 0-1.2.1-1.8.4-.5.2-1 .6-1.4 1.1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#paint2_linear_1_99)",
                d: "M154.6 246.645l-3.6 5.3c-.3.5-.8.9-1.3 1.1-.5.3-1.1.4-1.7.4h-33.1c-.5 0-1 .1-1.4.2-.4.2-.9.5-1.2.8-.3.3-.6.8-.8 1.2-.2.5-.2.9-.2 1.4l3 40.6c.1 1 .6 2 1.4 2.6.8.7 1.8 1 2.8 1h78.9c.5 0 1-.1 1.4-.2.4-.2.9-.5 1.2-.8.3-.3.6-.8.8-1.2.2-.5.2-.9.2-1.4l-3.6-48.9c-.1-1-.6-1.9-1.4-2.6-.8-.7-1.8-1-2.8-1h-35.5c-.6 0-1.2.1-1.7.4-.5.3-1 .7-1.4 1.1z"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint0_linear_1_99",
                        x1: "179.716",
                        x2: "100.71",
                        y1: "61.393",
                        y2: "249.434",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: PRIMARY_MAIN
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: PRIMARY_DARK
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint1_linear_1_99",
                        x1: "209.454",
                        x2: "130.449",
                        y1: "73.888",
                        y2: "261.929",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: PRIMARY_MAIN
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: PRIMARY_DARK
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint2_linear_1_99",
                        x1: "168.021",
                        x2: "145.633",
                        y1: "238.622",
                        y2: "311.266",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: PRIMARY_MAIN
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: PRIMARY_DARK
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const upgrade_storage_illustration = (/*#__PURE__*/(0,react_.memo)(UpgradeStorageIllustration));

;// CONCATENATED MODULE: ./src/assets/illustrations/index.ts
















/***/ }),

/***/ 23468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthConsumer: () => (/* binding */ AuthConsumer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_loading_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86480);
/* harmony import */ var _auth_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18334);
/* __next_internal_client_entry_do_not_use__ AuthConsumer auto */ 
// components

//

function AuthConsumer({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_auth_context__WEBPACK_IMPORTED_MODULE_2__.AuthContext.Consumer, {
        children: (auth)=>auth.loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_loading_screen__WEBPACK_IMPORTED_MODULE_1__/* .SplashScreen */ .c, {}) : children
    });
}


/***/ }),

/***/ 18334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthContext: () => (/* binding */ AuthContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ AuthContext auto */ 
// ----------------------------------------------------------------------
const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});


/***/ }),

/***/ 9989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AuthProvider: () => (/* binding */ AuthProvider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/utils/axios.ts
var axios = __webpack_require__(72810);
// EXTERNAL MODULE: ./src/auth/context/jwt/auth-context.tsx
var auth_context = __webpack_require__(18334);
// EXTERNAL MODULE: ./src/routes/paths.ts
var paths = __webpack_require__(48611);
;// CONCATENATED MODULE: ./src/auth/context/jwt/utils.ts
// routes

// utils

// ----------------------------------------------------------------------
function jwtDecode(token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(window.atob(base64).split("").map((c)=>`%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`).join(""));
    return JSON.parse(jsonPayload);
}
// ----------------------------------------------------------------------
const isValidToken = (accessToken)=>{
    if (!accessToken) {
        return false;
    }
    const decoded = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
};
// ----------------------------------------------------------------------
const tokenExpired = (exp)=>{
    // eslint-disable-next-line prefer-const
    let expiredTimer;
    const currentTime = Date.now();
    // Test token expires after 10s
    // const timeLeft = currentTime + 10000 - currentTime; // ~10s
    const timeLeft = exp * 1000 - currentTime;
    clearTimeout(expiredTimer);
    expiredTimer = setTimeout(()=>{
        alert("Token expired");
        sessionStorage.removeItem("accessToken");
        window.location.href = paths/* paths */.H.auth.jwt.login;
    }, timeLeft);
};
// ----------------------------------------------------------------------
const setSession = (accessToken)=>{
    if (accessToken) {
        sessionStorage.setItem("accessToken", accessToken);
        axios/* default */.ZP.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
        // This function below will handle when token is expired
        const { exp } = jwtDecode(accessToken); // ~3 days by minimals server
        tokenExpired(exp);
    } else {
        sessionStorage.removeItem("accessToken");
        delete axios/* default */.ZP.defaults.headers.common.Authorization;
    }
};

;// CONCATENATED MODULE: ./src/auth/context/jwt/auth-provider.tsx
/* __next_internal_client_entry_do_not_use__ AuthProvider auto */ 

// utils

//


var // ----------------------------------------------------------------------
// NOTE:
// We only build demo at basic level.
// Customer will need to do some extra handling yourself if you want to extend the logic and other features...
// ----------------------------------------------------------------------
Types;
(function(Types) {
    Types["INITIAL"] = "INITIAL";
    Types["LOGIN"] = "LOGIN";
    Types["REGISTER"] = "REGISTER";
    Types["LOGOUT"] = "LOGOUT";
})(Types || (Types = {}));
// ----------------------------------------------------------------------
const initialState = {
    user: null,
    loading: true
};
const reducer = (state, action)=>{
    if (action.type === Types.INITIAL) {
        return {
            loading: false,
            user: action.payload.user
        };
    }
    if (action.type === Types.LOGIN) {
        return {
            ...state,
            user: action.payload.user
        };
    }
    if (action.type === Types.REGISTER) {
        return {
            ...state,
            user: action.payload.user
        };
    }
    if (action.type === Types.LOGOUT) {
        return {
            ...state,
            user: null
        };
    }
    return state;
};
// ----------------------------------------------------------------------
const STORAGE_KEY = "accessToken";
function AuthProvider({ children }) {
    const [state, dispatch] = (0,react_.useReducer)(reducer, initialState);
    const initialize = (0,react_.useCallback)(async ()=>{
        try {
            const accessToken = sessionStorage.getItem(STORAGE_KEY);
            if (accessToken && isValidToken(accessToken)) {
                setSession(accessToken);
                const response = await axios/* default */.ZP.get(axios/* endpoints */.Hv.auth.me);
                const { user } = response.data;
                dispatch({
                    type: Types.INITIAL,
                    payload: {
                        user
                    }
                });
            } else {
                dispatch({
                    type: Types.INITIAL,
                    payload: {
                        user: null
                    }
                });
            }
        } catch (error) {
            console.error(error);
            dispatch({
                type: Types.INITIAL,
                payload: {
                    user: null
                }
            });
        }
    }, []);
    (0,react_.useEffect)(()=>{
        initialize();
    }, [
        initialize
    ]);
    // LOGIN
    const login = (0,react_.useCallback)(async (email, password)=>{
        const data = {
            email,
            password
        };
        const response = await axios/* default */.ZP.post(axios/* endpoints */.Hv.auth.login, data);
        const { accessToken, user } = response.data;
        setSession(accessToken);
        dispatch({
            type: Types.LOGIN,
            payload: {
                user
            }
        });
    }, []);
    // REGISTER
    const register = (0,react_.useCallback)(async (email, password, firstName, lastName)=>{
        const data = {
            email,
            password,
            firstName,
            lastName
        };
        const response = await axios/* default */.ZP.post(axios/* endpoints */.Hv.auth.register, data);
        const { accessToken, user } = response.data;
        sessionStorage.setItem(STORAGE_KEY, accessToken);
        dispatch({
            type: Types.REGISTER,
            payload: {
                user
            }
        });
    }, []);
    // LOGOUT
    const logout = (0,react_.useCallback)(async ()=>{
        setSession(null);
        dispatch({
            type: Types.LOGOUT
        });
    }, []);
    // ----------------------------------------------------------------------
    const checkAuthenticated = state.user ? "authenticated" : "unauthenticated";
    const status = state.loading ? "loading" : checkAuthenticated;
    const memoizedValue = (0,react_.useMemo)(()=>({
            user: state.user,
            method: "jwt",
            loading: status === "loading",
            authenticated: status === "authenticated",
            unauthenticated: status === "unauthenticated",
            //
            login,
            register,
            logout
        }), [
        login,
        logout,
        register,
        state.user,
        status
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(auth_context.AuthContext.Provider, {
        value: memoizedValue,
        children: children
    });
}


/***/ }),

/***/ 40529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* reexport */ useAuthContext)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/auth/context/jwt/auth-context.tsx
var auth_context = __webpack_require__(18334);
;// CONCATENATED MODULE: ./src/auth/hooks/use-auth-context.ts
/* __next_internal_client_entry_do_not_use__ useAuthContext auto */ 
//

// import { AuthContext } from '../context/auth0/auth-context';
// import { AuthContext } from '../context/amplify/auth-context';
// import { AuthContext } from '../context/firebase/auth-context';
// ----------------------------------------------------------------------
const useAuthContext = ()=>{
    const context = (0,react_.useContext)(auth_context.AuthContext);
    if (!context) throw new Error("useAuthContext context must be use inside AuthProvider");
    return context;
};

;// CONCATENATED MODULE: ./src/auth/hooks/index.ts



/***/ }),

/***/ 22140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  NM: () => (/* reexport */ MotionContainer),
  DG: () => (/* reexport */ MotionViewport),
  R0: () => (/* reexport */ varBgColor),
  Q4: () => (/* reexport */ varBgKenburns),
  UZ: () => (/* reexport */ varBgPan),
  Wp: () => (/* reexport */ varBounce),
  Ew: () => (/* reexport */ varContainer),
  EU: () => (/* reexport */ varFade),
  HN: () => (/* reexport */ varFlip),
  U6: () => (/* reexport */ varHover),
  lj: () => (/* reexport */ varPath),
  j$: () => (/* reexport */ varRotate),
  Jt: () => (/* reexport */ varScale),
  pH: () => (/* reexport */ varSlide),
  BN: () => (/* reexport */ varTranHover),
  BL: () => (/* reexport */ varZoom)
});

// UNUSED EXPORTS: TRANSITION, varTranEnter, varTranExit

;// CONCATENATED MODULE: ./src/components/animate/variants/path.ts
// ----------------------------------------------------------------------
const TRANSITION = {
    duration: 2,
    ease: [
        0.43,
        0.13,
        0.23,
        0.96
    ]
};
const varPath = {
    animate: {
        fillOpacity: [
            0,
            0,
            1
        ],
        pathLength: [
            1,
            0.4,
            0
        ],
        transition: TRANSITION
    }
};

;// CONCATENATED MODULE: ./src/components/animate/variants/transition.ts
// ----------------------------------------------------------------------
const varTranHover = (props)=>{
    const duration = props?.duration || 0.32;
    const ease = props?.ease || [
        0.43,
        0.13,
        0.23,
        0.96
    ];
    return {
        duration,
        ease
    };
};
const varTranEnter = (props)=>{
    const duration = props?.durationIn || 0.64;
    const ease = props?.easeIn || [
        0.43,
        0.13,
        0.23,
        0.96
    ];
    return {
        duration,
        ease
    };
};
const varTranExit = (props)=>{
    const duration = props?.durationOut || 0.48;
    const ease = props?.easeOut || [
        0.43,
        0.13,
        0.23,
        0.96
    ];
    return {
        duration,
        ease
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/fade.ts
//

// ----------------------------------------------------------------------
const varFade = (props)=>{
    const distance = props?.distance || 120;
    const durationIn = props?.durationIn;
    const durationOut = props?.durationOut;
    const easeIn = props?.easeIn;
    const easeOut = props?.easeOut;
    return {
        // IN
        in: {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1,
                transition: varTranEnter
            },
            exit: {
                opacity: 0,
                transition: varTranExit
            }
        },
        inUp: {
            initial: {
                y: distance,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: distance,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inDown: {
            initial: {
                y: -distance,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: -distance,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inLeft: {
            initial: {
                x: -distance,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: -distance,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inRight: {
            initial: {
                x: distance,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: distance,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        // OUT
        out: {
            initial: {
                opacity: 1
            },
            animate: {
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outUp: {
            initial: {
                y: 0,
                opacity: 1
            },
            animate: {
                y: -distance,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: 0,
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outDown: {
            initial: {
                y: 0,
                opacity: 1
            },
            animate: {
                y: distance,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: 0,
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outLeft: {
            initial: {
                x: 0,
                opacity: 1
            },
            animate: {
                x: -distance,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: 0,
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outRight: {
            initial: {
                x: 0,
                opacity: 1
            },
            animate: {
                x: distance,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: 0,
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/zoom.ts
//

// ----------------------------------------------------------------------
const varZoom = (props)=>{
    const distance = props?.distance || 720;
    const durationIn = props?.durationIn;
    const durationOut = props?.durationOut;
    const easeIn = props?.easeIn;
    const easeOut = props?.easeOut;
    return {
        // IN
        in: {
            initial: {
                scale: 0,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: 0,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inUp: {
            initial: {
                scale: 0,
                opacity: 0,
                translateY: distance
            },
            animate: {
                scale: 1,
                opacity: 1,
                translateY: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateY: distance,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inDown: {
            initial: {
                scale: 0,
                opacity: 0,
                translateY: -distance
            },
            animate: {
                scale: 1,
                opacity: 1,
                translateY: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateY: -distance,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inLeft: {
            initial: {
                scale: 0,
                opacity: 0,
                translateX: -distance
            },
            animate: {
                scale: 1,
                opacity: 1,
                translateX: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateX: -distance,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inRight: {
            initial: {
                scale: 0,
                opacity: 0,
                translateX: distance
            },
            animate: {
                scale: 1,
                opacity: 1,
                translateX: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateX: distance,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        // OUT
        out: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            }
        },
        outUp: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                translateY: -distance,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            }
        },
        outDown: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                translateY: distance,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            }
        },
        outLeft: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                translateX: -distance,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            }
        },
        outRight: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                translateX: distance,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/flip.ts
//

// ----------------------------------------------------------------------
const varFlip = (props)=>{
    const durationIn = props?.durationIn;
    const durationOut = props?.durationOut;
    const easeIn = props?.easeIn;
    const easeOut = props?.easeOut;
    return {
        // IN
        inX: {
            initial: {
                rotateX: -180,
                opacity: 0
            },
            animate: {
                rotateX: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                rotateX: -180,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inY: {
            initial: {
                rotateY: -180,
                opacity: 0
            },
            animate: {
                rotateY: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                rotateY: -180,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        // OUT
        outX: {
            initial: {
                rotateX: 0,
                opacity: 1
            },
            animate: {
                rotateX: 70,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outY: {
            initial: {
                rotateY: 0,
                opacity: 1
            },
            animate: {
                rotateY: 70,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/slide.ts
//

// ----------------------------------------------------------------------
const varSlide = (props)=>{
    const distance = props?.distance || 160;
    const durationIn = props?.durationIn;
    const durationOut = props?.durationOut;
    const easeIn = props?.easeIn;
    const easeOut = props?.easeOut;
    return {
        // IN
        inUp: {
            initial: {
                y: distance
            },
            animate: {
                y: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: distance,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inDown: {
            initial: {
                y: -distance
            },
            animate: {
                y: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: -distance,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inLeft: {
            initial: {
                x: -distance
            },
            animate: {
                x: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: -distance,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inRight: {
            initial: {
                x: distance
            },
            animate: {
                x: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: distance,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        // OUT
        outUp: {
            initial: {
                y: 0
            },
            animate: {
                y: -distance,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outDown: {
            initial: {
                y: 0
            },
            animate: {
                y: distance,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outLeft: {
            initial: {
                x: 0
            },
            animate: {
                x: -distance,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outRight: {
            initial: {
                x: 0
            },
            animate: {
                x: distance,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/scale.ts

// ----------------------------------------------------------------------
const varScale = (props)=>{
    const durationIn = props?.durationIn;
    const durationOut = props?.durationOut;
    const easeIn = props?.easeIn;
    const easeOut = props?.easeOut;
    return {
        // IN
        inX: {
            initial: {
                scaleX: 0,
                opacity: 0
            },
            animate: {
                scaleX: 1,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scaleX: 0,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inY: {
            initial: {
                scaleY: 0,
                opacity: 0
            },
            animate: {
                scaleY: 1,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scaleY: 0,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        // OUT
        outX: {
            initial: {
                scaleX: 1,
                opacity: 1
            },
            animate: {
                scaleX: 0,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            }
        },
        outY: {
            initial: {
                scaleY: 1,
                opacity: 1
            },
            animate: {
                scaleY: 0,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/bounce.ts
// types
//

// ----------------------------------------------------------------------
const varBounce = (props)=>{
    const durationIn = props?.durationIn;
    const durationOut = props?.durationOut;
    const easeIn = props?.easeIn;
    const easeOut = props?.easeOut;
    return {
        // IN
        in: {
            initial: {},
            animate: {
                scale: [
                    0.3,
                    1.1,
                    0.9,
                    1.03,
                    0.97,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1,
                    1
                ],
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: [
                    0.9,
                    1.1,
                    0.3
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        inUp: {
            initial: {},
            animate: {
                y: [
                    720,
                    -24,
                    12,
                    -4,
                    0
                ],
                scaleY: [
                    4,
                    0.9,
                    0.95,
                    0.985,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1
                ],
                transition: {
                    ...varTranEnter({
                        durationIn,
                        easeIn
                    })
                }
            },
            exit: {
                y: [
                    12,
                    -24,
                    720
                ],
                scaleY: [
                    0.985,
                    0.9,
                    3
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inDown: {
            initial: {},
            animate: {
                y: [
                    -720,
                    24,
                    -12,
                    4,
                    0
                ],
                scaleY: [
                    4,
                    0.9,
                    0.95,
                    0.985,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1
                ],
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: [
                    -12,
                    24,
                    -720
                ],
                scaleY: [
                    0.985,
                    0.9,
                    3
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inLeft: {
            initial: {},
            animate: {
                x: [
                    -720,
                    24,
                    -12,
                    4,
                    0
                ],
                scaleX: [
                    3,
                    1,
                    0.98,
                    0.995,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1
                ],
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: [
                    0,
                    24,
                    -720
                ],
                scaleX: [
                    1,
                    0.9,
                    2
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inRight: {
            initial: {},
            animate: {
                x: [
                    720,
                    -24,
                    12,
                    -4,
                    0
                ],
                scaleX: [
                    3,
                    1,
                    0.98,
                    0.995,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1
                ],
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: [
                    0,
                    -24,
                    720
                ],
                scaleX: [
                    1,
                    0.9,
                    2
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        // OUT
        out: {
            animate: {
                scale: [
                    0.9,
                    1.1,
                    0.3
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        outUp: {
            animate: {
                y: [
                    -12,
                    24,
                    -720
                ],
                scaleY: [
                    0.985,
                    0.9,
                    3
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        outDown: {
            animate: {
                y: [
                    12,
                    -24,
                    720
                ],
                scaleY: [
                    0.985,
                    0.9,
                    3
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        outLeft: {
            animate: {
                x: [
                    0,
                    24,
                    -720
                ],
                scaleX: [
                    1,
                    0.9,
                    2
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        outRight: {
            animate: {
                x: [
                    0,
                    -24,
                    720
                ],
                scaleX: [
                    1,
                    0.9,
                    2
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/rotate.ts
//

// ----------------------------------------------------------------------
const varRotate = (props)=>{
    const durationIn = props?.durationIn;
    const durationOut = props?.durationOut;
    const easeIn = props?.easeIn;
    const easeOut = props?.easeOut;
    return {
        // IN
        in: {
            initial: {
                opacity: 0,
                rotate: -360
            },
            animate: {
                opacity: 1,
                rotate: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                opacity: 0,
                rotate: -360,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        // OUT
        out: {
            initial: {
                opacity: 1,
                rotate: 0
            },
            animate: {
                opacity: 0,
                rotate: -360,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/actions.ts
// ----------------------------------------------------------------------
const varHover = (hover = 1.09, tap = 0.97)=>({
        hover: {
            scale: hover
        },
        tap: {
            scale: tap
        }
    });

;// CONCATENATED MODULE: ./src/components/animate/variants/container.ts
// ----------------------------------------------------------------------
const varContainer = (props)=>{
    const staggerIn = props?.staggerIn || 0.05;
    const delayIn = props?.staggerIn || 0.05;
    const staggerOut = props?.staggerIn || 0.05;
    return {
        animate: {
            transition: {
                staggerChildren: staggerIn,
                delayChildren: delayIn
            }
        },
        exit: {
            transition: {
                staggerChildren: staggerOut,
                staggerDirection: -1
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/background.ts
// ----------------------------------------------------------------------
const varBgColor = (props)=>{
    const colors = props?.colors || [
        "#19dcea",
        "#b22cff"
    ];
    const duration = props?.duration || 5;
    const ease = props?.ease || "linear";
    return {
        animate: {
            background: colors,
            transition: {
                duration,
                ease
            }
        }
    };
};
// ----------------------------------------------------------------------
const varBgKenburns = (props)=>{
    const duration = props?.duration || 5;
    const ease = props?.ease || "easeOut";
    return {
        top: {
            animate: {
                scale: [
                    1,
                    1.25
                ],
                y: [
                    0,
                    -15
                ],
                transformOrigin: [
                    "50% 16%",
                    "50% top"
                ],
                transition: {
                    duration,
                    ease
                }
            }
        },
        bottom: {
            animate: {
                scale: [
                    1,
                    1.25
                ],
                y: [
                    0,
                    15
                ],
                transformOrigin: [
                    "50% 84%",
                    "50% bottom"
                ],
                transition: {
                    duration,
                    ease
                }
            }
        },
        left: {
            animate: {
                scale: [
                    1,
                    1.25
                ],
                x: [
                    0,
                    20
                ],
                y: [
                    0,
                    15
                ],
                transformOrigin: [
                    "16% 50%",
                    "0% left"
                ],
                transition: {
                    duration,
                    ease
                }
            }
        },
        right: {
            animate: {
                scale: [
                    1,
                    1.25
                ],
                x: [
                    0,
                    -20
                ],
                y: [
                    0,
                    -15
                ],
                transformOrigin: [
                    "84% 50%",
                    "0% right"
                ],
                transition: {
                    duration,
                    ease
                }
            }
        }
    };
};
// ----------------------------------------------------------------------
const varBgPan = (props)=>{
    const colors = props?.colors || [
        "#ee7752",
        "#e73c7e",
        "#23a6d5",
        "#23d5ab"
    ];
    const duration = props?.duration || 5;
    const ease = props?.ease || "linear";
    const gradient = (deg)=>`linear-gradient(${deg}deg, ${colors})`;
    return {
        top: {
            animate: {
                backgroundImage: [
                    gradient(0),
                    gradient(0)
                ],
                backgroundPosition: [
                    "center 99%",
                    "center 1%"
                ],
                backgroundSize: [
                    "100% 600%",
                    "100% 600%"
                ],
                transition: {
                    duration,
                    ease
                }
            }
        },
        right: {
            animate: {
                backgroundPosition: [
                    "1% center",
                    "99% center"
                ],
                backgroundImage: [
                    gradient(270),
                    gradient(270)
                ],
                backgroundSize: [
                    "600% 100%",
                    "600% 100%"
                ],
                transition: {
                    duration,
                    ease
                }
            }
        },
        bottom: {
            animate: {
                backgroundImage: [
                    gradient(0),
                    gradient(0)
                ],
                backgroundPosition: [
                    "center 1%",
                    "center 99%"
                ],
                backgroundSize: [
                    "100% 600%",
                    "100% 600%"
                ],
                transition: {
                    duration,
                    ease
                }
            }
        },
        left: {
            animate: {
                backgroundPosition: [
                    "99% center",
                    "1% center"
                ],
                backgroundImage: [
                    gradient(270),
                    gradient(270)
                ],
                backgroundSize: [
                    "600% 100%",
                    "600% 100%"
                ],
                transition: {
                    duration,
                    ease
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/index.ts













// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs + 19 modules
var motion_minimal = __webpack_require__(51730);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./src/hooks/use-responsive.ts
var use_responsive = __webpack_require__(59099);
;// CONCATENATED MODULE: ./src/components/animate/motion-viewport.tsx


// @mui

// hooks

//

function MotionViewport({ children, disableAnimatedMobile = true, ...other }) {
    const smDown = (0,use_responsive/* useResponsive */.F)("down", "sm");
    if (smDown && disableAnimatedMobile) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
            ...other,
            children: children
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        component: motion_minimal.m.div,
        initial: "initial",
        whileInView: "animate",
        viewport: {
            once: true,
            amount: 0.3
        },
        variants: varContainer(),
        children: children
    });
}

;// CONCATENATED MODULE: ./src/components/animate/motion-container.tsx


// @mui

//

function MotionContainer({ animate, action = false, children, ...other }) {
    if (action) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
            component: motion_minimal.m.div,
            initial: false,
            animate: animate ? "animate" : "exit",
            variants: varContainer(),
            children: children
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        component: motion_minimal.m.div,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        variants: varContainer(),
        children: children
    });
}

;// CONCATENATED MODULE: ./src/components/animate/index.ts
// ----------------------------------------------------------------------





/***/ }),

/***/ 91465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47335);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36291);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51730);
/* __next_internal_client_entry_do_not_use__ default auto */ 


// ----------------------------------------------------------------------
// eslint-disable-next-line import/extensions
const loadFeatures = ()=>Promise.all(/* import() */[__webpack_require__.e(24), __webpack_require__.e(812), __webpack_require__.e(8543)]).then(__webpack_require__.bind(__webpack_require__, 48543)).then((res)=>res.default);
function MotionLazy({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .LazyMotion */ .X, {
        strict: true,
        features: loadFeatures,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.div, {
            style: {
                height: "100%"
            },
            children: [
                " ",
                children,
                " "
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.resolve(MotionLazy), {
    ssr: false
}));


/***/ }),

/***/ 99310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ CustomPopover),
  S: () => (/* reexport */ usePopover)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/components/custom-popover/use-popover.ts

function usePopover() {
    const [open, setOpen] = (0,react_.useState)(null);
    const onOpen = (0,react_.useCallback)((event)=>{
        setOpen(event.currentTarget);
    }, []);
    const onClose = (0,react_.useCallback)(()=>{
        setOpen(null);
    }, []);
    return {
        open,
        onOpen,
        onClose,
        setOpen
    };
}

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/MenuItem/index.js
var MenuItem = __webpack_require__(88707);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Popover/index.js
var Popover = __webpack_require__(57832);
var Popover_default = /*#__PURE__*/__webpack_require__.n(Popover);
;// CONCATENATED MODULE: ./src/components/custom-popover/utils.ts
// ----------------------------------------------------------------------
function getPosition(arrow) {
    let props;
    switch(arrow){
        case "top-left":
            props = {
                style: {
                    ml: -0.75
                },
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "left"
                }
            };
            break;
        case "top-center":
            props = {
                style: {},
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "center"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "center"
                }
            };
            break;
        case "top-right":
            props = {
                style: {
                    ml: 0.75
                },
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "right"
                }
            };
            break;
        case "bottom-left":
            props = {
                style: {
                    ml: -0.75
                },
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "left"
                },
                transformOrigin: {
                    vertical: "bottom",
                    horizontal: "left"
                }
            };
            break;
        case "bottom-center":
            props = {
                style: {},
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "center"
                },
                transformOrigin: {
                    vertical: "bottom",
                    horizontal: "center"
                }
            };
            break;
        case "bottom-right":
            props = {
                style: {
                    ml: 0.75
                },
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right"
                },
                transformOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                }
            };
            break;
        case "left-top":
            props = {
                style: {
                    mt: -0.75
                },
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "left"
                }
            };
            break;
        case "left-center":
            props = {
                anchorOrigin: {
                    vertical: "center",
                    horizontal: "right"
                },
                transformOrigin: {
                    vertical: "center",
                    horizontal: "left"
                }
            };
            break;
        case "left-bottom":
            props = {
                style: {
                    mt: 0.75
                },
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                },
                transformOrigin: {
                    vertical: "bottom",
                    horizontal: "left"
                }
            };
            break;
        case "right-top":
            props = {
                style: {
                    mt: -0.75
                },
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "left"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "right"
                }
            };
            break;
        case "right-center":
            props = {
                anchorOrigin: {
                    vertical: "center",
                    horizontal: "left"
                },
                transformOrigin: {
                    vertical: "center",
                    horizontal: "right"
                }
            };
            break;
        case "right-bottom":
            props = {
                style: {
                    mt: 0.75
                },
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left"
                },
                transformOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                }
            };
            break;
        // top-right
        default:
            props = {
                style: {
                    ml: 0.75
                },
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "right"
                }
            };
    }
    return props;
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./src/theme/css.ts
var css = __webpack_require__(71745);
;// CONCATENATED MODULE: ./src/components/custom-popover/styles.tsx
// @mui

// theme

// ----------------------------------------------------------------------
const StyledArrow = (0,styles.styled)("span")(({ arrow, theme })=>{
    const SIZE = 14;
    const POSITION = -(SIZE / 2) + 0.5;
    const topStyle = {
        top: POSITION,
        transform: "rotate(135deg)"
    };
    const bottomStyle = {
        bottom: POSITION,
        transform: "rotate(-45deg)"
    };
    const leftStyle = {
        left: POSITION,
        transform: "rotate(45deg)"
    };
    const rightStyle = {
        right: POSITION,
        transform: "rotate(-135deg)"
    };
    return {
        width: SIZE,
        height: SIZE,
        position: "absolute",
        borderBottomLeftRadius: SIZE / 4,
        clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
        border: `solid 1px ${(0,styles.alpha)(theme.palette.mode === "light" ? theme.palette.grey[500] : theme.palette.common.black, 0.12)}`,
        ...(0,css/* bgBlur */.Ls)({
            color: theme.palette.background.paper
        }),
        // Top
        ...arrow === "top-left" && {
            ...topStyle,
            left: 20
        },
        ...arrow === "top-center" && {
            ...topStyle,
            left: 0,
            right: 0,
            margin: "auto"
        },
        ...arrow === "top-right" && {
            ...topStyle,
            right: 20
        },
        // Bottom
        ...arrow === "bottom-left" && {
            ...bottomStyle,
            left: 20
        },
        ...arrow === "bottom-center" && {
            ...bottomStyle,
            left: 0,
            right: 0,
            margin: "auto"
        },
        ...arrow === "bottom-right" && {
            ...bottomStyle,
            right: 20
        },
        // Left
        ...arrow === "left-top" && {
            ...leftStyle,
            top: 20
        },
        ...arrow === "left-center" && {
            ...leftStyle,
            top: 0,
            bottom: 0,
            margin: "auto"
        },
        ...arrow === "left-bottom" && {
            ...leftStyle,
            bottom: 20
        },
        // Right
        ...arrow === "right-top" && {
            ...rightStyle,
            top: 20
        },
        ...arrow === "right-center" && {
            ...rightStyle,
            top: 0,
            bottom: 0,
            margin: "auto"
        },
        ...arrow === "right-bottom" && {
            ...rightStyle,
            bottom: 20
        }
    };
});

;// CONCATENATED MODULE: ./src/components/custom-popover/custom-popover.tsx
// @mui



//


// ----------------------------------------------------------------------
function CustomPopover({ open, children, arrow = "top-right", hiddenArrow, sx, ...other }) {
    const { style, anchorOrigin, transformOrigin } = getPosition(arrow);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Popover_default()), {
        open: Boolean(open),
        anchorEl: open,
        anchorOrigin: anchorOrigin,
        transformOrigin: transformOrigin,
        slotProps: {
            paper: {
                sx: {
                    width: "auto",
                    overflow: "inherit",
                    ...style,
                    [`& .${MenuItem.menuItemClasses.root}`]: {
                        "& svg": {
                            mr: 2,
                            flexShrink: 0
                        }
                    },
                    ...sx
                }
            }
        },
        children: [
            !hiddenArrow && /*#__PURE__*/ jsx_runtime_.jsx(StyledArrow, {
                arrow: arrow
            }),
            children
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/custom-popover/index.ts





/***/ }),

/***/ 66623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZP: () => (/* reexport */ FileThumbnail),
  ht: () => (/* reexport */ fileData),
  fH: () => (/* reexport */ fileFormat)
});

// UNUSED EXPORTS: DownloadButton, fileNameByUrl, fileThumb, fileTypeByUrl

;// CONCATENATED MODULE: ./src/components/file-thumbnail/utils.ts
//
// ----------------------------------------------------------------------
// Define more types here
const FORMAT_PDF = [
    "pdf"
];
const FORMAT_TEXT = [
    "txt"
];
const FORMAT_PHOTOSHOP = [
    "psd"
];
const FORMAT_WORD = [
    "doc",
    "docx"
];
const FORMAT_EXCEL = [
    "xls",
    "xlsx"
];
const FORMAT_ZIP = [
    "zip",
    "rar",
    "iso"
];
const FORMAT_ILLUSTRATOR = [
    "ai",
    "esp"
];
const FORMAT_POWERPOINT = [
    "ppt",
    "pptx"
];
const FORMAT_AUDIO = [
    "wav",
    "aif",
    "mp3",
    "aac"
];
const FORMAT_IMG = [
    "jpg",
    "jpeg",
    "gif",
    "bmp",
    "png",
    "svg"
];
const FORMAT_VIDEO = [
    "m4v",
    "avi",
    "mpg",
    "mp4",
    "webm"
];
const iconUrl = (icon)=>`/assets/icons/files/${icon}.svg`;
// ----------------------------------------------------------------------
function fileFormat(fileUrl) {
    let format;
    switch(fileUrl?.includes(fileTypeByUrl(fileUrl))){
        case FORMAT_TEXT.includes(fileTypeByUrl(fileUrl)):
            format = "txt";
            break;
        case FORMAT_ZIP.includes(fileTypeByUrl(fileUrl)):
            format = "zip";
            break;
        case FORMAT_AUDIO.includes(fileTypeByUrl(fileUrl)):
            format = "audio";
            break;
        case FORMAT_IMG.includes(fileTypeByUrl(fileUrl)):
            format = "image";
            break;
        case FORMAT_VIDEO.includes(fileTypeByUrl(fileUrl)):
            format = "video";
            break;
        case FORMAT_WORD.includes(fileTypeByUrl(fileUrl)):
            format = "word";
            break;
        case FORMAT_EXCEL.includes(fileTypeByUrl(fileUrl)):
            format = "excel";
            break;
        case FORMAT_POWERPOINT.includes(fileTypeByUrl(fileUrl)):
            format = "powerpoint";
            break;
        case FORMAT_PDF.includes(fileTypeByUrl(fileUrl)):
            format = "pdf";
            break;
        case FORMAT_PHOTOSHOP.includes(fileTypeByUrl(fileUrl)):
            format = "photoshop";
            break;
        case FORMAT_ILLUSTRATOR.includes(fileTypeByUrl(fileUrl)):
            format = "illustrator";
            break;
        default:
            format = fileTypeByUrl(fileUrl);
    }
    return format;
}
// ----------------------------------------------------------------------
function fileThumb(fileUrl) {
    let thumb;
    switch(fileFormat(fileUrl)){
        case "folder":
            thumb = iconUrl("ic_folder");
            break;
        case "txt":
            thumb = iconUrl("ic_txt");
            break;
        case "zip":
            thumb = iconUrl("ic_zip");
            break;
        case "audio":
            thumb = iconUrl("ic_audio");
            break;
        case "video":
            thumb = iconUrl("ic_video");
            break;
        case "word":
            thumb = iconUrl("ic_word");
            break;
        case "excel":
            thumb = iconUrl("ic_excel");
            break;
        case "powerpoint":
            thumb = iconUrl("ic_power_point");
            break;
        case "pdf":
            thumb = iconUrl("ic_pdf");
            break;
        case "photoshop":
            thumb = iconUrl("ic_pts");
            break;
        case "illustrator":
            thumb = iconUrl("ic_ai");
            break;
        case "image":
            thumb = iconUrl("ic_img");
            break;
        default:
            thumb = iconUrl("ic_file");
    }
    return thumb;
}
// ----------------------------------------------------------------------
function fileTypeByUrl(fileUrl = "") {
    return fileUrl && fileUrl.split(".").pop() || "";
}
// ----------------------------------------------------------------------
function fileNameByUrl(fileUrl) {
    return fileUrl.split("/").pop();
}
// ----------------------------------------------------------------------
function fileData(file) {
    // Url
    if (typeof file === "string") {
        return {
            key: file,
            preview: file,
            name: fileNameByUrl(file),
            type: fileTypeByUrl(file)
        };
    }
    // File
    return {
        key: file.preview,
        name: file.name,
        size: file.size,
        path: file.path,
        type: file.type,
        preview: file.preview,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate
    };
}

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tooltip/index.js
var Tooltip = __webpack_require__(11666);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(48060);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./src/theme/css.ts
var css = __webpack_require__(71745);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
;// CONCATENATED MODULE: ./src/components/file-thumbnail/download-button.tsx
// @mui



// theme

//

function DownloadButton({ onDownload }) {
    const theme = (0,styles.useTheme)();
    return /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
        onClick: onDownload,
        sx: {
            p: 0,
            top: 0,
            right: 0,
            width: 1,
            height: 1,
            zIndex: 9,
            opacity: 0,
            position: "absolute",
            borderRadius: "unset",
            justifyContent: "center",
            bgcolor: "grey.800",
            color: "common.white",
            transition: theme.transitions.create([
                "opacity"
            ]),
            "&:hover": {
                opacity: 1,
                ...(0,css/* bgBlur */.Ls)({
                    opacity: 0.64,
                    color: theme.palette.grey[900]
                })
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
            icon: "eva:arrow-circle-down-fill",
            width: 24
        })
    });
}

;// CONCATENATED MODULE: ./src/components/file-thumbnail/file-thumbnail.tsx




//


function FileThumbnail({ file, tooltip, imageView, onDownload, sx, imgSx }) {
    const { name = "", path = "", preview = "" } = fileData(file);
    const format = fileFormat(path || preview);
    const renderContent = format === "image" && imageView ? /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        component: "img",
        src: preview,
        sx: {
            width: 1,
            height: 1,
            flexShrink: 0,
            objectFit: "cover",
            ...imgSx
        }
    }) : /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        component: "img",
        src: fileThumb(format),
        sx: {
            width: 32,
            height: 32,
            flexShrink: 0,
            ...sx
        }
    });
    if (tooltip) {
        return /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
            title: name,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                flexShrink: 0,
                component: "span",
                alignItems: "center",
                justifyContent: "center",
                sx: {
                    width: "fit-content",
                    height: "inherit"
                },
                children: [
                    renderContent,
                    onDownload && /*#__PURE__*/ jsx_runtime_.jsx(DownloadButton, {
                        onDownload: onDownload
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            renderContent,
            onDownload && /*#__PURE__*/ jsx_runtime_.jsx(DownloadButton, {
                onDownload: onDownload
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/file-thumbnail/index.ts





/***/ }),

/***/ 76505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ iconify_iconify)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@iconify/react/dist/iconify.mjs
var iconify = __webpack_require__(20705);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
;// CONCATENATED MODULE: ./src/components/iconify/iconify.tsx


// icons

// @mui

const Iconify = /*#__PURE__*/ (0,react_.forwardRef)(({ icon, width = 20, sx, ...other }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        ref: ref,
        component: iconify/* Icon */.JO,
        className: "component-iconify",
        icon: icon,
        sx: {
            width,
            height: width,
            ...sx
        }
    }));
/* harmony default export */ const iconify_iconify = (Iconify);

;// CONCATENATED MODULE: ./src/components/iconify/index.ts




/***/ }),

/***/ 42892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ label)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
;// CONCATENATED MODULE: ./src/components/label/styles.ts
// @mui


// ----------------------------------------------------------------------
const StyledLabel = (0,styles.styled)(Box["default"])(({ theme, ownerState })=>{
    const isLight = theme.palette.mode === "light";
    const filledVariant = ownerState.variant === "filled";
    const outlinedVariant = ownerState.variant === "outlined";
    const softVariant = ownerState.variant === "soft";
    const defaultStyle = {
        ...ownerState.color === "default" && {
            // FILLED
            ...filledVariant && {
                color: isLight ? theme.palette.common.white : theme.palette.grey[800],
                backgroundColor: theme.palette.text.primary
            },
            // OUTLINED
            ...outlinedVariant && {
                backgroundColor: "transparent",
                color: theme.palette.text.primary,
                border: `2px solid ${theme.palette.text.primary}`
            },
            // SOFT
            ...softVariant && {
                color: theme.palette.text.secondary,
                backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.16)
            }
        }
    };
    const colorStyle = {
        ...ownerState.color !== "default" && {
            // FILLED
            ...filledVariant && {
                color: theme.palette[ownerState.color].contrastText,
                backgroundColor: theme.palette[ownerState.color].main
            },
            // OUTLINED
            ...outlinedVariant && {
                backgroundColor: "transparent",
                color: theme.palette[ownerState.color].main,
                border: `2px solid ${theme.palette[ownerState.color].main}`
            },
            // SOFT
            ...softVariant && {
                color: theme.palette[ownerState.color][isLight ? "dark" : "light"],
                backgroundColor: (0,styles.alpha)(theme.palette[ownerState.color].main, 0.16)
            }
        }
    };
    return {
        height: 24,
        minWidth: 24,
        lineHeight: 0,
        borderRadius: 6,
        cursor: "default",
        alignItems: "center",
        whiteSpace: "nowrap",
        display: "inline-flex",
        justifyContent: "center",
        textTransform: "capitalize",
        padding: theme.spacing(0, 0.75),
        fontSize: theme.typography.pxToRem(12),
        fontWeight: theme.typography.fontWeightBold,
        transition: theme.transitions.create("all", {
            duration: theme.transitions.duration.shorter
        }),
        ...defaultStyle,
        ...colorStyle
    };
});

;// CONCATENATED MODULE: ./src/components/label/label.tsx


// @mui


//

// ----------------------------------------------------------------------
const Label = /*#__PURE__*/ (0,react_.forwardRef)(({ children, color = "default", variant = "soft", startIcon, endIcon, sx, ...other }, ref)=>{
    const theme = (0,styles.useTheme)();
    const iconStyle = {
        width: 16,
        height: 16,
        "& svg, img": {
            width: 1,
            height: 1,
            objectFit: "cover"
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledLabel, {
        ref: ref,
        // component="span"
        ownerState: {
            color,
            variant
        },
        sx: {
            ...startIcon && {
                pl: 0.75
            },
            ...endIcon && {
                pr: 0.75
            },
            ...sx
        },
        theme: theme,
        children: [
            startIcon && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                sx: {
                    mr: 0.75,
                    ...iconStyle
                },
                children: [
                    " ",
                    startIcon,
                    " "
                ]
            }),
            children,
            endIcon && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                sx: {
                    ml: 0.75,
                    ...iconStyle
                },
                children: [
                    " ",
                    endIcon,
                    " "
                ]
            })
        ]
    });
});
/* harmony default export */ const label = (Label);

;// CONCATENATED MODULE: ./src/components/label/index.ts




/***/ }),

/***/ 86480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* reexport */ LoadingScreen),
  c: () => (/* reexport */ SplashScreen)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs + 19 modules
var motion_minimal = __webpack_require__(51730);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./src/components/logo/index.ts + 1 modules
var logo = __webpack_require__(9162);
;// CONCATENATED MODULE: ./src/components/loading-screen/splash-screen.tsx


// @mui


//

// ----------------------------------------------------------------------
function SplashScreen({ sx, ...other }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        sx: {
            right: 0,
            width: 1,
            bottom: 0,
            height: 1,
            zIndex: 9998,
            display: "flex",
            position: "fixed",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "background.default",
            ...sx
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(motion_minimal.m.div, {
                    animate: {
                        scale: [
                            1,
                            0.9,
                            0.9,
                            1,
                            1
                        ],
                        opacity: [
                            1,
                            0.48,
                            0.48,
                            1,
                            1
                        ]
                    },
                    transition: {
                        duration: 2,
                        ease: "easeInOut",
                        repeatDelay: 1,
                        repeat: Infinity
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(logo/* default */.Z, {
                        disabledLink: true,
                        sx: {
                            width: 64,
                            height: 64
                        }
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                    component: motion_minimal.m.div,
                    animate: {
                        scale: [
                            1.6,
                            1,
                            1,
                            1.6,
                            1.6
                        ],
                        rotate: [
                            270,
                            0,
                            0,
                            270,
                            270
                        ],
                        opacity: [
                            0.25,
                            1,
                            1,
                            1,
                            0.25
                        ],
                        borderRadius: [
                            "25%",
                            "25%",
                            "50%",
                            "50%",
                            "25%"
                        ]
                    },
                    transition: {
                        ease: "linear",
                        duration: 3.2,
                        repeat: Infinity
                    },
                    sx: {
                        width: 100,
                        height: 100,
                        position: "absolute",
                        border: (theme)=>`solid 3px ${(0,styles.alpha)(theme.palette.primary.dark, 0.24)}`
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                    component: motion_minimal.m.div,
                    animate: {
                        scale: [
                            1,
                            1.2,
                            1.2,
                            1,
                            1
                        ],
                        rotate: [
                            0,
                            270,
                            270,
                            0,
                            0
                        ],
                        opacity: [
                            1,
                            0.25,
                            0.25,
                            0.25,
                            1
                        ],
                        borderRadius: [
                            "25%",
                            "25%",
                            "50%",
                            "50%",
                            "25%"
                        ]
                    },
                    transition: {
                        ease: "linear",
                        duration: 3.2,
                        repeat: Infinity
                    },
                    sx: {
                        width: 120,
                        height: 120,
                        position: "absolute",
                        border: (theme)=>`solid 8px ${(0,styles.alpha)(theme.palette.primary.dark, 0.24)}`
                    }
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/LinearProgress/index.js
var LinearProgress = __webpack_require__(71326);
var LinearProgress_default = /*#__PURE__*/__webpack_require__.n(LinearProgress);
;// CONCATENATED MODULE: ./src/components/loading-screen/loading-screen.tsx
// @mui



// ----------------------------------------------------------------------
function LoadingScreen({ sx, ...other }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        sx: {
            px: 5,
            width: 1,
            flexGrow: 1,
            minHeight: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ...sx
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((LinearProgress_default()), {
            color: "inherit",
            sx: {
                width: 1,
                maxWidth: 360
            }
        })
    });
}

;// CONCATENATED MODULE: ./src/components/loading-screen/index.ts




/***/ }),

/***/ 9162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ logo)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(56995);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./src/routes/components/index.ts + 1 modules
var components = __webpack_require__(87362);
;// CONCATENATED MODULE: ./src/components/logo/logo.tsx


// @mui



// routes

const Logo = /*#__PURE__*/ (0,react_.forwardRef)(({ disabledLink = false, sx, ...other }, ref)=>{
    const theme = (0,styles.useTheme)();
    const PRIMARY_LIGHT = theme.palette.primary.light;
    const PRIMARY_MAIN = theme.palette.primary.main;
    const PRIMARY_DARK = theme.palette.primary.dark;
    // OR using local (public folder)
    // -------------------------------------------------------
    // const logo = (
    //   <Box
    //     component="img"
    //     src="/logo/logo_single.svg" => your path
    //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
    //   />
    // );
    const logo = /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        ref: ref,
        component: "div",
        sx: {
            width: 40,
            height: 40,
            display: "inline-flex",
            ...sx
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: "/logo/logo_single.png",
            alt: "Logo"
        })
    });
    if (disabledLink) {
        return logo;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
        component: components/* RouterLink */.r,
        href: "/",
        sx: {
            display: "contents"
        },
        children: logo
    });
});
/* harmony default export */ const logo = (Logo);

;// CONCATENATED MODULE: ./src/components/logo/index.ts



/***/ }),

/***/ 26188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProgressBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20291);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49864);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function ProgressBar() {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        nprogress__WEBPACK_IMPORTED_MODULE_2___default().configure({
            showSpinner: false
        });
        const handleAnchorClick = (event)=>{
            const targetUrl = event.currentTarget.href;
            const currentUrl = window.location.href;
            if (targetUrl !== currentUrl) {
                nprogress__WEBPACK_IMPORTED_MODULE_2___default().start();
            }
        };
        const handleMutation = ()=>{
            const anchorElements = document.querySelectorAll("a[href]");
            anchorElements.forEach((anchor)=>anchor.addEventListener("click", handleAnchorClick));
        };
        const mutationObserver = new MutationObserver(handleMutation);
        mutationObserver.observe(document, {
            childList: true,
            subtree: true
        });
        window.history.pushState = new Proxy(window.history.pushState, {
            apply: (target, thisArg, argArray)=>{
                nprogress__WEBPACK_IMPORTED_MODULE_2___default().done();
                return target.apply(thisArg, argArray);
            }
        });
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["default"], {});
}


/***/ }),

/***/ 49864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StyledProgressBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83476);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_GlobalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53868);
/* __next_internal_client_entry_do_not_use__ default auto */ 
// @mui


// ----------------------------------------------------------------------
function StyledProgressBar() {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const inputGlobalStyles = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_GlobalStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
        styles: {
            "#nprogress": {
                pointerEvents: "none",
                ".bar": {
                    top: 0,
                    left: 0,
                    height: 3,
                    zIndex: 9999,
                    width: "100%",
                    position: "fixed",
                    backgroundColor: theme.palette.primary.main,
                    boxShadow: `0 0 2px ${theme.palette.primary.main}`
                },
                ".peg": {
                    right: 0,
                    opacity: 1,
                    width: 100,
                    height: "100%",
                    display: "block",
                    position: "absolute",
                    transform: "rotate(3deg) translate(0px, -4px)",
                    boxShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 5px ${theme.palette.primary.main}`
                }
            }
        }
    });
    return inputGlobalStyles;
}


/***/ }),

/***/ 65026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ scrollbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/simplebar-react/dist/index.cjs
var dist = __webpack_require__(27704);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
;// CONCATENATED MODULE: ./src/components/scrollbar/styles.ts

// @mui

// ----------------------------------------------------------------------
const StyledRootScrollbar = (0,styles.styled)("div")(()=>({
        flexGrow: 1,
        height: "100%",
        overflow: "hidden"
    }));
const StyledScrollbar = (0,styles.styled)((dist_default()))(({ theme })=>({
        maxHeight: "100%",
        "& .simplebar-scrollbar": {
            "&:before": {
                backgroundColor: (0,styles.alpha)(theme.palette.grey[600], 0.48)
            },
            "&.simplebar-visible:before": {
                opacity: 1
            }
        },
        "& .simplebar-mask": {
            zIndex: "inherit"
        }
    }));

;// CONCATENATED MODULE: ./src/components/scrollbar/scrollbar.tsx


// @mui

//

// ----------------------------------------------------------------------
const Scrollbar = /*#__PURE__*/ (0,react_.forwardRef)(({ children, sx, ...other }, ref)=>{
    const userAgent = typeof navigator === "undefined" ? "SSR" : navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    if (isMobile) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
            ref: ref,
            sx: {
                overflow: "auto",
                ...sx
            },
            ...other,
            children: children
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledRootScrollbar, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledScrollbar, {
            scrollableNodeProps: {
                ref
            },
            clickOnTrack: false,
            sx: sx,
            children: children
        })
    });
});
/* harmony default export */ const scrollbar = (/*#__PURE__*/(0,react_.memo)(Scrollbar));

;// CONCATENATED MODULE: ./src/components/scrollbar/index.ts




/***/ }),

/***/ 271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ SearchNotFound)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Paper/index.js
var Paper = __webpack_require__(52694);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper);
;// CONCATENATED MODULE: ./src/components/search-not-found/search-not-found.tsx



function SearchNotFound({ query, sx, ...other }) {
    return query ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Paper_default()), {
        sx: {
            bgcolor: "unset",
            textAlign: "center",
            ...sx
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h6",
                gutterBottom: true,
                children: "Not Found"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                variant: "body2",
                children: [
                    "No results found for \xa0",
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                        children: [
                            '"',
                            query,
                            '"'
                        ]
                    }),
                    ".",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    " Try checking for typos or using complete words."
                ]
            })
        ]
    }) : /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
        variant: "body2",
        sx: sx,
        children: "Please enter keywords"
    });
}

;// CONCATENATED MODULE: ./src/components/search-not-found/index.ts



/***/ }),

/***/ 24956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* reexport safe */ _settings_context__WEBPACK_IMPORTED_MODULE_0__.useSettingsContext)
/* harmony export */ });
/* harmony import */ var _settings_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83781);
/* harmony import */ var _settings_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24172);




/***/ }),

/***/ 83781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContext: () => (/* binding */ SettingsContext),
/* harmony export */   useSettingsContext: () => (/* binding */ useSettingsContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ SettingsContext,useSettingsContext auto */ 
// ----------------------------------------------------------------------
const SettingsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useSettingsContext = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SettingsContext);
    if (!context) throw new Error("useSettingsContext must be use inside SettingsProvider");
    return context;
};


/***/ }),

/***/ 24172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsProvider: () => (/* binding */ SettingsProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43490);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_hooks_use_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63343);
/* harmony import */ var src_utils_storage_available__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55770);
/* harmony import */ var _settings_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83781);
/* __next_internal_client_entry_do_not_use__ SettingsProvider auto */ 


// hooks

// utils


function SettingsProvider({ children, defaultSettings }) {
    const [openDrawer, setOpenDrawer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [settings, setSettings] = (0,src_hooks_use_local_storage__WEBPACK_IMPORTED_MODULE_3__/* .useLocalStorage */ ._)("settings", defaultSettings);
    const isArabic = (0,src_utils_storage_available__WEBPACK_IMPORTED_MODULE_5__/* .localStorageGetItem */ .G)("i18nextLng") === "ar";
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (isArabic) {
            onChangeDirectionByLang("ar");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isArabic
    ]);
    const onUpdate = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((name, value)=>{
        setSettings((prevState)=>({
                ...prevState,
                [name]: value
            }));
    }, [
        setSettings
    ]);
    // Direction by lang
    const onChangeDirectionByLang = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((lang)=>{
        onUpdate("themeDirection", lang === "ar" ? "rtl" : "ltr");
    }, [
        onUpdate
    ]);
    // Reset
    const onReset = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        setSettings(defaultSettings);
    }, [
        defaultSettings,
        setSettings
    ]);
    // Drawer
    const onToggleDrawer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        setOpenDrawer((prev)=>!prev);
    }, []);
    const onCloseDrawer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        setOpenDrawer(false);
    }, []);
    const canReset = !lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(settings, defaultSettings);
    const memoizedValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>({
            ...settings,
            onUpdate,
            // Direction
            onChangeDirectionByLang,
            // Reset
            canReset,
            onReset,
            // Drawer
            open: openDrawer,
            onToggle: onToggleDrawer,
            onClose: onCloseDrawer
        }), [
        onReset,
        onUpdate,
        settings,
        canReset,
        openDrawer,
        onCloseDrawer,
        onToggleDrawer,
        onChangeDirectionByLang
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_settings_context__WEBPACK_IMPORTED_MODULE_4__.SettingsContext.Provider, {
        value: memoizedValue,
        children: children
    });
}


/***/ }),

/***/ 98118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SettingsDrawer)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Badge/index.js
var Badge = __webpack_require__(42454);
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Divider/index.js
var Divider = __webpack_require__(61272);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tooltip/index.js
var Tooltip = __webpack_require__(11666);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(48060);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Drawer/index.js
var Drawer = __webpack_require__(20094);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer);
// EXTERNAL MODULE: ./src/theme/css.ts
var css = __webpack_require__(71745);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
// EXTERNAL MODULE: ./src/components/scrollbar/index.ts + 2 modules
var scrollbar = __webpack_require__(65026);
// EXTERNAL MODULE: ./src/components/settings/context/index.ts
var context = __webpack_require__(24956);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ButtonBase/index.js
var ButtonBase = __webpack_require__(19937);
var ButtonBase_default = /*#__PURE__*/__webpack_require__.n(ButtonBase);
// EXTERNAL MODULE: ./src/components/svg-color/index.ts + 1 modules
var svg_color = __webpack_require__(99066);
;// CONCATENATED MODULE: ./src/components/settings/drawer/base-option.tsx
// @mui




//

function BaseOptions({ icons, options, value, onChange }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
        direction: "row",
        spacing: 2,
        children: options.map((option, index)=>{
            const selected = value === option;
            return /*#__PURE__*/ jsx_runtime_.jsx((ButtonBase_default()), {
                onClick: ()=>onChange(option),
                sx: {
                    width: 1,
                    height: 80,
                    borderRadius: 1,
                    border: (theme)=>`solid 1px ${(0,styles.alpha)(theme.palette.grey[500], 0.08)}`,
                    ...selected && {
                        bgcolor: "background.paper",
                        boxShadow: (theme)=>`-24px 8px 24px -4px ${(0,styles.alpha)(theme.palette.mode === "light" ? theme.palette.grey[500] : theme.palette.common.black, 0.08)}`
                    },
                    "& .svg-color": {
                        background: (theme)=>`linear-gradient(135deg, ${theme.palette.grey[500]} 0%, ${theme.palette.grey[600]} 100%)`,
                        ...selected && {
                            background: (theme)=>`linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`
                        }
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(svg_color/* default */.Z, {
                    src: `/assets/icons/setting/ic_${index === 0 ? icons[0] : icons[1]}.svg`
                })
            }, option);
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
;// CONCATENATED MODULE: ./src/components/settings/drawer/layout-options.tsx
// @mui





function LayoutOptions({ options, value, onChange }) {
    const theme = (0,styles.useTheme)();
    const renderNav = (option, selected)=>{
        const background = `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`;
        const baseStyles = {
            flexShrink: 0,
            borderRadius: 0.5,
            bgcolor: "grey.500"
        };
        const circle = /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
            sx: {
                ...baseStyles,
                width: 8,
                height: 8,
                ...selected && {
                    background
                }
            }
        });
        const primaryItem = /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
            sx: {
                ...baseStyles,
                width: 1,
                height: 3,
                opacity: 0.48,
                ...option === "horizontal" && {
                    width: 12
                },
                ...selected && {
                    background
                }
            }
        });
        const secondaryItem = /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
            sx: {
                ...baseStyles,
                width: 1,
                height: 3,
                maxWidth: 12,
                opacity: 0.24,
                ...option === "horizontal" && {
                    width: 8
                },
                ...selected && {
                    background
                }
            }
        });
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
            spacing: 0.5,
            flexShrink: 0,
            direction: option === "horizontal" ? "row" : "column",
            sx: {
                p: 0.5,
                width: 28,
                height: 1,
                borderRight: `solid 1px ${(0,styles.alpha)(theme.palette.grey[500], 0.08)}`,
                ...option === "mini" && {
                    width: 16
                },
                ...option === "horizontal" && {
                    width: 1,
                    height: 16,
                    alignItems: "center",
                    borderRight: "unset",
                    borderBottom: `solid 1px ${(0,styles.alpha)(theme.palette.grey[500], 0.08)}`
                }
            },
            children: [
                circle,
                primaryItem,
                secondaryItem
            ]
        });
    };
    const renderContent = (selected)=>/*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
            sx: {
                p: 0.5,
                flexGrow: 1,
                height: 1,
                width: 1
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                sx: {
                    width: 1,
                    height: 1,
                    opacity: 0.08,
                    borderRadius: 0.5,
                    bgcolor: "grey.500",
                    ...selected && {
                        opacity: 0.24,
                        background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`
                    }
                }
            })
        });
    return /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
        direction: "row",
        spacing: 2,
        children: options.map((option)=>{
            const selected = value === option;
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ButtonBase_default()), {
                onClick: ()=>onChange(option),
                sx: {
                    p: 0,
                    width: 1,
                    height: 56,
                    borderRadius: 1,
                    border: `solid 1px ${(0,styles.alpha)(theme.palette.grey[500], 0.08)}`,
                    ...selected && {
                        bgcolor: "background.paper",
                        boxShadow: `-24px 8px 24px -4px ${(0,styles.alpha)(theme.palette.mode === "light" ? theme.palette.grey[500] : theme.palette.common.black, 0.08)}`
                    },
                    ...option === "horizontal" && {
                        flexDirection: "column"
                    }
                },
                children: [
                    renderNav(option, selected),
                    renderContent(selected)
                ]
            }, option);
        })
    });
}

// EXTERNAL MODULE: ./src/theme/options/presets.ts
var presets = __webpack_require__(41367);
;// CONCATENATED MODULE: ./src/components/settings/drawer/presets-options.tsx
// @mui




// theme

function PresetsOptions({ value, onChange }) {
    const options = presets/* primaryPresets */.b.map((color)=>({
            name: color.name,
            value: color.main
        }));
    return /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        columnGap: 2,
        rowGap: 1.5,
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        children: options.map((option)=>{
            const selected = value === option.name;
            return /*#__PURE__*/ jsx_runtime_.jsx((ButtonBase_default()), {
                onClick: ()=>onChange(option.name),
                sx: {
                    height: 56,
                    borderRadius: 1,
                    border: (theme)=>`solid 1px ${(0,styles.alpha)(theme.palette.grey[500], 0.08)}`,
                    ...selected && {
                        borderColor: "transparent",
                        bgcolor: (0,styles.alpha)(option.value, 0.08)
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                    sx: {
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        bgcolor: option.value,
                        transition: (theme)=>theme.transitions.create([
                                "transform"
                            ], {
                                duration: theme.transitions.duration.shorter
                            }),
                        ...selected && {
                            transform: "scale(2)"
                        }
                    }
                })
            }, option.name);
        })
    });
}

;// CONCATENATED MODULE: ./src/components/settings/drawer/stretch-options.tsx
// @mui





//

function StretchOptions({ value, onChange }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((ButtonBase_default()), {
        onClick: onChange,
        sx: {
            width: 1,
            height: 80,
            borderRadius: 1,
            color: "text.disabled",
            border: (theme)=>`solid 1px ${(0,styles.alpha)(theme.palette.grey[500], 0.08)}`,
            ...value && {
                bgcolor: "background.paper",
                color: (theme)=>theme.palette.primary.main,
                boxShadow: (theme)=>`-24px 8px 24px -4px ${(0,styles.alpha)(theme.palette.mode === "light" ? theme.palette.grey[500] : theme.palette.common.black, 0.08)}`
            }
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            sx: {
                width: 0.24,
                transition: (theme)=>theme.transitions.create([
                        "width"
                    ]),
                ...value && {
                    width: 0.5
                }
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: value ? "eva:arrow-ios-back-fill" : "eva:arrow-ios-forward-fill",
                    sx: {
                        color: (theme)=>`linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                    sx: {
                        flexGrow: 1,
                        borderBottom: `dashed 1.5px currentcolor`
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: value ? "eva:arrow-ios-forward-fill" : "eva:arrow-ios-back-fill",
                    sx: {
                        color: (theme)=>`linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`
                    }
                })
            ]
        })
    });
}

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/components/settings/drawer/fullscreen-option.tsx


// @mui



//

// ----------------------------------------------------------------------
function FullScreenOption() {
    const [fullscreen, setFullscreen] = (0,react_.useState)(false);
    const onToggleFullScreen = (0,react_.useCallback)(()=>{
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setFullscreen(true);
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
            setFullscreen(false);
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        sx: {
            p: 2.5
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ButtonBase_default()), {
            onClick: onToggleFullScreen,
            sx: {
                width: 1,
                height: 48,
                borderRadius: 1,
                color: "text.disabled",
                typography: "subtitle2",
                border: (theme)=>`solid 1px ${(0,styles.alpha)(theme.palette.grey[500], 0.08)}`,
                ...fullscreen && {
                    color: "text.primary"
                },
                "& .svg-color": {
                    background: (theme)=>`linear-gradient(135deg, ${theme.palette.grey[500]} 0%, ${theme.palette.grey[600]} 100%)`,
                    ...fullscreen && {
                        background: (theme)=>`linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`
                    }
                }
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(svg_color/* default */.Z, {
                    src: `/assets/icons/setting/${fullscreen ? "ic_exit_full_screen" : "ic_full_screen"}.svg`,
                    sx: {
                        width: 16,
                        height: 16,
                        mr: 1
                    }
                }),
                fullscreen ? "Exit Fullscreen" : "Fullscreen"
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/settings/drawer/settings-drawer.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
// @mui








// theme

//


//






// ----------------------------------------------------------------------
function SettingsDrawer() {
    const theme = (0,styles.useTheme)();
    const settings = (0,context/* useSettingsContext */.K)();
    const labelStyles = {
        mb: 1.5,
        color: "text.disabled",
        fontWeight: "fontWeightSemiBold"
    };
    const renderHead = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        direction: "row",
        alignItems: "center",
        justifyContent: "space-between",
        sx: {
            py: 2,
            pr: 1,
            pl: 2.5
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h6",
                sx: {
                    flexGrow: 1
                },
                children: "Settings"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                title: "Reset",
                children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                    onClick: settings.onReset,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                        color: "error",
                        variant: "dot",
                        invisible: !settings.canReset,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "solar:restart-bold"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                onClick: settings.onClose,
                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: "mingcute:close-line"
                })
            })
        ]
    });
    const renderMode = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "caption",
                component: "div",
                sx: {
                    ...labelStyles
                },
                children: "Mode"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BaseOptions, {
                value: settings.themeMode,
                onChange: (newValue)=>settings.onUpdate("themeMode", newValue),
                options: [
                    "light",
                    "dark"
                ],
                icons: [
                    "sun",
                    "moon"
                ]
            })
        ]
    });
    const renderContrast = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "caption",
                component: "div",
                sx: {
                    ...labelStyles
                },
                children: "Contrast"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BaseOptions, {
                value: settings.themeContrast,
                onChange: (newValue)=>settings.onUpdate("themeContrast", newValue),
                options: [
                    "default",
                    "bold"
                ],
                icons: [
                    "contrast",
                    "contrast_bold"
                ]
            })
        ]
    });
    const renderDirection = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "caption",
                component: "div",
                sx: {
                    ...labelStyles
                },
                children: "Direction"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BaseOptions, {
                value: settings.themeDirection,
                onChange: (newValue)=>settings.onUpdate("themeDirection", newValue),
                options: [
                    "ltr",
                    "rtl"
                ],
                icons: [
                    "align_left",
                    "align_right"
                ]
            })
        ]
    });
    const renderLayout = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "caption",
                component: "div",
                sx: {
                    ...labelStyles
                },
                children: "Layout"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(LayoutOptions, {
                value: settings.themeLayout,
                onChange: (newValue)=>settings.onUpdate("themeLayout", newValue),
                options: [
                    "vertical",
                    "horizontal",
                    "mini"
                ]
            })
        ]
    });
    const renderStretch = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                variant: "caption",
                component: "div",
                sx: {
                    ...labelStyles,
                    display: "inline-flex",
                    alignItems: "center"
                },
                children: [
                    "Stretch",
                    /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                        title: "Only available at large resolutions > 1600px (xl)",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "eva:info-outline",
                            width: 16,
                            sx: {
                                ml: 0.5
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StretchOptions, {
                value: settings.themeStretch,
                onChange: ()=>settings.onUpdate("themeStretch", !settings.themeStretch)
            })
        ]
    });
    const renderPresets = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "caption",
                component: "div",
                sx: {
                    ...labelStyles
                },
                children: "Presets"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PresetsOptions, {
                value: settings.themeColorPresets,
                onChange: (newValue)=>settings.onUpdate("themeColorPresets", newValue)
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Drawer_default()), {
        anchor: "right",
        open: settings.open,
        onClose: settings.onClose,
        slotProps: {
            backdrop: {
                invisible: true
            }
        },
        sx: {
            [`& .${Drawer.drawerClasses.paper}`]: {
                ...(0,css/* paper */.uS)({
                    theme,
                    bgcolor: theme.palette.background.default
                }),
                width: 280
            }
        },
        children: [
            renderHead,
            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                sx: {
                    borderStyle: "dashed"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(scrollbar/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                    spacing: 3,
                    sx: {
                        p: 3
                    },
                    children: [
                        renderMode,
                        renderContrast,
                        renderDirection,
                        renderLayout,
                        renderStretch,
                        renderPresets
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FullScreenOption, {})
        ]
    });
}


/***/ }),

/***/ 2701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K$: () => (/* reexport */ context/* useSettingsContext */.K)
});

// UNUSED EXPORTS: SettingsDrawer, SettingsProvider

// EXTERNAL MODULE: ./src/components/settings/context/index.ts
var context = __webpack_require__(24956);
// EXTERNAL MODULE: ./src/components/settings/drawer/settings-drawer.tsx + 5 modules
var settings_drawer = __webpack_require__(98118);
;// CONCATENATED MODULE: ./src/components/settings/drawer/index.ts


;// CONCATENATED MODULE: ./src/components/settings/index.ts





/***/ }),

/***/ 80941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ds: () => (/* reexport safe */ notistack__WEBPACK_IMPORTED_MODULE_0__.useSnackbar)
/* harmony export */ });
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68703);
/* harmony import */ var _snackbar_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73682);




/***/ }),

/***/ 73682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SnackbarProvider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/notistack/index.js
var notistack = __webpack_require__(68703);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Collapse/index.js
var Collapse = __webpack_require__(31022);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(48060);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
// EXTERNAL MODULE: ./src/components/settings/index.ts + 1 modules
var components_settings = __webpack_require__(2701);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
;// CONCATENATED MODULE: ./src/components/snackbar/styles.ts

// @mui

// ----------------------------------------------------------------------
const StyledNotistack = (0,styles.styled)(notistack.MaterialDesignContent)(({ theme })=>{
    const isLight = theme.palette.mode === "light";
    return {
        "& #notistack-snackbar": {
            ...theme.typography.subtitle2,
            padding: 0,
            flexGrow: 1
        },
        "&.notistack-MuiContent": {
            padding: theme.spacing(0.5),
            paddingRight: theme.spacing(2),
            color: theme.palette.text.primary,
            boxShadow: theme.customShadows.z8,
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.palette.background.paper
        },
        "&.notistack-MuiContent-default": {
            padding: theme.spacing(1),
            color: isLight ? theme.palette.common.white : theme.palette.grey[800],
            backgroundColor: isLight ? theme.palette.grey[800] : theme.palette.common.white
        }
    };
});
const StyledIcon = (0,styles.styled)("span")(({ color, theme })=>({
        width: 44,
        height: 44,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: theme.spacing(1.5),
        color: theme.palette[color].main,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: (0,styles.alpha)(theme.palette[color].main, 0.16)
    }));

;// CONCATENATED MODULE: ./src/components/snackbar/snackbar-provider.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


// @mui


//


//

function SnackbarProvider({ children }) {
    const settings = (0,components_settings/* useSettingsContext */.K$)();
    const isRTL = settings.themeDirection === "rtl";
    const notistackRef = (0,react_.useRef)(null);
    return /*#__PURE__*/ jsx_runtime_.jsx(notistack.SnackbarProvider, {
        ref: notistackRef,
        maxSnack: 5,
        preventDuplicate: true,
        autoHideDuration: 3000,
        TransitionComponent: isRTL ? (Collapse_default()) : undefined,
        variant: "success" // Set default variant
        ,
        anchorOrigin: {
            vertical: "top",
            horizontal: "right"
        },
        iconVariant: {
            info: /*#__PURE__*/ jsx_runtime_.jsx(StyledIcon, {
                color: "info",
                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: "eva:info-fill",
                    width: 24
                })
            }),
            success: /*#__PURE__*/ jsx_runtime_.jsx(StyledIcon, {
                color: "success",
                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: "eva:checkmark-circle-2-fill",
                    width: 24
                })
            }),
            warning: /*#__PURE__*/ jsx_runtime_.jsx(StyledIcon, {
                color: "warning",
                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: "eva:alert-triangle-fill",
                    width: 24
                })
            }),
            error: /*#__PURE__*/ jsx_runtime_.jsx(StyledIcon, {
                color: "error",
                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: "solar:danger-bold",
                    width: 24
                })
            })
        },
        Components: {
            default: StyledNotistack,
            info: StyledNotistack,
            success: StyledNotistack,
            warning: StyledNotistack,
            error: StyledNotistack
        },
        // with close as default
        action: (snackbarId)=>/*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                size: "small",
                onClick: ()=>(0,notistack.closeSnackbar)(snackbarId),
                sx: {
                    p: 0.5
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    width: 16,
                    icon: "mingcute:close-line"
                })
            }),
        children: children
    });
}


/***/ }),

/***/ 99066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ svg_color)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
;// CONCATENATED MODULE: ./src/components/svg-color/svg-color.tsx


// @mui

const SvgColor = /*#__PURE__*/ (0,react_.forwardRef)(({ src, sx, ...other }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        component: "span",
        className: "svg-color",
        ref: ref,
        sx: {
            width: 24,
            height: 24,
            display: "inline-block",
            bgcolor: "currentColor",
            mask: `url(${src}) no-repeat center / contain`,
            WebkitMask: `url(${src}) no-repeat center / contain`,
            ...sx
        }
    }));
/* harmony default export */ const svg_color = (SvgColor);

;// CONCATENATED MODULE: ./src/components/svg-color/index.ts



/***/ }),

/***/ 45060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $t: () => (/* binding */ MAPBOX_API),
/* harmony export */   E0: () => (/* binding */ HOST_API),
/* harmony export */   pY: () => (/* binding */ ASSETS_API),
/* harmony export */   wd: () => (/* binding */ PATH_AFTER_LOGIN)
/* harmony export */ });
/* unused harmony exports FIREBASE_API, AMPLIFY_API, AUTH0_API */
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48611);
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
const MAPBOX_API = "";
// ROOT PATH AFTER LOGIN SUCCESSFUL
const PATH_AFTER_LOGIN = src_routes_paths__WEBPACK_IMPORTED_MODULE_0__/* .paths */ .H.dashboard.root; // as '/dashboard'


/***/ }),

/***/ 80935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ useBoolean)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ useBoolean auto */ 
function useBoolean(defaultValue) {
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!!defaultValue);
    const onTrue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setValue(true);
    }, []);
    const onFalse = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setValue(false);
    }, []);
    const onToggle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setValue((prev)=>!prev);
    }, []);
    return {
        value,
        onTrue,
        onFalse,
        onToggle,
        setValue
    };
}


/***/ }),

/***/ 63343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ useLocalStorage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_utils_storage_available__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55770);

// utils

// ----------------------------------------------------------------------
function useLocalStorage(key, defaultValue) {
    const storageAvailable = (0,src_utils_storage_available__WEBPACK_IMPORTED_MODULE_1__/* .localStorageAvailable */ .V)();
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{
        const storedValue = storageAvailable ? localStorage.getItem(key) : null;
        return storedValue === null ? defaultValue : JSON.parse(storedValue);
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const listener = (e)=>{
            if (e.storageArea === localStorage && e.key === key) {
                setValue(e.newValue ? JSON.parse(e.newValue) : e.newValue);
            }
        };
        window.addEventListener("storage", listener);
        return ()=>{
            window.removeEventListener("storage", listener);
        };
    }, [
        key,
        defaultValue
    ]);
    const setValueInLocalStorage = (newValue)=>{
        setValue((currentValue)=>{
            const result = typeof newValue === "function" ? newValue(currentValue) : newValue;
            if (storageAvailable) {
                localStorage.setItem(key, JSON.stringify(result));
            }
            return result;
        });
    };
    return [
        value,
        setValueInLocalStorage
    ];
}


/***/ }),

/***/ 63820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ useMockedUser)
/* harmony export */ });
/* harmony import */ var src_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99011);

// TO GET THE USER FROM THE AUTHCONTEXT, YOU CAN USE
// CHANGE:
// import { useMockedUser } from 'src/hooks/use-mocked-user';
// const { user } = useMockedUser();
// TO:
// import { useAuthContext } from 'src/auth/hooks';
// const { user } = useAuthContext();
// ----------------------------------------------------------------------
function useMockedUser() {
    const user = {
        id: "8864c717-587d-472a-929a-8e5f298024da-0",
        displayName: "Jaydon Frankie",
        email: "demo@minimals.cc",
        password: "demo1234",
        photoURL: src_mock__WEBPACK_IMPORTED_MODULE_0__/* ._mock */ .QJ.image.avatar(24),
        phoneNumber: "+40 777666555",
        country: "United States",
        address: "90210 Broadway Blvd",
        state: "California",
        city: "San Francisco",
        zipCode: "94116",
        about: "Praesent turpis. Phasellus viverra nulla ut metus varius laoreet. Phasellus tempus.",
        role: "admin",
        isPublic: true
    };
    return {
        user
    };
}


/***/ }),

/***/ 21885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ useOffSetTop)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54997);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ useOffSetTop auto */ 

function useOffSetTop(top = 0, options) {
    const { scrollY } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__/* .useScroll */ .v)(options);
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const onOffSetTop = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        scrollY.on("change", (scrollHeight)=>{
            if (scrollHeight > top) {
                setValue(true);
            } else {
                setValue(false);
            }
        });
    }, [
        scrollY,
        top
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        onOffSetTop();
    }, [
        onOffSetTop
    ]);
    const memoizedValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>value, [
        value
    ]);
    return memoizedValue;
} // Usage
 // const offset = useOffSetTop(100);
 // Or
 // const offset = useOffSetTop(100, {
 //   container: ref,
 // });


/***/ }),

/***/ 59099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ useResponsive),
/* harmony export */   z: () => (/* binding */ useWidth)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83476);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72586);
// @mui


function useResponsive(query, start, end) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
    const mediaUp = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__["default"])(theme.breakpoints.up(start));
    const mediaDown = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__["default"])(theme.breakpoints.down(start));
    const mediaBetween = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__["default"])(theme.breakpoints.between(start, end));
    const mediaOnly = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__["default"])(theme.breakpoints.only(start));
    if (query === "up") {
        return mediaUp;
    }
    if (query === "down") {
        return mediaDown;
    }
    if (query === "between") {
        return mediaBetween;
    }
    return mediaOnly;
}
function useWidth() {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
    const keys = [
        ...theme.breakpoints.keys
    ].reverse();
    return keys.reduce((output, key)=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const matches = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__["default"])(theme.breakpoints.up(key));
        return !output && matches ? key : output;
    }, null) || "xs";
}


/***/ }),

/***/ 26053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x4: () => (/* reexport */ AccountPopover),
  c3: () => (/* reexport */ ContactsPopover),
  _s: () => (/* reexport */ HeaderShadow),
  _z: () => (/* reexport */ HeaderSimple),
  T4: () => (/* reexport */ LanguagePopover),
  TX: () => (/* reexport */ LoginButton),
  S_: () => (/* reexport */ NavToggleButton),
  Q$: () => (/* reexport */ NavUpgrade),
  Yr: () => (/* reexport */ NotificationsPopover),
  wD: () => (/* reexport */ searchbar),
  ls: () => (/* reexport */ SettingsButton)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/autosuggest-highlight/parse/index.js
var parse = __webpack_require__(41872);
var parse_default = /*#__PURE__*/__webpack_require__.n(parse);
// EXTERNAL MODULE: ./node_modules/autosuggest-highlight/match/index.js
var match = __webpack_require__(2452);
var match_default = /*#__PURE__*/__webpack_require__.n(match);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/List/index.js
var List = __webpack_require__(6176);
var List_default = /*#__PURE__*/__webpack_require__.n(List);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/InputBase/index.js
var InputBase = __webpack_require__(73392);
var InputBase_default = /*#__PURE__*/__webpack_require__.n(InputBase);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(48060);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/InputAdornment/index.js
var InputAdornment = __webpack_require__(3683);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Dialog/index.js
var Dialog = __webpack_require__(62969);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog);
// EXTERNAL MODULE: ./src/hooks/use-boolean.ts
var use_boolean = __webpack_require__(80935);
// EXTERNAL MODULE: ./src/hooks/use-responsive.ts
var use_responsive = __webpack_require__(59099);
;// CONCATENATED MODULE: ./src/hooks/use-event-listener.ts

// ----------------------------------------------------------------------
const useIsomorphicLayoutEffect =  false ? 0 : react_.useEffect;
function useEventListener(eventName, handler, element, options) {
    // Create a ref that stores handler
    const savedHandler = (0,react_.useRef)(handler);
    useIsomorphicLayoutEffect(()=>{
        savedHandler.current = handler;
    }, [
        handler
    ]);
    (0,react_.useEffect)(()=>{
        // Define the listening target
        const targetElement = element?.current || window;
        if (!(targetElement && targetElement.addEventListener)) {
            return;
        }
        // Create event listener that calls handler function stored in ref
        const eventListener = (event)=>savedHandler.current(event);
        targetElement.addEventListener(eventName, eventListener, options);
        // Remove event listener on cleanup
        // eslint-disable-next-line consistent-return
        return ()=>{
            targetElement.removeEventListener(eventName, eventListener);
        };
    }, [
        eventName,
        element,
        options
    ]);
}

// EXTERNAL MODULE: ./src/components/label/index.ts + 2 modules
var label = __webpack_require__(42892);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
// EXTERNAL MODULE: ./src/components/scrollbar/index.ts + 2 modules
var scrollbar = __webpack_require__(65026);
// EXTERNAL MODULE: ./src/routes/hooks/index.ts + 4 modules
var hooks = __webpack_require__(89539);
// EXTERNAL MODULE: ./src/components/search-not-found/index.ts + 1 modules
var search_not_found = __webpack_require__(271);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemText/index.js
var ListItemText = __webpack_require__(93429);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemButton/index.js
var ListItemButton = __webpack_require__(19868);
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton);
;// CONCATENATED MODULE: ./src/layouts/_common/searchbar/result-item.tsx
// @mui





// components

function ResultItem({ title, path, groupLabel, onClickItem }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
        onClick: onClickItem,
        sx: {
            borderWidth: 1,
            borderStyle: "dashed",
            borderColor: "transparent",
            borderBottomColor: (theme)=>theme.palette.divider,
            "&:hover": {
                borderRadius: 1,
                borderColor: (theme)=>theme.palette.primary.main,
                backgroundColor: (theme)=>(0,styles.alpha)(theme.palette.primary.main, theme.palette.action.hoverOpacity)
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                primaryTypographyProps: {
                    typography: "subtitle2",
                    sx: {
                        textTransform: "capitalize"
                    }
                },
                secondaryTypographyProps: {
                    typography: "caption"
                },
                primary: title.map((part, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        component: "span",
                        sx: {
                            color: part.highlight ? "primary.main" : "text.primary"
                        },
                        children: part.text
                    }, index)),
                secondary: path.map((part, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        component: "span",
                        sx: {
                            color: part.highlight ? "primary.main" : "text.secondary"
                        },
                        children: part.text
                    }, index))
            }),
            groupLabel && /*#__PURE__*/ jsx_runtime_.jsx(label/* default */.Z, {
                color: "info",
                children: groupLabel
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/layouts/dashboard/config-navigation.tsx
var config_navigation = __webpack_require__(49430);
;// CONCATENATED MODULE: ./src/utils/flatten-array.ts
// ----------------------------------------------------------------------
function flattenArray(list, key = "children") {
    let children = [];
    const flatten = list?.map((item)=>{
        if (item[key] && item[key].length) {
            children = [
                ...children,
                ...item[key]
            ];
        }
        return item;
    });
    return flatten?.concat(children.length ? flattenArray(children, key) : children);
}

;// CONCATENATED MODULE: ./src/layouts/_common/searchbar/utils.ts
// utils

function getAllItems({ data }) {
    const reduceItems = data.map((list)=>handleLoop(list.items, list.subheader)).flat();
    const items = flattenArray(reduceItems).map((option)=>{
        const group = splitPath(reduceItems, option.path);
        return {
            group: group && group.length > 1 ? group[0] : option.subheader,
            title: option.title,
            path: option.path
        };
    });
    return items;
}
function applyFilter({ inputData, query }) {
    if (query) {
        inputData = inputData.filter((item)=>item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 || item.path.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return inputData;
}
// ----------------------------------------------------------------------
function splitPath(array, key) {
    let stack = array.map((item)=>({
            path: [
                item.title
            ],
            currItem: item
        }));
    while(stack.length){
        const { path, currItem } = stack.pop();
        if (currItem.path === key) {
            return path;
        }
        if (currItem.children?.length) {
            stack = stack.concat(currItem.children.map((item)=>({
                    path: path.concat(item.title),
                    currItem: item
                })));
        }
    }
    return null;
}
// ----------------------------------------------------------------------
function handleLoop(array, subheader) {
    return array?.map((list)=>({
            subheader,
            ...list,
            ...list.children && {
                children: handleLoop(list.children, subheader)
            }
        }));
}
function groupedData(array) {
    const group = array.reduce((groups, item)=>{
        groups[item.group] = groups[item.group] || [];
        groups[item.group].push(item);
        return groups;
    }, {});
    return group;
}

;// CONCATENATED MODULE: ./src/layouts/_common/searchbar/searchbar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



// @mui








// hooks



// components





//



// ----------------------------------------------------------------------
function Searchbar() {
    const theme = (0,styles.useTheme)();
    const router = (0,hooks/* useRouter */.tv)();
    const search = (0,use_boolean/* useBoolean */.k)();
    const mdUp = (0,use_responsive/* useResponsive */.F)("up", "md");
    const [searchQuery, setSearchQuery] = (0,react_.useState)("");
    const navData = (0,config_navigation/* useNavData */.O)();
    const handleClose = (0,react_.useCallback)(()=>{
        search.onFalse();
        setSearchQuery("");
    }, [
        search
    ]);
    const handleKeyDown = (event)=>{
        if (event.key === "k" && event.metaKey) {
            search.onToggle();
            setSearchQuery("");
        }
    };
    useEventListener("keydown", handleKeyDown);
    const handleClick = (0,react_.useCallback)((path)=>{
        if (path.includes("http")) {
            window.open(path);
        } else {
            router.push(path);
        }
        handleClose();
    }, [
        handleClose,
        router
    ]);
    const handleSearch = (0,react_.useCallback)((event)=>{
        setSearchQuery(event.target.value);
    }, []);
    const dataFiltered = applyFilter({
        inputData: getAllItems({
            data: navData
        }),
        query: searchQuery
    });
    const notFound = searchQuery && !dataFiltered.length;
    const renderItems = ()=>{
        const data = groupedData(dataFiltered);
        return Object.keys(data).sort((a, b)=>-b.localeCompare(a)).map((group, index)=>/*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                disablePadding: true,
                children: data[group].map((item)=>{
                    const { title, path } = item;
                    const partsTitle = parse_default()(title, match_default()(title, searchQuery));
                    const partsPath = parse_default()(path, match_default()(path, searchQuery));
                    return /*#__PURE__*/ jsx_runtime_.jsx(ResultItem, {
                        path: partsPath,
                        title: partsTitle,
                        groupLabel: searchQuery && group,
                        onClickItem: ()=>handleClick(path)
                    }, `${title}${path}`);
                })
            }, group || index));
    };
    const renderButton = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        direction: "row",
        alignItems: "center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                onClick: search.onTrue,
                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: "eva:search-fill"
                })
            }),
            mdUp && /*#__PURE__*/ jsx_runtime_.jsx(label/* default */.Z, {
                sx: {
                    px: 0.75,
                    fontSize: 12,
                    color: "text.secondary"
                },
                children: "⌘K"
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            renderButton,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                fullWidth: true,
                maxWidth: "sm",
                open: search.value,
                onClose: handleClose,
                transitionDuration: {
                    enter: theme.transitions.duration.shortest,
                    exit: 0
                },
                PaperProps: {
                    sx: {
                        mt: 15,
                        overflow: "unset"
                    }
                },
                sx: {
                    [`& .${Dialog.dialogClasses.container}`]: {
                        alignItems: "flex-start"
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            p: 3,
                            borderBottom: `solid 1px ${theme.palette.divider}`
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((InputBase_default()), {
                            fullWidth: true,
                            autoFocus: true,
                            placeholder: "Search...",
                            value: searchQuery,
                            onChange: handleSearch,
                            startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                position: "start",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                    icon: "eva:search-fill",
                                    width: 24,
                                    sx: {
                                        color: "text.disabled"
                                    }
                                })
                            }),
                            endAdornment: /*#__PURE__*/ jsx_runtime_.jsx(label/* default */.Z, {
                                sx: {
                                    letterSpacing: 1,
                                    color: "text.secondary"
                                },
                                children: "esc"
                            }),
                            inputProps: {
                                sx: {
                                    typography: "h6"
                                }
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(scrollbar/* default */.Z, {
                        sx: {
                            p: 3,
                            pt: 2,
                            height: 400
                        },
                        children: notFound ? /*#__PURE__*/ jsx_runtime_.jsx(search_not_found/* default */.Z, {
                            query: searchQuery,
                            sx: {
                                py: 10
                            }
                        }) : renderItems()
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const searchbar = (/*#__PURE__*/(0,react_.memo)(Searchbar));

;// CONCATENATED MODULE: ./src/layouts/_common/searchbar/index.ts


// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Avatar/index.js
var Avatar = __webpack_require__(95843);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./src/hooks/use-mocked-user.ts
var use_mocked_user = __webpack_require__(63820);
// EXTERNAL MODULE: ./src/routes/paths.ts
var paths = __webpack_require__(48611);
// EXTERNAL MODULE: ./src/locales/index.ts
var src_locales = __webpack_require__(62393);
;// CONCATENATED MODULE: ./src/layouts/_common/nav-upgrade.tsx
// @mui






// hooks

// routes

// locales

// components

// ----------------------------------------------------------------------
function NavUpgrade() {
    const { user } = (0,use_mocked_user/* useMockedUser */.I)();
    const { t } = (0,src_locales/* useLocales */.nt)();
    return /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
        sx: {
            px: 2,
            py: 5,
            textAlign: "center"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
            alignItems: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                    sx: {
                        position: "relative"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                            src: user?.photoURL,
                            alt: user?.displayName,
                            sx: {
                                width: 48,
                                height: 48
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(label/* default */.Z, {
                            color: "success",
                            variant: "filled",
                            sx: {
                                top: -6,
                                px: 0.5,
                                left: 40,
                                height: 20,
                                position: "absolute",
                                borderBottomLeftRadius: 2
                            },
                            children: "Free"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                    spacing: 0.5,
                    sx: {
                        mt: 1.5,
                        mb: 2
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "subtitle2",
                            noWrap: true,
                            children: user?.displayName
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "body2",
                            noWrap: true,
                            sx: {
                                color: "text.disabled"
                            },
                            children: user?.email
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    variant: "contained",
                    href: paths/* paths */.H.minimalUI,
                    target: "_blank",
                    rel: "noopener",
                    children: t("upgrade_to_pro")
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/routes/components/index.ts + 1 modules
var components = __webpack_require__(87362);
// EXTERNAL MODULE: ./src/config-global.ts
var config_global = __webpack_require__(45060);
;// CONCATENATED MODULE: ./src/layouts/_common/login-button.tsx
// @mui


// routes

// config

function LoginButton({ sx }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
        component: components/* RouterLink */.r,
        href: config_global/* PATH_AFTER_LOGIN */.wd,
        variant: "outlined",
        sx: {
            mr: 1,
            ...sx
        },
        children: "Login"
    });
}

;// CONCATENATED MODULE: ./src/layouts/_common/header-shadow.tsx
// @mui


// ----------------------------------------------------------------------
function HeaderShadow({ sx, ...other }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        sx: {
            left: 0,
            right: 0,
            bottom: 0,
            m: "auto",
            height: 24,
            zIndex: -1,
            opacity: 0.48,
            borderRadius: "50%",
            position: "absolute",
            width: `calc(100% - 48px)`,
            boxShadow: (theme)=>theme.customShadows.z8,
            ...sx
        }
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(56995);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/AppBar/index.js
var AppBar = __webpack_require__(79536);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Toolbar/index.js
var Toolbar = __webpack_require__(74147);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar);
// EXTERNAL MODULE: ./src/theme/css.ts
var css = __webpack_require__(71745);
// EXTERNAL MODULE: ./src/hooks/use-off-set-top.ts
var use_off_set_top = __webpack_require__(21885);
// EXTERNAL MODULE: ./src/components/logo/index.ts + 1 modules
var logo = __webpack_require__(9162);
// EXTERNAL MODULE: ./src/layouts/config-layout.ts
var config_layout = __webpack_require__(83430);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs + 19 modules
var motion_minimal = __webpack_require__(51730);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Badge/index.js
var Badge = __webpack_require__(42454);
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge);
// EXTERNAL MODULE: ./src/components/animate/index.ts + 15 modules
var animate = __webpack_require__(22140);
// EXTERNAL MODULE: ./src/components/settings/index.ts + 1 modules
var components_settings = __webpack_require__(2701);
;// CONCATENATED MODULE: ./src/layouts/_common/settings-button.tsx





// components



function SettingsButton({ sx }) {
    const settings = (0,components_settings/* useSettingsContext */.K$)();
    return /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
        color: "error",
        variant: "dot",
        invisible: !settings.canReset,
        sx: {
            [`& .${Badge.badgeClasses.badge}`]: {
                top: 8,
                right: 8
            },
            ...sx
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
            component: motion_minimal.m.div,
            animate: {
                rotate: [
                    0,
                    settings.open ? 0 : 360
                ]
            },
            transition: {
                duration: 12,
                ease: "linear",
                repeat: Infinity
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                component: motion_minimal.m.button,
                whileTap: "tap",
                whileHover: "hover",
                variants: (0,animate/* varHover */.U6)(1.05),
                "aria-label": "settings",
                onClick: settings.onToggle,
                sx: {
                    width: 40,
                    height: 40
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: "solar:settings-bold-duotone",
                    width: 24
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/layouts/_common/header-simple.tsx
// @mui






// theme

// routes

// hooks

// components


//



// ----------------------------------------------------------------------
function HeaderSimple() {
    const theme = (0,styles.useTheme)();
    const offsetTop = (0,use_off_set_top/* useOffSetTop */.y)(config_layout/* HEADER */.y.H_DESKTOP);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((AppBar_default()), {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                sx: {
                    justifyContent: "space-between",
                    height: {
                        xs: config_layout/* HEADER */.y.H_MOBILE,
                        md: config_layout/* HEADER */.y.H_DESKTOP
                    },
                    transition: theme.transitions.create([
                        "height"
                    ], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter
                    }),
                    ...offsetTop && {
                        ...(0,css/* bgBlur */.Ls)({
                            color: theme.palette.background.default
                        }),
                        height: {
                            md: config_layout/* HEADER */.y.H_DESKTOP_OFFSET
                        }
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(logo/* default */.Z, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        alignItems: "center",
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SettingsButton, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                href: paths/* paths */.H.faqs,
                                component: components/* RouterLink */.r,
                                color: "inherit",
                                sx: {
                                    typography: "subtitle2"
                                },
                                children: "Need help?"
                            })
                        ]
                    })
                ]
            }),
            offsetTop && /*#__PURE__*/ jsx_runtime_.jsx(HeaderShadow, {})
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Divider/index.js
var Divider = __webpack_require__(61272);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/MenuItem/index.js
var MenuItem = __webpack_require__(88707);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem);
// EXTERNAL MODULE: ./src/auth/hooks/index.ts + 1 modules
var auth_hooks = __webpack_require__(40529);
// EXTERNAL MODULE: ./src/components/snackbar/index.ts
var snackbar = __webpack_require__(80941);
// EXTERNAL MODULE: ./src/components/custom-popover/index.ts + 4 modules
var custom_popover = __webpack_require__(99310);
;// CONCATENATED MODULE: ./src/layouts/_common/account-popover.tsx


// @mui








// routes


// hooks

// auth

// components



// ----------------------------------------------------------------------
const OPTIONS = [
    {
        label: "Home",
        linkTo: "/"
    },
    {
        label: "Profile",
        linkTo: paths/* paths */.H.dashboard.user.profile
    },
    {
        label: "Settings",
        linkTo: paths/* paths */.H.dashboard.user.account
    }
];
// ----------------------------------------------------------------------
function AccountPopover() {
    const router = (0,hooks/* useRouter */.tv)();
    const { user } = (0,use_mocked_user/* useMockedUser */.I)();
    const { logout } = (0,auth_hooks/* useAuthContext */.E)();
    const { enqueueSnackbar } = (0,snackbar/* useSnackbar */.Ds)();
    const popover = (0,custom_popover/* usePopover */.S)();
    const handleLogout = async ()=>{
        try {
            await logout();
            popover.onClose();
            router.replace("/");
        } catch (error) {
            console.error(error);
            enqueueSnackbar("Unable to logout!", {
                variant: "error"
            });
        }
    };
    const handleClickItem = (path)=>{
        popover.onClose();
        router.push(path);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                component: motion_minimal.m.button,
                whileTap: "tap",
                whileHover: "hover",
                variants: (0,animate/* varHover */.U6)(1.05),
                onClick: popover.onOpen,
                sx: {
                    width: 40,
                    height: 40,
                    background: (theme)=>(0,styles.alpha)(theme.palette.grey[500], 0.08),
                    ...popover.open && {
                        background: (theme)=>`linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                    src: user?.photoURL,
                    alt: user?.displayName,
                    sx: {
                        width: 36,
                        height: 36,
                        border: (theme)=>`solid 2px ${theme.palette.background.default}`
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(custom_popover/* default */.Z, {
                open: popover.open,
                onClose: popover.onClose,
                sx: {
                    width: 200,
                    p: 0
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                        sx: {
                            p: 2,
                            pb: 1.5
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "subtitle2",
                                noWrap: true,
                                children: user?.displayName
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "body2",
                                sx: {
                                    color: "text.secondary"
                                },
                                noWrap: true,
                                children: user?.email
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                        sx: {
                            borderStyle: "dashed"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
                        sx: {
                            p: 1
                        },
                        children: OPTIONS.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                onClick: ()=>handleClickItem(option.linkTo),
                                children: option.label
                            }, option.label))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                        sx: {
                            borderStyle: "dashed"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                        onClick: handleLogout,
                        sx: {
                            m: 1,
                            fontWeight: "fontWeightBold",
                            color: "error.main"
                        },
                        children: "Logout"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/layouts/_common/language-popover.tsx



// @mui


// locales

// components



// ----------------------------------------------------------------------
function LanguagePopover() {
    const locales = (0,src_locales/* useLocales */.nt)();
    const popover = (0,custom_popover/* usePopover */.S)();
    const handleChangeLang = (0,react_.useCallback)((newLang)=>{
        locales.onChangeLang(newLang);
        popover.onClose();
    }, [
        locales,
        popover
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                component: motion_minimal.m.button,
                whileTap: "tap",
                whileHover: "hover",
                variants: (0,animate/* varHover */.U6)(1.05),
                onClick: popover.onOpen,
                sx: {
                    width: 40,
                    height: 40,
                    ...popover.open && {
                        bgcolor: "action.selected"
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: locales.currentLang.icon,
                    sx: {
                        borderRadius: 0.65,
                        width: 28
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(custom_popover/* default */.Z, {
                open: popover.open,
                onClose: popover.onClose,
                sx: {
                    width: 160
                },
                children: locales.allLangs.map((option)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        selected: option.value === locales.currentLang.value,
                        onClick: ()=>handleChangeLang(option.value),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: option.icon,
                                sx: {
                                    borderRadius: 0.65,
                                    width: 28
                                }
                            }),
                            option.label
                        ]
                    }, option.value))
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/utils/format-time.ts
var format_time = __webpack_require__(94871);
// EXTERNAL MODULE: ./src/_mock/index.ts + 9 modules
var _mock = __webpack_require__(99011);
;// CONCATENATED MODULE: ./src/layouts/_common/contacts-popover.tsx


// @mui






// utils

// _mock

// components




// ----------------------------------------------------------------------
function ContactsPopover() {
    const popover = (0,custom_popover/* usePopover */.S)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                component: motion_minimal.m.button,
                whileTap: "tap",
                whileHover: "hover",
                variants: (0,animate/* varHover */.U6)(1.05),
                color: popover.open ? "inherit" : "default",
                onClick: popover.onOpen,
                sx: {
                    ...popover.open && {
                        bgcolor: (theme)=>theme.palette.action.selected
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: "solar:users-group-rounded-bold-duotone",
                    width: 24
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(custom_popover/* default */.Z, {
                open: popover.open,
                onClose: popover.onClose,
                sx: {
                    width: 320
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                        variant: "h6",
                        sx: {
                            p: 1.5
                        },
                        children: [
                            "Contacts ",
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                component: "span",
                                children: [
                                    "(",
                                    _mock/* _contacts */.Ck.length,
                                    ")"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(scrollbar/* default */.Z, {
                        sx: {
                            height: 320
                        },
                        children: _mock/* _contacts */.Ck.map((contact)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                sx: {
                                    p: 1
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                                        variant: contact.status,
                                        anchorOrigin: {
                                            vertical: "bottom",
                                            horizontal: "right"
                                        },
                                        sx: {
                                            mr: 2
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                            alt: contact.name,
                                            src: contact.avatarUrl
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                        primary: contact.name,
                                        secondary: contact.status === "offline" ? (0,format_time/* fToNow */.DY)(contact.lastActivity) : "",
                                        primaryTypographyProps: {
                                            typography: "subtitle2"
                                        },
                                        secondaryTypographyProps: {
                                            typography: "caption",
                                            color: "text.disabled"
                                        }
                                    })
                                ]
                            }, contact.id))
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/layouts/_common/nav-toggle-button.tsx
// @mui



// hooks

// theme

// components


//

// ----------------------------------------------------------------------
function NavToggleButton({ sx, ...other }) {
    const theme = (0,styles.useTheme)();
    const settings = (0,components_settings/* useSettingsContext */.K$)();
    const lgUp = (0,use_responsive/* useResponsive */.F)("up", "lg");
    if (!lgUp) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
        size: "small",
        onClick: ()=>settings.onUpdate("themeLayout", settings.themeLayout === "vertical" ? "mini" : "vertical"),
        sx: {
            p: 0.5,
            top: 32,
            position: "fixed",
            left: config_layout/* NAV */.w.W_VERTICAL - 12,
            zIndex: theme.zIndex.appBar + 1,
            border: `dashed 1px ${theme.palette.divider}`,
            ...(0,css/* bgBlur */.Ls)({
                opacity: 0.48,
                color: theme.palette.background.default
            }),
            "&:hover": {
                bgcolor: "background.default"
            },
            ...sx
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
            width: 16,
            icon: settings.themeLayout === "vertical" ? "eva:arrow-ios-back-fill" : "eva:arrow-ios-forward-fill"
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tab/index.js
var Tab = __webpack_require__(307);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tabs/index.js
var Tabs = __webpack_require__(87726);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Drawer/index.js
var Drawer = __webpack_require__(20094);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tooltip/index.js
var Tooltip = __webpack_require__(11666);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemAvatar/index.js
var ListItemAvatar = __webpack_require__(34789);
var ListItemAvatar_default = /*#__PURE__*/__webpack_require__.n(ListItemAvatar);
// EXTERNAL MODULE: ./src/components/file-thumbnail/index.ts + 3 modules
var file_thumbnail = __webpack_require__(66623);
;// CONCATENATED MODULE: ./src/layouts/_common/notifications-popover/notification-item.tsx
// @mui









// utils

// components


function NotificationItem({ notification }) {
    const renderAvatar = /*#__PURE__*/ jsx_runtime_.jsx((ListItemAvatar_default()), {
        children: notification.avatarUrl ? /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
            src: notification.avatarUrl,
            sx: {
                bgcolor: "background.neutral"
            }
        }) : /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
            alignItems: "center",
            justifyContent: "center",
            sx: {
                width: 40,
                height: 40,
                borderRadius: "50%",
                bgcolor: "background.neutral"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                component: "img",
                src: `/assets/icons/notification/${notification.type === "order" && "ic_order" || notification.type === "chat" && "ic_chat" || notification.type === "mail" && "ic_mail" || notification.type === "delivery" && "ic_delivery"}.svg`,
                sx: {
                    width: 24,
                    height: 24
                }
            })
        })
    });
    const renderText = /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
        disableTypography: true,
        primary: reader(notification.title),
        secondary: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
            direction: "row",
            alignItems: "center",
            sx: {
                typography: "caption",
                color: "text.disabled"
            },
            divider: /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                sx: {
                    width: 2,
                    height: 2,
                    bgcolor: "currentColor",
                    mx: 0.5,
                    borderRadius: "50%"
                }
            }),
            children: [
                (0,format_time/* fToNow */.DY)(notification.createdAt),
                notification.category
            ]
        })
    });
    const renderUnReadBadge = notification.isUnRead && /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        sx: {
            top: 26,
            width: 8,
            height: 8,
            right: 20,
            borderRadius: "50%",
            bgcolor: "info.main",
            position: "absolute"
        }
    });
    const friendAction = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        spacing: 1,
        direction: "row",
        sx: {
            mt: 1.5
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                size: "small",
                variant: "contained",
                children: "Accept"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                size: "small",
                variant: "outlined",
                children: "Decline"
            })
        ]
    });
    const projectAction = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        alignItems: "flex-start",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                sx: {
                    p: 1.5,
                    my: 1.5,
                    borderRadius: 1.5,
                    color: "text.secondary",
                    bgcolor: "background.neutral"
                },
                children: reader(`<p><strong>@Jaydon Frankie</strong> feedback by asking questions or just leave a note of appreciation.</p>`)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                size: "small",
                variant: "contained",
                children: "Reply"
            })
        ]
    });
    const fileAction = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        spacing: 1,
        direction: "row",
        sx: {
            pl: 1,
            p: 1.5,
            mt: 1.5,
            borderRadius: 1.5,
            bgcolor: "background.neutral"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(file_thumbnail/* default */.ZP, {
                file: "http://localhost:8080/httpsdesign-suriname-2015.mp3",
                sx: {
                    width: 40,
                    height: 40
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 1,
                direction: {
                    xs: "column",
                    sm: "row"
                },
                flexGrow: 1,
                sx: {
                    minWidth: 0
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                        disableTypography: true,
                        primary: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "subtitle2",
                            component: "div",
                            sx: {
                                color: "text.secondary"
                            },
                            noWrap: true,
                            children: "design-suriname-2015.mp3"
                        }),
                        secondary: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                            direction: "row",
                            alignItems: "center",
                            sx: {
                                typography: "caption",
                                color: "text.disabled"
                            },
                            divider: /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                sx: {
                                    mx: 0.5,
                                    width: 2,
                                    height: 2,
                                    borderRadius: "50%",
                                    bgcolor: "currentColor"
                                }
                            }),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "2.3 GB"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "30 min ago"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        size: "small",
                        variant: "outlined",
                        children: "Download"
                    })
                ]
            })
        ]
    });
    const tagsAction = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        direction: "row",
        spacing: 0.75,
        flexWrap: "wrap",
        sx: {
            mt: 1.5
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(label/* default */.Z, {
                variant: "outlined",
                color: "info",
                children: "Design"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(label/* default */.Z, {
                variant: "outlined",
                color: "warning",
                children: "Dashboard"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(label/* default */.Z, {
                variant: "outlined",
                children: "Design system"
            })
        ]
    });
    const paymentAction = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        direction: "row",
        spacing: 1,
        sx: {
            mt: 1.5
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                size: "small",
                variant: "contained",
                children: "Pay"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                size: "small",
                variant: "outlined",
                children: "Decline"
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
        disableRipple: true,
        sx: {
            p: 2.5,
            alignItems: "flex-start",
            borderBottom: (theme)=>`dashed 1px ${theme.palette.divider}`
        },
        children: [
            renderUnReadBadge,
            renderAvatar,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                sx: {
                    flexGrow: 1
                },
                children: [
                    renderText,
                    notification.type === "friend" && friendAction,
                    notification.type === "project" && projectAction,
                    notification.type === "file" && fileAction,
                    notification.type === "tags" && tagsAction,
                    notification.type === "payment" && paymentAction
                ]
            })
        ]
    });
}
// ----------------------------------------------------------------------
function reader(data) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        dangerouslySetInnerHTML: {
            __html: data
        },
        sx: {
            mb: 0.5,
            "& p": {
                typography: "body2",
                m: 0
            },
            "& a": {
                color: "inherit",
                textDecoration: "none"
            },
            "& strong": {
                typography: "subtitle2"
            }
        }
    });
}

;// CONCATENATED MODULE: ./src/layouts/_common/notifications-popover/notifications-popover.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


// @mui












// hooks


// _mock

// components




//

// ----------------------------------------------------------------------
const TABS = [
    {
        value: "all",
        label: "All",
        count: 22
    },
    {
        value: "unread",
        label: "Unread",
        count: 12
    },
    {
        value: "archived",
        label: "Archived",
        count: 10
    }
];
// ----------------------------------------------------------------------
function NotificationsPopover() {
    const drawer = (0,use_boolean/* useBoolean */.k)();
    const smUp = (0,use_responsive/* useResponsive */.F)("up", "sm");
    const [currentTab, setCurrentTab] = (0,react_.useState)("all");
    const handleChangeTab = (0,react_.useCallback)((event, newValue)=>{
        setCurrentTab(newValue);
    }, []);
    const [notifications, setNotifications] = (0,react_.useState)(_mock/* _notifications */.ID);
    const totalUnRead = notifications.filter((item)=>item.isUnRead === true).length;
    const handleMarkAllAsRead = ()=>{
        setNotifications(notifications.map((notification)=>({
                ...notification,
                isUnRead: false
            })));
    };
    const renderHead = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        direction: "row",
        alignItems: "center",
        sx: {
            py: 2,
            pl: 2.5,
            pr: 1,
            minHeight: 68
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h6",
                sx: {
                    flexGrow: 1
                },
                children: "Notifications"
            }),
            !!totalUnRead && /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                title: "Mark all as read",
                children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                    color: "primary",
                    onClick: handleMarkAllAsRead,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "eva:done-all-fill"
                    })
                })
            }),
            !smUp && /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                onClick: drawer.onFalse,
                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: "mingcute:close-line"
                })
            })
        ]
    });
    const renderTabs = /*#__PURE__*/ jsx_runtime_.jsx((Tabs_default()), {
        value: currentTab,
        onChange: handleChangeTab,
        children: TABS.map((tab)=>/*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                iconPosition: "end",
                value: tab.value,
                label: tab.label,
                icon: /*#__PURE__*/ jsx_runtime_.jsx(label/* default */.Z, {
                    variant: (tab.value === "all" || tab.value === currentTab) && "filled" || "soft",
                    color: tab.value === "unread" && "info" || tab.value === "archived" && "success" || "default",
                    children: tab.count
                }),
                sx: {
                    "&:not(:last-of-type)": {
                        mr: 3
                    }
                }
            }, tab.value))
    });
    const renderList = /*#__PURE__*/ jsx_runtime_.jsx(scrollbar/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
            disablePadding: true,
            children: notifications.map((notification)=>/*#__PURE__*/ jsx_runtime_.jsx(NotificationItem, {
                    notification: notification
                }, notification.id))
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                component: motion_minimal.m.button,
                whileTap: "tap",
                whileHover: "hover",
                variants: (0,animate/* varHover */.U6)(1.05),
                color: drawer.value ? "primary" : "default",
                onClick: drawer.onTrue,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                    badgeContent: totalUnRead,
                    color: "error",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "solar:bell-bing-bold-duotone",
                        width: 24
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Drawer_default()), {
                open: drawer.value,
                onClose: drawer.onFalse,
                anchor: "right",
                slotProps: {
                    backdrop: {
                        invisible: true
                    }
                },
                PaperProps: {
                    sx: {
                        width: 1,
                        maxWidth: 420
                    }
                },
                children: [
                    renderHead,
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        sx: {
                            pl: 2.5,
                            pr: 1
                        },
                        children: [
                            renderTabs,
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                onClick: handleMarkAllAsRead,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                    icon: "solar:settings-bold-duotone"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {}),
                    renderList,
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            p: 1
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            fullWidth: true,
                            size: "large",
                            children: "View All"
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/layouts/_common/notifications-popover/index.ts


;// CONCATENATED MODULE: ./src/layouts/_common/index.ts













/***/ }),

/***/ 83220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ CompactLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Container/index.js
var Container = __webpack_require__(39966);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./src/layouts/_common/index.ts + 18 modules
var _common = __webpack_require__(26053);
;// CONCATENATED MODULE: ./src/layouts/compact/layout.tsx
// @mui



//

function CompactLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(_common/* HeaderSimple */._z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                component: "main",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
                    sx: {
                        py: 12,
                        m: "auto",
                        maxWidth: 400,
                        minHeight: "100vh",
                        textAlign: "center",
                        justifyContent: "center"
                    },
                    children: children
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/layouts/compact/index.ts



/***/ }),

/***/ 83430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ NAV),
/* harmony export */   y: () => (/* binding */ HEADER)
/* harmony export */ });
// ----------------------------------------------------------------------
const HEADER = {
    H_MOBILE: 64,
    H_DESKTOP: 80,
    H_DESKTOP_OFFSET: 80 - 16
};
const NAV = {
    W_VERTICAL: 280,
    W_MINI: 88
};


/***/ }),

/***/ 49430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ useNavData)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48611);
/* harmony import */ var src_locales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62393);
/* harmony import */ var src_components_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42892);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76505);
/* harmony import */ var src_components_svg_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99066);


// routes

// locales

// components



// ----------------------------------------------------------------------
const icon = (name)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_svg_color__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        src: `/assets/icons/navbar/${name}.svg`,
        sx: {
            width: 1,
            height: 1
        }
    });
const ICONS = {
    job: icon("ic_job"),
    blog: icon("ic_blog"),
    chat: icon("ic_chat"),
    mail: icon("ic_mail"),
    user: icon("ic_user"),
    file: icon("ic_file"),
    lock: icon("ic_lock"),
    tour: icon("ic_tour"),
    order: icon("ic_order"),
    label: icon("ic_label"),
    blank: icon("ic_blank"),
    kanban: icon("ic_kanban"),
    folder: icon("ic_folder"),
    banking: icon("ic_banking"),
    booking: icon("ic_booking"),
    invoice: icon("ic_invoice"),
    product: icon("ic_product"),
    calendar: icon("ic_calendar"),
    disabled: icon("ic_disabled"),
    external: icon("ic_external"),
    menuItem: icon("ic_menu_item"),
    ecommerce: icon("ic_ecommerce"),
    analytics: icon("ic_analytics"),
    dashboard: icon("ic_dashboard")
};
// ----------------------------------------------------------------------
function useNavData() {
    const { t } = (0,src_locales__WEBPACK_IMPORTED_MODULE_3__/* .useLocales */ .nt)();
    const data = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[
            // OVERVIEW
            // ----------------------------------------------------------------------
            {
                subheader: t("overview"),
                items: [
                    {
                        title: t("app"),
                        path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.root,
                        icon: ICONS.dashboard
                    },
                    {
                        title: t("ecommerce"),
                        path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.general.ecommerce,
                        icon: ICONS.ecommerce
                    },
                    {
                        title: t("analytics"),
                        path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.general.analytics,
                        icon: ICONS.analytics
                    },
                    {
                        title: t("banking"),
                        path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.general.banking,
                        icon: ICONS.banking
                    },
                    {
                        title: t("booking"),
                        path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.general.booking,
                        icon: ICONS.booking
                    },
                    {
                        title: t("file"),
                        path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.general.file,
                        icon: ICONS.file
                    }
                ]
            },
            // MANAGEMENT
            // ----------------------------------------------------------------------
            {
                subheader: t("management"),
                items: [
                    // USER
                    {
                        title: t("user"),
                        path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.user.root,
                        icon: ICONS.user,
                        children: [
                            {
                                title: t("profile"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.user.root
                            },
                            {
                                title: t("cards"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.user.cards
                            },
                            {
                                title: t("list"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.user.list
                            },
                            {
                                title: t("create"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.user.new
                            },
                            {
                                title: t("edit"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.user.demo.edit
                            },
                            {
                                title: t("account"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.user.account
                            }
                        ]
                    },
                    // PRODUCT
                    {
                        title: t("product"),
                        path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.product.root,
                        icon: ICONS.product,
                        children: [
                            {
                                title: t("list"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.product.root
                            },
                            {
                                title: t("details"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.product.demo.details
                            },
                            {
                                title: t("create"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.product.new
                            },
                            {
                                title: t("edit"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.product.demo.edit
                            }
                        ]
                    },
                    // ORDER
                    {
                        title: t("order"),
                        path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.order.root,
                        icon: ICONS.order,
                        children: [
                            {
                                title: t("list"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.order.root
                            },
                            {
                                title: t("details"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.order.demo.details
                            }
                        ]
                    },
                    // INVOICE
                    {
                        title: t("invoice"),
                        path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.invoice.root,
                        icon: ICONS.invoice,
                        children: [
                            {
                                title: t("list"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.invoice.root
                            },
                            {
                                title: t("details"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.invoice.demo.details
                            },
                            {
                                title: t("create"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.invoice.new
                            },
                            {
                                title: t("edit"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.invoice.demo.edit
                            }
                        ]
                    },
                    // BLOG
                    {
                        title: t("blog"),
                        path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.post.root,
                        icon: ICONS.blog,
                        children: [
                            {
                                title: t("list"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.post.root
                            },
                            {
                                title: t("details"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.post.demo.details
                            },
                            {
                                title: t("create"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.post.new
                            },
                            {
                                title: t("edit"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.post.demo.edit
                            }
                        ]
                    },
                    // JOB
                    {
                        title: t("job"),
                        path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.job.root,
                        icon: ICONS.job,
                        children: [
                            {
                                title: t("list"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.job.root
                            },
                            {
                                title: t("details"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.job.demo.details
                            },
                            {
                                title: t("create"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.job.new
                            },
                            {
                                title: t("edit"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.job.demo.edit
                            }
                        ]
                    },
                    // TOUR
                    {
                        title: t("tour"),
                        path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.tour.root,
                        icon: ICONS.tour,
                        children: [
                            {
                                title: t("list"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.tour.root
                            },
                            {
                                title: t("details"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.tour.demo.details
                            },
                            {
                                title: t("create"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.tour.new
                            },
                            {
                                title: t("edit"),
                                path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.tour.demo.edit
                            }
                        ]
                    },
                    // FILE MANAGER
                    {
                        title: t("file_manager"),
                        path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.fileManager,
                        icon: ICONS.folder
                    },
                    // MAIL
                    {
                        title: t("mail"),
                        path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.mail,
                        icon: ICONS.mail,
                        info: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_label__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            color: "error",
                            children: "+32"
                        })
                    },
                    // CHAT
                    {
                        title: t("chat"),
                        path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.chat,
                        icon: ICONS.chat
                    },
                    // CALENDAR
                    {
                        title: t("calendar"),
                        path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.calendar,
                        icon: ICONS.calendar
                    },
                    // KANBAN
                    {
                        title: t("kanban"),
                        path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.kanban,
                        icon: ICONS.kanban
                    }
                ]
            },
            // DEMO MENU STATES
            {
                subheader: t(t("other_cases")),
                items: [
                    {
                        // default roles : All roles can see this entry.
                        // roles: ['user'] Only users can see this item.
                        // roles: ['admin'] Only admin can see this item.
                        // roles: ['admin', 'manager'] Only admin/manager can see this item.
                        // Reference from 'src/guards/RoleBasedGuard'.
                        title: t("item_by_roles"),
                        path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.permission,
                        icon: ICONS.lock,
                        roles: [
                            "admin",
                            "manager"
                        ],
                        caption: t("only_admin_can_see_this_item")
                    },
                    {
                        title: t("menu_level"),
                        path: "#/dashboard/menu_level",
                        icon: ICONS.menuItem,
                        children: [
                            {
                                title: t("menu_level_1a"),
                                path: "#/dashboard/menu_level/menu_level_1a"
                            },
                            {
                                title: t("menu_level_1b"),
                                path: "#/dashboard/menu_level/menu_level_1b",
                                children: [
                                    {
                                        title: t("menu_level_2a"),
                                        path: "#/dashboard/menu_level/menu_level_1b/menu_level_2a"
                                    },
                                    {
                                        title: t("menu_level_2b"),
                                        path: "#/dashboard/menu_level/menu_level_1b/menu_level_2b",
                                        children: [
                                            {
                                                title: t("menu_level_3a"),
                                                path: "#/dashboard/menu_level/menu_level_1b/menu_level_2b/menu_level_3a"
                                            },
                                            {
                                                title: t("menu_level_3b"),
                                                path: "#/dashboard/menu_level/menu_level_1b/menu_level_2b/menu_level_3b"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: t("item_disabled"),
                        path: "#disabled",
                        icon: ICONS.disabled,
                        disabled: true
                    },
                    {
                        title: t("item_label"),
                        path: "#label",
                        icon: ICONS.label,
                        info: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_label__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            color: "info",
                            startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                icon: "solar:bell-bing-bold-duotone"
                            }),
                            children: "NEW"
                        })
                    },
                    {
                        title: t("item_caption"),
                        path: "#caption",
                        icon: ICONS.menuItem,
                        caption: "Quisque malesuada placerat nisl. In hac habitasse platea dictumst. Cras id dui. Pellentesque commodo eros a enim. Morbi mollis tellus ac sapien."
                    },
                    {
                        title: t("item_external_link"),
                        path: "https://www.google.com/",
                        icon: ICONS.external
                    },
                    {
                        title: t("blank"),
                        path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.dashboard.blank,
                        icon: ICONS.blank
                    }
                ]
            }
        ], [
        t
    ]);
    return data;
}


/***/ }),

/***/ 76140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ defaultLang),
/* harmony export */   G: () => (/* binding */ allLangs)
/* harmony export */ });
/* harmony import */ var _mui_material_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21800);
// @mui

// PLEASE REMOVE `LOCAL STORAGE` WHEN YOU CHANGE SETTINGS.
// ----------------------------------------------------------------------
const allLangs = [
    {
        label: "English",
        value: "en",
        systemValue: _mui_material_locale__WEBPACK_IMPORTED_MODULE_0__.enUS,
        icon: "flagpack:gb-nir"
    },
    {
        label: "French",
        value: "fr",
        systemValue: _mui_material_locale__WEBPACK_IMPORTED_MODULE_0__.frFR,
        icon: "flagpack:fr"
    },
    {
        label: "Vietnamese",
        value: "vi",
        systemValue: _mui_material_locale__WEBPACK_IMPORTED_MODULE_0__.viVN,
        icon: "flagpack:vn"
    },
    {
        label: "Chinese",
        value: "cn",
        systemValue: _mui_material_locale__WEBPACK_IMPORTED_MODULE_0__.zhCN,
        icon: "flagpack:cn"
    },
    {
        label: "Arabic",
        value: "ar",
        systemValue: _mui_material_locale__WEBPACK_IMPORTED_MODULE_0__.arSA,
        icon: "flagpack:sa"
    }
];
const defaultLang = allLangs[0]; // English
 // GET MORE COUNTRY FLAGS
 // https://icon-sets.iconify.design/flagpack/
 // https://www.dropbox.com/sh/nec1vwswr9lqbh9/AAB9ufC8iccxvtWi3rzZvndLa?dl=0


/***/ }),

/***/ 39798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ i18n)
});

// EXTERNAL MODULE: ./node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(41887);
// EXTERNAL MODULE: ./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js
var i18nextBrowserLanguageDetector = __webpack_require__(32666);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(27870);
// EXTERNAL MODULE: ./src/utils/storage-available.ts
var storage_available = __webpack_require__(55770);
// EXTERNAL MODULE: ./src/locales/config-lang.ts
var config_lang = __webpack_require__(76140);
;// CONCATENATED MODULE: ./src/locales/langs/en.json
const en_namespaceObject = JSON.parse('{"app":"app","job":"job","user":"user","list":"list","edit":"edit","shop":"shop","blog":"blog","post":"post","mail":"mail","chat":"chat","file":"file","tour":"tour","cards":"cards","blank":"blank","order":"order","lists":"lists","create":"create","kanban":"kanban","general":"general","banking":"banking","booking":"booking","profile":"profile","account":"account","product":"product","invoice":"invoice","details":"details","checkout":"checkout","calendar":"calendar","overview":"overview","analytics":"analytics","ecommerce":"e-commerce","management":"management","menu_level":"menu level","item_label":"item label","description":"description","other_cases":"other cases","item_caption":"item caption","file_manager":"File Manager","menu_level_1a":"menu level 1a","menu_level_1b":"menu level 1b","menu_level_2a":"menu level 2a","menu_level_2b":"menu level 2b","menu_level_3a":"menu level 3a","menu_level_3b":"menu level 4b","item_disabled":"item disabled","item_by_roles":"item by roles","item_external_link":"item external link","only_admin_can_see_this_item":"Only admin can see this item","upgrade_to_pro":"Upgrade to Pro","demo":{"title":"English"}}');
;// CONCATENATED MODULE: ./src/locales/langs/fr.json
const fr_namespaceObject = JSON.parse('{"app":"application","job":"emploi","user":"utilisateur","list":"liste","edit":"modifier","shop":"boutique","blog":"blog","post":"article","mail":"courrier","chat":"discussion","file":"fichier","tour":"visite","cards":"cartes","blank":"vide","order":"commande","lists":"listes","create":"créer","kanban":"tableau","general":"général","banking":"bancaire","booking":"réservation","profile":"profil","account":"compte","product":"produit","invoice":"facture","details":"détails","checkout":"paiement","calendar":"calendrier","overview":"aperçu","analytics":"analytics","ecommerce":"e-commerce","management":"gestion","menu_level":"niveau de menu","item_label":"étiquette de l\'élément","description":"description","other_cases":"autres cas","item_caption":"légende de l\'élément","file_manager":"Gestionnaire de fichiers","menu_level_1a":"niveau de menu 1a","menu_level_1b":"niveau de menu 1b","menu_level_2a":"niveau de menu 2a","menu_level_2b":"niveau de menu 2b","menu_level_3a":"niveau de menu 3a","menu_level_3b":"niveau de menu 4b","item_disabled":"élément désactivé","item_by_roles":"élément par rôles","item_external_link":"lien externe de l\'élément","only_admin_can_see_this_item":"Seul l\'administrateur peut voir cet élément","upgrade_to_pro":"Passer à la version Pro","demo":{"title":"France"}}');
;// CONCATENATED MODULE: ./src/locales/langs/vi.json
const vi_namespaceObject = JSON.parse('{"app":"ứng dụng","job":"công việc","user":"người dùng","list":"danh sách","edit":"chỉnh sửa","shop":"cửa hàng","blog":"blog","post":"bài viết","mail":"thư","chat":"trò chuyện","file":"tệp","tour":"du lịch","cards":"thẻ","blank":"trống","order":"đơn hàng","lists":"danh sách","create":"tạo","kanban":"bảng","general":"chung","banking":"ngân hàng","booking":"đặt chỗ","profile":"hồ sơ","account":"tài khoản","product":"sản phẩm","invoice":"hóa đơn","details":"chi tiết","checkout":"thanh toán","calendar":"lịch","overview":"tổng quan","analytics":"phân tích","ecommerce":"thương mại điện tử","management":"quản lý","menu_level":"cấp độ menu","item_label":"nhãn mục","description":"mô tả","other_cases":"trường hợp khác","item_caption":"chú thích mục","file_manager":"Quản lý tệp","menu_level_1a":"cấp độ menu 1a","menu_level_1b":"cấp độ menu 1b","menu_level_2a":"cấp độ menu 2a","menu_level_2b":"cấp độ menu 2b","menu_level_3a":"cấp độ menu 3a","menu_level_3b":"cấp độ menu 4b","item_disabled":"mục bị vô hiệu hóa","item_by_roles":"mục theo vai trò","item_external_link":"liên kết bên ngoài của mục","only_admin_can_see_this_item":"Chỉ admin mới có thể thấy mục này","upgrade_to_pro":"Nâng cấp lên phiên bản Pro","demo":{"title":"Vietnamese"}}');
;// CONCATENATED MODULE: ./src/locales/langs/cn.json
const cn_namespaceObject = JSON.parse('{"app":"应用","job":"工作","user":"用户","list":"列表","edit":"编辑","shop":"商店","blog":"博客","post":"文章","mail":"邮件","chat":"聊天","file":"文件","tour":"导览","cards":"卡片","blank":"空白","order":"订单","lists":"列表","create":"创建","kanban":"看板","general":"常规","banking":"银行","booking":"预订","profile":"个人资料","account":"账户","product":"产品","invoice":"发票","details":"详情","checkout":"结账","calendar":"日历","overview":"概览","analytics":"分析","ecommerce":"电子商务","management":"管理","menu_level":"菜单级别","item_label":"项目标签","description":"描述","other_cases":"其他情况","item_caption":"项目标题","file_manager":"文件管理器","menu_level_1a":"菜单级别 1a","menu_level_1b":"菜单级别 1b","menu_level_2a":"菜单级别 2a","menu_level_2b":"菜单级别 2b","menu_level_3a":"菜单级别 3a","menu_level_3b":"菜单级别 4b","item_disabled":"项目已禁用","item_by_roles":"按角色显示的项目","item_external_link":"项目外部链接","only_admin_can_see_this_item":"只有管理员可以看到此项目","upgrade_to_pro":"升级到专业版","demo":{"title":"Chinese"}}');
;// CONCATENATED MODULE: ./src/locales/langs/ar.json
const ar_namespaceObject = JSON.parse('{"app":"تطبيق","job":"وظيفة","user":"مستخدم","list":"قائمة","edit":"تعديل","shop":"متجر","blog":"مدونة","post":"مقالة","mail":"بريد","chat":"دردشة","file":"ملف","tour":"جولة","cards":"بطاقات","blank":"فارغ","order":"طلب","lists":"قوائم","create":"إنشاء","kanban":"كانبان","general":"عام","banking":"مصرفية","booking":"حجز","profile":"ملف تعريف","account":"حساب","product":"منتج","invoice":"فاتورة","details":"تفاصيل","checkout":"الدفع","calendar":"تقويم","overview":"نظرة عامة","analytics":"تحليلات","ecommerce":"التجارة الإلكترونية","management":"إدارة","menu_level":"مستوى القائمة","item_label":"تسمية العنصر","description":"الوصف","other_cases":"حالات أخرى","item_caption":"تسمية العنصر","file_manager":"مدير الملفات","menu_level_1a":"مستوى القائمة 1a","menu_level_1b":"مستوى القائمة 1b","menu_level_2a":"مستوى القائمة 2a","menu_level_2b":"مستوى القائمة 2b","menu_level_3a":"مستوى القائمة 3a","menu_level_3b":"مستوى القائمة 4b","item_disabled":"العنصر معطل","item_by_roles":"العنصر حسب الأدوار","item_external_link":"رابط خارجي للعنصر","only_admin_can_see_this_item":"يمكن للمسؤول فقط رؤية هذا العنصر","upgrade_to_pro":"الترقية إلى Pro","demo":{"title":"Arabic"}}');
;// CONCATENATED MODULE: ./src/locales/i18n.ts
/* __next_internal_client_entry_do_not_use__ default auto */ 


// utils

//

//





// ----------------------------------------------------------------------
const lng = (0,storage_available/* localStorageGetItem */.G)("i18nextLng", config_lang/* defaultLang */.F.value);
i18next/* default.use */.ZP.use(i18nextBrowserLanguageDetector/* default */.Z).use(es/* initReactI18next */.Db).init({
    resources: {
        en: {
            translations: en_namespaceObject
        },
        fr: {
            translations: fr_namespaceObject
        },
        vi: {
            translations: vi_namespaceObject
        },
        cn: {
            translations: cn_namespaceObject
        },
        ar: {
            translations: ar_namespaceObject
        }
    },
    lng,
    fallbackLng: lng,
    debug: false,
    ns: [
        "translations"
    ],
    defaultNS: "translations",
    interpolation: {
        escapeValue: false
    }
});
/* harmony default export */ const i18n = (i18next/* default */.ZP);


/***/ }),

/***/ 62393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nt: () => (/* reexport safe */ _use_locales__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _config_lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76140);
/* harmony import */ var _use_locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1018);
/* harmony import */ var _localization_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20559);





/***/ }),

/***/ 20559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocalizationProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85261);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64763);
/* __next_internal_client_entry_do_not_use__ default auto */ 
// @mui


function LocalizationProvider({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_1__.LocalizationProvider, {
        dateAdapter: _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_2__/* .AdapterDateFns */ .H,
        children: children
    });
}


/***/ }),

/***/ 1018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useLocales)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27870);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_utils_storage_available__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55770);
/* harmony import */ var src_components_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2701);
/* harmony import */ var _config_lang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76140);
/* __next_internal_client_entry_do_not_use__ default auto */ 

// utils

// components

//

// ----------------------------------------------------------------------
function useLocales() {
    const { i18n, t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_0__/* .useTranslation */ .$G)();
    const settings = (0,src_components_settings__WEBPACK_IMPORTED_MODULE_2__/* .useSettingsContext */ .K$)();
    const langStorage = (0,src_utils_storage_available__WEBPACK_IMPORTED_MODULE_4__/* .localStorageGetItem */ .G)("i18nextLng");
    const currentLang = _config_lang__WEBPACK_IMPORTED_MODULE_3__/* .allLangs */ .G.find((lang)=>lang.value === langStorage) || _config_lang__WEBPACK_IMPORTED_MODULE_3__/* .defaultLang */ .F;
    const onChangeLang = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((newlang)=>{
        i18n.changeLanguage(newlang);
        settings.onChangeDirectionByLang(newlang);
    }, [
        i18n,
        settings
    ]);
    return {
        allLangs: _config_lang__WEBPACK_IMPORTED_MODULE_3__/* .allLangs */ .G,
        t,
        currentLang,
        onChangeLang
    };
}


/***/ }),

/***/ 87362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: () => (/* reexport */ router_link)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/routes/components/router-link.tsx



// ----------------------------------------------------------------------
const RouterLink = /*#__PURE__*/ (0,react_.forwardRef)(({ ...other }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        ref: ref,
        ...other
    }));
/* harmony default export */ const router_link = (RouterLink);

;// CONCATENATED MODULE: ./src/routes/components/index.ts



/***/ }),

/***/ 89539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  jD: () => (/* reexport */ navigation.usePathname),
  tv: () => (/* reexport */ navigation.useRouter),
  lr: () => (/* reexport */ navigation.useSearchParams)
});

// UNUSED EXPORTS: useActiveLink, useParams

// EXTERNAL MODULE: ./src/routes/hooks/use-active-link.ts
var use_active_link = __webpack_require__(50691);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
;// CONCATENATED MODULE: ./src/routes/hooks/use-params.ts


;// CONCATENATED MODULE: ./src/routes/hooks/use-router.ts


;// CONCATENATED MODULE: ./src/routes/hooks/use-pathname.ts


;// CONCATENATED MODULE: ./src/routes/hooks/use-search-params.ts


;// CONCATENATED MODULE: ./src/routes/hooks/index.ts

//






/***/ }),

/***/ 50691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ useActiveLink)
/* harmony export */ });
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_0__);

function useActiveLink(path, deep = true) {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.usePathname)();
    const checkPath = path.startsWith("#");
    const currentPath = path === "/" ? "/" : `${path}/`;
    const normalActive = !checkPath && pathname === currentPath;
    const deepActive = !checkPath && pathname.includes(currentPath);
    return deep ? deepActive : normalActive;
}


/***/ }),

/***/ 48611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ paths)
/* harmony export */ });
/* harmony import */ var src_utils_change_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29043);
/* harmony import */ var src_mock_assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28158);
// utils


// ----------------------------------------------------------------------
const MOCK_ID = src_mock_assets__WEBPACK_IMPORTED_MODULE_0__/* ._id */ .ZV[1];
const MOCK_TITLE = src_mock_assets__WEBPACK_IMPORTED_MODULE_0__/* ._postTitles */ .zu[2];
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
        details: (title)=>`/post/${(0,src_utils_change_case__WEBPACK_IMPORTED_MODULE_1__/* .paramCase */ .o)(title)}`,
        demo: {
            details: `/post/${(0,src_utils_change_case__WEBPACK_IMPORTED_MODULE_1__/* .paramCase */ .o)(MOCK_TITLE)}`
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
            details: (title)=>`${ROOTS.DASHBOARD}/post/${(0,src_utils_change_case__WEBPACK_IMPORTED_MODULE_1__/* .paramCase */ .o)(title)}`,
            edit: (title)=>`${ROOTS.DASHBOARD}/post/${(0,src_utils_change_case__WEBPACK_IMPORTED_MODULE_1__/* .paramCase */ .o)(title)}/edit`,
            demo: {
                details: `${ROOTS.DASHBOARD}/post/${(0,src_utils_change_case__WEBPACK_IMPORTED_MODULE_1__/* .paramCase */ .o)(MOCK_TITLE)}`,
                edit: `${ROOTS.DASHBOARD}/post/${(0,src_utils_change_case__WEBPACK_IMPORTED_MODULE_1__/* .paramCase */ .o)(MOCK_TITLE)}/edit`
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


/***/ }),

/***/ 56848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutContext: () => (/* binding */ CheckoutContext),
/* harmony export */   useCheckoutContext: () => (/* binding */ useCheckoutContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ CheckoutContext,useCheckoutContext auto */ 
// ----------------------------------------------------------------------
const CheckoutContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useCheckoutContext = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CheckoutContext);
    if (!context) throw new Error("useCheckoutContext must be use inside CheckoutProvider");
    return context;
};


/***/ }),

/***/ 23124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutProvider: () => (/* binding */ CheckoutProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78472);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_hooks_use_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63343);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48611);
/* harmony import */ var src_routes_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89539);
/* harmony import */ var src_mock_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50109);
/* harmony import */ var _checkout_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56848);
/* __next_internal_client_entry_do_not_use__ CheckoutProvider auto */ 


// hooks

// routes


// _mock

//

// ----------------------------------------------------------------------
const STORAGE_KEY = "checkout";
const initialState = {
    activeStep: 0,
    items: [],
    subTotal: 0,
    total: 0,
    discount: 0,
    shipping: 0,
    billing: null,
    totalItems: 0
};
function CheckoutProvider({ children }) {
    const router = (0,src_routes_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useRouter */ .tv)();
    const [values, setValues] = (0,src_hooks_use_local_storage__WEBPACK_IMPORTED_MODULE_3__/* .useLocalStorage */ ._)(STORAGE_KEY, initialState);
    const setValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((name, value)=>{
        setValues((prevState)=>({
                ...prevState,
                [name]: value
            }));
    }, [
        setValues
    ]);
    const onGetCart = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        const totalItems = values.items.reduce((total, item)=>total + item.quantity, 0);
        const subTotal = values.items.reduce((total, item)=>total + item.quantity * item.price, 0);
        setValue("subTotal", subTotal);
        setValue("totalItems", totalItems);
        setValue("billing", values.activeStep === 1 ? null : values.billing);
        setValue("discount", values.items.length ? values.discount : 0);
        setValue("shipping", values.items.length ? values.shipping : 0);
        setValue("total", values.subTotal - values.discount + values.shipping);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        values.items,
        values.activeStep,
        values.billing,
        values.discount,
        values.shipping,
        values.subTotal
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        onGetCart();
    }, [
        onGetCart
    ]);
    const onAddToCart = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((newItem)=>{
        const updatedItems = values.items.map((item)=>{
            if (item.id === newItem.id) {
                return {
                    ...item,
                    colors: lodash_uniq__WEBPACK_IMPORTED_MODULE_1___default()([
                        ...item.colors,
                        ...newItem.colors
                    ]),
                    quantity: item.quantity + 1
                };
            }
            return item;
        });
        if (!updatedItems.some((item)=>item.id === newItem.id)) {
            updatedItems.push(newItem);
        }
        setValue("items", updatedItems);
    }, [
        setValue,
        values.items
    ]);
    const onDeleteCart = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((itemId)=>{
        const updatedItems = values.items.filter((item)=>item.id !== itemId);
        setValue("items", updatedItems);
    }, [
        setValue,
        values.items
    ]);
    const onBackStep = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        setValue("activeStep", values.activeStep - 1);
    }, [
        setValue,
        values.activeStep
    ]);
    const onNextStep = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        setValue("activeStep", values.activeStep + 1);
    }, [
        setValue,
        values.activeStep
    ]);
    const onGotoStep = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((step)=>{
        setValue("activeStep", step);
    }, [
        setValue
    ]);
    const onIncreaseQuantity = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((itemId)=>{
        const updatedItems = values.items.map((item)=>{
            if (item.id === itemId) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                };
            }
            return item;
        });
        setValue("items", updatedItems);
    }, [
        setValue,
        values.items
    ]);
    const onDecreaseQuantity = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((itemId)=>{
        const updatedItems = values.items.map((item)=>{
            if (item.id === itemId) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                };
            }
            return item;
        });
        setValue("items", updatedItems);
    }, [
        setValue,
        values.items
    ]);
    const onCreateBilling = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((address)=>{
        setValue("billing", address);
        onNextStep();
    }, [
        onNextStep,
        setValue
    ]);
    const onApplyDiscount = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((discount)=>{
        setValue("discount", discount);
    }, [
        setValue
    ]);
    const onApplyShipping = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((shipping)=>{
        setValue("shipping", shipping);
    }, [
        setValue
    ]);
    const completed = values.activeStep === src_mock_product__WEBPACK_IMPORTED_MODULE_6__/* .PRODUCT_CHECKOUT_STEPS */ .JD.length;
    // Reset
    const onReset = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (completed) {
            setValues(initialState);
            router.replace(src_routes_paths__WEBPACK_IMPORTED_MODULE_4__/* .paths */ .H.product.root);
        }
    }, [
        completed,
        router,
        setValues
    ]);
    const memoizedValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>({
            ...values,
            completed,
            //
            onAddToCart,
            onDeleteCart,
            //
            onIncreaseQuantity,
            onDecreaseQuantity,
            //
            onCreateBilling,
            onApplyDiscount,
            onApplyShipping,
            //
            onBackStep,
            onNextStep,
            onGotoStep,
            //
            onReset
        }), [
        completed,
        onAddToCart,
        onApplyDiscount,
        onApplyShipping,
        onBackStep,
        onCreateBilling,
        onDecreaseQuantity,
        onDeleteCart,
        onGotoStep,
        onIncreaseQuantity,
        onNextStep,
        onReset,
        values
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_checkout_context__WEBPACK_IMPORTED_MODULE_7__.CheckoutContext.Provider, {
        value: memoizedValue,
        children: children
    });
}


/***/ }),

/***/ 50781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View403)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51730);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16614);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_layouts_compact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83220);
/* harmony import */ var src_assets_illustrations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90310);
/* harmony import */ var src_routes_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87362);
/* harmony import */ var src_components_animate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22140);
/* __next_internal_client_entry_do_not_use__ default auto */ 

// @mui


// layouts

// assets

// components


// ----------------------------------------------------------------------
function View403() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_layouts_compact__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_animate__WEBPACK_IMPORTED_MODULE_4__/* .MotionContainer */ .NM, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.div, {
                    variants: (0,src_components_animate__WEBPACK_IMPORTED_MODULE_4__/* .varBounce */ .Wp)().in,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                        variant: "h3",
                        sx: {
                            mb: 2
                        },
                        children: "No permission"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.div, {
                    variants: (0,src_components_animate__WEBPACK_IMPORTED_MODULE_4__/* .varBounce */ .Wp)().in,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                        sx: {
                            color: "text.secondary"
                        },
                        children: [
                            "The page you're trying access has restricted access.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "Please refer to your system administrator"
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.div, {
                    variants: (0,src_components_animate__WEBPACK_IMPORTED_MODULE_4__/* .varBounce */ .Wp)().in,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_assets_illustrations__WEBPACK_IMPORTED_MODULE_2__/* .ForbiddenIllustration */ .E, {
                        sx: {
                            height: 260,
                            my: {
                                xs: 5,
                                sm: 10
                            }
                        }
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                    component: src_routes_components__WEBPACK_IMPORTED_MODULE_3__/* .RouterLink */ .r,
                    href: "/",
                    size: "large",
                    variant: "contained",
                    children: "Go to Home"
                })
            ]
        })
    });
}


/***/ }),

/***/ 58166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page500)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51730);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16614);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_layouts_compact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83220);
/* harmony import */ var src_assets_illustrations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90310);
/* harmony import */ var src_routes_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87362);
/* harmony import */ var src_components_animate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22140);
/* __next_internal_client_entry_do_not_use__ default auto */ 

// @mui


// layouts

// assets

// components


// ----------------------------------------------------------------------
function Page500() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_layouts_compact__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_animate__WEBPACK_IMPORTED_MODULE_4__/* .MotionContainer */ .NM, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.div, {
                    variants: (0,src_components_animate__WEBPACK_IMPORTED_MODULE_4__/* .varBounce */ .Wp)().in,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                        variant: "h3",
                        sx: {
                            mb: 2
                        },
                        children: "500 Internal Server Error"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.div, {
                    variants: (0,src_components_animate__WEBPACK_IMPORTED_MODULE_4__/* .varBounce */ .Wp)().in,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                        sx: {
                            color: "text.secondary"
                        },
                        children: "There was an error, please try again later."
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.div, {
                    variants: (0,src_components_animate__WEBPACK_IMPORTED_MODULE_4__/* .varBounce */ .Wp)().in,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_assets_illustrations__WEBPACK_IMPORTED_MODULE_2__/* .SeverErrorIllustration */ .N0, {
                        sx: {
                            height: 260,
                            my: {
                                xs: 5,
                                sm: 10
                            }
                        }
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                    component: src_routes_components__WEBPACK_IMPORTED_MODULE_3__/* .RouterLink */ .r,
                    href: "/",
                    size: "large",
                    variant: "contained",
                    children: "Go to Home"
                })
            ]
        })
    });
}


/***/ }),

/***/ 47290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFoundView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51730);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16614);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_layouts_compact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83220);
/* harmony import */ var src_routes_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87362);
/* harmony import */ var src_components_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22140);
/* harmony import */ var src_assets_illustrations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90310);
/* __next_internal_client_entry_do_not_use__ default auto */ 

// @mui


// layouts

// routes

// components

// assets

// ----------------------------------------------------------------------
function NotFoundView() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_layouts_compact__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_animate__WEBPACK_IMPORTED_MODULE_3__/* .MotionContainer */ .NM, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.div, {
                    variants: (0,src_components_animate__WEBPACK_IMPORTED_MODULE_3__/* .varBounce */ .Wp)().in,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                        variant: "h3",
                        sx: {
                            mb: 2
                        },
                        children: "Sorry, Page Not Found!"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.div, {
                    variants: (0,src_components_animate__WEBPACK_IMPORTED_MODULE_3__/* .varBounce */ .Wp)().in,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                        sx: {
                            color: "text.secondary"
                        },
                        children: "Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling."
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.div, {
                    variants: (0,src_components_animate__WEBPACK_IMPORTED_MODULE_3__/* .varBounce */ .Wp)().in,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_assets_illustrations__WEBPACK_IMPORTED_MODULE_4__/* .PageNotFoundIllustration */ .CE, {
                        sx: {
                            height: 260,
                            my: {
                                xs: 5,
                                sm: 10
                            }
                        }
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                    component: src_routes_components__WEBPACK_IMPORTED_MODULE_2__/* .RouterLink */ .r,
                    href: "/",
                    size: "large",
                    variant: "contained",
                    children: "Go to Home"
                })
            ]
        })
    });
}


/***/ }),

/***/ 71745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D9: () => (/* binding */ menuItem),
/* harmony export */   Ls: () => (/* binding */ bgBlur),
/* harmony export */   O1: () => (/* binding */ hideScroll),
/* harmony export */   XK: () => (/* binding */ textGradient),
/* harmony export */   uS: () => (/* binding */ paper),
/* harmony export */   v3: () => (/* binding */ bgGradient)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83476);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61272);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16061);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88707);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45003);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_2__);
// @mui





// ----------------------------------------------------------------------
const paper = ({ theme, bgcolor, dropdown })=>({
        ...bgBlur({
            blur: 20,
            opacity: 0.9,
            color: theme.palette.background.paper,
            ...!!bgcolor && {
                color: bgcolor
            }
        }),
        backgroundImage: "url(/assets/cyan-blur.png), url(/assets/red-blur.png)",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "top right, left bottom",
        backgroundSize: "50%, 50%",
        ...theme.direction === "rtl" && {
            backgroundPosition: "top left, right bottom"
        },
        ...dropdown && {
            padding: theme.spacing(0.5),
            boxShadow: theme.customShadows.dropdown,
            borderRadius: theme.shape.borderRadius * 1.25
        }
    });
// ----------------------------------------------------------------------
const menuItem = (theme)=>({
        ...theme.typography.body2,
        padding: theme.spacing(0.75, 1),
        borderRadius: theme.shape.borderRadius * 0.75,
        "&:not(:last-of-type)": {
            marginBottom: 4
        },
        [`&.${_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_0__.menuItemClasses.selected}`]: {
            fontWeight: theme.typography.fontWeightSemiBold,
            backgroundColor: theme.palette.action.selected,
            "&:hover": {
                backgroundColor: theme.palette.action.hover
            }
        },
        [`& .${_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_1__.checkboxClasses.root}`]: {
            padding: theme.spacing(0.5),
            marginLeft: theme.spacing(-0.5),
            marginRight: theme.spacing(0.5)
        },
        [`&.${_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_2__.autocompleteClasses.option}[aria-selected="true"]`]: {
            backgroundColor: theme.palette.action.selected,
            "&:hover": {
                backgroundColor: theme.palette.action.hover
            }
        },
        [`&+.${_mui_material_Divider__WEBPACK_IMPORTED_MODULE_3__.dividerClasses.root}`]: {
            margin: theme.spacing(0.5, 0)
        }
    });
function bgBlur(props) {
    const color = props?.color || "#000000";
    const blur = props?.blur || 6;
    const opacity = props?.opacity || 0.8;
    const imgUrl = props?.imgUrl;
    if (imgUrl) {
        return {
            position: "relative",
            backgroundImage: `url(${imgUrl})`,
            "&:before": {
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 9,
                content: '""',
                width: "100%",
                height: "100%",
                backdropFilter: `blur(${blur}px)`,
                WebkitBackdropFilter: `blur(${blur}px)`,
                backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(color, opacity)
            }
        };
    }
    return {
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(color, opacity)
    };
}
function bgGradient(props) {
    const direction = props?.direction || "to bottom";
    const startColor = props?.startColor;
    const endColor = props?.endColor;
    const imgUrl = props?.imgUrl;
    const color = props?.color;
    if (imgUrl) {
        return {
            background: `linear-gradient(${direction}, ${startColor || color}, ${endColor || color}), url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
        };
    }
    return {
        background: `linear-gradient(${direction}, ${startColor}, ${endColor})`
    };
}
// ----------------------------------------------------------------------
function textGradient(value) {
    return {
        background: `-webkit-linear-gradient(${value})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    };
}
// ----------------------------------------------------------------------
const hideScroll = {
    x: {
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
            display: "none"
        }
    },
    y: {
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
            display: "none"
        }
    }
};


/***/ }),

/***/ 76449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ThemeProvider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/lodash/merge.js
var merge = __webpack_require__(91154);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/CssBaseline/index.js
var CssBaseline = __webpack_require__(98331);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./src/locales/index.ts
var locales = __webpack_require__(62393);
// EXTERNAL MODULE: ./src/components/settings/index.ts + 1 modules
var components_settings = __webpack_require__(2701);
// EXTERNAL MODULE: ./src/theme/palette.ts
var palette = __webpack_require__(3857);
;// CONCATENATED MODULE: ./src/theme/shadows.ts
// @mui

//

// ----------------------------------------------------------------------
const shadows_palette = (0,palette/* palette */.D)("light");
const LIGHT_MODE = shadows_palette.grey[500];
const DARK_MODE = shadows_palette.common.black;
function createShadow(color) {
    const transparent1 = (0,styles.alpha)(color, 0.2);
    const transparent2 = (0,styles.alpha)(color, 0.14);
    const transparent3 = (0,styles.alpha)(color, 0.12);
    return [
        "none",
        `0px 2px 1px -1px ${transparent1},0px 1px 1px 0px ${transparent2},0px 1px 3px 0px ${transparent3}`,
        `0px 3px 1px -2px ${transparent1},0px 2px 2px 0px ${transparent2},0px 1px 5px 0px ${transparent3}`,
        `0px 3px 3px -2px ${transparent1},0px 3px 4px 0px ${transparent2},0px 1px 8px 0px ${transparent3}`,
        `0px 2px 4px -1px ${transparent1},0px 4px 5px 0px ${transparent2},0px 1px 10px 0px ${transparent3}`,
        `0px 3px 5px -1px ${transparent1},0px 5px 8px 0px ${transparent2},0px 1px 14px 0px ${transparent3}`,
        `0px 3px 5px -1px ${transparent1},0px 6px 10px 0px ${transparent2},0px 1px 18px 0px ${transparent3}`,
        `0px 4px 5px -2px ${transparent1},0px 7px 10px 1px ${transparent2},0px 2px 16px 1px ${transparent3}`,
        `0px 5px 5px -3px ${transparent1},0px 8px 10px 1px ${transparent2},0px 3px 14px 2px ${transparent3}`,
        `0px 5px 6px -3px ${transparent1},0px 9px 12px 1px ${transparent2},0px 3px 16px 2px ${transparent3}`,
        `0px 6px 6px -3px ${transparent1},0px 10px 14px 1px ${transparent2},0px 4px 18px 3px ${transparent3}`,
        `0px 6px 7px -4px ${transparent1},0px 11px 15px 1px ${transparent2},0px 4px 20px 3px ${transparent3}`,
        `0px 7px 8px -4px ${transparent1},0px 12px 17px 2px ${transparent2},0px 5px 22px 4px ${transparent3}`,
        `0px 7px 8px -4px ${transparent1},0px 13px 19px 2px ${transparent2},0px 5px 24px 4px ${transparent3}`,
        `0px 7px 9px -4px ${transparent1},0px 14px 21px 2px ${transparent2},0px 5px 26px 4px ${transparent3}`,
        `0px 8px 9px -5px ${transparent1},0px 15px 22px 2px ${transparent2},0px 6px 28px 5px ${transparent3}`,
        `0px 8px 10px -5px ${transparent1},0px 16px 24px 2px ${transparent2},0px 6px 30px 5px ${transparent3}`,
        `0px 8px 11px -5px ${transparent1},0px 17px 26px 2px ${transparent2},0px 6px 32px 5px ${transparent3}`,
        `0px 9px 11px -5px ${transparent1},0px 18px 28px 2px ${transparent2},0px 7px 34px 6px ${transparent3}`,
        `0px 9px 12px -6px ${transparent1},0px 19px 29px 2px ${transparent2},0px 7px 36px 6px ${transparent3}`,
        `0px 10px 13px -6px ${transparent1},0px 20px 31px 3px ${transparent2},0px 8px 38px 7px ${transparent3}`,
        `0px 10px 13px -6px ${transparent1},0px 21px 33px 3px ${transparent2},0px 8px 40px 7px ${transparent3}`,
        `0px 10px 14px -6px ${transparent1},0px 22px 35px 3px ${transparent2},0px 8px 42px 7px ${transparent3}`,
        `0px 11px 14px -7px ${transparent1},0px 23px 36px 3px ${transparent2},0px 9px 44px 8px ${transparent3}`,
        `0px 11px 15px -7px ${transparent1},0px 24px 38px 3px ${transparent2},0px 9px 46px 8px ${transparent3}`
    ];
}
function shadows(mode) {
    return mode === "light" ? createShadow(LIGHT_MODE) : createShadow(DARK_MODE);
}

// EXTERNAL MODULE: ./src/theme/typography.ts
var typography = __webpack_require__(65657);
;// CONCATENATED MODULE: ./src/theme/custom-shadows.ts
// @mui

//

// ----------------------------------------------------------------------
const custom_shadows_palette = (0,palette/* palette */.D)("light");
const custom_shadows_LIGHT_MODE = custom_shadows_palette.grey[500];
const custom_shadows_DARK_MODE = custom_shadows_palette.common.black;
function custom_shadows_createShadow(color) {
    const transparent = (0,styles.alpha)(color, 0.16);
    return {
        z1: `0 1px 2px 0 ${transparent}`,
        z4: `0 4px 8px 0 ${transparent}`,
        z8: `0 8px 16px 0 ${transparent}`,
        z12: `0 12px 24px -4px ${transparent}`,
        z16: `0 16px 32px -4px ${transparent}`,
        z20: `0 20px 40px -4px ${transparent}`,
        z24: `0 24px 48px 0 ${transparent}`,
        //
        card: `0 0 2px 0 ${(0,styles.alpha)(color, 0.2)}, 0 12px 24px -4px ${(0,styles.alpha)(color, 0.12)}`,
        dropdown: `0 0 2px 0 ${(0,styles.alpha)(color, 0.24)}, -20px 20px 40px -4px ${(0,styles.alpha)(color, 0.24)}`,
        dialog: `-40px 40px 80px -8px ${(0,styles.alpha)(custom_shadows_palette.common.black, 0.24)}`,
        //
        primary: `0 8px 16px 0 ${(0,styles.alpha)(custom_shadows_palette.primary.main, 0.24)}`,
        info: `0 8px 16px 0 ${(0,styles.alpha)(custom_shadows_palette.info.main, 0.24)}`,
        secondary: `0 8px 16px 0 ${(0,styles.alpha)(custom_shadows_palette.secondary.main, 0.24)}`,
        success: `0 8px 16px 0 ${(0,styles.alpha)(custom_shadows_palette.success.main, 0.24)}`,
        warning: `0 8px 16px 0 ${(0,styles.alpha)(custom_shadows_palette.warning.main, 0.24)}`,
        error: `0 8px 16px 0 ${(0,styles.alpha)(custom_shadows_palette.error.main, 0.24)}`
    };
}
function customShadows(mode) {
    return mode === "light" ? custom_shadows_createShadow(custom_shadows_LIGHT_MODE) : custom_shadows_createShadow(custom_shadows_DARK_MODE);
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/SvgIcon/index.js
var SvgIcon = __webpack_require__(57107);
var SvgIcon_default = /*#__PURE__*/__webpack_require__.n(SvgIcon);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
;// CONCATENATED MODULE: ./src/theme/overrides/default-props.tsx


// components

// ----------------------------------------------------------------------
const ArrowDownIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12,16 C11.7663478,16.0004565 11.5399121,15.9190812 11.36,15.77 L5.36,10.77 C4.93474074,10.4165378 4.87653776,9.78525926 5.23,9.36 C5.58346224,8.93474074 6.21474074,8.87653776 6.64,9.23 L12,13.71 L17.36,9.39 C17.5665934,9.2222295 17.8315409,9.14373108 18.0961825,9.17188444 C18.3608241,9.2000378 18.6033268,9.33252029 18.77,9.54 C18.9551341,9.74785947 19.0452548,10.0234772 19.0186853,10.3005589 C18.9921158,10.5776405 18.8512608,10.8311099 18.63,11 L12.63,15.83 C12.444916,15.955516 12.2231011,16.0153708 12,16 Z"
        })
    });
const CheckboxIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17.9 2.318A5 5 0 0 1 22.895 7.1l.005.217v10a5 5 0 0 1-4.783 4.995l-.217.005h-10a5 5 0 0 1-4.995-4.783l-.005-.217v-10a5 5 0 0 1 4.783-4.996l.217-.004h10Zm-.5 1.5h-9a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4Z"
        })
    });
const CheckboxCheckedIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm-1.625 7.255-4.13 4.13-1.75-1.75a.881.881 0 0 0-1.24 0c-.34.34-.34.89 0 1.24l2.38 2.37c.17.17.39.25.61.25.23 0 .45-.08.62-.25l4.75-4.75c.34-.34.34-.89 0-1.24a.881.881 0 0 0-1.24 0Z"
        })
    });
const CheckboxIndeterminateIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17,2 C19.7614,2 22,4.23858 22,7 L22,7 L22,17 C22,19.7614 19.7614,22 17,22 L17,22 L7,22 C4.23858,22 2,19.7614 2,17 L2,17 L2,7 C2,4.23858 4.23858,2 7,2 L7,2 Z M15,11 L9,11 C8.44772,11 8,11.4477 8,12 C8,12.5523 8.44772,13 9,13 L15,13 C15.5523,13 16,12.5523 16,12 C16,11.4477 15.5523,11 15,11 Z"
        })
    });
const RadioIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12 2A10 10 0 1 1 2 12C2 6.477 6.477 2 12 2Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z"
        })
    });
const RadioCheckedIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12 2A10 10 0 1 1 2 12C2 6.477 6.477 2 12 2Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"
        })
    });
const RatingIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17.56,21 C17.4000767,21.0006435 17.2423316,20.9629218 17.1,20.89 L12,18.22 L6.9,20.89 C6.56213339,21.067663 6.15259539,21.0374771 5.8444287,20.8121966 C5.53626201,20.5869161 5.38323252,20.2058459 5.45,19.83 L6.45,14.2 L2.33,10.2 C2.06805623,9.93860108 1.9718844,9.55391377 2.08,9.2 C2.19824414,8.83742187 2.51242293,8.57366684 2.89,8.52 L8.59,7.69 L11.1,2.56 C11.2670864,2.21500967 11.6166774,1.99588989 12,1.99588989 C12.3833226,1.99588989 12.7329136,2.21500967 12.9,2.56 L15.44,7.68 L21.14,8.51 C21.5175771,8.56366684 21.8317559,8.82742187 21.95,9.19 C22.0581156,9.54391377 21.9619438,9.92860108 21.7,10.19 L17.58,14.19 L18.58,19.82 C18.652893,20.2027971 18.4967826,20.5930731 18.18,20.82 C17.9989179,20.9468967 17.7808835,21.010197 17.56,21 L17.56,21 Z"
        })
    });
const TreeViewCollapseIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M18,3 C19.6568542,3 21,4.34314575 21,6 L21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L6,3 Z M18,5 L6,5 C5.44771525,5 5,5.44771525 5,6 L5,6 L5,18 C5,18.5522847 5.44771525,19 6,19 L6,19 L18,19 C18.5522847,19 19,18.5522847 19,18 L19,18 L19,6 C19,5.44771525 18.5522847,5 18,5 L18,5 Z M12,8 C12.5522847,8 13,8.44771525 13,9 L13,9 L13,11 L15,11 C15.5522847,11 16,11.4477153 16,12 C16,12.5522847 15.5522847,13 15,13 L15,13 L13,13 L13,15 C13,15.5522847 12.5522847,16 12,16 C11.4477153,16 11,15.5522847 11,15 L11,15 L11,13 L9,13 C8.44771525,13 8,12.5522847 8,12 C8,11.4477153 8.44771525,11 9,11 L9,11 L11,11 L11,9 C11,8.44771525 11.4477153,8 12,8 Z"
        })
    });
const TreeViewExpandIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M18,3 C19.6568542,3 21,4.34314575 21,6 L21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L6,3 Z M18,5 L6,5 C5.44771525,5 5,5.44771525 5,6 L5,6 L5,18 C5,18.5522847 5.44771525,19 6,19 L6,19 L18,19 C18.5522847,19 19,18.5522847 19,18 L19,18 L19,6 C19,5.44771525 18.5522847,5 18,5 L18,5 Z M15,11 C15.5522847,11 16,11.4477153 16,12 C16,12.5522847 15.5522847,13 15,13 L15,13 L9,13 C8.44771525,13 8,12.5522847 8,12 C8,11.4477153 8.44771525,11 9,11 L9,11 Z"
        })
    });
const TreeViewEndIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M18,3 C19.6568542,3 21,4.34314575 21,6 L21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L6,3 Z M18,5 L6,5 C5.44771525,5 5,5.44771525 5,6 L5,6 L5,18 C5,18.5522847 5.44771525,19 6,19 L6,19 L18,19 C18.5522847,19 19,18.5522847 19,18 L19,18 L19,6 C19,5.44771525 18.5522847,5 18,5 L18,5 Z M14,8.99420168 C14.2666375,8.99420168 14.5222334,9.10068735 14.71,9.29 C14.8993127,9.4777666 15.0057983,9.73336246 15.0057983,10 C15.0057983,10.2666375 14.8993127,10.5222334 14.71,10.71 L14.71,10.71 L13.41,12 L14.71,13.29 C14.8993127,13.4777666 15.0057983,13.7333625 15.0057983,14 C15.0057983,14.2666375 14.8993127,14.5222334 14.71,14.71 C14.5222334,14.8993127 14.2666375,15.0057983 14,15.0057983 C13.7333625,15.0057983 13.4777666,14.8993127 13.29,14.71 L13.29,14.71 L12,13.41 L10.71,14.71 C10.5222334,14.8993127 10.2666375,15.0057983 10,15.0057983 C9.73336246,15.0057983 9.4777666,14.8993127 9.29,14.71 C9.10068735,14.5222334 8.99420168,14.2666375 8.99420168,14 C8.99420168,13.7333625 9.10068735,13.4777666 9.29,13.29 L9.29,13.29 L10.59,12 L9.29,10.71 C8.89787783,10.3178778 8.89787783,9.68212217 9.29,9.29 C9.68212217,8.89787783 10.3178778,8.89787783 10.71,9.29 L10.71,9.29 L12,10.59 L13.29,9.29 C13.4777666,9.10068735 13.7333625,8.99420168 14,8.99420168 Z"
        })
    });
// ----------------------------------------------------------------------
function defaultProps(theme) {
    return {
        MuiAlert: {
            defaultProps: {
                iconMapping: {
                    error: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "solar:danger-bold",
                        width: 24
                    }),
                    info: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "eva:info-fill",
                        width: 24
                    }),
                    success: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "eva:checkmark-circle-2-fill",
                        width: 24
                    }),
                    warning: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "eva:alert-triangle-fill",
                        width: 24
                    })
                }
            }
        },
        MuiStack: {
            defaultProps: {
                useFlexGap: true
            }
        },
        MuiAppBar: {
            defaultProps: {
                color: "transparent"
            }
        },
        MuiAvatarGroup: {
            defaultProps: {
                max: 4
            }
        },
        MuiButtonGroup: {
            defaultProps: {
                disableElevation: true
            }
        },
        MuiButton: {
            defaultProps: {
                color: "inherit",
                disableElevation: true
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    variant: "h6"
                },
                subheaderTypographyProps: {
                    variant: "body2",
                    marginTop: theme.spacing(0.5)
                }
            }
        },
        MuiChip: {
            defaultProps: {
                deleteIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: "solar:close-circle-bold"
                })
            }
        },
        MuiDialogActions: {
            defaultProps: {
                disableSpacing: true
            }
        },
        MuiFab: {
            defaultProps: {
                color: "primary"
            }
        },
        MuiLink: {
            defaultProps: {
                underline: "hover"
            }
        },
        MuiListItemText: {
            defaultProps: {
                primaryTypographyProps: {
                    typography: "subtitle2"
                },
                secondaryTypographyProps: {
                    component: "span"
                }
            }
        },
        MuiPaper: {
            defaultProps: {
                elevation: 0
            }
        },
        MuiSkeleton: {
            defaultProps: {
                animation: "wave",
                variant: "rounded"
            }
        },
        MuiFilledInput: {
            defaultProps: {
                disableUnderline: true
            }
        },
        MuiFormHelperText: {
            defaultProps: {
                component: "div"
            }
        },
        MuiTab: {
            defaultProps: {
                disableRipple: true,
                iconPosition: "start"
            }
        },
        MuiTabs: {
            defaultProps: {
                textColor: "inherit",
                variant: "scrollable",
                allowScrollButtonsMobile: true
            }
        },
        MuiTablePagination: {
            defaultProps: {
                backIconButtonProps: {
                    size: "small"
                },
                nextIconButtonProps: {
                    size: "small"
                }
            }
        },
        MuiSlider: {
            defaultProps: {
                size: "small"
            }
        },
        MuiAutocomplete: {
            defaultProps: {
                popupIcon: /*#__PURE__*/ jsx_runtime_.jsx(ArrowDownIcon, {})
            }
        },
        MuiSelect: {
            defaultProps: {
                IconComponent: ArrowDownIcon
            }
        },
        MuiNativeSelect: {
            defaultProps: {
                IconComponent: ArrowDownIcon
            }
        },
        MuiCheckbox: {
            defaultProps: {
                size: "small",
                icon: /*#__PURE__*/ jsx_runtime_.jsx(CheckboxIcon, {}),
                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx(CheckboxCheckedIcon, {}),
                indeterminateIcon: /*#__PURE__*/ jsx_runtime_.jsx(CheckboxIndeterminateIcon, {})
            }
        },
        MuiRadio: {
            defaultProps: {
                size: "small",
                icon: /*#__PURE__*/ jsx_runtime_.jsx(RadioIcon, {}),
                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx(RadioCheckedIcon, {})
            }
        },
        MuiRating: {
            defaultProps: {
                emptyIcon: /*#__PURE__*/ jsx_runtime_.jsx(RatingIcon, {}),
                icon: /*#__PURE__*/ jsx_runtime_.jsx(RatingIcon, {})
            }
        },
        MuiTreeView: {
            defaultProps: {
                defaultCollapseIcon: /*#__PURE__*/ jsx_runtime_.jsx(TreeViewCollapseIcon, {}),
                defaultExpandIcon: /*#__PURE__*/ jsx_runtime_.jsx(TreeViewExpandIcon, {}),
                defaultEndIcon: /*#__PURE__*/ jsx_runtime_.jsx(TreeViewEndIcon, {})
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Fab/index.js
var Fab = __webpack_require__(82272);
;// CONCATENATED MODULE: ./src/theme/overrides/components/fab.tsx


// ----------------------------------------------------------------------
const COLORS = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
];
// ----------------------------------------------------------------------
function fab(theme) {
    const lightMode = theme.palette.mode === "light";
    const rootStyles = (ownerState)=>{
        const defaultColor = ownerState.color === "default";
        const inheritColor = ownerState.color === "inherit";
        const circularVariant = ownerState.variant === "circular";
        const extendedVariant = ownerState.variant === "extended";
        const outlinedVariant = ownerState.variant === "outlined";
        const outlinedExtendedVariant = ownerState.variant === "outlinedExtended";
        const softVariant = ownerState.variant === "soft";
        const softExtendedVariant = ownerState.variant === "softExtended";
        const defaultStyle = {
            "&:hover, &:active": {
                boxShadow: "none"
            },
            // FILLED
            ...(circularVariant || extendedVariant) && {
                ...(defaultColor || inheritColor) && {
                    boxShadow: theme.customShadows.z8
                },
                ...inheritColor && {
                    backgroundColor: theme.palette.text.primary,
                    color: lightMode ? theme.palette.common.white : theme.palette.grey[800],
                    "&:hover": {
                        backgroundColor: lightMode ? theme.palette.grey[700] : theme.palette.grey[400]
                    }
                }
            },
            // OUTLINED
            ...(outlinedVariant || outlinedExtendedVariant) && {
                boxShadow: "none",
                backgroundColor: "transparent",
                ...(defaultColor || inheritColor) && {
                    border: `solid 1px ${(0,styles.alpha)(theme.palette.grey[500], 0.32)}`
                },
                ...defaultColor && {
                    ...!lightMode && {
                        color: theme.palette.text.secondary
                    }
                },
                "&:hover": {
                    borderColor: "currentColor",
                    boxShadow: "0 0 0 0.5px currentColor",
                    backgroundColor: theme.palette.action.hover
                }
            },
            // SOFT
            ...(softVariant || softExtendedVariant) && {
                boxShadow: "none",
                ...defaultColor && {
                    color: theme.palette.grey[800],
                    backgroundColor: theme.palette.grey[300],
                    "&:hover": {
                        backgroundColor: theme.palette.grey[400]
                    }
                },
                ...inheritColor && {
                    backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.08),
                    "&:hover": {
                        backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.24)
                    }
                }
            }
        };
        const colorStyle = COLORS.map((color)=>({
                ...ownerState.color === color && {
                    // FILLED
                    ...(circularVariant || extendedVariant) && {
                        boxShadow: theme.customShadows[color],
                        "&:hover": {
                            backgroundColor: theme.palette[color].dark
                        }
                    },
                    // OUTLINED
                    ...(outlinedVariant || outlinedExtendedVariant) && {
                        color: theme.palette[color].main,
                        border: `solid 1px ${(0,styles.alpha)(theme.palette[color].main, 0.48)}`,
                        "&:hover": {
                            backgroundColor: (0,styles.alpha)(theme.palette[color].main, 0.08)
                        }
                    },
                    // SOFT
                    ...(softVariant || softExtendedVariant) && {
                        color: theme.palette[color][lightMode ? "dark" : "light"],
                        backgroundColor: (0,styles.alpha)(theme.palette[color].main, 0.16),
                        "&:hover": {
                            backgroundColor: (0,styles.alpha)(theme.palette[color].main, 0.32)
                        }
                    }
                }
            }));
        const disabledState = {
            [`&.${Fab.fabClasses.disabled}`]: {
                ...(outlinedVariant || outlinedExtendedVariant) && {
                    backgroundColor: "transparent",
                    border: `solid 1px ${theme.palette.action.disabledBackground}`
                }
            }
        };
        const size = {
            ...(extendedVariant || outlinedExtendedVariant || softExtendedVariant) && {
                width: "auto",
                "& svg": {
                    marginRight: theme.spacing(1)
                },
                ...ownerState.size === "small" && {
                    height: 34,
                    minHeight: 34,
                    borderRadius: 17,
                    padding: theme.spacing(0, 1)
                },
                ...ownerState.size === "medium" && {
                    height: 40,
                    minHeight: 40,
                    borderRadius: 20,
                    padding: theme.spacing(0, 2)
                },
                ...ownerState.size === "large" && {
                    height: 48,
                    minHeight: 48,
                    borderRadius: 24,
                    padding: theme.spacing(0, 2)
                }
            }
        };
        return [
            defaultStyle,
            ...colorStyle,
            disabledState,
            size
        ];
    };
    return {
        MuiFab: {
            styleOverrides: {
                root: ({ ownerState })=>rootStyles(ownerState)
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/card.tsx
// ----------------------------------------------------------------------
function card(theme) {
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    position: "relative",
                    boxShadow: theme.customShadows.card,
                    borderRadius: theme.shape.borderRadius * 2,
                    zIndex: 0
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3, 3, 0)
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3)
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Chip/index.js
var Chip = __webpack_require__(92133);
;// CONCATENATED MODULE: ./src/theme/overrides/components/chip.tsx


// ----------------------------------------------------------------------
const chip_COLORS = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
];
// ----------------------------------------------------------------------
function chip(theme) {
    const lightMode = theme.palette.mode === "light";
    const rootStyles = (ownerState)=>{
        const defaultColor = ownerState.color === "default";
        const filledVariant = ownerState.variant === "filled";
        const outlinedVariant = ownerState.variant === "outlined";
        const softVariant = ownerState.variant === "soft";
        const defaultStyle = {
            [`& .${Chip.chipClasses.deleteIcon}`]: {
                opacity: 0.48,
                color: "currentColor",
                "&:hover": {
                    opacity: 1,
                    color: "currentColor"
                }
            },
            ...defaultColor && {
                [`& .${Chip.chipClasses.avatar}`]: {
                    color: theme.palette.text.primary
                },
                // FILLED
                ...filledVariant && {
                    color: lightMode ? theme.palette.common.white : theme.palette.grey[800],
                    backgroundColor: theme.palette.text.primary,
                    "&:hover": {
                        backgroundColor: lightMode ? theme.palette.grey[700] : theme.palette.grey[100]
                    },
                    [`& .${Chip.chipClasses.icon}`]: {
                        color: lightMode ? theme.palette.common.white : theme.palette.grey[800]
                    }
                },
                // OUTLINED
                ...outlinedVariant && {
                    border: `solid 1px ${(0,styles.alpha)(theme.palette.grey[500], 0.32)}`
                },
                // SOFT
                ...softVariant && {
                    color: theme.palette.text.primary,
                    backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.16),
                    "&:hover": {
                        backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.32)
                    }
                }
            }
        };
        const colorStyle = chip_COLORS.map((color)=>({
                ...ownerState.color === color && {
                    [`& .${Chip.chipClasses.avatar}`]: {
                        color: theme.palette[color].lighter,
                        backgroundColor: theme.palette[color].dark
                    },
                    // SOFT
                    ...softVariant && {
                        color: theme.palette[color][lightMode ? "dark" : "light"],
                        backgroundColor: (0,styles.alpha)(theme.palette[color].main, 0.16),
                        "&:hover": {
                            backgroundColor: (0,styles.alpha)(theme.palette[color].main, 0.32)
                        }
                    }
                }
            }));
        const disabledState = {
            [`&.${Chip.chipClasses.disabled}`]: {
                opacity: 1,
                color: theme.palette.action.disabled,
                [`& .${Chip.chipClasses.icon}`]: {
                    color: theme.palette.action.disabled
                },
                [`& .${Chip.chipClasses.avatar}`]: {
                    color: theme.palette.action.disabled,
                    backgroundColor: theme.palette.action.disabledBackground
                },
                // FILLED
                ...filledVariant && {
                    backgroundColor: theme.palette.action.disabledBackground
                },
                // OUTLINED
                ...outlinedVariant && {
                    borderColor: theme.palette.action.disabledBackground
                },
                // SOFT
                ...softVariant && {
                    backgroundColor: theme.palette.action.disabledBackground
                }
            }
        };
        return [
            defaultStyle,
            ...colorStyle,
            disabledState,
            {
                fontWeight: 500,
                borderRadius: theme.shape.borderRadius
            }
        ];
    };
    return {
        MuiChip: {
            styleOverrides: {
                root: ({ ownerState })=>rootStyles(ownerState)
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tab/index.js
var Tab = __webpack_require__(307);
;// CONCATENATED MODULE: ./src/theme/overrides/components/tabs.tsx

// ----------------------------------------------------------------------
function tabs(theme) {
    return {
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: theme.palette.text.primary
                },
                scrollButtons: {
                    width: 48,
                    borderRadius: "50%"
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    padding: 0,
                    opacity: 1,
                    minWidth: 48,
                    minHeight: 48,
                    fontWeight: theme.typography.fontWeightSemiBold,
                    "&:not(:last-of-type)": {
                        marginRight: theme.spacing(3),
                        [theme.breakpoints.up("sm")]: {
                            marginRight: theme.spacing(5)
                        }
                    },
                    [`&:not(.${Tab.tabClasses.selected})`]: {
                        color: theme.palette.text.secondary
                    }
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./src/theme/css.ts
var css = __webpack_require__(71745);
;// CONCATENATED MODULE: ./src/theme/overrides/components/menu.tsx
//

// ----------------------------------------------------------------------
function menu(theme) {
    return {
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    ...(0,css/* menuItem */.D9)(theme)
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/list.tsx
// ----------------------------------------------------------------------
function list(theme) {
    return {
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: "inherit",
                    minWidth: "auto",
                    marginRight: theme.spacing(2)
                }
            }
        },
        MuiListItemAvatar: {
            styleOverrides: {
                root: {
                    minWidth: "auto",
                    marginRight: theme.spacing(2)
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    margin: 0
                },
                multiline: {
                    margin: 0
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableCell/index.js
var TableCell = __webpack_require__(80765);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableRow/index.js
var TableRow = __webpack_require__(44233);
;// CONCATENATED MODULE: ./src/theme/overrides/components/table.tsx



// ----------------------------------------------------------------------
function table(theme) {
    return {
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    position: "relative"
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    [`&.${TableRow.tableRowClasses.selected}`]: {
                        backgroundColor: (0,styles.alpha)(theme.palette.primary.dark, 0.04),
                        "&:hover": {
                            backgroundColor: (0,styles.alpha)(theme.palette.primary.dark, 0.08)
                        }
                    },
                    "&:last-of-type": {
                        [`& .${TableCell.tableCellClasses.root}`]: {
                            borderColor: "transparent"
                        }
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottomStyle: "dashed"
                },
                head: {
                    fontSize: 14,
                    color: theme.palette.text.secondary,
                    fontWeight: theme.typography.fontWeightSemiBold,
                    backgroundColor: theme.palette.background.neutral
                },
                stickyHeader: {
                    backgroundColor: theme.palette.background.paper,
                    backgroundImage: `linear-gradient(to bottom, ${theme.palette.background.neutral} 0%, ${theme.palette.background.neutral} 100%)`
                },
                paddingCheckbox: {
                    paddingLeft: theme.spacing(1)
                }
            }
        },
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    width: "100%"
                },
                toolbar: {
                    height: 64
                },
                actions: {
                    marginRight: 8
                },
                select: {
                    paddingLeft: 8,
                    "&:focus": {
                        borderRadius: theme.shape.borderRadius
                    }
                },
                selectIcon: {
                    right: 4,
                    width: 16,
                    height: 16,
                    top: "calc(50% - 8px)"
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Alert/index.js
var Alert = __webpack_require__(81932);
;// CONCATENATED MODULE: ./src/theme/overrides/components/alert.tsx


// ----------------------------------------------------------------------
const alert_COLORS = [
    "info",
    "success",
    "warning",
    "error"
];
// ----------------------------------------------------------------------
function alert_alert(theme) {
    const lightMode = theme.palette.mode === "light";
    const rootStyles = (ownerState)=>{
        const standardVariant = ownerState.variant === "standard";
        const filledVariant = ownerState.variant === "filled";
        const outlinedVariant = ownerState.variant === "outlined";
        const colorStyle = alert_COLORS.map((color)=>({
                ...ownerState.severity === color && {
                    // STANDARD
                    ...standardVariant && {
                        color: theme.palette[color][lightMode ? "darker" : "lighter"],
                        backgroundColor: theme.palette[color][lightMode ? "lighter" : "darker"],
                        [`& .${Alert.alertClasses.icon}`]: {
                            color: theme.palette[color][lightMode ? "main" : "light"]
                        }
                    },
                    // FILLED
                    ...filledVariant && {
                        color: theme.palette[color].contrastText,
                        backgroundColor: theme.palette[color].main
                    },
                    // OUTLINED
                    ...outlinedVariant && {
                        backgroundColor: (0,styles.alpha)(theme.palette[color].main, 0.08),
                        color: theme.palette[color][lightMode ? "dark" : "light"],
                        border: `solid 1px ${(0,styles.alpha)(theme.palette[color].main, 0.16)}`,
                        [`& .${Alert.alertClasses.icon}`]: {
                            color: theme.palette[color].main
                        }
                    }
                }
            }));
        return [
            ...colorStyle
        ];
    };
    return {
        MuiAlert: {
            styleOverrides: {
                root: ({ ownerState })=>rootStyles(ownerState),
                icon: {
                    opacity: 1
                }
            }
        },
        MuiAlertTitle: {
            styleOverrides: {
                root: {
                    marginBottom: theme.spacing(0.5),
                    fontWeight: theme.typography.fontWeightSemiBold
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Badge/index.js
var Badge = __webpack_require__(42454);
;// CONCATENATED MODULE: ./src/theme/overrides/components/badge.tsx

function badge(theme) {
    return {
        MuiBadge: {
            styleOverrides: {
                dot: {
                    borderRadius: "50%"
                },
                root: ({ ownerState })=>{
                    const alway = ownerState.variant === "alway";
                    const online = ownerState.variant === "online";
                    const busy = ownerState.variant === "busy";
                    const offline = ownerState.variant === "offline";
                    const invisible = ownerState.variant === "invisible";
                    const baseStyles = {
                        [`&.${Badge.badgeClasses.invisible}`]: {
                            transform: "unset"
                        },
                        width: 10,
                        zIndex: 9,
                        padding: 0,
                        height: 10,
                        minWidth: "auto",
                        "&:before, &:after": {
                            content: "''",
                            borderRadius: 1,
                            backgroundColor: theme.palette.common.white
                        }
                    };
                    return {
                        ...online && {
                            [`& .${Badge.badgeClasses.badge}`]: {
                                ...baseStyles,
                                backgroundColor: theme.palette.success.main
                            }
                        },
                        ...busy && {
                            [`& .${Badge.badgeClasses.badge}`]: {
                                ...baseStyles,
                                backgroundColor: theme.palette.error.main,
                                "&:before": {
                                    width: 6,
                                    height: 2
                                }
                            }
                        },
                        ...offline && {
                            [`& .${Badge.badgeClasses.badge}`]: {
                                ...baseStyles,
                                backgroundColor: theme.palette.text.disabled,
                                "&:before": {
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%"
                                }
                            }
                        },
                        ...alway && {
                            [`& .${Badge.badgeClasses.badge}`]: {
                                ...baseStyles,
                                backgroundColor: theme.palette.warning.main,
                                "&:before": {
                                    width: 2,
                                    height: 4,
                                    transform: "translateX(1px) translateY(-1px)"
                                },
                                "&:after": {
                                    width: 2,
                                    height: 4,
                                    transform: "translateY(1px) rotate(125deg)"
                                }
                            }
                        },
                        ...invisible && {
                            [`& .${Badge.badgeClasses.badge}`]: {
                                display: "none"
                            }
                        }
                    };
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/paper.tsx

// ----------------------------------------------------------------------
function paper(theme) {
    return {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none"
                },
                outlined: {
                    borderColor: (0,styles.alpha)(theme.palette.grey[500], 0.16)
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/radio.tsx
// ----------------------------------------------------------------------
function radio_radio(theme) {
    return {
        // CHECKBOX, RADIO, SWITCH
        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    ...theme.typography.body2
                }
            }
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(1)
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/appbar.tsx
// ----------------------------------------------------------------------
function appBar(theme) {
    return {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: "none"
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Drawer/index.js
var Drawer = __webpack_require__(20094);
;// CONCATENATED MODULE: ./src/theme/overrides/components/drawer.tsx


//

// ----------------------------------------------------------------------
function drawer(theme) {
    const lightMode = theme.palette.mode === "light";
    return {
        MuiDrawer: {
            styleOverrides: {
                root: ({ ownerState })=>({
                        ...ownerState.variant === "temporary" && {
                            [`& .${Drawer.drawerClasses.paper}`]: {
                                ...(0,css/* paper */.uS)({
                                    theme
                                }),
                                ...ownerState.anchor === "left" && {
                                    boxShadow: `40px 40px 80px -8px ${(0,styles.alpha)(lightMode ? theme.palette.grey[500] : theme.palette.common.black, 0.24)}`
                                },
                                ...ownerState.anchor === "right" && {
                                    boxShadow: `-40px 40px 80px -8px ${(0,styles.alpha)(lightMode ? theme.palette.grey[500] : theme.palette.common.black, 0.24)}`
                                }
                            }
                        }
                    })
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/dialog.tsx
// ----------------------------------------------------------------------
function dialog(theme) {
    return {
        MuiDialog: {
            styleOverrides: {
                paper: ({ ownerState })=>({
                        boxShadow: theme.customShadows.dialog,
                        borderRadius: theme.shape.borderRadius * 2,
                        ...!ownerState.fullScreen && {
                            margin: theme.spacing(2)
                        }
                    }),
                paperFullScreen: {
                    borderRadius: 0
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3)
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(0, 3)
                },
                dividers: {
                    borderTop: 0,
                    borderBottomStyle: "dashed",
                    paddingBottom: theme.spacing(3)
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3),
                    "& > :not(:first-of-type)": {
                        marginLeft: theme.spacing(1.5)
                    }
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/AvatarGroup/index.js
var AvatarGroup = __webpack_require__(71394);
;// CONCATENATED MODULE: ./src/theme/overrides/components/avatar.tsx


// ----------------------------------------------------------------------
const avatar_COLORS = [
    "default",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
];
const colorByName = (name)=>{
    const charAt = name.charAt(0);
    if ([
        "A",
        "C",
        "F"
    ].includes(charAt)) return "primary";
    if ([
        "E",
        "D",
        "H"
    ].includes(charAt)) return "secondary";
    if ([
        "I",
        "K",
        "L"
    ].includes(charAt)) return "info";
    if ([
        "M",
        "N",
        "P"
    ].includes(charAt)) return "success";
    if ([
        "Q",
        "S",
        "T"
    ].includes(charAt)) return "warning";
    if ([
        "V",
        "X",
        "Y"
    ].includes(charAt)) return "error";
    return "default";
};
// ----------------------------------------------------------------------
function avatar(theme) {
    return {
        MuiAvatar: {
            variants: avatar_COLORS.map((color)=>color === "default" ? {
                    props: {
                        color: "default"
                    },
                    style: {
                        color: theme.palette.text.secondary,
                        backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.24)
                    }
                } : {
                    props: {
                        color
                    },
                    style: {
                        color: theme.palette[color].contrastText,
                        backgroundColor: theme.palette[color].main
                    }
                }),
            styleOverrides: {
                rounded: {
                    borderRadius: theme.shape.borderRadius * 1.5
                },
                colorDefault: ({ ownerState })=>{
                    const color = colorByName(`${ownerState.alt}`);
                    return {
                        ...!!ownerState.alt && {
                            ...color !== "default" ? {
                                color: theme.palette[color].contrastText,
                                backgroundColor: theme.palette[color].main
                            } : {
                                color: theme.palette.text.secondary,
                                backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.24)
                            }
                        }
                    };
                }
            }
        },
        MuiAvatarGroup: {
            styleOverrides: {
                root: ({ ownerState })=>({
                        justifyContent: "flex-end",
                        ...ownerState.variant === "compact" && {
                            width: 40,
                            height: 40,
                            position: "relative",
                            [`& .${AvatarGroup.avatarGroupClasses.avatar}`]: {
                                margin: 0,
                                width: 28,
                                height: 28,
                                position: "absolute",
                                "&:first-of-type": {
                                    left: 0,
                                    bottom: 0,
                                    zIndex: 9
                                },
                                "&:last-of-type": {
                                    top: 0,
                                    right: 0
                                }
                            }
                        }
                    }),
                avatar: {
                    fontSize: 16,
                    fontWeight: theme.typography.fontWeightSemiBold,
                    "&:first-of-type": {
                        fontSize: 12,
                        color: theme.palette.primary.dark,
                        backgroundColor: theme.palette.primary.lighter
                    }
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Rating/index.js
var Rating = __webpack_require__(34972);
;// CONCATENATED MODULE: ./src/theme/overrides/components/rating.tsx



// ----------------------------------------------------------------------
function rating(theme) {
    return {
        MuiRating: {
            styleOverrides: {
                root: {
                    [`&.${Rating.ratingClasses.disabled}`]: {
                        opacity: 0.48
                    }
                },
                iconEmpty: {
                    color: (0,styles.alpha)(theme.palette.grey[500], 0.48)
                },
                sizeSmall: {
                    [`& .${SvgIcon.svgIconClasses.root}`]: {
                        width: 20,
                        height: 20
                    }
                },
                sizeMedium: {
                    [`& .${SvgIcon.svgIconClasses.root}`]: {
                        width: 24,
                        height: 24
                    }
                },
                sizeLarge: {
                    [`& .${SvgIcon.svgIconClasses.root}`]: {
                        width: 28,
                        height: 28
                    }
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Slider/index.js
var Slider = __webpack_require__(48839);
;// CONCATENATED MODULE: ./src/theme/overrides/components/slider.tsx

// ----------------------------------------------------------------------
function slider(theme) {
    const lightMode = theme.palette.mode === "light";
    return {
        MuiSlider: {
            styleOverrides: {
                root: {
                    [`&.${Slider.sliderClasses.disabled}`]: {
                        color: theme.palette.action.disabled
                    }
                },
                rail: {
                    opacity: 0.32
                },
                markLabel: {
                    fontSize: 13,
                    color: theme.palette.text.disabled
                },
                valueLabel: {
                    borderRadius: 8,
                    backgroundColor: theme.palette.grey[lightMode ? 800 : 700]
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
;// CONCATENATED MODULE: ./src/theme/overrides/components/button.tsx


// ----------------------------------------------------------------------
const button_COLORS = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
];
// ----------------------------------------------------------------------
function button_button(theme) {
    const lightMode = theme.palette.mode === "light";
    const rootStyles = (ownerState)=>{
        const inheritColor = ownerState.color === "inherit";
        const containedVariant = ownerState.variant === "contained";
        const outlinedVariant = ownerState.variant === "outlined";
        const textVariant = ownerState.variant === "text";
        const softVariant = ownerState.variant === "soft";
        const smallSize = ownerState.size === "small";
        const mediumSize = ownerState.size === "medium";
        const largeSize = ownerState.size === "large";
        const defaultStyle = {
            ...inheritColor && {
                // CONTAINED
                ...containedVariant && {
                    color: lightMode ? theme.palette.common.white : theme.palette.grey[800],
                    backgroundColor: lightMode ? theme.palette.grey[800] : theme.palette.common.white,
                    "&:hover": {
                        backgroundColor: lightMode ? theme.palette.grey[700] : theme.palette.grey[400]
                    }
                },
                // OUTLINED
                ...outlinedVariant && {
                    borderColor: (0,styles.alpha)(theme.palette.grey[500], 0.32),
                    "&:hover": {
                        backgroundColor: theme.palette.action.hover
                    }
                },
                // TEXT
                ...textVariant && {
                    "&:hover": {
                        backgroundColor: theme.palette.action.hover
                    }
                },
                // SOFT
                ...softVariant && {
                    color: theme.palette.text.primary,
                    backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.08),
                    "&:hover": {
                        backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.24)
                    }
                }
            },
            ...outlinedVariant && {
                "&:hover": {
                    borderColor: "currentColor",
                    boxShadow: "0 0 0 0.5px currentColor"
                }
            }
        };
        const colorStyle = button_COLORS.map((color)=>({
                ...ownerState.color === color && {
                    // CONTAINED
                    ...containedVariant && {
                        "&:hover": {
                            boxShadow: theme.customShadows[color]
                        }
                    },
                    // SOFT
                    ...softVariant && {
                        color: theme.palette[color][lightMode ? "dark" : "light"],
                        backgroundColor: (0,styles.alpha)(theme.palette[color].main, 0.16),
                        "&:hover": {
                            backgroundColor: (0,styles.alpha)(theme.palette[color].main, 0.32)
                        }
                    }
                }
            }));
        const disabledState = {
            [`&.${Button.buttonClasses.disabled}`]: {
                // SOFT
                ...softVariant && {
                    backgroundColor: theme.palette.action.disabledBackground
                }
            }
        };
        const size = {
            ...smallSize && {
                height: 30,
                fontSize: 13,
                paddingLeft: 8,
                paddingRight: 8,
                ...textVariant && {
                    paddingLeft: 4,
                    paddingRight: 4
                }
            },
            ...mediumSize && {
                paddingLeft: 12,
                paddingRight: 12,
                ...textVariant && {
                    paddingLeft: 8,
                    paddingRight: 8
                }
            },
            ...largeSize && {
                height: 48,
                fontSize: 15,
                paddingLeft: 16,
                paddingRight: 16,
                ...textVariant && {
                    paddingLeft: 10,
                    paddingRight: 10
                }
            }
        };
        return [
            defaultStyle,
            ...colorStyle,
            disabledState,
            size
        ];
    };
    return {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState })=>rootStyles(ownerState)
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/select.tsx
// ----------------------------------------------------------------------
function select_select(theme) {
    return {
        MuiSelect: {
            styleOverrides: {
                icon: {
                    right: 10,
                    width: 18,
                    height: 18,
                    top: "calc(50% - 9px)"
                }
            }
        },
        MuiNativeSelect: {
            styleOverrides: {
                icon: {
                    right: 10,
                    width: 18,
                    height: 18,
                    top: "calc(50% - 9px)"
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Switch/index.js
var Switch = __webpack_require__(56703);
;// CONCATENATED MODULE: ./src/theme/overrides/components/switch.tsx


// ----------------------------------------------------------------------
function switches(theme) {
    const lightMode = theme.palette.mode === "light";
    const rootStyles = (ownerState)=>({
            padding: "9px 13px 9px 12px",
            width: 58,
            height: 38,
            ...ownerState.size === "small" && {
                padding: "4px 8px 4px 7px",
                width: 40,
                height: 24
            },
            [`& .${Switch.switchClasses.thumb}`]: {
                width: 14,
                height: 14,
                boxShadow: "none",
                color: theme.palette.common.white,
                ...ownerState.size === "small" && {
                    width: 10,
                    height: 10
                }
            },
            [`& .${Switch.switchClasses.track}`]: {
                opacity: 1,
                borderRadius: 14,
                backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.48)
            },
            [`& .${Switch.switchClasses.switchBase}`]: {
                left: 3,
                padding: 12,
                ...ownerState.size === "small" && {
                    padding: 7
                },
                [`&.${Switch.switchClasses.checked}`]: {
                    transform: "translateX(13px)",
                    [`&+.${Switch.switchClasses.track}`]: {
                        opacity: 1
                    },
                    ...ownerState.size === "small" && {
                        transform: "translateX(9px)"
                    }
                },
                [`&.${Switch.switchClasses.disabled}`]: {
                    [`& .${Switch.switchClasses.thumb}`]: {
                        opacity: lightMode ? 1 : 0.48
                    },
                    [`&+.${Switch.switchClasses.track}`]: {
                        opacity: 0.48
                    }
                }
            }
        });
    return {
        MuiSwitch: {
            styleOverrides: {
                root: ({ ownerState })=>rootStyles(ownerState)
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/tooltip.tsx
// ----------------------------------------------------------------------
function tooltip(theme) {
    const lightMode = theme.palette.mode === "light";
    return {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.grey[lightMode ? 800 : 700]
                },
                arrow: {
                    color: theme.palette.grey[lightMode ? 800 : 700]
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/List/index.js
var List = __webpack_require__(6176);
;// CONCATENATED MODULE: ./src/theme/overrides/components/popover.tsx

//

// ----------------------------------------------------------------------
function popover(theme) {
    return {
        MuiPopover: {
            styleOverrides: {
                paper: {
                    ...(0,css/* paper */.uS)({
                        theme,
                        dropdown: true
                    }),
                    [`& .${List.listClasses.root}`]: {
                        paddingTop: 0,
                        paddingBottom: 0
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/stepper.tsx
// ----------------------------------------------------------------------
function stepper(theme) {
    return {
        MuiStepConnector: {
            styleOverrides: {
                line: {
                    borderColor: theme.palette.divider
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/svg-icon.tsx
// ----------------------------------------------------------------------
function svgIcon(theme) {
    return {
        MuiSvgIcon: {
            styleOverrides: {
                fontSizeLarge: {
                    width: 32,
                    height: 32,
                    fontSize: "inherit"
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/skeleton.tsx
// ----------------------------------------------------------------------
function skeleton(theme) {
    return {
        MuiSkeleton: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.background.neutral
                },
                rounded: {
                    borderRadius: theme.shape.borderRadius * 2
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/backdrop.tsx

// ----------------------------------------------------------------------
function backdrop(theme) {
    return {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: (0,styles.alpha)(theme.palette.grey[900], 0.8)
                },
                invisible: {
                    background: "transparent"
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/LinearProgress/index.js
var LinearProgress = __webpack_require__(71326);
;// CONCATENATED MODULE: ./src/theme/overrides/components/progress.tsx


// ----------------------------------------------------------------------
const progress_COLORS = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
];
// ----------------------------------------------------------------------
function progress(theme) {
    const rootStyles = (ownerState)=>{
        const bufferVariant = ownerState.variant === "buffer";
        const defaultStyle = {
            borderRadius: 4,
            [`& .${LinearProgress.linearProgressClasses.bar}`]: {
                borderRadius: 4
            },
            ...bufferVariant && {
                backgroundColor: "transparent"
            }
        };
        const colorStyle = progress_COLORS.map((color)=>({
                ...ownerState.color === color && {
                    backgroundColor: (0,styles.alpha)(theme.palette[color].main, 0.24)
                }
            }));
        return [
            defaultStyle,
            ...colorStyle
        ];
    };
    return {
        MuiLinearProgress: {
            styleOverrides: {
                root: ({ ownerState })=>rootStyles(ownerState)
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/timeline.tsx
// ----------------------------------------------------------------------
function timeline(theme) {
    return {
        MuiTimelineDot: {
            styleOverrides: {
                root: {
                    boxShadow: "none"
                }
            }
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.divider
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/checkbox.tsx
// ----------------------------------------------------------------------
function checkbox_checkbox(theme) {
    return {
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(1)
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Paper/index.js
var Paper = __webpack_require__(52694);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemIcon/index.js
var ListItemIcon = __webpack_require__(60061);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TablePagination/index.js
var TablePagination = __webpack_require__(15061);
;// CONCATENATED MODULE: ./src/theme/overrides/components/data-grid.tsx






//

// ----------------------------------------------------------------------
function dataGrid(theme) {
    const paperStyles = (0,css/* paper */.uS)({
        theme,
        dropdown: true
    });
    return {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    borderWidth: 0,
                    [`& .${TablePagination.tablePaginationClasses.root}`]: {
                        borderTop: 0
                    },
                    [`& .${TablePagination.tablePaginationClasses.toolbar}`]: {
                        height: "auto"
                    }
                },
                cell: {
                    borderBottom: `1px dashed ${theme.palette.divider}`
                },
                selectedRowCount: {
                    whiteSpace: "nowrap"
                },
                columnSeparator: {
                    color: theme.palette.divider
                },
                toolbarContainer: {
                    padding: theme.spacing(2),
                    borderBottom: `1px dashed ${theme.palette.divider}`,
                    backgroundColor: theme.palette.background.neutral
                },
                paper: {
                    ...paperStyles,
                    padding: 0
                },
                menu: {
                    [`& .${Paper.paperClasses.root}`]: {
                        ...paperStyles
                    },
                    [`& .${List.listClasses.root}`]: {
                        padding: 0,
                        [`& .${ListItemIcon.listItemIconClasses.root}`]: {
                            minWidth: 0,
                            marginRight: theme.spacing(2)
                        }
                    }
                },
                columnHeaders: {
                    borderRadius: 0,
                    backgroundColor: theme.palette.background.neutral
                },
                panelHeader: {
                    padding: theme.spacing(2)
                },
                panelFooter: {
                    padding: theme.spacing(2),
                    justifyContent: "flex-end",
                    borderTop: `dashed 1px ${theme.palette.divider}`,
                    [`& .${Button.buttonClasses.root}`]: {
                        "&:first-of-type": {
                            border: `solid 1px ${(0,styles.alpha)(theme.palette.grey[500], 0.24)}`
                        },
                        "&:last-of-type": {
                            marginLeft: theme.spacing(1.5),
                            color: theme.palette.background.paper,
                            backgroundColor: theme.palette.text.primary
                        }
                    }
                },
                filterForm: {
                    padding: theme.spacing(2)
                },
                filterFormValueInput: {
                    marginLeft: theme.spacing(2)
                },
                filterFormColumnInput: {
                    marginLeft: theme.spacing(2)
                },
                filterFormOperatorInput: {
                    marginLeft: theme.spacing(2)
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/tree-view.tsx
// ----------------------------------------------------------------------
function treeView(theme) {
    return {
        MuiTreeItem: {
            styleOverrides: {
                label: {
                    ...theme.typography.body2
                },
                iconContainer: {
                    width: "auto"
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/InputBase/index.js
var InputBase = __webpack_require__(73392);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/InputLabel/index.js
var InputLabel = __webpack_require__(97445);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/FilledInput/index.js
var FilledInput = __webpack_require__(26061);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/OutlinedInput/index.js
var OutlinedInput = __webpack_require__(47459);
;// CONCATENATED MODULE: ./src/theme/overrides/components/textfield.tsx





// ----------------------------------------------------------------------
function textField(theme) {
    const color = {
        focused: theme.palette.text.primary,
        active: theme.palette.text.secondary,
        placeholder: theme.palette.text.disabled
    };
    const font = {
        label: theme.typography.body1,
        value: theme.typography.body2
    };
    return {
        // HELPER
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginTop: theme.spacing(1)
                }
            }
        },
        // LABEL
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    ...font.value,
                    color: color.placeholder,
                    [`&.${InputLabel.inputLabelClasses.shrink}`]: {
                        ...font.label,
                        fontWeight: 600,
                        color: color.active,
                        [`&.${InputLabel.inputLabelClasses.focused}`]: {
                            color: color.focused
                        },
                        [`&.${InputLabel.inputLabelClasses.error}`]: {
                            color: theme.palette.error.main
                        },
                        [`&.${InputLabel.inputLabelClasses.disabled}`]: {
                            color: theme.palette.text.disabled
                        },
                        [`&.${InputLabel.inputLabelClasses.filled}`]: {
                            transform: "translate(12px, 6px) scale(0.75)"
                        }
                    }
                }
            }
        },
        // BASE
        MuiInputBase: {
            styleOverrides: {
                root: {
                    [`&.${InputBase.inputBaseClasses.disabled}`]: {
                        "& svg": {
                            color: theme.palette.text.disabled
                        }
                    }
                },
                input: {
                    ...font.value,
                    "&::placeholder": {
                        opacity: 1,
                        color: color.placeholder
                    }
                }
            }
        },
        // STANDARD
        MuiInput: {
            styleOverrides: {
                underline: {
                    "&:before": {
                        borderBottomColor: (0,styles.alpha)(theme.palette.grey[500], 0.32)
                    },
                    "&:after": {
                        borderBottomColor: color.focused
                    }
                }
            }
        },
        // OUTLINED
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    [`&.${OutlinedInput.outlinedInputClasses.focused}`]: {
                        [`& .${OutlinedInput.outlinedInputClasses.notchedOutline}`]: {
                            borderColor: color.focused
                        }
                    },
                    [`&.${OutlinedInput.outlinedInputClasses.error}`]: {
                        [`& .${OutlinedInput.outlinedInputClasses.notchedOutline}`]: {
                            borderColor: theme.palette.error.main
                        }
                    },
                    [`&.${OutlinedInput.outlinedInputClasses.disabled}`]: {
                        [`& .${OutlinedInput.outlinedInputClasses.notchedOutline}`]: {
                            borderColor: theme.palette.action.disabledBackground
                        }
                    }
                },
                notchedOutline: {
                    borderColor: (0,styles.alpha)(theme.palette.grey[500], 0.2),
                    transition: theme.transitions.create([
                        "border-color"
                    ], {
                        duration: theme.transitions.duration.shortest
                    })
                }
            }
        },
        // FILLED
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.08),
                    "&:hover": {
                        backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.16)
                    },
                    [`&.${FilledInput.filledInputClasses.focused}`]: {
                        backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.16)
                    },
                    [`&.${FilledInput.filledInputClasses.error}`]: {
                        backgroundColor: (0,styles.alpha)(theme.palette.error.main, 0.08),
                        [`&.${FilledInput.filledInputClasses.focused}`]: {
                            backgroundColor: (0,styles.alpha)(theme.palette.error.main, 0.16)
                        }
                    },
                    [`&.${FilledInput.filledInputClasses.disabled}`]: {
                        backgroundColor: theme.palette.action.disabledBackground
                    }
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Accordion/index.js
var Accordion = __webpack_require__(6785);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/AccordionSummary/index.js
var AccordionSummary = __webpack_require__(6090);
;// CONCATENATED MODULE: ./src/theme/overrides/components/accordion.tsx



// ----------------------------------------------------------------------
function accordion(theme) {
    return {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
                    [`&.${Accordion.accordionClasses.expanded}`]: {
                        boxShadow: theme.customShadows.z8,
                        borderRadius: theme.shape.borderRadius,
                        backgroundColor: theme.palette.background.paper
                    },
                    [`&.${Accordion.accordionClasses.disabled}`]: {
                        backgroundColor: "transparent"
                    }
                }
            }
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    paddingLeft: theme.spacing(2),
                    paddingRight: theme.spacing(1),
                    [`&.${AccordionSummary.accordionSummaryClasses.disabled}`]: {
                        opacity: 1,
                        color: theme.palette.action.disabled,
                        [`& .${Typography.typographyClasses.root}`]: {
                            color: "inherit"
                        }
                    }
                },
                expandIconWrapper: {
                    color: "inherit"
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/typography.tsx
// ----------------------------------------------------------------------
function typography_typography(theme) {
    return {
        MuiTypography: {
            styleOverrides: {
                paragraph: {
                    marginBottom: theme.spacing(2)
                },
                gutterBottom: {
                    marginBottom: theme.spacing(1)
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/PaginationItem/index.js
var PaginationItem = __webpack_require__(4504);
;// CONCATENATED MODULE: ./src/theme/overrides/components/pagination.tsx


// ----------------------------------------------------------------------
const pagination_COLORS = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
];
// ----------------------------------------------------------------------
function pagination(theme) {
    const lightMode = theme.palette.mode === "light";
    const rootStyles = (ownerState)=>{
        const defaultColor = ownerState.color === "standard";
        const filledVariant = ownerState.variant === "text";
        const outlinedVariant = ownerState.variant === "outlined";
        const softVariant = ownerState.variant === "soft";
        const defaultStyle = {
            [`& .${PaginationItem.paginationItemClasses.root}`]: {
                ...outlinedVariant && {
                    borderColor: (0,styles.alpha)(theme.palette.grey[500], 0.24)
                },
                [`&.${PaginationItem.paginationItemClasses.selected}`]: {
                    fontWeight: theme.typography.fontWeightSemiBold,
                    ...outlinedVariant && {
                        borderColor: "currentColor"
                    },
                    ...defaultColor && {
                        backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.08),
                        ...filledVariant && {
                            color: lightMode ? theme.palette.common.white : theme.palette.grey[800],
                            backgroundColor: theme.palette.text.primary,
                            "&:hover": {
                                backgroundColor: lightMode ? theme.palette.grey[700] : theme.palette.grey[100]
                            }
                        }
                    }
                }
            }
        };
        const colorStyle = pagination_COLORS.map((color)=>({
                ...ownerState.color === color && {
                    [`& .${PaginationItem.paginationItemClasses.root}`]: {
                        [`&.${PaginationItem.paginationItemClasses.selected}`]: {
                            ...ownerState.color === color && {
                                // SOFT
                                ...softVariant && {
                                    color: theme.palette[color][lightMode ? "dark" : "light"],
                                    backgroundColor: (0,styles.alpha)(theme.palette[color].main, 0.08),
                                    "&:hover": {
                                        backgroundColor: (0,styles.alpha)(theme.palette[color].main, 0.16)
                                    }
                                }
                            }
                        }
                    }
                }
            }));
        return [
            defaultStyle,
            ...colorStyle
        ];
    };
    return {
        MuiPagination: {
            styleOverrides: {
                root: ({ ownerState })=>rootStyles(ownerState)
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/date-picker.tsx


// components

// ----------------------------------------------------------------------
const dateList = [
    "DatePicker",
    "DateTimePicker",
    "StaticDatePicker",
    "DesktopDatePicker",
    "DesktopDateTimePicker",
    //
    "MobileDatePicker",
    "MobileDateTimePicker"
];
const timeList = [
    "TimePicker",
    "MobileTimePicker",
    "StaticTimePicker",
    "DesktopTimePicker"
];
const switchIcon = ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
        icon: "eva:chevron-down-fill",
        width: 24
    });
const leftIcon = ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
        icon: "eva:arrow-ios-back-fill",
        width: 24
    });
const rightIcon = ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
        icon: "eva:arrow-ios-forward-fill",
        width: 24
    });
const calendarIcon = ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
        icon: "solar:calendar-mark-bold-duotone",
        width: 24
    });
const clockIcon = ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
        icon: "solar:clock-circle-outline",
        width: 24
    });
const desktopTypes = dateList.reduce((result, currentValue)=>{
    result[`Mui${currentValue}`] = {
        defaultProps: {
            slots: {
                openPickerIcon: calendarIcon,
                leftArrowIcon: leftIcon,
                rightArrowIcon: rightIcon,
                switchViewIcon: switchIcon
            }
        }
    };
    return result;
}, {});
const timeTypes = timeList.reduce((result, currentValue)=>{
    result[`Mui${currentValue}`] = {
        defaultProps: {
            slots: {
                openPickerIcon: clockIcon,
                rightArrowIcon: rightIcon,
                switchViewIcon: switchIcon
            }
        }
    };
    return result;
}, {});
function datePicker(theme) {
    return {
        MuiPickersLayout: {
            styleOverrides: {
                root: {
                    "& .MuiPickersLayout-actionBar": {
                        [`& .${Button.buttonClasses.root}:last-of-type`]: {
                            backgroundColor: theme.palette.text.primary,
                            color: theme.palette.mode === "light" ? theme.palette.common.white : theme.palette.grey[800]
                        }
                    }
                }
            }
        },
        // Date
        ...desktopTypes,
        // Time
        ...timeTypes
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/breadcrumbs.tsx
// ----------------------------------------------------------------------
function breadcrumbs(theme) {
    return {
        MuiBreadcrumbs: {
            styleOverrides: {
                separator: {
                    marginLeft: theme.spacing(2),
                    marginRight: theme.spacing(2)
                },
                li: {
                    display: "inline-flex",
                    margin: theme.spacing(0.25, 0),
                    "& > *": {
                        ...theme.typography.body2
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/css-baseline.tsx
// ----------------------------------------------------------------------
function cssBaseline(theme) {
    return {
        MuiCssBaseline: {
            styleOverrides: {
                "*": {
                    boxSizing: "border-box"
                },
                html: {
                    margin: 0,
                    padding: 0,
                    width: "100%",
                    height: "100%",
                    WebkitOverflowScrolling: "touch"
                },
                body: {
                    margin: 0,
                    padding: 0,
                    width: "100%",
                    height: "100%"
                },
                "#root, #__next": {
                    width: "100%",
                    height: "100%"
                },
                input: {
                    "&[type=number]": {
                        MozAppearance: "textfield",
                        "&::-webkit-outer-spin-button": {
                            margin: 0,
                            WebkitAppearance: "none"
                        },
                        "&::-webkit-inner-spin-button": {
                            margin: 0,
                            WebkitAppearance: "none"
                        }
                    }
                },
                img: {
                    maxWidth: "100%",
                    display: "inline-block",
                    verticalAlign: "bottom"
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/ButtonGroup/index.js
var ButtonGroup = __webpack_require__(71113);
;// CONCATENATED MODULE: ./src/theme/overrides/components/button-group.tsx


// ----------------------------------------------------------------------
const button_group_COLORS = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
];
// ----------------------------------------------------------------------
function buttonGroup(theme) {
    const rootStyles = (ownerState)=>{
        const inheritColor = ownerState.color === "inherit";
        const containedVariant = ownerState.variant === "contained";
        const outlinedVariant = ownerState.variant === "outlined";
        const textVariant = ownerState.variant === "text";
        const softVariant = ownerState.variant === "soft";
        const horizontalOrientation = ownerState.orientation === "horizontal";
        const verticalOrientation = ownerState.orientation === "vertical";
        const defaultStyle = {
            [`& .${ButtonGroup.buttonGroupClasses.grouped}`]: {
                "&:not(:last-of-type)": {
                    ...!outlinedVariant && {
                        borderStyle: "solid",
                        ...inheritColor && {
                            borderColor: (0,styles.alpha)(theme.palette.grey[500], 0.32)
                        },
                        // HORIZONTAL
                        ...horizontalOrientation && {
                            borderWidth: "0px 1px 0px 0px"
                        },
                        // VERTICAL
                        ...verticalOrientation && {
                            borderWidth: "0px 0px 1px 0px"
                        }
                    }
                }
            }
        };
        const colorStyle = button_group_COLORS.map((color)=>({
                [`& .${ButtonGroup.buttonGroupClasses.grouped}`]: {
                    "&:not(:last-of-type)": {
                        ...!outlinedVariant && {
                            ...ownerState.color === color && {
                                // CONTAINED
                                ...containedVariant && {
                                    borderColor: (0,styles.alpha)(theme.palette[color].dark, 0.48)
                                },
                                // TEXT
                                ...textVariant && {
                                    borderColor: (0,styles.alpha)(theme.palette[color].main, 0.48)
                                },
                                // SOFT
                                ...softVariant && {
                                    borderColor: (0,styles.alpha)(theme.palette[color].dark, 0.24)
                                }
                            }
                        }
                    }
                }
            }));
        const disabledState = {
            [`& .${ButtonGroup.buttonGroupClasses.grouped}`]: {
                [`&.${ButtonGroup.buttonGroupClasses.disabled}`]: {
                    "&:not(:last-of-type)": {
                        borderColor: theme.palette.action.disabledBackground
                    }
                }
            }
        };
        return [
            defaultStyle,
            ...colorStyle,
            disabledState
        ];
    };
    return {
        MuiButtonGroup: {
            styleOverrides: {
                root: ({ ownerState })=>rootStyles(ownerState)
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Autocomplete/index.js
var Autocomplete = __webpack_require__(45003);
;// CONCATENATED MODULE: ./src/theme/overrides/components/autocomplete.tsx



//

// ----------------------------------------------------------------------
function autocomplete(theme) {
    return {
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    [`& span.${Autocomplete.autocompleteClasses.tag}`]: {
                        ...theme.typography.subtitle2,
                        height: 24,
                        minWidth: 24,
                        lineHeight: "24px",
                        textAlign: "center",
                        padding: theme.spacing(0, 0.75),
                        color: theme.palette.text.secondary,
                        borderRadius: theme.shape.borderRadius,
                        backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.16)
                    }
                },
                paper: {
                    ...(0,css/* paper */.uS)({
                        theme,
                        dropdown: true
                    })
                },
                listbox: {
                    padding: 0,
                    [`& .${Autocomplete.autocompleteClasses.option}`]: {
                        ...(0,css/* menuItem */.D9)(theme)
                    }
                },
                endAdornment: {
                    [`& .${SvgIcon.svgIconClasses.root}`]: {
                        width: 18,
                        height: 18
                    }
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/ToggleButton/index.js
var ToggleButton = __webpack_require__(50117);
;// CONCATENATED MODULE: ./src/theme/overrides/components/toggle-button.tsx


// ----------------------------------------------------------------------
const toggle_button_COLORS = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
];
// ----------------------------------------------------------------------
function toggleButton(theme) {
    const rootStyles = (ownerState)=>{
        const defaultStyle = {
            [`&.${ToggleButton.toggleButtonClasses.selected}`]: {
                borderColor: "currentColor",
                boxShadow: "0 0 0 0.5px currentColor"
            }
        };
        const colorStyle = toggle_button_COLORS.map((color)=>({
                ...ownerState.color === color && {
                    "&:hover": {
                        borderColor: (0,styles.alpha)(theme.palette[color].main, 0.48),
                        backgroundColor: (0,styles.alpha)(theme.palette[color].main, theme.palette.action.hoverOpacity)
                    }
                }
            }));
        const disabledState = {
            [`&.${ToggleButton.toggleButtonClasses.disabled}`]: {
                [`&.${ToggleButton.toggleButtonClasses.selected}`]: {
                    color: theme.palette.action.disabled,
                    backgroundColor: theme.palette.action.selected,
                    borderColor: theme.palette.action.disabledBackground
                }
            }
        };
        return [
            defaultStyle,
            ...colorStyle,
            disabledState
        ];
    };
    return {
        MuiToggleButton: {
            styleOverrides: {
                root: ({ ownerState })=>rootStyles(ownerState)
            }
        },
        MuiToggleButtonGroup: {
            styleOverrides: {
                root: {
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: theme.palette.background.paper,
                    border: `solid 1px ${(0,styles.alpha)(theme.palette.grey[500], 0.08)}`
                },
                grouped: {
                    margin: 4,
                    [`&.${ToggleButton.toggleButtonClasses.selected}`]: {
                        boxShadow: "none"
                    },
                    "&:not(:first-of-type), &:not(:last-of-type)": {
                        borderRadius: theme.shape.borderRadius,
                        borderColor: "transparent"
                    }
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/lab/node/LoadingButton/index.js
var LoadingButton = __webpack_require__(17466);
;// CONCATENATED MODULE: ./src/theme/overrides/components/loading-button.tsx

// ----------------------------------------------------------------------
function loadingButton(theme) {
    return {
        MuiLoadingButton: {
            styleOverrides: {
                root: ({ ownerState })=>({
                        ...ownerState.variant === "soft" && {
                            [`& .${LoadingButton.loadingButtonClasses.loadingIndicatorStart}`]: {
                                left: 10
                            },
                            [`& .${LoadingButton.loadingButtonClasses.loadingIndicatorEnd}`]: {
                                right: 14
                            },
                            ...ownerState.size === "small" && {
                                [`& .${LoadingButton.loadingButtonClasses.loadingIndicatorStart}`]: {
                                    left: 10
                                },
                                [`& .${LoadingButton.loadingButtonClasses.loadingIndicatorEnd}`]: {
                                    right: 10
                                }
                            }
                        }
                    })
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/index.ts

//

//










































// ----------------------------------------------------------------------
function componentsOverrides(theme) {
    const components = merge_default()(defaultProps(theme), //
    fab(theme), tabs(theme), chip(theme), card(theme), menu(theme), list(theme), badge(theme), table(theme), paper(theme), alert_alert(theme), radio_radio(theme), select_select(theme), button_button(theme), rating(theme), dialog(theme), appBar(theme), avatar(theme), slider(theme), drawer(theme), stepper(theme), tooltip(theme), popover(theme), svgIcon(theme), switches(theme), checkbox_checkbox(theme), dataGrid(theme), skeleton(theme), timeline(theme), treeView(theme), backdrop(theme), progress(theme), textField(theme), accordion(theme), typography_typography(theme), pagination(theme), datePicker(theme), buttonGroup(theme), breadcrumbs(theme), cssBaseline(theme), autocomplete(theme), toggleButton(theme), loadingButton(theme));
    return components;
}

// EXTERNAL MODULE: ./src/theme/options/presets.ts
var presets = __webpack_require__(41367);
;// CONCATENATED MODULE: ./src/theme/options/dark-mode.ts



// ----------------------------------------------------------------------
function darkMode(mode) {
    const theme = {
        palette: (0,palette/* palette */.D)(mode),
        shadows: shadows(mode),
        customShadows: customShadows(mode)
    };
    return theme;
}

;// CONCATENATED MODULE: ./src/theme/options/contrast.ts


// ----------------------------------------------------------------------
function contrast(contrastBold, mode) {
    const theme = {
        ...contrastBold && mode === "light" && {
            palette: {
                background: {
                    default: (0,palette/* palette */.D)(mode).grey[100]
                }
            }
        }
    };
    const components = {
        ...contrastBold && {
            MuiCard: {
                styleOverrides: {
                    root: {
                        boxShadow: customShadows(mode).z4
                    }
                }
            }
        }
    };
    return {
        theme,
        components
    };
}

// EXTERNAL MODULE: ./node_modules/stylis-plugin-rtl/dist/cjs/stylis-rtl.js
var stylis_rtl = __webpack_require__(85210);
var stylis_rtl_default = /*#__PURE__*/__webpack_require__.n(stylis_rtl);
// EXTERNAL MODULE: ./node_modules/@emotion/cache/dist/emotion-cache.esm.js + 7 modules
var emotion_cache_esm = __webpack_require__(81783);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-6bdfffb2.esm.js + 1 modules
var emotion_element_6bdfffb2_esm = __webpack_require__(7904);
;// CONCATENATED MODULE: ./src/theme/options/right-to-left.tsx


// rtl

// emotion


function RTL({ children, themeDirection }) {
    (0,react_.useEffect)(()=>{
        document.dir = themeDirection;
    }, [
        themeDirection
    ]);
    const cacheRtl = (0,emotion_cache_esm["default"])({
        key: "rtl",
        prepend: true,
        // @ts-ignore
        // https://github.com/styled-components/stylis-plugin-rtl/issues/35
        stylisPlugins: [
            (stylis_rtl_default())
        ]
    });
    if (themeDirection === "rtl") {
        return /*#__PURE__*/ jsx_runtime_.jsx(emotion_element_6bdfffb2_esm.C, {
            value: cacheRtl,
            children: children
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    });
}
// ----------------------------------------------------------------------
function direction(themeDirection) {
    const theme = {
        direction: themeDirection
    };
    return theme;
}

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
;// CONCATENATED MODULE: ./src/theme/next-emotion-cache.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




// Adatped from https://github.com/garronej/tss-react/blob/main/src/next/appDir.tsx
function NextAppDirEmotionCacheProvider(props) {
    const { options, CacheProvider = emotion_element_6bdfffb2_esm.C, children } = props;
    const [registry] = react_.useState(()=>{
        const cache = (0,emotion_cache_esm["default"])(options);
        cache.compat = true;
        const prevInsert = cache.insert;
        let inserted = [];
        cache.insert = (...args)=>{
            const [selector, serialized] = args;
            if (cache.inserted[serialized.name] === undefined) {
                inserted.push({
                    name: serialized.name,
                    isGlobal: selector === ""
                });
            }
            return prevInsert(...args);
        };
        const flush = ()=>{
            const prevInserted = inserted;
            inserted = [];
            return prevInserted;
        };
        return {
            cache,
            flush
        };
    });
    (0,navigation.useServerInsertedHTML)(()=>{
        const inserted = registry.flush();
        if (inserted.length === 0) {
            return null;
        }
        let styles = "";
        let dataEmotionAttribute = registry.cache.key;
        const globals = [];
        inserted.forEach(({ name, isGlobal })=>{
            const style = registry.cache.inserted[name];
            if (typeof style !== "boolean") {
                if (isGlobal) {
                    globals.push({
                        name,
                        style
                    });
                } else {
                    styles += style;
                    dataEmotionAttribute += ` ${name}`;
                }
            }
        });
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                globals.map(({ name, style })=>/*#__PURE__*/ jsx_runtime_.jsx("style", {
                        "data-emotion": `${registry.cache.key}-global ${name}`,
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML: {
                            __html: style
                        }
                    }, name)),
                styles !== "" && /*#__PURE__*/ jsx_runtime_.jsx("style", {
                    "data-emotion": dataEmotionAttribute,
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML: {
                        __html: styles
                    }
                })
            ]
        });
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(CacheProvider, {
        value: registry.cache,
        children: children
    });
}

;// CONCATENATED MODULE: ./src/theme/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


// @mui


// locales

// components

// system





// options




//

function ThemeProvider({ children }) {
    const { currentLang } = (0,locales/* useLocales */.nt)();
    const settings = (0,components_settings/* useSettingsContext */.K$)();
    const darkModeOption = darkMode(settings.themeMode);
    const presetsOption = (0,presets/* presets */.u)(settings.themeColorPresets);
    const contrastOption = contrast(settings.themeContrast === "bold", settings.themeMode);
    const directionOption = direction(settings.themeDirection);
    const baseOption = (0,react_.useMemo)(()=>({
            palette: (0,palette/* palette */.D)("light"),
            shadows: shadows("light"),
            customShadows: customShadows("light"),
            typography: typography/* typography */.cp,
            shape: {
                borderRadius: 8
            }
        }), []);
    const memoizedValue = (0,react_.useMemo)(()=>merge_default()(// Base
        baseOption, // Direction: remove if not in use
        directionOption, // Dark mode: remove if not in use
        darkModeOption, // Presets: remove if not in use
        presetsOption, // Contrast: remove if not in use
        contrastOption.theme), [
        baseOption,
        directionOption,
        darkModeOption,
        presetsOption,
        contrastOption.theme
    ]);
    const theme = (0,styles.createTheme)(memoizedValue);
    theme.components = merge_default()(componentsOverrides(theme), contrastOption.components);
    const themeWithLocale = (0,react_.useMemo)(()=>(0,styles.createTheme)(theme, currentLang.systemValue), [
        currentLang.systemValue,
        theme
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(NextAppDirEmotionCacheProvider, {
        options: {
            key: "css"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(styles.ThemeProvider, {
            theme: themeWithLocale,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RTL, {
                themeDirection: settings.themeDirection,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(CssBaseline/* default */.Z, {}),
                    children
                ]
            })
        })
    });
}


/***/ }),

/***/ 41367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ primaryPresets),
/* harmony export */   u: () => (/* binding */ presets)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83476);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_theme_palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3857);
// @mui

// theme

// ----------------------------------------------------------------------
function presets(presetsColor) {
    const primary = primaryPresets.find((i)=>i.name === presetsColor);
    const theme = {
        palette: {
            primary
        },
        customShadows: {
            primary: `0 8px 16px 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(`${primary?.main}`, 0.24)}`
        }
    };
    return theme;
}
// ----------------------------------------------------------------------
const palette = (0,src_theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .palette */ .D)("light");
const primaryPresets = [
    // DEFAULT
    {
        name: "default",
        ...palette.primary
    },
    // CYAN
    {
        name: "cyan",
        lighter: "#CCF4FE",
        light: "#68CDF9",
        main: "#078DEE",
        dark: "#0351AB",
        darker: "#012972",
        contrastText: "#FFFFFF"
    },
    // PURPLE
    {
        name: "purple",
        lighter: "#EBD6FD",
        light: "#B985F4",
        main: "#7635dc",
        dark: "#431A9E",
        darker: "#200A69",
        contrastText: "#FFFFFF"
    },
    // BLUE
    {
        name: "blue",
        lighter: "#D1E9FC",
        light: "#76B0F1",
        main: "#2065D1",
        dark: "#103996",
        darker: "#061B64",
        contrastText: "#FFFFFF"
    },
    // ORANGE
    {
        name: "orange",
        lighter: "#FEF4D4",
        light: "#FED680",
        main: "#fda92d",
        dark: "#B66816",
        darker: "#793908",
        contrastText: palette.grey[800]
    },
    // RED
    {
        name: "red",
        lighter: "#FFE3D5",
        light: "#FFC1AC",
        main: "#FF3030",
        dark: "#B71833",
        darker: "#7A0930",
        contrastText: "#FFFFFF"
    }
];


/***/ }),

/***/ 3857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ palette)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83476);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

// SETUP COLORS
const GREY = {
    0: "#FFFFFF",
    100: "#F9FAFB",
    200: "#F4F6F8",
    300: "#DFE3E8",
    400: "#C4CDD5",
    500: "#919EAB",
    600: "#637381",
    700: "#454F5B",
    800: "#212B36",
    900: "#161C24"
};
const PRIMARY = {
    lighter: "#C8FAD6",
    light: "#5BE49B",
    main: "#00A76F",
    dark: "#007867",
    darker: "#004B50",
    contrastText: "#FFFFFF"
};
const SECONDARY = {
    lighter: "#EFD6FF",
    light: "#C684FF",
    main: "#8E33FF",
    dark: "#5119B7",
    darker: "#27097A",
    contrastText: "#FFFFFF"
};
const INFO = {
    lighter: "#CAFDF5",
    light: "#61F3F3",
    main: "#00B8D9",
    dark: "#006C9C",
    darker: "#003768",
    contrastText: "#FFFFFF"
};
const SUCCESS = {
    lighter: "#D3FCD2",
    light: "#77ED8B",
    main: "#22C55E",
    dark: "#118D57",
    darker: "#065E49",
    contrastText: "#ffffff"
};
const WARNING = {
    lighter: "#FFF5CC",
    light: "#FFD666",
    main: "#FFAB00",
    dark: "#B76E00",
    darker: "#7A4100",
    contrastText: GREY[800]
};
const ERROR = {
    lighter: "#FFE9D5",
    light: "#FFAC82",
    main: "#FF5630",
    dark: "#B71D18",
    darker: "#7A0916",
    contrastText: "#FFFFFF"
};
const COMMON = {
    common: {
        black: "#000000",
        white: "#FFFFFF"
    },
    primary: PRIMARY,
    secondary: SECONDARY,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    error: ERROR,
    grey: GREY,
    divider: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(GREY[500], 0.2),
    action: {
        hover: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(GREY[500], 0.08),
        selected: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(GREY[500], 0.16),
        disabled: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(GREY[500], 0.8),
        disabledBackground: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(GREY[500], 0.24),
        focus: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(GREY[500], 0.24),
        hoverOpacity: 0.08,
        disabledOpacity: 0.48
    }
};
function palette(mode) {
    const light = {
        ...COMMON,
        mode: "light",
        text: {
            primary: GREY[800],
            secondary: GREY[600],
            disabled: GREY[500]
        },
        background: {
            paper: "#FFFFFF",
            default: "#FFFFFF",
            neutral: GREY[200]
        },
        action: {
            ...COMMON.action,
            active: GREY[600]
        }
    };
    const dark = {
        ...COMMON,
        mode: "dark",
        text: {
            primary: "#FFFFFF",
            secondary: GREY[500],
            disabled: GREY[600]
        },
        background: {
            paper: GREY[800],
            default: GREY[900],
            neutral: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(GREY[500], 0.12)
        },
        action: {
            ...COMMON.action,
            active: GREY[500]
        }
    };
    return mode === "light" ? light : dark;
}


/***/ }),

/***/ 65657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Qj: () => (/* reexport default from dynamic */ next_font_google_target_css_path_src_theme_typography_ts_import_Barlow_arguments_weight_900_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_secondaryFont___WEBPACK_IMPORTED_MODULE_1___default.a),
/* harmony export */   cp: () => (/* binding */ typography)
/* harmony export */ });
/* unused harmony exports remToPx, pxToRem, responsiveFontSizes */
/* harmony import */ var next_font_google_target_css_path_src_theme_typography_ts_import_Public_Sans_arguments_weight_400_500_600_700_800_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_primaryFont___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72803);
/* harmony import */ var next_font_google_target_css_path_src_theme_typography_ts_import_Public_Sans_arguments_weight_400_500_600_700_800_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_primaryFont___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_theme_typography_ts_import_Public_Sans_arguments_weight_400_500_600_700_800_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_primaryFont___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_src_theme_typography_ts_import_Barlow_arguments_weight_900_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_secondaryFont___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24853);
/* harmony import */ var next_font_google_target_css_path_src_theme_typography_ts_import_Barlow_arguments_weight_900_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_secondaryFont___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_theme_typography_ts_import_Barlow_arguments_weight_900_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_secondaryFont___WEBPACK_IMPORTED_MODULE_1__);


// ----------------------------------------------------------------------
function remToPx(value) {
    return Math.round(parseFloat(value) * 16);
}
function pxToRem(value) {
    return `${value / 16}rem`;
}
function responsiveFontSizes({ sm, md, lg }) {
    return {
        "@media (min-width:600px)": {
            fontSize: pxToRem(sm)
        },
        "@media (min-width:900px)": {
            fontSize: pxToRem(md)
        },
        "@media (min-width:1200px)": {
            fontSize: pxToRem(lg)
        }
    };
}
// ----------------------------------------------------------------------
// LEARN MORE
// https://nextjs.org/docs/basic-features/font-optimization#google-fonts
const typography = {
    fontFamily: (next_font_google_target_css_path_src_theme_typography_ts_import_Public_Sans_arguments_weight_400_500_600_700_800_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_primaryFont___WEBPACK_IMPORTED_MODULE_0___default().style).fontFamily,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    h1: {
        fontWeight: 800,
        lineHeight: 80 / 64,
        fontSize: pxToRem(40),
        ...responsiveFontSizes({
            sm: 52,
            md: 58,
            lg: 64
        })
    },
    h2: {
        fontWeight: 800,
        lineHeight: 64 / 48,
        fontSize: pxToRem(32),
        ...responsiveFontSizes({
            sm: 40,
            md: 44,
            lg: 48
        })
    },
    h3: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(24),
        ...responsiveFontSizes({
            sm: 26,
            md: 30,
            lg: 32
        })
    },
    h4: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(20),
        ...responsiveFontSizes({
            sm: 20,
            md: 24,
            lg: 24
        })
    },
    h5: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(18),
        ...responsiveFontSizes({
            sm: 19,
            md: 20,
            lg: 20
        })
    },
    h6: {
        fontWeight: 700,
        lineHeight: 28 / 18,
        fontSize: pxToRem(17),
        ...responsiveFontSizes({
            sm: 18,
            md: 18,
            lg: 18
        })
    },
    subtitle1: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: pxToRem(16)
    },
    subtitle2: {
        fontWeight: 600,
        lineHeight: 22 / 14,
        fontSize: pxToRem(14)
    },
    body1: {
        lineHeight: 1.5,
        fontSize: pxToRem(16)
    },
    body2: {
        lineHeight: 22 / 14,
        fontSize: pxToRem(14)
    },
    caption: {
        lineHeight: 1.5,
        fontSize: pxToRem(12)
    },
    overline: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(12),
        textTransform: "uppercase"
    },
    button: {
        fontWeight: 700,
        lineHeight: 24 / 14,
        fontSize: pxToRem(14),
        textTransform: "unset"
    }
};




/***/ }),

/***/ 72810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hv: () => (/* binding */ endpoints),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   _i: () => (/* binding */ fetcher)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93258);
/* harmony import */ var src_config_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45060);

// config

// ----------------------------------------------------------------------
const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.create({
    baseURL: src_config_global__WEBPACK_IMPORTED_MODULE_0__/* .HOST_API */ .E0
});
axiosInstance.interceptors.response.use((res)=>res, (error)=>Promise.reject(error.response && error.response.data || "Something went wrong"));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);
// ----------------------------------------------------------------------
const fetcher = async (args)=>{
    const [url, config] = Array.isArray(args) ? args : [
        args
    ];
    const res = await axiosInstance.get(url, {
        ...config
    });
    return res.data;
};
// ----------------------------------------------------------------------
const endpoints = {
    chat: "/api/chat",
    kanban: "/api/kanban",
    calendar: "/api/calendar",
    auth: {
        me: "/api/auth/me",
        login: "/api/auth/login",
        register: "/api/auth/register"
    },
    mail: {
        list: "/api/mail/list",
        details: "/api/mail/details",
        labels: "/api/mail/labels"
    },
    post: {
        list: "/api/post/list",
        details: "/api/post/details",
        latest: "/api/post/latest",
        search: "/api/post/search"
    },
    product: {
        list: "/api/product/list",
        details: "/api/product/details",
        search: "/api/product/search"
    }
};


/***/ }),

/***/ 29043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ snakeCase),
/* harmony export */   o: () => (/* binding */ paramCase)
/* harmony export */ });
function paramCase(str) {
    return str.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}
function snakeCase(str) {
    return str.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");
}


/***/ }),

/***/ 94871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DY: () => (/* binding */ fToNow),
/* harmony export */   IO: () => (/* binding */ fTimestamp),
/* harmony export */   Mu: () => (/* binding */ fDate),
/* harmony export */   zM: () => (/* binding */ fDateTime)
/* harmony export */ });
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63864);
/* harmony import */ var date_fns_getTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88156);
/* harmony import */ var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14029);



function fDate(date, newFormat) {
    const fm = newFormat || "dd MMM yyyy";
    return date ? (0,date_fns_format__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(date), fm) : "";
}
function fDateTime(date, newFormat) {
    const fm = newFormat || "dd MMM yyyy p";
    return date ? (0,date_fns_format__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(date), fm) : "";
}
function fTimestamp(date) {
    return date ? (0,date_fns_getTime__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(new Date(date)) : "";
}
function fToNow(date) {
    return date ? (0,date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(new Date(date), {
        addSuffix: true
    }) : "";
}


/***/ }),

/***/ 55770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ localStorageGetItem),
/* harmony export */   V: () => (/* binding */ localStorageAvailable)
/* harmony export */ });
// ----------------------------------------------------------------------
function localStorageAvailable() {
    try {
        const key = "__some_random_key_you_are_not_going_to_use__";
        window.localStorage.setItem(key, key);
        window.localStorage.removeItem(key);
        return true;
    } catch (error) {
        return false;
    }
}
function localStorageGetItem(key, defaultValue = "") {
    const storageAvailable = localStorageAvailable();
    let value;
    if (storageAvailable) {
        value = localStorage.getItem(key) || defaultValue;
    }
    return value;
}


/***/ }),

/***/ 30838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/locales/i18n.ts

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/locales/i18n.ts`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const i18n = ((/* unused pure expression or super */ null && (__default__)));
// EXTERNAL MODULE: ./node_modules/simplebar-react/dist/simplebar.min.css
var simplebar_min = __webpack_require__(14732);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/styles.css
var styles = __webpack_require__(41401);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/plugins/captions/captions.css
var captions = __webpack_require__(85849);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/plugins/thumbnails/thumbnails.css
var thumbnails = __webpack_require__(89239);
// EXTERNAL MODULE: ./node_modules/mapbox-gl/dist/mapbox-gl.css
var mapbox_gl = __webpack_require__(54828);
// EXTERNAL MODULE: ./node_modules/react-quill/dist/quill.snow.css
var quill_snow = __webpack_require__(76132);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__(77047);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__(36057);
// EXTERNAL MODULE: ./node_modules/react-lazy-load-image-component/src/effects/blur.css
var effects_blur = __webpack_require__(32228);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/locale/index.js
var locale = __webpack_require__(79066);
;// CONCATENATED MODULE: ./src/locales/config-lang.ts
// @mui

// PLEASE REMOVE `LOCAL STORAGE` WHEN YOU CHANGE SETTINGS.
// ----------------------------------------------------------------------
const allLangs = [
    {
        label: "English",
        value: "en",
        systemValue: locale/* enUS */._z,
        icon: "flagpack:gb-nir"
    },
    {
        label: "French",
        value: "fr",
        systemValue: locale/* frFR */.gQ,
        icon: "flagpack:fr"
    },
    {
        label: "Vietnamese",
        value: "vi",
        systemValue: locale/* viVN */.Iv,
        icon: "flagpack:vn"
    },
    {
        label: "Chinese",
        value: "cn",
        systemValue: locale/* zhCN */.U1,
        icon: "flagpack:cn"
    },
    {
        label: "Arabic",
        value: "ar",
        systemValue: locale/* arSA */.gP,
        icon: "flagpack:sa"
    }
];
const defaultLang = allLangs[0]; // English
 // GET MORE COUNTRY FLAGS
 // https://icon-sets.iconify.design/flagpack/
 // https://www.dropbox.com/sh/nec1vwswr9lqbh9/AAB9ufC8iccxvtWi3rzZvndLa?dl=0

;// CONCATENATED MODULE: ./src/locales/use-locales.ts

const use_locales_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/locales/use-locales.ts`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: use_locales_esModule, $$typeof: use_locales_$$typeof } = use_locales_proxy;
const use_locales_default_ = use_locales_proxy.default;


/* harmony default export */ const use_locales = ((/* unused pure expression or super */ null && (use_locales_default_)));
;// CONCATENATED MODULE: ./src/locales/localization-provider.tsx

const localization_provider_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/locales/localization-provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: localization_provider_esModule, $$typeof: localization_provider_$$typeof } = localization_provider_proxy;
const localization_provider_default_ = localization_provider_proxy.default;


/* harmony default export */ const localization_provider = (localization_provider_default_);
;// CONCATENATED MODULE: ./src/locales/index.ts




;// CONCATENATED MODULE: ./src/theme/index.tsx

const theme_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/theme/index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: theme_esModule, $$typeof: theme_$$typeof } = theme_proxy;
const theme_default_ = theme_proxy.default;


/* harmony default export */ const theme = (theme_default_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/theme/typography.ts","import":"Public_Sans","arguments":[{"weight":["400","500","600","700","800"],"subsets":["latin"],"display":"swap","fallback":["Helvetica","Arial","sans-serif"]}],"variableName":"primaryFont"}
var typography_ts_import_Public_Sans_arguments_weight_400_500_600_700_800_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_primaryFont_ = __webpack_require__(9490);
var typography_ts_import_Public_Sans_arguments_weight_400_500_600_700_800_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_primaryFont_default = /*#__PURE__*/__webpack_require__.n(typography_ts_import_Public_Sans_arguments_weight_400_500_600_700_800_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_primaryFont_);
;// CONCATENATED MODULE: ./src/theme/typography.ts


// ----------------------------------------------------------------------
function remToPx(value) {
    return Math.round(parseFloat(value) * 16);
}
function pxToRem(value) {
    return `${value / 16}rem`;
}
function responsiveFontSizes({ sm, md, lg }) {
    return {
        "@media (min-width:600px)": {
            fontSize: pxToRem(sm)
        },
        "@media (min-width:900px)": {
            fontSize: pxToRem(md)
        },
        "@media (min-width:1200px)": {
            fontSize: pxToRem(lg)
        }
    };
}
// ----------------------------------------------------------------------
// LEARN MORE
// https://nextjs.org/docs/basic-features/font-optimization#google-fonts
const typography = {
    fontFamily: (typography_ts_import_Public_Sans_arguments_weight_400_500_600_700_800_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_primaryFont_default()).style.fontFamily,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    h1: {
        fontWeight: 800,
        lineHeight: 80 / 64,
        fontSize: pxToRem(40),
        ...responsiveFontSizes({
            sm: 52,
            md: 58,
            lg: 64
        })
    },
    h2: {
        fontWeight: 800,
        lineHeight: 64 / 48,
        fontSize: pxToRem(32),
        ...responsiveFontSizes({
            sm: 40,
            md: 44,
            lg: 48
        })
    },
    h3: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(24),
        ...responsiveFontSizes({
            sm: 26,
            md: 30,
            lg: 32
        })
    },
    h4: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(20),
        ...responsiveFontSizes({
            sm: 20,
            md: 24,
            lg: 24
        })
    },
    h5: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(18),
        ...responsiveFontSizes({
            sm: 19,
            md: 20,
            lg: 20
        })
    },
    h6: {
        fontWeight: 700,
        lineHeight: 28 / 18,
        fontSize: pxToRem(17),
        ...responsiveFontSizes({
            sm: 18,
            md: 18,
            lg: 18
        })
    },
    subtitle1: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: pxToRem(16)
    },
    subtitle2: {
        fontWeight: 600,
        lineHeight: 22 / 14,
        fontSize: pxToRem(14)
    },
    body1: {
        lineHeight: 1.5,
        fontSize: pxToRem(16)
    },
    body2: {
        lineHeight: 22 / 14,
        fontSize: pxToRem(14)
    },
    caption: {
        lineHeight: 1.5,
        fontSize: pxToRem(12)
    },
    overline: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(12),
        textTransform: "uppercase"
    },
    button: {
        fontWeight: 700,
        lineHeight: 24 / 14,
        fontSize: pxToRem(14),
        textTransform: "unset"
    }
};



;// CONCATENATED MODULE: ./src/components/progress-bar/styles.tsx

const styles_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/components/progress-bar/styles.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: styles_esModule, $$typeof: styles_$$typeof } = styles_proxy;
const styles_default_ = styles_proxy.default;


/* harmony default export */ const progress_bar_styles = ((/* unused pure expression or super */ null && (styles_default_)));
;// CONCATENATED MODULE: ./src/components/progress-bar/progress-bar.tsx

const progress_bar_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/components/progress-bar/progress-bar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: progress_bar_esModule, $$typeof: progress_bar_$$typeof } = progress_bar_proxy;
const progress_bar_default_ = progress_bar_proxy.default;


/* harmony default export */ const progress_bar = (progress_bar_default_);
;// CONCATENATED MODULE: ./src/components/progress-bar/index.ts



;// CONCATENATED MODULE: ./src/components/animate/motion-lazy.tsx

const motion_lazy_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/components/animate/motion-lazy.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: motion_lazy_esModule, $$typeof: motion_lazy_$$typeof } = motion_lazy_proxy;
const motion_lazy_default_ = motion_lazy_proxy.default;


/* harmony default export */ const motion_lazy = (motion_lazy_default_);
;// CONCATENATED MODULE: ./src/components/snackbar/snackbar-provider.tsx

const snackbar_provider_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/components/snackbar/snackbar-provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: snackbar_provider_esModule, $$typeof: snackbar_provider_$$typeof } = snackbar_provider_proxy;
const snackbar_provider_default_ = snackbar_provider_proxy.default;


/* harmony default export */ const snackbar_provider = (snackbar_provider_default_);
;// CONCATENATED MODULE: ./src/components/settings/context/settings-context.tsx

const settings_context_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/components/settings/context/settings-context.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: settings_context_esModule, $$typeof: settings_context_$$typeof } = settings_context_proxy;
const settings_context_default_ = settings_context_proxy.default;

const e0 = settings_context_proxy["SettingsContext"];

const e1 = settings_context_proxy["useSettingsContext"];

;// CONCATENATED MODULE: ./src/components/settings/context/settings-provider.tsx

const settings_provider_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/components/settings/context/settings-provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: settings_provider_esModule, $$typeof: settings_provider_$$typeof } = settings_provider_proxy;
const settings_provider_default_ = settings_provider_proxy.default;

const settings_provider_e0 = settings_provider_proxy["SettingsProvider"];

;// CONCATENATED MODULE: ./src/components/settings/context/index.ts



;// CONCATENATED MODULE: ./src/components/settings/drawer/settings-drawer.tsx

const settings_drawer_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/components/settings/drawer/settings-drawer.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: settings_drawer_esModule, $$typeof: settings_drawer_$$typeof } = settings_drawer_proxy;
const settings_drawer_default_ = settings_drawer_proxy.default;


/* harmony default export */ const settings_drawer = (settings_drawer_default_);
;// CONCATENATED MODULE: ./src/components/settings/drawer/index.ts


;// CONCATENATED MODULE: ./src/components/settings/index.ts




;// CONCATENATED MODULE: ./src/sections/checkout/context/checkout-context.tsx

const checkout_context_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/checkout/context/checkout-context.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: checkout_context_esModule, $$typeof: checkout_context_$$typeof } = checkout_context_proxy;
const checkout_context_default_ = checkout_context_proxy.default;

const checkout_context_e0 = checkout_context_proxy["CheckoutContext"];

const checkout_context_e1 = checkout_context_proxy["useCheckoutContext"];

;// CONCATENATED MODULE: ./src/sections/checkout/context/checkout-provider.tsx

const checkout_provider_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/checkout/context/checkout-provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: checkout_provider_esModule, $$typeof: checkout_provider_$$typeof } = checkout_provider_proxy;
const checkout_provider_default_ = checkout_provider_proxy.default;

const checkout_provider_e0 = checkout_provider_proxy["CheckoutProvider"];

;// CONCATENATED MODULE: ./src/sections/checkout/context/index.ts



;// CONCATENATED MODULE: ./src/auth/context/jwt/auth-context.tsx

const auth_context_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/auth/context/jwt/auth-context.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: auth_context_esModule, $$typeof: auth_context_$$typeof } = auth_context_proxy;
const auth_context_default_ = auth_context_proxy.default;

const auth_context_e0 = auth_context_proxy["AuthContext"];

;// CONCATENATED MODULE: ./src/auth/context/jwt/auth-consumer.tsx

const auth_consumer_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/auth/context/jwt/auth-consumer.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: auth_consumer_esModule, $$typeof: auth_consumer_$$typeof } = auth_consumer_proxy;
const auth_consumer_default_ = auth_consumer_proxy.default;

const auth_consumer_e0 = auth_consumer_proxy["AuthConsumer"];

;// CONCATENATED MODULE: ./src/auth/context/jwt/auth-provider.tsx

const auth_provider_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/auth/context/jwt/auth-provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: auth_provider_esModule, $$typeof: auth_provider_$$typeof } = auth_provider_proxy;
const auth_provider_default_ = auth_provider_proxy.default;

const auth_provider_e0 = auth_provider_proxy["AuthProvider"];

;// CONCATENATED MODULE: ./src/auth/context/jwt/index.ts




;// CONCATENATED MODULE: ./src/app/layout.tsx
// i18n


// scrollbar

// lightbox



// map

// editor

// carousel


// image

// ----------------------------------------------------------------------
// locales

// theme


// components




// sections

// auth

// import { AuthProvider, AuthConsumer } from 'src/auth/context/auth0';
// import { AuthProvider, AuthConsumer } from 'src/auth/context/amplify';
// import { AuthProvider, AuthConsumer } from 'src/auth/context/firebase';
// ----------------------------------------------------------------------
const metadata = {
    title: "Minimal UI Kit",
    description: "The starting point for your Personal Finance. Many Features to Help you monitor faster and better.",
    keywords: "personal,finance,kit,application,dashboard,admin,template",
    themeColor: "#000000",
    manifest: "/manifest.json",
    icons: [
        {
            rel: "icon",
            url: "/favicon/favicon.ico"
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            // url: '/favicon/favicon-16x16.png',
            url: "/favicon/favicon.ico"
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            // url: '/favicon/favicon-32x32.png',
            url: "/favicon/favicon.ico"
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            // url: '/favicon/apple-touch-icon.png',
            url: "/favicon/favicon.ico"
        }
    ]
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: (typography_ts_import_Public_Sans_arguments_weight_400_500_600_700_800_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_primaryFont_default()).className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(auth_provider_e0, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(localization_provider, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(settings_provider_e0, {
                        defaultSettings: {
                            themeMode: "light",
                            themeDirection: "ltr",
                            themeContrast: "default",
                            themeLayout: "vertical",
                            themeColorPresets: "default",
                            themeStretch: false
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(theme, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(motion_lazy, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(snackbar_provider, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(checkout_provider_e0, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(settings_drawer, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx(progress_bar, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx(auth_consumer_e0, {
                                                children: children
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 88924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/app/loading.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 18275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFoundPage),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_sections_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4604);
// sections


// ----------------------------------------------------------------------
const metadata = {
    title: "404 Page Not Found!"
};
function NotFoundPage() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_sections_error__WEBPACK_IMPORTED_MODULE_1__/* .NotFoundView */ .Kl, {});
}


/***/ }),

/***/ 4604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Kl: () => (/* reexport */ not_found_view),
  QT: () => (/* reexport */ _403_view),
  my: () => (/* reexport */ _500_view)
});

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/sections/error/403-view.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/error/403-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const _403_view = (__default__);
;// CONCATENATED MODULE: ./src/sections/error/500-view.tsx

const _500_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/error/500-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: _500_view_esModule, $$typeof: _500_view_$$typeof } = _500_view_proxy;
const _500_view_default_ = _500_view_proxy.default;


/* harmony default export */ const _500_view = (_500_view_default_);
;// CONCATENATED MODULE: ./src/sections/error/not-found-view.tsx

const not_found_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/error/not-found-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: not_found_view_esModule, $$typeof: not_found_view_$$typeof } = not_found_view_proxy;
const not_found_view_default_ = not_found_view_proxy.default;


/* harmony default export */ const not_found_view = (not_found_view_default_);
;// CONCATENATED MODULE: ./src/sections/error/index.ts





/***/ })

};
;