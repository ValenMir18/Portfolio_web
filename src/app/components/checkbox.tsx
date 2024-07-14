

interface CheckboxItemProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    id: string;
    label: string;
  }

  const Checkbox: React.FC<CheckboxItemProps> = ({ checked, onChange, id, label }) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked);
      };


    return (
    <div className=" flex items-center mr-5">
      <input
        checked={checked}
        onChange={handleInputChange}
        id={id}
        type="checkbox"
        name={id}
        className="w-4 h-4 bg-cyan-700 border-gray-300 rounded "
      ></input>
      <label
        htmlFor="bordered-checkbox-2"
        className="  ms-1 lg:text-sm font-medium text-gray-300 md:text-[20pxz] "
      >
       <label htmlFor={id}>{label}</label>
      </label>
    </div>
  );
}
export default Checkbox;