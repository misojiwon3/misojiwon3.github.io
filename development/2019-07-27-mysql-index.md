---
layout: default
type: post
category: development
title:  "MySql Index"
subtitle: "Index 관리"
tag: "database"
date: "2019-07-27"
---

```
# Index 조회
show index from [table name];

# Index 추가
alter table [table name] add index [index name] (column1, column2, ...);

# Unique Index 추가
alter table [table name] add unique index [index name] (column1, column2, ...);

# Index 삭제
alter table [table name] drop index [index name];
```
