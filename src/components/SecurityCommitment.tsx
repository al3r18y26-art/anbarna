import { Shield, Lock, Server, Globe } from "lucide-react";

const SecurityCommitment = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="overflow-hidden rounded-2xl bg-primary p-8 md:p-12">
          <div className="flex items-start gap-4">
            <Shield className="mt-1 h-10 w-10 shrink-0 text-secondary" />
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">
                التزامنا بالأمان أولاً
              </h2>
              <p className="mt-3 max-w-2xl font-body leading-relaxed text-primary-foreground/80">
                نلتزم بأعلى معايير الأمان والخصوصية لحماية المبلّغين. منصة رصد الأنبار 
                مبنية على مبدأ المعرفة الصفرية — لا نعرف من أنت ولا نريد أن نعرف.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Lock, label: "AES-256", desc: "تشفير البيانات المخزنة" },
              { icon: Globe, label: "TLS 1.3", desc: "تشفير البيانات أثناء النقل" },
              { icon: Server, label: "Zero-Knowledge", desc: "لا بيانات شخصية مخزنة" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-primary-foreground/10 p-5">
                <item.icon className="mb-2 h-6 w-6 text-secondary" />
                <div className="font-display text-lg font-bold text-primary-foreground">{item.label}</div>
                <div className="font-body text-sm text-primary-foreground/70">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCommitment;
