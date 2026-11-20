export const links = {
  email: 'mailto:pranesht.2003@gmail.com',
  whatsapp: 'https://wa.me/919789266281',
  github: 'https://github.com/teachpranesh2003',
  linkedin: 'https://www.linkedin.com/in/pranesh-t-05aa51211/',
  resume: 'Assets/pdf/PraneshT_Resume.pdf',
};

export const projects = [
  { name: 'BackOffice', domain: 'Retail operations', metric: '20+', unit: 'REST APIs', stack: 'Java  /  Spring Boot  /  Spring Security',
    intro: 'I build the APIs behind a Japanese retail platform serving 100+ stores, from order and payment processing to scheduled price changes.',
    modules: [
      ['Price reservation', 'I owned the price reservation module end to end. Its API lets a store schedule a price change with a future effective time.'],
      ['Spring Security & JWT', 'I built the authentication module from design through deployment. It validates bearer tokens before protected retail endpoints run and supports 500+ users.'],
      ['AI-assisted, spec-driven development', 'On BackOffice, I define the API contract and acceptance criteria first. I use Claude as a coding agent to draft implementation changes and tests, then review the diff and verify the behavior against the spec.'],
      ['Retail operations', 'The API surface covers transactions, payments, orders, totalizers, summaries, pricing and node configuration.'],
    ] },
  { name: 'CloudPOS Alpen', domain: 'Store cash flow & data exchange', metric: '1M+', unit: 'EDI records', stack: 'Spring Boot  /  Amazon S3  /  CSV & TXT',
    intro: 'I built External Data Interchange (EDI) jobs for large file transfers and cash management APIs for the store till.',
    modules: [
      ['External Data Interchange', 'My import and export jobs move CSV and TXT data between store databases and Amazon S3. These transfers handle more than one million records.'],
      ['Till loans & settlement', 'The till-loan, settlement and cash management APIs track money entering and leaving a till, by node and endpoint.'],
      ['Regression automation', 'I automated 300+ EDI regression cases, cutting a full run from 48 hours to 2 hours.'],
    ] },
];

export const roles = [
  ['2023', 'Aug 2023 – Jul 2024', 'Software Intern', 'Verified till-loan and settlement flows, then automated regression coverage for EDI file transfers.'],
  ['2024', 'Aug 2024 – Mar 2026', 'Associate Software Engineer', 'Built Spring Boot services for POS integration and data transfers between retail databases and Amazon S3.'],
  ['2026', 'Apr 2026 – present', 'Software Engineer', 'Own BackOffice Spring Boot APIs from specification through deployment. Use Claude to implement and test changes against the agreed API contract.'],
];

export const stack = ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'REST APIs', 'RabbitMQ', 'MySQL', 'MongoDB', 'Amazon S3', 'Docker', 'JUnit', 'GitLab CI'];
export const notes = [
  ['Spring AI & LLM integration', 'I use Spring AI to connect Java services to large language models. The service builds the prompt, calls the model and handles its response.'],
  ['Spec-driven development with Claude', 'On BackOffice, I define expected inputs, responses and failure cases, review the code and tests that Claude proposes, then verify them against the API specification.'],
  ['Load balancing & latency', 'Stateless API instances can share traffic behind a load balancer. Before adding capacity, I check p95 latency and database connection wait time to locate the bottleneck.'],
  ['Distributed systems', 'RabbitMQ decouples producers from consumers. I design consumers around redelivery, especially when a database write succeeds before the message is acknowledged.'],
  ['SOLID in practice', 'An EDI parser reads the file, a validator checks each record, and a repository persists it. Depending on a storage interface lets me test the import without connecting to S3.'],
];
export const awards = [
  ['POS Team Award', 'October 2024', 'POS-Award.jpeg', 'Certificate presented to Pranesh by the POS team'],
  ['Award presentation', 'Toshiba Software India', 'pos-award-01.jpeg', 'Pranesh receiving his framed award at Toshiba'],
  ['Across & Beyond Award', 'April 2026', 'HR-Intern-Award.jpeg', 'Across & Beyond Award plaque for the Global Resource Hiring Team'],
];
