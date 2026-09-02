import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-fade-up");
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      title: String(fd.get("title") ?? "").trim(),
      organization: String(fd.get("organization") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      inquiry: String(fd.get("inquiry") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: payload,
      });
      if (error) throw error;
      toast({
        title: "Message received",
        description:
          "The letter has arrived. It will be read at the Monday meeting and answered in one paragraph within three working days.",
      });
      form.reset();
    } catch (err) {
      console.error(err);
      toast({
        title: "Something went wrong",
        description:
          "The letter could not be delivered. Please try again, or email contact@phareconsultinggroup.com directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-28 md:py-40 bg-background relative overflow-hidden"
    >
      {/* Fine grid keyline backdrop — no ambient sphere */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--paper)/.6) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--paper)/.6) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative px-6 lg:px-10">
        {/* Big headline */}
        <div className="reveal opacity-0 max-w-5xl mb-20">
          <p className="text-eyebrow text-primary mb-6 flex items-center gap-2">
            <span aria-hidden className="inline-block w-2.5 h-2.5 rounded-full bg-primary" />
            <span aria-hidden className="inline-block w-7 h-0.5 bg-primary" />
            Send the plan
          </p>
          <h2 className="text-display text-foreground text-6xl md:text-7xl lg:text-8xl">
            Write a letter<span className="text-primary">.</span>
          </h2>
        </div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — direct */}
          <div className="lg:col-span-5 reveal delay-100 opacity-0">
            <p className="text-lg text-foreground/75 leading-relaxed mb-10 max-w-md">
              Send whatever draft you already have. One paragraph is
              enough. The letter is read at the Monday meeting and
              answered in writing within three working days. If the
              draft fits one of the seven rooms, we suggest a
              telephone call the following week.
            </p>

            <div className="space-y-px bg-border border border-border">
              <a
                href="mailto:contact@mosaicconseil.fr"
                className="group flex items-center justify-between gap-4 bg-background p-6 hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Mail size={20} strokeWidth={1.5} className="text-primary" />
                  <div>
                    <div className="text-eyebrow text-foreground/55 mb-1">
                      Email
                    </div>
                    <div className="text-foreground font-medium">
                      contact@mosaicconseil.fr
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-foreground/40 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </a>
              <a
                href="tel:+33758927635"
                className="group flex items-center justify-between gap-4 bg-background p-6 hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Phone size={20} strokeWidth={1.5} className="text-primary" />
                  <div>
                    <div className="text-eyebrow text-foreground/55 mb-1">
                      Phone
                    </div>
                    <div className="text-foreground font-medium">
                      +33 7 58 92 76 35
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-foreground/40 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </a>
              <div className="bg-background p-6 flex items-center gap-4">
                <MapPin size={20} strokeWidth={1.5} className="text-primary" />
                <div>
                  <div className="text-eyebrow text-foreground/55 mb-1">
                    Practice
                  </div>
                  <div className="text-foreground font-medium">
                    Remote · by appointment
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm text-foreground/55 max-w-md leading-relaxed">
              Letters are held in confidence. We do not add addresses to
              a mailing list and we do not forward the letter outside the
              room. Read the <a href="/privacy" className="underline hover:text-primary">privacy notice</a> for the full RGPD detail.
            </p>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            className="reveal delay-200 opacity-0 lg:col-span-7 bg-card border border-border p-8 md:p-10"
          >
            <h3 className="text-display text-2xl text-foreground mb-2">
              A letter, on the shortest form we know how to write
            </h3>
            <p className="text-sm text-foreground/60 mb-8">
              The lines marked with an asterisk are the ones the Monday
              meeting has to have. The rest are useful, not required.
            </p>

            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field id="name" label="Name *" required placeholder="Your name" />
                <Field id="title" label="Title" placeholder="Your title" />
              </div>
              <Field
                id="organization"
                label="Organization"
                placeholder="Your organization"
              />
              <Field
                id="email"
                label="Email *"
                type="email"
                required
                placeholder="your.email@organization.com"
              />

              <div>
                <label
                  htmlFor="inquiry"
                  className="text-eyebrow text-foreground/65 block mb-2"
                >
                  Which of the seven rooms
                </label>
                <select
                  id="inquiry"
                  name="inquiry"
                  defaultValue=""
                  className="w-full h-12 px-4 bg-background border border-border text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="" disabled>
                    Pick one, or leave blank
                  </option>
                  <option value="strategy-review">The plan, read again</option>
                  <option value="market-diagnostic">The market, before you walk in</option>
                  <option value="operating-model">The org chart, before it is redrawn</option>
                  <option value="capital">The money, read line by line</option>
                  <option value="pricing">The pricing grid, before it ships</option>
                  <option value="margin">The cost note, before it becomes a programme</option>
                  <option value="diligence">The deal, forty-eight hours before signature</option>
                  <option value="other">A room not on the list</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-eyebrow text-foreground/65 block mb-2"
                >
                  Your paragraph *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="The decision on the table, the room that will sign it, and the date by which it will be signed."
                  className="w-full px-4 py-3 bg-background border border-border text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground pl-8 pr-3 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send the letter"}
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary-foreground/15 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </span>
              </button>

              <p className="text-xs text-foreground/50">
                Letters are held in confidence and read only inside the
                room. The record is kept for twelve months, then destroyed.
                See the <a href="/privacy" className="underline hover:text-primary">privacy notice</a>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  id,
  label,
  type = "text",
  required,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) => (
  <div>
    <label
      htmlFor={id}
      className="text-eyebrow text-foreground/65 block mb-2"
    >
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full h-12 px-4 bg-background border border-border text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-primary transition-colors"
    />
  </div>
);

export default Contact;
