import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowLeft } from "lucide-react";

interface FilterImage {
  src: string;
  alt: string;
  label: string;
}

export default function Project2() {
  const images1_1: FilterImage[] = [
    {
      src: "/project2/images/dx.jpg",
      alt: "dx",
      label: "d_x camerman",
    },
    {
      src: "/project2/images/dy.jpg",
      alt: "dy",
      label: "d_y camerman",
    },
    {
      src: "/project2/images/gradient_magnitude.jpg",
      alt: "gradients",
      label: "Gradient Magnitude",
    },
    {
      src: "/project2/images/edge_image.jpg",
      alt: "edge images",
      label: "Edge Image, 0.20 Threshold",
    },
    {
      src: "/project2/images/DoGDx.jpg",
      alt: "DoGDx",
      label: "DoGDx",
    },
    {
      src: "/project2/images/DoGDy.jpg",
      alt: "DoGDy",
      label: "DoGDy",
    },
    {
      src: "/project2/images/gaussian_gradient_magnitude.jpg",
      alt: "gaussian_gradient_magnitude",
      label: "Gaussian Gradient Magnitude",
    },
    {
      src: "/project2/images/Gaussian_edge.jpg",
      alt: "Gaussian_edge",
      label: "Gaussian Edge Image, 0.09 Threshold",
    },
    {
      src: "/project2/images/cameraman.png",
      alt: "camerman",
      label: "Original Image",
    },
  ];

  const images1_2: FilterImage[] = [
    {
      src: "/project2/images/GaussianDx.jpg",
      alt: "dx",
      label: "d_x of gaussian",
    },
    {
      src: "/project2/images/GaussianDy.jpg",
      alt: "dy",
      label: "d_y of gaussian",
    },
    {
      src: "/project2/images/gradient_magnitude.jpg",
      alt: "gradients",
      label: "Gradient Magnitude",
    },
    {
      src: "/project2/images/gaussian_gradient_magnitude.jpg",
      alt: "gaussian_gradient_magnitude",
      label: "Gaussian Gradient Magnitude",
    },
    {
      src: "/project2/images/Gaussian_edge.jpg",
      alt: "Gaussian_edge",
      label: "Gaussian Edge Image, 0.09 Threshold",
    },
    {
      src: "/project2/images/cameraman.png",
      alt: "camerman",
      label: "Original Image",
    },
  ];

  const images2_1: FilterImage[] = [
    {
      src: "/project2/images/taj.jpg",
      alt: "taj original",
      label: "Original Image",
    },
    {
      src: "/project2/images/taj_sharpened.jpg",
      alt: "Sharpened Taj",
      label: "Sharpened Image",
    },
    {
      src: "/project2/images/taj_blurred.jpg",
      alt: "Blurred Taj",
      label: "Blurred Image",
    },
    {
      src: "/project2/images/taj_resharpened.jpg",
      alt: "Taj Resharpened",
      label: "Resharpened Image",
    },
  ];

  const images2_1_2: FilterImage[] = [
    {
      src: "/project2/images/sf.jpg",
      alt: "Original SF",
      label: "Original Image",
    },
    {
      src: "/project2/images/sf_sharpened.jpg",
      alt: "Sharpened SF",
      label: "Sharpened Image",
    },
    {
      src: "/project2/images/sf_blurred.jpg",
      alt: "Blurred SF",
      label: "Blurred Image",
    },
    {
      src: "/project2/images/sf_resharpened.jpg",
      alt: "Resharpened SF",
      label: "Resharpened Image",
    },
  ];

  const images2_2: FilterImage[] = [
    {
      src: "/project2/images/hybrid/derek.jpg",
      alt: "derek",
      label: "Image 1 (Derek)",
    },
    {
      src: "/project2/images/hybrid/nutmeg.jpg",
      alt: "nutmeg",
      label: "Image 2 (Nutmeg)",
    },
    {
      src: "/project2/images/hybrid/derek_nutmeg.jpg",
      alt: "derek_nutmeg",
      label: "Hybrid Image (Derek + Nutmeg)",
    },
  ];

  const images2_2_2: FilterImage[] = [
    {
      src: "/project2/images/hybrid/lbj.png",
      alt: "derek",
      label: "Image 1 (LeBron James)",
    },
    {
      src: "/project2/images/hybrid/ohtani.jpg",
      alt: "nutmeg",
      label: "Image 2 (Shohei Ohtani)",
    },
    {
      src: "/project2/images/hybrid/lebron_ohtani.jpg",
      alt: "derek_nutmeg",
      label: "Hybrid Image (Lebron Ohtani)",
    },
  ];

  const images2_2_3: FilterImage[] = [
    {
      src: "/project2/images/hybrid/sf.jpg",
      alt: "derek",
      label: "Image 1 (SF)",
    },
    {
      src: "/project2/images/hybrid/nyc.jpg",
      alt: "nutmeg",
      label: "Image 2 (NYC)",
    },
    {
      src: "/project2/images/hybrid/nyc_sf.jpg",
      alt: "derek_nutmeg",
      label: "Hybrid Image (NYC/SF)",
    },
  ];

  const images2_3: FilterImage[] = [
    {
      src: "/project2/images/blended/apple_gaussian.jpg",
      alt: "derek",
      label: "apple gaussian stack",
    },
    {
      src: "/project2/images/blended/apple_laplacian.jpg",
      alt: "nutmeg",
      label: "apple laplacian stack",
    },
    {
      src: "/project2/images/blended/orange_gaussian.jpg",
      alt: "derek_nutmeg",
      label: "orange gaussian stack",
    },
    {
      src: "/project2/images/blended/orange_laplacian.jpg",
      alt: "derek_nutmeg",
      label: "orange laplacian stack",
    },
  ];

  const images2_4: FilterImage[] = [
    {
      src: "/project2/images/blended/blended.jpg",
      alt: "derek",
      label: "Oraple (orange, apple)",
    },
    {
      src: "/project2/images/blended/blended2.jpg",
      alt: "nutmeg",
      label: "SFYC (SF + NYC)",
    },
    {
      src: "/project2/images/blended/blended3.jpg",
      alt: "derek_nutmeg",
      label: "Mountace (Mountains in Space)",
    },
  ];

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
            Project 2: Fun with Filters and Frequencies!
          </h2>
          <p className="text-lg mb-6">
            In this project, we experiment with filters and frequencies to
            create fun images.
          </p>
        </section>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">1. Fun with Filters</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="container mx-auto flex items-center justify-between">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                <img src={"/project2/images/cameraman.png"} />
                <p className="text-center mt-2 font-semibold">Original Image</p>
              </div>
            </div>
            <p className="text-lg mb-6 gap-6">
              We applied various filters to explore different image processing
              techniques. Below are examples of different filters applied to the
              same original image. The first row is using finite difference
              operators, and the second row is using the finite difference
              operators after applying a Gaussian Blur. The resulting edge image
              detection was better after thee Gaussian blur and also having a
              lower threshold.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {images1_1.slice(0, 8).map((image, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
                  />
                  <p className="text-center mt-2 font-semibold">
                    {image.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-lg mb-6">
              We could also convolve the filters with the Gaussian, and then
              apply the resulting filter on the camera, and we would get the
              same result.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {images1_2.slice(0, 4).map((image, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
                  />
                  <p className="text-center mt-2 font-semibold">
                    {image.label}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">2.1 Sharpening</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              We will sharpen our images by taking our image, subtract the low
              frequencies to create an image with higher frequencies, then
              enhance the original image with the said higher frequencies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {images2_1.slice(0, 4).map((image, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
                  />
                  <p className="text-center mt-2 font-semibold">
                    {image.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-lg mb-6 mt-6">
              The first image is the original image. The second image is the
              result of adding the higher frequencies. The third image is the
              result of blurring the original image. The final image is the
              result of sharpening the blurred image. The resulting
              "resharpened" image is not much worse than the original image.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {images2_1_2.slice(0, 4).map((image, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
                  />
                  <p className="text-center mt-2 font-semibold">
                    {image.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-lg mb-6 mt-6">
              For my choice of image, I chose to do a skyline of SF. My findings
              are consistent with the results from running the filters on the
              Taj picture.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mt-6">
              <div className="flex-1">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Original image for unsharp masking"
                  className="w-full h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
                />
                <p className="text-center mt-3 font-semibold">Original Image</p>
              </div>
              <div className="flex-1">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Unsharp masking result"
                  className="w-full h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
                />
                <p className="text-center mt-3 font-semibold">
                  Unsharp Masking Result
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">2.2. Hybrid Images</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Hybrid images combine low-frequency components of one image with
              high-frequency components of another. This creates an image that
              appears different when viewed from near and far distances. We
              experimented with various cutoff frequencies and image pairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-6">
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {images2_2.slice(0, 3).map((image, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
                      />
                      <p className="text-center mt-2 font-semibold">
                        {image.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-lg mb-6">
              For my first hybrid image, I chose two of my favorite sports
              athletes: NBA Legend Lebron James and MLB superstar Shohei Ohtani.
              Thus, I've created a new sports superstar: LeBron Ohtani.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-6">
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {images2_2_2.slice(0, 3).map((image, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
                      />
                      <p className="text-center mt-2 font-semibold">
                        {image.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-lg mb-6">
              As for my second hybrid image, I created New Francisco, a mix of
              San Francisco and New York City. This didn't work out too well
              because they were too similar, interestingly enough. It was hard
              to differentiate the two, especially in black and white image, up
              close. This is interesting because the earlier ones that failed
              for me were hybrid images that were too different.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-6">
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {images2_2_3.slice(0, 3).map((image, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
                      />
                      <p className="text-center mt-2 font-semibold">
                        {image.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-lg mb-6">
              As for my second hybrid image, I created New Francisco, a mix of
              San Francisco and New York City. This didn't work out too well
              because they were too similar, interestingly enough. It was hard
              to differentiate the two, especially in black and white image, up
              close. This is interesting because the earlier ones that failed
              for me were hybrid images that were too different.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-6">
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  <img
                    src="/project2/images/hybrid/fft.png"
                    alt="fft"
                    className="w-full h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
                  />
                  <p className="text-center mt-2 font-semibold">
                    This is the resulting outputs of the log fourier
                    transformation of the Othani/Lebron picture. The first image
                    (left to right) is the Lebron image, the second is the
                    Ohtani image, the third is the Low frequencies of Lebron,the
                    fourth are the high frequencies of Ohtani, and the final is
                    the hybrid image.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">
              2.3 Gaussian and Laplacian Stacks
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Finally, we used different filters to seamlessly blend two
              different pictures. The first step in this process was to create
              Gaussian and Laplacian stacks. A Gaussian stack is repeatedly
              convolving the image with a Gaussian to blur the picture, and then
              the Laplacian is created by subtracting each element in the
              Gaussian stack with the next one.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-6">
              <div className="flex-1">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                  {images2_3.slice(0, 4).map((image, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
                      />
                      <p className="text-center mt-2 font-semibold">
                        {image.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">
              2.4 Multiresolution Blending
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              We then used the Gaussian and Laplacian stacks with a Gaussian
              stack of a mask to blend the two. Below are are the results of
              blending two pictures.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-6">
              <div className="flex-1">
                <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
                  {images2_4.slice(0, 3).map((image, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
                      />
                      <p className="text-center mt-2 font-semibold">
                        {image.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-lg mt-6">
              For the last picture, I created a circular mask instead of doing a
              simple mask with a straight line.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
