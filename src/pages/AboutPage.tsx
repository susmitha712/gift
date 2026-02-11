import { Target, Eye, Heart, Award, Users, Lightbulb } from "lucide-react";

const AboutPage = () => {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
              About <span className="gradient-text">Brainovision</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
              We are a technology company dedicated to innovation, excellence, and empowering the next generation of software engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Pioneering <span className="gradient-text">Technology</span> Solutions
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a vision to transform the technology landscape, Brainovision has grown into a leading software development company based in Hyderabad, India. We specialize in cutting-edge solutions using Python, Java, C++, and modern development frameworks.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of talented engineers works on challenging projects that push the boundaries of what's possible. We believe in fostering talent and providing exceptional opportunities for freshers to launch their careers.
              </p>
            </div>
            <div className="glass rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "2014", label: "Founded" },
                  { value: "500+", label: "Team Members" },
                  { value: "50+", label: "Clients" },
                  { value: "100+", label: "Projects" },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description: "To deliver innovative software solutions that empower businesses and create meaningful career opportunities for aspiring engineers.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                description: "To be a global leader in technology innovation, recognized for excellence, integrity, and our commitment to nurturing talent.",
              },
              {
                icon: Heart,
                title: "Our Values",
                description: "Innovation, Integrity, Excellence, Collaboration, and Continuous Learning form the foundation of everything we do.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 card-hover text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Culture</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We foster an environment where innovation thrives and every voice matters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Work alongside brilliant minds in a supportive team environment.",
              },
              {
                icon: Lightbulb,
                title: "Innovation First",
                description: "Your ideas are valued. We encourage creative problem-solving.",
              },
              {
                icon: Award,
                title: "Recognition",
                description: "Outstanding contributions are celebrated and rewarded.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-subtle rounded-xl p-6 flex items-start gap-4 card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
