import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/90 p-10 md:p-16">
          {/* Decorative elements */}
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-secondary/5 blur-3xl" />

          <div className="relative z-10 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/15">
              <Shield className="h-8 w-8 text-secondary" />
            </div>

            <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              صوتك يصنع <span className="gold-text">الفرق</span>
            </h2>

            <p className="mx-auto mt-4 max-w-lg font-body text-lg leading-relaxed text-primary-foreground/80">
              كل بلاغ يساهم في بناء مجتمع أفضل. لا تتردد — هويتك محمية ومشفرة
              بالكامل.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/report">
                <Button
                  size="lg"
                  className="bg-secondary font-display text-lg font-bold text-secondary-foreground shadow-lg shadow-secondary/25 hover:bg-secondary/90"
                >
                  قدّم بلاغاً الآن
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 font-display text-primary-foreground hover:bg-primary-foreground/10"
                >
                  تصفّح البلاغات
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
