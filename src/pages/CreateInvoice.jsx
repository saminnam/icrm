import React from "react";
import PageTitle from "../components/PageTItle";
import BreadCrumbs from "../components/BreadCrumbs";

const CreateInvoice = () => {
  return (
    <section className="p-5">
      <div className="pb-2 flex items-center justify-between border-b-2 mb-4 border-gray-300">
        <PageTitle pageTitle={"Create Invoice"} />
        <BreadCrumbs pageName={"invoice-list"} />
      </div>
    </section>
  );
};

export default CreateInvoice;
