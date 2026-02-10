import { ShieldCheck, Eye, Zap, Lock } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "خصوصية مطلقة",
    description:
      "نظام Zero-Knowledge — لا نخزن عنوان IP أو بيانات الجهاز أو أي بيانات شخصية.",
    color: "from-blue-500/10 to-blue-600/5",
  },
  {
    icon: Zap,
    title: "تقديم بخطوة واحدة",
    description:
      "أرسل بلاغك بسرعة مع إمكانية إرفاق روابط ووسائط اجتماعية وصور.",
    color: "from-amber-500/10 to-amber-600/5",
  },
  {
    icon: Eye,
    title: "متابعة شفافة",
    description:
      "تتبع حالة البلاغات من التقديم حتى الحل عبر لوحة تحكم تفاعلية.",
    color: "from-emerald-500/10 to-emerald-600/5",
  },
  {
    icon: ShieldCheck,
    title: "تشفير متقدم",
    description:
      "تشفير AES-256 للبيانات المخزنة و TLS 1.3 لحماية البيانات أثناء النقل.",
    color: "from-purple-500/10 to-purple-600/5",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-muted/40 py-24">
      <div className="container">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full bg-secondary/10 px-4 py-1.5 font-body text-sm font-semibold text-secondary">
            المميزات
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            لماذا <span className="text-secondary">رصد الأنبار</span>؟
          </h2>
          <p className="mx-auto mt-3 max-w-md font-body text-muted-foreground">
            منصة مبنية على مبدأ &quot;الأمان أولاً&quot; لحماية المبلّغين
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              <div className="relative z-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:shadow-lg group-hover:shadow-secondary/20">
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
