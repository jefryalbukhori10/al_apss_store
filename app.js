// ===== NAVIGATION =====
function goTo(pageId) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function goHome() {
  goTo("page-home");
}

// ===== WA ORDER =====
function orderWA(msg) {
  const phone = "6285755763941";
  const text = encodeURIComponent(msg);
  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
}

// ===== PRODUCT DATA =====

const streamingProducts = [
  {
    name: "NETFLIX",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    color: "#E50914",
    bg: "rgba(229,9,20,0.15)",
    badge: "Streaming",
    badgeColor: "#E50914",
    groups: [
      {
        title: "1P 1U – Login 1 Device",
        plans: [
          { name: "1 Hari", price: "Rp 5.000" },
          { name: "3 Hari", price: "Rp 10.000" },
          { name: "5 Hari", price: "Rp 13.000" },
          { name: "7 Hari", price: "Rp 16.000" },
          { name: "1 Bulan", price: "Rp 30.000" },
        ],
      },
      {
        title: "1P 2U – Login 1 Device",
        plans: [
          { name: "1 Hari", price: "Rp 4.000" },
          { name: "3 Hari", price: "Rp 8.000" },
          { name: "5 Hari", price: "Rp 10.000" },
          { name: "7 Hari", price: "Rp 14.000" },
          { name: "1 Bulan", price: "Rp 25.000" },
        ],
      },
      {
        title: "Semi Private – Can Login 2 Device",
        plans: [{ name: "1 Bulan", price: "Rp 40.000" }],
      },
    ],
  },
  {
    name: "VIDIO PLATINUM",
    logo: "https://images.seeklogo.com/logo-png/39/2/vidio-logo-png_seeklogo-395091.png",
    color: "#00AEEF",
    bg: "rgba(0,174,239,0.12)",
    badge: "Streaming",
    badgeColor: "#00AEEF",
    groups: [
      {
        title: "Sharing All Device",
        plans: [{ name: "1 Bulan", price: "Rp 25.000" }],
      },
      {
        title: "Private All Device",
        plans: [{ name: "1 Bulan", price: "Rp 40.000" }],
      },
      {
        title: "Sharing Mobile",
        plans: [{ name: "1 Bulan", price: "Rp 25.000" }],
      },
      {
        title: "Private Mobile",
        plans: [{ name: "1 Bulan", price: "Rp 35.000" }],
      },
      {
        title: "Private TV Only",
        plans: [
          { name: "1 Bulan", price: "Rp 20.000" },
          { name: "3 Bulan", price: "Rp 30.000" },
          { name: "6 Bulan", price: "Rp 35.000" },
          { name: "1 Tahun", price: "Rp 50.000" },
        ],
      },
    ],
  },
  {
    name: "WeTV",
    logo: "https://images.seeklogo.com/logo-png/54/2/wetv-iflix-logo-png_seeklogo-542440.png",
    color: "#F5A623",
    bg: "rgba(245,166,35,0.12)",
    badge: "Streaming",
    badgeColor: "#F5A623",
    groups: [
      {
        title: "Sharing",
        plans: [{ name: "1 Bulan", price: "Rp 13.000" }],
      },
      {
        title: "Anti Limit 1 Bulan",
        plans: [{ name: "1 Bulan", price: "Rp 23.000" }],
      },
      {
        title: "Private 1 Bulan",
        plans: [{ name: "1 Bulan", price: "Rp 36.000" }],
      },
    ],
  },
  {
    name: "AMAZON PRIME",
    logo: "https://images.seeklogo.com/logo-png/37/2/amazon-prime-video-logo-png_seeklogo-370524.png",
    color: "#FF9900",
    bg: "rgba(255,153,0,0.12)",
    badge: "Streaming",
    badgeColor: "#FF9900",
    groups: [
      {
        title: "Sharing 1 Bulan 5U",
        plans: [{ name: "1 Bulan", price: "Rp 10.000" }],
      },
      {
        title: "Sharing 1 Bulan 2U",
        plans: [{ name: "1 Bulan", price: "Rp 15.000" }],
      },
      {
        title: "Private 1 Bulan",
        plans: [{ name: "1 Bulan", price: "Rp 20.000" }],
      },
    ],
  },
  {
    name: "VIU",
    logo: "https://images.seeklogo.com/logo-png/38/2/viu-logo-png_seeklogo-387054.png",
    color: "#FF6B35",
    bg: "rgba(255,107,53,0.12)",
    badge: "Streaming",
    badgeColor: "#FF6B35",
    groups: [
      {
        title: "Private Biasa",
        plans: [
          { name: "1 Bulan", price: "Rp 10.000" },
          { name: "6 Bulan", price: "Rp 20.000" },
          { name: "1 Tahun", price: "Rp 35.000" },
        ],
      },
      {
        title: "Private Anti Limit",
        plans: [
          { name: "1 Bulan", price: "Rp 14.000" },
          { name: "6 Bulan", price: "Rp 20.000" },
          { name: "1 Tahun", price: "Rp 45.000" },
        ],
      },
    ],
  },
  {
    name: "VISION+",
    logo: "https://images.seeklogo.com/logo-png/43/2/vision-plus-logo-png_seeklogo-437356.png",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.12)",
    badge: "Streaming",
    badgeColor: "#8B5CF6",
    groups: [
      {
        title: "Paket Vision+",
        plans: [
          { name: "Sharing 1 Bulan", price: "Rp 30.000" },
          { name: "Private 1 Bulan", price: "Rp 40.000" },
        ],
      },
    ],
  },
  {
    name: "RCTI+",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Logo_RCTI%2B.png",
    color: "#E53935",
    bg: "rgba(229,57,53,0.12)",
    badge: "Streaming",
    badgeColor: "#E53935",
    groups: [
      {
        title: "Paket RCTI+",
        plans: [
          { name: "Sharing 1 Bulan", price: "Rp 20.000" },
          { name: "Private 1 Bulan", price: "Rp 35.000" },
        ],
      },
    ],
  },
];

const listeningProducts = [
  {
    name: "SPOTIFY",
    logo: "https://images.seeklogo.com/logo-png/28/2/spotify-logo-png_seeklogo-284480.png",
    color: "#1DB954",
    bg: "rgba(29,185,84,0.12)",
    badge: "Listening",
    badgeColor: "#1DB954",
    groups: [
      {
        title: "Paket Spotify",
        plans: [
          { name: "Indplan Full Garansi 1 Bulan", price: "Rp 27.000" },
          { name: "Famplan Full Garansi 1 Bulan", price: "Rp 25.000" },
        ],
      },
    ],
  },
  {
    name: "APPLE MUSIC",
    logo: "https://images.seeklogo.com/logo-png/28/2/apple-music-logo-png_seeklogo-285057.png",
    color: "#FC3C44",
    bg: "rgba(252,60,68,0.12)",
    badge: "Listening",
    badgeColor: "#FC3C44",
    groups: [
      {
        title: "Paket Apple Music",
        plans: [
          { name: "iMessage 1 Bulan", price: "Rp 20.000" },
          { name: "Indplan 1 Bulan", price: "Rp 30.000" },
        ],
      },
    ],
  },
];

const studyProducts = [
  {
    name: "CHATGPT+",
    logo: "https://images.seeklogo.com/logo-png/50/2/chatgpt-logo-png_seeklogo-503286.png",
    color: "#10A37F",
    bg: "rgba(16,163,127,0.12)",
    badge: "Study / AI",
    badgeColor: "#10A37F",
    groups: [
      {
        title: "ChatGPT Plus",
        plans: [{ name: "Sharing 1 Bulan", price: "Rp 30.000" }],
      },
    ],
  },
  {
    name: "CHATGPT PRO",
    logo: "https://images.seeklogo.com/logo-png/61/2/chatgpt-logo-png_seeklogo-612729.png",
    color: "#10A37F",
    bg: "rgba(16,163,127,0.15)",
    badge: "Study / AI",
    badgeColor: "#10A37F",
    groups: [
      {
        title: "ChatGPT Pro",
        plans: [{ name: "Sharing Individual 1 Bulan", price: "Rp 40.000" }],
      },
    ],
  },
  {
    name: "CHATGPT TEAM (INVITE)",
    logo: "https://images.seeklogo.com/logo-png/50/2/chatgpt-logo-png_seeklogo-500383.png",
    color: "#10A37F",
    bg: "rgba(16,163,127,0.1)",
    badge: "Study / AI",
    badgeColor: "#10A37F",
    groups: [
      {
        title: "ChatGPT Team",
        plans: [
          { name: "Sharing Mobile", price: "Rp 30.000" },
          { name: "Private Mobile", price: "Rp 55.000" },
          { name: "Private TV Only", price: "Rp 55.000" },
        ],
      },
    ],
  },
  {
    name: "GEMINI INVITE",
    logo: "https://images.seeklogo.com/logo-png/63/2/gemini-new-logo-png_seeklogo-638161.png",
    color: "#4F8EF7",
    bg: "rgba(79,142,247,0.12)",
    badge: "Study / AI",
    badgeColor: "#4F8EF7",
    groups: [
      {
        title: "Paket Gemini Invite",
        plans: [
          { name: "Sharing", price: "Rp 13.000" },
          { name: "Anti Limit 1 Bulan", price: "Rp 23.000" },
          { name: "Private 1 Bulan", price: "Rp 36.000" },
        ],
      },
    ],
  },
];

const editingProducts = [
  {
    name: "CANVA INVITE / MEMBER",
    logo: "https://images.seeklogo.com/logo-png/43/2/canva-logo-png_seeklogo-438258.png",
    color: "#00C4CC",
    bg: "rgba(0,196,204,0.12)",
    badge: "Editing",
    badgeColor: "#00C4CC",
    groups: [
      {
        title: "Paket Canva",
        plans: [
          { name: "1 Hari", price: "Rp 3.000" },
          { name: "1 Bulan", price: "Rp 7.000" },
          { name: "1 Tahun", price: "Rp 30.000" },
        ],
      },
    ],
  },
  {
    name: "CAPCUT",
    logo: "https://images.seeklogo.com/logo-png/46/2/capcut-logo-png_seeklogo-467267.png",
    color: "#555",
    bg: "rgba(255,255,255,0.06)",
    badge: "Editing",
    badgeColor: "#aaa",
    groups: [
      {
        title: "Sharing",
        plans: [
          { name: "7 Hari", price: "Rp 8.000" },
          { name: "1 Bulan", price: "Rp 16.000" },
        ],
      },
      {
        title: "Private",
        plans: [
          { name: "7 Hari", price: "Rp 12.000" },
          { name: "1 Bulan", price: "Rp 28.000" },
        ],
      },
    ],
  },
  {
    name: "LIGHTROOM PRO",
    logo: "https://images.seeklogo.com/logo-png/38/2/adobe-lightroom-logo-png_seeklogo-380790.png",
    color: "#31A8FF",
    bg: "rgba(49,168,255,0.12)",
    badge: "Editing",
    badgeColor: "#31A8FF",
    groups: [
      {
        title: "Paket Lightroom Pro",
        plans: [
          { name: "1 Tahun (Garansi 6 Bulan)", price: "Rp 24.000" },
          { name: "1 Tahun (Garansi Full)", price: "Rp 34.000" },
        ],
      },
    ],
  },
  {
    name: "PICSART",
    logo: "https://images.seeklogo.com/logo-png/49/2/piscart-logo-png_seeklogo-490366.png",
    color: "#FF3B5C",
    bg: "rgba(255,59,92,0.12)",
    badge: "Editing",
    badgeColor: "#FF3B5C",
    groups: [
      {
        title: "Paket Picsart",
        plans: [
          { name: "Sharing 1 Bulan", price: "Rp 14.000" },
          { name: "Private 1 Bulan", price: "Rp 20.000" },
        ],
      },
    ],
  },
  {
    name: "ALIGHT MOTION",
    logo: "https://static.wikia.nocookie.net/logo_editing/images/9/91/Alight_Motion.png/revision/latest?cb=20250118145308",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.12)",
    badge: "Editing",
    badgeColor: "#7C3AED",
    groups: [
      {
        title: "Paket Alight Motion",
        plans: [
          { name: "Sharing 1 Tahun", price: "Rp 20.000" },
          { name: "Private 1 Tahun", price: "Rp 45.000" },
        ],
      },
    ],
  },
];

// ===== "LAINNYA" – masuk di halaman Streaming =====
const lainnyaProducts = [
  {
    name: "YOUTUBE PREMIUM",
    logo: "https://images.seeklogo.com/logo-png/36/2/youtube-premium-logo-png_seeklogo-364940.png",
    color: "#FF0000",
    bg: "rgba(255,0,0,0.12)",
    badge: "Lainnya",
    badgeColor: "#FF0000",
    groups: [
      {
        title: "Famplan",
        plans: [
          { name: "1 Bulan", price: "Rp 8.000" },
          { name: "2 Bulan", price: "Rp 14.000" },
        ],
      },
      {
        title: "Indplan (No Renew, No Gar)",
        plans: [
          { name: "1 Bulan", price: "Rp 15.000" },
          { name: "3 Bulan", price: "Rp 35.000" },
        ],
      },
    ],
  },
];

// ===== RENDER PRODUCTS =====
function renderProducts(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = products
    .map((product) => {
      const groupsHtml = product.groups
        .map((group) => {
          const plansHtml = group.plans
            .map(
              (plan) => `
        <div class="plan-row">
          <span class="plan-name">${plan.name}</span>
          <span class="plan-price">${plan.price}</span>
          <button class="plan-order-btn" onclick="orderWA('Halo kak, saya mau order ${product.name} - ${plan.name} (${plan.price})')">Order</button>
        </div>
      `,
            )
            .join("");
          return `
        <div class="plan-group-title">${group.title}</div>
        ${plansHtml}
      `;
        })
        .join("");

      return `
      <div class="product-card">
        <div class="product-header">

  <div class="product-logo-wrap">
    <img
      src="${product.logo}"
      alt="${product.name}"
      class="product-logo"
    />
  </div>

  <div>
    <div class="product-name">${product.name}</div>

    <div
      class="product-type-badge"
      style="background:${product.bg}; color:${product.badgeColor}"
    >
      ${product.badge}
    </div>
  </div>

</div>
        <div class="product-plans">${groupsHtml}</div>
      </div>
    `;
    })
    .join("");
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  // Streaming: gabungkan streamingProducts + lainnyaProducts (YouTube Premium)
  renderProducts("streaming-products", [
    ...streamingProducts,
    ...lainnyaProducts,
  ]);
  renderProducts("listening-products", listeningProducts);
  renderProducts("study-products", studyProducts);
  renderProducts("editing-products", editingProducts);
});
