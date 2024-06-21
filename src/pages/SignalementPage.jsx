import React, { useState } from 'react';
import Header from "../components/Header";
import ESIImg from "../assets/images/ESIImg.png";
import Footer from '../components/Footer';
import { BiChevronRight } from "react-icons/bi";

const SignalementPage = () => {
  const [photos, setPhotos] = useState([{ id: 1, name: 'photo_1' }, { id: 2, name: 'photo_2' }]);
  const [newPhotoId, setNewPhotoId] = useState(3);

  const handleAddPhoto = () => {
    if (photos.length < 5) {
      setPhotos([...photos, { id: newPhotoId, name: `photo_${newPhotoId}` }]);
      setNewPhotoId(newPhotoId + 1);
    }
  };

  const handleRemovePhoto = (id) => {
    setPhotos(photos.filter(photo => photo.id !== id));
  };

  return (
    <div className="relative">
      <div>
        <img
          className="w-full h-[calc(142vh)] absolute top-0"
          src={ESIImg}
          alt="Recherche"
        />
        <Header />
        <div className="flex flex-col min-h-screen relative justify-center items-center pt-20">
          <form className="relative space-y-6 bg-white p-4 rounded-lg shadow-lg w-[70%] mx-auto mt-20 opacity-90 mb-20 px-8">
            <div className="text-center text-cyan-950 text-[28px] font-semibold font-['Open Sans'] mb-6">
              “ Help us make ESI a better place “
            </div>
            <div className="space-y-4">
              <div className="flex space-x-8">
                <div className=" flex items-center w-1/2">
                  <label className="w-32 text-[18px] font-semibold text-gray-700">Full name :</label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="h-[40px] flex-1 block border border-black/20 rounded-md shadow-sm focus:border-main-blue  p-3"
                  />
                </div>
                <div className=" flex items-center w-1/2">
                  <label className="w-32 text-[18px] font-semibold text-gray-700 text-center">Email :</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="h-[40px] flex-1 block border border-black/20  rounded-md shadow-sm focus:border-main-blue p-3"
                  />
                </div>
              </div>
              <div className="flex space-x-8">
                <div className="flex-1 flex items-center">
                  <label className="w-32 text-[18px] font-semibold text-gray-700">Place :</label>
                  <input
                    type="text"
                    placeholder="Higher school of Computer science"
                    className="h-[40px] flex-1 mt-1 block border border-black/20  rounded-md shadow-sm focus:border-main-blue  p-3"
                  />
                </div>
                <div className="flex-1 flex items-center">
                  <label className="w-32 text-[18px] font-semibold text-gray-700 text-center">Date :</label>
                  <input
                    type="text"
                    placeholder="dd/mm/yyyy"
                    className="h-[40px] flex-1 mt-1 block border border-black/20  rounded-md shadow-sm focus:border-main-blue  p-3"
                  />
                </div>
              </div>
              <div className="flex items-center w-80">
                <label className="w-32 text-[18px] font-semibold text-gray-700">Type :</label>
                <select className="h-[40px] flex-1 mt-1 block border border-black/20  rounded-md shadow-sm focus:border-black p-2">
                  <option>Service unavailable</option>
                  <option>Security</option>
                  <option>Hygiene</option>
                  <option>Unacceptable behavior</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex items-start">
                <label className="w-32 text-[18px] font-semibold text-gray-700">Problem :</label>
                <textarea
                  placeholder="Please describe the anomaly encountered precisely"
                  className="flex-1 mt-1 block border border-black/20  rounded-md shadow-sm focus:border-main-blue h-40 p-3"
                ></textarea>
              </div>
              <div className="flex items-center gap-6">
                <label className="w-34 text-[18px] font-semibold text-gray-700">Photos/Videos :</label>
                <div className="flex-1 mt-2 flex flex-wrap items-center gap-2">
                  {photos.map(photo => (
                    <div key={photo.id} className="flex items-center border border-dashed border-gray-300 rounded-md p-2 gap-4 font">
                      <img src={ESIImg} alt={photo.name} className="h-10 w-10" />
                      <span className="ml-2">{photo.name}</span>
                      <button
                        type="button"
                        onClick={() => handleRemovePhoto(photo.id)}
                        className="ml-2 text-main-black font-bold"
                      >
                        X
                      </button>
                    </div>
                  ))}
                  {photos.length < 5 && (
                    <button
                      type="button"
                      onClick={handleAddPhoto}
                      className="h-12 w-12 border border-dashed border-gray-300 rounded-md flex items-center justify-center text-main-blue text-[30px] font-semibold"
                    >
                      +
                    </button>
                  )}
                </div>
              </div>
              <p className="mt-2 text-sm font-semibold text-gray-500">You can insert up to 5 photos and videos.</p>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex items-center gap-x-4 px-10 py-2 font-medium text-white bg-main-blue group"
                >
                  <span>Send</span>
                  <BiChevronRight className="text-lg group-hover:translate-x-2 transition" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </div>
      
    </div>
  );
};

export default SignalementPage;
