import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  FileCheck2,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

import daniela from "@/assets/testimonial-daniela.jpg";
import giannina from "@/assets/testimonial-giannina.jpg";
import juan from "@/assets/testimonial-juan.jpg";

const quoteUrl = "https://wa.me/?text=Olá%2C%20quero%20fazer%20uma%20cotação%20do%20seguro%20de%20vida%20Olé%20Life.";
const advisorUrl = "https://wa.me/?text=Olá%2C%20quero%20falar%20com%20um%20assessor%20da%20Olé%20Life.";

const comparison = [
  ["Contratação", "Papelada e etapas presenciais", "100% digital"],
  ["Avaliação", "Exames médicos", "Sem exames médicos"],
  ["Tempo", "Dias ou semanas", "Menos de 10 minutos"],
  ["Cobertura", "Condições pouco claras", "Proteção em dólares"],
  ["Preço", "Reajustes complexos", "Fixo por 5 anos"],
];

const faqs = [
  ["Preciso fazer exames médicos?", "Não. A contratação é digital e não exige exames médicos nem papelada. Você responde algumas perguntas para que possamos avaliar seu perfil."],
  ["Quanto tempo leva para contratar?", "O processo pode ser concluído em menos de 10 minutos. Em alguns casos, a análise pode precisar de informações adicionais."],
  ["Qual é o valor da cobertura?", "Você pode escolher coberturas entre US$ 100 mil e US$ 500 mil, de acordo com sua necessidade e elegibilidade."],
  ["O preço muda todo ano?", "Não. O valor contratado permanece fixo por períodos de 5 anos, trazendo mais previsibilidade para o seu planejamento."],
  ["Quem supervisiona a operação no Brasil?", "A oferta no Brasil acontece por meio da parceria com a Excelsior Seguros, sob supervisão da SUSEP. Consulte as condições gerais do produto antes da contratação."],
];

function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#inicio" className="inline-flex items-center gap-2" aria-label="Olé Life — início">
      <span className="brand-spark" aria-hidden="true"><i /><i /><i /><i /></span>
      <span className={inverse ? "text-2xl font-semibold text-primary-foreground" : "text-2xl font-semibold text-brand-action"}>Olé</span>
      <span className={inverse ? "text-xs font-semibold uppercase text-primary-foreground/70" : "text-xs font-semibold uppercase text-muted-foreground"}>Life</span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <div className="page-shell flex h-[76px] items-center justify-between gap-5">
        <BrandMark />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          <a className="nav-link" href="#sobre">Quem somos</a>
          <a className="nav-link" href="#produto">Produto</a>
          <a className="nav-link" href="#contato">Contato</a>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <div className="rating-pill" aria-label="Avaliação 4.8 de 5 no Google"><span>4.8</span><span className="text-rating">★</span><span>no Google</span></div>
          <a className="button button-outline" href="#contato">Sou assessor</a>
          <a className="button button-primary" href={quoteUrl} target="_blank" rel="noreferrer">Cotar <ArrowRight size={18} /></a>
        </div>
        <button className="icon-button lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="mobile-menu lg:hidden">
          <a href="#sobre" onClick={() => setOpen(false)}>Quem somos</a>
          <a href="#produto" onClick={() => setOpen(false)}>Produto</a>
          <a href="#contato" onClick={() => setOpen(false)}>Contato</a>
          <div className="rating-pill justify-center"><span>4.8</span><span className="text-rating">★</span><span>no Google</span></div>
          <a className="button button-primary w-full" href={quoteUrl} target="_blank" rel="noreferrer">Cotar agora <ArrowRight size={19} /></a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-orbit" aria-hidden="true"><div className="hero-orbit-inner" /></div>
      <div className="hero-spark hidden lg:block" aria-hidden="true"><Sparkles /></div>
      <div className="page-shell relative z-10 grid min-h-[720px] items-center gap-8 py-10 lg:min-h-[760px] lg:grid-cols-[1.1fr_.9fr] lg:py-16">
        <div className="max-w-4xl">
          <div className="eyebrow"><span className="status-dot" /> A primeira seguradora de vida digital da América Latina</div>
          <h1 className="hero-title">Sua vida não espera.<br /><span>Seu seguro também não.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Proteção de verdade, contratada do seu jeito. Sem exames, sem papelada e com aprovação em minutos.
          </p>
          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <a className="button button-primary button-hero" href={quoteUrl} target="_blank" rel="noreferrer">Cotar meu seguro <ArrowRight size={22} /></a>
            <a className="button button-whatsapp button-hero" href={advisorUrl} target="_blank" rel="noreferrer"><MessageCircle size={22} /> Falar com um assessor</a>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-brand-deep">
            <span className="inline-flex items-center gap-2"><Check size={17} className="text-brand-green" /> Desde US$ 12/mês</span>
            <span className="inline-flex items-center gap-2"><Check size={17} className="text-brand-green" /> 100% online</span>
            <span className="inline-flex items-center gap-2"><Check size={17} className="text-brand-green" /> Sem exames médicos</span>
          </div>
        </div>
        <div className="hero-visual">
          <figure className="hero-photo">
            <img src={heroFamily} alt="Pai brincando com a filha, protegidos pela Olé Life" width={1200} height={1200} />
          </figure>
          <div className="floating-note note-top"><Zap size={18} /><span><strong>10 min</strong> para contratar</span></div>
          <div className="floating-note note-bottom"><ShieldCheck size={18} /><span><strong>5 anos</strong> de preço fixo</span></div>
        </div>
      </div>
      <a className="mobile-sticky-cta md:hidden" href={advisorUrl} target="_blank" rel="noreferrer"><MessageCircle size={20} /> Falar no WhatsApp</a>
    </section>
  );
}

function Comparison() {
  return (
    <section className="section-space bg-background" aria-labelledby="comparacao-title">
      <div className="page-shell">
        <div className="section-heading"><span className="eyebrow">Uma escolha mais simples</span><h2 id="comparacao-title">Seguro de vida sem complicar a vida.</h2></div>
        <div className="comparison-wrap">
          <div className="comparison-grid comparison-head"><span>O que importa</span><span>Seguro tradicional</span><span>Olé Life</span></div>
          {comparison.map(([label, traditional, ole]) => (
            <div className="comparison-grid" key={label}>
              <strong>{label}</strong><span className="traditional"><X size={18} /> {traditional}</span><span className="ole-value"><Check size={18} /> {ole}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", icon: ShieldCheck, title: "Escolha sua cobertura", text: "Defina a proteção ideal para o seu momento e para quem você ama." },
    { n: "02", icon: FileCheck2, title: "Conte um pouco sobre você", text: "Responda perguntas simples, sem exames médicos e sem papelada." },
    { n: "03", icon: Zap, title: "Receba sua aprovação", text: "Finalize tudo online e tenha uma resposta em poucos minutos." },
  ];
  return (
    <section className="section-space bg-soft" aria-labelledby="como-title">
      <div className="page-shell">
        <div className="section-heading centered"><span className="eyebrow">Como funciona</span><h2 id="como-title">Do “preciso me proteger” ao “pronto” em menos de 10 minutos.</h2></div>
        <div className="step-grid">
          {steps.map(({ n, icon: Icon, title, text }) => <article className="step-card" key={n}><span className="step-number">{n}</span><div className="step-icon"><Icon /></div><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>
  );
}

function Product() {
  return (
    <section id="produto" className="section-space overflow-hidden bg-background" aria-labelledby="produto-title">
      <div className="page-shell grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <span className="eyebrow">Proteção que acompanha você</span>
          <h2 id="produto-title" className="mt-5 section-title">Um seguro claro. Do começo ao futuro.</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">Escolha o valor que faz sentido para sua família e conte com estabilidade para planejar os próximos anos.</p>
          <a className="button button-primary mt-8" href={quoteUrl} target="_blank" rel="noreferrer">Ver minha cotação <ArrowRight size={19} /></a>
        </div>
        <div className="product-panel">
          <div className="product-main">
            <span>Cobertura de vida</span><strong>US$ 100 mil</strong><span>até US$ 500 mil</span>
          </div>
          <div className="product-grid">
            <div><span>A partir de</span><strong>US$ 12<small>/mês</small></strong></div>
            <div><Clock3 /><span>Preço fixo por</span><strong>5 anos</strong></div>
            <div className="wide"><ShieldCheck /><span>Coberturas adicionais</span><strong>Morte acidental e invalidez permanente</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section id="sobre" className="section-space trust-section" aria-labelledby="trust-title">
      <div className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div><span className="eyebrow eyebrow-light">Confiança construída no tempo</span><h2 id="trust-title" className="mt-5 section-title text-primary-foreground">Digital desde o primeiro clique. Sólida desde 1986.</h2></div>
          <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/75 lg:justify-self-end">Nossa experiência vem de décadas protegendo pessoas. Nossa tecnologia existe para tornar essa proteção mais simples, transparente e acessível.</p>
        </div>
        <div className="timeline mt-16">
          <div><span>1986</span><strong>Uma história em proteção</strong><p>Experiência dos fundadores em companhias globais de saúde e vida.</p></div>
          <div><span>2021</span><strong>Nasce a Olé Life</strong><p>A primeira seguradora de vida 100% digital da América Latina.</p></div>
          <div><span>Hoje</span><strong>Nova escala para a região</strong><p>Série B de US$ 13 milhões liderada pela PayPal Ventures.</p></div>
        </div>
        <div className="trust-logos">
          <span>Respaldada por</span><strong>Swiss Re</strong><strong>Munich Re</strong><strong>RGA</strong><i />
          <span>Supervisão e operação</span><strong>NAIC</strong><strong>SUSEP</strong><strong>Excelsior Seguros</strong><strong>B++</strong>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const people = [
    { name: "Daniela", city: "São Paulo", image: daniela, quote: "Consegui entender tudo e contratar no meu tempo. Foi simples de verdade." },
    { name: "Giannina", city: "Rio de Janeiro", image: giannina, quote: "A clareza do processo me deu segurança para escolher a proteção certa." },
    { name: "Juan", city: "Miami", image: juan, quote: "Em poucos minutos, resolvi algo importante que eu adiava há anos." },
  ];
  return (
    <section className="section-space bg-soft" aria-labelledby="depoimentos-title">
      <div className="page-shell">
        <div className="section-heading centered"><span className="eyebrow">Histórias protegidas</span><h2 id="depoimentos-title">Para viver o agora com mais tranquilidade.</h2><p>Depoimentos ilustrativos — conteúdo final será substituído por relatos verificados.</p></div>
        <div className="testimonial-grid">
          {people.map((person) => <figure className="testimonial-card" key={person.name}><img src={person.image} alt={`Retrato ilustrativo de ${person.name}`} loading="lazy" width={816} height={816} /><blockquote>“{person.quote}”</blockquote><figcaption><strong>{person.name}</strong><span>{person.city}</span></figcaption></figure>)}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="section-space bg-background" aria-labelledby="faq-title">
      <div className="page-shell grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
        <div><span className="eyebrow">Perguntas frequentes</span><h2 id="faq-title" className="mt-5 section-title">Sem letras miúdas na conversa.</h2><p className="mt-4 text-muted-foreground">Ainda tem dúvidas? Nosso time fala a sua língua.</p></div>
        <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown aria-hidden="true" /></summary><p>{answer}</p></details>)}</div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section id="contato" className="closing-section">
      <div className="closing-ring" aria-hidden="true" />
      <div className="page-shell relative z-10 text-center"><span className="eyebrow eyebrow-light">Proteção ativa para a vida real</span><h2>Seu futuro merece<br />um começo simples.</h2><p>Faça sua cotação agora ou fale com uma pessoa do nosso time.</p><div className="mt-8 grid justify-center gap-3 sm:flex"><a className="button button-light button-hero" href={quoteUrl} target="_blank" rel="noreferrer">Cotar meu seguro <ArrowRight size={22} /></a><a className="button button-ghost-light button-hero" href={advisorUrl} target="_blank" rel="noreferrer"><MessageCircle size={22} /> Falar no WhatsApp</a></div></div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer-section">
      <div className="page-shell">
        <div className="footer-main"><div><BrandMark inverse /><p>Seguro de vida digital, simples e humano.</p></div><div><strong>Navegue</strong><a href="#sobre">Quem somos</a><a href="#produto">Produto</a><a href="#inicio">Cotar</a></div><div><strong>Fale com a gente</strong><a href={advisorUrl} target="_blank" rel="noreferrer">WhatsApp</a><a href="mailto:contato@olelife.com">contato@olelife.com</a></div><div><strong>Legal</strong><a href="#">Privacidade</a><a href="#">Termos de uso</a></div></div>
        <div className="footer-legal"><p>Olé Life. A disponibilidade, os valores e as condições do seguro estão sujeitos à análise e às condições gerais do produto. No Brasil, a oferta é realizada em parceria com a Excelsior Seguros e supervisionada pela SUSEP. Este material tem caráter informativo e não substitui as condições contratuais.</p><span>© 2026 Olé Life. Todos os direitos reservados.</span></div>
      </div>
    </footer>
  );
}

export function OleLanding() {
  return <><Header /><main><Hero /><Comparison /><HowItWorks /><Product /><Trust /><Testimonials /><Faq /><Closing /></main><Footer /></>;
}