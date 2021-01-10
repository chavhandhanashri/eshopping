import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products:[
          {   "id":1,
              "title":"LG 10.5 Kg / 7.0 Kg Inverter Wi-Fi Washer Dryer (FHD1057SWS, Black VCM, In-built Heater, Turbo Wash)",
              "details":"","is_featured":true,"is_hot":true,
              "price":63750,
              "sale_price":74990,
              "sale_discount":15,
              "vendor":"Vendor",
              "is_out_of_stock":true,
              "inventory":1,"is_active":true,"is_sale":true,
          
              "thumbnail":"/public/getUploadedImage/231.jpg",
              "slug":1,
              "created_by":1,
              "updated_by":1,
              "variants":[],
              "images":["/public/getUploadedImage/230.jpg","/public/getUploadedImage/232.jpg","/public/getUploadedImage/233.jpg","/public/getUploadedImage/234.jpg",
              "/public/getUploadedImage/235.jpg","/public/getUploadedImage/236.jpg"]
          },
          {"id":5,
              "title":"LG 8 kg 5 Star Inverter Wi-Fi Fully-Automatic Front Loading Washing Machine (FHT1408ZWS, Luxury Silver, Steam)",
              "details":"",
              "is_featured":true,"is_hot":true,
              "price":40800,"sale_price":51990,"sale_discount":21,
              "vendor":"Vendor","is_out_of_stock":true,"inventory":1,"is_active":true,"is_sale":true,
              "thumbnail":"/public/getUploadedImage/216.jpg","slug":5,"created_by":1,"updated_by":1,
              "variants":[],
              "images":["/public/getUploadedImage/217.jpg","/public/getUploadedImage/218.jpg",
              "/public/getUploadedImage/219.jpg","/public/getUploadedImage/220.jpg",
              "/public/getUploadedImage/221.jpg","/public/getUploadedImage/222.jpg"]
         },
         {"id":6,
          "title":"LG 8 kg 5 Star Inverter Wi-Fi Fully-Automatic Front Loading Washing Machine (FHT1408ZWL, Luxury Silver, Steam)",
          "details":"","is_featured":true,"is_hot":true,
          "price":39000,"sale_price":46990,"sale_discount":17,
          "vendor":"Vendor","is_out_of_stock":true,"inventory":1,"is_active":true,"is_sale":true,
          "thumbnail":"/public/getUploadedImage/209.jpg","slug":6,"created_by":1,"updated_by":1,
          "variants":[],
          "images":["/public/getUploadedImage/210.jpg","/public/getUploadedImage/211.jpg",
          "/public/getUploadedImage/212.jpg","/public/getUploadedImage/213.jpg",
          "/public/getUploadedImage/214.jpg","/public/getUploadedImage/215.jpg"]
         },
         {"id":9,
          "title":"LG 7 Kg 5 Star Inverter Wi-Fi Fully-Automatic Front Loading Washing Machine (FHT1207ZWS, VCM, Steam)",
          "details":"","is_featured":true,"is_hot":true,
          "price":37000,"sale_price":45490,"sale_discount":19,
          "vendor":"Vendor","is_out_of_stock":true,"inventory":1,"is_active":true,"is_sale":true,
          "thumbnail":"/public/getUploadedImage/202.jpg",
          "slug":9,"created_by":1,"updated_by":1,
          "variants":[],
          "images":["/public/getUploadedImage/203.jpg","/public/getUploadedImage/204.jpg",
          "/public/getUploadedImage/205.jpg","/public/getUploadedImage/206.jpg",
          "/public/getUploadedImage/207.jpg","/public/getUploadedImage/208.jpg"]
          },
  
          {"id":8,
          "title":"LG 8.0 Kg 5 Star Inverter Fully-Automatic Front Loading Washing Machine (FHM1208ZDL, Luxury Silver, Direct Drive Technology)",
          "details":"","is_featured":true,"is_hot":true,
          "price":33500,"sale_price":40990,"sale_discount":18,
          "vendor":"Vendor","is_out_of_stock":true,"inventory":1,"is_active":true,"is_sale":true,
          "thumbnail":"/public/getUploadedImage/195.jpg","slug":8,"created_by":1,"updated_by":1,
          "variants":[],
          "images":["/public/getUploadedImage/196.jpg","/public/getUploadedImage/197.jpg",
          "/public/getUploadedImage/198.jpg","/public/getUploadedImage/199.jpg",
          "/public/getUploadedImage/200.jpg","/public/getUploadedImage/201.jpg"]
         },
         
         {"id":7,
          "title":"LG 9.0 Kg 5 Star Smart Inverter Fully-Automatic Top Loading Washing Machine (T90SJSS1Z, Stainless Steel, TurboDrum)",
          "details":"","is_featured":true,"is_hot":true,
          "price":27190,"sale_price":33990,"sale_discount":20,
          "vendor":"Vendor","is_out_of_stock":true,"inventory":1,"is_active":true,"is_sale":true,
          "thumbnail":"/public/getUploadedImage/178.jpg","slug":7,"created_by":1,"updated_by":1,
          "variants":[],
          "images":["/public/getUploadedImage/179.jpg","/public/getUploadedImage/180.jpg",
          "/public/getUploadedImage/181.jpg","/public/getUploadedImage/182.jpg","/public/getUploadedImage/185.jpg",
          "/public/getUploadedImage/186.jpg"]},
          
          {"id":4,
          "title":"LG 9 Kg 5 Star Inverter Wi-Fi Fully-Automatic Front Loading Washing Machine (FHT1409ZWL, Luxury Silver, Steam)",
          "details":"","is_featured":true,"is_hot":true,
          "price":43350,"sale_price":50990,"sale_discount":15,
          "vendor":"Vendor","is_out_of_stock":true,"inventory":1,"is_active":true,"is_sale":true,
          "thumbnail":"/public/getUploadedImage/172.jpg","slug":4,"created_by":1,"updated_by":1,
          "variants":[],
          "images":["/public/getUploadedImage/171.jpg","/public/getUploadedImage/173.jpg","/public/getUploadedImage/174.jpg",
          "/public/getUploadedImage/175.jpg","/public/getUploadedImage/176.jpg","/public/getUploadedImage/177.jpg"]
          },
          {"id":2,
          "title":"LG 10.5 Kg / 7.0 Kg Inverter Wi-Fi Washer Dryer (FHD1057STB, Black VCM, In-built Heater, Turbo Wash)",
          "details":"","is_featured":true,"is_hot":true,
          "price":67990,"sale_price":79990,"sale_discount":15,
          "vendor":"Vendor","is_out_of_stock":true,"inventory":1,"is_active":true,"is_sale":true,
          "thumbnail":"/public/getUploadedImage/163.jpg","slug":2,"created_by":1,"updated_by":1,
          "variants":[],
          "images":["/public/getUploadedImage/164.jpg","/public/getUploadedImage/165.jpg","/public/getUploadedImage/166.jpg",
          "/public/getUploadedImage/167.jpg","/public/getUploadedImage/168.jpg","/public/getUploadedImage/169.jpg",
          "/public/getUploadedImage/170.jpg"]
          },
          {"id":3,
          "title":"LG 9 Kg 5 Star Inverter Wi-Fi Fully-Automatic Front Loading Washing Machine (FHT1409ZWS, VCM, Steam)",
          "details":"","is_featured":true,"is_hot":true,
          "price":45590,"sale_price":56990,"sale_discount":20,
          "vendor":"Vendor","is_out_of_stock":true,"inventory":1,"is_active":true,"is_sale":true,
          "thumbnail":"/public/getUploadedImage/154.jpg","slug":3,"created_by":1,"updated_by":1,
          "variants":[],
          "images":["/public/getUploadedImage/147.jpg","/public/getUploadedImage/148.jpg","/public/getUploadedImage/149.jpg",
          "/public/getUploadedImage/150.jpg","/public/getUploadedImage/151.jpg","/public/getUploadedImage/152.jpg",
          "/public/getUploadedImage/153.jpg"]
          }
          
      ],
   
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;