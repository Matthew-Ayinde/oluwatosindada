// All copy is sourced from Oluwatosin Dada's portfolio and resume.

export const person = {
  name: "Oluwatosin Dada",
  fullName: "Dada Oluwatosin Oluwasola",
  firstName: "Oluwatosin",
  lastName: "Dada",
  role: "People Management Executive",
  company: "Xown Solutions Limited",
  location: "Lagos, Nigeria",
  email: "oluwatosinsoladada@gmail.com",
  linkedin: "https://www.linkedin.com/in/oluwatosindada68",
  linkedinHandle: "in/oluwatosindada68",
  positioning: "I build structure where there is ambiguity.",
  disciplines: ["People Management", "HR Operations", "HR Strategy"],
  targets: [
    "HR Business Partnering",
    "People Operations",
    "HR Strategy",
    "HR Governance",
    "HR Transformation",
    "HR Management",
  ],
};

export const manifesto =
  "I build structure where there is ambiguity. I identify gaps in people and administrative processes, translate them into practical systems, and move organisations toward operations that are structured and sustainable.";

export const profile = [
  "I am an HR professional working across People Management, HR Operations, Employee Relations, Recruitment, Performance Management, Compensation & Benefits, HR Governance, Administration and Business Support — in both a structured corporate environment and a growing technology organisation.",
  "At Chemical and Allied Products PLC I built strong foundations in corporate HR operations, outsourced workforce administration, vendor management and SAP. At Xown Solutions my role expanded into building the HR infrastructure itself — policies, SOPs, the employee lifecycle, performance management, HR audits, payroll and statutory compliance, HRIS implementation and ISO certification documentation.",
];

export const marquee = [
  "People Operations",
  "Employee Relations",
  "Talent Management",
  "Performance",
  "Compensation & Benefits",
  "HR Governance",
  "ISO Documentation",
  "HR Transformation",
];

export const stats = [
  { value: 100, prefix: "", suffix: "+", label: "Outsourced employees supported", note: "CAP Plc" },
  { value: 34, prefix: "", suffix: "", label: "Employees supported end-to-end", note: "Xown Solutions" },
  { value: 320, prefix: "₦", suffix: "k+", label: "Immediate cost savings negotiated", note: "Vendor management" },
  { value: 11, prefix: "", suffix: "", label: "Functional areas in the H1 2026 HR audit", note: "HR governance" },
  { value: 50, prefix: "", suffix: "+", label: "Onboarding journeys coordinated", note: "Multi-site" },
  { value: 2, prefix: "", suffix: "", label: "ISO standards documented for certification", note: "9001 · 27001" },
];

export const capabilities = [
  {
    title: "People & HR Operations",
    body: "Employee lifecycle, HR administration, personnel records, HR documentation, policies and SOPs.",
  },
  {
    title: "Talent Management",
    body: "Recruitment, candidate assessment, onboarding, confirmation, promotion and salary review.",
  },
  {
    title: "Performance & Employee Relations",
    body: "Appraisals, PIPs, employee relations, investigations, disciplinary processes and attendance management.",
  },
  {
    title: "Compensation & Benefits",
    body: "Payroll inputs, salary reviews, allowances and deductions, PAYE, pension and HMO administration.",
  },
  {
    title: "HR Transformation & Governance",
    body: "Process design, HR audit, HRIS implementation, digital forms, governance and ISO documentation.",
  },
  {
    title: "Administration & Business Support",
    body: "Vendor management, cost negotiation, facilities, events, logistics, travel and accommodation.",
  },
];

export type Chapter = {
  id: string;
  numeral: string;
  company: string;
  short: string;
  role: string;
  place: string;
  period: string;
  years: string;
  focus: string;
  intro: string;
  scope: { label: string; value: string }[];
  contributions: string[];
  extraTitle: string;
  extra: string[];
};

export const chapters: Chapter[] = [
  {
    id: "cap",
    numeral: "I",
    company: "Chemical and Allied Products PLC",
    short: "CAP Plc",
    role: "Human Resource / Administrative Officer",
    place: "Lagos",
    period: "July 2024 — September 2025",
    years: "2024—25",
    focus: "Corporate HR Operations, Outsourced Workforce & Vendor Management",
    intro:
      "CAP Plc gave me a strong foundation in structured corporate HR: outsourced workforce administration, vendor management, SAP-based financial administration, onboarding coordination and cross-functional business support.",
    scope: [
      { label: "Outsourced workforce supported", value: "100+" },
      { label: "Manpower / outsourcing vendors", value: "3" },
      { label: "Invoices & payment requests monthly", value: "50+" },
      { label: "Onboarding processes supported", value: "50+" },
      { label: "Travel & accommodation arrangements", value: "50+" },
      { label: "Core system", value: "SAP" },
    ],
    contributions: [
      "Administered allowances, overtime inputs and payroll-related coordination for 100+ outsourced employees.",
      "Served as the escalation point for outsourced staff payroll queries and exit / replacement communications.",
      "Managed 3 manpower outsourcing vendors alongside travel, accommodation, catering and HMO vendors.",
      "Processed monthly invoices and payment requests through SAP with Finance, Procurement and approvers.",
      "Supported 50+ onboarding processes across headquarters and multiple locations.",
      "Provided documentation and records to auditors in support of compliance reviews.",
    ],
    extraTitle: "What CAP taught me",
    extra: [
      "Operating within established corporate processes and governance",
      "Managing stakeholders across HR, Finance, Procurement and Operations",
      "Handling confidential employee information with discretion",
      "Coordinating outsourced workforce processes at scale",
    ],
  },
  {
    id: "xown",
    numeral: "II",
    company: "Xown Solutions Limited",
    short: "Xown Solutions",
    role: "People Management Executive",
    place: "Ikeja, Lagos",
    period: "September 2025 — Present",
    years: "2025—Now",
    focus: "People Management, HR Operations, Governance & Strategic HR",
    intro:
      "At Xown my role moved from operating within established processes to building the HR infrastructure itself. I lead the People Management Unit for an IT consulting and digital services firm — recruitment, performance, employee relations, compensation, statutory compliance, HRIS, welfare, ISO documentation and administration.",
    scope: [
      { label: "Employees supported", value: "34" },
      { label: "End-to-end recruitment processes", value: "10" },
      { label: "Intern / SIWES recruitment", value: "5" },
      { label: "Policies developed or restructured", value: "~5" },
      { label: "Appraisal cycles · PIPs managed", value: "2 · 2" },
      { label: "HMO beneficiaries enrolled", value: "20" },
      { label: "Vendors managed", value: "4" },
      { label: "Immediate cost savings", value: "₦320,000+" },
    ],
    contributions: [
      "Developed and implemented the Company Handbook and a comprehensive PMU SOP.",
      "Administer end-to-end payroll inputs, PAYE and pension in line with Nigerian labour regulations.",
      "Designed the outstation travel and allowance policy, including disbursement, IOU tracking and retirement.",
      "Manage the full recruitment lifecycle from job posting to offer letters and onboarding.",
      "Handle queries, investigations and disciplinary processes with management.",
      "Partner with leadership on workforce planning and people-related decisions.",
    ],
    extraTitle: "HR infrastructure I created",
    extra: [
      "Staff File Checklist",
      "Confirmation Assessment Form",
      "Conversion-to-Staff Form",
      "Biodata Form",
      "Guarantor Form",
      "Exit Clearance Form",
      "New Employee Reference Form",
      "Letter Writing Guideline",
      "Staff House Rules & Move-in / Move-out Documentation",
      "Performance Appraisal Template",
      "Leave Tracker",
    ],
  },
];

export const earlier = [
  {
    role: "Executive Assistant / Strategy Officer to the CEO",
    org: "Merit Telecoms Nigeria Limited",
    period: "Jan 2023 — May 2024",
    note: "CEO liaison, strategic execution, HRIS data integrity and onboarding.",
  },
  {
    role: "Community Monitoring & Evaluation Officer",
    org: "APIN Public Health Initiatives",
    period: "Oct 2021 — Dec 2022",
    note: "Programme monitoring, data quality reviews and stakeholder reporting.",
  },
  {
    role: "Data Entry Clerk",
    org: "360 Health Systems (APIN Project)",
    period: "Apr 2020 — Oct 2021",
    note: "Accurate data capture and daily, weekly and monthly M&E reporting.",
  },
  {
    role: "Community Counsellor",
    org: "360 Health Systems (APIN Project)",
    period: "Sep 2019 — Apr 2020",
    note: "Psychosocial support, counselling, referrals and community education.",
  },
];

export type CaseStudy = {
  org: string;
  title: string;
  challenge: string;
  approach: string;
  result: string;
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    org: "Xown Solutions",
    title: "Establishing HR structure from the ground up",
    challenge:
      "HR processes were largely informal — no structured leave system, no formal performance framework, no comprehensive lifecycle documentation.",
    approach:
      "Restructured the employee handbook and key policies, wrote a comprehensive PMU SOP, strengthened personnel files and created the core lifecycle forms.",
    result:
      "A structured HR operating environment with clearer processes, documentation standards and accountability.",
    tags: ["HR transformation", "Policy", "Process design"],
  },
  {
    org: "Xown Solutions",
    title: "The H1 2026 HR audit",
    challenge:
      "HR needed an evidence-based way to assess its processes and find where to improve.",
    approach:
      "Designed the audit framework, built an Excel scorecard, assessed 11 functional areas, produced a summary dashboard and an action tracker.",
    result:
      "A repeatable HR review that gives management clear visibility of HR performance and priority improvements.",
    tags: ["HR audit", "Analytics", "Governance"],
  },
  {
    org: "Xown Solutions",
    title: "A performance management framework",
    challenge:
      "Performance management lacked a consistent, documented process across the organisation.",
    approach:
      "Designed the appraisal template in use today and the supporting cycle documentation; ran 2 appraisal cycles and 2 PIPs end-to-end.",
    result:
      "Consistency, documentation and accountability across reviews and improvement interventions.",
    tags: ["Performance", "Documentation", "ER"],
  },
  {
    org: "Xown Solutions",
    title: "Recruitment, re-engineered",
    challenge:
      "Recruitment needed structured assessment methods and clearer documentation throughout.",
    approach:
      "Ran 10 hires and 5 intern/SIWES placements end-to-end; introduced virtual first-level interviews, role-specific tests, digital feedback forms and formal JDs.",
    result:
      "A structured workflow from sourcing through assessment, selection, offer and onboarding.",
    tags: ["Recruitment", "Assessment", "Digital tools"],
  },
  {
    org: "Xown Solutions",
    title: "HRIS implementation — Biz360",
    challenge:
      "HR and employee requirements had to be captured and reflected in Biz360 during implementation.",
    approach:
      "Served as HR representative on the implementation team — reviewing functionality, gathering requirements, testing workflows and giving structured feedback.",
    result:
      "HR processes and employee needs aligned with system functionality and digital workflows.",
    tags: ["HRIS", "Requirements", "User testing"],
  },
  {
    org: "Xown Solutions",
    title: "Payroll continuity & statutory compliance",
    challenge:
      "Payroll needed accurate HR inputs and continuity — including through a period without a Finance department.",
    approach:
      "Owned payroll inputs end-to-end, PAYE administration, the set-up of pension contributions, and salary review and promotion calculations.",
    result:
      "Uninterrupted payroll and statutory compliance, handled with confidentiality and accuracy.",
    tags: ["Payroll", "PAYE", "Pension"],
  },
  {
    org: "Xown Solutions",
    title: "Leave & attendance, made visible",
    challenge: "There was no structured leave management system.",
    approach:
      "Worked with management on a 20-working-day annual leave structure, built the leave tracker, wrote it into the handbook and guided every employee through it.",
    result:
      "Far greater visibility, consistency and accountability around leave and attendance.",
    tags: ["Leave", "Policy", "Communication"],
  },
  {
    org: "Xown Solutions",
    title: "Employee relations & investigations",
    challenge:
      "Employee relations matters required structured, documented and confidential handling.",
    approach:
      "Managed lateness, absenteeism, complaints, conflict, misconduct, queries, warnings, disciplinary meetings and investigations — with formal reports and recommendations.",
    result:
      "Confidential, well-documented handling of ER and disciplinary matters.",
    tags: ["ER", "Investigations", "Compliance"],
  },
  {
    org: "Xown Solutions",
    title: "Welfare & engagement",
    challenge: "Welfare and engagement initiatives needed to be broadened and formalised.",
    approach:
      "Implemented HMO cover for 20 employees, created a Social Team, coordinated TGIF and AGM activities and introduced birthday gift cards.",
    result:
      "A structured employee experience and a stronger sense of community.",
    tags: ["Welfare", "Engagement", "HMO"],
  },
  {
    org: "CAP Plc",
    title: "Fixing vendor payment processing",
    challenge: "Vendors were repeatedly raising concerns about missing or delayed payments.",
    approach:
      "Checked documentation for completeness, tracked expected invoices, raised POs promptly, monitored approvals in SAP and coordinated Finance, Procurement and HR.",
    result:
      "Significantly fewer payment delays and recurring vendor complaints.",
    tags: ["Process improvement", "SAP", "Vendors"],
  },
  {
    org: "CAP Plc",
    title: "Coordinating onboarding at scale",
    challenge:
      "A high volume of onboarding needed structured coordination across stakeholders and locations.",
    approach:
      "Managed interview scheduling, reference calls, one-week onboarding programmes, accommodation and feeding, manager-led sessions and feedback collection.",
    result: "Consistent onboarding experiences for 50+ new joiners across sites.",
    tags: ["Onboarding", "Employee experience", "Logistics"],
  },
];

export const iso = {
  standards: [
    { code: "ISO 9001:2015", name: "Quality Management" },
    { code: "ISO/IEC 27001:2022", name: "Information Security Management" },
  ],
  intro:
    "A distinctive part of my work at Xown goes beyond traditional HR: contributing to the documentation for dual ISO certification, submitted to Amtivo as part of the organisation's formal certification process.",
  documents: [
    { title: "Quality Policy", body: "Drafted in line with ISO 9001:2015 requirements." },
    { title: "Scope of Certification", body: "Defined the organisational scope for both standards." },
    { title: "Process Description & Quality Plan", body: "Documented key organisational processes for QMS compliance." },
    { title: "Allowance Policy", body: "Part of the broader HR and organisational governance suite." },
  ],
  why: "ISO work demonstrates an ability to operate in structured, process-driven governance environments — comfort with documentation standards, regulatory frameworks and cross-functional work that HR Business Partnering and HR Governance roles demand.",
};

export const savings = [
  { item: "Office shelving", from: 350000, to: 180000, kind: "One-off" },
  { item: "Office desks (each)", from: 280000, to: 130000, kind: "One-off" },
  { item: "AC servicing", from: 15000, to: 7000, kind: "Recurring" },
  { item: "Generator servicing", from: 100000, to: 70000, kind: "Recurring" },
];

export const tools = [
  { name: "Biz360", use: "HRIS implementation — requirements, testing and feedback." },
  { name: "Microsoft Excel", use: "Audit scorecards, leave trackers, payroll inputs, compensation modelling." },
  { name: "Microsoft Forms", use: "Digital interview feedback, onboarding and employee data collection." },
  { name: "SharePoint", use: "HR documentation, personnel records and policy libraries." },
  { name: "SAP", use: "Vendor payments, invoice administration and financial coordination." },
  { name: "Teams / Office 365", use: "Documentation, cross-functional work and virtual recruitment." },
  { name: "Google Workspace", use: "Collaboration, document management and stakeholder communication." },
];

export const advisory = [
  "Hiring decisions and candidate selection",
  "Promotion and performance-based decisions",
  "Salary reviews and compensation changes",
  "Employee discipline and employee relations",
  "Organisational restructuring",
  "Policy development and change management",
];

export const growth = [
  {
    kicker: "Professional membership",
    title: "CIPM",
    sub: "Chartered Institute of Personnel Management of Nigeria",
    body: "Associate Membership (ACIPM) in view for 2026 — committed to the profession's ethical and practice standards.",
  },
  {
    kicker: "Target certification",
    title: "SPHRi",
    sub: "Senior Professional in Human Resources — International (HRCI)",
    body: "A globally recognised senior credential validating strategic HR expertise and international people management.",
  },
  {
    kicker: "Postgraduate goal",
    title: "MBA",
    sub: "Fully online · MIVA · ABU · NOUN under consideration",
    body: "Pairing deep HR knowledge with strategy, finance and operations for senior People & Operations roles.",
  },
];

export const learning = [
  "HR Strategy & Business Partnering",
  "Employment Law & Compliance",
  "Organisational Development & Change",
  "HR Analytics & Data-Driven Decisions",
  "Leadership & People Management",
];

export const certifications = [
  { year: "2026", title: "Associate Member — ACIPM (in view)", org: "Chartered Institute of Personnel Management of Nigeria" },
  { year: "2025", title: "Basics in Human Resource Management", org: "Athena Global Education" },
  { year: "2023", title: "M&E Fundamentals, Data Visualisation, Data Quality", org: "Global Health e-Learning Centre — USAID" },
  { year: "2022", title: "Customer Service Fundamentals", org: "Watsam Training and Development Centre" },
  { year: "2022", title: "IBM Data Analytics", org: "Coursera" },
  { year: "2018", title: "HSSE Levels 1, 2 & 3", org: "Prime International Risk and Safety Management" },
];

export const education = [
  { year: "2019", title: "National Youth Service Corps", org: "NYSC" },
  { year: "2016", title: "B.Sc. (Ed) Biology Education — Second Class Upper", org: "University of Nigeria" },
];
