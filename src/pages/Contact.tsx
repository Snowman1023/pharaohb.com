import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form:', contactForm);
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <PageLayout>
      <PageHeader 
        title="Contact"
        subtitle="A direct way to reach me."
        symbol="𓂋"
      />

      <SectionContainer>
        <div className="max-w-xl mx-auto">
          {/* Email display */}
          <div className="text-center mb-12">
            <a 
              href="mailto:hello@pharaohb.com"
              className="font-cormorant text-xl text-primary hover:text-primary/80 transition-colors"
            >
              hello@pharaohb.com
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Your name"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className="bg-muted/50 border-border focus:border-primary font-cormorant text-base py-6"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                className="bg-muted/50 border-border focus:border-primary font-cormorant text-base py-6"
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Your message"
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="bg-muted/50 border-border focus:border-primary font-cormorant text-base min-h-40"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full font-cinzel text-sm tracking-widest py-6 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Send Message
            </Button>
          </form>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default Contact;
