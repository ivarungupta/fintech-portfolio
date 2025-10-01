import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Optional: import image logos if you have them in /assets
import amazonLogo from "@/assets/amazon-logo.png";
import walmartLogo from "@/assets/walmart-logo.png";
import goldmanLogo from "@/assets/goldman-logo.png";
import mckinseyLogo from "@/assets/mckinsey-logo.jpg";
import acmLogo from "@/assets/acm-logo.png";
import ietLogo from "@/assets/ietindia-logo.png";
import sihLogo from "@/assets/sih-logo.jpg";
import unesquoLogo from "@/assets/unesquo-logo.jpeg";
import nssLogo from "@/assets/nss-logo.png";
import edcLogo from "@/assets/edcbitmesra-logo.jpeg";

const isImageLogo = (logo: unknown): logo is string =>
  typeof logo === "string" &&
  (/^(\/|https?:\/\/)/.test(logo) || /\.(png|jpe?g|svg|webp)$/i.test(logo));

const achievements = [
  {
    title: "Amazon ML Summer School 2025",
    issuer: "Amazon",
    date: "Aug 2025",
    description:
      "Selected for Amazon ML Summer School 2025 program conducted by Amazon every year. Approximately 3,000 qualify for the same out of 80,000 candidates (~top 3%).",
    logo: amazonLogo, // if you prefer an image, set logo to an imported image string
  },
  {
    title: "HackOn with Amazon - Season 5 (2025)",
    issuer: "Amazon",
    date: "Jul 2025",
    description: "Top 25 Fastest Coders out of 52,632 participants PAN India",
    logo: amazonLogo,
  },
  {
    title: "Walmart Sparkplug SI 2025",
    issuer: "Walmart",
    date: "Oct 2024",
    description: "Finalist out of 19,698 participants PAN India",
    logo: walmartLogo,
  },
];

const certifications = [
  {
    title: "Goldman Sachs Virtual Insight Series",
    issuer: "Goldman Sachs",
    date: "May 2025",
    logo: goldmanLogo,
  },
  {
    title: "McKinsey Forward Program",
    issuer: "McKinsey & Company",
    date: "May 2025",
    logo: mckinseyLogo,
  },
];

const testScores = [
  { title: "JEE (Joint Entrance Examination) - 2022", score: "98.48%ile", date: "Aug 2022" },
  {
    title: "CBSE Class XII",
    score: "94.40%",
    date: "Jul 2022",
    institution: "Lal Bahadur Shastri College, Mahaveer Nagar Extension, Kota",
  },
  {
    title: "ICSE Class X",
    score: "90.40%",
    date: "Jul 2020",
    institution: "St. Joseph's College, Allahabad",
  },
];

const volunteering = [
  {
    title: "President",
    organization: "ACM Student's Chapter, BIT Mesra",
    period: "Jan 2024 - Present · 1 yr 9 mos",
    category: "Science and Technology",
    description: [
      "Coordinated the organization of Hack-A-Bit 2024, East India's Largest Hackathon, attracting over 300+ teams nationwide competing for a prize pool of INR 15,000.",
      "Instructed C++ and DSA workshops for over 500+ undergraduate students, and organized LogicLounge, a series of live post-Codeforces contest discussions.",
    ],
    logo: acmLogo,
  },
  {
    title: "Student Coordinator",
    organization: "Smart India Hackathon",
    period: "",
    category: "Education",
    description:
      "Smart India Hackathon is a premier nationwide initiative organized by Government Of India (MHRD) designed to engage students in solving some of the most pressing challenges faced in everyday life scenarios.",
    logo: sihLogo,
  },
  {
    title: "Director (Design)",
    organization: "Entrepreneurship Development Cell, BIT Mesra",
    period: "Jan 2023 - Present · 2 yrs 9 mos",
    category: "Economic Empowerment",
    logo: edcLogo,
  },
  {
    title: "Public Relations Coordinator",
    organization: "IET On Campus - BIT Mesra",
    period: "Jul 2023 - Present · 2 yrs 3 mos",
    category: "Science and Technology",
    logo: ietLogo,
  },
  {
    title: "Document Coordinator",
    organization: "UNESQUO BIT Mesra",
    period: "Oct 2023 - Present · 2 yrs",
    category: "Education",
    logo: unesquoLogo,
  },
  {
    title: "Student Volunteer",
    organization: "NSS, BIT Mesra",
    period: "Nov 2022 - Present · 2 yrs 11 mos",
    category: "Human Rights",
    logo: nssLogo,
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Achievements & More
        </h2>

        <Tabs defaultValue="achievements" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="achievements">Honors & Awards</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="tests">Test Scores</TabsTrigger>
            <TabsTrigger value="volunteering">Volunteering</TabsTrigger>
          </TabsList>

          <TabsContent value="achievements" className="space-y-6">
            {achievements.map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-hover transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-accent/10 flex items-center justify-center">
                      {/* Prefer item.logo if provided as image; else fall back to emoji icon */}
                      {item.logo && isImageLogo(item.logo) ? (
                        <img
                          src={item.logo}
                          alt={`${item.issuer} logo`}
                          className="w-full h-full object-contain"
                        />
                      ) : item.icon ? (
                        <span className="text-2xl">{item.icon}</span>
                      ) : (
                        <span className="text-2xl">🏅</span>
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      Issued by {item.issuer} · {item.date}
                    </p>
                    <p className="text-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="certifications" className="space-y-6">
            {certifications.map((cert, idx) => (
              <Card key={idx} className="p-6 hover:shadow-hover transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-accent/10 flex items-center justify-center">
                      {cert.logo && isImageLogo(cert.logo) ? (
                        <img
                          src={cert.logo}
                          alt={`${cert.issuer} logo`}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="text-2xl">{cert.logo ?? "🎖️"}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1">{cert.title}</h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      {cert.issuer} · Issued {cert.date}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="tests" className="space-y-6">
            {testScores.map((test, idx) => (
              <Card key={idx} className="p-6 hover:shadow-hover transition-all duration-300">
                <h3 className="text-xl font-semibold text-foreground mb-1">{test.title}</h3>
                <p className="text-lg font-medium text-accent mb-2">
                  Score: {test.score} · {test.date}
                </p>
                {test.institution && (
                  <p className="text-sm text-muted-foreground">{test.institution}</p>
                )}
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="volunteering" className="space-y-6">
            {volunteering.map((vol, idx) => (
              <Card key={idx} className="p-6 hover:shadow-hover transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-accent/10 flex items-center justify-center">
                      {vol.logo && isImageLogo(vol.logo) ? (
                        <img
                          src={vol.logo}
                          alt={`${vol.organization} logo`}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="text-2xl">{vol.logo ?? "🧩"}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1">{vol.title}</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-1">{vol.organization}</p>
                    {vol.period && <p className="text-sm text-muted-foreground mb-2">{vol.period}</p>}
                    <p className="text-xs text-muted-foreground mb-3">{vol.category}</p>

                    {vol.description &&
                      (typeof vol.description === "string" ? (
                        <p className="text-foreground leading-relaxed">{vol.description}</p>
                      ) : (
                        <ul className="space-y-2">
                          {vol.description.map((item, i) => (
                            <li key={i} className="text-foreground leading-relaxed flex gap-2">
                              <span className="text-accent">•</span>
                              <span>{item.replace(/^[–-]\s*/, "")}</span>
                            </li>
                          ))}
                        </ul>
                      ))}
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
