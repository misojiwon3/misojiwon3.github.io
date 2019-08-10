---
layout: default
type: post
category: development
title:  "리눅스 sort"
subtitle: "리눅스 텍스트를 행단위로 정렬할 때 사용하는 명령어"
tag: "linux"
date: "2019-08-10"
---

### sort
* cat, out 등에 의한 출력을 행별로 정렬    
* 파일의 텍스트를 정렬  

```
$ cat sort.txt
1 2
5 3
4 1
3 5
2 4
```

```
$ sort sort.txt

1 2
2 4
3 5
4 1
5 3
```

```
-r : 출력 순서를 역순으로 정렬

$ sort -r sort.txt
5 3
4 1
3 5
2 4
1 2
```

```
-k : 입력된 필드 번호를 기준으로 정렬

$ sort -k 2 sort.txt

4 1
1 2
5 3
2 4
3 5
```

```
-u : 중복행 제거 후 정렬

$ cat sort.txt
1 2
5 3
4 1
4 1
3 5
2 4

$ sort -u sort.txt

1 2
2 4
3 5
4 1
5 3

```