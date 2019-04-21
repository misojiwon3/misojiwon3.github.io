---
layout: default
type: post
category: development
title:  "markdown sample"
subtitle: "마크다운 샘플"
tag: "Sample"
date: "2019-02-21"
---

# H1
## H2
### Garbage Collection
#### H4
##### H5
###### H6
##### H5
#### H4
### H3
## H2
# H1

Thread.sleep() 하는 부분에서 li 변수에 새로운 ArrayList 를 생성하도록 해보자. 그리고 몇번째 루프에서 가비지 컬렉션이 수행되는지 확인하기 위해 프린트도 하나 찍어보자. 무한루프를 돌면서 중간중간에 List 를 가비지가 되도록 만들어서 가비지 컬렉션이 수행되면 프로그램은 죽지않고 계속해서 돌아갈 것이다. 코드는 아래와 같다.

---
**굵은 체**  
*기울임*  
<U>밑줄</U>  
~~취소선~~  

[감기는](www.naver.com)


* 목록1
* 목록2
* 목록3
	* 목록3-1
	* 목록3-2
		* 목록3-2-1
		* 목록3-2-1
		    * 목록3-2-1
		        * 목록3-2-1
		            * 목록3-2-1

1. 숫자목록1
	1. 123
		1. 123123
			1. 123124
				1. 134131
2. 숫자목록2
3. 숫자목록3

> Garbage collection was invented by John McCarthy around 1959 to simplify manual memory management in Lisp.

> 인용2  
> 인용2


중간에 강조하는 `코드`를 삽입할 수 있다

```
코드 블록
```
