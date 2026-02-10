import { useState, useCallback } from "react";
import { FileText, Search, LayoutDashboard } from "lucide-react";
import AppHeader from "@/components/AppHeader";
import TrustBanner from "@/components/TrustBanner";
import ReportForm from "@/components/ReportForm";
import SuccessCard from "@/components/SuccessCard";
import TrackStatus from "@/components/TrackStatus";
import Dashboard from "@/components/Dashboard";
import AppFooter from "@/components/AppFooter";

type ActiveTab = "report" | "track" | "dashboard";
type ViewState = "form" | "success";

interface SubmissionResult {
  ticketId: string;
  securityPin: string;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("report");
  const [viewState, setViewState] = useState<ViewState>("form");
  const [submissionResult, setSubmissionResult] =
    useState<SubmissionResult | null>(null);
  const [trackInitial, setTrackInitial] = useState({ ticketId: "", pin: "" });

  const handleSubmitSuccess = useCallback((result: SubmissionResult) => {
    setSubmissionResult(result);
    setViewState("success");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleTrackFromSuccess = useCallback(() => {
    if (submissionResult) {
      setTrackInitial({
        ticketId: submissionResult.ticketId,
        pin: submissionResult.securityPin,
      });
    }
    setActiveTab("track");
    setViewState("form");
  }, [submissionResult]);

  const handleNewReport = useCallback(() => {
    setViewState("form");
    setSubmissionResult(null);
    setActiveTab("report");
  }, []);

  const switchTab = (tab: ActiveTab) => {
    setActiveTab(tab);
    if (tab === "report" && viewState === "success") {
      // Keep success view if switching back
    }
    if (tab === "track") {
      // Reset track initial if coming from tab click (not from success)
      if (!submissionResult) {
        setTrackInitial({ ticketId: "", pin: "" });
      }
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <AppHeader />

      {/* Hero / Trust Banner */}
      <TrustBanner />

      {/* Main Content */}
      <main className="flex-1 py-10">
        <div className={`container ${activeTab === "dashboard" ? "max-w-5xl" : "max-w-2xl"}`}>
          {/* Tabs */}
          <div className="mb-8 flex overflow-hidden rounded-2xl border border-border/50 bg-secondary/30 p-1">
            <button
              onClick={() => switchTab("report")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-3 font-display text-sm font-bold transition-all ${
                activeTab === "report"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <FileText className="h-4 w-4" />
              تقديم بلاغ
            </button>
            <button
              onClick={() => switchTab("track")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-3 font-display text-sm font-bold transition-all ${
                activeTab === "track"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Search className="h-4 w-4" />
              تتبع البلاغ
            </button>
            <button
              onClick={() => switchTab("dashboard")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-3 font-display text-sm font-bold transition-all ${
                activeTab === "dashboard"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <LayoutDashboard className="h-4 w-4" />
              لوحة التحكم
            </button>
          </div>

          {/* Tab Content */}
          <div className="rounded-3xl border border-border/50 bg-card p-6 shadow-xl shadow-black/10 md:p-8">
            {activeTab === "report" && (
              <>
                {viewState === "form" && (
                  <div className="animate-fade-up">
                    <div className="mb-6 text-center">
                      <h2 className="font-display text-xl font-bold text-foreground">
                        تقديم بلاغ مجهول
                      </h2>
                      <p className="mt-1 font-body text-sm text-muted-foreground">
                        لا يتطلب تسجيل دخول — املأ النموذج وأرسل
                      </p>
                    </div>
                    <ReportForm onSubmitSuccess={handleSubmitSuccess} />
                  </div>
                )}

                {viewState === "success" && submissionResult && (
                  <SuccessCard
                    ticketId={submissionResult.ticketId}
                    securityPin={submissionResult.securityPin}
                    onTrackReport={handleTrackFromSuccess}
                    onNewReport={handleNewReport}
                  />
                )}
              </>
            )}

            {activeTab === "track" && (
              <div className="animate-fade-up">
                <div className="mb-6 text-center">
                  <h2 className="font-display text-xl font-bold text-foreground">
                    تتبع حالة البلاغ
                  </h2>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    أدخل رقم البلاغ ورمز الأمان لمتابعة الحالة
                  </p>
                </div>
                <TrackStatus
                  key={`${trackInitial.ticketId}-${trackInitial.pin}`}
                  initialTicketId={trackInitial.ticketId}
                  initialPin={trackInitial.pin}
                />
              </div>
            )}

            {activeTab === "dashboard" && (
              <div className="animate-fade-up">
                <div className="mb-6 text-center">
                  <h2 className="font-display text-xl font-bold text-foreground">
                    لوحة التحكم
                  </h2>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    نظرة شاملة على جميع البلاغات وحالتها
                  </p>
                </div>
                <Dashboard />
              </div>
            )}
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  );
};

export default Index;
