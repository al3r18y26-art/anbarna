import { Shield, ArrowLeft, Users, FileCheck, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-anbar.jpg";

const stats = [
  { icon: FileCheck, value: "٦+", label: "بلاغ مُقدَّم" },
  { icon: MapPin, value: "١٢", label: "قضاء مشمول" },
  { icon: Users, value: "١٠٠٪", label: "سرية تامة" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage}
        alt="محافظة الأنبار"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />

      {/* Decorative gradient orbs */}
      <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative z-10 flex min-h-[90vh] items-center">
        <div className="container">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/15 px-5 py-2.5 shadow-lg shadow-black/10">
              <Shield className="h-4 w-4 text-secondary" />
              <span className="font-body text-sm font-semibold text-secondary">
                منصة رقابة مجتمعية مشفّرة
              </span>
            </div>

            {/* Heading */}
            <h1 className="animate-fade-up font-display text-5xl font-black leading-[1.15] text-primary-foreground md:text-7xl">
              رصد{" "}
              <span className="gold-text">الأنبار</span>
            </h1>

            <p className="animate-fade-up-delay mt-3 font-display text-2xl font-bold text-secondary md:text-3xl">
              أحنة أهلها
            </p>

            <p className="animate-fade-up-delay mt-5 max-w-lg font-body text-lg leading-relaxed text-primary-foreground/85">
              منصة مجتمعية لتمكين أبناء الأنبار من رصد وتوثيق المخالفات
              والتجاوزات.{" "}
              <span className="font-semibold text-primary-foreground">
                هويتك محمية بالكامل
              </span>{" "}
              — بلاغك صوتك.
            </p>

            {/* CTA buttons */}
            <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-4">
              <Link to="/report">
                <Button
                  size="lg"
                  className="bg-secondary font-display text-lg font-bold text-secondary-foreground shadow-lg shadow-secondary/25 transition-all hover:bg-secondary/90 hover:shadow-xl hover:shadow-secondary/30"
                >
                  قدّم بلاغاً الآن
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 font-display text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/10"
                >
                  لوحة المتابعة
                </Button>
              </Link>
            </div>

            {/* Quick stats */}
            <div className="animate-fade-up-delay-2 mt-12 flex flex-wrap gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 px-5 py-3 backdrop-blur-sm"
                >
                  <s.icon className="h-5 w-5 text-secondary" />
                  <div>
                    <div className="font-display text-lg font-bold text-primary-foreground">
                      {s.value}
                    </div>
                    <div className="font-body text-xs text-primary-foreground/60">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
