import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  Quote,
  ShieldCheck,
  Truck,
  X,
} from "lucide-react";
import heroImage from "../assets/cargo-hero.jpg";
import driverImage from "../assets/delivery-driver.jpg";
import servicesImage from "../assets/services-triptych.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Northstar Logistics — Freight Without Friction" },
      { name: "description", content: "Global ocean, road, air, and last-mile logistics built around your business." },
      { property: "og:title", content: "Northstar Logistics — Freight Without Friction" },
      { property: "og:description", content: "Global ocean, road, air, and last-mile logistics built around your business." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { title: "Smart Warehousing", text: "Flexible storage and inventory handling that keeps every order moving.", imagePosition: "left" },
  { title: "Road Freight", text: "Dependable full-load and groupage coverage across every major corridor.", imagePosition: "center" },
  { title: "Air Cargo", text: "Priority handling for time-sensitive shipments, anywhere in the world.", imagePosition: "right" },
  { title: "Ocean Freight", text: "Reliable port-to-port shipping with full and shared container options.", imagePosition: "left" },
  { title: "Last-mile Delivery", text: "Fast, traceable delivery from the local hub to your customer's door.", imagePosition: "center" },
  { title: "Cold Chain", text: "Temperature-controlled transport for sensitive products at every stage.", imagePosition: "right" },
  { title: "Customs Clearance", text: "Expert documentation and compliance support for smoother borders.", imagePosition: "left" },
  { title: "Project Cargo", text: "Specialist planning and handling for oversized or complex shipments.", imagePosition: "center" },
];

const customers = [
  ["AEROLINK", "Aviation"],
  ["NOVA", "Commerce"],
  ["FIELDWELL", "Agriculture"],
  ["MERIDIAN", "Retail"],
  ["KINETIC", "Mobility"],
  ["ATLAS", "Industrial"],
  ["EVERGREEN", "Living"],
  ["SUMMIT", "Outdoors"],
];

const testimonials = [
  ["Northstar made our busiest season feel effortless. Every shipment arrived exactly when promised.", "Elena Morris", "Retail Director"],
  ["The team communicates clearly and solves issues before they ever reach our customers.", "Thomas Lee", "Supply Chain Lead"],
  ["We finally have one partner for road, air and ocean freight. That simplicity is invaluable.", "Maya Patel", "Founder, Fieldwell"],
  ["Their warehouse team treats our products like their own. Accuracy has improved from day one.", "Owen Carter", "Operations VP"],
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceRef, serviceApi] = useEmblaCarousel({ align: "start", loop: true });
  const [activeService, setActiveService] = useState(0);
  const updateActiveService = useCallback(() => {
    if (serviceApi) setActiveService(serviceApi.selectedScrollSnap());
  }, [serviceApi]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!serviceApi) return;
    updateActiveService();
    serviceApi.on("select", updateActiveService);
    serviceApi.on("reInit", updateActiveService);
    return () => {
      serviceApi.off("select", updateActiveService);
      serviceApi.off("reInit", updateActiveService);
    };
  }, [serviceApi, updateActiveService]);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-40 border-b border-hero-foreground/15 text-hero-foreground">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#home" className="flex items-center gap-2.5 font-extrabold" aria-label="Northstar home">
            <span className="grid size-9 place-items-center bg-brand"><PackageCheck className="size-5" /></span>
            <span className="text-lg">Northstar</span>
          </a>
          <nav className="hidden items-center gap-8 text-xs font-bold uppercase lg:flex" aria-label="Main navigation">
            {[["Home", "home"], ["Company", "about"], ["Services", "services"], ["Why us", "why-us"], ["Customers", "customers"]].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="nav-link">{label}</a>
            ))}
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <a href="tel:+18005550174" className="flex items-center gap-2 text-xs font-semibold"><Phone className="size-4 text-brand" /> +1 800 555 0174</a>
            <a href="#contact" className="btn-primary">Get a quote <ArrowRight className="size-4" /></a>
          </div>
          <button className="grid size-10 place-items-center lg:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-hero-foreground/15 bg-deep px-5 py-5 lg:hidden">
            {["Home", "About", "Services", "Why Us", "Customers", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} onClick={() => setMenuOpen(false)} className="block border-b border-hero-foreground/10 py-3 text-sm font-semibold">{item}</a>
            ))}
          </nav>
        )}
      </header>

      <section id="home" className="relative min-h-[720px] text-hero-foreground">
        <img src={heroImage} alt="Container ship entering a harbor at sunrise" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-5 pt-20 lg:px-8">
          <div className="max-w-2xl animate-rise">
            <p className="eyebrow text-brand-soft">Global logistics, made personal</p>
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.04] sm:text-6xl lg:text-7xl">Freight without friction.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-hero-muted">From the first mile to the final doorstep, we move your cargo with precision, visibility, and care.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">Start shipping <ArrowRight className="size-4" /></a>
              <a href="#services" className="btn-outline">Explore services</a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden bg-brand px-10 py-6 text-primary-foreground md:block">
          <p className="text-xs font-bold uppercase">Trusted across</p><p className="mt-1 text-2xl font-extrabold">68 countries</p>
        </div>
      </section>

      <section id="about" className="section-shell grid items-center gap-14 py-24 lg:grid-cols-2 lg:py-32">
        <div className="reveal relative mx-auto max-w-lg lg:mx-0">
          <img src={driverImage} alt="Northstar delivery specialist preparing a parcel" loading="lazy" width={912} height={1104} className="aspect-[4/4.7] w-full object-cover" />
          <div className="absolute -bottom-6 -right-3 bg-brand px-7 py-6 text-primary-foreground sm:right-8">
            <strong className="block text-3xl font-extrabold">14+ years</strong><span className="text-sm font-semibold">delivering confidence</span>
          </div>
        </div>
        <div className="reveal lg:pl-8">
          <p className="eyebrow">Why Northstar</p>
          <h2 className="section-title">Logistics solutions that keep you moving.</h2>
          <p className="body-copy mt-6">Behind every shipment is a promise. Our specialists combine local expertise with global reach to deliver that promise safely and on schedule.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {["End-to-end visibility", "Dedicated specialists", "Flexible capacity", "Proactive support"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-bold"><CheckCircle2 className="size-5 text-brand" />{item}</div>
            ))}
          </div>
          <div className="mt-9 flex items-center gap-4">
            <div className="flex -space-x-3">{[0,1,2].map((i) => <span key={i} className="grid size-10 place-items-center rounded-full border-2 border-background bg-secondary text-xs font-extrabold">{["MR","SR","DH"][i]}</span>)}</div>
            <p className="text-sm"><strong>4.9/5</strong><br/><span className="text-muted-foreground">from 1,200+ clients</span></p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-soft py-20">
        <div className="section-shell">
          <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><p className="eyebrow">Built around your schedule</p><h2 className="section-title max-w-xl">Timely, cost-effective service.</h2></div>
            <a href="#contact" className="btn-primary self-start">Get a quote <ArrowRight className="size-4" /></a>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              [Clock3, "On-time, every time", "Intelligent routing and proactive planning protect every deadline."],
              [Truck, "Right-sized solutions", "Flexible services designed to fit your volume, route, and budget."],
              [ShieldCheck, "Reliability you can trust", "Careful handling and real-time visibility from pickup to arrival."],
            ].map(([Icon, title, text]) => {
              const FeatureIcon = Icon as typeof Clock3;
              return <article key={String(title)} className="reveal border-t-2 border-brand pt-7"><FeatureIcon className="size-7 text-brand"/><h3 className="mt-5 text-lg font-extrabold">{String(title)}</h3><p className="body-copy mt-3 text-sm">{String(text)}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section id="services" className="bg-deep py-24 text-deep-foreground lg:py-28">
        <div className="section-shell">
          <div className="reveal flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div><p className="eyebrow text-brand-soft">What we do</p><h2 className="section-title max-w-xl">Complete logistics, tailored to you.</h2></div>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => serviceApi?.scrollPrev()} className="slider-control" aria-label="Previous service"><ArrowLeft className="size-5" /></button>
              <button type="button" onClick={() => serviceApi?.scrollNext()} className="slider-control" aria-label="Next service"><ArrowRight className="size-5" /></button>
            </div>
          </div>
          <div ref={serviceRef} className="mt-12 overflow-hidden">
            <div className="flex -ml-5 touch-pan-y">
              {services.map((service, index) => (
                <article key={service.title} className="group min-w-0 flex-[0_0_88%] pl-5 sm:flex-[0_0_48%] lg:flex-[0_0_33.333%]">
                  <div className="aspect-[4/3] overflow-hidden"><img src={servicesImage} alt={service.title} loading="lazy" width={1504} height={704} className={`h-full w-[300%] max-w-none object-cover transition-transform duration-700 group-hover:scale-[1.03] ${service.imagePosition === "center" ? "-translate-x-1/3" : service.imagePosition === "right" ? "-translate-x-2/3" : ""}`} /></div>
                  <div className="border-b-2 border-brand py-6"><span className="text-xs font-extrabold text-brand">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-2 text-lg font-extrabold">{service.title}</h3><p className="mt-3 text-sm leading-6 text-deep-muted">{service.text}</p></div>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-7 flex items-center justify-between">
            <div className="flex gap-2" aria-label="Service carousel pages">
              {services.map((service, index) => <button key={service.title} type="button" aria-label={`View ${service.title}`} onClick={() => serviceApi?.scrollTo(index)} className={`h-1.5 transition-all ${activeService === index ? "w-9 bg-brand" : "w-3 bg-deep-line"}`} />)}
            </div>
            <span className="text-xs font-bold text-deep-muted">{String(activeService + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}</span>
          </div>
        </div>
      </section>

      <section id="why-us" className="bg-deep border-t border-deep-line py-24 text-deep-foreground">
        <div className="section-shell grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div className="reveal"><p className="eyebrow text-brand-soft">Why work with us?</p><h2 className="section-title mt-4">We understand the different logistics needs of every business.</h2><a href="#contact" className="btn-primary mt-9">Talk to an expert <ArrowRight className="size-4"/></a></div>
          <div className="divide-y divide-deep-line border-y border-deep-line">
            {[
              ["01", "Custom coverage", "A tailored network and transport plan built around your routes."],
              ["02", "Responsive service", "One accountable specialist who knows your business."],
              ["03", "Proven expertise", "Decades of practical experience across complex supply chains."],
              ["04", "Secure partnership", "Transparent communication and careful handling at every step."],
            ].map(([num, title, text]) => <div key={num} className="reveal grid grid-cols-[3rem_1fr] gap-5 py-6"><span className="text-2xl font-extrabold text-brand">{num}</span><div><h3 className="font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-deep-muted">{text}</p></div></div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="relative bg-deep py-24 text-deep-foreground">
        <div className="globe-lines" />
        <div className="section-shell relative grid gap-14 lg:grid-cols-2">
          <div className="reveal"><p className="eyebrow text-brand-soft">Ready when you are</p><h2 className="section-title max-w-md">Schedule effortless delivery.</h2><p className="mt-5 max-w-md text-sm leading-6 text-deep-muted">Tell us where your shipment needs to go. Our specialists will handle the route from there.</p></div>
          <form className="reveal grid gap-3" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-3 sm:grid-cols-2"><input aria-label="Full name" placeholder="Full name" className="field"/><input aria-label="Email address" type="email" placeholder="Email address" className="field"/></div>
            <div className="grid gap-3 sm:grid-cols-2"><input aria-label="Origin" placeholder="Origin" className="field"/><input aria-label="Destination" placeholder="Destination" className="field"/></div>
            <select aria-label="Service type" className="field"><option>Choose a service</option><option>Ocean freight</option><option>Road freight</option><option>Air cargo</option><option>Warehousing</option></select>
            <button className="btn-primary mt-2 justify-self-start" type="submit">Request a quote <ArrowRight className="size-4" /></button>
          </form>
        </div>
      </section>

      <div className="section-shell relative z-10 -mt-10 grid grid-cols-2 bg-background shadow-strong md:grid-cols-4">
        {[["40K+", "deliveries yearly"], ["14+", "years of service"], ["68", "countries covered"], ["98%", "on-time delivery"]].map(([value,label]) => <div key={label} className="border-b border-r border-border px-5 py-8 text-center last:border-r-0 md:border-b-0"><strong className="block text-3xl font-extrabold text-brand">{value}</strong><span className="mt-1 block text-xs font-bold uppercase text-muted-foreground">{label}</span></div>)}
      </div>

      <section id="customers" className="section-shell py-24 lg:py-28">
        <div className="reveal grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div><p className="eyebrow">Trusted partnerships</p><h2 className="section-title">The companies we keep moving.</h2></div>
          <p className="body-copy max-w-xl lg:justify-self-end">From growing brands to global operators, our customers rely on Northstar to protect their promises every day.</p>
        </div>
        <div className="mt-14 grid grid-cols-2 border-l border-t border-border md:grid-cols-4">
          {customers.map(([name, industry], index) => <div key={name} className="reveal group flex min-h-36 flex-col items-center justify-center border-b border-r border-border px-4 text-center"><span className="mb-4 grid size-9 place-items-center border border-border text-xs font-black text-brand transition-colors group-hover:border-brand">{String(index + 1).padStart(2, "0")}</span><strong className="customer-name text-base font-black sm:text-xl">{name}</strong><span className="mt-1 text-[10px] font-bold uppercase text-muted-foreground">{industry}</span></div>)}
        </div>
      </section>

      <section className="bg-soft py-24">
        <div className="section-shell"><div className="reveal text-center"><p className="eyebrow">Testimonials</p><h2 className="section-title">What our customers say.</h2></div><div className="mt-12 grid gap-px bg-border md:grid-cols-4">{testimonials.map(([quote,name,role]) => <article key={name} className="reveal bg-background p-7"><Quote className="size-6 text-brand"/><p className="mt-5 text-sm leading-6">“{quote}”</p><p className="mt-7 text-xs font-extrabold uppercase">{name}</p><p className="mt-1 text-xs text-muted-foreground">{role}</p></article>)}</div></div>
      </section>

      <footer className="bg-deep py-16 text-deep-foreground">
        <div className="section-shell grid gap-12 md:grid-cols-[1.4fr_.7fr_.7fr_1.2fr]">
          <div><a href="#home" className="flex items-center gap-2.5 font-extrabold"><span className="grid size-9 place-items-center bg-brand"><PackageCheck className="size-5" /></span>Northstar</a><p className="mt-5 max-w-xs text-sm leading-6 text-deep-muted">Moving business forward with reliable, people-first logistics.</p><div className="mt-6 flex gap-4 text-deep-muted"><Facebook className="size-4"/><Instagram className="size-4"/><Linkedin className="size-4"/></div></div>
          <div><p className="footer-title">Company</p>{[["About", "about"], ["Customers", "customers"], ["Contact", "contact"]].map(([label, id]) => <a href={`#${id}`} key={id} className="footer-link">{label}</a>)}</div>
          <div><p className="footer-title">Services</p>{["Ocean freight", "Road freight", "Air cargo", "Warehousing"].map(x => <a href="#services" key={x} className="footer-link">{x}</a>)}</div>
          <div><p className="footer-title">Stay in the loop</p><div className="mt-5 flex"><input aria-label="Newsletter email" className="field min-w-0" placeholder="Email address"/><button aria-label="Subscribe" className="grid w-12 shrink-0 place-items-center bg-brand text-primary-foreground"><ArrowRight className="size-4"/></button></div><p className="mt-6 flex items-center gap-2 text-xs text-deep-muted"><MapPin className="size-4 text-brand"/> 24 Harbor Way, New York</p><p className="mt-3 flex items-center gap-2 text-xs text-deep-muted"><Mail className="size-4 text-brand"/> hello@northstar.example</p></div>
        </div>
        <div className="section-shell mt-12 border-t border-deep-line pt-6 text-xs text-deep-muted">© 2026 Northstar Logistics. All rights reserved.</div>
      </footer>
    </main>
  );
}
