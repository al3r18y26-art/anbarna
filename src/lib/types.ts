export type District = 
  | "الفلوجة" | "الرمادي" | "هيت" | "حديثة" | "عنه" | "القائم" 
  | "الحبانية" | "الكرمة" | "الرطبة" | "عامرية الفلوجة" | "الصقلاوية" | "أخرى";

export type ViolationType = 
  | "فساد مالي" | "تجاوز على أراضي" | "تلوث بيئي" | "إهمال خدمات" 
  | "تجاوز على ممتلكات عامة" | "مخالفات بناء" | "انتهاك حقوق" | "أخرى";

export type Severity = "منخفضة" | "متوسطة" | "عالية" | "حرجة";

export type ReportStatus = "قيد المراجعة" | "تم التحقق" | "تم الحل";

export interface Report {
  id: string;
  district: District;
  violationType: ViolationType;
  severity: Severity;
  status: ReportStatus;
  description: string;
  socialMediaLink?: string;
  imageUrl?: string;
  createdAt: string;
}

export const DISTRICTS: District[] = [
  "الفلوجة", "الرمادي", "هيت", "حديثة", "عنه", "القائم",
  "الحبانية", "الكرمة", "الرطبة", "عامرية الفلوجة", "الصقلاوية", "أخرى"
];

export const VIOLATION_TYPES: ViolationType[] = [
  "فساد مالي", "تجاوز على أراضي", "تلوث بيئي", "إهمال خدمات",
  "تجاوز على ممتلكات عامة", "مخالفات بناء", "انتهاك حقوق", "أخرى"
];

export const SEVERITIES: Severity[] = ["منخفضة", "متوسطة", "عالية", "حرجة"];

export const MOCK_REPORTS: Report[] = [
  { id: "1", district: "الفلوجة", violationType: "فساد مالي", severity: "عالية", status: "قيد المراجعة", description: "تلاعب في عقود مشاريع البنية التحتية", createdAt: "2026-02-09" },
  { id: "2", district: "الرمادي", violationType: "تلوث بيئي", severity: "حرجة", status: "تم التحقق", description: "تصريف مياه صناعية في نهر الفرات", socialMediaLink: "https://example.com/post1", createdAt: "2026-02-08" },
  { id: "3", district: "هيت", violationType: "إهمال خدمات", severity: "متوسطة", status: "تم الحل", description: "انقطاع مستمر للمياه في حي السوق", createdAt: "2026-02-07" },
  { id: "4", district: "حديثة", violationType: "تجاوز على أراضي", severity: "عالية", status: "قيد المراجعة", description: "بناء عشوائي على أراضي زراعية", createdAt: "2026-02-06" },
  { id: "5", district: "القائم", violationType: "مخالفات بناء", severity: "منخفضة", status: "تم التحقق", description: "بناء بدون تراخيص في المنطقة السكنية", createdAt: "2026-02-05" },
  { id: "6", district: "الكرمة", violationType: "انتهاك حقوق", severity: "حرجة", status: "قيد المراجعة", description: "حرمان مواطنين من حقوقهم في التعيين", createdAt: "2026-02-04" },
];
