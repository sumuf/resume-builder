import React from 'react';
import { ResumeData } from '../../types';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

interface TemplateProps {
  resumeData: ResumeData;
}

const ClassicTemplate: React.FC<TemplateProps> = ({ resumeData }) => {
  const { personalInfo, experience, education, skills } = resumeData;

  return (
    <div className="font-serif min-h-[1100px] p-10 bg-white">
      {/* Header */}
      <div className="text-center mb-8 border-b-2 border-gray-300 pb-4">
        <h1 className="text-3xl font-bold text-gray-800 uppercase tracking-wider mb-1">
          {personalInfo.fullName}
        </h1>
        <p className="text-lg text-gray-600 mb-4">{personalInfo.title}</p>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          {personalInfo.email && (
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-1 text-gray-500" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1 text-gray-500" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1 text-gray-500" />
              <span>{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-1 text-gray-500" />
              <span>{personalInfo.website}</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {personalInfo.summary && (
          <div>
            <h2 className="text-xl font-bold uppercase tracking-wider mb-3 text-gray-800 border-b border-gray-300 pb-1">
              Professional Summary
            </h2>
            <p className="text-gray-700">{personalInfo.summary}</p>
          </div>
        )}

        {experience.length > 0 && (
          <div>
            <h2 className="text-xl font-bold uppercase tracking-wider mb-3 text-gray-800 border-b border-gray-300 pb-1">
              Work Experience
            </h2>
            <div className="space-y-5">
              {experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h3 className="font-bold text-lg">{exp.position}</h3>
                    <p className="text-sm text-gray-600 italic">
                      {exp.startDate && new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {
                        exp.current ? 'Present' : 
                        exp.endDate && new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                      }
                    </p>
                  </div>
                  <p className="font-semibold text-gray-700">{exp.company}</p>
                  <p className="mt-2 text-gray-700 whitespace-pre-line">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {education.length > 0 && (
          <div>
            <h2 className="text-xl font-bold uppercase tracking-wider mb-3 text-gray-800 border-b border-gray-300 pb-1">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h3 className="font-bold">{edu.degree} in {edu.field}</h3>
                    <p className="text-sm text-gray-600 italic">
                      {edu.startDate && new Date(edu.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {
                        edu.current ? 'Present' : 
                        edu.endDate && new Date(edu.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                      }
                    </p>
                  </div>
                  <p className="text-gray-700">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {skills.length > 0 && (
          <div>
            <h2 className="text-xl font-bold uppercase tracking-wider mb-3 text-gray-800 border-b border-gray-300 pb-1">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                  {skill.name} {skill.level && `(${skill.level})`}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassicTemplate;