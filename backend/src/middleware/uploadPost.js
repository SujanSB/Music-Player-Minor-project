import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname == "thumbnail") {
      cb(null, "./media/musicThumb");
    } else {
      cb(null, "./media/musicSrc");
    }
  },

  filename: function (req, file, cb) {
    cb(null, new Date().toString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // rejecting and accepting file.
  if (file.fieldname == "thumbnail") {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  } else {
      console.log(file.mimetype)
    if (file.mimetype === "audio/mpeg" || file.mimetype === "audio/x-mpeg-3") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
};

const upload = multer({
  storage: storage,

  limits: {
    fileSize: 1024 * 1024 * 5, // 5 mb
  },

  fileFilter: fileFilter,
});

export default upload;
