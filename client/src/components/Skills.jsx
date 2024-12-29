export default function Skills() {
  return (
    <div
      className="bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://utfs.io/f/bdc32565-20ba-4370-b7a3-a8992242d377-jgikgq.png)",
      }}
    >
      <div className="w-full max-w-6xl mx-auto py-12 md:py-20 lg:py-28 px-4 md:px-6 bg-black bg-opacity-50">
        <div className="grid gap-12 md:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Technical Skills
            </h2>
            <p className="mt-2 text-gray-200">
              Here are the technical skills I&apos;ve developed over the years.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold">React</h3>
                <p className="mt-1 text-muted-foreground text-sm">
                  Proficient in building modern, responsive web applications
                  with React.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold">Node.js</h3>
                <p className="mt-1 text-muted-foreground text-sm">
                  Experienced in building scalable and efficient server-side
                  applications.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold">JavaScript</h3>
                <p className="mt-1 text-muted-foreground text-sm">
                  Adept at using JavaScript to write more robust and
                  maintainable code.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold">MongoDB</h3>
                <p className="mt-1 text-muted-foreground text-sm">
                  Experienced in designing and implementing NoSQL database
                  solutions.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold">HTML & CSS</h3>
                <p className="mt-1 text-muted-foreground text-sm">
                  Proficient in creating websites using HTML5 and CSS3.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold">TailwindCSS</h3>
                <p className="mt-1 text-muted-foreground text-sm">
                  Skilled in using TailwindCSS to style websites quickly and
                  efficiently.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Soft Skills
            </h2>
            <p className="mt-2 text-gray-200">
              In addition to my technical skills, I&apos;ve also developed the
              following soft skills.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold">Communication</h3>
                <p className="mt-1 text-muted-foreground text-sm">
                  Excellent written and verbal communication skills, able to
                  explain complex ideas clearly.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold">Problem-Solving</h3>
                <p className="mt-1 text-muted-foreground text-sm">
                  Adept at breaking down complex problems and finding creative
                  solutions.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold">Teamwork</h3>
                <p className="mt-1 text-muted-foreground text-sm">
                  Collaborative and able to work effectively in a team
                  environment.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold">Adaptability</h3>
                <p className="mt-1 text-muted-foreground text-sm">
                  Able to quickly learn new technologies and adjust to changing
                  requirements.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold">Time Management</h3>
                <p className="mt-1 text-muted-foreground text-sm">
                  Skilled at prioritizing tasks, meeting deadlines, and working
                  efficiently.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold">Creativity</h3>
                <p className="mt-1 text-muted-foreground text-sm">
                  Able to think outside the box and come up with innovative
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
