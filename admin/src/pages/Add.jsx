import React from "react";
import { assets } from "../assets/admin_assets/assets";

const Add = () => {
  return (
    <form className="flex flex-col w-full items-start gap-8 text-neutral-600 mb-10">
      <div>
        <p className="text-2xl mb-2">Upload Images</p>
        <div className="flex gap-4">
          <label htmlFor="image1">
            <img className="w-40" src={assets.upload_area} alt="upload_img" />
            <input type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img className="w-40" src={assets.upload_area} alt="upload_img" />
            <input type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img className="w-40" src={assets.upload_area} alt="upload_img" />
            <input type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img className="w-40" src={assets.upload_area} alt="upload_img" />
            <input type="file" id="image4" hidden />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="text-2xl mb-2 ">Prouduct name</p>
        <input
          type="text"
          className="max-w-[600px] w-full px-3 py-2 "
          placeholder="Type here"
          required
        />
      </div>

      <div className="w-full">
        <p className="text-2xl mb-2 ">Prouduct description</p>
        <textarea
          type="text"
          className="max-w-[600px] w-full px-3 py-4 "
          placeholder="write content here"
          required
        />
      </div>

      {/* select tag */}
      <div className="flex flex-col sm:flex-row gap-8">
        <div>
          <p className="text-2xl mb-2">Product category</p>
          <select className="w-full px-3 py-2">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className="text-2xl mb-2">Subcategory</p>
          <select className="w-full px-3 py-2">
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className="text-2xl mb-2">Product price</p>
          <input className="w-full px-3 py-2 sm:w-[120px]" type="number" placeholder="25" />
        </div>
      </div>

      {/* sizes */}
      <div className="">
        <p className="text-2xl mb-2">Product Sizes</p>
        <div className="flex gap-3 text-2xl">
          <div className="bg-slate-200 px-5 py-3 cursor-pointer">
            S
          </div>
          <div className="bg-slate-200 px-5 py-3 cursor-pointer">
            M
          </div>
          <div className="bg-slate-200 px-5 py-3 cursor-pointer">
            L
          </div>
          <div className="bg-slate-200 px-5 py-3 cursor-pointer">
            XL
          </div>
          <div className="bg-slate-200 px-5 py-3 cursor-pointer">
            XXL
          </div>
        </div>
      </div>

      {/* bestseller */}
      <div className="flex items-center gap-3 text-xl mt-2">
        <input className="w-4 h-4" type="checkbox"  id="bestseller" />
        <label className="cursor-pointer" htmlFor="bestseller">Add to bestseller</label>
      </div>

      {/* button */}
      <button className="bg-black text-2xl text-white w-32 py-5" type="submit">ADD</button>
    </form>
  );
};

export default Add;
