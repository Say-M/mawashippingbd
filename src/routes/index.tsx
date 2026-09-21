import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Compass,
  Facebook,
  Handshake,
  HeartHandshake,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Ship,
  ShieldCheck,
  X,
} from "lucide-react";
import payraImage from "../assets/payra-port.jpg";
import chairmanImage from "../assets/chairman-portrait.jpg";
import dockyardImage from "../assets/mawa-dockyard.jpg";
import crewImage from "../assets/crew-boarding.jpg";
import deckImage from "../assets/vessel-deck-ops.jpg";
import logoImage from "../assets/mawa-logo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MAWA Shipping Lines — Connecting Global Shipping with Bangladesh" },
      {
        name: "description",
        content:
          "MAWA SHIPPING LINES is a licensed shipping agency, a Sister Concern of MAWA GROUP, providing vessel agency, port operations and maritime support services from Chattogram, Bangladesh.",
      },
      {
        property: "og:title",
        content: "MAWA Shipping Lines — Connecting Global Shipping with Bangladesh",
      },
      {
        property: "og:description",
        content:
          "Licensed shipping agency and maritime support services connecting Chattogram, Bangladesh with the regional and global maritime network.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Vessel Agency Representation",
    text: "Professional representation for ship owners and operators calling at Chattogram Port.",
    image: payraImage,
  },
  {
    title: "Pre-Arrival and Port Call Coordination",
    text: "Coordinated planning and communication ahead of every vessel call.",
    image: deckImage,
  },
  {
    title: "Arrival and Departure Formalities",
    text: "Accurate handling of vessel arrival and departure procedures.",
    image: crewImage,
  },
  {
    title: "Port Documentation and Clearance",
    text: "Complete documentation and clearance coordination with port authorities.",
    image: payraImage,
  },
  {
    title: "Cargo Loading and Unloading Support",
    text: "Support for cargo loading and unloading operations at berth.",
    image: payraImage,
  },
  {
    title: "Stevedoring Coordination",
    text: "Coordinated stevedoring and cargo handling activities.",
    image: payraImage,
  },
  {
    title: "Vessel Husbandry Support",
    text: "Fresh water arrangements and other husbandry requirements for vessels in port.",
    image: deckImage,
  },
  {
    title: "Crew, Stores and Transportation Support",
    text: "Crew boarding, stores handling and local transportation support.",
    image: crewImage,
  },
];

const sisterConcerns = [
  ["Mawa Dockyard", "Shipbuilding, ship repair and marine engineering"],
  ["Mawa Bagan Bari", "Group social and community initiative"],
  ["Mawa Sports Zone", "Sports and recreational activities"],
  ["Mawa Sand Supplier", "Sand supply and related material services"],
  ["M/S Mawa Enterprise", "Business and operational services"],
  ["Mawa Enterprise Limited", "Diversified business operations"],
  ["Mawa Shipping Lines", "Licensed shipping agency and maritime support"],
  ["M/S Mawa Filling & LPG Station", "Fuel and LPG related services"],
  ["Agent Banking: Eastern Bank PLC", "Banking service point"],
  ["Mawa Fertilizer & Handling Contractor", "Fertilizer handling and cargo operations"],
  ["Chittagong Square Clinical Laboratory Limited", "Clinical laboratory services"],
  ["Stevedoring Ship/Berth Cargo Handling Operator", "Stevedoring and berth cargo handling"],
];

const stakeholders = [
  "Ship Owners",
  "Ship Managers",
  "Ship Operators",
  "Charterers",
  "Shipping Agencies",
  "NVOCCs",
  "Freight Forwarders",
  "Cargo Owners",
];

const partnerships = [
  [
    "01",
    "Direct Agency Appointment",
    "Serving as the appointed local agent for ship owners and operators calling at Chattogram.",
  ],
  [
    "02",
    "Local Agency Support",
    "Supporting established shipping agencies with local port operations and vessel attendance.",
  ],
  [
    "03",
    "Subcontract Operations",
    "Handling agreed cargo, husbandry and port activities through subcontract arrangements.",
  ],
  [
    "04",
    "Strategic Partnership",
    "Working closely with NVOCCs, freight forwarders and logistics companies in Bangladesh.",
  ],
  [
    "05",
    "Regional Network Partnership",
    "Growing connections across Chattogram, Bangladesh, Singapore and the wider region.",
  ],
  [
    "06",
    "Service Partnership",
    "Coordinating with authorized specialist providers for licensed and specialized services.",
  ],
];

const profileBadges = [
  "Licensed Shipping Agency",
  "Chattogram Based",
  "Singapore Focused",
  "MAWA GROUP Backed",
  "Practical Port Experience",
  "Cargo Handling Experience",
  "Payra Port Stevedoring",
  "Shipbuilding & Repair Ecosystem",
];

const complianceFocus = [
  "Customs and port procedures",
  "Vessel arrival and departure formalities",
  "Port documentation and clearance coordination",
  "Government authority liaison",
  "Accurate operational reporting",
  "Safety and responsible operations",
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
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
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
          <a
            href="#home"
            className="flex items-center gap-2.5"
            aria-label="MAWA Shipping Lines home"
          >
            <img
              src={logoImage}
              alt="MAWA Shipping Lines"
              className="size-10 rounded-full object-cover"
            />
            <span className="leading-none">
              <span className="block text-lg font-extrabold">MAWA</span>
              <span className="block text-[9px] font-bold tracking-[0.22em] text-brand-soft">
                SHIPPING LINES
              </span>
            </span>
          </a>
          <nav
            className="hidden items-center gap-8 text-xs font-bold uppercase lg:flex"
            aria-label="Main navigation"
          >
            {[
              ["Home", "home"],
              ["About", "about"],
              ["Services", "services"],
              ["Why us", "why-us"],
              ["Sister Concerns", "group"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="nav-link">
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <a href="tel:+8801711481185" className="flex items-center gap-2 text-xs font-semibold">
              <Phone className="size-4 text-brand" /> +880 1711 481185
            </a>
            <a href="#contact" className="btn-primary">
              Contact us <ArrowRight className="size-4" />
            </a>
          </div>
          <button
            className="grid size-10 place-items-center lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-hero-foreground/15 bg-deep px-5 py-5 lg:hidden">
            {["Home", "About", "Services", "Why Us", "Sister Concerns", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-").replace("sister-concerns", "group")}`}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-hero-foreground/10 py-3 text-sm font-semibold"
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section id="home" className="relative min-h-[720px] text-hero-foreground">
        <img
          src={payraImage}
          alt="Cargo vessel berthed at Payra Port, Bangladesh"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-5 pt-20 lg:px-8">
          <div className="max-w-2xl animate-rise">
            <p className="eyebrow text-brand-soft">A Sister Concern of MAWA GROUP</p>
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.04] sm:text-6xl lg:text-7xl">
              Connecting Global Shipping with Bangladesh.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-hero-muted">
              A licensed shipping agency providing professional vessel agency, port operations and
              maritime support services from Chattogram, Bangladesh — connecting to Singapore and
              the wider regional maritime network.
            </p>
            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-hero-muted">
              Shipping Agency • Maritime Support • Port Operations • Regional Connectivity
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                Contact us <ArrowRight className="size-4" />
              </a>
              <a href="#services" className="btn-outline">
                Explore services
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden bg-brand px-10 py-6 text-primary-foreground md:block">
          <p className="text-xs font-bold uppercase">Licensed</p>
          <p className="mt-1 text-lg font-extrabold">Customs House, Chattogram</p>
        </div>
      </section>

      <section
        id="chairman"
        className="section-shell grid items-center gap-14 py-24 lg:grid-cols-2 lg:py-32"
      >
        <div className="reveal relative mx-auto max-w-lg lg:mx-0">
          <img
            src={chairmanImage}
            alt="Haji Mohammad Alam, Chairman of MAWA GROUP"
            loading="lazy"
            width={932}
            height={1317}
            className="aspect-[4/4.7] w-full object-cover"
          />
          <div className="absolute -bottom-6 -right-3 bg-brand px-7 py-5 text-primary-foreground sm:right-8">
            <strong className="block text-base font-extrabold">Haji Mohammad Alam</strong>
            <span className="text-xs font-semibold">Chairman, MAWA GROUP</span>
          </div>
        </div>
        <div className="reveal lg:pl-8">
          <p className="eyebrow">Chairman's Message</p>
          <h2 className="section-title">A message from our Chairman.</h2>
          <div className="body-copy mt-6 space-y-4 text-sm">
            <p>
              Assalamu Alaikum. It gives me great pleasure to introduce MAWA SHIPPING LINES, a
              Sister Concern of MAWA GROUP, established with the vision of developing a
              professional, reliable and service focused shipping agency in Bangladesh.
            </p>
            <p>
              MAWA GROUP has been involved in port, cargo handling and marine related activities for
              more than a decade — including loading and unloading of BCIC urea fertilizer, handling
              raw materials and products of Bashundhara Group, and supporting vessel and cargo
              related operations at Chattogram Port. MAWA GROUP also holds a Stevedoring Licence for
              Payra Port.
            </p>
            <p>
              Our strategic objective is to connect Bangladesh with the wider regional maritime
              network, with particular attention to Singapore as a major maritime and business hub
              in Southeast Asia, while working closely with established shipping agencies, NVOCCs,
              freight forwarders and logistics companies in Bangladesh.
            </p>
            <p>
              MAWA SHIPPING LINES is committed to becoming a trusted local maritime partner for
              clients and partners in Bangladesh and around the world.
            </p>
          </div>
          <p className="mt-6 text-sm font-extrabold">With best wishes, Haji Mohammad Alam</p>
        </div>
      </section>

      <section id="about" className="border-y border-border bg-soft py-20">
        <div className="section-shell grid items-start gap-14 lg:grid-cols-2">
          <div className="reveal">
            <p className="eyebrow">Company Profile</p>
            <h2 className="section-title max-w-xl">
              A newly licensed shipping agency, backed by a decade of maritime experience.
            </h2>
            <p className="body-copy mt-6 text-sm">
              MAWA GROUP has more than a decade of practical experience in port and cargo related
              activities, including BCIC urea fertilizer and various raw materials and products of
              Bashundhara Group. The Group has also supported other shipping lines through
              subcontract arrangements — a strong foundation as MAWA SHIPPING LINES begins its
              journey as a licensed shipping agency.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["BCIC Urea Fertilizer", "Bashundhara Cargo", "Shipping Line Support"].map(
                (item) => (
                  <span
                    key={item}
                    className="border border-border bg-background px-3 py-1.5 text-[11px] font-bold uppercase text-muted-foreground"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm">
              <ShieldCheck className="size-8 shrink-0 text-brand" />
              <p>
                <strong className="font-extrabold">Shipping Agent Licence</strong>
                <br />
                <span className="text-muted-foreground">
                  Customs House, Chattogram · BIN 009012067-0505
                </span>
              </p>
            </div>
          </div>
          <div className="reveal grid gap-3 sm:grid-cols-2">
            {profileBadges.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border border-border bg-background px-4 py-3 text-sm font-bold"
              >
                <CheckCircle2 className="size-5 shrink-0 text-brand" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep py-24 text-deep-foreground lg:py-28">
        <div className="section-shell">
          <div className="reveal">
            <p className="eyebrow text-brand-soft">Vision, Mission and Values</p>
            <h2 className="section-title max-w-xl">A trusted, forward looking shipping agency.</h2>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              [
                Compass,
                "Vision",
                "To become a trusted and forward looking shipping agency in Bangladesh, recognized for reliable maritime services, professional stakeholder relationships, regulatory integrity and sustainable business growth.",
              ],
              [
                Ship,
                "Mission",
                "To provide reliable, responsive and compliant shipping agency and maritime support services that create lasting value for ship owners, operators, cargo interests, business partners and the wider maritime community.",
              ],
              [
                HeartHandshake,
                "Core Values",
                "Integrity, Reliability, Professionalism, Compliance, Responsiveness, Partnership and Responsibility guide everything we do.",
              ],
            ].map(([Icon, title, text]) => {
              const FeatureIcon = Icon as typeof Compass;
              return (
                <article key={String(title)} className="reveal border-t-2 border-brand pt-7">
                  <FeatureIcon className="size-7 text-brand" />
                  <h3 className="mt-5 text-lg font-extrabold">{String(title)}</h3>
                  <p className="body-copy mt-3 text-sm">{String(text)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="bg-deep py-24 text-deep-foreground lg:py-28">
        <div className="section-shell">
          <div className="reveal flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-brand-soft">Our Services</p>
              <h2 className="section-title max-w-xl">
                Complete shipping agency support, from arrival to departure.
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => serviceApi?.scrollPrev()}
                className="slider-control"
                aria-label="Previous service"
              >
                <ArrowLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => serviceApi?.scrollNext()}
                className="slider-control"
                aria-label="Next service"
              >
                <ArrowRight className="size-5" />
              </button>
            </div>
          </div>
          <div ref={serviceRef} className="mt-12 overflow-hidden">
            <div className="flex -ml-5 touch-pan-y">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="group min-w-0 flex-[0_0_88%] pl-5 sm:flex-[0_0_48%] lg:flex-[0_0_33.333%]"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="border-b-2 border-brand py-6">
                    <span className="text-xs font-extrabold text-brand">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-lg font-extrabold">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-deep-muted">{service.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-7 flex items-center justify-between">
            <div className="flex gap-2" aria-label="Service carousel pages">
              {services.map((service, index) => (
                <button
                  key={service.title}
                  type="button"
                  aria-label={`View ${service.title}`}
                  onClick={() => serviceApi?.scrollTo(index)}
                  className={`h-1.5 transition-all ${activeService === index ? "w-9 bg-brand" : "w-3 bg-deep-line"}`}
                />
              ))}
            </div>
            <span className="text-xs font-bold text-deep-muted">
              {String(activeService + 1).padStart(2, "0")} /{" "}
              {String(services.length).padStart(2, "0")}
            </span>
          </div>
          <p className="reveal mt-8 max-w-2xl text-xs leading-6 text-deep-muted">
            Specialized services requiring separate licences, authorizations or specialist providers
            are coordinated through appropriate authorized service partners.
          </p>
        </div>
      </section>

      <section className="section-shell grid gap-10 py-24 lg:grid-cols-2 lg:py-28">
        <div className="reveal">
          <p className="eyebrow">MAWA Dockyard</p>
          <h2 className="mt-3 text-2xl font-extrabold">Shipbuilding and ship repair.</h2>
          <div className="mt-5 aspect-[16/10] overflow-hidden">
            <img
              src={dockyardImage}
              alt="Vessel under repair at MAWA Dockyard, Chattogram"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="body-copy mt-5 text-sm">
            MAWA DOCKYARD, another Sister Concern of MAWA GROUP, is currently in active operation —
            engaged in the construction, repair and maintenance of various small and medium sized
            cargo vessels in Chattogram. This capability strengthens the Group's broader maritime
            ecosystem.
          </p>
        </div>
        <div className="reveal">
          <p className="eyebrow">Payra Port Stevedoring</p>
          <h2 className="mt-3 text-2xl font-extrabold">Stevedoring and cargo handling.</h2>
          <div className="mt-5 aspect-[16/10] overflow-hidden">
            <img
              src={payraImage}
              alt="Cargo vessel at berth in Payra Port"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="body-copy mt-5 text-sm">
            MAWA GROUP holds a Stevedoring Licence for Payra Port. As relevant commercial and port
            operations expand, this capability provides an opportunity to participate in stevedoring
            and cargo handling activities at Payra Port.
          </p>
        </div>
      </section>

      <section id="why-us" className="bg-deep border-t border-deep-line py-24 text-deep-foreground">
        <div className="section-shell grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div className="reveal">
            <p className="eyebrow text-brand-soft">Partnership & Business Development</p>
            <h2 className="section-title mt-4">
              Building connections across Chattogram, Bangladesh, Singapore and the region.
            </h2>
            <p className="body-copy mt-5 text-sm">
              We welcome cooperation with established shipping agencies, logistics companies, NVOCCs
              and freight forwarding companies in Bangladesh, and use a Singapore based Business
              Development Representative to grow relationships in the regional maritime market.
            </p>
            <a href="#contact" className="btn-primary mt-9">
              Talk to us <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="divide-y divide-deep-line border-y border-deep-line">
            {partnerships.map(([num, title, text]) => (
              <div key={num} className="reveal grid grid-cols-[3rem_1fr] gap-5 py-6">
                <span className="text-2xl font-extrabold text-brand">{num}</span>
                <div>
                  <h3 className="font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-deep-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative bg-deep py-24 text-deep-foreground">
        <div className="globe-lines" />
        <div className="section-shell relative grid gap-14 lg:grid-cols-2">
          <div className="reveal">
            <p className="eyebrow text-brand-soft">Get in touch</p>
            <h2 className="section-title max-w-md">Let's start a conversation.</h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-deep-muted">
              Whether you're a ship owner, operator, agency or partner, our team in Chattogram is
              ready to help. MAWA SHIPPING LINES begins its journey from Chattogram, Bangladesh,
              with Singapore as an important strategic market — building stronger connections across
              Southeast Asia and the wider global maritime network.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <p className="flex items-center gap-3">
                <MapPin className="size-4 shrink-0 text-brand" /> 703, Abdul Ali Nagar, Pahartali,
                Chattogram, Bangladesh
              </p>
              <p className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-brand" /> +880 1711 481185 · +880 1713 118095
              </p>
              <p className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-brand" /> mawashippingline@gmail.com
              </p>
            </div>
            <div className="mt-8 border-t border-deep-line pt-6">
              <p className="text-xs font-extrabold uppercase text-brand-soft">
                Singapore Business Development
              </p>
              <p className="mt-2 text-sm font-bold">
                Safat Jamil{" "}
                <span className="font-normal text-deep-muted">
                  — International Business Development Consultant (Remote)
                </span>
              </p>
              <p className="mt-1 text-xs text-deep-muted">
                Mobile / WhatsApp: +65 98129204 · Email: shafatjamil20@gmail.com
              </p>
            </div>
          </div>
          <form
            className="reveal grid gap-3 self-start"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <input aria-label="Full name" placeholder="Full name" className="field" />
              <input
                aria-label="Email address"
                type="email"
                placeholder="Email address"
                className="field"
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                aria-label="Company or organisation"
                placeholder="Company / organisation"
                className="field"
              />
              <input aria-label="Phone number" placeholder="Phone number" className="field" />
            </div>
            <select aria-label="Enquiry type" className="field">
              <option>Choose an enquiry type</option>
              <option>Vessel agency</option>
              <option>Port operations</option>
              <option>Stevedoring</option>
              <option>Partnership / agency</option>
              <option>General enquiry</option>
            </select>
            <textarea
              aria-label="Message"
              placeholder="Tell us about your vessel, cargo or enquiry"
              rows={4}
              className="field resize-none py-3"
            />
            <button className="btn-primary mt-2 justify-self-start" type="submit">
              Send enquiry <ArrowRight className="size-4" />
            </button>
          </form>
        </div>
      </section>

      <div className="section-shell relative z-10 -mt-10 grid grid-cols-2 bg-background shadow-strong md:grid-cols-4">
        {[
          ["10+", "years of MAWA GROUP experience"],
          ["2", "active licences: shipping agent & stevedoring"],
          ["12", "MAWA GROUP businesses"],
          ["2", "countries: Bangladesh & Singapore"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="border-b border-r border-border px-5 py-8 text-center last:border-r-0 md:border-b-0"
          >
            <strong className="block text-3xl font-extrabold text-brand">{value}</strong>
            <span className="mt-1 block text-xs font-bold uppercase text-muted-foreground">
              {label}
            </span>
          </div>
        ))}
      </div>

      <section id="group" className="section-shell py-24 lg:py-28">
        <div className="reveal grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div>
            <p className="eyebrow">MAWA GROUP</p>
            <h2 className="section-title">Sister Concerns.</h2>
          </div>
          <p className="body-copy max-w-xl lg:justify-self-end">
            Our diversified business portfolio supports the broader capabilities, resources and
            maritime ecosystem of MAWA SHIPPING LINES.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 border-l border-t border-border md:grid-cols-4">
          {sisterConcerns.map(([name, description], index) => (
            <div
              key={name}
              className="reveal group flex min-h-44 flex-col items-center justify-center border-b border-r border-border px-4 text-center"
            >
              <span className="mb-4 grid size-9 place-items-center border border-border text-xs font-black text-brand transition-colors group-hover:border-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <strong className="customer-name text-sm font-black sm:text-base">{name}</strong>
              <span className="mt-2 text-[10px] font-bold uppercase text-muted-foreground">
                {description}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-soft py-24">
        <div className="section-shell">
          <div className="reveal text-center">
            <p className="eyebrow">Who We Work With</p>
            <h2 className="section-title">Built for the maritime community.</h2>
          </div>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-4">
            {stakeholders.map((label) => (
              <article
                key={label}
                className="reveal flex flex-col items-center gap-3 bg-background p-7 text-center"
              >
                <Handshake className="size-6 text-brand" />
                <p className="text-sm font-extrabold">{label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border py-24">
        <div className="section-shell grid gap-14 lg:grid-cols-2">
          <div className="reveal">
            <p className="eyebrow">Licence & Compliance</p>
            <h2 className="mt-3 text-2xl font-extrabold">
              Regulatory foundation and compliance focus.
            </h2>
            <p className="body-copy mt-4 text-sm">
              MAWA SHIPPING LINES has obtained its Shipping Agent Licence from Customs House,
              Chattogram. The licence provides the regulatory foundation for carrying out shipping
              agency activities in accordance with applicable laws, rules and procedures.
            </p>
            <dl className="mt-6 space-y-2 text-sm">
              <div className="flex gap-2">
                <dt className="font-bold">Company Name:</dt>
                <dd className="text-muted-foreground">MAWA SHIPPING LINES</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-bold">BIN:</dt>
                <dd className="text-muted-foreground">009012067-0505</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-bold">Address:</dt>
                <dd className="text-muted-foreground">
                  703, Abdul Ali Nagar, Pahartali, Chattogram
                </dd>
              </div>
            </dl>
          </div>
          <div className="reveal">
            <p className="eyebrow">Compliance Focus</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {complianceFocus.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-semibold">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />
                  {item}
                </div>
              ))}
            </div>
            <p className="body-copy mt-6 text-sm">
              We are committed to following applicable laws and regulations, respecting port
              procedures, maintaining accurate documentation, supporting safe vessel and cargo
              operations, protecting confidential business information and maintaining ethical
              business practices.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-soft py-16">
        <div className="section-shell reveal flex flex-col items-center gap-4 text-center">
          <HeartHandshake className="size-8 text-brand" />
          <p className="eyebrow">Corporate Social Responsibility</p>
          <p className="body-copy max-w-2xl text-sm">
            MAWA GROUP considers social responsibility an important part of its institutional
            commitment. The Group operates a self funded orphanage at its Bagan Bari, providing
            children in need of family care with shelter, affection, education and essential
            facilities.
          </p>
        </div>
      </section>

      <footer className="bg-deep py-16 text-deep-foreground">
        <div className="section-shell grid gap-12 md:grid-cols-[1.4fr_.7fr_.7fr_1.2fr]">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <img
                src={logoImage}
                alt="MAWA Shipping Lines"
                className="size-9 rounded-full object-cover"
              />
              <span className="leading-none">
                <span className="block text-base font-extrabold">MAWA</span>
                <span className="block text-[8px] font-bold tracking-[0.2em] text-brand-soft">
                  SHIPPING LINES
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-6 text-deep-muted">
              A Sister Concern of MAWA GROUP — connecting global shipping with Bangladesh.
            </p>
            <div className="mt-6 flex gap-4 text-deep-muted">
              <Facebook className="size-4" />
              <Instagram className="size-4" />
              <Linkedin className="size-4" />
            </div>
          </div>
          <div>
            <p className="footer-title">Company</p>
            {[
              ["About", "about"],
              ["Sister Concerns", "group"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <a href={`#${id}`} key={id} className="footer-link">
                {label}
              </a>
            ))}
          </div>
          <div>
            <p className="footer-title">Services</p>
            {["Vessel agency", "Port operations", "Stevedoring", "Vessel husbandry"].map((x) => (
              <a href="#services" key={x} className="footer-link">
                {x}
              </a>
            ))}
          </div>
          <div>
            <p className="footer-title">Head Office</p>
            <p className="mt-5 flex items-start gap-2 text-xs text-deep-muted">
              <MapPin className="size-4 shrink-0 text-brand" /> 703, Abdul Ali Nagar, Pahartali,
              Chattogram, Bangladesh
            </p>
            <p className="mt-3 flex items-center gap-2 text-xs text-deep-muted">
              <Phone className="size-4 shrink-0 text-brand" /> +880 1711 481185
            </p>
            <p className="mt-3 flex items-center gap-2 text-xs text-deep-muted">
              <Mail className="size-4 shrink-0 text-brand" /> mawashippingline@gmail.com
            </p>
          </div>
        </div>
        <div className="section-shell mt-12 border-t border-deep-line pt-6 text-xs text-deep-muted">
          © 2026 MAWA Shipping Lines. A Sister Concern of MAWA GROUP. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
