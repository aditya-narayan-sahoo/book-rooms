"use client";
import { AuthProvider } from "@/context/authContext";
const AuthWrapper = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AuthWrapper;

/*
    we could have wrapped the layout.jsx within AuthProvider but to do so we have to make the 
    layout client side, which has several demerits. So we do this here.
*/
