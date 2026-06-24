export type Dimension = 'social_energy' | 'information_style' | 'decision_style' | 'lifestyle_style';
export type Polarity = 'outward' | 'inward' | 'practical' | 'conceptual' | 'analytical' | 'human_centered' | 'structured' | 'adaptive';

export interface Question {
  id: number;
  dimension: Dimension;
  polarity: Polarity;
  text: string;
}

export const questions: Question[] = [
  // --- Social Energy (15 questions) ---
  { id: 1,  dimension: 'social_energy', polarity: 'outward',       text: 'I feel energized after spending time with large groups of colleagues.' },
  { id: 2,  dimension: 'social_energy', polarity: 'outward',       text: 'I naturally take the lead in team discussions and group problem-solving.' },
  { id: 3,  dimension: 'social_energy', polarity: 'outward',       text: 'I find it easy to introduce myself and build rapport with new people quickly.' },
  { id: 4,  dimension: 'social_energy', polarity: 'outward',       text: 'Working alongside others in a shared space keeps me focused and motivated.' },
  { id: 5,  dimension: 'social_energy', polarity: 'outward',       text: 'I prefer thinking through problems by talking them out with others in real time.' },
  { id: 6,  dimension: 'social_energy', polarity: 'outward',       text: 'Social interactions during a busy workday leave me feeling refreshed, not drained.' },
  { id: 7,  dimension: 'social_energy', polarity: 'outward',       text: 'I enjoy attending professional events and meeting people outside my immediate team.' },
  { id: 8,  dimension: 'social_energy', polarity: 'outward',       text: 'I tend to process ideas by brainstorming out loud before settling on a direction.' },
  { id: 9,  dimension: 'social_energy', polarity: 'inward',        text: 'I need quiet time alone to recharge after an intense day of collaboration.' },
  { id: 10, dimension: 'social_energy', polarity: 'inward',        text: 'I prefer gathering my thoughts privately before contributing to a group discussion.' },
  { id: 11, dimension: 'social_energy', polarity: 'inward',        text: 'Extended periods of independent work are where I produce my best results.' },
  { id: 12, dimension: 'social_energy', polarity: 'inward',        text: 'I find one-on-one conversations more meaningful and productive than large meetings.' },
  { id: 13, dimension: 'social_energy', polarity: 'inward',        text: 'In unfamiliar group settings, I tend to observe and listen before speaking up.' },
  { id: 14, dimension: 'social_energy', polarity: 'inward',        text: 'I feel most productive when I have long, uninterrupted blocks of solo work time.' },
  { id: 15, dimension: 'social_energy', polarity: 'inward',        text: 'I prefer communicating via writing over spontaneous face-to-face conversations.' },

  // --- Information Style (15 questions) ---
  { id: 16, dimension: 'information_style', polarity: 'practical',    text: 'I prefer step-by-step instructions over abstract explanations when learning something new.' },
  { id: 17, dimension: 'information_style', polarity: 'practical',    text: 'When evaluating an idea, my first question is whether it has a proven, practical application.' },
  { id: 18, dimension: 'information_style', polarity: 'practical',    text: 'I learn faster through hands-on experience than through reading theory.' },
  { id: 19, dimension: 'information_style', polarity: 'practical',    text: 'I rely on established methods and real-world data when tackling new challenges.' },
  { id: 20, dimension: 'information_style', polarity: 'practical',    text: 'Concrete, measurable goals motivate me far more than open-ended, exploratory objectives.' },
  { id: 21, dimension: 'information_style', polarity: 'practical',    text: 'Specific details and facts matter more to me than the broad picture when I am making a plan.' },
  { id: 22, dimension: 'information_style', polarity: 'practical',    text: 'I trust direct observation and evidence more than gut instinct when making decisions.' },
  { id: 23, dimension: 'information_style', polarity: 'practical',    text: 'I focus on present realities and near-term outcomes rather than speculative future scenarios.' },
  { id: 24, dimension: 'information_style', polarity: 'conceptual',   text: 'I enjoy exploring theories and ideas even when they have no immediate practical use.' },
  { id: 25, dimension: 'information_style', polarity: 'conceptual',   text: 'Understanding the underlying principles behind a system matters as much as using it.' },
  { id: 26, dimension: 'information_style', polarity: 'conceptual',   text: 'I often think several steps ahead and find imagining future possibilities genuinely exciting.' },
  { id: 27, dimension: 'information_style', polarity: 'conceptual',   text: 'I notice patterns and connections across seemingly unrelated fields and ideas.' },
  { id: 28, dimension: 'information_style', polarity: 'conceptual',   text: 'I need to understand the reasoning behind a process before I can commit to following it.' },
  { id: 29, dimension: 'information_style', polarity: 'conceptual',   text: 'I regularly question conventional approaches and look for novel or better alternatives.' },
  { id: 30, dimension: 'information_style', polarity: 'conceptual',   text: 'I am energized by open-ended problems and feel comfortable working in ambiguity.' },

  // --- Decision Style (15 questions) ---
  { id: 31, dimension: 'decision_style', polarity: 'analytical',      text: 'I base my decisions primarily on objective evidence rather than personal feelings.' },
  { id: 32, dimension: 'decision_style', polarity: 'analytical',      text: 'I can deliver direct, critical feedback without letting emotions cloud my message.' },
  { id: 33, dimension: 'decision_style', polarity: 'analytical',      text: 'When two options seem equally appealing, I create a structured comparison to decide.' },
  { id: 34, dimension: 'decision_style', polarity: 'analytical',      text: 'True fairness means applying consistent, impartial rules regardless of personal circumstances.' },
  { id: 35, dimension: 'decision_style', polarity: 'analytical',      text: 'I prioritize efficiency and measurable results over ensuring everyone feels satisfied.' },
  { id: 36, dimension: 'decision_style', polarity: 'analytical',      text: 'I feel most confident in a decision when I can justify every step with clear logic.' },
  { id: 37, dimension: 'decision_style', polarity: 'analytical',      text: 'I address the core problem first before turning to the emotional dimensions of a situation.' },
  { id: 38, dimension: 'decision_style', polarity: 'analytical',      text: 'I evaluate ideas on their objective merit, independent of who is advocating for them.' },
  { id: 39, dimension: 'decision_style', polarity: 'human_centered',  text: 'Understanding how a decision affects the people involved is central to how I evaluate it.' },
  { id: 40, dimension: 'decision_style', polarity: 'human_centered',  text: 'Team morale and individual well-being weigh heavily in how I assess a proposed outcome.' },
  { id: 41, dimension: 'decision_style', polarity: 'human_centered',  text: 'I naturally mediate disagreements by focusing on the underlying needs of each person.' },
  { id: 42, dimension: 'decision_style', polarity: 'human_centered',  text: 'A solution is only truly successful if the people it affects feel genuinely heard.' },
  { id: 43, dimension: 'decision_style', polarity: 'human_centered',  text: 'I often sense when a colleague is struggling even before they say anything.' },
  { id: 44, dimension: 'decision_style', polarity: 'human_centered',  text: 'Maintaining harmonious working relationships is as important as achieving the intended outcome.' },
  { id: 45, dimension: 'decision_style', polarity: 'human_centered',  text: 'I prefer building consensus among stakeholders rather than moving forward unilaterally.' },

  // --- Lifestyle Style (15 questions) ---
  { id: 46, dimension: 'lifestyle_style', polarity: 'structured',     text: 'I work best when I have a detailed plan mapped out before starting a project.' },
  { id: 47, dimension: 'lifestyle_style', polarity: 'structured',     text: 'Unexpected shifts in priority without clear explanation disrupt my sense of stability.' },
  { id: 48, dimension: 'lifestyle_style', polarity: 'structured',     text: 'I prefer completing one task fully before moving on to the next.' },
  { id: 49, dimension: 'lifestyle_style', polarity: 'structured',     text: 'Deadlines and schedules provide me with a reassuring sense of direction and purpose.' },
  { id: 50, dimension: 'lifestyle_style', polarity: 'structured',     text: 'I maintain organized systems or lists to track all my responsibilities and goals.' },
  { id: 51, dimension: 'lifestyle_style', polarity: 'structured',     text: 'I feel more confident when I know precisely what the next steps of a project look like.' },
  { id: 52, dimension: 'lifestyle_style', polarity: 'structured',     text: 'I prefer decisions to be settled early so the team can move forward without lingering uncertainty.' },
  { id: 53, dimension: 'lifestyle_style', polarity: 'structured',     text: 'Surprises and last-minute changes in plans tend to negatively affect my productivity.' },
  { id: 54, dimension: 'lifestyle_style', polarity: 'adaptive',       text: 'I thrive in environments that shift frequently and require me to adjust on the fly.' },
  { id: 55, dimension: 'lifestyle_style', polarity: 'adaptive',       text: 'I intentionally leave room in my schedule for spontaneous opportunities and new directions.' },
  { id: 56, dimension: 'lifestyle_style', polarity: 'adaptive',       text: 'I work well under pressure and find last-minute situations energizing rather than overwhelming.' },
  { id: 57, dimension: 'lifestyle_style', polarity: 'adaptive',       text: 'I prefer exploring multiple options simultaneously rather than committing to one path too early.' },
  { id: 58, dimension: 'lifestyle_style', polarity: 'adaptive',       text: 'Rigid, fixed processes feel limiting to me — I prefer flexible, evolving workflows.' },
  { id: 59, dimension: 'lifestyle_style', polarity: 'adaptive',       text: 'I am comfortable making decisions with incomplete information and refining my approach as I learn more.' },
  { id: 60, dimension: 'lifestyle_style', polarity: 'adaptive',       text: 'I genuinely enjoy the discovery process and readily change course when new information emerges.' },
];

export const TOTAL_QUESTIONS = questions.length;
