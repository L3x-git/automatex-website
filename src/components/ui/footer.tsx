import Link from "next/link";
import Image from "next/image";
import { WhatsappLogo, Envelope } from "@phosphor-icons/react/dist/ssr";
import {
  CONTACT_EMAIL,
  LOCATION,
  WHATSAPP_DISPLAY,
  waLink,
} from "@/lib/contact";
import { LOGO_DATA_URI } from "@/lib/logo";

const footerLinks = [
  { name: "Kenya", href: "#kenya" },
  { name: "US", href: "#us" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Why us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-line px-6 pt-16 pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">
        <div>
          <Link href="/" className="flex items-center">
            <span className="relative h-16 w-auto overflow-hidden">
              <Image
                src={LOGO_DATA_URI}
                alt="AutomateX"
                width={220}
                height={42}
                unoptimized
                className="w-auto h-full object-contain"
              />
            </span>
          </Link>
          <p className="mt-5 text-body max-w-sm leading-relaxed">
            AI automation for businesses that can&apos;t afford to lose a lead.
            WhatsApp bots, voice agents, chatbots for social media, and
            done-for-you websites. Built for businesses in Kenya and the US.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href={waLink("Hi AutomateX")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-body hover:text-glow hover:border-white/30 transition-colors"
            >
              <WhatsappLogo size={20} weight="duotone" />
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-body hover:text-glow hover:border-white/30 transition-colors"
            >
              <Envelope size={20} weight="duotone" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Explore</h4>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-body hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Contact</h4>
          <ul className="space-y-3 text-body">
            <li className="flex items-center gap-2">
              <WhatsappLogo size={16} weight="duotone" className="text-mute" />
              {WHATSAPP_DISPLAY}
            </li>
            <li className="flex items-center gap-2">
              <Envelope size={16} weight="duotone" className="text-mute" />
              {CONTACT_EMAIL}
            </li>
            <li>{LOCATION}</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-line text-sm text-mute">
        © {new Date().getFullYear()} AutomateX. All rights reserved.
      </div>
    </footer>
  );
}