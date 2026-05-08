# CodeTrails
## The Collaboration Primitive for Software Development

---

## Here's What Actually Happens

An engineer needs feedback on code.
They have two choices: Schedule a meeting or ask someone to clone the repo.

Both take hours.

The feedback needed? Usually one comment. One decision. One "yes, that works."

We built CodeTrails. One link. No IDE. Anyone can review.

---

## The Frame.io Moment

Remember video editing before 2020?

Editors had these massive files on souped-up computers. To get feedback, you dragged people into the studio. Or compressed everything, uploaded it, and prayed they understood what they were looking at.

Frame.io changed that. One link. Everything compressed in browser. Producer to project manager, everyone could comment at any point in time.

We're doing that for code.

---

## What Is a Code Trail

It's a shareable artifact of a proposed code change.

**What You See:**
- FileCity: Spatial view of what changed
- Sequence diagram: Step-by-step execution flow
- The actual code: For those who need it
- Plain English notes: Anchored to exact points

No forking. No cloning. No IDE.
Open link. See change. Leave note. Done.

---

## The Real Problem We Solve

**Design docs are broken.**

Engineers write them. Nobody reads them.
They live outside the code. They get stale immediately.
Reading a doc takes you out of the code context.

Code Trails are better design docs. Visual. Shareable. Native to the codebase.

---

## Who Actually Needs This

**Teams with Multiple Stakeholders**

When Chuck Robbins needs a video, gazillion people have input.
When your codebase has multiple owners, same problem.

Individual folders owned by different teams.
Every change needs sign-off.
Currently done with design docs and meetings.

We make it one link.

---

## How Engineers Actually Use It

Fernando's building something. Hits a bug.
Creates a Code Trail. Sends link to Michael.

Michael opens it in browser. Sees the issue in the sequence diagram.
"Use a useRef hook there." Leaves note.

Fernando's agent reads note. Implements fix. Updates trail.

No "clone my repo." No "can you check out this branch?"
Just a link.

---

## The Open Source Angle

Maintainers hate PRs. The Paperclip guy has thousands to review.
"Sorry, it's just me. So many PRs to go through."

PRs show you what changed.
Code Trails show you why and how.

Understanding what code does: Hard.
Verifying code does what you think it does: Easy.

We make the second one visual.

---

## Why This Beats Everything Else

**Jira tickets:** Like using a hammer to put in a screw. Works, but feels wrong.

**Linear:** Task management that isn't native to code.

**PRs on GitHub:** Here's 4 files that changed. Figure out what they do.

**Code Trails:** Here's exactly what this does, visually, with context.

---

## The Primitive Nature

This isn't a product requirement doc.
It's a piece of one.

One PRD could have many Code Trails.
Each trail is a thought about code you want to share.

Simple. Specific. Shareable.

---

## From Collaboration to Intelligence

**Today:** Share code changes with a link

**Tomorrow:** One button creates OTEL monitoring

That same Code Trail that helped Sarah understand the change?
It becomes the contract for what production should do.

When execution drifts from intent, you know instantly.

Story-based monitoring. Not "is it up?" but "is it doing what we designed?"

---

## The Speed Game

Can Claude make an artifact with sequence diagrams, spatial views, and explanations?
Maybe.

But we own the concept.
We're making it the way people think about code sharing.

It's Frame.io for code. Once you see it, you can't unsee how obvious it is.

---

## The Feed Connection

Michael opens Principal the next day.
Sees what changed. Not commits. Code Trails.

Julie created 5 trails for the observability demo.
Not "Julie made 50 commits."

Intent over activity.
Understanding over counting.

---

## Why Now

AI agents generate code faster than humans can review it.

Engineers used to read code.
Now they need to verify agent work.

Reading 10,000 generated lines? Impossible.
Reviewing a Code Trail? 15 minutes.

The bottleneck shifted from writing to understanding.
We solve understanding.

---

## The Bottom Line

We're not making developers code less.
We're helping them understand more.

One link. No tools. Anyone can participate.

The collaboration primitive for the age of AI-generated code.