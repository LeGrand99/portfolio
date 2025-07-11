
interface Props {
  rows: number;
  placeholder: string;
}

function TextArea({ rows, placeholder }: Props) {
  return (
    <textarea
      rows={rows}
      className="block p-2.5 w-full  mb-4  text-sm text-gray-800 rounded-lg border border-gray-300 focus:outline-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={placeholder}
    ></textarea>
  );
}

export default TextArea;
