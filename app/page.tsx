"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import projects from "../data/projects.json";

const stacks = [
  { name: "Interface & experience", tools: "React · Next.js · TypeScript · Tailwind CSS", number: "01" },
  { name: "Mobile development", tools: "Flutter · Dart · API integration", number: "02" },
  { name: "Behind the scenes", tools: "Node.js · Laravel · REST APIs · MySQL", number: "03" },
];
const symbols = ["◎", "▤", "✳", "☀", "▦", "◈", "⌘", "✴"];

export default function Home() {
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [inquiry, setInquiry] = useState("Build a product");
  useEffect(() => {
    if (selected) dialog.current?.showModal();
    else dialog.current?.close();
  }, [selected]);
  function prepareEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `Hi Yaser,\n\nI'm interested in: ${inquiry}\nName: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:honin44@gmail.com?subject=${encodeURIComponent(inquiry + " — Portfolio inquiry")}&body=${encodeURIComponent(body)}`;
  }
  const [filter, setFilter] = useState("All work");
  const [menu, setMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const visible = projects.filter(p => filter === "All work" || (filter === "Mobile" ? p.techStack.includes("Flutter") : filter === "Web" ? ["Angular", "Next.js", "HTML", "CSS", "JavaScript", "TypeScript"].some(t => p.techStack.includes(t)) || p.title.includes("Dashboard") : !p.techStack.includes("Flutter") && !["Angular", "Next.js", "HTML", "CSS", "JavaScript", "TypeScript"].some(t => p.techStack.includes(t)) && !p.title.includes("Dashboard")));
  async function copyEmail() {
    try { await navigator.clipboard.writeText("honin44@gmail.com"); setCopied(true); setCopyError(false); setTimeout(() => setCopied(false), 2500); }
    catch { setCopyError(true); }
  }
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <header className="header wrap">
        <a href="#" className="logo full-name" aria-label="Yaser Honini home"><span className="brand-mark">y.</span>YASER HONINI</a>
        <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-controls="navigation">{menu ? "Close −" : "Menu +"}</button>
        <nav id="navigation" className={menu ? "nav open" : "nav"} aria-label="Main navigation">
          <a href="#work" onClick={() => setMenu(false)}>Work <span>{String(projects.length).padStart(2, "0")}</span></a>
          <a href="#services" onClick={() => setMenu(false)}>Services</a><a href="#about" onClick={() => setMenu(false)}>About</a>
          <a href="#contact" className="nav-contact" onClick={() => setMenu(false)}>Let’s talk <span>↗</span></a>
        </nav>
      </header>
      <main id="main">
        <section className="hero wrap">
          <div className="hero-top"><span className="eyebrow"><i /> FULL STACK & MOBILE DEVELOPER</span><span className="edition">INDEPENDENT DEVELOPER / PORTFOLIO</span></div>
          <div className="hero-layout">
            <div className="hero-copy"><p className="hero-name">YASER HONINI — DEVELOPER & BUILDER</p><h1>Your next<br />big idea.<br /><span>Built right.</span></h1><p>I’m Yaser Honini, a full stack & mobile developer. I help businesses turn ideas into useful digital products, and teams turn complex requirements into clear, working experiences.</p><div className="hero-actions"><a href="#contact" className="button">Let’s build something <span>↗</span></a><a href="#work" className="text-link">See the work ↓</a></div></div>
            <div className="hero-showcase"><Image src="/images/creative-hero.webp" alt="Sculptural chrome ribbon passing through a glowing orange glass portal" fill priority sizes="(max-width: 640px) 100vw, 45vw" className="hero-image"/><div className="showcase-top"><span>IDEAS → EXPERIENCES</span><span>✳</span></div><div className="showcase-bottom"><span>Design-minded.<br /><strong>Engineering-driven.</strong></span><a href="#work" aria-label="Explore selected projects">↘</a></div><span className="showcase-label">A LITTLE IMAGINATION. A LOT OF INTENTION.</span></div>
          </div>
          <div className="hero-bottom"><span>WEB DEVELOPMENT <b>✳</b> MOBILE APPS <b>✳</b> FULL STACK SOLUTIONS</span><a href="#work">SCROLL TO EXPLORE ↓</a></div>
        </section>
        <section className="intro-strip wrap" aria-label="Ways to collaborate"><p>For the idea you want to launch.<br /><strong>For the team you want to grow.</strong></p><a href="#contact" onClick={() => setInquiry("Build a product")}>I have a project <span>↗</span></a><a href="#contact" onClick={() => setInquiry("Join our team")}>I’m hiring <span>↗</span></a></section>
        <section id="work" className="work wrap section">
          <div className="section-heading"><div><span className="eyebrow">01 / SELECTED WORK</span><h2>Built with purpose<span>.</span></h2></div><p>From everyday tools to connected systems.<br />Explore the thinking behind the build.</p></div>
          <div className="work-toolbar"><div className="filters" aria-label="Filter projects">{["All work", "Mobile", "Web", "Other"].map(f => <button key={f} aria-pressed={filter === f} className={filter === f ? "active" : ""} onClick={() => setFilter(f)}>{f}{f === "All work" && <span>{String(projects.length).padStart(2, "0")}</span>}</button>)}</div><span className="result-count" aria-live="polite">{String(visible.length).padStart(2, "0")} PROJECTS</span></div>
          <div className="projects">{visible.map(p => { const index = projects.findIndex(item => item.id === p.id); return <article className={`project project-${index}`} key={p.id}>
            <button className="project-visual" onClick={() => setSelected(p)} aria-label={`Explore ${p.title}`}><span className="visual-index">/ {String(index + 1).padStart(2, "0")}</span><span className="visual-type">{p.techStack.includes("Flutter") ? "MOBILE APPLICATION" : p.techStack.includes("PHP") ? "CODE & ALGORITHMS" : "WEB INTERFACE"}</span><div className="project-graphic" aria-hidden="true"><span>{symbols[index % symbols.length]}</span><div className="graphic-line"/><div className="graphic-line short"/></div><span className="visual-caption">{["A voice. A resolution.", "Everything in its place.", "Bring people together.", "A little more clarity.", "A simpler overview.", "Connected perspectives.", "Think. Solve. Repeat.", "A space for my work."][index]}</span><span className="project-arrow">↗</span></button>
            <div className="project-info"><div className="tags">{p.techStack.map(t => <span key={t}>{t}</span>)}</div><h3><button className="project-title" onClick={() => setSelected(p)}>{p.title} <span>↗</span></button></h3><p>{p.description}</p><button className="project-detail-link" onClick={() => setSelected(p)}>Explore project <span>↗</span></button>{p.liveDemoLink && <a className="live-link" href={p.liveDemoLink} target="_blank" rel="noopener noreferrer">Live website ↗</a>}</div>
          </article>; })}</div>
          <a className="github-more" href="https://github.com/YaserHaneny" target="_blank" rel="noopener noreferrer">More code, experiments & ideas on GitHub <span>↗</span></a>
        </section>
        <section id="services" className="services wrap section"><div className="section-heading"><div><span className="eyebrow">02 / WHAT WE CAN BUILD</span><h2>More than a website.<br />A way forward<span>.</span></h2></div><p>A focused partner for your next product,<br />or a developer for your team.</p></div><div className="service-grid">{[{n:"01", icon:"↗", title:"Your business, online", text:"A fast, responsive website that explains your offer and gives customers a clear next step.", type:"Build a website", tags:"BUSINESS WEBSITES / PORTFOLIOS"}, {n:"02", icon:"◎", title:"An idea in their hands", text:"A mobile application with clear journeys, considered interactions, and connected data.", type:"Build a mobile app", tags:"FLUTTER / MOBILE EXPERIENCES"}, {n:"03", icon:"⌘", title:"A stronger product team", text:"Frontend, backend, or the connection between them. Bring me into your next development challenge.", type:"Join our team", tags:"WEB APPS / APIS / TEAM ROLES"}].map(item=><a href="#contact" className="service-card" key={item.n} onClick={()=>setInquiry(item.type)}><div><span>{item.n}</span><b>{item.icon}</b></div><h3>{item.title}</h3><p>{item.text}</p><small>{item.tags}</small><span className="service-cta">Let’s talk about it ↗</span></a>)}</div><div className="process"><span className="eyebrow">A CLEAR PATH FROM IDEA TO LAUNCH</span><div>{[{n:"01",title:"Understand",text:"Your goals, your users, and what matters most."},{n:"02",title:"Build",text:"Turn the scope into interfaces and working features."},{n:"03",title:"Refine",text:"Review the details, test the flow, and prepare to launch."}].map(step=><div key={step.n}><span>{step.n} /</span><h3>{step.title}</h3><p>{step.text}</p></div>)}</div></div></section>
        <section id="about" className="about section"><div className="wrap about-grid"><div><span className="eyebrow">03 / THE PERSON BEHIND THE CODE</span><h2>Curious mind.<br />Builder at heart<span>.</span></h2><div className="about-signature">Yaser Honini<span>↗</span></div></div><div className="about-content"><div className="about-name">YASER HONINI</div><p className="about-lead">I care about how it works.<br />And how it feels to use.</p><p>I’m a full stack developer working across web and mobile. From a responsive interface to the API behind it, I enjoy connecting the details that turn an idea into a useful product.</p><p>My work spans Flutter applications, modern JavaScript interfaces, and backend development. I approach each project with curiosity, clear thinking, and attention to the user.</p><div className="expertise">{stacks.map(s => <div key={s.number}><span>{s.number}</span><div><h3>{s.name}</h3><p>{s.tools}</p></div><b>↗</b></div>)}</div></div></div></section>
        <section id="contact" className="contact wrap section"><span className="eyebrow">04 / YOUR NEXT MOVE</span><div className="contact-heading"><h2>Have an idea?<br />Let’s make it <em>real.</em></h2><a className="contact-circle" href="mailto:honin44@gmail.com" aria-label="Email Yaser">↗</a></div><div className="inquiry-panel"><div><span className="eyebrow">LET’S START WITH YOUR IDEA</span><h3>A few details.<br />A good conversation.</h3><p>Looking for a project partner or a developer for your team? Tell me what you’re working on.</p><span className="inquiry-note">Prefer a direct email? My address is right below.</span></div><form onSubmit={prepareEmail}><fieldset><legend>I’m looking to…</legend><div className="inquiry-options">{["Build a product", "Build a website", "Build a mobile app", "Join our team"].map(option=><button type="button" key={option} aria-pressed={inquiry===option} onClick={()=>setInquiry(option)}>{option === "Join our team" ? "Hire a developer" : option}</button>)}</div></fieldset><div className="form-row"><label>Your name<input name="name" autoComplete="name" required maxLength={100} placeholder="How should I call you?" /></label><label>Your email<input type="email" name="email" autoComplete="email" required maxLength={200} placeholder="you@company.com" /></label></div><label>A little about your project or role<textarea name="message" required maxLength={3000} rows={3} placeholder="What are you building? What kind of help do you need?" /></label><button className="button" type="submit">Prepare my email <span>↗</span></button><p className="form-hint">Opens a draft in your email app. Review it and send when you’re ready.</p></form></div><div className="contact-bottom"><div><p>Tell me what you have in mind.</p><a className="email" href="mailto:honin44@gmail.com">honin44@gmail.com</a><button className="copy" onClick={copyEmail}>{copied ? "Copied ✓" : "Copy email ⧉"}</button><span className="copy-status" role="status">{copyError ? "Please select and copy the email address above." : copied ? "Email copied to clipboard." : ""}</span></div><a className="text-link" href="https://github.com/YaserHaneny" target="_blank" rel="noopener noreferrer">Find me on GitHub ↗</a></div></section>
      </main>
      <dialog ref={dialog} className="project-dialog" aria-labelledby="project-dialog-title" onCancel={()=>setSelected(null)} onClick={event=>{if(event.target===event.currentTarget)setSelected(null);}} onClose={()=>setSelected(null)}>{selected && <div className="dialog-content"><div className="dialog-top"><span className="eyebrow">PROJECT / {selected.techStack.includes("Flutter") ? "MOBILE" : "DEVELOPMENT"}</span><button onClick={()=>setSelected(null)} aria-label="Close project details">Close ×</button></div><h2 id="project-dialog-title">{selected.title}</h2><div className="tags">{selected.techStack.map(t=><span key={t}>{t}</span>)}</div><div className="dialog-section"><span>THE IDEA</span><p>{selected.description}</p></div><div className="dialog-section"><span>EXPLORE THE BUILD</span><p>Browse the source repository to explore the implementation, project structure, and available documentation.</p></div><div className="dialog-actions"><a className="button" href={selected.githubLink} target="_blank" rel="noopener noreferrer">View source code ↗</a>{selected.liveDemoLink && <a className="text-link" href={selected.liveDemoLink} target="_blank" rel="noopener noreferrer">Live website ↗</a>}</div><a className="dialog-enquiry" href="#contact" onClick={()=>{setInquiry("Build a product");setSelected(null);}}>Have a similar idea? Let’s talk ↗</a></div>}</dialog>
      <footer className="wrap footer"><a href="#" className="logo full-name"><span className="brand-mark">y.</span>YASER HONINI</a><span>© {new Date().getFullYear()} Yaser Honini. Crafted with intention.</span><a href="#">BACK TO TOP ↑</a></footer>
    </>
  );
}
