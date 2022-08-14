export default ({ className, optioins, defaultValue }) => (
  <select
    defaultValue={defaultValue}
    name=""
    id=""
    className={` rounded-full ${className} border-[1px] px-2`}
  >
    <option value="" selected>
      {defaultValue}
    </option>
    {optioins?.map((value, index) => (
      <option value={value.toLowerCase()} key={`o${index}`}>
        {value}
      </option>
    ))}
  </select>
);
