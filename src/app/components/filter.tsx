import { useState } from "react";
import Checkbox from "./checkbox";

interface FilterData {
    frontendChecked: boolean;
    backendChecked: boolean;
    toolsChecked: boolean;
  }

  interface FilterProps {
    onChange: (data: FilterData) => void;
  }


export default function Filter({ onChange }: FilterProps) {
    const [frontendChecked, setFrontendChecked] = useState(true);
    const [backendChecked, setBackendChecked] = useState(true);
    const [toolsChecked, setToolsChecked] = useState(true);
  
    const handleFrontendChange = (checked: boolean) => {
      setFrontendChecked(checked);
      onChange({ frontendChecked: checked, backendChecked, toolsChecked });
    };
  
    const handleBackendChange = (checked: boolean) => {
      setBackendChecked(checked);
      onChange({ frontendChecked, backendChecked: checked, toolsChecked });
    };
  
    const handleToolsChange = (checked: boolean) => {
      setToolsChecked(checked);
      onChange({ frontendChecked, backendChecked, toolsChecked: checked });
    };

  return (
      <div className="flex justify-center my-3 dark:border-gray-700 ">
        <Checkbox
          checked={frontendChecked}
          onChange={handleFrontendChange}
          label="FrontEnd"
          id="FrontEnd"
        />

        <Checkbox
          checked={backendChecked}
          onChange={handleBackendChange}
          label="BackEnd"
          id="BackEnd"
        />

        <Checkbox
          checked={toolsChecked}
          onChange={handleToolsChange}
          label="Tools"
          id="Tools"
        />
      </div>
  );
}
