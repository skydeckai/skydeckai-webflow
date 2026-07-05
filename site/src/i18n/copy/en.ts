/**
 * All new-design page copy (Home + Agent Pods), one object per locale.
 * Locale files (fr.ts, ja.ts, …) export the same shape translated — keep product
 * names, commands, and mono chips (Claude Code, OpenClaw, claude-code, ⎇ main,
 * /workspace, ~/.claude) untranslated. Headline `italic` is the one
 * accent-italic phrase (Mado §3).
 */
export interface UseCaseCopy {
  anchor: string;
  tab: string;
  icon: string;
  title: string;
  body: string;
  points: { h: string; d: string }[];
}

export interface SiteCopy {
  home: {
    metaTitle: string;
    metaDescription: string;
    badge: string;
    h1Pre: string;
    h1Italic: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    heroCaptions: [string, string, string];
    marqueeLabel: string;
    pillarsEyebrow: string;
    pillarsH2: string;
    pillars: { num: string; title: string; body: string }[];
    productsEyebrow: string;
    productsH2: string;
    genstudio: { eyebrow: string; h3: string; body: string; tags: string[] };
    control: { eyebrow: string; h3: string; body: string; tags: string[] };
    pods: { eyebrow: string; badge: string; h3: string; body: string; cta: string };
    ctaH2: string;
    ctaBody: string;
    ctaPrimary2: string;
    ctaSecondary2: string;
  };
  pods: {
    metaTitle: string;
    metaDescription: string;
    badge: string;
    h1Pre: string;
    h1Italic: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    launchEyebrow: string;
    launchH2: string;
    guideEyebrow: string;
    guideH2: string;
    guide: { icon: string; iconBg: string; title: string; body: string }[];
    useCasesEyebrow: string;
    useCasesH2: string;
    useCases: UseCaseCopy[];
    spendEyebrow: string;
    spendH2: string;
    spendBody: string;
    spend: { icon: string; title: string; body: string }[];
    overseeTitle: string;
    overseeSub: string;
    overseeCols: [string, string, string, string, string];
    statusWords: { running: string; building: string; sleeping: string; stopped: string };
    ctaH2: string;
    ctaBody: string;
    ctaPrimary2: string;
    ctaSecondary2: string;
  };
}

export const copy: SiteCopy = {
  home: {
    metaTitle: "SkyDeck.ai — A team of always-on AI agents your business can actually control",
    metaDescription:
      "Run Claude Code, OpenClaw and more in persistent Agent Pods — teammates collaborating live in the same terminals, every run governed by SkyDeck. Secure, business-first, no vendor lock-in.",
    badge: "Multiple always-on agents · governed & collaborative",
    h1Pre: "A team of always-on AI agents\nyour business can ",
    h1Italic: "actually control.",
    sub: "Run Claude Code, OpenClaw and more in persistent pods — many agents at once, your teammates collaborating live in the same terminals, every run governed by SkyDeck. It's the workflow your engineers already love, made shared, secure, and business-managed.",
    ctaPrimary: "Create Free Workspace",
    ctaSecondary: "Meet Agent Pods →",
    heroCaptions: [
      "3 Claude Code & OpenClaw agents running",
      "3 teammates live in one terminal",
      "a web preview into the pod",
    ],
    marqueeLabel: "No vendor lock-in — bring every model",
    pillarsEyebrow: "Three Pillars for Success",
    pillarsH2: "Secure. Collaborate. Customize.",
    pillars: [
      {
        num: "1",
        title: "Security First",
        body: "Robust management and security controls put you in the driver's seat. Encryption in motion and at rest, SSO, DLP and RBAC — admins govern everything from the Control Center.",
      },
      {
        num: "2",
        title: "Built for Teams",
        body: "GenStudio gives every member a workspace to build AI workflows, plus collaboration tools to invite colleagues into conversations. Work together, learn together, ship together.",
      },
      {
        num: "3",
        title: "Customize & Automate",
        body: "Access any LLM, distribute smart prompts, tools and agents to approved teams, and automate repetitive work with routines — all from one intuitive interface.",
      },
    ],
    productsEyebrow: "One platform, three surfaces",
    productsH2: "Create. Curate. Control.",
    genstudio: {
      eyebrow: "GenStudio · Create",
      h3: "A creative studio for every team",
      body: "Build generative-AI workflows in a familiar chat interface. Invite colleagues into any conversation, share prompts and agents, then schedule and automate the work.",
      tags: ["No lock-in", "Team chat", "Prompts & agents", "Schedule & automate", "Slack"],
    },
    control: {
      eyebrow: "Control Center · Curate & Control",
      h3: "Deploy AI safely across the business",
      body: "Curate which teams reach which models, tools, and agents. Encryption in motion and at rest, SSO, DLP, RBAC, and now spend guardrails for running pods.",
      tags: ["SSO", "DLP", "RBAC", "Encryption", "Spend guardrails", "HuggingFace"],
    },
    pods: {
      eyebrow: "Agent Pods",
      badge: "NEW",
      h3: "Persistent workspaces where agents run",
      body: "Launch a cloud pod, drop in Claude Code or OpenClaw, and let it work around the clock. Operate agents together, deploy them to your whole team — all under Control Center spend guardrails.",
      cta: "Explore Agent Pods →",
    },
    ctaH2: "More power. Less risk.",
    ctaBody: "Spin up a free workspace for your team today — no credit card, no lock-in.",
    ctaPrimary2: "Create Free Workspace",
    ctaSecondary2: "Contact Sales",
  },
  pods: {
    metaTitle: "Agent Pods — persistent cloud workspaces where your agents run | SkyDeck.ai",
    metaDescription:
      "Launch a pod, drop in Claude Code or OpenClaw, and let it work around the clock. Operate agents together and roll them out to your whole team — with spend guardrails baked in.",
    badge: "AGENT PODS · GenStudio × Control Center",
    h1Pre: "Persistent cloud workspaces\nwhere your agents ",
    h1Italic: "run the show.",
    sub: "Launch a pod, drop in Claude Code or OpenClaw, and let it work around the clock. Operate agents together and roll them out to your whole team — with spend guardrails baked in.",
    ctaPrimary: "Launch a Pod",
    ctaSecondary: "Read the guide",
    launchEyebrow: "Step one",
    launchH2: "Spin up a pod from a template",
    guideEyebrow: "Anatomy of a pod",
    guideH2: "Launch it once. It keeps working.",
    guide: [
      {
        icon: "🚀",
        iconBg: "#ECEBF3",
        title: "Launch in a click",
        body: "Spin up a pod from GenStudio and choose your agent — Claude Code, OpenClaw, or a custom image.",
      },
      {
        icon: "🖥️",
        iconBg: "#E4E6F0",
        title: "The main terminal survives your disconnects",
        body: "Your primary session keeps running even when you close the tab or your laptop. Extra tabs get a ~45-second grace window before they release.",
      },
      {
        icon: "🌐",
        iconBg: "#E7E5EE",
        title: "Built-in browser pane",
        body: "Preview web apps and let agents drive a real browser on the pod's exposed ports, right beside the terminal.",
      },
      {
        icon: "💤",
        iconBg: "#ECEBF3",
        title: "Sleep & resume",
        body: "Idle pods auto-sleep to save spend and resume exactly where they left off — no lost state.",
      },
      {
        icon: "💾",
        iconBg: "#E4E6F0",
        title: "What persists",
        body: "Everything in /workspace persists across sessions — plus ~/.claude in Claude Code pods, so credentials and history carry over.",
      },
      {
        icon: "🔗",
        iconBg: "#E7E5EE",
        title: "Share & split costs",
        body: "Invite teammates into a pod and see exactly what each run costs, attributed per member and per group.",
      },
    ],
    useCasesEyebrow: "What teams do with Pods",
    useCasesH2: "Three ways to put agents to work",
    useCases: [
      {
        anchor: "run-around-the-clock",
        tab: "Run around the clock",
        icon: "🌙",
        title: "Run AI agents around the clock",
        body: "Kick off a long-running Claude Code session or a detached OpenClaw gateway and let it work while you sleep — auto-sleep and budgets keep it economical.",
        points: [
          { h: "Detached sessions", d: "Claude Code runs in the main terminal that outlives your connection." },
          { h: "OpenClaw gateway", d: "Run openclaw as a detached gateway service other tools can call." },
          { h: "Auto-sleep × budget", d: "Idle pods sleep automatically; spend never runs past your cap." },
          { h: "Resume anytime", d: "Wake the pod and pick up exactly where the agent left off." },
        ],
      },
      {
        anchor: "operate-together",
        tab: "Operate together",
        icon: "🤝",
        title: "Operate an agent together",
        body: "One Driver holds the keyboard at a time while the rest of the team observes live. Hand off control around the globe for true follow-the-sun operation.",
        points: [
          { h: "One Driver at a time", d: "Exactly one person controls the agent — no collisions." },
          { h: "Request / give control", d: "Pass the wheel in a click when it's someone else's turn." },
          { h: "Read-only observers", d: "Teammates watch every keystroke without interfering." },
          { h: "Follow-the-sun", d: "Hand off across time zones to keep an agent moving 24/7." },
        ],
      },
      {
        anchor: "deploy-to-your-team",
        tab: "Deploy to your team",
        icon: "🚀",
        title: "Deploy agents to your whole team",
        body: "Roll out a system pod to everyone, publish custom pods for specific groups, and keep the whole fleet under spend guardrails and live oversight.",
        points: [
          { h: "System pod rollout", d: "Ship a standard, ready-to-run pod to every member." },
          { h: "Custom pods", d: "Build tailored images and publish them to the teams that need them." },
          { h: "Group scoping", d: "Scope which groups can launch which pods and agents." },
          { h: "Fleet oversight", d: "See every running pod and enforce guardrails from one screen." },
        ],
      },
    ],
    spendEyebrow: "Control Center · Pods",
    spendH2: "Oversight without babysitting",
    spendBody:
      "Set a monthly budget and let SkyDeck enforce it. Cap spend per member and per group, limit concurrency, and auto-sleep idle pods — while you watch every running agent from one screen.",
    spend: [
      { icon: "💰", title: "Monthly budget", body: "Set a workspace-wide cap and choose to block, warn, or allow overage when it's hit." },
      { icon: "👤", title: "Per-member caps", body: "Give each person a spend ceiling so no single pod can run away with the budget." },
      { icon: "👥", title: "Per-group caps", body: "Allocate budget by team or group and track burn against each allocation." },
      { icon: "⚡", title: "Concurrent limit", body: "Cap how many pods can run at once to keep load and cost predictable." },
      { icon: "💤", title: "Idle auto-sleep", body: "Automatically sleep pods after a period of inactivity, then resume on demand." },
      { icon: "👁️", title: "Oversee running pods", body: "Live view of every active pod, its driver, agent, and current spend." },
    ],
    overseeTitle: "Oversee running pods",
    overseeSub: "Live view across every team",
    overseeCols: ["Pod", "Agent", "Driver", "Status", "Session"],
    statusWords: { running: "running", building: "building", sleeping: "sleeping", stopped: "stopped" },
    ctaH2: "Put an agent to work tonight.",
    ctaBody: "Launch your first pod in a free workspace. Governed by Control Center from the very first run.",
    ctaPrimary2: "Launch a Pod",
    ctaSecondary2: "← Back to platform",
  },
};

export default copy;
