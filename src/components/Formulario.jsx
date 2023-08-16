import { Fragment } from "react";
import { MARCAS, YEARS, PLANES } from "../constans";
import useCotizador from "../hooks/useCotizador";
const Formulario = () => {
  return (
    <>
      <form action="">
        <div className=" my-5">
          <label
            htmlFor=""
            className=" block mb-3 font-bold text-gray-400 uppercase"
          >
            Marca
          </label>
          <select
            name="marca"
            className=" w-full p-3 bg-white border border-gray-200"
          >
            <option value="">--Seleccione Marca</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.nombre}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className=" my-5">
          <label
            htmlFor=""
            className=" block mb-3 font-bold text-gray-400 uppercase"
          >
            Años
          </label>
          <select
            name="marca"
            className=" w-full p-3 bg-white border border-gray-200"
          >
            <option value="">--Seleccione el Año</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className=" my-5">
          <label
            htmlFor=""
            className=" block mb-3 font-bold text-gray-400 uppercase"
          >
            Elige un Plan
          </label>
          <div className=" flex gap-3 items-center">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label htmlFor="">{plan.nombre}</label>
                <input type="radio" name="plan" value={plan.id} />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          className=" w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold "
          type="submit"
          value="cotizar"
        />
      </form>
    </>
  );
};

export default Formulario;