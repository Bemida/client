import Select from "../Components/Select";

function Neri() {
  // options, placeholder, style, name, onChange
  return (
    <Select
      options={[
        { key: "בחר מספר ידיות" },
        { key: "one", value: "1" },
        { key: "two", value: "2" },
        { key: "three", value: "3" },
      ]}
    />
  );
}

export default Neri;
