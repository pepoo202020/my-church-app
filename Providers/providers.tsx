import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "./LanguageProvider";
import { Toaster } from "sonner";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageProvider>
        {children}
        <Toaster position="top-center" richColors />
      </LanguageProvider>
    </ThemeProvider>
  );
}
