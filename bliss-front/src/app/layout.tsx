import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/masters">Masters</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/schedule">Schedule</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
