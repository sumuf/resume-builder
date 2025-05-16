import React from 'react';
import { ResumeData } from '../../types';

interface TemplateProps {
  resumeData: ResumeData;
}

const MinimalTemplate: React.FC<TemplateProps> = ({ resumeData }) => {
  const { personalInfo, experience, education, skills } = resumeData;

  return (
    <div className="font-sans min-h-[1100px] p-8 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-light text-gray-900 mb-1">{personalInfo.fullName}</h1>
        <p className="text-lg text-gray-600">{personalInfo.title}</p>
        
        <div className="flex flex-wrap mt-3 text-sm text-gray-600 space-x-3">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.email && personalInfo.phone && <span>•</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {(personalInfo.email || personalInfo.phone) && personalInfo.location && <span>•</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {(personalInfo.email || personalInfo.phone || personalInfo.location) && personalInfo.website && <span>•</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-6"></div>

      {/* Main Content */}
      <div className="space-y-6">
        {personalInfo.summary && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Profile</h2>
            <p className="text-gray-700">{personalInfo.summary}</p>
          </div>
        )}

        {experience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Experience</h2>
            <div className="space-y-5">
              {experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-medium text-gray-900">{exp.position}</h3>
                    <p className="text-sm text-gray-500">
                      {exp.startDate && new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {
                        exp.current ? 'Present' : 
                        exp.endDate && new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                      }
                    </p>
                  </div>
                  <p className="text-gray-600 mb-2">{exp.company}</p>
                  <p className="text-gray-700 whitespace-pre-line">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Education</h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-medium text-gray-900">{edu.degree} in {edu.field}</h3>
                    <p className="text-sm text-gray-500">
                      {edu.startDate && new Date(edu.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {
                        edu.current ? 'Present' : 
                        edu.endDate && new Date(edu.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                      }
                    </p>
                  </div>
                  <p className="text-gray-600">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {skills.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Skills</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {skills.map((skill, index) => (
                <div key={index} className="text-gray-700">
                  {skill.name} {skill.level && <span className="text-gray-500 text-sm">({skill.level})</span>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MinimalTemplate;