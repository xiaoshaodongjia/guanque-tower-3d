"""Export the published static website as one HTML, using the Python standard library."""
from pathlib import Path
import argparse, base64, json, re

ROOT=Path(__file__).resolve().parent.parent
parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('--output',type=Path,default=ROOT/'dist/guanque-tower.html')
args=parser.parse_args()
page=(ROOT/'index.html').read_text(encoding='utf-8')
# All local preloads belong to the hosted edition. The export embeds full detail.
page=re.sub(r'<link data-online-preload\b[^>]*>','',page)
css=(ROOT/'assets/experience-v2.css').read_text(encoding='utf-8')
script=(ROOT/'assets/experience-v2.js').read_text(encoding='utf-8')
page,count=re.subn(r'<link rel="stylesheet" href="\./assets/experience-v2\.css[^\"]*">',lambda _: '<style>\n'+css+'\n</style>',page)
assert count==1,'Expected one stylesheet'
page,count=re.subn(r'<script type="module" src="\./assets/experience-v2\.js[^\"]*"></script>',lambda _: '<script type="module">\n'+script+'\n</script>',page)
assert count==1,'Expected one application script'
imports={'imports':{'three':'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js','three/addons/':'https://cdn.jsdelivr.net/npm/three@0.170.0/examples/jsm/'}}
page,count=re.subn(r'<script type="importmap">.*?</script>',lambda _: '<script type="importmap">'+json.dumps(imports)+'</script>',page,flags=re.S)
assert count==1,'Expected one import map'
model=base64.b64encode((ROOT/'assets/guanque-exploration.glb').read_bytes()).decode('ascii')
interior=base64.b64encode((ROOT/'assets/guanque-interior.glb').read_bytes()).decode('ascii')
audio={'audio/'+p.name:'data:audio/mpeg;base64,'+base64.b64encode(p.read_bytes()).decode('ascii') for p in sorted((ROOT/'assets/audio').glob('*.mp3'))}
assets='<script id="guanque-model" type="application/octet-stream">'+model+'</script>\n'
assets+='<script id="guanque-interior" type="application/octet-stream">'+interior+'</script>\n'
assets+='<script id="guanque-audio" type="application/json">'+json.dumps(audio,separators=(',',':'))+'</script>\n'
page=page.replace('<script type="module">',assets+'<script type="module">',1)
args.output.parent.mkdir(parents=True,exist_ok=True)
args.output.write_text(page,encoding='utf-8')
print(f'Exported {args.output.name}: {args.output.stat().st_size:,} bytes')
