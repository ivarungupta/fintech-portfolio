import { Card } from "@/components/ui/card";
import { Award, Trophy, Target } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const achievements = [
  {
    title: "Amazon ML Summer School 2025",
    issuer: "Amazon",
    date: "Aug 2025",
    description: "Selected for Amazon ML Summer School 2025 program conducted by Amazon every year. Approximately 3,000 qualify for the same out of 80,000 candidates (~top 3%).",
    icon: "🏆",
  },
  {
    title: "HackOn with Amazon - Season 5 (2025)",
    issuer: "Amazon",
    date: "Jul 2025",
    description: "Top 25 Fastest Coders out of 52,632 participants PAN India",
    icon: "⚡",
  },
  {
    title: "Walmart Sparkplug SI 2025",
    issuer: "Walmart",
    date: "Oct 2024",
    description: "Finalist out of 19,698 participants PAN India",
    icon: "✨",
  },
];

const certifications = [
  {
    title: "Goldman Sachs Virtual Insight Series",
    issuer: "Goldman Sachs",
    date: "May 2025",
    logo: "🏦",
  },
  {
    title: "McKinsey Forward Program",
    issuer: "McKinsey & Company",
    date: "May 2025",
    logo: "💼",
  },
];

const testScores = [
  {
    title: "JEE (Joint Entrance Examination) - 2022",
    score: "Score Cleared",
    date: "Aug 2022",
  },
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
    logo: "💻",
  },
  {
    title: "Student Coordinator",
    organization: "Smart India Hackathon",
    period: "",
    category: "Education",
    description: "Smart India Hackathon is a premier nationwide initiative organized by Government Of India (MHRD) designed to engage students in solving some of the most pressing challenges faced in everyday life scenarios.",
    logo: "💡",
  },
  {
    title: "Director (Design)",
    organization: "Entrepreneurship Development Cell, BIT Mesra",
    period: "Jan 2023 - Present · 2 yrs 9 mos",
    category: "Economic Empowerment",
    logo: "🎨",
  },
  {
    title: "Public Relations Coordinator",
    organization: "IET On Campus - BIT Mesra",
    period: "Jul 2023 - Present · 2 yrs 3 mos",
    category: "Science and Technology",
    logo: "📢",
  },
  {
    title: "Document Coordinator",
    organization: "UNESQUO BIT Mesra",
    period: "Oct 2023 - Present · 2 yrs",
    category: "Education",
    logo: "📄",
  },
  {
    title: "Student Volunteer",
    organization: "NSS, BIT Mesra",
    period: "Nov 2022 - Present · 2 yrs 11 mos",
    category: "Human Rights",
    logo: "🤝",
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
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 hover:shadow-hover transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-2xl">
                      {achievement.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      Issued by {achievement.issuer} · {achievement.date}
                    </p>
                    <p className="text-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="certifications" className="space-y-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 hover:shadow-hover transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-2xl">
                      {cert.logo}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      {cert.issuer} · Issued {cert.date}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="tests" className="space-y-6">
            {testScores.map((test, index) => (
              <Card key={index} className="p-6 hover:shadow-hover transition-all duration-300">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {test.title}
                </h3>
                <p className="text-lg font-medium text-accent mb-2">
                  Score: {test.score} · {test.date}
                </p>
                {test.institution && (
                  <p className="text-sm text-muted-foreground">
                    {test.institution}
                  </p>
                )}
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="volunteering" className="space-y-6">
            {volunteering.map((vol, index) => (
              <Card key={index} className="p-6 hover:shadow-hover transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-2xl">
                      {vol.logo}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {vol.title}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {vol.organization}
                    </p>
                    {vol.period && (
                      <p className="text-sm text-muted-foreground mb-2">{vol.period}</p>
                    )}
                    <p className="text-xs text-muted-foreground mb-3">{vol.category}</p>
                    {vol.description && (
                      typeof vol.description === 'string' ? (
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
                      )
                    )}
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
