function showInfo(item) {
    const guide = {
      pet: "라벨을 제거하고 물로 헹군 후 투명 플라스틱으로 배출하세요.",
      milk: "내용물을 비우고 물로 헹군 후 종이팩 전용 수거함에 버리세요."
    };
    document.getElementById('info').innerText = guide[item];
  }
  