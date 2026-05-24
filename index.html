<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>THOTH — The Divine Council</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cinzel:wght@400;600;700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<style>
  :root {
    --gold:        #C9913A;
    --gold-bright: #E8B84B;
    --gold-dim:    #7A5520;
    --gold-glow:   rgba(201,145,58,0.35);
    --ink:         #0A0804;
    --dark:        #100D07;
    --card:        #161009;
    --border:      #2A1F0E;
    --text:        #E8DABC;
    --text-dim:    #8C7A58;
    --papyrus:     #F2E8CC;
    --ra:          #E84B12;
    --ra-glow:     rgba(232,75,18,0.3);
    --seshat:      #2D9BB5;
    --seshat-glow: rgba(45,155,181,0.3);
    --isis:        #9B4BC9;
    --isis-glow:   rgba(155,75,201,0.3);
    --thoth:       #C9913A;
    --thoth-glow:  rgba(201,145,58,0.3);
    --anubis:      #2DC97A;
    --anubis-glow: rgba(45,201,122,0.3);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    background: var(--dark);
    color: var(--text);
    font-family: 'EB Garamond', serif;
    font-size: 16px;
    line-height: 1.7;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* ── Stars background ── */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      radial-gradient(1px 1px at 10% 15%, rgba(232,184,75,0.4) 0%, transparent 100%),
      radial-gradient(1px 1px at 30% 45%, rgba(232,184,75,0.3) 0%, transparent 100%),
      radial-gradient(1px 1px at 55% 25%, rgba(232,184,75,0.5) 0%, transparent 100%),
      radial-gradient(1px 1px at 75% 60%, rgba(232,184,75,0.3) 0%, transparent 100%),
      radial-gradient(1px 1px at 90% 10%, rgba(232,184,75,0.4) 0%, transparent 100%),
      radial-gradient(1px 1px at 20% 80%, rgba(232,184,75,0.3) 0%, transparent 100%),
      radial-gradient(1px 1px at 65% 85%, rgba(232,184,75,0.4) 0%, transparent 100%),
      radial-gradient(1px 1px at 40% 70%, rgba(232,184,75,0.2) 0%, transparent 100%),
      radial-gradient(2px 2px at 85% 35%, rgba(232,184,75,0.25) 0%, transparent 100%),
      radial-gradient(1px 1px at 5% 55%, rgba(232,184,75,0.35) 0%, transparent 100%);
    pointer-events: none;
    z-index: 0;
  }

  /* ── Subtle scanlines ── */
  body::after {
    content: '';
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,0,0,0.08) 2px,
      rgba(0,0,0,0.08) 4px
    );
    pointer-events: none;
    z-index: 0;
  }

  .container {
    max-width: 860px;
    margin: 0 auto;
    padding: 0 24px 80px;
    position: relative;
    z-index: 1;
  }

  /* ── Header ── */
  header {
    text-align: center;
    padding: 56px 0 36px;
    position: relative;
  }

  .eye-of-ra {
    width: 64px;
    height: 64px;
    margin: 0 auto 20px;
    position: relative;
  }

  .eye-of-ra svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 12px var(--gold));
    animation: eyePulse 4s ease-in-out infinite;
  }

  @keyframes eyePulse {
    0%, 100% { filter: drop-shadow(0 0 12px var(--gold)); }
    50%       { filter: drop-shadow(0 0 24px var(--gold-bright)); }
  }

  h1 {
    font-family: 'Cinzel Decorative', serif;
    font-size: clamp(2.4rem, 6vw, 3.8rem);
    font-weight: 700;
    letter-spacing: 0.25em;
    background: linear-gradient(180deg, var(--gold-bright) 0%, var(--gold) 60%, var(--gold-dim) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: none;
    line-height: 1.1;
  }

  .subtitle {
    font-family: 'Cinzel', serif;
    font-size: 0.82rem;
    letter-spacing: 0.45em;
    color: var(--gold-dim);
    margin-top: 10px;
    text-transform: uppercase;
  }

  .divider {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 28px 0;
    color: var(--gold-dim);
    font-size: 1.1rem;
  }

  .divider::before, .divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--gold-dim), transparent);
  }

  /* ── Council display ── */
  .council {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 36px;
    flex-wrap: wrap;
  }

  .god-badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    opacity: 0.4;
    transition: opacity 0.4s, transform 0.4s;
  }

  .god-badge.active {
    opacity: 1;
    transform: translateY(-4px);
  }

  .god-badge.done {
    opacity: 0.7;
  }

  .god-icon {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 2px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    transition: box-shadow 0.4s;
  }

  .god-badge.active .god-icon {
    animation: godPulse 1.5s ease-in-out infinite;
  }

  @keyframes godPulse {
    0%, 100% { box-shadow: 0 0 0 0 currentColor; }
    50%       { box-shadow: 0 0 16px 4px currentColor; }
  }

  .god-name {
    font-family: 'Cinzel', serif;
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .god-role {
    font-size: 0.6rem;
    color: var(--text-dim);
    letter-spacing: 0.1em;
  }

  /* God colors */
  .god-ra    { color: var(--ra);    border-color: var(--ra); }
  .god-seshat{ color: var(--seshat);border-color: var(--seshat); }
  .god-isis  { color: var(--isis);  border-color: var(--isis); }
  .god-thoth { color: var(--thoth); border-color: var(--thoth); }
  .god-anubis{ color: var(--anubis);border-color: var(--anubis); }

  /* ── Input area ── */
  .input-section {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 24px;
    margin-bottom: 32px;
    position: relative;
    overflow: hidden;
  }

  .input-section::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--gold), transparent);
  }

  .input-label {
    font-family: 'Cinzel', serif;
    font-size: 0.72rem;
    letter-spacing: 0.3em;
    color: var(--gold-dim);
    text-transform: uppercase;
    margin-bottom: 10px;
    display: block;
  }

  textarea {
    width: 100%;
    background: transparent;
    border: 1px solid var(--border);
    border-radius: 2px;
    color: var(--text);
    font-family: 'EB Garamond', serif;
    font-size: 1rem;
    line-height: 1.6;
    padding: 14px 16px;
    resize: vertical;
    min-height: 96px;
    outline: none;
    transition: border-color 0.3s;
  }

  textarea:focus {
    border-color: var(--gold-dim);
  }

  textarea::placeholder {
    color: var(--text-dim);
    font-style: italic;
  }

  .input-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
    gap: 16px;
    flex-wrap: wrap;
  }

  .options {
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
  }

  .toggle-label {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 0.8rem;
    color: var(--text-dim);
    cursor: pointer;
    font-family: 'Cinzel', serif;
    letter-spacing: 0.08em;
  }

  .toggle-label input[type="checkbox"] {
    accent-color: var(--gold);
    width: 14px;
    height: 14px;
    cursor: pointer;
  }

  .invoke-btn {
    background: linear-gradient(135deg, #3A2208, #1E1005);
    border: 1px solid var(--gold-dim);
    color: var(--gold-bright);
    font-family: 'Cinzel', serif;
    font-size: 0.82rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    padding: 12px 32px;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
  }

  .invoke-btn::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--gold-glow), transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .invoke-btn:hover:not(:disabled)::after { opacity: 1; }
  .invoke-btn:hover:not(:disabled) { border-color: var(--gold); box-shadow: 0 0 20px var(--gold-glow); }
  .invoke-btn:disabled { opacity: 0.4; cursor: not-allowed; }

  .clear-btn {
    background: transparent;
    border: 1px solid var(--border);
    color: var(--text-dim);
    font-family: 'Cinzel', serif;
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .clear-btn:hover { border-color: var(--text-dim); color: var(--text); }

  /* ── Agent panels ── */
  .panels {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .panel {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 4px;
    overflow: hidden;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.5s, transform 0.5s;
  }

  .panel.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .panel-header {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 20px;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
    user-select: none;
    position: relative;
  }

  .panel-header::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
  }

  .panel-ra     .panel-header::before { background: linear-gradient(to right, transparent, var(--ra), transparent); }
  .panel-seshat .panel-header::before { background: linear-gradient(to right, transparent, var(--seshat), transparent); }
  .panel-isis   .panel-header::before { background: linear-gradient(to right, transparent, var(--isis), transparent); }
  .panel-thoth  .panel-header::before { background: linear-gradient(to right, transparent, var(--thoth), transparent); }
  .panel-anubis .panel-header::before { background: linear-gradient(to right, transparent, var(--anubis), transparent); }
  .panel-final  .panel-header::before { background: linear-gradient(to right, var(--gold-dim), var(--gold-bright), var(--gold-dim)); }

  .panel-icon {
    font-size: 1.4rem;
    flex-shrink: 0;
  }

  .panel-meta {
    flex: 1;
  }

  .panel-title {
    font-family: 'Cinzel', serif;
    font-size: 0.82rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 2px;
  }

  .panel-ra     .panel-title { color: var(--ra); }
  .panel-seshat .panel-title { color: var(--seshat); }
  .panel-isis   .panel-title { color: var(--isis); }
  .panel-thoth  .panel-title { color: var(--thoth); }
  .panel-anubis .panel-title { color: var(--anubis); }
  .panel-final  .panel-title { color: var(--gold-bright); }

  .panel-desc {
    font-size: 0.75rem;
    color: var(--text-dim);
    letter-spacing: 0.05em;
  }

  .panel-status {
    font-size: 0.72rem;
    color: var(--text-dim);
    font-family: 'Cinzel', serif;
    letter-spacing: 0.1em;
    flex-shrink: 0;
  }

  .panel-chevron {
    color: var(--text-dim);
    font-size: 0.8rem;
    transition: transform 0.3s;
    flex-shrink: 0;
  }

  .panel.collapsed .panel-chevron { transform: rotate(-90deg); }

  .panel-body {
    padding: 20px 24px;
    overflow: hidden;
    transition: max-height 0.4s ease, padding 0.4s;
  }

  .panel.collapsed .panel-body {
    max-height: 0 !important;
    padding-top: 0;
    padding-bottom: 0;
  }

  /* ── Typing cursor ── */
  .typing::after {
    content: '▊';
    animation: blink 0.9s step-end infinite;
    color: var(--gold-dim);
    font-size: 0.85em;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }

  /* ── Markdown output ── */
  .md-output { font-family: 'EB Garamond', serif; font-size: 1rem; }
  .md-output h1, .md-output h2, .md-output h3 {
    font-family: 'Cinzel', serif;
    color: var(--gold);
    margin: 1.2em 0 0.5em;
    letter-spacing: 0.08em;
  }
  .md-output h1 { font-size: 1.3rem; }
  .md-output h2 { font-size: 1.1rem; }
  .md-output h3 { font-size: 0.95rem; }
  .md-output p { margin-bottom: 0.9em; }
  .md-output ul, .md-output ol { padding-left: 1.5em; margin-bottom: 0.9em; }
  .md-output li { margin-bottom: 0.3em; }
  .md-output strong { color: var(--gold); font-weight: 600; }
  .md-output em { color: var(--papyrus); font-style: italic; }
  .md-output code {
    background: rgba(201,145,58,0.1);
    border: 1px solid var(--border);
    padding: 2px 6px;
    border-radius: 2px;
    font-size: 0.85em;
    font-family: monospace;
  }
  .md-output hr {
    border: none;
    border-top: 1px solid var(--border);
    margin: 1.2em 0;
  }
  .md-output blockquote {
    border-left: 2px solid var(--gold-dim);
    padding-left: 16px;
    color: var(--text-dim);
    font-style: italic;
    margin: 0.9em 0;
  }

  /* ── Spinner ── */
  .spinner {
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 2px solid rgba(201,145,58,0.2);
    border-top-color: var(--gold);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    vertical-align: middle;
    margin-right: 8px;
  }

  @keyframes spin { to { transform: rotate(360deg); } }

  /* ── Copy button ── */
  .copy-btn {
    background: transparent;
    border: 1px solid var(--border);
    color: var(--text-dim);
    font-family: 'Cinzel', serif;
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    padding: 6px 14px;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s;
    margin-top: 16px;
  }

  .copy-btn:hover { border-color: var(--gold-dim); color: var(--gold); }

  /* ── Final panel special ── */
  .panel-final {
    border-color: var(--gold-dim);
    box-shadow: 0 0 40px rgba(201,145,58,0.08);
  }

  /* ── Hieroglyph decoration ── */
  .hiero {
    font-size: 1.4rem;
    opacity: 0.15;
    letter-spacing: 0.15em;
  }

  /* ── Progress bar ── */
  .progress-bar {
    height: 2px;
    background: var(--border);
    border-radius: 1px;
    margin-bottom: 24px;
    overflow: hidden;
    display: none;
  }

  .progress-bar.show { display: block; }

  .progress-fill {
    height: 100%;
    background: linear-gradient(to right, var(--gold-dim), var(--gold-bright));
    transition: width 0.6s ease;
    width: 0%;
  }

  /* ── Responsive ── */
  @media (max-width: 560px) {
    .council { gap: 12px; }
    .god-badge { display: none; }
    .god-badge:nth-child(-n+3) { display: flex; }
    textarea { min-height: 80px; }
  }

  /* ── Scroll reveal ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
</style>
</head>
<body>

<div class="container">

  <!-- Header -->
  <header>
    <div class="eye-of-ra">
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Eye outline -->
        <ellipse cx="32" cy="32" rx="28" ry="14" stroke="#C9913A" stroke-width="1.5" fill="none"/>
        <!-- Pupil -->
        <circle cx="32" cy="32" r="8" fill="#C9913A" opacity="0.9"/>
        <circle cx="32" cy="32" r="4" fill="#0A0804"/>
        <!-- Kohl lines -->
        <path d="M4 32 Q16 38 32 32 Q16 26 4 32" fill="#C9913A" opacity="0.3"/>
        <path d="M60 32 Q48 26 32 32 Q48 38 60 32" fill="#C9913A" opacity="0.3"/>
        <!-- Decorative lines below eye -->
        <line x1="32" y1="46" x2="32" y2="58" stroke="#C9913A" stroke-width="1.5" opacity="0.6"/>
        <line x1="28" y1="50" x2="24" y2="56" stroke="#C9913A" stroke-width="1" opacity="0.5"/>
      </svg>
    </div>

    <h1>THOTH</h1>
    <div class="subtitle">The Divine Council · Multi-Agent Intelligence</div>

    <div class="divider">
      <span class="hiero">𓂀 𓆓 𓇯 𓅃 𓀭</span>
    </div>
  </header>

  <!-- Council badges -->
  <div class="council" id="council">
    <div class="god-badge" id="badge-ra">
      <div class="god-icon god-ra">☀️</div>
      <div class="god-name" style="color:var(--ra)">Ra</div>
      <div class="god-role">Commander</div>
    </div>
    <div class="god-badge" id="badge-seshat">
      <div class="god-icon god-seshat">📜</div>
      <div class="god-name" style="color:var(--seshat)">Seshat</div>
      <div class="god-role">Analyst</div>
    </div>
    <div class="god-badge" id="badge-isis">
      <div class="god-icon god-isis">⚡</div>
      <div class="god-name" style="color:var(--isis)">Isis</div>
      <div class="god-role">Strategist</div>
    </div>
    <div class="god-badge" id="badge-thoth">
      <div class="god-icon god-thoth">🪶</div>
      <div class="god-name" style="color:var(--thoth)">Thoth</div>
      <div class="god-role">Writer</div>
    </div>
    <div class="god-badge" id="badge-anubis">
      <div class="god-icon god-anubis">⚖️</div>
      <div class="god-name" style="color:var(--anubis)">Anubis</div>
      <div class="god-role">Critic</div>
    </div>
  </div>

  <!-- Progress bar -->
  <div class="progress-bar" id="progressBar">
    <div class="progress-fill" id="progressFill"></div>
  </div>

  <!-- Input -->
  <div class="input-section">
    <label class="input-label" for="taskInput">Invoke the Council — State your task</label>
    <textarea
      id="taskInput"
      placeholder="e.g. Write a strategic analysis of AI's impact on the music industry…"
      rows="4"
    ></textarea>
    <div class="input-footer">
      <div class="options">
        <label class="toggle-label">
          <input type="checkbox" id="webSearch" />
          Web Search
        </label>
        <label class="toggle-label">
          <input type="checkbox" id="deepRevise" checked />
          Deep Revision
        </label>
      </div>
      <div style="display:flex;gap:10px;">
        <button class="clear-btn" onclick="clearAll()">Clear</button>
        <button class="invoke-btn" id="invokeBtn" onclick="invoke()">⚡ Invoke</button>
      </div>
    </div>
  </div>

  <!-- Panels -->
  <div class="panels" id="panels"></div>

</div>

<script>
// ──────────────────────────────────────────────
// CONFIG
// ──────────────────────────────────────────────
const MODEL = 'claude-sonnet-4-20250514';
const MAX_TOKENS = 1500;

const AGENTS = [
  {
    id: 'ra',
    name: 'Ra — The Commander',
    role: 'Commander · Strategic Direction',
    icon: '☀️',
    badge: 'badge-ra',
    colorVar: '--ra',
    panelClass: 'panel-ra',
    system: `You are Ra, the Sun God and Supreme Commander of the Divine Council. Your role is to receive a task and lay out the strategic mandate for the council.

Analyze the task and provide:
1. **The Decree** — What exactly needs to be accomplished
2. **The Challenge** — Key complexities or difficulties to navigate
3. **The Council's Mandate** — How Seshat (analysis), Isis (strategy), and Thoth (writing) should each approach this

Be authoritative, luminous, and focused. 4–6 sentences total. No fluff.`,
  },
  {
    id: 'seshat',
    name: 'Seshat — The Analyst',
    role: 'Goddess of Records · Deep Analysis',
    icon: '📜',
    badge: 'badge-seshat',
    colorVar: '--seshat',
    panelClass: 'panel-seshat',
    system: `You are Seshat, Goddess of Knowledge, Writing, and Records. You are the keeper of all information, the measurer of time, the recorder of truth.

Your task: Provide a thorough analytical breakdown of the topic. Go deep:
- Key facts, figures, context, and history
- Major players, forces, or dynamics at work
- Hidden patterns, contradictions, or tensions
- The intellectual terrain Thoth must navigate

Be precise, structured, and comprehensive. Use markdown headers and bullet points. This is the factual foundation that the rest of the council will build upon.`,
  },
  {
    id: 'isis',
    name: 'Isis — The Strategist',
    role: 'Goddess of Magic · Strategy & Structure',
    icon: '⚡',
    badge: 'badge-isis',
    colorVar: '--isis',
    panelClass: 'panel-isis',
    system: `You are Isis, Goddess of Magic, Strategy, and Power. You see what others cannot — the hidden angles, the powerful frames, the structural decisions that determine success.

Your task: Given the analytical foundation, develop the strategic blueprint for this output:
- The most powerful **angle** or frame to take
- The **structure** Thoth should use (how to open, develop, close)
- The **tone** and voice that will be most effective
- What to **emphasize** and what to leave out
- Any creative moves that would make this exceptional

Be bold. Strategic. Give Thoth a clear path to excellence.`,
  },
  {
    id: 'thoth',
    name: 'Thoth — The Writer',
    role: 'God of Wisdom · Primary Output',
    icon: '🪶',
    badge: 'badge-thoth',
    colorVar: '--thoth',
    panelClass: 'panel-thoth',
    system: `You are Thoth, God of Writing, Wisdom, and Knowledge. You are the divine scribe, the master of words, the one who gives form to truth.

Seshat has provided deep analysis. Isis has provided strategic direction. Now you must synthesize everything into a masterful, polished piece of writing that fulfills the original task.

Write with precision, depth, and elegance. Use the best structure. Cover what matters. Make every sentence count. This is the primary deliverable — make it exceptional.`,
  },
  {
    id: 'anubis',
    name: 'Anubis — The Critic',
    role: 'God of Judgment · Critical Review',
    icon: '⚖️',
    badge: 'badge-anubis',
    colorVar: '--anubis',
    panelClass: 'panel-anubis',
    system: `You are Anubis, God of Judgment and the Underworld. You weigh all things against the Feather of Ma'at — truth and perfection.

Your task: Critically examine Thoth's output and render judgment. Be exacting, honest, and constructive:
- **Verdict**: Overall quality assessment (1–10 scale with brief justification)
- **Weaknesses**: What falls short? What's missing, unclear, or weak?
- **Logical gaps**: Any flawed reasoning, unsupported claims, or missed nuances?
- **Directives for revision**: Specific, actionable improvements Thoth must make

Do not be gentle. Ma'at demands truth. But be constructive — the goal is to forge something worthy.`,
  },
  {
    id: 'thoth-final',
    name: 'Thoth — Revised Scroll',
    role: 'God of Wisdom · Final Masterwork',
    icon: '📿',
    badge: 'badge-thoth',
    colorVar: '--thoth',
    panelClass: 'panel-final',
    system: `You are Thoth, God of Writing and Wisdom. Anubis has judged your work and delivered his verdict. You must now rise to the occasion.

Revise and significantly improve your previous output, incorporating every valid critique from Anubis. Fix weaknesses. Fill gaps. Sharpen the language. Strengthen the structure. Elevate the insight.

This is the final scroll — the sacred text that will endure. Make it worthy of being written in the Hall of Records for eternity. This is your masterwork.`,
  },
];

// ──────────────────────────────────────────────
// STATE
// ──────────────────────────────────────────────
let isRunning = false;
let contextHistory = {}; // store outputs by agent id

// ──────────────────────────────────────────────
// UTILS
// ──────────────────────────────────────────────
function setProgress(pct) {
  document.getElementById('progressFill').style.width = pct + '%';
}

function activateBadge(id, done = false) {
  document.querySelectorAll('.god-badge').forEach(b => b.classList.remove('active'));
  const badge = document.getElementById(id);
  if (badge) {
    badge.classList.remove('done');
    if (done) {
      badge.classList.add('done');
    } else {
      badge.classList.add('active');
    }
  }
}

function doneBadge(id) {
  const badge = document.getElementById(id);
  if (badge) {
    badge.classList.remove('active');
    badge.classList.add('done');
  }
}

function createPanel(agent, index) {
  const panel = document.createElement('div');
  panel.className = `panel ${agent.panelClass}`;
  panel.id = `panel-${agent.id}`;

  panel.innerHTML = `
    <div class="panel-header" onclick="togglePanel('${agent.id}')">
      <span class="panel-icon">${agent.icon}</span>
      <div class="panel-meta">
        <div class="panel-title">${agent.name}</div>
        <div class="panel-desc">${agent.role}</div>
      </div>
      <span class="panel-status" id="status-${agent.id}"><span class="spinner"></span>Invoking…</span>
      <span class="panel-chevron">▾</span>
    </div>
    <div class="panel-body" id="body-${agent.id}">
      <div class="md-output typing" id="output-${agent.id}"></div>
    </div>
  `;

  document.getElementById('panels').appendChild(panel);

  // Animate in
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      panel.classList.add('visible');
    });
  });

  return panel;
}

function setStatus(agentId, text, spinner = false) {
  const el = document.getElementById(`status-${agentId}`);
  if (!el) return;
  el.innerHTML = spinner ? `<span class="spinner"></span>${text}` : text;
}

function togglePanel(id) {
  const panel = document.getElementById(`panel-${id}`);
  if (panel) panel.classList.toggle('collapsed');
}

function renderMarkdown(el, text) {
  el.innerHTML = marked.parse(text);
}

// ──────────────────────────────────────────────
// API CALL
// ──────────────────────────────────────────────
async function callAgent(agent, messages) {
  const useWebSearch = document.getElementById('webSearch').checked;

  // Only give web search to Seshat (researcher) and Ra (commander)
  const webSearchAgents = ['ra', 'seshat'];
  const tools = (useWebSearch && webSearchAgents.includes(agent.id))
    ? [{ type: 'web_search_20250305', name: 'web_search' }]
    : undefined;

  const body = {
    model: MODEL,
    max_tokens: MAX_TOKENS,
    system: agent.system,
    messages: messages,
    ...(tools ? { tools } : {}),
  };

  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.error?.message || `HTTP ${response.status}`);
  }

  const data = await response.json();

  // Extract text from all content blocks (handles tool_use + text blocks)
  const text = (data.content || [])
    .filter(b => b.type === 'text')
    .map(b => b.text)
    .join('\n\n');

  return text || '';
}

// ──────────────────────────────────────────────
// STREAM SIMULATION (typewriter)
// ──────────────────────────────────────────────
async function typewrite(el, text, speed = 6) {
  el.textContent = '';
  el.classList.add('typing');

  const chunkSize = 4;
  let i = 0;
  while (i < text.length) {
    el.textContent += text.slice(i, i + chunkSize);
    el.scrollIntoView({ behavior: 'smooth', block: 'end' });
    i += chunkSize;
    await new Promise(r => setTimeout(r, speed));
  }

  el.classList.remove('typing');
  renderMarkdown(el, text);
}

// ──────────────────────────────────────────────
// MAIN INVOKE
// ──────────────────────────────────────────────
async function invoke() {
  if (isRunning) return;

  const task = document.getElementById('taskInput').value.trim();
  if (!task) {
    document.getElementById('taskInput').focus();
    return;
  }

  const deepRevise = document.getElementById('deepRevise').checked;

  isRunning = true;
  contextHistory = {};

  document.getElementById('invokeBtn').disabled = true;
  document.getElementById('panels').innerHTML = '';
  document.getElementById('progressBar').classList.add('show');
  setProgress(5);

  // Deactivate all badges
  document.querySelectorAll('.god-badge').forEach(b => {
    b.classList.remove('active', 'done');
  });

  const steps = deepRevise
    ? ['ra', 'seshat', 'isis', 'thoth', 'anubis', 'thoth-final']
    : ['ra', 'seshat', 'isis', 'thoth'];

  const progressStep = 90 / steps.length;

  try {
    for (let si = 0; si < steps.length; si++) {
      const agentId = steps[si];
      const agent = AGENTS.find(a => a.id === agentId);
      const panel = createPanel(agent, si);
      const outputEl = document.getElementById(`output-${agentId}`);

      activateBadge(agent.badge);
      setStatus(agentId, 'Invoking…', true);

      // Build messages for this agent
      let messages = [];

      if (agentId === 'ra') {
        messages = [{ role: 'user', content: `Task: ${task}` }];
      } else if (agentId === 'seshat') {
        messages = [
          { role: 'user', content: `Task: ${task}\n\nRa's decree:\n${contextHistory['ra']}` },
        ];
      } else if (agentId === 'isis') {
        messages = [
          {
            role: 'user',
            content: `Task: ${task}\n\nRa's decree:\n${contextHistory['ra']}\n\nSeshat's analysis:\n${contextHistory['seshat']}`,
          },
        ];
      } else if (agentId === 'thoth') {
        messages = [
          {
            role: 'user',
            content: `Original task: ${task}\n\nRa's mandate:\n${contextHistory['ra']}\n\nSeshat's analysis:\n${contextHistory['seshat']}\n\nIsis's strategy:\n${contextHistory['isis']}\n\nNow write the final output.`,
          },
        ];
      } else if (agentId === 'anubis') {
        messages = [
          {
            role: 'user',
            content: `Original task: ${task}\n\nThoth's output:\n${contextHistory['thoth']}\n\nJudge this work with the Feather of Ma'at.`,
          },
        ];
      } else if (agentId === 'thoth-final') {
        messages = [
          {
            role: 'user',
            content: `Original task: ${task}\n\nYour previous output:\n${contextHistory['thoth']}\n\nAnubis's judgment:\n${contextHistory['anubis']}\n\nRevise and deliver the final masterwork.`,
          },
        ];
      }

      try {
        const result = await callAgent(agent, messages);
        contextHistory[agentId] = result;

        setStatus(agentId, '✓ Complete');
        await typewrite(outputEl, result, 4);

        // Add copy button
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = '⊕ Copy Text';
        copyBtn.onclick = () => {
          navigator.clipboard.writeText(result);
          copyBtn.textContent = '✓ Copied';
          setTimeout(() => (copyBtn.textContent = '⊕ Copy Text'), 2000);
        };
        document.getElementById(`body-${agentId}`).appendChild(copyBtn);

        // Collapse non-final panels after done
        if (agentId !== 'thoth-final' && agentId !== 'thoth') {
          setTimeout(() => {
            const p = document.getElementById(`panel-${agentId}`);
            if (p && si < steps.length - 1) p.classList.add('collapsed');
          }, 1200);
        }

        doneBadge(agent.badge);
        setProgress(5 + progressStep * (si + 1));

      } catch (err) {
        setStatus(agentId, '✗ Error');
        outputEl.classList.remove('typing');
        outputEl.textContent = `Error: ${err.message}`;
        outputEl.style.color = '#e84b12';
        console.error(`[${agentId}]`, err);
      }
    }

    setProgress(100);

  } finally {
    isRunning = false;
    document.getElementById('invokeBtn').disabled = false;
    document.querySelectorAll('.god-badge').forEach(b => b.classList.remove('active'));
  }
}

function clearAll() {
  if (isRunning) return;
  document.getElementById('panels').innerHTML = '';
  document.getElementById('taskInput').value = '';
  document.getElementById('progressBar').classList.remove('show');
  setProgress(0);
  contextHistory = {};
  document.querySelectorAll('.god-badge').forEach(b => b.classList.remove('active', 'done'));
}

// Enter to submit (Ctrl+Enter or Cmd+Enter)
document.getElementById('taskInput').addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') invoke();
});
</script>
</body>
</html>
