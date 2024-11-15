import { Unity, useUnityContext } from "react-unity-webgl";
import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Vortex } from "react-loader-spinner";
function UnityWebGLBuild() {
  const { unityProvider, loadingProgression, isLoaded, unload } =
    useUnityContext({
      loaderUrl: "/build/WebGL.loader.js",
      dataUrl: "/build/WebGL.data",
      frameworkUrl: "/build/WebGL.framework.js",
      codeUrl: "/build/WebGL.wasm",
    });
  const navigate = useNavigate();

  const [devicePixelRatio, setDevicePixelRatio] = useState(
    window.devicePixelRatio
  );

  useEffect(
    function () {
      // A function which will update the device pixel ratio of the Unity
      // Application to match the device pixel ratio of the browser.
      const updateDevicePixelRatio = function () {
        setDevicePixelRatio(window.devicePixelRatio);
      };
      // A media matcher which watches for changes in the device pixel ratio.
      const mediaMatcher = window.matchMedia(
        `screen and (resolution: ${devicePixelRatio}dppx)`
      );
      // Adding an event listener to the media matcher which will update the
      // device pixel ratio of the Unity Application when the device pixel
      // ratio changes.
      mediaMatcher.addEventListener("change", updateDevicePixelRatio);
      return function () {
        // Removing the event listener when the component unmounts.
        mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
      };
    },
    [devicePixelRatio]
  );
  const onBackButtonClick = async () => {
    await unload();
    navigate("/");
  };

  return (
    <Fragment>
      {isLoaded && (
        <button
          type="submit"
          onClick={onBackButtonClick}
          style={{
            position: "absolute",
            width: "40px",
            height: "40px",
            margin: "20px",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "rgb(0, 176, 255)",
            color: "rgb(30, 30, 30)", // White text
            fontSize: "20px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            transition: "background 0.3s",
            left: "0px",
            top: "0px",
            zIndex: "1",
          }}
        >
          &#8592;
        </button>
      )}
      {!isLoaded && (
        // <div style={{ position: "relative", width: "inherit" }}>
        <div
          style={{
            //position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "fill-content",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <p
            style={{
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Vortex
              visible={true}
              height="80"
              width="80"
              ariaLabel="vortex-loading"
              wrapperStyle={{ margin: "0px" }}
              wrapperClass="vortex-wrapper"
              colors={["cyan", "cyan", "cyan", "cyan", "cyan", "cyan"]}
            />
            <br />
            Loading Application...
            <br />
            {Math.round(loadingProgression * 100)}%
          </p>
        </div>
        //  </div>
      )}

      {
        <Unity
          unityProvider={unityProvider}
          style={{
            visibility: isLoaded ? "visible" : "hidden",
            width: "95vw",
            marginLeft: "1.5vw",
            marginRight: "1.5vw",
            maxHeight: "1000px",
            position: "absolute",
            top: "12.5vh",
            left: "1vw",
          }}
          devicePixelRatio={devicePixelRatio}
        />
      }
    </Fragment>
  );
}

export default UnityWebGLBuild;
