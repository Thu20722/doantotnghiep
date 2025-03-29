import React from "react";
import userRoutes from "../pages/users";
// import adminRoutes from "../pages/admin";
// import hospitalRoutes from "../pages/hospital";
// import staffRoutes from "../pages/staff";
// import partnerRoutes from "../pages/partners";

// Hàm tạo routes động
const generateRoutes = (role, routes) =>
  Object.keys(routes).map((key) => ({
    path: `/${role}/${key}`,
    element: React.createElement(routes[key]),
  }));

// Kết hợp tất cả routes
export const routes = [
  ...generateRoutes("users", userRoutes),
  // ...generateRoutes("admin", adminRoutes),
  // ...generateRoutes("hospital", hospitalRoutes),
  // ...generateRoutes("staff", staffRoutes),
  // ...generateRoutes("partners", partnerRoutes),
];
