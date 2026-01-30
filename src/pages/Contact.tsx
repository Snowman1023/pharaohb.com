import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // PLACEHOLDER: Newsletter form submission
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // PLACEHOLDER: Contact form submission
    console.log('Contact form:', contactForm);
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <PageLayout>
      <PageHeader 
        title="Connect"
        subtitle="Reach out to the sacred realm"
        symbol="𓂋"
      />

      <SectionContainer>
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Newsletter */}
          <div className="space-y-6">
            <h2 className="font-cinzel text-2xl text-gold-gradient">
              {/* PLACEHOLDER: Newsletter heading */}
              Join the Sacred Circle
            </h2>
            <p className="font-cormorant text-muted-foreground">
              {/* PLACEHOLDER: Newsletter description */}
              Receive transmissions from the eternal realm. Wisdom, updates, and exclusive 
              offerings delivered to your sanctuary.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-muted/50 border-primary/30 focus:border-primary font-cormorant"
              />
              <Button
                type="submit"
                className="w-full font-cinzel text-sm tracking-wider bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h2 className="font-cinzel text-2xl text-gold-gradient">
              {/* PLACEHOLDER: Contact heading */}
              Send a Message
            </h2>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Your name"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className="bg-muted/50 border-primary/30 focus:border-primary font-cormorant"
              />
              <Input
                type="email"
                placeholder="Your email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                className="bg-muted/50 border-primary/30 focus:border-primary font-cormorant"
              />
              <Textarea
                placeholder="Your message"
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="bg-muted/50 border-primary/30 focus:border-primary font-cormorant min-h-32"
              />
              <Button
                type="submit"
                variant="outline"
                className="w-full font-cinzel text-sm tracking-wider border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </SectionContainer>

      {/* Social & Location */}
      <SectionContainer className="bg-gradient-to-b from-transparent via-muted/10 to-transparent">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-cinzel text-2xl text-gold-gradient">
            {/* PLACEHOLDER: Social heading */}
            Follow the Journey
          </h2>
          
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {/* PLACEHOLDER: Social links - replace with actual URLs */}
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

          <div className="pt-8">
            <p className="font-cormorant text-muted-foreground italic">
              {/* PLACEHOLDER: Location */}
              Houston, Texas
            </p>
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default Contact;
