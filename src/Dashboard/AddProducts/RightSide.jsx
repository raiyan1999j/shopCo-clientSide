import { useField, useFormikContext } from "formik";
import { useEffect, useState } from "react";
import { HiOutlinePhoto } from "react-icons/hi2";
import { ImCross } from "react-icons/im";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";

export default function RightSide({ setFieldValue,conditionLoading }) {
  const [selectedImg, setSelection] = useState();
  const [imageContainer, setImgContainer] = useState([]);
  const [imageObj, setImageObj] = useState([]);
  const [animateCondition, setAnimate] = useState();
  const [image] = useField("image");
  const { submitForm } = useFormikContext();

  const handleImage = (event) => {
    const copy = [...imageObj];
    const nameOfImage = event.target.files[0].name;
    const file = event.target.files[0];
    const codeLen = 5;
    const character =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#";
    let finalCode = "";

    for (let repeat = 0; repeat < codeLen; repeat++) {
      const format = Math.floor(Math.random() * character.length);

      finalCode += character[format];
    }

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const wrap = {
          imageUrl: reader.result,
          imageName: nameOfImage,
          path: file,
          firebaseImgName: finalCode + nameOfImage,
        };
        copy.push(wrap);
        setImgContainer([...imageContainer, wrap.firebaseImgName]);
        setImageObj(copy);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (trackId, firebaseName) => {
    setAnimate(trackId);
    const storage = getStorage();
    const deleteRef = ref(storage, `image/${firebaseName}`);

    deleteObject(deleteRef);

    const imgContainerCopy = imageContainer.filter((_, index) => {
      return index !== trackId;
    });

    setImgContainer(imgContainerCopy);
    setTimeout(() => {
      const copy = imageObj.filter((value, index) => {
        return index !== trackId;
      });
      setImageObj(copy);
      setAnimate(null);
    }, 300);
  };

  useEffect(() => {
    function uploadToFirebase() {
      imageObj.map((items) => {
        const storage = getStorage();
        const imageRef = ref(storage, `image/${items.firebaseImgName}`);

        uploadBytes(imageRef, items.path);
      });
    }
    uploadToFirebase();
    setFieldValue("image", imageContainer);
  }, [imageObj]);

  useEffect(()=>{
    setImageObj([]);
  },[conditionLoading])
  return (
    <>
      <div className="w-[457px]">
        <div className="w-[441px] h-[428px] rounded-lg flex flex-col justify-center items-center border mb-8">
          {selectedImg ? (
            <img
              src={selectedImg}
              alt="selectedPhot"
              className="h-full w-full object-cover rounded-lg animate-FadeIn"
            />
          ) : (
            <>
              <HiOutlinePhoto className="text-5xl" />

              <p className="text-gray-600 font-fontShare capitalize text-base w-[70%] mt-4 text-center">
                select image from product gallery to preview image
              </p>
            </>
          )}
        </div>

        <div>
          <h4 className="text-[#232321] text-xl font-semibold font-rubik leading-normal capitalize mb-4">
            product gallery
          </h4>
          <div className="w-full h-[164px] border border-dashed border-[#232321] p-4 ">
            <label
              htmlFor="uploadImage"
              className="flex flex-col justify-center items-center"
            >
              <div className="mb-4">
                <HiOutlinePhoto className="text-[64px] text-[#003F62]" />
              </div>
              <div className="text-base font-semibold font-sans leading-normal text-[#70706E] text-center">
                <p>Drop your image here, or browse</p>
                <p className="pt-2">Jpeg, png are allowed</p>
              </div>
              <input
                type="file"
                accept="image/*"
                id="uploadImage"
                className="hidden"
                onChange={handleImage}
              />
            </label>
          </div>
        </div>
        {imageObj?.map((value, index) => {
          return (
            <div
              className={`mx-4 animate-FadeIn ${
                animateCondition === index
                  ? "animate-FlipOut"
                  : "animate-FadeIn"
              }`}
              key={index}
            >
              <div className="flex flex-row items-center mt-6">
                <div
                  className=" h-16 w-16 flex justify-center items-center rounded-lg"
                  onClick={() => {
                    setSelection(value.imageUrl);
                  }}
                >
                  {value.imageUrl ? (
                    <img
                      src={value.imageUrl}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <HiOutlinePhoto />
                  )}
                </div>
                <div
                  className="mx-4 w-[289px]"
                  onClick={() => {
                    setSelection(value.imageUrl);
                  }}
                >
                  <h4 className="text-[#232321] text-base font-semibold font-sans leading-normal capitalize mb-4">
                    {value.imageName}
                  </h4>
                </div>
                <div className="h-8 w-8 bg-[#003F62] flex justify-center items-center rounded-full">
                  <ImCross
                    className="text-white"
                    onClick={() => {
                      removeImage(index, value.firebaseImgName);
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex flex-row w-full mt-10">
          <div className="w-[220.5px] mr-4">
            <button
              className="h-12 w-full border border-[#232321] rounded-lg bg-white text-[#232321] text-sm font-medium font-rubik tracking-tight uppercase leading-normal transition-all duration-150 ease-in hover:text-white hover:bg-[#003F62]"
              onClick={() => {
                submitForm();
              }}
            >
              Add
            </button>
          </div>

          <div className="w-[220.5px]">
            <button className=" h-12 w-full border border-[#232321] rounded-lg text-[#232321] text-sm font-medium font-rubik tracking-tighter uppercase leading-normal transition-all duration-150 ease-in hover:text-white hover:bg-[#003F62]">
              cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
