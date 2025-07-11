import { tv } from "tailwind-variants";

interface Props {
  value: string;
  iconPosition?: "left" | "right";
  icon_size: number;
  Icon: React.ElementType;
  color?: "red" | "blue";
}

const button = tv({
  base: "inline-flex gap-2 items-center cursor-pointer text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition transform duration-200 ease-in-out hover:scale-90 hover:shadow-lg focus:outline-none focus:ring-4",
  variants: {
    color: {
      red: "bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-red-300 dark:focus:ring-red-800",
      blue: "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800",
    },
  },
  defaultVariants: {
    color: "red",
  },
});
function ButtonWithIcon({ value, iconPosition, icon_size,color, Icon }: Props) {
  return (
    <button type="button" className={button({ color })}>
      {iconPosition === "left" && Icon && <Icon size={icon_size} />}
      <span>{value}</span>
      {iconPosition === "right" && Icon && <Icon size={icon_size} />}
    </button>
  );
}

export default ButtonWithIcon;
