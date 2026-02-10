import { ShieldCheck, Lock, Building2 } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "سرية مطلقة",
    desc: "لا نطلب أي بيانات شخصية",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/20",
  },
  {
    icon: Lock,
    title: "تشفير شامل",
    desc: "بياناتك مشفرة بمعيار AES-256",
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20",
  },
  {
    icon: Building2,
    title: "متابعة رسمية",
    desc: "بلاغك يصل للجهات المعنية",
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/20",
  },
];

const TrustBanner = () => {
  return (
    <section className="relative overflow-hidden border-b border-border/30 bg-secondary/50 py-16">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-56 w-56 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Title */}
        <div className="mb-10 text-center">
          <h1 className="font-display text-4xl font-black leading-tight text-foreground md:text-5xl">
            رصد <span className="gold-text">الأنبار</span>
          </h1>
          <p className="mt-2 font-display text-xl font-bold text-primary">
            أحنة أهلها
          </p>
          <p className="mx-auto mt-3 max-w-lg font-body text-sm leading-relaxed text-muted-foreground">
            منصة مجتمعية آمنة للإبلاغ عن المخالفات والتجاوزات في محافظة الأنبار.
            هويتك محمية بالكامل — بلاغك صوتك.
          </p>
        </div>

        {/* Trust Icons */}
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className={`group flex flex-col items-center gap-3 rounded-2xl border p-6 text-center transition-all duration-300 hover:-translate-y-1 ${item.bg}`}
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-background/50 ${item.color}`}>
                <item.icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 font-body text-xs text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
