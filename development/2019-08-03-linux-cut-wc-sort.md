---
layout: default
type: post
category: development
title:  "리눅스 cut, wc, sort"
subtitle: "리눅스 문자열 자르기, 문자 수 세기, 텍스트를 행 단위로 정렬하기"
tag: "linux"
date: "2019-08-03"
---

### cut
* cat, out 등에 의한 출력을 라인별로 필요한 부분만 추출  
* 로그같은 대량의 파일 분석 등에 유용  

```
-d : delimiter
-f : field 번호
-c : 문자열 번호

cut -d [delimiter] -f [필드순번] [filename]
$ cut -d ":" -f 3 debug.log

cut -c [문자열범위]
$ cut -c 1-5
```

### wc
* 지정된 파일이나 검색된 출력 결과의 라인, 단어, 문자 수를 세는 명령어  

```
-l : 전체 라인 수
-w : 전체 단어 수 
-c : 전체 문자 수

wc [option] [filename]
$ wc -l debug.log
	14435

grep 'word' [filename] | wc [option]
$ grep 'DEBUG' debug.log | wc -l
	7423
```


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

