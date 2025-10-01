import quantTradingImg from "@/data/blog-photos/quant-research.png";
import wellsFargoImg from "@/data/blog-photos/wellsfargo-vg.jpeg";
import amazonMLImg from "@/data/blog-photos/amazon-ml.png";
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  date: string;
  category: string;
  readTime: string;
  content: React.ReactNode;
}

export const blogs: BlogPost[] = [
  {
    id: "quant-trading-journey",
    title: "My Journey into Quantitative Research Domain",
    excerpt: "How I built a multi-factor ML-driven quant framework that outperformed the S&P 500 by 4% during my internship at 2Cents Capital.",
    thumbnail: quantTradingImg,
    date: "May 15, 2025",
    category: "Finance",
    readTime: "8 min read",
    content: (
      <>
        <h2 className="text-3xl font-display font-bold mb-4">Building a Quantitative Trading Framework</h2>
        <p className="mb-6">
          During my internship at 2Cents Capital in Dubai, I had the incredible opportunity to design and implement
          a sophisticated quantitative trading framework from scratch. This experience taught me invaluable lessons
          about systematic trading, risk management, and the practical application of machine learning in finance.
        </p>
        
        <h3 className="text-2xl font-semibold mb-3 mt-8">The Challenge</h3>
        <p className="mb-6">
          The hedge fund wanted to develop a long-term equity strategy that could consistently outperform the market
          while maintaining reasonable risk levels. The challenge was to create a multi-factor model that could
          identify undervalued stocks and optimize portfolio allocation.
        </p>
        
        <h3 className="text-2xl font-semibold mb-3 mt-8">The Approach</h3>
        <p className="mb-4">I developed a comprehensive framework with the following components:</p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>100+ fundamental and technical factors for stock screening</li>
          <li>10+ machine learning models for factor weighting</li>
          <li>Advanced portfolio optimization using HRP, NCO, and MVO</li>
          <li>Backtesting on 20+ years of MSCI US Value Index data</li>
        </ul>
        
        <h3 className="text-2xl font-semibold mb-3 mt-8">The Results</h3>
        <p className="mb-6">
          The framework was deployed in live trading with a target AUM of $1.5M. During the test period,
          it outperformed the S&P 500 by 4%, validating the quantitative approach and demonstrating the
          power of systematic factor-based investing.
        </p>
        
        <p className="mb-6">
          This experience solidified my passion for quantitative finance and the intersection of technology
          and financial markets. It showed me that with the right tools, rigorous testing, and disciplined
          execution, it's possible to generate alpha even in efficient markets.
        </p>
      </>
    ),
  },
  {
    id: "wells-fargo-experience",
    title: "Summer at Wells Fargo: Building Developer Tools",
    excerpt: "Reflecting on my internship at Wells Fargo where I developed migration tools that saved significant developer time.",
    thumbnail: wellsFargoImg,
    date: "August 20, 2025",
    category: "Technology",
    readTime: "6 min read",
    content: (
      <>
        <h2 className="text-3xl font-display font-bold mb-4">Developer Tools at Scale</h2>
        <p className="mb-6">
          My summer at Wells Fargo in the Wealth & Investment Management division was an eye-opening
          experience into enterprise software development at scale. Working in the Investment Solution
          Banking Lending and Trust (ISBLT) sub-LOB, I got to tackle real-world challenges that impact
          thousands of developers.
        </p>
        
        <h3 className="text-2xl font-semibold mb-3 mt-8">The Project</h3>
        <p className="mb-6">
          I was tasked with developing automation tools to streamline the migration process for legacy
          systems. The challenge was to reduce manual effort and minimize errors during complex migrations
          that involved multiple teams and systems.
        </p>
        
        <h3 className="text-2xl font-semibold mb-3 mt-8">Key Learnings</h3>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Working with enterprise-scale codebases and complex architectures</li>
          <li>Importance of thorough testing and documentation in production systems</li>
          <li>Collaboration across teams and understanding different perspectives</li>
          <li>Security-first mindset in financial services</li>
        </ul>
        
        <p className="mb-6">
          The experience culminated in receiving a Pre-Placement Offer (PPO), which was incredibly
          rewarding and validated the impact of the work I delivered during the internship.
        </p>
      </>
    ),
  },
  {
    id: "amazon-ml-summer-school",
    title: "Amazon ML Summer School: A Transformative Experience",
    excerpt: "Selected from 80,000 candidates to join Amazon's ML Summer School. Here's what I learned about machine learning at scale.",
    thumbnail: amazonMLImg,
    date: "September 10, 2025",
    category: "AI & ML",
    readTime: "7 min read",
    content: (
      <>
        <h2 className="text-3xl font-display font-bold mb-4">Machine Learning at Amazon Scale</h2>
        <p className="mb-6">
          Being selected for Amazon ML Summer School 2025 (top 3% of 80,000 applicants) was a tremendous
          honor. The program provided deep insights into how Amazon approaches machine learning problems
          at massive scale.
        </p>
        
        <h3 className="text-2xl font-semibold mb-3 mt-8">Program Highlights</h3>
        <p className="mb-4">The curriculum covered cutting-edge ML topics:</p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Deep learning architectures for recommendation systems</li>
          <li>Scalable ML infrastructure and distributed training</li>
          <li>Production ML systems and MLOps best practices</li>
          <li>Real-world applications of reinforcement learning</li>
        </ul>
        
        <h3 className="text-2xl font-semibold mb-3 mt-8">Key Takeaways</h3>
        <p className="mb-6">
          The most valuable lesson was understanding that successful ML in production is 10% modeling
          and 90% infrastructure, data quality, monitoring, and maintenance. Amazon's scale provided
          unique insights into these challenges that you simply can't get from textbooks.
        </p>
      </>
    ),
  },
];
