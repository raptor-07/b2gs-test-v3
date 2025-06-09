import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Page() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 dark:bg-mint-950 transition-colors">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center pb-8 border-b border-gray-200 dark:border-gray-800">
          <h1 className="text-2xl font-lexend font-semibold text-gray-800 dark:text-white">
            Theme Preview
          </h1>
          <ThemeToggle />
        </div>

        {/* Primary Colors */}
        <section>
          <h2 className="text-2xl font-lexend font-semibold mb-4 text-gray-800 dark:text-white">
            Primary Colors
          </h2>
          <div className="grid grid-cols-6 gap-4">
            {[50, 100, 200, 300, 400, 500].map((weight) => (
              <div key={weight} className="space-y-2">
                <div
                  className={`h-20 w-full bg-primary-${weight} rounded-lg dark:ring-1 dark:ring-white/10`}
                />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  primary-{weight}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Secondary Colors */}
        <section>
          <h2 className="text-2xl font-lexend font-semibold mb-4 text-gray-800 dark:text-white">
            Secondary Colors
          </h2>
          <div className="grid grid-cols-8 gap-4">
            {[100, 200, 300, 400, 500, 600, 700, 800].map((weight) => (
              <div key={weight} className="space-y-2">
                <div
                  className={`h-20 w-full bg-secondary-${weight} rounded-lg dark:ring-1 dark:ring-white/10`}
                />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  secondary-{weight}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Accent Colors */}
        <section>
          <h2 className="text-2xl font-lexend font-semibold mb-4 text-gray-800 dark:text-white">
            Accent Colors
          </h2>
          <div className="grid grid-cols-6 gap-4">
            {[50, 100, 200, 300, 400, 500].map((weight) => (
              <div key={weight} className="space-y-2">
                <div
                  className={`h-20 w-full bg-accent-${weight} rounded-lg dark:ring-1 dark:ring-white/10`}
                />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  accent-{weight}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-2xl font-lexend font-semibold mb-4 text-gray-800 dark:text-white">
            Typography
          </h2>
          <div className="space-y-4">
            <p className="font-lexend text-4xl font-medium text-gray-800 dark:text-white">
              Lexend Font (text-4xl)
            </p>
            <p className="font-ibm text-2xl text-gray-800 dark:text-white">
              IBM Plex Serif Font (text-2xl)
            </p>
            <div className="space-y-2">
              {["xs", "sm", "base", "lg", "xl", "2xl", "3xl"].map((size) => (
                <p
                  key={size}
                  className={`text-${size} text-gray-800 dark:text-gray-200`}
                >
                  Text size {size}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Dark Mode Demo Card */}
        <section className="mt-8">
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
            <h3 className="text-xl font-lexend font-medium text-gray-800 dark:text-white mb-4">
              Dark Mode Demo Card
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This card demonstrates how different elements adapt to dark mode.
              The colors, borders, and text all adjust automatically based on
              the current theme.
            </p>
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-md bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-300 transition-colors">
                Primary Button
              </button>
              <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition-colors">
                Secondary Button
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
