import { useGetAllSpecialDaysQuery } from "@/app/service/specialDayData";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export function SpecialDays() {
  const { data, isError, isLoading } = useGetAllSpecialDaysQuery();
  const navigate = useNavigate();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError || !Array.isArray(data))
    return <h1>Oops! Something went wrong.</h1>;

  return (
    // <div className="grid grid-cols-3 gap-2">
    //   {!isLoading
    //     ? data.slice(0, 8).map((day) => (
    //         <Card
    //           key={day._id}
    //           className="overflow-hidden rounded-lg cursor-pointer"
    //           onClick={() => navigate(`/special-days/${day?._id}`)}
    //         >
    //           <div className="h-20 w-full sm:h-24"> {/* Decreased height */}
    //             <img
    //               src={
    //                 `${import.meta.env.VITE_API_URL}/images/${day.image}` ||
    //                 "/placeholder.svg"
    //               }
    //               alt={day.title}
    //               className="h-full w-full object-cover"
    //             />
    //           </div>
    //           {/* <CardContent className="px-2 py-2 text-center sm:px-2 sm:py-3">
    //             <h3 className="text-[12px] sm:text-sm font-semibold">
    //               {day.title}
    //             </h3>
    //           </CardContent> */}
    //         </Card>
    //       ))
    //     : Array.from({ length: 8 }).map((_, index) => (
    //         <Card
    //           key={index}
    //           className="overflow-hidden rounded-lg animate-pulse"
    //         >
    //           <div className="h-20 w-full sm:h-24 bg-gray-300" />
    //           <CardContent className="px-2 py-2 text-center sm:px-2 sm:py-3">
    //             <div className="h-3 w-20 bg-gray-300 rounded mx-auto" />
    //           </CardContent>
    //         </Card>
    //       ))}
    // </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {!isLoading
        ? data.slice(0, 8).map((day) => (
            <Card
              key={day._id}
              className="overflow-hidden rounded-lg cursor-pointer p-0"
              onClick={() => navigate(`/special-days/${day?._id}`)}
            >
              <div className="h-24 sm:h-28 md:h-32 w-full">
                <img
                  src={`${import.meta.env.VITE_API_URL}/images/${day.image}`}
                  alt={day.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </Card>
          ))
        : Array.from({ length: 8 }).map((_, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-lg animate-pulse p-0"
            >
              <div className="h-24 sm:h-28 md:h-32 w-full bg-gray-300" />
            </Card>
          ))}
    </div>
  );
}
