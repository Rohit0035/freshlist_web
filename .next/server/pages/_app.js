(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 1968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: ./redux/constants/actionTypes.js
var actionTypes = __webpack_require__(6330);
;// CONCATENATED MODULE: ./util/localStorage.js
class storage {
    static set(key, cartItems) {
        localStorage.setItem(key, JSON.stringify(cartItems));
    }
    static get(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}
/* harmony default export */ const util_localStorage = (storage);

;// CONCATENATED MODULE: ./components/ecommerce/storage-wrapper.js





const saveStoredItems = (storedItems)=>(dispatch)=>{
        dispatch({
            type: actionTypes/* INIT_LOCALSTORAGE */.Y7,
            payload: {
                ...storedItems
            }
        });
    }
;
const StorageWrapper = (props)=>{
    (0,external_react_.useEffect)(()=>{
        const cart = util_localStorage.get("dokani_cart") || [];
        const wishlist = util_localStorage.get("dokani_wishlist") || [];
        const compare = util_localStorage.get("dokani_compare") || [];
        props.saveStoredItems({
            cart,
            wishlist,
            compare
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: props.children
    });
};
/* harmony default export */ const storage_wrapper = ((0,external_react_redux_.connect)(null, {
    saveStoredItems
})(StorageWrapper));

;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
// EXTERNAL MODULE: ./util/util.js
var util = __webpack_require__(1348);
;// CONCATENATED MODULE: ./redux/reducer/product.js


// {items:[],filteredList:[]}
/* harmony default export */ const product = ((state = {
    items: []
}, action)=>{
    switch(action.type){
        case actionTypes/* FETCHED_PRODUCT */.jP:
            return {
                ...state,
                items: [
                    ...action.payload.products
                ]
            };
        case actionTypes/* FETCHED_MORE_PRODUCT */.l2:
            const mergeAllProducts = [
                ...state.items,
                ...action.payload.products, 
            ];
            // console.log(mergeAllProducts);
            const limit = action.payload.total && mergeAllProducts.length > action.payload.total ? mergeAllProducts.splice(0, action.payload.total) : mergeAllProducts;
            return {
                ...state,
                items: [
                    ...limit
                ]
            };
        case actionTypes/* ADD_PRODUCT */.zN:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            };
        case actionTypes/* DELETE_PRODUCT */.u7:
            return (0,util/* deleteProduct */.Ir)(state, action.payload.id);
        case actionTypes/* UPDATE_PRODUCT */.Q7:
            const index = (0,util/* findProductIndexById */.eQ)(state, action.payload.product.id);
            state[index] = action.payload.product;
            return {
                ...state
            };
        default:
            return state;
    }
});

;// CONCATENATED MODULE: ./redux/reducer/cart.js



/* harmony default export */ const cart = ((state = [], action)=>{
    let index = null;
    switch(action.type){
        case actionTypes/* INIT_LOCALSTORAGE */.Y7:
            return [
                ...action.payload.cart
            ];
        case actionTypes/* ADD_TO_CART */.G2:
            index = (0,util/* findProductIndexById */.eQ)(state, action.payload.product.id);
            if (index !== -1) {
                state[index].quantity += 1;
                util_localStorage.set("dokani_cart", [
                    ...state
                ]);
                return [
                    ...state
                ];
            } else {
                if (!action.payload.product.quantity) {
                    action.payload.product.quantity = 1;
                }
                util_localStorage.set("dokani_cart", [
                    ...state,
                    action.payload.product
                ]);
                return [
                    ...state,
                    action.payload.product
                ];
            }
        case actionTypes/* DELETE_FROM_CART */.Yw:
            const newCartItems = (0,util/* deleteProduct */.Ir)(state, action.payload.productId);
            util_localStorage.set("dokani_cart", newCartItems);
            return [
                ...newCartItems
            ];
        case actionTypes/* INCREASE_QUANTITY */.RC:
            index = (0,util/* findProductIndexById */.eQ)(state, action.payload.productId);
            if (index === -1) return state;
            state[index].quantity += 1;
            util_localStorage.set("dokani_cart", [
                ...state
            ]);
            return [
                ...state
            ];
        case actionTypes/* DECREASE_QUANTITY */.eL:
            index = (0,util/* findProductIndexById */.eQ)(state, action.payload.productId);
            if (index === -1) return state;
            const quantity = state[index].quantity;
            if (quantity > 1) state[index].quantity -= 1;
            util_localStorage.set("dokani_cart", [
                ...state
            ]);
            return [
                ...state
            ];
        case actionTypes/* CLEAR_CART */.qX:
            util_localStorage.set("dokani_cart", []);
            return [];
        default:
            return state;
    }
});

;// CONCATENATED MODULE: ./redux/reducer/wishlist.js



const initialState = {
    modal: false,
    items: []
};
/* harmony default export */ const wishlist = ((state = initialState, action)=>{
    let index = null;
    switch(action.type){
        case actionTypes/* OPEN_WISHLIST */.R3:
            return {
                ...state,
                modal: true
            };
        case actionTypes/* CLOSE_WISHLIST */.DZ:
            return {
                ...state,
                modal: false
            };
        case actionTypes/* INIT_LOCALSTORAGE */.Y7:
            return {
                ...state,
                items: [
                    ...action.payload.wishlist
                ]
            };
        case actionTypes/* ADD_TO_WISHLIST */.Cm:
            index = (0,util/* findProductIndexById */.eQ)(state.items, action.payload.product.id);
            if (index !== -1) return state;
            const items = [
                ...state.items,
                action.payload.product
            ];
            util_localStorage.set("dokani_wishlist", items);
            return {
                ...state,
                items
            };
        case actionTypes/* DELETE_FROM_WISHLIST */.ww:
            const list = (0,util/* deleteProduct */.Ir)(state.items, action.payload.productId);
            util_localStorage.set("dokani_wishlist", list);
            return {
                ...state,
                items: [
                    ...list
                ]
            };
        case actionTypes/* CLEAR_WISHLIST */.lS:
            util_localStorage.set("dokani_wishlist", []);
            return {
                ...state,
                items: []
            };
        default:
            return state;
    }
});

;// CONCATENATED MODULE: ./redux/reducer/quickView.js

/* harmony default export */ const quickView = ((state = null, action)=>{
    switch(action.type){
        case actionTypes/* OPEN_QUICK_VIEW */.GS:
            console.log("quickview active");
            return {
                ...action.payload.product
            };
        case actionTypes/* CLOSE_QUICK_VIEW */.fJ:
            console.log("quickview close");
            return null;
        default:
            return state;
    }
});

;// CONCATENATED MODULE: ./redux/reducer/compare.js



const compare_initialState = {
    modal: false,
    items: []
};
/* harmony default export */ const compare = ((state = compare_initialState, action)=>{
    let index = null;
    switch(action.type){
        case actionTypes/* OPEN_COMPARE */.y1:
            return {
                ...state,
                modal: true
            };
        case actionTypes/* CLOSE_COMPARE */.zg:
            return {
                ...state,
                modal: false
            };
        case actionTypes/* INIT_LOCALSTORAGE */.Y7:
            return {
                ...state,
                items: [
                    ...action.payload.compare
                ]
            };
        case actionTypes/* ADD_TO_COMPARE */.Zd:
            index = (0,util/* findProductIndexById */.eQ)(state.items, action.payload.product.id);
            if (index !== -1) return state;
            const items = [
                ...state.items,
                action.payload.product
            ];
            util_localStorage.set("dokani_compare", items);
            return {
                ...state,
                items
            };
        case actionTypes/* DELETE_FROM_COMPARE */.Oh:
            const list = (0,util/* deleteProduct */.Ir)(state.items, action.payload.productId);
            util_localStorage.set("dokani_compare", list);
            return {
                ...state,
                items: [
                    ...list
                ]
            };
        case actionTypes/* CLEAR_COMPARE */.Jx:
            util_localStorage.set("dokani_compare", []);
            return {
                ...state,
                items: []
            };
        default:
            return state;
    }
});

;// CONCATENATED MODULE: ./redux/reducer/productFilters.js

/* harmony default export */ const productFilters = ((state = {
    category: ""
}, action)=>{
    switch(action.type){
        case actionTypes/* UPDATE_PRODUCT_FILTERS */.Wi:
            return {
                ...state,
                ...action.payload.productFilters
            };
        case actionTypes/* UPDATE_PRODUCT_CATEGORY */.$J:
            const { category  } = action.payload;
            return {
                ...state,
                category
            };
        case actionTypes/* UPDATE_RATING */.Cr:
            const { rating  } = action.payload;
            return {
                ...state,
                rating
            };
        default:
            return state;
    }
});

;// CONCATENATED MODULE: ./redux/reducer/rootReducer.js







const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
    products: product,
    cart: cart,
    wishlist: wishlist,
    quickView: quickView,
    compare: compare,
    productFilters: productFilters
});
/* harmony default export */ const reducer_rootReducer = (rootReducer);

;// CONCATENATED MODULE: ./redux/store.js




const store = (0,external_redux_namespaceObject.createStore)(reducer_rootReducer, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default()))));
/* harmony default export */ const redux_store = (store);

;// CONCATENATED MODULE: ./components/elements/Preloader.js


const Preloader = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            id: "preloader-active",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "preloader d-flex align-items-center justify-content-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "preloader-inner position-relative",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/assets/imgs/theme/loading.gif",
                            alt: ""
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const elements_Preloader = (Preloader);

;// CONCATENATED MODULE: ./pages/_app.js


// import "react-input-range/lib/css/index.css";




// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

// import WOW from 'wowjs';
// Swiper Slider






function MyApp({ Component , pageProps  }) {
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        }, 2000);
    // new WOW.WOW({
    //     live: false
    //   }).init()
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: !loading ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
            store: redux_store,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(storage_wrapper, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {})
                ]
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx(elements_Preloader, {})
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 1348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ir": () => (/* binding */ deleteProduct),
/* harmony export */   "eQ": () => (/* binding */ findProductIndexById),
/* harmony export */   "wC": () => (/* binding */ findProductIndex)
/* harmony export */ });
// Delete Product from List By Id
const deleteProduct = (list, id)=>{
    const filter = list.filter((item)=>item.id !== id
    );
    return filter;
};
// Find Product Index From List
const findProductIndex = (list, slug)=>{
    const index = list.findIndex((item)=>item.slug === slug
    );
    return index;
};
const findProductIndexById = (list, id)=>{
    const index = list.findIndex((item)=>item.id === id
    );
    return index;
};


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6330], () => (__webpack_exec__(1968)));
module.exports = __webpack_exports__;

})();