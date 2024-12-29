import { GoogleGenerativeAI } from "@google/generative-ai";

export async function chat(req, res) {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: "Text is required" });
  }

  try {
    const generativeAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

    const model = generativeAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const prompt = `### Summary for Shubham Priya

                    Shubham Priya is a motivated B.Tech student in Electrical Engineering at NIT Patna, graduating in June 2025 with a CGPA of 7. She has a strong foundation in web development and backend technologies, including React.js, Node.js, Express.js, and MongoDB. Shubham has practical experience through an internship with Bihar State Power Transmission Company Limited, focusing on equipment inspection, fault analysis, and safety compliance in high-voltage systems.

                    #### Key Projects:
                    1. **Medium**: A responsive blogging platform with features like CRUD operations, rich text editing, and a scalable backend.
                    2. **Chat App**: A real-time chat application with Socket.io integration, robust user authentication, and scalable backend architecture.
                    3. **User-Based Todo**: A task management app featuring JWT authentication, dark mode, and performance optimization with pagination.

                    #### Skills:
                    - **Programming**: JavaScript, Java, HTML/CSS.
                    - **Tools**: VS Code, MongoDB Compass, GitHub.
                    - **Frameworks**: React.js, Node.js, Express.js, MongoDB.

                    #### Achievements:
                    - Solved 200+ coding problems on platforms like LeetCode and GFG.
                    - Organized "Machine MayHem," a technical event at Robotics Club NITP.

                    **Social Links**:
                    - [GitHub](https://github.com/shubhampriya1)
                    - [LinkedIn](https://www.linkedin.com/in/shubham-priya-2112a8262/)
                    This is about me then follows the question which you need to answer depending on the context. Note you need to answer in positive way so that recruiter can get impressed.
                    And also add emoji to make chat good.

                    Question: ${text}
          `;

    const response = await model.generateContent(prompt);

    const message =
      response?.response?.candidates?.[0]?.content?.parts?.[0]?.text;

    return res.json({ message });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
