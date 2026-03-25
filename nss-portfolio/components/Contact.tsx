"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:nagarjunansaravananus@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name} (${formData.email})`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-accent rounded mb-12" />

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-muted leading-relaxed">
              I&apos;m always open to discussing new opportunities, interesting
              projects, or collaborations in computer vision and AI. Feel free to
              reach out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted">Email</p>
                  <p className="text-sm font-medium text-foreground">nagarjunansaravananus@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                    <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted">Location</p>
                  <p className="text-sm font-medium text-foreground">Binghamton, NY</p>
                </div>
              </div>
              <a
                href="https://github.com/Nagarjunan0904"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border hover:border-accent/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-accent"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">GitHub</p>
                  <p className="text-xs text-muted">Nagarjunan0904</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/nagarjunan-s/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border hover:border-accent/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-accent"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    LinkedIn
                  </p>
                  <p className="text-xs text-muted">nagarjunan-s</p>
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="text-sm text-muted block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:border-accent focus:outline-none transition-colors text-foreground placeholder:text-muted/50"
                placeholder="Your name"
                suppressHydrationWarning
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-muted block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:border-accent focus:outline-none transition-colors text-foreground placeholder:text-muted/50"
                placeholder="your@email.com"
                suppressHydrationWarning
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-sm text-muted block mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:border-accent focus:outline-none transition-colors text-foreground placeholder:text-muted/50 resize-none"
                placeholder="Your message..."
                suppressHydrationWarning
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-accent hover:bg-accent-light text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
