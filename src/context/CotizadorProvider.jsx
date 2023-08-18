import { createContext, useState } from "react";
import {
  obetenerDiferenciaYear,
  calcularMarca,
  calcularPlan,
  formatearNumero,
} from "../helpers/calculos";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [resultado, setResultado] = useState(0);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);
  const handleChangeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  const cotizarSeguro = () => {
    //Se parte de una base para el seguro
    let resultado = 100000;

    //Se obtiene la diferencia de años entre la actual y el modelo del auto
    const diferencia = obetenerDiferenciaYear(datos.year);

    //Hay que restar el 3% por cada año
    resultado -= (diferencia * 3 * resultado) / 100;

    //Americano incremento en 15%
    //Europeo incremento en 30%
    //Asiatico incremento en 5%

    resultado *= calcularMarca(datos.marca);

    //Plan basico incrementa 20%
    //Plan completo incremento en 50%
    resultado *= calcularPlan(datos.plan);

    //Formatear dinero
    resultado = formatearNumero(resultado);

    setCargando(true);
    setTimeout(() => {
      setResultado(resultado);
      setCargando(false);
    }, 2500);
  };
  return (
    <CotizadorContext.Provider
      value={{
        datos,
        error,
        setError,
        handleChangeDatos,
        cotizarSeguro,
        resultado,
        cargando,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};
export { CotizadorProvider };

export default CotizadorContext;
