import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowLeft } from 'lucide-react';

interface ProjectImage {
  src: string;
  alt: string;
  label: string;
}

export default function Project5() {
  const generateImages = (count: number, prefix: string): ProjectImage[] => {
    return Array.from({ length: count }, (_, i) => ({
      src: `project5/${prefix}${i + 1}.png`,
      alt: `Image ${i + 1}`,
      label: `Image ${i + 1}`,
    }));
  };

  const A0: ProjectImage[] = [
    { src: "project5/A0/man_20.png", alt: "man with a hat (inference 20)", label: "man with a hat (inference 20)" },
    { src: "project5/A0/rocket_20.png", alt: "rocket (inference 20)", label: "rocket (inference 20)" },
    { src: "project5/A0/village_20.png", alt: "oil painting of a snowy village  (inference 20)", label: "oil painting of a snowy village  (inference 20)" },
    { src: "project5/A0/man_40.png", alt: "man with a hat (inference 40)", label: "man with a hat (inference 40)" },
    { src: "project5/A0/rocket_40.png", alt: "rocket (inference 40)", label: "rocket (inference 40)" },
    { src: "project5/A0/village_40.png", alt: "oil painting of a snowy village  (inference 40)", label: "oil painting of a snowy village  (inference 40)" },
  ];
  const A1_1: ProjectImage[] = [
    { src: "project5/A1.1/250.png", alt: "man with a hat (inference 20)", label: "man with a hat (inference 20)" },
    { src: "project5/A1.1/500.png", alt: "rocket (inference 20)", label: "rocket (inference 20)" },
    { src: "project5/A1.1/750.png", alt: "oil painting of a snowy village  (inference 20)", label: "oil painting of a snowy village  (inference 20)" },
  ];

  const sections = [
    { title: "Section 1", images: [...A0] },
    { title: "Section 2", images: A1_1 },
    { title: "Section 3", images: [...generateImages(3, "sec3_row1_"), ...generateImages(3, "sec3_row2_")] },
    { title: "Section 4", images: [...generateImages(3, "sec4_row1_"), ...generateImages(3, "sec4_row2_")] },
    { title: "Section 5", images: [...generateImages(5, "sec5_row1_"), ...generateImages(4, "sec5_row2_")] },
    { title: "Section 6", images: generateImages(5, "sec6_") },
    { title: "Section 7", images: generateImages(5, "sec7_") },
    { title: "Section 8", images: [...generateImages(7, "sec8_row1_"), ...generateImages(7, "sec8_row2_"), ...generateImages(7, "sec8_row3_")] },
    { title: "Section 9", images: [...generateImages(7, "sec9_row1_"), ...generateImages(7, "sec9_row2_"), ...generateImages(7, "sec9_row3_")] },
    { title: "Section 10", images: [...generateImages(4, "sec10_row1_"), ...generateImages(4, "sec10_row2_"), ...generateImages(4, "sec10_row3_")] },
    { title: "Section 11", images: [...generateImages(7, "sec11_row1_"), ...generateImages(7, "sec11_row2_"), ...generateImages(7, "sec11_row3_")] },
    { title: "Section 12", images: [...generateImages(2, "sec12_row1_"), ...generateImages(2, "sec12_row2_"), ...generateImages(2, "sec12_row3_")] },
    { title: "Section 13", images: generateImages(3, "sec13_") },
  ];

  const renderImageGrid = (images: ProjectImage[], columns: number) => (
    <div className={`grid grid-cols-1 sm:grid-cols-${columns} gap-4 mb-6`}>
      {images.map((image, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
          />
          <p className="text-center mt-2 font-semibold">{image.label}</p>
        </div>
      ))}
    </div>
  );

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
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <section className="prose dark:prose-invert max-w-none bg-white dark:bg-black p-8 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-4xl font-bold mb-6">
            Project 5: Advanced Image Processing and Analysis
          </h2>
          <p className="text-lg mb-6">
            In this project, we delve into advanced image processing techniques and analysis. 
            We'll explore various methods and their applications in computer vision and image understanding.
          </p>
        </section>

        {sections.map((section, index) => (
          <Card key={index} className="overflow-hidden border border-gray-200 dark:border-gray-800">
            <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
              <CardTitle className="text-2xl">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-lg mb-6">
                This is the introductory text for {section.title}. It provides context and explanation 
                for the images and techniques demonstrated below.
              </p>
              {renderImageGrid(section.images, 
                index === 0 || index === 2 || index === 3 ? 3 : 
                index === 1 ? 4 : 
                index === 4 ? 5 : 
                index === 7 || index === 8 || index === 10 ? 7 :
                index === 9 ? 4 :
                index === 11 ? 2 :
                5
              )}
              <p className="text-lg mt-6">
                This is the concluding text for {section.title}. It summarizes the findings, 
                insights, or results obtained from the above images and techniques.
              </p>
            </CardContent>
          </Card>
        ))}
      </main>
      <footer className="bg-black dark:bg-white text-white dark:text-black p-6 mt-12 border-t border-gray-200 dark:border-gray-800">
        <p className="text-center">
          &copy; 2023 CS 180 Portfolio. All rights reserved.
        </p>
      </footer>
    </div>
  );
}