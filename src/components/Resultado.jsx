import useCotizador from "../hooks/useCotizador";
import { MARCAS, PLANES } from "../constans";

const Resultado = () => {
  const { resultado, datos } = useCotizador();
  const { marca, year, plan } = datos;
  if (resultado === 0) return null;
  const [nommbreMarca] = MARCAS.filter((m) => m.id === Number(marca));
  const [nommbrePlan] = PLANES.filter((p) => p.id === Number(plan));

  return (
    <div className=" text-center bg-gray-100 mt-5 p-5 shadow">
      <h2 className=" text-gray-600 font-black text-3xl">Resumen</h2>

      <p className=" my-2">
        <span className=" font-bold">Marca: </span>
        {nommbreMarca.nombre}
      </p>
      <p className=" my-2">
        <span className=" font-bold">Plan: </span>
        {nommbrePlan.nombre}
      </p>
      <p className=" my-2">
        <span className=" font-bold">Modelo del Auto: </span>
        {year}
      </p>
      <p className=" my-2 text-2xl">
        <span className=" font-bold">Total Cotización: {resultado} </span>
      </p>
    </div>
  );
};

export default Resultado;
