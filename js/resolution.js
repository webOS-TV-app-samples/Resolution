var webOSTVResolution = (function () {
  var instance;
  var vidRes;

  function retrieveDeviceInfo(vcb) {
    webOS.deviceInfo(function (device) {
      vidRes = {
        width: device.screenWidth,
        height: device.screenHeight,
        support4K: device.uhd ? true : false,
        support8K: device.uhd8K ? true : false,
      };
      if (vcb) vcb(vidRes);
    });
  }

  function getVideoResolution(cb) {
    if (vidRes) {
      cb(vidRes);
    } else {
      retrieveDeviceInfo(cb);
    }
  }

  function initInstance() {
    return {
      uiPlaneResolution: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      getVideoPlaneResolution: getVideoResolution,
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = initInstance();
      }
      return instance;
    },
  };
})();
