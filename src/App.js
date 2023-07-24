import logo from './logo.svg';
import './App.css';
import TypeButton from "./component/button";
import TypeColor from "./component/color";
import ShowAlert from "./component/alert";
import {useState} from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "./firebase/firebase";



function App() {
    const [file, setFile] = useState("");

    // progress
    const [percent, setPercent] = useState(0);

    // Handle file upload event and update state
    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    const handleUpload = () => {
        if (!file) {
            alert("Please upload an image first!");
        }

        const storageRef = ref(storage, `/files/${file.name}`);

        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                });
            }
        );
    };
  return (
      <>
      <ShowAlert/>
      <TypeColor/>
          <div>
              <input type="file" onChange={handleChange} accept="/image/*" />
              <button onClick={handleUpload}>Upload to Firebase</button>
              <p>{percent} "% done"</p>
          </div>
      </>

  );
}

export default App;
