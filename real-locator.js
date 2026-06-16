const samples = [
  {
    id: "aaa1",
    name: "样本一：漳州A直采 5041 开关",
    image: "./assets/real-samples/aaa1.png",
    width: 2559,
    height: 774,
    points: [
      {
        id: "5041",
        label: "5041 开关",
        device: "后潭 I 路 5041 开关",
        channelIndex: "38",
        tablePoint: "通道点号属性 / 点号 5041 / 序号 38",
        note: "表格第 12 行与右侧蓝色状态开关 5041 对应。",
        boxes: [
          { kind: "table", label: "表格：5041 通道点号行", x: 1016, y: 356, w: 705, h: 25 },
          { kind: "diagram", label: "图像：5041 开关", x: 2134, y: 254, w: 52, h: 62 },
        ],
      },
      {
        id: "5042",
        label: "5042 刀闸",
        device: "后潭 I 路 5042 刀闸",
        channelIndex: "42",
        tablePoint: "通道点号属性 / 点号 5042 / 序号 42",
        note: "仅对照表格与遥信图像，验证同一间隔内上下器件定位。",
        boxes: [
          { kind: "table", label: "表格：5042 通道点号行", x: 1016, y: 381, w: 705, h: 25 },
          { kind: "diagram", label: "图像：5042 刀闸", x: 2134, y: 353, w: 52, h: 62 },
        ],
      },
      {
        id: "5051",
        label: "5051 开关",
        device: "泗林 I 路 5051 开关",
        channelIndex: "74",
        tablePoint: "通道点号属性 / 点号 5051 / 序号 74",
        note: "表格第 18 行与右侧红色支路开关 5051 对应，避免串到 5053 行。",
        boxes: [
          { kind: "table", label: "表格：5051 通道点号行", x: 1016, y: 480, w: 705, h: 25 },
          { kind: "diagram", label: "图像：5051 开关", x: 2320, y: 254, w: 52, h: 62 },
        ],
      },
      {
        id: "5031",
        label: "5031 开关",
        device: "漳金 I 路 5031 开关",
        channelIndex: "26",
        tablePoint: "通道点号属性 / 点号 5031 / 序号 26",
        note: "表格第 9 行与右侧左支路 5031 开关对照。",
        boxes: [
          { kind: "table", label: "表格：5031 通道点号行", x: 1016, y: 280, w: 705, h: 25 },
          { kind: "diagram", label: "图像：5031 开关", x: 1968, y: 254, w: 52, h: 62 },
        ],
      },
    ],
  },
  {
    id: "aaa2",
    name: "样本二：宜珠/宜旺 5051 与 5054",
    image: "./assets/real-samples/aaa2.png",
    width: 2559,
    height: 733,
    points: [
      {
        id: "5051",
        label: "5051 开关",
        device: "宜珠 5051 开关",
        channelIndex: "15",
        tablePoint: "通道点号属性 / 点号 5051 / 序号 15",
        note: "报文中 15:合、表格第 7 行与右侧 5051 开关对应。",
        boxes: [
          { kind: "message", label: "报文：5051 上传记录", x: 186, y: 418, w: 730, h: 54 },
          { kind: "table", label: "表格：5051 通道点号行", x: 1016, y: 281, w: 705, h: 25 },
          { kind: "diagram", label: "图像：5051 开关", x: 1984, y: 249, w: 52, h: 62 },
        ],
      },
      {
        id: "5012",
        label: "5012 刀闸",
        device: "5012 刀闸",
        channelIndex: "16",
        tablePoint: "通道点号属性 / 点号 5012 / 序号 16",
        note: "仅做表格与遥信图像对照，图上可见 5012 标识。",
        boxes: [
          { kind: "table", label: "表格：5012 通道点号行", x: 1016, y: 306, w: 705, h: 25 },
          { kind: "diagram", label: "图像：5012 刀闸", x: 2036, y: 264, w: 88, h: 55 },
        ],
      },
      {
        id: "5054",
        label: "5054 开关",
        device: "宜旺 5054 开关",
        channelIndex: "6",
        tablePoint: "通道点号属性 / 点号 5054 / 序号 6",
        note: "表格第 4 行与右侧 5054 开关对应，避免串到 5054 刀闸行。",
        boxes: [
          { kind: "table", label: "表格：5054 通道点号行", x: 1016, y: 230, w: 705, h: 25 },
          { kind: "diagram", label: "图像：5054 开关", x: 2198, y: 264, w: 70, h: 52 },
        ],
      },
      {
        id: "511",
        label: "511 引线",
        device: "桥引线 511",
        channelIndex: "39",
        tablePoint: "通道点号属性 / 点号 511 / 序号 39",
        note: "表格第 19 行与右侧桥引线 511 对照。",
        boxes: [
          { kind: "table", label: "表格：511 通道点号行", x: 1016, y: 505, w: 705, h: 25 },
          { kind: "diagram", label: "图像：511 引线", x: 2202, y: 331, w: 70, h: 48 },
        ],
      },
    ],
  },
];

const sampleSelect = document.querySelector("#sampleSelect");
const pointSelect = document.querySelector("#pointSelect");
const locateButton = document.querySelector("#locateButton");
const sampleImage = document.querySelector("#sampleImage");
const overlayLayer = document.querySelector("#overlayLayer");
const imageWrap = document.querySelector("#imageWrap");
const locatorSummary = document.querySelector("#locatorSummary");
const locatorStatus = document.querySelector("#locatorStatus");

function fillSamples() {
  sampleSelect.innerHTML = samples.map((item) => `<option value="${item.id}">${item.name}</option>`).join("");
}

function getCurrentSample() {
  return samples.find((item) => item.id === sampleSelect.value) || samples[0];
}

function getCurrentPoint() {
  const sample = getCurrentSample();
  return sample.points.find((item) => item.id === pointSelect.value) || sample.points[0];
}

function fillPoints() {
  const sample = getCurrentSample();
  pointSelect.innerHTML = sample.points
    .map((item) => `<option value="${item.id}">${item.label}${item.channelIndex ? ` / ${item.channelIndex}` : ""}</option>`)
    .join("");
}

function loadSample() {
  const sample = getCurrentSample();
  sampleImage.src = sample.image;
  sampleImage.style.width = `${sample.width}px`;
  imageWrap.style.width = `${sample.width}px`;
  imageWrap.style.height = `${sample.height}px`;
  fillPoints();
  locateCurrentPoint();
}

function renderSummary(sample, point) {
  const hasMessage = point.boxes.some((box) => box.kind === "message");
  const hasTable = point.boxes.some((box) => box.kind === "table");
  const extra = !hasMessage || !hasTable ? "（部分区域暂不参与标注）" : "";
  locatorSummary.innerHTML = `
    <div class="summary-item"><strong>目标点号</strong>${point.id}</div>
    <div class="summary-item"><strong>通道序号</strong>${point.channelIndex || "--"}</div>
    <div class="summary-item"><strong>设备名称</strong>${point.device}</div>
    <div class="summary-item"><strong>表格关注字段</strong>${point.tablePoint}</div>
    <div class="summary-item"><strong>定位说明</strong>${point.note}${extra}</div>
  `;
  locatorStatus.textContent = `${sample.name} / ${point.label}${point.channelIndex ? ` / ${point.channelIndex}` : ""}`;
}

function createBox(box) {
  const point = getCurrentPoint();
  const node = document.createElement("div");
  node.className = `locator-box ${box.kind}`;
  node.style.left = `${box.x}px`;
  node.style.top = `${box.y}px`;
  node.style.width = `${box.w}px`;
  node.style.height = `${box.h}px`;

  const tag = document.createElement("div");
  tag.className = "locator-tag";
  tag.textContent = box.label;
  node.appendChild(tag);

  if (box.kind === "table") {
    const badge = document.createElement("div");
    badge.className = "point-badge";
    badge.textContent = `点号属性 ${point.id}${point.channelIndex ? ` / ${point.channelIndex}` : ""}`;
    node.appendChild(badge);
  }
  return node;
}

function locateCurrentPoint() {
  const sample = getCurrentSample();
  const point = getCurrentPoint();
  overlayLayer.innerHTML = "";
  point.boxes.forEach((box) => overlayLayer.appendChild(createBox(box)));
  renderSummary(sample, point);

  const focusBox = point.boxes.find((box) => box.kind === "table") || point.boxes[0];
  if (focusBox) {
    document.querySelector(".image-scroll")?.scrollTo({
      left: Math.max(0, focusBox.x - 180),
      top: Math.max(0, focusBox.y - 130),
      behavior: "smooth",
    });
  }
}

sampleSelect.addEventListener("change", loadSample);
pointSelect.addEventListener("change", locateCurrentPoint);
locateButton.addEventListener("click", locateCurrentPoint);

fillSamples();
loadSample();
