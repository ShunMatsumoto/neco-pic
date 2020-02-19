// $(function () {

//   $('#post_image').on('change', function(e) {

//     var file = e.target.file;

//     var fileReader = new FileReader();
//     fileReader.onload = function() {
//       var dataUri = this.result;

//       $('.file-preview').attr('src', dataUri);
//     }
//     fileReader.readAsDataURL(file);
//   });
// });

$(function() {
  $('#img-file').on('change', function(e) {
      // 1枚だけ表示する
      var file = e.target.files[0];

      // ファイルのブラウザ上でのURLを取得する
      var blobUrl = window.URL.createObjectURL(file);

      // img要素に表示
      $('.file-preview').attr('src', blobUrl);
  });
});