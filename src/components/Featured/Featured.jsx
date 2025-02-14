import React from "react";
import Property from '../../assets/prop1.jpg';
import Property2 from '../../assets/prop2.jpg';
import Property3 from '../../assets/prop3.jpg';
import Property4 from '../../assets/prop4.jpg';
import FeaturedJson from '../Featured/Featured.json';

const Featured = () => {
  return (
    <div className="properties mt-10 mb-10 w-[80%] mx-auto">
      {/* Title Section */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Featured Properties</h2>
        <div className="flex items-center">
          <div className=" border border-gray-400 w-[70%] md:w-1/3"></div>
            <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center">
              <i className="fa-solid fa-arrow-right text-gray-400"></i>
            </div>
          </div>
        </div>

      {/* Property Cards */}
      <div className="flex flex-col md:flex-row items-center gap-5 w-full">
        {FeaturedJson.map((property) => {
          let image;

          // Matching JSON 'image' with the imported assets
          switch (property.image) {
            case 'prop1.jpg':
              image = Property;
              break;
            case 'prop2.jpg':
              image = Property2;
              break;
            case 'prop3.jpg':
              image = Property3;
              break;
            case 'prop4.jpg':
              image = Property4;
              break;
            default:
              image = Property; // Default to first image if not found
          }

          return (
            <div key={property.id} className="bg-white p-4 rounded-2xl flex-1 transition-transform duration-300 hover:-translate-y-2 border-2 border-green-800">
              <div className="w-full">
                <img src={image} alt={property.name} className="w-full h-60 object-cover rounded-lg" />
              </div>
              <div className="mt-4">
                <h2 className="font-bold md:text-xl ">{property.name}</h2>
                <p className="md:text-xl text-black font-normal">{property.price}</p>
                <div className="flex flex-col md:flex-row md:items-center gap-2 mt-2">
                  {property.features.map((feature, index) => (
                    <h2 key={index} className="bg-green-200 text-green-800 p-2 text-center rounded-full font-bold">
                      {feature}
                    </h2>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
