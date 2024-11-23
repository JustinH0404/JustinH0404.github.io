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

  const A0: ProjectImage[] = [
    { src: "project5/A0/man_20.png", alt: "man with a hat (inference 20)", label: "man with a hat (inference 20)" },
    { src: "project5/A0/rocket_20.png", alt: "rocket (inference 20)", label: "rocket (inference 20)" },
    { src: "project5/A0/village_20.png", alt: "oil painting of a snowy village  (inference 20)", label: "oil painting of a snowy village  (inference 20)" },
    { src: "project5/A0/man_40.png", alt: "man with a hat (inference 40)", label: "man with a hat (inference 40)" },
    { src: "project5/A0/rocket_40.png", alt: "rocket (inference 40)", label: "rocket (inference 40)" },
    { src: "project5/A0/village_40.png", alt: "oil painting of a snowy village  (inference 40)", label: "oil painting of a snowy village  (inference 40)" },
  ];
  const A1_1: ProjectImage[] = [
    { src: "project5/campanile.png", alt: "Original", label: "Berkeley Campanile" },
    { src: "project5/A1.1/250.png", alt: "t = 250", label: "t = 250" },
    { src: "project5/A1.1/500.png", alt: "t = 500", label: "t = 500" },
    { src: "project5/A1.1/750.png", alt: "t = 750", label: "t = 750" },
  ];

  const A1_2: ProjectImage[] = [
    { src: "project5/A1.1/250.png", alt: "t = 250", label: "t = 250" },
    { src: "project5/A1.1/500.png", alt: "t = 500", label: "t = 500" },
    { src: "project5/A1.1/750.png", alt: "t = 750", label: "t = 750" },
    { src: "project5/A1.2/250.png", alt: "t = 250", label: "t = 250, gaussian blur denoised" },
    { src: "project5/A1.2/500.png", alt: "t = 500", label: "t = 500, gaussian blur denoised" },
    { src: "project5/A1.2/750.png", alt: "t = 750", label: "t = 750, gaussian blur denoised" },
  ];

  const A1_3: ProjectImage[] = [
    { src: "project5/A1.1/250.png", alt: "t = 250", label: "t = 250" },
    { src: "project5/A1.1/500.png", alt: "t = 500", label: "t = 500" },
    { src: "project5/A1.1/750.png", alt: "t = 750", label: "t = 750" },
    { src: "project5/A1.3/250.png", alt: "t = 250", label: "t = 250, One step denoised" },
    { src: "project5/A1.3/500.png", alt: "t = 500", label: "t = 500, One step denoised" },
    { src: "project5/A1.3/750.png", alt: "t = 750", label: "t = 750, One step denoised" },
  ];

  const A1_4_1: ProjectImage[] = [
    { src: "project5/A1.4/90.png", alt: "t = 250", label: "t = 90" },
    { src: "project5/A1.4/240.png", alt: "t = 500", label: "t = 240" },
    { src: "project5/A1.4/390.png", alt: "t = 750", label: "t = 390" },
    { src: "project5/A1.4/540.png", alt: "t = 250", label: "t = 540" },
    { src: "project5/A1.4/690.png", alt: "t = 500", label: "t = 690" },
  ];

  const A1_4_2: ProjectImage[] = [
    { src: "project5/campanile.png", alt: "Original", label: "Berkeley Campanile" },
    { src: "project5/A1.4/clean.png", alt: "t = 750", label: "Iteravely denoised" },
    { src: "project5/A1.3/750.png", alt: "t = 750", label: "One step denoised" },
    { src: "project5/A1.2/750.png", alt: "t = 750", label: "t = 750, gaussian blur denoised" }
  ];

  const A1_5: ProjectImage[] = [
    { src: "project5/A1.5/1.png", alt: "t = 250", label: "Sample 1" },
    { src: "project5/A1.5/2.png", alt: "t = 500", label: "Sample 2" },
    { src: "project5/A1.5/3.png", alt: "t = 750", label: "Sample 3" },
    { src: "project5/A1.5/4.png", alt: "t = 250", label: "Sample 4" },
    { src: "project5/A1.5/5.png", alt: "t = 500", label: "Sample 5" },
  ];

  const A1_6: ProjectImage[] = [
    { src: "project5/A1.6/1.png", alt: "t = 250", label: "Sample 1" },
    { src: "project5/A1.6/2.png", alt: "t = 500", label: "Sample 2" },
    { src: "project5/A1.6/3.png", alt: "t = 750", label: "Sample 3" },
    { src: "project5/A1.6/4.png", alt: "t = 250", label: "Sample 4" },
    { src: "project5/A1.6/5.png", alt: "t = 500", label: "Sample 5" },
  ];

  const A1_7: ProjectImage[] = [
    { src: "project5/A1.7/1_1.png", alt: "t = 250", label: "i_start = 1" },
    { src: "project5/A1.7/1_3.png", alt: "t = 500", label: "i_start = 3" },
    { src: "project5/A1.7/1_5.png", alt: "t = 750", label: "i_start = 5" },
    { src: "project5/A1.7/1_7.png", alt: "t = 250", label: "i_start = 7" },
    { src: "project5/A1.7/1_10.png", alt: "t = 500", label: "i_start = 10" },
    { src: "project5/A1.7/1_20.png", alt: "t = 500", label: "i_start = 20" },
    { src: "project5/campanile.png", alt: "t = 500", label: "original photo" },
    { src: "project5/A1.7/2_1.png", alt: "t = 250", label: "i_start = 1" },
    { src: "project5/A1.7/2_3.png", alt: "t = 500", label: "i_start = 3" },
    { src: "project5/A1.7/2_5.png", alt: "t = 750", label: "i_start = 5" },
    { src: "project5/A1.7/2_7.png", alt: "t = 250", label: "i_start = 7" },
    { src: "project5/A1.7/2_10.png", alt: "t = 500", label: "i_start = 10" },
    { src: "project5/A1.7/2_20.png", alt: "t = 500", label: "i_start = 20" },
    { src: "project5/A1.7/2_orig.png", alt: "t = 500", label: "original photo" },
    { src: "project5/A1.7/3_1.png", alt: "t = 250", label: "i_start = 1" },
    { src: "project5/A1.7/3_3.png", alt: "t = 500", label: "i_start = 3" },
    { src: "project5/A1.7/3_5.png", alt: "t = 750", label: "i_start = 5" },
    { src: "project5/A1.7/3_7.png", alt: "t = 250", label: "i_start = 7" },
    { src: "project5/A1.7/3_10.png", alt: "t = 500", label: "i_start = 10" },
    { src: "project5/A1.7/3_20.png", alt: "t = 500", label: "i_start = 20" },
    { src: "project5/A1.7/3_orig.png", alt: "t = 500", label: "original photo" },
  ];

  const A1_7_1: ProjectImage[] = [
    { src: "project5/A1.7.1/1_1.png", alt: "t = 250", label: "i_start = 1" },
    { src: "project5/A1.7.1/1_3.png", alt: "t = 500", label: "i_start = 3" },
    { src: "project5/A1.7.1/1_5.png", alt: "t = 750", label: "i_start = 5" },
    { src: "project5/A1.7.1/1_7.png", alt: "t = 250", label: "i_start = 7" },
    { src: "project5/A1.7.1/1_10.png", alt: "t = 500", label: "i_start = 10" },
    { src: "project5/A1.7.1/1_20.png", alt: "t = 500", label: "i_start = 20" },
    { src: "project5/A1.7.1/1_orig.png", alt: "t = 500", label: "original photo" },
    { src: "project5/A1.7.1/2_1.png", alt: "t = 250", label: "i_start = 1" },
    { src: "project5/A1.7.1/2_3.png", alt: "t = 500", label: "i_start = 3" },
    { src: "project5/A1.7.1/2_5.png", alt: "t = 750", label: "i_start = 5" },
    { src: "project5/A1.7.1/2_7.png", alt: "t = 250", label: "i_start = 7" },
    { src: "project5/A1.7.1/2_10.png", alt: "t = 500", label: "i_start = 10" },
    { src: "project5/A1.7.1/2_20.png", alt: "t = 500", label: "i_start = 20" },
    { src: "project5/A1.7.1/2_orig.png", alt: "t = 500", label: "original photo" },
    { src: "project5/A1.7.1/3_1.png", alt: "t = 250", label: "i_start = 1" },
    { src: "project5/A1.7.1/3_3.png", alt: "t = 500", label: "i_start = 3" },
    { src: "project5/A1.7.1/3_5.png", alt: "t = 750", label: "i_start = 5" },
    { src: "project5/A1.7.1/3_7.png", alt: "t = 250", label: "i_start = 7" },
    { src: "project5/A1.7.1/3_10.png", alt: "t = 500", label: "i_start = 10" },
    { src: "project5/A1.7.1/3_20.png", alt: "t = 500", label: "i_start = 20" },
    { src: "project5/A1.7.1/3_orig.png", alt: "t = 500", label: "original photo" },
    { src: "project5/A1.7.1/4_1.png", alt: "t = 250", label: "i_start = 1" },
    { src: "project5/A1.7.1/4_3.png", alt: "t = 500", label: "i_start = 3" },
    { src: "project5/A1.7.1/4_5.png", alt: "t = 750", label: "i_start = 5" },
    { src: "project5/A1.7.1/4_7.png", alt: "t = 250", label: "i_start = 7" },
    { src: "project5/A1.7.1/4_10.png", alt: "t = 500", label: "i_start = 10" },
    { src: "project5/A1.7.1/4_20.png", alt: "t = 500", label: "i_start = 20" },
    { src: "project5/A1.7.1/4_orig.png", alt: "t = 500", label: "original photo" },
  ];

  const A1_7_2: ProjectImage[] = [
    { src: "project5/A1.7.2/1_orig.png", alt: "t = 250", label: "original" },
    { src: "project5/A1.7.2/1_mask.png", alt: "t = 500", label: "mask" },
    { src: "project5/A1.7.2/1_replace.png", alt: "t = 750", label: "hole to fill" },
    { src: "project5/A1.7.2/1_inpaint.png", alt: "t = 250", label: "result" },
    { src: "project5/A1.7.2/2_orig.png", alt: "t = 250", label: "original" },
    { src: "project5/A1.7.2/2_mask.png", alt: "t = 500", label: "mask" },
    { src: "project5/A1.7.2/2_replace.png", alt: "t = 750", label: "hole to fill" },
    { src: "project5/A1.7.2/2_output.png", alt: "t = 250", label: "result" },
    { src: "project5/A1.7.2/3_orig.png", alt: "t = 250", label: "original" },
    { src: "project5/A1.7.2/3_mask.png", alt: "t = 500", label: "mask" },
    { src: "project5/A1.7.2/3_replace.png", alt: "t = 750", label: "hole to fill" },
    { src: "project5/A1.7.2/3_inpaint.png", alt: "t = 250", label: "result" },
  ];

  
  const A1_7_3: ProjectImage[] = [
    { src: "project5/A1.7.3/1_1.png", alt: "t = 250", label: "i_start = 1" },
    { src: "project5/A1.7.3/1_3.png", alt: "t = 500", label: "i_start = 3" },
    { src: "project5/A1.7.3/1_5.png", alt: "t = 750", label: "i_start = 5" },
    { src: "project5/A1.7.3/1_7.png", alt: "t = 250", label: "i_start = 7" },
    { src: "project5/A1.7.3/1_10.png", alt: "t = 500", label: "i_start = 10" },
    { src: "project5/A1.7.3/1_20.png", alt: "t = 500", label: "i_start = 20" },
    { src: "project5/campanile.png", alt: "t = 500", label: "original photo" },
    { src: "project5/A1.7.3/2_1.png", alt: "t = 250", label: "i_start = 1" },
    { src: "project5/A1.7.3/2_3.png", alt: "t = 500", label: "i_start = 3" },
    { src: "project5/A1.7.3/2_5.png", alt: "t = 750", label: "i_start = 5" },
    { src: "project5/A1.7.3/2_7.png", alt: "t = 250", label: "i_start = 7" },
    { src: "project5/A1.7.3/2_10.png", alt: "t = 500", label: "i_start = 10" },
    { src: "project5/A1.7.3/2_20.png", alt: "t = 500", label: "i_start = 20" },
    { src: "project5/A1.7.3/2_orig.png", alt: "t = 500", label: "original photo" },
    { src: "project5/A1.7.3/3_1.png", alt: "t = 250", label: "i_start = 1" },
    { src: "project5/A1.7.3/3_3.png", alt: "t = 500", label: "i_start = 3" },
    { src: "project5/A1.7.3/3_5.png", alt: "t = 750", label: "i_start = 5" },
    { src: "project5/A1.7.3/3_7.png", alt: "t = 250", label: "i_start = 7" },
    { src: "project5/A1.7.3/3_10.png", alt: "t = 500", label: "i_start = 10" },
    { src: "project5/A1.7.3/3_20.png", alt: "t = 500", label: "i_start = 20" },
    { src: "project5/A1.7.3/3_orig.png", alt: "t = 500", label: "original photo" },
  ];

  const A1_8: ProjectImage[] = [
    { src: "project5/A1.8/1.png", alt: "t = 250", label: "People around a campfire" },
    { src: "project5/A1.8/1_flipped.png", alt: "t = 250", label: "Oil painting of a man" },
    { src: "project5/A1.8/2.png", alt: "t = 500", label: "Photo of a man" },
    { src: "project5/A1.8/2_flipped.png", alt: "t = 500", label: "Photo of a dog" },
    { src: "project5/A1.8/3.png", alt: "t = 750", label: "Coast of amalfi" },
    { src: "project5/A1.8/3_flipped.png", alt: "t = 750", label: "Hipster person" },
  ];

  const A1_9: ProjectImage[] = [
    { src: "project5/A1.9/1.png", alt: "t = 250", label: "Skull/Waterfall" },
    { src: "project5/A1.9/2.png", alt: "t = 500", label: "Oil painting of snow maountains/waterfalls" },
    { src: "project5/A1.9/3.png", alt: "t = 750", label: "Rocket Pencil" },
  ];

  const B1_2_1: ProjectImage[] = [
    { src: "project5/B1.2.1/epoch1.png", alt: "t = 250", label: "Results after epoch 1" },
    { src: "project5/B1.2.1/epoch5.png", alt: "t = 250", label: "Results after epoch 5" },
  ];

  const B1_2_1_2: ProjectImage[] = [
    { src: "project5/B1.2.1/loss_0.5.png", alt: "t = 250", label: "Loss" },
  ];

  const B1_2_2: ProjectImage[] = [
    { src: "project5/B1.2.2/0.0.png", alt: "t = 250", label: "sigma = 0" },
    { src: "project5/B1.2.2/0.2.png", alt: "t = 250", label: "sigma = 0.2" },
    { src: "project5/B1.2.2/0.4.png", alt: "t = 250", label: "sigma = 0.4" },
    { src: "project5/B1.2.2/0.5.png", alt: "t = 250", label: "sigma = 0.5" },
    { src: "project5/B1.2.2/0.6.png", alt: "t = 250", label: "sigma = 0.6" },
    { src: "project5/B1.2.2/0.8.png", alt: "t = 250", label: "sigma = 0.8" },
    { src: "project5/B1.2.2/1.0.png", alt: "t = 250", label: "sigma = 1.0" },
  ];

  const B2_2_2: ProjectImage[] = [
    { src: "project5/B2.3/5epochs.png", alt: "t = 250", label: "Results after epoch 5" },
    { src: "project5/B2.3/20epochs.png", alt: "t = 250", label: "Results after epoch 20" },
  ];

  const B2_2_1: ProjectImage[] = [
    { src: "project5/B2.3/training.png", alt: "t = 250", label: "Loss" },
  ];


  const renderImageGrid = (images: ProjectImage[], columns: number) => (
    <div className={`grid grid-cols-${columns} sm:grid-cols-${columns} gap-4 mb-6`}>
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
            We&apos;ll explore various methods and their applications in computer vision and image understanding.
          </p>
        </section>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">1.0 Setup</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              We used the pretrained DeepFloyd diffusion to run some tests. The interesting thing here is that we can change the detail at which these pictures are made with the number of inference steps. Here are two examples. The random seed I am using is 4.
            </p>
            {renderImageGrid(A0, 3)}
            <p className="text-lg mt-6">
              As we can see, the higher the inference, the more detail we get. This is best seen in the man with the hat, where there are more wrinkles and details on the shirt. 
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">1.1 Implementing the Forward Process</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              The first step we did is to add noise to our image. The way we did this is through an equation, x_t = sqrt(a_t)x_0 + sqrt(1 - a_t)e, where e is sampled from a gaussian. Here, we have the image sampled at 3 different t&apos;s: 250, 500, 750.
            </p>
            {renderImageGrid(A1_1, 4)}
            <p className="text-lg mt-6">
              As we can see, the higher the t, the more noisy the image. 
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">1.2 Classical Denoising</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Now, we&apos;ll try using classical methods, such as Gaussian blur filtering. This is just using the standard torchvision gaussian blur. 
            </p>
            {renderImageGrid(A1_2, 3)}
            <p className="text-lg mt-6">
              As we can see, the results are not so great.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">1.3 One-Step Denoising</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Now, we&apos;ll use one step denoising to try and denoise it better. The way we&apos;ll do this is using the pretrained UNet thorugh using our equation from earlier, where the UNet will predict the error. 
            </p>
            {renderImageGrid(A1_3, 3)}
            <p className="text-lg mt-6">
              As we can see, this is a much better result than when classical methods.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">1.4 Iterative Denoising</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Now, we&apos;ll try iterative denoising. Instead of trying to just guess the noise in one step, we&apos;ll try to get an estimate of a previous timestep, and predict that. The way we would do that is through another mathematical formula: 
              x_t_prime = sqrt(a_bar_t_prime) B_t / (1 - a_bar_t) * x_0 + sqrt(a_t)(1 - a_bar_t_prime) / (1 - a_bar_t) x_t + v_sigma, where v_sigma is a random noise that the model predicts. 
            </p>
            {renderImageGrid(A1_4_1, 5)}
            {renderImageGrid(A1_4_2, 4)}
            <p className="text-lg mt-6">
              Here, we the image at different steps. As the final results show, the iteratively denoised has the best results and closest to original.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">1.5 Diffusion Model Sampling</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Now, we&apos;ll input pure noise into the model, and see what the model generates from that. 
            </p>
            {renderImageGrid(A1_5, 5)}
            <p className="text-lg mt-6">
              These are some pretty cool things that the model generated from pure noise!
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">1.6 Classifier-Free Guidance</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              The generated pictures can be improved by using Classifier Free Guidance. This means that we can we compute both a conditional and unconditional noise estimate, and by combining the two, we will get better pictures! We used a gamma value of 7
            </p>
            {renderImageGrid(A1_6, 5)}
            <p className="text-lg mt-6">
              As we can see, the pictures generated are definitely better than what we had earlier. 
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">1.7 Image to Image Translation</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Now, we use the iterative denoising function with CFG to generate images that are close to our source image by take our original image, injecting a little bit of gaussian noise, then specifying different t values to start at. As we can see, 
              the later the t value, then the closer we get to our original image. 
            </p>
            {renderImageGrid(A1_7, 7)}
            <p className="text-lg mt-6">
              Here are two different images that I chose on my own, I chose the empire state building and the great wall of china. I wanted to see how well it could capture the details. 
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">1.7.1 Editing Hand Drawn and Web Images</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              So now we try using nonrealistic images. I tried a few different images, including an online image of an anime character, as well as two and drawn images.
            </p>
            {renderImageGrid(A1_7_1, 7)}
            <p className="text-lg mt-6">
              One interesting thing to note is that the image did not do well with the text within my image. 
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">1.7.2 Inpainting</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              The next test we did is to see if the model can paint in parts that we remove. For example, if we tkae a block outside of the campanile, what would the model produce? 
            </p>
            {renderImageGrid(A1_7_2, 5)}
            <p className="text-lg mt-6">
              These are some pretty interesting results!
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">1.7.3 Text-Conditional image to image Translation</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Now, we&apos;ll give it a text condition, but input our original image with some noise to see how the model can try to get to our desired text. 
            </p>
            {renderImageGrid(A1_7_3, 7)}
            <p className="text-lg mt-6">
              These are some very interseting pictures!
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">1.8 Visual Anagrams</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Now, we&apos;ll try to have visual anagrams. This means that when we have it upright, the picture will look one way, and if we flip the picture, it&apos;ll look like something else. The way we did this is by adding two different noises. One would be the first image we chose. 
              Then, we would flip the image, generate the noise given the second prompt, then flip it again. Then we would average these two noises to get the next timestep
            </p>
            {renderImageGrid(A1_8, 2)}
            <p className="text-lg mt-6">
              These are some really cool applications of the stuff we worked on. The only one that didn&apos;t work out super well was the dog/human, but i feel like that is because it&apos;s hard to merge the two. 
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">1.9 Hybrid Images</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Finally, we&apos;ll implement hybrid images by creating another composite noise. The way this will work is if we combine the low frequencies of one noise with the high frequencies of another.
            </p>
            {renderImageGrid(A1_9, 3)}
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">2.1 Training a single step denoising UNET</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Now, we&apos;ll try to actually build our own UNET denoiser, using an L2 loss. The way we trained it is similar to how we did earlier: by adding gaussian noise to our pictures. 
              Then, we&apos;ll train it using an Adam optimizer. Here&apos;s how they look after a few epochs of training
            </p>
            {renderImageGrid(B1_2_1, 1)}
            <p className="text-lg mt-6">
              Below is a graph of the loss. 
            </p>
            {renderImageGrid(B1_2_1_2, 1)}
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">2.1.2 Out of distribution testing</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Now, we&apos;ll see what the denoised output is for varying levels of noise. 
            </p>
            {renderImageGrid(B1_2_2, 1)}
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">2.1 Adding Time Conditioning to the UNet</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Now, we&apos;ll try to inject a scalar t into our unet to condition it on time. The way we will do this is to add it in in between our up blocoks, and add to the result from what we had.
              Here is the resulting loss curve plot for the time conditioned UNet
            </p>
            {renderImageGrid(B2_2_1, 1)}
            <p className="text-lg mt-6">
              Here are the results of the sampling from epoch 5 and epoch 20. 
            </p>
            {renderImageGrid(B2_2_2, 1)}
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">2.4 Adding Class-Conditioning</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Now, we&apos;ll do something similar but add class conditioning. Here is the resulting loss curve. 
            </p>
            {renderImageGrid(B2_2_1, 1)}
            <p className="text-lg mt-6">
              Here are the results of the sampling from epoch 5 and epoch 20. 
            </p>
            {renderImageGrid(B2_2_2, 1)}
          </CardContent>
        </Card>

      </main>
    </div>
  );
}