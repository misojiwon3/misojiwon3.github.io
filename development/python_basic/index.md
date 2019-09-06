---
layout: default
type: post
category: development
title:  "Python Basic"
subtitle: "파이썬의 기초 문"
tag: "python"
date: "2019-07-28"
---

## 기본 연산
```python
# 덧셈
1 + 1
2

# 뺄셈
7 - 3
4

# 곱셈
2 * 4
8

# 나눗셈
10 / 3
3.3333333333333335

# 모듈러
13 % 5
3

# 몫 구하기
20 // 3
6

# 동등 연산
1 + 2 == 3
True

1 + 4 == 3
False

# 부등 연산
1 + 2 != 4
True

# 비교 연산
1 + 2 > 4
False
```

### and, or 조건 사용하기

```python
12 % 2 == 0 and 12 % 3 == 0
True

14 % 2 == 0 and 14 % 3 == 0
False

14 % 2 == 0 or 14 % 3 == 0
True

14 % 2 == 0 and 14 % 3 == 0 and 15 % 4 == 0
False
```


## 변수
* 변수명은 숫자로 시작할 수 없음
* 언더바(_) 를 제외한 특수문자를 변수명에 사용할 수 없음
* 띄어쓰기가 사용할 수 없음

```python
a = 3
b = 5
a + b

8
```


## 문자열
* 숫자 외 다양한 데이터
* 텍스트  

```python
# int == integer
# str == string
"Hello World"

'Hello World'
```

```python
print("Hello World!")

Hello World!
```

```python
a = 6
print(a)
print("a")
print('a')

6
a
a
```

```python
print("Hanseung's Hobby?")

Hanseung's Hobby?
```

```python
'Hanseung\'s Hobby?'

"Hanseung's Hobby?"
```

```python
# 문자열은 대소문자를 구분합니다.
print("C" == "c")
print("C" == "C")
print("1" == 1)

False
True
False
```

```python
# 서로 다른 타입으로 연산을 시도하면 TypeError 발생
1 + "2"

    ---------------------------------------------------------------------------
    TypeError                                 Traceback (most recent call last)
    <ipython-input-37-db092cb74d2d> in <module>
    ----> 1 1 + "2"
    TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

## Boolean
```python
# Boolean 표현시에는 첫 글자는 대문자, 그 뒤 문자는 소문자여야 한다
False

False
```

```python
FALSE

    ---------------------------------------------------------------------------
    NameError                                 Traceback (most recent call last)
    <ipython-input-41-d5612866378f> in <module>
    ----> 1 FALSE
    NameError: name 'FALSE' is not defined
```

```python
false

    ---------------------------------------------------------------------------
    NameError                                 Traceback (most recent call last)
    <ipython-input-142-b73d74fcede9> in <module>
    ----> 1 false
    NameError: name 'false' is not defined
```


## 문자열(심화)
```python
message = "Hello World!"
print(message)
Hello World!

message[0]
'H'

message[1]
'e'

# 맨 마지막 인덱스에 있는 문자를 가져온다.
message[-1]
'!'

# 문자열 길이 구하기
len(message)
12
```

## 문자열 슬라이싱
```python
# [:]은 전체 문자열을 가져옵니다.
message[:]
'Hello World!'

# [시작인덱스:끝인덱스+1]
message[0:3]
'Hel'

# 첫 인덱스부터 4개
message[:4]
'Hell'

# 4번 인덱스부터 끝 인덱스까지
message[4:]
'o World!'

# 뒤에서 3개
message[-3:]
'ld!'

# 뒤에서 3개 제외한 나머지
message[:-3]
'Hello Wor'

"H" in message
True

message.lower()
'hello world!'
```


## 리스트
* 여러 데이터를 담는 자료형

```python
odd = [1, 3, 5, 7, 9]
odd
[1, 3, 5, 7, 9]

odd[0]
1
```

### 리스트 슬라이싱
```python
# 리스트 안의 모든 값을 가져옵니다.
odd[:]
[1, 3, 5, 7, 9]

odd[0:4]
[1, 3, 5, 7]

# 앞의 숫자를 생략하면 시작 인덱스부터 가져옵니다.
odd[:4]
[1, 3, 5, 7]

# 3번 인덱스부터 끝 인덱스까지 가져옵니다.
odd[3:]
[7, 9]

# 뒤에서 2개만 가져옵니다.
odd[-2:]
[7, 9]

1 in odd
True

2 in odd
False
```


### 리스트 메소드

```python
odd.append(11)
odd
[1, 3, 5, 7, 9, 11]

odd.reverse()
odd
[11, 9, 7, 5, 3, 1]
```


## 제어문
* 들여쓰기(indent)를 사용하여 표현
* 조건문과 반복문 뒤에는 콜론(:)이 들어가고 콜론 바로 아랫줄에는 indent된 문장이 필요

### 조건문(if)
```python
age = 13
if age < 5:
    print("아이")
elif age < 18:
    print("학생")
else:
    print("어른")

학생

score = 50
if score >= 60:
    message = "success"
else:
    message = "failure"
    
failure

# 한줄로도 표현 가능
message1 = "success" if score >= 60 else "failure"
print(message1)
failure
```


### 반복문(for)
```python
basket = ["apple", "banana", "chicken", "cherry", "pineapple"]
basket

['apple', 'banana', 'chicken', 'cherry', 'pineapple']

# 다음 동작을 단순하게 표현 가능
print(basket[0])
print(basket[1])
print(basket[2])
print(basket[3])
print(basket[4])

for product in basket:
    print(product)

apple
banana
chicken
cherry
pineapple

# 한줄로 표현 가능
for product in basket: print(product)

apple
banana
chicken
cherry
pineapple

# range(n) : 0 ~ n-1
for i in range(3):
    print(i)

0
1
2

# indent에 따른 구문 실행 결과
for i in range(10):
    if i == 5:
        # if문 안에서 실행됩니다.
        print("bang!")
    # for 문 안에서 실행 됩니다.
    print(i)
    
# for문 밖에서 실행됩니다.
print("complete")

0
1
2
3
4
bang!
5
6
7
8
9
complete
```


## 함수
```python
# def == define의 약자
def multifly(a, b):
    c = a * b
    return c
```

```python
multifly(2, 3)
6
```



## Type
```python
>>> my_int = 1
>>> type(my_int)
<class 'int'>
>>> float(my_int)
1.0
>>> my_float = float(my_int)
>>> type(my_float)
<class 'float'>
>>> my_str = 'coding'
>>> list(my_str)
['c', 'o', 'd', 'i', 'n', 'g']
```


## Formatting

```python
>>> 'My age is %d' % 33
'My age is 33'
>>> 'My Name is %s' % 'hanseung'
'My Name is hanseung'
```

## 주석

```python
# 주석은 # 로 표시
```