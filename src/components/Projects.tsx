import { ExternalLink, Figma } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import projectDemo from '@/assets/project-demo.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Travel Booking App UI",
      description: "Designed a travel booking app UI in Figma, focusing on intuitive navigation, user-friendly layout, and responsive design principles. Implemented features like destination search, booking flow, and personalized recommendations with a modern visual aesthetic.",
      image: projectDemo,
      technologies: ["Figma", "UI/UX Design", "Responsive Design", "User Experience"],
      category: "UI/UX Design",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase of my design and development work, featuring user-centered solutions and modern aesthetics
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card border-border/20 hover-glow group overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-sm font-medium">
                    {project.status}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Figma className="h-5 w-5 text-primary" />
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View Design
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;