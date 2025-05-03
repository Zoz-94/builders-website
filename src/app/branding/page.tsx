export default function BrandingPage() {
    return (
      <main className="p-10">
        <h2 className="text-3xl font-bold text-purple-900 mb-6">Branding Guidelines</h2>
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Colors</h3>
          <ul>
            <li>Purple: #2B124C</li>
            <li>Light Purple: #E5E1E6</li>
            <li>Yellow: #FECD4C</li>
            <li>White: #FFFFFF</li>
          </ul>
        </section>
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Typography</h3>
          <p>Primary font: Helvetica Now Display (or Helvetica fallback)</p>
        </section>
        <section>
          <h3 className="text-2xl font-semibold mb-2">Logo Concept</h3>
          <p>
            The logo is a small letter B shaped like a building. A square represents a new client joining to build and develop their brand.
          </p>
        </section>
      </main>
    );
  }
  