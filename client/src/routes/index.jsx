import React from "react";
import userRoutes from "../pages/users";
import managementRoutes from "../pages/management";
// import adminRoutes from "../pages/admin";
import hospitalRoutes from "../pages/hospital";
// import staffRoutes from "../pages/staff";
// import partnerRoutes from "../pages/partners";
import authRoutes from "../pages/auth";

// Hàm tạo routes động
const generateRoutes = (role, routes) =>
  Object.keys(routes).map((key) => ({
    path: `/${role}/${key}`,
    element: React.createElement(routes[key]),
  }));

// Kết hợp tất cả routes
export const routes = [
  ...generateRoutes("users", userRoutes),
  ...generateRoutes("management",managementRoutes),
  // ...generateRoutes("admin", adminRoutes),
  ...generateRoutes("hospital", hospitalRoutes),
  // ...generateRoutes("staff", staffRoutes),
  // ...generateRoutes("partners", partnerRoutes),
  ...generateRoutes("auth", authRoutes),

  {
    path: "/management/UsersPage",
    element: <managementRoutes.UsersPage />,
  },
  {
    path: "/management/UsersDetails/:id",
    element: <managementRoutes.UsersDetails />,
  },
  {
    path: "/management/UsersUpdate/:id",
    element: <managementRoutes.UsersUpdate />,
  }
];
