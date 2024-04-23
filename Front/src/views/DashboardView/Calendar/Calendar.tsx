import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calendario = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="lg:ml-96 mt-52 mx-6 lg:mx-32 lg:mt-32 ">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default Calendario;
