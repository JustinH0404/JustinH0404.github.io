import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Camera, Code } from "lucide-react";

export default function Home() {
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
            Welcome to My CS 180 Portfolio
          </h2>
          <p className="text-lg mb-6">
            This portfolio showcases the projects I&quot;ve completed for CS
            180. Each project demonstrates different aspects of computer vision
            and image processing techniques.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
            <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
              <CardTitle className="text-2xl flex items-center">
                <Camera className="mr-2 h-6 w-6" />
                Project 1: Colorizing Prokudin-Gorskii Photos
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-lg mb-6">
                In this project, we colorize black and white photos using the
                Prokudin-Gorskii method.
              </p>
              <Link
                href="/project1"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project Details
              </Link>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
            <CardHeader className="bg-black dark:bg-white text-white dark:text-black">
              <CardTitle className="text-2xl flex items-center">
                <Code className="mr-2 h-6 w-6" />
                Project 2: Image Filtering and Hybrid Images
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-lg mb-6">
                This project focuses on image filtering techniques and creating
                hybrid images.
              </p>
              <Link
                href="/project2"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project Details
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
