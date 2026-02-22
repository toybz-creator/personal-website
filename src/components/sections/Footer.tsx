import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter/X" },
  { icon: Mail, href: "mailto:toyeeb@example.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-20 px-6" aria-label="Footer">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Let's Build Something
        </h2>
        <p className="text-muted-foreground font-body mb-8 max-w-lg mx-auto">
          Looking for a senior backend engineer who can architect and ship? Let's talk.
        </p>

        <a
          href="mailto:toyeeb@example.com"
          className="inline-block border border-foreground px-8 py-3 text-sm font-heading uppercase tracking-[0.2em] text-foreground hover:bg-foreground hover:text-background transition-all duration-300 mb-12"
        >
          Get in Touch
        </a>

        <div className="flex items-center justify-center gap-6 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()} Toyeeb Abdulrahmon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
