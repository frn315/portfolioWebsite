

interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
}

export interface PageInfo extends SanityBody {
    _type: 'pageInfo';
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: any;
    name: string;
    phoneNumber: string;
    profilePic: any;
}

export interface Technology extends SanityBody {
    _type: 'technology';
    image: any;
    progress: number;
    title: string;
}

export interface Skill extends SanityBody {
    _type: 'skill';
    image: any;
    progress: number;
    title: string;
}

export interface Experience extends SanityBody {
    _type: 'experience';
    company: string;
    companyImage: any;
    dateStarted: string;
    dateEnded: string;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

export interface Project extends SanityBody {
    _type: 'project';
    title: string;
    linkToBuild: string;
    image: any;
    images?: any[]; // Optional array for multiple images
    summary: string;
    technologies: Technology[];
}

export interface Social extends SanityBody {
    _type: 'social';
    title: string;
    url: string;
}