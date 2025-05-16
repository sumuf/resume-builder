import React from 'react';
import { useResumeContext } from '../contexts/ResumeContext';
import PersonalInfoForm from './forms/PersonalInfoForm';
import ExperienceForm from './forms/ExperienceForm';
import EducationForm from './forms/EducationForm';
import SkillsForm from './forms/SkillsForm';
import { sampleResumeData } from '../types';

interface ResumeFormProps {
  currentStep: string;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ currentStep }) => {
  const { updateResumeData } = useResumeContext();
  
  const handleLoadSample = () => {
    // Get the data for the current section only
    if (currentStep === 'personal') {
      updateResumeData('personalInfo', sampleResumeData.personalInfo);
    } else if (currentStep === 'experience') {
      updateResumeData('experience', sampleResumeData.experience);
    } else if (currentStep === 'education') {
      updateResumeData('education', sampleResumeData.education);
    } else if (currentStep === 'skills') {
      updateResumeData('skills', sampleResumeData.skills);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold capitalize">
          {currentStep === 'personal' ? 'Personal Information' : currentStep}
        </h2>
        <button
          onClick={handleLoadSample}
          className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-md hover:bg-purple-200"
        >
          Load Sample Data
        </button>
      </div>
      
      {currentStep === 'personal' && <PersonalInfoForm />}
      {currentStep === 'experience' && <ExperienceForm />}
      {currentStep === 'education' && <EducationForm />}
      {currentStep === 'skills' && <SkillsForm />}
    </div>
  );
};

export default ResumeForm;