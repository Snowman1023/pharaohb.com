import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [contactForm, setContactForm] = useState({ 
    name: '', 
    email: '', 
    subject: '',
    message: '' 
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form:', contactForm);
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <PageLayout>
      <PageHeader 
        title="Connect"
        subtitle="The doorway between realms"
      />

      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-cormorant text-xl text-muted-foreground">
            Whether you seek collaboration, have questions about the work, or simply 
            wish to share your experience—this channel is open.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-6">
            <h2 className="font-cinzel text-2xl text-gold-gradient">
              Send a Message
            </h2>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Your name"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className="bg-muted/50 border-primary/30 focus:border-primary font-cormorant"
                required
              />
              <Input
                type="email"
                placeholder="Your email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                className="bg-muted/50 border-primary/30 focus:border-primary font-cormorant"
                required
              />
              <Input
                type="text"
                placeholder="Subject"
                value={contactForm.subject}
                onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                className="bg-muted/50 border-primary/30 focus:border-primary font-cormorant"
              />
              <Textarea
                placeholder="Your message"
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="bg-muted/50 border-primary/30 focus:border-primary font-cormorant min-h-40"
                required
              />
              <Button
                type="submit"
                className="w-full font-cinzel text-sm tracking-wider bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h2 className="font-cinzel text-2xl text-gold-gradient">
              Join the Sacred Circle
            </h2>
            <p className="font-cormorant text-muted-foreground">
              Receive transmissions from the eternal realm. New writings, releases, 
              and exclusive offerings delivered directly to your sanctuary. No noise. 
              Only signal.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-muted/50 border-primary/30 focus:border-primary font-cormorant"
                required
              />
              <Button
                type="submit"
                variant="outline"
                className="w-full font-cinzel text-sm tracking-wider border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Subscribe
              </Button>
            </form>

            <div className="pt-8 border-t border-border">
              <h3 className="font-cinzel text-lg text-foreground mb-4">Follow the Journey</h3>
              <div className="flex flex-wrap gap-4">
                {['Instagram', 'Twitter', 'YouTube', 'TikTok'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="font-cinzel text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <p className="font-cormorant text-muted-foreground italic">
                Houston, Texas
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default Contact;
