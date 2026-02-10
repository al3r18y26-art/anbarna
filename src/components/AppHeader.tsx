import { Shield } from "lucide-react";

const AppHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 glow-gold-sm">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base font-bold leading-tight text-foreground">
              رصد الأنبار
            </span>
            <span className="font-body text-[11px] font-medium leading-tight text-primary">
              أحنة أهلها
            </span>
          </div>
        </div>

        {/* Right side indicator */}
        <div className="flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1.5">
          <div className="h-2 w-2 animate-pulse rounded-full bg-success" />
          <span className="font-body text-xs font-medium text-success">
            اتصال مشفّر
          </span>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
