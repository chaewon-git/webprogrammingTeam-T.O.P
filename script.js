
// 검색 결과 표시
function showItem(item) {
  const itemName = document.getElementById("item-name");
  const itemCategory = document.getElementById("item-category");
  const contentsContainer = document.getElementById("item-contents");

  if (itemName) itemName.textContent = item.name;
  if (itemCategory) itemCategory.textContent = item.category.join(", ");

  contentsContainer.className = "guide-description";
  contentsContainer.innerHTML = "";
  const ul = document.createElement("ul");
  ul.className = "checklist";

  item.contents.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  });

  contentsContainer.appendChild(ul);
}

// 검색
function searchGarbage(queryParam) {
  const query = queryParam || document.getElementById("search-input").value.trim();

  if (!query) return;

  const lowerQuery = query.toLowerCase().replace(/\s+/g, '');

  const found = garbageData.find(item => {
    const nameMatch = item.name.toLowerCase().replace(/\s+/g, '').includes(lowerQuery);
    const categoryMatch = item.category.some(cat => cat.toLowerCase().includes(lowerQuery));
    return nameMatch || categoryMatch;
  });

  const guideTitle = document.querySelector(".guide-title");
  const methodTitle = document.querySelector(".method-title");
  const contentsContainer = document.getElementById("item-contents");

  if (found) {
    if (methodTitle) methodTitle.style.display = "block";
    if (contentsContainer) {
      contentsContainer.style.display = "block";
      showItem(found);
    }
  } else {
    if (methodTitle) methodTitle.style.display = "none";
    if (contentsContainer) {
      contentsContainer.innerHTML = "";
      contentsContainer.style.display = "none";
    }
    if (guideTitle) {
      guideTitle.innerHTML = `
        <div class="not-found">${query}에 대한 검색 결과가 없습니다.</div>
        <div class="not-found-sub">추가를 원하시면 고객센터로 문의해 주세요.</div>
      `;
    }
  }
}

function searchGarbageExact() {
  const input = document.getElementById("search-input").value.trim();
  const matchedItem = garbageData.find(item => item.name === input);

  if (matchedItem) {
    showItem(matchedItem);
  } else {
    alert("일치하는 항목이 없습니다.");
  }
}

//
window.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");

  // recycle.html로 이동
  if (searchButton && searchInput) {
    searchButton.addEventListener("click", () => {
      const query = searchInput.value.trim();
      if (!query) {
        alert("검색어를 입력해 주세요.");
        return;
      }
      window.location.href = `recycle.html?query=${encodeURIComponent(query)}`;
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const query = searchInput.value.trim();
        if (!query) {
          alert("검색어를 입력해 주세요.");
          return;
        }
        window.location.href = `recycle.html?query=${encodeURIComponent(query)}`;
      }
    });
  }

  const params = new URLSearchParams(window.location.search);
  const query = params.get("query");
  if (query) {
    const interval = setInterval(() => {
      if (window.garbageData && window.garbageData.length > 0) {
        clearInterval(interval);
        if (searchInput) searchInput.value = query;
        searchGarbage(query);
      }
    }, 100);
  }
});