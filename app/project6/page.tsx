import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowLeft } from 'lucide-react';

interface ProjectImage {
  src: string;
  alt: string;
  label: string;
}

export default function Project6() {
  const generateImage = (prefix: string, index: number, label: string): ProjectImage => ({
    src: `final_project/${prefix}`,
    alt: `Image ${index}`,
    label: `${label}`,
  });

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
            Project 6: Advanced Computer Vision Techniques
          </h2>
          <p className="text-lg mb-6">
            We explore NeRFs! Go NeRFs.
          </p>
        </section>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">Part 1: Image Analysis and Processing</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Before doing NeRF, we created a nerual field that can represent a 2D image and optimized a neural net to do that. To do this, we built an MLP, but the input would 
              be first put into positional encoding using sinusoidal encoding. We also build our own custom dataloader, as we cannot use every single pixel or else we would run out of memory.
              Instead, we randomly sampled some pixels every iteration for training. Below is the architecture we used.
            </p>
            <div className="flex flex-col items-center mb-6">
              <img
                src={generateImage("/part1/architecture.jpg", 1, "MLP architecture").src}
                alt="mlp architecture"
                className="w-full max-w-2xl h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
              />
              <p className="text-center mt-2 font-semibold">{generateImage("/part1/architecture", 1, "MLP architecture").label}</p>
            </div>
            <p className="text-lg mb-6">
              In addition, I tested different hyperparameters. The two things I changed were L, which is the number of frequency levels, and the learning rate. On the left, the results of changing learning rate,
              and on the right, the different levels of L
            </p>

            {renderImageGrid([generateImage("/part1/image1/psnr_diff_learning_rates.png", 1, "different learning rates"), generateImage("/part1/image1/psnr_diff_Ls.png", 1, "different L values")], 2)}
            <p className="text-lg mb-6">
              As we can see, if we have a learning rate of 0.05, then it is too high, and will prevent the model from converging. For max frequency of L, there is less of
              an exaggerated dropoff as in learning rates, but there is a difference in that having higher L values seemed to produce better results. 
            </p>

            <p className="text-lg mb-6">
              In addition, I decided to visualize my training for images. These are the results for my model, that has L = 10, and a learning rate of 0.01.
            </p>
            {renderImageGrid([generateImage("/part1/image1/original.png", 4, "original image"), generateImage("/part1/image1/psnr_loss.png", 5, "psnr curve")], 2)}
            {renderImageGrid([generateImage("/part1/image1/l_10_iteration_500.png", 6, "iteration 500")], 1)}
            {renderImageGrid([generateImage("/part1/image1/l_10_iteration_1000.png", 6, "iteration 1000")], 1)}
            {renderImageGrid([generateImage("/part1/image1/l_10_iteration_2000.png", 6, "iteration 2000")], 1)}
            
            <p className="text-lg mb-6">
              I also decided to visualize another image as well. The same hyperparameters were used. 
            </p>

            {renderImageGrid([generateImage("/part1/image2/original.jpg", 4, "original image"), generateImage("/part1/image2/psnr.png", 5, "psnr curve")], 2)}
            {renderImageGrid([generateImage("/part1/image2/300.png", 6, "iteration 300") ], 1)}
            {renderImageGrid([generateImage("/part1/image2/600.png", 6, "iteration 300") ], 1)}
            {renderImageGrid([generateImage("/part1/image2/2000.png", 6, "iteration 300") ], 1)}

          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">Part 2: Nerual Radiance Field from multi view images</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Now, we will use a Neural Radiance Field to representa 3D space through inverse rendering from multi view calibrated images. Creating Rays from cameras was relatively straightforward, with batched
              matrix multiplication and inversions. 
            </p>
            <p className="text-lg mb-6">
              For sampling, it was quite hard. To discretize each ray into samples so we can query points along the ray and integrate their colors to get the final color, I uniformly sample points along the ray, where 
              near = 2.0, and far = 6.0, and n_samples = 64. I also added randomness by adding small perturbations to the points. 

            </p>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="md:w-2/3">
                <p className="text-lg">
                  After doing this, I wrapped it all into a dataloader that randomly sampled pixels from multiview images. Here is the output of my sampling code from 100 randomly sampled rays. 
                </p>
              </div>
              <div className="md:w-1/3 flex flex-col items-center">
                <img
                  src={generateImage("/part2/2.3.png", 1, "100 sampled rays").src}
                  alt={generateImage("/part2/2.3.png", 1, "100 sampled rays").alt}
                  className="w-full h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
                />
                <p className="text-center mt-2 font-semibold">{generateImage("/part2/2.3.png", 1, "100 sampled rays").label}</p>
              </div>
            </div>
            <p className="text-lg mb-6">
                  now, we implemented the actual NeRF. It was similar to the MLP, but had 3D world coordinates and increased outputs, for RGB color and density. The architecture is shown below.
            </p>

            {renderImageGrid([
              generateImage("/part2/mlp_nerf.png", 2, "network architecture"),
            ], 4)}

            <p className="text-lg my-6">
              After this, we needed to integerate the colors to get the actual color, and perform volume rendering. These are the results.
            </p>

            {renderImageGrid([
              generateImage("/part2/iteration_0.png", 2, "iteration 0"),
              generateImage("/part2/iteration_200.png", 2, "iteration 200"),
              generateImage("/part2/iteration_400.png", 2, "iteration 400"),
              generateImage("/part2/iteration_600.png", 2, "iteration 600"),
              generateImage("/part2/psnr.png", 2, "psnr curve")
            ], 4)}

            <p className="text-lg my-6">
              This is as far as I got before having my GPU credits run out on CoLab over the course of multiple days. I was unable to come up with the spherical rendering, but am happy with the results that I was able to generate. 
            </p>

          </CardContent>
        </Card>
      </main>
      <footer className="bg-black dark:bg-white text-white dark:text-black p-6 mt-12 border-t border-gray-200 dark:border-gray-800">
        <p className="text-center">
          &copy; 2024 CS 180 Portfolio. All rights reserved.
        </p>
      </footer>
    </div>
  );
}