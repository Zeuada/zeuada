# Unloop — Product, Research & Marketing Brief

This document describes what Unloop is, how it works, the research behind every design decision, and how to present it on the website and in the Play Store. Use it as the single source of truth when building marketing material.

> **Before publishing anything, read the "Claims & compliance checklist" at the end.** Unloop's credibility depends on being accurate. Being the best-researched app means never overstating what the research shows.

---

## 1. One-line pitch and taglines

**Pitch:** Unloop is an Android app that helps you break the Instagram Reels habit. Instead of blocking Instagram, it catches the moment a scroll begins, helps you notice what you're actually feeling, and offers something better, so you get your time and focus back.

**Tagline options:**
- Take your time back from Reels.
- Break the loop, not your phone.
- Notice the scroll. Choose your day.
- The Reels habit, unlooped.
- Built on behavior science. Designed without shame.

**Positioning statement:** Most screen-time apps count minutes or block apps. Unloop is built around how habits actually work: it interrupts the loop at the feeling behind the scroll, makes time visible in real time, and rewards stepping away, all grounded in published research on habits, attention, and behavior change.

---

## 2. The problem

- **Reels are designed to be hard to stop.** Short, fast-cut videos, endless novelty, and algorithmic recommendations make each swipe effortless and the next one more likely.
- **People lose track of time.** Research on short-video use found that people misjudge how long they've been watching. Minutes disappear without a clear sense of where they went.
- **The habit runs on autopilot.** The urge usually isn't really for Reels. It's a way to escape a feeling like boredom, tiredness, stress, loneliness, or a task being avoided.
- **Shame makes it worse.** Scrolling to escape a feeling, then feeling guilty about scrolling, creates a second bad feeling, which makes the next scroll more likely.
- **Blocking doesn't fix the habit.** Hard blocks get switched off, and they cut off the healthy parts of Instagram too, like messaging friends.

---

## 3. How Unloop works (the core loop)

The habit loop behind compulsive scrolling runs: **feeling → craving → scrolling → shame → the same feeling, worse → scroll again.** Unloop interrupts it at every stage.

1. **Notice.** When you open Reels, Unloop pauses you and asks one question: *What are you feeling?* Naming the feeling is itself a proven way to calm the urge.
2. **Choose.** Based on your feeling, Unloop suggests two or three small, appealing things to do instead: a four-minute walk, a message to a friend, a slow cup of chai. Or you can keep scrolling for a set time. It's always your choice.
3. **See it.** A live counter at the top of the screen shows today's reels and minutes, so time never disappears unnoticed.
4. **Recover.** Breaks end with a quick check-in (*How do you feel now?*). Over time, Unloop learns what actually helps you, and your focus companion visibly recharges when you step away.
5. **Grow.** Your dashboard shows progress toward your own goal, when you scroll, what triggers it, and what helps, with one-tap actions to improve.

**Simple version for the website:**
**Pause → Choose → Recharge.**

---

## 4. Feature list

> **Status column:** confirm each feature is built and tested before it appears on the website or in screenshots. "In progress" and "Planned" features must not be advertised as available.

| Feature | What it does | Status |
|---|---|---|
| Reels-only detection | Detects the Instagram Reels screen specifically. DMs, stories, and the rest of Instagram work normally. | Built |
| Real-time counter | Shows today's reel count and time at the top of the screen while you scroll. | Built (top-center redesign: confirm) |
| Daily totals | Counts the whole day, not just one session, with the day starting at 4am so late-night scrolling counts as "today." | Built |
| Feeling check-in | One-tap question when you open Reels, with seven feelings, shuffled each time. | Built |
| Feeling-matched activities | 31 micro-activities, matched to your feeling and time of day, never suggesting outdoor walks at night. | Built |
| Break timer | Phone-down countdown that works with the screen off and vibrates when done. | Built |
| Post-break check-in | "How do you feel now?" — Better / Same / Worse. | Built |
| Learns what helps | Suggests activities you've accepted and rated Better more often. | Built |
| Choose your time | Continue for 5 or 10 minutes; a time-up prompt stays until you choose. | Built |
| Daily budget with gentle friction | Over budget, continuing unlocks after a short wait and retyping your own identity statement. | Built |
| Reels-free windows | Reels stay closed for the first and last part of your day. Changes take effect the next day. | Built |
| Never traps you | The pause always disappears when you leave Instagram; Back always works. | Built |
| Shared reels play freely | A reel a friend sends in a chat plays without a pause. Swiping on into more reels brings the pause back. | Confirm |
| Focus companion | An original character that gets sleepy and foggy as you scroll, and recharges when you step away. | In progress (confirm) |
| Polymorphic counter | The counter changes its content, color, and size over time so your brain keeps noticing it. | In progress (confirm) |
| Redesigned pause screens | Today's total and companion at the top; your feeling echoed back; the healthiest option highlighted. | In progress (confirm) |
| Research-based onboarding | Guess your daily reels, pick your why and your plan with taps (no typing), see how it works. | In progress (confirm) |
| First-evening reveal | "You guessed 50 reels. Today you watched 212." | In progress (confirm) |
| Dashboard | Progress vs. your goal, today's timeline, your pauses, weekly trend vs. your first week, insights with actions, what helps you, your why. | In progress (confirm) |
| Weekly review | A short summary of your week, with an optional share card. | Planned |
| Remote detection updates | Unloop can adapt to Instagram layout changes without an app update. | Built |
| AI-varied messages | Pause messages that change every time so they never feel repetitive. | Planned |
| "Talk it through" | Optional chat to think through the urge in the moment. | Planned |
| More apps | YouTube Shorts and other short-form apps. | Planned |

---

## 5. The research behind Unloop

Every major design decision in Unloop traces back to published research. Use these as "why it works" content on the website. Phrase them as **what the research shows**, never as results Unloop itself has proven (see the compliance checklist).

### 5.1 Naming your feeling calms the urge
- **Design:** the pause asks "What are you feeling?" before anything else.
- **Research:** Brain-imaging research on "affect labeling" found that putting feelings into words reduced activity in the brain's emotional alarm centers and increased activity in a region linked to self-control. *(Lieberman et al., 2007, Psychological Science)*
- **Website line:** *Naming a feeling is one of the simplest ways to take its power away. That's why Unloop's first question is "What are you feeling?"*

### 5.2 If-then plans turn intentions into action
- **Design:** during onboarding, you pick a plan like "When I feel bored → I step outside for a minute."
- **Research:** A meta-analysis of if-then planning ("implementation intentions") found a medium-to-large effect on reaching goals. *(Gollwitzer & Sheeran, 2006)*
- **Research:** Choosing if-then plans from a ready-made list, rather than writing them from scratch, has also been shown to work. *(Armitage and colleagues, "volitional help sheets")*
- **Website line:** *Unloop helps you make a simple "when this, then that" plan in a few taps, one of the best-supported techniques in behavior science.*

### 5.3 Tracking progress toward a goal works
- **Design:** the dashboard shows today's reels and minutes against your own daily budget.
- **Research:** A meta-analysis of 138 experiments found that monitoring progress toward a goal helped people reach it, with stronger effects when progress was recorded or shared, and when combined with goal setting and planning. *(Harkin et al., 2016, Psychological Bulletin)*
- **Website line:** *Unloop doesn't just count minutes. It shows your progress toward the goal you set.*

### 5.4 Brains tune out anything that never changes
- **Design:** the counter and pause screens change their look over time.
- **Research:** Brain-imaging studies of warning messages found that people's brains quickly stop responding to a warning that looks the same every time, while warnings that change their appearance stay noticeable much longer, including in a multi-week field test. *(Anderson, Vance, Kirwan and colleagues)*
- **Research:** A Stanford study of thousands of users found that rotating between different interventions made them more effective, and briefly explaining why cut drop-off in half. *(Kovacs, Wu & Bernstein, HabitLab)*
- **Website line:** *Most counters fade into the background within days. Unloop's changes on purpose, so your brain keeps noticing.*

### 5.5 Clear interruptions beat subtle ones for heavy scrollers
- **Design:** the pause is a clear, opaque screen, not a faint overlay that blends into the video.
- **Research:** A 2026 field study of people scrolling short-form video apps found an explicit pop-up got people to stop much faster (median 7 seconds) than a subtle, gradually darkening overlay (median 56 seconds). The authors warned that subtle designs may fail the people with the least self-control. *(arXiv, 2026)*
- **Website line:** *Designed to actually interrupt autopilot, not blend into it.*

### 5.6 People misjudge how long they scroll
- **Design:** the live counter and the onboarding "guess vs. reality" reveal.
- **Research:** Studies of social media and short-video use found that users often misjudge the time they spend.
- **Website line:** *Most people have no idea how many reels they watch. Unloop shows you, live.*

### 5.7 Scrolling isn't a real break
- **Design:** activities like short walks, looking outside, and stretching.
- **Research support:** Research on restorative breaks suggests time in or looking at nature helps attention recover. *(Verify the specific study before citing; the podcast that inspired Unloop cited a 2024 study comparing break types.)*
- **Website line:** *Unloop suggests breaks that actually recharge you.*

### 5.8 Talking to people is meaningful; passive scrolling isn't
- **Design:** Unloop never interferes with DMs, and reels shared by friends play freely.
- **Research:** A study of over 86,000 phone sessions found communicating with close friends and family felt highly meaningful, while passive scrolling and passing time felt least meaningful. *(Lukoff et al., 2018)*
- **Research:** A 16-day field study found that interventions targeting specific features, like the feed, reduced passive scrolling more than whole-app restrictions. *(FinerMe study)*
- **Research:** An app that targeted only apps people felt were a poor use of time reduced that use by 21%, while use of apps they valued stayed the same. *(Hiniker et al., MyTime, 2016)*
- **Website line:** *Unloop targets only the Reels feed. Your friends, your messages, and the rest of Instagram stay untouched.*

### 5.9 Kindness works better than shame
- **Design:** no red warnings, no streaks to break, no guilt messages. Slips are framed as awareness.
- **Research:** Across four experiments, a self-compassionate response to setbacks increased motivation to improve. *(Breines & Chen, 2012)*
- **Research:** In a virtual-pet step-counting study, researchers concluded such designs should encourage rather than punish. *(Fish'n'Steps, Lin et al., 2006)*
- **Website line:** *No shame, no streaks, no scolding. Just awareness and better choices.*

### 5.10 A simple companion helps you see your state
- **Design:** the focus companion gets sleepy and foggy while scrolling and recharges when you step away.
- **Research:** A glanceable virtual garden on the phone's home screen, which grew with healthy activity, supported people's behavior over three months. Simpler visuals worked better than highly stylized ones. *(UbiFit Garden, Consolvo et al.)*
- **Website line:** *Meet your focus companion. It feels the scroll, and it recharges when you do.*

### 5.11 A short pause before scrolling helps
- **Design:** the pause appears every time you open the Reels feed.
- **Research:** Research on pause-before-opening apps found people frequently chose to close the app after the pause, and opened it less over time. *(Grüning, Riedel & Lorenz-Spreen, 2023. Note: that study had no control group and one author developed the app studied; use carefully and don't name the competitor on the website.)*

### 5.12 Show the problem, but always with a way forward
- **Design:** onboarding pairs a sobering fact with immediate hope ("A short pause helps people stop").
- **Research:** A large meta-analysis found fear-based messages change behavior, especially when paired with a clear, doable solution. *(Tannenbaum et al., 2015)*

### 5.13 The inspiration
Unloop's core model was inspired by a public conversation about attention and habit science, including the habit loop (feeling → craving → behavior), the idea of a "cognitive pause," replacement behaviors, identity-based beliefs, implementation intentions, reels-free mornings and nights, and why short-form content affects focus differently from long-form content. **Internal only:** do not name or quote the people in that conversation in marketing without their permission, as it could imply endorsement.

---

## 6. Benefits (user-facing language)

- **See where your time goes.** A live counter and a clear daily picture replace guesswork.
- **Stop scrolling on autopilot.** A few seconds of noticing turns a reflex into a choice.
- **Understand your triggers.** Learn whether boredom, tiredness, stress, or loneliness drives your scrolling, and when.
- **Get real breaks.** Small activities that genuinely recharge you, matched to how you feel.
- **Keep what's good about Instagram.** Messages, stories, and reels from friends stay untouched.
- **Protect your mornings and nights.** Start and end your day without the feed.
- **Build the person you want to be.** Your own "why" and plan appear right when they matter.
- **Feel better, not guilty.** A shame-free design that celebrates stepping away.
- **Private by design.** Your data stays on your phone.
- **Light and fast.** Built natively for Android to stay small and battery-friendly.

---

## 7. What makes Unloop different

| Most screen-time apps | Unloop |
|---|---|
| Block whole apps | Targets only the Reels feed; messages and friends untouched |
| Count minutes after the fact | Live counter while you scroll, against your own goal |
| Same reminder every time | Designed to keep changing so your brain keeps noticing |
| Generic "take a breath" | Asks what you feel, then suggests something matched to it |
| Punish with streaks and shame | Encourages, celebrates stepping away, never scolds |
| Can feel like a cage | Always lets you choose; never traps you |
| Show charts | Shows insights with a one-tap action |
| Built on intuition | Every feature grounded in published research |

---

## 8. Privacy (important for trust and Play Store)

- Unloop uses Android's accessibility service only to know **which Instagram screen is open** and **when you swipe**.
- It **does not read** your messages, captions, comments, or anything outside Instagram.
- It **does not record** which reels you watch or their content.
- All data (counts, feelings, check-ins) is **stored on your device**.
- Crash reports contain no personal data or content details.
- No ads. No selling data.
- *(If AI features launch later, describe exactly what is sent and when.)*

---

## 9. Brand & voice

- **Name:** Unloop
- **Colors:** deep ink blue background, warm amber accent. Avoid Instagram's pink-orange-purple gradient.
- **Voice:** warm, calm, honest, never preachy. Invitations, not instructions ("Want to steal three minutes of sunlight?" rather than "You should go outside").
- **Never:** shame, fear-mongering, "you're addicted," red warnings, exaggerated claims.
- **Companion:** original simple orb character with expressive eyes. States: alert, wandering eyes, sleepy, dizzy, foggy, zoned out, and recharging. On marketing material, show mostly alert and recharging states, with sleepy or foggy only to illustrate the scrolling moment.

---

## 10. Website structure (for building with Claude)

1. **Hero**
   - Headline: *Take your time back from Reels.*
   - Subhead: *Unloop catches the scroll before it catches you, with a pause, a better option, and a live count of your day. Built on behavior science, designed without shame.*
   - CTA: *Get it on Google Play.* Visual: phone mockup with the counter pill and companion.
2. **The problem** — three short cards: designed to be endless, time disappears, the shame loop.
3. **How it works** — Pause → Choose → Recharge, with a short animation or three phone mockups.
4. **The science** — "Every feature has a reason." Cards from section 5 (feeling labeling, if-then plans, progress tracking, anti-habituation design, shame-free). Link to a full "Research" page with sources.
5. **Features** — grid of built features only (section 4).
6. **Meet your companion** — animation of the companion getting sleepy while scrolling and recharging on a walk.
7. **Only Reels. Not your friends.** — explain Reels-only detection and shared reels.
8. **Privacy** — section 8 in plain language.
9. **Comparison** — section 7 table (without naming competitors).
10. **Testimonials and results** — add only after the beta, with real quotes and real, clearly described numbers.
11. **FAQ** — see below.
12. **Final CTA**.

### FAQ drafts
- **Does Unloop block Instagram?** No. It only pauses the Reels feed and always lets you choose. Messages and stories work normally.
- **Can I still watch reels my friends send me?** Yes. Reels opened from a chat play freely.
- **Does Unloop read my messages?** No. It only knows which Instagram screen is open and when you swipe.
- **Why does it need accessibility permission?** That's the only way Android lets an app know when you're on the Reels screen. It's used for nothing else.
- **Will it drain my battery?** Unloop is designed to be lightweight and only reacts to Instagram. *(Add measured numbers after testing.)*
- **What if I really want to scroll?** Then you can. Pick your time and enjoy it. Unloop is about choosing, not forbidding.
- **Is it free?** *(Fill in pricing.)*
- **Does it work with TikTok or YouTube Shorts?** Not yet. Instagram Reels comes first.

---

## 11. Play Store screenshots

**Specs (verify current Play requirements before exporting):** portrait 9:16 (for example 1080 × 1920 px), PNG or JPEG, up to 8 phone screenshots. The first 2–3 matter most because they're visible without scrolling. Also needed: a 1024 × 500 feature graphic and a 512 × 512 app icon.

**Design system for all screenshots:**
- Ink-blue background, amber accent, large bold headline at the top (2–5 words), one short subhead, phone frame below showing the real app screen.
- **Do not show Instagram's logo, name styling, or recognizable interface.** Behind the counter or pause, use a blurred, generic video background. Mention "Works with Instagram Reels" in text only where allowed by Play's metadata rules.
- Keep the companion present in most screenshots for recognition.
- Use real app screens, not mockups of features that aren't built.

| # | Headline | Subhead | Screen shown | Design notes |
|---|---|---|---|---|
| 1 | **Break the Reels habit** | A pause, a better choice, your time back. | Pause screen: companion, today's total, "What are you feeling?" | Hero shot. Strongest visual. Companion prominent. |
| 2 | **See every reel you watch** | A live counter keeps time from disappearing. | Counter pill at top center over a blurred video, milestone card expanded ("100 reels · 38 min today"). | Show the pill clearly with an arrow or glow. |
| 3 | **Name the feeling, not the scroll** | Bored, tired, stressed? Unloop asks first. | Feeling tiles grid. | Caption small note: "Backed by research on emotion labeling." |
| 4 | **Do something better** | Tiny breaks matched to how you feel. | Choice screen: highlighted activity card, "Back to my day", small continue options. | Show one activity clearly, e.g. a 4-minute walk. |
| 5 | **Meet your focus companion** | It gets foggy as you scroll and recharges when you step away. | Split visual: companion sleepy/foggy on the left, bright/recharging on the right. | Original character only. Friendly, not sad. |
| 6 | **Your progress, not just numbers** | Goals, triggers, and what actually helps. | Dashboard hero: progress ring vs budget, companion, timeline. | Use realistic sample data showing improvement. |
| 7 | **Your friends stay. The feed pauses.** | Messages and shared reels work normally. | Illustration of a chat with a shared reel playing freely. | Avoid Instagram UI; use a generic chat design. |
| 8 | **Private. Light. Shame-free.** | Your data stays on your phone. No ads. No guilt. | Three icons with short labels over a calm companion. | Trust closer. |

**Feature graphic (1024 × 500):** companion on the left, headline "Take your time back from Reels" on the right, ink blue with amber accent. No Instagram branding.

**Short description (80 characters max), options:**
- Break the Instagram Reels habit with a mindful pause and a live reel counter.
- Pause the scroll, name the feeling, choose your day. Built on behavior science.

**Full description outline:** pitch → the problem → how it works (Pause, Choose, Recharge) → key features (built only) → the science (3–4 short points) → privacy → call to action.

---

## 12. Claims & compliance checklist (read before publishing)

**Research claims**
- Say *"built on research"* or *"grounded in behavior science,"* never *"clinically proven"* or *"scientifically proven to work."*
- Research findings describe the techniques Unloop uses, not Unloop's own results. Never present a study's numbers (like 21%, d = 0.65, or 7 seconds) as Unloop results.
- Avoid claims that Unloop increases IQ, repairs attention span, or treats addiction, depression, or anxiety. Unloop is a wellbeing tool, not a medical product.
- The companion is a metaphor. Don't claim it measures attention or state of mind.
- Only publish Unloop-specific results after the beta, with sample size and method described honestly (for example, "In our 3-week beta with 18 testers, average daily Reels time fell by X%").
- Verify every citation (author, year, finding) before it goes on the Research page.

**Trademarks**
- Keep "Instagram," "Insta," and "Reels" out of the app name, icon, and logo.
- Describing compatibility in text ("works with Instagram Reels") is generally acceptable, but check Play's metadata policy and Meta's brand guidelines.
- Don't use Instagram's logo, colors, or interface in screenshots, ads, or the website.
- Don't name or show people from the podcast that inspired the app without permission.
- Don't name competitors in comparisons.

**Play Store policy**
- Accessibility use must match the in-app disclosure and the permission declaration exactly.
- The privacy policy and Data safety form must match section 8 and actual app behavior.
- Screenshots must show the real app.

**Legal (internal)**
- A US patent (US12468828B2) covers pause-based interventions and related timing logic. Get a patent attorney's freedom-to-operate opinion before a public launch, especially in the US. Marketing should not make claims about unique invention of the pause concept.

---

## 13. Sources to list on the Research page (verify each before publishing)

- Lieberman et al. (2007). Affect labeling and emotional brain activity. *Psychological Science.*
- Gollwitzer & Sheeran (2006). Implementation intentions and goal achievement: a meta-analysis.
- Armitage and colleagues. Volitional help sheets for forming if-then plans.
- Harkin et al. (2016). Does monitoring goal progress promote goal attainment? *Psychological Bulletin.*
- Anderson, Vance, Kirwan and colleagues. Habituation to security warnings and polymorphic warnings (fMRI and field studies).
- Kovacs, Wu & Bernstein. Rotating online behavior change interventions (HabitLab), Stanford.
- 2026 field study comparing explicit, visual, and haptic interventions during short-form video scrolling (arXiv).
- Lukoff et al. (2018). What makes smartphone use meaningful or meaningless?
- FinerMe: feature-level vs app-level interventions for social media use.
- Hiniker et al. (2016). MyTime: designing and evaluating an intervention for smartphone non-use. *CHI.*
- Breines & Chen (2012). Self-compassion increases self-improvement motivation.
- Lin et al. (2006). Fish'n'Steps: encouraging physical activity with an interactive computer game.
- Consolvo et al. UbiFit Garden: glanceable displays for physical activity.
- Tannenbaum et al. (2015). Appealing to fear: a meta-analysis of fear appeal effectiveness. *Psychological Bulletin.*
- Mertens et al. (2022). Choice architecture interventions meta-analysis, *PNAS* (and the Maier et al. 2022 reply on publication bias).
- Research on time distortion in social media and short-video use.
- Grüning, Riedel & Lorenz-Spreen (2023). Pause-based self-nudge app field study (use with caveats; don't name the app on the website).
