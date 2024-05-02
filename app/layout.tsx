
import { montserrat, robotoCondensed } from './ui/fonts';
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${robotoCondensed.className} antialiased`}>
        
        {children}

        <footer className='py-10 flex justify-center'>
          Hecho con ❤️ por la gente de Vercel
        </footer>
      </body>
      
    </html>
  );
}
