import { useState } from "react";
import {
  FileText,
  CheckCircle2,
  Clock,
  Eye,
  Filter,
  TrendingUp,
  AlertTriangle,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  Shield,
} from "lucide-react";
import { Badge } from "./ui/badge";

type ReportStatus = "received" | "investigating" | "resolved";

interface DashboardReport {
  id: string;
  type: string;
  location: string;
  description: string;
  date: string;
  status: ReportStatus;
}

const MOCK_REPORTS: DashboardReport[] = [
  {
    id: "RAN-2026-8892",
    type: "فساد مالي",
    location: "الرمادي — حي المعلمين",
    description: "تلاعب في عقود مشاريع البنية التحتية",
    date: "2026-02-09",
    status: "investigating",
  },
  {
    id: "RAN-2026-7741",
    type: "تلوث بيئي",
    location: "الفلوجة — حي الجولان",
    description: "تصريف مياه صناعية في نهر الفرات",
    date: "2026-02-07",
    status: "resolved",
  },
  {
    id: "RAN-2026-5510",
    type: "إهمال خدمات",
    location: "هيت — حي السوق",
    description: "انقطاع مستمر للمياه منذ أسبوعين",
    date: "2026-02-10",
    status: "received",
  },
  {
    id: "RAN-2026-4420",
    type: "سب ذات الإلهية",
    location: "الرمادي — المركز",
    description: "منشورات مسيئة على وسائل التواصل الاجتماعي",
    date: "2026-02-10",
    status: "received",
  },
  {
    id: "RAN-2026-3315",
    type: "ابتزاز",
    location: "الفلوجة — حي نزال",
    description: "ابتزاز إلكتروني عبر وسائل التواصل",
    date: "2026-02-08",
    status: "investigating",
  },
  {
    id: "RAN-2026-2290",
    type: "مخدرات",
    location: "القائم — حي الكرابلة",
    description: "ترويج مواد مخدرة بالقرب من المدارس",
    date: "2026-02-06",
    status: "investigating",
  },
  {
    id: "RAN-2026-1187",
    type: "متسولين",
    location: "الرمادي — شارع 20",
    description: "انتشار ظاهرة التسول بشكل منظم",
    date: "2026-02-05",
    status: "resolved",
  },
  {
    id: "RAN-2026-9903",
    type: "تصرفات غير أخلاقية",
    location: "حديثة — المنطقة التجارية",
    description: "سلوكيات مخلة بالآداب العامة في أماكن عامة",
    date: "2026-02-09",
    status: "received",
  },
  {
    id: "RAN-2026-6678",
    type: "لبس فاحش",
    location: "الفلوجة — سوق المركز",
    description: "مظاهر مخالفة للآداب العامة",
    date: "2026-02-08",
    status: "resolved",
  },
  {
    id: "RAN-2026-7782",
    type: "مخالفات بناء",
    location: "الكرمة — حي الضباط",
    description: "بناء بدون تراخيص على أراضي زراعية",
    date: "2026-02-04",
    status: "investigating",
  },
];

const statusConfig: Record<
  ReportStatus,
  { label: string; icon: typeof Clock; className: string }
> = {
  received: {
    label: "تم الاستلام",
    icon: Clock,
    className: "bg-primary/15 text-primary border-primary/30",
  },
  investigating: {
    label: "قيد التحقيق",
    icon: Eye,
    className: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  },
  resolved: {
    label: "تم الحل",
    icon: CheckCircle2,
    className: "bg-success/15 text-success border-success/30",
  },
};

const StatCard = ({
  label,
  value,
  icon: Icon,
  color,
}: {
  label: string;
  value: number;
  icon: typeof FileText;
  color: string;
}) => (
  <div className="flex items-center gap-4 rounded-2xl border border-border/50 bg-secondary/40 p-5 transition-all hover:bg-secondary/60">
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${color}`}
    >
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <div className="font-display text-2xl font-black text-foreground">
        {value}
      </div>
      <div className="font-body text-xs text-muted-foreground">{label}</div>
    </div>
  </div>
);

const Dashboard = () => {
  const [statusFilter, setStatusFilter] = useState<"all" | ReportStatus>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered =
    statusFilter === "all"
      ? MOCK_REPORTS
      : MOCK_REPORTS.filter((r) => r.status === statusFilter);

  const totalReceived = MOCK_REPORTS.filter(
    (r) => r.status === "received"
  ).length;
  const totalInvestigating = MOCK_REPORTS.filter(
    (r) => r.status === "investigating"
  ).length;
  const totalResolved = MOCK_REPORTS.filter(
    (r) => r.status === "resolved"
  ).length;

  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="إجمالي البلاغات"
          value={MOCK_REPORTS.length}
          icon={FileText}
          color="bg-primary/10 text-primary"
        />
        <StatCard
          label="تم الاستلام"
          value={totalReceived}
          icon={Clock}
          color="bg-primary/10 text-primary"
        />
        <StatCard
          label="قيد التحقيق"
          value={totalInvestigating}
          icon={Eye}
          color="bg-blue-500/10 text-blue-400"
        />
        <StatCard
          label="تم الحل"
          value={totalResolved}
          icon={CheckCircle2}
          color="bg-success/10 text-success"
        />
      </div>

      {/* Progress bar */}
      <div className="rounded-xl border border-border/50 bg-secondary/30 p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-display text-xs font-bold text-muted-foreground">
            نسبة الحل
          </span>
          <div className="flex items-center gap-1 text-success">
            <TrendingUp className="h-3.5 w-3.5" />
            <span className="font-display text-xs font-bold">
              {Math.round((totalResolved / MOCK_REPORTS.length) * 100)}%
            </span>
          </div>
        </div>
        <div className="h-2.5 overflow-hidden rounded-full bg-secondary">
          <div className="flex h-full">
            <div
              className="bg-success transition-all"
              style={{
                width: `${(totalResolved / MOCK_REPORTS.length) * 100}%`,
              }}
            />
            <div
              className="bg-blue-500 transition-all"
              style={{
                width: `${(totalInvestigating / MOCK_REPORTS.length) * 100}%`,
              }}
            />
            <div
              className="bg-primary transition-all"
              style={{
                width: `${(totalReceived / MOCK_REPORTS.length) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className="mt-2 flex flex-wrap gap-4">
          <span className="flex items-center gap-1.5 font-body text-[10px] text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-success" /> تم الحل
          </span>
          <span className="flex items-center gap-1.5 font-body text-[10px] text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-blue-500" /> قيد التحقيق
          </span>
          <span className="flex items-center gap-1.5 font-body text-[10px] text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" /> تم الاستلام
          </span>
        </div>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap items-center gap-2">
        <Filter className="h-4 w-4 text-muted-foreground" />
        {(
          [
            { key: "all", label: "الكل" },
            { key: "received", label: "تم الاستلام" },
            { key: "investigating", label: "قيد التحقيق" },
            { key: "resolved", label: "تم الحل" },
          ] as const
        ).map((f) => (
          <button
            key={f.key}
            onClick={() => setStatusFilter(f.key)}
            className={`rounded-lg px-3 py-1.5 font-display text-xs font-bold transition-all ${
              statusFilter === f.key
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-secondary/40 text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
            }`}
          >
            {f.label}
            {f.key !== "all" && (
              <span className="mr-1.5 font-body">
                (
                {f.key === "received"
                  ? totalReceived
                  : f.key === "investigating"
                  ? totalInvestigating
                  : totalResolved}
                )
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Reports List */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-border/30 bg-secondary/20 py-12">
            <FileText className="h-10 w-10 text-muted-foreground/30" />
            <p className="font-body text-sm text-muted-foreground">
              لا توجد بلاغات بهذا التصنيف
            </p>
          </div>
        ) : (
          filtered.map((report) => {
            const config = statusConfig[report.status];
            const StatusIcon = config.icon;
            const isExpanded = expandedId === report.id;

            return (
              <div
                key={report.id}
                className="overflow-hidden rounded-2xl border border-border/40 bg-secondary/30 transition-all hover:border-border/60 hover:bg-secondary/40"
              >
                {/* Row header */}
                <button
                  onClick={() =>
                    setExpandedId(isExpanded ? null : report.id)
                  }
                  className="flex w-full items-center gap-4 p-4 text-right"
                >
                  {/* Status icon */}
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                      report.status === "resolved"
                        ? "bg-success/10"
                        : report.status === "investigating"
                        ? "bg-blue-500/10"
                        : "bg-primary/10"
                    }`}
                  >
                    <StatusIcon
                      className={`h-5 w-5 ${
                        report.status === "resolved"
                          ? "text-success"
                          : report.status === "investigating"
                          ? "text-blue-400"
                          : "text-primary"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-sm font-bold text-foreground">
                        {report.type}
                      </span>
                      <Badge
                        variant="outline"
                        className={`shrink-0 font-body text-[10px] ${config.className}`}
                      >
                        {config.label}
                      </Badge>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-body text-xs text-muted-foreground">
                      <span
                        className="font-mono text-[10px] text-primary/70"
                        dir="ltr"
                      >
                        {report.id}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {report.location}
                      </span>
                    </div>
                  </div>

                  {/* Expand toggle */}
                  {isExpanded ? (
                    <ChevronUp className="h-4 w-4 shrink-0 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
                  )}
                </button>

                {/* Expanded details */}
                {isExpanded && (
                  <div className="border-t border-border/30 bg-secondary/20 p-4 animate-fade-up">
                    <div className="space-y-3">
                      <div>
                        <span className="font-display text-xs font-bold text-muted-foreground">
                          الوصف
                        </span>
                        <p className="mt-1 font-body text-sm text-foreground/80">
                          {report.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <div>
                          <span className="font-display text-xs font-bold text-muted-foreground">
                            التاريخ
                          </span>
                          <p className="mt-0.5 flex items-center gap-1 font-body text-sm text-foreground/80">
                            <Calendar className="h-3.5 w-3.5 text-primary" />
                            {report.date}
                          </p>
                        </div>
                        <div>
                          <span className="font-display text-xs font-bold text-muted-foreground">
                            الحالة
                          </span>
                          <p className="mt-0.5 flex items-center gap-1 font-body text-sm text-foreground/80">
                            <StatusIcon
                              className={`h-3.5 w-3.5 ${
                                report.status === "resolved"
                                  ? "text-success"
                                  : report.status === "investigating"
                                  ? "text-blue-400"
                                  : "text-primary"
                              }`}
                            />
                            {config.label}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-secondary/40 px-3 py-2">
                        <Shield className="h-3.5 w-3.5 text-primary" />
                        <span className="font-body text-[11px] text-muted-foreground">
                          بيانات المبلّغ مخفية — بلاغ مجهول الهوية
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Count */}
      <p className="text-center font-body text-xs text-muted-foreground/60">
        عرض {filtered.length} من {MOCK_REPORTS.length} بلاغ
      </p>
    </div>
  );
};

export default Dashboard;
