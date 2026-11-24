import { useEffect, useRef, useState } from "react";
import {
  Building2,
  Check,
  ChevronDown,
  Compass,
  Layers3,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Wallet,
  Waves,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "17864099212";
const NAV = [
  { label: "The advantage", href: "#advantage" },
  { label: "Private access", href: "#access" },
  { label: "The collection", href: "#collection" },
  { label: "Your advisors", href: "#irg" },
];

const ADVANTAGES = [
  {
    icon: Layers3,
    title: "An earlier entry point",
    body: "Explore a development before later sales releases and pricing adjustments.",
    detail: "Timing",
  },
  {
    icon: Wallet,
    title: "Capital, in stages",
    body: "Follow a project-specific deposit schedule while construction progresses.",
    detail: "Structure",
  },
  {
    icon: Compass,
    title: "More room to choose",
    body: "Consider preferred views, floors and layouts while more inventory is available.",
    detail: "Selection",
  },
  {
    icon: Building2,
    title: "A new perspective",
    body: "Choose a new residence designed around contemporary living and amenities.",
    detail: "Lifestyle",
  },
];

const OBJECTIVES = [
  {
    id: "live",
    label: "A place to call yours",
    title: "Your Miami, on your terms.",
    body: "A future home, a second residence or a place to return to. Start with how you want to live, then find the address that fits.",
    items: [
      "Neighborhood and day-to-day lifestyle",
      "Views, space and residential services",
      "A delivery timeline that works for you",
    ],
    image: "/images/interior.webp",
    alt: "Official Delano rendering of a dining room overlooking Miami",
  },
  {
    id: "invest",
    label: "A long-term investment",
    title: "Think beyond the purchase.",
    body: "A considered investment starts with the full picture: the developer, your entry point, the capital commitment and the role of the property in your portfolio.",
    items: [
      "Project-specific deposit and closing terms",
      "Ownership costs and permitted rental use",
      "A multi-year horizon and a clear strategy",
    ],
    image: "/images/mandarin.webp",
    alt: "Official rendering of The Residences at Mandarin Oriental, Miami",
  },
  {
    id: "diversify",
    label: "A broader portfolio",
    title: "A tangible position in Miami.",
    body: "For domestic and international buyers, U.S. real estate can be part of a broader wealth strategy. The right structure should reflect your individual circumstances.",
    items: [
      "U.S. real estate exposure",
      "Ownership aligned with your wider objectives",
      "Coordination with your legal and tax advisors",
    ],
    image: "/images/city.webp",
    alt: "Miami's Brickell waterfront at twilight",
  },
];

const PROJECTS = [
  {
    name: "Kempinski Residences",
    location: "Miami Design District",
    image: "/images/kempinski.webp",
    description: "European hospitality, a distinctly Miami setting.",
    source:
      "https://www.kempinski.com/en/residences/private-residences/kempinski-residences-miami-design-district",
  },
  {
    name: "The Residences at Mandarin Oriental, Miami",
    location: "Brickell Key",
    image: "/images/mandarin.webp",
    description: "An island address with a world of service.",
    source: "https://mo-residencesmiami.com/",
  },
  {
    name: "Delano Residences & Hotel Miami",
    location: "Downtown Miami",
    image: "/images/delano.webp",
    description: "A new expression of an iconic hospitality name.",
    source: "https://delanomiamiresidences.com/",
  },
  {
    name: "Villa Miami",
    location: "Edgewater",
    image: "/images/villa.webp",
    description: "Waterfront living with a culinary point of view.",
    source: "https://villamiami.com/",
  },
];

const FRAMEWORK = [
  {
    title: "The developer",
    body: "Track record, delivery history and the team behind the vision.",
  },
  {
    title: "The address",
    body: "Neighborhood character, connectivity and the demand for that specific location.",
  },
  {
    title: "The residence",
    body: "Floor, view, layout and how the unit compares with alternatives.",
  },
  {
    title: "The commitment",
    body: "Deposit schedule, contractual terms, closing costs and ongoing ownership expenses.",
  },
  {
    title: "Your strategy",
    body: "How the property fits your lifestyle, investment horizon and intended use.",
  },
];

const FAQS = [
  {
    question: "What does buying pre-construction involve?",
    answer:
      "You contract to purchase a residence before the building is completed. Deposits, construction milestones, delivery estimates and closing obligations are set out in the project's documents. We help you understand the commercial terms and coordinate with your attorney for legal review.",
  },
  {
    question: "Does buying early guarantee a better return?",
    answer:
      "No. Earlier releases may offer different pricing, incentives or inventory, but appreciation and investment returns are not guaranteed. Market conditions, execution, ownership costs and the residence you select all affect the outcome. Construction and delivery schedules can also change.",
  },
  {
    question: "Can I rent the residence?",
    answer:
      "Rental rules vary substantially by development and condominium documents. Minimum lease periods, frequency restrictions, management requirements and related costs must be checked for the specific project before making a decision.",
  },
  {
    question: "Can international buyers participate?",
    answer:
      "We work with international buyers and help coordinate the people needed to evaluate a purchase. Financing, ownership structure, taxation and estate planning depend on individual circumstances and require the appropriate professional advice. A property purchase does not automatically provide U.S. residency or qualify for EB-5.",
  },
];

function whatsappUrl(project?: string) {
  const topic = project
    ? `I'd like to learn more about ${project}.`
    : "I'd like to explore Miami pre-construction and discuss my objectives.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Luis Victor, I received the IRG private briefing from Victor. ${topic}`)}`;
}

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a
      className={`pb-brand${inverse ? " pb-brand--inverse" : ""}`}
      href="#top"
      aria-label="International Realty Group, back to top"
    >
      <img src="/images/logo.webp" alt="International Realty Group" width="76" height="56" />
      <span>
        Private briefing<span>Miami real estate</span>
      </span>
    </a>
  );
}

export function PrivateBriefing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFloating, setShowFloating] = useState(false);
  const [objective, setObjective] = useState(0);
  const [project, setProject] = useState<string>();
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuPanel = useRef<HTMLDivElement>(null);
  const current = OBJECTIVES[objective]!;

  useEffect(() => {
    if (!menuOpen) return;
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }
    function handleOutside(event: PointerEvent) {
      const target = event.target as Node;
      if (!menuPanel.current?.contains(target) && !menuButton.current?.contains(target))
        setMenuOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    document.addEventListener("pointerdown", handleOutside);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("pointerdown", handleOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    let heroVisible = true;
    let contactVisible = false;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target.id === "overview") heroVisible = entry.isIntersecting;
        if (entry.target.id === "conversation") contactVisible = entry.isIntersecting;
      }
      setShowFloating(!heroVisible && !contactVisible);
    });
    for (const id of ["overview", "conversation"]) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);

  function discuss(name: string) {
    setProject(name);
    document.getElementById("conversation-heading")?.focus({ preventScroll: true });
    document.getElementById("conversation")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }

  return (
    <div className="private-briefing" id="top">
      <a className="pb-skip" href="#main">
        Skip to content
      </a>
      <header className="pb-header">
        <div className="pb-shell pb-header-inner">
          <Brand />
          <nav className="pb-desktop-nav" aria-label="Main navigation">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <button
            ref={menuButton}
            type="button"
            className="pb-menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="pb-mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div ref={menuPanel} id="pb-mobile-nav" className="pb-mobile-menu" hidden={!menuOpen}>
          <nav aria-label="Mobile navigation">
            {[...NAV, { label: "Start a conversation", href: "#conversation" }].map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="pb-hero" id="overview" aria-labelledby="hero-heading">
          <img
            className="pb-hero-image"
            src="/images/hero.webp"
            alt="Miami skyline reflected in Biscayne Bay at blue hour"
            width="2200"
            height="1238"
            fetchPriority="high"
          />
          <div className="pb-hero-shade" />
          <div className="pb-shell pb-hero-inner">
            <div className="pb-hero-copy">
              <p className="pb-eyebrow pb-eyebrow--light">
                Miami pre-construction · Private briefing
              </p>
              <h1 id="hero-heading">
                A different way
                <br /> into <em>Miami.</em>
              </h1>
              <p className="pb-hero-description">
                The right residence. The right moment.
                <br className="pb-desktop-break" /> A perspective you won't find in a property
                search.
              </p>
              <div className="pb-hero-actions">
                <a className="pb-button pb-button--white" href="#advantage">
                  Discover the advantage
                </a>
                <a className="pb-text-link pb-text-link--light" href="#conversation">
                  Begin a private conversation
                </a>
              </div>
            </div>
            <div className="pb-hero-note">
              <span className="pb-line" />
              <p>
                A private perspective.
                <br /> A more considered opportunity.
              </p>
            </div>
          </div>
          <div className="pb-hero-foot">
            <div className="pb-shell">
              <span>International Realty Group</span>
              <span>Timing. Access. Perspective.</span>
              <a href="#advantage" aria-label="Explore the briefing">
                <ChevronDown size={21} />
              </a>
            </div>
          </div>
        </section>

        <section
          className="pb-section pb-advantage"
          id="advantage"
          aria-labelledby="advantage-heading"
        >
          <div className="pb-shell">
            <div className="pb-section-heading">
              <div>
                <p className="pb-eyebrow">The pre-construction advantage</p>
                <h2 id="advantage-heading">
                  The opportunity starts
                  <br /> before <em>completion.</em>
                </h2>
              </div>
              <p className="pb-intro">
                Buying directly from a developer before a building is complete changes how you enter
                the market, commit capital and choose your residence.
              </p>
            </div>
            <div className="pb-advantage-grid">
              {ADVANTAGES.map(({ icon: Icon, title, body, detail }) => (
                <article className="pb-advantage-item" key={title}>
                  <div className="pb-icon-line">
                    <Icon size={28} strokeWidth={1.2} />
                    <span>{detail}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
            <div className="pb-section-tail">
              <p>Early access has value when the opportunity fits you.</p>
              <a className="pb-text-link" href="#objectives">
                Find your starting point
              </a>
            </div>
          </div>
        </section>

        <section className="pb-miami" id="why-miami" aria-labelledby="miami-heading">
          <div className="pb-miami-visual">
            <img
              src="/images/city.webp"
              alt="Brickell's waterfront skyline at twilight"
              width="1500"
              height="1000"
              loading="lazy"
            />
            <span className="pb-image-caption">Brickell · Miami</span>
          </div>
          <div className="pb-miami-content">
            <p className="pb-eyebrow pb-eyebrow--light">Why Miami</p>
            <h2 id="miami-heading">
              More than a city.
              <br /> A world of <em>possibility.</em>
            </h2>
            <p className="pb-miami-intro">
              A place where international business, waterfront living and a new generation of
              residential design come together.
            </p>
            <div className="pb-miami-reasons">
              <article>
                <Building2 size={23} strokeWidth={1.3} />
                <div>
                  <h3>A global business address</h3>
                  <p>A meeting point for entrepreneurs, international families and capital.</p>
                </div>
              </article>
              <article>
                <Waves size={23} strokeWidth={1.3} />
                <div>
                  <h3>A lifestyle with its own rhythm</h3>
                  <p>Waterfront neighborhoods, art, dining and year-round outdoor living.</p>
                </div>
              </article>
              <article>
                <Sparkles size={23} strokeWidth={1.3} />
                <div>
                  <h3>A new residential landscape</h3>
                  <p>Architecture and hospitality brands reshaping what a Miami home can offer.</p>
                </div>
              </article>
            </div>
            <a className="pb-text-link pb-text-link--light" href="#collection">
              Explore the collection
            </a>
          </div>
        </section>

        <section
          className="pb-section pb-objectives"
          id="objectives"
          aria-labelledby="objectives-heading"
        >
          <div className="pb-shell">
            <div className="pb-section-heading">
              <div>
                <p className="pb-eyebrow">One market. Your objectives.</p>
                <h2 id="objectives-heading">
                  What does Miami
                  <br /> look like <em>for you?</em>
                </h2>
              </div>
              <p className="pb-intro">
                The conversation starts with what you want the property to do for you. The project
                comes next.
              </p>
            </div>
            <div className="pb-tabs" role="tablist" aria-label="Your ownership objectives">
              {OBJECTIVES.map((item, index) => (
                <button
                  id={`tab-${item.id}`}
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={objective === index}
                  aria-controls="pb-objective-panel"
                  tabIndex={objective === index ? 0 : -1}
                  onClick={() => setObjective(index)}
                  onKeyDown={(event) => {
                    if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) {
                      event.preventDefault();
                      const next =
                        event.key === "Home"
                          ? 0
                          : event.key === "End"
                            ? OBJECTIVES.length - 1
                            : (objective +
                                (event.key === "ArrowRight" ? 1 : -1) +
                                OBJECTIVES.length) %
                              OBJECTIVES.length;
                      setObjective(next);
                      document.getElementById(`tab-${OBJECTIVES[next]!.id}`)?.focus();
                    }
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div
              className="pb-objective-panel"
              id="pb-objective-panel"
              role="tabpanel"
              aria-labelledby={`tab-${current.id}`}
              tabIndex={0}
            >
              <div className="pb-objective-copy">
                <p className="pb-eyebrow">A considered starting point</p>
                <h3>{current.title}</h3>
                <p>{current.body}</p>
                <ul>
                  {current.items.map((item) => (
                    <li key={item}>
                      <Check size={18} strokeWidth={1.5} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a className="pb-text-link" href="#conversation">
                  Let's discuss your objectives
                </a>
              </div>
              <div className="pb-objective-image">
                <img
                  key={current.image}
                  src={current.image}
                  alt={current.alt}
                  width="1500"
                  height="1000"
                  loading="lazy"
                />
                <span className="pb-image-caption">
                  {objective === 2 ? "Miami · Florida" : "Artist's conceptual rendering"}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-section pb-access" id="access" aria-labelledby="access-heading">
          <div className="pb-shell">
            <div className="pb-access-heading">
              <p className="pb-eyebrow pb-eyebrow--light">Relationships open doors</p>
              <h2 id="access-heading">
                Some conversations happen
                <br /> before the <em>market hears.</em>
              </h2>
              <p>
                IRG's relationships with developers and sales teams help clients understand selected
                releases, available inventory and the timing behind an opportunity.
              </p>
            </div>
            <div className="pb-access-grid">
              <article className="pb-access-stage pb-access-stage--featured">
                <span className="pb-stage-label">Private & limited releases</span>
                <h3>Earlier in the conversation.</h3>
                <p>
                  Selected List Zero, Friends & Family and pre-launch opportunities, when offered by
                  the developer.
                </p>
                <div className="pb-access-tags">
                  <span>Initial releases</span>
                  <span>Unit selection</span>
                  <span>Potential incentives</span>
                </div>
              </article>
              <article className="pb-access-stage">
                <span className="pb-stage-label">Broker release</span>
                <h3>A wider circle.</h3>
                <p>
                  The project is introduced more broadly to the broker community with its current
                  pricing and inventory.
                </p>
              </article>
              <article className="pb-access-stage">
                <span className="pb-stage-label">Public launch</span>
                <h3>The market takes notice.</h3>
                <p>
                  Broader advertising and public visibility bring the development to a wider
                  audience.
                </p>
              </article>
            </div>
            <div className="pb-access-footer">
              <ShieldCheck size={21} strokeWidth={1.4} />
              <p>
                Access, incentives and release sequences vary by project. Earlier availability and
                investment outcomes are never guaranteed.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-section pb-selection" aria-labelledby="selection-heading">
          <div className="pb-shell pb-selection-grid">
            <div className="pb-selection-intro">
              <p className="pb-eyebrow">The IRG perspective</p>
              <h2 id="selection-heading">
                Access matters.
                <br /> <em>Judgment matters more.</em>
              </h2>
              <p>
                Buying early is only part of the decision. We look at the details that make a
                property right for you.
              </p>
              <div className="pb-selection-image">
                <img
                  src="/images/kempinski.webp"
                  alt="Official Kempinski Residences Miami Design District architectural rendering"
                  width="1500"
                  height="1000"
                  loading="lazy"
                />
                <span className="pb-image-caption">Kempinski Residences · Artist's rendering</span>
              </div>
            </div>
            <div className="pb-framework">
              {FRAMEWORK.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
              <a className="pb-text-link" href="#conversation">
                Put a project in perspective
              </a>
            </div>
          </div>
        </section>

        <section
          className="pb-section pb-collection"
          id="collection"
          aria-labelledby="collection-heading"
        >
          <div className="pb-shell">
            <div className="pb-section-heading">
              <div>
                <p className="pb-eyebrow">A selected collection</p>
                <h2 id="collection-heading">
                  Distinctive addresses.
                  <br /> <em>Different possibilities.</em>
                </h2>
              </div>
              <p className="pb-intro">
                A glimpse of the developments we can explore together. Your shortlist should reflect
                your objectives.
              </p>
            </div>
            <div className="pb-project-grid">
              {PROJECTS.map((item) => (
                <article className="pb-project" key={item.name}>
                  <button
                    className="pb-project-image"
                    type="button"
                    onClick={() => discuss(item.name)}
                    aria-label={`Discuss ${item.name}`}
                  >
                    <img
                      src={item.image}
                      alt={`Official architectural rendering of ${item.name}`}
                      width="1500"
                      height="1000"
                      loading="lazy"
                    />
                    <span className="pb-project-overlay">Explore with IRG</span>
                    <span className="pb-render-label">Artist's rendering</span>
                  </button>
                  <div className="pb-project-body">
                    <p className="pb-eyebrow">{item.location}</p>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <button
                      className="pb-text-link"
                      type="button"
                      onClick={() => discuss(item.name)}
                    >
                      Request project details
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <p className="pb-collection-note">
              Illustrative selection, subject to current availability and project terms. All images
              are conceptual renderings supplied by the respective project websites.
            </p>
          </div>
        </section>

        <section className="pb-section pb-advisors" id="irg" aria-labelledby="advisors-heading">
          <div className="pb-shell">
            <div className="pb-advisory-heading">
              <p className="pb-eyebrow">The people behind the perspective</p>
              <h2 id="advisors-heading">
                A personal introduction.
                <br /> <em>A team in your corner.</em>
              </h2>
              <p>
                International Realty Group brings the Miami brokerage relationships and transaction
                support. Victor and Luis bring the personal conversation that connects it all to
                you.
              </p>
            </div>
            <div className="pb-advisor-grid">
              <article className="pb-advisor">
                <div className="pb-advisor-monogram" aria-hidden="true">
                  VS
                </div>
                <div>
                  <p className="pb-eyebrow">The relationship</p>
                  <h3>Victor Saume</h3>
                  <p className="pb-advisor-role">Strategic Partner · Investor Relations</p>
                  <p>
                    Your starting point for a broader conversation about your goals, priorities and
                    the role Miami could play in your plans.
                  </p>
                </div>
              </article>
              <article className="pb-advisor">
                <div className="pb-advisor-monogram" aria-hidden="true">
                  LV
                </div>
                <div>
                  <p className="pb-eyebrow">The local expertise</p>
                  <h3>Luis Victor Villalobos</h3>
                  <p className="pb-advisor-role">Luxury Real Estate · Miami Pre-Construction</p>
                  <p>
                    Your Miami real estate advisor, bringing project knowledge, developer
                    relationships and guidance through the purchase process.
                  </p>
                </div>
              </article>
            </div>
            <div className="pb-irg-signoff">
              <img
                src="/images/logo.webp"
                alt="International Realty Group"
                width="90"
                height="64"
                loading="lazy"
              />
              <p>
                Boutique representation.
                <br /> <strong>A broader perspective on Miami.</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="pb-section pb-questions" aria-labelledby="questions-heading">
          <div className="pb-shell pb-questions-grid">
            <div>
              <p className="pb-eyebrow">A little more clarity</p>
              <h2 id="questions-heading">
                Good questions.
                <br /> <em>Clear answers.</em>
              </h2>
              <p>Understanding the process is part of making a confident decision.</p>
            </div>
            <div className="pb-faqs">
              {FAQS.map((item) => (
                <details key={item.question}>
                  <summary>
                    {item.question}
                    <ChevronDown size={20} strokeWidth={1.5} />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          className="pb-conversation"
          id="conversation"
          aria-labelledby="conversation-heading"
        >
          <div className="pb-shell pb-conversation-grid">
            <div>
              <p className="pb-eyebrow pb-eyebrow--light">Your next perspective</p>
              <h2 id="conversation-heading" tabIndex={-1}>
                Let's put Miami
                <br /> <em>in perspective.</em>
              </h2>
              <p>
                A private conversation about what you're considering, what we're seeing and where an
                opportunity may fit.
              </p>
            </div>
            <div className="pb-contact-card">
              <MessageCircle size={30} strokeWidth={1.2} />
              <h3>It starts with a conversation.</h3>
              <p>
                Connect directly with Luis Victor, in collaboration with Victor and the IRG team.
              </p>
              {project && (
                <div className="pb-selected-project" role="status">
                  <span>Your interest</span>
                  <strong>{project}</strong>
                  <button
                    type="button"
                    aria-label="Clear selected project"
                    onClick={() => setProject(undefined)}
                  >
                    <X size={17} />
                  </button>
                </div>
              )}
              <a
                className="pb-button pb-button--white"
                href={whatsappUrl(project)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={19} />
                Continue on WhatsApp
              </a>
              <span className="pb-contact-note">
                A direct conversation with your Miami advisor.
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="pb-footer">
        <div className="pb-shell">
          <div className="pb-footer-top">
            <Brand />
            <a href="#top" className="pb-text-link">
              Back to the beginning
            </a>
          </div>
          <p className="pb-disclaimer">
            This briefing is for informational purposes and is not an offer to sell or a
            solicitation to buy real estate. Pricing, availability, incentives, rental policies and
            delivery schedules vary by project and may change. Appreciation and returns are not
            guaranteed. Consult the applicable developer documents and your legal, tax and financial
            advisors before purchasing. Project names and imagery belong to their respective owners;
            their inclusion does not imply a formal affiliation.
          </p>
          <div className="pb-footer-bottom">
            <span>© {new Date().getFullYear()} International Realty Group</span>
            <span>Private briefing · Miami pre-construction</span>
          </div>
        </div>
      </footer>
      {showFloating && (
        <a
          className="pb-floating-contact"
          href="#conversation"
          aria-label="Start a private conversation"
        >
          <MessageCircle size={20} strokeWidth={1.5} />
          <span>Let's talk</span>
        </a>
      )}
    </div>
  );
}
