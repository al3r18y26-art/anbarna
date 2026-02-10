import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Send, ImagePlus, Link2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DISTRICTS, VIOLATION_TYPES, SEVERITIES } from "@/lib/types";

const ReportPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "تم إرسال البلاغ بنجاح ✓",
        description: "شكراً لمساهمتك — بلاغك مشفر ومحمي بالكامل.",
      });
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-12">
        <div className="container max-w-2xl">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10">
              <AlertTriangle className="h-7 w-7 text-secondary" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground">تقديم بلاغ</h1>
            <p className="mt-2 font-body text-muted-foreground">
              هويتك محمية بالكامل — لا نخزن أي بيانات شخصية
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border bg-card p-6 shadow-sm md:p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label className="font-display font-semibold">القضاء / المنطقة</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر القضاء" />
                  </SelectTrigger>
                  <SelectContent>
                    {DISTRICTS.map((d) => (
                      <SelectItem key={d} value={d}>{d}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="font-display font-semibold">نوع المخالفة</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر النوع" />
                  </SelectTrigger>
                  <SelectContent>
                    {VIOLATION_TYPES.map((v) => (
                      <SelectItem key={v} value={v}>{v}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="font-display font-semibold">درجة الخطورة</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="اختر الخطورة" />
                </SelectTrigger>
                <SelectContent>
                  {SEVERITIES.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="font-display font-semibold">وصف المخالفة</Label>
              <Textarea
                placeholder="اشرح المخالفة بالتفصيل..."
                rows={4}
                required
                className="resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label className="font-display font-semibold flex items-center gap-2">
                <Link2 className="h-4 w-4" />
                رابط وسائل التواصل (اختياري)
              </Label>
              <Input type="url" placeholder="https://..." dir="ltr" />
            </div>

            <div className="space-y-2">
              <Label className="font-display font-semibold flex items-center gap-2">
                <ImagePlus className="h-4 w-4" />
                صورة / مستند (اختياري)
              </Label>
              <Input type="file" accept="image/*,.pdf" className="cursor-pointer" />
              <p className="font-body text-xs text-muted-foreground">
                يتم ضغط الصور تلقائياً لتقليل الحجم (WebP)
              </p>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-secondary font-display text-lg font-bold text-secondary-foreground hover:bg-secondary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "جاري الإرسال..." : "إرسال البلاغ"}
              <Send className="mr-2 h-5 w-5" />
            </Button>

            <p className="text-center font-body text-xs text-muted-foreground">
              🔒 بلاغك مشفر بمعيار AES-256 ولا يمكن تتبعه إليك
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReportPage;
