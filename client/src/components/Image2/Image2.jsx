import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../ui/card";
import "./Image2Style.css";

const Image2 = () => {
  return (
    <div
      className="bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/3d-render-technology-background-with-code-male-head_1048-5960.jpg?size=626&ext=jpg)",
      }}
    >
      <div className="w-full max-w-6xl mx-auto py-12 md:py-20 lg:py-28 px-4 md:px-6 bg-black bg-opacity-50">
        <div className="grid gap-24 md:gap-16">
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-10">
            <Card className="bg-slate-400">
              <CardHeader>
                <img
                  src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/252716745/original/d4d4ec997da3e5dc3df4bda52309c060bdca637a/develop-node-js-express-js-mongodb-react-js-next-js-app-using-tailwind-css-sass.jpg"
                  width="550"
                  height="310"
                  alt="Project 1"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Blog Project</h3>
                  <p className="text-muted-foreground ">
                    <Link
                      to="https://shubham-blog-project.netlify.app/"
                      className="btn"
                    >
                      open
                    </Link>
                  </p>
                </div>
                <div className="flex ">
                  <h3 className="text-xl font-semibold">github Link:</h3>
                  <p1 className="ml-3 mt-1">
                    https://github.com/shubhampriya1/Medium
                  </p1>
                </div>
                <div className="flex">
                  <h1 className="font-medium text-gray-800 ">Discription:</h1>
                  <p className="font-light text-gray-800 text-sm mt-1 ml-1">
                    This is full-stack web application that enables users to
                    register, log in, create, read, update, and delete blog
                    posts. The platform also supports providing an interactive
                    user experience.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-400">
              <CardHeader>
                <img
                  src="https://th.bing.com/th/id/OIP.PMBiSa-JBIhSrPqckRRxyQHaEK?w=307&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
                  width="550"
                  height="310"
                  alt="Project 2"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Chat-App</h3>
                  <p className="text-muted-foreground ">
                    <Link
                      to="https://shubham-priya-chat-app.netlify.app/"
                      className="btn"
                    >
                      open
                    </Link>
                  </p>
                </div>{" "}
                <div className="flex ">
                  <h3 className="text-xl font-semibold">github Link:</h3>
                  <p1 className="ml-3 mt-1">
                    https://github.com/shubhampriya1/chat-app
                  </p1>
                </div>
                <div className="flex">
                  <h1 className="font-medium text-gray-800 ">Discription:</h1>
                  <p className="font-light text-gray-800 text-sm mt-1 ml-1">
                    This project is a chat application developed using the MERN
                    stack (MongoDB, Express.js, React.js, Node.js). It provides
                    a platform for users to engage in real-time communication
                    through text messages.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-400">
              <CardHeader>
                <img
                  src="data:image/jpeg;base64,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"
                  width="550"
                  height="310"
                  alt="Project 3"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Myntra-clone</h3>
                  <p className="text-muted-foreground ">
                    <Link
                      to="https://github.com/shubhampriya1/MyntraClone"
                      className="btn"
                    >
                      open
                    </Link>
                  </p>
                </div>
                <div className="flex ">
                  <h3 className="text-xl font-semibold">github Link:</h3>
                  <p1 className="ml-3 mt-1">
                    https://github.com/shubhampriya1/MyntraClone
                  </p1>
                </div>
                <div className="flex">
                  <h1 className="font-medium text-gray-800 ">Discription:</h1>
                  <p className="font-light text-gray-800 text-sm mt-1 ml-1">
                    This project is a React Basic Html,CSS,JavaScript Myntra-clone App.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-400">
              <CardHeader>
                <img
                  src="https://miro.medium.com/v2/resize:fit:1358/1*dmOPE8fK3yhyrpz6FyQSPQ.png"
                  width="550"
                  height="310"
                  alt="Project 1"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Protfolio</h3>
                  <p className="text-muted-foreground ">
                    <Link
                      to="https://shubham-priya.netlify.app/home"
                      className="btn"
                    >
                      open
                    </Link>
                  </p>
                </div>
                <div className="flex ">
                  <h3 className="text-xl font-semibold">github Link:</h3>
                  <p1 className="ml-3 mt-1">
                    https://github.com/shubhampriya1/Portfolio
                  </p1>
                </div>
                <div className="flex">
                  <h1 className="font-medium text-gray-800 ">Discription:</h1>
                  <p className="font-light text-gray-800 text-sm mt-1 ml-1">
                    This project is a React Basic Project,Which tells about
                    Myself like Education,Qualification,Degree and Many more.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image2;
