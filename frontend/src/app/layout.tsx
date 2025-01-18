import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, UserButton } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "sonner";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Automate AI",
  description: "Make your workflow easier!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={jakarta.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster/>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
