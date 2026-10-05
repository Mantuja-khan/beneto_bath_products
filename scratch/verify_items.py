import re

with open('src/data/collections/allieds.ts', encoding='utf-8') as f:
    allieds = f.read()

wcp_matches = re.findall(r'id:\s*"(allied-[^"]+)"', allieds)
print(f"Total allied- items in allieds.ts: {len(wcp_matches)}")
for m in wcp_matches:
    print(f" - {m}")

with open('src/data/collections.ts', encoding='utf-8') as f:
    colls = f.read()

print(f"WCP in collections.ts: {len(re.findall(r'id:\s*\"wcp-[^\"]+\"', colls))}")
print(f"CCP in collections.ts: {len(re.findall(r'id:\s*\"ccp-[^\"]+\"', colls))}")
print(f"NZJ in collections.ts: {len(re.findall(r'id:\s*\"nzj-[^\"]+\"', colls))}")
