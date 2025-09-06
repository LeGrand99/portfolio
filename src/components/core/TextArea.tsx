
interface Props {
  value:string;
  rows: number;
  placeholder: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

function TextArea({value, rows, placeholder,onChange }: Props) {
  return (
    <textarea
      value={value}
      rows={rows}
      onChange={(e) => onChange(e.target.value)}
      className="block p-2.5 w-full  mb-4  text-sm text-gray-800 rounded-lg border border-gray-300 focus:outline-2 dark:outline-none outline-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
      placeholder={placeholder}
      required
    ></textarea>
  );
}

export default TextArea;
