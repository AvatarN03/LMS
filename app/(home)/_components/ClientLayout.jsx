// app/ClientLayout.tsx (Client Component)
"use client";

import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./Navbar";
import { useDarkMode } from "@/app/lib/theme";



export default function ClientLayout({ children }) {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <ClerkProvider signInUrl="/sign-in" signUpUrl="/sign-up">
            <main className="relative">

                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                {children}
            </main>
        </ClerkProvider>
    );
}
