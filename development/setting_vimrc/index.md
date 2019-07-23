---
layout: default
type: post
category: etc
title:  ".vimrc 파일 설정"
subtitle: "기본적인 설정들을 위한 .vimrc 파일 설정 방식"
tag: "vim"
date: "2016-12-01"
---

문법 강조
```
" Syntax Highlighting
if has("syntax")
    syntax on
endif
```

자동 indent 설정
```
set autoindent
set cindent
```

자동 줄번호 입력
```
set nu
```

Syntax Highlighting 변경
원하는 .vim 파일 다온로드 후 해당 경로로 이동
```
mv jellybeans.vim /usr/share/vim/vim80/colors/
```
이동 후 다음을 ~/.vimrc에 입력
```
colorscheme jellybeans
```

마지막으로 수정한 곳에 커서 위치
```
" 마지막으로 수정된 곳에 커서를 위치함
au BufReadPost *
\ if line("'\"") > 0 && line("'\"") <= line("$") |
\ exe "norm g`\"" |
\ endif

```

파일 인코딩을 한국어로 설정
```
" 파일 인코딩을 한국어로
if $LANG[0]=='k' && $LANG[1]=='o'
set fileencoding=korea
endif
```

그 외
```
set number    "line 표시를 해줍니다.
set ai    "auto indent
set si      "smart indent
set cindent    "c style indent
set shiftwidth=4 " shift를 4칸으로 ( >, >>, <, << 등의 명령어)

set tabstop=4  "tab을 4칸으로
set ignorecase   " 검색시 대소문자 구별하지않음
set hlsearch  " 검색시 하이라이트(색상강조)
set expandtab    " tab 대신 띄어쓰기로
set background=dark " 검정배경을 사용할 때, (이 색상에 맞춰 문법 하이라이트 색상이 달라집니다.)
set nocompatible  " 방향키로 이동가능
set fileencodings=utf-8,euc-kr  " 파일인코딩 형식 지정
set bs=indent,eol,start  " backspace 키 사용 가능
set history=1000  " 명령어에 대한 히스토리를 1000개까지
set ruler       " 상태표시줄에커서의 위치 표시
set nobackup   "백업파일을 만들지 않음
set title        " 제목을 표시
set showmatch  " 매칭되는 괄호를 보여줌
set nowrap     " 자동 줄바꿈 하지 않음
set wmnu     " tab 자동완성시 가능한 목록을 보여줌


syntax on  " 문법 하이라이트 킴"
```

