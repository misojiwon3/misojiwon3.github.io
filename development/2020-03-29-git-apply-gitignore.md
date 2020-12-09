---
layout: default
type: post
category: development
title:  ".gitignore 파일 작성 및 적용"
subtitle: ".gitignore"
tag: "git"
date: "2020-03-29"
---


# .gitignore 파일 작성 및 적용

Git remote에 업로드시키고 싶지 않은 파일이 있을 경우 .gitignore에 등록한다.

1. repository 최상위 directory에 `.gitignore` 이름으로 파일 생성  
2. 제외하고자 하는 파일, 디렉토리 이름 입력  
    ```
    target/logs
    *.iml
    .lib
    ```

3. git이 tracking 하고 있는 사항들을 초기화하기 위해 다음 명령 사용  
    (다음 명령을 사용하지 않으면 .gitignore에 등록하기 전에 변경했던 사항들은 그대로 remote에 적용된다)

    ```bash
    git rm -r --cached .
    git add .
    git commit -m "message"
    ```