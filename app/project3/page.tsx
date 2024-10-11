import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowLeft } from "lucide-react";

interface ProjectImage {
  src: string;
  alt: string;
  label: string;
}

export default function Project3() {
  const sectionOneImages: ProjectImage[] = [
    {
      src: "project3/section1/justin.jpg",
      alt: "idk",
      label: "original Justin Picture",
    },
    {
      src: "project3/section1/lebron.jpg",
      alt: "idk",
      label: "original Lebron Picture",
    },
    {
      src: "project3/section1/midway_image.jpg",
      alt: "idk",
      label: "computed midway Picture",
    },
    {
      src: "project3/section1/delaunay_justin.jpg",
      alt: "idk",
      label: "Justin with Delaunay",
    },
    {
      src: "project3/section1/delaunay_lebron.jpg",
      alt: "idk",
      label: "Lebron with Delaunay",
    },
    {
      src: "project3/section1/delaunay_midway.jpg",
      alt: "idk",
      label: "Midway with Delaunay",
    },
  ];

  const sectionThreeImages: ProjectImage[] = [
    {
      src: "project3/section3/0before.jpg",
      alt: "Original",
      label: "Original",
    },
    {
      src: "project3/section3/1before.jpg",
      alt: "Original",
      label: "Original",
    },
    {
      src: "project3/section3/2before.jpg",
      alt: "Original",
      label: "Original",
    },
    {
      src: "project3/section3/3before.jpg",
      alt: "Original",
      label: "Original",
    },
    { src: "project3/section3/4before.jpg", alt: "Image 5", label: "Original" },
    { src: "project3/section3/0after.jpg", alt: "Image 6", label: "Warped" },
    { src: "project3/section3/1after.jpg", alt: "Image 7", label: "Warped" },
    { src: "project3/section3/2after.jpg", alt: "Image 8", label: "Warped" },
    { src: "project3/section3/3after.jpg", alt: "Image 9", label: "Warped" },
    { src: "project3/section3/4after.jpg", alt: "Image 10", label: "Warped" },
  ];

  const sectionFourImages: ProjectImage[] = [
    {
      src: "project3/section4/avg_before.jpg",
      alt: "Image 1",
      label: "Original",
    },
    {
      src: "project3/section4/justin_before.jpg",
      alt: "Image 2",
      label: "Original",
    },
    {
      src: "project3/section4/avg_after.jpg",
      alt: "Image 3",
      label: "Avg on Justin",
    },
    {
      src: "project3/section4/justin_after.jpg",
      alt: "Image 4",
      label: "Justin on Avg",
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
            Project 3: Advanced Image Processing
          </h2>
          <p className="text-lg mb-6">
            In this project, we delve into more advanced image processing
            techniques, exploring complex algorithms and their applications in
            computer vision.
          </p>
        </section>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">
              Correspondences and MidWay Face
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              I chose to use myself, and LeBron James as my two pictures. The
              goal is to morph the two pictures into a midway face, and
              eventually get them to morph into one another. The first step is
              manually selecting similar points. The points I chose were mainly
              defining facial features, like eyes, mouth, nose, etc.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectionOneImages.slice(0, 6).map((image, index) => (
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
            <p className="text-lg mt-6">
              After choosing the correct correspondeces, we computed the midway
              face. To do this, we first computed the affine function to map the
              triangulations from my face to the ones in the midway picture.
              Then, we warp the triangle by using the computed matrix.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">Face Morphing Animation</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Then, we extended just calculating the midway state to creating a
              gif of me transitioning to LeBron. To do this, we had a warp
              fraction and cross dissolve fraction, which would tell how much of
              geometry of the first picture to use, and how much color of the
              first picture to use. Refresh to reload the gif.
            </p>
            <div className="flex flex-col items-center">
              <img
                src="project3/section2/morphed.gif"
                alt="Face morphing animation"
                className="w-full max-w-2xl h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
              />
              <p className="text-center mt-2 font-semibold">
                Morphing Animation: Justin to LeBron
              </p>
            </div>
            <p className="text-lg mt-6">
              This is the resulting transation from me to LeBron.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">Mean face of population</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Next, we created the mean face over a given dataset of faces. I
              used the FEI Face database, and I used their preset frontal images
              spatially normalized dataset, mainly because it was manually
              annotated already for me. Here is the mean face.
            </p>
            <div className="flex flex-col items-center mt-6">
              <img
                src="project3/section3/average.jpg"
                alt="Average face"
                className="w-full max-w-md h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
              />
              <p className="text-center mt-3 font-semibold">average image</p>
            </div>
            <p className="text-lg mb-6">
              As you can see, the image is pretty blurry, as there are many
              faces that we are averaging over.
            </p>
          </CardContent>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Now, we&apos;ll morph some faces into the average face.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {sectionThreeImages.map((image, index) => (
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
              As we can see, some images are better than otherse, but as a
              whole, some look pretty natural!
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">
              Me vs Mean Population Face
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Here, we try warping my face onto the average face of the FEI
              dataset, and we try morphing the aerage FEI dataset onto my
              geometry.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {sectionFourImages.map((image, index) => (
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
              As we can see, not a very good result! I have a few theories for
              this -- one, human error -- I could&apos;ve done a better job on
              matching the coordinates up. Especially the nose, and the forehead
              area. Two, the facial features and my facial features just
              aren&apos;t very compatible. As someone with a thinner face,
              it&apos;s very hard to warp myself onto a more circular face, as
              the average is. Maybe it would&apos;ve been better do try to warp
              someone like my dad, who has a more similar facial shape to the
              average to start with.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">Caricature</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Finally, I created a caricature of myself. All I did was to make
              the differences between the coordinates of the average image and
              my image more pronounced, using a factor alpha. This is the result
              of having an alpha of 1.5.
            </p>
            <div className="flex flex-col items-center mt-6">
              <img
                src="project3/section5/justin_after.jpg"
                alt="caricature face"
                className="w-full max-w-md h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
              />
              <p className="text-center mt-3 font-semibold">
                Caricature Justin
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
          <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
            <CardTitle className="text-2xl">Bells and Whistles</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              Finally, I made a video of myself growing up. I put it behind a
              song of &quot;dancing queen&quot;, which I felt was fitting
              because the final picture is me at my senior prom, where I was 17
              (+1).
            </p>
            <div className="flex justify-center">
              <video
                controls
                className="w-full max-w-3xl rounded-lg border border-gray-200 dark:border-gray-800"
              >
                <source src="project3/section6/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-lg mt-6">
              (You are the dancing queen, young and sweet, only seventeeeeeen)
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
