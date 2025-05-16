import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { defaultResumeData, ResumeData } from '../types';

interface ResumeContextType {
  resumeData: ResumeData;
  updateResumeData: (sectionName: string, sectionData: any) => void;
  selectedTemplate: string;
  setSelectedTemplate: (template: string) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  addExperience: () => void;
  updateExperience: (index: number, data: any) => void;
  removeExperience: (index: number) => void;
  addEducation: () => void;
  updateEducation: (index: number, data: any) => void;
  removeEducation: (index: number) => void;
  addSkill: () => void;
  updateSkill: (index: number, data: any) => void;
  removeSkill: (index: number) => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const useResumeContext = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResumeContext must be used within a ResumeProvider');
  }
  return context;
};

interface ResumeProviderProps {
  children: ReactNode;
}

export const ResumeProvider: React.FC<ResumeProviderProps> = ({ children }) => {
  const [resumeData, setResumeData] = useState<ResumeData>(() => {
    const savedData = localStorage.getItem('resumeData');
    return savedData ? JSON.parse(savedData) : defaultResumeData;
  });

  const [selectedTemplate, setSelectedTemplate] = useState<string>(() => {
    const savedTemplate = localStorage.getItem('selectedTemplate');
    return savedTemplate || 'modern';
  });

  const [selectedColor, setSelectedColor] = useState<string>(() => {
    const savedColor = localStorage.getItem('selectedColor');
    return savedColor || 'blue';
  });

  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [resumeData]);

  useEffect(() => {
    localStorage.setItem('selectedTemplate', selectedTemplate);
  }, [selectedTemplate]);

  useEffect(() => {
    localStorage.setItem('selectedColor', selectedColor);
  }, [selectedColor]);

  const updateResumeData = (sectionName: string, sectionData: any) => {
    setResumeData(prev => ({
      ...prev,
      [sectionName]: sectionData
    }));
  };

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        { company: '', position: '', startDate: '', endDate: '', description: '', current: false }
      ]
    }));
  };

  const updateExperience = (index: number, data: any) => {
    setResumeData(prev => {
      const updatedExperience = [...prev.experience];
      updatedExperience[index] = { ...updatedExperience[index], ...data };
      return { ...prev, experience: updatedExperience };
    });
  };

  const removeExperience = (index: number) => {
    setResumeData(prev => {
      const updatedExperience = [...prev.experience];
      updatedExperience.splice(index, 1);
      return { ...prev, experience: updatedExperience };
    });
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        { institution: '', degree: '', field: '', startDate: '', endDate: '', current: false }
      ]
    }));
  };

  const updateEducation = (index: number, data: any) => {
    setResumeData(prev => {
      const updatedEducation = [...prev.education];
      updatedEducation[index] = { ...updatedEducation[index], ...data };
      return { ...prev, education: updatedEducation };
    });
  };

  const removeEducation = (index: number) => {
    setResumeData(prev => {
      const updatedEducation = [...prev.education];
      updatedEducation.splice(index, 1);
      return { ...prev, education: updatedEducation };
    });
  };

  const addSkill = () => {
    setResumeData(prev => ({
      ...prev,
      skills: [
        ...prev.skills,
        { name: '', level: 'Intermediate' }
      ]
    }));
  };

  const updateSkill = (index: number, data: any) => {
    setResumeData(prev => {
      const updatedSkills = [...prev.skills];
      updatedSkills[index] = { ...updatedSkills[index], ...data };
      return { ...prev, skills: updatedSkills };
    });
  };

  const removeSkill = (index: number) => {
    setResumeData(prev => {
      const updatedSkills = [...prev.skills];
      updatedSkills.splice(index, 1);
      return { ...prev, skills: updatedSkills };
    });
  };

  const value = {
    resumeData,
    updateResumeData,
    selectedTemplate,
    setSelectedTemplate,
    selectedColor,
    setSelectedColor,
    addExperience,
    updateExperience,
    removeExperience,
    addEducation,
    updateEducation,
    removeEducation,
    addSkill,
    updateSkill,
    removeSkill
  };

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
};