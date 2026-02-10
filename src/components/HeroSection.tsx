import { Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-anbar.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <img
        src={heroImage}
        alt="محافظة الأنبار"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      
      <div className="relative z-10 flex min-h-[85vh] items-center">
        <div className="container">
          <div className="max-w-2xl">
            <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/15 px-4 py-2 text-secondary">
              <Shield className="h-4 w-4" />
              <span className="font-body text-sm font-medium">منصة رقابة مجتمعية</span>
            </div>
            
            <h1 className="animate-fade-up font-display text-5xl font-black leading-tight text-primary-foreground md:text-7xl">
              رصد <span className="gold-text">الأنبار</span>
            </h1>
            
            <p className="animate-fade-up-delay mt-4 font-display text-2xl font-bold text-secondary md:text-3xl">
              أحنة أهلها
            </p>
            
            <p className="animate-fade-up-delay mt-4 max-w-lg font-body text-lg leading-relaxed text-primary-foreground/80">
              منصة مجتمعية لتمكين أبناء الأنبار من رصد وتوثيق المخالفات والتجاوزات. 
              هويتك محمية بالكامل — بلاغك صوتك.
            </p>
            
            <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-4">
              <Link to="/report">
                <Button size="lg" className="bg-secondary font-display text-lg font-bold text-secondary-foreground hover:bg-secondary/90">
                  قدّم بلاغاً الآن
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 font-display text-primary-foreground hover:bg-primary-foreground/10">
                  لوحة المتابعة
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
