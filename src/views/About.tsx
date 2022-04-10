import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">About page</h1>
      <Link className="mt-2 text-blue-600 hover:text-blue-800 visited:text-purple-600" to="/home">Home</Link>
    </div>
  )
};

export default About;
