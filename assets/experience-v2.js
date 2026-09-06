const EXPERIENCE = {
  scenes: [
    { title: '蒲津古渡，大河在望', short: '大河在望', caption: '沿黄河东岸，缓缓走入这片山河。', duration: 17, approach: 4, stamp: 'river' },
    { title: '鹳雀雄楼，高台凌云', short: '高台凌云', caption: '绕楼一周，读懂高台、层檐与柱列的节奏。', duration: 32, approach: 4.3, stamp: 'tower' },
    { title: '层檐极目，凭栏望远', short: '凭栏望远', caption: '沿楼外侧来到高处，让视线越过重檐。', duration: 17, approach: 4.5, stamp: 'heights' },
    { title: '诗诵千年，白日依山尽', short: '落日诗境', caption: '长河映金，四句唐诗回到风景里。', duration: 20, approach: 4, stamp: 'sunset' }
  ],
  parts: {
    bracket: { title: '檐下斗拱', lead: '层叠相承，向外出挑。', point: [5.04, 35.7, 37.8], offset: [9, 5.5, 18], tier: 1, glyph: '枓',
      paragraphs: ['斗拱位于柱头与屋檐之间，由方形的斗与弯曲伸出的拱等构件层叠组合，连接柱、梁和挑檐。', '把视线放低一点，可以看到构件向外逐层伸展。这里按实景外观做了简化，帮助观察排列与承托关系。'] },
    tile: { title: '灰陶筒瓦', lead: '顺着瓦垄，读出屋面的方向。', point: [18, 43, 27], offset: [11, 14, 24], tier: 1, glyph: '瓦',
      paragraphs: ['筒瓦盖住相邻底瓦的接缝，瓦垄沿屋面坡向排列，将雨水引向檐口。', '模型用重复的小瓦片组成层檐。近看瓦垄的起伏，远看它们汇成灰色屋面的细密纹理。'] },
    ridge: { title: '正脊与鸱吻', lead: '把目光，交给屋顶最高处。', point: [21.77, 102.5, 0], offset: [19, 8, 28], tier: 3, glyph: '脊',
      paragraphs: ['正脊位于屋顶最高的交线。两端的鸱吻形脊饰抬起轮廓，与两侧的坡面、翘角共同构成楼阁的天际线。', '沿脊线看向另一端，可以辨认顶层歇山屋面的层次。本模型以照片为参考表现形制与装饰。'] },
    column: { title: '立柱与回廊', lead: '柱列成行，檐影有序。', point: [15.12, 31.3, 37.8], offset: [14, 3.5, 25], tier: 1, glyph: '柱',
      paragraphs: ['立柱沿回廊展开，柱间由额枋联系，顶部与斗拱、檐下装饰共同形成有节奏的立面。', '从一根柱看向一排柱，能感受到开间的重复与变化。现代复建楼的仿古外观，不等同于纯木结构。'] },
    podium: { title: '高台与石阶', lead: '楼阁之基，也是登临的开始。', point: [33, 14, 44], offset: [62, 31, 76], tier: 0, glyph: '台',
      paragraphs: ['灰砖包砌的高台托起楼阁，石阶、平台与栏杆逐级展开，让建筑在平原上获得鲜明的高度。', '高台与楼身一起形成由宽到窄的轮廓。此处可以观察外部台阶；内部通行路线留待资料补齐。'] }
  },
  poems: [
    { line: '白日依山尽，', caption: '夕照渐低，山色接住最后一抹暖意。', dusk: true, position: [150, 90, 230], target: [-105, 48, -380], stamp: 'sunset' },
    { line: '黄河入海流。', caption: '镜头沿黄河舒展，远方留在诗句里。', dusk: false, position: [70, 92, -135], target: [-320, 8, -635], stamp: 'river' },
    { line: '欲穷千里目，', caption: '放眼远山与平原，目光比楼阁更远。', dusk: false, position: [70, 181, 130], target: [-180, 34, -670], stamp: 'heights' },
    { line: '更上一层楼。', caption: '再向高处看，让山河在眼前展开。', dusk: true, position: [49, 112, -48], target: [-170, 25, -730], stamp: 'heights' }
  ],
  history: [
    { date: '北周时期', title: '河畔起高楼', lead: '大河东岸，故事由此开始。', paragraphs: ['据景区介绍，鹳雀楼始建于北周，最初具有军事戍楼的用途，因鹳雀时常栖息而得名。', '楼临黄河、远望中条，地理位置与登临视野一起构成了它最初的记忆。'] },
    { date: '唐代', title: '诗人与登临', lead: '一首唐诗，把这座楼带向千年。', paragraphs: ['唐人登临题咏者甚多，王之涣《登鹳雀楼》尤为人熟知。诗从落日与黄河写起，把眼前风景推向更远的境界。', '四句二十字，让地理上的一座楼，也成为人们心中关于远望与向上的意象。'] },
    { date: '古楼毁损后', title: '楼隐，诗传', lead: '建筑一度消失，登临的诗意仍在。', paragraphs: ['景区介绍记载，古楼毁于战火，此后长期未获重建。关于毁损年代，不同材料的表述需要进一步核对，这里不作具体年份复原。', '今天仍可通过诗文和相关记载理解古楼的影响。此页呈现的是现代复建楼的外观参考模型。'] },
    { date: '1997 年', title: '重建启幕', lead: '在新的时代，回应旧日的登临。', paragraphs: ['据景区介绍，鹳雀楼于 1997 年 12 月开始重建。', '复建采用仿唐形制，以新的建筑与景区空间，延续这处文化地标的历史记忆。'] },
    { date: '2002 年', title: '重见鹳雀楼', lead: '2002 年 9 月 26 日，正式对外开放。', paragraphs: ['复建后的鹳雀楼外观四檐三层，内部六层，楼体总高 73.9 米。外观层次与内部楼层并不是同一概念。', '当前数字漫游围绕外观、山河视野与诗文展开。室内楼梯和展陈路线将在获得可靠资料后继续完善。'] }
  ],
  stamps: [
    { id: 'river', name: '望河', glyph: '河', hint: '完成第一境，或欣赏「黄河入海流」' },
    { id: 'tower', name: '观楼', glyph: '楼', hint: '完成第二境，或探索高台与石阶' },
    { id: 'craft', name: '识筑', glyph: '筑', hint: '探索任意三种建筑构件' },
    { id: 'heights', name: '临高', glyph: '高', hint: '完成第三境，或欣赏登高诗句' },
    { id: 'sunset', name: '赏暮', glyph: '暮', hint: '完成第四境，或欣赏「白日依山尽」' },
    { id: 'poetry', name: '入诗', glyph: '诗', hint: '完整欣赏四句诗境' }
  ]
};

const savePreference = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} };
const readPreference = (key, fallback) => { try { const value = JSON.parse(localStorage.getItem(key)); return value && typeof value === 'object' ? value : fallback; } catch { return fallback; } };

class ExplorationJournal {
  constructor() {
    const saved = readPreference('guanque-exploration-v2', {});
    this.scenes = new Set(Array.isArray(saved.scenes) ? saved.scenes.filter(x => Number.isInteger(x) && x >= 0 && x < 4) : []);
    this.parts = new Set(Array.isArray(saved.parts) ? saved.parts.filter(x => Object.hasOwn(EXPERIENCE.parts, x)) : []);
    this.poems = new Set(Array.isArray(saved.poems) ? saved.poems.filter(x => Number.isInteger(x) && x >= 0 && x < 4) : []);
    this.stamps = new Set(Array.isArray(saved.stamps) ? saved.stamps.filter(x => EXPERIENCE.stamps.some(s => s.id === x)) : []);
  }
  save() { savePreference('guanque-exploration-v2', { scenes: [...this.scenes], parts: [...this.parts], poems: [...this.poems], stamps: [...this.stamps] }); }
  award(id) { if (this.stamps.has(id)) return false; this.stamps.add(id); this.save(); return true; }
}

// Audio starts only after a user gesture. One clock and request token prevent stale narration.
class Soundscape {
  constructor(assetURL, notify) {
    this.assetURL = assetURL;
    this.notify = notify;
    const saved = readPreference('guanque-sound-v2', {});
    this.musicVolume = Number.isFinite(saved.music) ? Math.max(0, Math.min(1, saved.music)) : .4;
    this.ambientVolume = Number.isFinite(saved.ambient) ? Math.max(0, Math.min(1, saved.ambient)) : .25;
    this.narrationEnabled = saved.narration !== false;
    this.userMuted = saved.muted === true;
    this.enabled = false;
    this.context = null;
    this.buffers = new Map();
    this.loops = new Map();
    this.voice = null;
    this.pendingVoice = null;
    this.voiceToken = 0;
    this.voicePaused = false;
    this.backgrounded = false;
    this.failedNotice = false;
    this.button = document.getElementById('sound-toggle');
    this.label = document.getElementById('sound-label');
    const music = document.getElementById('music-volume');
    const ambient = document.getElementById('ambient-volume');
    const narration = document.getElementById('narration-enabled');
    music.value = Math.round(this.musicVolume * 100);
    ambient.value = Math.round(this.ambientVolume * 100);
    narration.checked = this.narrationEnabled;
    const updateSliders = () => {
      document.getElementById('music-volume-value').textContent = music.value + '%';
      document.getElementById('ambient-volume-value').textContent = ambient.value + '%';
    };
    updateSliders();
    music.addEventListener('input', () => { this.musicVolume = Number(music.value) / 100; updateSliders(); this.persist(); });
    ambient.addEventListener('input', () => { this.ambientVolume = Number(ambient.value) / 100; updateSliders(); this.persist(); });
    narration.addEventListener('change', () => { this.narrationEnabled = narration.checked; if (!this.narrationEnabled) this.stopVoice(); this.persist(); });
    this.button.addEventListener('click', () => this.setEnabled(!this.enabled, true));
    this.refresh();
  }
  persist() { savePreference('guanque-sound-v2', { music: this.musicVolume, ambient: this.ambientVolume, narration: this.narrationEnabled, muted: this.userMuted }); }
  refresh() {
    this.button.setAttribute('aria-pressed', String(this.enabled));
    this.label.textContent = this.enabled ? '声景已开启' : '开启声音';
  }
  ensureFromGesture() { if (!this.userMuted) this.setEnabled(true); }
  setEnabled(enabled, explicit = false) {
    if (explicit) { this.userMuted = !enabled; this.persist(); }
    this.enabled = enabled;
    if (enabled) {
      try {
        if (!this.context) {
          const Context = window.AudioContext || window.webkitAudioContext;
          if (!Context) throw new Error('Audio unavailable');
          this.context = new Context();
          this.voiceGain = this.context.createGain();
          this.voiceGain.gain.value = .9;
          this.voiceGain.connect(this.context.destination);
        }
        this.context.resume().catch(() => this.failAudio());
        this.prepareLoops();
      } catch { this.failAudio(); }
    } else {
      this.stopVoice();
      for (const loop of this.loops.values()) this.setGain(loop, 0, .18);
    }
    this.refresh();
  }
  failAudio() {
    this.enabled = false;
    this.refresh();
    if (!this.failedNotice) { this.failedNotice = true; this.notify('声音暂未开启，可以再次点击右上角重试。'); }
  }
  buffer(key) {
    if (!this.buffers.has(key)) {
      const promise = fetch(this.assetURL('audio/' + key + '.mp3'))
        .then(response => { if (!response.ok) throw new Error('Audio load failed'); return response.arrayBuffer(); })
        .then(data => this.context.decodeAudioData(data));
      this.buffers.set(key, promise);
      promise.catch(() => this.buffers.delete(key));
    }
    return this.buffers.get(key);
  }
  prepareLoops() {
    for (const key of ['day', 'dusk', 'river', 'wind']) {
      if (this.loops.has(key)) continue;
      const loop = { loading: true, gain: null, target: 0 };
      this.loops.set(key, loop);
      this.buffer(key).then(buffer => {
        const source = this.context.createBufferSource();
        const gain = this.context.createGain();
        source.buffer = buffer; source.loop = true;
        gain.gain.value = 0;
        source.connect(gain); gain.connect(this.context.destination);
        source.start();
        Object.assign(loop, { source, gain, loading: false });
        document.getElementById('sound-toggle').dataset.ready = 'true';
      }).catch(() => {
        this.loops.delete(key);
        if (!this.failedNotice) { this.failedNotice = true; this.notify('部分声景暂未载入，点击声音按钮可重新加载。'); }
      });
    }
  }
  setGain(loop, value, time = .42) {
    if (!loop.gain || Math.abs(loop.target - value) < .0005) return;
    loop.target = value;
    loop.gain.gain.setTargetAtTime(value, this.context.currentTime, time);
  }
  tick(dusk, nearRiver, exploring) {
    if (!this.context) return;
    const on = this.enabled && !this.backgrounded ? 1 : 0;
    const duck = this.voice && !this.voicePaused ? .24 : 1;
    const music = on * this.musicVolume * .92 * duck * (exploring ? .82 : 1);
    const ambient = on * this.ambientVolume * (this.voice && !this.voicePaused ? .55 : 1);
    for (const [key, loop] of this.loops) {
      const target = key === 'day' ? music * Math.cos(dusk * Math.PI / 2)
        : key === 'dusk' ? music * Math.sin(dusk * Math.PI / 2)
        : key === 'river' ? ambient * (.28 + nearRiver * .6)
        : ambient * (exploring ? .18 : .35);
      this.setGain(loop, target);
    }
  }
  speak(key, onEnd) {
    this.stopVoice();
    if (!this.enabled || !this.narrationEnabled || !this.context) return;
    const request = { key, token: this.voiceToken, onEnd, offset: 0, buffer: null };
    this.pendingVoice = request;
    this.buffer(key).then(buffer => {
      if (request.token !== this.voiceToken || !this.enabled || !this.narrationEnabled) return;
      request.buffer = buffer;
      if (!this.voicePaused && !this.backgrounded) this.startVoice(request);
    }).catch(() => {
      if (request.token !== this.voiceToken) return;
      this.pendingVoice = null;
      this.notify('这段朗诵暂未载入，文字与镜头仍可继续欣赏。');
    });
  }
  startVoice(request) {
    if (request.token !== this.voiceToken || !request.buffer || !this.enabled) return;
    const source = this.context.createBufferSource();
    source.buffer = request.buffer;
    source.connect(this.voiceGain);
    const voice = { request, source, started: this.context.currentTime, offset: request.offset };
    this.voice = voice;
    this.pendingVoice = request;
    source.onended = () => {
      if (this.voice !== voice || request.token !== this.voiceToken) return;
      this.voice = null; this.pendingVoice = null;
      if (request.onEnd) request.onEnd();
    };
    source.start(0, Math.min(request.offset, Math.max(0, request.buffer.duration - .001)));
  }
  stopVoice() {
    this.voiceToken++;
    if (this.voice) { const voice = this.voice; this.voice = null; try { voice.source.stop(); } catch {} }
    this.pendingVoice = null;
    this.voicePaused = false;
  }
  pauseVoice() {
    this.voicePaused = true;
    if (this.voice) {
      const voice = this.voice;
      voice.request.offset = Math.min(voice.request.buffer.duration, voice.offset + this.context.currentTime - voice.started);
      this.voice = null;
      try { voice.source.stop(); } catch {}
    }
  }
  resumeVoice() {
    this.voicePaused = false;
    if (this.pendingVoice?.buffer && !this.voice && !this.backgrounded && this.enabled) this.startVoice(this.pendingVoice);
  }
  visibility(hidden) {
    this.backgrounded = hidden;
    if (!this.context) return;
    if (hidden) this.context.suspend().catch(() => {});
    else if (this.enabled) this.context.resume().then(() => {
      if (this.pendingVoice?.buffer && !this.voicePaused && !this.voice) this.startVoice(this.pendingVoice);
    }).catch(() => {});
  }
}

// Static hosting uses relative URLs; the standalone edition embeds its model and audio.
let embeddedAudioMap;
function assetURL(path) {
  if (path.startsWith('audio/')) {
    const audioTag = document.getElementById('guanque-audio');
    if (audioTag) {
      if (!embeddedAudioMap) { embeddedAudioMap = JSON.parse(audioTag.textContent); audioTag.remove(); }
      if (embeddedAudioMap[path]) return embeddedAudioMap[path];
    } else if (embeddedAudioMap && embeddedAudioMap[path]) return embeddedAudioMap[path];
  }
  return new URL('./assets/' + path + '?v=521981212ec3', document.baseURI).href;
}


    const loading = document.getElementById("loading");
    const loadingMessage = document.getElementById("loading-message");
    const retryButton = document.getElementById("retry");

    retryButton.addEventListener("click", () => location.reload());

    try {
      const [THREE, { OrbitControls }, { GLTFLoader }] = await Promise.all([
        import("three"),
        import("three/addons/controls/OrbitControls.js"),
        import("three/addons/loaders/GLTFLoader.js")
      ]);

      await initialize(THREE, OrbitControls, GLTFLoader);
    } catch (error) {
      console.error(error);
      loading.classList.remove("ready");
      loadingMessage.textContent =
        "场景暂未载入。请检查网络连接，或使用支持 WebGL 2 的新版浏览器，然后重新加载。";
      retryButton.hidden = false;
    }

    async function initialize(THREE, OrbitControls, GLTFLoader) {
      // =========================================================
      // 1. 基础场景与渲染：限制像素数量，静态建筑按需更新阴影。
      // =========================================================
      const stage = document.getElementById("stage");
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0xd4d6bd, 0.00030);

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: "high-performance"
      });

      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.03;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.shadowMap.autoUpdate = false;

      stage.appendChild(renderer.domElement);
      renderer.domElement.tabIndex = 0;
      renderer.domElement.setAttribute(
        "aria-label",
        "鹳雀楼三维场景，拖拽旋转，滚轮缩放"
      );

      const camera = new THREE.PerspectiveCamera(44, 1, 0.35, 16000);
      camera.position.set(166, 115, 216);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, 49, 0);
      controls.enableDamping = true;
      controls.dampingFactor = 0.065;
      controls.rotateSpeed = 0.52;
      controls.zoomSpeed = 0.8;
      controls.enablePan = false;
      controls.minDistance = 30;
      controls.maxDistance = 1450;
      controls.minPolarAngle = 0.05;
      controls.maxPolarAngle = Math.PI * 0.493;
      controls.mouseButtons.LEFT = THREE.MOUSE.ROTATE;
      controls.mouseButtons.MIDDLE = THREE.MOUSE.DOLLY;
      controls.mouseButtons.RIGHT = THREE.MOUSE.ROTATE;
      controls.touches.ONE = THREE.TOUCH.ROTATE;
      controls.touches.TWO = THREE.TOUCH.DOLLY_ROTATE;
      controls.update();

      const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
      const clamp = THREE.MathUtils.clamp;
      const mix = THREE.MathUtils.lerp;
      const smooth = t => {
        t = clamp(t, 0, 1);
        return t * t * t * (t * (t * 6 - 15) + 10);
      };

      const standard = (color, extra = {}) =>
        new THREE.MeshStandardMaterial({
          color,
          roughness: 0.92,
          metalness: 0,
          ...extra
        });

      const materials = {
        stone: standard("#c7bea4"),
        stoneDark: standard("#9c947d"),
        red: standard("#a14732"),
        darkRed: standard("#642f25"),
        timber: standard("#aa7e49"),
        wall: standard("#753b2c"),
        window: standard("#222b27", { roughness: 0.65 }),
        roof: standard("#535e59", { side: THREE.DoubleSide }),
        tile: standard("#69716a", { side: THREE.DoubleSide }),
        ridge: standard("#414d48"),
        soffit: standard("#544735", { side: THREE.DoubleSide }),
        plaque: standard("#30261b"),
        courtyard: standard("#b5b197")
      };

      const hemisphere = new THREE.HemisphereLight(0xd9e5e8, 0x887653, 1.65);
      scene.add(hemisphere);

      const sunLight = new THREE.DirectionalLight(0xffedc5, 3.0);
      sunLight.castShadow = true;
      sunLight.target.position.set(0, 45, 0);
      sunLight.shadow.mapSize.set(
        matchMedia("(pointer: coarse)").matches ? 1024 : 2048,
        matchMedia("(pointer: coarse)").matches ? 1024 : 2048
      );
      Object.assign(sunLight.shadow.camera, {
        left: -165,
        right: 165,
        top: 180,
        bottom: -150,
        near: 10,
        far: 2100
      });
      sunLight.shadow.bias = -0.00025;
      sunLight.shadow.normalBias = 0.055;
      scene.add(sunLight, sunLight.target);

      const fillLight = new THREE.DirectionalLight(0xd4e1e4, 0.6);
      fillLight.position.set(180, 140, 240);
      scene.add(fillLight);

      // =========================================================
      // 2. 结构构件实例化：立柱、栏杆、门窗、斗拱共享几何体。
      // =========================================================
      const unitBox = new THREE.BoxGeometry(1, 1, 1);
      const unitCylinder = new THREE.CylinderGeometry(1, 1, 1, 10, 1);
      const instanceBatches = new Map();
      const transform = new THREE.Object3D();
      const vertical = V(0, 1, 0);

      function addInstance(geometry, material, position, scale, quaternion, cast = true) {
        const key = geometry.uuid + material.uuid + String(cast);

        if (!instanceBatches.has(key)) {
          instanceBatches.set(key, {
            geometry,
            material,
            cast,
            matrices: []
          });
        }

        transform.position.copy(position);
        transform.scale.copy(scale);
        transform.quaternion.identity();
        if (quaternion) transform.quaternion.copy(quaternion);
        transform.updateMatrix();

        instanceBatches.get(key).matrices.push(transform.matrix.clone());
      }

      function box(w, h, d, x, y, z, material, cast = true) {
        addInstance(unitBox, material, V(x, y, z), V(w, h, d), null, cast);
      }

      function cylinder(radius, height, x, y, z, material, cast = true) {
        addInstance(
          unitCylinder, material,
          V(x, y, z), V(radius, height, radius),
          null, cast
        );
      }

      function beamBetween(a, b, width, depth, material, cast = true) {
        const direction = b.clone().sub(a);
        const length = direction.length();
        const quaternion = new THREE.Quaternion()
          .setFromUnitVectors(vertical, direction.normalize());

        addInstance(
          unitBox,
          material,
          a.clone().add(b).multiplyScalar(0.5),
          V(width, length, depth),
          quaternion,
          cast
        );
      }

      function flushInstances() {
        for (const batch of instanceBatches.values()) {
          const mesh = new THREE.InstancedMesh(
            batch.geometry,
            batch.material,
            batch.matrices.length
          );

          batch.matrices.forEach((matrix, index) => mesh.setMatrixAt(index, matrix));
          mesh.instanceMatrix.needsUpdate = true;
          mesh.castShadow = batch.cast;
          mesh.receiveShadow = true;
          mesh.computeBoundingSphere();
          scene.add(mesh);
        }
      }

      function geometryFromArrays(positions, indices, colors) {
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(positions, 3)
        );
        geometry.setIndex(indices);

        if (colors) {
          geometry.setAttribute(
            "color",
            new THREE.Float32BufferAttribute(colors, 3)
          );
        }

        geometry.computeVertexNormals();
        geometry.computeBoundingSphere();
        return geometry;
      }

      // =========================================================
      // 3. 保留外观层次与构件分组的实景参考模型。
      //    相同层次、构件类型与材质的几何体合并，兼顾细节与性能。
      // =========================================================
      let model;
      const embedded = document.getElementById('guanque-model');
      if (embedded) {
        let encoded = embedded.textContent.trim();
        const padding = encoded.endsWith('==') ? 2 : encoded.endsWith('=') ? 1 : 0;
        const bytes = new Uint8Array(encoded.length / 4 * 3 - padding);
        const chunkLength = 262144;
        let position = 0;
        for (let offset = 0; offset < encoded.length; offset += chunkLength) {
          const chunk = atob(encoded.slice(offset, offset + chunkLength));
          for (let i = 0; i < chunk.length; i++) bytes[position++] = chunk.charCodeAt(i);
          if (offset % (chunkLength * 8) === 0) {
            loadingMessage.textContent = `正在构筑楼阁 · ${Math.round(offset / encoded.length * 100)}%`;
            await new Promise(requestAnimationFrame);
          }
        }
        encoded = ''; embedded.remove();
        model = await new GLTFLoader().parseAsync(bytes.buffer, '');
      } else {
        model = await new GLTFLoader().loadAsync(assetURL('guanque-exploration.glb'), progress => {
          loadingMessage.textContent = progress.total > 0
            ? `正在构筑楼阁 · ${Math.min(100,Math.round(progress.loaded / progress.total * 100))}%`
            : `正在构筑楼阁 · 已载入 ${(progress.loaded / 1048576).toFixed(1)} MB`;
        });
      }
      loadingMessage.textContent = '正在铺展山河与光影';
      model.scene.name = "鹳雀楼 · 实景参考";
      model.scene.scale.setScalar(1.4);
      const anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
      model.scene.traverse(object => {
        if (!object.isMesh) return;
        object.castShadow = true;
        object.receiveShadow = true;
        for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
          if (material.map) material.map.anisotropy = anisotropy;
          if (material.normalMap) material.normalMap.anisotropy = anisotropy;
        }
      });
      scene.add(model.scene);
      renderer.domElement.addEventListener("webglcontextlost", event => {
        event.preventDefault();
        renderer.setAnimationLoop(null);
        loading.classList.remove("ready");
        loadingMessage.textContent = "画面已暂停，请重新加载继续漫游。";
        retryButton.hidden = false;
      });

      // =========================================================
      // 6. 平原、黄河与远山：全部由参数化网格生成。
      // =========================================================
      const groundMaterial = standard("#a5aa88");
      const ground = new THREE.Mesh(
        new THREE.PlaneGeometry(18000, 18000),
        groundMaterial
      );
      ground.rotation.x = -Math.PI / 2;
      ground.position.y = -0.28;
      ground.receiveShadow = true;
      scene.add(ground);

      box(206, 0.08, 198, 0, 0.01, 27, materials.courtyard, false);
      box(20, 0.055, 240, 0, 0.012, 212, materials.courtyard, false);

      const riverCenter = x =>
        -515 + Math.sin(x * 0.00115) * 88 + Math.sin(x * 0.0029) * 30;

      const riverWidth = x =>
        410 + Math.sin(x * 0.0017 + 1.2) * 35;

      const riverSegments = 180;
      const riverRows = 14;
      const riverLength = 14000;

      function buildRiverGeometry() {
        const positions = [];
        const indices = [];

        for (let i = 0; i <= riverSegments; i++) {
          const x = -riverLength / 2 + riverLength * i / riverSegments;

          for (let j = 0; j <= riverRows; j++) {
            const z = riverCenter(x) + (j / riverRows - 0.5) * riverWidth(x);
            positions.push(x, 0.025, z);
          }
        }

        for (let i = 0; i < riverSegments; i++) {
          for (let j = 0; j < riverRows; j++) {
            const a = i * (riverRows + 1) + j;
            const b = (i + 1) * (riverRows + 1) + j;
            const c = a + 1;
            const d = b + 1;
            indices.push(a, c, b, b, c, d);
          }
        }

        return geometryFromArrays(positions, indices);
      }

      const bankMaterial = standard("#b5ae87", { side: THREE.DoubleSide });

      for (const sign of [-1, 1]) {
        const positions = [];
        const indices = [];

        for (let i = 0; i <= riverSegments; i++) {
          const x = -riverLength / 2 + riverLength * i / riverSegments;
          const edge = riverCenter(x) + sign * riverWidth(x) / 2;

          positions.push(x, 0.17, edge);
          positions.push(x, -0.12, edge + sign * 27);
        }

        for (let i = 0; i < riverSegments; i++) {
          const a = i * 2;
          indices.push(a, a + 1, a + 2, a + 2, a + 1, a + 3);
        }

        const bank = new THREE.Mesh(
          geometryFromArrays(positions, indices),
          bankMaterial
        );
        bank.receiveShadow = true;
        scene.add(bank);
      }

      const sunDirection = V(-0.35, 0.8, -0.4).normalize();
      const sunVisualColor = new THREE.Color("#fff0c6");
      const horizonColor = new THREE.Color("#d4d6bd");

      const waterUniforms = THREE.UniformsUtils.merge([
        THREE.UniformsLib.fog,
        {
          uTime: { value: 0 },
          uDusk: { value: 0 },
          uWaterColor: { value: new THREE.Color("#a19b6f") },
          uHorizon: { value: new THREE.Color("#d4d6bd") },
          uSunDirection: { value: V() },
          uSunColor: { value: new THREE.Color() }
        }
      ]);

      const waterMaterial = new THREE.ShaderMaterial({
        uniforms: waterUniforms,
        fog: true,
        side: THREE.DoubleSide,
        vertexShader: `
          uniform float uTime;
          varying vec3 vWorldPosition;
          #include <fog_pars_vertex>

          void main() {
            vec3 p = position;
            p.y += sin(p.x * 0.026 + p.z * 0.039 + uTime * 0.48) * 0.07;
            p.y += sin(p.z * 0.045 - uTime * 0.32) * 0.035;

            vec4 world = modelMatrix * vec4(p, 1.0);
            vWorldPosition = world.xyz;
            vec4 mvPosition = viewMatrix * world;

            gl_Position = projectionMatrix * mvPosition;
            #include <fog_vertex>
          }
        `,
        fragmentShader: `
          uniform float uTime;
          uniform float uDusk;
          uniform vec3 uWaterColor;
          uniform vec3 uHorizon;
          uniform vec3 uSunDirection;
          uniform vec3 uSunColor;
          varying vec3 vWorldPosition;

          #include <common>
          #include <fog_pars_fragment>

          void main() {
            vec2 p = vWorldPosition.xz;

            float rippleA = sin(p.x * 0.12 + p.y * 0.18 + uTime * 0.63);
            float rippleB = sin(p.x * 0.035 - p.y * 0.25 - uTime * 0.48);
            float fine = sin(p.x * 0.62 + p.y * 0.29 + uTime * 0.8);

            vec3 normal = normalize(vec3(
              0.040 * cos(p.x * 0.12 + p.y * 0.18 + uTime * 0.63),
              1.0,
              0.075 * cos(p.y * 0.25 - uTime * 0.48)
            ));

            vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
            vec3 halfDirection = normalize(viewDirection + normalize(uSunDirection));

            float fresnel = pow(
              1.0 - max(dot(normal, viewDirection), 0.0),
              3.0
            );

            float specular = pow(max(dot(normal, halfDirection), 0.0), 150.0);
            float softReflection = pow(max(dot(normal, halfDirection), 0.0), 24.0);
            float variation = rippleA * 0.023 + rippleB * 0.017;

            vec3 color = mix(uWaterColor, uHorizon, fresnel * 0.34);
            color *= 0.94 + variation;
            color += uSunColor * (
              specular * mix(1.0, 1.85, uDusk) *
              (0.65 + fine * 0.25) +
              softReflection * 0.055
            );

            gl_FragColor = vec4(color, 1.0);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
            #include <fog_fragment>
          }
        `
      });

      const river = new THREE.Mesh(buildRiverGeometry(), waterMaterial);
      scene.add(river);

      const mountains = [];

      function buildMountains(index) {
        const positions = [];
        const indices = [];
        const columns = 128;
        const rows = 10;
        const width = 13000;
        const depth = 540 + index * 180;
        const centerZ = -1650 - index * 560;

        for (let i = 0; i <= columns; i++) {
          const x = -width / 2 + width * i / columns;

          const height =
            98 + index * 33 +
            35 * Math.sin(x * 0.0021 + index * 1.7) +
            26 * Math.sin(x * 0.0045 + index * 0.7) +
            12 * Math.cos(x * 0.0081);

          for (let j = 0; j <= rows; j++) {
            const t = j / rows;
            const z =
              centerZ + (t - 0.5) * depth +
              Math.sin(x * 0.0018 + index) * 90;

            const profile = Math.pow(Math.sin(Math.PI * t), 1.45);
            positions.push(x, Math.max(0, profile * height), z);
          }
        }

        for (let i = 0; i < columns; i++) {
          for (let j = 0; j < rows; j++) {
            const a = i * (rows + 1) + j;
            const b = (i + 1) * (rows + 1) + j;
            indices.push(a, a + 1, b, b, a + 1, b + 1);
          }
        }

        const material = standard("#8d9f99");
        const mesh = new THREE.Mesh(
          geometryFromArrays(positions, indices),
          material
        );
        scene.add(mesh);
        mountains.push(mesh);
      }

      for (let i = 0; i < 3; i++) buildMountains(i);

      // =========================================================
      // 7. 程序天空与太阳：渐变天空、日轮、日晕随时辰平滑过渡。
      // =========================================================
      const skyUniforms = {
        uZenith: { value: new THREE.Color("#6f9ebc") },
        uHorizon: { value: horizonColor },
        uSunDirection: { value: sunDirection },
        uSunColor: { value: sunVisualColor },
        uDusk: { value: 0 }
      };

      const skyMaterial = new THREE.ShaderMaterial({
        uniforms: skyUniforms,
        side: THREE.BackSide,
        depthWrite: false,
        depthTest: false,
        fog: false,
        vertexShader: `
          varying vec3 vDirection;

          void main() {
            vDirection = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 uZenith;
          uniform vec3 uHorizon;
          uniform vec3 uSunDirection;
          uniform vec3 uSunColor;
          uniform float uDusk;
          varying vec3 vDirection;

          void main() {
            vec3 direction = normalize(vDirection);
            vec3 sun = normalize(uSunDirection);

            float elevation = pow(
              smoothstep(-0.055, 0.82, direction.y),
              0.72
            );

            vec3 color = mix(uHorizon, uZenith, elevation);
            float alignment = max(dot(direction, sun), 0.0);

            float radius = mix(0.012, 0.020, uDusk);
            float disk = smoothstep(
              cos(radius),
              cos(radius * 0.84),
              alignment
            );

            float halo = pow(alignment, 48.0) * mix(0.16, 0.40, uDusk);
            float innerHalo = pow(alignment, 640.0) * 0.13;

            vec3 flatView = normalize(vec3(direction.x, 0.001, direction.z));
            vec3 flatSun = normalize(vec3(sun.x, 0.001, sun.z));

            float horizonGlow =
              pow(1.0 - clamp(abs(direction.y), 0.0, 1.0), 7.0) *
              pow(max(dot(flatView, flatSun), 0.0), 9.0) *
              uDusk * 0.22;

            color += uSunColor * (disk * 2.25 + halo + innerHalo + horizonGlow);

            gl_FragColor = vec4(color, 1.0);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }
        `
      });

      const sky = new THREE.Mesh(
        new THREE.SphereGeometry(8500, 32, 16),
        skyMaterial
      );
      sky.renderOrder = -100;
      sky.frustumCulled = false;
      scene.add(sky);

      flushInstances();

      const palettes = {
        zenith: [new THREE.Color("#6f9ebc"), new THREE.Color("#3c455b")],
        horizon: [new THREE.Color("#d4d6bd"), new THREE.Color("#c18f66")],
        sun: [new THREE.Color("#fff0c6"), new THREE.Color("#ffb66d")],
        hemiSky: [new THREE.Color("#d9e5e8"), new THREE.Color("#c4a18b")],
        hemiGround: [new THREE.Color("#887653"), new THREE.Color("#70513e")],
        fill: [new THREE.Color("#d4e1e4"), new THREE.Color("#b2b4c3")],
        ground: [new THREE.Color("#a5aa88"), new THREE.Color("#7c755b")],
        bank: [new THREE.Color("#b5ae87"), new THREE.Color("#98815e")],
        water: [new THREE.Color("#a19b6f"), new THREE.Color("#716952")],
        hills: [
          [new THREE.Color("#879c95"), new THREE.Color("#787970")],
          [new THREE.Color("#9bada6"), new THREE.Color("#8c8378")],
          [new THREE.Color("#b0bbb0"), new THREE.Color("#a08e7b")]
        ]
      };

      const daySunDirection = V(-0.35, 0.8, -0.4).normalize();
      const duskSunDirection = V(-0.34, 0.105, -0.935).normalize();

      let lightAmount = 0;
      let requestedLight = 0;

      function blendColor(destination, pair, amount) {
        destination.copy(pair[0]).lerp(pair[1], amount);
      }

      function applyLighting(amount) {
        blendColor(skyUniforms.uZenith.value, palettes.zenith, amount);
        blendColor(horizonColor, palettes.horizon, amount);
        blendColor(sunVisualColor, palettes.sun, amount);
        sunDirection.lerpVectors(daySunDirection, duskSunDirection, amount).normalize();

        skyUniforms.uDusk.value = amount;
        scene.fog.color.copy(horizonColor);
        scene.fog.density = mix(0.00030, 0.00036, amount);

        blendColor(hemisphere.color, palettes.hemiSky, amount);
        blendColor(hemisphere.groundColor, palettes.hemiGround, amount);
        hemisphere.intensity = mix(1.65, 1.13, amount);

        sunLight.color.copy(sunVisualColor);
        sunLight.intensity = mix(3.0, 2.75, amount);
        sunLight.position.copy(sunLight.target.position).addScaledVector(sunDirection, 720);

        blendColor(fillLight.color, palettes.fill, amount);
        fillLight.intensity = mix(0.6, 0.45, amount);

        blendColor(groundMaterial.color, palettes.ground, amount);
        blendColor(bankMaterial.color, palettes.bank, amount);

        mountains.forEach((mountain, index) => {
          blendColor(mountain.material.color, palettes.hills[index], amount);
        });

        blendColor(waterUniforms.uWaterColor.value, palettes.water, amount);
        waterUniforms.uHorizon.value.copy(horizonColor);
        waterUniforms.uSunDirection.value.copy(sunDirection);
        waterUniforms.uSunColor.value.copy(sunVisualColor);
        waterUniforms.uDusk.value = amount;

        renderer.toneMappingExposure = mix(1.03, 0.92, amount);
        renderer.shadowMap.needsUpdate = true;
      }

      const dayButton = document.getElementById("day-button");
      const duskButton = document.getElementById("dusk-button");

      function setTime(dusk) {
        requestedLight = dusk ? 1 : 0;
        dayButton.classList.toggle("active", !dusk);
        duskButton.classList.toggle("active", Boolean(dusk));
        dayButton.setAttribute("aria-pressed", String(!dusk));
        duskButton.setAttribute("aria-pressed", String(Boolean(dusk)));
      }

      dayButton.addEventListener("click", () => setTime(false));
      duskButton.addEventListener("click", () => setTime(true));
      applyLighting(0);


      // One motion owner coordinates tours, close-ups and poem shots.
      const $ = id => document.getElementById(id);
      const sceneButtons = [...document.querySelectorAll('[data-scene]')];
      const modeElement = $('mode');
      const modeLabel = $('mode-label');
      const progressElement = $('tour-progress');
      const progressTrack = document.querySelector('.progress-track');
      const poemPanel = $('poem-panel');
      const journal = new ExplorationJournal();
      let toastTimer = null;
      function notify(message) {
        clearTimeout(toastTimer);
        $('toast').textContent = message; $('toast').hidden = false;
        toastTimer = setTimeout(() => { $('toast').hidden = true; }, 3900);
      }
      const sound = new Soundscape(assetURL, notify);
      let view = 'tour';
      let tour = null;
      let flight = null;
      let poetrySequence = null;
      let selectedPart = null;
      let detailAudio = null;
      let activePoem = -1;
      let explosion = 0;
      let explosionTarget = 0;
      let tierFilter = 'all';
      const layerOffsets = [0, 9, 26, 44];
      const layerGroups = [];
      const modelMeshes = [];
      const pointer = new THREE.Vector2();
      const raycaster = new THREE.Raycaster();
      const modelCenter = V(0, 50, 0);
      model.scene.traverse(object => {
        if (object.userData.displayLayer) layerGroups.push(object);
        if (object.isMesh) {
          object.material = object.material.clone();
          object.userData.baseEmissive = object.material.emissive?.clone();
          modelMeshes.push(object);
        }
      });
      controls.minDistance = 7;
      controls.maxPolarAngle = Math.PI * .61;

      function showCaption(kicker, text) {
        $('caption-kicker').textContent = kicker;
        $('caption-text').textContent = text;
        $('caption-bar').hidden = !text;
      }
      function setMode(text, playing = false) {
        modeLabel.textContent = text;
        modeElement.classList.toggle('playing', playing);
      }
      function setProgress(amount) {
        const p = clamp(amount, 0, 1);
        progressElement.style.transform = `scaleX(${p})`;
        progressTrack.setAttribute('aria-valuenow', String(Math.round(p * 100)));
      }
      function showPoem(visible) {
        poemPanel.classList.toggle('visible', visible);
        poemPanel.setAttribute('aria-hidden', String(!visible));
        poemPanel.inert = !visible;
      }
      function markPoem(index) {
        activePoem = index;
        document.querySelectorAll('[data-poem]').forEach(button => {
          const active = Number(button.dataset.poem) === index;
          button.classList.toggle('active', active);
          button.setAttribute('aria-pressed', String(active));
        });
        $('poem-caption').textContent = index < 0 ? '四句诗，四种看山河的方式。' : EXPERIENCE.poems[index].caption;
      }
      function renderJournal() {
        sceneButtons.forEach(button => button.classList.toggle('visited', journal.scenes.has(Number(button.dataset.scene))));
        document.querySelectorAll('[data-part]').forEach(button => button.classList.toggle('visited', journal.parts.has(button.dataset.part)));
        document.querySelectorAll('[data-poem]').forEach(button => button.classList.toggle('visited', journal.poems.has(Number(button.dataset.poem))));
        for (const item of EXPERIENCE.stamps) {
          const button = $('stamp-' + item.id);
          const earned = journal.stamps.has(item.id);
          button.classList.toggle('earned', earned);
          button.setAttribute('aria-label', `${item.name}印 · ${earned ? '已获得' : '未获得'} · ${item.hint}`);
          button.querySelector('small').textContent = earned ? '已收藏' : '待探索';
        }
        $('collection-progress').textContent = `山河六印 · ${journal.stamps.size} / 6`;
        $('mini-progress').textContent = `山河六印 ${journal.stamps.size}/6`;
        journal.save();
      }
      for (const item of EXPERIENCE.stamps) {
        const button = document.createElement('button');
        button.id = 'stamp-' + item.id; button.className = 'stamp';
        const symbol = document.createElement('span'); symbol.className = 'stamp-symbol'; symbol.textContent = item.glyph;
        const name = document.createElement('span'); name.textContent = item.name;
        const status = document.createElement('small');
        button.append(symbol, name, status);
        button.addEventListener('click', () => notify(`${item.name}印：${journal.stamps.has(item.id) ? '已收藏。' : ''}${item.hint}`));
        $('stamp-grid').appendChild(button);
      }
      function award(id) {
        if (journal.award(id)) {
          const stamp = EXPERIENCE.stamps.find(item => item.id === id);
          notify(journal.stamps.size === 6 ? '山河六印已集齐，去「留念」制作一张明信片吧。' : `收得一枚「${stamp.name}」印。`);
        }
        renderJournal();
      }
      function completePoem(index) {
        journal.poems.add(index);
        const stamp = EXPERIENCE.poems[index].stamp;
        if (stamp) award(stamp);
        if (journal.poems.size === 4) award('poetry');
        renderJournal();
      }
      renderJournal();

      function clearControlMomentum() {
        controls.enableDamping = false;
        controls.update();
        controls.enableDamping = true;
      }
      function resetStructure() {
        explosionTarget = 0;
        tierFilter = 'all';
        $('explode-button').setAttribute('aria-pressed', 'false');
        $('explode-button').textContent = '展开层次 ↗';
        document.querySelectorAll('[data-tier]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.tier === 'all')));
        layerGroups.forEach(group => { group.visible = true; });
        renderer.shadowMap.needsUpdate = true;
      }
      function highlightPart(key) {
        selectedPart = key;
        for (const mesh of modelMeshes) {
          if (mesh.userData.baseEmissive) mesh.material.emissive.copy(mesh.userData.baseEmissive);
          if (key && mesh.userData.component === key && (tierFilter === 'all' || Number(tierFilter) === mesh.userData.tier)) {
            mesh.material.emissive.add(new THREE.Color('#644e20').multiplyScalar(.3));
          }
        }
        document.querySelectorAll('[data-part]').forEach(button => button.classList.toggle('active', button.dataset.part === key));
      }
      function closeDetail() {
        $('detail-panel').hidden = true;
        detailAudio = null;
      }
      function showDetail({ eyebrow, title, lead, paragraphs, audio, source }) {
        showPoem(false);
        $('detail-eyebrow').textContent = eyebrow;
        $('detail-title').textContent = title;
        $('detail-lead').textContent = lead;
        $('detail-body').replaceChildren(...paragraphs.map(text => { const p = document.createElement('p'); p.textContent = text; return p; }));
        detailAudio = audio || null;
        $('read-detail').hidden = !audio;
        $('read-detail').textContent = '听一段讲解';
        $('detail-source').hidden = !source;
        if (source) $('detail-source').href = source;
        $('detail-panel').hidden = false;
      }
      function haltMotion({ clearCaption = true } = {}) {
        tour = null; flight = null; poetrySequence = null;
        sound.stopVoice();
        controls.enabled = true; clearControlMomentum();
        $('player-controls').hidden = true;
        $('tour-counter').textContent = '';
        $('play-all').textContent = '启程 · 连游四境';
        $('play-poem').textContent = '听一首《登鹳雀楼》';
        if (clearCaption) showCaption('', '');
        setMode('自由漫游'); setProgress(0);
      }
      const viewNames = { tour: '自由漫游', explore: '建筑探索', poetry: '互动诗境', history: '古今故事', keepsake: '观景留念' };
      function switchView(next, { keepMotion = false } = {}) {
        if (!keepMotion) haltMotion();
        view = next;
        document.querySelectorAll('[data-view]').forEach(button => {
          const selected = button.dataset.view === next;
          button.setAttribute('aria-selected', String(selected));
          button.tabIndex = selected ? 0 : -1;
        });
        document.querySelectorAll('.view-pane').forEach(pane => { pane.hidden = pane.id !== 'view-' + next; });
        document.querySelector('.view-body').scrollTop = 0;
        closeDetail();
        showPoem(next === 'poetry');
        if (next !== 'explore') { resetStructure(); highlightPart(null); }
        $('hotspots').hidden = next !== 'explore';
        $('view-hint').textContent = next === 'explore' ? '点击构件或标记，靠近读一座楼' : '拖拽转动视角 · 滚轮缩放';
        if (!keepMotion) setMode(viewNames[next]);
        requestAnimationFrame(refreshLayoutBounds);
      }
      document.querySelectorAll('[data-view]').forEach(button => {
        button.addEventListener('click', () => {
          switchView(button.dataset.view);
          if (view === 'explore') focusOverview();
          if (view === 'history') openHistory(0);
        });
        button.addEventListener('keydown', event => {
          if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
          event.preventDefault();
          const tabs = [...document.querySelectorAll('[data-view]')];
          const current = tabs.indexOf(button);
          const index = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1
            : (current + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
          tabs[index].focus(); tabs[index].click();
        });
      });

      function bridgeLift(from, to) {
        const d = from.distanceTo(to);
        if (d < 75 && from.z > 25 && to.z > 25) return Math.min(7, d * .06);
        let crossing = false;
        for (let i = 1; i < 10; i++) {
          const p = from.clone().lerp(to, i / 10);
          if (Math.abs(p.x) < 49 && Math.abs(p.z) < 49 && p.y < 111) crossing = true;
        }
        return crossing ? Math.max(12, 123 - Math.min(from.y, to.y)) : Math.min(17, d * .045);
      }
      function makeBridge(position, target, duration) {
        clearControlMomentum(); controls.enabled = false;
        return { age: 0, duration, from: camera.position.clone(), fromTarget: controls.target.clone(),
          to: position.clone(), toTarget: target.clone(), lift: bridgeLift(camera.position, position) };
      }
      function updateBridge(bridge, delta) {
        bridge.age = Math.min(bridge.duration, bridge.age + delta);
        const t = smooth(bridge.duration > 0 ? bridge.age / bridge.duration : 1);
        camera.position.lerpVectors(bridge.from, bridge.to, t);
        camera.position.y += Math.sin(Math.PI * t) * bridge.lift;
        controls.target.lerpVectors(bridge.fromTarget, bridge.toTarget, t);
        camera.lookAt(controls.target);
        return bridge.age >= bridge.duration;
      }
      function flyTo(position, target, { duration = 3.3, onArrive, label } = {}) {
        flight = { bridge: makeBridge(position, target, duration), onArrive };
        if (label) setMode(label, true);
      }
      function focusOverview() {
        const upper = explosionTarget > .1;
        flyTo(V(upper ? 185 : 154, upper ? 155 : 106, upper ? 255 : 203), V(0, upper ? 82 : 50, 0),
          { duration: 3.3, label: upper ? '展开楼阁结构' : '建筑探索' });
      }

      // Tour three ends at the start of tour four; the dusk shot then arcs outside the roof.
      const platformPath = new THREE.CatmullRomCurve3([
        V(100,125,100), V(76,116,40), V(48,109,-32), V(36,90,-32), V(31,83.2,-25), V(26,81.4,-17.8)
      ], false, 'centripetal');
      const duskPath = new THREE.CatmullRomCurve3([
        V(26,81.4,-17.8), V(68,116,-44), V(126,126,27), V(190,115,166), V(155,97,255)
      ], false, 'centripetal');
      const routeTarget = V();
      const routePosition = V();
      const routeTotal = EXPERIENCE.scenes.reduce((sum, scene) => sum + scene.approach + scene.duration, 0);
      function sampleRoute(index, progress, position, target) {
        const t = smooth(progress);
        if (index === 0) {
          position.lerpVectors(V(410,274,580), V(235,156,335), t);
          target.lerpVectors(V(-125,26,-265), V(-15,45,-75), t);
        } else if (index === 1) {
          const angle = Math.PI * 2 * t;
          position.set(Math.sin(angle)*184, 82 + Math.sin(Math.PI*t)*9, Math.cos(angle)*184);
          target.set(0,50,0);
        } else if (index === 2) {
          platformPath.getPointAt(t, position);
          target.lerpVectors(V(0,76,0), V(-140,32,-650), smooth(Math.min(1,t*1.14)));
        } else {
          duskPath.getPointAt(t, position);
          target.lerpVectors(V(-140,32,-650), V(16,56,-130), smooth(Math.min(1,t*1.2)));
        }
      }
      function updatePlayer() {
        $('player-controls').hidden = !tour;
        if (!tour) return;
        $('pause-tour').textContent = tour.paused ? '继续' : '暂停';
        $('previous-scene').disabled = tour.index === 0;
        $('next-scene').disabled = tour.index === 3;
        $('tour-counter').textContent = `${tour.index + 1} / 4`;
        const name = ['一','二','三','四'][tour.index];
        setMode(`${tour.paused ? tour.interrupted ? '已接管' : '已暂停' : tour.continuous ? '连游中' : '巡航中'} · 第${name}境`, !tour.paused);
        $('tour-tip').textContent = tour.paused ? '点击继续，从当前视角平滑接回导览。' : '拖拽或缩放可随时接管，随后可继续。';
      }
      function startTour(index, { continuous = false, internal = false } = {}) {
        if (!internal) sound.ensureFromGesture();
        haltMotion();
        switchView('tour', { keepMotion: true });
        resetStructure(); highlightPart(null); markPoem(-1);
        const info = EXPERIENCE.scenes[index];
        sampleRoute(index, 0, routePosition, routeTarget);
        const approach = internal && camera.position.distanceTo(routePosition) < 1 ? .8 : info.approach;
        tour = {
          index, continuous, elapsed: 0, paused: false, interrupted: false, enteredOnce: false,
          bridge: makeBridge(routePosition, routeTarget, approach), cues: new Set(), awards: [], resumeAudio: false
        };
        sceneButtons.forEach(button => {
          const active = Number(button.dataset.scene) === index;
          button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active));
        });
        setTime(index === 3);
        showPoem(index === 3);
        showCaption(`山河四境 · ${['壹','贰','叁','肆'][index]}`, info.caption);
        sound.speak('scene-' + index);
        $('play-all').textContent = continuous ? '重新启程 · 连游四境' : '从头连游四境';
        updatePlayer();
      }
      function pauseTour(interrupted = false) {
        if (!tour || tour.paused) return;
        tour.paused = true; tour.interrupted = interrupted;
        controls.enabled = true; clearControlMomentum(); sound.pauseVoice();
        updatePlayer();
      }
      function resumeTour() {
        if (!tour?.paused) return;
        sound.ensureFromGesture();
        sampleRoute(tour.index, tour.enteredOnce ? tour.elapsed / EXPERIENCE.scenes[tour.index].duration : 0, routePosition, routeTarget);
        tour.bridge = makeBridge(routePosition, routeTarget, camera.position.distanceTo(routePosition) < 1 ? .4 : 2.8);
        tour.paused = false; tour.interrupted = false; tour.resumeAudio = true;
        updatePlayer();
      }
      $('play-all').addEventListener('click', () => startTour(0, { continuous: true }));
      sceneButtons.forEach(button => button.addEventListener('click', () => startTour(Number(button.dataset.scene))));
      $('pause-tour').addEventListener('click', () => { if (tour?.paused) resumeTour(); else pauseTour(); });
      $('previous-scene').addEventListener('click', () => { if (tour && tour.index > 0) startTour(tour.index - 1, { continuous: tour.continuous }); });
      $('next-scene').addEventListener('click', () => { if (tour && tour.index < 3) startTour(tour.index + 1, { continuous: tour.continuous }); });
      $('stop-tour').addEventListener('click', () => haltMotion());

      function updateTour(delta) {
        const active = tour;
        if (!active) return false;
        if (active.paused) return false;
        const info = EXPERIENCE.scenes[active.index];
        if (active.bridge) {
          if (updateBridge(active.bridge, delta)) {
            active.bridge = null; active.enteredOnce = true;
            if (active.resumeAudio) { active.resumeAudio = false; sound.resumeVoice(); }
          }
        } else {
          active.elapsed = Math.min(info.duration, active.elapsed + delta);
          sampleRoute(active.index, active.elapsed / info.duration, routePosition, routeTarget);
          camera.position.copy(routePosition); controls.target.copy(routeTarget); camera.lookAt(controls.target);
          if (active.index === 3) {
            [7.1, 10.4, 13.7, 17].forEach((at, index) => {
              if (active.elapsed >= at && !active.cues.has(index)) {
                active.cues.add(index); markPoem(index);
                showCaption('唐 · 王之涣', EXPERIENCE.poems[index].line);
                sound.speak('poem-' + index);
                active.awards.push({ index, at: active.elapsed + 2.1 });
              }
            });
            active.awards = active.awards.filter(item => {
              if (active.elapsed < item.at) return true;
              completePoem(item.index); return false;
            });
          }
        }
        const approachFraction = active.enteredOnce ? 1 : (active.bridge ? active.bridge.age / active.bridge.duration : 1);
        const sceneElapsed = info.approach * approachFraction + active.elapsed;
        const preceding = EXPERIENCE.scenes.slice(0, active.index).reduce((sum, scene) => sum + scene.approach + scene.duration, 0);
        setProgress(active.continuous ? (preceding + sceneElapsed) / routeTotal : sceneElapsed / (info.approach + info.duration));
        if (!active.bridge && active.elapsed >= info.duration) {
          journal.scenes.add(active.index); award(info.stamp);
          if (active.continuous && active.index < 3) {
            startTour(active.index + 1, { continuous: true, internal: true });
          } else {
            const all = active.continuous;
            tour = null; controls.enabled = true; clearControlMomentum();
            $('player-controls').hidden = true; $('tour-counter').textContent = '';
            setMode(all ? '四境已游览 · 自由漫游' : '本境已游览 · 自由漫游'); setProgress(1);
            if (all) notify('四境游览完成。还可以去「观筑」「诗境」继续探索。');
            showCaption('', '');
          }
        }
        return true;
      }

      // A poem click owns its camera shot and narration; replacing the shot cancels the old voice.
      function startPoem(index, sequence = false, internal = false) {
        if (!internal) sound.ensureFromGesture();
        haltMotion();
        if (!internal || view !== 'poetry') switchView('poetry', { keepMotion: true });
        resetStructure(); highlightPart(null); closeDetail(); showPoem(true); markPoem(index);
        const info = EXPERIENCE.poems[index];
        poetrySequence = { index, sequence, age: 0, arrived: false, voiceStarted: false, completed: false };
        const active = poetrySequence;
        setTime(info.dusk);
        showCaption('唐 · 王之涣', info.line);
        flyTo(V(...info.position), V(...info.target), {
          duration: internal ? 3.2 : 3.5, label: `诗境 · 第${['一','二','三','四'][index]}句`,
          onArrive: () => { if (poetrySequence === active) active.arrived = true; }
        });
        $('play-poem').textContent = sequence ? '停止连续诗境' : '按诗序听完整首';
      }
      document.querySelectorAll('[data-poem]').forEach(button => button.addEventListener('click', () => startPoem(Number(button.dataset.poem))));
      $('play-poem').addEventListener('click', () => {
        if (poetrySequence?.sequence) { haltMotion(); setMode('互动诗境'); return; }
        startPoem(0, true);
      });
      $('close-poem').addEventListener('click', () => {
        if (poetrySequence) haltMotion();
        showPoem(false);
        if (tour) pauseTour();
      });
      function updatePoetry(delta) {
        const active = poetrySequence;
        if (!active || !active.arrived) return;
        active.age += delta;
        if (!active.voiceStarted && active.age >= .15) {
          active.voiceStarted = true;
          sound.speak('poem-' + active.index);
        }
        setProgress(active.sequence ? (active.index + Math.min(active.age / 4.6, 1)) / 4 : Math.min(active.age / 4.6, 1));
        if (active.age >= 4.6 && !active.completed) {
          active.completed = true; completePoem(active.index);
          if (active.sequence && active.index < 3) startPoem(active.index + 1, true, true);
          else {
            poetrySequence = null; setMode('诗境已欣赏 · 自由漫游');
            $('play-poem').textContent = '再听一首《登鹳雀楼》';
            showCaption('', '');
          }
        }
      }

      function anchorFor(key, future = false) {
        const item = EXPERIENCE.parts[key];
        return V(...item.point).add(V(0, layerOffsets[item.tier] * (future ? explosionTarget : explosion) * 1.4, 0));
      }
      function openPart(key, pickedPoint = null, pickedTier = null) {
        if (!EXPERIENCE.parts[key]) return;
        sound.ensureFromGesture();
        const adjustedPoint = pickedPoint?.clone();
        if (adjustedPoint && pickedTier !== null) adjustedPoint.y -= layerOffsets[pickedTier] * explosion * 1.4;
        haltMotion();
        if (view !== 'explore') switchView('explore', { keepMotion: true });
        resetStructure(); highlightPart(key); setTime(false);
        const item = EXPERIENCE.parts[key];
        const point = adjustedPoint || anchorFor(key, true);
        const offset = V(...item.offset);
        showDetail({ eyebrow: '建筑探索 · ' + item.glyph, title: item.title, lead: item.lead, paragraphs: item.paragraphs, audio: 'part-' + key });
        showCaption('建筑探索', item.lead);
        flyTo(point.clone().add(offset), point, {
          duration: 3.5, label: `靠近看 · ${item.title}`,
          onArrive: () => {
            if (selectedPart !== key || view !== 'explore') return;
            journal.parts.add(key);
            if (key === 'podium') award('tower');
            if (journal.parts.size >= 3) award('craft');
            renderJournal(); setMode('正在观察 · ' + item.title);
            sound.speak('part-' + key);
          }
        });
      }
      document.querySelectorAll('[data-part]').forEach(button => button.addEventListener('click', () => openPart(button.dataset.part)));
      $('read-detail').addEventListener('click', () => {
        if (!detailAudio) return;
        sound.setEnabled(true, true);
        sound.narrationEnabled = true; $('narration-enabled').checked = true; sound.persist();
        const key = detailAudio;
        $('read-detail').textContent = '正在讲解 · 点击重听';
        sound.speak(key, () => { if (detailAudio === key) $('read-detail').textContent = '再听一次讲解'; });
      });
      $('close-detail').addEventListener('click', () => { closeDetail(); sound.stopVoice(); showCaption('', ''); });

      function focusVisibleLayers() {
        const bounds = new THREE.Box3();
        model.scene.updateMatrixWorld(true);
        for (const group of layerGroups) {
          if (!group.visible) continue;
          const box = new THREE.Box3().setFromObject(group);
          const futureDelta = layerOffsets[group.userData.tier] * explosionTarget * 1.4 - group.position.y * 1.4;
          box.translate(V(0, futureDelta, 0)); bounds.union(box);
        }
        if (bounds.isEmpty()) return;
        const target = bounds.getCenter(V());
        const size = bounds.getSize(V());
        const distance = Math.max(95, size.x * 1.7, size.y * 2.2, size.z * 1.55);
        const offset = V(.58, .39, .85).normalize().multiplyScalar(distance);
        flyTo(target.clone().add(offset), target, { duration: 3.1, label: tierFilter === 'all' ? '楼阁结构 · 全楼' : '楼阁结构 · ' + ['高台','下层','中层','上层'][Number(tierFilter)] });
      }
      $('explode-button').addEventListener('click', () => {
        haltMotion(); closeDetail(); highlightPart(null); showPoem(false);
        explosionTarget = explosionTarget > .5 ? 0 : 1;
        tierFilter = 'all';
        layerGroups.forEach(group => { group.visible = true; });
        document.querySelectorAll('[data-tier]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.tier === 'all')));
        $('explode-button').setAttribute('aria-pressed', String(explosionTarget === 1));
        $('explode-button').textContent = explosionTarget ? '合拢楼阁 ↙' : '展开层次 ↗';
        focusVisibleLayers();
        showCaption('楼阁结构', explosionTarget ? '高台、楼身与层檐，按外观层次徐徐展开。' : '层层相合，重见完整的楼阁。');
      });
      document.querySelectorAll('[data-tier]').forEach(button => button.addEventListener('click', () => {
        haltMotion(); closeDetail(); highlightPart(null);
        tierFilter = button.dataset.tier;
        layerGroups.forEach(group => { group.visible = tierFilter === 'all' || group.userData.tier === Number(tierFilter); });
        document.querySelectorAll('[data-tier]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
        renderer.shadowMap.needsUpdate = true;
        focusVisibleLayers();
      }));
      function updateLayers(delta) {
        if (Math.abs(explosion - explosionTarget) < .0003) return;
        explosion += (explosionTarget - explosion) * (1 - Math.exp(-delta * 4.2));
        if (Math.abs(explosion - explosionTarget) < .0003) explosion = explosionTarget;
        layerGroups.forEach(group => { group.position.y = layerOffsets[group.userData.tier] * explosion; });
        model.scene.updateMatrixWorld(true);
        renderer.shadowMap.needsUpdate = true;
      }

      function openHistory(index) {
        haltMotion(); resetStructure(); highlightPart(null);
        if (view !== 'history') switchView('history', { keepMotion: true });
        const item = EXPERIENCE.history[index];
        document.querySelectorAll('[data-history]').forEach(button => button.classList.toggle('active', Number(button.dataset.history) === index));
        showDetail({ eyebrow: '古今故事 · ' + item.date, title: item.title, lead: item.lead, paragraphs: item.paragraphs, source: 'http://sxgql.com/?about/' });
        showCaption(item.date, item.lead);
        setTime(index === 2);
        const angle = -.25 + index * .18;
        flyTo(V(Math.sin(angle) * 246, 110 + index * 6, Math.cos(angle) * 246), V(0,51,0), { duration: 3.3, label: '古今故事 · ' + item.date });
      }
      document.querySelectorAll('[data-history]').forEach(button => button.addEventListener('click', () => openHistory(Number(button.dataset.history))));

      // Visible pins remain UI buttons; canvas picking also works on the actual component meshes.
      let layoutBounds = { left: 300, bottom: window.innerHeight, phone: false };
      function refreshLayoutBounds() {
        const sidebar = document.querySelector('.sidebar').getBoundingClientRect();
        layoutBounds = { left: window.innerWidth > 720 ? sidebar.right : 0,
          bottom: window.innerWidth > 720 ? window.innerHeight - 35 : sidebar.top - 10,
          phone: window.innerWidth <= 720 };
      }
      const hotspotItems = Object.entries(EXPERIENCE.parts).map(([key, item], index) => {
        const button = document.createElement('button');
        button.className = 'hotspot'; button.setAttribute('aria-label', '探索' + item.title);
        const dot = document.createElement('span'); dot.className = 'hotspot-dot'; dot.textContent = String(index + 1);
        const label = document.createElement('span'); label.textContent = item.title;
        button.append(dot, label); button.addEventListener('click', () => openPart(key));
        $('hotspots').appendChild(button);
        return { key, item, button, screen: V() };
      });
      function updateHotspots() {
        if (view !== 'explore') return;
        for (const pin of hotspotItems) {
          const anchor = anchorFor(pin.key);
          const projected = pin.screen.copy(anchor).project(camera);
          const x = (projected.x * .5 + .5) * window.innerWidth;
          const y = (-projected.y * .5 + .5) * window.innerHeight;
          const front = ['bracket','column','tile'].includes(pin.key) ? camera.position.z > anchor.z - 4 : true;
          const visible = front && projected.z > -1 && projected.z < 1 && x > layoutBounds.left + 53 && x < window.innerWidth - 55
            && y > 82 && y < layoutBounds.bottom - 20 && (tierFilter === 'all' || Number(tierFilter) === pin.item.tier);
          pin.button.hidden = !visible;
          pin.button.style.left = x.toFixed(1) + 'px'; pin.button.style.top = y.toFixed(1) + 'px';
          pin.button.classList.toggle('active', pin.key === selectedPart);
        }
      }
      let pointerStart = null;
      function interruptMotion() {
        if (tour) { pauseTour(true); return; }
        if (flight || poetrySequence) {
          flight = null; poetrySequence = null; sound.stopVoice(); controls.enabled = true; clearControlMomentum();
          setMode(viewNames[view]); $('play-poem').textContent = '听一首《登鹳雀楼》';
          showCaption('', '');
        }
      }
      renderer.domElement.addEventListener('pointerdown', event => {
        pointerStart = { x: event.clientX, y: event.clientY, time: performance.now(), id: event.pointerId };
        interruptMotion();
      }, { capture: true, passive: true });
      renderer.domElement.addEventListener('wheel', interruptMotion, { capture: true, passive: true });
      controls.addEventListener('start', interruptMotion);
      renderer.domElement.addEventListener('pointerup', event => {
        const start = pointerStart; pointerStart = null;
        if (view !== 'explore' || !start || start.id !== event.pointerId || event.button !== 0
          || Math.hypot(event.clientX-start.x,event.clientY-start.y) > 7 || performance.now()-start.time > 550) return;
        const rect = renderer.domElement.getBoundingClientRect();
        pointer.set((event.clientX-rect.left)/rect.width*2-1, -(event.clientY-rect.top)/rect.height*2+1);
        raycaster.setFromCamera(pointer,camera);
        const pickable = modelMeshes.filter(mesh => mesh.userData.component !== 'structure'
          && (tierFilter === 'all' || mesh.userData.tier === Number(tierFilter)));
        // Find the foremost architectural surface; do not pick a hidden part through a wall.
        const visibleMeshes = modelMeshes.filter(mesh => tierFilter === 'all' || mesh.userData.tier === Number(tierFilter));
        const hit = raycaster.intersectObjects(visibleMeshes, false)[0];
        if (hit && pickable.includes(hit.object)) openPart(hit.object.userData.component, hit.point, hit.object.userData.tier);
      }, { passive: true });
      renderer.domElement.addEventListener('pointercancel', () => { pointerStart = null; }, { passive: true });

      $('sound-settings-toggle').addEventListener('click', () => {
        const visible = $('sound-settings').hidden;
        $('sound-settings').hidden = !visible; $('sound-settings-toggle').setAttribute('aria-expanded', String(visible));
      });
      function closeSoundSettings() { $('sound-settings').hidden = true; $('sound-settings-toggle').setAttribute('aria-expanded', 'false'); }
      $('close-sound-settings').addEventListener('click', closeSoundSettings);
      document.addEventListener('pointerdown', event => {
        if (!$('sound-settings').hidden && !$('sound-settings').contains(event.target) && !$('sound-settings-toggle').contains(event.target)) closeSoundSettings();
      }, { passive: true });
      window.addEventListener('keydown', event => {
        if (event.key === 'Escape' && !$('postcard-dialog').open) {
          if (tour) pauseTour(true); else interruptMotion();
          closeSoundSettings(); closeDetail(); showPoem(false);
        }
        if (event.code === 'Space' && (event.target === document.body || event.target === renderer.domElement) && tour) {
          event.preventDefault(); if (tour.paused) resumeTour(); else pauseTour();
        }
      });

      // Render and copy in the same frame: no persistent drawing buffer or screen capture needed.
      let postcardURL = null;
      let capturing = false;
      $('capture-postcard').addEventListener('click', async () => {
        if (capturing) return;
        capturing = true; $('capture-postcard').disabled = true;
        haltMotion();
        try {
          const canvas = document.createElement('canvas'); canvas.width = 1080; canvas.height = 1440;
          const ctx = canvas.getContext('2d');
          if (!ctx) throw new Error('Canvas unavailable');
          const serif = '"Songti SC", "STSong", "SimSun", serif';
          ctx.fillStyle = '#eee7d5'; ctx.fillRect(0, 0, 1080, 1440);
          ctx.strokeStyle = '#b4a484'; ctx.lineWidth = 1.4; ctx.strokeRect(28, 28, 1024, 1384);
          ctx.fillStyle = '#213c33'; ctx.font = `58px ${serif}`; ctx.textAlign = 'left'; ctx.fillText('鹳雀凌云', 67, 112);
          ctx.font = `22px ${serif}`; ctx.fillStyle = '#7b836d'; ctx.fillText('黄河东岸 · 山西永济 · 数字观景留念', 70, 158);
          ctx.strokeStyle = '#af6552'; ctx.strokeRect(927, 66, 72, 86); ctx.strokeRect(932, 71, 62, 76);
          ctx.fillStyle = '#af6552'; ctx.textAlign = 'center'; ctx.font = `27px ${serif}`; ctx.fillText('登', 964, 105); ctx.fillText('临', 964, 137);
          const photo = { x: 56, y: 201, width: 968, height: 717 };
          const gradient = ctx.createLinearGradient(0, photo.y, 0, photo.y + photo.height);
          gradient.addColorStop(0, '#dce1cc'); gradient.addColorStop(1, '#c4c8b0');
          ctx.fillStyle = gradient; ctx.fillRect(photo.x, photo.y, photo.width, photo.height);
          sky.position.copy(camera.position); renderer.render(scene, camera);
          const source = renderer.domElement;
          const fit = Math.min(photo.width / source.width, photo.height / source.height);
          const w = source.width * fit, h = source.height * fit;
          ctx.drawImage(source, photo.x + (photo.width-w)/2, photo.y + (photo.height-h)/2, w, h);
          ctx.strokeStyle = '#9b9e824f'; ctx.strokeRect(photo.x, photo.y, photo.width, photo.height);
          ctx.fillStyle = '#72836c'; ctx.textAlign = 'left'; ctx.font = `19px ${serif}`;
          ctx.fillText('山 河 一 瞬', 68, 954);
          ctx.textAlign = 'right';
          const date = new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' }).replaceAll('/', '.');
          ctx.fillText(date, 1012, 954);
          const lines = [['白日依山尽，', '黄河入海流。'], ['欲穷千里目，', '更上一层楼。'], ['一楼阅千年，', '一眼望山河。']][Number($('postcard-poem').value)];
          ctx.textAlign = 'center'; ctx.fillStyle = '#2d4138'; ctx.font = `49px ${serif}`;
          ctx.fillText(lines[0], 540, 1048); ctx.fillText(lines[1], 540, 1122);
          ctx.font = `19px ${serif}`; ctx.fillStyle = '#859079';
          ctx.fillText(Number($('postcard-poem').value) < 2 ? '唐 · 王之涣《登鹳雀楼》' : '鹳雀楼数字化漫游', 540, 1172);
          EXPERIENCE.stamps.forEach((stamp, index) => {
            const x = 229 + index * 124, y = 1254, earned = journal.stamps.has(stamp.id);
            ctx.save(); ctx.translate(x, y); if (earned) ctx.rotate(-.035);
            ctx.strokeStyle = earned ? '#ae614b' : '#bcbfac'; ctx.fillStyle = earned ? '#a65342' : '#abb29c';
            ctx.lineWidth = 1.6; ctx.strokeRect(-34, -33, 68, 66); ctx.strokeRect(-29, -28, 58, 56);
            ctx.font = `31px ${serif}`; ctx.fillText(stamp.glyph, 0, 10);
            ctx.restore(); ctx.font = `18px ${serif}`; ctx.fillStyle = '#7c876e'; ctx.fillText(stamp.name, x, 1325);
          });
          ctx.fillStyle = '#7b876d'; ctx.font = `17px ${serif}`; ctx.fillText(`山河六印 · 已收藏 ${journal.stamps.size} 枚`, 540, 1380);
          const blob = await new Promise((resolve, reject) => canvas.toBlob(value => value ? resolve(value) : reject(new Error('Image encoding failed')), 'image/png'));
          if (postcardURL) URL.revokeObjectURL(postcardURL);
          postcardURL = URL.createObjectURL(blob);
          $('postcard-preview').src = postcardURL;
          $('postcard-status').textContent = '明信片包含当前视角、所选诗句与已收集的印章。';
          $('postcard-dialog').showModal();
        } catch (error) {
          console.error('Postcard:', error); notify('明信片暂未生成，请稍后再试一次。');
        } finally { capturing = false; $('capture-postcard').disabled = false; }
      });
      $('download-postcard').addEventListener('click', () => {
        if (!postcardURL) return;
        const link = document.createElement('a'); link.href = postcardURL;
        link.download = '鹳雀凌云_观景明信片.png'; document.body.appendChild(link); link.click(); link.remove();
        $('postcard-status').textContent = '已准备下载。手机也可长按明信片图片保存。';
      });
      $('close-postcard').addEventListener('click', () => $('postcard-dialog').close());
      $('retake-postcard').addEventListener('click', () => $('postcard-dialog').close());
      window.addEventListener('pagehide', () => { if (postcardURL) URL.revokeObjectURL(postcardURL); });

      function resize() {
        const width = Math.max(1, window.innerWidth), height = Math.max(1, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, matchMedia('(pointer: coarse)').matches ? 1.25 : 1.6, Math.sqrt(2800000 / (width * height))));
        renderer.setSize(width, height); camera.aspect = width / height;
        if (width > 720) {
          const sidebarWidth = width > 1050 ? 300 : 267;
          camera.setViewOffset(width, height, -Math.min(width * .1, sidebarWidth * .44), 0, width, height);
        } else camera.setViewOffset(width, height, 0, height * .13, width, height);
        camera.updateProjectionMatrix(); refreshLayoutBounds();
      }
      window.addEventListener('resize', resize, { passive: true });
      const sidebarObserver = new ResizeObserver(refreshLayoutBounds);
      sidebarObserver.observe(document.querySelector('.sidebar'));
      resize();
      let previousTime = performance.now();
      let waterTime = 0;
      let firstFrame = true;
      document.addEventListener('visibilitychange', () => {
        previousTime = performance.now(); sound.visibility(document.hidden);
      });
      renderer.setAnimationLoop(now => {
        const delta = Math.min(Math.max((now - previousTime) / 1000, 0), .05);
        previousTime = now;
        if (document.hidden) return;
        waterTime += delta; waterUniforms.uTime.value = waterTime;
        if (Math.abs(requestedLight - lightAmount) > .0001) {
          lightAmount += (requestedLight - lightAmount) * (1 - Math.exp(-delta * 1.6));
          if (Math.abs(requestedLight - lightAmount) < .0001) lightAmount = requestedLight;
          applyLighting(lightAmount);
        }
        updateLayers(delta);
        const toured = updateTour(delta);
        if (!toured) {
          if (flight) {
            const active = flight;
            if (updateBridge(active.bridge, delta)) {
              flight = null; controls.enabled = true; clearControlMomentum();
              setMode(viewNames[view]);
              if (active.onArrive) active.onArrive();
            }
          } else { controls.update(); if (camera.position.y < 1.8) { camera.position.y = 1.8; camera.lookAt(controls.target); } }
          updatePoetry(delta);
        }
        // A gentle fill keeps close-up brackets legible beneath the eaves.
        fillLight.intensity = mix(.6, .45, lightAmount) + (view === 'explore' ? .8 : 0);
        sound.tick(lightAmount, camera.position.z < 0 ? .9 : tour?.index === 0 ? .7 : .1, view === 'explore');
        sky.position.copy(camera.position);
        renderer.render(scene, camera);
        updateHotspots();
        if (firstFrame) { firstFrame = false; loading.classList.add('ready'); }
      });

    }
