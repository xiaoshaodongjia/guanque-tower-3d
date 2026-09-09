// Static hosting uses relative URLs; the standalone edition embeds its model and audio.
// Model/audio cache keys depend only on their own bytes, never on a UI edit.
const ASSET_VERSIONS = {"guanque-fast.glb":"0564c40b2b4b","guanque-exploration.glb":"8e58e122e4d5","guanque-interior.glb":"b9ce1c0eeffb","guanque-surroundings.glb":"03e9f89a11ac","audio/day.mp3":"49cd0b8c980b","audio/dusk.mp3":"6454c5fa922a","audio/part-bracket.mp3":"cb7869e37867","audio/part-column.mp3":"70b699446320","audio/part-podium.mp3":"1117c120b770","audio/part-ridge.mp3":"b3476ebc6869","audio/part-tile.mp3":"5b4bf3bd5fa1","audio/poem-0.mp3":"8fec4ef4aa5d","audio/poem-1.mp3":"d26aed6c7370","audio/poem-2.mp3":"68180cf8b284","audio/poem-3.mp3":"74b1c47f992a","audio/river.mp3":"9d19e6affa7e","audio/scene-0.mp3":"d6f137606103","audio/scene-1.mp3":"33e97dd0dad1","audio/scene-2.mp3":"47bd9556f9fc","audio/scene-3.mp3":"4d091c123093","audio/wind.mp3":"4aa2ff8d4ce0"};
const MODEL_ASSETS = {"fast":{"path":"guanque-fast.glb","bytes":8881776},"fine":{"path":"guanque-exploration.glb","bytes":21294552}};
const ARCHITECTURE = {"revision":"engineering-reference-2026-09-06","units":"metres","totalHeight":73.9,"entranceElevation":16.5,"knownStructuralElevations":{"main4":38.13,"main5":47.73},"podiumStoreys":3,"mainStoreys":6,"visibleStoreys":[1,4,6],"elevationFrom":[0.0,18.8,41.2,75.47432708740234],"elevationTo":[0.0,16.5,38.13,73.9],"outerColumnDiameters":[1.0,0.85,0.75,0.7],"innerColumnDiameters":[1.2,1.1,1.0,0.9],"fifthStoreyAxisInset":0.5,"extent":"Exterior reference model; no measured interior plan. Missing levels and plan dimensions are not asserted.","sources":["http://sxgql.com/?about/","https://www.gc5.com/jzgc/jzsg/10190840.html","http://123.57.212.98/html/tm/29/38/69/content/1433.html"]};
const INTERIOR = {"revision":"interior-hall-reference-2026-09-09","units":"metres","storeys":[{"id":"p1","label":"台基一层","z":0.9,"known":true,"source":"施工正文：底层室内地坪相对首层 −15.60 m。","width":62,"depth":44,"index":0,"relativeZ":-15.6,"height":5.2,"planConfidence":"estimated","columnCount":null,"columns":[[-12,-7],[-12,0],[-12,7],[-8,-7],[-8,0],[-8,7],[8,-7],[8,0],[8,7],[12,-7],[12,0],[12,7],[-4,-7],[-4,7],[0,-7],[0,7],[4,-7],[4,7],[-5.6,0],[5.6,0],[-24,-16],[-24,0],[-24,16],[24,-16],[24,0],[24,16],[0,-16],[0,16]],"voids":[],"note":"楼板轮廓、厚度、柱位、交通区尺寸和梯段均为示意；不代表真实房间布局。"},{"id":"p2","label":"台基二层","z":6.1,"known":false,"source":"缺该层标高，暂将台基内部高度三等分。","width":62,"depth":44,"index":1,"relativeZ":-10.4,"height":5.2,"planConfidence":"estimated","columnCount":null,"columns":[[-12,-7],[-12,0],[-12,7],[-8,-7],[-8,0],[-8,7],[8,-7],[8,0],[8,7],[12,-7],[12,0],[12,7],[-4,-7],[-4,7],[0,-7],[0,7],[4,-7],[4,7],[-5.6,0],[5.6,0],[-24,-16],[-24,0],[-24,16],[24,-16],[24,0],[24,16],[0,-16],[0,16]],"voids":[],"note":"楼板轮廓、厚度、柱位、交通区尺寸和梯段均为示意；不代表真实房间布局。"},{"id":"p3","label":"台基三层","z":11.3,"known":false,"source":"缺该层标高，暂将台基内部高度三等分。","width":60,"depth":42,"index":2,"relativeZ":-5.2,"height":5.2,"planConfidence":"estimated","columnCount":null,"columns":[[-12,-7],[-12,0],[-12,7],[-8,-7],[-8,0],[-8,7],[8,-7],[8,0],[8,7],[12,-7],[12,0],[12,7],[-4,-7],[-4,7],[0,-7],[0,7],[4,-7],[4,7],[-5.6,0],[5.6,0],[-24,-16],[-24,0],[-24,16],[24,-16],[24,0],[24,16],[0,-16],[0,16]],"voids":[],"note":"楼板轮廓、厚度、柱位、交通区尺寸和梯段均为示意；不代表真实房间布局。"},{"id":"m1","label":"楼身一层","z":16.5,"known":true,"source":"施工正文：±0.00 为楼身首层室内地坪，周边地面为 −16.50 m。","width":35,"depth":24,"index":3,"relativeZ":0.0,"height":7.21,"planConfidence":"estimated","columnCount":20,"columns":[[-12,-7],[-12,0],[-12,7],[-8,-7],[-8,0],[-8,7],[8,-7],[8,0],[8,7],[12,-7],[12,0],[12,7],[-4,-7],[-4,7],[0,-7],[0,7],[4,-7],[4,7],[-5.6,0],[5.6,0]],"voids":[],"note":"楼板轮廓、厚度、柱位、交通区尺寸和梯段均为示意；不代表真实房间布局。"},{"id":"m2","label":"楼身二层","z":23.71,"known":false,"source":"缺该层标高，暂将首层至第四层的高度三等分。","width":35,"depth":24,"index":4,"relativeZ":7.21,"height":7.21,"planConfidence":"estimated","columnCount":20,"columns":[[-12,-7],[-12,0],[-12,7],[-8,-7],[-8,0],[-8,7],[8,-7],[8,0],[8,7],[12,-7],[12,0],[12,7],[-4,-7],[-4,7],[0,-7],[0,7],[4,-7],[4,7],[-5.6,0],[5.6,0]],"voids":[{"x":0,"z":0,"width":10,"depth":12.6,"guard":0.18,"confidence":"estimated"}],"note":"楼板轮廓、厚度、柱位、交通区尺寸和梯段均为示意；不代表真实房间布局。"},{"id":"m3","label":"楼身三层","z":30.92,"known":false,"source":"缺该层标高，暂将首层至第四层的高度三等分。","width":32,"depth":22,"index":5,"relativeZ":14.42,"height":7.21,"planConfidence":"estimated","columnCount":20,"columns":[[-12,-7],[-12,0],[-12,7],[-8,-7],[-8,0],[-8,7],[8,-7],[8,0],[8,7],[12,-7],[12,0],[12,7],[-4,-7],[-4,7],[0,-7],[0,7],[4,-7],[4,7],[-5.6,0],[5.6,0]],"voids":[],"note":"楼板轮廓、厚度、柱位、交通区尺寸和梯段均为示意；不代表真实房间布局。"},{"id":"m4","label":"楼身四层","z":38.13,"known":true,"source":"施工正文：第四层结构范围从相对首层 +21.63 m 开始。","width":29,"depth":20,"index":6,"relativeZ":21.63,"height":9.6,"planConfidence":"estimated","columnCount":20,"columns":[[-12,-7],[-12,0],[-12,7],[-8,-7],[-8,0],[-8,7],[8,-7],[8,0],[8,7],[12,-7],[12,0],[12,7],[-4,-7],[-4,7],[0,-7],[0,7],[4,-7],[4,7],[-5.6,0],[5.6,0]],"voids":[],"note":"楼板轮廓、厚度、柱位、交通区尺寸和梯段均为示意；不代表真实房间布局。"},{"id":"m5","label":"楼身五层","z":47.73,"known":true,"source":"施工正文：第五层起点相对首层 +31.23 m；外槽柱轴线在本层内移 0.50 m。","width":28,"depth":19,"index":7,"relativeZ":31.23,"height":5.95021,"planConfidence":"estimated","columnCount":20,"columns":[[-12,-7],[-12,0],[-12,7],[-8,-7],[-8,0],[-8,7],[8,-7],[8,0],[8,7],[12,-7],[12,0],[12,7],[-4,-7],[-4,7],[0,-7],[0,7],[4,-7],[4,7],[-5.6,0],[5.6,0]],"voids":[],"note":"楼板轮廓、厚度、柱位、交通区尺寸和梯段均为示意；不代表真实房间布局。"},{"id":"m6","label":"楼身六层","z":53.68021,"known":false,"source":"施工正文确认其对应外观第三层；本层高度沿用已校正的照片模型。","width":26,"depth":16,"index":8,"relativeZ":37.18021,"height":7.41979,"planConfidence":"estimated","columnCount":20,"columns":[[-12,-7],[-12,0],[-12,7],[-8,-7],[-8,0],[-8,7],[8,-7],[8,0],[8,7],[12,-7],[12,0],[12,7],[-4,-7],[-4,7],[0,-7],[0,7],[4,-7],[4,7],[-5.6,0],[5.6,0]],"voids":[],"note":"楼板轮廓、厚度、柱位、交通区尺寸和梯段均为示意；不代表真实房间布局。"}],"atrium":{"x":0,"z":0,"width":10,"depth":12.6,"guard":0.18,"confidence":"estimated","floor":3,"gallery":4,"ceiling":5},"scope":"结构示意：楼层总数和部分标高有施工资料支持；首层通高大厅、二层回廊参考实拍与施工文字，洞口、柱网、平面及部分层高仍为推定。","supported":["台基三层、楼身六层","楼身 20 根内柱：12 根结合两处楼梯间剪力墙，8 根独立","台基方柱、楼身圆柱","楼身 4–5、8–9 轴与 E–G 轴间设楼梯、电梯及剪力墙","内柱直径 1.20、1.10、1.00、0.90 m 的变径序列","首层大厅与二层回廊相通：实拍俯视照片；施工文字提及二层回廊和一层洞口"],"estimated":["全部水平轴线间距与楼板轮廓","台基二、三层与楼身二、三、六层标高","柱径变更与楼面标高的简化对应","两侧交通区的绝对位置、剪力墙厚度、梯段与井道尺寸","首层上方洞口长宽、回廊宽度、内柱平面位置与彩绘细节"],"notModeled":["全部实际房间用途与最新展陈","全部实际楼梯、电梯数量及精确平面","钢筋与机电管线"],"sources":["https://www.gc5.com/jzgc/jzsg/10190840.html","http://shigongdaquan.max.book118.com/01.公共设施施工组织设计/某楼复建工程施工组织设计方案.htm","https://zhuanlan.zhihu.com/p/193093280","https://www.nipic.com/show/33713653.html"],"bytes":3133220,"triangles":36512,"meshes":62};
const FLOOR_STORIES = [{"id":"p1","title":"把高楼托在地面之上","lead":"脚下的高台，也是楼阁的一部分。","paragraphs":["外面看去厚重的台基，内部实际分成三层。施工正文将台基底层地坪记为首层地坪以下 15.60 米；按周边地面换算，这里约为地面以上 0.90 米。","数字导览从柱、梁与楼板之间，带你认识高台的内部空间。眼前的柱位、洞口和交通区仍是结构示意，不能据此判断真实设备或展厅的位置。"],"source":"https://www.gc5.com/jzgc/jzsg/10190840.html","narration":"外面厚重的高台，内部也有三层空间。这里是台基一层。柱、梁与楼板共同托起楼阁；眼前的布局，是依据公开施工资料制作的结构示意。","kind":"structure","audio":null},{"id":"p2","title":"高台里的三重空间","lead":"外观的一座高台，藏着内部的层次。","paragraphs":["鹳雀楼的内部楼层，不能只靠数屋檐来判断。台基内部三层与楼身六层合在一起，构成这次数字导览的九个层次。","这一层的确切标高尚缺完整图纸，模型暂按台基高度区间等分。沿着同一套柱、梁与楼板向上看，可以理解中空高台如何组织空间。"],"source":"https://www.gc5.com/jzgc/jzsg/10190840.html","narration":"来到台基二层，试着把目光从楼板移向柱列。外观的一座高台，内部还有三重空间。这里的层高暂作推定，帮助我们理解楼阁从下到上的结构关系。","kind":"structure","audio":null},{"id":"p3","title":"从高台走向楼阁","lead":"登临，先从高度的变化开始。","paragraphs":["从周边地面到楼身首层地坪，高差约 16.5 米。外部的石阶与月台，把这段高度转化为拾级而上的登临体验。","台基三层位于这段过渡的上部。继续上楼，就进入楼身一层。数字漫游把内外两种登临方式联系起来，具体梯段与楼层衔接仍待完整 CAD 核对。"],"source":"https://www.gc5.com/jzgc/jzsg/10190840.html","narration":"从周边地面到楼身首层，高差约十六点五米。石阶与月台，让登楼成为一步步展开的过程。再向上一层，我们便从高台走入楼身。","kind":"structure","audio":null},{"id":"m1","title":"河畔起高楼","lead":"从这一层，先听古楼的来处。","paragraphs":["据景区介绍，鹳雀楼始建于北周，最初具有军事戍楼的用途，因鹳雀常来栖息而得名。楼临黄河、远望中条，地理位置与登临视野一起构成了它的记忆。","眼前的三维模型表现的是现代复建楼。复建工程于 1997 年启动，2002 年开放；古楼的故事，借新的建筑空间继续被人们讲述。"],"source":"http://sxgql.com/?about/","narration":"欢迎走进楼身一层。鹳雀楼的故事，从黄河岸边开始。据景区介绍，古楼始建于北周，因鹳雀时常栖息而得名。今天看到的，是一九九七年启动重建、二零零二年开放的复建楼。","kind":"story","audio":null},{"id":"m2","title":"二十字里的山河","lead":"一首短诗，把登临写成了千年的记忆。","paragraphs":["“白日依山尽，黄河入海流。欲穷千里目，更上一层楼。”王之涣的《登鹳雀楼》只有四句二十字，却把落日、大河与登高的动作连在了一起。","前两句展开眼前山河，后两句把视线引向更远的地方。此层的数字主题从诗意出发，不代表这里真实设有某一座诗歌展厅。"],"source":"http://sxgql.com/?about/","narration":"白日依山尽，黄河入海流。欲穷千里目，更上一层楼。四句二十字，从眼前的山河，写到更远的视野。来到这一层，让我们先停一步，再读这首熟悉的唐诗。","kind":"story","audio":null},{"id":"m3","title":"楼隐，诗传","lead":"建筑曾经消失，登临的记忆仍在。","paragraphs":["据景区介绍，古鹳雀楼曾毁于战火，此后长期未获重建。这里不把今天的复建楼当成从古代原样留存的建筑。","楼可以隐去，诗却一代代传下来。《登鹳雀楼》让黄河岸边的登临经验越过时间，也让后来的重建有了人们熟悉的文化记忆。"],"source":"http://sxgql.com/?about/","narration":"古鹳雀楼曾毁于战火，此后长期未获重建。楼可以隐去，诗却一代代传下来。黄河岸边的登临记忆，因这首唐诗延续至今。","kind":"story","audio":null},{"id":"m4","title":"重建，再续登临","lead":"新的楼阁，回应久远的文化记忆。","paragraphs":["据景区介绍，鹳雀楼于 1997 年 12 月启动重建，2002 年 9 月 26 日正式对外开放。今天眼前的楼阁，是这次现代复建的成果。","复建采用仿唐形制，把高台、柱列与层檐重新带到黄河岸边。它延续的是古楼与诗文的文化记忆，具体空间和工程构造属于现代建筑。"],"source":"http://sxgql.com/?about/","narration":"一九九七年十二月，鹳雀楼启动重建。二零零二年九月二十六日，复建楼正式对外开放。新的楼阁以仿唐形制，回应古楼与诗文留下的文化记忆。","kind":"story","audio":null},{"id":"m5","title":"唐风与今工","lead":"檐下的古意，来自今天的建造。","paragraphs":["复建楼采用框架剪力墙结构，并组合预制与现浇的仿古混凝土构件。眼前的柱、枋、斗拱和层檐，以现代工程方法表现仿唐楼阁的建筑节奏。","施工方案记载，在楼身第五层平面处，外槽柱轴线向内移动 500 毫米。这一处明确的调整，让我们能把上部收敛的轮廓，与具体的建造尺寸联系起来。"],"source":"https://www.gc5.com/jzgc/jzsg/10190840.html","narration":"仿古的外观之下，是现代的框架剪力墙结构。柱、枋、斗拱与层檐，共同表现仿唐楼阁的节奏。在楼身五层，外槽柱轴线向内移动半米，把具体尺寸与楼阁轮廓联系起来。","kind":"story","audio":null},{"id":"m6","title":"更上一层楼","lead":"走到高处，再把目光交给山河。","paragraphs":["楼身六层对应外观的第三层。包括台基与最高脊饰在内，复建楼总高 73.9 米；楼层地坪、屋顶和最高大吻，属于不同的高度基准。","这次数字登临，从台基与柱梁走到楼阁高处。回到“更上一层楼”，也可以把它读作一次不断拓展视野的邀请。此处故事与路线为数字导览编排，不表示真实开放区域。"],"source":"http://sxgql.com/?about/","narration":"我们来到楼身六层，这里对应外观的第三层。从高台、柱梁，到层檐与屋顶，楼阁的关系在一路登临中逐渐清晰。更上一层楼，也是在邀请我们，把目光放得更远。","kind":"story","audio":null}];
const SCENIC_PARK = {"revision":"aerial-reference-2026-09-07","units":"metres","confidence":"schematic","scope":"入口至主楼核心游线的实景关系参考模型；水平尺寸、树木与附属建筑细节为示意。","layoutBasis":"遵循用户确认：卫星截图校正平面相对位置，实景航拍参考门楼、廊房与树群；概念图只存档。","sequence":["前广场与假山水景","门楼及两翼廊房","园内景观湖与中轴桥","登楼步道与开敞节点","环楼广场与鹳雀楼"],"supported":["实景入口—鹳影湖桥—圆形广场—主楼的前后顺序","卫星图可见的双翼状湖岸","中央门楼、侧门和低矮廊房","高台周围的铺装广场","卫星图左侧的大地诗景，用户确认是王之涣的诗","入口侧停车区"],"estimated":["全部周边水平尺寸与绝对朝向","园路细节与被遮挡部分","树种、树位和附属建筑细部","湖岸轮廓与桥的具体尺寸"],"notClaimed":["完整 2.064 平方公里景区测绘复原","概念总平面等同于当前建设现状","园内景观湖等同于黄河"],"sources":[{"title":"用户提供：入口至主楼航拍（画面带新华社标识）","local":"work/references/鹳雀楼_入口至主楼航拍_用户提供_26f6e3d4.png"},{"title":"用户提供：门区与鹳影湖卫星截图","local":"work/references/鹳雀楼_门区鹳影湖卫星参考_用户提供_20260907.png"},{"title":"用户提供：主轴、主楼和左侧大地诗景卫星截图","local":"work/references/鹳雀楼_主轴与大地诗景卫星参考_用户提供_20260907.png"},{"title":"永济市政府：鹳雀楼景区","url":"http://www.yongji.gov.cn/doc/2024/07/01/458531.shtml"},{"title":"景区官方实景图库","url":"http://sxgql.com/?tupian/52.html"},{"title":"用户提供：景区概念总平面","local":"work/references/鹳雀楼_景区概念总平面_用户提供_20260907.png","role":"archive-only"}],"waypoints":[{"id":"overview","title":"景区总览","subtitle":"由入口望向鹳雀楼","position":[360,365,775],"target":[-27,8,218],"text":"沿航拍可见的主轴，把门区、湖桥、步道与高台连成一段完整的登临。"},{"id":"forecourt","title":"前广场","subtitle":"假山水景 · 入园起点","position":[70,44,521],"target":[0,6,403],"text":"前广场中央的假山水景与门楼形成前后层次，两翼的低矮廊房把视线引向中轴。"},{"id":"gate","title":"门楼与廊房","subtitle":"中央门楼 · 两翼展开","position":[43,24,439],"target":[0,6,394],"text":"中央门楼、左右侧门和两翼廊房参考实景形制，门洞、屋顶和木构细节作适度简化。"},{"id":"lake","title":"鹳影湖","subtitle":"双翼湖岸 · 中轴过桥","position":[105,87,389],"target":[0,2,320],"text":"门后是横向展开的园内景观湖。中轴桥跨过水面，岸边园路与树群沿曲线展开。"},{"id":"axis","title":"圆形广场","subtitle":"主轴步道 · 几何草坪","position":[87,106,261],"target":[0,5,178],"text":"中央步道连接圆形广场与四周的几何绿地。位置关系按卫星截图校正，尺度为照片估计。"},{"id":"poem","title":"大地诗景","subtitle":"王之涣 · 登鹳雀楼","position":[-210,170,-10],"target":[-214,0,54],"text":"白日依山尽，黄河入海流。欲穷千里目，更上一层楼。主楼侧方的地景文字参考你提供的卫星图，字体与种植细节为示意。"},{"id":"tower","title":"高台前庭","subtitle":"环楼广场 · 接续入楼","position":[103,70,154],"target":[0,32,8],"text":"环楼铺装把周围绿地与高台分开。从这里可以切入楼内漫游，逐层阅读六段故事。"}],"route":["forecourt","gate","lake","axis","poem","tower"],"bytes":4140924,"gzipBytes":1634020,"triangles":106164,"meshes":46,"trees":406,"bounds":[[-227.8249969482422,-0.07000000029802322,-122.35275268554688],[306.95001220703125,15.605109214782715,507.32501220703125]],"footprint":[[-227.8249969482422,417.0],[-150.0,-73.0],[-145.56300354003906,-78.1500015258789],[-143.57899475097656,-79.28099822998047],[227.51600646972656,-121.66600036621094],[242.45599365234375,-122.35299682617188],[256.4809875488281,-121.52899932861328],[269.1289978027344,-118.76599884033203],[279.9010009765625,-113.56999969482422],[288.093994140625,-105.49800109863281],[294.0069885253906,-93.98200225830078],[298.7049865722656,-78.99199676513672],[302.322998046875,-61.150001525878906],[304.89599609375,-41.143001556396484],[306.43701171875,-19.684999465942383],[306.95001220703125,2.5],[306.43701171875,24.684999465942383],[304.89599609375,46.143001556396484],[302.322998046875,66.1500015258789],[298.7049865722656,83.99199676513672],[294.0069885253906,98.98200225830078],[157.0,507.32501220703125],[-224.0,507.32501220703125],[-227.8249969482422,503.0]]};
let embeddedAudioMap;
function assetURL(path) {
  if (path.startsWith('audio/')) {
    const audioTag = document.getElementById('guanque-audio');
    if (audioTag) {
      if (!embeddedAudioMap) { embeddedAudioMap = JSON.parse(audioTag.textContent); audioTag.remove(); }
      if (embeddedAudioMap[path]) return embeddedAudioMap[path];
    } else if (embeddedAudioMap && embeddedAudioMap[path]) return embeddedAudioMap[path];
  }
  const version = ASSET_VERSIONS[path];
  return new URL('./assets/' + path + (version ? '?v=' + version : ''), document.baseURI).href;
}

const EXPERIENCE = {
  scenes: [
    { title: '蒲津古渡，大河在望', short: '大河在望', caption: '沿黄河东岸，缓缓走入这片山河。', duration: 17, approach: 4, stamp: 'river' },
    { title: '鹳雀雄楼，高台凌云', short: '高台凌云', caption: '绕楼一周，读懂高台、层檐与柱列的节奏。', duration: 32, approach: 4.3, stamp: 'tower' },
    { title: '层檐极目，凭栏望远', short: '凭栏望远', caption: '沿楼外侧来到高处，让视线越过重檐。', duration: 17, approach: 4.5, stamp: 'heights' },
    { title: '诗诵千年，白日依山尽', short: '落日诗境', caption: '长河映金，四句唐诗回到风景里。', duration: 20, approach: 4, stamp: 'sunset' }
  ],
  parts: {
    bracket: { title: '檐下斗拱', lead: '层叠相承，向外出挑。', point: [5.04, 35.7, 37.8], offset: [9, 5.5, 18], tier: 1, glyph: '枓',
      paragraphs: ['华拱、令拱与小斗交叠承接，逐层向檐外出挑。施工资料特别记载，楼身首层斗拱不设栌斗；其余层次可结合柱头承托关系辨认构件。近看还能看到沿曲边描出的彩画白线。', '复建楼将预制与现浇的仿古混凝土构件组合起来，再施以彩绘。本模型结合施工构造图细化了承托关系；回廊上方也可看到平棋天花。'], source: 'https://www.gc5.com/jzgc/jzsg/10190840.html' },
    tile: { title: '灰陶筒瓦', lead: '顺着瓦垄，读出屋面的方向。', point: [18, 43, 27], offset: [11, 14, 24], tier: 1, glyph: '瓦',
      paragraphs: ['筒瓦盖住相邻底瓦的接缝，瓦垄沿屋面坡向排列，将雨水引向檐口。', '模型用重复的小瓦片组成层檐。近看瓦垄的起伏，远看它们汇成灰色屋面的细密纹理。'] },
    ridge: { title: '正脊与鸱吻', lead: '把目光，交给屋顶最高处。', point: [21.77, 102.5, 0], offset: [19, 8, 28], tier: 3, glyph: '脊',
      paragraphs: ['正脊位于屋顶最高的交线。两端的鸱吻形脊饰抬起轮廓，与两侧的坡面、翘角共同构成楼阁的天际线。', '包含台基在内，从地面至最高大吻为 73.9 米。顶层采用歇山形制，正面五间、侧面三间，脊线与山花一起构成高处的轮廓。'], source: 'https://www.gc5.com/jzgc/jzsg/10190840.html' },
    column: { title: '立柱与回廊', lead: '柱列成行，檐影有序。', point: [15.12, 31.3, 37.8], offset: [14, 3.5, 25], tier: 1, glyph: '柱',
      paragraphs: ['立柱沿回廊展开，顶部收圆形成卷杀，柱间由额枋联系，上承斗拱。柱头做法随层次变化，楼身首层不设栌斗。抬头可见有框线和彩画的平棋天花。', '施工资料记载，外檐柱直径由下部约 1 米逐步变细至上部约 0.7 米；第五层外槽柱轴线向内移 0.5 米。复建楼以现代混凝土结构表现仿唐楼阁形制。'], source: 'https://www.gc5.com/jzgc/jzsg/10190840.html' },
    podium: { title: '高台与石阶', lead: '楼阁之基，也是登临的开始。', point: [33, 14, 44], offset: [62, 31, 76], tier: 0, glyph: '台',
      paragraphs: ['灰砖包砌的高台托起楼阁，从周边地面至楼身首层地坪约 16.5 米。石阶、平台与栏杆逐级展开，构成登临的起点。', '施工资料将台基内部分为三层，楼身分为六层。外观第二、第三层分别对应楼身第四、第六层；外观层次与内部楼层的编号不同。'], source: 'https://www.gc5.com/jzgc/jzsg/10190840.html' }
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
    { date: '2002 年', title: '重见鹳雀楼', lead: '2002 年 9 月 26 日，正式对外开放。', paragraphs: ['复建后的鹳雀楼外观四檐三层，楼身内部六层，加上台基三层共九层，总高 73.9 米。外观层次与内部楼层并不是同一概念。', '数字漫游可查看九层结构剖视，也可进入楼内行走、沿示意楼梯登层，并阅读楼身六层自动展开的主题故事；台基三层可主动查看结构说明。内部平面与楼梯尺寸仍属示意，故事主题不代表实际展厅安排。'] }
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

// 镜头标记沿用原场景的水平坐标，竖向与模型采用同一组标高校准。
function calibratedSceneHeight(height) {
  const z=height/1.4, from=ARCHITECTURE.elevationFrom, to=ARCHITECTURE.elevationTo;
  let i=0;
  while(i<from.length-2 && z>from[i+1]) i++;
  return (to[i]+(z-from[i])/(from[i+1]-from[i])*(to[i+1]-to[i]))*1.4;
}
Object.values(EXPERIENCE.parts).forEach(part=>{part.point[1]=calibratedSceneHeight(part.point[1]);});

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

// Visitor preferences and the reading alternative are available before WebGL starts.
const visitorExperience = (() => {
  const $ = id => document.getElementById(id);
  const key = 'guanque-visitor-v1';
  const preferences = readPreference(key, {});
  const systemMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const dialog = $('visitor-guide');
  const priorJourney = readPreference('guanque-exploration-v2', {});
  const returning = ['scenes', 'parts', 'poems', 'stamps'].some(name => Array.isArray(priorJourney[name]) && priorJourney[name].length);
  let hooks = {}, ready = false, compact = false, wasCovered = false;
  const reduced = () => typeof preferences.reducedMotion === 'boolean' ? preferences.reducedMotion : systemMotion.matches;
  const covered = () => dialog.open || location.hash === '#reading-guide';
  const remember = () => { preferences.introduced = true; savePreference(key, preferences); };

  function updateMotion() {
    document.documentElement.classList.toggle('reduced-motion', reduced());
    $('visitor-reduced-motion').checked = reduced();
    $('visitor-system-motion').hidden = typeof preferences.reducedMotion !== 'boolean';
    hooks.onMotionChange?.(reduced());
  }
  function updateCover() {
    document.body.classList.toggle('reading-mode', location.hash === '#reading-guide');
    document.body.classList.toggle('visitor-guide-open', dialog.open);
    const next = covered();
    if (next !== wasCovered) { wasCovered = next; hooks.onCoverChange?.(next); }
    if (location.hash === '#reading-guide') $('reading-guide').focus({ preventScroll: true });
  }
  function setCompact(value) {
    compact = !!value;
    document.body.classList.toggle('sidebar-compact', compact);
    $('panel-toggle').textContent = compact ? '展开面板' : '收起面板';
    $('panel-toggle').setAttribute('aria-expanded', String(!compact));
    hooks.onPanelChange?.();
  }
  function show(first = false) {
    if (!ready || dialog.open) return;
    $('visitor-eyebrow').textContent = first ? '初次登临 · 山西永济' : '鹳雀凌云 · 游览帮助';
    $('visitor-title').textContent = first ? '从这一楼，走进山河' : '按自己的节奏游览';
    dialog.showModal(); updateCover();
  }
  function close() { remember(); dialog.close(); }
  $('visitor-help').addEventListener('click', () => show());
  $('close-visitor-guide').addEventListener('click', close);
  dialog.addEventListener('close', () => { remember(); updateCover(); });
  $('visitor-tour').addEventListener('click', () => {
    close();
    if (window.innerWidth <= 720) setCompact(true);
    hooks.onTour?.();
  });
  $('visitor-explore').addEventListener('click', () => {
    close();
    if (window.innerWidth <= 720) setCompact(true);
    hooks.onHome?.();
  });
  $('home-view').addEventListener('click', () => hooks.onHome?.());
  $('panel-toggle').addEventListener('click', () => setCompact(!compact));
  document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => setCompact(false)));
  $('visitor-reduced-motion').addEventListener('change', event => {
    preferences.reducedMotion = event.target.checked;
    savePreference(key, preferences); updateMotion();
  });
  $('visitor-system-motion').addEventListener('click', () => {
    delete preferences.reducedMotion;
    savePreference(key, preferences); updateMotion();
  });
  systemMotion.addEventListener('change', updateMotion);
  document.querySelectorAll('a[href="#reading-guide"]').forEach(link => link.addEventListener('click', () => {
    if (dialog.open) close();
  }));
  window.addEventListener('hashchange', updateCover);
  updateMotion(); updateCover();
  return {
    get reducedMotion() { return reduced(); },
    get covered() { return covered(); },
    expandPanel() { setCompact(false); },
    collapsePanel() { setCompact(true); },
    connect(callbacks) {
      hooks = callbacks;
      updateMotion();
      if (covered()) hooks.onCoverChange?.(true);
    },
    ready() {
      ready = true;
      for (const id of ['home-view', 'visitor-help', 'panel-toggle']) $(id).disabled = false;
      if (!preferences.introduced && !returning && !covered()) show(true);
    }
  };
})();

// Fit all corners inside the unobscured part of the canvas, including narrow phones.
function fitVisitorBounds(THREE, bounds, direction, camera, rect, padding = .91, boxes = [bounds]) {
  const target = bounds.getCenter(new THREE.Vector3());
  const outward = direction.clone().normalize();
  const right = new THREE.Vector3().crossVectors(camera.up, outward).normalize();
  const up = new THREE.Vector3().crossVectors(outward, right).normalize();
  const tangent = Math.tan(THREE.MathUtils.degToRad(camera.getEffectiveFOV()) / 2);
  const fitX = Math.max(.001, tangent * camera.aspect * (rect.right - rect.left) / rect.width * padding);
  const fitY = Math.max(.001, tangent * (rect.bottom - rect.top) / rect.height * padding);
  let distance = 40;
  const corner = new THREE.Vector3();
  for (const box of boxes) for (const x of [box.min.x, box.max.x]) for (const y of [box.min.y, box.max.y]) for (const z of [box.min.z, box.max.z]) {
    corner.set(x, y, z).sub(target);
    distance = Math.max(distance, corner.dot(outward) + Math.abs(corner.dot(right)) / fitX,
      corner.dot(outward) + Math.abs(corner.dot(up)) / fitY);
  }
  return { position: target.clone().addScaledVector(outward, distance), target, distance };
}

// Audio starts only after a user gesture. One clock and request token prevent stale narration.
class Soundscape {
  constructor(assetURL, notify) {
    this.assetURL = assetURL;
    this.notify = notify;
    const saved = readPreference('guanque-sound-v2', {});
    this.musicTrack = saved.track === 'original' ? 'original' : 'fuguang';
    this.fuguangVolume = Number.isFinite(saved.fuguang) ? Math.max(0, Math.min(1, saved.fuguang)) : .2;
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
    this.backgrounded = document.hidden;
    this.failedNotice = false;
    this.musicPaused = false;
    this.musicPending = false;
    this.musicError = false;
    this.musicToken = 0;
    this.volumeUnsupported = false;
    this.button = document.getElementById('sound-toggle');
    this.label = document.getElementById('sound-label');
    this.trackSelect = document.getElementById('music-track');
    this.externalPlayer = document.getElementById('external-music-player');
    this.externalPlay = document.getElementById('external-music-play');
    this.externalReload = document.getElementById('external-music-reload');
    this.musicStatus = document.getElementById('fuguang-status');
    this.musicSeek = document.getElementById('fuguang-seek');
    this.fuguangSlider = document.getElementById('fuguang-volume');
    const music = document.getElementById('music-volume');
    const ambient = document.getElementById('ambient-volume');
    const narration = document.getElementById('narration-enabled');
    music.value = Math.round(this.musicVolume * 100);
    ambient.value = Math.round(this.ambientVolume * 100);
    narration.checked = this.narrationEnabled;
    this.fuguangSlider.value = Math.round(this.fuguangVolume * 100);
    const updateSliders = () => {
      document.getElementById('fuguang-volume-value').textContent = this.volumeUnsupported ? '设备音量' : this.fuguangSlider.value + '%';
      document.getElementById('music-volume-value').textContent = music.value + '%';
      document.getElementById('ambient-volume-value').textContent = ambient.value + '%';
    };
    updateSliders();
    music.addEventListener('input', () => { this.musicVolume = Number(music.value) / 100; updateSliders(); this.persist(); });
    ambient.addEventListener('input', () => { this.ambientVolume = Number(ambient.value) / 100; updateSliders(); this.persist(); });
    narration.addEventListener('change', () => { this.narrationEnabled = narration.checked; if (!this.narrationEnabled) this.stopVoice(); this.persist(); });
    this.fuguangSlider.addEventListener('input', () => {
      this.fuguangVolume = Number(this.fuguangSlider.value) / 100;
      this.applyFuguangVolume(); updateSliders(); this.persist();
    });
    this.trackSelect.addEventListener('change', () => this.setMusicTrack(this.trackSelect.value));
    this.externalPlay.addEventListener('click', () => {
      if (this.wantsFuguang() && (!this.externalPlayer.paused || this.musicPending)) {
        this.musicPaused = true;
        this.syncExternalPlayer(); this.refresh();
      } else {
        this.musicPaused = false;
        this.setEnabled(true, true);
      }
    });
    this.externalReload.addEventListener('click', () => {
      this.musicToken++;
      this.musicPending = false;
      this.musicError = false;
      this.musicPaused = false;
      this.externalPlayer.pause();
      this.externalPlayer.removeAttribute('src');
      this.externalPlayer.load();
      this.setEnabled(true, true);
    });
    this.externalPlayer.addEventListener('playing', () => {
      if (!this.wantsFuguang()) { this.externalPlayer.pause(); return; }
      this.musicError = false;
      this.musicStatus.textContent = '正在播放 · 朗诵时音乐自动降低';
      this.refresh();
    });
    this.externalPlayer.addEventListener('pause', () => {
      if (!this.musicError) this.musicStatus.textContent = this.enabled ? '已暂停' : '声音已关闭';
      this.refresh();
    });
    this.externalPlayer.addEventListener('waiting', () => {
      if (this.wantsFuguang()) this.musicStatus.textContent = '正在缓冲音乐…';
    });
    this.externalPlayer.addEventListener('error', () => this.failMusic());
    this.externalPlayer.addEventListener('loadedmetadata', () => this.refreshMusicTime());
    this.externalPlayer.addEventListener('timeupdate', () => this.refreshMusicTime());
    this.musicSeek.addEventListener('input', () => {
      const duration = this.externalPlayer.duration;
      if (Number.isFinite(duration) && duration > 0) {
        this.externalPlayer.currentTime = Number(this.musicSeek.value) / 100 * duration;
        this.refreshMusicTime();
      }
    });
    this.button.addEventListener('click', () => this.setEnabled(!this.enabled, true));
    this.applyFuguangVolume();
    this.refresh();
  }
  persist() { savePreference('guanque-sound-v2', { track: this.musicTrack, fuguang: this.fuguangVolume, music: this.musicVolume, ambient: this.ambientVolume, narration: this.narrationEnabled, muted: this.userMuted }); }
  refresh() {
    this.button.setAttribute('aria-pressed', String(this.enabled));
    this.label.textContent = this.enabled ? '声景已开启' : '开启声音';
    this.trackSelect.value = this.musicTrack;
    const external = this.musicTrack === 'fuguang';
    document.getElementById('external-music-panel').hidden = !external;
    document.getElementById('original-music-controls').hidden = external;
    const playing = this.wantsFuguang() && (!this.externalPlayer.paused || this.musicPending);
    this.externalPlay.textContent = playing ? '暂停《浮光》' : '播放《浮光》';
    this.externalReload.hidden = !this.musicError;
  }
  setMusicTrack(track) {
    if (!['fuguang', 'original'].includes(track) || track === this.musicTrack) return;
    this.musicTrack = track;
    // Clear the original track immediately before the external player starts.
    if (track === 'fuguang') {
      for (const key of ['day', 'dusk']) {
        const loop = this.loops.get(key);
        if (loop) this.setGain(loop, 0, 0);
      }
    }
    this.syncExternalPlayer();
    if (this.enabled) this.prepareLoops();
    this.persist();
    this.refresh();
  }
  wantsFuguang() { return this.enabled && !this.backgrounded && this.musicTrack === 'fuguang' && !this.musicPaused; }
  syncExternalPlayer() {
    if (!this.wantsFuguang()) {
      this.musicToken++;
      this.musicPending = false;
      this.externalPlayer.pause();
      return;
    }
    this.applyFuguangVolume();
    if (!this.externalPlayer.hasAttribute('src')) {
      // Official public stream: HTMLAudioElement exposes volume without controlling a cross-origin iframe.
      this.externalPlayer.src = 'https://music.163.com/song/media/outer/url?id=1394601255.mp3';
    }
    if (!this.externalPlayer.paused || this.musicPending) return;
    const token = ++this.musicToken;
    this.musicPending = true;
    this.musicStatus.textContent = '正在载入《浮光》…';
    this.externalPlayer.play().then(() => {
      if (token !== this.musicToken) return;
      this.musicPending = false;
      this.refresh();
    }).catch(error => {
      if (token !== this.musicToken || !this.wantsFuguang()) return;
      this.musicPending = false;
      if (error.name === 'NotAllowedError') {
        this.musicPaused = true;
        this.musicStatus.textContent = '请点击播放按钮开始音乐。';
        this.showSettings(); this.refresh();
      } else if (error.name !== 'AbortError') this.failMusic();
    });
  }
  failMusic() {
    this.musicToken++;
    this.musicPending = false;
    this.musicError = true;
    this.musicPaused = true;
    this.externalPlayer.pause();
    this.musicStatus.textContent = '音乐暂未载入，可重新载入或在网易云打开。';
    if (this.enabled && !this.backgrounded && this.musicTrack === 'fuguang') this.showSettings();
    this.refresh();
  }
  applyFuguangVolume(exploring = false) {
    if (this.volumeUnsupported) return;
    const duck = this.voice && !this.voicePaused ? .24 : 1;
    const target = this.fuguangVolume * duck * (exploring ? .82 : 1);
    try {
      if (Math.abs(this.externalPlayer.volume - target) > .0005) this.externalPlayer.volume = target;
      this.volumeUnsupported = Math.abs(this.externalPlayer.volume - target) > .01;
    } catch { this.volumeUnsupported = true; }
    if (this.volumeUnsupported) {
      this.fuguangSlider.disabled = true;
      document.getElementById('fuguang-volume-value').textContent = '设备音量';
      document.getElementById('fuguang-device-volume').hidden = false;
    }
  }
  refreshMusicTime() {
    const format = seconds => Number.isFinite(seconds) ? Math.floor(seconds / 60).toString().padStart(2, '0') + ':' + Math.floor(seconds % 60).toString().padStart(2, '0') : '--:--';
    const current = this.externalPlayer.currentTime;
    const duration = this.externalPlayer.duration;
    document.getElementById('fuguang-time').textContent = format(current) + ' / ' + format(duration);
    const seekable = Number.isFinite(duration) && duration > 0;
    this.musicSeek.disabled = !seekable;
    this.musicSeek.value = seekable ? current / duration * 100 : 0;
    this.musicSeek.setAttribute('aria-valuetext', format(current) + '，共 ' + format(duration));
  }
  showSettings() {
    document.getElementById('sound-settings').hidden = false;
    document.getElementById('sound-settings-toggle').setAttribute('aria-expanded', 'true');
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
    if (this.enabled && explicit && this.musicTrack === 'fuguang') this.showSettings();
    this.syncExternalPlayer();
    this.refresh();
  }
  failAudio() {
    this.enabled = false;
    this.syncExternalPlayer();
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
    const keys = this.musicTrack === 'original' ? ['day', 'dusk', 'river', 'wind'] : ['river', 'wind'];
    for (const key of keys) {
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
    if (!loop.gain) return;
    if (time === 0) {
      loop.target = value;
      loop.gain.gain.cancelScheduledValues(this.context.currentTime);
      loop.gain.gain.setValueAtTime(value, this.context.currentTime);
      return;
    }
    if (Math.abs(loop.target - value) < .0005) return;
    loop.target = value;
    loop.gain.gain.setTargetAtTime(value, this.context.currentTime, time);
  }
  tick(dusk, nearRiver, exploring) {
    this.applyFuguangVolume(exploring);
    if (!this.context) return;
    const on = this.enabled && !this.backgrounded ? 1 : 0;
    const duck = this.voice && !this.voicePaused ? .24 : 1;
    const music = this.musicTrack === 'original' ? on * this.musicVolume * .92 * duck * (exploring ? .82 : 1) : 0;
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
    this.syncExternalPlayer();
    this.refresh();
    if (!this.context) return;
    if (hidden) this.context.suspend().catch(() => {});
    else if (this.enabled) this.context.resume().then(() => {
      if (this.pendingVoice?.buffer && !this.voicePaused && !this.voice) this.startVoice(this.pendingVoice);
    }).catch(() => {});
  }
}

// Hall and gallery follow the cited photographs, with estimated dimensions.
// Murals are original diagrammatic drawings, not scans of third-party artwork.
// These footprints drive both furnishings and walking collision, in metres.
const FIRST_FLOOR_EXHIBITS = [
  { id:'pufan', x:-7.12, z:0, w:11.35, h:3.35, d:.38, foot:1.42, yaw:Math.PI/2, base:.72, type:'panorama', title:'中都蒲坂繁盛图' },
  { id:'defence', x:-4.1, z:-9.8, w:5.6, h:4.25, d:.24, foot:.46, yaw:0, base:.46, type:'relief', title:'筑楼戍边' },
  { id:'poets', x:4.1, z:-9.8, w:5.6, h:4.25, d:.24, foot:.46, yaw:0, base:.46, type:'relief', title:'旗亭画壁' },
  { id:'couplet', x:7.58, z:-3.5, w:3.0, h:4.7, d:.16, foot:.28, yaw:-Math.PI/2, base:.42, type:'couplet', title:'一楼楹联' },
  { id:'hall-guide', x:-6.0, z:8.8, w:1.05, h:.98, d:.20, foot:.58, yaw:.25, base:.10, type:'guide', title:'走进首层大厅' },
  { id:'poem-guide', x:6.0, z:8.8, w:1.05, h:.98, d:.20, foot:.58, yaw:-.25, base:.10, type:'guide', title:'登鹳雀楼' },
  { id:'bench-west', x:-6.2, z:-7.95, w:2.15, h:.46, d:.58, foot:.58, yaw:0, bench:true },
  { id:'bench-east', x:6.2, z:7.95, w:2.15, h:.46, d:.58, foot:.58, yaw:0, bench:true }
];

function firstFloorExhibitsCanStand(x,z,radius=.28) {
  return FIRST_FLOOR_EXHIBITS.every(item=>{
    const dx=x-item.x,dz=z-item.z,c=Math.cos(item.yaw),s=Math.sin(item.yaw);
    const lx=c*dx-s*dz,lz=s*dx+c*dz;
    return Math.hypot(Math.max(0,Math.abs(lx)-(item.w+.12)/2),Math.max(0,Math.abs(lz)-item.foot/2))>=radius;
  });
}

function hallCanvasTexture(THREE,width,height,draw,repeat=false) {
  const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;
  draw(canvas.getContext('2d'),width,height);
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=4;
  if(repeat)texture.wrapS=texture.wrapT=THREE.RepeatWrapping;
  return texture;
}

let firstHallPalette;
function getFirstHallPalette(THREE) {
  if(firstHallPalette)return firstHallPalette;
  const paving=hallCanvasTexture(THREE,768,768,(ctx,w,h)=>{
    ctx.fillStyle='#898c88';ctx.fillRect(0,0,w,h);
    for(let row=0;row<4;row++)for(let col=0;col<4;col++){
      const x=col*192+1.5,y=row*192+1.5,tone=179+((row*7+col*11)%13);
      const gradient=ctx.createLinearGradient(x,y,x+190,y+190);
      gradient.addColorStop(0,'rgb('+[tone+9,tone+10,tone+5].join(',')+')');
      gradient.addColorStop(1,'rgb('+[tone,tone+2,tone-2].join(',')+')');
      ctx.fillStyle=gradient;ctx.fillRect(x,y,189,189);
      ctx.strokeStyle='#d1d1c7';ctx.lineWidth=1;ctx.strokeRect(x+1,y+1,187,187);
      ctx.strokeStyle='rgba(95,103,98,.045)';ctx.lineWidth=1.4;
      for(let k=0;k<9;k++){
        ctx.beginPath();ctx.moveTo(x+7,y+10+k*19);
        ctx.bezierCurveTo(x+56,y+k*19,x+122,y+22+k*19,x+180,y+12+k*19);ctx.stroke();
      }
    }
  },true);
  const painted=hallCanvasTexture(THREE,1024,256,(ctx,w,h)=>{
    ctx.fillStyle='#6d292d';ctx.fillRect(0,0,w,h);
    for(const [y,height,color] of [[0,14,'#eee6ce'],[14,16,'#2d6b78'],[30,7,'#d3bc7d'],[219,7,'#d3bc7d'],[226,16,'#2d6b78'],[242,14,'#eee6ce']]){
      ctx.fillStyle=color;ctx.fillRect(0,y,w,height);
    }
    for(const x of [256,768]){
      ctx.beginPath();ctx.moveTo(x-209,128);ctx.lineTo(x-147,58);ctx.lineTo(x+147,58);ctx.lineTo(x+209,128);ctx.lineTo(x+147,198);ctx.lineTo(x-147,198);ctx.closePath();
      ctx.fillStyle='#277783';ctx.fill();ctx.lineWidth=7;ctx.strokeStyle='#eee5c9';ctx.stroke();
      ctx.strokeStyle='#284a82';ctx.lineWidth=4;ctx.stroke();
      for(let k=0;k<8;k++){
        ctx.save();ctx.translate(x,128);ctx.rotate(k*Math.PI/4);
        ctx.beginPath();ctx.ellipse(0,36,14,29,0,0,Math.PI*2);ctx.fillStyle=k%2?'#688b73':'#afbf92';ctx.fill();ctx.strokeStyle='#ebdab1';ctx.lineWidth=2;ctx.stroke();ctx.restore();
      }
      ctx.beginPath();ctx.arc(x,128,18,0,Math.PI*2);ctx.fillStyle='#cfac68';ctx.fill();
    }
  },true);
  const coffer=hallCanvasTexture(THREE,512,512,(ctx,w,h)=>{
    ctx.fillStyle='#285d64';ctx.fillRect(0,0,w,h);
    for(const [inset,color,line] of [[13,'#e4d4a8',9],[29,'#904138',14],[45,'#e5dcb8',4],[72,'#527e75',22]]){
      ctx.strokeStyle=color;ctx.lineWidth=line;ctx.strokeRect(inset,inset,w-inset*2,h-inset*2);
    }
    for(let k=0;k<12;k++){
      ctx.save();ctx.translate(256,256);ctx.rotate(k*Math.PI/6);
      ctx.beginPath();ctx.ellipse(0,75,26,75,0,0,Math.PI*2);ctx.fillStyle=k%2?'#afbf91':'#6f9b8a';ctx.fill();ctx.lineWidth=4;ctx.strokeStyle='#e0cf9c';ctx.stroke();ctx.restore();
    }
    ctx.beginPath();ctx.arc(256,256,42,0,Math.PI*2);ctx.fillStyle='#923c36';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle='#c9b078';ctx.stroke();
  },true);
  firstHallPalette={paving,painted,coffer};return firstHallPalette;
}

function prepareFirstFloorMaterial(THREE,object,shell) {
  const {storey,kind}=object.userData;
  const ceiling=storey===5&&kind.startsWith('floor-');
  if(![3,4].includes(storey)&&!ceiling)return null;
  const palette=getFirstHallPalette(THREE);
  const colors={column:'#702b2d',beam:'#ffffff',wall:'#d4d1c5',rail:'#67564b','gallery-rail':'#c8d8cd',shaft:'#777b75',stair:'#b7b8af'};
  const material=new THREE.MeshStandardMaterial({color:ceiling?'#d8dcc8':colors[kind]||'#ffffff',roughness:kind==='column'?.31:.72});
  if(kind.startsWith('floor-')){material.map=ceiling?palette.coffer:palette.paving;material.roughness=ceiling?.77:.36;}
  if(kind==='beam')material.map=palette.painted;
  material.side=THREE.FrontSide;
  const geometry=object.geometry,positions=geometry.attributes.position,normal=geometry.attributes.normal;
  const uv=new Float32Array(positions.count*2),centers=INTERIOR.storeys[storey].columns,level=INTERIOR.storeys[storey];
  for(let i=0;i<positions.count;i++){
    const x=positions.getX(i),y=positions.getY(i),z=positions.getZ(i);
    if(kind==='column'&&Math.abs(normal.getY(i))<.1){
      let nearest=centers[0],distance=Infinity;
      for(const center of centers){const d=(x-center[0])**2+(z-center[1])**2;if(d<distance){nearest=center;distance=d;}}
      const nx=x-nearest[0],nz=z-nearest[1],length=Math.hypot(nx,nz);
      normal.setXYZ(i,nx/length,0,nz/length);uv[i*2]=Math.atan2(nz,nx)/(Math.PI*2)+.5;uv[i*2+1]=y/2.2;
    }else{
      const ax=Math.abs(normal.getX(i)),ay=Math.abs(normal.getY(i)),az=Math.abs(normal.getZ(i));
      if(kind==='beam'){
        uv[i*2]=(ax>az?z:x)/4;uv[i*2+1]=(y-(level.z+level.height-.89))/.60;
      }else{
        const tile=ceiling?2.1:3.6;
        uv[i*2]=(ax>ay&&ax>az?z:x)/tile;uv[i*2+1]=(ay>=ax&&ay>=az?z:y)/tile;
      }
    }
  }
  geometry.setAttribute('uv',new THREE.BufferAttribute(uv,2));normal.needsUpdate=true;
  return material;
}

function createFirstFloorGallery({THREE,scene}) {
  let root=null;
  const scale=1.4;
  function build(){
    root=new THREE.Group();root.name='首层通高大厅与二层回廊 · 实景参考';
    const palette=getFirstHallPalette(THREE),hall=INTERIOR.storeys[3],gallery=INTERIOR.storeys[4];
    const galleryY=gallery.z-hall.z,ceilingY=INTERIOR.storeys[5].z-hall.z-.28;
    const materials={
      wood:new THREE.MeshStandardMaterial({color:'#6b282c',roughness:.42}),
      teal:new THREE.MeshStandardMaterial({color:'#458b88',roughness:.68}),
      blue:new THREE.MeshStandardMaterial({color:'#315789',roughness:.7}),
      ivory:new THREE.MeshStandardMaterial({color:'#e4d9b9',roughness:.68}),
      bronze:new THREE.MeshStandardMaterial({color:'#ad9466',roughness:.52,metalness:.35}),
      stone:new THREE.MeshStandardMaterial({color:'#858881',roughness:.7}),
      trim:new THREE.MeshStandardMaterial({color:'#353e3b',roughness:.72}),
      light:new THREE.MeshBasicMaterial({color:'#ffe9bf',toneMapped:false}),
      painted:new THREE.MeshStandardMaterial({map:palette.painted,roughness:.74}),
      coffer:new THREE.MeshStandardMaterial({map:palette.coffer,roughness:.8})
    };
    const unitBox=new THREE.BoxGeometry(1,1,1);
    function box(parent,w,h,d,x,y,z,material){
      const mesh=new THREE.Mesh(unitBox,material);mesh.scale.set(w,h,d);mesh.position.set(x,y,z);parent.add(mesh);return mesh;
    }
    function face(parent,w,h,x,y,z,texture){
      const material=new THREE.MeshStandardMaterial({map:texture,roughness:.78,emissive:'#ffffff',emissiveMap:texture,emissiveIntensity:.11});
      const mesh=new THREE.Mesh(new THREE.PlaneGeometry(w,h),material);mesh.position.set(x,y,z);parent.add(mesh);return mesh;
    }
    function text(ctx,value,x,y,size,color='#ded4ad',align='left'){
      ctx.textAlign=align;ctx.fillStyle=color;ctx.font=size+'px "Songti SC","STSong","Noto Serif SC",serif';ctx.fillText(value,x,y);
    }
    function titleTexture(title,subtitle){return hallCanvasTexture(THREE,1024,160,(ctx,w,h)=>{
      ctx.fillStyle='#3b4f50';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#c9af78';ctx.lineWidth=6;ctx.strokeRect(9,9,w-18,h-18);
      text(ctx,title,w/2,80,57,'#ead8a1','center');text(ctx,subtitle,w/2,128,24,'#c0c9b8','center');
    });}
    function muralTexture(item){return hallCanvasTexture(THREE,item.type==='panorama'?2048:1024,768,(ctx,w,h)=>{
      const panorama=item.type==='panorama';
      const wash=ctx.createLinearGradient(0,0,0,h);wash.addColorStop(0,panorama?'#9cbaaa':'#d0b47a');wash.addColorStop(1,panorama?'#807952':'#947448');ctx.fillStyle=wash;ctx.fillRect(0,0,w,h);
      for(let layer=0;layer<4;layer++){
        ctx.beginPath();ctx.moveTo(0,h);
        for(let x=0;x<=w;x+=14)ctx.lineTo(x,h*.18+layer*32+Math.sin(x/137+layer)*42+Math.sin(x/57+layer)*14);
        ctx.lineTo(w,h);ctx.fillStyle=panorama?['#6d9386','#799a86','#829277','#979578'][layer]:['#ac9b69','#b4a074','#a99461','#b69d68'][layer];ctx.fill();
      }
      function house(x,y,size,tower=false){
        const bh=size*(tower?1.12:.43),bw=size;
        ctx.fillStyle=panorama?'#bfad83':'#b99f69';ctx.fillRect(x-bw/2,y-bh,bw,bh);
        ctx.fillStyle=panorama?'#e2cf9b':'#dcc38b';ctx.fillRect(x-bw/2,y-bh,6,bh);
        ctx.fillStyle=panorama?'#69634d':'#78653f';
        for(let k=0;k<3;k++)ctx.fillRect(x-bw*.32+k*bw*.27,y-bh*.68,bw*.13,bh*.68);
        ctx.beginPath();ctx.moveTo(x-bw*.68,y-bh+8);ctx.lineTo(x-bw*.34,y-bh-size*.30);ctx.lineTo(x+bw*.34,y-bh-size*.30);ctx.lineTo(x+bw*.68,y-bh+8);ctx.closePath();ctx.fill();
        ctx.strokeStyle=panorama?'#c5bc8d':'#e0c18b';ctx.lineWidth=3;ctx.stroke();
        if(tower){ctx.fillStyle='#b69967';ctx.fillRect(x-bw*.35,y-bh-size*.33,bw*.7,size*.21);}
      }
      if(panorama){
        ctx.fillStyle='#b8b594';ctx.beginPath();ctx.moveTo(0,h*.73);ctx.bezierCurveTo(w*.34,h*.55,w*.42,h*.9,w,h*.64);ctx.lineTo(w,h);ctx.lineTo(0,h);ctx.fill();
        for(let row=0;row<5;row++)for(let col=0;col<22;col++)house(35+col*(w/22)+Math.sin(row*7+col)*14,295+row*66+Math.cos(col*1.4)*17,29+row*7,(row+col)%9===0);
        ctx.strokeStyle='#665d42';ctx.lineWidth=20;ctx.beginPath();ctx.moveTo(w*.05,h*.69);ctx.lineTo(w*.19,h*.51);ctx.lineTo(w*.70,h*.57);ctx.lineTo(w*.91,h*.80);ctx.stroke();
        for(const [x,y] of [[.19,.51],[.49,.55],[.70,.57],[.89,.77]])house(w*x,h*y,86,true);
        ctx.strokeStyle='#e7d6a5';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(w*.09,h*.88);ctx.bezierCurveTo(w*.38,h*.61,w*.61,h*.88,w*.97,h*.75);ctx.stroke();
      }else if(item.id==='defence'){
        for(let k=0;k<8;k++)house(60+k*132,438+(k%2)*29,106,k%3===0);
        ctx.fillStyle='#a98c55';ctx.fillRect(0,463,w,105);ctx.strokeStyle='#d9be84';ctx.lineWidth=3;
        for(let y=466;y<568;y+=23){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
        for(let k=0;k<9;k++){ctx.fillStyle='#79633e';ctx.beginPath();ctx.arc(120+k*96,601,13,0,Math.PI*2);ctx.fill();ctx.fillRect(110+k*96,618,20,69);ctx.fillRect(133+k*96,568,4,116);}
      }else{
        house(w*.70,430,275,true);
        for(let k=0;k<4;k++){
          const x=160+k*183,y=430+Math.sin(k)*57;
          ctx.fillStyle='#796445';ctx.beginPath();ctx.arc(x,y,26,0,Math.PI*2);ctx.fill();
          ctx.beginPath();ctx.moveTo(x-28,y+27);ctx.lineTo(x-67,y+184);ctx.lineTo(x+75,y+184);ctx.lineTo(x+31,y+28);ctx.fill();
          ctx.strokeStyle='#dec18a';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(x-15,y+40);ctx.lineTo(x+8,y+125);ctx.lineTo(x-19,y+173);ctx.stroke();
        }
      }
      ctx.fillStyle='rgba(42,43,32,.64)';ctx.fillRect(0,h-47,w,47);
      text(ctx,item.title,w/2,h-16,25,'#eee2bf','center');text(ctx,'图像示意',w-20,35,20,'#364a3c','right');
    });}
    function exhibit(item){
      const group=new THREE.Group();group.position.set(item.x,0,item.z);group.rotation.y=item.yaw;root.add(group);
      if(item.bench){
        box(group,item.w,.12,item.d,0,.40,0,materials.wood);
        for(const x of [-item.w*.34,item.w*.34])box(group,.22,.34,item.d*.76,x,.17,0,materials.stone);
        return;
      }
      const base=item.base||0;
      if(item.type==='guide'){
        box(group,.65,.07,item.foot,0,.035,0,materials.stone);box(group,.12,.84,.12,0,.49,0,materials.bronze);
        const texture=hallCanvasTexture(THREE,768,672,(ctx,w,h)=>{
          ctx.fillStyle='#233f39';ctx.fillRect(0,0,w,h);text(ctx,item.title,56,111,60);
          const lines=item.id==='hall-guide'?['抬头看彩绘梁枋','沿壁画走进古蒲州','上到回廊，俯瞰大厅']:['白日依山尽','黄河入海流','欲穷千里目','更上一层楼'];
          lines.forEach((line,k)=>text(ctx,line,56,243+k*86,39,'#e8e2cd'));text(ctx,'数字导览',56,626,25,'#aabca4');
        });
        box(group,item.w,.72,item.d,0,.87,0,materials.wood);face(group,item.w-.07,.66,0,.87,item.d/2+.012,texture);return;
      }
      box(group,item.w+.12,base+.06,item.foot,0,(base+.06)/2,0,materials.wood);
      box(group,item.w+.12,item.h+.12,item.d,0,base+item.h/2,0,materials.wood);
      for(const x of [-item.w/2,item.w/2])box(group,.045,item.h,.018,x,base+item.h/2,item.d/2+.01,materials.bronze);
      for(const y of [base,base+item.h])box(group,item.w,.045,.018,0,y,item.d/2+.01,materials.bronze);
      let texture;
      if(item.type==='couplet')texture=hallCanvasTexture(THREE,768,1200,(ctx,w,h)=>{
        ctx.fillStyle='#dfdbc9';ctx.fillRect(0,0,w,h);text(ctx,'一楼楹联',w/2,100,54,'#564c36','center');
        const lines=['襟星月而披風雨控秦晉而淩覆載華夏立雄威','借詩文以傲古今銘盛衰以鑒春秋山川生壯慨'];
        lines.forEach((line,k)=>[...line].forEach((char,n)=>text(ctx,char,k?230:510,192+n*41,37,'#3c3c32','center')));
        text(ctx,'据实景楹联节录',w/2,h-35,24,'#6a694e','center');
      });else texture=muralTexture(item);
      face(group,item.w-.07,item.h-.08,0,base+item.h/2,item.d/2+.019,texture);
      if(item.type==='panorama'){
        const roof=box(group,item.w+.36,.10,.85,0,base+item.h+.24,0,materials.trim);roof.rotation.x=.30;
        for(let x=-item.w/2;x<=item.w/2;x+=.18){const rib=box(group,.035,.036,.86,x,base+item.h+.30,0,materials.stone);rib.rotation.x=.30;}
        face(group,2.4,.38,0,base+item.h+.52,.04,titleTexture(item.title,'首层展项 · 实景参考'));
      }else if(item.type==='relief')face(group,2.5,.42,0,base+item.h+.38,.03,titleTexture(item.title,'首层展项 · 图像示意'));
      box(group,item.w*.82,.045,.08,0,base+item.h+.09,.27,materials.light);
    }
    FIRST_FLOOR_EXHIBITS.forEach(exhibit);

    // Approximate stepped bracket profiles and painted collars frame the hall.
    const profile=new THREE.Shape();profile.moveTo(-1.0,.22);profile.lineTo(1.0,.22);
    profile.lineTo(1.0,.02);profile.quadraticCurveTo(.77,-.02,.64,-.29);
    profile.lineTo(.29,-.40);profile.lineTo(-.29,-.40);profile.lineTo(-.64,-.29);
    profile.quadraticCurveTo(-.77,-.02,-1.0,.02);profile.closePath();
    const armGeometry=new THREE.ExtrudeGeometry(profile,{depth:.22,bevelEnabled:false,curveSegments:6});
    for(const index of [3,4]){
      const level=INTERIOR.storeys[index],offset=level.z-hall.z,diameter=index===3?1.2:1.1;
      for(const [x,z] of level.columns){
        if(Math.abs(x)>8.05)continue;
        const baseMesh=new THREE.Mesh(new THREE.CylinderGeometry(diameter*.58,diameter*.63,.16,24),materials.stone);baseMesh.position.set(x,offset+.08,z);root.add(baseMesh);
        const capital=offset+level.height-1.13;
        for(const [delta,color] of [[-.48,materials.ivory],[-.38,materials.blue],[-.26,materials.teal]]){
          const collar=new THREE.Mesh(new THREE.CylinderGeometry(diameter*.507,diameter*.507,.085,24),color);collar.position.set(x,capital+delta,z);root.add(collar);
        }
        for(let direction=0;direction<2;direction++)for(let step=0;step<3;step++){
          const group=new THREE.Group();group.position.set(x,capital+step*.17,z);group.rotation.y=direction*Math.PI/2;root.add(group);
          const arm=new THREE.Mesh(armGeometry,[materials.ivory,materials.blue,materials.teal][step]);arm.scale.set(1-step*.13,.74,1);arm.position.z=-.11;group.add(arm);
        }
        box(root,1.40,.18,1.40,x,capital+.43,z,materials.wood);
      }
    }
    // Recessed panels sit below the ceiling, never on a walkable floor.
    for(let x=-3.75;x<=3.75;x+=2.5)for(let z=-4.725;z<=4.726;z+=3.15){
      const panel=new THREE.Mesh(new THREE.PlaneGeometry(2.30,2.95),materials.coffer);panel.rotation.x=Math.PI/2;panel.position.set(x,ceilingY-.07,z);root.add(panel);
    }
    for(const x of [-5,-2.5,0,2.5,5])box(root,.12,.24,12.65,x,ceilingY-.15,0,materials.teal);
    for(const z of [-6.3,-3.15,0,3.15,6.3])box(root,10.05,.24,.12,0,ceilingY-.15,z,materials.teal);
    for(const [x,z,w,yaw] of [[0,6.45,10.0,Math.PI],[0,-6.45,10.0,0],[-5.16,0,12.55,Math.PI/2],[5.16,0,12.55,-Math.PI/2]]){
      const fascia=new THREE.Mesh(new THREE.PlaneGeometry(w,.50),materials.painted);fascia.position.set(x,galleryY-.59,z);fascia.rotation.y=yaw;root.add(fascia);
    }
    for(const [x,y,z,power] of [[-3.6,5.3,1,55],[3.6,5.3,-2,55],[0,11.7,0,65]]){
      const light=new THREE.PointLight('#ffefd3',power,27,2);light.position.set(x,y,z);root.add(light);
    }
    // Merge static pieces by material to keep the detailed hall inexpensive.
    root.updateMatrixWorld(true);
    const batches=new Map(),meshes=[],geometries=new Set();
    root.traverse(mesh=>{
      if(!mesh.isMesh)return;
      meshes.push(mesh);geometries.add(mesh.geometry);
      const geometry=(mesh.geometry.index?mesh.geometry.toNonIndexed():mesh.geometry.clone()).applyMatrix4(mesh.matrixWorld);
      if(!batches.has(mesh.material))batches.set(mesh.material,[]);batches.get(mesh.material).push(geometry);
    });
    for(const mesh of meshes)mesh.removeFromParent();
    for(const [material,parts] of batches){
      const geometry=new THREE.BufferGeometry();
      for(const [name,size] of [['position',3],['normal',3],['uv',2]]){
        const count=parts.reduce((total,part)=>total+part.attributes[name].array.length,0),data=new Float32Array(count);let cursor=0;
        for(const part of parts){data.set(part.attributes[name].array,cursor);cursor+=part.attributes[name].array.length;}
        geometry.setAttribute(name,new THREE.BufferAttribute(data,size));
      }
      geometry.computeBoundingSphere();const mesh=new THREE.Mesh(geometry,material);mesh.receiveShadow=true;root.add(mesh);
      parts.forEach(part=>part.dispose());
    }
    geometries.forEach(geometry=>geometry.dispose());
    root.scale.setScalar(scale);root.position.y=hall.z*scale;scene.add(root);
  }
  return {
    setFloor(index){const visible=index===3||index===4;if(visible&&!root)build();if(root)root.visible=visible;},
    hide(){if(root)root.visible=false;}
  };
}

// Routes follow the switchback stairs in build_interior.py, in metres, Y up.
function interiorStairFoyer(level) {
  return Math.min(8.4, level.depth / 2 - (level.index === 8 ? .12 : .45));
}
function interiorStairRoute(levels, from, to, cx = 10) {
  if (Math.abs(from - to) !== 1) throw new Error('Stair routes connect adjacent floors.');
  const lower = levels[Math.min(from, to)], upper = levels[Math.max(from, to)];
  const eye = 1.65, height = upper.z - lower.z;
  const flights = height <= 6.5 ? 2 : 4;
  const rise = height / flights, run = Math.ceil(rise / .18) * .26, front = -5.9;
  const foyer = interiorStairFoyer;
  const points = [[cx, lower.z + eye, foyer(lower)], [cx, lower.z + eye, 6.42], [cx - .85, lower.z + eye, 6.42]];
  for (let flight = 0; flight < flights; flight++) {
    const direction = flight % 2 === 0 ? 1 : -1;
    const x = cx + (direction === 1 ? -.85 : .85);
    const start = direction === 1 ? front : front + run;
    const bottom = lower.z + flight * rise + eye, top = bottom + rise;
    const end = start + direction * run, landing = end + direction * .52;
    points.push([x, bottom, -start], [x, top, -end], [x, top, -landing]);
    if (flight < flights - 1) points.push([cx + (direction === 1 ? .85 : -.85), top, -landing]);
  }
  points.push([cx, upper.z + eye, 6.42], [cx, upper.z + eye, foyer(upper)]);
  return to > from ? points : points.reverse();
}

function interiorWalkCanStand(level, x, z) {
  const radius = .28;
  const frontLimit = level.depth / 2 - (level.index === 8 ? .10 : .42);
  if (Math.abs(x) > level.width / 2 - .42 || z > frontLimit || z < -level.depth / 2 + .42) return false;
  const nearBox = (cx, cz, hx, hz) => Math.hypot(Math.max(0, Math.abs(x - cx) - hx), Math.max(0, Math.abs(z - cz) - hz)) < radius;
  const diameter = level.index <= 3 ? 1.2 : ({4:1.1,5:1,6:.9,7:.9,8:.9}[level.index]);
  // Exported metadata is also the source for column and gallery collision.
  const columnRadius=diameter*([3,4].includes(level.index)?.63:.5);
  if (level.columns.some(([cx,cz]) => level.index < 3 ? nearBox(cx,cz,.55,.55) : Math.hypot(x-cx,z-cz) < columnRadius+radius)) return false;
  if (level.voids.some(v=>nearBox(v.x,v.z,v.width/2+v.guard,v.depth/2+v.guard))) return false;
  for (const cx of [-10,10]) {
    // Keep free walking on the floor. The stair controls take over at the cores.
    if (nearBox(cx,2.95,1.74,3.87) || nearBox(cx,-4.92,1.74,1.9)) return false;
    if (nearBox(cx-2,0,.125,7) || nearBox(cx+2,0,.125,7)) return false;
    if (nearBox(cx,-2.65,2.125,.125) || nearBox(cx,-7,2.125,.125)) return false;
    if (nearBox(cx-1.42,7,.58,.125) || nearBox(cx+1.42,7,.58,.125)) return false;
  }
  if (level.index===3 && !firstFloorExhibitsCanStand(x,z,radius)) return false;
  return true;
}

function interiorWalkSpawn(level) {
  return [2,level.z+1.65,Math.min(10.6,level.depth/2-.65)];
}

// Define the lens against the unobscured scene, not the whole canvas hidden
// behind navigation. This preserves a useful field of view on narrow screens.
function interiorWalkFraming(width,height,rect,wide=true) {
  const viewWidth=Math.max(120,rect.right-rect.left),viewHeight=Math.max(120,rect.bottom-rect.top);
  const horizontal=(wide?92:76)*Math.PI/180;
  const fov=Math.min(wide?106:94,Math.max(46,2*Math.atan(Math.tan(horizontal/2)*viewHeight/viewWidth)*180/Math.PI));
  return {fov,fullWidth:viewWidth,fullHeight:viewHeight,x:-rect.left,y:-rect.top,width,height};
}

function createInteriorWalk({ THREE, scene, camera, controls, canvas, sound, onExit, onFloor, setMode }) {
  const $ = id => document.getElementById(id);
  const scale = 1.4, eye = 1.65, speed = 2.15;
  const levels = INTERIOR.storeys;
  const storyLevels = FLOOR_STORIES.filter(story => story.kind === 'story');
  const isStoryFloor = index => FLOOR_STORIES[index].kind === 'story';
  const keys = new Set(), held = new Map();
  let active = false, floor = 3, lastStory = -1;
  let yaw = 0, pitch = -.04, dragging = null, transition = null, saved = null;
  let walkingLastFrame = false;
  let wideView=readPreference('guanque-interior-view-v1',{wide:true}).wide!==false;
  const direction = new THREE.Vector3(), nextPosition = new THREE.Vector3();
  const savedVisits = readPreference('guanque-floor-stories-v1', { floors: [] }).floors;
  const visited = new Set(Array.isArray(savedVisits) ? savedVisits.filter(id => storyLevels.some(story => story.id === id)) : []);
  const decor = new THREE.Group(); decor.name = '数字入楼 · 导览牌与入口踏步'; decor.visible = false; scene.add(decor);
  const markers = new THREE.Group(); decor.add(markers);
  const light = new THREE.PointLight('#ffe3b1', 25, 30, 1.4); decor.add(light);
  const gallery = createFirstFloorGallery({ THREE, scene });

  function signTexture(title, subtitle) {
    const image = document.createElement('canvas'); image.width = 768; image.height = 320;
    const ctx = image.getContext('2d');
    ctx.fillStyle = '#122522'; ctx.fillRect(0,0,768,320);
    ctx.strokeStyle = '#bda573'; ctx.lineWidth = 5; ctx.strokeRect(12,12,744,296);
    ctx.textAlign = 'center'; ctx.fillStyle = '#bda573'; ctx.font = '25px "Songti SC",serif'; ctx.fillText(subtitle,384,80);
    ctx.fillStyle = '#ece5d3'; ctx.font = '43px "Songti SC",serif'; ctx.fillText(title,384,176);
    ctx.fillStyle = '#9fad9a'; ctx.font = '22px "Songti SC",serif'; ctx.fillText('数字导览 · 空间示意',384,255);
    const texture = new THREE.CanvasTexture(image); texture.colorSpace = THREE.SRGBColorSpace; return texture;
  }
  const storyTextures = FLOOR_STORIES.map((story,i) => signTexture(story.title,levels[i].label+(isStoryFloor(i)?' · 本层故事':' · 结构说明')));
  const board = new THREE.Mesh(new THREE.PlaneGeometry(3.6*scale,1.5*scale),new THREE.MeshBasicMaterial({map:storyTextures[3],side:THREE.DoubleSide}));
  markers.add(board);
  const stairTexture = signTexture('楼梯','使用上楼 / 下楼，沿梯段前往邻层');
  const portals = [];
  for (const cx of [-10,10]) {
    const portal = new THREE.Group(); markers.add(portal);
    const ring = new THREE.Mesh(new THREE.RingGeometry(.5*scale,.65*scale,36),new THREE.MeshBasicMaterial({color:'#d6b974',side:THREE.DoubleSide}));
    ring.rotation.x = -Math.PI/2; ring.position.y=.03*scale; portal.add(ring);
    const label = new THREE.Mesh(new THREE.PlaneGeometry(2.1*scale,.875*scale),new THREE.MeshBasicMaterial({map:stairTexture,side:THREE.DoubleSide}));
    label.position.y=2.65*scale; portal.add(label);
    portals.push({cx,portal});
    // A small guide landing closes the schematic's lowest stair entrance gap.
    const landing = new THREE.Mesh(new THREE.BoxGeometry(3.45*scale,.18*scale,1.12*scale),new THREE.MeshStandardMaterial({color:'#ddd6c3',roughness:.85}));
    landing.position.set(cx*scale,(levels[0].z-.09)*scale,6.42*scale); decor.add(landing);
  }
  // Digital landing extension keeps the top-storey foyer connected around its columns.
  const topLevel = levels.at(-1);
  const topLanding = new THREE.Mesh(new THREE.BoxGeometry(topLevel.width*scale,.28*scale,.2*scale),new THREE.MeshStandardMaterial({color:'#c3aa76',roughness:.85}));
  topLanding.position.set(0,(topLevel.z-.14)*scale,(topLevel.depth/2+.1)*scale); decor.add(topLanding);
  for (const level of levels) {
    const option = document.createElement('option'); option.value=String(level.index); option.textContent=level.label+' · '+FLOOR_STORIES[level.index].title;
    $('walk-storey').appendChild(option);
  }
  function point(value) { return new THREE.Vector3(...value).multiplyScalar(scale); }
  function spawn(index) { return point(interiorWalkSpawn(levels[index])); }
  function faceEntrance(index) { yaw=index===3?-.10:0;pitch=index===3?.14:index===4?-.18:-.04;orient(); }
  function layout() {
    const width=window.innerWidth,height=window.innerHeight,phone=width<=720;
    const sidebar=document.querySelector('.sidebar').getBoundingClientRect();
    const toolbar=document.querySelector('.top-controls').getBoundingClientRect();
    const tools=document.querySelector('.scene-tools').getBoundingClientRect();
    const rect={left:phone?10:sidebar.right+16,right:width-10,top:toolbar.bottom+12,
      bottom:phone?Math.min(sidebar.top,tools.top)-10:height-76};
    const view=interiorWalkFraming(width,height,rect,wideView);
    camera.fov=view.fov;
    camera.setViewOffset(view.fullWidth,view.fullHeight,view.x,view.y,view.width,view.height);
    camera.updateProjectionMatrix();
    $('walk-fov').setAttribute('aria-pressed',String(wideView));
    $('walk-fov').textContent=wideView?'开阔视野':'自然视野';
  }
  function orient() {
    direction.set(Math.sin(yaw)*Math.cos(pitch),Math.sin(pitch),-Math.cos(yaw)*Math.cos(pitch));
    camera.lookAt(nextPosition.copy(camera.position).add(direction));
  }
  function clearInput() { keys.clear(); held.clear(); dragging=null; walkingLastFrame=false; }
  function updateFloor() {
    const level=levels[floor];
    $('walk-floor').textContent=level.label;
    $('walk-storey').value=String(floor);
    $('walk-progress').textContent=`故事足迹 ${visited.size} / ${storyLevels.length}`;
    $('walk-story-again').textContent=isStoryFloor(floor)?'重读本层故事':'本层结构说明';
    $('walk-down').disabled=!!transition || floor===0;
    $('walk-up').disabled=!!transition || floor===8;
    $('walk-storey').disabled=!!transition;
    $('walk-recenter').disabled=!!transition;
    board.material.map=storyTextures[floor];
    board.position.set(3.4*scale,(level.z+1.95)*scale,0);
    board.visible=floor!==3&&floor!==4;
    gallery.setFloor(floor);
    light.intensity=floor===3||floor===4?3:25;
    $('walk-reference').hidden=floor!==3&&floor!==4;
    for (const {cx,portal} of portals) portal.position.set(cx*scale,level.z*scale,interiorStairFoyer(level)*scale);
    onFloor(floor);
  }
  function showStory() {
    if (!active || transition) return;
    clearInput();
    const story=FLOOR_STORIES[floor], level=levels[floor];
    if(isStoryFloor(floor)){visited.add(level.id);savePreference('guanque-floor-stories-v1',{floors:[...visited]});}
    const label=isStoryFloor(floor)?'楼层故事':'台基结构说明';
    $('walk-story').setAttribute('aria-label',label);
    $('walk-close-story').setAttribute('aria-label','收起'+label);
    $('walk-story-floor').textContent=level.label+(isStoryFloor(floor)?' · 到层故事':' · 结构说明');
    $('walk-story-title').textContent=story.title;
    $('walk-story-lead').textContent=story.lead;
    $('walk-story-body').replaceChildren(...story.paragraphs.map(text=>{const p=document.createElement('p');p.textContent=text;return p;}));
    $('walk-story-source').href=story.source;
    $('walk-story-source').textContent=isStoryFloor(floor)?'查阅故事依据 ↗':'查阅结构依据 ↗';
    $('walk-story-scope').textContent=floor===3||floor===4?'大厅与回廊参考实拍；尺寸、彩绘细节和壁画图像为示意。六层故事为数字导览编排。':isStoryFloor(floor)?'六层故事为数字导览主题编排，不代表真实展厅用途。':'台基三层展示结构关系；平面与部分标高仍待完整 CAD 核对。';
    $('walk-read-story').hidden=!story.audio;
    $('walk-story').hidden=false;
    document.querySelector('.walk-story-reading').scrollTop=0;
    $('walk-story-title').focus({preventScroll:true});
    $('walk-progress').textContent=`故事足迹 ${visited.size} / ${storyLevels.length}`;
    if (story.audio) sound.speak(story.audio);
  }
  function closeStory(restoreFocus=false) {
    $('walk-story').hidden=true; sound.stopVoice(); clearInput();
    if(restoreFocus&&active)canvas.focus({preventScroll:true});
  }
  const moveHint=()=>window.innerWidth<=720||matchMedia('(pointer: coarse)').matches?'拖动画面环视 · 按住方向按钮行走':'拖动画面环视 · W A S D 或方向键行走';
  function arrive() {
    transition=null; markers.visible=true; $('walk-fade').style.opacity='0';
    const foot=camera.position.y/scale-eye;
    const index=levels.findLastIndex(level=>foot>=level.z-.04);
    floor=Math.max(0,index); updateFloor();
    $('walk-status').textContent=moveHint();
    setMode('入楼漫游 · '+levels[floor].label);
    if (lastStory!==floor) { lastStory=floor; if(isStoryFloor(floor))showStory(); }
  }
  function warp(to,{route=null}={}) {
    if (!active || transition) return;
    clearInput(); closeStory(); markers.visible=false;
    if(visitorExperience.reducedMotion){
      camera.position.copy(spawn(to));faceEntrance(to);arrive();return;
    }
    transition={kind:'fade',age:0,moved:false,to,route};
    $('walk-status').textContent=route?'前往楼梯，随后沿梯段登临…':'正在进入'+levels[to].label+'…';
    updateFloor();
  }
  function changeFloor(step) {
    const to=floor+step;
    if (!active || transition || to<0 || to>=levels.length) return;
    const cx=camera.position.x<0?-10:10;
    warp(to,{route:interiorStairRoute(levels,floor,to,cx).map(point)});
  }
  function move(forward,right,seconds) {
    if (!active || transition || visitorExperience.covered || !$('walk-story').hidden || document.querySelector('dialog[open]') || (!forward&&!right)) return;
    const magnitude=Math.max(1,Math.hypot(forward,right));
    const distance=speed*seconds/magnitude;
    let x=camera.position.x/scale,z=camera.position.z/scale;
    const dx=(Math.sin(yaw)*forward+Math.cos(yaw)*right)*distance;
    const dz=(-Math.cos(yaw)*forward+Math.sin(yaw)*right)*distance;
    if(interiorWalkCanStand(levels[floor],x+dx,z))x+=dx;
    if(interiorWalkCanStand(levels[floor],x,z+dz))z+=dz;
    camera.position.set(x*scale,(levels[floor].z+eye)*scale,z*scale);
  }
  const movement={KeyW:[1,0],ArrowUp:[1,0],KeyS:[-1,0],ArrowDown:[-1,0],KeyA:[0,-1],ArrowLeft:[0,-1],KeyD:[0,1],ArrowRight:[0,1]};
  window.addEventListener('keydown',event=>{
    if(!active)return;
    if(event.defaultPrevented||visitorExperience.covered||document.querySelector('dialog[open]'))return;
    if(event.code==='Escape'){event.preventDefault();event.stopImmediatePropagation();if(!$('walk-story').hidden)closeStory(true);else onExit();return;}
    if(!$('walk-story').hidden||event.target.closest?.('button,a,input,select,textarea,[role="tab"],[contenteditable="true"]'))return;
    if(movement[event.code]){event.preventDefault();keys.add(event.code);if(!event.repeat)move(...movement[event.code],.09);}
    if(!event.repeat&&event.code==='KeyE'){event.preventDefault();changeFloor(1);}
    if(!event.repeat&&event.code==='KeyQ'){event.preventDefault();changeFloor(-1);}
  });
  window.addEventListener('keyup',event=>keys.delete(event.code));
  window.addEventListener('blur',clearInput);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)clearInput();});
  canvas.addEventListener('pointerdown',event=>{
    if(!active||event.button!==0)return;
    if(!$('walk-story').hidden)closeStory();
    dragging={id:event.pointerId,x:event.clientX,y:event.clientY};canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener('pointermove',event=>{
    if(!active||dragging?.id!==event.pointerId)return;
    yaw+=(event.clientX-dragging.x)*.004;pitch=THREE.MathUtils.clamp(pitch-(event.clientY-dragging.y)*.004,-1.05,1.05);
    dragging.x=event.clientX;dragging.y=event.clientY;orient();
  });
  const releaseLook=event=>{if(dragging?.id===event.pointerId)dragging=null;};
  for(const type of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(type,releaseLook);
  for(const button of document.querySelectorAll('[data-walk-move]')){
    const vector={forward:[1,0],back:[-1,0],left:[0,-1],right:[0,1]}[button.dataset.walkMove];
    button.addEventListener('pointerdown',event=>{if(!active)return;event.preventDefault();button.setPointerCapture(event.pointerId);held.set(event.pointerId,vector);move(...vector,.09);});
    for(const type of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(type,event=>held.delete(event.pointerId));
    button.addEventListener('click',event=>{if(event.detail===0)move(...vector,.15);});
  }
  $('walk-up').addEventListener('click',()=>changeFloor(1));
  $('walk-down').addEventListener('click',()=>changeFloor(-1));
  $('walk-storey').addEventListener('change',event=>warp(Number(event.target.value)));
  $('walk-recenter').addEventListener('click',()=>{lastStory=-1;warp(floor);});
  $('walk-fov').addEventListener('click',()=>{wideView=!wideView;clearInput();savePreference('guanque-interior-view-v1',{wide:wideView});layout();});
  $('walk-story-again').addEventListener('click',showStory);
  $('walk-close-story').addEventListener('click',()=>closeStory(true));
  $('walk-continue').addEventListener('click',()=>closeStory(true));
  $('walk-read-story').addEventListener('click',()=>{const key=FLOOR_STORIES[floor].audio;if(key){sound.setEnabled(true,true);sound.speak(key);}});
  $('exit-walk').addEventListener('click',onExit);
  return {
    get active(){return active;},get floor(){return floor;},
    suspendInput:clearInput,
    enter(index=3){
      if(active)return;
      saved={position:camera.position.clone(),target:controls.target.clone(),fov:camera.fov};
      active=true;floor=index;lastStory=-1;controls.enabled=false;
      decor.visible=true;document.body.classList.add('walking');
      if(window.innerWidth<=720)visitorExperience.collapsePanel();
      layout();
      warp(index);
    },
    exit(){
      if(!active)return;
      active=false;transition=null;clearInput();closeStory();decor.visible=false;gallery.hide();
      $('walk-fade').style.opacity='0';document.body.classList.remove('walking');
      camera.fov=saved.fov;camera.position.copy(saved.position);controls.target.copy(saved.target);
      camera.updateProjectionMatrix();camera.lookAt(controls.target);controls.enabled=true;
      visitorExperience.expandPanel();
    },
    layout,
    tick(seconds){
      if(!active)return;
      if(visitorExperience.covered||document.querySelector('dialog[open]')){clearInput();return;}
      if(transition&&visitorExperience.reducedMotion){
        camera.position.copy(spawn(transition.to));faceEntrance(transition.to);arrive();
      }
      if(transition?.kind==='fade'){
        const item=transition;item.age+=seconds;
        $('walk-fade').style.opacity=String(Math.sin(Math.min(1,item.age/.7)*Math.PI));
        if(item.age>=.35&&!item.moved){item.moved=true;camera.position.copy(item.route?item.route[0]:spawn(item.to));faceEntrance(item.route?floor:item.to);}
        if(item.age>=.7){
          if(item.route){
            const lengths=[0];for(let i=1;i<item.route.length;i++)lengths.push(lengths[i-1]+item.route[i].distanceTo(item.route[i-1]));
            transition={kind:'stairs',points:item.route,lengths,total:lengths.at(-1),distance:0,to:item.to};
            $('walk-fade').style.opacity='0';$('walk-status').textContent='沿楼梯前往'+levels[item.to].label+(isStoryFloor(item.to)?' · 到层后自动展开故事':' · 可主动查看结构说明');
          }else arrive();
        }
      }else if(transition?.kind==='stairs'){
        const item=transition;item.distance=Math.min(item.total,item.distance+seconds*2.2*scale);
        let index=1;while(index<item.lengths.length-1&&item.lengths[index]<item.distance)index++;
        const span=item.lengths[index]-item.lengths[index-1];
        camera.position.lerpVectors(item.points[index-1],item.points[index],span?((item.distance-item.lengths[index-1])/span):1);
        direction.subVectors(item.points[index],item.points[index-1]);
        if(!dragging&&Math.hypot(direction.x,direction.z)>.001){
          const target=item.distance>item.total-1.6*scale?(camera.position.x>0?-Math.PI/2:Math.PI/2):Math.atan2(direction.x,-direction.z);
          yaw+=Math.atan2(Math.sin(target-yaw),Math.cos(target-yaw))*(1-Math.exp(-seconds*7));pitch+=(-.1-pitch)*(1-Math.exp(-seconds*4));
        }
        orient();
        if(item.distance>=item.total)arrive();
      }else{
        let forward=0,right=0;
        for(const key of keys){forward+=movement[key][0];right+=movement[key][1];}
        for(const vector of held.values()){forward+=vector[0];right+=vector[1];}
        move(forward,right,seconds);orient();
        const moving=!!(forward||right);
        if(moving!==walkingLastFrame){$('walk-status').textContent=moving?levels[floor].label+' · 正在行走':moveHint();walkingLastFrame=moving;}
      }
      light.position.copy(camera.position);light.position.y+=.4*scale;
    }
  };
}

// Interior geometry is optional and loads only when the visitor opens the section.
function createInteriorExplorer({ THREE, GLTFLoader, scene, renderer, camera, controls, sound, exterior, assetURL,
  beforeEnter, afterExit, onLayoutChange, flyTo, notify, showDetail, setMode }) {
  const $ = id => document.getElementById(id);
  const button = $('interior-toggle');
  const walkButton = $('enter-walk');
  const panel = $('interior-panel');
  const selector = $('interior-storey');
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, -1), 0);
  // The photo-derived shell contains closed floor/decorative solids. In walking
  // mode, remove their inner portions so the separate structural model defines
  // the occupied space, including its stair openings. Facades stay outside this cut.
  const walkPlanes = [[62,44],[35,24],[29,20],[26,16.1]].map(([width,depth]) => [
    new THREE.Plane(new THREE.Vector3(1,0,0),-width/2*1.4),
    new THREE.Plane(new THREE.Vector3(-1,0,0),-width/2*1.4),
    new THREE.Plane(new THREE.Vector3(0,0,1),-depth/2*1.4),
    new THREE.Plane(new THREE.Vector3(0,0,-1),-depth/2*1.4)
  ]);
  const originals = new WeakMap();
  let root = null, task = null, generation = 0;
  let active = false, mode = 'section', selected = 'all', spread = 0, spreadTarget = 0;
  const groups = [];
  const materialList = [];
  const delta = new THREE.Vector3();
  const walker = createInteriorWalk({ THREE, scene, camera, controls, canvas: renderer.domElement, sound,
    onExit: leaveWalk, onFloor: index => { selected = String(index); caption(); applyWalkMaterials(); }, setMode });
  renderer.localClippingEnabled = true;

  for (const level of INTERIOR.storeys) {
    const option = document.createElement('option');
    option.value = String(level.index);
    option.textContent = `${level.label} · ${level.known ? '有标高依据' : '标高推定'}`;
    selector.appendChild(option);
  }
  function caption() {
    const item = selected === 'all' ? null : INTERIOR.storeys[Number(selected)];
    $('interior-floor-title').textContent = item ? item.label : '台基三层 · 楼身六层';
    $('interior-floor-note').textContent = item
      ? `${item.known ? '有标高依据' : '推定标高'}：距周边地面 ${item.z.toFixed(2)} 米。${item.source}`
      : '青绿色楼板有标高依据，赭黄色楼板的标高为推定。楼身内柱按 20 根示意，其中 12 根结合两侧剪力墙，8 根独立。';
    $('interior-legend-floor').textContent = item ? `${item.label} · ${item.known ? '有标高依据' : '标高推定'}` : '九层结构示意';
  }
  function applyWalkMaterials() {
    const inFirstHall=walker.active && (walker.floor===3||walker.floor===4);
    for(const item of materialList) item.object.material=inFirstHall&&item.showcaseMaterial ? item.showcaseMaterial : item.material;
  }
  function exteriorMaterials(callback) {
    exterior().traverse(obj => {
      if (!obj.isMesh) return;
      for (const material of Array.isArray(obj.material) ? obj.material : [obj.material]) {
        if (!originals.has(material)) originals.set(material, { side: material.side, clippingPlanes: material.clippingPlanes, clipShadows: material.clipShadows, clipIntersection: material.clipIntersection });
        callback(material, originals.get(material), obj);
      }
    });
  }
  function refreshExterior() {
    exterior().visible = !active || walker.active || (mode === 'section' && selected === 'all' && spreadTarget === 0 && spread < .001);
    exteriorMaterials((material, original, obj) => {
      const cut = active && !walker.active && mode === 'section';
      material.clippingPlanes = walker.active ? walkPlanes[obj.userData.tier ?? 0] : cut ? [plane] : original.clippingPlanes;
      material.clipIntersection = walker.active ? true : cut ? false : original.clipIntersection;
      material.clipShadows = cut || walker.active ? true : original.clipShadows;
      // Cull the reverse faces of closed stone slabs and bases. Thin roof
      // sheets still need both sides visible when the cut exposes their inside.
      const solid = material.userData.sectionCullBackfaces === true;
      material.side = (cut || walker.active) && !solid ? THREE.DoubleSide : original.side;
      material.needsUpdate = true;
    });
    renderer.shadowMap.needsUpdate = true;
  }
  function apply() {
    if (root) {
      applyWalkMaterials();
      root.visible = active;
      for (const group of groups) group.visible = walker.active || selected === 'all' || group.userData.index === Number(selected);
      // Open the front of the stair cores as well as the outer building shell.
      const floorOverlay = active && !walker.active && mode === 'section' && selected === 'all' && spreadTarget === 0;
      for (const { material, kind } of materialList) {
        material.clippingPlanes = active && !walker.active && mode === 'section' && kind === 'wall' ? [plane] : null;
        material.clipShadows = true;
        // These are closed solids: cull their buried reverse faces at slab joints.
        // Cut core walls retain the former two-sided section presentation.
        material.side = kind === 'wall' ? THREE.DoubleSide : THREE.FrontSide;
        // The shell's terrace and room floors share elevations with these slabs.
        // Prefer the structural surface at equal depth without changing its elevation.
        material.polygonOffset = floorOverlay && kind.startsWith('floor-');
        material.polygonOffsetFactor = -1;
        material.polygonOffsetUnits = -4;
        material.needsUpdate = true;
      }
    }
    $('interior-legend').hidden = !active || walker.active;
    $('hotspots').hidden = active;
    panel.hidden = !active || walker.active;
    $('walk-panel').hidden = !walker.active;
    button.hidden = walker.active;
    walkButton.hidden = walker.active;
    document.querySelector('#view-explore .pane-intro').hidden = walker.active;
    document.querySelector('#view-explore .pane-note').hidden = walker.active;
    document.querySelector('.part-list').hidden = active;
    document.querySelector('.showcase-views').hidden = active;
    document.querySelector('.structure-controls').hidden = active;
    document.querySelector('#view-explore .pane-note').textContent = active
      ? '从台基到楼顶，查看柱、梁、楼板和两侧交通区。'
      : '点选构件，或点击画面中的标记，靠近看一看。';
    $('view-hint').textContent = walker.active ? '拖拽环视 · W A S D 行走 · E 上楼 / Q 下楼 · 楼身六层到层讲故事' : active ? '拖拽查看骨架 · 选择楼层或移动剖切面' : '点击构件或标记，靠近读一座楼';
    button.setAttribute('aria-pressed', String(active));
    button.textContent = active ? '返回外观探索' : '打开九层内部结构';
    document.querySelectorAll('[data-interior-mode]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.interiorMode === mode)));
    $('section-depth-control').hidden = mode !== 'section' || selected !== 'all' || spreadTarget === 1;
    $('interior-spread').setAttribute('aria-pressed', String(spreadTarget === 1));
    $('interior-spread').textContent = spreadTarget ? '合拢九层 ↙' : '展开九层 ↗';
    caption();
    refreshExterior();
    onLayoutChange();
  }
  function viewingRect() {
    const width = Math.max(1, window.innerWidth), height = Math.max(1, window.innerHeight);
    const phone = width <= 720;
    const sidebar = document.querySelector('.sidebar').getBoundingClientRect();
    const controls = document.querySelector('.top-controls').getBoundingClientRect();
    const bottom = phone ? Math.min(sidebar.top - 12, $('scene-tools').getBoundingClientRect().top - 10) : height - 76;
    const top = Math.min(bottom - 96, (phone ? $('interior-legend').getBoundingClientRect().bottom : controls.bottom) + 14);
    return { width, height, left: phone ? 16 : sidebar.right + 24, right: width - 16, top, bottom };
  }
  function layout() {
    if (walker.active) { walker.layout(); return; }
    const rect = viewingRect();
    camera.setViewOffset(rect.width, rect.height,
      (rect.width - rect.left - rect.right) / 2,
      (rect.height - rect.top - rect.bottom) / 2, rect.width, rect.height);
    camera.updateProjectionMatrix();
  }
  function focus() {
    if (!root || !active || walker.active) return;
    const bounds = new THREE.Box3();
    root.updateMatrixWorld(true);
    for (const group of groups) {
      if (!group.visible) continue;
      const box = new THREE.Box3().setFromObject(group);
      box.translate(delta.set(0, group.userData.index * 5 * (spreadTarget-spread) * 1.4, 0));
      bounds.union(box);
    }
    if (mode === 'section' && selected === 'all' && spreadTarget === 0) {
      // The roof and exterior podium extend beyond the interior's own bounds.
      const shell = new THREE.Box3().setFromObject(exterior());
      shell.max.z = Math.min(shell.max.z, plane.constant);
      if (!shell.isEmpty()) bounds.union(shell);
    }
    if (bounds.isEmpty()) return;
    const target = bounds.getCenter(new THREE.Vector3());
    const direction = new THREE.Vector3(.55, selected === 'all' ? .38 : .92, 1).normalize();
    const right = new THREE.Vector3().crossVectors(camera.up, direction).normalize();
    const up = new THREE.Vector3().crossVectors(direction, right).normalize();
    const rect = viewingRect();
    const tangent = Math.tan(THREE.MathUtils.degToRad(camera.getEffectiveFOV()) / 2);
    const fitX = Math.max(.001, tangent * camera.aspect * (rect.right - rect.left) / rect.width * .9);
    const fitY = Math.max(.001, tangent * (rect.bottom - rect.top) / rect.height * .9);
    let distance = selected === 'all' ? 110 : 75;
    // Fit every corner into the canvas area left clear by the controls.
    for (const x of [bounds.min.x, bounds.max.x]) for (const y of [bounds.min.y, bounds.max.y]) for (const z of [bounds.min.z, bounds.max.z]) {
      const corner = new THREE.Vector3(x, y, z).sub(target);
      const depth = corner.dot(direction);
      distance = Math.max(distance, depth + Math.abs(corner.dot(right)) / fitX, depth + Math.abs(corner.dot(up)) / fitY);
    }
    const offset = direction.multiplyScalar(distance);
    const label = selected === 'all' ? '九层结构 · 示意剖视' : INTERIOR.storeys[Number(selected)].label + ' · 结构示意';
    flyTo(target.clone().add(offset), target, { duration: 2.7, label });
  }
  async function load() {
    if (root) return;
    if (!task) task = (async () => {
      const embedded = $('guanque-interior');
      let buffer;
      if (embedded) {
        const bytes = atob(embedded.textContent.trim());
        buffer = Uint8Array.from(bytes, char => char.charCodeAt(0)).buffer;
        embedded.remove();
      } else {
        const response = await fetch(assetURL('guanque-interior.glb'), { signal: AbortSignal.timeout(45000) });
        if (!response.ok) throw new Error(`Interior request failed: ${response.status}`);
        buffer = await response.arrayBuffer();
      }
      const result = await new GLTFLoader().parseAsync(buffer, '');
      root = result.scene;
      root.name = '鹳雀楼 · 九层内部结构示意';
      root.scale.setScalar(1.4);
      root.visible = false;
      root.traverse(obj => {
        if (obj.userData.interiorStorey) groups.push(obj);
        if (!obj.isMesh) return;
        obj.material = obj.material.clone();
        obj.castShadow = true; obj.receiveShadow = true;
        materialList.push({ material: obj.material, kind: obj.userData.kind, object: obj,
          showcaseMaterial: prepareFirstFloorMaterial(THREE,obj,exterior()) });
      });
      scene.add(root);
    })().finally(() => { task = null; });
    await task;
  }
  function exit() {
    generation++;
    walker.exit();
    if (!active) return;
    active = false;
    apply();
  }
  function leaveWalk() {
    const floor = walker.floor;
    walker.exit(); selected = String(floor); selector.value = selected; mode = 'section';
    spread = spreadTarget = 0; groups.forEach(group => { group.position.y = 0; });
    apply(); focus();
  }
  async function enter(asWalk = false) {
    const floor = selected === 'all' ? 3 : Number(selected);
    const request = ++generation;
    button.disabled = walkButton.disabled = true;
    const entry = asWalk ? walkButton : button;
    entry.textContent = '正在载入内部结构…';
    if (asWalk) sound.ensureFromGesture();
    try {
      await load();
      if (request !== generation) return;
      beforeEnter();
      active = true; selected = 'all'; spread = 0; spreadTarget = 0;
      selector.value = 'all';
      groups.forEach(group => { group.position.y = 0; });
      if (asWalk) walker.enter(floor);
      apply(); focus();
    } catch (error) {
      console.warn('Interior model:', error);
      notify('内部结构暂未载入，可以稍后再试。');
    } finally {
      button.disabled = walkButton.disabled = false;
      button.textContent = active ? '返回外观探索' : '打开九层内部结构';
      walkButton.textContent = '入楼漫游 · 楼层故事';
    }
  }
  button.addEventListener('click', () => {
    if (active) { exit(); beforeEnter(); afterExit(); return; }
    enter();
  });
  walkButton.addEventListener('click', () => enter(true));
  selector.addEventListener('change', () => {
    selected = selector.value;
    spread = spreadTarget = 0;
    groups.forEach(group => { group.position.y = 0; });
    apply(); focus();
  });
  document.querySelectorAll('[data-interior-mode]').forEach(el => el.addEventListener('click', () => {
    mode = el.dataset.interiorMode; apply(); focus();
    setMode(mode === 'section' ? '内部结构 · 半剖示意' : '内部结构 · 骨架示意');
  }));
  $('section-depth').addEventListener('input', event => {
    const value = Number(event.target.value);
    plane.constant = value * 1.4;
    $('section-depth-value').textContent = value === 0 ? '中轴' : (value > 0 ? '向前 ' : '向后 ') + Math.abs(value) + ' m';
    renderer.shadowMap.needsUpdate = true;
  });
  $('interior-spread').addEventListener('click', () => {
    selected = 'all'; selector.value = 'all';
    spreadTarget = spreadTarget ? 0 : 1;
    apply(); focus();
  });
  $('interior-evidence').addEventListener('click', () => showDetail({
    eyebrow: '内部结构 · 资料与推定', title: '这版内部做到哪里', lead: INTERIOR.scope,
    paragraphs: [
      '施工正文确认了九层划分、部分标高、20 根内柱及其与两处剪力墙的关系；交通区位于 4–5、8–9 轴和 E–G 轴之间。',
      '首层通高大厅、二层回廊参考实拍，施工文字也提及二层回廊和一层洞口。洞口长宽与柱位是结合现有楼体的推定，未取得完整建筑平面 CAD。',
      '楼板轮廓、轴线间距、交通区绝对位置、墙厚、梯段及井道尺寸仍为示意。首层展项主题有照片依据，壁画图像为简化绘制。',
      '台基二、三层和楼身二、三层采用分段等分的推定标高；楼身六层沿用照片模型高度。它们用赭黄色楼板表示。'
    ], source: INTERIOR.sources[0]
  }));
  return {
    get active() { return active; }, get walking() { return walker.active; }, exit, refreshExterior, layout, reframe: focus,
    suspendInput: walker.suspendInput,
    tick(seconds) {
      walker.tick(seconds);
      if (!active || !root || Math.abs(spread-spreadTarget) < .001) return;
      spread += (spreadTarget-spread)*(visitorExperience.reducedMotion?1:1-Math.exp(-seconds*4));
      if (Math.abs(spread-spreadTarget)<.001) spread=spreadTarget;
      groups.forEach(group => { group.position.y=group.userData.index*5*spread; });
      root.updateMatrixWorld(true);
      if (spread === 0) refreshExterior();
      renderer.shadowMap.needsUpdate = true;
    }
  };
}

// The landscape is a separate, self-contained GLB in the same metre scale as the tower.
function createScenicPark({ THREE, GLTFLoader, scene, renderer, assetURL, waterMaterial, waterUniforms }) {
  const group = new THREE.Group();
  group.name = '鹳雀楼景区 · 实景布局参考';
  group.scale.setScalar(1.4);
  scene.add(group);
  let loaded = false, task = null;
  const lakeMaterial = waterMaterial.clone();
  lakeMaterial.uniforms = THREE.UniformsUtils.clone(waterUniforms);
  // The small landscape lake has gentler ripples than the distant Yellow River.
  lakeMaterial.vertexShader = lakeMaterial.vertexShader.replace('* 0.07;', '* 0.016;').replace('* 0.035;', '* 0.008;');
  // Filter small ripples at their pixel footprint and keep reflections broad and soft.
  lakeMaterial.fragmentShader = `
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
      float phaseA = p.x * 0.055 + p.y * 0.075 + uTime * 0.18;
      float phaseB = p.x * 0.035 - p.y * 0.065 - uTime * 0.14;
      float filterA = 1.0 - smoothstep(0.35, 1.8, fwidth(phaseA));
      float filterB = 1.0 - smoothstep(0.35, 1.8, fwidth(phaseB));
      vec3 normal = normalize(vec3(
        cos(phaseA) * 0.010 * filterA,
        1.0,
        cos(phaseB) * 0.012 * filterB
      ));
      vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
      vec3 halfDirection = normalize(viewDirection + normalize(uSunDirection));
      float fresnel = pow(1.0 - max(dot(normal, viewDirection), 0.0), 3.0);
      float reflection = pow(max(dot(normal, halfDirection), 0.0), 28.0);
      float variation = sin(phaseA) * filterA * 0.004 + sin(phaseB) * filterB * 0.003;
      vec3 color = mix(uWaterColor, uHorizon, fresnel * 0.23);
      color *= 0.97 + variation;
      color += uSunColor * reflection * mix(0.10, 0.13, uDusk);
      gl_FragColor = vec4(color, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      #include <fog_fragment>
    }
  `;
  const lakeDay = new THREE.Color('#527d68'), lakeDusk = new THREE.Color('#626e55');
  function status(state, message) {
    document.getElementById('stage').dataset.scenery = state;
    const el = document.getElementById('park-status');
    el.textContent = message;
    el.hidden = state === 'ready';
    document.getElementById('park-retry').hidden = state !== 'error';
  }
  async function ensure() {
    if (loaded) return true;
    if (task) return task;
    task = (async () => {
      status('loading', '正在铺展景区周边…');
      try {
        const embedded = document.getElementById('guanque-surroundings');
        let buffer;
        if (embedded) {
          const encoded = atob(embedded.textContent.trim());
          const bytes = new Uint8Array(encoded.length);
          for (let i = 0; i < encoded.length; i++) bytes[i] = encoded.charCodeAt(i);
          buffer = bytes.buffer;
        } else {
          const abort = new AbortController();
          const timer = setTimeout(() => abort.abort(), 45000);
          try {
            const response = await fetch(assetURL('guanque-surroundings.glb'), { signal: abort.signal });
            if (!response.ok) throw new Error(`Landscape response ${response.status}`);
            buffer = await response.arrayBuffer();
          } finally { clearTimeout(timer); }
        }
        const result = await new GLTFLoader().parseAsync(buffer, '');
        result.scene.traverse(object => {
          if (!object.isMesh) return;
          object.castShadow = !['water', 'poem', 'grass', 'woodland', 'paving'].includes(object.userData.scenicKind);
          object.receiveShadow = true;
          if (object.userData.scenicKind === 'water') object.material = lakeMaterial;
          if (object.material.map) object.material.map.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
        });
        group.add(result.scene);
        loaded = true;
        embedded?.remove();
        renderer.shadowMap.needsUpdate = true;
        status('ready', '景区周边已载入');
        return true;
      } catch (error) {
        status('error', '周边暂未载入，主体仍可游览。');
        return false;
      } finally { task = null; }
    })();
    return task;
  }
  function tick() {
    for (const key of ['uTime', 'uDusk']) lakeMaterial.uniforms[key].value = waterUniforms[key].value;
    for (const key of ['uHorizon', 'uSunDirection', 'uSunColor']) lakeMaterial.uniforms[key].value.copy(waterUniforms[key].value);
    lakeMaterial.uniforms.uWaterColor.value.copy(lakeDay).lerp(lakeDusk, waterUniforms.uDusk.value);
  }
  document.getElementById('park-retry').addEventListener('click', ensure);
  document.getElementById('park-visible').addEventListener('change', event => {
    group.visible = event.target.checked;
    if (group.visible && !loaded) ensure();
    renderer.shadowMap.needsUpdate = true;
  });
  ensure();
  return { group, ensure, tick, get loaded() { return loaded; } };
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
      scene.fog = new THREE.FogExp2(0xd0dbe0, 0.00030);

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

      const hemisphere = new THREE.HemisphereLight(0xd9e5e8, 0x827d73, 1.45);
      scene.add(hemisphere);

      const sunLight = new THREE.DirectionalLight(0xffedc5, 3.0);
      sunLight.castShadow = true;
      sunLight.target.position.set(0, 45, 0);
      sunLight.shadow.mapSize.set(
        matchMedia("(pointer: coarse)").matches ? 1024 : 2048,
        matchMedia("(pointer: coarse)").matches ? 1024 : 2048
      );
      Object.assign(sunLight.shadow.camera, {
        left: -115,
        right: 115,
        top: 130,
        bottom: -115,
        near: 10,
        far: 2100
      });
      sunLight.shadow.bias = -0.00025;
      sunLight.shadow.normalBias = 0.055;
      scene.add(sunLight, sunLight.target);

      const fillLight = new THREE.DirectionalLight(0xd4e1e4, 0.6);
      fillLight.position.set(180, 140, 240);
      scene.add(fillLight);

      // A small neutral sky reflection gives lacquer and bronze a broad highlight.
      // Generated once, without a downloaded HDRI or a screen-space effect.
      const reflectionCanvas = document.createElement('canvas');
      reflectionCanvas.width = 256; reflectionCanvas.height = 128;
      const reflectionContext = reflectionCanvas.getContext('2d');
      const reflectionGradient = reflectionContext.createLinearGradient(0, 0, 0, 128);
      for (const [stop, color] of [[0,'#a3b9cc'],[.42,'#e4e9e8'],[.52,'#bec1b9'],[1,'#625d51']]) reflectionGradient.addColorStop(stop, color);
      reflectionContext.fillStyle = reflectionGradient; reflectionContext.fillRect(0, 0, 256, 128);
      const reflectionTexture = new THREE.CanvasTexture(reflectionCanvas);
      reflectionTexture.colorSpace = THREE.SRGBColorSpace;
      reflectionTexture.mapping = THREE.EquirectangularReflectionMapping;
      const reflectionGenerator = new THREE.PMREMGenerator(renderer);
      const reflectionTarget = reflectionGenerator.fromEquirectangular(reflectionTexture);
      scene.environment = reflectionTarget.texture; scene.environmentIntensity = .28;
      reflectionTexture.dispose(); reflectionGenerator.dispose();

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
      // 首次访问只请求流畅模型。独立 HTML 继续使用内嵌精细模型。
      const embeddedModel = document.getElementById('guanque-model');
      let modelQuality = embeddedModel ? 'fine' : 'fast';
      const modelCache = new Map();
      const modelLoads = new Map();
      const anisotropy = Math.min(matchMedia('(pointer: coarse)').matches ? 4 : 8, renderer.capabilities.getMaxAnisotropy());

      function prepareModel(result) {
        result.scene.name = '鹳雀楼 · 工程资料优化版';
        result.scene.scale.setScalar(1.4);
        result.scene.traverse(object => {
          if (!object.isMesh) return;
          object.castShadow = true;
          object.receiveShadow = true;
          for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
            if (material.map) material.map.anisotropy = anisotropy;
            if (material.normalMap) material.normalMap.anisotropy = anisotropy;
            if (material.roughnessMap) material.roughnessMap.anisotropy = anisotropy;
          }
        });
        return result;
      }

      async function loadModelQuality(quality, report = () => {}) {
        if (modelCache.has(quality)) return modelCache.get(quality);
        if (modelLoads.has(quality)) return modelLoads.get(quality);
        const task = (async () => {
          const asset = MODEL_ASSETS[quality];
          const abort = new AbortController();
          let stallTimer;
          const keepAlive = () => {
            clearTimeout(stallTimer);
            stallTimer = setTimeout(() => abort.abort(), 45000);
          };
          let buffer;
          try {
            keepAlive();
            const response = await fetch(assetURL(asset.path), { signal: abort.signal });
            if (!response.ok) throw new Error(`Model request failed: ${response.status}`);
            if (response.body) {
              const reader = response.body.getReader();
              const chunks = [];
              let loaded = 0;
              while (true) {
                const { value, done } = await reader.read();
                if (done) break;
                keepAlive(); chunks.push(value); loaded += value.byteLength;
                // gzip 响应头中的长度是压缩量；流里是解压后的字节。
                // 用构建时记录的原始大小计算，避免提前显示 100%。
                report({ phase: 'download', percent: Math.min(99, Math.floor(loaded / asset.bytes * 100)) });
              }
              const bytes = new Uint8Array(loaded);
              let offset = 0;
              for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
              buffer = bytes.buffer;
            } else buffer = await response.arrayBuffer();
          } finally { clearTimeout(stallTimer); }
          report({ phase: 'prepare', percent: 100 });
          await new Promise(requestAnimationFrame);
          const result = prepareModel(await new GLTFLoader().parseAsync(buffer, ''));
          modelCache.set(quality, result);
          return result;
        })();
        modelLoads.set(quality, task);
        try { return await task; }
        finally { modelLoads.delete(quality); }
      }

      let model;
      if (embeddedModel) {
        let encoded = embeddedModel.textContent.trim();
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
        encoded = ''; embeddedModel.remove();
        model = prepareModel(await new GLTFLoader().parseAsync(bytes.buffer, ''));
        modelCache.set('fine', model);
      } else {
        model = await loadModelQuality('fast', progress => {
          loadingMessage.textContent = progress.phase === 'prepare'
            ? '楼阁已载入 · 正在准备光影'
            : `正在载入楼阁 · ${progress.percent}%`;
        });
      }
      loadingMessage.textContent = '正在铺展山河与光影';
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

      // Plazas and paths now belong to the independently editable landscape GLB.

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

      const scenicPark = createScenicPark({ THREE, GLTFLoader, scene, renderer, assetURL, waterMaterial, waterUniforms });

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
        horizon: [new THREE.Color("#d0dbe0"), new THREE.Color("#c18f66")],
        sun: [new THREE.Color("#fff5e6"), new THREE.Color("#ffb66d")],
        hemiSky: [new THREE.Color("#d9e5e8"), new THREE.Color("#c4a18b")],
        hemiGround: [new THREE.Color("#827d73"), new THREE.Color("#70513e")],
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

      const daySunDirection = V(-0.48, 0.78, 0.44).normalize();
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
        hemisphere.intensity = mix(1.45, 1.13, amount);
        scene.environmentIntensity = mix(.28, .16, amount);

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
      let exteriorOverviewFramed = true;
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
      const exteriorBoxes = [];
      let interiorExplorer = null;
      const pointer = new THREE.Vector2();
      const raycaster = new THREE.Raycaster();
      const modelCenter = V(0, 50, 0);
      function registerModelScene() {
        layerGroups.length = 0;
        modelMeshes.length = 0;
        model.scene.traverse(object => {
          if (object.userData.displayLayer) {
            object.position.y = layerOffsets[object.userData.tier] * explosion;
            object.visible = tierFilter === 'all' || object.userData.tier === Number(tierFilter);
            layerGroups.push(object);
          }
          if (object.isMesh) {
            if (!object.userData.interactionReady) {
              object.material = object.material.clone();
              object.userData.baseEmissive = object.material.emissive?.clone();
              object.userData.interactionReady = true;
            }
            modelMeshes.push(object);
          }
        });
        model.scene.updateMatrixWorld(true);
        exteriorBoxes.length = 0;
        for (const mesh of modelMeshes) {
          const box = new THREE.Box3().setFromObject(mesh);
          box.translate(V(0, -(layerOffsets[mesh.userData.tier] || 0) * explosion * 1.4, 0));
          exteriorBoxes.push(box);
        }
        renderer.shadowMap.needsUpdate = true;
        interiorExplorer?.refreshExterior();
      }
      registerModelScene();

      const qualityButton = $('quality-toggle');
      qualityButton.hidden = !!embeddedModel;
      qualityButton.disabled = false;
      function updateQualityButton() {
        const fine = modelQuality === 'fine';
        qualityButton.textContent = '精细画质';
        qualityButton.setAttribute('aria-pressed', String(fine));
        qualityButton.setAttribute('aria-busy', 'false');
        qualityButton.title = fine ? '已开启精细画质，点击切回流畅画质' : '当前为流畅画质，点击加载精细模型';
      }
      updateQualityButton();
      qualityButton.addEventListener('click', async () => {
        const nextQuality = modelQuality === 'fine' ? 'fast' : 'fine';
        qualityButton.disabled = true;
        qualityButton.setAttribute('aria-busy', 'true');
        qualityButton.textContent = '载入 0%';
        try {
          // 下载期间保持当前场景运行，不重置镜头、分层或探索进度。
          const next = await loadModelQuality(nextQuality, progress => {
            qualityButton.textContent = progress.phase === 'prepare' ? '准备画质' : `载入 ${progress.percent}%`;
          });
          await renderer.compileAsync(next.scene, camera, scene);
          scene.remove(model.scene);
          model = next; modelQuality = nextQuality;
          registerModelScene();
          scene.add(model.scene);
          highlightPart(selectedPart);
          notify(nextQuality === 'fine' ? '精细画质已开启，可以近看瓦片与斗拱。' : '已切回流畅画质。');
        } catch (error) {
          console.warn('Model quality:', error);
          notify('精细模型暂未载入，可继续游览，稍后再试。');
        } finally {
          qualityButton.disabled = false;
          updateQualityButton();
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
        controls.enableDamping = !visitorExperience.reducedMotion;
      }
      function resetStructure() {
        interiorExplorer?.exit();
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
        controls.enabled = !interiorExplorer?.walking;
        if (!interiorExplorer?.walking) clearControlMomentum();
        $('player-controls').hidden = true;
        $('tour-counter').textContent = '';
        $('play-all').textContent = '启程 · 连游四境';
        $('play-poem').textContent = '听一首《登鹳雀楼》';
        if (clearCaption) showCaption('', '');
        setMode('自由漫游'); setProgress(0);
      }
      const viewNames = { tour: '自由漫游', park: '景区游园', explore: '建筑探索', poetry: '互动诗境', history: '古今故事', keepsake: '观景留念' };
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
        $('view-hint').textContent = next === 'explore' ? '点击构件或标记，靠近读一座楼'
          : window.innerWidth <= 720 ? '单指转动 · 双指缩放' : '拖拽转动视角 · 滚轮缩放';
        if (!keepMotion) setMode(viewNames[next]);
        requestAnimationFrame(resize);
      }
      document.querySelectorAll('[data-view]').forEach(button => {
        button.addEventListener('click', () => {
          if (button.dataset.view === view) return;
          switchView(button.dataset.view);
          if (view === 'tour') focusOverview();
          if (view === 'explore') focusOverview();
          if (view === 'park') selectParkStop('overview');
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
        if (visitorExperience.reducedMotion) duration = 0;
        return { age: 0, duration, from: camera.position.clone(), fromTarget: controls.target.clone(),
          to: position.clone(), toTarget: target.clone(), lift: bridgeLift(camera.position, position) };
      }
      function updateBridge(bridge, delta) {
        if (visitorExperience.reducedMotion) bridge.duration = 0;
        bridge.age = Math.min(bridge.duration, bridge.age + delta);
        const t = smooth(bridge.duration > 0 ? bridge.age / bridge.duration : 1);
        camera.position.lerpVectors(bridge.from, bridge.to, t);
        camera.position.y += Math.sin(Math.PI * t) * bridge.lift;
        controls.target.lerpVectors(bridge.fromTarget, bridge.toTarget, t);
        camera.lookAt(controls.target);
        return bridge.age >= bridge.duration;
      }
      function flyTo(position, target, { duration = 3.3, onArrive, label } = {}) {
        exteriorOverviewFramed = false;
        flight = { bridge: makeBridge(position, target, duration), onArrive };
        if (label) setMode(label, true);
      }
      function focusOverview({ duration = 2.4, label = viewNames[view] } = {}) {
        focusVisibleLayers({ duration, label });
      }

      function focusShowcase(kind) {
        haltMotion(); resetStructure(); closeDetail(); highlightPart(null); showCaption('', '');
        const front=kind==='front';
        setTime(false);
        $('hotspots').hidden=true;
        const target=front?V(0,35,32):anchorFor('column');
        const position=front?V(33,31,143):target.clone().add(V(10,1.8,29));
        const label=front?'楼前近景 · 拾级望楼':'檐下细看 · 柱廊与彩画';
        flyTo(position,target,{duration:2.8,label,onArrive:()=>setMode(label)});
      }
      $('showcase-front').addEventListener('click',()=>focusShowcase('front'));
      $('showcase-eaves').addEventListener('click',()=>focusShowcase('eaves'));

      let parkStop = 'overview';
      let parkOverviewFramed = false;
      const parkStops = new Map(SCENIC_PARK.waypoints.map(item => [item.id, item]));
      const parkBounds = new THREE.Box3(V(...SCENIC_PARK.bounds[0]).multiplyScalar(1.4), V(...SCENIC_PARK.bounds[1]).multiplyScalar(1.4));
      const parkTowerBounds = new THREE.Box3().setFromObject(model.scene);
      function parkViewingRect() {
        const width = Math.max(1, window.innerWidth), height = Math.max(1, window.innerHeight);
        const sidebar = document.querySelector('.sidebar').getBoundingClientRect();
        const topControls = document.querySelector('.top-controls').getBoundingClientRect();
        const bottom = width <= 720 ? Math.min(sidebar.top - 12, $('scene-tools').getBoundingClientRect().top - 10) : height - 76;
        return { width, height, left: width <= 720 ? 12 : sidebar.right + 24, right: width - 16,
          top: Math.min(bottom - 96, topControls.bottom + 16), bottom };
      }
      function parkOverviewCamera() {
        const item = parkStops.get('overview');
        const target = parkBounds.clone().union(parkTowerBounds).getCenter(V());
        const direction = V(-(item.position[0] - item.target[0]), item.position[1] - item.target[1], item.position[2] - item.target[2]).normalize();
        const right = V().crossVectors(camera.up, direction).normalize();
        const up = V().crossVectors(direction, right).normalize();
        const rect = parkViewingRect();
        const tangent = Math.tan(THREE.MathUtils.degToRad(camera.getEffectiveFOV()) / 2);
        const fitX = Math.max(.001, tangent * camera.aspect * (rect.right - rect.left) / rect.width * .94);
        const fitY = Math.max(.001, tangent * (rect.bottom - rect.top) / rect.height * .94);
        let distance = 100;
        function include(point) {
          const corner = point.sub(target), depth = corner.dot(direction);
          distance = Math.max(distance, depth + Math.abs(corner.dot(right)) / fitX, depth + Math.abs(corner.dot(up)) / fitY);
        }
        // Use the actual footprint so empty corners do not force an overly distant view.
        for (const [x, z] of SCENIC_PARK.footprint) {
          for (const y of [parkBounds.min.y, parkBounds.max.y]) include(V(x * 1.4, y, z * 1.4));
        }
        for (const x of [parkTowerBounds.min.x, parkTowerBounds.max.x]) for (const y of [parkTowerBounds.min.y, parkTowerBounds.max.y]) for (const z of [parkTowerBounds.min.z, parkTowerBounds.max.z]) {
          include(V(x, y, z));
        }
        return { position: target.clone().addScaledVector(direction, distance), target, distance };
      }
      for (const [index, id] of SCENIC_PARK.route.entries()) {
        const item = parkStops.get(id);
        const button = document.createElement('button');
        button.dataset.parkStop = id;
        button.setAttribute('aria-pressed', 'false');
        const number = document.createElement('span'); number.textContent = String(index + 1).padStart(2, '0');
        const title = document.createElement('span'); title.textContent = item.title;
        const note = document.createElement('small'); note.textContent = item.subtitle;
        title.append(note); button.append(number, title);
        button.addEventListener('click', () => selectParkStop(id));
        $('park-stops').append(button);
      }
      function selectParkStop(id) {
        const item = parkStops.get(id);
        if (!item) return;
        if (view !== 'park') switchView('park');
        haltMotion(); resetStructure(); closeDetail(); highlightPart(null); showPoem(false);
        parkStop = id;
        parkOverviewFramed = id === 'overview';
        scenicPark.group.visible = true; $('park-visible').checked = true;
        scenicPark.ensure();
        document.querySelectorAll('[data-park-stop]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.parkStop === id)));
        $('park-stop-label').textContent = item.title + ' · ' + item.subtitle;
        $('park-stop-note').textContent = item.text;
        const next = SCENIC_PARK.route[SCENIC_PARK.route.indexOf(id) + 1];
        $('park-next').textContent = next ? `下一站 · ${parkStops.get(next).title} →` : '回到景区总览 ↗';
        $('stage').dataset.parkStop = id;
        // Oblique views keep a clear sightline above the tree canopy and gate roof.
        const parkPoint = p => V(-p[0], p[1], p[2]).multiplyScalar(1.4);
        resize();
        const framing = id === 'overview' ? parkOverviewCamera() : { position: parkPoint(item.position), target: parkPoint(item.target) };
        flyTo(framing.position, framing.target,
          { duration: 3.4, label: '游园 · ' + item.title });
        renderer.shadowMap.needsUpdate = true;
      }
      $('park-overview').addEventListener('click', () => selectParkStop('overview'));
      $('open-park').addEventListener('click', () => selectParkStop('overview'));
      $('park-next').addEventListener('click', () => selectParkStop(SCENIC_PARK.route[SCENIC_PARK.route.indexOf(parkStop) + 1] || 'overview'));
      $('park-enter-building').addEventListener('click', () => {
        switchView('explore');
        $('enter-walk').click();
      });

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
        if (visitorExperience.reducedMotion) progress = [.6, .12, .48, 1][index];
        const t = smooth(progress);
        if (index === 0) {
          position.lerpVectors(V(410,274,580), V(235,156,335), t);
          target.lerpVectors(V(-125,26,-265), V(-15,45,-75), t);
        } else if (index === 1) {
          const angle = Math.PI * 2 * t;
          position.set(Math.sin(angle)*184, 82 + Math.sin(Math.PI*t)*9, Math.cos(angle)*184);
          target.set(0,50,0);
          const frame = fitVisitorBounds(THREE, parkTowerBounds, position.clone().sub(target), camera, parkViewingRect(), .94, exteriorBoxes);
          position.copy(frame.position); target.copy(frame.target);
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
        setMode(`${tour.paused ? tour.interrupted ? '已接管' : '已暂停' : visitorExperience.reducedMotion ? '静览中' : tour.continuous ? '连游中' : '巡航中'} · 第${name}境`, !tour.paused);
        $('tour-tip').textContent = tour.paused
          ? visitorExperience.reducedMotion ? '点击继续，回到本境的固定视角。' : '点击继续，从当前视角平滑接回导览。'
          : visitorExperience.reducedMotion ? '固定视角欣赏山河，也可手动转动或缩放。' : '拖拽或缩放可随时接管，随后可继续。';
      }
      function tourCaption(index) {
        return visitorExperience.reducedMotion ? [
          '从黄河东岸，远望楼阁与山河。',
          '静看楼阁，读懂高台、层檐与柱列的节奏。',
          '来到高处，让视线越过层檐。',
          '静赏落日长河，让四句唐诗回到风景里。'
        ][index] : EXPERIENCE.scenes[index].caption;
      }
      function startTour(index, { continuous = false, internal = false } = {}) {
        exteriorOverviewFramed = false;
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
        showCaption(`山河四境 · ${['壹','贰','叁','肆'][index]}`, tourCaption(index));
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
        $('hotspots').hidden=false;
        const item = EXPERIENCE.parts[key];
        const point = adjustedPoint || anchorFor(key, true);
        const offset = V(...item.offset);
        showDetail({ eyebrow: '建筑探索 · ' + item.glyph, title: item.title, lead: item.lead, paragraphs: item.paragraphs, audio: 'part-' + key, source: item.source });
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

      function focusVisibleLayers({ duration = 2.4, label } = {}) {
        $('hotspots').hidden=view!=='explore';
        const bounds = new THREE.Box3();
        const boxes = [];
        model.scene.updateMatrixWorld(true);
        for (const group of layerGroups) {
          if (!group.visible) continue;
          const futureDelta = layerOffsets[group.userData.tier] * explosionTarget * 1.4 - group.position.y * 1.4;
          group.traverse(mesh => {
            if (!mesh.isMesh) return;
            const box = new THREE.Box3().setFromObject(mesh);
            box.translate(V(0, futureDelta, 0)); bounds.union(box); boxes.push(box);
          });
        }
        if (bounds.isEmpty()) return;
        const frame = fitVisitorBounds(THREE, bounds, V(.58, .39, .85), camera, parkViewingRect(), .94, boxes);
        flyTo(frame.position, frame.target, { duration, label: label || (tierFilter === 'all' ? '楼阁结构 · 全楼' : '楼阁结构 · ' + ['台基与外阶','楼身一至三层','楼身四至五层','楼身六层与屋顶'][Number(tierFilter)]) });
        exteriorOverviewFramed = true;
      }
      $('explode-button').addEventListener('click', () => {
        interiorExplorer?.exit();
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
        interiorExplorer?.exit();
        haltMotion(); closeDetail(); highlightPart(null);
        tierFilter = button.dataset.tier;
        layerGroups.forEach(group => { group.visible = tierFilter === 'all' || group.userData.tier === Number(tierFilter); });
        document.querySelectorAll('[data-tier]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
        renderer.shadowMap.needsUpdate = true;
        focusVisibleLayers();
      }));
      function updateLayers(delta) {
        if (Math.abs(explosion - explosionTarget) < .0003) return;
        explosion += (explosionTarget - explosion) * (visitorExperience.reducedMotion ? 1 : 1 - Math.exp(-delta * 4.2));
        if (Math.abs(explosion - explosionTarget) < .0003) explosion = explosionTarget;
        layerGroups.forEach(group => { group.position.y = layerOffsets[group.userData.tier] * explosion; });
        model.scene.updateMatrixWorld(true);
        renderer.shadowMap.needsUpdate = true;
      }

      interiorExplorer = createInteriorExplorer({ THREE, GLTFLoader, scene, renderer, camera, controls, sound,
        exterior: () => model.scene, assetURL, flyTo, notify, showDetail, setMode,
        afterExit: focusOverview,
        onLayoutChange: resize,
        beforeEnter: () => {
          visitorExperience.expandPanel();
          exteriorOverviewFramed = false;
          haltMotion(); closeDetail(); highlightPart(null); showPoem(false); resetStructure(); setTime(false);
          explosion = 0; layerGroups.forEach(group => { group.position.y = 0; });
        }
      });

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
        document.documentElement.style.setProperty('--sidebar-top', sidebar.top + 'px');
        document.documentElement.style.setProperty('--sidebar-edge', sidebar.right + 'px');
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
        if (view !== 'explore' || interiorExplorer.active) return;
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
        if (interiorExplorer?.walking) return;
        exteriorOverviewFramed = false;
        parkOverviewFramed = false;
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
        if (view !== 'explore' || interiorExplorer.active || !start || start.id !== event.pointerId || event.button !== 0
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
        if (visitorExperience.covered || event.defaultPrevented) return;
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
          $('download-postcard').href = postcardURL;
          $('postcard-status').textContent = '明信片包含当前视角、所选诗句与已收集的印章。';
          $('postcard-dialog').showModal();
        } catch (error) {
          console.error('Postcard:', error); notify('明信片暂未生成，请稍后再试一次。');
        } finally { capturing = false; $('capture-postcard').disabled = false; }
      });
      $('download-postcard').addEventListener('click', event => {
        if (!postcardURL) { event.preventDefault(); return; }
        $('postcard-status').textContent = '如未开始下载，可在打开的图片上保存；手机也可长按图片保存。';
      });
      $('close-postcard').addEventListener('click', () => $('postcard-dialog').close());
      $('retake-postcard').addEventListener('click', () => $('postcard-dialog').close());
      window.addEventListener('pagehide', () => { if (postcardURL) URL.revokeObjectURL(postcardURL); });

      function resize() {
        const width = Math.max(1, window.innerWidth), height = Math.max(1, window.innerHeight);
        const touchInput = width <= 720 || matchMedia('(pointer: coarse)').matches;
        const exteriorHint = touchInput ? '单指转动 · 双指缩放' : '拖拽转动视角 · 滚轮缩放';
        if (!tour) $('tour-tip').textContent = exteriorHint;
        if (!interiorExplorer?.active) $('view-hint').textContent = view === 'explore' ? '点击构件或标记，靠近读一座楼' : exteriorHint;
        renderer.domElement.setAttribute('aria-label', interiorExplorer?.walking ? '鹳雀楼楼内场景，拖动环视，使用方向按钮行走' : '鹳雀楼三维场景，' + exteriorHint);
        refreshLayoutBounds();
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, matchMedia('(pointer: coarse)').matches ? 1.25 : 1.6, Math.sqrt(2800000 / (width * height))));
        renderer.setSize(width, height); camera.aspect = width / height;
        if (interiorExplorer?.active) interiorExplorer.layout();
        else {
          const rect = parkViewingRect();
          camera.setViewOffset(width, height, (width - rect.left - rect.right) / 2, (height - rect.top - rect.bottom) / 2, width, height);
        }
        camera.updateProjectionMatrix(); refreshLayoutBounds();
        if (!interiorExplorer?.active) controls.maxDistance = Math.max(1450, parkOverviewCamera().distance * 1.12);
      }
      function reframeLayout() {
        resize();
        if (view === 'park' && parkOverviewFramed) selectParkStop('overview');
        else if (exteriorOverviewFramed && !interiorExplorer?.active && !tour) focusOverview({ duration: 0 });
        else if (interiorExplorer?.active && !interiorExplorer.walking) interiorExplorer.reframe();
      }
      window.addEventListener('resize', reframeLayout, { passive: true });
      let sidebarResizeFrame = null;
      const sidebarObserver = new ResizeObserver(() => {
        cancelAnimationFrame(sidebarResizeFrame);
        sidebarResizeFrame = requestAnimationFrame(reframeLayout);
      });
      sidebarObserver.observe(document.querySelector('.sidebar'));
      resize();
      visitorExperience.connect({
        onTour: () => startTour(0, { continuous: true }),
        onHome: () => {
          switchView('tour'); closeSoundSettings();
          focusOverview({ duration: 1.8 });
          renderer.domElement.focus({ preventScroll: true });
        },
        onPanelChange: reframeLayout,
        onMotionChange: () => {
          clearControlMomentum();
          const descriptions = visitorExperience.reducedMotion
            ? ['望河 · 静观大河', '观楼 · 静赏层檐', '临高 · 固定视角观景', '入诗 · 落日长河']
            : ['望河 · 远景入境', '观楼 · 环楼一周', '临高 · 沿楼外侧观景', '入诗 · 落日长河'];
          sceneButtons.forEach((button, index) => { button.querySelector('.scene-description').textContent = descriptions[index]; });
          if (tour) {
            updatePlayer();
            if (tour.index !== 3 || tour.elapsed < 7.1) showCaption(`山河四境 · ${['壹','贰','叁','肆'][tour.index]}`, tourCaption(tour.index));
          }
        },
        onCoverChange: covered => {
          if (covered) {
            interiorExplorer.suspendInput();
            if (tour) pauseTour();
            else if (flight || poetrySequence) interruptMotion();
          }
          sound.visibility(covered || document.hidden);
        }
      });
      focusOverview({ duration: 0 });
      let previousTime = performance.now();
      let waterTime = 0;
      let firstFrame = true;
      document.addEventListener('visibilitychange', () => {
        previousTime = performance.now(); sound.visibility(document.hidden || visitorExperience.covered);
      });
      renderer.setAnimationLoop(now => {
        const delta = Math.min(Math.max((now - previousTime) / 1000, 0), .05);
        previousTime = now;
        if (document.hidden || (!firstFrame && visitorExperience.covered)) return;
        if (!visitorExperience.reducedMotion) waterTime += delta;
        waterUniforms.uTime.value = waterTime;
        scenicPark.tick();
        if (Math.abs(requestedLight - lightAmount) > .0001) {
          lightAmount += (requestedLight - lightAmount) * (visitorExperience.reducedMotion ? 1 : 1 - Math.exp(-delta * 1.6));
          if (Math.abs(requestedLight - lightAmount) < .0001) lightAmount = requestedLight;
          applyLighting(lightAmount);
        }
        updateLayers(delta);
        interiorExplorer.tick(delta);
        const toured = interiorExplorer.walking || updateTour(delta);
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
        fillLight.intensity = mix(.6, .45, lightAmount) + (view === 'explore' ? .3 : 0);
        sound.tick(lightAmount, camera.position.z < 0 ? .9 : tour?.index === 0 ? .7 : .1, view === 'explore');
        sky.position.copy(camera.position);
        // Keep distant surfaces stable even when the same view is used for a postcard.
        // Sections orbit at a distance too; only first-person walking needs the close near plane.
        const orbitDistance = interiorExplorer.walking ? 0 : camera.position.distanceTo(controls.target);
        const near = interiorExplorer.walking ? .35 : clamp(orbitDistance / 35, .35, 75);
        if (Math.abs(camera.near - near) > .02) { camera.near = near; camera.updateProjectionMatrix(); }
        scene.fog.density = mix(.00030, .00036, lightAmount) * Math.min(1, 1000 / Math.max(1, orbitDistance));
        renderer.render(scene, camera);
        updateHotspots();
        if (firstFrame) { firstFrame = false; loading.classList.add('ready'); visitorExperience.ready(); }
      });

    }
