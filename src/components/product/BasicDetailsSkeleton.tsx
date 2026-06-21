export default function BasicDetailsSkeleton() {
  return (
    <section className="mt-16">
      <div className="mt-8 overflow-hidden rounded-xl">
        <table className="w-full">
          <tbody>
            {Array.from({ length: 4 }).map((_, index) => (
              <tr key={index} className="">
                <td className="py-4">
                  <div className="h-12 w-full animate-pulse rounded bg-gray-200" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
