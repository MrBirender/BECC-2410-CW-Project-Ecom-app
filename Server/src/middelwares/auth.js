import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.json({ success: false, message: "Not authorised login again" });
  }

  /* decoding user token */
  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SECERET);
    req.body.userId = decodeToken.id;
    // console.log(decodeToken.id)
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
