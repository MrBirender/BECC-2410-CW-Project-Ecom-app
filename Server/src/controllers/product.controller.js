import { v2 as cloudinary } from "cloudinary";
import { Product } from "../models/product.model.js";

// add product:

const addProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      description,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    // receiving data from multer:
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    // creating an array of available images:
    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    // upload on cloudinary:
    const imagesUrl = await Promise.all(
      images.map(async (image) => {
        let response = cloudinary.uploader.upload(image.path, {
          resource_type: "auto",
        });
        return (await response).secure_url;
      })
    );
    console.log(imagesUrl);

    // storing the user in the database:
    const newProduct = new Product({
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      bestseller: bestseller === "true" ? true : false,
      date: Date.now(),
      sizes,
      image: imagesUrl,
    });

    console.log(newProduct);
    await newProduct.save();

    res.json({ success: true, message: "data submitted" });
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log(error);
  }
};

// remove Product:

const removeProduct = async (req, res) => {
    try {
        
        await Product.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "product removed" });

    } catch (error) {
        res.json({ success: false, message: error.message });
        console.log(error);
    }
};

// list products:

const listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ success: true, products });

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// single products;

const singleProduct = async (req, res) => {
  try {
    const {productId} = req.body
    const product = await Product.findById(productId);
    res.json({success:true, product})
  } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
  }
};

export { singleProduct, addProduct, removeProduct, listProducts };
