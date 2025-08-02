import { Code, Cpu, Lightbulb, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
const About = () => {
  const skills = [{
    icon: <Cpu className="w-8 h-8 text-secondary" />,
    title: "Electronics & Communication",
    description: "Deep understanding of hardware and communication systems"
  }, {
    icon: <Lightbulb className="w-8 h-8 text-accent" />,
    title: "Leadership",
    description: "Class Representative for B.Tech - leading teams and driving collaborative solutions"
  }, {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Creativity",
    description: "Expressing creativity through various art forms and handcrafted projects"
  }, {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Performance Focus",
    description: "Optimized, accessible, and user-centric experiences"
  }];
  return <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-8 hover-glow">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Hi, I'm <span className="text-primary font-semibold">Naziya Khatoon</span>, 
                a dedicated Full-Stack Developer and a student of Electronics and Communication Engineering. 
                I love blending technology with creativity to build interactive, accessible, and 
                performance-focused digital experiences.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                I enjoy solving real-world problems and continuously exploring new tech trends. 
                My background in ECE gives me a unique perspective on how software and hardware 
                work together to create seamless user experiences.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {['Python', 'C', 'HTML & CSS', 'Figma', 'Git-GitHub', 'Django'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                  {tech}
                </span>
              ))}
            </div>

            {/* Resume Section */}
            <div className="glass-card rounded-2xl p-6 hover-glow">
              <h3 className="text-lg font-semibold mb-4 text-foreground">My Resume</h3>
              <div className="flex flex-col gap-4">
                <div className="bg-background rounded-lg p-4 border border-border/20">
                  <img 
                    src="/lovable-uploads/a7e7c03a-b7ec-4364-93e2-e16473246b72.png" 
                    alt="Naziya Khatoon Resume" 
                    className="w-full h-auto rounded-md shadow-lg"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="/lovable-uploads/a7e7c03a-b7ec-4364-93e2-e16473246b72.png"
                    download="Naziya_Khatoon_Resume.png"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </a>
                  <span className="text-sm text-muted-foreground self-center">
                    Click to download full resume
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => <Card key={index} className="glass-card border-border/20 hover-glow group cursor-default">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;