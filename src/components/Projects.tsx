import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const financeProjects = [
  {
    title: "Intrinsic Value Analysis of Berkshire Hathaway (DCF Model)",
    period: "Jun 2025 - Jun 2025",
    description: [
      "Developed a 5-year DCF model for Berkshire Hathaway ($365B revenue) to derive an intrinsic value of ~$402/share, identifying a ~12.6% potential upside.",
      "Constructed a driver-based forecast using segment-level revenue and margin assumptions to project a bottom-up Unlevered FCF (comparable to EBIAT to FCF).",
      "Engineered a dynamic scenario analysis (Bull/Base/Bear) by flexing key drivers (margins, WACC, growth rate) to quantify the impact of the company's valuation.",
      "Executed a detailed WACC analysis via CAPM and a full EV-to-Equity valuation bridge, incorporating mid-year discounting and a specific beta (0.68) to reflect Berkshire's unique risk profile.",
    ],
    icon: "📊",
  },
  {
    title: "Credit Risk Model for Issued Loans",
    period: "Dec 2024 - Dec 2024",
    description: [
      "Classified loans as good or bad using the 'good_bad' target variable, improving model performance & accuracy.",
      "Removed columns with over 50% missing data, ensuring better data integrity and enhancing model quality.",
      "Applied preprocessing techniques to clean & transform categorical variables, optimizing data for the models",
    ],
    icon: "💳",
  },
  {
    title: "Equity News Research Tool",
    period: "Dec 2024 - Dec 2024",
    description: [
      "Built a financial news research tool using LangChain and FAISS, enabling precise extraction of market insights.",
      "Integrated OpenAI embeddings for query handling, improving the relevance of stock market data retrieval.",
      "Developed a Streamlit-based app to process URLs and analyze financial content efficiently.",
    ],
    icon: "📰",
  },
  {
    title: "Sales Insight Data Analysis",
    period: "Jul 2024 - Jul 2024",
    description: [
      "Designed SQL queries for customer, transaction analysis, enhancing insights across Chennai and other markets.",
      "Utilized Power BI to visualize revenue trends, optimizing business strategies and decision-making processes.",
      "Implemented normalized currency conversions for accurate revenue analysis across multi-currency & diverse markets.",
    ],
    icon: "📈",
  },
];

const technicalProjects = [
  {
    title: "NumicubeAI (AI-Powered Intelligent Calculator similar to new iPad Calculator)",
    period: "Jun 2024 - Jun 2024",
    description: [
      "Designed an AI-driven calculator inspired by the iPad, integrating Gemini API for natural language queries and complex computations.",
      "Developed a responsive React interface with HTML Canvas for real-time data visualization and intuitive usability.",
      "Created backend performance with Python and Node.js to solve any complex problems just by creating a drawing.",
    ],
    skills: ["React.js", "Node.js", "Python", "HTML Canvas", "Gemini API"],
    github: "#",
    icon: "🧮",
  },
  {
    title: "Smartory (IMS)",
    period: "May 2024 - May 2024",
    description: [
      "Engineered a inventory management system that facilitates real-time tracking and automates stock updates.",
      "Implemented supplier management features, purchase order tracking, and customizable reporting to enhance operational efficiency. Additionally, integrated QR code entry technology for streamlined inventory management.",
    ],
    skills: ["CSS", "JavaScript", "Oracle Database", "Express.js", "HTML", "Node.js", "Embedded JavaScript (EJS)", "Oracle SQL Developer"],
    github: "#",
    images: 2,
    icon: "📦",
  },
  {
    title: "SixSplit (Streamline Image Processing & PDF Creation)",
    period: "Feb 2024 - Feb 2024",
    description: [
      "Architected a full-stack web application with a React frontend and Node.js/Express backend, leveraging Multer for file handling & Sharp for image processing, which increased my image processing efficiency by more than 50%.",
      "Developed a PDF generation system using PDFKit, integrating Axios for seamless communication between the client and server, reducing document preparation time and enhancing the overall user experience.",
    ],
    skills: ["Axios", "CSS", "Sharp", "Express.js", "PDFKit", "Multer", "Node.js", "React.js"],
    github: "#",
    icon: "✂️",
  },
  {
    title: "KhetiMitr",
    period: "Nov 2023 - Nov 2023",
    description: [
      "Developed a comprehensive platform addressing various agricultural challenges for 1,000+ farmers and clients, enhancing crop management, pest control, soil health, irrigation, and marketing.",
      "Delivers four core offerings: Advisory Services, Rental Service, an integrated Marketplace, and Crop Disease Detection via Imagery, potentially increasing agricultural productivity up to 100x.",
    ],
    skills: ["CSS", "TensorFlow", "JavaScript", "Express.js", "Convolutional Neural Networks (CNN)", "HTML", "MongoDB", "Node.js", "React.js"],
    github: "#",
    images: 2,
    icon: "🌾",
  },
  {
    title: "Modern UI/UX flow Portfolio",
    period: "Oct 2023 - Oct 2023",
    description: [
      "Constructed my Portfolio Website showcasing my journey, utilizing foundational technologies such as GSAP and Locomotive.js for enhanced interactivity and user experience, which is a modern UI-based website.",
    ],
    skills: ["CSS", "JavaScript", "Locomotive.js", "HTML", "GreenSock Animation Platform (GSAP)", "Adobe Photoshop"],
    github: "#",
    liveLink: "#",
    icon: "💼",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Projects
        </h2>

        <Tabs defaultValue="finance" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="finance" className="text-base">Finance Projects</TabsTrigger>
            <TabsTrigger value="technical" className="text-base">Technical Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="finance" className="space-y-6">
            {financeProjects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-hover transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-2xl">
                      {project.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.period}</p>
                    
                    <ul className="space-y-2">
                      {project.description.map((item, i) => (
                        <li key={i} className="text-foreground leading-relaxed flex gap-2">
                          <span className="text-accent">•</span>
                          <span>{item.replace(/^[–-]\s*/, "")}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="technical" className="space-y-6">
            {technicalProjects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-hover transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-2xl">
                      {project.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        {project.github && (
                          <Button size="sm" variant="outline">
                            <Github className="h-4 w-4 mr-1" />
                            GitHub
                          </Button>
                        )}
                        {project.liveLink && (
                          <Button size="sm" variant="outline">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Live
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">{project.period}</p>
                    
                    <ul className="space-y-2 mb-4">
                      {project.description.map((item, i) => (
                        <li key={i} className="text-foreground leading-relaxed flex gap-2">
                          <span className="text-accent">•</span>
                          <span>{item.replace(/^[–-]\s*/, "")}</span>
                        </li>
                      ))}
                    </ul>

                    {project.skills && (
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, i) => (
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
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
