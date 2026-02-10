import { useState } from "react";
import {
  CheckCircle2,
  Copy,
  Check,
  Shield,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";

interface SuccessCardProps {
  ticketId: string;
  securityPin: string;
  onTrackReport: () => void;
  onNewReport: () => void;
}

const CopyField = ({ label, value }: { label: string; value: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const el = document.createElement("textarea");
      el.value = value;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-1.5">
      <span className="font-body text-xs font-medium text-muted-foreground">
        {label}
      </span>
      <button
        onClick={handleCopy}
        className="flex w-full items-center justify-between rounded-xl border border-border/50 bg-secondary/60 px-4 py-3 transition-all hover:border-primary/40 hover:bg-secondary"
      >
        <span
          className="font-display text-lg font-bold tracking-wider text-primary"
          dir="ltr"
        >
          {value}
        </span>
        {copied ? (
          <Check className="h-5 w-5 text-success" />
        ) : (
          <Copy className="h-5 w-5 text-muted-foreground" />
        )}
      </button>
    </div>
  );
};

const SuccessCard = ({
  ticketId,
  securityPin,
  onTrackReport,
  onNewReport,
}: SuccessCardProps) => {
  return (
    <div className="animate-scale-in space-y-6">
      {/* Success icon */}
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-success/15 animate-pulse-gold">
          <CheckCircle2 className="h-10 w-10 text-success" />
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">
            تم إرسال البلاغ بنجاح
          </h2>
          <p className="mt-1 font-body text-sm text-muted-foreground">
            بلاغك مشفر ومسجّل — شكراً لمساهمتك في حماية المجتمع
          </p>
        </div>
      </div>

      {/* Codes card */}
      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 glow-gold-sm">
        <div className="mb-4 flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <span className="font-display text-sm font-bold text-foreground">
            بيانات المتابعة
          </span>
        </div>

        <div className="space-y-4">
          <CopyField label="رقم البلاغ (Ticket ID)" value={ticketId} />
          <CopyField label="رمز الأمان (Security PIN)" value={securityPin} />
        </div>
      </div>

      {/* Warning */}
      <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <p className="font-body text-sm leading-relaxed text-foreground/80">
          <span className="font-bold">مهم جداً:</span> احتفظ بهذه الأكواد في
          مكان آمن. ستحتاجها لتتبع حالة البلاغ ومعرفة رد الجهات المعنية.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          onClick={onTrackReport}
          className="flex-1 bg-primary font-display font-bold text-primary-foreground hover:bg-primary/90"
        >
          تتبع حالة البلاغ
          <ArrowRight className="mr-2 h-4 w-4" />
        </Button>
        <Button
          onClick={onNewReport}
          variant="outline"
          className="flex-1 border-border/50 font-display font-bold text-foreground hover:bg-secondary/50"
        >
          تقديم بلاغ جديد
        </Button>
      </div>
    </div>
  );
};

export default SuccessCard;
