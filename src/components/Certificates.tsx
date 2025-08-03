import { Award, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import projectDemo from '@/assets/project-demo.jpg';

const Projects = () => {
  const certificates = [
    {
      title: "Oracle Certified Foundations Associate",
      description: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate certification demonstrating expertise in cloud infrastructure and AI foundations.",
      image: "/lovable-uploads/f4b5e96a-fbce-432b-a228-ae35552eaec1.png",
      issuer: "Oracle Corporation",
      date: "August 01, 2025",
      validUntil: "August 01, 2027",
      skills: ["Cloud Infrastructure", "AI Foundations", "Oracle Cloud"]
    },
    {
      title: "Certificate of Internship - Web Development",
      description: "Successfully completed short-term internship programme in Web Development, demonstrating practical skills in modern web technologies.",
      image: "/lovable-uploads/dc069bed-5ac5-41f0-b0eb-42e4e45dfcbe.png",
      issuer: "SkillDzire",
      date: "May 12, 2025 - July 12, 2025",
      institution: "SVR Engineering College, JNTUA Anantapur",
      skills: ["Web Development", "HTML/CSS", "JavaScript", "Frontend Development"]
    }
  ];

  return (
    <section id="certificates" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Certificates
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements in technology and skills development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {certificates.map((certificate, index) => (
            <Card key={index} className="glass-card border-border/20 hover-glow group overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {certificate.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {certificate.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {certificate.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="flex items-center text-muted-foreground">
                    <Award className="mr-2 h-5 w-5 text-primary" />
                    <span>Issued by {certificate.issuer}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    <span>{certificate.date}</span>
                  </div>
                  {certificate.validUntil && (
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="mr-2 h-5 w-5 text-primary" />
                      <span>Valid until {certificate.validUntil}</span>
                    </div>
                  )}
                </div>
                
                {certificate.institution && (
                  <div className="mt-4 text-sm text-muted-foreground">
                    <span className="font-medium">Institution:</span> {certificate.institution}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;