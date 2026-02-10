import { FileText, Search, CheckCircle2, ArrowLeft } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "١",
    title: "قدّم بلاغك",
    description: "اختر القضاء ونوع المخالفة واكتب الوصف. يمكنك إرفاق صور أو روابط.",
  },
  {
    icon: Search,
    number: "٢",
    title: "مراجعة وتحقق",
    description: "يتم مراجعة البلاغ والتحقق من صحته من قبل فريق متخصص.",
  },
  {
    icon: CheckCircle2,
    number: "٣",
    title: "متابعة حتى الحل",
    description: "تابع حالة بلاغك عبر لوحة المتابعة حتى يتم حل المشكلة.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-14 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            كيف <span className="text-secondary">يعمل؟</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md font-body text-muted-foreground">
            ثلاث خطوات بسيطة لإيصال صوتك وحماية مجتمعك
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Connector line (desktop) */}
          <div className="absolute right-1/2 top-8 hidden h-0.5 w-2/3 -translate-x-1/3 bg-gradient-to-l from-secondary/20 via-secondary/40 to-secondary/20 lg:block" />

          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="group relative text-center">
                {/* Step number circle */}
                <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center">
                  <div className="absolute inset-0 rounded-2xl bg-secondary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary/20" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-lg shadow-secondary/25">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className="absolute -left-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground shadow">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>

                {/* Arrow between steps (desktop) */}
                {i < steps.length - 1 && (
                  <ArrowLeft className="absolute -left-4 top-8 hidden h-5 w-5 text-secondary/40 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
