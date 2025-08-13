import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Activity, Zap, Target, TrendingUp, Clock, Code } from "lucide-react";

interface Metric {
  id: string;
  label: string;
  value: number;
  maxValue: number;
  icon: JSX.Element;
  color: string;
  trend: "up" | "down" | "stable";
  description: string;
}

const metrics: Metric[] = [
  {
    id: "code-quality",
    label: "Code Quality",
    value: 96,
    maxValue: 100,
    icon: <Code className="w-5 h-5" />,
    color: "text-green-400",
    trend: "up",
    description: "Clean, maintainable, well-documented code"
  },
  {
    id: "performance",
    label: "Performance Optimization",
    value: 94,
    maxValue: 100,
    icon: <Zap className="w-5 h-5" />,
    color: "text-yellow-400",
    trend: "up",
    description: "Fast loading times and efficient algorithms"
  },
  {
    id: "problem-solving",
    label: "Problem Solving",
    value: 98,
    maxValue: 100,
    icon: <Target className="w-5 h-5" />,
    color: "text-blue-400",
    trend: "up",
    description: "Complex system design and debugging skills"
  },
  {
    id: "productivity",
    label: "Development Productivity",
    value: 92,
    maxValue: 100,
    icon: <TrendingUp className="w-5 h-5" />,
    color: "text-purple-400",
    trend: "stable",
    description: "Efficient delivery of high-quality features"
  },
  {
    id: "response-time",
    label: "Issue Response Time",
    value: 89,
    maxValue: 100,
    icon: <Clock className="w-5 h-5" />,
    color: "text-cyan-400",
    trend: "up",
    description: "Quick identification and resolution of bugs"
  },
  {
    id: "innovation",
    label: "Technical Innovation",
    value: 95,
    maxValue: 100,
    icon: <Activity className="w-5 h-5" />,
    color: "text-orange-400",
    trend: "up",
    description: "Implementing cutting-edge solutions"
  }
];

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case "up": return "↗️";
    case "down": return "↘️";
    case "stable": return "➡️";
    default: return "➡️";
  }
};

const getProgressColor = (value: number) => {
  if (value >= 95) return "bg-green-500";
  if (value >= 90) return "bg-blue-500";
  if (value >= 85) return "bg-yellow-500";
  if (value >= 80) return "bg-orange-500";
  return "bg-red-500";
};

export default function TechMetrics() {
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("tech-metrics");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    metrics.forEach((metric) => {
      let currentValue = 0;
      const increment = metric.value / 50;
      
      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= metric.value) {
          currentValue = metric.value;
          clearInterval(interval);
        }
        setAnimatedValues(prev => ({
          ...prev,
          [metric.id]: Math.round(currentValue)
        }));
      }, 30);
    });
  }, [isVisible]);

  return (
    <section id="tech-metrics" className="py-20" data-testid="tech-metrics-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4" data-testid="metrics-title">
            Technical Performance Metrics
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto" data-testid="metrics-subtitle">
            Real-time assessment of technical capabilities and development efficiency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric) => (
            <Card 
              key={metric.id}
              className="bg-dark-700/50 border-dark-600 hover:border-accent-blue/50 transition-all duration-300 hover:transform hover:-translate-y-2 group"
              data-testid={`metric-card-${metric.id}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg bg-dark-600 flex items-center justify-center ${metric.color}`}>
                      {metric.icon}
                    </div>
                    <CardTitle className="text-lg text-white">{metric.label}</CardTitle>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="bg-dark-600 border-0 text-xs"
                  >
                    {getTrendIcon(metric.trend)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-white">
                      {animatedValues[metric.id] || 0}%
                    </span>
                    <span className="text-slate-400 text-sm">
                      /{metric.maxValue}%
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <Progress 
                      value={animatedValues[metric.id] || 0} 
                      className="h-2 bg-dark-600"
                    />
                    <div 
                      className={`h-2 rounded-full transition-all duration-1000 ease-out ${getProgressColor(metric.value)}`}
                      style={{ 
                        width: `${animatedValues[metric.id] || 0}%` 
                      }}
                    ></div>
                  </div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Performance Summary */}
        <div className="mt-16">
          <Card className="bg-dark-700/30 border-dark-600" data-testid="performance-summary">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-semibold text-white">Overall Technical Performance</h3>
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">
                      {Math.round(metrics.reduce((acc, metric) => acc + metric.value, 0) / metrics.length)}%
                    </div>
                    <div className="text-slate-400 text-sm">Average Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">
                      {metrics.filter(m => m.trend === "up").length}
                    </div>
                    <div className="text-slate-400 text-sm">Improving Metrics</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent-blue mb-2">
                      {metrics.filter(m => m.value >= 90).length}
                    </div>
                    <div className="text-slate-400 text-sm">Excellence Areas</div>
                  </div>
                </div>
                <p className="text-slate-300 max-w-2xl mx-auto">
                  Consistently delivering high-quality software solutions with a focus on performance, 
                  maintainability, and innovative problem-solving approaches.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}