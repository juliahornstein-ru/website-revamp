/**
 * Legal content for Privacy page: Privacy Policy, State Notices, and Terms of Use.
 * Each section has an id (for anchor links), title, and content (paragraphs, subheading blocks, or tables).
 */
export interface LegalBlock {
  subheading: string;
  paragraphs: string[];
}
export interface LegalTableRow {
  category: string;
  description: string;
  disclosedTo: string;
}
export interface LegalTable {
  headerCol1: string;
  headerCol2: string;
  rows: LegalTableRow[];
}
export type LegalContentItem = string | LegalBlock | LegalTable;
export interface LegalSection {
  id: string;
  title: string;
  content: LegalContentItem[];
}

export const legalSections: LegalSection[] = [
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    content: [
      "Effective date: March 28, 2025",
      'Recruit.U ("Company," "We" or "us") respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website www.recruitu.io (our "Website") and our practices for collecting, using, maintaining, protecting, disclosing, sharing and/or selling that information. This policy applies to information we collect:',
      "On this Website; In email, text, and other electronic messages between you and this Website; and When you interact with our advertising and applications on third-party websites and services, if those applications or advertising include links to this policy.",
      "It does not apply to information collected by:",
      "Us offline or through any other means, including on any other website operated by Company or any third party; or Any third party, including through any application or content (including advertising) that may link to or be accessible from or through the Website.",
      "Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our Website. By clicking to accept or agree to the Privacy Policy when this option is made available to you or otherwise by accessing or using this Website, you agree to this privacy policy. This policy may change from time to time (see Changes to Our Privacy Policy). Your continued use of this Website after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates.",
    ],
  },
  {
    id: "children",
    title: "Children Under the Age of 16",
    content: [
      "Our Website is not intended for children under 16 years of age. No one under age 16 may provide any personal information to or on the Website. We do not knowingly collect personal information from children under 16. If you are under 16, do not use or provide any information on this Website or through any of its features, register on the Website, use any of the interactive or public comment features of this Website, or provide any information about yourself to us, including your name, address, telephone number, email address, or any screen name or user name you may use. If we learn we have collected or received personal information from a child under 16 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 16, please contact us at support@recruitu.com",
      "Residents of certain states, such as California, Virginia, Colorado, Connecticut, Utah and Nevada may have additional rights regarding the collection and sale of their personal information. Please see Your State Privacy Rights for more information.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect About You and How We Collect It",
    content: [
      "We collect several types of information from and about users of our Website, including information:",
      "By which you may be personally identified, such as: Name, Professional and non-professional experience/history, Education, Postal address, Email address, Telephone number. Any other identifier by which you may be contacted online or offline (“personal information”)",
      "About your internet connection, the equipment you use to access our Website, and usage details.",
      "We collect this information: Directly from you when you provide it to us; Automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons, and other tracking technologies; and From third parties, for example, our business partners.",
      {
        subheading: "Information You Provide to Us",
        paragraphs: [
          "Account Information — If you create an Account, you will provide information that could be personal information, such as your name, educational background, work history, and interests, as well as a username, password, and email address. You acknowledge that this information may be personal to you, and by creating an account on the Services and providing Personal Information to us, you allow others, including us, to identify you and therefore may not be anonymous. We may use your contact information to send you information about our services, but only when we feel such information is important, and where you have given your consent if required under applicable law. You may unsubscribe from these messages through your Account settings, although we, regardless, reserve the right to contact you when we believe it is necessary, such as for account recovery purposes.",
          "User Content — Some features of the Services may allow you to provide content to the Services, such as a detailed educational and work profile and a resume. All content submitted by you to the Services may be retained by us indefinitely, even after you terminate your account. We may continue to disclose such content to third parties in a manner that does not reveal Personal Information, as described in this Privacy Policy.",
          "Additional Information — Information that you provide by filling in forms on our Website. This includes information provided at the time of registering to use our Website, subscribing to our service, posting material, or requesting further services. We may also ask you for information when you enter a contest or promotion sponsored by us, and when you report a problem with our Website. Records and copies of your correspondence, including email addresses, if you contact us. Your responses to surveys that we might ask you to complete for research purposes. Your search queries on the Website. You also may provide information to be published or displayed (hereinafter, \"posted\") on public areas of the Website, or transmitted to other users of the Website or third parties (collectively, \"User Contributions\"). Your User Contributions are posted on and transmitted to others at your own risk. Additionally, we cannot control the actions of other users of the Website with whom you may choose to share your User Contributions. Therefore, we cannot and do not guarantee that your User Contributions will not be viewed by unauthorized persons.",
        ],
      },
    ],
  },
  {
    id: "automatic-data-collection",
    title: "Information We Collect Through Automatic Data Collection Technologies",
    content: [
      "As you navigate through and interact with our Website, we may use automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns, including:",
      "Details of your visits to our Website, including traffic data, location data, logs, and other communication data and the resources that you access and use on the Website. Information about your computer and internet connection, including your IP address, operating system, and browser type. We also may use these technologies to collect information about your online activities over time and across third-party websites or other online services (behavioral tracking).",
      "The information we collect automatically does include personal information, but we maintain it or associate it with personal information we collect in other ways or receive from third parties. It helps us to improve our Website and to deliver a better and more personalized service, including by enabling us to: Estimate our audience size and usage patterns. Store information about your preferences, allowing us to customize our Website according to your individual interests. Speed up your searches. Recognize you when you return to our Website.",
      "The technologies we use for this automatic data collection may include:",
      "Cookies (or browser cookies). A cookie is a small file placed on the hard drive of your computer. You may refuse to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting you may be unable to access certain parts of our Website. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our Website.",
      "Web Beacons. Pages of our Website and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of certain website content and verifying system and server integrity).",
      "Flash Cookies. Certain features of our Website may use local stored objects (or Flash cookies) to collect and store information about your preferences and navigation to, from, and on our Website. Flash cookies are not managed by the same browser settings as are used for browser cookies. For information about managing your privacy and security settings for Flash cookies, see Choices About How We Use and Disclose Your Information.",
      "We do not collect personal information automatically, but we may tie this information to personal information about you that we collect from other sources or you provide to us.",
    ],
  },
  {
    id: "third-party-tracking",
    title: "Third-Party Use of Cookies and Other Tracking Technologies",
    content: [
      "We do not control these third parties' tracking technologies or how they may be used. If you have any questions about an advertisement or other targeted content, you should contact the responsible provider directly. For information about how you can opt out of receiving targeted advertising from many providers, see Choices About How We Use and Disclose Your Information.",
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: [
      "We use information that we collect about you or that you provide to us, including any personal information:",
      "To present our Website and its contents to you. To provide you with information, products, or services that you request from us such as job opportunities. The personal Information you provide is entered into a database that is searchable by employers who have decided to use our Services. In the event that an employer determines it wishes to contact you, that employer can use the Personal Information you provided to us to contact you directly. To provide you with notices about your account/subscription, including expiration and renewal notices. To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection. To notify you about changes to our Website or any products or services we offer or provide through it. In any other way we may describe when you provide the information. For any other purpose with your consent.",
      "We may also use your information to contact you about our own and third-parties' goods and services that may be of interest to you. If you do not want us to use your information in this way, please check the relevant box located on the form on which we collect your data (the order form/registration form)/adjust your user preferences in your account profile. For more information, see Choices About How We Use and Disclose Your Information.",
      "We may use the information we have collected from you to enable us to display advertisements to our advertisers' target audiences. Even though we do not disclose your personal information for these purposes without your consent, if you click on or otherwise interact with an advertisement, the advertiser may assume that you meet its target criteria.",
    ],
  },
  {
    id: "disclosure",
    title: "Disclosure of Your Information",
    content: [
      "We may disclose aggregated information about our users and information that does not identify any individual without restriction.",
      "We may disclose personal information that we collect or you provide as described in this privacy policy: To our subsidiaries and affiliates. To contractors, service providers, and other third parties we use to support our business and who are bound by contractual obligations to keep personal information confidential and use it only for the purposes for which we disclose it to them. To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Recruit.U assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by Recruit.U about our Website users is among the assets transferred. To third parties to market their products or services to you if you have consented to these disclosures. We contractually require these third parties to keep personal information confidential and use it only for the purposes for which we disclose it to them. For more information, see Choices About How We Use and Disclose Your Information. To fulfill the purpose for which you provide it. For example, if you give us an email address to use the \"email a friend\" feature of our Website, we will transmit the contents of that email and your email address to the recipients. For any other purpose disclosed by us when you provide the information. With your consent.",
      "We may also disclose your personal information: To comply with any court order, law, or legal process, including to respond to any government or regulatory request. If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Recruit.U, our customers, or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction.",
    ],
  },
  {
    id: "choices",
    title: "Choices About How We Use and Disclose Your Information",
    content: [
      "We strive to provide you with choices regarding the personal information you provide to us. We have created mechanisms to provide you with the following control over your information:",
      "Tracking Technologies and Advertising. You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. To learn how you can manage your Flash cookie settings, visit the Flash player settings page on Adobe's website. If you disable or refuse cookies, please note that some parts of this site may then be inaccessible or not function properly.",
      "Promotional Offers from the Company. If you do not wish to have your email address/contact information used by the Company to promote our own or third parties' products or services, you can opt-out by checking the relevant box located on the form on which we collect your data (the registration form) or at any other time by logging into the Website and adjusting your user preferences in your account profile by checking or unchecking the relevant boxes or by sending us an email stating your request to support@recruitu.com",
      "If we have sent you a promotional email, you may send us a return email asking to be omitted from future email distributions. This opt out does not apply to information provided to the Company as a result of a product purchase, warranty registration, product service experience or other transactions.",
      "Targeted Advertising. If you do not want us to use information that we collect or that you provide to us to deliver advertisements according to our advertisers' target-audience preferences, you can opt-out by unsubscribing from our content. For this opt-out to function, you must have your browser set to accept all browser cookies.",
      "We do not control third parties' collection or use of your information to serve interest-based advertising. However these third parties may provide you with ways to choose not to have your information collected or used in this way. You can opt out of receiving targeted ads from members of the Network Advertising Initiative (\"NAI\") on the NAI's website.",
      "Residents of certain states, such as California, Nevada, Colorado, Connecticut, Virginia, and Utah may have additional personal information rights and choices. Please see Your State Privacy Rights for more information.",
    ],
  },
  {
    id: "accessing-correcting",
    title: "Accessing and Correcting Your Information",
    content: [
      "In accordance with applicable law:",
      "You can review and change your personal information by logging into the Website and visiting your account profile page.",
      "You may also send us an email at support@recruitu.com to request access to, correct or delete any personal information that you have provided to us. We cannot delete your personal information except by also deleting your user account. We may not accommodate a request to change information if we believe the change would violate any law or legal requirement or cause the information to be incorrect.",
      "If you delete your User Contributions from the Website, copies of your User Contributions may remain viewable in cached and archived pages, or might have been copied or stored by other Website users. Proper access and use of information provided on the Website, including User Contributions, is governed by our terms of use - Terms and Conditions.",
      "You may also send us an email at support@recruitu.com to request we transfer the personal information that we have collected to another organization, or directly to you, under certain conditions.",
      "Residents have the right not to receive discriminatory treatment by covered businesses for the exercise of their rights conferred by the applicable privacy law. Only you, or someone legally authorized to act on your behalf, may make a verifiable consumer request related to your personal information. You may also make a verifiable consumer request on behalf of your minor child. To designate an authorized agent, please contact us at support@recruitu.com and provide written authorization signed by you and your designated agent.",
      "To appeal a decision regarding a consumer rights request please email support@recruitu.com. In addition, if your request for reconsideration is denied, you may have the right to appeal to the Attorney General in your state of residence.",
    ],
  },
  {
    id: "state-privacy-rights",
    title: "Your State Privacy Rights",
    content: [
      "If you are a resident of California, Nevada, Virginia, Colorado, Connecticut or Utah, applicable state law requires us to provide additional information and rights, which can be found at the bottom of this agreement.",
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    content: [
      "We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls. The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Website, you are responsible for keeping this password confidential. We ask you not to share your password with anyone. We urge you to be careful about giving out information in public areas of the Website like message boards. The information you share in public areas may be viewed by any user of the Website. Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website. Any transmission of personal information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on the Website.",
    ],
  },
  {
    id: "changes-policy",
    title: "Changes to Our Privacy Policy",
    content: [
      "It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Website home page. The date the privacy policy was last revised is identified at the top of the page. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting our Website and this privacy policy to check for any changes.",
    ],
  },
  {
    id: "contact",
    title: "Contact Information",
    content: [
      "To ask questions or comment about this privacy policy and our privacy practices, contact us at: support@recruitu.com.",
    ],
  },
  {
    id: "california",
    title: "California Privacy Notice",
    content: [
      "California law requires us to disclose certain information related to our privacy practices. This California Privacy Notice (the \"CA Notice\") supplements the information contained in the Recruit.U Privacy Policy (the \"Privacy Policy\") and applies solely to all visitors, users, and others who reside in the State of California (\"consumers\" or \"you\"). To learn more about California residents' privacy rights, visit CCPA and CPRA Privacy Notice for California Residents. We adopt this notice to comply with the California Consumer Privacy Act of 2018 (CCPA), and California Privacy Rights Act of 2020 (CPRA) (together, the \"CCPA\") and any terms defined under the CCPA have the same meaning when used in this CA Notice. Capitalized terms used but not defined herein shall have the respective meanings set forth in the Privacy Policy. As used in this CA Notice only, \"personal information\" has the meaning set forth in the CCPA.",
      "To understand our privacy practices, you should refer to our Privacy Policy in addition to this supplement applicable to California residents.",
      {
        subheading: "Categories of Personal Information Collected and Disclosed",
        paragraphs: [
          "The CCPA provides California residents with the right to know what categories of personal information covered businesses have collected about them and whether such businesses have disclosed that personal information for a business purpose (e.g., to a service provider) in the preceding 12 months. This information can be found in the table below:",
        ],
      },
      {
        headerCol1: "Category of Personal Information Collected",
        headerCol2: "Category of Third Parties Personal Information is Disclosed to for a Business Purpose",
        rows: [
          { category: "Identifiers.", description: "A real name, Internet Protocol address, email address, or other similar identifiers.", disclosedTo: "Service providers" },
          { category: "Personal information categories listed in the California Customer Records statute (Cal. Civ. Code § 1798.80(e))", description: "A name, address, telephone number, employment, employment history, bank account number, credit card number, debit card number, or any other financial information.", disclosedTo: "Service providers" },
          { category: "Commercial information", description: "Records of products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.", disclosedTo: "Service providers" },
          { category: "Internet or other electronic network activity", description: "Browsing history, search history, information on a consumer's interaction with an internet website, application, or advertisement.", disclosedTo: "Service providers" },
          { category: "Inferences drawn from other personal information to create a profile about a consumer", description: "Profile reflecting a consumer's preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.", disclosedTo: "Service providers" },
          { category: "Professional or employment-related information", description: "Collect the employment information of Customers, to provide the appropriate level of service.", disclosedTo: "Service providers" },
          { category: "Geolocation data", description: "As described above, we may collect your IP address automatically when you use our Services. We may be able to determine your general location based on your device's IP address.", disclosedTo: "Service providers" },
        ],
      },
      {
        headerCol1: "Category of Sensitive Personal Information Collected",
        headerCol2: "Category of Third Parties Sensitive Personal Information is Disclosed to for a Business Purpose",
        rows: [
          { category: "Racial or Ethnic Origin or Sexual Orientation or Gender or Citizenship Status", description: "Personal information that consists of your racial or ethnic origin or sexual orientation or gender or citizenship status.", disclosedTo: "Service providers" },
        ],
      },
      "We may use any of the categories of information listed above for other business or operational purposes compatible with the context in which the personal information was collected. The categories of sources from which we collect personal information and our business and commercial purposes for using personal information are set forth in \"Information We Collect About You and How We Collect It\" and \"How We Use Your Information\" of the Privacy Policy, respectively.",
      "We may share any of the information listed above with service providers, which are companies that we engage for business purposes to conduct activities on our behalf. Service providers are restricted from using personal information for any purpose that is not related to our engagement.",
      {
        subheading: "\"Sales\" or \"Sharing\" of Personal Information under the CCPA",
        paragraphs: [
          "California residents have the right to opt out of the \"sale\" or \"sharing\" of their personal information to third parties. The CCPA defines \"sale\" to mean selling, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating a consumer's personal information to a third party for monetary or other valuable consideration (which may be considered \"sales\" under the CCPA even if no money is exchanged). The CCPA defines \"sharing\" to mean sharing, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating a consumer's personal information to a third party for cross-context behavioral advertising, whether or not for monetary or other valuable consideration.",
          "The categories of personal information we have \"sold\" or \"shared\" and the categories of third parties we have \"sold\" or \"shared\" personal information to in the preceding twelve months are listed below.",
        ],
      },
      {
        headerCol1: "Category of Personal Information Collected",
        headerCol2: "Category of Third Parties Personal Information is Disclosed to for a Business Purpose",
        rows: [
          { category: "Identifiers.", description: "A real name, postal address, telephone number, unique personal identifier, online identifier, email address, or other similar identifiers.", disclosedTo: "Service providers" },
          { category: "Personal information categories listed in the California Customer Records statute (Cal. Civ. Code § 1798.80(e))", description: "A name, address, telephone number.", disclosedTo: "Service providers" },
          { category: "Commercial information", description: "Records of products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.", disclosedTo: "Service providers" },
          { category: "Racial or Ethnic Origin or Sexual Orientation or Gender or Citizenship Status", description: "Personal information that consists of your racial or ethnic origin or sexual orientation or gender or citizenship status.", disclosedTo: "Service providers" },
        ],
      },
      "The Company's business and commercial purposes for \"selling\" or \"sharing\" personal information can be found in the Privacy Policy section titled \" How We Use Your Information\". The Company does not have actual knowledge of any \"sale\" of personal information of minors under 16 years of age.",
      {
        subheading: "Other California Consumer Privacy Rights",
        paragraphs: [
          "California residents have additional rights regarding their personal information. This section describes those additional rights and explains how to exercise those rights.",
          "California Shine the Light. The California \"Shine the Light\" law (Civil Code Section § 1798.83) permits users who are California residents to request and obtain from us once a year, free of charge, a list of the third parties to whom we have disclosed their personal information (if any) for their direct marketing purposes in the prior calendar year, as well as the type of personal information disclosed to those parties. If you are a California resident and would like to exercise any of your rights under the law, please contact us at support@recruitu.com. We will process such requests in accordance with applicable laws.",
          "Opt-out of \"Sales or Sharing\". California residents may opt-out of the \"sale or sharing\" of their personal information by contacting us at support@recruitu.com. California residents (or their authorized agent) may also exercise your right to limit the disclosure of your sensitive personal information, by clicking on this \"Limit the Use of My Sensitive Personal Information\" link.",
        ],
      },
    ],
  },
  {
    id: "virginia",
    title: "Virginia Privacy Notice",
    content: [
      "Virginia requires us to disclose certain information related to our privacy practices. This Virginia Privacy Notice (the \"VA Notice\") supplements the information contained in the Recruit.U Privacy Policy (the \"Privacy Policy\") and applies solely to all visitors, users, and others who reside in the State of Virginia (\"consumers\" or \"you\"). We adopt this notice to comply with the Virginia Consumer Data Protection Act (the \"VCDPA\") and any terms defined under the VCDPA have the same meaning when used in this VA Notice. Capitalized terms used but not defined herein shall have the respective meanings set forth in the Privacy Policy.",
      "To understand our privacy practices, you should refer to our Privacy Policy in addition to this supplement applicable to Virginia residents.",
      {
        subheading: "Sharing of Personal Data",
        paragraphs: [
          "The VCDPA requires covered businesses to provide residents of Virginia with the right to know the categories of \"personal data\" (as defined under applicable law) covered businesses shared with third parties and the categories of third parties with whom such personal data has been shared. Residents of Virginia can find this information below:",
        ],
      },
      {
        headerCol1: "Category of Personal Information Collected",
        headerCol2: "Category of Third Parties Personal Information is Disclosed to for a Business Purpose",
        rows: [
          { category: "Identifiers.", description: "A real name, Internet Protocol address, email address, or other similar identifiers.", disclosedTo: "Service providers" },
          { category: "Commercial information", description: "Records of products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.", disclosedTo: "Service providers" },
          { category: "Professional or employment-related information", description: "Collect the employment information of Customers, to provide the appropriate level of service.", disclosedTo: "Service providers" },
          { category: "Inferences drawn from other personal information to create a profile about a consumer", description: "Profile reflecting a consumer's preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.", disclosedTo: "Service providers" },
          { category: "Geolocation data", description: "As described above, we may collect your IP address automatically when you use our Services. We may be able to determine your general location based on your device's IP address.", disclosedTo: "Service providers" },
          { category: "Racial or Ethnic Origin or Sexual Orientation or Gender or Citizenship Status", description: "Personal information that consists of your racial or ethnic origin or sexual orientation or gender or citizenship status.", disclosedTo: "Service providers" },
        ],
      },
      {
        subheading: "\"Sales\" or Sharing for Targeted Advertising under the VCDPA",
        paragraphs: [
          "Residents of Virginia have the right to opt-out of the \"sale\" of their personal data to third parties or the processing of their personal data for targeted advertising (see Section 3 below). For purposes of this paragraph the definition of \"sale\" means any \"exchange of personal data for monetary consideration by us to a third party\" as defined in the VCDPA. However, please note, in accordance with the VCDPA certain specific exceptions to \"sale\" may apply, including the disclosure of personal data to a processor that processes personal data on behalf of a controller. For purposes of this paragraph the definition of \"targeted advertising\" means \"displaying advertisements to you where the advertisement is selected based on personal data obtained from your activities over time and across non-affiliated websites or online applications to predict your preferences or interests\" as defined in the VCDPA. However, please note, as further described in the VCDPA certain specific exceptions to \"targeted advertising\" may apply. If a consumer wishes to exercise their right to opt-out of the sale of personal data or processing of personal data for targeted advertising, they may do so by following this link.",
        ],
      },
      {
        headerCol1: "Category of Personal Information Sold or Shared by the Company",
        headerCol2: "Category of Third Parties Personal Information is Sold or Shared to",
        rows: [
          { category: "Identifiers.", description: "A real name, postal address, telephone number, unique personal identifier, online identifier, email address, or other similar identifiers.", disclosedTo: "Service providers" },
          { category: "Commercial information", description: "Records of products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.", disclosedTo: "Service providers" },
          { category: "Racial or Ethnic Origin or Sexual Orientation or Gender or Citizenship Status", description: "Personal information that consists of your racial or ethnic origin or sexual orientation or gender or citizenship status.", disclosedTo: "Service providers" },
        ],
      },
      {
        subheading: "Right to Opt-Out",
        paragraphs: [
          "Virginia residents may request to opt-out of the processing of your personal data for the purpose(s) of: (A) targeted advertising; (B) sale of personal data; or (C) profiling to make decisions that have legal or other significant effects on you. If you would like to exercise this right, you may send us an email to request to opt-out. We will process such requests in accordance with applicable law.",
        ],
      },
    ],
  },
  {
    id: "colorado",
    title: "Colorado Privacy Notice",
    content: [
      "Colorado requires us to disclose certain information related to our privacy practices. This Colorado Privacy Notice (the \"CO Notice\") supplements the information contained in the Recruit.U Privacy Policy (the \"Privacy Policy\") and applies solely to all visitors, users, and others who reside in the State of Colorado (\"consumers\" or \"you\"). We adopt this notice to comply with the Colorado Privacy Act (the \"CPA\") and any terms defined under the CPA have the same meaning when used in this CO Notice. Capitalized terms used but not defined herein shall have the respective meanings set forth in the Privacy Policy.",
      "To understand our privacy practices, you should refer to our Privacy Policy in addition to this supplement applicable to Colorado residents.",
      {
        subheading: "Categories of Personal Data Collected or Processed",
        paragraphs: [
          "The CPA requires covered businesses to provide residents of Colorado with the right to know the categories of \"personal data\" (as defined under applicable law) covered businesses have collected or processed about them and the categories of third parties with whom such personal data has been shared. Residents of Colorado can find this information below:",
        ],
      },
      {
        headerCol1: "Category of Personal Data Collected or Processed",
        headerCol2: "Category of Third Parties Personal Data is Shared With",
        rows: [
          { category: "Identifiers.", description: "A real name, Internet Protocol address, email address, or other similar identifiers.", disclosedTo: "Service providers" },
          { category: "Commercial information", description: "Records of products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.", disclosedTo: "Service providers" },
          { category: "Internet or other electronic network activity", description: "Browsing history, search history, information on a consumer's interaction with an internet website, application, or advertisement.", disclosedTo: "Service providers" },
          { category: "Inferences drawn from other personal information to create a profile about a consumer", description: "Profile reflecting a consumer's preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.", disclosedTo: "Service providers" },
          { category: "Professional or employment-related information", description: "Collect the employment information of Customers, to provide the appropriate level of service.", disclosedTo: "Service providers" },
          { category: "Geolocation data", description: "As described above, we may collect your IP address automatically when you use our Services. We may be able to determine your general location based on your device's IP address.", disclosedTo: "Service providers" },
          { category: "Racial or Ethnic Origin or Sexual Orientation or Gender or Citizenship Status", description: "Personal information that consists of your racial or ethnic origin or sexual orientation or gender or citizenship status.", disclosedTo: "Service providers" },
        ],
      },
      {
        subheading: "\"Sales\" or Sharing for Targeted Advertising under the CPA",
        paragraphs: [
          "Residents of Colorado have the right to opt-out of the \"sale\" of their personal data to third parties or the processing of their personal data for targeted advertising (see Section 3 below). For purposes of this paragraph the definition of \"sale\", \"sell\" or \"sold\" means \"the exchange of personal data for monetary or other valuable consideration by a controller to a third party\" as defined in the CPA. However, please note, in accordance with the CPA certain specific exceptions to \"sale\" may apply, including the disclosure of personal data to a processor that processes personal data on behalf of a controller. For purposes of this paragraph the definition of \"targeted advertising\" means \"displaying to a consumer an advertisement that is selected based on personal data obtained or inferred over time from the consumer's activities across nonaffiliated websites, applications or online services to predict consumer preferences or interests\" as defined in the CPA. However, please note, as further described in the CPA certain specific exceptions to \"targeted advertising\" may apply. If a consumer wishes to exercise their right to opt-out of the sale of personal data or processing of personal data for targeted advertising, they may do so by following this link. The categories of personal data \"sold\" or processed for targeted advertising can be found below:",
        ],
      },
      {
        headerCol1: "Category of Personal Data Collected or Processed",
        headerCol2: "Category of Third Parties Personal Data is Shared With",
        rows: [
          { category: "Identifiers.", description: "A real name, Internet Protocol address, email address, or other similar identifiers.", disclosedTo: "Service providers" },
          { category: "Racial or Ethnic Origin or Sexual Orientation or Gender or Citizenship Status", description: "Personal information that consists of your racial or ethnic origin or sexual orientation or gender or citizenship status.", disclosedTo: "Service providers" },
        ],
      },
      {
        subheading: "Right to Opt-Out",
        paragraphs: [
          "Colorado residents may request to opt-out of the processing of your personal data for the purpose(s) of: (A) targeted advertising; (B) sale of personal data; or (C) profiling to make decisions that have legal or other significant effects on you. If you would like to exercise this right, you may send us an email to request to opt-out. We will process such requests in accordance with applicable law. Please note: You may broadcast an Opt-Out Preference Signal, such as the Global Privacy Control (GPC) (on the browsers and/or browser extensions that support such a signal), however we do not currently honor such signals or similar mechanisms.",
        ],
      },
      {
        headerCol1: "Category of Personal Information Collected",
        headerCol2: "Category of Third Parties Personal Information is Disclosed to for a Business Purpose",
        rows: [
          { category: "Identifiers.", description: "A real name, Internet Protocol address, email address, or other similar identifiers.", disclosedTo: "Service providers" },
          { category: "Commercial information", description: "Records of products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.", disclosedTo: "Service providers" },
          { category: "Internet or other electronic network activity", description: "Browsing history, search history, information on a consumer's interaction with an internet website, application, or advertisement.", disclosedTo: "Service providers" },
          { category: "Professional or employment-related information", description: "Collect the employment information of Customers, to provide the appropriate level of service.", disclosedTo: "Service providers" },
          { category: "Inferences drawn from other personal information to create a profile about a consumer", description: "Profile reflecting a consumer's preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.", disclosedTo: "Service providers" },
          { category: "Geolocation data", description: "As described above, we may collect your IP address automatically when you use our Services. We may be able to determine your general location based on your device's IP address.", disclosedTo: "Service providers" },
          { category: "Racial or Ethnic Origin or Sexual Orientation or Gender or Citizenship Status", description: "Personal information that consists of your racial or ethnic origin or sexual orientation or gender or citizenship status.", disclosedTo: "Service providers" },
        ],
      },
    ],
  },
  {
    id: "connecticut",
    title: "Connecticut Privacy Notice",
    content: [
      "Connecticut requires us to disclose certain information related to our privacy practices. This Connecticut Privacy Notice (the \"CT Notice\") supplements the information contained in the Recruit.U Privacy Policy (the \"Privacy Policy\") and applies solely to all visitors, users, and others who reside in the State of Connecticut (\"consumers\" or \"you\"). We adopt this notice to comply with the Connecticut Data Privacy Act (the \"CTDPA\") and any terms defined under the CTDPA have the same meaning when used in this CT Notice. Capitalized terms used but not defined herein shall have the respective meanings set forth in the Privacy Policy.",
      "To understand our privacy practices, you should refer to our Privacy Policy in addition to this supplement applicable to Connecticut residents.",
      {
        subheading: "Sharing of Personal Data",
        paragraphs: [
          "The CTDPA requires covered businesses to provide residents of Connecticut with the right to know the categories of \"personal data\" (as defined under applicable law) covered businesses shared with third parties and the categories of third parties with whom such personal data has been shared. Residents of Connecticut can find this information below:",
        ],
      },
      {
        headerCol1: "Category of Personal Data Shared",
        headerCol2: "Category of Third Parties Personal Data is Shared With",
        rows: [
          { category: "Identifiers.", description: "A real name, Internet Protocol address, email address, or other similar identifiers.", disclosedTo: "Service providers" },
          { category: "Commercial information", description: "Records of products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.", disclosedTo: "Service providers" },
          { category: "Internet or other electronic network activity", description: "Browsing history, search history, information on a consumer's interaction with an internet website, application, or advertisement.", disclosedTo: "Service providers" },
          { category: "Inferences drawn from other personal information to create a profile about a consumer", description: "Profile reflecting a consumer's preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.", disclosedTo: "Service providers" },
          { category: "Professional or employment-related information", description: "Collect the employment information of Customers, to provide the appropriate level of service.", disclosedTo: "Service providers" },
          { category: "Geolocation data", description: "As described above, we may collect your IP address automatically when you use our Services. We may be able to determine your general location based on your device's IP address.", disclosedTo: "Service providers" },
          { category: "Racial or Ethnic Origin or Sexual Orientation or Gender or Citizenship Status", description: "Personal information that consists of your racial or ethnic origin or sexual orientation or gender or citizenship status.", disclosedTo: "Service providers" },
        ],
      },
      {
        subheading: "\"Sales\" or Sharing for Targeted Advertising under the CTDPA",
        paragraphs: [
          "Residents of Connecticut have the right to opt-out of the \"sale\" of their personal data to third parties or the processing of their personal data for targeted advertising (see Section 3 below). For purposes of this paragraph the definition of \"sale\", \"sell\" or \"sold\" means \"the exchange of personal data for monetary or other valuable consideration by a controller to a third party\" as defined in the CTDPA. However, please note, in accordance with the CTDPA certain specific exceptions to \"sale\" may apply, including the disclosure of personal data to a processor that processes personal data on behalf of a controller. For purposes of this paragraph the definition of \"targeted advertising\" means \"displaying to a consumer an advertisement that is selected based on personal data obtained or inferred over time from the consumer's activities across nonaffiliated websites, applications or online services to predict consumer preferences or interests\" as defined in the CTDPA. However, please note, as further described in the CTDPA certain specific exceptions to \"targeted advertising\" may apply. If a consumer wishes to exercise their right to opt-out of the sale of personal data or processing of personal data for targeted advertising, they may do so by following this link",
        ],
      },
      {
        subheading: "Right to Opt-Out",
        paragraphs: [
          "Connecticut residents (or an authorized agent thereof) may request to opt-out of the processing of your personal data for the purpose(s) of: (A) targeted advertising; (B) sale of personal data; or (C) profiling to make decisions that have legal or other significant effects on you. If you would like to exercise this right, you may send us an email to request to opt-out. We will process such requests in accordance with applicable law. Please note: You may broadcast an Opt-Out Preference Signal, such as the Global Privacy Control (GPC) (on the browsers and/or browser extensions that support such a signal), however we do not currently honor such signals or similar mechanisms.",
        ],
      },
    ],
  },
  {
    id: "utah",
    title: "Utah Privacy Notice",
    content: [
      "Utah requires us to disclose certain information related to our privacy practices. This Utah Privacy Notice (the \"UT Notice\") supplements the information contained in the Recruit.U Privacy Policy (the \"Privacy Policy\") and applies solely to all visitors, users, and others who reside in the State of Utah (\"consumers\" or \"you\"). We adopt this notice to comply with the Utah Consumer Privacy Act (the \"UCPA\") and any terms defined under the UCPA have the same meaning when used in this UT Notice. Capitalized terms used but not defined herein shall have the respective meanings set forth in the Privacy Policy.",
      "To understand our privacy practices, you should refer to our Privacy Policy in addition to this supplement applicable to Utah residents.",
      {
        subheading: "Sharing of Personal Data",
        paragraphs: [
          "The UCPA requires covered businesses to provide residents of Utah with the right to know the categories of \"personal data\" (as defined under applicable law) covered businesses shared with third parties and the categories of third parties with whom such personal data has been shared. Residents of Utah can find this information below:",
        ],
      },
      {
        headerCol1: "Category of Personal Data Shared",
        headerCol2: "Category of Third Parties Personal Data is Shared With",
        rows: [
          { category: "Identifiers.", description: "A real name, Internet Protocol address, email address, or other similar identifiers.", disclosedTo: "Service providers" },
          { category: "Commercial information", description: "Records of products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.", disclosedTo: "Service providers" },
          { category: "Internet or other electronic network activity", description: "Browsing history, search history, information on a consumer's interaction with an internet website, application, or advertisement.", disclosedTo: "Service providers" },
          { category: "Inferences drawn from other personal information to create a profile about a consumer", description: "Profile reflecting a consumer's preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.", disclosedTo: "Service providers" },
          { category: "Professional or employment-related information", description: "Collect the employment information of Customers, to provide the appropriate level of service.", disclosedTo: "Service providers" },
          { category: "Geolocation data", description: "As described above, we may collect your IP address automatically when you use our Services. We may be able to determine your general location based on your device's IP address.", disclosedTo: "Service providers" },
          { category: "Racial or Ethnic Origin or Sexual Orientation or Gender or Citizenship Status", description: "Personal information that consists of your racial or ethnic origin or sexual orientation or gender or citizenship status.", disclosedTo: "Service providers" },
        ],
      },
      {
        subheading: "\"Sales\" or Sharing for Targeted Advertising under the UCPA",
        paragraphs: [
          "Residents of Utah have the right to opt-out of the \"sale\" of their personal data to third parties or the processing of their personal data for targeted advertising (see Section 3 below). For purposes of this paragraph the definition of \"sale\", \"sell\" or \"sold\" means \"the exchange of personal data for monetary or other valuable consideration by a controller to a third party\" as defined in the UCPA. However, please note, in accordance with the UCPA certain specific exceptions to \"sale\" may apply, including the disclosure of personal data to a processor that processes personal data on behalf of a controller. For purposes of this paragraph the definition of \"targeted advertising\" means \"displaying to a consumer an advertisement that is selected based on personal data obtained or inferred over time from the consumer's activities across nonaffiliated websites, applications or online services to predict consumer preferences or interests\" as defined in the UCPA. However, please note, as further described in the UCPA certain specific exceptions to \"targeted advertising\" may apply. If a consumer wishes to exercise their right to opt-out of the sale of personal data or processing of personal data for targeted advertising, they may do so by following this link",
        ],
      },
      {
        subheading: "Right to Opt-Out",
        paragraphs: [
          "Utah residents may request to opt-out of the processing of your personal data for the purpose(s) of: (A) targeted advertising; or (B) sale of personal data. If you would like to exercise this right, you may send us an email to request to opt-out. We will process such requests in accordance with applicable law.",
        ],
      },
    ],
  },
  {
    id: "nevada",
    title: "Nevada Privacy Notice",
    content: [
      "Nevada law requires us to provide all visitors, users, and others who reside in the State of Nevada (\"you\") certain additional privacy rights. This Nevada Privacy Notice (the \"NV Notice\") supplements the information contained in the Recruit.U Privacy Policy (the \"PrivacyPolicy\") and applies solely to you. If you are a resident of Nevada, you have the right to opt-out of the sale of certain Personal Information to third parties who intend to sell or license that Personal Information, even if your Personal Information is not currently being sold. If you would like to exercise this right, please contact us at support@recruitu.com.",
    ],
  },
  {
    id: "terms-of-use",
    title: "Terms of Use",
    content: [
      "Effective date: March 28, 2025",
      "These terms of use are entered into by and between You (\"You\") and Recruit.U (\"Company,\" \"we,\" or \"us\"). The following terms and conditions, together with Recruit.U's Privacy Policy, govern your access to and use of https://www.recruitu.io, including any content, software, functionality and services offered on or through https://www.recruitu.io (collectively, the \"Website\"). Please read the Terms of Use carefully before You start to use the Website. By clicking to accept or agree to the Terms of Use when this option is made available to You, or by otherwise accessing or using the Website, You accept and agree to be bound and abide by these Terms of Use and our Privacy Policy, found at the Privacy Policy URL, incorporated herein by reference. If You do not want to agree to these Terms of Use or the Privacy Policy, You must not access or use the Website.",
      "This Website is offered and available to users who are 16 years of age or older, and reside in the United States or any of its territories or possessions. By accessing or using the Website, You represent and warrant that You are of legal age to form a binding contract with the Company and meet all of the foregoing eligibility requirements. If You do not meet all of these requirements, You must not access or use the Website.",
      {
        subheading: "Changes to the Terms of Use",
        paragraphs: [
          "We may revise and update these Terms of Use from time to time in our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the Website thereafter. Your continued use of the Website following the posting of revised Terms of Use means that You accept and agree to the changes. You are expected to check this page frequently before You access the Website so You are aware of any changes, as they are binding on You.",
        ],
      },
      {
        subheading: "Accessing the Website and Account Security",
        paragraphs: [
          "We reserve the right to withdraw or amend the Website, and any service or material we provide on the Website, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Website is unavailable at any time or for any period. From time to time, we may restrict access to some parts of the Website, or the entire Website, to users, including registered users.",
          "You are responsible for both: Making all arrangements necessary for You to have access to the Website; and Ensuring that all persons who access the Website through your internet connection are aware of these Terms of Use and comply with them.",
          "To access the Website or some of the resources it offers, You may be asked to provide certain registration details or other information. It is a condition of your use of the Website that all the information You provide on the Website is correct, current, and complete. You agree that all information You provide to register with the Website or otherwise, including, but not limited to, through the use of any interactive features on the Website, is governed by our Privacy Policy and You consent to all actions we take with respect to your information consistent with our Privacy Policy.",
          "If You choose, or are provided with, a user name, password, or any other piece of information as part of our security procedures, You must treat such information as confidential, and You must not disclose it to any other person or entity. You also acknowledge that your account is personal to You and agree not to provide any other person with access to the Website or portions of it using your user name, password, or other security information. You agree to notify us immediately of any unauthorized access to or use of your user name or password or any other breach of security. You also agree to ensure that You exit from your account at the end of each session. You should use particular caution when accessing your account from a public or shared computer so that others are not able to view or record your password or other personal information.",
          "We have the right to disable any user name, password, or other identifier, whether chosen by You or provided by us, at any time in our sole discretion for any or no reason, including if, in our opinion, You have violated any provision of these Terms of Use.",
        ],
      },
      {
        subheading: "Intellectual Property Rights",
        paragraphs: [
          "The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by the Company, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.",
          "These Terms of Use permit You to use the Website for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Website, except as follows: Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials; You may store files that are automatically cached by your Web browser for display enhancement purposes; You may print or download one copy of a reasonable number of pages of the Website for your own personal, non-commercial use and not for further reproduction, publication, or distribution; If we provide desktop, mobile, or other applications for download, You may download a single copy to your computer or mobile device solely for your own personal, non-commercial use, provided You agree to be bound by our end user license agreement for such applications; and If we provide social media features with certain content, You may take such actions as are enabled by such features.",
          "You must not: Modify copies of any materials from this site; Use any illustrations, photographs, video or audio sequences, or any graphics separately from the accompanying text; or Delete or alter any copyright, trademark, or other proprietary rights notices from copies of materials from this site. You must not access or use for any commercial purposes any part of the Website or any services or materials available through the Website.",
          "If You wish to make any use of material on the Website other than that set out in this section, please address your request to: support@recruitu.com. If You print, copy, modify, download, or otherwise use or provide any other person with access to any part of the Website in breach of the Terms of Use, your right to use the Website will stop immediately and You must, at our option, return or destroy any copies of the materials You have made. No right, title, or interest in or to the Website or any content on the Website is transferred to You, and all rights not expressly granted are reserved by the Company. Any use of the Website not expressly permitted by these Terms of Use is a breach of these Terms of Use and may violate copyright, trademark, and other laws.",
        ],
      },
      {
        subheading: "Trademarks",
        paragraphs: [
          "The Company name, and all related names, logos, product and service names, designs, and slogans are trademarks of the Company or its affiliates or licensors. You must not use such marks without the prior written permission of the Company. All other names, logos, product and service names, designs, and slogans on the Website are the trademarks of their respective owners.",
        ],
      },
      {
        subheading: "Prohibited Uses",
        paragraphs: [
          "You may use the Website only for lawful purposes and in accordance with these Terms of Use. You agree not to use the Website: In any way that violates any applicable federal, state, local, or international law or regulation; To send, knowingly receive, upload, download, use, or re-use any material that does not comply with the Content Standards set out in these Terms of Use; To transmit, or procure the sending of, any advertising or promotional material without our prior written consent; To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity; or To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Website, or which, as determined by us, may harm the Company or users of the Website, or expose them to liability.",
          "Additionally, You agree not to: Use the Website in any manner that could disable, overburden, damage, or impair the site or interfere with any other party's use of the Website; Use any robot, spider, or other automatic device, process, or means to access the Website for any purpose; Use any manual process to monitor or copy any of the material on the Website without our prior written consent; Use any device, software, or routine that interferes with the proper working of the Website; Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful; Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Website or any server, computer, or database connected to the Website; Attack the Website via a denial-of-service attack or a distributed denial-of-service attack; or Otherwise attempt to interfere with the proper working of the Website.",
        ],
      },
      {
        subheading: "User Contributions",
        paragraphs: [
          "The Website may contain message boards, chat rooms, personal web pages or profiles, forums, job boards, and other interactive features (collectively, \"Interactive Services\") that allow users to post, submit, publish, display, or transmit content or materials (collectively, \"User Contributions\") on or through the Website. All User Contributions must comply with the Content Standards set out in these Terms of Use.",
          "Any User Contribution You post to the site will be considered non-confidential and non-proprietary. By providing any User Contribution on the Website, You grant us and our affiliates and service providers, and each of their and our respective licensees, successors, and assigns the right to use, reproduce, modify, perform, display, distribute, and otherwise disclose to third parties any such material for any purpose/according to your account settings.",
          "You represent and warrant that: You own or control all rights in and to the User Contributions and have the right to grant the license granted above; You have all consents necessary to publicly disclose and share with us any and all personal information in User Contributions; All of your User Contributions do and will comply with these Terms of Use; and You understand and acknowledge that You are responsible for any User Contributions You submit and that You, not the Company, have sole responsibility for all data and content contained in such User Contributions. We are not responsible or liable to any third party for the content or accuracy of any User Contributions posted by You or any other user of the Website.",
        ],
      },
      {
        subheading: "Monitoring and Enforcement; Termination",
        paragraphs: [
          "We have the right to: Remove or refuse to post any User Contributions for any or no reason; Take any action with respect to any User Contribution that we deem necessary or appropriate; Disclose your identity or other information about You to any third party who claims that material posted by You violates their rights; Take appropriate legal action for any illegal or unauthorized use of the Website; and Terminate or suspend your access to all or part of the Website for any or no reason, including any violation of these Terms of Use.",
          "Without limiting the foregoing, we have the right to cooperate fully with any law enforcement authorities or court order requesting or directing us to disclose the identity or other information of anyone posting any materials on or through the Website. YOU WAIVE AND HOLD HARMLESS THE COMPANY AND ITS AFFILIATES, LICENSEES, AND SERVICE PROVIDERS FROM ANY CLAIMS RESULTING FROM ANY ACTION TAKEN BY THE COMPANY DURING, OR TAKEN AS A CONSEQUENCE OF, INVESTIGATIONS BY EITHER THE COMPANY OR LAW ENFORCEMENT AUTHORITIES. However, we cannot review all material before it is posted on the Website, and cannot ensure prompt removal of objectionable material after it has been posted. Accordingly, we assume no liability for any action or inaction regarding transmissions, communications, or content provided by any user or third party.",
        ],
      },
      {
        subheading: "Content Standards",
        paragraphs: [
          "User Contributions must not: Contain any material that is defamatory, obscene, indecent, abusive, offensive, harassing, violent, hateful, inflammatory, or otherwise objectionable; Promote sexually explicit or pornographic material, violence, or discrimination; Infringe any patent, trademark, trade secret, copyright, or other rights; Violate the legal rights of others; Be likely to deceive any person; Promote any illegal activity; Cause annoyance, inconvenience, or needless anxiety; Impersonate any person or misrepresent your identity; Involve commercial activities or sales; or Give the impression that they emanate from or are endorsed by us, if this is not the case.",
        ],
      },
      {
        subheading: "Copyright Infringement",
        paragraphs: [
          "If You believe that any User Contributions violate your copyright, please see our Copyright Policy for instructions on sending us a notice of copyright infringement. It is the policy of the Company to terminate the user accounts of repeat infringers.",
        ],
      },
      {
        subheading: "Reliance on Information Posted",
        paragraphs: [
          "The information presented on or through the Website is made available solely for general information purposes. We do not warrant the accuracy, completeness, or usefulness of this information. Any reliance You place on such information is strictly at your own risk. We disclaim all liability and responsibility arising from any reliance placed on such materials by You or any other visitor to the Website. This Website may include content provided by third parties. All statements and opinions expressed in these materials are solely the opinions and the responsibility of the person or entity providing those materials. We are not responsible for the content or accuracy of any materials provided by any third parties.",
        ],
      },
      {
        subheading: "Changes to the Website",
        paragraphs: [
          "We may update the content on the Website from time to time, but its content is not necessarily complete or up-to-date. Any of the material on the Website may be out of date at any given time, and we are under no obligation to update such material.",
        ],
      },
      {
        subheading: "Information About You and Your Visits to the Website",
        paragraphs: [
          "All information we collect on the Website is subject to our Privacy Policy. By using the Website, You consent to all actions taken by us with respect to your information in compliance with the Privacy Policy.",
        ],
      },
      {
        subheading: "Other Terms and Conditions",
        paragraphs: [
          "Additional terms and conditions may also apply to specific portions, services, or features of the Website. All such additional terms and conditions are hereby incorporated by this reference into these Terms of Use.",
        ],
      },
      {
        subheading: "Linking to the Website and Social Media Features",
        paragraphs: [
          "You may link to our homepage, provided You do so in a way that is fair and legal and does not damage our reputation. You must not establish a link in such a way as to suggest any form of association, approval, or endorsement on our part without our express written consent. This Website may provide certain social media features. You may use these features solely as they are provided by us and in accordance with any additional terms we provide. Subject to the foregoing, You must not: Establish a link from any website that is not owned by You; Cause the Website or portions of it to be displayed on any other site (framing, deep linking, or in-line linking); Link to any part of the Website other than the homepage; or Otherwise take any action with respect to the materials on the Website that is inconsistent with these Terms of Use. The website from which You are linking must comply with the Content Standards. We reserve the right to withdraw linking permission without notice.",
        ],
      },
      {
        subheading: "Links from the Website",
        paragraphs: [
          "If the Website contains links to other sites and resources provided by third parties, these links are provided for your convenience only. We have no control over the contents of those sites or resources, and accept no responsibility for them or for any loss or damage that may arise from your use of them. If You decide to access any of the third-party websites linked to the Website, You do so entirely at your own risk and subject to the terms and conditions of use for such websites.",
        ],
      },
      {
        subheading: "Geographic Restrictions",
        paragraphs: [
          "The owner of the Website is based in the State of Connecticut in the United States. We provide the Website for use only by persons located in the United States. We make no claims that the Website or any of its content is accessible or appropriate outside of the United States. If You access the Website from outside the United States, You do so on your own initiative and are responsible for compliance with local laws.",
        ],
      },
      {
        subheading: "Disclaimer of Warranties",
        paragraphs: [
          "You understand that we cannot and do not guarantee or warrant that files available for downloading from the internet or the Website will be free of viruses or other destructive code. TO THE FULLEST EXTENT PROVIDED BY LAW, WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A DISTRIBUTED DENIAL-OF-SERVICE ATTACK, VIRUSES, OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL. YOUR USE OF THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE ARE PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PROVIDED BY LAW, THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE.",
        ],
      },
      {
        subheading: "Limitation on Liability",
        paragraphs: [
          "TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL THE COMPANY, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.",
        ],
      },
      {
        subheading: "Indemnification",
        paragraphs: [
          "You agree to defend, indemnify, and hold harmless the Company, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms of Use or your use of the Website.",
        ],
      },
      {
        subheading: "Governing Law and Jurisdiction",
        paragraphs: [
          "All matters relating to the Website and these Terms of Use shall be governed by and construed in accordance with the internal laws of the State of Connecticut without giving effect to any choice or conflict of law provision. Any legal suit, action, or proceeding arising out of or related to these Terms of Use or the Website shall be instituted exclusively in the federal courts of the United States or the courts of the State of Connecticut. You waive any and all objections to the exercise of jurisdiction over You by such courts and to venue in such courts.",
        ],
      },
      {
        subheading: "Arbitration",
        paragraphs: [
          "At Company's sole discretion, it may require You to submit any disputes arising from these Terms of Use or use of the Website to final and binding arbitration under the Rules of Arbitration of the American Arbitration Association applying Connecticut law.",
        ],
      },
      {
        subheading: "Limitation on Time to File Claims",
        paragraphs: [
          "ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING TO THESE TERMS OF USE OR THE WEBSITE MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES; OTHERWISE, SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED.",
        ],
      },
      {
        subheading: "Waiver and Severability",
        paragraphs: [
          "No waiver by the Company of any term or condition set out in these Terms of Use shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition. If any provision of these Terms of Use is held by a court or other tribunal of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms of Use will continue in full force and effect.",
        ],
      },
      {
        subheading: "Entire Agreement",
        paragraphs: [
          "The Terms of Use and our Privacy Policy constitute the sole and entire agreement between You and Recruit.U regarding the Website and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Website.",
        ],
      },
      {
        subheading: "Your Comments and Concerns",
        paragraphs: [
          "This website is operated by Recruit.U. All notices of copyright infringement claims should be sent to the copyright agent designated in our Copyright Policy. All other feedback, comments, requests for technical support, and other communications relating to the Website should be directed to: support@recruitu.com",
        ],
      },
    ],
  },
];
