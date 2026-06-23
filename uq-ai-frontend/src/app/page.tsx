import { ContactForm } from "@/components/ContactForm";
import { Navbar } from "@/components/Navbar";
import { Bot, BrainCircuit, Building2, GraduationCap, HeartPulse, LineChart, Microscope, ShieldCheck, Workflow } from "lucide-react";

const services = [
  { icon: Bot, title: "Agentes IA", text: "Asistentes inteligentes para ventas, soporte y procesos internos." },
  { icon: BrainCircuit, title: "Chatbots empresariales", text: "Conversaciones seguras conectadas a datos del negocio." },
  { icon: Workflow, title: "Automatizacion", text: "Flujos que reducen tareas repetitivas y errores humanos." },
  { icon: Building2, title: "MYPES", text: "Soluciones accesibles para empresas peruanas en crecimiento." },
  { icon: HeartPulse, title: "Salud y educacion", text: "Prototipos responsables para servicios con alto impacto social." },
  { icon: LineChart, title: "Big Data", text: "Analitica, tableros y modelos para decisiones con evidencia." }
];

const courses = ["Machine Learning", "RAG con documentos", "LLM aplicado", "Agentes inteligentes", "Programacion segura", "Cloud computing"];
const labs = ["Demo de chatbot clinico", "Prototipo de analisis de ventas", "Comunidad de IA aplicada", "DevSecOps para APIs"];

export default function Home() {
  return (
    <main className="bg-slate-50">
      <Navbar />
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(45,212,191,0.35),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(251,113,133,0.24),transparent_30%)]" />
        <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="mb-4 inline-flex rounded-md bg-white/10 px-3 py-1 text-sm font-semibold text-limeSoft">
              UQ AI Solution Company
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
              Inteligencia Artificial para el Peru y el Mundo
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Creamos agentes, automatizaciones, cursos y prototipos con seguridad desde el diseno para organizaciones que quieren usar IA con confianza.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#servicios" className="focus-ring rounded-md bg-limeSoft px-5 py-3 text-center font-bold text-ink hover:bg-lime-200">
                Explorar Servicios
              </a>
              <a href="#contacto" className="focus-ring rounded-md border border-white/30 px-5 py-3 text-center font-bold text-white hover:bg-white/10">
                Contactar
              </a>
            </div>
          </div>
          <div className="relative aspect-square max-h-[460px] rounded-md border border-white/15 bg-white/5 p-5 shadow-soft">
            <div className="grid h-full place-items-center rounded-md border border-white/10 bg-ink/60">
              <div className="relative h-72 w-72">
                <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-200/40" />
                <div className="absolute left-0 top-10 grid h-20 w-20 place-items-center rounded-md bg-white text-ocean shadow-soft"><Bot size={34} /></div>
                <div className="absolute right-2 top-2 grid h-20 w-20 place-items-center rounded-md bg-limeSoft text-ink shadow-soft"><ShieldCheck size={34} /></div>
                <div className="absolute bottom-4 left-20 grid h-24 w-24 place-items-center rounded-md bg-skySoft text-ink shadow-soft"><Microscope size={38} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-ink">UQ AI Solutions</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
              <service.icon className="mb-4 text-ocean" size={30} />
              <h3 className="text-lg font-bold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="academia" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-ink">UQ AI Academy</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <article key={course} className="rounded-md border border-slate-200 p-5">
                <GraduationCap className="mb-3 text-coral" />
                <h3 className="font-bold text-ink">{course}</h3>
                <p className="mt-2 text-sm text-slate-600">Curso practico con laboratorios, evaluacion y enfoque aplicado.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="lab" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-ink">UQ AI Lab</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {labs.map((lab) => (
            <article key={lab} className="rounded-md bg-ink p-5 text-white">
              <Microscope className="mb-4 text-limeSoft" />
              <h3 className="font-bold">{lab}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="bg-skySoft/70">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-black text-ink">Contacta al equipo</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Completa el formulario y el lead se registrara directamente en el backend para revisarlo desde el panel ADMIN.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="bg-ink px-4 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>UQ AI Solution Company - Lima, Peru</p>
          <p>LinkedIn · GitHub · YouTube · 2026 · Aviso legal</p>
        </div>
      </footer>
    </main>
  );
}
