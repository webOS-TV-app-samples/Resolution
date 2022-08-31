window.addEventListener("load", function () {
  var res = webOSTVResolution.getInstance();

  document.getElementById("ui_res").innerHTML =
    res.uiPlaneResolution.width + "x" + res.uiPlaneResolution.height;

  res.getVideoPlaneResolution(function (vidRes) {
    document.getElementById("vid_res").innerHTML =
      vidRes.width + "x" + vidRes.height;
    document.getElementById("uhd").innerHTML = "" + vidRes.support4K;
    document.getElementById("uhd8k").innerHTML = "" + vidRes.support8K;
  });
});
