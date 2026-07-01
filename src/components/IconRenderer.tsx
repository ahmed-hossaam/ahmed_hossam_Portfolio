import {
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiGithub,
  SiVitest,
} from "react-icons/si";
import { Code2 } from "lucide-react";

interface IconRendererProps {
  name: string;
  className?: string;
  size?: number | string;
}

export function IconRenderer({ name, className, size = 24 }: IconRendererProps) {
  const iconMap: Record<string, React.ElementType> = {
    FaReact,
    FaNode,
    FaHtml5,
    FaCss3Alt,
    SiJavascript,
    SiTailwindcss,
    SiBootstrap,
    SiLaravel,
    SiPhp,
    SiMysql,
    SiGithub,
    SiVitest,
  };

  const IconComponent = iconMap[name] || Code2;

  return <IconComponent className={className} size={size} />;
}
