import { Link } from "react-router-dom";
import { ArrowRight, Code2, Users, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HomePage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center pt-24">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary animate-fade-up">
              <Sparkles className="h-4 w-4" />
              <span>Now Hiring Software Engineers</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Build the Future with{" "}
              <span className="gradient-text glow-text">Brainovision</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Join our team of innovative engineers and shape the next generation of technology solutions. Your journey to an exceptional career starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/apply">
                <Button variant="hero" size="xl" className="group">
                  Apply Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/careers">
                <Button variant="outline" size="xl">
                  View Open Positions
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 text-muted-foreground animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <MapPin className="h-4 w-4 text-primary" />
              <span>Hyderabad, India</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Engineers" },
              { value: "50+", label: "Projects" },
              { value: "10+", label: "Years" },
              { value: "98%", label: "Satisfaction" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 text-center card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Join <span className="gradient-text">Brainovision</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer more than just a job. Join a community of innovators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Cutting-Edge Tech",
                description: "Work with Python, Java, C++, and modern frameworks on innovative projects.",
              },
              {
                icon: Users,
                title: "Growth & Learning",
                description: "Continuous learning opportunities with mentorship from industry experts.",
              },
              {
                icon: Sparkles,
                title: "Innovation Culture",
                description: "Your ideas matter. We foster creativity and innovative thinking.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 card-hover group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass-strong rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                We're looking for talented freshers with skills in Python, Java, or C++ to join our Hyderabad team.
              </p>
              <Link to="/apply">
                <Button variant="hero" size="xl" className="group">
                  Apply Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
