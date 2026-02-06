import "./globals.css";
import { ThemeProvider } from "../../context/ThemeContext";
import { LanguageProvider } from "../../context/LanguageContext";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Miguel.Dev | Software Engineer",
  description: "Desarrollador Full Stack, Project Manager y QA especializado en aplicaciones web modernas con React, Next.js, Node.js y más",
  keywords: ["desarrollador full stack", "react", "next.js", "node.js", "software engineer", "QA", "project manager"],
  authors: [{ name: "Miguel Ángel Bahamón Rocha" }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Miguel Bahamón | Software Engineer",
    description: "Portfolio y CV de desarrollador Full Stack",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miguel Bahamón | Software Engineer",
    description: "Desarrollador Full Stack, Project Manager y QA",
  },
};

export default function RootLayout({ children }) {
  return (

    <html lang="es" suppressHydrationWarning>
       <head>
        {/* Script para prevenir flash de tema - se ejecuta antes de React */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'dark';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
