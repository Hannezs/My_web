export const newsData = [
    { date: "2026/04", content: "Invited speaker at Embodied AI Conference." },
    { date: "2025/12", content: "Starting a new journey focusing on Robotics and HCI." },
];

export const publicationsData = [];

export const projectsData = [
    {
        title: "Turbid-AI",
        description: "TurbidAI is an AI-powered, full-stack IoT system designed for water quality monitoring and analysis, specifically focusing on turbidity testing and reporting. It seamlessly integrates custom IoT hardware, a robust backend API, a modern frontend dashboard, and AI-driven workflows.",
        techStack: ["Vue 3", "Spring Boot", "C++", "Docker", "Dify"],
        link: "https://github.com/Hannezs/Turbid-AI",
        image :"/images/TurbidAI.png",
    },
    {
        title: "Knowledge Graph & RAG System",
        description: "An intelligent Q&A and semantic extraction system combining Knowledge Graphs and Retrieval-Augmented Generation (RAG). Supports document upload, automated entity-relation extraction via LLMs, and natural language Q&A powered by vector databases.",
        techStack: ["Vue 3", "FastAPI", "Milvus", "LLMs", "RAG"],
        link: "https://github.com/Hannezs/Knowledge-Graph-RAG-System",
        image: "/images/KG_RAG_demo.png",
        // video: "/images/sample-video.mp4" // 你可以像这样添加本地或在线的视频链接
    },
    {
        title: "UAV Vision-Based Obstacle Avoidance",
        description: "An autonomous drone flight control system based on AirSim and deep learning. Integrates YOLOv8 for real-time visual perception and PID controllers for state machine-driven obstacle avoidance.",
        techStack: ["Python", "AirSim", "YOLOv8", "OpenCV", "PID Control"],
        link: "https://github.com/Hannezs/uav-vision-obstacle-avoidance",
        iframe: "//player.bilibili.com/player.html?bvid=BV1x4DiBMEcr&high_quality=1&danmaku=0"
    },
    {
        title: "Personal Portfolio Website",
        description: "The very website you are browsing! A lightweight, fast, and data-driven portfolio designed with a clean academic aesthetic. Features responsive layouts and pure CSS industrial animations.",
        techStack: ["Vanilla JS", "Tailwind CSS", "Vite", "DaisyUI"],
        link: "https://github.com/Hannezs/My_web",
        image: "/images/web_demo.png"
    },
    {
        title: "Stanford CS231n Solutions",
        description: "Comprehensive solutions to Stanford's Deep Learning for Computer Vision course (CS231n) programming assignments. Implementations include CNNs, RNNs, Attention Mechanisms, and Generative Models using PyTorch and NumPy.",
        techStack: ["Python", "PyTorch", "NumPy", "Deep Learning", "Computer Vision"],
        link: "https://github.com/Hannezs/cs231n-solutions"
    },
    {
        title: "TCGA-STAD Multiomics Subtyping",
        description: "A bioinformatics and machine learning pipeline based on TCGA multi-omics data for Stomach Adenocarcinoma (STAD). Integrates transcriptomics, miRNA, DNA methylation, and clinical data to discover novel molecular subtypes via SNF consensus clustering and extracts minimal diagnostic biomarkers using LASSO and Random Forest.",
        techStack: ["Python", "Machine Learning", "Bioinformatics", "scikit-learn", "snfpy"],
        link: "https://github.com/Hannezs/TCGA-STAD-Multiomics-Subtyping",
        image: "/images/Classifier_Evaluation_ROC_CM.png",
    },
];
