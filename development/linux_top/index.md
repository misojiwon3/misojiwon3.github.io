---
layout: default
type: post1
category: development1
title:  "리눅스 top 명령"
subtitle: "October 14, 2019"
tag: "linux"
date: "2016-10-22"
---

### 기본 정보
* 리눅스 시스템의 상태 및 성능 확인 (CPU, Memory, Status 등)
* /proc/stat 의 내용을 사용자가 보기 쉽도록 파싱해서 보여줌

### 항목 설명
[image:3140B4BE-FFA3-4FEB-888C-54B99E99DBDF-291-000004D18EC58EFB/스크린샷 2019-04-17 오전 10.21.32.png]

|Value|Description|
|---|---|
|10:15:57|현재 서버의 시간|
|up 29 days,|18:17 서버 기동된지 29일 18시간 17분 지남|
|7 users,|7명의 사용자가 접속 중|
|load average: 0.87, 0.71, 0.76|실행중인 프로세스 수 / 대기중인 프로세스 수의 1분 5분 15분 평균치|
|Tasks: 192 total,|전체 실행된 프로세스 수|
|1 running, |현재 실행중인 프로세스 수| 
|191 sleeping,|유휴상태에 있는 프로세스 수|
|0 stopped,|종료된 프로세스 수|
|0 zombie|좀비 프로세스 수 (부모 프로세스가 종료 되었음에도 종료되지 않은 자식 프로세스, 좀비 프로세스가 많아지면 성능에 영향을 끼칠 수 있으며 init 프로세스에 의해 관리된다)|
|%Cpu(s): 2.3 us,|user : 기본값 혹은 그보다 높은 우선순위로 사용자 공간에서 실행된 시간 (user mode)|
|5.0 sy,|system : kernel 내에서 wa, id, hi, si 를 제외한 사용 시간|
|0.0 ni,|nice : 기본값보다 낮은 우선순위로 사용자 공간에서 실행된 시간 (low priority user mode)|
|91.9 id,|idle : I/O를 기다리는 프로세스가 없을 때의 대기 시간|
|0.0 wa,|I/O wait : I/O 기다리는 프로세스가 있을 때, 해당 프로세스가 종료될 때 까지의 대기 시간|
|0.0 hi,|hard interrupt : interrupt handler 에서 사용한 시간(top halves)|
|0.8 si,|soft interrupt : hard interrupt 에서 미뤄놓은 작업을 수행한 시간 (bottom halves)|
|0.0 st|steal : virtual cpu에 의해 비자발적으로 사용된 대기 시간|
|KiB Mem : 16267424 total,|실제 메모리의 전체 용량|
|219520 free,|사용되지 않는 메모리 용량|
|7423008 used,|프로세스에 의해 사용되고 있는 메모리 용량|
|8624896 buff/cache|버퍼된 메모리 용량|
|KiB Swap: 8257532 total,|스왑 메모리의 전체 용량|
|8094032 free,|남아있는 스왑 메모리 용량|
|163500 used.|사용된 스왑 메모리 용량|
|7716248 avail Mem|사용 가능한 스왑 메모리 용량|

[image:0748D197-CD91-4AE2-8B6E-8889435A904C-291-0000083E60E6A61B/DA7FF63F-F117-4BB4-AF7E-64C4C43A9B07.png]
```
PID   # 프로세스 ID
USER   # 프로세스를 실행시킨 사용자의 ID
PR   # 프로세스 우선순위
NI   # NICE값. 음수이면 우선순위가 높음
VIRT   # 가상 메모리 사용량 (swap + res)
RES   # 프로세스가 사용하고 있는 물리 메모리 용량 (resident size)
SHR   # 다른 프로세스의 공유하고 있는 메모리 용량 (e.g. libraries)
S   # 프로세스 상태 (D: Uninterruptiable sleep, S: Sleeping, R: Running, W: Swapped out Processes, T: Traceed or Stopped, Z: Zombie)
%CPU   # 프로세스의 CPU 사용률
%MEM   # 프로세스의 메모리 사용률
TIME+   # 프로세스가 실행된 시간
COMMAND   # 프로세스를 실행한 명령어
```

### 명령어 옵션
* top 실행 전 옵션
```
top -b   # 명령 시 프로세스 정보 확인 (batch 모드)
top -n [실행 횟수]   # top 실행 주기 설정 (반복 횟수)
```

* top 실행 후 명령어
```
shift + p   # CPU 사용률을 내림차순으로 정렬
shift + m   # 메모리 사용률을 내림차순으로 정렬
shift + t   # 실행 시간을 내림차순으로 정렬
spacebar   # 즉시 갱신
k   # 종료할 PID를 입력하여 프로세스 kill 수행. signal은 9 입력
PID to signal/kill [default pid = 1686] [process id]
d   # top 갱신 주기 설정
Change delay from 3.0 to  [delay time]
u   # 특정 사용자의 프로세스 확인
Which user (blank for all) [user name]
c   # 명령 옵션 보기 
1   # CPU 각 core 별 사용량 확인
b
f
a
...
** 명령어 추가 정리 필요
```

* ps와 top의 차이점
	* ps는 ps한 시점에 proc에서 검색한 cpu 사용량
	* top은 proc에서 일정 주기로 합산해 cpu 사용율 출력

* VIRT, RES, SHR : 메모리 사용량 => 누수 check 가능

**Memory Commit**
* 프로세스가 커널에게 필요한 메모리를**요청**하면 커널은 프로세스에 메모리 영역을**주고**실제로 할당은 하지 않지만 해당 영역을 프로세스에게 주었다는 것을**저장**해둠
* 이런 과정을 Memory commit이라 부름
* 왜 커널은 프로세스의 메모리 요청에 따라 즉시 할당하지 않고 Memory Commit과 같은 기술을 사용해 요청을 지연시킬까?
	* fork()와 같은 새로운 프로세스를 만들기 위한 콜을 처리해야 하기 때문
	* fork() 시스템 콜을 사용하면 커널은 실행중인 프로세스와 똑같은 프로세스를 하나 더 만들고, exec() 시스템 콜을 통해 다른 프로세스로 변함. 이 때 확보한 메모리가 쓸모 없어질 수 있음
	* COW(Copy-On-Write) 기법을 통해 복사된 메모리 영역에 실제 쓰기 작업이 발생한 후 실질적인 메모리 할당을 진행
**프로세스 상태**
* 참고글 : [Load Average에 관하여](https://lunatine.net/2016/02/19/about-load-average/) 
* SHR 옆에 있는 S 항목으로 볼 수 있음
	* D : Uninterruptiable sleep. 디스크 혹은 네트워크 I/O를 대기
	* R : 실행 중(CPU 자원을 소모)
	* S : Sleeping 상태, 요청한 리소스를 즉시 사용 가능
	* T : Traced or Stopped. 보통의 시스템에서 자주 볼 수 없는 상태
	* Z : zombie. 부모 프로세스가 죽은 자식 프로세스

```
top -b -n2 -p 1 | fgrep "Cpu(s)" | tail -1 | awk -F'id,' -v prefix="$prefix" '{ split($1, vs, ","); v=vs[length(vs)]; sub("%", "", v); printf "%s%.f%n", prefix, 100 - v }' 
```


