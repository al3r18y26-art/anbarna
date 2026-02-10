import { useState } from "react";
import { FileText, CheckCircle2, Clock, AlertTriangle, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MOCK_REPORTS, DISTRICTS, type ReportStatus, type Report } from "@/lib/types";

const statusConfig: Record<ReportStatus, { className: string; icon: typeof Clock }> = {
  "قيد المراجعة": { className: "status-pending", icon: Clock },
  "تم التحقق": { className: "status-verified", icon: AlertTriangle },
  "تم الحل": { className: "status-resolved", icon: CheckCircle2 },
};

const StatCard = ({ label, value, icon: Icon, color }: { label: string; value: number; icon: typeof FileText; color: string }) => (
  <div className="stat-card flex items-center gap-4">
    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${color}`}>
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <div className="font-display text-2xl font-bold text-foreground">{value}</div>
      <div className="font-body text-sm text-muted-foreground">{label}</div>
    </div>
  </div>
);

const ReportRow = ({ report }: { report: Report }) => {
  const config = statusConfig[report.status];
  const StatusIcon = config.icon;
  return (
    <div className="flex flex-col gap-3 border-b p-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex-1 space-y-1">
        <p className="font-display text-sm font-bold text-foreground">{report.description}</p>
        <div className="flex flex-wrap gap-2 font-body text-xs text-muted-foreground">
          <span>{report.district}</span>
          <span>•</span>
          <span>{report.violationType}</span>
          <span>•</span>
          <span>{report.createdAt}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Badge variant="outline" className="font-body text-xs">
          {report.severity}
        </Badge>
        <Badge variant="outline" className={`flex items-center gap-1 font-body text-xs ${config.className}`}>
          <StatusIcon className="h-3 w-3" />
          {report.status}
        </Badge>
      </div>
    </div>
  );
};

const DashboardPage = () => {
  const [districtFilter, setDistrictFilter] = useState<string>("all");

  const filtered = districtFilter === "all"
    ? MOCK_REPORTS
    : MOCK_REPORTS.filter((r) => r.district === districtFilter);

  const pending = filtered.filter((r) => r.status === "قيد المراجعة").length;
  const verified = filtered.filter((r) => r.status === "تم التحقق").length;
  const resolved = filtered.filter((r) => r.status === "تم الحل").length;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-12">
        <div className="container">
          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold text-foreground">لوحة المتابعة</h1>
            <p className="mt-1 font-body text-muted-foreground">تتبع البلاغات وحالتها في محافظة الأنبار</p>
          </div>

          {/* Stats */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard label="إجمالي البلاغات" value={filtered.length} icon={FileText} color="bg-primary/10 text-primary" />
            <StatCard label="قيد المراجعة" value={pending} icon={Clock} color="bg-warning/10 text-warning" />
            <StatCard label="تم التحقق" value={verified} icon={AlertTriangle} color="bg-primary/10 text-primary" />
            <StatCard label="تم الحل" value={resolved} icon={CheckCircle2} color="bg-success/10 text-success" />
          </div>

          {/* Filter + Reports */}
          <div className="rounded-2xl border bg-card shadow-sm">
            <div className="flex items-center gap-3 border-b p-4">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={districtFilter} onValueChange={setDistrictFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="جميع الأقضية" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الأقضية</SelectItem>
                  {DISTRICTS.map((d) => (
                    <SelectItem key={d} value={d}>{d}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              {filtered.length === 0 ? (
                <p className="p-8 text-center font-body text-muted-foreground">لا توجد بلاغات</p>
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
