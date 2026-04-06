export const newsData = [
    { date: "2026/04", content: "Invited speaker at Embodied AI Conference." },
    { date: "2025/12", content: "Starting a new journey focusing on Robotics and HCI." },
];

export const publicationsData = [
    {
        title: "Adaptive Humanoid Control with Minimal Force Feedback",
        authors: "Hannes Zhang, John Doe, Jane Smith",
        venue: "ICRA 2026",
        links: [
            { text: "Paper", url: "#" },
            { text: "Code", url: "#" },
            { text: "Video", url: "#" }
        ],
        image: "https://placehold.co/600x400/1f2937/FFFFFF/png?text=ICRA+Paper"
    }
];

export const projectsData = [
    {
        title: "Stanford CS231n Solutions",
        description: "Comprehensive solutions to Stanford's Deep Learning for Computer Vision course (CS231n) programming assignments. Implementations include CNNs, RNNs, Attention Mechanisms, and Generative Models using PyTorch and NumPy.",
        techStack: ["Python", "PyTorch", "NumPy", "Deep Learning", "Computer Vision"],
        link: "https://github.com/Hannezs/cs231n-solutions"
    },
    {
        title: "Knowledge Graph & RAG System",
        description: "An intelligent Q&A and semantic extraction system combining Knowledge Graphs and Retrieval-Augmented Generation (RAG). Supports document upload, automated entity-relation extraction via LLMs, and natural language Q&A powered by vector databases.",
        techStack: ["Vue 3", "FastAPI", "Milvus", "LLMs", "RAG"],
        link: "https://github.com/Hannezs/Knowledge-Graph-RAG-System"
    },
    {
        title: "UAV Vision-Based Obstacle Avoidance",
        description: "An autonomous drone flight control system based on AirSim and deep learning. Integrates YOLOv8 for real-time visual perception and PID controllers for state machine-driven obstacle avoidance.",
        techStack: ["Python", "AirSim", "YOLOv8", "OpenCV", "PID Control"],
        link: "https://github.com/Hannezs/uav-vision-obstacle-avoidance"
    }
];
