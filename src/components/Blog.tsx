import { GraduationCap, School, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Blog = () => {
  const education = [
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      degree: "Bachelor of Technology (ECE)",
      institution: "SVR Engineering College, Nandyal",
      period: "2022-2026",
      type: "Current"
    },
    {
      icon: <School className="w-8 h-8 text-secondary" />,
      degree: "Intermediate (MPC)",
      institution: "KGR Junior College, Banaganapalle",
      period: "2020-2022",
      type: "Completed"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-accent" />,
      degree: "SSC",
      institution: "Dolphin English Medium, Gulbarga, Karnataka",
      period: "2020",
      type: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="glass-card border-border/20 hover-glow">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center">
                      {edu.icon}
                    </div>
                  </div>
                  
                  <div className="flex-grow text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {edu.degree}
                      </h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        edu.type === 'Current' 
                          ? 'bg-primary/10 text-primary border border-primary/20' 
                          : 'bg-secondary/10 text-secondary border border-secondary/20'
                      }`}>
                        {edu.type}
                      </span>
                    </div>
                    
                    <h4 className="text-lg text-muted-foreground mb-2">
                      {edu.institution}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground font-medium">
                      {edu.period}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;