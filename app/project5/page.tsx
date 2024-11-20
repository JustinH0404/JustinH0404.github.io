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

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">1. Image Acquisition and Preprocessing</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Our journey begins with image acquisition and preprocessing. These crucial steps lay the foundation for all subsequent analysis. We'll explore various techniques to enhance image quality and prepare our data for further processing.
            </p>
            {renderImageGrid(A0, 3)}
            <p className="text-lg mt-6">
              As we can see from these examples, proper preprocessing significantly improves the quality of our input data, setting the stage for more accurate and reliable analysis in the following steps.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">2. Feature Extraction</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Feature extraction is a critical step in image analysis. Here, we implement various algorithms to identify and extract meaningful features from our preprocessed images.
            </p>
            {renderImageGrid(generateImages(4, "sec2_"), 4)}
            <p className="text-lg mt-6">
              These extracted features serve as the basis for our subsequent analysis and classification tasks, enabling us to capture the essence of the images in a compact, informative representation.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">3. Image Segmentation</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Image segmentation allows us to partition images into multiple segments or objects. This process is crucial for identifying and isolating specific regions of interest within an image.
            </p>
            {renderImageGrid([...generateImages(3, "sec3_row1_"), ...generateImages(3, "sec3_row2_")], 3)}
            <p className="text-lg mt-6">
              The results demonstrate how effective segmentation can highlight important structures and objects, paving the way for more focused analysis and object recognition in subsequent steps.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">4. Edge Detection and Contour Analysis</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Edge detection and contour analysis are fundamental techniques in computer vision. They help us identify object boundaries and shapes within images, which is crucial for object recognition and scene understanding.
            </p>
            {renderImageGrid([...generateImages(3, "sec4_row1_"), ...generateImages(3, "sec4_row2_")], 3)}
            <p className="text-lg mt-6">
              These examples showcase various edge detection algorithms and their effectiveness in highlighting important structural information within the images.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">5. Texture Analysis</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Texture analysis is a powerful tool for characterizing the surface and structure of objects in images. It plays a crucial role in material recognition and scene classification.
            </p>
            {renderImageGrid([...generateImages(5, "sec5_row1_"), ...generateImages(4, "sec5_row2_")], 5)}
            <p className="text-lg mt-6">
              These results demonstrate various texture analysis techniques and their ability to capture and quantify complex patterns and structures within images.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">6. Color Analysis and Processing</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Color analysis and processing are essential for many computer vision tasks. Here, we explore various color spaces and techniques for manipulating and analyzing color information in images.
            </p>
            {renderImageGrid(generateImages(5, "sec6_"), 5)}
            <p className="text-lg mt-6">
              These examples illustrate different color processing techniques and their applications in image enhancement, segmentation, and object recognition.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">7. Morphological Operations</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Morphological operations are powerful tools for manipulating image shapes and structures. They are particularly useful for noise removal, image enhancement, and feature detection.
            </p>
            {renderImageGrid(generateImages(5, "sec7_"), 5)}
            <p className="text-lg mt-6">
              These results showcase various morphological operations and their effects on different types of images, demonstrating their versatility in image processing tasks.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">8. Image Filtering and Restoration</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Image filtering and restoration techniques are crucial for enhancing image quality and recovering information from degraded or noisy images. We explore various filters and their applications in this section.
            </p>
            {renderImageGrid([...generateImages(7, "sec8_row1_"), ...generateImages(7, "sec8_row2_"), ...generateImages(7, "sec8_row3_")], 7)}
            <p className="text-lg mt-6">
              These examples demonstrate the effectiveness of different filtering techniques in noise reduction, edge preservation, and overall image enhancement.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">9. Image Compression and Coding</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Image compression is essential for efficient storage and transmission of visual data. In this section, we explore various compression techniques and their impact on image quality and file size.
            </p>
            {renderImageGrid([...generateImages(7, "sec9_row1_"), ...generateImages(7, "sec9_row2_"), ...generateImages(7, "sec9_row3_")], 7)}
            <p className="text-lg mt-6">
              These results illustrate the trade-offs between compression ratio and image quality for different compression algorithms and settings.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">10. Object Detection and Recognition</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Object detection and recognition are fundamental tasks in computer vision with numerous real-world applications. We implement and evaluate several state-of-the-art algorithms in this section.
            </p>
            {renderImageGrid([...generateImages(4, "sec10_row1_"), ...generateImages(4, "sec10_row2_"), ...generateImages(4, "sec10_row3_")], 4)}
            <p className="text-lg mt-6">
              These examples showcase the performance of various object detection and recognition algorithms on different types of images and scenes.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">11. Image Classification</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Image classification is a core task in computer vision, involving the assignment of predefined categories to input images. We explore various classification algorithms and their performance in this section.
            </p>
            {renderImageGrid([...generateImages(7, "sec11_row1_"), ...generateImages(7, "sec11_row2_"), ...generateImages(7, "sec11_row3_")], 7)}
            <p className="text-lg mt-6">
              These results demonstrate the effectiveness of different classification models on a diverse set of image categories, highlighting their strengths and limitations.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">12. Image Synthesis and Generation</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Image synthesis and generation involve creating new images from scratch or modifying existing ones. We explore cutting-edge techniques in this exciting field of computer vision and deep learning.
            </p>
            {renderImageGrid([...generateImages(2, "sec12_row1_"), ...generateImages(2, "sec12_row2_"), ...generateImages(2, "sec12_row3_")], 2)}
            <p className="text-lg mt-6">
              These examples showcase the capabilities of various image synthesis and generation models, demonstrating their potential in creative and practical applications.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">13. Future Directions and Conclusions</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              As we conclude our exploration of advanced image processing and analysis, we look towards future directions in the field and summarize our key findings and insights.
            </p>
            {renderImageGrid(generateImages(3, "sec13_"), 3)}
            <p className="text-lg mt-6">
              These final examples illustrate some of the most promising areas for future research and development in computer vision and image processing, pointing the way towards exciting new possibilities in the field.
            </p>
          </CardContent>
        </Card>

      </main>
      <footer className="bg-black dark:bg-white text-white dark:text-black p-6 mt-12 border-t border-gray-200 dark:border-gray-800">
        <p className="text-center">
          &copy; 2023 CS 180 Portfolio. All rights reserved.
        </p>
      </footer>
    </div>
  );
}