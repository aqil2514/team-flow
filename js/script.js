function Update() {
  alert("Belum diupdate");
}

$(document).ready(function () {
  const image = $("img");

  image.on("contextmenu", function (e) {
    e.preventDefault(); // Mencegah menu konteks muncul saat klik kanan
  });

  $(window).on("scroll", function () {
    const jarakScroll = $(window).scrollTop();

    if (jarakScroll >= 619) {
      $("#gotoup").fadeIn();
    } else {
      $("#gotoup").fadeOut();
    }
  });
});
