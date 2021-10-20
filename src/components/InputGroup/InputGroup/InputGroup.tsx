/* eslint-disable no-console */
import React, { useCallback, useState } from "react";

import { Input } from "antd";
import "antd/dist/antd.css";
import "./style.css";

export type InputProps = {
  value: string;
  onChange: (e: string) => void;
};
const InputGroup: React.FC<InputProps> = ({ onChange, value }) => {
  const onSearch = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      onChange(e.currentTarget.value);
    },
    [onChange]
  );
  return (
    <div className="input">
      <Input
        value={value}
        placeholder="Search..."
        size="middle"
        onChange={onSearch}
      />
    </div>
  );
};

export default React.memo(InputGroup);
