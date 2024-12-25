// layout.tsx
import React from "react";
import { AuthProvider } from "./context/authContext";
import Link from "next/link";

// Type the children prop
export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // Explicitly declare that 'children' is of type React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/masters">Masters</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/schedule">Schedule</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </nav>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
