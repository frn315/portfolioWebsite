import { PageInfo, Social, Experience, Skill, Project } from "../typings";

export const mockPageInfo: PageInfo = {
    _type: "pageInfo",
    _id: "1",
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString(),
    _rev: "1",
    name: "Farhan",
    role: "Software Engineer",
    heroImage: "/profile.jpg" as any,
    backgroundInformation: "Hey 👋🏼 I’m Farhan a Software Engineer based in Mumbai, India. I did my undergraduate in Electronics Engineering at Mumbai University.\n\nI love building AI that solves real problems the kind that works quietly, scales reliably, and feels simple to use. My work spans data pipelines, machine learning systems, and generative AI products. If it involves models, data, and clean code, that’s where I want to be.\n\nOutside of tech, I thrive on strength and discipline. I love lifting heavy 🏋️ and I’ve earned a black belt in Karate 🥋 after years of training, focus, and commitment to the craft.",
    profilePic: "/profile.jpg" as any,
    phoneNumber: "+91-9137941850",
    email: "frn315@gmail.com",
    address: "Mumbai, India",
};

export const mockSocials: Social[] = [
    {
        _type: "social",
        _id: "2",
        _createdAt: new Date().toISOString(),
        _updatedAt: new Date().toISOString(),
        _rev: "1",
        title: "LinkedIn",
        url: "https://linkedin.com/in/frn315",
    },
    {
        _type: "social",
        _id: "4",
        _createdAt: new Date().toISOString(),
        _updatedAt: new Date().toISOString(),
        _rev: "1",
        title: "Twitter",
        url: "https://twitter.com/frn315",
    },
    {
        _type: "social",
        _id: "1",
        _createdAt: new Date().toISOString(),
        _updatedAt: new Date().toISOString(),
        _rev: "1",
        title: "GitHub",
        url: "https://github.com/frn315",
    },
    {
        _type: "social",
        _id: "3",
        _createdAt: new Date().toISOString(),
        _updatedAt: new Date().toISOString(),
        _rev: "1",
        title: "Instagram",
        url: "https://www.instagram.com/frn315_/",
    },
];

export const mockSkills: Skill[] = [
    // Languages & Core
    { _type: "skill", _id: "s1", _createdAt: "", _updatedAt: "", _rev: "", title: "Python", progress: 80, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" as any },
    { _type: "skill", _id: "s2", _createdAt: "", _updatedAt: "", _rev: "", title: "SQL", progress: 70, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" as any },
    { _type: "skill", _id: "s3", _createdAt: "", _updatedAt: "", _rev: "", title: "Linux", progress: 55, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" as any },
    { _type: "skill", _id: "s12", _createdAt: "", _updatedAt: "", _rev: "", title: "Git", progress: 75, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" as any },

    // Data Science & ML
    { _type: "skill", _id: "s4", _createdAt: "", _updatedAt: "", _rev: "", title: "Pandas", progress: 75, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" as any },
    { _type: "skill", _id: "s5", _createdAt: "", _updatedAt: "", _rev: "", title: "NumPy", progress: 75, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" as any },
    { _type: "skill", _id: "s6", _createdAt: "", _updatedAt: "", _rev: "", title: "Scikit-learn", progress: 58, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" as any },
    { _type: "skill", _id: "s7", _createdAt: "", _updatedAt: "", _rev: "", title: "TensorFlow", progress: 50, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" as any },
    { _type: "skill", _id: "s23", _createdAt: "", _updatedAt: "", _rev: "", title: "PyTorch", progress: 52, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" as any },
    { _type: "skill", _id: "s8", _createdAt: "", _updatedAt: "", _rev: "", title: "OpenCV", progress: 48, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" as any },
    { _type: "skill", _id: "s24", _createdAt: "", _updatedAt: "", _rev: "", title: "Bash", progress: 55, image: "/bash.png" as any },

    // GenAI & LLMs
    { _type: "skill", _id: "s9", _createdAt: "", _updatedAt: "", _rev: "", title: "LangChain", progress: 80, image: "/langchain.png" as any },
    { _type: "skill", _id: "s10", _createdAt: "", _updatedAt: "", _rev: "", title: "Jira", progress: 50, image: "/jira.png" as any },
    { _type: "skill", _id: "s25", _createdAt: "", _updatedAt: "", _rev: "", title: "Hugging Face", progress: 75, image: "/huggingface.png" as any },
    { _type: "skill", _id: "s26", _createdAt: "", _updatedAt: "", _rev: "", title: "LlamaIndex", progress: 55, image: "/llamaindex.png" as any },
    { _type: "skill", _id: "s11", _createdAt: "", _updatedAt: "", _rev: "", title: "Vector DBs", progress: 58, image: "/chroma.png" as any },
    { _type: "skill", _id: "s13", _createdAt: "", _updatedAt: "", _rev: "", title: "LLMs", progress: 80, image: "/llm.png" as any },
    { _type: "skill", _id: "s14", _createdAt: "", _updatedAt: "", _rev: "", title: "Homebrew", progress: 45, image: "/brew.png" as any },

    // Big Data & Cloud
    { _type: "skill", _id: "s15", _createdAt: "", _updatedAt: "", _rev: "", title: "Databricks", progress: 55, image: "/databricks.png" as any },
    { _type: "skill", _id: "s16", _createdAt: "", _updatedAt: "", _rev: "", title: "PySpark", progress: 58, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" as any },
    { _type: "skill", _id: "s30", _createdAt: "", _updatedAt: "", _rev: "", title: "Kafka", progress: 48, image: "/kafka.png" as any },
    { _type: "skill", _id: "s31", _createdAt: "", _updatedAt: "", _rev: "", title: "HTML5", progress: 55, image: "/html5.png" as any },
    { _type: "skill", _id: "s17", _createdAt: "", _updatedAt: "", _rev: "", title: "Azure", progress: 59, image: "/azure.png" as any },
    { _type: "skill", _id: "s18", _createdAt: "", _updatedAt: "", _rev: "", title: "AWS", progress: 50, image: "/aws.png" as any },
    { _type: "skill", _id: "s19", _createdAt: "", _updatedAt: "", _rev: "", title: "Kubernetes", progress: 45, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" as any },
    { _type: "skill", _id: "s20", _createdAt: "", _updatedAt: "", _rev: "", title: "Docker", progress: 58, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" as any },

    // Backend & Visualization
    { _type: "skill", _id: "s21", _createdAt: "", _updatedAt: "", _rev: "", title: "FastAPI", progress: 80, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" as any },
    { _type: "skill", _id: "s27", _createdAt: "", _updatedAt: "", _rev: "", title: "SQLite", progress: 55, image: "/sqlite.png" as any },
    { _type: "skill", _id: "s28", _createdAt: "", _updatedAt: "", _rev: "", title: "Streamlit", progress: 58, image: "/streamlit.png" as any },
    { _type: "skill", _id: "s29", _createdAt: "", _updatedAt: "", _rev: "", title: "Plotly", progress: 52, image: "/plotly.png" as any },
    { _type: "skill", _id: "s22", _createdAt: "", _updatedAt: "", _rev: "", title: "Power BI", progress: 50, image: "/powerbi.png" as any },
];

export const mockExperiences: Experience[] = [
    {
        _type: "experience",
        _id: "exp1",
        _createdAt: new Date().toISOString(),
        _updatedAt: new Date().toISOString(),
        _rev: "1",
        jobTitle: "AI Pre-Sales Engineer",
        company: "Capgemini",
        companyImage: "/capgemini.png" as any,
        dateStarted: "2023-06-01",
        dateEnded: "",
        isCurrentlyWorkingHere: true,
        points: [
            "Led AI solutioning and pre-sales technical architecture for agentic development frameworks.",
            "Designed prompt engineering strategies and agent orchestration workflows for compliance automation.",
            "Created comprehensive generative AI suites combining Code Converter, Mermaid Diagram Creator, and Model Validator.",
            "Achieved 40-60% reduction in development and validation cycles through metamodel orchestration."
        ],
        technologies: [
            { _type: "technology", _id: "t1", _createdAt: "", _updatedAt: "", _rev: "", title: "Python", progress: 80, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" as any },
            { _type: "technology", _id: "t2", _createdAt: "", _updatedAt: "", _rev: "", title: "Azure", progress: 70, image: "/azure.png" as any },
            { _type: "technology", _id: "t3", _createdAt: "", _updatedAt: "", _rev: "", title: "FastAPI", progress: 80, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" as any },
            { _type: "technology", _id: "t4", _createdAt: "", _updatedAt: "", _rev: "", title: "LangChain", progress: 80, image: "/langchain.png" as any },
        ]
    },
    {
        _type: "experience",
        _id: "exp1b",
        _createdAt: new Date().toISOString(),
        _updatedAt: new Date().toISOString(),
        _rev: "1",
        jobTitle: "Data Scientist",
        company: "Capgemini",
        companyImage: "/capgemini.png" as any,
        dateStarted: "2023-01-01",
        dateEnded: "2023-06-01",
        isCurrentlyWorkingHere: false,
        points: [
            "Developed RAG-based generative AI systems integrating LangChain, Vector DBs, and LLM orchestration.",
            "Built FastAPI-based microservices for real-time inference and model serving, supporting 10,000+ daily API calls.",
            "Implemented automated data validation frameworks ensuring compliance.",
            "Optimized machine learning pipelines for scalability and performance."
        ],
        technologies: [
            { _type: "technology", _id: "t1", _createdAt: "", _updatedAt: "", _rev: "", title: "Python", progress: 80, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" as any },
            { _type: "technology", _id: "t2", _createdAt: "", _updatedAt: "", _rev: "", title: "Azure", progress: 70, image: "/azure.png" as any },
            { _type: "technology", _id: "t3", _createdAt: "", _updatedAt: "", _rev: "", title: "FastAPI", progress: 80, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" as any },
            { _type: "technology", _id: "t4b", _createdAt: "", _updatedAt: "", _rev: "", title: "LangChain", progress: 80, image: "/langchain.png" as any },
        ]
    },
    {
        _type: "experience",
        _id: "exp2",
        _createdAt: new Date().toISOString(),
        _updatedAt: new Date().toISOString(),
        _rev: "1",
        jobTitle: "Data Engineer",
        company: "Capgemini",
        companyImage: "/capgemini.png" as any,
        dateStarted: "2021-06-01",
        dateEnded: "2022-12-01",
        isCurrentlyWorkingHere: false,
        points: [
            "Built and maintained SoC-based Azure Data Pipelines using Azure Data Factory and PySpark.",
            "Integrated data from embedded SoC modules into Azure Data Lake for regulatory analytics.",
            "Developed Power BI dashboards for telemetry insights across IoT devices.",
            "Designed scalable ETL workflows supporting downstream machine learning pipelines, improving forecast accuracy by 35%.",
            "Implemented Kafka-based event streaming architecture for real-time data ingestion.",
            "Optimized Databricks clusters and PySpark jobs, reducing cloud infrastructure costs by 28%."
        ],
        technologies: [
            { _type: "technology", _id: "t4", _createdAt: "", _updatedAt: "", _rev: "", title: "Azure", progress: 70, image: "/azure.png" as any },
            { _type: "technology", _id: "t5", _createdAt: "", _updatedAt: "", _rev: "", title: "Spark", progress: 70, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" as any },
            { _type: "technology", _id: "t6", _createdAt: "", _updatedAt: "", _rev: "", title: "Kafka", progress: 60, image: "/kafka.png" as any },
        ]
    },
    {
        _type: "experience",
        _id: "exp3",
        _createdAt: new Date().toISOString(),
        _updatedAt: new Date().toISOString(),
        _rev: "1",
        jobTitle: "Software Engineer",
        company: "Capgemini",
        companyImage: "/capgemini.png" as any,
        dateStarted: "2019-08-01",
        dateEnded: "2021-05-01",
        isCurrentlyWorkingHere: false,
        points: [
            "Designed OCR pipelines with Tesseract and OpenCV for multilingual degradation detection.",
            "Automated regression workflows for PLM systems, accelerating release cycles by 3 weeks.",
            "Developed an Azure Data Lake pipeline for nutritional analysis with 89% accuracy.",
            "Created Power BI dashboards and regression models to visualize and forecast product stability.",
            "Implemented automated data validation frameworks ensuring compliance.",
            "Built Python-based data quality monitoring tools, detecting anomalies within 15 minutes."
        ],
        technologies: [
            { _type: "technology", _id: "t7", _createdAt: "", _updatedAt: "", _rev: "", title: "Python", progress: 80, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" as any },
            { _type: "technology", _id: "t8", _createdAt: "", _updatedAt: "", _rev: "", title: "OpenCV", progress: 60, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" as any },
            { _type: "technology", _id: "t9", _createdAt: "", _updatedAt: "", _rev: "", title: "SQL", progress: 70, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" as any },
        ]
    }
];

export const mockProjects: Project[] = [
    {
        _type: "project",
        _id: "proj1",
        _createdAt: new Date().toISOString(),
        _updatedAt: new Date().toISOString(),
        _rev: "1",
        title: "Portfolio Website",
        summary: "I built this portfolio to master the modern React ecosystem, combining Next.js, TypeScript, Tailwind CSS, and Framer Motion into a seamless digital experience. Visually inspired by Mitchell Sparrow, adapted and built by Farhan Mallick. The design focuses on clean aesthetics and fluid interactivity. To ensure maximum performance and reliability, I architected the system to run on a lightweight local data layer, eliminating external dependencies while maintaining easy content manageability.",
        image: "/project_portfolio.png" as any,
        images: [
            "/portfolio_showcase.png" as any
        ],
        linkToBuild: "https://github.com/frn315/portfolio",
        technologies: [
            { _type: "technology", _id: "p1t1", _createdAt: "", _updatedAt: "", _rev: "", title: "Next.js", progress: 80, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" as any },
            { _type: "technology", _id: "p1t2", _createdAt: "", _updatedAt: "", _rev: "", title: "Tailwind", progress: 70, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" as any },
            { _type: "technology", _id: "p1t3", _createdAt: "", _updatedAt: "", _rev: "", title: "TypeScript", progress: 80, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" as any },
            { _type: "technology", _id: "p1t4", _createdAt: "", _updatedAt: "", _rev: "", title: "Framer Motion", progress: 80, image: "/framer.svg" as any },
        ]
    },
    {
        _type: "project",
        _id: "proj2",
        _createdAt: new Date().toISOString(),
        _updatedAt: new Date().toISOString(),
        _rev: "1",
        title: "Insurance Underwriting Risk Engine",
        summary: "An ML system that ingests medical reports to predict policy risk categories (Low, Medium, High). Features feature engineering, model calibration, and batch scoring pipelines to assist underwriters.",
        image: "/project_risk.png" as any,
        linkToBuild: "",
        technologies: [
            { _type: "technology", _id: "p2t1", _createdAt: "", _updatedAt: "", _rev: "", title: "Python", progress: 80, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" as any },
            { _type: "technology", _id: "p2t2", _createdAt: "", _updatedAt: "", _rev: "", title: "Azure", progress: 70, image: "/azure.png" as any },
            { _type: "technology", _id: "p2t3", _createdAt: "", _updatedAt: "", _rev: "", title: "ML", progress: 65, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" as any },
        ]
    }
];
