import {
  ADD_CUSTOMER,
  SET_EDITING_ITEM,
  RESET_FORM,
  SET_NAME,
  SET_EMAIL,
  SET_PRIMARY_ADDRESS,
  SET_SECONDARY_ADDRESS,
  SET_CITY,
  SET_COUNTRY,
  SET_POSTCODE,
  SET_PHONE_NUMBER,
  // SET_IMAGE,
  SET_GST_NUMBER,
  SET_SHIPPING_NAME,
  SET_SHIPPING_EMAIL,
  SET_SHIPPING_PRIMARY_ADDRESS,
  SET_SHIPPING_SECONDARY_ADDRESS,
  SET_SHIPPING_COUNTRY,
  SET_SHIPPING_POSTCODE,
} from "../Actions/ActionTypes";

const initialState = {
  customers: [],
  editingItem: null,
  name: "",
  email: "",
  primaryAddress: "",
  secondaryAddress: "",
  city: "",
  country: "",
  postcode: "",
  phoneNumber: "",
  gstNumber: "",
  shippingName: "",
  shippingEmail: "",
  shippingPrimaryAddress: "",
  shippingSecondaryAddress: "",
  shippingCountry: "",
  shippingPostcode: "",
  // image: null,
};

const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return {
        ...state,
        customers: action.payload,
      };
    case SET_EDITING_ITEM:
      return {
        ...state,
        editingItem: action.payload,
      };
    case RESET_FORM:
      return {
        ...state,
        name: "",
        email: "",
        primaryAddress: "",
        secondaryAddress: "",
        city: "",
        country: "",
        phoneNumber: "",
        gstNumber: "",
        shippingName: "",
        shippingEmail: "",
        shippingPrimaryAddress: "",
        shippingSecondaryAddress: "",
        shippingCountry: "",
        shippingPostcode: "",
        // image: null,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_PRIMARY_ADDRESS:
      return {
        ...state,
        primaryAddress: action.payload,
      };
    case SET_SECONDARY_ADDRESS:
      return {
        ...state,
        secondaryAddress: action.payload,
      };
    case SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case SET_POSTCODE:
      return {
        ...state,
        postcode: action.payload,
      };
    case SET_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case SET_GST_NUMBER:
      return {
        ...state,
        gstNumber: action.payload,
      };
    case SET_SHIPPING_NAME:
      return {
        ...state,
        shippingCsName: action.payload,
      };
    case SET_SHIPPING_EMAIL:
      return {
        ...state,
        shippingCsEmail: action.payload,
      };
    case SET_SHIPPING_PRIMARY_ADDRESS:
      return {
        ...state,
        shippingPrimaryAddress: action.payload,
      };
    case SET_SHIPPING_SECONDARY_ADDRESS:
      return {
        ...state,
        shippingSecondaryAddress: action.payload,
      };
    case SET_SHIPPING_COUNTRY:
      return {
        ...state,
        shippingCountry: action.payload,
      };
    case SET_SHIPPING_POSTCODE:
      return {
        ...state,
        shippingPostcode: action.payload,
      };
    // case SET_IMAGE:
    //   return {
    //     ...state,
    //     image: action.payload,
    //   };
    default:
      return state;
  }
};

export default customersReducer;
