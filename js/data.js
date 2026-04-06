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
        title: "UAV Vision-Based Obstacle Avoidance",
        description: "An autonomous drone flight control system based on AirSim and deep learning. Integrates YOLOv8 for real-time visual perception and PID controllers for state machine-driven obstacle avoidance.",
        techStack: ["Python", "AirSim", "YOLOv8", "OpenCV", "PID Control"],
        link: "https://github.com/Hannezs/uav-vision-obstacle-avoidance"
    },
    {
        title: "Industrial Robotic Arm Simulation",
        description: "A lightweight web-based simulator for industrial robotic arms using WebGL and pure CSS.",
        techStack: ["CSS3", "JavaScript", "Three.js"],
        link: "#"
    }
];
