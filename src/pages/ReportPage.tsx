import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Send, ImagePlus, Link2, AlertTriangle, Shield, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "تم إرسال البلاغ بنجاح",
        description: "شكراً لمساهمتك — بلاغك مشفر ومحمي بالكامل.",
      });
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <main className="py-12">
        <div className="container max-w-2xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10">
              <AlertTriangle className="h-8 w-8 text-secondary" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              تقديم بلاغ
            </h1>
            <p className="mx-auto mt-2 max-w-sm font-body text-muted-foreground">
              هويتك محمية بالكامل — لا نخزن أي بيانات شخصية
            </p>
          </div>

          {/* Security notice */}
          <div className="mb-6 flex items-center gap-3 rounded-xl border border-success/20 bg-success/5 p-4">
            <Shield className="h-5 w-5 shrink-0 text-success" />
            <p className="font-body text-sm text-success">
              اتصال مشفر — جميع البيانات محمية أثناء الإرسال بمعيار TLS 1.3
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border bg-card p-6 shadow-sm md:p-8"
          >
            {/* District + Violation type */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label className="font-display text-sm font-semibold">
                  القضاء / المنطقة
                </Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر القضاء" />
                  </SelectTrigger>
                  <SelectContent>
                    {DISTRICTS.map((d) => (
                      <SelectItem key={d} value={d}>
                        {d}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="font-display text-sm font-semibold">
                  نوع المخالفة
                </Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر النوع" />
                  </SelectTrigger>
                  <SelectContent>
                    {VIOLATION_TYPES.map((v) => (
                      <SelectItem key={v} value={v}>
                        {v}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Severity */}
            <div className="space-y-2">
              <Label className="font-display text-sm font-semibold">
                درجة الخطورة
              </Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="اختر الخطورة" />
                </SelectTrigger>
                <SelectContent>
                  {SEVERITIES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label className="font-display text-sm font-semibold">
                وصف المخالفة
              </Label>
              <Textarea
                placeholder="اشرح المخالفة بالتفصيل..."
                rows={5}
                required
                className="resize-none"
              />
            </div>

            {/* Social link */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 font-display text-sm font-semibold">
                <Link2 className="h-4 w-4 text-muted-foreground" />
                رابط وسائل التواصل (اختياري)
              </Label>
              <Input type="url" placeholder="https://..." dir="ltr" />
            </div>

            {/* File upload */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 font-display text-sm font-semibold">
                <ImagePlus className="h-4 w-4 text-muted-foreground" />
                صورة / مستند (اختياري)
              </Label>
              <Input
                type="file"
                accept="image/*,.pdf"
                className="cursor-pointer"
              />
              <p className="font-body text-xs text-muted-foreground">
                يتم ضغط الصور تلقائياً لتقليل الحجم (WebP)
              </p>
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-secondary font-display text-lg font-bold text-secondary-foreground shadow-lg shadow-secondary/20 transition-all hover:bg-secondary/90 hover:shadow-xl"
              disabled={isSubmitting}
            >
              {isSubmitting ? "جاري الإرسال..." : "إرسال البلاغ"}
              <Send className="mr-2 h-5 w-5" />
            </Button>

            {/* Privacy notice */}
            <div className="flex items-center justify-center gap-2 rounded-lg bg-muted/50 px-4 py-3">
              <Lock className="h-4 w-4 text-muted-foreground" />
              <p className="font-body text-xs text-muted-foreground">
                بلاغك مشفر بمعيار AES-256 ولا يمكن تتبعه إليك
              </p>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReportPage;
