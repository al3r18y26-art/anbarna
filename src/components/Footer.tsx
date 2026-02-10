import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-primary py-10">
    <div className="container text-center">
      <div className="mb-3 flex items-center justify-center gap-2 text-secondary">
        <Shield className="h-5 w-5" />
        <span className="font-display text-lg font-bold">رصد الأنبار</span>
      </div>
      <p className="font-display text-sm font-medium text-primary-foreground/60">
        أحنة أهلها — منصة مجتمعية لأبناء الأنبار
      </p>
      <p className="mt-1 font-body text-xs text-primary-foreground/40">
        جميع البلاغات مشفرة ومحمية بالكامل
      </p>
    </div>
  </footer>
);

export default Footer;
