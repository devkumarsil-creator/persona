import React from 'react';
import { Brain, Twitter, Linkedin, Github, Facebook } from 'lucide-react';
import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-background pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
                <Brain className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">PersonaScope</span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed mb-6">
              A scientifically-inspired platform for individuals seeking genuine self-understanding and actionable psychological insights.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-muted">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-muted">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-muted">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-muted">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><Link href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How it Works</Link></li>
              <li><Link href="#types" className="text-muted-foreground hover:text-primary transition-colors">Personality Types</Link></li>
              <li><Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">Premium Features</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Research Methodology</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PersonaScope. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span>Built with precision.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
