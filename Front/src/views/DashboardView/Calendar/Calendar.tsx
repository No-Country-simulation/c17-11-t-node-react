import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Appointment {
  date: Date;
  description: string;
}

const Calendario = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handleAppointmentAdd = (description: string) => {
    if (selectedDate) {
      const newAppointment: Appointment = {
        date: selectedDate,
        description: description,
      };
      setAppointments([...appointments, newAppointment]);
    }
  };

  const isAppointmentDate = (date: Date): boolean => {
    return appointments.some((appointment) => {
      return (
        appointment.date.getDate() === date.getDate() &&
        appointment.date.getMonth() === date.getMonth() &&
        appointment.date.getFullYear() === date.getFullYear()
      );
    });
  };

  const getAppointmentDescription = (date: Date): string | undefined => {
    const appointment = appointments.find((appointment) => {
      return (
        appointment.date.getDate() === date.getDate() &&
        appointment.date.getMonth() === date.getMonth() &&
        appointment.date.getFullYear() === date.getFullYear()
      );
    });
    return appointment ? appointment.description : undefined;
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      <h3 className="lg:text-4xl lg:mt-20 mt-2 text-2xl uppercase font-semibold  text-center">
        Tus citas agendadas
      </h3>
      <div className="lg:ml-72 ml-2  mt-10 mx-4 mb-10  lg:mt-32 lg:flex">
        <>
          {isLoading ? (
            <>
              <div className="text-center ">
                <Spinner color="warning" label="Cargando" />
              </div>
            </>
          ) : (
            <Calendar
              onChange={onChange}
              value={value}
              tileContent={({ date, view }) => {
                if (view === "month" && isAppointmentDate(date)) {
                  return (
                    <span className="bg-[#F97D05] rounded-full block"></span>
                  );
                }
              }}
              onClickDay={handleDateClick}
            />
          )}
        </>
        {selectedDate && (
          <div className="mt-4 ml-4">
            <p className="text-2xl uppercase">
              Fecha seleccionada: {selectedDate.toDateString()}
            </p>
            <p className="text-2xl">
              Descripción: {getAppointmentDescription(selectedDate)}
            </p>

            <p className="text-lg">Con Roberto Filipin</p>
            <p className="text-sm">Horario: 10:00 - 11:00</p>
            <input
              type="text"
              placeholder="Agregar detalles"
              onChange={(e) => handleAppointmentAdd(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendario;
