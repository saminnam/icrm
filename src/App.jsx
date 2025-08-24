// import React from "react";
// import "./Global.css";
// import { Route, Routes } from "react-router-dom";
// import Login from "./pages/Login";
// import PublicRoute from "./utils/PublicRoute";
// import ProtectedRoute from "./utils/ProtectedRoute";
// import ManageCustomer from "./pages/ManageCustomer";
// import DashboardLayout from "./Layouts/DashboardLayout";
// import Dashboard from "./pages/Dashboard";
// import AddCustomers from "./pages/AddCustomers";
// import AddProducts from "./pages/AddProducts";
// import ManageProducts from "./pages/ManageProducts";
// import ManageUsers from "./pages/ManageUsers";
// import AddUser from "./pages/AddUser";
// import CreateProforma from "./pages/CreateProforma";
// import ManageProforma from "./pages/ManageProforma";
// import CreateInvoice from "./pages/CreateInvoice";
// import ManageInvoice from "./pages/ManageInvoice";

// const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <PublicRoute>
//               <Login />
//             </PublicRoute>
//           }
//         />
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <DashboardLayout>
//                 <Dashboard />
//               </DashboardLayout>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/add-customer"
//           element={
//             <ProtectedRoute>
//               <DashboardLayout>
//                 <AddCustomers />
//               </DashboardLayout>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/customer-list"
//           element={
//             <ProtectedRoute>
//               <DashboardLayout>
//                 <ManageCustomer />
//               </DashboardLayout>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/create-proforma"
//           element={
//             <ProtectedRoute>
//               <DashboardLayout>
//                 <CreateProforma />
//               </DashboardLayout>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/proforma-list"
//           element={
//             <ProtectedRoute>
//               <DashboardLayout>
//                 <ManageProforma />
//               </DashboardLayout>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/create-invoice"
//           element={
//             <ProtectedRoute>
//               <DashboardLayout>
//                 <CreateInvoice />
//               </DashboardLayout>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/invoice-list"
//           element={
//             <ProtectedRoute>
//               <DashboardLayout>
//                 <ManageInvoice />
//               </DashboardLayout>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/add-product"
//           element={
//             <ProtectedRoute>
//               <DashboardLayout>
//                 <AddProducts />
//               </DashboardLayout>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/product-list"
//           element={
//             <ProtectedRoute>
//               <DashboardLayout>
//                 <ManageProducts />
//               </DashboardLayout>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/add-user"
//           element={
//             <ProtectedRoute>
//               <DashboardLayout>
//                 <AddUser />
//               </DashboardLayout>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/user-list"
//           element={
//             <ProtectedRoute>
//               <DashboardLayout>
//                 <ManageUsers />
//               </DashboardLayout>
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </>
//   );
// };

// export default App;

import React from "react";
import "./Global.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import PublicRoute from "./utils/PublicRoute";
import ProtectedRoute from "./utils/ProtectedRoute";
import ManageCustomer from "./pages/ManageCustomer";
import DashboardLayout from "./Layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import AddCustomers from "./pages/AddCustomers";
import AddProducts from "./pages/AddProducts";
import ManageProducts from "./pages/ManageProducts";
import ManageUsers from "./pages/ManageUsers";
import AddUser from "./pages/AddUser";
import CreateProforma from "./pages/CreateProforma";
import ManageProforma from "./pages/ManageProforma";
import CreateInvoice from "./pages/CreateInvoice";
import ManageInvoice from "./pages/ManageInvoice";

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        /> */}
        <Route
          path="/"
          element={
            // <ProtectedRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            // </ProtectedRoute>
          }
        />
        <Route
          path="/add-customer"
          element={
            // <ProtectedRoute>
              <DashboardLayout>
                <AddCustomers />
              </DashboardLayout>
            // </ProtectedRoute>
          }
        />
        <Route
          path="/customer-list"
          element={
            // <ProtectedRoute>
              <DashboardLayout>
                <ManageCustomer />
              </DashboardLayout>
            // </ProtectedRoute>
          }
        />
        <Route
          path="/create-proforma"
          element={
            // <ProtectedRoute>
              <DashboardLayout>
                <CreateProforma />
              </DashboardLayout>
            // </ProtectedRoute>
          }
        />
        <Route
          path="/proforma-list"
          element={
            // <ProtectedRoute>
              <DashboardLayout>
                <ManageProforma />
              </DashboardLayout>
            // </ProtectedRoute>
          }
        />
        <Route
          path="/create-invoice"
          element={
            // <ProtectedRoute>
              <DashboardLayout>
                <CreateInvoice />
              </DashboardLayout>
            // </ProtectedRoute>
          }
        />
        <Route
          path="/invoice-list"
          element={
            // <ProtectedRoute>
              <DashboardLayout>
                <ManageInvoice />
              </DashboardLayout>
            // </ProtectedRoute>
          }
        />
        <Route
          path="/add-product"
          element={
            // <ProtectedRoute>
              <DashboardLayout>
                <AddProducts />
              </DashboardLayout>
            // </ProtectedRoute>
          }
        />
        <Route
          path="/product-list"
          element={
            // <ProtectedRoute>
              <DashboardLayout>
                <ManageProducts />
              </DashboardLayout>
            // </ProtectedRoute>
          }
        />
        <Route
          path="/add-user"
          element={
            // <ProtectedRoute>
              <DashboardLayout>
                <AddUser />
              </DashboardLayout>
            // </ProtectedRoute>
          }
        />
        <Route
          path="/user-list"
          element={
            // <ProtectedRoute>
              <DashboardLayout>
                <ManageUsers />
              </DashboardLayout>
            // </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;



