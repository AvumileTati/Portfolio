import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Terminal } from "lucide-react";

const commands = [
  { command: "npm create vite@latest my-app", output: "✓ Project created successfully!" },
  { command: "cd my-app && npm install", output: "📦 Dependencies installed" },
  { command: "git init && git add .", output: "✓ Repository initialized" },
  { command: "npm run dev", output: "🚀 Development server running on http://localhost:5173" },
  { command: "docker build -t my-app .", output: "🐳 Docker image built successfully" },
  { command: "kubectl apply -f deployment.yaml", output: "☸️ Deployed to Kubernetes cluster" }
];

export default function TerminalAnimation() {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentCommand, setCurrentCommand] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;

    const command = commands[currentCommandIndex];
    if (currentCommand.length < command.command.length) {
      const timer = setTimeout(() => {
        setCurrentCommand(command.command.slice(0, currentCommand.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
      setShowOutput(true);
      
      const timer = setTimeout(() => {
        setCurrentCommand("");
        setShowOutput(false);
        setIsTyping(true);
        setCurrentCommandIndex((prev) => (prev + 1) % commands.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentCommand, currentCommandIndex, isTyping]);

  return (
    <div className="relative">
      <Card className="bg-dark-900/90 border-dark-600 overflow-hidden" data-testid="terminal-card">
        <div className="flex items-center px-4 py-2 bg-dark-800 border-b border-dark-600">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center space-x-2 ml-4">
            <Terminal className="w-4 h-4 text-slate-400" />
            <span className="text-slate-400 text-sm font-mono">avumile@dev:~$</span>
          </div>
        </div>
        <CardContent className="p-4 font-mono text-sm">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-accent-blue">$</span>
              <span className="text-slate-300">{currentCommand}</span>
              <span className="animate-pulse text-accent-cyan">|</span>
            </div>
            {showOutput && (
              <div className="text-green-400 pl-4">
                {commands[currentCommandIndex].output}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}