import { FormattedAttribute } from "@/types/product";
interface BasicInfoCardProps {
  data: FormattedAttribute[];
}
export default function BasicDetails({ data }: BasicInfoCardProps) {
  return (
    <section className="mt-16">
      <div className="border-b">
        <div className="flex gap-8">
          <button className="border-b-2 border-black pb-3 font-medium">
            Basic Information
          </button>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border">
        <table className="w-full">
          <tbody>
            {data?.map((item, index) => (
              <tr className="border-b" key={index}>
                <td className="bg-gray-50 p-4 font-medium">{item.name}</td>
                <td className="p-4">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
