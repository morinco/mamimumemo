function easterEgg(event) {
  
  const key = event.key;
  sessionStorage["key"] = sessionStorage["key"] + key;
  var str = sessionStorage["key"];

  // メッセージボックスを表示
  if (str.includes('ArrowUpArrowUpArrowDownArrowDownArrowRightArrowLeftab')) {
    sessionStorage["key"] = "";
    alert(`イースターエッグ！`);
  } else {
  }
}

