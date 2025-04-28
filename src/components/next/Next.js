import Image from "next/image";
import dibujos from "../data/dibujos.json";

export default function Galeria() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {dibujos.data.map((item) => (
        <div key={item.id} className="card p-4 shadow">
          {item.img && (
            <Image src={item.img} alt={item.name} width={300} height={200} />
          )}
          <h3 className="mt-2 font-bold">{item.name}</h3>
          <p className="text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
