import { FormattedAttribute } from "@/types/product";
interface BasicInfoCardProps {
  data: FormattedAttribute[];
}
export default function BasicDetails({ data }: BasicInfoCardProps) {
  return (
    <section className="mt-16">
      <div className="border-b border-gray-300">
        <div className="flex gap-8">
          <button className="border-b-2 border-gray-500 pb-3 font-medium">
            Basic Information
          </button>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl ">
        <table className="w-full">
          <tbody>
            {data?.map((item, index) => (
              <tr
                className={`border border-gray-100 ${index % 2 ? "" : " bg-gray-100"}`}
                key={index}
              >
                <td className=" p-4 font-medium">{item.name}</td>
                <td className="p-4">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
