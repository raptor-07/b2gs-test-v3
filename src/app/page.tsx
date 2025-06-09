import { Header } from "@/ui/header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="relative z-0">
        <div className="container mx-auto px-4 py-8">
          <div className="rounded-lg border p-8">
            <h1 className="text-2xl font-semibold mb-4">Test Content</h1>
            <p>This content will be blurred when the mobile menu is open.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
