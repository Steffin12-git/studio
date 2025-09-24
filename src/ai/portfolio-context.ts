// This file provides context about the portfolio for the AI chatbot.
// By centralizing the data here, we can easily update the AI's knowledge base.

import { 
    about, 
    skillsData, 
    projectsData, 
    educationData, 
    certificationsData, 
    experienceData,
    socialLinks,
    navLinks
} from "@/lib/data";

const fullPortfolio = {
    about: about.bio,
    skills: skillsData,
    projects: projectsData.map(p => ({ title: p.title, description: p.description, tags: p.tags, github: p.githubUrl })),
    education: educationData,
    certifications: certificationsData.map(c => ({ title: c.title, issuer: c.issuer, date: c.date })),
    experience: experienceData,
    socials: socialLinks.map(s => ({ name: s.name, url: s.url})),
    contactInfo: {
        email: "steffinthomas12@gmail.com",
        linkedin: "https://www.linkedin.com/in/steffin-thomas-b85549260",
        github: "https://github.com/Steffin12-git"
    },
    navigation: navLinks
};

// Convert the JSON object to a string format that's easy for the LLM to parse.
export const portfolioContext = JSON.stringify(fullPortfolio, null, 2);
