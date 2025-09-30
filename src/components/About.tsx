import { Card } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          About Me
        </h2>
        
        <Card className="p-8 md:p-12 shadow-elegant bg-gradient-card">
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Varun Gupta is a B.Tech Computer Science & Engineering student at BIT Mesra with a passion for Finance, 
              Quantitative Research, and Technology.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Varun has a diverse range of experience through multiple internships. As a Summer Analyst at Wells Fargo International, 
              he developed multiple tools, saving developers significant time on migration tasks. He also received a pre-placement 
              offer for his exemplary performance.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              At 2Cents Capital Limited, a Dubai-based hedge fund, he worked as a Quantitative Researcher Intern and built a 
              multi-factor, ML-driven quant framework that outperformed the S&P 500 by 4% in live trading. His work there also 
              involved designing a multi-factor quant model with over 100 factors and 10+ ML models.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              During his internship at OMIFCO, he enhanced a QR code receptor to minimize manual errors by 10% and optimized 
              the firm's Inventory Management System using Oracle SQL Developer, which improved query performance by 30%.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Beyond internships, He also likes to build technical projects & DCF/LBO models. Like he built a DCF model of 
              Berkshire Hathaway, which identified a potential upside of ~12.6% by deriving an intrinsic value of ~$402 per share. 
              He has built financial and data-driven tools like an Equity News Research Tool, Credit Risk Model, and Sales Insight 
              Data Analysis dashboards.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              He also holds the position of President at ACM BIT Mesra, where he conducted C++ & DSA workshops for 500+ students 
              and helped organize Hack-A-Bit 2024, one of East India's largest hackathons.
            </p>
            
            <p className="text-lg leading-relaxed font-medium">
              He is interested in working in Finance-Tech conjuncture, Investment Banking, and Quants roles, as he possess the 
              required skills to excel in these areas. He is confident that his diverse experiences and expertise make him a 
              valuable addition to any team.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
