import Select from "../Components/Select";


import React from 'react'
import { DataContext } from '../Context/MainContext'

export default function Neri() {

  const context = useContext(DataContext)

import Select from "../Components/Select";

  return (
    <Select
      options={[
        { key: "ff", value: "kkjdkj" },
        { key: "ff", value: "kkjdkj" },
        { key: "ff", value: "kkjdkj" },
        { key: "ff", value: "kkjdkj" },
      ]}
    />
  );

}
