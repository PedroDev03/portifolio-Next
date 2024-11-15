import NavBar from "@/app/components/navbar";
import Footer from "@/app/components/footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Ramais Unimed Anápolis</title>
        {/* Include other meta tags or links here */}
      </head>

      <body>
          <NavBar />

          {children}
          <Footer />
      </body>
    </html>
  );
}