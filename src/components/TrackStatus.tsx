import { useState } from "react";
import {
  Search,
  Loader2,
  CheckCircle2,
  Clock,
  FileSearch,
  AlertCircle,
  Eye,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

// Mock database of reports for demo
const MOCK_DB: Record<
  string,
  {
    pin: string;
    type: string;
    date: string;
    status: "received" | "investigating" | "resolved";
    timeline: { step: string; date: string; done: boolean }[];
  }
> = {
  "RAN-2026-8892": {
    pin: "445-XYZ",
    type: "فساد مالي",
    date: "2026-02-09",
    status: "investigating",
    timeline: [
      { step: "تم الاستلام", date: "2026-02-09", done: true },
      { step: "قيد التحقيق", date: "2026-02-10", done: true },
      { step: "تم الحل", date: "", done: false },
    ],
  },
  "RAN-2026-7741": {
    pin: "332-ABC",
    type: "تلوث بيئي",
    date: "2026-02-07",
    status: "resolved",
    timeline: [
      { step: "تم الاستلام", date: "2026-02-07", done: true },
      { step: "قيد التحقيق", date: "2026-02-08", done: true },
      { step: "تم الحل", date: "2026-02-10", done: true },
    ],
  },
  "RAN-2026-5510": {
    pin: "118-QWE",
    type: "إهمال خدمات",
    date: "2026-02-10",
    status: "received",
    timeline: [
      { step: "تم الاستلام", date: "2026-02-10", done: true },
      { step: "قيد التحقيق", date: "", done: false },
      { step: "تم الحل", date: "", done: false },
    ],
  },
};

const statusConfig = {
  received: {
    label: "تم الاستلام",
    color: "text-primary",
    bg: "bg-primary/10",
    icon: Clock,
  },
  investigating: {
    label: "قيد التحقيق",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    icon: Eye,
  },
  resolved: {
    label: "تم الحل",
    color: "text-success",
    bg: "bg-success/10",
    icon: CheckCircle2,
  },
};

interface TrackStatusProps {
  initialTicketId?: string;
  initialPin?: string;
}

const TrackStatus = ({ initialTicketId = "", initialPin = "" }: TrackStatusProps) => {
  const [ticketId, setTicketId] = useState(initialTicketId);
  const [pin, setPin] = useState(initialPin);
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<(typeof MOCK_DB)[string] | null>(null);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketId.trim() || !pin.trim()) return;

    setIsSearching(true);
    setError("");
    setResult(null);
    setHasSearched(true);

    setTimeout(() => {
      const normalizedId = ticketId.trim().toUpperCase();
      const normalizedPin = pin.trim().toUpperCase();

      const report = MOCK_DB[normalizedId];

      if (report && report.pin === normalizedPin) {
        setResult(report);
      } else {
        setError(
          "لم يتم العثور على البلاغ. تأكد من صحة رقم البلاغ ورمز الأمان."
        );
      }
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="space-y-2">
          <Label className="flex items-center gap-2 font-display text-sm font-semibold text-foreground">
            <FileSearch className="h-4 w-4 text-primary" />
            رقم البلاغ (Ticket ID)
          </Label>
          <Input
            value={ticketId}
            onChange={(e) => setTicketId(e.target.value)}
            placeholder="مثال: RAN-2026-8892"
            dir="ltr"
            className="bg-secondary/50 border-border/50 text-foreground text-left placeholder:text-muted-foreground/50"
          />
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2 font-display text-sm font-semibold text-foreground">
            <Search className="h-4 w-4 text-primary" />
            رمز الأمان (Security PIN)
          </Label>
          <Input
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="مثال: 445-XYZ"
            dir="ltr"
            className="bg-secondary/50 border-border/50 text-foreground text-left placeholder:text-muted-foreground/50"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={!ticketId.trim() || !pin.trim() || isSearching}
          className="w-full bg-primary font-display font-bold text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          {isSearching ? (
            <>
              <Loader2 className="ml-2 h-5 w-5 animate-spin" />
              جاري البحث...
            </>
          ) : (
            <>
              <Search className="ml-2 h-5 w-5" />
              تتبع البلاغ
            </>
          )}
        </Button>
      </form>

      {/* Demo hint */}
      <div className="rounded-xl border border-border/30 bg-secondary/30 p-4">
        <p className="mb-2 font-display text-xs font-bold text-muted-foreground">
          للتجربة — استخدم أحد هذه الأكواد:
        </p>
        <div className="space-y-1.5 font-body text-xs text-muted-foreground/80" dir="ltr">
          <p>
            <span className="text-primary">RAN-2026-8892</span> / 445-XYZ — قيد التحقيق
          </p>
          <p>
            <span className="text-primary">RAN-2026-7741</span> / 332-ABC — تم الحل
          </p>
          <p>
            <span className="text-primary">RAN-2026-5510</span> / 118-QWE — تم الاستلام
          </p>
        </div>
      </div>

      {/* Error */}
      {error && hasSearched && (
        <div className="animate-scale-in flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
          <p className="font-body text-sm text-destructive">{error}</p>
        </div>
      )}

      {/* Result: Timeline */}
      {result && (
        <div className="animate-scale-in space-y-5">
          {/* Report Info */}
          <div className="flex items-center justify-between rounded-xl border border-border/30 bg-secondary/50 p-4">
            <div>
              <p className="font-display text-sm font-bold text-foreground">
                {result.type}
              </p>
              <p className="font-body text-xs text-muted-foreground">
                تاريخ الإبلاغ: {result.date}
              </p>
            </div>
            {(() => {
              const cfg = statusConfig[result.status];
              const Icon = cfg.icon;
              return (
                <div
                  className={`flex items-center gap-2 rounded-full px-3 py-1.5 font-display text-xs font-bold ${cfg.bg} ${cfg.color}`}
                >
                  <Icon className="h-4 w-4" />
                  {cfg.label}
                </div>
              );
            })()}
          </div>

          {/* Timeline */}
          <div className="rounded-xl border border-border/30 bg-secondary/30 p-5">
            <h3 className="mb-5 font-display text-sm font-bold text-foreground">
              مسار البلاغ
            </h3>
            <div className="relative space-y-0">
              {result.timeline.map((step, i) => {
                const isLast = i === result.timeline.length - 1;
                return (
                  <div key={step.step} className="flex gap-4">
                    {/* Vertical line + dot */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 ${
                          step.done
                            ? "border-success bg-success/15"
                            : "border-border bg-secondary/50"
                        }`}
                      >
                        {step.done ? (
                          <CheckCircle2 className="h-5 w-5 text-success" />
                        ) : (
                          <Clock className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                      {!isLast && (
                        <div
                          className={`h-10 w-0.5 ${
                            step.done && result.timeline[i + 1]?.done
                              ? "bg-success/50"
                              : "bg-border/50"
                          }`}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-8">
                      <p
                        className={`font-display text-sm font-bold ${
                          step.done ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {step.step}
                      </p>
                      {step.date && (
                        <p className="font-body text-xs text-muted-foreground">
                          {step.date}
                        </p>
                      )}
                      {!step.done && (
                        <p className="font-body text-xs text-muted-foreground/60">
                          في الانتظار...
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackStatus;
