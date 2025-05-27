import React from "react";
import PageTitle from "../components/PageTitle";
import BreadCrumbs from "../components/BreadCrumbs";

const ManageInvoice = () => {
  return (
    <section>
      <div className="pb-2 flex items-center justify-between border-b-2 mb-4 border-gray-300">
        <PageTitle pageTitle={"Manage Invoice"} />
        <BreadCrumbs pageName={"create-invoice"} />
      </div>
    </section>
  );
};

export default ManageInvoice;
