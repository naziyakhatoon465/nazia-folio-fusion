import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Dev Blog
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-border/20 hover-glow text-center">
            <CardContent className="p-12">
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Calendar className="w-12 h-12 text-primary" />
                </div>
                
                <h3 className="text-3xl font-bold mb-4 gradient-text">
                  Coming Soon: My Dev Blog
                </h3>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I'm working on creating valuable content about web development, 
                  electronics engineering, and the intersection of hardware and software. 
                  Stay tuned for insights, tutorials, and my journey in tech!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Expected Launch: Coming Soon</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  What to Expect:
                </h4>
                
                <div className="grid md:grid-cols-3 gap-4 text-left">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <h5 className="font-semibold text-primary mb-2">Tech Tutorials</h5>
                    <p className="text-sm text-muted-foreground">
                      Step-by-step guides on modern web development
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/10">
                    <h5 className="font-semibold text-secondary mb-2">Project Insights</h5>
                    <p className="text-sm text-muted-foreground">
                      Behind-the-scenes of my development process
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-accent/5 border border-accent/10">
                    <h5 className="font-semibold text-accent mb-2">Industry Trends</h5>
                    <p className="text-sm text-muted-foreground">
                      Thoughts on emerging technologies and trends
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button 
                  variant="outline" 
                  className="hover-glow border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  disabled
                >
                  Subscribe for Updates
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blog;