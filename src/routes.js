import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";
import AllParts from "views/admin/AllParts";
import ManageParts from "views/admin/ManageParts";
import Orders from "views/admin/Orders";
import PartDetails from "views/admin/PartDetails";
import SearchParts from "views/admin/SearchParts";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Parts Marketplace",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "All Parts",
    layout: "/admin",
    path: "all-parts",
    // icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <AllParts />,
    secondary: true,
  },
  {
    name: "Search Parts",
    layout: "/admin",
    path: "search-parts",
    // icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <SearchParts />,
    secondary: true,
  },
  {
    name: "Part Details",
    layout: "/admin",
    path: "part-details/:id",
    // icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <PartDetails />,
    secondary: true,
  },
  {
    name: "Manage Parts",
    layout: "/admin",
    path: "manage-parts",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <ManageParts />,
    secondary: true,
  },
  {
    name: "All Orders",
    layout: "/admin",
    path: "orders",
    // icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <Orders />,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routes;
