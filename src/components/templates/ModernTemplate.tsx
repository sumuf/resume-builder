import React from 'react';
import { ResumeData } from '../../types';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { useResumeContext } from '../../contexts/ResumeContext';

interface TemplateProps {
  resumeData: ResumeData;
}

const ModernTemplate: React.FC<TemplateProps> = ({ resumeData }) => {
  const { personalInfo, experience, education, skills } = resumeData;
  const { selectedColor } = useResumeContext();

  const getColorClasses = () => {
    switch (selectedColor) {
      case 'emerald':
        return {
          sidebar: 'bg-emerald-600',
          border: 'border-emerald-400/30',
          skill: 'bg-emerald-700/30',
          heading: 'text-emerald-600',
          text: 'text-emerald-200'
        };
      case 'purple':
        return {
          sidebar: 'bg-purple-600',
          border: 'border-purple-400/30',
          skill: 'bg-purple-700/30',
          heading: 'text-purple-600',
          text: 'text-purple-200'
        };
      case 'red':
        return {
          sidebar: 'bg-red-600',
          border: 'border-red-400/30',
          skill: 'bg-red-700/30',
          heading: 'text-red-600',
          text: 'text-red-200'
        };
      case 'amber':
        return {
          sidebar: 'bg-amber-600',
          border: 'border-amber-400/30',
          skill: 'bg-amber-700/30',
          heading: 'text-amber-600',
          text: 'text-amber-200'
        };
      case 'gray':
        return {
          sidebar: 'bg-gray-700',
          border: 'border-gray-500/30',
          skill: 'bg-gray-800/30',
          heading: 'text-gray-700',
          text: 'text-gray-300'
        };
      default: // blue
        return {
          sidebar: 'bg-blue-600',
          border: 'border-blue-400/30',
          skill: 'bg-blue-700/30',
          heading: 'text-blue-600',
          text: 'text-blue-200'
        };
    }
  };

  const colors = getColorClasses();

  return (
    <div className="font-sans min-h-[1100px] flex">
      {/* Sidebar */}
      <div className={`w-1/3 ${colors.sidebar} text-white p-8`}>
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2 break-words">{personalInfo.fullName}</h1>
          <p className={`${colors.text} font-medium text-sm leading-relaxed`}>{personalInfo.title}</p>
        </div>

        <div className="mb-8">
          <h2 className={`text-lg font-semibold mb-4 border-b ${colors.border} pb-2`}>Contact</h2>
          <div className="space-y-3">
            {personalInfo.email && (
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm break-all">{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
            )}
            {personalInfo.website && (
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm break-all">{personalInfo.website}</span>
              </div>
            )}
          </div>
        </div>

        <div>
          <h2 className={`text-lg font-semibold mb-4 border-b ${colors.border} pb-2`}>Skills</h2>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium">{skill.name}</span>
                  <span className={`${colors.text} text-xs`}>{skill.level}</span>
                </div>
                <div className={`w-full ${colors.skill} rounded-full h-1.5`}>
                  <div 
                    className="bg-white h-1.5 rounded-full" 
                    style={{ 
                      width: skill.level === 'Beginner' ? '25%' : 
                             skill.level === 'Intermediate' ? '50%' : 
                             skill.level === 'Advanced' ? '75%' : '100%' 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-2/3 p-8 bg-white">
        {personalInfo.summary && (
          <div className="mb-8">
            <h2 className={`text-xl font-bold mb-4 ${colors.heading} border-b border-gray-200 pb-2`}>
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
          </div>
        )}

        {experience.length > 0 && (
          <div className="mb-8">
            <h2 className={`text-xl font-bold mb-4 ${colors.heading} border-b border-gray-200 pb-2`}>
              Work Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="break-inside-avoid">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">{exp.position}</h3>
                      <p className="text-gray-600 text-sm">{exp.company}</p>
                    </div>
                    <p className="text-sm text-gray-500 whitespace-nowrap ml-4">
                      {exp.startDate && new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {
                        exp.current ? 'Present' : 
                        exp.endDate && new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                      }
                    </p>
                  </div>
                  <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{exp.description}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {education.length > 0 && (
          <div>
            <h2 className={`text-xl font-bold mb-4 ${colors.heading} border-b border-gray-200 pb-2`}>
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="break-inside-avoid">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-semibold text-gray-800">{edu.degree} in {edu.field}</h3>
                      <p className="text-gray-600 text-sm">{edu.institution}</p>
                    </div>
                    <p className="text-sm text-gray-500 whitespace-nowrap ml-4">
                      {edu.startDate && new Date(edu.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {
                        edu.current ? 'Present' : 
                        edu.endDate && new Date(edu.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                      }
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModernTemplate;