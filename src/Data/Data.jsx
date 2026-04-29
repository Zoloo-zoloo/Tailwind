
import AlexMorgan from "../assets/AlexMorgan.avif"
import SophieLee from "../assets/SophieLee.avif"
export const menuLinks = [
    { name: "Home", href: "#home" },
    { name: "Programs", href: "#programs" },
    { name: "Trainers", href: "#trainers" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
];

export const programs = [
    {
        title: "Strength Training",
        description: "Build muscle and improve your full body strength.",
        icon: "🏋️",
    },
    {
        title: "Yoga Class",
        description: "Increase flexibility and relax your mind and body.",
        icon: "🧘",
    },
    {
        title: "Cardio Workout",
        description: "Boost endurance and improve heart health.",
        icon: "🏃",
    },
];

export const programmingCourses = [
    {
        id: 1,
        title: "HTML & CSS Foundations",
        duration: "4 weeks",
        lessons: "12 lessons",
        level: "Beginner",
        description:
            "Learn how websites are structured and styled by building clean page layouts, cards, buttons, and responsive sections.",
        highlights: [
            "Create real page sections with HTML",
            "Style layouts with modern CSS",
            "Practice responsive design basics",
        ],
    },
    {
        id: 2,
        title: "JavaScript Starter Lab",
        duration: "5 weeks",
        lessons: "15 lessons",
        level: "Beginner to Intermediate",
        description:
            "Understand variables, functions, arrays, and DOM events by making interactive mini features that feel like real apps.",
        highlights: [
            "Work with click events and forms",
            "Build small interactive widgets",
            "Strengthen problem-solving logic",
        ],
    },
    {
        id: 3,
        title: "React UI Builder",
        duration: "6 weeks",
        lessons: "18 lessons",
        level: "Intermediate",
        description:
            "Turn ideas into reusable components and connect them into a polished frontend experience with practical React workflows.",
        highlights: [
            "Build reusable components",
            "Pass props and manage simple state",
            "Create a demo portfolio-ready project",
        ],
    },
];

export const trainers = [
    {
        name: "Alex Morgan",
        specialty: "Strength Coach",
        image: AlexMorgan,
    },
    {
        name: "Sophie Lee",
        specialty: "Yoga Trainer",
        image: SophieLee
    },
];

export const authContext = [
    {
        id: "signup",
        eyebrow: "Join FitZone",
        title: "Register for your program",
        description:
            "Create your membership profile to book classes, save your schedule, and join your favorite training programs.",
        primaryLabel: "Join Program",
        secondaryText: "Already a member?",
        secondaryAction: "Login",
        fields: [
            { label: "Full Name", type: "text", placeholder: "Enter your full name" },
            { label: "Email", type: "email", placeholder: "Enter your email" },
            { label: "Preferred Program", type: "text", placeholder: "Strength Training" },
            { label: "Password", type: "password", placeholder: "Create a password" },
        ],
    },
    {
        id: "login",
        eyebrow: "Welcome Back",
        title: "Login to your fitness account",
        description:
            "Continue your workouts, check trainer updates, and manage your active membership plan.",
        primaryLabel: "Login",
        secondaryText: "Need to register first?",
        secondaryAction: "Join Now",
        fields: [
            { label: "Email", type: "email", placeholder: "Enter your email" },
            { label: "Password", type: "password", placeholder: "Enter your password" },
        ],
    },
];

export const footerItems = ["About", "Classes", "Membership", "Support"];