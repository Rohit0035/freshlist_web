"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 3933:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elements_FeaturedTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5063);
/* harmony import */ var _elements_NewArrivalTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6422);
/* harmony import */ var _elements_TrendingTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7713);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_elements_NewArrivalTab__WEBPACK_IMPORTED_MODULE_3__, _elements_TrendingTab__WEBPACK_IMPORTED_MODULE_4__]);
([_elements_NewArrivalTab__WEBPACK_IMPORTED_MODULE_3__, _elements_TrendingTab__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function FeatchTab() {
    const { 0: active , 1: setActive  } = useState("1");
    const { 0: featured , 1: setFeatured  } = useState([]);
    const { 0: trending , 1: setTrending  } = useState([]);
    const { 0: newArrival , 1: setNewArrival  } = useState([]);
    const featuredProduct = async ()=>{
        const request = await fetch(`${server}/static/product.json`);
        const allProducts = await request.json();
        const featuedItem = allProducts.filter((item)=>item.featured
        );
        setFeatured(featuedItem);
        setActive("1");
    };
    const trendingProduct = async ()=>{
        const request = await fetch(`${server}/static/product.json`);
        const allProducts = await request.json();
        const trendingItem = allProducts.filter((item)=>item.trending
        );
        setTrending(trendingItem);
        setActive("2");
    };
    const newArrivalProduct = async ()=>{
        const request = await fetch(`${server}/static/product.json`);
        const allProducts = await request.json();
        const newArrivalItem = allProducts.sort(function(a, b) {
            return a.created > b.created ? -1 : 1;
        });
        setNewArrival(newArrivalItem);
        setActive("3");
    };
    useEffect(()=>{
        featuredProduct();
    }, []);
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "section-title style-2 wow animate__animated animate__fadeIn",
                children: [
                    /*#__PURE__*/ _jsx("h3", {
                        children: "Popular Products"
                    }),
                    /*#__PURE__*/ _jsxs("ul", {
                        className: "nav nav-tabs links",
                        id: "myTab",
                        role: "tablist",
                        children: [
                            /*#__PURE__*/ _jsx("li", {
                                className: "nav-item",
                                role: "presentation",
                                children: /*#__PURE__*/ _jsx("button", {
                                    className: active === "1" ? "nav-link active" : "nav-link",
                                    onClick: featuredProduct,
                                    children: "Featured"
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                className: "nav-item",
                                role: "presentation",
                                children: /*#__PURE__*/ _jsx("button", {
                                    className: active === "2" ? "nav-link active" : "nav-link",
                                    onClick: trendingProduct,
                                    children: "Popular"
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                className: "nav-item",
                                role: "presentation",
                                children: /*#__PURE__*/ _jsx("button", {
                                    className: active === "3" ? "nav-link active" : "nav-link",
                                    onClick: newArrivalProduct,
                                    children: "New added"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "tab-content wow fadeIn animated",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: active === "1" ? "tab-pane fade show active" : "tab-pane fade",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "product-grid-4 row",
                            children: /*#__PURE__*/ _jsx(FeaturedTab, {
                                products: featured
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: active === "2" ? "tab-pane fade show active" : "tab-pane fade",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "product-grid-4 row",
                            children: /*#__PURE__*/ _jsx(TrendingTab, {
                                products: trending
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: active === "3" ? "tab-pane fade show active" : "tab-pane fade",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "product-grid-4 row",
                            children: /*#__PURE__*/ _jsx(NewArrivalTab, {
                                products: newArrival
                            })
                        })
                    })
                ]
            })
        ]
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (FeatchTab)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4728:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var _redux_action_productFiltersAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7330);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__]);
([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay
]);
const data = [
    {
        id: 1,
        title: "Cake & Milk",
        slug: "jeans",
        img: "cat-13.png",
        bg: "bg-9"
    },
    {
        id: 2,
        title: "Oganic Kiwi",
        slug: "shoe",
        img: "cat-12.png",
        bg: "bg-10"
    },
    {
        id: 3,
        title: "Peach",
        slug: "jacket",
        img: "cat-11.png",
        bg: "bg-11"
    },
    {
        id: 4,
        title: "Red Apple",
        img: "cat-9.png",
        bg: "bg-12"
    },
    {
        id: 5,
        title: "Snack",
        img: "cat-3.png",
        bg: "bg-13"
    },
    {
        id: 6,
        title: "Vegetables",
        img: "cat-1.png",
        bg: "bg-14"
    },
    {
        id: 7,
        title: "Strawberry",
        img: "cat-2.png",
        bg: "bg-15"
    },
    {
        id: 8,
        title: "Black plum",
        img: "cat-4.png",
        bg: "bg-12"
    },
    {
        id: 9,
        title: "Custard apple",
        img: "cat-5.png",
        bg: "bg-10"
    },
    {
        id: 10,
        title: "Coffe & Tea",
        img: "cat-14.png",
        bg: "bg-12"
    },
    {
        id: 11,
        title: "Headphone",
        img: "cat-15.png",
        bg: "bg-11"
    }
];
const CategorySlider = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const selectCategory = (e, category)=>{
        e.preventDefault();
        // removeSearchTerm();
        (0,_redux_action_productFiltersAction__WEBPACK_IMPORTED_MODULE_5__/* .updateProductCategory */ .pP)(category);
        router.push({
            pathname: "/products",
            query: {
                cat: category //
            }
        });
        console.log("Click");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
                autoplay: true,
                navigation: {
                    prevEl: ".custom_prev_ct1",
                    nextEl: ".custom_next_ct1"
                },
                className: "custom-class",
                breakpoints: {
                    320: {
                        slidesPerView: 3
                    },
                    480: {
                        slidesPerView: 3
                    },
                    640: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 5
                    },
                    1024: {
                        slidesPerView: 8
                    },
                    1200: {
                        slidesPerView: 10
                    }
                },
                children: data.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `card-2 ${item.bg} wow animate__animated animate__fadeInUp`,
                            onClick: (e)=>selectCategory(e, item.slug)
                            ,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                    className: " img-hover-scale overflow-hidden",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: `assets/imgs/shop/${item.img}`,
                                            alt: ""
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: item.title
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "26 items"
                                })
                            ]
                        })
                    }, i)
                )
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow",
                id: "carausel-10-columns-arrows",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "slider-btn slider-prev slick-arrow custom_prev_ct1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fi-rs-arrow-small-left"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "slider-btn slider-next slick-arrow custom_next_ct1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fi-rs-arrow-small-right"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(null, {
    updateProductCategory: _redux_action_productFiltersAction__WEBPACK_IMPORTED_MODULE_5__/* .updateProductCategory */ .pP
})(CategorySlider)); // import SwiperCore, { Navigation } from "swiper";
 // import { Swiper, SwiperSlide } from "swiper/react";
 // SwiperCore.use([Navigation]);
 // const CategorySlider = () => {
 //     return (
 //         <>
 //             <Swiper
 //                 slidesPerView={1}
 //                 spaceBetween={30}
 //                 
 //                 navigation={{
 //                     prevEl: ".custom_prev",
 //                     nextEl: ".custom_next",
 //                 }}
 //                 className="custom-class"
 //             >
 //                 <SwiperSlide>1</SwiperSlide>
 //                 <SwiperSlide>2</SwiperSlide>
 //                 <SwiperSlide>3</SwiperSlide>
 //             </Swiper>
 //             <div className="custom-nav">
 //                 <button type="button" className="custom_prev">
 //                     Prev
 //                 </button>
 //                 <button type="button" className="custom_next">
 //                     Next
 //                 </button>
 //             </div>
 //         </>
 //     );
 // };
 // export default CategorySlider;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9449:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination
]);
const Intro1 = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                slidesPerView: 1,
                spaceBetween: 0,
                pagination: true,
                navigation: {
                    prevEl: ".custom_prev_i1",
                    nextEl: ".custom_next_i1"
                },
                className: "hero-slider-1 style-4 dot-style-1 dot-style-1-position-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "single-hero-slider single-animation-wrap",
                            style: {
                                backgroundImage: "url(assets/imgs/slider/slider-1.png)"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "slider-content",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                    className: "display-2 mb-40",
                                    children: [
                                        "Don\u2019t miss amazing",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "grocery deals"
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "single-hero-slider single-animation-wrap",
                            style: {
                                backgroundImage: "url(assets/imgs/slider/slider-2.png)"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "slider-content",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "display-2 mb-40",
                                        children: [
                                            "Fresh Vegetables",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            "Big discount"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mb-65",
                                        children: "Save up to 50% off on your first order"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        className: "form-subcriber d-flex",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "email",
                                                placeholder: "Your emaill address"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "btn",
                                                type: "submit",
                                                children: "Subscribe"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "slider-arrow hero-slider-1-arrow",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "slider-btn slider-prev slick-arrow custom_prev_i1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fi-rs-angle-left"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "slider-btn slider-next slick-arrow custom_next_i1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fi-rs-angle-right"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro1);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ecommerce_categoryTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8235);
/* harmony import */ var _components_ecommerce_fetchDeals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9394);
/* harmony import */ var _components_ecommerce_fetchTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3933);
/* harmony import */ var _components_ecommerce_fetchTabSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1503);
/* harmony import */ var _components_elements_Bottom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5598);
/* harmony import */ var _components_ecommerce_QuickView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5303);
/* harmony import */ var _components_elements_Banner5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8698);
/* harmony import */ var _components_elements_Deals1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6637);
/* harmony import */ var _components_elements_IntroPopup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4669);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9583);
/* harmony import */ var _components_sliders_Category__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4728);
/* harmony import */ var _components_sliders_Intro1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9449);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ecommerce_categoryTab__WEBPACK_IMPORTED_MODULE_1__, _components_ecommerce_fetchTab__WEBPACK_IMPORTED_MODULE_3__, _components_ecommerce_fetchTabSlider__WEBPACK_IMPORTED_MODULE_4__, _components_elements_Bottom__WEBPACK_IMPORTED_MODULE_5__, _components_ecommerce_QuickView__WEBPACK_IMPORTED_MODULE_6__, _components_elements_Banner5__WEBPACK_IMPORTED_MODULE_7__, _components_sliders_Category__WEBPACK_IMPORTED_MODULE_11__, _components_sliders_Intro1__WEBPACK_IMPORTED_MODULE_12__]);
([_components_ecommerce_categoryTab__WEBPACK_IMPORTED_MODULE_1__, _components_ecommerce_fetchTab__WEBPACK_IMPORTED_MODULE_3__, _components_ecommerce_fetchTabSlider__WEBPACK_IMPORTED_MODULE_4__, _components_elements_Bottom__WEBPACK_IMPORTED_MODULE_5__, _components_ecommerce_QuickView__WEBPACK_IMPORTED_MODULE_6__, _components_elements_Banner5__WEBPACK_IMPORTED_MODULE_7__, _components_sliders_Category__WEBPACK_IMPORTED_MODULE_11__, _components_sliders_Intro1__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function Home() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_IntroPopup__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                noBreadcrumb: "d-none",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "home-slider position-relative mb-30",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "home-slide-cover mt-30",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sliders_Intro1__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "popular-categories section-padding",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container wow animate__fadeIn animate__animated",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "section-title",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "title",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: "Featured Categories"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "carausel-10-columns-cover position-relative",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "carausel-10-columns",
                                        id: "carausel-10-columns",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sliders_Category__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "banners mb-25",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "carausel-3-columns",
                                    id: "carausel-3-columns",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_Banner5__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "product-tabs section-padding position-relative",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ecommerce_categoryTab__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "section-padding pb-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ecommerce_fetchTabSlider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "section-padding pb-5",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "section-title wow animate__animated animate__fadeIn",
                                    "data-wow-delay": "0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "",
                                            children: "Deals Of The Day"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                            href: "/products",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "show-all",
                                                children: [
                                                    "All Deals",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-rs-angle-right"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ecommerce_fetchDeals__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_Bottom__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ecommerce_QuickView__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 4780:
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8582:
/***/ ((module) => {

module.exports = require("react-bootstrap/Dropdown");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 3069:
/***/ ((module) => {

module.exports = require("react-responsive-modal");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664,6330,9583,8866,9592,4640,5303,8735,2572,1503], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();