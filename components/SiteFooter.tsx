import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";

type SiteFooterProps = {
  locale: Locale;
  dictionary: Dictionary;
};

type FooterIconProps = {
  name: "phone" | "email" | "instagram" | "facebook";
};

function FooterIcon({ name }: FooterIconProps) {
  if (name === "phone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.7 2.8 9.3 7l-2 2.3a15.4 15.4 0 0 0 7.4 7.4l2.3-2 4.2 2.6-1.1 3.3a2 2 0 0 1-2 1.4C9.2 21.4 2.6 14.8 2 5.9a2 2 0 0 1 1.4-2Z" />
      </svg>
    );
  }

  if (name === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2.5" y="4.5" width="19" height="15" rx="1" />
        <path d="m3.5 6 8.5 7 8.5-7" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.7" r="0.8" className="icon-fill" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.5 21v-8h2.8l.4-3h-3.2V8.1c0-.9.3-1.5 1.6-1.5h1.8V3.9c-.7-.1-1.5-.2-2.3-.2-2.3 0-3.9 1.4-3.9 4V10H9v3h2.7v8" />
    </svg>
  );
}

export function SiteFooter({ locale, dictionary }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href={`/${locale}`} aria-label={dictionary.siteName}>
            <Image
              className="footer-logo"
              src="/images/brand/dg-logo-dark.jpg"
              alt={dictionary.siteName}
              width={454}
              height={454}
              sizes="96px"
            />
          </Link>
          <div className="footer-tagline">
            <p>{dictionary.footer.tagline}</p>
            <p>{dictionary.footer.taglineSecondary}</p>
          </div>
        </div>

        <div className="footer-studio">
          <p className="footer-heading">{dictionary.footer.studioTitle}</p>
          <p className="footer-studio-copy">{dictionary.footer.studioText}</p>
          <div className="footer-social" aria-label="Social media">
            <a
              href="https://www.instagram.com/dg.interior.design/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram — DG Interior Design"
            >
              <FooterIcon name="instagram" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61571794525802"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook — DG Interior Design"
            >
              <FooterIcon name="facebook" />
              <span>Facebook</span>
            </a>
          </div>
          <div className="footer-information-links">
            <Link href={`/${locale}/faq`}>{dictionary.footer.faq}</Link>
          </div>
        </div>

        <div className="footer-contact">
          <p className="footer-heading">{dictionary.footer.contactsTitle}</p>
          <address className="footer-contact-list">
            <a href="tel:+359886777286">
              <FooterIcon name="phone" />
              <span>+359 886 777 286</span>
            </a>
            <a href="mailto:grozeva.darina@gmail.com">
              <FooterIcon name="email" />
              <span>grozeva.darina@gmail.com</span>
            </a>
          </address>
          <p className="footer-availability">{dictionary.footer.availability}</p>
          <Link className="footer-contact-cta" href={`/${locale}/contacts`}>
            {dictionary.footer.contactCta}
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 {dictionary.siteName}</p>
        <nav className="footer-legal" aria-label="Legal">
          <Link href={`/${locale}/privacy`}>{dictionary.footer.privacy}</Link>
          <Link href={`/${locale}/terms`}>{dictionary.footer.terms}</Link>
          <Link href={`/${locale}/cookies`}>{dictionary.footer.cookies}</Link>
        </nav>
      </div>
    </footer>
  );
}
