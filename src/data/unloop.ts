/**
 * Unloop content, taken from content/briefs/unloop-brief.md.
 *
 * RULES (from the brief's claims & compliance checklist):
 * - Only features with status 'built' are shown anywhere on the site.
 *   Confirm a feature is built and tested before changing its status.
 * - Research describes the techniques Unloop uses, never Unloop's own results.
 *   Don't quote a study's numbers in a way that could read as an Unloop result.
 * - Never "clinically proven". Unloop is a wellbeing tool, not a medical product.
 * - No Instagram logos, colours or interface. No competitor names.
 */

export type FeatureStatus = 'built' | 'confirm' | 'in-progress' | 'planned';

export interface Feature {
  id: string;
  title: string;
  body: string;
  status: FeatureStatus;
  /** Internal note, never rendered. */
  note?: string;
}

export const features: Feature[] = [
  {
    id: 'reels-only',
    title: 'Only the Reels feed',
    body: 'Unloop recognises the Reels screen specifically. Messages, stories and the rest of Instagram work normally.',
    status: 'built',
  },
  {
    id: 'counter',
    title: 'A live counter',
    body: "While you scroll, a small counter shows today's reels and minutes, so time doesn't disappear unnoticed.",
    status: 'built',
    note: 'Top-center redesign still to confirm; copy avoids describing its position.',
  },
  {
    id: 'daily-totals',
    title: 'Whole-day totals',
    body: 'Counts add up across the whole day, not just one session. The day starts at 4am, so late-night scrolling counts as today.',
    status: 'built',
  },
  {
    id: 'feeling-check-in',
    title: 'A one-tap feeling check-in',
    body: 'When you open Reels, Unloop asks what you are feeling. Seven feelings, shuffled each time, one tap to answer.',
    status: 'built',
  },
  {
    id: 'activities',
    title: 'Something better to do',
    body: 'Thirty-one small activities, matched to how you feel and the time of day. It never suggests an outdoor walk at night.',
    status: 'built',
  },
  {
    id: 'break-timer',
    title: 'A phone-down break timer',
    body: 'A countdown that keeps running with the screen off and vibrates when your break is done.',
    status: 'built',
  },
  {
    id: 'post-break',
    title: 'A check-in after your break',
    body: 'When a break ends, Unloop asks how you feel now: better, the same, or worse.',
    status: 'built',
  },
  {
    id: 'learns',
    title: 'Learns what helps you',
    body: 'Activities you choose and rate "better" are suggested more often.',
    status: 'built',
  },
  {
    id: 'choose-time',
    title: 'Your time, your choice',
    body: 'Want to keep watching? Choose 5 or 10 minutes. When time is up, a prompt waits until you decide what to do next.',
    status: 'built',
  },
  {
    id: 'budget',
    title: 'A daily budget with gentle friction',
    body: 'Set a daily budget. Once you are over it, continuing takes a short wait and retyping a sentence you wrote about who you want to be.',
    status: 'built',
  },
  {
    id: 'reels-free-windows',
    title: 'Reels-free mornings and nights',
    body: 'Keep Reels closed for the first and last part of your day. Changes take effect the next day, so they are hard to undo on impulse.',
    status: 'built',
  },
  {
    id: 'never-traps',
    title: 'Never traps you',
    body: 'The pause always disappears when you leave Instagram, and the Back button always works.',
    status: 'built',
  },
  {
    id: 'remote-updates',
    title: 'Keeps up with Instagram',
    body: 'When Instagram changes its layout, Unloop can adapt without waiting for an app update.',
    status: 'built',
  },
  {
    id: 'shared-reels',
    title: 'Reels from friends play freely',
    body: 'A reel a friend sends you in a chat plays without a pause. Swiping on into more reels brings the pause back.',
    status: 'confirm',
  },
  {
    id: 'companion',
    title: 'Focus companion',
    body: 'An original character that gets sleepy and foggy as you scroll, and recharges when you step away.',
    status: 'in-progress',
  },
  {
    id: 'polymorphic-counter',
    title: 'A counter that keeps changing',
    body: 'The counter changes its content, colour and size over time so your brain keeps noticing it.',
    status: 'in-progress',
  },
  {
    id: 'pause-redesign',
    title: 'Redesigned pause screens',
    body: "Today's total and your companion at the top, your feeling echoed back, the healthiest option highlighted.",
    status: 'in-progress',
  },
  {
    id: 'onboarding',
    title: 'Research-based onboarding',
    body: 'Guess your daily reels, pick your why and your plan with taps, and see how Unloop works.',
    status: 'in-progress',
  },
  {
    id: 'first-evening',
    title: 'First-evening reveal',
    body: 'Your guess compared with what you actually watched on day one.',
    status: 'in-progress',
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    body: 'Progress against your goal, today’s timeline, your pauses, weekly trend, insights with actions, and what helps you.',
    status: 'in-progress',
  },
  { id: 'weekly-review', title: 'Weekly review', body: 'A short summary of your week.', status: 'planned' },
  { id: 'ai-messages', title: 'Varied pause messages', body: 'Pause messages that change every time.', status: 'planned' },
  { id: 'talk-it-through', title: 'Talk it through', body: 'An optional chat to think through the urge.', status: 'planned' },
  { id: 'more-apps', title: 'More apps', body: 'Other short-form video apps.', status: 'planned' },
];

export const isBuilt = (id: string) => features.find((f) => f.id === id)?.status === 'built';
export const builtFeatures = features.filter((f) => f.status === 'built');

/* ------------------------------------------------------------------ */
/* Research                                                            */
/* ------------------------------------------------------------------ */

export interface Source {
  id: string;
  authors: string;
  year: string;
  title: string;
  venue: string;
  /** Link only once the citation has been checked. */
  url?: string;
  note?: string;
}

/**
 * Citations were checked against publisher and index records (title, authors,
 * venue, DOI) in September 2026. DOIs were not resolved first-hand; spot-check
 * them from an unrestricted network before launch.
 */
export const sources: Record<string, Source> = {
  lieberman2007: {
    id: 'lieberman2007',
    authors: 'Lieberman, M. D., Eisenberger, N. I., Crockett, M. J., Tom, S. M., Pfeifer, J. H., & Way, B. M.',
    year: '2007',
    title: 'Putting feelings into words: Affect labeling disrupts amygdala activity in response to affective stimuli',
    venue: 'Psychological Science, 18(5), 421–428',
    url: 'https://doi.org/10.1111/j.1467-9280.2007.01916.x',
  },
  gollwitzer2006: {
    id: 'gollwitzer2006',
    authors: 'Gollwitzer, P. M., & Sheeran, P.',
    year: '2006',
    title: 'Implementation intentions and goal achievement: A meta-analysis of effects and processes',
    venue: 'Advances in Experimental Social Psychology, 38, 69–119',
    url: 'https://doi.org/10.1016/S0065-2601(06)38002-1',
  },
  armitage2008: {
    id: 'armitage2008',
    authors: 'Armitage, C. J.',
    year: '2008',
    title: 'A volitional help sheet to encourage smoking cessation: A randomized exploratory trial',
    venue: 'Health Psychology, 27(5), 557–566',
    url: 'https://doi.org/10.1037/0278-6133.27.5.557',
  },
  harkin2016: {
    id: 'harkin2016',
    authors: 'Harkin, B., Webb, T. L., Chang, B. P. I., Prestwich, A., Conner, M., Kellar, I., Benn, Y., & Sheeran, P.',
    year: '2016',
    title: 'Does monitoring goal progress promote goal attainment? A meta-analysis of the experimental evidence',
    venue: 'Psychological Bulletin, 142(2), 198–229',
    url: 'https://doi.org/10.1037/bul0000025',
  },
  anderson2016: {
    id: 'anderson2016',
    authors: 'Anderson, B. B., Vance, A., Kirwan, C. B., et al.',
    year: '2016',
    title: 'From warning to wallpaper: Why the brain habituates to security warnings and what can be done about it',
    venue: 'Journal of Management Information Systems, 33(3), 713–743',
    url: 'https://doi.org/10.1080/07421222.2016.1243947',
  },
  kovacs2018: {
    id: 'kovacs2018',
    authors: 'Kovacs, G., Wu, Z., & Bernstein, M. S.',
    year: '2018',
    title: 'Rotating online behavior change interventions increases effectiveness but also increases attrition',
    venue: 'Proceedings of the ACM on Human-Computer Interaction, 2(CSCW), Article 95',
    url: 'https://doi.org/10.1145/3274364',
  },
  meinhardt2026: {
    id: 'meinhardt2026',
    authors: 'Meinhardt, L.-M., Dragic, K., Colley, M., Lukoff, K., & Rukzio, E.',
    year: '2026',
    title:
      "Can't stop: How context and individual traits influence effectiveness of different gradual interventions for infinite scrolling on short-form video platforms",
    venue: 'arXiv preprint 2607.15818 (not yet peer reviewed)',
    url: 'https://arxiv.org/abs/2607.15818',
  },
  ernala2020: {
    id: 'ernala2020',
    authors: 'Ernala, S. K., Burke, M., Leavitt, A., & Ellison, N. B.',
    year: '2020',
    title:
      'How well do people report time spent on Facebook? An evaluation of established survey questions with recommendations',
    venue: 'Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems',
    url: 'https://doi.org/10.1145/3313831.3376435',
  },
  lukoff2018: {
    id: 'lukoff2018',
    authors: 'Lukoff, K., Yu, C., Kientz, J., & Hiniker, A.',
    year: '2018',
    title: 'What makes smartphone use meaningful or meaningless?',
    venue: 'Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies, 2(1), Article 22',
    url: 'https://doi.org/10.1145/3191754',
  },
  orzikulova2023: {
    id: 'orzikulova2023',
    authors: 'Orzikulova, A., et al.',
    year: '2023',
    title: 'FinerMe: Examining app-level and feature-level interventions to regulate mobile social media use',
    venue: 'Proceedings of the ACM on Human-Computer Interaction, 7(CSCW2)',
    url: 'https://doi.org/10.1145/3610065',
  },
  hiniker2016: {
    id: 'hiniker2016',
    authors: 'Hiniker, A., Hong, S. R., Kohno, T., & Kientz, J. A.',
    year: '2016',
    title: 'MyTime: Designing and evaluating an intervention for smartphone non-use',
    venue: 'Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems',
    url: 'https://doi.org/10.1145/2858036.2858403',
  },
  breines2012: {
    id: 'breines2012',
    authors: 'Breines, J. G., & Chen, S.',
    year: '2012',
    title: 'Self-compassion increases self-improvement motivation',
    venue: 'Personality and Social Psychology Bulletin, 38(9), 1133–1143',
    url: 'https://doi.org/10.1177/0146167212445599',
  },
  consolvo2008: {
    id: 'consolvo2008',
    authors: 'Consolvo, S., et al.',
    year: '2008',
    title: 'Activity sensing in the wild: A field trial of UbiFit Garden',
    venue: 'Proceedings of the SIGCHI Conference on Human Factors in Computing Systems, 1797–1806',
    url: 'https://doi.org/10.1145/1357054.1357335',
  },
  tannenbaum2015: {
    id: 'tannenbaum2015',
    authors: 'Tannenbaum, M. B., Hepler, J., Zimmerman, R. S., Saul, L., Jacobs, S., Wilson, K., & Albarracín, D.',
    year: '2015',
    title: 'Appealing to fear: A meta-analysis of fear appeal effectiveness and theories',
    venue: 'Psychological Bulletin, 141(6), 1178–1204',
    url: 'https://doi.org/10.1037/a0039729',
  },
  mertens2022: {
    id: 'mertens2022',
    authors: 'Mertens, S., Herberz, M., Hahnel, U. J. J., & Brosch, T.',
    year: '2022',
    title: 'The effectiveness of nudging: A meta-analysis of choice architecture interventions across behavioral domains',
    venue: 'PNAS, 119(1), e2107346118',
    url: 'https://doi.org/10.1073/pnas.2107346118',
  },
  maier2022: {
    id: 'maier2022',
    authors: 'Maier, M., Bartoš, F., Stanley, T. D., Shanks, D. R., Harris, A. J. L., & Wagenmakers, E.-J.',
    year: '2022',
    title: 'No evidence for nudging after adjusting for publication bias',
    venue: 'PNAS, 119(31), e2200300119',
    url: 'https://doi.org/10.1073/pnas.2200300119',
  },
};

export interface ResearchEntry {
  id: string;
  /** Short heading for the idea. */
  title: string;
  /** Plain-language line for cards on /unloop. */
  line: string;
  /** How Unloop uses it (built behaviour only). */
  design: string;
  /** What the research shows. Findings, not Unloop results. */
  findings: string;
  /** Caveats, stated plainly. */
  caveat?: string;
  sources: string[];
  /** Features that must be built for this entry to appear. */
  requires: string[];
  /** Set to false to hold an entry back regardless of feature status. */
  publish?: boolean;
  /** Internal note, never rendered. */
  note?: string;
}

export const research: ResearchEntry[] = [
  {
    id: 'affect-labeling',
    title: 'Naming a feeling calms it',
    line: 'Naming a feeling is one of the simplest ways to take its power away. That’s why Unloop’s first question is “What are you feeling?”',
    design: 'Before anything else, the pause asks one question: what are you feeling?',
    findings:
      'In a brain-imaging study, putting feelings into words ("affect labeling") reduced activity in the amygdala, a region involved in emotional reactions, and increased activity in a prefrontal region linked to regulating emotion.',
    sources: ['lieberman2007'],
    requires: ['feeling-check-in'],
  },
  {
    id: 'progress-monitoring',
    title: 'Seeing progress toward a goal helps',
    line: 'Unloop doesn’t just count. It shows where you are against the daily budget you set.',
    design: "The live counter shows today's reels and minutes, and Unloop measures them against the daily budget you choose.",
    findings:
      'A meta-analysis of 138 experiments found that monitoring progress toward a goal helped people reach it. The effect was stronger when progress was physically recorded or reported to others.',
    sources: ['harkin2016'],
    requires: ['counter', 'budget'],
  },
  {
    id: 'clear-interruptions',
    title: 'Clear interruptions work for heavy scrollers',
    line: 'Designed to interrupt autopilot, not blend into it.',
    design: 'The pause is a clear, full screen, not a faint overlay that fades into the video behind it.',
    findings:
      'In a week-long field study of people scrolling short-form video, an explicit pop-up stopped scrolling faster than gradual visual or vibration-based interventions, and people who scored higher on impulsivity responded best to the pop-up. Its effect also wore off faster than the gradual designs.',
    caveat: 'This study is a preprint and has not yet been peer reviewed.',
    sources: ['meinhardt2026'],
    requires: ['feeling-check-in'],
    note: 'Brief cites 7 s vs 56 s medians; not verified against the PDF, so not quoted.',
  },
  {
    id: 'time-misjudged',
    title: 'People misjudge how long they scroll',
    line: 'Most people have no idea how many reels they watch. Unloop shows you, live.',
    design: 'A live counter shows the day’s reels and minutes while you scroll.',
    findings:
      'A study comparing survey answers with logged Facebook use found that people’s estimates of their own time on the platform were only moderately related to reality. On average people overestimated their time and underestimated how often they visited.',
    sources: ['ernala2020'],
    requires: ['counter'],
  },
  {
    id: 'target-the-feed',
    title: 'Targeting the feed, not the whole app',
    line: 'Unloop targets only the Reels feed. Your friends, your messages and the rest of Instagram stay untouched.',
    design: 'Unloop recognises the Reels screen and leaves messages, stories and the rest of Instagram alone.',
    findings:
      'A study of tens of thousands of phone sessions found that habitual use and passive browsing felt the least meaningful to people. A 16-day field study found that interventions aimed at specific features, such as feeds, cut time on those passive features more than whole-app restrictions. And an intervention aimed only at apps people felt were a poor use of their time reduced use of those apps while leaving the apps they valued alone.',
    sources: ['lukoff2018', 'orzikulova2023', 'hiniker2016'],
    requires: ['reels-only'],
  },
  {
    id: 'kindness',
    title: 'Kindness works better than shame',
    line: 'No shame, no streaks, no scolding. Just awareness and better choices.',
    design: 'No red warnings, no streaks to break, no guilt messages. A slip is treated as information, not failure.',
    findings:
      'Across four experiments, people who responded to a setback with self-compassion were more motivated to improve than those who didn’t.',
    sources: ['breines2012'],
    requires: [],
  },
  {
    id: 'if-then-plans',
    title: 'If-then plans turn intentions into action',
    line: 'Unloop helps you make a simple “when this, then that” plan in a few taps.',
    design: 'During onboarding, you pick a plan like "When I feel bored, I step outside for a minute."',
    findings:
      'A meta-analysis of if-then planning ("implementation intentions") found a medium-to-large effect on reaching goals. Choosing plans from a ready-made list has also been shown to work.',
    sources: ['gollwitzer2006', 'armitage2008'],
    requires: ['onboarding'],
  },
  {
    id: 'anti-habituation',
    title: 'Brains tune out anything that never changes',
    line: 'Most counters fade into the background within days. Unloop’s changes on purpose.',
    design: 'The counter and pause screens change their look over time.',
    findings:
      'Brain-imaging and field studies found people quickly stop responding to warnings that look the same every time, while warnings that vary stay noticeable for longer. A study of thousands of users found rotating between interventions made them more effective.',
    sources: ['anderson2016', 'kovacs2018'],
    requires: ['polymorphic-counter'],
  },
  {
    id: 'companion',
    title: 'A simple companion helps you see your state',
    line: 'Meet your focus companion.',
    design: 'The focus companion gets sleepy and foggy while you scroll and recharges when you step away.',
    findings: 'A glanceable display on the phone’s wallpaper that grew with healthy activity supported people’s behaviour in a field trial.',
    sources: ['consolvo2008'],
    requires: ['companion'],
  },
  {
    id: 'problem-with-hope',
    title: 'Show the problem, with a way forward',
    line: 'Every sobering fact comes with something you can do about it.',
    design: 'Onboarding pairs a sobering fact with a practical next step.',
    findings: 'A meta-analysis of fear appeals found they work better when paired with a clear, doable recommendation.',
    sources: ['tannenbaum2015'],
    requires: ['onboarding'],
  },
  {
    id: 'restorative-breaks',
    title: 'Scrolling isn’t a real break',
    line: 'Unloop suggests breaks that actually recharge you.',
    design: 'Activities include short walks, looking outside and stretching.',
    findings: 'Research on restorative breaks suggests time in or looking at nature helps attention recover.',
    sources: [],
    requires: ['activities'],
    publish: false,
    note: 'Brief: verify the specific study before citing. Held back until a source is confirmed.',
  },
  {
    id: 'pause-before-opening',
    title: 'A short pause before scrolling helps',
    line: '',
    design: 'The pause appears every time you open the Reels feed.',
    findings: 'Research on pause-before-opening apps found people often chose to close the app after the pause.',
    sources: [],
    requires: ['feeling-check-in'],
    publish: false,
    note: 'Grüning, Riedel & Lorenz-Spreen (2023), PNAS. Held back: the paper title names the app studied, and the brief says not to name it on the website. No control group; one author developed the app.',
  },
];

export const publishedResearch = research.filter(
  (r) => r.publish !== false && r.requires.every(isBuilt) && r.sources.length > 0,
);

/** Five ideas featured on /unloop, in order, if published. */
export const featuredResearchIds = ['affect-labeling', 'progress-monitoring', 'target-the-feed', 'kindness', 'clear-interruptions'];

/* ------------------------------------------------------------------ */
/* Page copy                                                           */
/* ------------------------------------------------------------------ */

export const problems = [
  {
    title: 'Designed to be endless',
    body: 'Short, fast-cut videos, endless novelty and algorithmic recommendations make each swipe effortless and the next one more likely.',
  },
  {
    title: 'Time disappears',
    body: 'Research has found that people misjudge how much time they spend on social media. Minutes go without a clear sense of where.',
  },
  {
    title: 'The shame loop',
    body: 'The urge is rarely about Reels. It’s a way out of boredom, tiredness or stress. Then guilt about scrolling adds a second bad feeling, and the next scroll gets more likely.',
  },
];

export const steps = [
  {
    title: 'Pause',
    body: 'When you open Reels, Unloop pauses and asks one question: what are you feeling? One tap to answer.',
  },
  {
    title: 'Choose',
    body: 'Based on how you feel and the time of day, Unloop suggests a few small things to do instead, like a short walk or a message to a friend. Or keep watching for 5 or 10 minutes. It’s always your choice.',
  },
  {
    title: 'Recharge',
    body: 'Put your phone down with a break timer that runs with the screen off. Afterwards, a quick check-in asks how you feel, and Unloop learns which breaks help you.',
  },
];

export const comparison = [
  { others: 'Block whole apps', unloop: 'Pauses only the Reels feed. Messages and the rest of Instagram work normally.', requires: ['reels-only'] },
  { others: 'Count minutes after the fact', unloop: 'A live counter while you scroll, with a daily budget you set.', requires: ['counter', 'budget'] },
  { others: 'Show the same reminder every time', unloop: 'Designed to keep changing so your brain keeps noticing.', requires: ['polymorphic-counter'] },
  { others: 'Say “take a breath”', unloop: 'Asks what you feel, then suggests something matched to it.', requires: ['feeling-check-in', 'activities'] },
  { others: 'Use streaks and guilt', unloop: 'No streaks, no scolding. Stepping away is the goal.', requires: [] },
  { others: 'Can feel like a cage', unloop: 'Always lets you choose, and never traps you.', requires: ['never-traps', 'choose-time'] },
  { others: 'Show charts', unloop: 'Shows insights with a one-tap action.', requires: ['dashboard'] },
  { others: 'Built on intuition', unloop: 'Grounded in published research, with sources listed.', requires: [] },
].filter((row) => row.requires.every(isBuilt));

export const privacyPoints = [
  'Unloop uses Android’s accessibility service only to know which Instagram screen is open and when you swipe.',
  'It does not read your messages, captions, comments, or anything outside Instagram.',
  'It does not record which reels you watch or what they contain.',
  'Your counts, feelings and check-ins are stored on your phone.',
  'Crash reports contain no personal data or content details.',
  'No ads. We don’t sell data.',
];

export interface Faq {
  q: string;
  a: string;
  requires?: string[];
  /** Answer still needs founder input. */
  placeholder?: 'confirm' | 'write';
}

export const faqs: Faq[] = [
  {
    q: 'Does Unloop block Instagram?',
    a: 'No. It only pauses the Reels feed and always lets you choose. Messages and stories work normally.',
    requires: ['reels-only'],
  },
  {
    q: 'Can I still watch reels my friends send me?',
    a: 'Yes. Reels opened from a chat play freely. Swiping on into more reels brings the pause back.',
    requires: ['shared-reels'],
  },
  {
    q: 'Does Unloop read my messages?',
    a: 'No. It only knows which Instagram screen is open and when you swipe. It doesn’t read messages, captions or comments, and it doesn’t record which reels you watch.',
  },
  {
    q: 'Why does it need accessibility permission?',
    a: 'That’s the only way Android lets an app know when you’re on the Reels screen. Unloop uses it for nothing else.',
  },
  {
    q: 'What if I really want to scroll?',
    a: 'Then you can. Choose 5 or 10 minutes and enjoy it. If you set a daily budget and go over it, continuing takes a short wait and a moment of reflection, but it’s still your call.',
    requires: ['choose-time', 'budget'],
  },
  {
    q: 'When does my day reset?',
    a: 'At 4am, so late-night scrolling counts toward the day you’re still living in.',
    requires: ['daily-totals'],
  },
  {
    q: 'What are Reels-free windows?',
    a: 'You can keep Reels closed for the first and last part of your day. Changes take effect the next day, so a late-night change of heart doesn’t undo your plan.',
    requires: ['reels-free-windows'],
  },
  {
    q: 'Will it drain my battery?',
    a: 'Unloop is designed to be lightweight and only reacts when Instagram is open.',
  },
  {
    q: 'Is it free?',
    a: '',
    placeholder: 'confirm',
  },
  {
    q: 'Does it work with TikTok or YouTube Shorts?',
    a: 'Not at the moment. Unloop works with Instagram Reels only.',
  },
  {
    q: 'Is Unloop a treatment for addiction, anxiety or depression?',
    a: 'No. Unloop is a wellbeing tool, not a medical product. If you’re struggling, please talk to a doctor or a mental health professional.',
  },
];

export const visibleFaqs = faqs.filter((f) => (f.requires ?? []).every(isBuilt));
