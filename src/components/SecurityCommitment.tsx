import { Shield, Lock, Server, Globe } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    label: "AES-256",
    desc: "تشفير البيانات المخزنة",
    detail: "جميع البلاغات مشفرة بأقوى معايير التشفير العالمية",
  },
  {
    icon: Globe,
    label: "TLS 1.3",
    desc: "تشفير البيانات أثناء النقل",
    detail: "اتصال آمن ومشفر بالكامل بين جهازك والخوادم",
  },
  {
    icon: Server,
    label: "Zero-Knowledge",
    desc: "لا بيانات شخصية مخزنة",
    detail: "لا نجمع أي بيانات يمكن أن تكشف هويتك",
  },
];

const SecurityCommitment = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 shadow-2xl shadow-primary/20 md:p-14">
          {/* Decorative elements */}
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-secondary/5 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-secondary/8 blur-3xl" />

          <div className="relative z-10">
            {/* Header */}
            <div className="mb-10 flex flex-col items-center gap-5 text-center md:flex-row md:text-right">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-secondary/15">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">
                  التزامنا بالأمان أولاً
                </h2>
                <p className="mt-2 max-w-2xl font-body leading-relaxed text-primary-foreground/75">
                  نلتزم بأعلى معايير الأمان والخصوصية لحماية المبلّغين. منصة رصد
                  الأنبار مبنية على مبدأ المعرفة الصفرية — لا نعرف من أنت ولا
                  نريد أن نعرف.
                </p>
              </div>
            </div>

            {/* Security features */}
            <div className="grid gap-4 sm:grid-cols-3">
              {securityFeatures.map((item) => (
                <div
                  key={item.label}
                  className="group rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 transition-all duration-300 hover:bg-primary-foreground/10"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/15 transition-colors group-hover:bg-secondary/25">
                    <item.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div className="font-display text-lg font-bold text-primary-foreground">
                    {item.label}
                  </div>
                  <div className="font-body text-sm font-semibold text-secondary">
                    {item.desc}
                  </div>
                  <div className="mt-2 font-body text-xs leading-relaxed text-primary-foreground/60">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCommitment;
