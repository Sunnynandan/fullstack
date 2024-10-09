import { Navigate, useNavigate } from "react-router";
export const NotFound404 = (props) => {
  const nav = useNavigate();
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-cream ">
      <h1 className="text-5xl font-bold mb-2 text-danger">404 NOT FOUND</h1>
      <p className="text-2xl mb-4">The page you're looking for doesn't exist</p>
      <button onClick={() => nav("/")} className="hover:text-coral">
        Go back to Home Page
      </button>
    </div>
  );
};
