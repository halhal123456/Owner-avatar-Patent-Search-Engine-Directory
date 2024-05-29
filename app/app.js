// 获取搜索输入框和搜索按钮
var searchInput = document.querySelector(".search_input");
var searchButton = document.querySelector(".page_search");

// 给搜索按钮添加点击事件监听器
searchButton.addEventListener("click", function (event) {
  // 阻止默认表单提交行为
  event.preventDefault();

  // 获取输入框中的搜索关键词
  var searchTerm = searchInput.value.trim().toLowerCase();

  // 获取所有待搜索的链接
  var searchItems = document.querySelectorAll(".list-group-item");

  // 循环遍历每个链接，查找是否包含搜索关键词
  searchItems.forEach(function (item) {
    // 将链接文本内容转换为小写并去除首尾空格
    var itemText = item.textContent.trim().toLowerCase();

    // 如果链接文本内容中包含搜索关键词，则显示该链接，否则隐藏
    if (itemText.includes(searchTerm)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
