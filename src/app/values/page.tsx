export default function ValuesPage() {
    const values = [
      { title: "Innovation", desc: "We stay ahead with the latest trends and technologies." },
      { title: "Integrity", desc: "Honesty and transparency are at our core." },
      { title: "Client-Centric", desc: "Your success is our success." },
      { title: "Collaboration", desc: "We believe in the power of teamwork." },
      { title: "Excellence", desc: "We strive for top-notch quality and results." },
    ];
  
    return (
      <main className="p-10">
        <h2 className="text-3xl font-bold text-purple-900 mb-6">Our Core Values</h2>
        <ul className="space-y-4">
          {values.map((val) => (
            <li key={val.title}>
              <h3 className="text-xl font-semibold text-yellow-600">{val.title}</h3>
              <p className="text-gray-700">{val.desc}</p>
            </li>
          ))}
        </ul>
      </main>
    );
  }