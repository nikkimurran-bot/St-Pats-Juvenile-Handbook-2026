export interface ChecklistItem {
  id: string;
  text: string;
}

export interface ChecklistSection {
  title: string;
  items: ChecklistItem[];
}

export interface Checklist {
  id: string;
  number: number;
  title: string;
  description: string;
  sections: ChecklistSection[];
}

export const checklists: Checklist[] = [
  {
    id: "checklist-1",
    number: 1,
    title: "Mandatory Mentor Compliance",
    description: "Before any mentor is active with a team — all items below must be completed.",
    sections: [
      {
        title: "Safeguarding & Compliance",
        items: [
          { id: "1-s-1", text: "Garda Vetting completed and in date" },
          { id: "1-s-2", text: "Safeguarding course completed and in date" },
          { id: "1-s-3", text: "Registered on Foireann" },
          { id: "1-s-4", text: "Paid-up club member" },
          { id: "1-s-5", text: "Completed ICGG / Foundation Course" },
          { id: "1-s-6", text: "Mentor ratified by Club Executive" },
          { id: "1-s-7", text: "Contact details supplied to Lead Mentor / Registrar" },
          { id: "1-s-8", text: "Agreed to Club Code of Behaviour" },
          { id: "1-s-9", text: "Aware of Child Protection procedures" },
          { id: "1-s-10", text: "Knows Children's Officer and DLO contact details" }
        ]
      },
      {
        title: "Recommended Qualifications",
        items: [
          { id: "1-r-1", text: "First Aid / CPR qualified" },
          { id: "1-r-2", text: "Attended coaching workshop or CPD session" },
          { id: "1-r-3", text: "Familiar with Go Games / CCC regulations" },
          { id: "1-r-4", text: "Familiar with streaming and player pathway policy" },
          { id: "1-r-5", text: "Ideally completion of Level 1 and progressing to Level 2 when relevant" }
        ]
      }
    ]
  },
  {
    id: "checklist-2",
    number: 2,
    title: "Pre-Season Planning",
    description: "Complete before the season begins — team setup, parent communication, and administration.",
    sections: [
      {
        title: "Team Setup",
        items: [
          { id: "2-t-1", text: "Confirm expected player numbers" },
          { id: "2-t-2", text: "Confirm mentor group and role split" },
          { id: "2-t-3", text: "Confirm communication channels" },
          { id: "2-t-4", text: "Set up ClubZap / Teamer groups" },
          { id: "2-t-5", text: "Confirm emergency contact access" },
          { id: "2-t-6", text: "Confirm medical information process" },
          { id: "2-t-7", text: "Agree coaching philosophy and season goals" },
          { id: "2-t-8", text: "Review player pathway expectations for age group" },
          { id: "2-t-9", text: "Review LTAD focus for the age" }
        ]
      },
      {
        title: "Parent Communication",
        items: [
          { id: "2-p-1", text: "Schedule annual parent meeting" },
          { id: "2-p-2", text: "Prepare parent meeting agenda" },
          { id: "2-p-3", text: "Communicate attendance expectations" },
          { id: "2-p-4", text: "Explain team structures and streaming approach" },
          { id: "2-p-5", text: "Explain communication process" },
          { id: "2-p-6", text: "Discuss sideline behaviour expectations" },
          { id: "2-p-7", text: "Explain safeguarding and welfare supports" },
          { id: "2-p-8", text: "Ask parents about medical / behavioural considerations" },
          { id: "2-p-9", text: "Seek volunteers for support roles" }
        ]
      },
      {
        title: "Administration",
        items: [
          { id: "2-a-1", text: "Confirm all players registered on Foireann" },
          { id: "2-a-2", text: "Confirm all mentors ratified by Executive" },
          { id: "2-a-3", text: "Review competition rules for age group" },
          { id: "2-a-4", text: "Review CCC / LGFA / Camogie regulations" },
          { id: "2-a-5", text: "Confirm training slots and pitch access" },
          { id: "2-a-6", text: "Confirm equipment stock" },
          { id: "2-a-7", text: "Confirm jersey availability" },
          { id: "2-a-8", text: "Confirm access to first aid kit and AED" },
          { id: "2-a-9", text: "Create season calendar" }
        ]
      }
    ]
  },
  {
    id: "checklist-3",
    number: 3,
    title: "Start-of-Season Coaching",
    description: "Coaching preparation at the start of the season.",
    sections: [
      {
        title: "Coaching Preparation",
        items: [
          { id: "3-c-1", text: "Create seasonal coaching plan" },
          { id: "3-c-2", text: "Create first 6-week block plan" },
          { id: "3-c-3", text: "Identify key skills for this age group" },
          { id: "3-c-4", text: "Agree coaching language and standards" },
          { id: "3-c-5", text: "Plan football and hurling/camogie balance" },
          { id: "3-c-6", text: "Build session templates" },
          { id: "3-c-7", text: "Plan player assessments / challenges" },
          { id: "3-c-8", text: "Schedule player pathway reviews" }
        ]
      },
      {
        title: "Team Culture",
        items: [
          { id: "3-tc-1", text: "Establish team rules and standards" },
          { id: "3-tc-2", text: "Promote enjoyment and participation" },
          { id: "3-tc-3", text: "Reinforce respect for referees and opponents" },
          { id: "3-tc-4", text: "Encourage player confidence and decision making" },
          { id: "3-tc-5", text: "Ensure all players feel included" },
          { id: "3-tc-6", text: "Create positive sideline environment" }
        ]
      },
      {
        title: "Equipment Check",
        items: [
          { id: "3-e-1", text: "Footballs inflated" },
          { id: "3-e-2", text: "Sliotars available" },
          { id: "3-e-3", text: "Bibs and cones counted" },
          { id: "3-e-4", text: "First aid kit stocked" },
          { id: "3-e-5", text: "Ice packs available" },
          { id: "3-e-6", text: "Mobile goals checked and secured" },
          { id: "3-e-7", text: "Coaches bibs available" },
          { id: "3-e-8", text: "Mouthguard reminders sent to parents" }
        ]
      }
    ]
  },
  {
    id: "checklist-4",
    number: 4,
    title: "Term / Block Planning",
    description: "Recommended every 6–8 weeks throughout the season.",
    sections: [
      {
        title: "Coaching Review",
        items: [
          { id: "4-c-1", text: "Are players improving technically?" },
          { id: "4-c-2", text: "Are sessions age appropriate?" },
          { id: "4-c-3", text: "Are all players actively involved?" },
          { id: "4-c-4", text: "Are stronger players being challenged?" },
          { id: "4-c-5", text: "Are less confident players being supported?" },
          { id: "4-c-6", text: "Is there enough game-based learning?" },
          { id: "4-c-7", text: "Are players enjoying training?" }
        ]
      },
      {
        title: "Player Development",
        items: [
          { id: "4-p-1", text: "Review player pathway assessments" },
          { id: "4-p-2", text: "Review skill challenge progress" },
          { id: "4-p-3", text: "Identify players needing support" },
          { id: "4-p-4", text: "Identify players needing greater challenge" },
          { id: "4-p-5", text: "Review movement between groups / panels" },
          { id: "4-p-6", text: "Revisit LTAD priorities" }
        ]
      },
      {
        title: "Team Organisation",
        items: [
          { id: "4-t-1", text: "Review attendance levels" },
          { id: "4-t-2", text: "Review mentor workload" },
          { id: "4-t-3", text: "Refresh session plans" },
          { id: "4-t-4", text: "Update parent communication" },
          { id: "4-t-5", text: "Plan blitzes / challenge games / social events" },
          { id: "4-t-6", text: "Review equipment needs" }
        ]
      }
    ]
  },
  {
    id: "checklist-5",
    number: 5,
    title: "Weekly Coaching Session",
    description: "Use before, during, and after each training session.",
    sections: [
      {
        title: "Before Training",
        items: [
          { id: "5-b-1", text: "What is tonight's objective?" },
          { id: "5-b-2", text: "What are the 1–2 key coaching points?" },
          { id: "5-b-3", text: "Is the session age appropriate?" },
          { id: "5-b-4", text: "What will players do in the first 5 minutes?" },
          { id: "5-b-5", text: "How will we maximise touches?" },
          { id: "5-b-6", text: "How will we minimise standing around?" },
          { id: "5-b-7", text: "Is the session game-based?" },
          { id: "5-b-8", text: "Have we planned transitions between activities?" },
          { id: "5-b-9", text: "Is equipment ready before players arrive?" }
        ]
      },
      {
        title: "During Training",
        items: [
          { id: "5-d-1", text: "Are players active more than listening?" },
          { id: "5-d-2", text: "Are coaches demonstrating clearly?" },
          { id: "5-d-3", text: "Are players solving problems themselves?" },
          { id: "5-d-4", text: "Is feedback positive and specific?" },
          { id: "5-d-5", text: "Are all players engaged?" },
          { id: "5-d-6", text: "Are we adapting if something isn't working?" },
          { id: "5-d-7", text: "Is effort and attitude being praised?" }
        ]
      },
      {
        title: "End of Session",
        items: [
          { id: "5-e-1", text: "Did we finish positively?" },
          { id: "5-e-2", text: "Did players leave smiling and engaged?" },
          { id: "5-e-3", text: "Was the session tempo good?" },
          { id: "5-e-4", text: "What worked well?" },
          { id: "5-e-5", text: "What should change next time?" },
          { id: "5-e-6", text: "Any injuries or incidents to record?" },
          { id: "5-e-7", text: "Any follow-up communication needed?" }
        ]
      }
    ]
  },
  {
    id: "checklist-6",
    number: 6,
    title: "Matchday Preparation",
    description: "Use before, during, and after every fixture.",
    sections: [
      {
        title: "Before the Match",
        items: [
          { id: "6-b-1", text: "Confirm fixture with opposition" },
          { id: "6-b-2", text: "Confirm pitch location and throw-in time" },
          { id: "6-b-3", text: "Confirm referee arrangements" },
          { id: "6-b-4", text: "Confirm team numbers available" },
          { id: "6-b-5", text: "Confirm jersey allocation" },
          { id: "6-b-6", text: "Confirm mentor bibs available" },
          { id: "6-b-7", text: "Print / complete team sheets if required" },
          { id: "6-b-8", text: "Confirm first aid kit available" },
          { id: "6-b-9", text: "Check players have mouthguards" },
          { id: "6-b-10", text: "Check players have helmets (where applicable)" },
          { id: "6-b-11", text: "Check players have water bottles" },
          { id: "6-b-12", text: "Check players have correct kit" }
        ]
      },
      {
        title: "Team Management",
        items: [
          { id: "6-t-1", text: "Arrive early" },
          { id: "6-t-2", text: "Set up goals, cones, and flags safely" },
          { id: "6-t-3", text: "Welcome referee respectfully" },
          { id: "6-t-4", text: "Reinforce positive sideline behaviour" },
          { id: "6-t-5", text: "Keep messages simple and calm" },
          { id: "6-t-6", text: "Rotate players fairly where applicable" },
          { id: "6-t-7", text: "Encourage effort and decision making" },
          { id: "6-t-8", text: "Focus on development over winning" }
        ]
      },
      {
        title: "After the Match",
        items: [
          { id: "6-a-1", text: "Thank referee" },
          { id: "6-a-2", text: "Thank opposition mentors" },
          { id: "6-a-3", text: "Return all equipment" },
          { id: "6-a-4", text: "Record result if required" },
          { id: "6-a-5", text: "Submit team sheet if required" },
          { id: "6-a-6", text: "Communicate any injuries or issues" },
          { id: "6-a-7", text: "Review positives with players" },
          { id: "6-a-8", text: "Follow up with parents if necessary" }
        ]
      }
    ]
  },
  {
    id: "checklist-7",
    number: 7,
    title: "Referee & Fixture",
    description: "Weekly fixture process and matchday referee management.",
    sections: [
      {
        title: "Weekly Fixture Process",
        items: [
          { id: "7-f-1", text: "Confirm fixture early in the week" },
          { id: "7-f-2", text: "Contact opposition" },
          { id: "7-f-3", text: "Confirm venue" },
          { id: "7-f-4", text: "Confirm throw-in time" },
          { id: "7-f-5", text: "Confirm referee arrangements" },
          { id: "7-f-6", text: "Notify referee of any changes immediately" },
          { id: "7-f-7", text: "Notify club if unable to field" },
          { id: "7-f-8", text: "Check weather / pitch updates" }
        ]
      },
      {
        title: "Matchday",
        items: [
          { id: "7-m-1", text: "Referee welcomed on arrival" },
          { id: "7-m-2", text: "Referee fee prepared (where applicable)" },
          { id: "7-m-3", text: "Respect initiative followed" },
          { id: "7-m-4", text: "Mentors wearing bibs" },
          { id: "7-m-5", text: "Sideline behaviour managed throughout" }
        ]
      }
    ]
  },
  {
    id: "checklist-8",
    number: 8,
    title: "Safeguarding & Welfare",
    description: "Player welfare and concussion management checklist.",
    sections: [
      {
        title: "Player Welfare",
        items: [
          { id: "8-w-1", text: "Know medical concerns and allergies for all players" },
          { id: "8-w-2", text: "Know emergency contacts for all players" },
          { id: "8-w-3", text: "Supervision ratios appropriate" },
          { id: "8-w-4", text: "No child left alone after sessions" },
          { id: "8-w-5", text: "Communication through approved channels only" },
          { id: "8-w-6", text: "No one-to-one private messaging with players" },
          { id: "8-w-7", text: "Positive environment maintained" },
          { id: "8-w-8", text: "Any welfare concerns reported appropriately to DLO" }
        ]
      },
      {
        title: "Injury & Concussion",
        items: [
          { id: "8-c-1", text: "Concussion policy known by all mentors" },
          { id: "8-c-2", text: "\"If in doubt, sit them out\" rule followed" },
          { id: "8-c-3", text: "Head injuries monitored and parents notified" },
          { id: "8-c-4", text: "Accident logged where required" },
          { id: "8-c-5", text: "Emergency process understood by all mentors" }
        ]
      }
    ]
  },
  {
    id: "checklist-9",
    number: 9,
    title: "Equipment & Facilities",
    description: "Training equipment and facilities check.",
    sections: [
      {
        title: "Training Equipment",
        items: [
          { id: "9-e-1", text: "Footballs / sliotars counted and available" },
          { id: "9-e-2", text: "Bibs available for all players" },
          { id: "9-e-3", text: "Cones available" },
          { id: "9-e-4", text: "Pumps available" },
          { id: "9-e-5", text: "First aid kit stocked" },
          { id: "9-e-6", text: "Ice packs available" },
          { id: "9-e-7", text: "Water access available for players" }
        ]
      },
      {
        title: "Facilities",
        items: [
          { id: "9-f-1", text: "Goals secured safely before use" },
          { id: "9-f-2", text: "Goals returned to storage after use" },
          { id: "9-f-3", text: "Equipment stored correctly after session" },
          { id: "9-f-4", text: "Dressing rooms respected and tidied" },
          { id: "9-f-5", text: "Lights turned off if applicable" },
          { id: "9-f-6", text: "Area left clean after use" }
        ]
      }
    ]
  },
  {
    id: "checklist-10",
    number: 10,
    title: "End-of-Season",
    description: "Season review, administration, and planning for next year.",
    sections: [
      {
        title: "Coaching Review",
        items: [
          { id: "10-c-1", text: "Review season goals — what was achieved?" },
          { id: "10-c-2", text: "Review player development across the squad" },
          { id: "10-c-3", text: "Review attendance trends" },
          { id: "10-c-4", text: "Review streaming and panel decisions" },
          { id: "10-c-5", text: "Gather feedback from mentor group" },
          { id: "10-c-6", text: "Gather parent feedback where appropriate" }
        ]
      },
      {
        title: "Administration",
        items: [
          { id: "10-a-1", text: "Return jerseys and equipment to storage" },
          { id: "10-a-2", text: "Update player pathway data" },
          { id: "10-a-3", text: "Review mentor compliance for next year" },
          { id: "10-a-4", text: "Identify coach education needs for next season" },
          { id: "10-a-5", text: "Begin planning for next season" }
        ]
      },
      {
        title: "Team Culture",
        items: [
          { id: "10-t-1", text: "Celebrate player effort and improvement" },
          { id: "10-t-2", text: "Recognise volunteers and mentors" },
          { id: "10-t-3", text: "Support transition of players to next age group" },
          { id: "10-t-4", text: "Encourage player retention — stay connected" },
          { id: "10-t-5", text: "Finish the season positively and inclusively" }
        ]
      }
    ]
  }
];
