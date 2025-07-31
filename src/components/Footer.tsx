import { Heart, Github, Linkedin, Mail } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    name: 'GitHub',
    icon: <Github className="w-5 h-5" />,
    url: 'https://github.com/naziakhatoon'
  }, {
    name: 'LinkedIn',
    icon: <Linkedin className="w-5 h-5" />,
    url: 'https://www.linkedin.com/in/naziya-khatoon-85293935a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  }, {
    name: 'Email',
    icon: <Mail className="w-5 h-5" />,
    url: 'https://myaccount.google.com/email?continue=https%3A%2F%2Fmyaccount.google.com%2Fpersonal-info%3Futm_source%3Dchrome-profile-chooser%26authuser%3D0'
  }];
  return <footer className="py-12 px-6 border-t border-border/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text mb-2">Naziya Khatoon</h3>
            <p className="text-muted-foreground">ECE Student</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            {socialLinks.map(link => <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300 text-muted-foreground hover:text-primary" aria-label={link.name}>
                {link.icon}
              </a>)}
          </div>
        </div>

        <div className="border-t border-border/20 pt-6 mt-6 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Nazia Khatoon. Made with 
            <Heart className="w-4 h-4 text-red-500" /> 
            and lots of coffee.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;