import React from 'react';
import { useResumeContext } from '../contexts/ResumeContext';
import ModernTemplate from './templates/ModernTemplate';
import ClassicTemplate from './templates/ClassicTemplate';
import MinimalTemplate from './templates/MinimalTemplate';

const ResumePreview: React.FC = () => {
  const { resumeData, selectedTemplate } = useResumeContext();

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'modern':
        return <ModernTemplate resumeData={resumeData} />;
      case 'classic':
        return <ClassicTemplate resumeData={resumeData} />;
      case 'minimal':
        return <MinimalTemplate resumeData={resumeData} />;
      default:
        return <ModernTemplate resumeData={resumeData} />;
    }
  };

  return (
    <div className="w-full mx-auto bg-white shadow-md">
      <div className="w-full max-w-[800px] mx-auto scale-[0.85] origin-top min-h-[1100px] border border-gray-300">
        {renderTemplate()}
      </div>
    </div>
  );
};

export default ResumePreview;