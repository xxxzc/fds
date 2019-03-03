from github import Github
import re

course = {}

# course info
course["name"] = "Data Science in Practice"
course["code"] = "COGS108"
course["host"] = "UCSD"
course["period"] = 80
course["website"] = "https://github.com/COGS108/"
course["syllabus"] = "https://github.com/COGS108/Overview/raw/master/COGS108-Syllabus.pdf"

# course contents
course["contents"] = []

# token
g = Github("d69e8ce9b5b6933b89ecb3ac120f163b4cfa9f20")

# get repo contents
repo = g.get_repo("COGS108/Lectures")
contents = repo.get_contents("")

for content in contents:
    # content is ContentFile
    # see https://pygithub.readthedocs.io/en/latest/github_courseects/ContentFile.html

    if content.name == "README.md":
        continue
    file_type = (content.name + '.').split('.')[1]
    if file_type == "":
        file_type = "folder"

    obj = {
        "name": " ".join(re.findall("[A-Z][a-z]*", content.name)),
        "lec": int(content.name.split("-")[1]),
        "links": []
    }

    obj["links"].append({
        "name": content.name,
        "type": file_type,
        "url": content.download_url or content.html_url
    })

    course["contents"].append(obj)

import json
with open('./json/cogs108.json', 'w') as f:
    json.dump(course, f, ensure_ascii=False)
