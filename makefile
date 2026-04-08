# Usage: make git REPO_NAME=restaurant-pos

GITHUB_USER := kscode-global

git:
ifndef REPO_NAME
	$(error REPO_NAME is not set. Usage: make git REPO_NAME=<repo-name>)
endif
	git init
	git add -A
	git commit -m "init"
	git branch -M main
	git remote add origin https://github.com/$(GITHUB_USER)/$(REPO_NAME).git
	git push -u origin main
