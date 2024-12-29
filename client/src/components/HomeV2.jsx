import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function Component() {
  return (
    <div className="relative flex flex-col min-h-[100dvh]">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover"
        src="https://utfs.io/f/8a49c471-42ec-4c40-8187-35cff480c390-lwtg79.webm"
        autoPlay
        loop
        muted
      />
      <header className="px-4 lg:px-6 h-14 flex items-center relative z-10">
        <Link
          to="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <span className="sr-only">Jane Doe&apos;s Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            to="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Work
          </Link>
          <Link
            to="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            to="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 relative z-10">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container space-y-10 xl:space-y-16">
            <div className="grid gap-4 px-4 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Shubham Priya
                </h1>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Web Developer
                </h2>
                <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                  I create beautiful and intuitive digital experiences that
                  delight users and drive business results.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <img
                  src="/placeholder"
                  width="400"
                  height="400"
                  alt="Jane Doe"
                  className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Featured Projects
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of my recent design work.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <img
                    src="https://utfs.io/f/8f09024d-8f2e-47a2-b637-16aa1c016dff-ca7koy.jpg"
                    width="550"
                    height="310"
                    alt="Project 1"
                    className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Project 1</h3>
                  <p className="text-muted-foreground">
                    A modern and responsive website design for a leading
                    technology company.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="https://utfs.io/f/8f09024d-8f2e-47a2-b637-16aa1c016dff-ca7koy.jpg"
                    width="550"
                    height="310"
                    alt="Project 2"
                    className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Project 2</h3>
                  <p className="text-muted-foreground">
                    A sleek and intuitive mobile app design for a fitness
                    tracking platform.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="https://utfs.io/f/8f09024d-8f2e-47a2-b637-16aa1c016dff-ca7koy.jpg"
                    width="550"
                    height="310"
                    alt="Project 3"
                    className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Project 3</h3>
                  <p className="text-muted-foreground">
                    A visually stunning e-commerce website design for a high-end
                    fashion brand.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t relative z-10">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Shubham Priya. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            to="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Email
          </Link>
          <Link
            to="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            LinkedIn
          </Link>
          <Link
            to="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Instagram
          </Link>
        </nav>
      </footer>
    </div>
  );
}
