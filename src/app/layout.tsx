import NavBar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { Provider } from "@/components/ui/provider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en" suppressHydrationWarning>

      <head>
      <link rel="icon" href="/favicon.ico" />
      <title>Portifólio</title>
        {/* Include other meta tags or links here */}
      </head>

      <body>
         
          <NavBar />

          <Provider>{children}</Provider>
      
          <Footer />
      </body>
    </html>
  );
}