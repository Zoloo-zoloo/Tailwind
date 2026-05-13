
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
        id: "strength-training",
        title: "Strength Training",
        description: "Build muscle and improve your full body strength.",
        icon: "🏋️",
    },
    {
        id: "yoga-class",
        title: "Yoga Class",
        description: "Increase flexibility and relax your mind and body.",
        icon: "🧘",
    },
    {
        id: "cardio-workout",
        title: "Cardio Workout",
        description: "Boost endurance and improve heart health.",
        icon: "🏃",
    },
];

export const programmingCourses = [
    {
        id: "strength-training",
        title: "Strength Training",
        icon: "🏋️",
        coach: "Alex Morgan",
        progress: "2 of 12 sessions completed",
        duration: "6 weeks",
        sessions: "18 guided sessions",
        schedule: "Mon, Wed, Fri",
        description:
            "Build strength step by step with structured workouts that improve balance, power, and overall body control.",
        highlights: [
            "Full-body starter strength routine",
            "Safe form practice with coach guidance",
            "Weekly progress tracking plan",
        ],
    },
    {
        id: "yoga-class",
        title: "Yoga Class",
        icon: "🧘",
        coach: "Sophie Lee",
        progress: "3 of 12 sessions completed",
        duration: "5 weeks",
        sessions: "15 guided sessions",
        schedule: "Tue, Thu",
        description:
            "Improve flexibility and recovery with calm sessions focused on movement quality, breathing, and posture.",
        highlights: [
            "Stretching and mobility flow",
            "Breathing techniques for recovery",
            "Beginner-friendly balance practice",
        ],
    },
    {
        id: "cardio-workout",
        title: "Cardio Workout",
        icon: "🏃",
        coach: "Mia Chen",
        progress: "1 of 10 sessions completed",
        duration: "4 weeks",
        sessions: "12 guided sessions",
        schedule: "Weekend plan",
        description:
            "Boost endurance with energetic cardio training designed to keep workouts motivating and easy to follow.",
        highlights: [
            "Short high-energy cardio blocks",
            "Heart-rate focused conditioning",
            "Simple home workout format",
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

export const authContent = {
    signup: {
        eyebrow: "Join FitZone",
        title: "Register for your program",
        description:
            "Create your membership profile to book classes, save your schedule, and join your favorite training programs.",
        primaryLabel: "Join Program",
        secondaryText: "Already a member?",
        secondaryAction: "Login",
        fields: [
            { label: " Full Name", type: "text", placeholder: "Enter your full name" },
            { label: "Email", type: "email", placeholder: "Enter your email" },
            { label: "Preferred Program", type: "text", placeholder: "Strength Training" },
            { label: "Password", type: "password", placeholder: "Create a password" },
        ],
    },
    login: {
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
};

export const footerItems = ["About", "Classes", "Membership", "Support"];