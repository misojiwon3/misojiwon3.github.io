---
layout: default
type: post
category: development
title:  "리눅스 계정"
subtitle: "리눅스 계정 목록 조회 및 생성"
tag: "linux"
date: "2019-09-07"
---

### 계정 목록 보기

```shell
cat /etc/passwd

nobody:*:-2:-2:Unprivileged User:/var/empty:/usr/bin/false
root:*:0:0:System Administrator:/var/root:/bin/sh
(생략)
```

### 계정 생성

```shell
# Ubuntu, SUSE, Arch
useradd [계정명] -m -s /bin/bash

# CentOS
useradd [계정명]
```

### 그룹 지정하여 계정 생성

```shell
# 그룹명이 없으면 그룹 생성 후 계정 생성
useradd [계정명] -G 그룹명

# 기존 그룹에 계정 생성
useradd [계정명] -g 그룹명
```

### UID 지정하여 생성

```shell
useradd [계정명] -u [사용자아이디]
```

