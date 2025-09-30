import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Summer Intern Analyst",
    company: "Wells Fargo",
    location: "Hyderabad, Telangana, India · On-site",
    period: "Jun 2025 - Aug 2025 · 3 mos",
    type: "Full-time",
    description: [
      "Line of Business: Wealth & Investment Management (WIM)",
      "Sub-LOB: Investment Solution Banking Lending and Trust (ISBLT)",
      "*Received PPO (Pre Placement Offer) for exemplary performance.",
    ],
    logo: "🏦",
  },
  {
    title: "Quantitative Researcher (Long Term Equity)",
    company: "2Cents Capital",
    location: "Dubai, United Arab Emirates · Remote",
    period: "Feb 2025 - May 2025 · 4 mos",
    type: "Internship",
    description: [
      "Built a multi-factor ML-driven quant framework with advanced screening and optimization, outperforming the S&P 500 by 4% in live trading.",
      "Designed a multi-factor quant model using 100+ factors and 10+ ML models to dynamically weight factors, and optimize equity portfolios.",
      "Executed two stage fundamentals-based stock screening with advanced portfolio optimization (HRP, NCO, MVO), targeting $1.5M in AUM.",
      "Backtested on 20+ years of MSCI US Value Index data and deployed in live trading, outperforming the S&P 500 by 4% during the test period.",
    ],
    skills: ["Analytical Skills", "Python (Programming Language)", "+3 skills"],
    logo: "💰",
  },
  {
    title: "Summer Intern (Software/IT)",
    company: "OMIFCO S.A.O.C",
    location: "Sur, Ash Sharqiyah South Governorate, Oman · On-site",
    period: "May 2024 - Jun 2024 · 2 mos",
    type: "Internship",
    description: [
      "Enhanced the deployment of a QR Code receptor for direct database entry retrieval, minimizing manual errors by 10%.",
      "Engineered DB Links within consecutive systems, aiming to boost database fetch speed by 12-15% during peak-loads.",
      "Understood interdepartmental workflows between Finance, IT, HRMS, & Production in its $300M+ turnover operations.",
      "Optimized the firm's Inventory Management System using Oracle SQL Developer, improving query performance by 30%.",
    ],
    skills: ["Analytical Skills", "Communication", "+5 skills"],
    logo: "🏭",
  },
  {
    title: "Product Intern",
    company: "Precap",
    location: "Remote",
    period: "Dec 2023 - May 2024 · 6 mos",
    type: "Internship",
    description: [
      "Designed, developed, and implemented responsive user interfaces with React, resulting in an improvement in client satisfaction and SEO scores.",
      "Conceptualized and created engaging carousels and informative posts for Content as a Service (CaaS) offerings, driving 10,000+ impressions and boosting client acquisition.",
    ],
    skills: ["Analytical Skills", "Front-End Development", "+8 skills"],
    logo: "📱",
  },
  {
    title: "Business Development Associate",
    company: "Venture Labs",
    location: "Remote",
    period: "Aug 2023 - Oct 2023 · 3 mos",
    type: "Internship",
    description: [
      "Collaborated with the Graphic Design & Marketing Team to develop interactive and informative posts for the partner Apna Funds, supporting Content as a Service (CaaS) offerings.",
    ],
    skills: ["Marketing", "Analytical Skills", "+10 skills"],
    logo: "🚀",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-hover transition-all duration-300 bg-card">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-2xl">
                    {exp.logo}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-medium text-muted-foreground">
                        {exp.company} · {exp.type}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-foreground leading-relaxed">
                        {item.startsWith("*") ? (
                          <span className="font-medium text-accent">{item}</span>
                        ) : item.startsWith("–") || item.startsWith("-") ? (
                          <span className="flex gap-2">
                            <span className="text-accent">•</span>
                            <span>{item.replace(/^[–-]\s*/, "")}</span>
                          </span>
                        ) : (
                          item
                        )}
                      </li>
                    ))}
                  </ul>

                  {exp.skills && (
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
