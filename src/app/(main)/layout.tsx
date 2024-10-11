import { Navbar } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      <div>{children}</div>
    </main>
  );
}
