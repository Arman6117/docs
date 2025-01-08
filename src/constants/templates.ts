export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageURL: "/blank-document.svg",
    initialContent: ""
  },
  {
    id: "business",
    label: "Business Letter",
    imageURL: "/business-letter.svg",
    initialContent: `
      <p><strong>[Your Name]</strong><br>
      [Your Address]<br>
      [City, State, ZIP Code]<br>
      [Email Address]<br>
      [Phone Number]<br>
      [Date]</p>

      <p><strong>[Recipient's Name]</strong><br>
      [Recipient's Title]<br>
      [Company Name]<br>
      [Company Address]<br>
      [City, State, ZIP Code]</p>

      <p>Dear [Recipient's Name],</p>

      <p>[Opening paragraph introducing the purpose of your letter.]</p>

      <p>[Body of the letter with detailed information.]</p>

      <p>[Closing paragraph reiterating the purpose and request.]</p>

      <p>Sincerely,<br>[Your Name]</p>
    `
  },
  {
    id: "cover",
    label: "Cover Letter",
    imageURL: "/cover-letter.svg",
    initialContent: `
      <p><strong>[Your Name]</strong><br>
      [Your Address]<br>
      [City, State, ZIP Code]<br>
      [Email Address]<br>
      [Phone Number]<br>
      [Date]</p>

      <p><strong>[Hiring Manager's Name]</strong><br>
      [Company Name]<br>
      [Company Address]<br>
      [City, State, ZIP Code]</p>

      <p>Dear [Hiring Manager's Name],</p>

      <p>I am writing to express my interest in the <strong>[Position Name]</strong> role at <strong>[Company Name]</strong>. With my <strong>[skills/experience]</strong>, I am confident I can make a valuable contribution to your team.</p>

      <p>[Highlight specific skills, achievements, or experiences relevant to the job.]</p>

      <p>I would welcome the opportunity to discuss how my skills and experience align with your needs. Thank you for considering my application.</p>

      <p>Sincerely,<br>[Your Name]</p>
    `
  },
  {
    id: "letter",
    label: "Letter",
    imageURL: "/letter.svg",
    initialContent: `
      <p><strong>[Your Name]</strong><br>
      [Your Address]<br>
      [City, State, ZIP Code]<br>
      [Email Address]<br>
      [Phone Number]<br>
      [Date]</p>

      <p>Dear [Recipient's Name],</p>

      <p>[Your main message in a concise and clear format.]</p>

      <p>Sincerely,<br>[Your Name]</p>
    `
  },
  {
    id: "project",
    label: "Project Proposal",
    imageURL: "/project-proposal.svg",
    initialContent: `
      <h1>Project Proposal</h1>
      <p><strong>Project Title:</strong> [Project Name]<br>
      <strong>Author:</strong> [Your Name]<br>
      <strong>Date:</strong> [Insert Date]</p>

      <h2>Summary</h2>
      <p>[Brief overview of the project and its objectives.]</p>

      <h2>Objectives</h2>
      <ul>
        <li>[Objective 1]</li>
        <li>[Objective 2]</li>
      </ul>

      <h2>Scope</h2>
      <p>[Define the scope of the project.]</p>

      <h2>Timeline</h2>
      <p>[Outline key milestones and deadlines.]</p>

      <h2>Budget</h2>
      <p>[Provide an estimate of the costs involved.]</p>

      <h2>Conclusion</h2>
      <p>[Summarize the proposal and its value.]</p>
    `
  },
  {
    id: "resume",
    label: "Resume",
    imageURL: "/resume.svg",
    initialContent: `
      <h1>[Your Name]</h1>
      <p>[Your Address]<br>
      [City, State, ZIP Code]<br>
      [Email Address]<br>
      [Phone Number]</p>

      <h2>Objective</h2>
      <p>[Brief statement of career goals and objectives.]</p>

      <h2>Education</h2>
      <ul>
        <li><strong>[Degree]</strong>, [Field of Study], [University/Institution Name], [Year]</li>
      </ul>

      <h2>Experience</h2>
      <ul>
        <li><strong>[Job Title]</strong>, [Company Name], [Dates]</li>
        <ul>
          <li>[Responsibilities and accomplishments]</li>
        </ul>
      </ul>

      <h2>Skills</h2>
      <ul>
        <li>[Skill 1]</li>
        <li>[Skill 2]</li>
      </ul>

      <h2>References</h2>
      <p>Available upon request.</p>
    `
  },
  {
    id: "software",
    label: "Software Proposal",
    imageURL: "/software-proposal.svg",
    initialContent: `
      <h1>Software Proposal</h1>
      <p><strong>Title:</strong> [Project/Software Name]<br>
      <strong>Author:</strong> [Your Name]<br>
      <strong>Date:</strong> [Insert Date]</p>

      <h2>Overview</h2>
      <p>[Brief description of the software solution.]</p>

      <h2>Features</h2>
      <ul>
        <li>[Feature 1]</li>
        <li>[Feature 2]</li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>[Benefit 1]</li>
        <li>[Benefit 2]</li>
      </ul>

      <h2>Implementation Plan</h2>
      <p>[Details about the implementation process.]</p>

      <h2>Budget and Timeline</h2>
      <p>[Costs and timeline for the project.]</p>

      <h2>Conclusion</h2>
      <p>[Summarize the value of the software proposal.]</p>
    `
  }
];
