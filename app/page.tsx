import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import path from "path";
import fs from "fs";
import { Key } from "react";

export default function Component() {
  const folder1Path = path.join(process.cwd(), "public/images/original");
  const folder2Path = path.join(process.cwd(), "public/images/preprocessed");
  const folder3Path = path.join(process.cwd(), "public/images/processed");

  const getFilesFromFolder = (folderPath: string) => {
    return fs.readdirSync(folderPath);
  };

  // Get all file names from the three folders
  const folder1Images = getFilesFromFolder(folder1Path);
  const folder2Images = getFilesFromFolder(folder2Path);
  const folder3Images = getFilesFromFolder(folder3Path);

  const imageTuples = folder1Images
    .map((fileName) => {
      if (
        folder2Images.includes(fileName) &&
        folder3Images.includes(fileName) &&
        fileName.endsWith(".jpg")
      ) {
        console.log("here");
        console.log(fileName);
        return [
          `/images/original/${fileName}`,
          `/images/preprocessed/${fileName}`,
          `/images/processed/${fileName}`,
        ];
      }
      return null;
    })
    .filter(Boolean);
  console.log("I am here");
  console.log(imageTuples);
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <header className="bg-black dark:bg-white text-white dark:text-black p-6 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold">CS 180 Portfolio</h1>
          <Badge variant="outline" className="text-lg">
            <BookOpen className="mr-2 h-4 w-4" />
            Monochrome
          </Badge>
        </div>
      </header>
      <main className="container mx-auto p-6 space-y-12">
        <section className="prose dark:prose-invert max-w-none bg-white dark:bg-black p-8 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-4xl font-bold mb-6">
            Project 1: Colorizing Prokudin-Gorskii Photos
          </h2>
          <h3 className="text-2xl font-semibold mt-8 mb-4">Overview</h3>
          <p className="text-lg mb-6">
            Sergei Mikhailovich Prokudin-Gorskii (1863-1944) recorded three
            exposures of every scene onto a glass plate using a red, a green,
            and a blue filter. Our goal is to take the digitzed Prokudin-Gorksii
            glass plate images and produce a color image.
          </p>
          <h3 className="text-2xl font-semibold mt-8 mb-4">Approach</h3>
          <p className="text-lg mb-6">
            After separating the three different images, the first thing I did
            to measure the similarity between two different pictures was to just
            take the Euclidean distance between the two. For the green and red
            images, I would shift the x and y coordinates by [-20, 20], and
            recalculate the Euclidean distances. This worked okay, not super
            great, so I decided to try and crop the sides by 5%. This would help
            alleviate the issues with the potential black edges messing up the
            Euclidean distance, or the next metric I tried, NCC. Instead of
            actually improving it, cropping made it worse. So, I decided to try
            a new metric -- using Sobel edge detection. This automatically
            improved the alignments quite a bit, so this is the method I went
            with. Then, the next step was to process the .tif files. I had tried
            these when running the Euclidean distances, but the file size was
            too large and took too long. So instead, I decided to recursively
            minimize the quality of the image, search for the alignment there,
            and then scale it back up. I settled for a pixel size of 400, as I
            found that it worked the best. Then, as I scale the image back up by
            2x each time, I only need to search a radius of [-2, 2] in both the
            x and y direction after scaling back up, since we found the best
            alignment from the scaled down version of the picture. This is the
            final method I ended up with, as well as cropping the sides by 15%,
            as I found that worked best as well.
          </p>
        </section>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">Image Comparisons</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Below, you'll see the results of our image processing. Each row
              shows the original image, the processed image, and the final
              colorized result.
            </p>
            {imageTuples.map((imageTuple, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-6 mt-6">
                {imageTuple.map(
                  (
                    image: string | undefined,
                    imageIndex: Key | null | undefined
                  ) => (
                    <div
                      key={imageIndex}
                      className="flex-1 transition-all duration-300 hover:shadow-lg"
                    >
                      <img
                        src={image}
                        alt={`Image ${imageIndex + 1} of set ${index + 1}`}
                        className="w-full h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
                      />
                      <p className="text-center mt-3 font-semibold">
                        {imageIndex === 0
                          ? "Original"
                          : imageIndex === 1
                          ? "Processed"
                          : "Colorized"}
                      </p>
                    </div>
                  )
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
