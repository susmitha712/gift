import { Link } from "react-router-dom";
import { MapPin, Clock, Banknote, GraduationCap, Code2, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    type: "Full-time",
    location: "Hyderabad",
    experience: "Freshers Welcome",
    salary: "₹4-8 LPA",
    skills: ["Python", "Java", "C++", "Software Development", "Problem-Solving"],
    description: "Join our engineering team to build innovative software solutions using cutting-edge technologies.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "Strong programming skills in Python, Java, or C++",
      "Understanding of software development principles",
      "Excellent problem-solving abilities",
      "Good communication skills",
    ],
  },
];

const CareersPage = () => {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Discover exciting career opportunities at Brainovision. We're looking for talented individuals ready to make an impact.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: GraduationCap, label: "Learning & Growth" },
              { icon: Clock, label: "Flexible Hours" },
              { icon: Banknote, label: "Competitive Pay" },
              { icon: MapPin, label: "Hyderabad Office" },
            ].map((benefit, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 text-center card-hover"
              >
                <benefit.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <span className="text-sm font-medium">{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Open <span className="gradient-text">Positions</span>
          </h2>

          <div className="space-y-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="glass rounded-2xl p-8 card-hover"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4 flex-wrap">
                      <h3 className="text-2xl font-bold">{job.title}</h3>
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                        {job.type}
                      </span>
                    </div>

                    <p className="text-muted-foreground">{job.description}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-primary" />
                        {job.experience}
                      </div>
                      <div className="flex items-center gap-2">
                        <Banknote className="h-4 w-4 text-primary" />
                        {job.salary}
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg bg-secondary text-secondary-foreground text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Requirements */}
                    <div className="pt-4 border-t border-white/10">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Code2 className="h-5 w-5 text-primary" />
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:flex-shrink-0">
                    <Link to="/apply">
                      <Button variant="hero" size="lg" className="group w-full lg:w-auto">
                        Apply Now
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass-strong rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Don't See a Perfect Fit?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareersPage;
