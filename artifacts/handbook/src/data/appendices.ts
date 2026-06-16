export interface Appendix {
  id: string;
  number: number;
  title: string;
  category: string;
  description: string;
  filename: string;
}

export const appendixCategories = [
  "Regulations & Rules",
  "Safeguarding & Welfare",
  "Club Policies",
  "Coaching Resources",
  "Player Development",
  "Health & Wellbeing",
  "Planning & Templates"
] as const;

export type AppendixCategory = typeof appendixCategories[number];

export const appendices: Appendix[] = [
  { id: "a1", number: 1, title: "2026 LGFA PDP — Player Development Programme Information", category: "Player Development", description: "LGFA Player Development Programme for 2026, including eligibility, nomination process, and programme structure.", filename: "appendix-01-lgfa-pdp-2026.pdf" },
  { id: "a2", number: 2, title: "Camogie Official Guide 2026-27 Part 1", category: "Regulations & Rules", description: "Camogie Association official guide for 2026-27, Part 1, covering rules, regulations, and governance.", filename: "appendix-02-camogie-guide-2026-part1.pdf" },
  { id: "a3", number: 3, title: "Camogie Official Guide 2026-27 Part 2", category: "Regulations & Rules", description: "Camogie Association official guide for 2026-27, Part 2, covering competition regulations.", filename: "appendix-03-camogie-guide-2026-part2.pdf" },
  { id: "a4", number: 4, title: "CCC1 Regulations for 2025", category: "Regulations & Rules", description: "Dublin GAA CCC1 competition regulations for Go Games from U8 to U12.", filename: "appendix-04-ccc1-regulations-2025.pdf" },
  { id: "a5", number: 5, title: "CCC2 Football & Hurling Regulations for 2025", category: "Regulations & Rules", description: "Dublin GAA CCC2 regulations for football and hurling competitions, U13 through Minor.", filename: "appendix-05-ccc2-regulations-2025.pdf" },
  { id: "a6", number: 6, title: "Child Safeguarding Statement", category: "Safeguarding & Welfare", description: "St Pats Donabate annual Child Safeguarding Statement under the Children First Act 2015.", filename: "appendix-06-child-safeguarding-statement.pdf" },
  { id: "a7", number: 7, title: "Club Gear Sample Order Form — May 2026", category: "Club Policies", description: "Sample equipment order form for the 2026 season covering standard team equipment and kit.", filename: "appendix-07-gear-order-form-may2026.pdf" },
  { id: "a8", number: 8, title: "Coaches & Mentors Checklists", category: "Coaching Resources", description: "Printable version of all 11 mentor checklists from Section 6.2 of this handbook.", filename: "appendix-08-coaches-checklists.pdf" },
  { id: "a9", number: 9, title: "Dublin Go Games Guidelines Overview", category: "Regulations & Rules", description: "Overview of Dublin GAA Go Games guidelines, formats, rules, and principles for CCC1.", filename: "appendix-09-dublin-go-games-guidelines.pdf" },
  { id: "a10", number: 10, title: "Féile Rules 2025", category: "Regulations & Rules", description: "Official rules and regulations for Féile na nGael and Féile Peil na nÓg 2025.", filename: "appendix-10-feile-rules-2025.pdf" },
  { id: "a11", number: 11, title: "Féile Checklist for Mentors", category: "Planning & Templates", description: "Structured checklist for mentors organising or participating in Féile na nGael.", filename: "appendix-11-feile-checklist.pdf" },
  { id: "a12", number: 12, title: "GAA Code of Best Practice in Youth Sport", category: "Safeguarding & Welfare", description: "GAA official code of best practice for working with children and young people in Gaelic Games.", filename: "appendix-12-gaa-code-best-practice.pdf" },
  { id: "a13", number: 13, title: "Go Games Guidelines 2025", category: "Regulations & Rules", description: "Full Go Games guidelines for 2025, covering all age groups, formats, and modified rules.", filename: "appendix-13-go-games-guidelines-2025.pdf" },
  { id: "a14", number: 14, title: "Go Games Playing Rules Overview", category: "Regulations & Rules", description: "Summary of Go Games playing rules by age group, including modified rules.", filename: "appendix-14-go-games-playing-rules.pdf" },
  { id: "a15", number: 15, title: "Go Games Activities Guidebook", category: "Coaching Resources", description: "Activities guidebook for Go Games coaches with drills, games, and session ideas.", filename: "appendix-15-go-games-activities.pdf" },
  { id: "a16", number: 16, title: "Guide for Coaches — Healthy Eating for Sport", category: "Health & Wellbeing", description: "Nutrition guidance for coaches covering pre-training fuelling, hydration, and healthy eating for young athletes.", filename: "appendix-16-healthy-eating-coaches.pdf" },
  { id: "a17", number: 17, title: "Guide for Parents — Healthy Eating for Sport", category: "Health & Wellbeing", description: "Parent-focused nutrition guide covering healthy eating for young GAA players and matchday nutrition.", filename: "appendix-17-healthy-eating-parents.pdf" },
  { id: "a18", number: 18, title: "John West Féile na nGael / Féile Peil na nÓg Charter 2025", category: "Regulations & Rules", description: "Official charter for the 2025 Féile competition covering club participation standards.", filename: "appendix-18-feile-charter-2025.pdf" },
  { id: "a19", number: 19, title: "LGFA Official Guide 2026", category: "Regulations & Rules", description: "Ladies Gaelic Football Association official guide for 2026 covering rules, governance, and competition.", filename: "appendix-19-lgfa-official-guide-2026.pdf" },
  { id: "a20", number: 20, title: "LGFA Development Guidebook 2026", category: "Player Development", description: "LGFA development guidebook with coaching frameworks and player development pathways.", filename: "appendix-20-lgfa-development-guidebook-2026.pdf" },
  { id: "a21", number: 21, title: "LGFA Playing Rules 2025", category: "Regulations & Rules", description: "Official LGFA playing rules for 2025 including underage competitions.", filename: "appendix-21-lgfa-playing-rules-2025.pdf" },
  { id: "a22", number: 22, title: "LGFA Playing Rules Enhancements Summary", category: "Regulations & Rules", description: "Summary of 2025-26 LGFA playing rule enhancements including the 2-point scoring arc.", filename: "appendix-22-lgfa-rules-enhancements.pdf" },
  { id: "a23", number: 23, title: "LTAD Cheat Sheet", category: "Coaching Resources", description: "Quick-reference cheat sheet for Long-Term Athletic Development with key stages and coaching priorities.", filename: "appendix-23-ltad-cheat-sheet.pdf" },
  { id: "a24", number: 24, title: "Nursery Resource", category: "Coaching Resources", description: "Resource pack for St Pats Nursery / Academy programme mentors covering U6/U7 activities.", filename: "appendix-24-nursery-resource.pdf" },
  { id: "a25", number: 25, title: "St Pats Logo Plain", category: "Club Policies", description: "Official St Pats Donabate club logo in plain format for use on club documents and communications.", filename: "appendix-25-stpats-logo-plain.pdf" },
  { id: "a26", number: 26, title: "Policy for New Academy Mentors 2026", category: "Club Policies", description: "St Pats Donabate policy and guidelines for new academy mentors joining the juvenile section in 2026.", filename: "appendix-26-new-academy-mentors-policy-2026.pdf" },
  { id: "a27", number: 27, title: "Sample Annual Calendar and Key Dates", category: "Planning & Templates", description: "Template annual calendar with key dates, competition windows, and planning milestones.", filename: "appendix-27-annual-calendar.pdf" },
  { id: "a28", number: 28, title: "Sample Annual Plan — Overview", category: "Planning & Templates", description: "One-page overview template for seasonal planning with coaching goals and competition calendar.", filename: "appendix-28-annual-plan-overview.pdf" },
  { id: "a29", number: 29, title: "Sample Session Breakdown Template", category: "Planning & Templates", description: "Session breakdown template with warm-up, main activity, and cool-down structure with timing.", filename: "appendix-29-session-breakdown-template.pdf" },
  { id: "a30", number: 30, title: "Sample Session Planner", category: "Planning & Templates", description: "Blank session planner template for weekly coaching session preparation.", filename: "appendix-30-session-planner.pdf" },
  { id: "a31", number: 31, title: "Sample Six-Week Development Block", category: "Planning & Templates", description: "Template for planning a six-week coaching development block aligned to LTAD principles.", filename: "appendix-31-six-week-block.pdf" },
  { id: "a32", number: 32, title: "Session Planner Guideline with Durations", category: "Planning & Templates", description: "Session planner guideline with recommended time allocations for each phase at different age groups.", filename: "appendix-32-session-planner-durations.pdf" },
  { id: "a33", number: 33, title: "St Pats — Sample Session Planner (Editable)", category: "Planning & Templates", description: "Editable session planner in St Pats format for planning and recording weekly training sessions.", filename: "appendix-33-stpats-session-planner-editable.pdf" },
  { id: "a34", number: 34, title: "St Pats Donabate Football Workshop — Coaching Core Skills", category: "Coaching Resources", description: "Materials from the St Pats football coaching workshop covering the core skills framework.", filename: "appendix-34-football-workshop-core-skills.pdf" },
  { id: "a35", number: 35, title: "St Pats GAA Juvenile Playing Policy — Age", category: "Club Policies", description: "St Pats official policy on playing within age groups including guidelines for playing up.", filename: "appendix-35-playing-policy-age.pdf" },
  { id: "a36", number: 36, title: "St Pats Guidelines for Underage Refereeing — Mentor Engagement", category: "Club Policies", description: "St Pats Donabate guidelines for mentor engagement with underage referees, including the one-named-mentor policy and sanctions.", filename: "appendix-36-underage-refereeing-mentor-engagement.pdf" },
  { id: "a37", number: 37, title: "St Pats Nursery Programme Mentor Summary", category: "Coaching Resources", description: "Summary of the St Pats Nursery Programme covering structure, philosophy, and mentor guidance.", filename: "appendix-37-nursery-programme-summary.pdf" },
  { id: "a38", number: 38, title: "St Pats Player Skills Chart — Football and Hurling", category: "Player Development", description: "Player skills assessment chart for football and hurling covering all juvenile age groups.", filename: "appendix-38-skills-chart-football-hurling.pdf" },
  { id: "a39", number: 39, title: "St Pats Skills Chart — Camogie", category: "Player Development", description: "Player skills assessment chart for camogie covering stick skills and game skills benchmarks.", filename: "appendix-39-skills-chart-camogie.pdf" },
  { id: "a40", number: 40, title: "St Pats Skills Chart — LGFA", category: "Player Development", description: "Player skills assessment chart for ladies football aligned to LGFA development guidelines.", filename: "appendix-40-skills-chart-lgfa.pdf" },
  { id: "a41", number: 41, title: "Team Parent Meeting Template", category: "Planning & Templates", description: "Agenda template for the annual team parent meeting covering season overview and expectations.", filename: "appendix-41-team-parent-meeting.pdf" }
];
