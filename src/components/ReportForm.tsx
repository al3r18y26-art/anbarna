import { useState } from "react";
import {
  Send,
  ImagePlus,
  MapPin,
  AlertTriangle,
  Loader2,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const VIOLATION_TYPES = [
  "سب ذات الإلهية",
  "تصرفات غير أخلاقية",
  "ابتزاز",
  "متسولين",
  "لبس فاحش",
  "مخدرات",
  "فساد مالي",
  "تجاوز على أراضي",
  "تلوث بيئي",
  "إهمال خدمات",
  "تجاوز على ممتلكات عامة",
  "مخالفات بناء",
  "انتهاك حقوق",
  "رشوة",
  "تزوير وثائق",
  "أخرى",
];

interface SubmissionResult {
  ticketId: string;
  securityPin: string;
}

interface ReportFormProps {
  onSubmitSuccess: (result: SubmissionResult) => void;
}

const generateTicketId = () => {
  const year = new Date().getFullYear();
  const num = Math.floor(1000 + Math.random() * 9000);
  return `RAN-${year}-${num}`;
};

const generatePin = () => {
  const num = Math.floor(100 + Math.random() * 900);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const letters =
    chars[Math.floor(Math.random() * 26)] +
    chars[Math.floor(Math.random() * 26)] +
    chars[Math.floor(Math.random() * 26)];
  return `${num}-${letters}`;
};

const ReportForm = ({ onSubmitSuccess }: ReportFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [violationType, setViolationType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!violationType || !description.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const result: SubmissionResult = {
        ticketId: generateTicketId(),
        securityPin: generatePin(),
      };
      setIsSubmitting(false);
      onSubmitSuccess(result);
    }, 2000);
  };

  const isFormValid = violationType && description.trim().length > 0;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Violation Type */}
      <div className="space-y-2">
        <Label className="flex items-center gap-2 font-display text-sm font-semibold text-foreground">
          <AlertTriangle className="h-4 w-4 text-primary" />
          نوع المخالفة
        </Label>
        <Select value={violationType} onValueChange={setViolationType} required>
          <SelectTrigger className="bg-secondary/50 border-border/50 text-foreground">
            <SelectValue placeholder="اختر نوع المخالفة..." />
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

      {/* Location */}
      <div className="space-y-2">
        <Label className="flex items-center gap-2 font-display text-sm font-semibold text-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          الموقع / المنطقة
        </Label>
        <Input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="مثال: حي المعلمين — الرمادي"
          className="bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground/50"
        />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label className="font-display text-sm font-semibold text-foreground">
          وصف المخالفة
        </Label>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="اشرح المخالفة بالتفصيل... كلما كان الوصف أدق كان التعامل أسرع"
          rows={4}
          required
          className="resize-none bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground/50"
        />
      </div>

      {/* File Upload */}
      <div className="space-y-2">
        <Label className="flex items-center gap-2 font-display text-sm font-semibold text-foreground">
          <ImagePlus className="h-4 w-4 text-primary" />
          إرفاق صورة / مستند
          <span className="font-body text-xs font-normal text-muted-foreground">
            (اختياري)
          </span>
        </Label>
        <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-border/50 bg-secondary/30 p-6 transition-colors hover:border-primary/40 hover:bg-secondary/50">
          <label className="flex cursor-pointer flex-col items-center gap-2">
            <ImagePlus className="h-8 w-8 text-muted-foreground" />
            <span className="font-body text-sm text-muted-foreground">
              اضغط لرفع ملف أو اسحبه هنا
            </span>
            <span className="font-body text-xs text-muted-foreground/60">
              JPG, PNG, PDF — حد أقصى 10MB
            </span>
            <input
              type="file"
              accept="image/*,.pdf"
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        disabled={!isFormValid || isSubmitting}
        className="w-full bg-primary font-display text-lg font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="ml-2 h-5 w-5 animate-spin" />
            جاري التشفير والإرسال...
          </>
        ) : (
          <>
            <Send className="ml-2 h-5 w-5" />
            إرسال البلاغ بشكل مجهول
          </>
        )}
      </Button>

      <p className="text-center font-body text-xs text-muted-foreground">
        🔒 لا يتطلب تسجيل دخول — بلاغك مشفر ومجهول الهوية بالكامل
      </p>
    </form>
  );
};

export default ReportForm;
