// Section 4 (Join us)
export type JDICard = {
  _id: string
  position: string
  location: string
  desc: string
}

export const JDList: JDICard[] = [
  {
    _id: '1',
    position: 'Area Business Manager',
    location: 'Tamil Nadu / Kerala',
    desc: `
        #### **Area Business Manager- Cath Sales KL & TN** 

        ##### Responsible for Entire KL & TN

        Creating Product Demand by Meeting Cardiologists, Managing Local Distributors, Managing KOLs, Managing Paramedical Staff / Purchase Staff / Finance Staff of Hospitals.

        Meeting Customers Envisage not only creating demand but establishing Corporate Brand Innvolution, Distributor Management pertains to maintaining smooth supplies & keep a check on stocks / inventory / expiry.

        Timely Collections of Payments, Administrative Returns like Sending MIS Reports, keeping a Close Track on Competitor's Activities, Opening of New Accounts and Exploration of new Business Opportunities in the Assigned Territory.

        Meeting the sales targets of the organization through effective planning and budgeting and also ensure Requirements and Supplies on Time.

        Also, Appointing the Distributors & Generating The Secondary Sales.

        Planning & Forecast of The Stocks And Maintaining Stocks At Distributors.

        Maintaining The Primary Sales From authorised Dealer Point & Timely Payments To The Company.

        Someone who is Open to Travel.

        ##### Job Information:

        **Salary:** Upto 14 LPA

        **Experience:** 5-10 years

        **Job Location:** Tamil Nadu/Kerala

        **Industry:** Medical Device

        **State:** TN/Kerala

        **Country:** India
        `,
  },
  {
    _id: '2',
    position: 'Manager',
    location: 'Jaipur, Rajasthan',
    desc: `
#### **Manager – Legal**

##### Role and responsibilities:

The candidate would require Reviewing the distributor and Hospital agreement, responding on the legal receivable with the distributors, and hospital, and other legal matters of the company.

Working experience in customs related matter, Import Benefits, FTA benefits, export rebate benefit, EPCG matters, benefits available to the medical industries. & Liasoning with the custom department if require, handling the CHA.

Drafting, vetting and execution of legal documents: Drafting Power of Attorneys, Affidavits, Indemnity Bond, Letters, Notices, Letter of Authority, vetting of Agreements, Bank Guarantees and Corporate Guarantees submitted by vendors, executing joint documentation for sanction or renewal of Banking Limits of the Company by the consortium Bankers. etc.

Handling legal matters & Liaison with various Government and Regulatory Departments for obtaining necessary sanctions, Licenses and ensuring compliances with various statutory obligations

##### Job Information:

**Salary:** Upto 12 LPA

**Experience:** 4-8 years

**Job Location:** Jaipur, Rajasthan

**Industry:** Medical Device

**State:** Rajasthan

**Country:** India
`,
  },
  {
    _id: '3',
    position: 'Senior Engineer',
    location: 'Bangalore, Karnataka',
    desc: `
#### **Senior Engineer- Regulatory Affairs**

##### Role and responsibilities:

Prepare and file regulatory submissions and Obtaining marketing permission for a new product.

Perform assessments of new or revised products Writing executive summaries of new or changing regulations.

Manage complaint documentation.

Perform or facilitate audits to ensure compliance.

Respond to enquiries from regulatory bodies.

Improve internal processes to reduce risk.

Collaborate with team members to obtain documentation.

Writing evidence-based reports on a new product.

Interfacing between R&D, marketing, and senior management.

Interpreting both scientific and legal documents.

Developing regulatory strategies and implementation plans for new products.

Overseeing product trials and regulatory inspections.

Outlining requirements for a product's labeling, packaging, and storage.

Writing concise, clear, and informative product information leaflets.

Overseeing the completion of all regulatory compliance documents.

Maintenance of regulatory product hold matrix and tracker.

##### Skills must to have: 

Experience and knowledge about ISO 13485:2016, IMDR, EUMDR, ANVISA, USFDA, PMD Act, Therapeutic Goods Administration of Australia, Health Canada, CIS country regulation, Asia region country regulation.. cte.

##### Job Information:

**Salary:** Upto 8-12 LPA

**Experience:** 3-6 years

**Job Location:** Bangalore

**Industry:** Medical Device

**State:** Karnataka

**Country:** India
`,
  },
  {
    _id: '4',
    position: 'Service Engineer',
    location: 'Patna-Bihar',
    desc: `
#### **Service Engineer**

##### Role and responsibilities:

Able to handle Service calls timely.

Customer handling, as well as tough technical service breakdown calls on timely basis.

Able to work in tough situations likewise in project, Installations & site readiness on timely basis.

Preventive maintenance, FCO, Parts tracking, QA, 2 years QA, Call closing & abled to get maximum customer satisfaction.

Quality work like Service reports, QA reports etc need to fill properly & Solid edge 2D site layouts with AERB registration.

Handle all type of field work, projects, services & ensure customers are fully satisfied.

##### Job Information:

**Salary:** Upto 4-6 LPA

**Experience:** 3-4 years

**Job Location:** Patna-Bihar

**Industry:** Medical Device

**City:** Bangalore

**State:** Karnataka

**Country:** India
`,
  },
]

// Complete Careers datatype
export type CareersDataType = {
  SECTION_4: JDICard[]
}

// export const initCareersData: CareersDataType = {
//   SECTION_4: JDList,
// }

export const initCareersData: CareersDataType = {
  SECTION_4: [],
}
