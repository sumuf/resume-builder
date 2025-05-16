// Resume Data Types
export interface PersonalInfo {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  summary: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  current: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  current: boolean;
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
}

// Default values
export const defaultResumeData: ResumeData = {
  personalInfo: {
    fullName: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    summary: ''
  },
  experience: [
    {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
      current: false
    }
  ],
  education: [
    {
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      current: false
    }
  ],
  skills: [
    { name: '', level: 'Intermediate' }
  ]
};

// Sample resume data for demonstration
export const sampleResumeData: ResumeData = {
  personalInfo: {
    fullName: 'Alex Johnson',
    title: 'Senior Software Engineer',
    email: 'alex.johnson@example.com',
    phone: '(555) 123-4567',
    location: 'San Francisco, CA',
    website: 'alexjohnson.dev',
    summary: 'Experienced software engineer with over 8 years of expertise in full-stack development, focusing on scalable applications and cloud architecture. Passionate about clean code and user-centered design.'
  },
  experience: [
    {
      company: 'Tech Innovations Inc.',
      position: 'Senior Software Engineer',
      startDate: '2020-01',
      endDate: '',
      description: '• Led a team of 5 developers in building a scalable e-commerce platform\n• Reduced system load times by 40% through performance optimization\n• Implemented CI/CD pipelines that reduced deployment time by 65%\n• Mentored junior developers and conducted code reviews',
      current: true
    },
    {
      company: 'Digital Solutions LLC',
      position: 'Software Developer',
      startDate: '2017-03',
      endDate: '2019-12',
      description: '• Developed RESTful APIs for mobile applications\n• Collaborated with UX team to implement responsive web designs\n• Maintained and optimized SQL databases\n• Participated in agile development processes',
      current: false
    }
  ],
  education: [
    {
      institution: 'University of California, Berkeley',
      degree: 'Master of Science',
      field: 'Computer Science',
      startDate: '2015-09',
      endDate: '2017-05',
      current: false
    },
    {
      institution: 'Stanford University',
      degree: 'Bachelor of Science',
      field: 'Software Engineering',
      startDate: '2011-09',
      endDate: '2015-05',
      current: false
    }
  ],
  skills: [
    { name: 'JavaScript/TypeScript', level: 'Expert' },
    { name: 'React/Next.js', level: 'Expert' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'AWS/Cloud Infrastructure', level: 'Advanced' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'CI/CD', level: 'Advanced' }
  ]
};