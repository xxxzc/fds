from github import Github
import re

course = {}

# course info
course["name"] = "Data Science I"
course["code"] = "cs109a"
course["host"] = "Harvard"
course["period"] = 90
course["website"] = "https://cs109.github.io/a-2017"
course["syllabus"] = "https://github.com/cs109/a-2017"

# course contents
course["contents"] = []

# token
g = Github("d69e8ce9b5b6933b89ecb3ac120f163b4cfa9f20")

# get repo contents
repo = g.get_repo("cs109/a-2017")
contents = repo.get_contents("/Lectures")

for content in contents:
    # content is ContentFile
    # see https://pygithub.readthedocs.io/en/latest/github_courseects/ContentFile.html

    if content.name[0] != 'L':
        continue

    file_type = (content.name + '.').split('.')[1]
    if file_type == "":
        file_type = "folder"

    obj = {
        "name": " ".join(re.findall("[A-Z][a-z]+", content.name)[1:]),
        "lec": int(re.findall("[0-9]+", content.name)[0]),
        "links": []
    }

    obj["links"].append({
        "name": content.name,
        "type": file_type,
        "url": content.download_url or content.html_url
    })

    # if is a folder
    if file_type == "folder":
        print(repo.get_contents(content.path))

    course["contents"].append(obj)

# print(course)

import json
with open('./json/cs109a.json', 'w') as f:
    json.dump(course, f, ensure_ascii=False)
