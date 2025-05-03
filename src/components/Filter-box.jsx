import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGetAllSyllbusQuery } from "@/app/service/syllbusData";

export function FilterBox({ selectedCategories, setSelectedCategories }) {
  const { data, isError, isLoading } = useGetAllSyllbusQuery();

  if (isError || !Array.isArray(data))
    return <h1>Oops! Something went wrong.</h1>;

  return (
    <Card>
      <CardContent className="p-6 ">
        <div className="mb-8 flex items-center justify-around">
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">
              Select Syllabus
            </h2>
          </div>
        </div>

        <div className="flex justify-center items-center">
          {/* Categories */}
          <div>
            <div className="flex flex-wrap gap-2">
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
                      className="text-sm px-5 py-2 rounded-md cursor-pointer"
                    >
                      {category.title}
                    </Button>
                  ))
                : Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-8 w-24 bg-gray-300 rounded-md animate-pulse"
                    />
                  ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
