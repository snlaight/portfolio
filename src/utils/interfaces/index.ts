export interface EmailSend {
    full_name: string;
    email: string;
    message: string;
}

interface Technology {
    name: string;
    image: string;
    category: string;
}

export interface Project {
    _id: number;
    title: string;
    images: string[];
    technologies: Technology[];
    repository: string;
    video?: string;
    url: string;
    featured: boolean;
    category: string;
    description: string;
}

export interface Skill {
    name: string;
    image: {
        asset: {
            url: string;
        }
    };
    category: string;
}

export interface ValidationRule {
    validate: (value: string) => string;
    required?: string | boolean;
}

export interface ValidationRules {
    [key: string]: ValidationRule;
}
