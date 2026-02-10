import { ShieldCheck, Eye, Zap, Lock } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "خصوصية مطلقة",
    description: "نظام Zero-Knowledge — لا نخزن عنوان IP أو بيانات الجهاز أو أي بيانات شخصية.",
  },
  {
    icon: Zap,
    title: "تقديم بخطوة واحدة",
    description: "أرسل بلاغك بسرعة مع إمكانية إرفاق روابط ووسائط اجتماعية وصور.",
  },
  {
    icon: Eye,
    title: "متابعة شفافة",
    description: "تتبع حالة البلاغات من التقديم حتى الحل عبر لوحة تحكم تفاعلية.",
  },
  {
    icon: ShieldCheck,
    title: "تشفير متقدم",
    description: "تشفير AES-256 للبيانات المخزنة و TLS 1.3 لحماية البيانات أثناء النقل.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-muted/50 py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            لماذا <span className="text-secondary">رصد الأنبار</span>؟
          </h2>
          <p className="mt-3 font-body text-muted-foreground">
            منصة مبنية على مبدأ "الأمان أولاً" لحماية المبلّغين
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="stat-card group text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
