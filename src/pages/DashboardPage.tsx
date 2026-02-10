import { useState } from "react";
import {
  FileText,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Filter,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MOCK_REPORTS,
  DISTRICTS,
  type ReportStatus,
  type Report,
} from "@/lib/types";

const statusConfig: Record<
  ReportStatus,
  { className: string; icon: typeof Clock; label: string }
> = {
  "قيد المراجعة": { className: "status-pending", icon: Clock, label: "مراجعة" },
  "تم التحقق": {
    className: "status-verified",
    icon: AlertTriangle,
    label: "تحقق",
  },
  "تم الحل": {
    className: "status-resolved",
    icon: CheckCircle2,
    label: "محلول",
  },
};

const StatCard = ({
  label,
  value,
  icon: Icon,
  color,
  trend,
}: {
  label: string;
  value: number;
  icon: typeof FileText;
  color: string;
  trend?: string;
}) => (
  <div className="stat-card flex items-center gap-4">
    <div
      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${color}`}
    >
      <Icon className="h-6 w-6" />
    </div>
    <div className="flex-1">
      <div className="font-display text-3xl font-black text-foreground">
        {value}
      </div>
      <div className="font-body text-sm text-muted-foreground">{label}</div>
    </div>
    {trend && (
      <div className="flex items-center gap-1 rounded-full bg-success/10 px-2 py-1 text-xs text-success">
        <TrendingUp className="h-3 w-3" />
        {trend}
      </div>
    )}
  </div>
);

const ReportRow = ({ report }: { report: Report }) => {
  const config = statusConfig[report.status];
  const StatusIcon = config.icon;
  return (
    <div className="flex flex-col gap-3 border-b p-5 transition-colors last:border-b-0 hover:bg-muted/30 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex-1 space-y-1.5">
        <p className="font-display text-sm font-bold text-foreground">
          {report.description}
        </p>
        <div className="flex flex-wrap gap-2 font-body text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5">
            {report.district}
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5">
            {report.violationType}
          </span>
          <span className="text-muted-foreground/60">{report.createdAt}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Badge variant="outline" className="font-body text-xs">
          {report.severity}
        </Badge>
        <Badge
          variant="outline"
          className={`flex items-center gap-1.5 font-body text-xs ${config.className}`}
        >
          <StatusIcon className="h-3 w-3" />
          {report.status}
        </Badge>
      </div>
    </div>
  );
};

const DashboardPage = () => {
  const [districtFilter, setDistrictFilter] = useState<string>("all");

  const filtered =
    districtFilter === "all"
      ? MOCK_REPORTS
      : MOCK_REPORTS.filter((r) => r.district === districtFilter);

  const pending = filtered.filter((r) => r.status === "قيد المراجعة").length;
  const verified = filtered.filter((r) => r.status === "تم التحقق").length;
  const resolved = filtered.filter((r) => r.status === "تم الحل").length;

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <main className="py-10">
        <div className="container">
          {/* Header */}
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-secondary" />
                <span className="font-body text-sm font-semibold text-secondary">
                  لوحة المتابعة
                </span>
              </div>
              <h1 className="font-display text-3xl font-bold text-foreground">
                متابعة البلاغات
              </h1>
              <p className="mt-1 font-body text-muted-foreground">
                تتبع البلاغات وحالتها في محافظة الأنبار
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              label="إجمالي البلاغات"
              value={filtered.length}
              icon={FileText}
              color="bg-primary/10 text-primary"
            />
            <StatCard
              label="قيد المراجعة"
              value={pending}
              icon={Clock}
              color="bg-warning/10 text-warning"
            />
            <StatCard
              label="تم التحقق"
              value={verified}
              icon={AlertTriangle}
              color="bg-primary/10 text-primary"
            />
            <StatCard
              label="تم الحل"
              value={resolved}
              icon={CheckCircle2}
              color="bg-success/10 text-success"
              trend="جيد"
            />
          </div>

          {/* Filter + Reports */}
          <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
            <div className="flex items-center justify-between gap-3 border-b bg-muted/30 p-5">
              <div className="flex items-center gap-3">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="font-display text-sm font-bold text-foreground">
                  البلاغات
                </span>
                <Badge variant="secondary" className="font-body">
                  {filtered.length}
                </Badge>
              </div>
              <Select
                value={districtFilter}
                onValueChange={setDistrictFilter}
              >
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="جميع الأقضية" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الأقضية</SelectItem>
                  {DISTRICTS.map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              {filtered.length === 0 ? (
                <div className="flex flex-col items-center gap-3 p-12">
                  <FileText className="h-10 w-10 text-muted-foreground/30" />
                  <p className="font-body text-muted-foreground">
                    لا توجد بلاغات
                  </p>
                </div>
              ) : (
                filtered.map((r) => <ReportRow key={r.id} report={r} />)
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
