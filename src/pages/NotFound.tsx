import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-destructive/10">
          <AlertTriangle className="h-10 w-10 text-destructive" />
        </div>
        <h1 className="mb-2 font-display text-6xl font-black text-foreground">٤٠٤</h1>
        <p className="mb-2 font-display text-xl font-bold text-foreground">
          الصفحة غير موجودة
        </p>
        <p className="mb-8 font-body text-muted-foreground">
          عذراً، الصفحة التي تبحث عنها غير متوفرة
        </p>
        <Link to="/">
          <Button className="gap-2 font-display">
            <Home className="h-4 w-4" />
            العودة للرئيسية
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
