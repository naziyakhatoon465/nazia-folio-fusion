import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import projectDemo from '@/assets/project-demo.jpg';

const Projects = () => {
  const project = {
    title: "E-Commerce Web Application",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.",
    image: projectDemo,
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
    github: "https://github.com/naziakhatoon",
    demo: "https://demo-link.com"
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my latest work in web development and engineering solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-border/20 hover-glow group overflow-hidden">
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
            
            <CardContent className="p-8">
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
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="hover-glow bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="mr-2 h-5 w-5" />
                  View Code
                </Button>
                <Button 
                  variant="outline"
                  className="hover-glow border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(project.demo, '_blank')}
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* More projects coming soon */}
        <div className="text-center mt-16">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              More Projects Coming Soon
            </h3>
            <p className="text-muted-foreground">
              I'm constantly working on new projects and improving my skills. 
              Check back soon for more exciting developments!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;