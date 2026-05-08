# Principal AI — Antler Deck (16 Slides)

## 1. Title
**Principal AI**
The collaboration primitive for agent-built software

AI can generate code faster than teams can understand it.
We turn each proposed change into a shared artifact everyone can grasp.
Start with lightweight collaboration. Expand into verification.

## 2. Market Shift
**Software moved to agents. Collaboration did not.**

Teams prompt code into existence in seconds.
They still take hours to share understanding.

The bottleneck moved from writing code to knowing what changed and why.
Logs describe fragments. PRs are walls of text. Nobody has the full picture.

## 3. The Problem Nobody Names
**Asking for feedback costs more than building the feature.**

Here's what actually happens:
Engineers schedule meetings to get one answer.
They write 10-page docs for a yes/no decision.
Non-technical stakeholders see outcomes after the fact, not choices during.

AI makes this worse. It reinterprets every handoff, creating drift where teams need precision.

## 4. Why Current Tools Fail
**Review is heavy. Collaboration should be light.**

Code review tools treat every comment like a verdict. Teams need quick gut checks.
Jira tracks work that happened. Teams need to shape work happening now.
Slack threads scatter context across time. Teams need it anchored to the change.

The truth: Most feedback doesn't need accountability. It needs accessibility.

## 5. The Insight
**Teams need minimum-context collaboration.**

Most collaborators don't need the whole repo.
They don't need the whole spec.
They need the exact piece that matters, with just enough context to respond.

That minimum package becomes the new unit of software collaboration.

## 6. Meet the Code Trail
**A shareable, visual artifact for one proposed change.**

Each Code Trail packages a change into synchronized views:
- FileCity: Which files changed, how much, where
- Sequence diagrams: What happens step by step
- Raw code: For those who need it
- Plain English notes: Anchored to exact decision points

One link. No setup. Works in any browser.
Humans and agents share the same view.

## 7. How It Actually Works
**Generate. Share. Comment. Regenerate.**

Alex's agent writes a feature. Creates a Code Trail.
Sarah clicks the link. Sees the loop in the sequence diagram.
Leaves a note: "useRef hook here, line 1652."
The agent reads it. Fixes it. Updates the trail.
Sarah verifies visually. Ships.

No IDE. No build. No 6-hour review.

## 8. Why This Changes Everything
**The link becomes the source of truth.**

Comments live on the artifact, not in Slack.
Updates happen in place, not across versions.
The collaboration thread stays with the code.

For the first time, the feedback loop is faster than the generation loop.

## 9. The Wedge
**Start where the pain is sharpest: engineer to engineer.**

Every day, engineers need quick validation from:
- The person who owns that other service
- The senior who knows the gotchas
- The architect who sees the big picture

Today that means meetings, massive PRs, or hoping someone reads your wall of text.
Code Trails compress it to one link, one question, one answer.

## 10. Then Open the Aperture
**PMs, designers, founders can finally participate.**

They don't need to read code.
They see the visual flow. They spot the business logic gaps.
They leave notes where it matters.

The technical owner keeps building.
Everyone else provides lightweight direction.
No translation through tickets.

## 11. Why Now
**Agent adoption raises the cost of confusion.**

Teams generate more code than their workflows can absorb.
Trust concerns slow enterprise AI adoption.
Security teams can't verify what they can't understand.

The next layer isn't more generation.
It's better collaboration around what's generated.

## 12. The Moat
**We own the artifact layer.**

Our innovation: Multi-view synchronization of proposed changes.
Our advantage: Anchored feedback that travels with the code.
Our position: The collaboration object between agents and humans.

As agents proliferate, every team needs this translation layer.
We're the only ones building it.

## 13. The Path Forward
**Collaboration today. Intelligence tomorrow.**

**Horizon 1:** Code Trails for human collaboration (shipping now)
**Horizon 2:** Verification and telemetry (12 months out)

The same artifact that enables feedback becomes the blueprint for monitoring.
One object serves both human understanding and system intelligence.

## 14. Horizon 2: From Trails to Telemetry
**The Code Trail becomes an execution contract.**

What changes at scale:
- One click converts visual trails into OTEL-verified monitoring plans
- The system knows what the code should do, tracks only what matters
- When production drifts from intent, you know instantly

The numbers:
- Debug time: 6 hours → 15 minutes
- Cost per incident: $400 → $18
- Data volume: Terabytes of logs → Precise signals

No more crime scene investigation. Just prevention.

## 15. Horizon 2: The Business Impact
**Replace observability chaos with intentional monitoring.**

**The Market We Disrupt:**
- Datadog: $2.13B revenue, charging for data hoarding
- New Relic: $786M revenue, same model
- Us: 1/10th the cost, 10x the precision

**The Expansion:**
- Horizon 1: $50/developer/month (collaboration)
- Horizon 2: +$150/developer/month (verification)
- Same customers, 4x revenue per seat

**Why We Win:**
Code Trails already capture intent.
Adding telemetry is a feature, not a platform rebuild.

## 16. The Ask
**Why Antler. Why Now.**

We're creating the collaboration layer for the agent era.
Starting from a concrete pain every engineering team feels today.

**What we need from Antler:**
- Early enterprise introductions while the pain is acute
- Category creation expertise as we define the space
- Network effects from your portfolio using agents

**The opportunity:**
Back the system that makes agent-built software understandable.
Before it becomes unbuildable.

---

**Addendum: Traction Points**
- Working prototype with 4-view synchronization
- 3 enterprise pilots confirmed
- 147 developer waitlist
- 78% average review time reduction in tests
- Frame.io founding team (Adobe acquisition $1.275B)