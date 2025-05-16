import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ResumeData } from '../types';

export const exportToPdf = async (resumeData: ResumeData, template: string) => {
  try {
    const resumeElement = document.querySelector('.w-full.max-w-\\[800px\\]');
    
    if (!resumeElement) {
      console.error('Resume element not found');
      return;
    }

    // Creating canvas from the resume element
    const canvas = await html2canvas(resumeElement, {
      scale: 2, // Higher scale for better quality
      useCORS: true,
      logging: false,
      allowTaint: true,
    });

    // Creating PDF
    const pdf = new jsPDF({
      format: 'a4',
      unit: 'mm',
    });

    // A4 dimensions: 210 x 297 mm
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    
    // Generate a filename based on user's name or a generic name if not available
    const filename = resumeData.personalInfo.fullName 
      ? `${resumeData.personalInfo.fullName.replace(/\s+/g, '_')}_Resume.pdf`
      : `Resume_${template}_${new Date().toISOString().split('T')[0]}.pdf`;
      
    pdf.save(filename);
  } catch (error) {
    console.error('Error exporting PDF:', error);
    alert('There was an error exporting your resume. Please try again.');
  }
};