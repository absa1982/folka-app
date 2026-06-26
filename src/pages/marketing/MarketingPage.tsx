import * as React from 'react';
import { Icon } from '../../components/Icon';
import logo from '../../assets/folka-logo.svg';
import './marketing.css';

const FEATURES = [
  { icon: 'clock', bg: 'var(--green-50)', fg: 'var(--green-700)', title: 'Tidsregistrering', body: 'Medarbejdere registrerer arbejdstid, ferie og fravær med ét klik. Du overholder alle relevante love og regler.' },
  { icon: 'list-checks', bg: 'var(--clay-50)', fg: 'var(--clay-700)', title: 'Onboarding & offboarding', body: 'Genbrugelige checklister gør første og sidste arbejdsdag tryg — uden manuelle fejl.' },
  { icon: 'users', bg: 'var(--info-bg)', fg: 'var(--info)', title: 'Medarbejdere', body: 'Kontrakter, dokumenter og personoplysninger samlet ét sted — GDPR-sikkert.' },
  { icon: 'laptop', bg: 'var(--warning-bg)', fg: 'var(--warning)', title: 'Udstyr', body: 'Hold styr på hvilken medarbejder, der har fået hvilken computer, telefon eller nøgle.' },
  { icon: 'user-search', bg: 'var(--green-50)', fg: 'var(--green-700)', title: 'Rekruttering', body: 'En kandidatoversigt der samler ansøgninger, kategorier og interne kommentarer.' },
  { icon: 'scale', bg: 'var(--clay-50)', fg: 'var(--clay-700)', title: 'Juridisk HR-hjælp', body: 'Gratis indledende samtale og rådgivning inden for HR og ansættelsesret, når du har brug for det.' },
] as const;

const TRUST_LOGOS = ['Rotpunkt', 'STREG', 'Conmedia', 'holion', 'QAMPO', '29x', 'Seacabin'];

export function MarketingPage() {
  return (
    <div className="marketing-page">
      <nav className="top">
        <div className="wrap row">
          <img src={logo} alt="Folka" height={30} />
          <div className="links" style={{ marginLeft: 8 }}>
            <a href="#features">Funktioner</a>
            <a href="#pricing">Priser</a>
            <a href="#">Om</a>
            <a href="#">Ressourcer</a>
          </div>
          <div style={{ flex: 1 }} />
          <a className="btn btn-ghost" href="#">Log ind</a>
          <a className="btn btn-primary" href="#">Kom i gang</a>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">HR · Tid · Onboarding</div>
            <h1 className="hero-title">All your people, in one calm place.</h1>
            <p className="hero-lead">Folka samler tidsregistrering, onboarding, medarbejdere og udstyr ét sted — så du sparer tid, undgår bøder og får ro i maven.</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#">Prøv gratis i 1 måned <Icon name="arrow-right" className="ico" /></a>
              <a className="btn btn-secondary" href="#"><Icon name="play-circle" className="ico" /> Book en demo</a>
            </div>
            <div className="hero-note"><Icon name="shield-check" size={16} style={{ color: 'var(--green-600)' }} /> GDPR-sikker · Overholder lovkrav om tidsregistrering</div>
          </div>

          <div className="mock" aria-hidden="true">
            <div className="mock-top">
              <span className="dot" style={{ background: '#E8674A' }} />
              <span className="dot" style={{ background: '#E0A12E' }} />
              <span className="dot" style={{ background: '#1E8A63' }} />
              <span style={{ marginLeft: 10, fontSize: 13, fontWeight: 600, color: 'var(--text-muted)' }}>Tidsregistrering · Uge 9</span>
            </div>
            <div className="mock-body">
              <div className="mrow">
                <span className="av" style={{ background: 'var(--green-100)', color: 'var(--green-700)' }}>AM</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--ink-900)' }}>Anna Mortensen</div>
                  <div className="mono" style={{ fontSize: 12, color: 'var(--text-muted)' }}>37,5 t</div>
                </div>
                <span className="pill" style={{ background: 'var(--warning-bg)', color: 'var(--warning)' }}><span className="pdot" style={{ background: 'var(--warning)' }} />Afventer</span>
              </div>
              <div className="mrow">
                <span className="av" style={{ background: 'var(--clay-100)', color: 'var(--clay-700)' }}>LF</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--ink-900)' }}>Lars Frank</div>
                  <div className="mono" style={{ fontSize: 12, color: 'var(--text-muted)' }}>40,0 t</div>
                </div>
                <span className="pill" style={{ background: 'var(--success-bg)', color: 'var(--success)' }}><span className="pdot" style={{ background: 'var(--success)' }} />Godkendt</span>
              </div>
              <div className="mrow">
                <span className="av" style={{ background: 'var(--info-bg)', color: 'var(--info)' }}>CH</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--ink-900)' }}>Camilla Holt</div>
                  <div className="mono" style={{ fontSize: 12, color: 'var(--text-muted)' }}>30,0 t</div>
                </div>
                <span className="pill" style={{ background: 'var(--success-bg)', color: 'var(--success)' }}><span className="pdot" style={{ background: 'var(--success)' }} />Godkendt</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 4px 0' }}>
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>6 uger afventer</span>
                <span className="btn btn-primary" style={{ padding: '8px 14px', fontSize: 13 }}>Godkend alle</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="trust wrap">
        <div className="label">Brugt af danske SMV&apos;er</div>
        <div className="logos">
          {TRUST_LOGOS.map((name) => <span key={name}>{name}</span>)}
        </div>
      </div>

      <section className="block" id="features">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Funktioner</div>
            <h2>One system for everything HR</h2>
            <p>Et digitalt og brugervenligt HR-system, der skaber overblik, struktur og flow i rekruttering, onboarding og personaleledelse.</p>
          </div>
          <div className="features">
            {FEATURES.map((f) => (
              <div className="feature" key={f.title}>
                <div className="fico" style={{ background: f.bg, color: f.fg }}><Icon name={f.icon} className="ico" /></div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="quote-block">
            <div className="eyebrow" style={{ color: 'var(--green-200)' }}>Udtalelse</div>
            <p className="q">&quot;Systemet er en lifesaver. En platform der holder dig venligt i hånden og sørger for, at alt det nødvendige bliver håndteret nemt.&quot;</p>
            <div className="by">
              <span className="av" style={{ background: 'var(--green-600)', color: '#fff' }}>HP</span>
              <div>
                <div style={{ fontWeight: 700 }}>Henrik Pedersen</div>
                <div style={{ fontSize: 13, color: 'var(--green-200)' }}>Ejer & CEO, 365</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="block" id="pricing" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Priser</div>
            <h2>Start gratis</h2>
            <p>Opret en profil på 3 minutter, tilknyt din virksomhed, og få straks adgang til dit nye HR-værktøj.</p>
          </div>
          <div className="pricing">
            <div className="price">
              <div className="tier">Freemium</div>
              <div className="amt">0,-<span> /md</span></div>
              <ul>
                <li><Icon name="check" className="ico" /> Op til 10 medarbejdere</li>
                <li><Icon name="check" className="ico" /> 1 admin inkluderet</li>
                <li><Icon name="check" className="ico" /> Onboarding & medarbejdere</li>
              </ul>
              <a className="btn btn-secondary" href="#" style={{ marginTop: 'auto', justifyContent: 'center' }}>Vælg Freemium</a>
            </div>
            <div className="price feat">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="tier">Premium</div>
                <span className="pill" style={{ background: 'var(--green-50)', color: 'var(--green-700)' }}>Mest populær</span>
              </div>
              <div className="amt">500,-<span> /md</span></div>
              <ul>
                <li><Icon name="check" className="ico" /> Op til 100 medarbejdere</li>
                <li><Icon name="check" className="ico" /> 2 admins inkluderet</li>
                <li><Icon name="check" className="ico" /> Rekruttering & udstyr</li>
                <li><Icon name="check" className="ico" /> App til tidsregistrering</li>
              </ul>
              <a className="btn btn-primary" href="#" style={{ marginTop: 'auto', justifyContent: 'center' }}>Vælg Premium</a>
            </div>
            <div className="price">
              <div className="tier">Premium+</div>
              <div className="amt">2.500,-<span> /md</span></div>
              <ul>
                <li><Icon name="check" className="ico" /> Ubegrænset medarbejdere</li>
                <li><Icon name="check" className="ico" /> 3 admins inkluderet</li>
                <li><Icon name="check" className="ico" /> Prioriteret support</li>
              </ul>
              <a className="btn btn-secondary" href="#" style={{ marginTop: 'auto', justifyContent: 'center' }}>Kontakt os</a>
            </div>
          </div>
        </div>
      </section>

      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta">
            <h2>Klar til lidt mere ro i maven?</h2>
            <p>Test HR-systemet og app til tidsregistrering gratis i en måned.</p>
            <a className="btn btn-primary" href="#" style={{ marginTop: 24 }}>Opret gratis konto <Icon name="arrow-right" className="ico" /></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap cols">
          <div>
            <img src={logo} alt="Folka" height={28} />
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 14, maxWidth: '24em' }}>Den danske HR-platform der samler HR, tid og onboarding ét sted.</p>
          </div>
          <div>
            <h4>Platform</h4>
            <a href="#">Funktioner</a>
            <a href="#">Priser</a>
            <a href="#">Om Folka</a>
          </div>
          <div>
            <h4>Ressourcer</h4>
            <a href="#">Guides</a>
            <a href="#">Skabeloner</a>
            <a href="#">HR-ordbog</a>
          </div>
          <div>
            <h4>Sikkerhed</h4>
            <a href="#">Betingelser</a>
            <a href="#">Privatlivspolitik</a>
            <a href="#">GDPR</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
