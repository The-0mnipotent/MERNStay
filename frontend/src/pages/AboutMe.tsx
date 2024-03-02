const AboutMe = () => {
  return (
    <>
      <div className="py-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-slate-800">About Me</h1>
        <p className="mb-4 text-slate-700">
          I have built this website to showcase my skills. I am a full stack
          MERN developer. To build this website, MERN stack is used along with
          several standard packages such as TypeScript, Tailwind CSS, React
          Query and React Hook Form. I have also used production ready services
          such as Cloudinary and Stripe and hosted it on render.com.
          <p>
            Further I am planning to implement automated tests to the website
            using playwrite.
          </p>
          <br /> The tech stack of this website contains :
        </p>
        <p className="mb-4 text-slate-700">
          <h1 className="text-bold">Client Side/ Front-end</h1>
          <br />
          <li>@stripe/react-stripe-js: 2.5.1</li>
          <li>@stripe/stripe-js: 3.0.6</li>
          <li>react: 18.2.0</li>
          <li>react-datepicker: 6.2.0</li>
          <li>react-dom: 18.2.0</li>
          <li>react-hook-form: 7.49.2</li>
          <li>react-icons: 5.0.1</li>
          <li>react-query: 3.39.3</li>
          <li>react-router-dom: 6.22.2</li>
        </p>
        <p className="mb-4 text-slate-700">
          <h1 className="text-bold">API Side/Backend</h1>
          <br />
          <li>bcryptjs: 2.4.3</li>
          <li>cloudinary: 2.0.2</li>
          <li>cookie-parser: 1.4.6</li>
          <li>cors: 2.8.5</li>
          <li>cross-env: 7.0.3</li>
          <li>dotenv: 16.3.1</li>
          <li>express: 4.18.2</li>
          <li>express-validator: 7.0.1</li>
          <li>jsonwebtoken: 9.0.2</li>
          <li>mongodb: 6.3.0</li>
          <li>mongoose: 8.2.0</li>
          <li>multer: 1.4.5-lts.1</li>
          <li>stripe: 14.19.0</li>
        </p>
        <p className="mb-4 text-slate-700 ">
          Know More About me :{" "}
          <button
            className="bg-gray hover:text-col1"
            onClick={() => {
              window.open("https://arpit-singh.netlify.app", "_blank");
            }}
          >
            https://arpit-singh.netlify.app
          </button>
        </p>
        <p className="mb-4 text-slate-700">
          Get the Source Code :{" "}
          <button
            className="bg-gray hover:text-col1"
            onClick={() => {
              window.open(
                "https://github.com/The-0mnipotent/MERNStay",
                "_blank"
              );
            }}
          >
            https://github.com/The-0mnipotent/MERNStay
          </button>
        </p>
        <p className="mb-4 text-slate-700">
          CheckOut my LinkedIn :{" "}
          <button
            className="bg-gray hover:text-col1"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/contact-arpit-singh",
                "_blank"
              );
            }}
          >
            https://www.linkedin.com/in/contact-arpit-singh
          </button>
        </p>
      </div>
    </>
  );
};

export default AboutMe;
