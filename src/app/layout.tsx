import "./globals.css";
import SupabaseProvider from "./supabase-provider";

export const metadata = {
  title: "Supa Sync",
  description: "Supa Sync is a Tweet App using Next JS 13 with Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SupabaseProvider>{children}</SupabaseProvider>
      </body>
    </html>
  );
}
