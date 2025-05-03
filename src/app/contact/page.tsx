export default function ContactPage() {
    return (
      <main className="p-10 max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-purple-900 mb-6">Contact Us</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
          <textarea placeholder="Your message" className="w-full p-2 border border-gray-300 rounded" rows={4}></textarea>
          <button type="submit" className="bg-purple-900 text-white px-4 py-2 rounded">Send</button>
        </form>
      </main>
    );
  }