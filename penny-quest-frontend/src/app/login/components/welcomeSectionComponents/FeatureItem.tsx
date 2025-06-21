interface FeatureItemProps {
  icon: string;
  text: string;
}

export default function FeatureItem({ icon, text }: FeatureItemProps) {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
        <span className="text-sm">{icon}</span>
      </div>
      <span>{text}</span>
    </div>
  );
}