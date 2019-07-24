---
layout: default
type: post
category: development
title:  "MySql Dump"
subtitle: "MySql DB 백업 및 복구"
tag: "database"
date: "2019-07-24"
---

```
# 전체 dump
mysqldump -u [user name] -p [database name] > [filename].sql

# CREATE문 앞에 DROP문 추가
mysqldump --add-drop-database -u [user name] -p [database name] > [filename].sql

# 특정 Table dump
mysql -u [user name] -p [database name] [table name] > [filename].sql

# 특정 Table CREATE문 앞에 DROP문 추가
`mysqldump --add-drop-table -u [user name] -p [database name] > [filename].sql`

# schema 만 export
mysqldump --no-data -u [user name] -p [database name] > [filename].sql

# 기본 charset 설정
mysqldump -u [user name] -p [database name] --default-character-set=utf8 > [filename].sql

# CREATE문 앞에 DROP문 추가
mysqldump --add-drop-database -u [user name] -p [database name] > [filename].sql

# Dump 파일을 통한 Import 
mysql -u [user name] -p [password] [database name] < [filename].sql
```