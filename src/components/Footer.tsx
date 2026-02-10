import { Shield, FileText, LayoutDashboard, Home, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "الرئيسية", path: "/", icon: Home },
  { label: "تقديم بلاغ", path: "/report", icon: FileText },
  { label: "لوحة المتابعة", path: "/dashboard", icon: LayoutDashboard },
];

const Footer = () => (
  <footer className="border-t bg-primary">
    <div className="container py-12">
      <div className="grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/15">
              <Shield className="h-5 w-5 text-secondary" />
            </div>
            <span className="font-display text-lg font-bold text-secondary">
              رصد الأنبار
            </span>
          </div>
          <p className="max-w-xs font-body text-sm leading-relaxed text-primary-foreground/60">
            منصة مجتمعية لتمكين أبناء الأنبار من رصد وتوثيق المخالفات
            والتجاوزات بسرية تامة.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="mb-4 font-display text-sm font-bold text-primary-foreground/40">
            روابط سريعة
          </h3>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="flex items-center gap-2 font-body text-sm text-primary-foreground/60 transition-colors hover:text-secondary"
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Security note */}
        <div>
          <h3 className="mb-4 font-display text-sm font-bold text-primary-foreground/40">
            الأمان
          </h3>
          <div className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-4">
            <div className="mb-2 flex items-center gap-2">
              <Lock className="h-4 w-4 text-secondary" />
              <span className="font-display text-sm font-bold text-primary-foreground">
                بياناتك محمية
              </span>
            </div>
            <p className="font-body text-xs leading-relaxed text-primary-foreground/50">
              جميع البلاغات مشفرة بمعيار AES-256 ولا يمكن تتبعها إليك.
              نحن لا نخزن أي بيانات شخصية على الإطلاق.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-primary-foreground/10">
      <div className="container flex flex-col items-center justify-between gap-2 py-5 sm:flex-row">
        <p className="font-display text-xs font-medium text-primary-foreground/40">
          أحنة أهلها — رصد الأنبار © {new Date().getFullYear()}
        </p>
        <p className="font-body text-xs text-primary-foreground/30">
          منصة مجتمعية مستقلة لخدمة أبناء محافظة الأنبار
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
