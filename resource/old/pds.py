from bs4 import BeautifulSoup
import requests

base_url = "http://www.datasciencecourse.org"
dir = "/lectures"

res = requests.get(base_url+dir)
soup = BeautifulSoup(res.text, "html.parser")

course = {}
course["name"] = "Practical Data Science"
course["code"] = "PDS"
course["host"] = "CMU"
course["period"] = 80
course["website"] = base_url
course["syllabus"] = base_url + dir

# course contents
course["contents"] = []

lec = 1

for tr in soup.tbody.find_all('tr'):
    # for each lecture
    tds = tr.find_all('td')
    links = []

    for td in tds[2:5]:
        if td.string != None:
            continue

        href = td.find('a').attrs['href']
        name = href.split('/')[-1]
        _type = "note"
        if "Viewer" in name:
            _type = "video"
        elif "." in name:
            _type = "pdf"

        if 'http' not in href:
            href = base_url + href

        links.append({
            "name": name,
            "type": _type,
            "url": href
        })

    if not links:
        continue

    course["contents"].append({
        "name": str(tds[1].string),
        "lec": lec,
        "links": links
    })

    lec += 1

import json
with open('./json/cmu.json', 'w') as f:
    json.dump(course, f, ensure_ascii=False)
