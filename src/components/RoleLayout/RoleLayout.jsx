"use client";

import AdminDashboard from "@/components/Admin/AdminDashboard/AdminDashboard";
import MainPageWrap from "@/components/Dashboards/MainPage/MainPageWrap";
import useRole from "@/hooks/useRole";

const RoleLayout = () => {
  const [role] = useRole();

  return <>{role === "admin" ? <AdminDashboard /> : <MainPageWrap />}</>;
};

export default RoleLayout;
