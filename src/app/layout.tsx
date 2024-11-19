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
      <link rel="icon" href="/favicon.ico" />
      <title>Portifólio Pedro :p</title>
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