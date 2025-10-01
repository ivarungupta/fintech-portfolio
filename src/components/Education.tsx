import { Card } from "@/components/ui/card";
// Optional: import institute logos if you have them
import bitMesraLogo from "@/assets/bit-logo.png";
import lbsKotaLogo from "@/assets/lbs-logo.jpg";
import sjcAllahabadLogo from "@/assets/sjc-logo.png";

/** Detects if a logo value is an image path/URL/import */
const isImageLogo = (logo: unknown): logo is string =>
  typeof logo === "string" &&
  (/^(\/|https?:\/\/)/.test(logo) || /\.(png|jpe?g|svg|webp)$/i.test(logo));

const education = [
  {
    institution: "Birla Institute of Technology, Mesra",
    degree: "B.Tech Computer Science & Engineering",
    period: "2022 - 2026",
    grade: "GPA: 3.2/4.00",
    note: "Equivalent to BS/BE in other countries/universities",
    coursework:
      "Data Structures, Object Oriented Programming, Design & Analysis Of Algorithms, Database Management Systems, Operating System, Computer Organization & Architecture, Computer Networks, Formal Language Automata Theory, Data Mining, Natural Language Processing, Software Engineering, Compiler Design, Cryptography & Network Security, Artificial Intelligence & Machine Learning, Cloud Computing, Front-end Development",
    logo: bitMesraLogo, // <-- use this if you want the image instead of emoji
  },
  {
    institution: "Lal Bahadur Shastri College, Mahaveer Nagar Extension, Kota",
    degree: "Intermediate",
    period: "Jul 2020 - Jul 2022",
    grade: "12th & Percentage: 94.40% (GPA : 3.78/4.00)",
    logo: lbsKotaLogo,
  },
  {
    institution: "St. Joseph's College, Allahabad",
    degree: "High School",
    period: "Jul 2015 - Jul 2020",
    grade: "10th & Percentage: 90.40% (GPA : 3.62/4.00)",
    logo: sjcAllahabadLogo,
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Education
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-hover transition-all duration-300"
            >
              <div className="flex gap-4">
                {/* Logo tile: auto image vs emoji */}
                <div className="flex-shrink-0">
                  {isImageLogo(edu.logo) ? (
                    <div className="w-12 h-12 rounded-lg overflow-hidden">
                      <img
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        className="w-full h-full object-contain"
                        // use object-cover if you want edge-to-edge crop
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <span className="text-2xl">{edu.logo ?? "🎓"}</span>
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-lg font-medium text-muted-foreground mb-2">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {edu.period}
                  </p>

                  <div className="space-y-2">
                    <p className="text-foreground font-medium">{edu.grade}</p>
                    {edu.note && (
                      <p className="text-sm text-muted-foreground italic">
                        {edu.note}
                      </p>
                    )}
                    {edu.coursework && (
                      <div className="mt-4">
                        <p className="text-sm font-medium text-foreground mb-2">
                          Coursework:
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {edu.coursework}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
