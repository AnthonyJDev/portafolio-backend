import { useEffect, useRef, useState, type CSSProperties, type ReactNode, type SyntheticEvent } from 'react';
import type { IconType } from 'react-icons';
import { DiMsqlServer } from 'react-icons/di';
import { FaAws, FaCode, FaDatabase, FaGithub, FaJava, FaLanguage, FaLinkedin } from 'react-icons/fa6';
import { SiAstro, SiClaude, SiCss, SiDocker, SiDotnet, SiGit, SiGithub, SiHibernate, SiHtml5, SiIntellijidea, SiMongodb, SiMysql, SiNestjs, SiPostgresql, SiPostman, SiPython, SiReact, SiScrumalliance, SiSpringboot, SiSwagger, SiTailwindcss, SiTypescript, SiVercel, SiVite } from 'react-icons/si';
import { TbApi, TbBrandCSharp, TbCode, TbDeviceMobileCode, TbGitBranch } from 'react-icons/tb';
import { VscAzure, VscVscode } from 'react-icons/vsc';
import cvUrl from '../portafolio/cv_cabrejo_anthony.pdf?url';

type FileId = 'readme' | 'home' | 'profile' | 'skills' | 'projects' | 'contact';
type FileKind = 'md' | 'java';

const files: Array<{ id: FileId; label: string; shortLabel: string; kind: FileKind }> = [
  { id: 'readme', label: 'README.md', shortLabel: 'README', kind: 'md' },
  { id: 'home', label: 'Inicio.java', shortLabel: 'Inicio', kind: 'java' },
  { id: 'profile', label: 'SobreMi.java', shortLabel: 'Sobre mí', kind: 'java' },
  { id: 'skills', label: 'Habilidades.java', shortLabel: 'Habilidades', kind: 'java' },
  { id: 'projects', label: 'Proyectos.java', shortLabel: 'Proyectos', kind: 'java' },
  { id: 'contact', label: 'Contacto.java', shortLabel: 'Contacto', kind: 'java' },
];

type Skill = { label: string; icon: IconType; color: string };
type SkillGroup = { title: string; accent: string; wide?: boolean; items: Skill[] };

const skillGroups: SkillGroup[] = [
  { title: 'Backend', accent: 'orange', items: [
    { label: 'Java', icon: FaJava, color: '#e76f00' },
    { label: 'Spring Boot', icon: SiSpringboot, color: '#6db33f' },
    { label: 'NestJS', icon: SiNestjs, color: '#e0234e' },
    { label: 'APIs REST', icon: TbApi, color: '#59b4d9' },
    { label: 'JPA / Hibernate', icon: SiHibernate, color: '#bcae79' },
  ] },
  { title: 'Frontend', accent: 'pink', items: [
    { label: 'React', icon: SiReact, color: '#61dafb' },
    { label: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
    { label: 'Astro', icon: SiAstro, color: '#ff5d01' },
    { label: 'HTML5', icon: SiHtml5, color: '#e34f26' },
    { label: 'CSS3', icon: SiCss, color: '#1572b6' },
    { label: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
    { label: 'Vite', icon: SiVite, color: '#646cff' },
    { label: 'Responsive Design', icon: TbDeviceMobileCode, color: '#4ec9b0' },
  ] },
  { title: 'Bases de datos', accent: 'blue', items: [
    { label: 'MySQL', icon: SiMysql, color: '#4479a1' },
    { label: 'SQL Server', icon: DiMsqlServer, color: '#cc2927' },
    { label: 'Oracle', icon: FaDatabase, color: '#f80000' },
    { label: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
    { label: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  ] },
  { title: 'Cloud & DevOps', accent: 'cyan', wide: true, items: [
    { label: 'Azure', icon: VscAzure, color: '#0078d4' },
    { label: 'Docker', icon: SiDocker, color: '#2496ed' },
    { label: 'Vercel', icon: SiVercel, color: '#ffffff' },
    { label: 'CI/CD', icon: TbGitBranch, color: '#f05032' },
    { label: 'AWS (en aprendizaje)', icon: FaAws, color: '#ff9900' },
  ] },
  { title: 'Herramientas', accent: 'yellow', wide: true, items: [
    { label: 'Visual Studio Code', icon: VscVscode, color: '#007acc' },
    { label: 'IntelliJ IDEA', icon: SiIntellijidea, color: '#fe315d' },
    { label: 'Git', icon: SiGit, color: '#f05032' },
    { label: 'GitHub', icon: SiGithub, color: '#ffffff' },
    { label: 'Postman', icon: SiPostman, color: '#ff6c37' },
    { label: 'Swagger', icon: SiSwagger, color: '#85ea2d' },
  ] },
  { title: 'IA aplicada', accent: 'purple', items: [
    { label: 'Codex', icon: FaCode, color: '#10a37f' },
    { label: 'Claude Code', icon: SiClaude, color: '#d97757' },
    { label: 'OpenCode', icon: TbCode, color: '#a78bfa' },
  ] },
  { title: 'Tecnologías adicionales', accent: 'green', items: [
    { label: 'Python', icon: SiPython, color: '#3776ab' },
    { label: 'C#', icon: TbBrandCSharp, color: '#9b4f96' },
    { label: '.NET básico', icon: SiDotnet, color: '#512bd4' },
  ] },
  { title: 'Metodologías Ágiles', accent: 'blue', items: [
    { label: 'Scrum', icon: SiScrumalliance, color: '#009fda' },
  ] },
];

const featuredProject = {
  title: 'Sistema de reservas',
  status: 'EN DEFINICIÓN',
  description: 'Proyecto personal reservado como próximo caso de estudio. La arquitectura, las funcionalidades y las tecnologías se publicarán cuando estén definidas.',
  technologies: [] as string[],
  features: [] as string[],
  githubUrl: 'https://github.com/AnthonyJDev',
};

function FileIcon({ kind }: { kind: FileKind }) {
  return <span className={`file-icon file-icon--${kind}`}>{kind === 'java' ? 'J' : 'M'}</span>;
}

function SvgIcon({ name, size = 21 }: { name: string; size?: number }) {
  const paths: Record<string, ReactNode> = {
    files: <><path d="M4 3h8l4 4v14H4z"/><path d="M12 3v5h5M8 12h5M8 16h5"/></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></>,
    branch: <><circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="7" r="2"/><path d="M6 7v10M8 6h4a6 6 0 0 1 6 6v-3"/></>,
    play: <><path d="m8 5 11 7-11 7z"/><circle cx="5" cy="5" r="2"/></>,
    blocks: <><rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><path d="M17 14v6M14 17h6"/></>,
    account: <><circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19 13.5v-3l-2-.7-.7-1.7.9-1.9-2.1-2.1-1.9.9-1.7-.7L10.5 2h-3l-.7 2-1.7.7-1.9-.9-2.1 2.1.9 1.9-.7 1.7-2 .7v3l2 .7.7 1.7-.9 1.9 2.1 2.1 1.9-.9 1.7.7.7 2h3l.7-2 1.7-.7 1.9.9 2.1-2.1-.9-1.9.7-1.7z" transform="scale(.82) translate(2.6 2.6)"/></>,
    terminal: <><path d="m4 6 5 5-5 5M11 17h8"/></>,
    close: <path d="m6 6 12 12M18 6 6 18"/>,
    menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
    copy: <><rect x="8" y="8" width="11" height="12" rx="1"/><path d="M16 8V4H5v12h3"/></>,
    external: <><path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v7H4V6h7"/></>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    github: <path d="M12 2.7a9.3 9.3 0 0 0-2.9 18.1v-2.2c-2.4.5-2.9-1-2.9-1-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.4 1 1.4 1 .8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.2-1.9-.2-3.9-1-3.9-4.1 0-.9.3-1.7.9-2.3-.1-.2-.4-1.1.1-2.3 0 0 .7-.2 2.4.9a8.5 8.5 0 0 1 4.4 0c1.7-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1.1 2.3.6.6.9 1.4.9 2.3 0 3.2-2 3.9-3.9 4.1.3.3.6.8.6 1.6v2.7A9.3 9.3 0 0 0 12 2.7z"/>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
    download: <><path d="M12 3v12M7 10l5 5 5-5"/><path d="M5 20h14"/></>,
    send: <><path d="m3 11 18-8-8 18-2-8z"/><path d="m11 13 5-5"/></>,
  };
  return <svg className="svg-icon" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

function JavaHeading({ returnType, method, modifier, parameters }: { returnType: string; method: string; modifier?: string; parameters?: ReactNode }) {
  return <h1 className="java-signature">
    <span className="signature-prefix"><span className="syntax-purple">public</span>{' '}
      {modifier && <><span className="syntax-purple">{modifier}</span>{' '}</>}
      <span className="syntax-blue">{returnType}</span>
    </span>{' '}
    <span className="syntax-yellow">{method}</span><span className="signature-punctuation">(</span>{parameters}<span className="signature-punctuation">) {'{'}</span>
  </h1>;
}

function JavaClosingBrace() {
  return <div className="java-closing-brace" aria-hidden="true">{'}'}</div>;
}

function Readme() {
  return <article className="welcome-document page-enter">
    <h1><span>#</span> ¡Buenas, Bienvenid@ a mi portafolio!</h1>
    <p>Desde el explorador de archivos podrás manejar qué ves.</p>
    <p>Disfruta de lo simple...</p>
  </article>;
}

function Home() {
  return <article className="readme page-enter">
    <header className="document-heading"><span className="document-index"></span><div><JavaHeading returnType="void" method="main" modifier="static" parameters={<><span className="syntax-blue">String[]</span>{' '}<span className="syntax-yellow">args</span></>} /></div></header>
    <div className="java-function-body"><div className="home-layout">
      <section className="developer-card">
        <div className="developer-avatar"><img src="https://github.com/AnthonyJDev.png?size=420" alt="Anthony Jordan Cabrejo Barrientos" /></div>
        <pre className="developer-code" aria-label="Información de Anthony en formato Java"><code><span className="syntax-blue">Developer</span> <span className="syntax-yellow">desarrollador</span> = <span className="syntax-blue">Developer</span>.<span className="syntax-yellow">builder</span>()
{`\n`}    .<span className="syntax-yellow">nombre</span>(<span className="syntax-orange">"Anthony Jordan Cabrejo Barrientos"</span>)
{`\n`}    .<span className="syntax-yellow">titulo</span>(<span className="syntax-orange">"Backend Java Developer"</span>)
{`\n`}    .<span className="syntax-yellow">ubicacion</span>(<span className="syntax-orange">"Lima, Perú"</span>)
{`\n`}    .<span className="syntax-yellow">disponible</span>(<span className="syntax-purple">true</span>)
{`\n`}    .<span className="syntax-yellow">build</span>();</code></pre>
      </section>
      <section className="developer-intro">
        <p className="code-comment">// Perfil profesional</p>
        <h1>Backend Java Developer</h1>
        <p>Desarrollo soluciones backend con Spring Boot, conectando APIs, bases de datos y servicios cloud con código organizado y mantenible. Busco mi primera oportunidad para aportar, aprender y crecer dentro de un equipo de tecnología.</p>
        <div className="social-actions">
          <a className="social-button social-button--github" href="https://github.com/AnthonyJDev" target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" /> GitHub</a>
          <a className="social-button social-button--linkedin" href="https://www.linkedin.com/in/anthony-jordan-cabrejo-barrientos/" target="_blank" rel="noreferrer"><FaLinkedin aria-hidden="true" /> LinkedIn</a>
        </div>
      </section>
    </div></div>
    <JavaClosingBrace />
  </article>;
}

function Profile() {
  return <article className="editor-document page-enter">
    <header className="document-heading"><span className="document-index"></span><div><p className="code-comment">// Información profesional</p><JavaHeading returnType="void" method="sobreMi" /></div></header>
    <div className="java-function-body"><div className="profile-cards">
      <section className="profile-card profile-card--formation">
        <span>FORMACIÓN</span>
        <h2>Desarrollo de Sistemas de Información</h2>
        <ul>
          <li>Egresado de IDAT, promoción 2026.</li>
          <li>Perteneciente al tercio superior.</li>
          <li>Formación complementaria en Spring Boot, React , Angular , NodeJS.</li>
        </ul>
      </section>
      <section className="profile-card profile-card--experience">
        <span>EXPERIENCIA PRÁCTICA</span>
        <h2>Backend Java Developer</h2>
        <p className="profile-highlight">En búsqueda de mi primera oportunidad profesional.</p>
        <p>Desarrollo proyectos personales orientados a fortalecer mis habilidades en desarrollo de software, aplicando Spring Boot, NestJS, React, bases de datos, servicios en la nube y buenas prácticas de programación y arquitectura.</p>
      </section>
      <section className="profile-card profile-card--interests">
        <span>INTERESES</span>
        <h2>Lo que impulsa mi crecimiento</h2>
        <p>Backend, Microservicios, Seguridad, Arquitectura de software, Bases de datos , Servicios en la nube y aprendizaje continuo.</p>
      </section>
      <section className="profile-card profile-card--cv">
        <div>
          <span>CURRÍCULUM</span>
          <h2>Conoce mi perfil completo</h2>
          <p>Consulta mi formación, habilidades técnicas y experiencia práctica en un solo documento.</p>
        </div>
        <a className="cv-button" href={cvUrl} download="CV_Anthony_Cabrejo.pdf"><SvgIcon name="download" size={17} /> Descargar CV</a>
      </section>
    </div></div>
    <JavaClosingBrace />
  </article>;
}

function Skills() {
  return <article className="editor-document page-enter">
    <header className="document-heading"><span className="document-index"></span><div><p className="code-comment">// Tecnologías con las que trabajo</p><JavaHeading returnType="List<Tecnologia>" method="obtenerHabilidades" /></div></header>
    <div className="java-function-body"><div className="skills-grid">{skillGroups.map((group) => <section className={`skill-card skill-card--${group.accent}${group.wide ? ' skill-card--wide' : ''}`} key={group.title}>
      <div className="skill-card__top"><span></span><i /></div><h2>{group.title}</h2>
      <div className="skill-list">{group.items.map((item) => {
        const Icon = item.icon;
        return <span className="skill-item" style={{ '--skill-color': item.color } as CSSProperties} key={item.label}><Icon aria-hidden="true" /><span>{item.label}</span></span>;
      })}</div>
    </section>)}
      <section className="skill-card skill-card--language">
        <div className="skill-card__top"><span></span><i /></div>
        <div className="language-summary">
          <div className="language-heading"><span className="language-icon"><FaLanguage aria-hidden="true" /></span><div><small>IDIOMA</small><h2>Inglés</h2></div></div>
          <div className="language-level">
            <div className="language-level__label"><strong>Nivel básico</strong><span>En aprendizaje</span></div>
            <div className="language-progress" role="progressbar" aria-label="Nivel de inglés" aria-valuemin={0} aria-valuemax={100} aria-valuenow={25} aria-valuetext="Nivel básico"><i /></div>
            <p>Fortaleciendo vocabulario técnico, comprensión y comunicación.</p>
          </div>
        </div>
      </section>
    </div></div>
    <JavaClosingBrace />
  </article>;
}

function Projects() {
  return <article className="editor-document page-enter">
    <header className="document-heading"><span className="document-index"></span><div><p className="code-comment">// Próximo caso de estudio</p><JavaHeading returnType="List<Proyecto>" method="obtenerProyectos" /></div></header>
    <div className="java-function-body">
      <p className="project-code-line"><span className="syntax-blue">List&lt;Proyecto&gt;</span> <span className="syntax-yellow">proyectos</span> = <span className="syntax-blue">List</span>.<span className="syntax-yellow">of</span>(</p>
      <section className="project-card">
        <div className="project-card__heading"><div><p className="project-package">com.anthony.portfolio.projects</p><h2>{featuredProject.title}</h2></div><span className="project-status"><i /> {featuredProject.status}</span></div>
        <p className="project-description">{featuredProject.description}</p>
        {featuredProject.technologies.length > 0 && <div className="project-technologies">{featuredProject.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>}
        <details className="project-details">
          <summary>Ver características</summary>
          {featuredProject.features.length > 0
            ? <ul>{featuredProject.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            : <p>Arquitectura y funcionalidades en definición.</p>}
        </details>
        <div className="project-links"><a href={featuredProject.githubUrl} target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" /> Ver GitHub <SvgIcon name="external" size={13} /></a></div>
      </section>
      <div className="project-code-end"><p>);</p><p><span className="syntax-purple">return</span> <span className="syntax-yellow">proyectos</span>;</p></div>
    </div>
    <JavaClosingBrace />
  </article>;
}

function Contact() {
  const sendMessage = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const message = String(formData.get('message') ?? '');
    const subject = encodeURIComponent(`Contacto desde el portafolio - ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`);
    window.location.href = `mailto:anthony4lx@gmail.com?subject=${subject}&body=${body}`;
  };

  return <article className="editor-document contact-page page-enter">
    <header className="document-heading"><span className="document-index"></span><div><p className="code-comment">// Construyamos algo juntos</p><JavaHeading returnType="void" method="enviarMensaje" parameters={<><span className="syntax-blue">Formulario</span>{' '}<span className="syntax-yellow">formulario</span></>} /></div></header>
    <div className="java-function-body">
      <form className="contact-form" onSubmit={sendMessage}>
        <label className="form-field" htmlFor="contact-name"><span><span className="syntax-blue">String</span> <span className="syntax-yellow">nombre</span> =</span><input id="contact-name" name="name" type="text" autoComplete="name" required /></label>
        <label className="form-field" htmlFor="contact-email"><span><span className="syntax-blue">String</span> <span className="syntax-yellow">email</span> =</span><input id="contact-email" name="email" type="email" autoComplete="email" required /></label>
        <label className="form-field" htmlFor="contact-message"><span><span className="syntax-blue">String</span> <span className="syntax-yellow">mensaje</span> =</span><textarea id="contact-message" name="message" rows={6} required /></label>
        <button className="send-button" type="submit"><SvgIcon name="send" size={16} /> Enviar mensaje</button>
      </form>
      <section className="direct-contact">
        <p>También puedes contactarme directamente por:</p>
        <a href="mailto:anthony4lx@gmail.com"><SvgIcon name="mail" size={16} /><span>anthony4lx@gmail.com</span></a>
        <a href="https://github.com/AnthonyJDev" target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" /><span>github.com/Jaydnnx</span></a>
        <a href="https://www.linkedin.com/in/anthony-jordan-cabrejo-barrientos/" target="_blank" rel="noreferrer"><FaLinkedin aria-hidden="true" /><span>linkedin.com/in/anthony-jordan-cabrejo-barrientos</span></a>
      </section>
    </div>
    <JavaClosingBrace />
  </article>;
}

function Terminal({ onClose }: { onClose: () => void }) {
  const [history, setHistory] = useState(['Portafolio terminal v1.0.0', 'Escribe "help" para ver los comandos disponibles.']);
  const [command, setCommand] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const submit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = command.trim().toLowerCase();
    if (!value) return;
    const responses: Record<string, string> = {
      help: 'Comandos: about, skills, contact, clear',
      about: 'Anthony Cabrejo | Backend Java Developer | Disponible para trabajar',
      skills: 'Java · Spring Boot · SQL · MongoDB · Azure · Docker',
      contact: 'anthony4lx@gmail.com | github.com/Jaydnnx',
    };
    if (value === 'clear') setHistory([]);
    else setHistory((current) => [...current, `> ${command}`, responses[value] ?? `Comando no encontrado: ${command}`]);
    setCommand('');
  };
  useEffect(() => { inputRef.current?.focus(); }, []);
  return <section className="terminal-panel" aria-label="Terminal interactiva" onClick={() => inputRef.current?.focus()}>
    <div className="terminal-tabs"><span>PROBLEMAS</span><span>SALIDA</span><span>CONSOLA DE DEPURACION</span><strong>TERMINAL</strong><button onClick={onClose} aria-label="Cerrar terminal"><SvgIcon name="close" size={16} /></button></div>
    <div className="terminal-body">{history.map((line, index) => <div key={`${line}-${index}`} className={line.startsWith('>') ? 'terminal-command' : ''}>{line}</div>)}
      <form onSubmit={submit}><span>anthony@portfolio:~$</span><input ref={inputRef} value={command} onChange={(event) => setCommand(event.target.value)} aria-label="Comando de terminal" autoComplete="off" /></form>
    </div>
  </section>;
}

export default function Portfolio() {
  const [activeFile, setActiveFile] = useState<FileId>('readme');
  const [openFiles, setOpenFiles] = useState<FileId[]>(['readme']);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  const navigate = (id: FileId) => {
    setActiveFile(id);
    setOpenFiles((current) => current.includes(id) ? current : [...current, id]);
    setSidebarOpen(false);
  };
  const closeTab = (id: FileId) => {
    const index = openFiles.indexOf(id);
    const next = openFiles.filter((file) => file !== id);
    if (!next.length) next.push('readme');
    setOpenFiles(next);
    if (activeFile === id) setActiveFile(next[Math.max(0, index - 1)]);
  };
  const pageByFile: Record<FileId, ReactNode> = {
    readme: <Readme />, home: <Home />, profile: <Profile />, skills: <Skills />,
    projects: <Projects />, contact: <Contact />,
  };
  const activeMetadata = files.find((file) => file.id === activeFile)!;

  return <main className="app-shell">
    <header className="titlebar">
      <button className="mobile-menu" onClick={() => setSidebarOpen((value) => !value)} aria-label="Abrir explorador"><SvgIcon name="menu" size={18} /></button>
      <div className="app-mark"><span>&lt;</span><span>/&gt;</span></div>
      <nav className="menu-items" aria-label="Menú de aplicación"><span>Archivo</span><span>Editar</span><span>Ver</span><span>Ejecutar</span><span>Terminal</span></nav>
      <div className="window-title">AnthonyDev - Portafolio</div>
      <div className="window-controls" aria-hidden="true"><i /><i className="square" /><i className="window-close">×</i></div>
    </header>
    <div className="workspace">
      <aside className="activity-bar" aria-label="Barra de actividad">
        <div><button className="active" aria-label="Explorador" onClick={() => setSidebarOpen((value) => !value)}><SvgIcon name="files" /></button><button aria-label="Buscar"><SvgIcon name="search" /></button><button aria-label="Control de código fuente"><SvgIcon name="branch" /></button><button aria-label="Ejecutar"><SvgIcon name="play" /></button><button aria-label="Extensiones"><SvgIcon name="blocks" /></button></div>
        <div><button aria-label="Cuenta"><SvgIcon name="account" /></button><button aria-label="Configuración"><SvgIcon name="settings" /></button></div>
      </aside>
      <aside className={`explorer ${sidebarOpen ? 'explorer--open' : ''}`}>
        <div className="explorer-title"><span>EXPLORADOR</span><button aria-label="Opciones del explorador">•••</button></div>
        <div className="folder-title"><SvgIcon name="chevron" size={14} /><strong>ANTHONY-PORTAFOLIO</strong></div>
        <nav className="file-tree" aria-label="Archivos del portafolio">{files.map((file) => <button key={file.id} className={activeFile === file.id ? 'active' : ''} onClick={() => navigate(file.id)}><FileIcon kind={file.kind} /><span>{file.label}</span></button>)}</nav>
        <div className="explorer-section"><SvgIcon name="chevron" size={14} /><span>Outline</span></div><div className="explorer-section"><SvgIcon name="chevron" size={14} /><span>Timeline</span></div>
      </aside>
      {sidebarOpen && <button className="sidebar-backdrop" aria-label="Cerrar explorador" onClick={() => setSidebarOpen(false)} />}
      <section className="editor-area">
        <div className="tabs" role="tablist">{openFiles.map((id) => {
          const file = files.find((item) => item.id === id)!;
          return <div key={id} className={`tab ${activeFile === id ? 'active' : ''}`} role="tab" aria-selected={activeFile === id} onClick={() => setActiveFile(id)}><FileIcon kind={file.kind} /><span>{file.label}</span><button onClick={(event) => { event.stopPropagation(); closeTab(id); }} aria-label={`Cerrar ${file.label}`}><SvgIcon name="close" size={14} /></button></div>;
        })}</div>
        <div className="breadcrumbs"><FileIcon kind={activeMetadata.kind} /><span>{activeMetadata.label}</span><span>›</span><strong>{activeMetadata.shortLabel}</strong></div>
        <div className={`editor-content ${terminalOpen ? 'editor-content--terminal' : ''}`}>{pageByFile[activeFile]}</div>
        {terminalOpen && <Terminal onClose={() => setTerminalOpen(false)} />}
      </section>
    </div>
    <footer className="statusbar">
      <div><span className="remote">&gt;&lt;</span><span>main*</span><span>↻ 0</span><span>△ 0</span></div>
      <button onClick={() => setTerminalOpen((value) => !value)} aria-label="Alternar terminal"><SvgIcon name="terminal" size={15} /><span>Terminal</span></button>
      <div><span>Ln 18, Col 24</span><span>UTF-8</span><span>LF</span><span>{activeFile === 'readme' ? 'Markdown' : 'Java'}</span><span>Anthony © 2026</span></div>
    </footer>
  </main>;
}
