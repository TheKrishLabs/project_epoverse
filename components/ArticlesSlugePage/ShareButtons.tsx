import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function ShareButtons() {
  return (
    <div className="flex gap-3 mt-4">

      <button className="bg-blue-600 text-white p-2 rounded">
        <FaFacebookF />
      </button>

      <button className="bg-black text-white p-2 rounded">
        <FaTwitter />
      </button>

      <button className="bg-blue-700 text-white p-2 rounded">
        <FaLinkedinIn />
      </button>

      <button className="bg-green-500 text-white p-2 rounded">
        <FaWhatsapp />
      </button>

    </div>
  );
}