import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoutes() {
  const user = JSON.parse(localStorage.getItem("user"));

  return user && user.token ? <Outlet /> : <Navigate to="/sign-in" />;
}
