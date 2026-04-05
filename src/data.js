export const profile = {
  name: "Tejas Parvathappa",
  title: "Data Scientist",
  tagline: "Data nerd, deep learning classifiers, GIS analytics, autonomous pipelines, and all things data.",
  email: "tejasparvathappa@gmail.com",
  phone: "585-553-6660",
  linkedin: "https://linkedin.com/in/tejas-parvathappa",
  github: "https://github.com/tejasparvathappa",
  location: "Gainesville, FL",
  about: `I'm a Data Scientist at Applied Research Associates, embedded onsite at the Florida Department of Transportation (FDOT). The models I build and the pipelines I engineer don't just sit in notebooks — they directly inform how Florida maintains and repairs the roads millions of people drive on every single day.

My work lives at the intersection of deep learning, geospatial analysis, and production-grade data engineering. I train PyTorch and DGCNN models to classify pavement distress from road imagery, process 3D point cloud data from LCMS sensors through Azure pipelines, and surface insights through ArcGIS Pro to FDOT engineers in formats they can actually act on. I've also built GPT-powered internal tooling that cuts manual defect review time by nearly half.

Before FDOT, I was a Graduate Research Assistant at RIT — running large-scale studies on 18,000+ student records at the intersection of AI and accessibility. Before that, a Co-Op at ITT Inc. doing supply chain optimization with XGBoost, Power BI, and MS SQL Server.

My technical range is broad by design: time series forecasting, computer vision, NLP, cloud ETL (AWS and Azure), GIS spatial analytics, and LLM-powered tooling. I like building things that work in production, not just in demos.

Outside work: Monte Carlo stock simulators, real-time yoga pose detection, ASL image classifiers, and whatever else seems worth building.`,
};

export const experience = [
  {
    company: "Applied Research Associates",
    companyShort: "ARA",
    logo: "https://www.ara.com/wp-content/uploads/2020/03/ARA-Logo-Retina.jpg",
    clientLogo: "https://fdotwww.blob.core.windows.net/sitefinity/images/default-source/homeimages/fdot-logo-color.png",
    client: "Florida Dept. of Transportation",
    role: "Data Scientist",
    location: "Gainesville, FL · Onsite @ FDOT",
    period: "Oct 2024 – Present",
    type: "Industry",
    highlights: [
      "Embedded onsite at the Florida Department of Transportation (FDOT), engineering Python/SQL/Azure pipelines to process LiDAR-based 3D point cloud data from LCMS sensors — results directly inform road maintenance decisions statewide",
      "Developing and deploying deep learning image classification models (PyTorch, DGCNN) to detect and classify pavement distress at 88% accuracy, extending maintenance forecasting timelines by 50 days",
      "Performing GIS spatial analysis with ArcGIS Pro to map crack detection outputs and pavement condition indices across Florida's road network",
      "Built GPT-powered internal tools to automatically extract and report sensor-based pavement defects, reducing manual review time by 40%",
      "Conducted A/B testing on performance forecast models — reduced false-positive rates by 15%, improving maintenance prioritization reliability",
    ],
    tags: ["PyTorch", "DGCNN", "LiDAR", "ArcGIS Pro", "GIS", "Python", "Azure", "SQL", "GPT"],
  },
  {
    company: "RIT",
    companyShort: "RIT",
    logo: "https://www.rit.edu/sites/all/themes/uwbase/rit_bootstrap_2019/favicon/apple-touch-icon.png",
    role: "Graduate Research Assistant",
    location: "Rochester, NY",
    period: "Aug 2023 – May 2024",
    type: "Research",
    highlights: [
      "Directed a large-scale study of 18,000+ student records using Generative AI tools to analyze accessibility challenges",
      "Transferable expertise in scalable ML workflows, data ethics, and human-in-the-loop AI",
    ],
    tags: ["GenAI", "ML Workflows", "Research", "Python"],
  },
  {
    company: "ITT Inc.",
    companyShort: "ITT",
    logo: "https://www.itt.com/getmedia/91d49f10-95d4-47b5-a059-d2f7dc97964a/ITT_Logo_White.png",
    logoDark: true,
    role: "Supply Chain Data Scientist Co-Op",
    location: "Seneca Falls, NY",
    period: "May 2022 – Dec 2022",
    type: "Industry",
    highlights: [
      "Applied XGBoost, Logistic Regression, and A/B testing on SKU-level datasets — improved retrieval accuracy by 30%",
      "Consolidated 12 reports into an interactive Power BI dashboard, reducing reporting workload by 40%",
      "Automated ingestion of 2,500+ purchase orders into MS SQL Server using Python ETL",
    ],
    tags: ["XGBoost", "Logistic Regression", "Power BI", "Python", "MS SQL Server"],
  },
  {
    company: "Indian Designs Pvt.",
    companyShort: "ID",
    logo: null,
    role: "Data Scientist",
    location: "Bangalore, India",
    period: "Jan 2021 – Jul 2021",
    type: "Industry",
    highlights: [
      "Built regression and ARIMA forecasting models deployed on GCP, integrated into Tableau dashboards — 15% increase in data-driven planning",
      "Applied unsupervised clustering to identify customer segments, improving profitability through targeted strategies",
    ],
    tags: ["sklearn", "ARIMA", "GCP", "Tableau", "Clustering"],
  },
];

export const projects = [
  {
    title: "Text-to-SQL with Google Gemini",
    description: "Google Gemini API generates SQL queries from natural language against a SQLite DB. Streamlit web interface with multi-query support.",
    tags: ["Python", "Google Gemini API", "Streamlit", "SQLite"],
    metric: "LLM-powered query gen",
    github: "https://github.com/tejasparvathappa",
    vizType: "sql",
  },
  {
    title: "Monte Carlo Stock Simulation",
    description: "Python Monte Carlo simulation using Geometric Brownian Motion to forecast stock price distributions and quantify portfolio risk through 10,000+ stochastic iterations.",
    tags: ["Python", "NumPy", "yfinance", "Monte Carlo"],
    metric: "10,000+ iterations",
    github: "https://github.com/tejasparvathappa/Monte-Carlo-Simulation-of-my-favorite-stocks",
    vizType: "montecarlo",
  },
  {
    title: "Real-time AI Yoga Trainer",
    description: "MediaPipe and OpenCV detect and correct yoga postures in real-time with skeleton overlay, angle detection, and live Streamlit feedback.",
    tags: ["Python", "MediaPipe", "OpenCV", "Streamlit"],
    metric: "Real-time pose detection",
    github: "https://github.com/tejasparvathappa/Real-time-AI-Yoga-Trainer",
    vizType: "pose",
  },
  {
    title: "ASL Image Classification (CNN)",
    description: "CNN with Keras translating American Sign Language gestures into English alphabet letters using the Sign Language MNIST dataset.",
    tags: ["Python", "Keras", "CNN", "Computer Vision"],
    metric: "26-class classifier",
    github: "https://github.com/tejasparvathappa/ASL-IMAGE-CLASSIFICATION-USING-CNN-AND-KERAS-",
    vizType: "cnn",
  },
  {
    title: "Sales ETL Pipeline on AWS",
    description: "Serverless ETL using S3, Glue, and Lambda to automatically transform sales data between buckets — 40% efficiency improvement.",
    tags: ["AWS S3", "AWS Glue", "Lambda", "Serverless"],
    metric: "40% efficiency gain",
    github: "https://github.com/tejasparvathappa/AWS-Data-Engineering-using-S3-Glue-and-Lambda",
    vizType: "pipeline",
  },
  {
    title: "House Price Time Series",
    description: "Multi-model time series forecasting of house prices with ARIMA, SARIMA, and ensemble approaches capturing seasonality and trend.",
    tags: ["Python", "ARIMA", "SARIMA", "Time Series"],
    metric: "Multi-model ensemble",
    github: "https://github.com/tejasparvathappa/House-Price-Prediction-TimeSeries",
    vizType: "timeseries",
  },
];

export const skills = {
  "Languages":         ["Python", "SQL", "R"],
  "ML & Deep Learning":["PyTorch", "Scikit-learn", "Pandas", "PySpark", "XGBoost", "DGCNN", "A/B Testing", "Predictive Modeling"],
  "GIS & Spatial":     ["ArcGIS Pro", "LiDAR / Point Cloud", "LCMS Sensor Data", "Spatial Analysis", "ArcGIS StoryMap"],
  "Cloud & Data Eng.": ["AWS SageMaker", "AWS Glue", "Azure Data Lake", "AWS RDS", "MS SQL Server", "SSIS", "ETL"],
  "BI & Visualization":["Power BI", "Tableau", "Excel"],
};

export const education = [
  {
    school: "Rochester Institute of Technology",
    degree: "M.S. Information Technology and Analytics",
    period: "Aug 2021 – May 2024",
    location: "Rochester, NY",
    gpa: "3.8 / 4.0",
    logo: "https://www.rit.edu/sites/all/themes/uwbase/rit_bootstrap_2019/favicon/apple-touch-icon.png",
  },
  {
    school: "Visveswaraya Institute of Technology",
    degree: "B.S Information Science and Engineering",
    period: "Aug 2017 – Aug 2021",
    location: "Bangalore, India",
    gpa: "3.7 / 4.0",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Visvesvaraya_Technological_University_Logo.png/200px-Visvesvaraya_Technological_University_Logo.png",  },
];

export const publications = [
  {
    title: "The Ethical Repercussions of Chatting with ChatGPT: Multiple Language Learners on an English-Based Higher Education Playing Field",
    authors: "Parvathappa T., Beaton C.",
    venue: "INTED 2024 Conference",
    year: "2024",
    link: "https://library.iated.org/view/PARVATHAPPA2024ETH",
  },
];

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    logoColor: "#FF9900",
    verifyUrl: "https://www.credly.com/badges/eb2e1f8a-8324-4db4-b860-c8a38c2aa200/public_url",
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    year: "2023",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    logoColor: "#4285F4",
    verifyUrl: "https://www.credly.com/badges/368463a0-ae28-4264-9abf-c694a55dde07",
  },
  {
    name: "AWS ML Engineer Associate",
    issuer: "Amazon Web Services",
    year: "2026 · In progress",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    logoColor: "#FF9900",
    verifyUrl: null,
  },
];
