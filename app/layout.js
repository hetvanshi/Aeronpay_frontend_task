import "./globals.css";

export const metadata = {
  title: "AeronPay - Modern Digital Payments",
  description: "Secure, fast, and reliable digital payment solutions",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
