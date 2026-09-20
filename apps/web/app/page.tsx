"use client";

import { FormEvent, useState } from "react";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const joinWaitlist = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top">stride<span>.</span></a>
        <div className="nav-links"><a href="#features">Features</a><a href="#how-it-works">How it works</a></div>
        <a className="button button-small" href="#waitlist">Join waitlist <Arrow /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Fitness that fits real life</p>
          <h1>Your routine,<br /><em>in motion.</em></h1>
          <p className="lede">One calm place for your training, runs, meals, and goals—so every small choice moves you forward.</p>
          <a className="button button-primary" href="#waitlist">Start your stride <Arrow /></a>
          <div className="social-proof"><div className="faces"><i>J</i><i>M</i><i>A</i><i>S</i></div><span>Built for people<br />who keep showing up.</span></div>
        </div>
        <div className="phone-wrap" aria-label="Stride mobile app preview">
          <div className="sun"></div><div className="dot-grid"></div>
          <div className="phone">
            <div className="phone-top"><span>9:41</span><span>● ● ●</span></div>
            <p className="phone-greeting">Good morning, Maya</p><h2>Let&apos;s make today count.</h2>
            <div className="progress-card"><div className="ring"><b>68</b><small>%</small></div><div><p>Daily movement</p><strong>6,824 <small>/ 10,000 steps</small></strong><div className="meter"><i></i></div></div></div>
            <div className="run-card"><div className="run-icon">⌁</div><div><p>Latest run <span>STRAVA</span></p><strong>Morning jog</strong><small>5.2 km · 31 min</small></div><b>412<br /><small>kcal</small></b></div>
            <div className="mini-cards"><div><span>◎</span><b>1,420</b><small>calories left</small></div><div><span>◒</span><b>3 / 4</b><small>workouts this week</small></div></div>
            <div className="tabbar"><b>⌂</b><span>◌</span><span>＋</span><span>◫</span><span>☺</span></div>
          </div>
        </div>
      </section>

      <section className="marquee"><span>Move with purpose</span><b>✦</b><span>Eat with ease</span><b>✦</b><span>Progress with clarity</span><b>✦</b><span>Move with purpose</span></section>

      <section className="features" id="features"><p className="eyebrow">Everything working together</p><h2>Less tracking.<br /><em>More living.</em></h2><div className="feature-grid">
        <article className="feature feature-dark"><div className="feature-number">01</div><h3>Train for the day<br />you actually have.</h3><p>Flexible routines that meet you where you are, then make it easy to show up again tomorrow.</p><div className="workout-preview"><span>Today&apos;s focus</span><b>Full body strength</b><small>35 min · 6 exercises</small><i>Start workout →</i></div></article>
        <article className="feature feature-lime"><div className="feature-number">02</div><h3>Your runs, already here.</h3><p>Connect Strava once. We&apos;ll turn every mile into a clearer picture of your progress.</p><div className="route"><span>↗</span><i></i><i></i><i></i><b>5.2 km</b></div></article>
        <article className="feature feature-cream"><div className="feature-number">03</div><h3>Know what&apos;s on your plate.</h3><p>Scan, log, and discover meals that make your targets feel attainable—not restrictive.</p><div className="meal"><span>▣</span><div><b>Chicken harvest bowl</b><small>486 kcal · 38g protein</small></div><i>+</i></div></article>
      </div></section>

      <section className="how" id="how-it-works"><div><p className="eyebrow">A daily practice</p><h2>Small steps.<br /><em>Real momentum.</em></h2></div><ol><li><b>01</b><div><h3>Set a direction</h3><p>Tell Stride what you&apos;re working toward. We&apos;ll turn the big picture into a plan for today.</p></div></li><li><b>02</b><div><h3>Make it yours</h3><p>Bring in your runs, save your favorite meals, and build a rhythm you can sustain.</p></div></li><li><b>03</b><div><h3>Keep moving</h3><p>See the wins that add up—without getting lost in the numbers.</p></div></li></ol></section>

      <section className="cta" id="waitlist"><p className="eyebrow">Coming soon</p><h2>Ready when<br />you are<span>.</span></h2><p>Join the early list and be first to take your next step.</p>{submitted ? <div className="success">You&apos;re on the list. See you soon ✦</div> : <form onSubmit={joinWaitlist}><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required /><button className="button button-primary" type="submit">Join waitlist <Arrow /></button></form>}</section>
      <footer><a className="brand" href="#top">stride<span>.</span></a><span>© 2026 Stride. Built for the long run.</span><div><a href="#top">Instagram</a><a href="#top">Contact</a></div></footer>
    </main>
  );
}
