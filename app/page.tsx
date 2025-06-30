export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <section className="px-6 py-16 text-center">
        <img
          src="/Monkey%20Business.png"
          alt="Monkey Business Logo"
          className="mx-auto mb-6 w-48"
        />
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Automatiza tu CX con IA y canales conversacionales
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Implementamos soluciones de inteligencia artificial sobre WhatsApp, RCS y Voice Bots para llevar tu experiencia de cliente al siguiente nivel.
        </p>
        <a
          href="https://wa.me/5210000000000"
          className="inline-block mt-6 px-6 py-3 rounded-full font-medium text-black"
          style={{ backgroundColor: '#F2C555' }}
        >
          Agenda una consultoría
        </a>
      </section>

      <section className="px-6 py-16 bg-zinc-900 text-center">
        <h2 className="text-3xl font-semibold mb-8">¿Qué hacemos?</h2>
        <ul className="max-w-3xl mx-auto text-left space-y-4 text-gray-300">
          <li>✅ Consultoría en experiencia conversacional</li>
          <li>✅ Automatización con IA para atención y ventas</li>
          <li>✅ Integración de flujos en WhatsApp, RCS y Voice Bots</li>
          <li>✅ Despliegue rápido con plataformas como Aivo, Meta y Google</li>
        </ul>
      </section>

      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-8">Casos de uso por industria</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-zinc-800 p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-2" style={{ color: '#F2C555' }}>Banca y Fintech</h3>
            <p className="text-gray-300">Cobros automatizados, onboarding y soporte 24/7</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-2" style={{ color: '#F2C555' }}>Retail y ecommerce</h3>
            <p className="text-gray-300">Campañas interactivas, seguimiento de pedidos, fidelización</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-2" style={{ color: '#F2C555' }}>Telcos y suscripciones</h3>
            <p className="text-gray-300">Migraciones, upgrades, y soporte técnico automatizado</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 text-center bg-zinc-900">
        <h2 className="text-3xl font-semibold mb-4">¿Listo para transformar tu CX?</h2>
        <a
          href="https://wa.me/5210000000000"
          className="inline-block mt-2 px-6 py-3 rounded-full font-medium text-black"
          style={{ backgroundColor: '#F2C555' }}
        >
          Hablemos por WhatsApp
        </a>
      </section>

      <footer className="text-center py-8 text-gray-500 text-sm">
        © 2025 MonkeyBusiness · Inteligencia aplicada a la conversación
      </footer>
    </main>
  );
}
