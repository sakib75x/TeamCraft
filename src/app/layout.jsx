import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import "./globals.css";
import React from "react";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "TeamCraft | A Team Collaboration Tool",
  description:
    "Everything under One Roof.\n" +
    "Build your Project with Task Management, and Collaboration for a Successful Project.",
};

import { Nunito } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import QureryProvider from "@/providers/QureryProvider";
import ScreenRecorderProvider from "@/providers/ScreenRecorderProvider";
import AuthProvider from "@/providers/AuthProvider";

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
      }}
    >
      <html lang="en">
        <body
          className={`${nunito.className} bg-white dark:bg-[#010313] before:fixed before:-z-10 before:blur-[200px] before:lg:size-[600px] before:size-[400px] before:rounded-full before:top-[10%] before:md:start-[10%] before:-start-[20%] before:bg-indigo-600/20 after:fixed after:-z-10 after:blur-[200px] after:lg:size-[600px] after:size-[400px] after:rounded-full after:bottom-[10%] after:md:end-[10%] after:-end-[20%] after:bg-red-600/20`}
        >
          <QureryProvider>
            <ScreenRecorderProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <Navbar />
                <Toaster />
                <AuthProvider>{children}</AuthProvider>
                <Footer />
              </ThemeProvider>
            </ScreenRecorderProvider>
          </QureryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
