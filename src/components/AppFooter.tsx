import { Shield, Lock } from "lucide-react";

const AppFooter = () => (
  <footer className="border-t border-border/30 bg-secondary/30 py-8">
    <div className="container">
      <div className="flex flex-col items-center gap-4 text-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <span className="font-display text-base font-bold text-foreground">
            رصد الأنبار
          </span>
        </div>

        <p className="font-display text-sm font-medium text-primary">
          أحنة أهلها
        </p>

        {/* Security badge */}
        <div className="flex items-center gap-2 rounded-full border border-border/30 bg-secondary/50 px-4 py-2">
          <Lock className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="font-body text-xs text-muted-foreground">
            جميع البلاغات مشفرة بمعيار AES-256 · اتصال TLS 1.3
          </span>
        </div>

        <p className="font-body text-xs text-muted-foreground/50">
          منصة مجتمعية مستقلة لخدمة أبناء محافظة الأنبار ©{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </div>
  </footer>
);

export default AppFooter;
