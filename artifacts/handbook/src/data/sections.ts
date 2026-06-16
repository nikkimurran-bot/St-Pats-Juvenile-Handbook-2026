export interface Subsection {
  id: string;
  number: string;
  title: string;
  content: string;
}

export interface Section {
  id: string;
  number: string;
  title: string;
  icon: string;
  subsections: Subsection[];
}

export const sections: Section[] = [
  {
    id: "s1",
    number: "1",
    title: "Juvenile Overview",
    icon: "🏟️",
    subsections: [
      {
        id: "1-1",
        number: "1.1",
        title: "Juvenile Committee Structure",
        content: `## Juvenile Committee Structure

The Juvenile Committee oversees the day-to-day operation of the St Pats Donabate juvenile section.

| Title | Contact | Duties |
|-------|---------|--------|
| Juvenile Games Chairperson | Ger Cohen | Lead Juvenile Committee; represent section at club executive; chair meetings; coordinate mentor ratification |
| Juvenile Secretary | Jayne Elmiger-Coffey | Facilitate communication with Dublin County Board; team entry into competitions; juvenile report for AGM |
| GPO | Traolach O'Donnell | Coaching strategy; mentor support/training; school support; academy; mini leagues; summer camps |
| Academy Coordinator | Traolach O'Donnell | Boys and Girls 4yrs–7yrs; Football/LGFA; Hurling/Camogie |
| Football Coordinator | — | Boys Under 8–Minor Football |
| Hurling Coordinator | — | Boys Under 8–Minor Hurling |
| LGFA Coordinator | Elaine Walsh | Girls Under 8–Minor Football |
| Camogie Coordinator | Pat Martin / Niamh Armstrong | Girls Under 8–Minor Camogie |
| Children's Officers | Sheila McGuinness | Children's welfare; Safeguarding; Garda Vetting |

## Juvenile Committee 2026

**Members:** Ger Cohen, Alan Quinn, Eimear Drea, Graham Owens, Lorraine Halpin, Nikki Murran, Philip Bourke, Ray Greene, Traolach O'Donnell

**Committee Goals:**
- Build a strong juvenile section with great coaching, fun and development
- Create a clear pathway for players from U4 to U16
- Support coaches with structure, teamwork and shared responsibility
- Balance enjoyment with skill growth and healthy competitiveness
- Develop confident players proud to represent St Pats`
      },
      {
        id: "1-2",
        number: "1.2",
        title: "Club Executive 2026",
        content: `## Club Executive 2026

| Position | Name | Phone |
|----------|------|-------|
| Chairperson | Felim McAllister | 086-8141908 |
| Secretary | Jayne Elmiger-Coffey | 087-2961607 |
| Vice-Secretary | Sharon Burke | 086-1503667 |
| Treasurer | Alan Merryman | 086-8163249 |
| Registrar | Cormac Golden | 087-7985897 |
| Public Relations Officer | Rory O'Neill | 087-7841551 |
| Juvenile Games Chairperson | Ger Cohen | 087-9879647 |
| LGFA Secretary | Elaine Walsh | 087-9047440 |
| Children's Officer | Sheila McGuinness | 086-3525113 |
| Community Officer | Shane Dowling | 086-2303811 |
| Players' Representative | Sarah Jayne Moroney / Adam Dunne | 085-1974303 / 086-3105766 |
| Health and Wellbeing Officer | Shane Manton | 087-7702002 |
| Cultural & Language Officer | Fiachra O'hEochaidh | 086-8675100 |`
      },
      {
        id: "1-3",
        number: "1.3",
        title: "Key Contacts 2026",
        content: `## Key Contacts 2026

| Position | Name | Phone |
|----------|------|-------|
| Juvenile Games Chairperson | Ger Cohen | 087-9879647 |
| Juvenile Secretary | Jayne Elmiger-Coffey | 087-2961607 |
| Children's Officer | Sheila McGuinness | 086-3525113 |
| Designated Liaison Officer (DLO) | Lorraine Ni h'Ailpin | 087-6284746 |
| GPO (Games Promotion Officer) | Traolach O'Donnel | 087-4127090 |
| Fixtures Coordinator / Pitch Allocation | Jayne Elmiger-Coffey | 087-2961607 |
| Football Referees Coordinator | Dan Burke | 087-4837990 |
| Camogie Referees Coordinator | Dan Burke | 087-4837990 |
| LGFA Secretary | Elaine Walsh | 087-9047440 |
| Camogie Secretary | Pat Martin | 087-6229095 |
| Club Registrar | Cormac Golden | 087-7985897 |

> **Note:** Contact information for Football, Hurling, LGFA and Camogie Coordinators and Academy Coordinator is available from the Juvenile Secretary.`
      },
      {
        id: "1-4",
        number: "1.4",
        title: "Dates for Juvenile Meetings 2026",
        content: `## Dates for Juvenile Meetings 2026

All meetings are held at **Ballymastone** at **20:30**.

| Date | Location | Time |
|------|----------|------|
| 6th February 2026 | Ballymastone | 20:30 |
| 9th April 2026 | Ballymastone | 20:30 |
| 11th June 2026 | Ballymastone | 20:30 |
| 20th August 2026 | Ballymastone | 20:30 |
| 13th October 2026 | Ballymastone | 20:30 |
| 26th November 2026 | Ballymastone | 20:30 |

Mentors are encouraged to attend when agenda items relevant to their age group are being discussed. The Juvenile Secretary will circulate agendas in advance through ClubZap and email.`
      },
      {
        id: "1-5",
        number: "1.5",
        title: "Mentor Ratification",
        content: `## Mentor Ratification

Mentors are ratified annually by the Club Executive.

### Process

The Lead Mentor presents their proposed coaching team to the Juvenile Chairperson for the upcoming season, including confirmation of:
- Garda Vetting
- Safeguarding course completion
- Coaching qualifications
- Membership status

The Lead Mentor is responsible for:
- Effective communication within their coaching team
- Supporting the implementation of club policies and initiatives

### Mid-Season Changes

Any mid-season updates or changes to coaching teams must be submitted to the Club Executive through the Juvenile Chairperson for review and approval. All final decisions rest with the Club Executive.

> No mentor may take up a role with a juvenile team without being formally ratified.`
      },
      {
        id: "1-6",
        number: "1.6",
        title: "Club Subscriptions & Player Registration",
        content: `## Club Subscriptions & Player Registration

Only **fully paid-up members** will be registered with the club. Players who have not paid their membership fees will not be permitted to train or participate in matches.

All mentors and coordinators must also be paid-up members of the club.

### How to Register

Membership can be completed through the St Pats GAA Club website: **www.stpatsgaa.com**

### Deadline

The annual membership deadline is **17th March**.

Lists of registered and paid-up members are maintained by the Club Registrar (Cormac Golden).

> If a player is not registered, they cannot be listed on a Foireann team sheet and may be ineligible to compete. Mentors should confirm all players are registered before the season's first competitive fixture.`
      },
      {
        id: "1-7",
        number: "1.7",
        title: "Club Communications",
        content: `## Club Communications

Along with the Club Website, there are 4 formal channels of communication for teams, results and events:

| Channel | Purpose |
|---------|---------|
| **Club Website** | stpatsgaa.com — primary information hub |
| **Twitter / X** | @StPatsDonabate — match results, news |
| **Instagram** | stpatsdonabate — photos, events |
| **Facebook** | St Pats Donabate — community updates |

### Team-Level Communication

Within each team, communication with parents of players is facilitated through **ClubZap**.

ClubZap is used for:
- Training notifications and cancellations
- Fixture details and match reminders
- Attendance tracking
- General team updates

All mentors should ensure they are set up on ClubZap for their team at the start of each season. Contact the Juvenile Secretary for assistance with ClubZap setup.`
      }
    ]
  },
  {
    id: "s2",
    number: "2",
    title: "The Juvenile Mentor",
    icon: "👤",
    subsections: [
      {
        id: "2-1",
        number: "2.1",
        title: "Role of Juvenile Mentor",
        content: `## Role of Juvenile Mentor

The juvenile mentor is one of the most important volunteers in St Pats Donabate. Mentors train our boys and girls, arrange matches, interact with referees and officials, deal with bumps and bruises, and watch young players grow through the ranks.

### Core Responsibilities

- Provide a safe, fun, and developmental environment for every player
- Plan and deliver age-appropriate coaching sessions
- Attend and manage fixtures and matches
- Communicate effectively with parents and guardians
- Uphold and model the club's values at all times
- Comply with all safeguarding and child welfare requirements

### What Makes a Good Mentor

A good mentor:
- Puts the welfare and development of children first
- Plans sessions and thinks ahead
- Treats every player fairly, regardless of ability
- Remains calm and positive on the sideline
- Communicates honestly and respectfully with parents
- Continues to learn and develop their coaching knowledge

### The Mentor's Commitment

Mentoring requires a significant time commitment — training sessions, fixtures, planning, communications, and administration. No mentor is expected to do everything alone. Building a strong team around you is as important as coaching the players themselves.`
      },
      {
        id: "2-2",
        number: "2.2",
        title: "Role of Lead Mentor",
        content: `## Role of Lead Mentor

The Lead Mentor is the primary contact person and responsible adult for the age group. They coordinate the coaching team and act as the main link between the group and the Juvenile Committee.

### Lead Mentor Responsibilities

**Administration:**
- Confirm mentor team and role assignments at the start of each season
- Ensure all mentors are vetting-compliant and ratified
- Submit mentor list to Juvenile Chairperson for ratification
- Manage competition entries and team sheet submissions
- Communicate fixtures, training schedules, and updates to parents

**Coaching:**
- Lead the planning of the season's coaching programme
- Ensure session plans are prepared and age-appropriate
- Oversee player development within the age group
- Coordinate streaming and panel decisions

**Communication:**
- Serve as the primary contact for the Juvenile Committee
- Distribute relevant information to all mentors in the group
- Manage parent communications on key matters
- Report significant incidents or issues to the appropriate person

**Safeguarding:**
- Ensure all mentors within the group are compliant before any activity begins
- Know the Children's Officer and DLO contact details
- Handle welfare concerns appropriately and promptly`
      },
      {
        id: "2-3",
        number: "2.3",
        title: "Suggested Mentor Roles",
        content: `## Suggested Mentor Roles with Each Group

Effective team management works best when roles are clearly defined and shared. The following roles are suggested for each age group's coaching team.

### Lead Mentor / Head Coach
- Primary responsible adult for the group
- Main point of contact with Juvenile Committee
- Oversees all coaching and administrative activity
- Coordinates mentor team

### Assistant Coach(es)
- Supports the Lead Mentor in session delivery
- Takes lead on specific coaching areas or codes
- Covers Lead Mentor responsibilities when unavailable

### Team Administrator
- Manages match-day logistics
- Communicates with parents on fixtures, training, and general updates
- Handles team sheet preparation
- Manages the ClubZap / Teamer group

### Welfare Officer (within team)
- Supports safeguarding awareness within the group
- First point of contact for parent welfare queries
- Liaises with the club's Children's Officer on any concerns

### First Aid Lead
- Responsible for the first aid kit at sessions and matches
- Manages injury and concussion response
- Maintains incident records

> These roles are not rigid — in smaller groups, individuals may cover multiple roles. The important thing is that responsibilities are shared and clear.`
      },
      {
        id: "2-4",
        number: "2.4",
        title: "Team Management Structures",
        content: `## Suggested Team Management Structures

### CCC1 Age Groups (U8–U12)

At younger age groups, the focus is on Go Games and maximum participation. A minimum team structure of:
- **1 Lead Mentor** — responsible for the group overall
- **2–3 Assistant Mentors** — supporting coaching and management
- **1 Team Parent / Administrator** — communications and logistics

The Lead Mentor should be the designated safeguarding contact for the group at this level.

### CCC2 Age Groups (U13+)

At competitive age groups, the structure may need to be more defined:
- **1 Lead Mentor** — coaching lead and responsible person
- **1–2 Specialist Coaches** — code-specific coaching (football, hurling)
- **1 Team Manager** — logistics, fixtures, match-day admin
- **1 Physio / Welfare Lead** — welfare and injury management (recommended)

### All-Weather / Streaming Arrangements

Where an age group has A and B (and sometimes C) teams, the overall coaching group works together for:
- Streaming and panel reviews
- Cross-group training sessions
- Shared coaching philosophy and standards

Each team still needs its own day-to-day Lead Mentor. The Lead Mentors across the age group should meet at the beginning of the season and at key review points.`
      },
      {
        id: "2-5",
        number: "2.5",
        title: "Season & Session Planning",
        content: `## Importance of Season and Session Planning

Great coaching doesn't happen by accident. The best coaching groups at St Pats are those that plan ahead, share the workload, and review and adapt throughout the season.

### Seasonal Planning

At the start of each season, the coaching team should agree:
- The age group's **coaching philosophy** — what do we value and how will we coach?
- The **LTAD priorities** — what are the key skills and development areas for this age group?
- The **season structure** — when are the key competition windows, grading periods, and review points?
- The **streaming and panel approach** — how will we manage teams and movement?
- The **communication plan** — how will we keep parents informed?

See the **Sample Annual Plan** (Appendix 28) and **Sample Annual Calendar** (Appendix 27) for templates.

### Session Planning

Every training session should be planned in advance. A good session plan includes:
- **Objective** — what is the key learning focus?
- **Warm-up** — how will we get players moving and engaged?
- **Main activity** — 1–2 activities, progressing from simple to complex
- **Conditioned game** — a game that reinforces the session theme
- **Cool-down** — finish positively

See the **Session Planner** (Appendix 30) and **Session Breakdown Template** (Appendix 29) for templates.

### Review Points

At minimum, the coaching team should review the season at:
- **Start of season** — set goals and plan
- **After Easter** — mid-season review of development and streaming
- **After summer break** — review before autumn recommencement
- **End of season** — full review and planning for next year`
      },
      {
        id: "2-6",
        number: "2.6",
        title: "Coaching & Games Development",
        content: `## Coaching and Games Development

### GAA Coaching Framework

The GAA operates a structured coaching development pathway, accessible through **Tobar** (the GAA's online learning platform). All mentors are encouraged to engage with this pathway:

| Level | Course | Target Audience |
|-------|--------|-----------------|
| Foundation | Introduction to Coaching Gaelic Games (ICGG) | All new mentors — mandatory |
| Award 1 | Award 1 Coach Education | Mentors working primarily with juvenile players |
| Award 2 | Award 2 Coach Education | Experienced coaches progressing the pathway |

### Dublin GAA Games Development

The Dublin GAA Games Development unit provides:
- Coaching workshops and CPD sessions throughout the year
- Skills development resources and challenges
- Support for Go Games blitzes and festivals
- Mini leagues and inter-club events

The Club GPO (Traolach O'Donnell) is the link between the club and Dublin GAA Games Development.

### St Pats Coaching Approach

St Pats encourages a **player-centred, game-based** approach to coaching:
- Maximise time with the ball
- Minimise standing and listening
- Create opportunities for players to solve problems
- Provide positive, specific feedback
- Make sessions fun and energetic`
      },
      {
        id: "2-7",
        number: "2.7",
        title: "Mentor Development",
        content: `## Mentor Development

St Pats is committed to supporting and developing all mentors. You are not expected to arrive with all the answers — the club provides supports at every level.

### Mandatory Requirements (Recap)

Every mentor must complete before being active with any juvenile team:
1. **Garda Vetting** — through the club Registrar
2. **Safeguarding 1 (Child Safeguarding Awareness)** — on Tobar, renewed every 3 years
3. **ICGG / Foundation Course** — entry-level GAA coaching qualification on Tobar
4. **Foireann Registration** — as a paid-up club member
5. **Club Ratification** — approved by the Club Executive

### Recommended Development

Beyond the mandatory requirements:
- **First Aid / CPR** — strongly recommended for all mentors
- **Award 1 Coach Education** — for mentors coaching regularly with juvenile groups
- **Dublin GAA workshops** — practical, code-specific coaching sessions
- **GAA Social Media / Safeguarding updates** — periodic refreshers

### Mentor Support at St Pats

- **GPO** — available for coaching advice, session ideas, and games development support
- **Juvenile Committee** — for administrative and organisational queries
- **Children's Officer** — for safeguarding guidance and welfare queries
- **Experienced Mentors** — don't hesitate to reach out to those who have been around longer`
      },
      {
        id: "2-8",
        number: "2.8",
        title: "Additional Coaching Resources",
        content: `## Additional Coaching Resources

### Online Platforms

| Resource | URL / Access | Content |
|----------|-------------|---------|
| **Tobar** | Via GAA website | Coaching courses, safeguarding cert, learning resources |
| **Dublin GAA Games Dev** | dublingaa.ie | Workshops, coaching supports, skills development |
| **Leinster GAA** | leinster.gaa.ie | Templates, coaching supports, player development |
| **GAA Official Website** | gaa.ie | Rules, governance, coaching resources |
| **LGFA Official** | lgfa.ie | Ladies football rules, coaching information |
| **Camogie Association** | camogie.ie | Camogie regulations, coaching resources |

### Key Documents (in Appendices)

- **LTAD Cheat Sheet** (Appendix 23) — quick reference for age-appropriate development
- **Go Games Activities Guidebook** (Appendix 15) — session activities for Go Games groups
- **Coaching Core Skills Workshop** (Appendix 34) — St Pats football skills framework
- **Session Planners** (Appendices 30–34) — templates for session preparation

### Player Skills Assessment

Skills charts for all codes are available in the Appendices:
- **Football & Hurling** (Appendix 38)
- **Camogie** (Appendix 39)
- **LGFA** (Appendix 40)

### Healthy Eating & Nutrition

- **Healthy Eating for Coaches** (Appendix 16)
- **Healthy Eating for Parents** (Appendix 17)
- **Fuel Your Game** — GAA nutrition resources (online)`
      },
      {
        id: "2-9",
        number: "2.9",
        title: "Foireann and Tobar",
        content: `## Foireann and Tobar Management

### Foireann

Foireann is the GAA's official administration and registration platform. All mentors and players must be registered on Foireann.

**Foireann is used for:**
- Club membership registration
- Garda Vetting processing and records
- Safeguarding course certification records
- Coaching qualification records
- Generating official team sheets
- Player and mentor registration numbers

**Getting Started:**
1. Register at **foireann.ie**
2. Complete your profile with accurate personal details
3. Contact the Club Registrar (Cormac Golden) to be linked to St Pats
4. Ensure your vetting and safeguarding records are up to date

### Tobar

Tobar is the GAA's official online learning and coaching platform.

**Available on Tobar:**
- Safeguarding 1 (mandatory — must be completed and renewed every 3 years)
- Introduction to Coaching Gaelic Games (ICGG)
- Award 1 and Award 2 coaching pathways
- CPD and supplementary coaching modules

**Access:**
- Register at **learning.gaa.ie** (Tobar)
- Certificates of completion are automatically linked to your Foireann profile

> If you have completed courses outside the GAA system (e.g. Sport Ireland), contact the GPO regarding recognition and transferability.`
      },
      {
        id: "2-10",
        number: "2.10",
        title: "Sponsorship",
        content: `## Sponsorship and Timing of Sponsorship

### Club Sponsorship Policy

All sponsorship arrangements for juvenile teams must be approved through the club before being agreed or announced. Individual teams are not permitted to enter independent sponsorship agreements.

### Process

1. Contact the Juvenile Chairperson or Club Secretary with the sponsorship proposal
2. The Club Executive reviews and approves/declines the proposal
3. Approved sponsorship arrangements are managed centrally
4. Any branding, logo use, or public-facing promotion must be approved before use

### Key Points

- Sponsor logos on jerseys or team materials require club approval
- All sponsorship funds pass through the Club Treasurer
- Tax-efficient donation arrangements may be available — contact the Treasurer
- Sponsorship announcements on social media should be cleared with the Club PRO

### Fundraising

Teams are encouraged to support their own activities through approved fundraising:
- Table quizzes
- Cake sales
- Supermarket bag packing
- Other locally approved initiatives

Bag packing opportunities may become available periodically. Speak to your coordinator about available opportunities.`
      },
      {
        id: "2-11",
        number: "2.11",
        title: "First Aid Training / AED Locations",
        content: `## First Aid Training / AED Locations

### AED Locations

There are **two AEDs** on location at St Pats:

- **AED 1** — Located in the clubhouse, **to the right of the kitchen door** as you enter.
- **AED 2** — Located in the gym. It is contained in a **large white box to the left as you enter the gym**.

All mentors should familiarise themselves with both AED locations before the season begins.

### First Aid Training

First Aid training can be organised through:

**Fingal County Council Sports Office**
- Jamie Clowry | Sport Development Officer
- Mobile: 087-2846596
- Email: Jamie.Clowry@fingal.ie

**Or directly through first aid trainer:**
- Brian Pentony — Email: pentonyb@gmail.com | Phone: 087-2291838

### First Aid Policy

- Each team should, wherever possible, have **at least one mentor with a valid accredited First Aid qualification** in line with GAA best practice guidelines.
- First Aid certification should be renewed every two years, with responsibility on the individual mentor to ensure qualifications remain in date.
- The club will aim to provide a minimum of two First Aid training opportunities per year for coaches and mentors.
- As a long-term objective, the club will work towards having accredited First Aid cover at a ratio of **one qualified adult per 15 players** where possible.

### Emergency Procedure

If a serious injury occurs:
1. **Make the area safe** before approaching.
2. **Check response and breathing.**
3. **Send for help. Call 112 / 999.**
4. Treat the most serious issue first.
5. Reassure casualty and monitor.

Do not move a player who may have a spinal or neck injury.

### Concussion Protocol

**"If in doubt, sit them out"** — this rule is non-negotiable.

Any player suspected of concussion must:
- Be removed from play immediately
- Not return to play on the same day
- Not return until medically cleared following the graduated return-to-play protocol (minimum 2 weeks)

### Club Injury Policy

See the [St Pats Injury Procedure & Physio Policy](https://www.stpatsgaa.com/pages/injury-procedure-physio-policy) for full details.`
      },
      {
        id: "2-12",
        number: "2.12",
        title: "Player Injury Schemes & Reporting",
        content: `## Player Injury Schemes & Injury Reporting

The player injury schemes across the GAA, LGFA and Camogie Association are **support schemes, not full insurance policies**. Parents and guardians should understand that these schemes are designed to supplement private health insurance and do not automatically cover all medical expenses. Where players have private medical insurance (such as VHI, Laya or Aviva), claims should first be submitted through those providers before any application is made through the relevant Gaelic Games injury scheme.

St Pats Donabate is not in a position to cover medical or treatment expenses outside the terms of the relevant injury schemes.

### GAA Injury Benefit Fund

> **Important change from 1 June 2025:** The GAA injury claims process has changed. The injured player, or a parent/guardian for an underage player, must now **log the injury directly on Foireann**. It is no longer primarily managed by the club injury officer.

All injuries which may require treatment should be reported promptly through the appropriate code process and also communicated to the club. Mentors should ensure that any significant match injury is brought to the **referee's attention for inclusion in the official match report** where applicable.

### LGFA Injury Fund

For LGFA injuries, the **initial claim form must be submitted within 8 weeks** of the injury occurring or the claim may not be covered under the scheme.

### Useful Links

- [GAA Injury Benefit Fund](https://www.gaa.ie)
- [LGFA Injury Fund Information](https://www.lgfa.ie)
- [St Pats Injury Procedure & Physio Policy](https://www.stpatsgaa.com/pages/injury-procedure-physio-policy)

### Injury Reporting

All injuries that result in a player leaving the field of play or requiring medical attention should be reported to the Lead Mentor and recorded.

**Incident Report — What to Record:**
- Date, time, and location of incident
- Name of player injured
- Nature of injury (what happened)
- Who was present
- What action was taken
- Parents / guardian notified? (Yes/No and when)
- Whether emergency services were called

Serious incidents must also be reported to the Juvenile Chairperson.`
      },
      {
        id: "2-13",
        number: "2.13",
        title: "Annual Parents Meeting",
        content: `## Annual Parents Meeting

The Annual Parents Meeting is a critical opportunity to start the season with clear, shared expectations. A well-run parents meeting sets the tone for everything that follows.

### When to Hold It

The parents meeting should take place **before the first competitive fixture**, ideally at the very beginning of the season. January/February is the typical window.

### Recommended Agenda

1. **Welcome** — introduce the coaching team
2. **Season Overview** — what competitions, what format, what are the key dates?
3. **Club Philosophy** — our values, LTAD, enjoyment first
4. **Team Structure** — streaming approach (if applicable), how panels are managed
5. **Playing Time Policy** — fair rotation, all players play at Go Games level
6. **Attendance & Commitment** — what is expected of players and families
7. **Communication** — ClubZap, how to raise queries, who to contact
8. **Sideline Behaviour** — the standard we expect and why
9. **Safeguarding** — Child Protection overview, who the safeguarding contacts are
10. **Medical Info Request** — ask parents to update medical/allergy information
11. **Q&A** — open questions from parents

### Key Points to Cover

- Membership and registration deadlines
- Mouthguard requirement (football)
- Helmet requirement (hurling/camogie)
- Emergency contact and medical information process
- Team communication channels

See the **Team Parent Meeting Template** (Appendix 41) for a full agenda template.`
      },
      {
        id: "2-14",
        number: "2.14",
        title: "Annual Calendar & Key Dates",
        content: `## Sample Annual Calendar and Key Dates

Planning the season in advance helps mentors stay organised, reduces stress, and ensures players and parents are well-informed.

### Key Season Milestones (Typical Year)

| Period | Key Activity |
|--------|-------------|
| January | Registration opens; streaming/panel reviews; parents meeting |
| February | First training sessions begin; Go Games and league entries |
| March | Membership deadline (17th March); season underway |
| April | Mid-season review; Easter break considerations |
| May–June | Féile preparations; county qualifiers; summer window |
| July | School holidays; reduced schedule |
| August | Return to training; pre-championship preparation |
| September | Championship competitions begin |
| October | Grading for following year begins (U12 and above) |
| November | End-of-season reviews; planning for following year |
| December | Quieter period; social events; admin preparation |

### Season Planning Template

See the **Sample Annual Plan** (Appendix 28) and **Sample Annual Calendar** (Appendix 27) for editable templates.

> Mentors should create their own version of the annual calendar at the start of each season, filling in actual fixture dates as they become available.`
      },
      {
        id: "2-15",
        number: "2.15",
        title: "Code of Best Practice",
        content: `## Code of Best Practice

The GAA's **Code of Best Practice in Youth Sport** sets out the standards expected of all adults working with children in Gaelic Games.

The full document is available in **Appendix 12**.

### Key Principles

**Children's Rights:**
Every child has the right to:
- Participate in sport in a safe and enjoyable environment
- Be protected from abuse, neglect, and exploitation
- Have their views heard and respected
- Be treated with fairness and dignity

**Adult Responsibilities:**
All adults working with children must:
- Prioritise the welfare of the child at all times
- Avoid one-to-one situations with children
- Never use physical punishment or emotional abuse
- Maintain appropriate professional boundaries
- Report any concerns about child welfare immediately

**Good Practice:**
- Ensure training and activities are in well-lit, visible areas
- Never ask a child to do anything that causes pain or distress
- Give equal attention and time to all players
- Respond clearly and consistently when children behave inappropriately
- Follow all club policies on communication and social media`
      },
      {
        id: "2-16",
        number: "2.16",
        title: "Child Protection",
        content: `## Child Protection

### Legal Framework

All juvenile mentors are **mandated persons** under the **Children First Act 2015**. This is a legal obligation, not a club choice. Mandated persons are required to report reasonable grounds for concern about child welfare to **Tusla** (Child and Family Agency).

### Key Contacts

| Role | Name | Phone |
|------|------|-------|
| Children's Officer | Sheila McGuinness | 086-3525113 |
| Designated Liaison Officer (DLO) | Lorraine Ni h'Ailpin | 087-6284746 |
| Tusla (Child and Family Agency) | — | 01-7718500 |
| Emergency | — | 999 / 112 |

### Reporting Procedure

If a child makes a disclosure or if you have a welfare concern:

1. **Listen carefully** — do not interrupt or ask leading questions
2. **Stay calm** — reassure the child they were right to tell you
3. **Do not promise confidentiality**
4. **Record accurately** — write down what the child said, in their own words, as soon as possible
5. **Contact the DLO immediately**
6. **Do not discuss** the matter with other mentors, parents, or the alleged abuser

> If a child is in immediate danger, call 999/112 first.

### Club Child Safeguarding Statement

The Club's Child Safeguarding Statement is reviewed annually and is available from the Children's Officer and on the club website. See also **Appendix 6**.`
      },
      {
        id: "2-17",
        number: "2.17",
        title: "Complaints Procedure",
        content: `## Complaints Procedure

### Raising a Concern or Complaint

St Pats Donabate is committed to addressing concerns and complaints in a fair, timely, and respectful manner.

### Step 1 — Informal Resolution

Many concerns can be resolved informally through direct, respectful conversation. If you have a concern about a coaching decision, team management matter, or club communication, speak directly with the Lead Mentor or Juvenile Chairperson in the first instance.

### Step 2 — Formal Complaint

If the matter cannot be resolved informally, a formal complaint may be submitted in writing to the Juvenile Chairperson.

A formal complaint should:
- Clearly describe the nature of the concern
- Include relevant dates, names, and events
- Be submitted within a reasonable time of the incident

### Step 3 — Escalation

If the complaint cannot be resolved at Juvenile Committee level, it may be escalated to the Club Executive.

### Child Welfare Concerns

Complaints involving child welfare or safeguarding are dealt with under the separate **Child Protection Procedure** (see Section 2.16) and are handled by the DLO and Children's Officer.

### Key Principle

All complaints are handled respectfully and confidentially. No person raising a legitimate concern in good faith will be penalised for doing so.`
      },
      {
        id: "2-18",
        number: "2.18",
        title: "Communications & Social Media",
        content: `## Communications & Social Media

### Team Communication

**ClubZap** is the official communication platform for all St Pats juvenile teams.

| Platform | Use |
|----------|-----|
| ClubZap | Training/fixture updates, attendance, all team communications |
| Email | Formal or detailed communications to parent groups |
| WhatsApp Group | Team group (adults only — parents and mentors) |

### What Is and Isn't Permitted

**Permitted:**
- Group messages to parents via ClubZap
- Team WhatsApp groups with parents and multiple mentors included
- Email communications to a parent group

**Not Permitted:**
- Private one-to-one messages between an adult mentor and an individual player
- Communicating with players via personal social media accounts
- Adding players as social media friends or followers
- Sharing images of children without explicit parental consent

### Parental Consent

Written consent must be obtained from parents before:
- Photographs or video of players are taken
- Images are shared on club or team social media
- Players are named in match reports or media`
      },
      {
        id: "2-19",
        number: "2.19",
        title: "Social Media Posting Guidelines",
        content: `## Social Media Posting Guidelines

### General Principles

All mentors, parents, and players representing St Pats should follow these guidelines on social media:

- **Be positive** — posts reflecting club activities should be uplifting and constructive
- **Respect privacy** — never identify children by name in public posts
- **Seek consent** — always obtain parental consent before posting images of children
- **Protect location information** — do not publish training locations or travel arrangements publicly
- **Respect opponents** — never post negative comments about opposing clubs, players, or mentors
- **Respect referees** — criticism of referees on social media is never acceptable
- **Report concerns** — any inappropriate content involving children must be reported to the Children's Officer immediately

### Club Social Media Accounts

Official St Pats accounts are managed by the PRO:
- Twitter/X: @StPatsDonabate
- Instagram: stpatsdonabate
- Facebook: St Pats Donabate

Contact the PRO (Rory O'Neill) to arrange posts from official accounts for matches, achievements, and events.

### GAA Social Media Guidelines

The full GAA Social Media Guidelines document is available from the Children's Officer. See also **Appendix 12** (GAA Code of Best Practice).`
      },
      {
        id: "2-20",
        number: "2.20",
        title: "Points of Contact for Juvenile Teams",
        content: `## Current Points of Contact for Juvenile Teams

### Juvenile Contact List

Internal team contact documents (updated annually) are available in the **Juvenile Downloads** section of the Dublin GAA website.

- **Juvenile Hurling Contacts 2026** — current mentor and contact information for all hurling teams
- **Juvenile Football Contacts 2026** — current mentor and contact information for all football teams
- **LGFA/Camogie Club Mentor Contact List** — updated as of 17th March 2026

### How to Use These Lists

Contact lists are for internal use within the coaching community. They should not be shared publicly or posted on social media.

If you need to contact another team's Lead Mentor (for example, to arrange a challenge game or coordinate streaming), please use the current contacts list or contact the Juvenile Secretary for assistance.

### Updating Your Details

If your contact details change during the season, please notify the Juvenile Secretary as soon as possible so the contact lists can be updated promptly.`
      }
    ]
  },
  {
    id: "s3",
    number: "3",
    title: "Player Development",
    icon: "⚽",
    subsections: [
      {
        id: "3-1",
        number: "3.1",
        title: "Nursery Programme Overview",
        content: `## Nursery Programme Overview

The St Pats Nursery Programme is the club's Academy for children aged approximately 4–7 years (U4–U7).

### What the Nursery Provides

- A fun, structured introduction to Gaelic Games
- Age-appropriate activities focused on motor skill development
- A welcoming environment for children and families
- The foundation for lifelong participation in the GAA

Over **200 children** participate in the St Pats Academy every Saturday morning, making it one of the most active and vibrant in the county.

### Programme Philosophy

At Nursery level, the emphasis is entirely on **fun and fundamentals**. There is no competition, no scores, and no selection. Every child participates, and every child succeeds.

Activities are designed around:
- Running, jumping, hopping, skipping, and catching
- Basic hand and foot skills with age-appropriate balls
- Games and activities that build coordination and confidence
- Short, energetic activities with high levels of movement

### Key Measures of Success

At Nursery level, success is measured by:
- Do the children enjoy themselves?
- Do they leave wanting to come back next week?
- Are they making friends and feeling part of a group?

### Resources

- **Nursery Resource Pack** (Appendix 24)
- **Nursery Programme Mentor Summary** (Appendix 37)

The Academy Coordinator (Traolach O'Donnell) oversees the Nursery programme and is available to support Nursery mentors.`
      },
      {
        id: "3-2",
        number: "3.2",
        title: "Player Passport Instructions",
        content: `## Player Passport Instructions

The GAA's **Player Passport** is a youth athletic development platform used to assess, track, and support individual player development.

### What the Player Passport Includes

- **Movement Screening** — assessing basic movement patterns and physical literacy
- **Skills Challenges** — age-appropriate skills assessments across all codes
- **Player Profile** — tracking individual progress over time

### How It Works

1. Players are assessed using standardised skills challenges appropriate for their age group
2. Results are recorded on the Player Passport platform
3. Assessments can be repeated at intervals to track progress
4. Data supports individual coaching plans and player development conversations

### Club Use

The GPO coordinates Player Passport activities within St Pats. Mentors are encouraged to engage with the skills challenges as a structured way to:
- Benchmark player ability at the start of the season
- Identify individual development needs
- Motivate players with clear, measurable goals
- Inform streaming and panel decisions

### Long-Term Athletic Development

Player Passport assessments are designed to align with **LTAD** principles. Results should be interpreted in the context of each player's development stage — not simply as a ranking.`
      },
      {
        id: "3-3",
        number: "3.3",
        title: "Skill List by Age Group",
        content: `## Suggested Skill List by Age Group

The following provides a guide to the key skills that should be prioritised at each age group. These are not exhaustive lists — they are priorities based on LTAD principles.

### U8–U9 (FUNdamentals)
**Football:** Catch, kick (left and right), hand-pass, solo run
**Hurling/Camogie:** Hold hurley correctly, ground strike, lift and carry

**Focus:** Fun, lots of ball contact, basic movement patterns, enjoyment

### U10–U11 (Learning to Train — Early)
**Football:** Catch (high and low), kick (accuracy), hand-pass (moving), solo, ground ball
**Hurling/Camogie:** Ground strike, overhead strike, hand-pass, solo carry, first touch

**Focus:** Repetition of fundamentals, game-based learning, beginnings of tactical awareness

### U12 (Learning to Train — Late)
**Football:** All basics with accuracy; blocking, tackling; positional awareness
**Hurling/Camogie:** All basics with accuracy; striking off both sides; blocking; hooking

**Focus:** Technical refinement, game understanding, first competitive structures

### U13–U14 (Training to Train)
**Football:** All skills under pressure; team play patterns; kickouts; scoring from play
**Hurling/Camogie:** All skills under pressure; free-taking; positional skills

**Focus:** Physical development alongside skill; tactical awareness; team systems

### U15–U16+ (Training to Compete)
**All Codes:** Full game skills at pace; leadership on the pitch; decision-making under pressure

**Focus:** Fitness, mental skills, performance under competitive pressure

See the full **Skills Charts** in Appendices 36, 37, and 38.`
      },
      {
        id: "3-4",
        number: "3.4",
        title: "Long-Term Athletic Development (LTAD)",
        content: `## Long-Term Athletic Development (LTAD)

### What is LTAD?

Long-Term Athletic Development is a structured framework for developing young athletes in line with their physical, mental, and emotional growth.

In Gaelic Games, LTAD provides a roadmap for how coaching content, training loads, and competitive structures should evolve as players mature.

### The LTAD Stages

| Stage | Approx. Age | Key Focus |
|-------|------------|-----------|
| Active Start | Under 6 | Fun movement, no structured sport |
| FUNdamentals | U6–U9 | Basic motor skills, fun, all sports |
| Learning to Train | U10–U12 | **Critical skill window** — high repetition, game-based |
| Training to Train | U13–U15 | Physical development alongside technical skills |
| Training to Compete | U16–U18 | Performance preparation, mental skills |
| Training to Win | 18+ | Full competitive preparation |

### The Critical Window (U10–U12)

The **Learning to Train** stage (approximately U10–U12) is the most important period for skill acquisition in a young athlete's career. Technical skills developed (or not developed) at this stage tend to be retained long-term.

Key implications:
- Maximise ball contact and repetition at U10–U12
- Game-based learning is particularly effective at this stage
- Avoid over-specialisation — children should be exposed to multiple codes and sports

### LTAD in Practice

When planning a season or session, mentors should ask:
- Is the coaching content appropriate for the development stage?
- Are we asking appropriate volumes of effort?
- Is the competitive format appropriate?
- Are we building confidence and long-term connection to the game?

See the **LTAD Cheat Sheet** (Appendix 23) for a quick-reference guide.`
      },
      {
        id: "3-5",
        number: "3.5",
        title: "Healthy Eating, Hydration & Nutrition",
        content: `## Healthy Eating, Hydration & Player Nutrition

Good nutrition and hydration support player performance, recovery, and long-term health. Mentors play an important role in reinforcing positive habits.

### Key Principles for Young Players

**Before Training/Match:**
- Eat a balanced meal 2–3 hours before activity (carbohydrates, protein, vegetables)
- Avoid heavy or greasy foods immediately before exercise
- Drink water in the hours leading up to the session or match

**During Training/Match:**
- Players should have their own water bottles at every session — **mandatory**
- Regular water breaks should be built into sessions
- Avoid sugary sports drinks for normal training sessions

**After Training/Match:**
- Refuel within 30–60 minutes with a balanced snack or meal
- Rehydrate — water is the best choice
- Rest and recovery are as important as nutrition

### Mentors' Role

- Remind players and parents of water bottle requirements
- Build hydration breaks into sessions
- Avoid promoting or accepting unhealthy food choices at team events
- Refer parents to the nutrition guides in the Appendices for detail

### Resources

- **Guide for Coaches — Healthy Eating for Sport** (Appendix 16)
- **Guide for Parents — Healthy Eating for Sport** (Appendix 17)
- **Fuel Your Game** — GAA online nutrition resources`
      }
    ]
  },
  {
    id: "s4",
    number: "4",
    title: "Playing Games",
    icon: "🏆",
    subsections: [
      {
        id: "4-1",
        number: "4.1",
        title: "Juvenile Games Structures & Regulations",
        content: `## Juvenile Games Structures & Regulations

### Overview

Juvenile Gaelic Games at St Pats are organised across four codes and two competitive structures:

| Structure | Age Groups | Type |
|-----------|-----------|------|
| CCC1 (Go Games) | U8–U12 | Non-graded, development-focused |
| CCC2 (Graded) | U13–Minor | Graded league and championship |

### CCC1 — Go Games (U8–U12)

CCC1 competitions are managed by Dublin GAA's County Committee for Children (CCC1). The Go Games format is designed to:
- Maximise playing time for every player
- Provide age-appropriate, enjoyable competition
- Prioritise participation and development over results
- Create positive first experiences of Gaelic Games

**Key Rules:**
- Every player on the panel must play in every game
- No official league tables or standings at most levels
- Modified formats appropriate to the age group
- See Appendix 4 (CCC1 Regulations 2025) for full detail

### CCC2 — Competitive (U13+)

CCC2 competitions are graded league and championship structures from U13 onwards. Teams are placed in divisions based on ability through grading processes.

**Key Rules:**
- Team sheets mandatory using Foireann
- Referee appointments through County Board structures
- Graded divisions: local leagues and county championships
- See Appendix 5 (CCC2 Regulations 2025) for full detail

### Girls' Competitions

| Code | Body | Competitions |
|------|------|-------------|
| LGFA (Girls' Football) | Dublin LGFA | Go Games (CCC1 equivalent) → Graded leagues/championship |
| Camogie | Dublin Camogie | Go Games → Graded leagues/championship |

See Appendices 2, 3, 19, 21 for relevant official guides.`
      },
      {
        id: "4-2",
        number: "4.2",
        title: "Playing Games Overview / Rules of Play",
        content: `## Playing Games Overview & Rules of Play

### Football Go Games — Format Summary

| Age Group | Format | Ball Size |
|-----------|--------|-----------|
| U8 | 7-a-side (small pitch) | Size 3 |
| U9 | 7-a-side | Size 3 |
| U10 | 9-a-side | Size 3/4 |
| U11 | 11-a-side | Size 4 |
| U12 | 13-a-side | Size 4 |

### Key Rule Points — Football

- **Substitutions:** Unlimited; every player must participate
- **Kick outs:** From 20m line; U13/U14 generally from hand
- **Rule Enhancements:** 40m scoring arc (2-point scores), kick-out mark beyond 40m, solo-and-go free kicks, 3v3 structure rule in some competitions
- **Tackling:** Controlled contact on the ball only; shoulder charges illegal
- **Player Eligibility:** All players must be registered on Foireann

### Hurling Go Games — Format Summary

| Age Group | Format | Sliotar |
|-----------|--------|---------|
| U8 | 7-a-side | Soft/sponge |
| U9 | 7-a-side | Size 3 |
| U10 | 9-a-side | Size 3 |
| U11 | 11-a-side | Size 4 |
| U12 | 13-a-side | Size 4 |

### Camogie Specific

- Mandatory helmet with full facial guard for all players
- 15-a-side standard; 12-a-side in some competitions
- Female Liaison Officer (FLO) required in every management team
- Players may individually choose skort, skirt, or shorts
- Hooking and blocking permitted; minimal side contact only
- Goal = 3 points; hand-pass may score a point only

See Appendices 13 and 14 for full Go Games playing rules.`
      },
      {
        id: "4-3",
        number: "4.3",
        title: "Equipment & Requisition Process",
        content: `## Purchase of Equipment / Requisition Process

Equipment must be ordered **centrally** to ensure fairness, control spending, avoid duplication, and protect club finances.

### Ordering Process

1. The Juvenile Chairperson and Vice Secretary advise Lead Mentors when the next order window is open
2. Teams submit all equipment requests through the designated club ordering contacts
3. All requests are reviewed against available club funds and approved through the Treasurer
4. Once approved, orders are placed centrally by the club
5. Lead Mentors are notified when equipment arrives for collection

> Teams are **not permitted** to place independent orders directly with suppliers unless expressly authorised.

### Standard Team Equipment

Available through the club ordering process:
- Footballs
- Sliotars
- Bibs
- Cones
- First aid kits

### Mouthguards

**All juvenile players must wear a mouthguard for all football training sessions and matches — no exceptions.**

- Players without a mouthguard must not take part in football activity
- Players may receive a card from the referee for not wearing a mouthguard in some competitions
- The Irish Dental Association recommends custom-fitted mouthguards for pre-teens and teenagers

### Kit & Jerseys

- Official match-day kit: club jersey + shorts/skorts + socks (O'Neills)
- Only approved club jerseys for official games
- **CCC2 (U13+):** Numbered jerseys required for official fixtures; remain under mentor control`
      },
      {
        id: "4-4",
        number: "4.4",
        title: "Mobile Goals / Goal Safety",
        content: `## Mobile Goals / Goal Safety

**Goal safety is a non-negotiable duty of care responsibility.**

### Rules for Mobile Goals

- Mobile goals must always be **secured correctly** using sandbags, heavy rubber weights, clips, or other approved anchoring methods
- Goals must be stable at all times when in use
- Mobile goals must be returned to designated storage areas after every use
- **Under no circumstances should children be allowed to climb, swing, or hang from goals**
- Mentors must check goal stability before every training session and match
- Slalom poles may be used with younger age groups — exercise caution as pointed ends present a safety risk

### Pitch Flags

- Lead Mentors should locate flags and goals prior to matches to ensure the pitch is ready for a timely throw-in
- Flags and corner posts should be inspected before use
- All pitch equipment must be returned to storage after use

### Equipment Safety Generally

- Check all equipment for damage before use
- Damaged equipment should be reported and removed from use
- Never improvise with non-standard equipment in a way that creates risk
- Be particularly careful with slalom poles and other pointed equipment around younger players`
      },
      {
        id: "4-5",
        number: "4.5",
        title: "Mouth Guards",
        content: `## Mouth Guards

### Policy

**All juvenile players must wear a mouth guard for all football training sessions and matches, without exception**, in line with GAA and LGFA regulations.

Mentors should treat mouth guards as standard required equipment — the same as boots or a helmet in hurling and camogie.

### Enforcement

- Any player without a mouth guard **must not** take part in football activity
- Depending on age grade regulations, players participating in a game without a mouth guard may receive a card from the referee
- Mentors are responsible for ensuring all players have their mouth guards before sessions begin

### Parent Communication

Parents and guardians should be reminded of the mouth guard requirement:
- At the Annual Parents Meeting
- At the start of the season via ClubZap
- Periodically throughout the year as a reminder

### Recommended Type

The **Irish Dental Association** recommends **custom-fitted mouth guards** for pre-teens, teenagers, and adults after baby teeth have been replaced. These provide greater protection and are generally more comfortable than standard "boil and bite" mouth guards.

Mentors can recommend that parents speak to their dentist about a custom-fitted guard.`
      },
      {
        id: "4-6",
        number: "4.6",
        title: "Kit / Jersey / Uniform / Coaches Bibs",
        content: `## Kit / Jersey / Uniform / Coaches Bibs

How teams present themselves on match day reflects the standards and values of the club. Mentors should lead by example.

### CCC1 (U8–U12) — Official Match-Day Kit

- Club jersey (O'Neills)
- Club shorts or skorts
- Club socks

### CCC2 (U13+) — Additional Requirements

- Numbered jerseys for official fixtures
- Requirements and allocation of numbered jersey sets should be agreed centrally
- Match jerseys from U13 upwards should remain under mentor control for games and competitions

### General Kit Rules

- Only **approved club match jerseys** (O'Neills) should be worn for official games unless otherwise agreed by the club
- The Lead Coach is responsible for the overall presentation and organisation of the team on match day
- Players should be turned out correctly and respectfully at all times

### Coaches Bibs

Mentors must comply with any county board requirements regarding:
- Coaches' bibs
- Sideline identification
- Official match-day regulations

Mentors should wear bibs at all competitive fixtures to clearly identify themselves as team management.`
      },
      {
        id: "4-7",
        number: "4.7",
        title: "What is Streaming?",
        content: `## What is Streaming?

### Definition

Streaming is placing players of similar ability on the same team, as opposed to having mixed-ability groups playing together.

### Why Do We Stream?

The central purpose of streaming is **player development** — particularly for players who are not among the strongest in the group. By placing these players together, they:
- Get more ball involvement
- Compete at an appropriate level
- Build confidence and skills
- Have more fun

Streaming also ensures stronger players are challenged appropriately.

### How Do We Stream?

Streaming is a **player-centred process**. Mentors aim to find the right team for each player in order to develop their confidence, skills, and participation.

### Approaches to Streaming

**Standard approach:** Rank all players by ability and assign them to teams accordingly.

**Alternative approach:** Rank players but establish a group of "marginal" A/B or B/C players who alternate between teams at the mentor's discretion.

In either case, the full mentoring team for the year should meet at the beginning of the season, review each player, and agree on an approach. Mentors with a child in the group are encouraged not to offer an opinion on their own child's placement.

### Is Streaming Fixed?

**No.** Players develop at different rates. The coaching group should review panels at minimum:
- At the start of the season
- After Easter
- After the summer break

Moving between panels (in either direction) is normal and positive — it should be treated as a development opportunity.`
      },
      {
        id: "4-8",
        number: "4.8",
        title: "St Pats Policy on Streaming",
        content: `## St Pats Policy on Streaming

### Club Principals

- The goal is **not** to label children or create fixed groups
- Streaming is **player-centred** — it is about development, not ego
- It should improve challenge and ball involvement for players at **all** ability levels
- It is reviewed regularly and is never fixed for the whole year
- The wider age group should still feel like one group
- Parents should understand the **why** before they focus on the label
- The coaching group reviews panels at the start of the season and at agreed points

### Club Policy on Streaming During Training

- Training together maintains group identity and makes movement between panels more natural
- At times, training may split into smaller groups based on ability, in order to challenge players appropriately
- All players should have equal access to all coaches during each session

### Club Policy on Streaming During Go Game Matches

- The club encourages a **blended approach** to streaming
- Coaching groups assess, review, and group players periodically based on playing ability (A/B/C)
- The composition of teams should **never be fixed** — there should be regular movement across teams (usually one level of movement up and down)
- **No player should have a fixed place on any one team for a full season** — every player should be rotated
- Coaches should rotate among teams to ensure all players get access to all coaches

### Age-Specific Notes

**Boys (Football & Hurling):** Streaming begins at U9 in preparation for graded CCC2 competitions which commence at U12.

**Girls (Football & Camogie):** Teams graded at the start of each year in January. All Girls 2 teams should review and submit panels in January. Panels can be changed before the Dublin Championship.`
      },
      {
        id: "4-9",
        number: "4.9",
        title: "Referees",
        content: `## Referees

### Our Culture

Referees are essential volunteers within Gaelic Games. The standard the Club sets around referee treatment is a visible test of culture and leadership.

Naomh Pádraig Donabate is committed to creating an environment where referees — including juvenile referees — feel valued, respected, and supported.

The Club expects all members to support referees and respect their decisions at all times in line with the principles promoted by the GAA, LGFA and Camogie Association.

### Before the Match

For Go Games, the Lead Mentor is encouraged to **brief the referee before throw-in**. Once the game commences, **no further communication with the referee should take place** — this applies to all mentors on both sides and should be communicated to all mentors prior to throw-in.

### Match Day Standards

- Welcome the referee respectfully on arrival
- Prepare referee fee where applicable
- Mentors wear bibs and remain in designated sideline areas
- **Abuse, intimidation, sarcasm, or persistent questioning of referees is not acceptable under any circumstances**
- Sideline behaviour should always reflect the Club values of respect, inclusion and sportsmanship
- Any concerns about refereeing must be raised through appropriate channels — never through confrontation on match day

### Referee Appointments

| Competition | How Referees are Appointed |
|-------------|--------------------------|
| CCC1 (U8–U12) | Club may provide home referees; coordinated through referee coordinators |
| CCC2 (U13+) | Referees appointed through County Board structures |
| LGFA/Camogie | Varies by competition — check current county guidance |

### Home Team Responsibilities

The **home team** is responsible for:
- Contacting the referee in advance to confirm availability
- Confirming venue, throw-in time, and pitch details
- Notifying the referee immediately of any changes or cancellations

Failure to notify the referee of changes may result in referee fees still being payable.

---

## St Pats Policy on Mentor Interactions with Underage Referees

Creating pathways for young people to participate in our games extends beyond playing — it includes affording them developmental opportunities such as training to become referees.

All underage referees undertake an approved certified programme which ensures their knowledge of strict guidelines for refereeing underage matches. It also promotes impartiality, safeguarding of young players, constructive communication, and upholding of the "Give Respect – Get Respect" initiative.

### One Named Mentor Rule (CCC1 & CCC2)

**St Pats policy for underage matches (CCC1 & CCC2):**

> The **lead mentor or their nominated mentor** for the given match is the **only mentor** permitted to engage directly with the referee, unless there is a player safety issue.

This allows the referee to focus on the match, other mentors to support their team, and prevents distraction of juvenile players. All mentors are required to wear bibs at matches so that the referee can clearly identify who is a mentor.

- Engagement between referees and mentors should be **minimal at half-time** and only where there is a player safety issue.
- After the match, mentors are encouraged to talk constructively with underage referees — discussing decisions in a supportive way assists in building their confidence and skills.

### Sanctions for Breaches

| Breach | Consequence |
|--------|-------------|
| Unnamed mentor engages with the referee | 4-week suspension from attending matches as a team mentor |
| Recurrent breach | Potential permanent ban from attending juvenile matches as a mentor for that team |
| Misconduct (abuse from coaches, parents, or players) | Reported to Referee Coordinator, Juvenile Chair, or Children's Officer; may be referred to formal Code of Behaviour Hearings |

Where a mentor is suspended, all other team mentors are expected to support adherence to this policy and model good behaviour for players and underage referees.

### Matchday Responsibilities Summary

| Action | Responsible |
|--------|-------------|
| Referee arrives 10 minutes before match; meets both teams' mentors | Underage Referee |
| All mentors identified with bibs | Team Mentors |
| Lead mentor or nominated lead identified to referee before game | Team Lead / Nominated Mentor |
| After match: constructive discussion with referee on decisions | Team Lead / Nominated Mentor & Referee |
| Breach of one-named-mentor policy reported | Referee Coordinator |
| Mentor advised of suspension | Juvenile Chair / Children's Officer |`
      },
      {
        id: "4-10",
        number: "4.10",
        title: "Team Sheet Submissions",
        content: `## Team Sheet Submissions

### CCC1 (U8–U12)

- Team sheets are **not required** in most CCC1 competitions
- Eligibility issues should be directed through the Club Secretary to Parnell Park
- **Camogie exception:** Team sheets required for every second fixture from U8; every fixture from U9 up — submit via gogames.dublin@camogie.ie

### CCC2 (U13+)

Team sheets are **mandatory** for all CCC2 games.

**How to Generate a Team Sheet:**
1. Navigate to **foireann.ie** or the Foireann app
2. Select your registered team
3. Download the official Foireann team sheet
4. Fill in player numbers, opposition, and date on match day
5. Hand to the referee before throw-in

**Required Information:**
- Player registration numbers (from Foireann)
- Mentor/management registration numbers
- Player jersey numbers (for CCC2)

### LGFA Team Sheets

LGFA team sheet rules vary by competition. Check current county guidance and the Foireann system for the correct format. The LGFA Secretary (Elaine Walsh) can assist.

### Camogie Team Sheets

CC2/Foireann team sheets required. Must be signed by an authorised official. Failure may result in a fine.

> Mentors should familiarise themselves with team sheet requirements before the first competitive fixture of the season.`
      },
      {
        id: "4-11",
        number: "4.11",
        title: "Return of Match Results",
        content: `## Return of Match Results

### Who Submits Results?

Result submission responsibilities depend on the competition:
- **CCC1 Go Games** — results are typically not formally recorded in the same way as CCC2
- **CCC2 Football & Hurling** — results submitted through designated channels to Dublin GAA
- **LGFA** — results submitted through Dublin LGFA channels
- **Camogie** — results submitted through Dublin Camogie channels

### How to Submit

CCC2 results are submitted online through the relevant county board systems. Mentors should familiarise themselves with the submission process at the start of the season. The Juvenile Secretary can assist with any queries.

### Timely Submission

Results should be submitted promptly after each match. Late or missing result submissions can:
- Affect league table accuracy
- Result in administrative penalties
- Cause issues with grading calculations

### Non-Fulfilment of Fixtures

Where a game is **not played or postponed**, the Home Mentor must email the relevant body:
- **GAA/Hurling:** juvresults@dublingaa.ie
- **Camogie:** gogames.dublin@camogie.ie
- **LGFA:** smallsidedgamesdlgfa@gmail.com

The email should clearly state the reason the fixture did not take place.`
      },
      {
        id: "4-12",
        number: "4.12",
        title: "Challenge Matches / Friendly Games",
        content: `## Challenge Matches / Friendly Games

### Purpose

Challenge games and friendly fixtures are an important part of the juvenile programme. They:
- Give players additional game experience
- Allow mentors to test game plans in low-pressure environments
- Provide opportunities for players who may not be getting as much competitive action
- Build relationships with other clubs in the county

### Arranging a Challenge Match

**Before arranging any challenge match:**
1. Check pitch availability with the Fixtures Coordinator — **do not agree a fixture before confirming pitch availability**
2. Agree with the opposing team's Lead Mentor
3. Submit a request through the official pitch booking process

Challenge game pitch allocations should alternate between home and away, to protect club pitches.

### LGFA Requirements

For LGFA challenge matches and blitzes, the **LGFA Secretary must submit a request for approval** to the county board a minimum of **48 hours in advance**, including:
- Name of host club and visiting club(s)
- Location, date, and time
- Number of teams participating
- Duration of event

**Submit to:** stpatricksdonabate.dublin@lgfa.ie

Formal approval will be issued by the LGFA for insurance and player welfare purposes.`
      },
      {
        id: "4-13",
        number: "4.13",
        title: "Féile Competitions",
        content: `## Féile Competitions

### What is Féile?

**Féile na nGael** (hurling/camogie) and **Féile Peil na nÓg** (football) is the largest underage GAA festival in the world. It takes place annually at U14 level.

Féile is a highlight of the juvenile calendar — the competition, cultural experience, and social experience of hosting or travelling away makes it unique.

### The Two Phases

**Phase 1 — County Qualifiers:** Teams compete in county-level qualifiers in Dublin. Only qualifying teams progress to the national finals.

**Phase 2 — National Finals:** Held over a long weekend at designated host venues around Ireland. Teams stay in host family homes, representing club and county.

### Rules & Charter

- **Appendix 10** — Féile Rules 2025
- **Appendix 11** — Féile Checklist for Mentors
- **Appendix 18** — John West Féile Charter 2025

### Planning for Féile

Planning must begin **at least 9 months in advance**. Key areas:
- Player selection and panel communication
- Fundraising for travel, accommodation, and expenses
- County qualifier schedule and results
- Host family coordination (if hosting)
- Travel arrangements for away Féile

> Mentors who hosted Féile in previous years are a valuable resource — reach out to them early. See also the **Féile Checklist** (Appendix 11) for structured planning guidance.`
      },
      {
        id: "4-14",
        number: "4.14",
        title: "Féile Checklist for Mentors",
        content: `## Féile Checklist for Mentors

Planning for Féile is complex and benefits from a structured approach. The full **interactive Féile checklist** is available in the Mentor Checklists section of this handbook (Checklist #11 — *U15 Féile Planning & Matchday*).

The checklist covers nine planning stages:

| # | Stage | Typical Timing |
|---|-------|---------------|
| 1 | **Féile Preparation Timeline** | Season-wide overview |
| 2 | **Administration & Compliance** | 12–14 weeks before |
| 3 | **Féile Planning** | 6–8 weeks before |
| 4 | **Parent Communication** | 6–8 weeks before |
| 5 | **Logistics & Operations** | Ongoing |
| 6 | **Player Welfare & Safety** | Ongoing |
| 7 | **Final Week Preparation** | 1 week before |
| 8 | **Féile Matchday** | Matchday |
| 9 | **Post-Féile Review** | After the event |

### Key Planning Areas

**Administration & Compliance (12–14 Weeks Before)**
- Confirm the coaching team, roles, and First Aid cover
- Verify all player eligibility and registration
- Nominate official photographer; confirm social media permissions
- Finalise fundraising and gear order

**Parent Communication**
- Hold a Féile parent meeting early — cover format, travel, fundraising, sideline behaviour, and volunteers
- Establish a clear communication channel for the Féile weekend

**Logistics & Operations**
- Confirm fixtures, venues, throw-in times, and referee arrangements
- Organise transport and itinerary with contingency time
- Pack: jerseys, match balls/sliotars, bibs, cones, water, first aid kit, ice packs, coaches' bibs, team sheets

**Player Welfare & Safety**
- Confirm first aid cover and nearest AED location
- Ensure no player is left unsupervised at any time
- All photographs through the official photographer and approved club channels only

**Final Week**
- Reduce training volume, maintain intensity
- Confirm player availability, jersey numbering, and roles
- Finalise the matchday timetable

**Matchday**
- Arrive early; set up team base and warm-up area
- Meet referee; complete team sheets
- Positive sideline behaviour throughout
- Account for all players; return equipment; update parents

**Post-Féile**
- Hold a mentor review meeting
- Document lessons learned and share with the Juvenile Committee
- Celebrate player effort and achievement

> See also: **Appendix 10** (Féile Rules 2025), **Appendix 11** (Féile Checklist — printable), **Appendix 18** (John West Féile Charter 2025)`
      },
      {
        id: "4-15",
        number: "4.15",
        title: "Playing Within Age",
        content: `## Club Policy on Playing Within Age

### Default Position

The club's default position is that **players must train and play within their natural age group**. This protects development, supports welfare, and prevents inconsistency between teams.

### Playing Up — When It May Be Appropriate

Playing up may be appropriate in limited circumstances but should **never** become a casual solution that:
- Undermines the younger player's own team
- Displaces older players unfairly

### Rules for Playing Up

- **Parent/guardian consent is required** where a player is asked to play up
- **A younger player's own age-group fixture takes priority** in the event of a clash
- The child's welfare, confidence, and development must **outweigh short-term team convenience**

### Resolving Disagreements

Where there is a disagreement between mentors about temporary release of a player to play up:
1. First refer to the **Juvenile Chairperson** for a decision
2. If either mentor disagrees, it may be appealed to the **Club Executive**

The full playing-up policy is available at: **Appendix 35** (St Pats GAA Juvenile Playing Policy — Age)

> Players should not be pressured to play up. The decision should always be made in the best interest of the child.`
      },
      {
        id: "4-16",
        number: "4.16",
        title: "Competitive Teams",
        content: `## Competitive Teams

From the point at which an age group has multiple teams and enters graded competition, some teams may operate at a more competitive level than others.

**This does not mean one group of children matters more than another** — it simply means expectations may need to be more clearly defined.

### Principles for Competitive Teams

- All teams should aim to be as competitive as possible within the capability of that individual team, **but not at the expense of equal development opportunities for all players**
- Parents and players should understand the expectations **before the season starts**
- At younger ages, development and broad game involvement remain the priority
- At older youth stages, commitment, player attitude, and the needs of the game may have a greater influence on playing time
- **Lower-graded teams must receive equally strong coaching support** — being in a B or C team does not mean you get less coaching attention

### Communication

Mentors should communicate clearly and respectfully with parents about what competitive level means in practice — including what it means for playing time, development, and expectations.

The annual parents meeting is the right forum for this conversation.`
      },
      {
        id: "4-17",
        number: "4.17",
        title: "Grading Principles",
        content: `## Grading Principles

### What is Grading?

From **U12 (Boys)** and **U13 (Girls)** onwards, teams compete in grading games to determine the most appropriate division for the upcoming season.

The purpose of grading is to place teams where they can **compete appropriately**, develop their skills, and continue to enjoy their games — not to win divisions at all costs.

### St Pats Approach

The club's goal during grading is to enter teams in the most competitive league possible while ensuring:
- Games remain competitive and enjoyable
- Players develop with confidence
- Teams win approximately **40–60%** of games over a season

### Boys Grading Guidelines

| Band | Movement |
|------|---------|
| "A" players | Play at A level only |
| "A/B" players | May move between A and B panels |
| "B/C" players | May move between B and C panels |
| "C" players | Remain at C until ready to progress |

**These groupings are guidelines only — never permanent labels.**

### Girls Grading Guidelines

LGFA and Camogie regulations are often more restrictive. Panel reviews before teams are submitted carry more weight. Greater emphasis must be placed on careful review before entries are finalised.

### Club Principles

- Grading is always player-centred and development-focused
- Development, attitude, attendance, effort, and commitment all form part of grading decisions
- Lower-graded teams should receive strong coaching support and developmental opportunities
- The wider year group should continue to train and identify as one overall group where possible

### Panel Reviews

The coaching group should review panels:
- At the start of the season (before entries finalised)
- After significant changes in player development or attendance
- At agreed review points during the season`
      },
      {
        id: "4-18",
        number: "4.18",
        title: "Guidance on Player Nominations",
        content: `## Guidance on Nominations of Players

### Overview

The club recognises that intercounty and Player Development Programme (PDP) opportunities can be positive and rewarding experiences for players. These pathways should support long-term player development while remaining aligned to the club's values.

### PDP — LGFA & Camogie

The **LGFA Player Development Programme (PDP)** provides players with access to additional high-quality coaching outside their club. Typically covers U13/U15/U17.

Dublin LGFA contacts the club secretary when nominations are sought. Deadline is tight — mentors should begin identifying potential nominees from January.

### Intercounty Trials — GAA Football & Hurling

At **U14**, Dublin GAA contacts the lead mentor regarding a 7-a-side Talent Identification blitz. Each club can bring a maximum of **10 U14 players** (minimum 7 from the correct birth year).

Selection criteria: Skill (most important), Speed, Intensity, Commitment, Interest in sport.

### Selection Structure

All nominations must go through a **small Selection Group**, not a single individual:
- Lead Mentor and coaching team from the relevant age group
- Neutral Intercounty Selection Committee appointed by the club
- Selection Committee members should attend relevant matches in the months preceding nominations

### Selection Considerations

**Players:** Skill, speed, coachability, attitude, consistency, readiness, emotional maturity, and the player's own interest and willingness.

**Important:** Selections should not be based solely on isolated performances, physical maturity, or one team within the age group. All teams and streams must be considered fairly.

### Key Principle

> Player welfare and long-term development always come before short-term success or reputation. Nomination is a development opportunity, not a final judgement on a player's potential.`
      }
    ]
  },
  {
    id: "s5",
    number: "5",
    title: "Pitches & Facilities",
    icon: "🏟️",
    subsections: [
      {
        id: "5-1",
        number: "5.1",
        title: "Ballymastone Facilities Overview",
        content: `## Ballymastone Facilities Overview

**Ballymastone** is the central training and match venue for all adult and juvenile teams at Naomh Pádraig Donabate.

### Facilities

- Three full-sized grass pitches
- All-weather pitch
- Ball wall
- Gym access
- Dressing rooms
- Clubhouse

### Location

**Saint Patrick's GAA Club**
Robbie O'Farrell Park
Portrane Demesne
Portrane, Co. Dublin
**Eircode: K36 A3E7**

### Pitch Access

- Pitch access and training allocations are coordinated by the **Pitch Allocation / Fixtures Coordinator** (Jayne Elmiger-Coffey)
- Teams should only use pitches and time slots officially assigned to them
- All members must respect any **"Pitch Closed"** notices issued by the Facilities Group or Club Executive
- Goals, equipment, and shared areas must be left safely and respectfully after every use

### Sharing the Facility

As Ballymastone is heavily used throughout the week across adult and juvenile activity:
- **Orderly planning, communication, and mutual respect are essential**
- Unofficial or informal arrangements for additional pitch time are not permitted
- All booking requests must go through the official pitch booking process`
      },
      {
        id: "5-2",
        number: "5.2",
        title: "Pitch Equipment",
        content: `## Pitch Equipment

### Mentor Access

Lead Mentors should be provided with access to certain pitch-side facilities and equipment storage areas as approved by the club.

**Access may include:**
- Ball wall
- Dressing rooms
- All-weather pitch facilities

All keys and access privileges are **club property** and should be used responsibly. Keys must not be copied or shared without authorisation.

### Equipment Storage

- Mobile goals, nets, and training equipment must be stored safely and securely after every use
- Proper storage protects equipment and supports the Grounds Team in maintaining pitches
- Storage containers and equipment areas are **shared club resources** — leave them tidy and ready for the next group

### Equipment Allocation

Each age group has an **allocated storage section**, generally shared between boys' and girls' teams within the same age group. Teams move into the storage section assigned to their new age grade each January.

### Reporting Issues

Any of the following should be reported promptly through the appropriate club contact:
- Equipment damage
- Lost keys
- Security concerns
- Ongoing access issues`
      },
      {
        id: "5-3",
        number: "5.3",
        title: "Fixtures & Pitch Bookings",
        content: `## Fixtures & Pitch Bookings

The Pitch Allocation Team / Fixtures Coordinator has **sole responsibility** for all official pitch bookings and allocations.

### Booking Rules

- All booking requests and fixture enquiries must be sent to the **Pitch Allocation Team** (Jayne Elmiger-Coffey)
- Only requests submitted through the official process will be considered
- **Before organising a challenge match, check pitch availability first**
- Early communication is strongly encouraged — late requests significantly reduce the chance of a solution
- An unplayable opposition pitch does **not** automatically mean St Pats can facilitate a late venue switch

### Live Schedule

The live training and pitch allocation schedule is maintained separately as a Google Sheet. This should always be treated as the **most up-to-date reference** for current allocations and changes.

### Challenge Game Allocations

For challenge games, pitch allocations should **alternate between home and away fixtures** to protect and preserve club pitches throughout the season.

### Fixture Committee

The Fixtures Committee works with:
- Dublin GAA County Board
- Dublin Camogie Board
- Dublin Ladies Football Board

Each body independently schedules its own competitions. The Fixtures Committee has the final decision on timing, location, and allocation of matches and training sessions at Ballymastone.`
      },
      {
        id: "5-4",
        number: "5.4",
        title: "Training Schedules",
        content: `## Training Schedules

### Allocation Principles

Training schedules at Naomh Pádraig Donabate are planned around age profile, daylight availability, facility capacity, and the large number of teams sharing Ballymastone each week.

| Principle | Detail |
|-----------|--------|
| Slots assigned to age groups | Not to individual A/B/C teams |
| Younger groups | Earlier evening slots where possible |
| Frequency | Two training opportunities per week, subject to availability |
| Winter allocation | Balance between all-weather, ball wall, and grass pitches |
| Winter grass | One all-weather/ball-wall + one grass per week where conditions allow |

### Checking the Schedule

Mentors should **always check the live training schedule** before requesting changes or additional access. The schedule is maintained as a live Google Sheet (link available through the Juvenile Secretary).

### Additional Allocations

Where additional capacity becomes available, some extra allocations may be provided to older competitive teams where appropriate — but this is at the discretion of the Pitch Allocation Team and cannot be assumed.`
      },
      {
        id: "5-5",
        number: "5.5",
        title: "Storage",
        content: `## Storage

Naomh Pádraig Donabate currently has **two shared storage containers** on site.

### Storage Allocation

- Each age group has an **allocated storage section**, generally shared between boys' and girls' teams of the same age group
- Age groups move into the storage section assigned to their new age grade each **January** — the sections remain fixed while teams progress through them

### Storage Rules

- Storage areas are shared club resources — keep them **organised, safe, and usable** for all groups
- Teams should only use their allocated section
- Remove broken, damaged, or unused equipment regularly
- Label helmets, bottles, tops, and specialty equipment clearly where possible
- Shared containers should be left tidy after every session
- **Equipment must not block walkways, exits, or shared access points**
- Major storage issues or access problems should be reported through the appropriate club contact`
      },
      {
        id: "5-6",
        number: "5.6",
        title: "Lighting",
        content: `## Pitch Lighting

Pitch lighting is an important club resource and should be used responsibly.

### Rules

- Only **approved personnel** should operate pitch lighting systems
- Do not leave lights running unnecessarily after sessions or matches
- If you are **the last group** using a lit area, you are responsible for ensuring the lights are turned off
- Report any faults or lighting issues promptly to the Grounds Team

### Switch Locations

Light switches for the **all-weather pitch**, **ball wall**, and **near side of Pitch 1** are located in the clubhouse:
- Turn right at the Committee Room
- Labelled switches are located behind the doors directly ahead
- Pitch 2 instructions can also be found here`
      },
      {
        id: "5-7",
        number: "5.7",
        title: "Lost Property",
        content: `## Lost Property

Lost property should be handled promptly and respectfully to avoid unnecessary build-up within the clubhouse.

### Process

- Any lost property found should be placed in the designated **lost property area** in the back left dressing room of the clubhouse
- Use team ClubZap channels to notify parents of missing or recovered items
- Coaching groups should periodically remind parents and players to **label** helmets, bottles, tops, jackets, and personal gear

### Prevention

- Encourage players to label all personal equipment clearly
- Carry out a quick sweep of the training area at the end of each session
- Remind parents and players at the start of each season`
      },
      {
        id: "5-8",
        number: "5.8",
        title: "All-Weather Pitch & Ball Wall",
        content: `## All-Weather Pitch & Ball Wall

### All-Weather Pitch

The all-weather pitch at Ballymastone provides a year-round training surface that is not weather-dependent.

**Key points:**
- Access is by key — Lead Mentors should request access through the Juvenile Chairperson or Fixtures Coordinator
- All-weather pitch allocations are managed through the live pitch schedule
- Normal pitch rules apply — goals must be secured, equipment must be returned to storage, lights must be turned off

### Ball Wall

The ball wall is a valuable facility for individual and small-group skill development.

**Key points:**
- Access is by key
- Sessions at the ball wall should be planned in advance and included in the allocation schedule
- The ball wall is particularly useful for hurling, camogie, and football striking practice
- Winter allocations typically include a ball wall slot for each age group

### Key Access

All keys are club property. If you are assigned a key:
- Keep it safe and secure
- Do not copy or share without authorisation
- Return it promptly if your role changes
- Report any lost keys to the Grounds Team immediately`
      }
    ]
  },
  {
    id: "s6",
    number: "6",
    title: "Resources & Appendices",
    icon: "📚",
    subsections: [
      {
        id: "6-1",
        number: "6.1",
        title: "Useful Links & Online Resources",
        content: `## Useful Links & Online Resources

### Club Resources

| Resource | Description |
|----------|-------------|
| **St Pats Donabate Website** | stpatsgaa.com — membership, fixtures, news, downloads, policies |
| **ClubZap** | Official communication platform for fixtures, training, attendance, parent comms |
| **St Pats on X (Twitter)** | @StPatsDonabate — news, fixtures, match results |
| **St Pats Instagram** | stpatsdonabate — club photos, events, community updates |
| **St Pats Facebook** | Club community updates, events, announcements |
| **Pitch Allocation Spreadsheet** | Live weekly pitch allocation (Google Sheets — link via Juvenile Secretary) |
| **Club Child Protection Section** | Safeguarding guidance, Code of Behaviour, Garda Vetting info |
| **Club Injury Procedure & Physio Policy** | Injury reporting, injury fund claims, physio procedures |

### Coaching & Games Development

| Resource | Description |
|----------|-------------|
| **Tobar** | learning.gaa.ie — coaching courses, safeguarding cert, CPD |
| **GAA Official Website** | gaa.ie — rules, governance, coaching resources |
| **Dublin GAA** | dublingaa.ie — county board regs, CCC, fixtures, forms |
| **Dublin GAA Games Development** | Coaching supports, workshops, skill development |
| **ICGG (Introduction to Coaching Gaelic Games)** | Entry-level coaching qualification on Tobar |
| **Award 1 Coach Education** | Coaching pathway for juvenile mentors (Tobar) |
| **Award 2 Coach Education** | Advanced coaching qualification (Tobar) |
| **Leinster GAA Coaching Resources** | Templates, coaching supports, development resources |

### Football, Hurling, Camogie & LGFA

| Resource | Description |
|----------|-------------|
| **Dublin Ladies Gaelic Football** | dublinladiesgaelic.ie — fixtures, regulations, coaching |
| **LGFA Official Website** | lgfa.ie — official guide 2026, development guidebook |
| **Camogie Association** | camogie.ie — regulations, coaching, development |
| **Dublin Camogie** | County camogie fixtures, regulations, club resources |

### Administration & Player Development

| Resource | Description |
|----------|-------------|
| **Foireann** | foireann.ie — membership, vetting, qualifications, team sheets |
| **Player Passport** | Youth athletic development and skills challenge platform |
| **GAA15 Warm-Up** | Evidence-based injury prevention warm-up programme |
| **Fuel Your Game** | Nutrition resources for players, parents, and mentors |

### Recommended Mentor Bookmarks

1. St Pats Donabate Website (stpatsgaa.com)
2. Foireann (foireann.ie)
3. Tobar Learning Portal (learning.gaa.ie)
4. Dublin GAA (dublingaa.ie)
5. Dublin Ladies Gaelic Football (dublinladiesgaelic.ie)
6. Dublin Camogie (dublincamogie.ie)
7. ClubZap
8. Pitch Allocation Spreadsheet (link via Juvenile Secretary)`
      },
      {
        id: "6-2",
        number: "6.2",
        title: "Mentor Checklists",
        content: `## Mentor Checklists

The best coaching groups are organised, consistent, and positive.

These checklists are designed to help mentors stay prepared, reduce stress, and create the best possible experience for players. All progress is saved automatically on this device.

### The 10 Mentor Checklists

| # | Checklist | When to Use |
|---|-----------|-------------|
| 1 | **Mandatory Mentor Compliance** | Before any mentor is active with a team |
| 2 | **Pre-Season Planning** | At the start of each season |
| 3 | **Start-of-Season Coaching** | First weeks of the season |
| 4 | **Term / Block Planning** | Every 6–8 weeks |
| 5 | **Weekly Coaching Session** | Before/during/after each training session |
| 6 | **Matchday Preparation** | Before/during/after each fixture |
| 7 | **Referee & Fixture** | Each weekly fixture |
| 8 | **Safeguarding & Welfare** | Ongoing throughout season |
| 9 | **Equipment & Facilities** | Regular equipment check |
| 10 | **End-of-Season** | At the end of each season |

Click **"Checklists"** in the navigation to use the interactive checklists with checkboxes and progress tracking.`
      },
      {
        id: "6-3",
        number: "6.3",
        title: "Appendices",
        content: `## Appendices

The following 38 documents are available in the St Pats Juvenile Handbook 2026.

Each appendix is referenced throughout this handbook where relevant. Click any document card to view it — uploaded documents will open for viewing; placeholder cards indicate documents pending upload.

### Categories

| Category | Documents |
|----------|-----------|
| Regulations & Rules | CCC1 & CCC2 regs, LGFA & Camogie guides, Go Games rules, Féile rules |
| Safeguarding & Welfare | Child Safeguarding Statement, GAA Code of Best Practice |
| Club Policies | Playing policy, gear order form |
| Coaching Resources | LTAD cheat sheet, Go Games activities, skills workshops, nursery resources |
| Player Development | Skills charts (Football, Hurling, Camogie, LGFA), LGFA development guidebook |
| Health & Wellbeing | Healthy eating guides for coaches and parents |
| Planning & Templates | Session planners, annual calendars, parent meeting template, six-week blocks |

Use the **Appendices** tab in the navigation to browse all 38 documents.`
      }
    ]
  }
];

export function searchContent(query: string) {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  const results: Array<{
    sectionId: string;
    sectionNumber: string;
    sectionTitle: string;
    subsectionId: string;
    subsectionNumber: string;
    subsectionTitle: string;
    excerpt: string;
  }> = [];

  for (const section of sections) {
    for (const sub of section.subsections) {
      const haystack = `${sub.title} ${sub.content}`.toLowerCase();
      if (haystack.includes(q)) {
        const idx = haystack.indexOf(q);
        const start = Math.max(0, idx - 80);
        const end = Math.min(sub.content.length, idx + 140);
        const raw = sub.content.slice(start, end).replace(/[#|*_`]/g, '').replace(/\s+/g, ' ').trim();
        results.push({
          sectionId: section.id,
          sectionNumber: section.number,
          sectionTitle: section.title,
          subsectionId: sub.id,
          subsectionNumber: sub.number,
          subsectionTitle: sub.title,
          excerpt: (start > 0 ? '...' : '') + raw + (end < sub.content.length ? '...' : '')
        });
      }
    }
  }
  return results.slice(0, 15);
}
