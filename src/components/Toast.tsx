import { useEffect } from "react";

interface Props {
  message: string;
  show: boolean;
  type?: "success" | "error";
  onClose: () => void;
}
function Toast({ message, show, type = "error", onClose }: Props) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // disparaît après 3s
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);
  if (!show) return null;

  // Couleurs selon le type et mode clair/sombre
  const baseClasses = "px-4 py-2 rounded-lg shadow-lg animate-fade-in text-center text-white mb-2";
  const colorClasses = type === "success" ? "bg-green-600" : "bg-red-500";
  return (
    <div className="w-[60%] fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
      <div className={`${baseClasses} ${colorClasses}`}>{message}</div>
    </div>
  );
}

export default Toast;
