import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Terminal, Copy, Check } from "lucide-react";

const codeExamples = [
  {
    id: "react-component",
    title: "React Component",
    language: "TypeScript",
    code: `interface UserProps {
  name: string;
  role: string;
  avatar?: string;
}

const UserCard: React.FC<UserProps> = ({ 
  name, 
  role, 
  avatar 
}) => {
  return (
    <div className="card">
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};`,
    tags: ["React", "TypeScript", "UI Components"]
  },
  {
    id: "api-endpoint",
    title: "Express API",
    language: "Node.js",
    code: `app.post('/api/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    
    const user = await User.create({
      name,
      email,
      createdAt: new Date()
    });
    
    res.status(201).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});`,
    tags: ["Node.js", "Express", "API Design"]
  },
  {
    id: "database-query",
    title: "Database Operations",
    language: "SQL",
    code: `SELECT 
  u.id,
  u.name,
  u.email,
  COUNT(p.id) as project_count,
  AVG(p.rating) as avg_rating
FROM users u
LEFT JOIN projects p ON u.id = p.user_id
WHERE u.active = true
GROUP BY u.id, u.name, u.email
HAVING COUNT(p.id) > 0
ORDER BY avg_rating DESC;`,
    tags: ["PostgreSQL", "Data Analysis", "Performance"]
  }
];

export default function CodeShowcase() {
  const [activeExample, setActiveExample] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeExamples[activeExample].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getLanguageColor = (language: string) => {
    switch (language) {
      case "TypeScript": return "text-blue-400 bg-blue-400/20";
      case "Node.js": return "text-green-400 bg-green-400/20";
      case "SQL": return "text-purple-400 bg-purple-400/20";
      default: return "text-accent-blue bg-accent-blue/20";
    }
  };

  return (
    <section className="py-20" data-testid="code-showcase-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4" data-testid="code-showcase-title">
            Code Showcase
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto" data-testid="code-showcase-subtitle">
            Clean, efficient, and well-documented code examples from my projects
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Code Examples Selector */}
          <div className="space-y-4">
            {codeExamples.map((example, index) => (
              <Button
                key={example.id}
                variant={activeExample === index ? "default" : "outline"}
                className={`w-full justify-start p-4 h-auto ${
                  activeExample === index 
                    ? "btn-gradient text-white" 
                    : "bg-dark-700/50 border-dark-600 text-slate-300 hover:border-accent-blue/50"
                }`}
                onClick={() => setActiveExample(index)}
                data-testid={`code-example-button-${example.id}`}
              >
                <div className="text-left">
                  <div className="font-semibold">{example.title}</div>
                  <div className="text-xs opacity-80">{example.language}</div>
                </div>
              </Button>
            ))}
          </div>

          {/* Code Display */}
          <div className="lg:col-span-2">
            <Card className="bg-dark-800/50 border-dark-600" data-testid="code-display-card">
              <CardContent className="p-0">
                <div className="flex items-center justify-between p-4 border-b border-dark-600">
                  <div className="flex items-center space-x-3">
                    <Terminal className="w-5 h-5 text-accent-blue" />
                    <span className="text-white font-semibold">
                      {codeExamples[activeExample].title}
                    </span>
                    <Badge 
                      variant="secondary" 
                      className={`${getLanguageColor(codeExamples[activeExample].language)} border-0`}
                    >
                      {codeExamples[activeExample].language}
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopy}
                    className="text-slate-400 hover:text-white"
                    data-testid="copy-code-button"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                
                <div className="p-6">
                  <pre className="text-sm text-slate-300 overflow-x-auto">
                    <code data-testid="code-content">
                      {codeExamples[activeExample].code}
                    </code>
                  </pre>
                </div>
                
                <div className="p-4 border-t border-dark-600">
                  <div className="flex flex-wrap gap-2">
                    {codeExamples[activeExample].tags.map((tag) => (
                      <Badge 
                        key={tag}
                        variant="outline" 
                        className="text-xs border-dark-500 text-slate-400"
                        data-testid={`code-tag-${tag.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}