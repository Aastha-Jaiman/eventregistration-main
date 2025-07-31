import AdminLayout from "@/components/admin/AdminLayout";
import AdminRegister from "@/components/admin/AdminRegister";
import React from "react";

export default function page() {
  return (
    <AdminLayout>
      <AdminRegister />
    </AdminLayout>
  );
}
