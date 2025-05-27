import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import PageTitle from "../components/PageTitle";

const AddProducts = () => {
  return (
    <section>
      <div className="pb-2 flex items-center justify-between border-b-2 mb-4 border-gray-300">
        <PageTitle pageTitle={"Add Product"} />
        <BreadCrumbs pageName={"product-list"} />
      </div>
    </section>
  );
};

export default AddProducts;
