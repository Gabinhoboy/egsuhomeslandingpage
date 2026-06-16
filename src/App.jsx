import { useState, useEffect, useRef } from 'react';
import { Shield, ChevronRight, CheckCircle2, Eye, MessageSquare, Clock, Play } from 'lucide-react';
import logo from './assets/Egsu-logo-versiones_dorado.png';
import casaFoto1 from './assets/casa foto 1.png';
import propertyImage from './assets/image.png';

const GOLD = '#c8b16f';
const DARK = '#0d0d0d';
const CREAM = '#f9f6f1';
const WHATSAPP_URL = 'https://wa.me/16506803685?text=Hello%2C%20I%20just%20visited%20your%20website%20and%20would%20like%20to%20schedule%20a%20call%20to%20discuss%20my%20project%20in%20Costa%20Rica.';

function useScrollAnimation() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);
  return [ref, isVisible];
}

function Reveal({ children, delay = 0, className = '' }) {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {children}
    </div>
  );
}

function GoldLine() {
  return <div className="w-12 h-px mx-auto" style={{ background: GOLD }} />;
}

function SectionLabel({ roman, label, light = false }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <div className="h-px w-8 flex-shrink-0" style={{ background: light ? 'rgba(200,177,111,0.4)' : 'rgba(200,177,111,0.35)' }} />
      <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase" style={{ color: GOLD }}>
        {roman} &nbsp;·&nbsp; {label}
      </p>
      <div className="h-px w-8 flex-shrink-0" style={{ background: light ? 'rgba(200,177,111,0.4)' : 'rgba(200,177,111,0.35)' }} />
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const [playingVideo, setPlayingVideo] = useState(null);
  const goto = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen" style={{ background: DARK, fontFamily: "'Poppins', sans-serif" }}>

      {/* Top gold accent line */}
      <div className="w-full h-px" style={{ background: `linear-gradient(to right, transparent, ${GOLD}, transparent)` }} />

      {/* NAV */}
      <nav className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? 'border-b' : ''
      }`} style={{
        background: scrolled ? 'rgba(13,13,13,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderColor: scrolled ? 'rgba(200,177,111,0.15)' : 'transparent',
      }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16 flex justify-between items-center py-2 md:py-3">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logo} alt="EGSU Logo" className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105 brightness-0 invert" />
          </div>
          <div className="hidden md:flex items-center gap-10">
            {[['problem','The Problem'],['process','Our Process'],['proof','Results']].map(([id, label]) => (
              <button key={id} onClick={() => goto(id)}
                className="font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300"
                style={{ color: 'rgba(255,255,255,0.5)' }}
                onMouseEnter={e => e.target.style.color = GOLD}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
              >{label}</button>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="font-sans text-xs tracking-[0.2em] uppercase px-6 py-3 border transition-all duration-300"
              style={{ borderColor: GOLD, color: GOLD }}
              onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = DARK; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = GOLD; }}
            >
              Evaluate Your Project
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end overflow-hidden" style={{ paddingBottom: '10vh' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(13,13,13,0.3) 0%, rgba(13,13,13,0.75) 60%, rgba(13,13,13,1) 100%)', zIndex: 2 }} />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/HELICONIA VILLA 1.png')" }} />
        <div className="relative z-10 px-8 lg:px-24 max-w-6xl w-full" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12" style={{ background: GOLD }} />
              <p className="font-sans text-xs tracking-[0.35em] uppercase" style={{ color: GOLD }}>Engineer-Led Construction · Costa Rica</p>
            </div>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-white leading-none mb-8" style={{ fontWeight: 300, letterSpacing: '-0.01em' }}>
              Build in Costa Rica<br />
              <span style={{ color: GOLD, fontStyle: 'italic' }}>Without Losing Control</span><br />
              of Your Investment
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="font-sans font-light text-lg max-w-2xl mb-12" style={{ color: 'rgba(255,255,255,0.65)', lineHeight: '1.8' }}>
              An engineer-led, structured building process designed specifically for foreign investors who want clarity, discipline, and full control — from land evaluation to construction.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="font-sans text-xs tracking-[0.25em] uppercase inline-flex items-center gap-3 px-10 py-5 transition-all duration-300"
              style={{ background: GOLD, color: DARK }}
              onMouseEnter={e => { e.currentTarget.style.background = '#d4bc80'; }}
              onMouseLeave={e => { e.currentTarget.style.background = GOLD; }}
            >
              Evaluate Your Project Before You Commit Capital
              <ChevronRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── S1: THE REAL PROBLEM (dark) ── */}
      <section id="problem" className="py-36 px-8 lg:px-24" style={{ background: DARK }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <Reveal>
              <SectionLabel roman="I" label="The Real Problem" />
              <h2 className="font-serif text-5xl md:text-6xl text-white leading-tight mb-10" style={{ fontWeight: 300 }}>
                The Risk Isn't Building.<br />
                <span style={{ color: GOLD, fontStyle: 'italic' }}>It's Losing Control</span><br />
                During the Process.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="font-sans font-light mb-3 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Most foreign investors don't lose money because of bad design.
              </p>
              <p className="font-sans font-medium text-white mb-10 text-lg">They lose it during execution.</p>
              <div className="space-y-5 mb-10">
                {[
                  'Budgets expand without clear justification',
                  'Subcontractors operate without coordination',
                  'Decisions are made too late, when changes are expensive',
                  'Communication breaks down between teams',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center border mt-0.5" style={{ borderColor: 'rgba(200,177,111,0.4)' }}>
                      <span className="text-xs" style={{ color: GOLD }}>×</span>
                    </div>
                    <p className="font-sans font-light text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={220}>
              <p className="font-serif text-lg font-light italic leading-relaxed" style={{ color: 'rgba(200,177,111,0.7)', borderLeft: `1px solid ${GOLD}`, paddingLeft: '1.5rem' }}>
                What starts as an exciting project becomes reactive, stressful, and unpredictable — not because Costa Rica is inherently risky, but because the process is not structured from the beginning.
              </p>
            </Reveal>
          </div>
          <Reveal delay={180} className="relative">
            <div className="relative">
              <img src={propertyImage} alt="Luxury property" className="w-full object-cover" style={{ aspectRatio: '4/5' }} />
              <div className="absolute inset-0" style={{ border: `1px solid rgba(200,177,111,0.25)`, transform: 'translate(12px, 12px)', zIndex: -1 }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── S2: THE REFRAME (cream) ── */}
      <section className="py-36 px-8 lg:px-24" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <SectionLabel roman="II" label="The Reframe" />
            <h2 className="font-serif text-5xl md:text-6xl leading-tight mb-6" style={{ fontWeight: 300, color: '#1a1a1a' }}>
              A Home Is Not the Investment.
              <br /><span style={{ color: GOLD, fontStyle: 'italic' }}>The Process Is.</span>
            </h2>
            <div className="w-20 h-px mx-auto my-10" style={{ background: `linear-gradient(to right, transparent, ${GOLD}, transparent)` }} />
          </Reveal>
          <Reveal delay={120}>
            <p className="font-sans font-light text-lg leading-loose mb-6" style={{ color: '#4a4a4a' }}>
              If the process is weak, the result becomes uncertain — no matter how good the design looks.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-sans font-light text-lg leading-loose" style={{ color: '#4a4a4a' }}>
              At EGSU, we approach construction as a controlled system, not a sequence of isolated tasks. Every decision, every phase, and every contractor is coordinated under a structured methodology designed to protect your capital and eliminate execution chaos.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── S3: CORE DIFFERENTIATION (dark) ── */}
      <section className="py-36 px-8 lg:px-24" style={{ background: '#111111' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <Reveal className="relative">
            <div className="relative">
              <img src={casaFoto1} alt="EGSU construction project" className="w-full object-cover" style={{ aspectRatio: '4/5' }} />
              <div className="absolute inset-0" style={{ border: `1px solid rgba(200,177,111,0.2)`, transform: 'translate(-12px, 12px)', zIndex: -1 }} />
            </div>
          </Reveal>
          <div>
            <Reveal delay={100}>
              <SectionLabel roman="III" label="Core Differentiation" light />
              <h2 className="font-serif text-5xl md:text-6xl text-white leading-tight mb-10" style={{ fontWeight: 300 }}>
                Engineer-Led Execution.<br />
                <span style={{ color: GOLD, fontStyle: 'italic' }}>Not Contractor-Led</span><br />
                Guesswork.
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="font-sans font-light mb-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Most projects are managed reactively — solving problems as they appear.
              </p>
              <p className="font-sans font-semibold text-white mb-6 text-lg tracking-wide">We operate differently.</p>
              <p className="font-sans font-light leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Our process is led by civil engineers who structure, supervise, and coordinate every phase of execution with discipline.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="p-8" style={{ border: `1px solid rgba(200,177,111,0.25)`, background: 'rgba(200,177,111,0.04)' }}>
                <Shield className="h-8 w-8 mb-5" style={{ color: GOLD }} />
                <p className="font-serif text-xl font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  "This is not about building faster.<br />
                  <span style={{ color: GOLD }}>It's about building without losing control.</span>"
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── S4: THE PROCESS (cream) ── */}
      <section id="process" className="py-36 px-8 lg:px-24" style={{ background: CREAM }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <Reveal>
              <SectionLabel roman="IV" label="The Mechanism" />
              <h2 className="font-serif text-5xl md:text-6xl leading-tight" style={{ fontWeight: 300, color: '#1a1a1a' }}>
                Our Structured<br /><span style={{ color: GOLD, fontStyle: 'italic' }}>Building Process</span>
              </h2>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '00', phase: 'Phase 0', label: 'Activation',
                sub: 'Before You Risk Capital',
                points: ['Evaluate land viability (topography, drainage, buildability)', 'Identify hidden risks before they become expensive problems', 'Define initial scope and feasibility'],
                outcome: 'You know whether the project makes sense before committing serious money.',
              },
              {
                num: '01', phase: 'Phase 1', label: 'Design & Permits',
                sub: 'Control Before Execution',
                points: ['Architectural design aligned with budget and land conditions', 'Technical studies (soil, structural, utilities)', 'Clear scope definition and execution planning'],
                outcome: 'A fully defined project with clarity on cost, scope, and execution.',
              },
              {
                num: '02', phase: 'Phase 2', label: 'Construction',
                sub: 'Disciplined Execution',
                points: ['Engineer-led supervision and coordination', 'Structured subcontractor sequencing', 'Ongoing reporting and control of progress'],
                outcome: 'A controlled build — not a reactive one.',
              },
            ].map((phase, i) => (
              <Reveal key={phase.num} delay={i * 120}>
                <div className="flex flex-col h-full p-10 transition-all duration-500" style={{ background: 'white', border: '1px solid rgba(200,177,111,0.2)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.boxShadow = '0 20px 60px rgba(200,177,111,0.1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,177,111,0.2)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <p className="font-serif text-6xl font-light mb-6" style={{ color: 'rgba(200,177,111,0.2)', lineHeight: 1 }}>{phase.num}</p>
                  <p className="font-sans text-xs tracking-[0.25em] uppercase mb-1" style={{ color: GOLD }}>{phase.phase}</p>
                  <h3 className="font-serif text-2xl mb-1" style={{ fontWeight: 400, color: '#1a1a1a' }}>{phase.label}</h3>
                  <p className="font-sans text-xs font-light italic mb-8" style={{ color: '#999' }}>{phase.sub}</p>
                  <ul className="space-y-4 mb-8 flex-1">
                    {phase.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3">
                        <span className="font-sans text-xs mt-1" style={{ color: GOLD }}>▸</span>
                        <p className="font-sans font-light text-sm leading-relaxed" style={{ color: '#555' }}>{pt}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 mt-auto" style={{ borderTop: `1px solid rgba(200,177,111,0.2)` }}>
                    <p className="font-sans text-xs tracking-[0.2em] uppercase mb-2" style={{ color: GOLD }}>Outcome</p>
                    <p className="font-sans font-light text-sm leading-relaxed" style={{ color: '#555' }}>{phase.outcome}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── S5: RISK ELIMINATION (dark) ── */}
      <section className="py-36 px-8 lg:px-24" style={{ background: DARK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <Reveal>
              <SectionLabel roman="V" label="Risk Elimination" light />
              <h2 className="font-serif text-5xl md:text-6xl text-white leading-tight" style={{ fontWeight: 300 }}>
                What This Structure<br />
                <span style={{ color: GOLD, fontStyle: 'italic' }}>Actually Protects You From</span>
              </h2>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Shield, title: 'No Uncontrolled Subcontractors', body: 'Every trade is scheduled, coordinated, and supervised — eliminating the chaos that causes delays and cost overruns.' },
              { icon: Eye, title: "You Always Know What's Happening", body: "Structured reports, photos, and updates ensure full visibility — even if you're managing your project remotely." },
              { icon: MessageSquare, title: 'No Miscommunication', body: 'Direct English communication with the team managing your project — no translation gaps, no confusion.' },
              { icon: Clock, title: 'Decisions Made Early — Not Under Pressure', body: 'Key decisions are structured in advance, avoiding costly last-minute changes.' },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 80}>
                <div className="p-8 flex gap-6 transition-all duration-300" style={{ border: '1px solid rgba(200,177,111,0.15)', background: 'rgba(255,255,255,0.02)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,177,111,0.45)'; e.currentTarget.style.background = 'rgba(200,177,111,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,177,111,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center" style={{ border: `1px solid rgba(200,177,111,0.3)` }}>
                    <card.icon className="h-5 w-5" style={{ color: GOLD }} />
                  </div>
                  <div>
                    <h3 className="font-sans font-medium text-white mb-2 text-sm tracking-wide">{card.title}</h3>
                    <p className="font-sans font-light text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{card.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── S6: SOCIAL PROOF (cream) ── */}
      <section id="proof" className="py-36 px-8 lg:px-24" style={{ background: CREAM }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <Reveal>
              <SectionLabel roman="VI" label="Social Proof" />
              <h2 className="font-serif text-5xl md:text-6xl leading-tight mb-4" style={{ fontWeight: 300, color: '#1a1a1a' }}>
                Real Projects.<br />
                <span style={{ color: GOLD, fontStyle: 'italic' }}>Real Investors. Real Execution.</span>
              </h2>
              <p className="font-sans font-light text-base mt-6" style={{ color: '#777' }}>
                How international clients successfully built in Costa Rica with clarity and control.
              </p>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { label: 'Altagracia', video: 'https://res.cloudinary.com/dbx8wn7p2/video/upload/v1778879128/Testimonio_Altagracia_V4_compressed_wtitye.mp4', text: "The transparency and control EGSU provided throughout my project in Costa Rica was exactly what I needed as an international investor." },
              { label: 'Client Story', video: 'https://res.cloudinary.com/dbx8wn7p2/video/upload/v1778693587/Serenity_House___How_Getting_Lost_Led_Us_to_Our_Dream_Home_in_Costa_Rica___EGSU_Client_Story_hykpay.mp4', text: "When Jack and Rolinka took a wrong turn in Costa Rica, they accidentally discovered a construction site by EGSU Inmobiliaria — and that moment changed everything" },
              { label: 'Client Testimonial', video: 'https://res.cloudinary.com/dbx8wn7p2/video/upload/v1781585179/WhatsApp_Video_2026-06-15_at_14.50.55_1_ltqvi8.mp4', text: "Another satisfied client sharing their experience working with EGSU to build their dream home in Costa Rica with confidence and peace of mind." }
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 100}>
                <div className="overflow-hidden transition-all duration-300" style={{ border: '1px solid rgba(200,177,111,0.2)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.boxShadow = '0 20px 60px rgba(200,177,111,0.1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,177,111,0.2)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div className="relative group cursor-pointer" 
                    style={{ background: '#ede8e0', aspectRatio: '16/9' }}
                    onClick={() => (item.video || item.youtubeId) && setPlayingVideo(playingVideo === i ? null : i)}
                  >
                    {playingVideo === i ? (
                      item.youtubeId ? (
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <video 
                          className="w-full h-full object-cover" 
                          controls 
                          autoPlay 
                        >
                          <source src={item.video} type="video/mp4" />
                          Tu navegador no soporta el formato de video.
                        </video>
                      )
                    ) : (
                      <div className="w-full h-full relative overflow-hidden">
                        {item.video && (
                          <video 
                            className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale-[20%]"
                            muted
                            playsInline
                            onMouseOver={e => {
                              e.currentTarget.currentTime = 0;
                              e.currentTarget.play();
                            }}
                            onMouseOut={e => { 
                              e.currentTarget.pause(); 
                              e.currentTarget.currentTime = 50; 
                            }}
                            onLoadedMetadata={e => {
                              e.currentTarget.currentTime = 50;
                            }}
                          >
                            <source src={`${item.video}#t=50`} type="video/mp4" />
                          </video>
                        )}
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/10 group-hover:bg-transparent transition-colors duration-500">
                          <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10" style={{ border: `1px solid ${GOLD}` }}>
                            <Play className="h-6 w-6 ml-1" style={{ color: GOLD }} />
                          </div>
                          <p className="font-sans text-xs tracking-[0.25em] uppercase" style={{ color: GOLD }}>{item.label}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-8" style={{ background: 'white' }}>
                    <div className="w-8 h-px mb-5" style={{ background: GOLD }} />
                    <p className="font-serif text-base font-light italic leading-relaxed" style={{ color: '#666' }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── S7: POSITIONING (dark) ── */}
      <section className="py-36 px-8 lg:px-24" style={{ background: '#111111' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <Reveal>
              <SectionLabel roman="VII" label="Positioning" light />
              <h2 className="font-serif text-5xl md:text-6xl text-white leading-tight" style={{ fontWeight: 300 }}>
                Who This Is For —<br />
                <span style={{ color: GOLD, fontStyle: 'italic' }}>And Who It's Not</span>
              </h2>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <Reveal delay={80}>
              <div className="p-10 h-full" style={{ border: `1px solid rgba(200,177,111,0.35)`, background: 'rgba(200,177,111,0.03)' }}>
                <p className="font-sans text-xs tracking-[0.25em] uppercase mb-8" style={{ color: GOLD }}>This process is designed for investors who:</p>
                <div className="space-y-5">
                  {[
                    'Want to build in Costa Rica with clarity and control',
                    'Value structured execution over improvisation',
                    'Are investing $200K+ in their project',
                    'Prefer disciplined planning over reactive problem-solving',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: GOLD }} />
                      <p className="font-sans font-light text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="p-10 h-full" style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                <p className="font-sans text-xs tracking-[0.25em] uppercase mb-8" style={{ color: 'rgba(255,255,255,0.3)' }}>This is not for:</p>
                <div className="space-y-5">
                  {[
                    'Projects driven only by the lowest cost',
                    'Investors looking for informal or flexible execution',
                    'Those unwilling to follow a structured process',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <span className="font-sans text-xs mt-0.5 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.2)' }}>×</span>
                      <p className="font-sans font-light text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.3)' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── S8: FINAL CTA (gold) ── */}
      <section id="contact" className="py-40 px-8 lg:px-24 relative overflow-hidden" style={{ background: GOLD }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(0,0,0,0.3) 40px, rgba(0,0,0,0.3) 41px)' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Reveal>
            <SectionLabel roman="VIII" label="Begin Here" />
            <h2 className="font-serif text-5xl md:text-6xl leading-tight mb-10" style={{ fontWeight: 300, color: DARK }}>
              Before You Commit to Building,<br />
              <span style={{ fontStyle: 'italic' }}>Understand the Process First</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-sans font-light text-lg leading-loose mb-4" style={{ color: 'rgba(13,13,13,0.7)' }}>
              A successful project starts with clarity — not construction.
            </p>
            <p className="font-sans font-light leading-loose mb-14" style={{ color: 'rgba(13,13,13,0.65)' }}>
              In this consultation, we evaluate your situation, your land (if you have it), your budget, and your objectives to determine whether your project is viable — and how to structure it correctly.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="font-sans text-xs tracking-[0.25em] uppercase inline-flex items-center gap-3 px-12 py-5 transition-all duration-300"
              style={{ background: DARK, color: GOLD }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1a1a1a'; }}
              onMouseLeave={e => { e.currentTarget.style.background = DARK; }}
            >
              Evaluate Your Project Before You Commit Capital
              <ChevronRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-8 lg:px-24 text-center" style={{ background: '#080808', borderTop: `1px solid rgba(200,177,111,0.12)` }}>
        <img src={logo} alt="EGSU Logo" className="h-12 w-auto mx-auto mb-6 brightness-0 invert opacity-80" />
        <p className="font-sans text-xs tracking-[0.25em] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.3)' }}>Engineer-Led Construction · Costa Rica</p>
        <div className="w-16 h-px mx-auto mb-6" style={{ background: `linear-gradient(to right, transparent, rgba(200,177,111,0.4), transparent)` }} />
        <p className="font-sans text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>© 2026 EGSU. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
