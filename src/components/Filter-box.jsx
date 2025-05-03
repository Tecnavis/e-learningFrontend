import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGetAllSyllbusQuery } from "@/app/service/syllbusData";

export function FilterBox({ selectedCategories, setSelectedCategories }) {
  const { data, isError, isLoading } = useGetAllSyllbusQuery();

  if (isError || !Array.isArray(data))
    return <h1>Oops! Something went wrong.</h1>;

  return (
    <Card className="w-full">
    <CardContent className="p-2">
      <h2 className="text-base sm:text-lg md:text-xl font-bold mb-4 text-center">
        Select Syllabus
      </h2>
  
      <div className="overflow-x-auto">
        <div className="flex flex-wrap gap-2 justify-center w-full">
          {!isLoading
            ? data?.map((category) => (
                <Button
                  key={category._id}
                  variant={
                    selectedCategories === category.title
                      ? "default"
                      : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategories(category?.title)}
                  className="text-xs sm:text-sm md:text-base px-3 py-1 whitespace-nowrap flex-shrink-0"
                >
                  {category.title}
                </Button>
              ))
            : Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="h-8 w-20 bg-gray-300 rounded-md animate-pulse flex-shrink-0"
                />
              ))}
        </div>
      </div>
    </CardContent>
  </Card>
  

  );
}
