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
} from "./ActionTypes";

export const addCustomer = (customers) => ({
  type: ADD_CUSTOMER,
  payload: customers,
});

export const setEditingItem = (item) => ({
  type: SET_EDITING_ITEM,
  payload: item,
});

export const resetForm = () => ({
  type: RESET_FORM,
});

export const setName = (name) => ({
  type: SET_NAME,
  payload: name,
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const setPrimaryAddress = (primaryAddress) => ({
  type: SET_PRIMARY_ADDRESS,
  payload: primaryAddress,
});

export const setSecondaryAddress = (secondaryAddress) => ({
  type: SET_SECONDARY_ADDRESS,
  payload: secondaryAddress,
});

export const setCity = (city) => ({
  type: SET_CITY,
  payload: city,
});

export const setCountry = (country) => ({
  type: SET_COUNTRY,
  payload: country,
});

export const setPostcode = (postcode) => ({
  type: SET_POSTCODE,
  payload: postcode,
});

export const setNumber = (number) => ({
  type: SET_PHONE_NUMBER,
  payload: number,
});

export const setGstNumber = (gstNumber) => ({
  type: SET_GST_NUMBER,
  payload: gstNumber,
});

export const setShippingCsName = (shippingCsName) => ({
  type: SET_SHIPPING_NAME,
  payload: shippingCsName,
});

export const setShippingCsEmail = (shippingCsEmail) => ({
  type: SET_SHIPPING_EMAIL,
  payload: shippingCsEmail,
});

export const setShipingPrimaryAddress = (shippingPrimaryAddress) => ({
  type: SET_SHIPPING_PRIMARY_ADDRESS,
  payload: shippingPrimaryAddress,
});

export const setShipingSecondaryAddress = (shippingSecondaryAddress) => ({
  type: SET_SHIPPING_SECONDARY_ADDRESS,
  payload: shippingSecondaryAddress,
});

export const setShipingPostcode = (shippingPostcode) => ({
  type: SET_SHIPPING_POSTCODE,
  payload: shippingPostcode,
});

export const setShipingCountry = (shippingCountry) => ({
  type: SET_SHIPPING_COUNTRY,
  payload: shippingCountry,
});

// export const setImage = (file) => ({
//   type: SET_IMAGE,
//   payload: file ? { name: file.name, size: file.size, type: file.type } : null,
// });
