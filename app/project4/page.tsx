import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowLeft } from "lucide-react";

interface ProjectImage {
  src: string;
  alt: string;
  label: string;
}

export default function Project4() {
  const originalImages: ProjectImage[] = [
    { src: "project4/shootingpictures/left.jpg", alt: "Original Left Image", label: "Left Image" },
    { src: "project4/shootingpictures/front.jpg", alt: "Original Center Image", label: "Center Image" },
    { src: "project4/shootingpictures/right.jpg", alt: "Original Right Image", label: "Right Image" },
  ];

  const projectedImages: ProjectImage[] = [
    { src: "project4/warpedimages/left_warped.jpg", alt: "Projected Left Image", label: "Left warped" },
    { src: "project4/warpedimages/right_warped.jpg", alt: "Projected Right Image", label: "Right warped" },
  ];

  const finalResult: ProjectImage = {
    src: "project4/finalmosaic/finalmosaic.jpg",
    alt: "Final Mosaic Result",
    label: "Final Stitched Mosaic",
  };

  const newImage:  ProjectImage = {
    src: "project4/sproul/front.jpg",
    alt: "Final Mosaic Result",
    label: "Sproul Hall, Berkeley",
  };

  const harrisCornerImage: ProjectImage = {
    src: "project4/sproul/front.jpg",
    alt: "Final Mosaic Result",
    label: "Sproul hall with Harris Points",
  };

  const anmsImage: ProjectImage = {
    src: "project4/sproul/anms.jpg",
    alt: "Final Mosaic Result",
    label: "Sproul Hall with ANMS Points",
  };

  const featureMatchingImage: ProjectImage = {
    src: "project4/sproul/feature_matching.jpg",
    alt: "Final Mosaic Result",
    label: "feature matching",
  };

  const badFeatureMatchingImage: ProjectImage = {
    src: "project4/dwinelle/feature_matching.jpg",
    alt: "Final Mosaic Result",
    label: "bad feature matching",
  };

  const manualStitchingImages: ProjectImage[] = [
    { src: "project4/manual/manual_left_center.jpg", alt: "Manual Left-Center Stitch", label: "Manual Left-Center Stitch" },
    { src: "project4/manual/manual_center_right.jpg", alt: "Manual Center-Right Stitch", label: "Manual Center-Right Stitch" },
  ];

  const autoStitchingImages: ProjectImage[] = [
    { src: "project4/auto/auto_left_center.jpg", alt: "Auto Left-Center Stitch", label: "Auto Left-Center Stitch" },
    { src: "project4/auto/auto_center_right.jpg", alt: "Auto Center-Right Stitch", label: "Auto Center-Right Stitch" },
  ];
  
  const topRowImages: ProjectImage[] = [
    {
      src: "project4/sproul/left.jpg",
      alt: "Dwinelle Hall",
      label: "Left Image",
    },
    {
      src: "project4/sproul/front.jpg",
      alt: "Dwinelle Hall with Harris Points",
      label: "Center Image",
    },
    {
      src: "project4/sproul/right.jpg",
      alt: "Dwinelle Hall with ANMS Points",
      label: "Right Image",
    },
  ];

  const bottomRowImages: ProjectImage[] = [
    {
      src: "project4/sproul/manualstitch.jpg",
      alt: "Feature Matching",
      label: "Manual Stitch",
    },
    {
      src: "project4/sproul/autostitch.jpg",
      alt: "Final Mosaic Result",
      label: "Auto Stitch",
    },
  ];
  const topRowImages2: ProjectImage[] = [
    {
      src: "project4/myroom/left.jpg",
      alt: "Dwinelle Hall",
      label: "Left Image",
    },
    {
      src: "project4/myroom/front.jpg",
      alt: "Dwinelle Hall with Harris Points",
      label: "Center Image",
    },
    {
      src: "project4/myroom/right.jpg",
      alt: "Dwinelle Hall with ANMS Points",
      label: "Right Image",
    },
  ];

  const bottomRowImages2: ProjectImage[] = [
    {
      src: "project4/myroom/manualstitch.jpg",
      alt: "Feature Matching",
      label: "Manual Stitch",
    },
    {
      src: "project4/myroom/autostitch.jpg",
      alt: "Final Mosaic Result",
      label: "Auto Stitch",
    },
  ];
  const topRowImages3: ProjectImage[] = [
    {
      src: "project4/mycouch/left.jpg",
      alt: "Dwinelle Hall",
      label: "Left Image",
    },
    {
      src: "project4/mycouch/front.jpg",
      alt: "Dwinelle Hall with Harris Points",
      label: "Center Image",
    },
    {
      src: "project4/mycouch/right.jpg",
      alt: "Dwinelle Hall with ANMS Points",
      label: "Right Image",
    },
  ];

  const bottomRowImages3: ProjectImage[] = [
    {
      src: "project4/mycouch/manualstitch.jpg",
      alt: "Feature Matching",
      label: "Manual Stitch",
    },
    {
      src: "project4/mycouch/autostitch.jpg",
      alt: "Final Mosaic Result",
      label: "Auto Stitch",
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
            Project 4: Image Stitching and Mosaics
          </h2>
          <p className="text-lg mb-6">
            In this project, we explore the fascinating world of image stitching to create panoramic mosaics. 
            We'll take you through the process of combining multiple images into a seamless panorama.
          </p>
        </section>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">Shooting Pictures</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              We start with three original images: a left view, a center view, and a right view. 
              These images have overlapping regions that we'll use to stitch them together.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {originalImages.map((image, index) => (
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
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">Recovering Homographies</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              To stitch the images together, we need to find the homography between each pair of overlapping images. 
              A homography is a 3x3 matrix that describes the transformation between two planes in a projective space.
            </p>
            <p className="text-lg mb-6">
              The process of recovering homographies involves the following steps:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-lg mb-6">
              <li>Find corresponding points. For this section, I found them manually</li>
              <li>Set up a system of linear equations to find a matrix H that will transform the corresponding points from one image to another</li>
              <li>Convert into matrix equation.</li>
              <li>Use a least squares solver to find H, your desired matrix to transform the points from image 1 to image2. </li>
            </ol>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">Warped Image and Rectification</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Next, we project the left and right images onto the main (center) view. 
              After calculating the Homography, we transform all of the pixels from the first image onto the second image using our Homography matrix that we calculated from the earlier step. 
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projectedImages.map((image, index) => (
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
          </CardContent>
        </Card>

        

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">Manual vs Auto Stitching: Left and Center Images</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              {originalImages.map((image, index) => (
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col items-center">
                <img
                  src={manualStitchingImages[0].src}
                  alt={manualStitchingImages[0].alt}
                  className="w-full h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
                />
                <p className="text-center mt-2 font-semibold">{manualStitchingImages[0].label}</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={autoStitchingImages[0].src}
                  alt={autoStitchingImages[0].alt}
                  className="w-full h-auto object-cover rounded-lg border  border-gray-200 dark:border-gray-800"
                />
                <p className="text-center mt-2 font-semibold">{autoStitchingImages[0].label}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">Manual vs Auto Stitching: Center and Right Images</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              {originalImages.map((image, index) => (
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col items-center">
                <img
                  src={manualStitchingImages[1].src}
                  alt={manualStitchingImages[1].alt}
                  className="w-full h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
                />
                <p className="text-center mt-2 font-semibold">{manualStitchingImages[1].label}</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={autoStitchingImages[1].src}
                  alt={autoStitchingImages[1].alt}
                  className="w-full h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
                />
                <p className="text-center mt-2 font-semibold">{autoStitchingImages[1].label}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">Final Mosaic</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Finally, we combine all three images to create our final panoramic mosaic. 
              This involves blending the overlapping regions to create a seamless transition between the images.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              {originalImages.map((image, index) => (
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
            <div className="flex flex-col items-center">
              <img
                src={finalResult.src}
                alt={finalResult.alt}
                className="w-full max-w-4xl h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
              />
              <p className="text-center mt-2 font-semibold">{finalResult.label}</p>
            </div>
            <p className="text-lg mt-6">
              The resulting mosaic combines all three original images into a single, wide-angle view, 
              effectively creating a panorama that captures a broader scene than any single image could.
            </p>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardContent className="p-12">
            <p className="text-lg mb-6">
              Now, we will follow the paper "Multi-Image Matching using multi scale oriented patches" to do autostitching instead of manual stitching.
              The image we will use is now this image.
              </p>
              <div className="flex flex-col items-center">
              <img
                src={newImage.src}
                alt={newImage.alt}
                className="w-full max-w-4xl h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
              />
              <p className="text-center mt-2 font-semibold">{newImage.label}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">Steps 1-3: Feature Detection and Matching</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Following the paper "Multi-Image Matching using Multi-Scale Oriented Patches" by Brown et al., we implement the following steps:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-lg mb-6">
              <li>
                <strong>Harris Interest Point Detector:</strong> We implement a single-scale Harris corner detector to identify key points in our images.
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mt-4">
                <img
                src={harrisCornerImage.src}
                alt={harrisCornerImage.alt}
                className="w-full max-w-4xl h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
              />
                            <p className="text-center mt-2 font-semibold">{harrisCornerImage.label}</p>

                </div>
              </li>
              <li>
                <strong>Adaptive Non-Maximal Suppression (ANMS):</strong> We apply ANMS to select a well-distributed subset of the detected corners. The way we do this is to find the points that have both the highest definition (as calculated 
                by our H function) and are both sparse by introducing the concept of a "suppression radius", which ensures sparsity between points. 
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mt-4">
                <img
                src={anmsImage.src}
                alt={anmsImage.alt}
                className="w-full max-w-4xl h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
              />
              <p className="text-center mt-2 font-semibold">{anmsImage.label}</p>

                </div>
              </li>
              <li>
                <strong>Feature Descriptor Extraction and Matching:</strong> We extract feature descriptors from the selected points and match them between image pairs.
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mt-4">
                <img
                src={featureMatchingImage.src}
                alt={featureMatchingImage.alt}
                className="w-full max-w-4xl h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
              />
              <p className="text-center mt-2 font-semibold">{featureMatchingImage.label}</p>
                </div>
              </li>
            </ol>
            <p className=" mt-2">As we can see, there are some pretty good matching features, but there are also some features that do not match up well. In the below image, there is 
              a more pronounced error in matching. This would result in a very bad translation, which is why I ended up ditching the below picture. 
            </p>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mt-4">
                <img
                src={badFeatureMatchingImage.src}
                alt={badFeatureMatchingImage.alt}
                className="w-full max-w-4xl h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
              />
              <p className="text-center mt-2 font-semibold">{badFeatureMatchingImage.label}</p>
                </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">Step 4: RANSAC, and also comparing with manual stitching</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Here are a few results! I ran into a few difficulties with my blending function, as well as picking better pictures. The way Ransac works is to randomly select 4 points and then calculate the homography, and if the distance
              between the original points and the transformed points are within a certain threshold, we call it an inlier. After a few times, we pick the homogrophy matrix with the most number of inliers.
            </p>
            <p className="text-lg mb-6">
              Sproul Hall
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">

              {topRowImages.map((image, index) => (
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {bottomRowImages.map((image, index) => (
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
            <p className="text-lg mb-6">
              My Room
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">

              {topRowImages2.map((image, index) => (
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {bottomRowImages2.map((image, index) => (
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
            <p className="text-lg mb-6">
              My Couch
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">

              {topRowImages3.map((image, index) => (
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {bottomRowImages3.map((image, index) => (
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
            <p className="text-lg mb-6">
              By far the worst image was my couch -- I feel like there were not enough defined edges, having lots of detail at the edges.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
          <div className="mt-6">
              <h3 className="text-2xl font-bold mb-4">The Coolest Thing I Learned</h3>
              <p className="text-lg">
                The most fascinating aspect of this project was learning about the Adaptive Non-Maximal Suppression (ANMS) technique. 
                ANMS not only identifies the strongest feature points but also ensures they are well-distributed across the image. 
                This balance between feature strength and spatial distribution is crucial for robust image stitching, as it prevents 
                the algorithm from overfitting to a single area of high contrast or texture. It's amazing how this seemingly simple 
                step significantly improves the quality and reliability of the final panorama, making the difference between a 
                disjointed collection of images and a seamless, immersive view.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}